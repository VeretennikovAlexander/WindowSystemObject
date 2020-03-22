//WindowSystemObject (WSO) example
//Copyright (C) Veretennikov A. B. 2004

program ImgView;

uses
Windows,
ComObj,
ActiveX,
SysUtils,
WSO,
WSOConsts,
WSOTest,
Variants;

{$R XP.RES}

{$R *.RES}

Var
	x,t,z,Invert,image,f,o:OleVariant;

procedure CloseFormHandler(Sender:OleVariant);
begin
	Sender.Form.Close;
end;

procedure FileOpen(Sender:OleVariant);
Var
	s:String;
begin
	s := f.OpenDialog('','All Images (*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif)|*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif|Bitmap Files (*.bmp)|*.bmp|Metafiles (*.wmf;*.emf)|*.wmf;*.emf|Jpeg Images (*.jpg;*.jpeg)|*.jpg;*.jpeg|Icons (*.ico)|*.ico|Gif Images (*.gif)|*.gif');
	if s<>'' then
	begin
		if not VarIsNull(image) then image.Destroy;
		Invert.Checked := false;
		image := z.DrawImage(0,0,0,0,s);
		if (image.Width>0) and (image.Height>0) then
		begin
			f.StatusBar.item[0].Text := s;
			f.StatusBar.item[1].Text := IntToStr(image.Width)+' x '+IntToStr(image.Height);
		end else
		begin
			f.StatusBar.item[0].Text := '';
			f.StatusBar.item[1].Text := '';
			f.MessageBox('Cannot open image','',MB_ICONHAND);
		end;
	end;
end;

procedure ImageHandlerUpdate(Sender:OleVariant);
begin
	Sender.Enabled := not VarIsNull(image);
end;

procedure InvertExecute(Sender:OleVariant);
begin
	if Invert.Checked then
	image.CopyMode := NOTSRCCOPY else
	image.CopyMode := SRCCOPY;
end;

procedure CloseExecute(Sender:OleVariant);
begin
	image.Destroy;
	image := Null;
	f.StatusBar.item[0].Text := '';
	f.StatusBar.item[1].Text := '';
end;

procedure HelpAbout(Sender:OleVariant);
begin
	AboutWSO(Sender,'Image Viewer Demo');
end;

begin
	SetErrorMode(SEM_FAILCRITICALERRORS or SEM_NOGPFAULTERRORBOX or SEM_NOOPENFILEERRORBOX);
	
	CoInitialize(nil);
	
	o:=CreateOleObject('Scripting.WindowSystemObject');
	
	f := o.CreateForm(0,0,0,0);
	f.Text := 'Image Viewer';
	f.ClientWidth := 600;
	f.ClientHeight := 260;
	f.CenterControl;
	
	z := f.CreateFrame(0,0,0,0);
	z.Align := AL_CLIENT;
	z.AutoScroll := true;
	z.Border := true;
	
	f.CreateStatusBar.Name := 'StatusBar';
	f.StatusBar.Add(100).AutoSize := true;
	f.StatusBar.Add(100).AutoSize := true;
	image := Null;
	
	t := f.Menu.Add('File');
	t.Add('Open','CTRL+O').OnExecute := TEventHandler.Create(FileOpen);
	x := t.Add('Close');
	x.OnExecute := TEventHandler.Create(CloseExecute);
	x.OnUpdate := TEventHandler.Create(ImageHandlerUpdate);
	
	t.NewLine;
	t.Add('Exit','ESC').OnExecute := TEventHandler.Create(CloseFormHandler);
	
	t := f.Menu.Add('View');
	Invert := t.Add('Invert');
	Invert.CheckBox := true;
	Invert.OnExecute := TEventHandler.Create(InvertExecute);
	Invert.OnUpdate := TEventHandler.Create(ImageHandlerUpdate);
	
	t := f.Menu.Add('Help');
	t.Add('About','F1').OnExecute := TEventHandler.Create(HelpAbout);
	
	f.Show;
	o.Run;
	
	// Free global OleVariants.
	o := Unassigned;
	f := Unassigned;
	x := Unassigned;
	t := Unassigned;
	z := Unassigned;
	Invert := Unassigned;
	image := Unassigned;
	
	CoUnInitialize;
end.
