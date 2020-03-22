o = new ActiveXObject("Scripting.WindowSystemObject")
ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")

iconBuilder = ext.CreateIconBuilder()

iconBuilder.Add(StartupDir()+"Image.bmp",true,24,24)
iconBuilder.Cursor = true

f = o.CreateForm(10,10,350,150)

try
{
	iconBuilder.Save(StartupDir()+"Image.cur")
}
catch(e)
{
	f.MessageBox("Cannot create cursor, access denied")
}


f.Cursor = StartupDir()+"Image.cur"

CircleRadius = 5
Circle = f.Circle(10,10,CircleRadius)
Circle.Cursor = o.Translate("IDC_PARENT")

f.OnMouseMove = function(Sender,x,y)
{
	Circle.SetBounds(x - CircleRadius,y - CircleRadius)
}

f.Show()

f.CenterControl()

o.Run()

function StartupDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("\\")+1); return s; }
