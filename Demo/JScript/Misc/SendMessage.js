o = new ActiveXObject("Scripting.WindowSystemObject")
x = new ActiveXObject("Scripting.WindowSystemObjectExtensions")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()


f.Show()

Button = f.CreateButton(10,10,175,25,"SendMessage (WM_CLOSE)")
Button.OnClick = SendMessage

function SendMessage()
{
	x.SendMessage(f,WM_CLOSE = 0x0010,0,0)
}

o.Run()
