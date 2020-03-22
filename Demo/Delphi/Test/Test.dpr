//WindowSystemObject (WSO) example
//Copyright (C) Veretennikov A. B. 2004

program Test;

uses
Windows,
ComObj,
ActiveX,
SysUtils,
WSO,
WSOTest,
Variants;

{$R XP.RES}

{$R *.RES}

Var
	t,f,o:OleVariant;

procedure CloseFormHandler(Sender:OleVariant);
begin
	Sender.Form.Close;
end;

procedure ButtonClick(Sender:OleVariant);
begin
	f.MessageBox('Button '+Sender.Text+': OnClick');
end;

procedure FormMouseLeave(Sender:OleVariant);
begin
	f.StatusBar.Text := 'No Mouse in Control';
end;

procedure FormMouseMove(Sender,X,Y,Flags:OleVariant);
begin
	f.StatusBar.Text:=IntToStr(X)+' x '+IntToStr(Y);
end;

procedure FormMouseDown(Sender,X,Y,Button,Flags:OleVariant);
begin
	f.MessageBox(IntToStr(X)+' x '+IntToStr(Y)+', Button: '+IntToStr(Button));
end;

procedure FormKeyDown(Sender,Key,Flags:OleVariant);
begin
	if (Key<>27) and (Key<>112) then f.MessageBox('OnKeyDown, Key = '+IntToStr(Key));
end;

procedure HelpAbout(Sender:OleVariant);
begin
	AboutWSO(Sender,'Event Handler Sample');
end;

Var
	CanClose:Boolean;

procedure OKResult(sender:OleVariant);
begin
	CanClose := true;
	sender.Form.Close;
end;

procedure FormCloseQuery(Sender,ResultPtr:OleVariant);
var
	j,x:OleVariant;
begin
	CanClose := false;
	j := f.CreateDialogForm(0,0,510,100);
	j.CenterControl;
	j.TextOut(10,10,'Do you really want to quit this program?');
	x := j.CreateButton(10,30,75,25,'Yes');
	x.OnClick := TEventHandler.Create(OKResult);
	x.Default := true;
	x := j.CreateButton(90,30,75,25,'No');
	x.OnClick := TEventHandler.Create(CloseFormHandler);
	x.Cancel := true;
	x := j.CreateButton(170,30,75,25,'Help');
	x.OnClick := TEventHandler.Create(HelpAbout);
	j.HelpButton := x;
	j.Color := $FF00FF;
	j.ShowModal;
	j.Destroy;
	ResultPtr.Put(CanClose);
end;

begin
	CoInitialize(nil);
	SetErrorMode(SEM_FAILCRITICALERRORS or SEM_NOGPFAULTERRORBOX or SEM_NOOPENFILEERRORBOX);
	
	o:=CreateOleObject('Scripting.WindowSystemObject');
	
	f:=o.CreateForm(100,100,600,400);
  f.CenterControl;
	
	t:=f.Menu.Add('File');
	t.Add('Exit',27).OnExecute := TEventHandler.Create(CloseFormHandler);
	t:=f.Menu.Add('Help');
	t.Add('About','F1').OnExecute := TEventHandler.Create(HelpAbout);
	
	f.CreateButton(10,10,75,25,'Demo').OnClick := TEventHandler.Create(ButtonClick);
	f.CreateButton(100,10,75,25,'Close').OnClick := TEventHandler.Create(CloseFormHandler);
	f.OnMouseMove := TEventHandler.Create(FormMouseMove);
	f.OnMouseUp := TEventHandler.Create(FormMouseDown);
	f.OnMouseLeave := TEventHandler.Create(FormMouseLeave);
	f.OnKeyDown := TEventHandler.Create(FormKeyDown);
	f.OnCloseQuery := TEventHandler.Create(FormCloseQuery);
	
	t := f.TextOut(10,60,'WindowSystemObject');
	t.Font.Size := 16;
	t.Color := 255;
	t.Font.Bold := true;
	
	f.CreateStatusBar.Name := 'StatusBar';
	f.StatusBar.Add(100).AutoSize:=true;
	
	f.TextOut(10,100,
	'This sample shows how to handle events from WindowsSystemObject using Delphi.'#13#13+
	'Clicking any mouse button invokes OnMouseUp event handler.'#13#13+
	'Moving mouse inside this window invokes OnMouseMove event handler.'#13#13+
	'(The current mouse position is displayed in the status bar)'#13#13+
	'Moving mouse outside this window invokes OnMouseLeave event handler.'#13#13+
	'Clicking Demo or Close buttons invokes OnClick event handler.'#13#13+
	'Pressing any key invokes OnKeyDown event handler.'#13#13+
	'Try to close this window to invoke OnCloseQuery event.');
	
	f.Show;
	
	o.Run;
	
	// Free global OleVariants.
	o := Unassigned;
	t := Unassigned;
	f := Unassigned;
	
	CoUnInitialize;
end.
