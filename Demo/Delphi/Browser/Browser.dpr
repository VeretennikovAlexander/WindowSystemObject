//WindowSystemObject (WSO) example
//Copyright (C) Veretennikov A. B. 2004

program Browser;

uses
  Windows,
  ComObj,
  ActiveX,
  SysUtils,
  WSO,
  WSOConsts,
  ShellApi,
  Variants,
  WSOTest;

{$R XP.RES}

{$R *.RES}

Var
	Path,StatusBar,vBrowser,f,o:OleVariant;

procedure CloseFormHandler(Sender:OleVariant);
begin
	Sender.Form.Close;
end;

procedure FileOpen(Sender:OleVariant);
Var
	s:String;
begin
	s := f.OpenDialog('','HTML Files (*.HTM;*.HTML)|*.HTM;*.HTML');
	if s<>'' then vBrowser.Control.Navigate(s);
end;

procedure HelpAbout(Sender:OleVariant);
begin
	AboutWSO(Sender,'Web Browser Sample');
end;

procedure PathKeyDown(Sender,Key,Flags:OleVariant);
begin
	if Key = 13 then vBrowser.Control.Navigate(Sender.Text);
end;

procedure GoBack(Sender:OleVariant);
begin
	try
		vBrowser.Control.GoBack;
	except
	end;
end;

procedure GoForward(Sender:OleVariant);
begin
	try
		vBrowser.Control.GoForward;
	except
	end;
end;

procedure GoStop(Sender:OleVariant);
begin
	vBrowser.Control.Stop;
end;

procedure Refresh(Sender:OleVariant);
begin
	try
		vBrowser.Control.Refresh;
	except
	end;
end;

procedure GoHome(Sender:OleVariant);
begin
	vBrowser.Control.GoHome;
end;

procedure GoSearch(Sender:OleVariant);
begin
	vBrowser.Control.GoSearch;
end;

procedure DownloadBegin(const Arguments:array of OleVariant);
begin
	StatusBar.Item[0].Text := 'Downloading';
end;

procedure DownloadComplete(const Arguments:array of OleVariant);
begin
	StatusBar.Item[0].Text := 'Complete';
end;

procedure TitleChange(const Arguments:array of OleVariant);
begin
	StatusBar.Item[1].Text := vBrowser.Control.LocationName;
	Path.Text := vBrowser.Control.LocationURL;
end;

procedure Main;
Var
	t,q,HelpItem,RefreshItem,StopItem,ForwardItem,HomeItem,BackItem,OpenItem,R,M,ToolBar:OleVariant;
begin
	SetErrorMode(SEM_FAILCRITICALERRORS or SEM_NOGPFAULTERRORBOX or SEM_NOOPENFILEERRORBOX);

	o:=CreateOleObject('Scripting.WindowSystemObject');

	f:=o.CreateForm(100,100,600,400);
	f.ClientWidth := 500;
	f.ClientHeight := 300;
	f.CenterControl;
	f.Text := 'Web Browser';

	R := f.CreateReBar(0,0,0,0);
	M := R.CreateMenuBar(0,0,0,25);
	t := M.Menu.Add('File');
	OpenItem := t.Add('Open','CTRL+O');
	OpenItem.OnExecute := TEventHandler.Create(FileOpen);

	t.Add('-');
	t.Add('Exit','ESC').OnExecute := TEventHandler.Create(CloseFormHandler);

	q := M.Menu.Add('View');
	t := q.Add('Go');

	BackItem := t.Add('Back','ALT+LEFT');
	BackItem.OnExecute := TEventHandler.Create(GoBack);

	ForwardItem := t.Add('Forward','ALT+RIGHT');
	ForwardItem.OnExecute := TEventHandler.Create(GoForward);

	t.NewLine;

	HomeItem := t.Add('Home','ALT+HOME');
	HomeItem.OnExecute := TEventHandler.Create(GoHome);

	StopItem := q.Add('Stop');
	StopItem.OnExecute := TEventHandler.Create(GoStop);

	RefreshItem := q.Add('Refresh','F5');
	RefreshItem.OnExecute := TEventHandler.Create(Refresh);

	t := M.Menu.Add('Help');
	HelpItem := t.Add('About','F1');
	HelpItem.OnExecute := TEventHandler.Create(HelpAbout);

	ToolBar := R.CreateToolBar(0,0,0,25);
	ToolBar.ShowText := true;
	ToolBar.Buttons.Add(BackItem);
	ToolBar.Buttons.Add(ForwardItem);
	ToolBar.Buttons.Add(StopItem);
	ToolBar.Buttons.Add(RefreshItem);
	ToolBar.Buttons.Add(HomeItem);
	ToolBar.Buttons.Add('Search').OnExecute := TEventHandler.Create(GoSearch);
	ToolBar.Buttons.Add(OpenItem);
	ToolBar.Buttons.Add('-');
	ToolBar.Buttons.Add(HelpItem);

	Path := R.CreateComboBox(0,0,100,25);
	R.Band[Path].Text := 'Address';
	Path.OnKeyDown := TEventHandler.Create(PathKeyDown);

	StatusBar := f.CreateStatusBar;
	StatusBar.Add(100).AutoSize := true;
	StatusBar.Add(100).AutoSize := true;

	vBrowser := f.CreateActiveXControl(0,0,0,0,'{8856F961-340A-11D0-A96B-00C04FD705A2}');
	vBrowser.Align := AL_CLIENT;
	vBrowser.Events.DownloadBegin := TEventHandler.Create(DownloadBegin);
	vBrowser.Events.DownloadComplete := TEventHandler.Create(DownloadComplete);
	vBrowser.Events.TitleChange := TEventHandler.Create(TitleChange);

	f.Show;
	o.Run;
end;

begin
	CoInitialize(nil);

	Main;

	// Free global OleVariants.
	Path := Unassigned;
	StatusBar := Unassigned;
	vBrowser := Unassigned;
	o := Unassigned;
	f := Unassigned;

	CoUnInitialize;
end.
