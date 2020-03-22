o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 200
f.CenterControl()

f.TextOut(10,10,"Note. Themes must be enabled")

Edit = f.CreateComboBox(10,30,480,25)
Edit.CueBanner = "Enter text where"
Edit.CueBannerAlwaysVisible = true
for (i = 0; i<3; i++) Edit.Add("Item "+i)

Button = f.CreateButton(10,120,75,25,"Close")
Button.OnClick = CloseFormHandler

f.Show()

o.Run()

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}
