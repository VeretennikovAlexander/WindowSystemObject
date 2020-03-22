//WindowSystemObject (WSO) example
//Copyright (C) Veretennikov A. B. 2004

program MTEdit;

uses
Windows,
ComObj,
ActiveX,
Messages,
SysUtils,
Variants,
WSO,
WSOConsts,
WSOTest;

{$R XP.res}

{$R *.RES}

type
TThreadManager = class
private
	m_dwCount:DWORD;
	m_arrThreadHandles: Array [0..MAXIMUM_WAIT_OBJECTS - 1] of THANDLE;
public
	function AddThread:DWORD;
	procedure RemoveThread(dwIndex:DWORD);
	constructor Create;
	function Run:DWORD;
end;

Var
	T:TThreadManager;

constructor TThreadManager.Create;
begin
	inherited;
	m_dwCount:=0;
end;

threadvar
	Edit:OleVariant;
	Form:OleVariant;

procedure FileNew(Sender:OleVariant);
begin
	T.AddThread;
end;

procedure CloseForm(Sender:OleVariant);
begin
	Form.Close;
end;

procedure FormCloseQuery(Sender,ResultPtr:OleVariant);
begin
	ResultPtr.Put(Form.MessageBox('Do you really want to quit this program?','',MB_OKCANCEL) = ID_OK);
end;

procedure CloseFormHandler(Sender:OleVariant);
begin
	Sender.Form.Close;
end;

procedure HelpAbout(Sender:OleVariant);
begin
	AboutWSO(Sender,'Delphi MultiThreaded TextEditor Demo');
end;

procedure FileOpen(Sender:OleVariant);
Var
	st:String;
	a:TextFile;
begin
	st := Form.OpenDialog('','Text Files (*.txt)|*.txt');
	if st<>'' then
	begin
		AssignFile(a,st);
		Reset(a);
		try
			Edit.Clear;
      Edit.BeginUpdate;

			while not eof(a) do
			begin
				ReadLn(a,st);
				Edit.Add(st);
			end;

		finally
			CloseFile(a);
      Edit.EndUpdate;
		end;
	end;
end;

procedure FileSaveAs(Sender:OleVariant);
Var
	st:String;
	a:TextFile;
	P:Integer;
begin
	st := Form.SaveDialog('','Text Files (*.txt)|*.txt');
	if st<>'' then
	begin
		AssignFile(a,st);
		Rewrite(a);
		try
			
			For P:=0 to Edit.Count-1 do Writeln(a,Edit.Item[P]);
			
		finally
			CloseFile(a);
		end;
	end;
end;

procedure EditUndoUpdate(Sender:OleVariant);
begin
	Sender.Enabled := Edit.CanUndo;
end;

procedure EditPasteUpdate(Sender:OleVariant);
begin
	Sender.Enabled := Edit.CanPaste;
end;

procedure EditCutCopyUpdate(Sender:OleVariant);
begin
	Sender.Enabled := Edit.SelStart<>Edit.SelEnd;
end;

procedure EditUndo(Sender:OleVariant);
begin
	Edit.Undo;
end;

procedure EditCut(Sender:OleVariant);
begin
	Edit.Cut;
end;

procedure EditCopy(Sender:OleVariant);
begin
	Edit.Copy;
end;

procedure EditPaste(Sender:OleVariant);
begin
	Edit.Paste;
end;

procedure EditSelectAll(Sender:OleVariant);
begin
	Edit.SelectAll;
end;

procedure EditWordWrapExecute(Sender:OleVariant);
begin
	Edit.WordWrap := Sender.Checked;
end;

procedure EditWordWrapUpdate(Sender:OleVariant);
begin
	Sender.Checked := Edit.WordWrap;
end;

procedure FormatFont(Sender:OleVariant);
begin
	Edit.Font:=Form.FontDialog(Edit.Font);
end;

function RunThread(lpParameter:Pointer):DWORD; stdcall;
var
	j,t,o:OleVariant;
