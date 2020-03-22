o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.Text = "WSO"
f.ClientWidth = 350
f.ClientHeight = 100
f.CenterControl()

Tabs = f.CreateTabControl(0,0,0,0)
Tabs.Align = o.Translate("AL_CLIENT")

Tabs.Images.Width = 32
Tabs.Images.Height = 32

function AddImage(s)
{
	Image = o.LoadSysIcon(o.Translate(s))
	Tabs.Images.Add(Image)
}

AddImage("OIC_INFORMATION")
AddImage("OIC_ERROR")
AddImage("OIC_QUES")

Tabs.CreateTab("Tab1").ImageIndex = 0
Tabs.CreateTab("Tab2").ImageIndex = 1
Tabs.CreateTab("Tab3").ImageIndex = 2

Tabs.TabHeight = 35

f.Show()

o.Run()

