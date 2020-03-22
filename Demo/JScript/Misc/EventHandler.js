o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

label1 = f.TextOut(10,10,"")
label2 = f.TextOut(10,50,"")

x = o.CreateEventHandler()
x.OnExecute = MouseMove

function MouseMove(sender,x,y,flags)
{
	label1.Text = x+" "+y
}


WScript.ConnectObject(x, "form_");

function form_OnExecute(Sender,x,y)
{
	label2.Text = x+" "+y
}


f.OnMouseMove = x


f.Show()

o.Run()
