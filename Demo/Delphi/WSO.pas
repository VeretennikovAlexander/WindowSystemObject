//WindowSystemObject (WSO) Code For Delphi
//Copyright (C) Veretennikov A. B. 2004

unit WSO;

interface

Uses ActiveX,SysUtils,Windows,WSOConsts;

type
TWSOOnEvent = procedure(Sender:OleVariant);
TWSOOnClick = TWSOOnEvent;
TWSOOnMouseMove = procedure(Sender,X,Y,Flags:OleVariant);
TWSOOnMouseEvent = procedure(Sender,X,Y,Button,Flags:OleVariant);
TWSOOnMouseDown = TWSOOnMouseEvent;
TWSOOnMouseUp = TWSOOnMouseEvent;
TWSOOnDblClick = TWSOOnMouseEvent;
TWSOOnKey = procedure(Sender,Key,Flags:OleVariant);
TWSOOnCloseQuery = procedure(Sender,ResultPtr:OleVariant);
TWSOCommonEvent = procedure(const Arguments:array of OleVariant);

//This is a implementation of ECMA 262 Standard Function (CALL Method Only)

type
TEventHandler = class(TInterfacedObject,IUnknown,IDispatch)
private
  Event:Byte;
  Proc:Pointer;
  Constructor Create; overload;
public
    function GetTypeInfoCount(out Count: Integer): HResult; stdcall;
    function GetTypeInfo(Index, LocaleID: Integer; out TypeInfo): HResult; stdcall;
    function GetIDsOfNames(const IID: TGUID; Names: Pointer;
      NameCount, LocaleID: Integer; DispIDs: Pointer): HResult; stdcall;
    function Invoke(DispID: Integer; const IID: TGUID; LocaleID: Integer;
      Flags: Word; var Params; VarResult, ExcepInfo, ArgErr: Pointer): HResult; stdcall;
public
class Function Create(P:TWSOOnEvent):IUnknown; overload;
class Function Create(P:TWSOOnMouseMove):IUnknown; overload;
class Function Create(P:TWSOOnMouseEvent):IUnknown; overload;
class Function Create(P:TWSOOnKey):IUnknown; overload;
class Function Create(P:TWSOOnCloseQuery):IUnknown; overload;
class Function Create(P:TWSOCommonEvent):IUnknown; overload;
end;

implementation

function TEventHandler.GetTypeInfoCount(out Count: Integer): HResult; stdcall;
begin
  Result := E_NOTIMPL;
end;

function TEventHandler.GetTypeInfo(Index, LocaleID: Integer; out TypeInfo): HResult; stdcall;
begin
  Result := E_NOTIMPL;
end;

const DISPID_CALL = 1;

function TEventHandler.GetIDsOfNames(const IID: TGUID; Names: Pointer;
      NameCount, LocaleID: Integer; DispIDs: Pointer): HResult; stdcall;
type
  PNamesArray = ^TNamesArray;
  TNamesArray = array[0..0] of PWideChar;
Var
p:Integer;
s:PNamesArray absolute Names;
d:PDispIDList absolute DispIDs;
begin
Result:=S_OK;
for P:=0 to NameCount-1 do
if WideSameText(s[p],'call') then D[P]:=DISPID_CALL else
begin
D[P]:=DISPID_UNKNOWN;
Result:=DISP_E_UNKNOWNNAME;
end;
end;

const
EVENT_DEFAULT = 1;
EVENT_MOUSEMOVE = 2;
EVENT_MOUSE = 3;
EVENT_KEY = 4;
EVENT_CLOSEQUERY = 5;
EVENT_COMMON = 6;

function TEventHandler.Invoke(DispID: Integer; const IID: TGUID; LocaleID: Integer;
      Flags: Word; var Params; VarResult, ExcepInfo, ArgErr: Pointer): HResult; stdcall;
Var
Z:TDispParams absolute Params;
A:Array of OleVariant;
P:Integer;
begin
if DispID = DISPID_CALL then
begin
Z.cArgs := Z.cArgs-1;
try

case Event of
EVENT_COMMON:
begin
SetLength(A,Z.cArgs);
for P:=0 to Z.cArgs-1 do A[P]:=OleVariant(Z.rgvarg[Z.cArgs-P-1]);
TWSOCommonEvent(Proc)(A);
Finalize(A);
end;
EVENT_DEFAULT: TWSOOnEvent(Proc)(OleVariant(Z.rgvarg[0]));
EVENT_MOUSEMOVE:
if Z.cArgs>3 then
TWSOOnMouseMove(Proc)(OleVariant(Z.rgvarg[3]),OleVariant(Z.rgvarg[2]),OleVariant(Z.rgvarg[1]),OleVariant(Z.rgvarg[0]));
EVENT_MOUSE:
if Z.cArgs>4 then
TWSOOnMouseEvent(Proc)(OleVariant(Z.rgvarg[4]),OleVariant(Z.rgvarg[3]),OleVariant(Z.rgvarg[2]),OleVariant(Z.rgvarg[1]),OleVariant(Z.rgvarg[0]));
EVENT_KEY:
if Z.cArgs>2 then
TWSOOnKey(Proc)(OleVariant(Z.rgvarg[2]),OleVariant(Z.rgvarg[1]),OleVariant(Z.rgvarg[0]));
EVENT_CLOSEQUERY:
TWSOOnCloseQuery(Proc)(OleVariant(Z.rgvarg[1]),OleVariant(Z.rgvarg[0]));
end;

except
on E:Exception do MessageBox(0,PChar(E.Message),'',MB_ICONHAND or MB_TASKMODAL);
end;

Result:=S_OK;
end else Result:=DISP_E_MEMBERNOTFOUND;
end;

class function TEventHandler.Create(P:TWSOOnEvent):IUnknown;
Var
A:TEventHandler;
begin
A:=TEventHandler.Create;
A.Event:=EVENT_DEFAULT;
A.Proc:=@P;
Result:=A;
end;

class Function TEventHandler.Create(P:TWSOOnMouseMove):IUnknown;
Var
A:TEventHandler;
begin
A:=TEventHandler.Create;
A.Event:=EVENT_MOUSEMOVE;
A.Proc:=@P;
Result:=A;
end;

class Function TEventHandler.Create(P:TWSOOnMouseEvent):IUnknown;
Var
A:TEventHandler;
begin
A:=TEventHandler.Create;
A.Event:=EVENT_MOUSE;
A.Proc:=@P;
Result:=A;
end;

class Function TEventHandler.Create(P:TWSOOnKey):IUnknown;
Var
A:TEventHandler;
begin
A:=TEventHandler.Create;
A.Event:=EVENT_KEY;
A.Proc:=@P;
Result:=A;
end;

class Function TEventHandler.Create(P:TWSOOnCloseQuery):IUnknown;
Var
A:TEventHandler;
begin
A:=TEventHandler.Create;
A.Event:=EVENT_CLOSEQUERY;
A.Proc:=@P;
Result:=A;
end;

class Function TEventHandler.Create(P:TWSOCommonEvent):IUnknown;
Var
A:TEventHandler;
begin
A:=TEventHandler.Create;
A.Event:=EVENT_COMMON;
A.Proc:=@P;
Result:=A;
end;

constructor TEventHandler.Create;
begin
Inherited;
Event:=0;
end;

end.
