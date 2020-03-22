//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004 

o = new ActiveXObject("Scripting.WindowSystemObject");

var f = o.CreateForm(0,0,0,0);

f.ClientWidth = 600;
f.ClientHeight = 400;
f.CenterControl();

f.TextOut(10,10,"This sample shows how to create 1st level event handler in JScript");
f.TextOut(10,30,"(see \"Event Handling\" in WSO.CHM).");
f.TextOut(10,50,"In this sample we create a handler of the button OnClick event");

b = f.CreateButton(10,100,75,25,"Button");

WScript.ConnectObject(b,"ButtonEvents_");

function ButtonEvents_OnClick(Sender)
{
	f.MessageBox("Button OnClick Event Handler");
}

f.TextOut(150,80,"Program text:");
Edit = f.CreateEdit(150,100,420,280,o.Translate("ES_MULTILINE | ES_READONLY"));
Edit.ScrollBars = o.Translate("SS_BOTH");
fs = new ActiveXObject("Scripting.FileSystemObject");
file = fs.OpenTextFile(WScript.ScriptFullName,1,false);
WScript.Interactive = false;
Edit.Text = file.ReadAll();
WScript.Interactive = true;

f.Show();

o.Run();