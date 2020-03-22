o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.Text = "WSO"
f.ClientWidth = 200
f.ClientHeight = 100
f.CenterControl()

Tabs = f.CreateTabControl(0,0,0,0)
Tabs.Align = o.Translate("AL_CLIENT")
Tabs.CreateTab("Tab1")
Tabs.CreateTab("Tab2")
Tabs.CreateTab("Tab3")

f.Show()

o.Run()

