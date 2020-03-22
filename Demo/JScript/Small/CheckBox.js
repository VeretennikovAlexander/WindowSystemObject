o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.TextOut(10,10,"CheckBox link button example")

Tabs = f.CreateTabControl(0,0,0,0)
Tabs.Align = o.Translate("AL_CLIENT")
Page = Tabs.CreateTab("Page 1")
Page.CreateCheckBox(10,10,100,25,"CheckBox 1")
Page.CreateCheckBox(10,40,100,25,"CheckBox 2")

f.Show()

o.Run()


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}
