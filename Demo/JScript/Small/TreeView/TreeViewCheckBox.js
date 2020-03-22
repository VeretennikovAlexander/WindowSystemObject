//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2013
//Requirements: JScript 5.0

use("Common.js")

TestVersion(5,0)

o = new ActiveXObject("Scripting.WindowSystemObject")

fs = new ActiveXObject("Scripting.FileSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 650
f.CenterControl()
f.Text = "Tree Check Box Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"If an item checked -> its sub items will be checked")

tree = f.CreateTreeView(10,10,250,300)
tree.HotTrack = true
tree.Align = o.Translate("AL_CLIENT")
tree.CheckBoxes = true

p = f.CreateFrame(0,0,100,0)
p.Align = o.Translate("AL_RIGHT")

p.CreateButton(10,10,75,25,"Help").OnClick = HelpAbout

t = p.CreateButton(10,40,75,25,"Close")
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
	WSOAbout(Sender,f.Text)
};

Root = tree.Items.Add("Root")
for (i = 0; i<5; i++)
{
	Item = Root.Add(i)
	for (j = 0; j<5; j++)
	{
		Item.Add(i+"."+j)
	}
}

tree.Items.Expand(true)
tree.OnItemCheck = OnItemCheck

f.Show()

o.Run()

function CheckAll(Item,Value)
{
	for (var i = 0; i<Item.Count; i++)
	{
		var SubItem = Item.item(i)
		SubItem.Checked = Value
		CheckAll(SubItem,Value)
	}
}

function OnItemCheck(Sender,Item)
{
	CheckAll(Item,Item.Checked)
}


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }


