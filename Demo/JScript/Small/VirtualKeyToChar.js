o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.OnKeyDown = OnKeyDown
f.TextOut(10,10,"Press any character key")
t = f.TextOut(10,40,"")

function OnKeyDown(Sender,Key,Flags)
{
	t.Text = o.VirtualKeyCodeToString(Key,false)
}

f.Show()

o.Run()
