o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.Text = "WSO"
f.ClientWidth = 400
f.ClientHeight = 100
f.CenterControl()

hotKey = f.CreateHotKey(10,10,200,25)
hotKey.Key = o.Translate("VK_F1 | KB_ALT")
hotKey.OnChange = function(){
	var Key = hotKey.Key
	var S = ""
	var Flags = o.Translate("KB_CTRL | KB_ALT | KB_SHIFT")
	S = Key &~ Flags
	if (Key & o.Translate("KB_CTRL")) S += ", Ctrl"
	if (Key & o.Translate("KB_ALT")) S += ", Alt"
	if (Key & o.Translate("KB_SHIFT")) S += ", Shift"
	f.Text = Key + " (" + S +")"
}

f.Show()

o.Run()

