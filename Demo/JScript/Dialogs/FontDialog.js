o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.CreateButton(10,10,75,25,"Font Dialog").OnClick = FontDialog
f.CreateButton(100,10,75,25,"Close").OnClick = CloseFormHandler

l = f.TextOut(10,50,"This is a text")

function FontDialog()
{
	x = f.CreateFontDialog()
	x.Flags = o.Translate("CF_SHOWHELP | CF_DEFAULT | CF_APPLY")
	x.OnApply = OnApply
	x.OnHelp = OnHelp
	x.Font = l.Font
	x.Execute()
	l.Font = x.Font
}

function OnApply()
{
	l.Font = x.Font	
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

