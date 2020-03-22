o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.Show()

f.OnMouseWheel = OnMouseWheel

function OnMouseWheel(Sender,Keys,Delta)
{
	if (Delta < 0)
		f.Text = "DOWN: "+Delta; else
	if (Delta > 0)
		f.Text = "UP: "+Delta; else
		f.Text = ""
}

o.Run()
