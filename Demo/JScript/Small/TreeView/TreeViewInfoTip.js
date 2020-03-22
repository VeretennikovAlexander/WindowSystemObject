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
f.Text = "Tree Info Tip Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"Move mouse over an item")

tree = f.CreateTreeView(10,10,250,300)
tree.HotTrack = true
tree.Align = o.Translate("AL_CLIENT")

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
	Item.Hint = "You can see hint for "+Item.Text
	for (j = 0; j<5; j++)
	{
		var SubItem = Item.Add(i+"."+j)
		SubItem.Hint = "You can see hint for "+SubItem.Text+SomeText()
		if (j == 2)
		{
			ShowHintItem = SubItem
		}
	}
}

tree.Items.Expand(true)
tree.InfoTip = true

f.Show()

o.Run()


function SomeText()
{
	var S = ""
	for (var i = 0; i<100; i++)
	{
		S += " Some text " + i
	}
	return S
}



function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }


