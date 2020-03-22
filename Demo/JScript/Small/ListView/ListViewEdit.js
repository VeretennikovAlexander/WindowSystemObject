//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2013
//Requirements: JScript 5.0

use("Common.js")

TestVersion(5,0)

o = new ActiveXObject("Scripting.WindowSystemObject")

fs = new ActiveXObject("Scripting.FileSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 550
f.ClientHeight = 650
f.CenterControl()
f.Text = "ListView Editing Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"Even items cannot be edited. Select an odd item end click 'Edit' or simply click the element for editing")

Box = f.CreateListView(10,10,250,300)
Box.HotTrack = true
Box.Align = o.Translate("AL_CLIENT")

p = f.CreateFrame(0,0,100,0)
p.Align = o.Translate("AL_RIGHT")

p.CreateButton(10,10,75,25,"Help").OnClick = HelpAbout

t = p.CreateButton(10,40,75,25,"Edit")
t.OnClick = EditElement

t = p.CreateButton(10,70,75,25,"Close")
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
	WSOAbout(Sender,"ListView Edit Demo")
};

for (i = 0; i<10; i++)
{
	Box.Add("Item "+i)
}

Box.ReadOnly = false
Box.OnBeginEdit = OnBeginEdit

f.Show()

o.Run()

function EditElement()
{
	Box.EditItem(Box.ItemIndex)
}

function OnBeginEdit(Sender,Item,ResultPtr)
{
	if (Item.Index % 2 == 0)
		ResultPtr.Value = false
}

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }
