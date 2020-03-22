//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004 

o = WScript.CreateObject("Scripting.MessageDialog","o_");

o.FileName = WScript.ScriptFullName;
o.Caption = o.Caption+", "+WScript.ScriptFullName;
o.ShowModal();

function o_onhelp()
{
	WScript.Echo("Help Event Handler");
}