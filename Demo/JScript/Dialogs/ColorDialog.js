o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.CreateButton(10,10,75,25,"Color Dialog").OnClick = FontDialog
f.CreateButton(100,10,75,25,"Close").OnClick = CloseFormHandler

l = f.TextOut(10,50,"This is a text")
l.Font.Size = 20

function FontDialog()
{
	x = f.CreateColorDialog()
	x.Flags = o.Translate("CC_SHOWHELP | CC_DEFAULT")
	x.OnHelp = OnHelp
	x.Color = l.Color
	x.Execute()
	l.Color = x.Color
}

function OnHelp()
{
	f.MessageBox("Help")
}

f.Show()

o.Run()

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

