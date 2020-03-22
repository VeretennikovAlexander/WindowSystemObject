//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2014

o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 400
f.CenterControl()

tree = f.CreateTreeView(10,10,250,300)
tree.HotTrack = true
tree.Align = o.Translate("AL_CLIENT")

tree.PopupMenu.Add("Select item").OnExecute = OnSelectItem

Root = tree.Items.Add("Root")
for (i = 0; i<4; i++)
{
	Item = Root.Add(i)
	for (j = 0; j<4; j++)
	{
		Item.Add(i+"."+j)
	}
}
tree.Items.Expand(true)

function OnSelectItem(Sender)
{
	f.Text = Sender.Control.SelectedItem.Text
}

f.Show()

f.Text = "Press right mouse button on an item"

o.Run()
