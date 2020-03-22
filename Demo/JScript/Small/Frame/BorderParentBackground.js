o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 200
f.CenterControl()

Tabs = f.CreateTabControl(0,0,0,100)
Tabs.Align = o.Translate("AL_TOP")

Frame = Tabs.CreateTab("Tab 1").CreateFrame(0,0,0,100)
Frame.Align = o.Translate("AL_CLIENT")
Frame.BorderWidth = 10
Frame.TextOut(0,0,"Note. Themes must be enabled")
Frame.Color = 0x00FF0000
Frame.BorderParentBackground=true
BorderParentBackgroundCheck = f.CreateCheckBox(10,110,150,25,"BorderParentBackground")
BorderParentBackgroundCheck.Checked = Frame.BorderParentBackground
BorderParentBackgroundCheck.OnChange = OnChecked

function OnChecked(Sender)
{
	Frame.BorderParentBackground = BorderParentBackgroundCheck.Checked
}

f.Show()


Button = f.CreateButton(170,120,75,25,"Close")
Button.OnClick = CloseFormHandler


o.Run()

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}
