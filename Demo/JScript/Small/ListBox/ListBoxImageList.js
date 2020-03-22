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
f.Text = "ListBox ImageList Image Demo"

f.BorderWidth = 10
f.MinWidth = 100
f.MinHeight = 150

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"List box with images")

Box = f.CreateListBox(10,10,250,300)
Box.Align = o.Translate("AL_CLIENT")
Box.MultiSelect = true
Box.ExtendedSelect = true
Box.ColumnWidth = 70
Box.ItemHeight = 20

Ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
Box.Images = Ext.SystemImageListSmall

p = f.CreateFrame(0,0,150,0)
p.Align = o.Translate("AL_RIGHT")

t = p.CreateButton(10,10,75,25,"Close")
t.OnClick = CloseFormHandler
t.Cancel = true


t = f.Menu.Add("File")
t = t.Add("Exit","ESC")
t.OnExecute = CloseFormHandler

var Data = ["1.txt","1.jpg","1.png","1.doc","1.gif","1.xls","1.exe","1.bat","1.com","1.js","1.vbs","1.bmp","1.docx","1.ini","1.xml","1.xlsx","1.pdf","1.zip",
"1.rar","1.cab","1.java"]

for (i = 0; i<100; i++)
{
	Box.Add("Item "+i)
	Box.ImageIndex(i) = Ext.GetFileSysIconIndexSmall(Data[i % Data.length],o.Translate("FILE_ATTRIBUTE_ARCHIVE"))
}

Image = o.LoadImage(ResourceDir()+"BK.JPG")
Box.BackgroundImage = Image

with (p.DrawImage(10,50,70,20,ResourceDir()+"BK.JPG"))
{
	Settings = new Object
	Settings.Image = ResourceDir()+"BK.JPG"
	Settings.Color = 0x00000000
	UserData = Settings 
	OnClick = UpdateBackground
}
with (p.DrawImage(10,80,70,30,ResourceDir()+"BK1.bmp"))
{
	Settings = new Object
	Settings.Image = ResourceDir()+"BK1.bmp"
	Settings.Color = 0x00FFFFFF
	UserData = Settings 
	OnClick = UpdateBackground
}
with (p.Rectangle(10,120,70,30))
{
	Settings = new Object
	Settings.Image = ""
	Settings.Color = 0x00000000
	UserData = Settings 
	OnClick = UpdateBackground
}
function UpdateBackground(Sender)
{
	Box.BackgroundImage = Sender.UserData.Image
	Box.Font.Color = Sender.UserData.Color
}
with (Multiselect = p.CreateCheckBox(10,160,100,25,"Multiselect"))
{
	OnClick = UpdateSelect
	Checked = true
}
with (ExtendedSelect = p.CreateCheckBox(10,180,100,25,"ExtendedSelect"))
{
	OnClick = UpdateSelect
	Checked = true
}
function UpdateSelect(Sender)
{
	Box.Multiselect = Multiselect.Checked
	Box.ExtendedSelect = ExtendedSelect.Checked
}

t = p.CreateButton(10,210,75,25,"Set Images")
t.OnClick = SetImages
t.Cancel = true

t = p.CreateButton(10,240,75,25,"Delete Item")
t.OnClick = DeleteItem
t.Cancel = true

function SetImages()
{
	var Shift = new Date().valueOf() % 117
	for (i = 0; i<Box.Count; i++)
	{
		Box.ImageIndex(i) = Ext.GetFileSysIconIndexSmall(Data[(i+Shift) % Data.length],o.Translate("FILE_ATTRIBUTE_ARCHIVE"))
	}
}

function DeleteItem()
{
	Box.Remove(Box.ItemIndex)
}

f.Show()

o.Run()

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

