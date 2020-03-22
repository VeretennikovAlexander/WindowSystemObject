o = new ActiveXObject("Scripting.WindowSystemObject")
ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")

iconBuilder = ext.CreateIconBuilder()

iconBuilder.Add(StartupDir()+"Image1.bmp",true,24,24)
iconBuilder.Cursor = true

f = o.CreateForm(10,10,350,150)

try
{
	iconBuilder.Save(StartupDir()+"Image1.cur")
}
catch(e)
{
	f.MessageBox("Cannot create cursor, access denied")
}


f.Cursor = StartupDir()+"Image1.cur"

f.Show()

f.CenterControl()

o.Run()

function StartupDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("\\")+1); return s; }
