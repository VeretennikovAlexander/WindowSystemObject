o = new ActiveXObject("Scripting.WindowSystemObject")
x = new ActiveXObject("Scripting.WindowSystemObjectExtensions")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

label1 = f.TextOut(10,10,"")

function MouseMoveHandler(Sender,Message,WParam,LParam,Result)
{
	x = (LParam & 0xFFFF0000) >> 16
	y = LParam & 0x0000FFFF
	label1.Text = x+" "+y
}


x.AddMessageHandler(f,WM_MOUSEMOVE = 0x0200,MouseMoveHandler)

f.Show()

o.Run()
