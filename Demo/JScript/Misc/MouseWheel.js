o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.OnMouseWheel = OnMouseWheel

function OnMouseWheel(Sender,Keys,Delta,x,y)
{
	Box.Add(Keys +" "+Delta+" "+x +" "+y)
}

Box = f.CreateListBox(0,0,0,0)
Box.Align = o.Translate("AL_CLIENT")
Box.ParentMouseWheel = true
f.Show()

o.Run()
