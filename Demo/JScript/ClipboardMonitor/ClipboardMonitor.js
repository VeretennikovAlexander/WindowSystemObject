
o = new ActiveXObject("Scripting.WindowSystemObject")
x = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
fso = new ActiveXObject("Scripting.FileSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

Edit = f.CreateEdit(0,0,10,100,o.Translate("ES_MULTILINE"))
Edit.Align = o.Translate("AL_CLIENT")

Panel = f.CreateFrame(0,0,10,50)
Panel.Align = o.Translate("AL_BOTTOM")

InitDir()

Last = ""

Clipboard = x.CreateClipboard(true)
Clipboard.OnChange = ClipboardChange

with (Panel.CreateButton(10,10,75,25,"Clear"))
{
	OnClick = EmptyClipboard
}

with (Panel.CreateButton(100,10,75,25,"Copy from: "))
{
	OnClick = CopyToClipboard
}

Text = Panel.CreateEdit(200,10,100,25)

Edit.Text = Clipboard.Text

f.Show()

o.Run()


function ClipboardChange(Sender)
{
	Current = Clipboard.Text
	Edit.Text = Current
	if (Last != Current)
	{
		var T = new Date()
		var DateStr = new Number(T)
		var FileName = LogDir + "\\" + DateStr + ".txt"
		try {
		    var File = fso.CreateTextFile(FileName, true, true)
		    File.Write(Current)
		    File.Close()
		}
		catch (e) {
		    //Log does not saved.
		}
		Last = Current
	}
}

function EmptyClipboard(Sender)
{
	Clipboard.Empty()
}

function CopyToClipboard(Sender)
{
	Clipboard.Text = Text.Text
}

function CurrentDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("\\")+1); return s; }

function InitDir()
{
	LogDir = GetLogDir()
	if (!fso.FolderExists(LogDir)) {
	    try {
	        fso.CreateFolder(LogDir)
	    }
	    catch (e) {
	        //Will work without logs.
	    }
	}
}

function GetLogDir(){
	return CurrentDir() + "Logs"
}
