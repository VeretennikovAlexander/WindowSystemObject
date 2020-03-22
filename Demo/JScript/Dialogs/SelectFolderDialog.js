//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2006

function ExtractFilePath(s){ return s.substring(0,s.lastIndexOf("\\")+1); }
function CurrentDir() { return ExtractFilePath(WScript.ScriptFullName) }
function DPath(s) { if (s.charAt(s.length-1)=='\\') return s.substring(0,s.length-1); else return s; }

o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.Show()

d = f.CreateSelectFolderDialog()
d.Flags = o.Translate("BIF_DEFAULT | BIF_STATUSTEXT | BIF_NEWDIALOGSTYLE | BIF_EDITBOX")
d.Value = CurrentDir()
d.Root = ExtractFilePath(DPath(CurrentDir()))
d.OnChange = OnChange
d.Text = "WSO SelectFolderDialog Sample"
d.StatusText = "Status Text"
d.Title = "Select folder"
d.Execute()

function OnChange()
{
	d.StatusText = "Selected: "+d.Value
//	if (f.MessageBox("Close Dialog?","Close method test",o.Translate("MB_OKCANCEL")) == o.Translate("IDOK"))
//		d.Close()	
}

if (d.Value == "")
	f.MessageBox("No folder selected"); else
	f.MessageBox("Selected folder "+d.Value)

o.Run()
