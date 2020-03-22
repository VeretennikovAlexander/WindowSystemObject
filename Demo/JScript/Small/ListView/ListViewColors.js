//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2013
//Requirements: JScript 5.0

use("Common.js")

TestVersion(5,0)

o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

fs = new ActiveXObject("Scripting.FileSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 550
f.ClientHeight = 650
f.CenterControl()
f.Text = "ListView Colors Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"List view with colored items")

Box = f.CreateListView(10,10,250,300)
Box.HotTrack = true
Box.Align = o.Translate("AL_CLIENT")

p = f.CreateFrame(0,0,100,0)
p.Align = o.Translate("AL_RIGHT")

t = p.CreateButton(10,10,75,25,"Close")
t.OnClick = CloseFormHandler
t.Cancel = true


t = f.Menu.Add("File")
t = t.Add("Exit","ESC")
t.OnExecute = CloseFormHandler

Box.IconSpacingWidth = 100
Box.IconSpacingHeight = 70
Box.Columns.Add("Column 1",200)
Box.Columns.Add("Column 2",200)
Box.Columns.Add("Column 3",200)

//Specify Font Size - maximum value and for an item you can use less.
Box.Font.Size = 16
for (i = 0; i<10; i++)
{
	Item = Box.Add("Item "+i)
	Item.Hint = "Hint for element: "+i+SomeText()
	if (i % 2 == 0)
	{
		Item.Font.Color = 0x0000FF00
		Item.Font.Size = 12
		Item.SubItemsEx(0).Font.Color = 0x000000FF
		Item.SubItemsEx(1).Font.Color = 0x00F0F000
		Item.SubItemsEx(2).Font.Color = 0x00F0F000
	}
	if (i == 0)
	Item.TextBkColor = 0x00E0E0FF

	Item.SubItems(0) = "Text"
	Item.SubItems(1) = "Text 2"
}

Box.InfoTip = true
Box.RowSelect = true
Box.CustomDraw = true

StyleBox = p.CreateComboBox(10,40,75,25,o.translate("CBS_DROPDOWNLIST"))
StyleBox.Add("Large Icon")
StyleBox.Add("Report")
StyleBox.Add("Small Icon")
StyleBox.Add("List")
StyleBox.Add("Tile")
StyleBox.OnChange = StyleBoxChange
StyleBox.ItemIndex = Box.Style

function StyleBoxChange(Sender)
{
	Box.Style = StyleBox.ItemIndex
}


t = p.CreateButton(10,85,75,25,"Delete Item")
t.OnClick = DeleteItem
t.Cancel = true

function DeleteItem()
{
	Box.Remove(Box.ItemIndex)
}


f.Show()

o.Run()

function SomeText()
{
	var S = ""
	for (var i = 0; i<10; i++)
	{
		S += " Some text " + i
	}
	return S
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

