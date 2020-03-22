//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2013
//Requirements: JScript 5.0

o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 550
f.ClientHeight = 650
f.CenterControl()
f.Text = "Tree Colors Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"Some items have different colors")

tree = f.CreateTreeView(10,10,250,300)
tree.HotTrack = true
tree.Align = o.Translate("AL_CLIENT")
tree.HideSelection = false

p = f.CreateFrame(0,0,100,0)
p.Align = o.Translate("AL_RIGHT")

p.CreateButton(10,10,75,25,"Help").OnClick = HelpAbout

t = p.CreateButton(10,40,75,25,"Edit")
t.OnClick = EditElement

t = p.CreateButton(10,70,75,25,"Delete")
t.OnClick = DeleteElement

t = p.CreateButton(10,100,75,25,"Close")
t.OnClick = CloseFormHandler
t.Cancel = true


t = f.Menu.Add("File")
t = t.Add("Exit","ESC")
t.OnExecute = CloseFormHandler

t = f.Menu.Add("Help")
t = t.Add("About","F1")
t.OnExecute = HelpAbout

function HelpAbout(Sender)
{
	o.About()
};

tree.CustomDraw = true
Root = tree.Items.Add("Root")
for (i = 0; i<5; i++)
{
	Item = Root.Add(i)
	for (j = 0; j<5; j++)
	{
		NewItem = Item.Add(i+"."+j)
		if (j % 2 == 1)
		{
			NewItem.Font.Color = 0x000000FF
			NewItem.Font.Bold = true
		}
	}
}

tree.Items.Expand(true)
tree.ReadOnly = false
tree.OnBeginEdit = OnBeginEdit

f.Show()

o.Run()

function EditElement()
{
	if (tree.SelectedItem != null)
		tree.SelectedItem.EditLabel()
}

function DeleteElement()
{
	if (tree.SelectedItem != null)
		tree.SelectedItem.Remove()
}


function OnBeginEdit(Sender,Item,ResultPtr)
{
	if (Item.Text.charAt(0)=='1')
		ResultPtr.Value = false
}


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

