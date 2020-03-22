//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2014


o = new ActiveXObject("Scripting.WindowSystemObject")

fs = new ActiveXObject("Scripting.FileSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 550
f.ClientHeight = 350
f.CenterControl()
f.Text = "Press right mouse button on an item"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Box = f.CreateListView(10,10,250,300)
Box.HotTrack = true
Box.Align = o.Translate("AL_CLIENT")

for (i = 0; i<10; i++)
{
	Box.Add("Item "+i)
}

Box.ReadOnly = false

Box.PopupMenu.Add("Select item").OnExecute = OnSelectItem

function OnSelectItem(Sender)
{
	var ListView = Sender.Control
	var Index = ListView.ItemIndex
	if (Index < 0) f.Text = "No item selected"; else	
		f.Text = ListView.Item(Index).Text
}

f.Show()

o.Run()

