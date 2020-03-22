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
f.Text = "ListBox Colors Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"List box with colored items")

Box = f.CreateListBox(10,10,250,300)
Box.Align = o.Translate("AL_CLIENT")

p = f.CreateFrame(0,0,100,0)
p.Align = o.Translate("AL_RIGHT")

t = p.CreateButton(10,10,75,25,"Close")
t.OnClick = CloseFormHandler
t.Cancel = true


t = f.Menu.Add("File")
t = t.Add("Exit","ESC")
t.OnExecute = CloseFormHandler


Box.Font.Size = 16
for (i = 0; i<10; i++)
{
	Box.Add("Item "+i)
	Box.ItemData(i) = i
}

function OnDrawItem(Box,Item)
{
	i = Item.ItemData
	if (i % 2 == 0)
	{
		Item.Font.Color = 0x0000FF00
		Item.Font.Size = 12
	}
	if (i == 0)
		Item.TextBkColor = 0x00E0E0FF
}


t = p.CreateButton(10,45,75,25,"Delete Item")
t.OnClick = DeleteItem
t.Cancel = true

function DeleteItem()
{
	Box.Remove(Box.ItemIndex)
}

Box.OnDrawItem = OnDrawItem
Box.CustomDraw = true

f.Show()

o.Run()

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

