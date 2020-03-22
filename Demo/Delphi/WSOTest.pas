//WindowSystemObject (WSO) example
//Copyright (C) Veretennikov A. B. 2004

unit WSOTest;

interface

procedure AboutWSO(Sender:OleVariant; const s:String);

implementation

uses
  Windows,
  SysUtils,
  WSO,
  WSOConsts,
  ShellApi;

procedure CloseFormHandler(Sender:OleVariant);
begin
	Sender.Form.Close;
end;

procedure OnHitTest(Sender,x,y,ResultPtr:OleVariant);
begin
	ResultPtr.put(HTCAPTION);
end;

function StartupDir:String;
begin
  Result := ExtractFilePath(ParamStr(0));
end;

procedure WSOHelp(Sender:OleVariant);
begin
  ShellExecute(0,nil,PChar(StartupDir() + '..\..\..\wso.chm'),'','',SW_SHOW);
end;

procedure AboutWSO(Sender:OleVariant; const s:String);
Var
	j,t:OleVariant;
begin
	j := Sender.Form.CreateDialogForm(0,0,0,0);
	j.ClientWidth := 400;
	j.ClientHeight := 250;
	j.CenterControl;
	t := j.Rectangle(0,0,0,75);
  t.Brush.Color := $00FFA0A0;
  t.Brush.Style := B_GRADIENT or DIRECTION_TOP_BOTTOM;
  t.Brush.GradientColor := $00FFEEEE;
  t.Pen.Color := $00FF5555;
	t.Align := AL_TOP;

	t := j.Rectangle(0,0,0,0);
  t.Brush.Color := $00FFEEEE;
  t.Brush.Style := B_GRADIENT or DIRECTION_TOP_BOTTOM;
  t.Brush.GradientColor := $00FFEEEE;
  t.Pen.Color := $00FF5555;
  t.Align := AL_CLIENT;

	t := j.CreateButton(220,220,75,25,'Close');
	t.OnClick := TEventHandler.Create(CloseFormHandler);
	t.Default := true;
	t.Cancel := true;
	t := j.CreateButton(300,220,75,25,'Help');
	t.OnClick := TEventHandler.Create(WSOHelp);
	j.HelpButton := t;
	t := j.TextOut(100,10,j.Root.Version.String);
	t := t.Font;
	t.Bold := true;
	t.Name := 'Arial Black';
	t.Size := 14;
	t.Color := $000000FF;
	t.Bold := true;
	t.Italic := true;
	t.Angle := 5;
	j.DrawImage(40,10,32,32,StartupDir()+'..\..\Data\WSO.ICO');
	j.TextOut(100,50,s).Font.Bold := true;
	j.TextOut(100,90,'(C) Veretennikov A. B. 2004 - 2006');
	j.CreateHyperLink(100,130,200,25,j.Root.Version.Url,'WSO in the Web');
	j.Color := $00FFEEEE;
	if j.Root.Version.Trial then
	j.TextOut(100,170,'It is a Demo version of WSO'#13'with several serious limitations.'#13'Try it and buy the full version.');
	j.Text := 'About WSO';
	j.OnHitTest := TEventHandler.Create(OnHitTest);
	j.ShowModal;
	j.Destroy;
end;

end.