begin
	CoInitialize(nil);
	
	Result:=0;
	try
		o:=CreateOleObject('Scripting.WindowSystemObject');
		Form:=o.CreateForm(100,100,600,400);
		Form.Text := 'Test Editor';
		
		t := Form.Menu.Add('File');
		t.Add('New Window','CTRL+N').OnExecute := TEventHandler.Create(FileNew);
		t.NewLine;
		t.Add('Open','CTRL+O').OnExecute := TEventHandler.Create(FileOpen);
		t.Add('Save as ...','CTRL+S').OnExecute := TEventHandler.Create(FileSaveAs);
		t.NewLine;
		t.Add('Exit',27).OnExecute:=TEventHandler.Create(CloseFormHandler);
		
		t := Form.Menu.Add('Edit');
		
		j := t.Add('Undo');
		j.OnExecute := TEventHandler.Create(EditUndo);
		j.OnUpdate := TEventHandler.Create(EditUndoUpdate);
		
		t.NewLine;
		
		j := t.Add('Cut');
		j.OnExecute := TEventHandler.Create(EditCut);
		j.OnUpdate := TEventHandler.Create(EditCutCopyUpdate);
		
		j := t.Add('Copy');
		j.OnExecute := TEventHandler.Create(EditCopy);
		j.OnUpdate := TEventHandler.Create(EditCutCopyUpdate);
		
		j := t.Add('Paste');
		j.OnExecute := TEventHandler.Create(EditPaste);
		j.OnUpdate := TEventHandler.Create(EditPasteUpdate);
		
		t.NewLine;
		t.Add('Select All').OnExecute := TEventHandler.Create(EditSelectAll);
		
		t := Form.Menu.Add('Format');
		j := t.Add('Word Wrap');
		j.CheckBox := true;
		j.OnExecute := TEventHandler.Create(EditWordWrapExecute);
		j.OnUpdate := TEventHandler.Create(EditWordWrapUpdate);
		t.NewLine;
		t.Add('Font').OnExecute:=TEventHandler.Create(FormatFont);
		
		t := Form.Menu.Add('Help');
		t.Add('About','F1').OnExecute := TEventHandler.Create(HelpAbout);
		
		Form.OnCloseQuery := TEventHandler.Create(FormCloseQuery);
		
		Edit := Form.CreateEdit(0,0,0,0);
		Edit.HideSelection := false;
		Edit.MultiLine := true;
		Edit.Align := AL_CLIENT;
    Edit.ScrollBars := SS_BOTH;
		
		Form.CreateStatusBar.Name := 'StatusBar';
		Form.StatusBar.Add(100);
		
		Form.Show;
		o.Run;
	except
		on E:Exception do MessageBox(0,PChar(E.Message),'',MB_OK);
	end;
	
	// Free global OleVariants.
	Edit := Unassigned;
	Form := Unassigned;
	
	CoUninitialize();
end;

function TThreadManager.AddThread;
Var
	dwThreadID:DWORD;
	hThread:THANDLE;
begin
	Result:=0;
	
	if m_dwCount = MAXIMUM_WAIT_OBJECTS - 1 then
	begin
		MessageBox(0, 'ERROR: Cannot create ANY MORE threads!!!','', MB_OK);
		exit;
	end;
	
	hThread := CreateThread(nil, 0, @RunThread, nil, 0, dwThreadID);
	if hThread = 0 then
	begin
		MessageBox(0, 'Cannot create thread!!!', '', MB_OK);
		exit;
	end;
	
	m_arrThreadHandles[m_dwCount] := hThread;
	inc(m_dwCount);
	Result:=dwThreadID;
end;

procedure TThreadManager.RemoveThread(dwIndex:DWORD);
begin
	CloseHandle(m_arrThreadHandles[dwIndex]);
	if dwIndex <> m_dwCount - 1 then
	m_arrThreadHandles[dwIndex] := m_arrThreadHandles[m_dwCount - 1];
	Dec(m_dwCount);
end;

function TThreadManager.Run;
Var
	nRet:Integer;
	dwRet:DWORD;
	A:MSG;
begin
	AddThread;
	nRet := m_dwCount;
	while m_dwCount > 0 do
	begin
		dwRet := MsgWaitForMultipleObjects(m_dwCount, m_arrThreadHandles, FALSE, INFINITE, QS_ALLINPUT);
		
		if dwRet = $FFFFFFFF then
		MessageBox(0, 'Wait for multiple objects failed!!!', '', MB_OK)
		else if (dwRet >= WAIT_OBJECT_0) and (dwRet <= (WAIT_OBJECT_0 + m_dwCount - 1)) then
		RemoveThread(dwRet - WAIT_OBJECT_0)
		else if dwRet = WAIT_OBJECT_0 + m_dwCount then
		begin
			GetMessage(A, 0, 0, 0);
			if A.message = WM_USER then
			AddThread
			else
			MessageBeep(UINT(-1));
		end
		else
		MessageBeep(UINT(-1));
	end;
	
	Result:=nRet;
end;

begin
	CoInitialize(nil);
	
	T:=TThreadManager.Create;
	T.Run;
	T.Free;
	
	CoUnInitialize;
end.


