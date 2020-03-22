o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()
f.Text = "Web Browser"

t = f.Menu.Add("File")
t.Add("Exit","ESC").OnExecute = CloseFormHandler

Browser = f.CreateActiveXControl(0,0,0,0,"{8856F961-340A-11D0-A96B-00C04FD705A2}")
Browser.Align = o.Translate("AL_CLIENT")


f.Show()

Browser.Control.Navigate(StartupDir() + "ActiveXNoContextMenu.js.htm")

Browser.ExtendedProperties.AllowRightButtonDown = false
Browser.ExtendedProperties.AllowRightButtonDoubleClick = false


o.Run()


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}


function StartupDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("\\")+1); return s; }

