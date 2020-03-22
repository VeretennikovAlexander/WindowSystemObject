o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

r = f.CreateRichEdit(10,10,400,10)
r.AutoHeight = true

b = f.CreateButton(420,10,75,25,"Add line")
b.OnClick = ButtonAddClick

b = f.CreateButton(420,40,75,25,"Remove line")
b.OnClick = ButtonRemoveLine

function ButtonAddClick()
{
	r.Add("New Line")
}

function ButtonRemoveLine()
{
	if (r.Count > 0)
		r.Remove(r.Count-1)
}


f.Show()

o.Run()
