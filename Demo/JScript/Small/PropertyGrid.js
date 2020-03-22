//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2014

o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 400
f.CenterControl()

Grid = f.CreatePropertyGrid(10,10,250,300)
Grid.Align = o.Translate("AL_CLIENT")

Bottom = f.CreateFrame(0,0,0,40)
Bottom.Align = o.Translate("AL_BOTTOM")
BottomText = Bottom.TextOut(10,10,"")
Bottom.Border = true

Root = Grid.Items

for (i = 0; i<7; i++)
{
	Item = Root.Add(i)
	for (j = 0; j<4; j++)
	{
		Property = Item.Add(i+"."+j)
		if (j == 1)
		{
			Control = Grid.CreateComboBox(0,0,0,0,o.Translate("CBS_DROPDOWNLIST"))
			Control.Add("Item 1")
			Control.Add("Item 2")
			Control.Add("Item 3")
		} else
		if (j == 2)
		{
			Control = Grid.CreateFrame(0,0,0,0)
			Button = Control.CreateButton(0,0,30,0,"...")
			Button.Align = o.Translate("AL_RIGHT")
			Button.OnClick = PropertyButtonClick
			Edit = Control.CreateEdit(0,0,0,0)
			Edit.Align = o.Translate("AL_CLIENT")
			Edit.ReadOnly = true
			Edit.Name = "Edit"
			Control.UserData = Grid.Property
		} else
		{
			Grid.CreateEdit(0,0,0,0)
		}
		Property.Value = i + "." + j
	}
}

function PropertyButtonClick(Sender)
{
	Frame = Sender.Parent

	j = f.CreateDialogForm(0,0,0,0)
	j.ClientWidth = 300
	j.ClientHeight = 200
	j.CenterControl()
	j.Text = "Change property "+Frame.UserData.Text
	with (j.CreateButton(100,170,75,25,"OK"))
	{
		OnClick = OKClick
	}
	var Text = Frame.UserData.Value
	Check1 = j.CreateCheckBox(10,10,100,25,"Item 1")
	Check1.Checked = Text.indexOf("Item 1") > -1
	Check2 = j.CreateCheckBox(10,40,100,25,"Item 2")
	Check2.Checked = Text.indexOf("Item 2") > -1
	with (j.CreateButton(200,170,75,25,"Cancel"))
	{
		OnClick = CloseFormHandler
		Cancel = true
	}
	j.ShowModal()

	function OKClick(Sender)
	{
		Value = []
		if (Check1.Checked)
			Value.push("Item 1")
		if (Check2.Checked)
			Value.push("Item 2")
		
		Str = Value.join(",")
		Frame.Text = Str
		Frame.Edit.Text = Str
		Sender.Form.Close()
	}
}

Grid.OnChange = GridOnhange

function GridOnhange(Sender)
{
	var SelectedItem = Grid.SelectedItem
	var Text
	if (SelectedItem)
		Text = SelectedItem.Text; else
		Text = "";
	BottomText.Text = Text;
}

f.Show()

f.Text = "Property Grid"

o.Run()


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}