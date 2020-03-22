o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 200
f.CenterControl()

f.TextOut(10,10,"Note. Themes must be enabled")
Edit = f.CreateEdit(10,30,480,25)

f.Show()

BalloonTip = Edit.BalloonTip
BalloonTip.Title = "Text"
BalloonTip.Text = "Enter text where"
BalloonTip.Icon = 4
BalloonTip.Visible = true

Button = f.CreateButton(10,120,75,25,"Close")
Button.OnClick = CloseFormHandler


o.Run()

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}
