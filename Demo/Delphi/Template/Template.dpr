program Template;

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

Var
f,o:OleVariant;

begin
SetErrorMode(SEM_FAILCRITICALERRORS or SEM_NOGPFAULTERRORBOX or SEM_NOOPENFILEERRORBOX);

CoInitialize(nil);

o:=CreateOleObject('Scripting.WindowSystemObject');

f := o.CreateForm(0,0,0,0);
f.ClientWidth := 500;
f.ClientHeight := 300;
f.CenterControl;

f.Show;
o.Run;

o := Unassigned;
f := Unassigned;

CoUninitialize;
end.
