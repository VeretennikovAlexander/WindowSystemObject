//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2013
//Requirements: JScript 5.0

use("Common.js")

TestVersion(5,0)

o = new ActiveXObject("Scripting.WindowSystemObject")
//o.EnableVisualStyles = true

fs = new ActiveXObject("Scripting.FileSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 550
f.ClientHeight = 650
f.CenterControl()
f.Text = "ListView Work Areas Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"See Work Areas example")

Box = f.CreateListView(10,10,250,300)
//Box = f.CreateListView(10,10,250,300,0x800)
Box.HotTrack = true
Box.Align = o.Translate("AL_CLIENT")

Ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
Box.LargeImages = Ext.SystemImageListLarge

p = f.CreateFrame(0,0,100,0)
p.Align = o.Translate("AL_RIGHT")

p.CreateButton(10,10,75,25,"Help").OnClick = HelpAbout


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
	WSOAbout(Sender,"Directory Tree Demo")
};

Box.WorkAreas.Add(10,10,180,180)
Box.WorkAreas.Add(200,200,200,200)

for (i = 0; i<10; i++)
{
	Item = Box.Add("Item "+i)
	Item.ImageIndex = Ext.GetFileSysIconIndexLarge("1.txt",o.Translate("FILE_ATTRIBUTE_ARCHIVE"))
	if ((i % 2) == 0)
	{
		Item.SetPosition(210,210)
	}
}
Box.Arrange()

f.Show()

o.Run()


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}


function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }