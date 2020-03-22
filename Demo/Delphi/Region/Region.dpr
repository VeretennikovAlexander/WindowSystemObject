//WindowSystemObject (WSO) example
//Copyright (C) Veretennikov A. B. 2004

program Region;

uses
  Windows,
  ComObj,
  ActiveX,
  SysUtils,
  WSO,
  WSOConsts,
  Variants;

{$R XP.RES}

{$R *.RES}

procedure CloseFormHandler(Sender:OleVariant);
begin
	Sender.Form.Close;
end;

Var
timer,text,j,r,h,x,f,o:OleVariant;

procedure TimerExecute(Sender:OleVariant);
begin
  text.Text := DateTimeToStr(Date+Time);
end;

procedure OnHitTest(const Arguments:array of OleVariant);
begin
  Arguments[3].put(HTCAPTION);
end;

begin
SetErrorMode(SEM_FAILCRITICALERRORS or SEM_NOGPFAULTERRORBOX or SEM_NOOPENFILEERRORBOX);

CoInitialize(nil);

o := CreateOleObject('Scripting.WindowSystemObject');
r := o.Regions;

f := o.CreateForm(0,0,0,0);
f.SizeGrip := false;
f.Caption := false;
f.MaximizeBox := false;
f.Text := 'Region Demo';
f.ClientWidth := 300;
f.ClientHeight := 200;
f.CenterControl;

x := f.CreateButton(120,90,75,25,'Close');
x.Default := true;
x.Cancel := true;
x.OnClick := TEventHandler.Create(CloseFormHandler);

h := r.CreateEllipticRgn(20,20,260,160);
h := r.CombineRgn(h,r.CreateEllipticRgn(30,30,240,140),RGN_DIFF);
j := r.CreatePolygonRgn(150,0,220,200,0,60,300,60,80,200,WINDING);
h := r.CombineRgn(h,j,RGN_OR);

f.Region := h;

f.Brush.Color := $00FF0000;
f.DrawRegion(0,0,h);

text := f.TextOut(40,70,'');
text.Font.Bold := true;
text.Font.Color := $00FFFFFF;

timer := o.CreateTimer;
timer.Interval := 100;
timer.Active := true;
timer.OnExecute := TEventHandler.Create(TimerExecute);

f.OnHitTest := TEventHandler.Create(OnHitTest);

f.Show;
o.Run;

timer := UnAssigned;
text := UnAssigned;
j := UnAssigned;
r := UnAssigned;
h := UnAssigned;
x := UnAssigned;
o := Unassigned;
f := Unassigned;

CoUninitialize;
end.
