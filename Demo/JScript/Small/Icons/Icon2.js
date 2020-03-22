o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.Icon = o.LoadSysIcon(o.Translate("OIC_INFORMATION"))

icon = o.LoadSysIcon(o.Translate("OIC_INFORMATION"))

f.DrawImage(10,10,0,0,icon)

f.Show()

o.Run()
