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
f.Text = "ListBox Background Image Demo"

f.BorderWidth = 10
f.MinWidth = 100
f.MinHeight = 150

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"List box with image as background")

Box = f.CreateListBox(10,10,250,300)
Box.Align = o.Translate("AL_CLIENT")
Box.MultiSelect = true
Box.ExtendedSelect = true
Box.ColumnWidth = 40

p = f.CreateFrame(0,0,150,0)
p.Align = o.Translate("AL_RIGHT")

t = p.CreateButton(10,10,75,25,"Close")
t.OnClick = CloseFormHandler
t.Cancel = true

t = f.Menu.Add("File")
t = t.Add("Exit","ESC")
t.OnExecute = CloseFormHandler


for (i = 0; i<100; i++)
{
	Box.Add("Item "+i)
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
with (p.DrawImage(10,120,120,120,ResourceDir()+"RafaelMadonna.bmp"))
{
	Settings = new Object
	Settings.Image = ResourceDir()+"RafaelMadonna.bmp"
	Settings.Color = 0x00FFFFFF
	DrawType = o.Translate("DI_PROPORTIONAL_STRETCH")
	UserData = Settings 
	OnClick = UpdateBackground
}
with (p.Rectangle(10,250,130,30))
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
with (Multiselect = p.CreateCheckBox(10,290,100,25,"Multiselect"))
{
	OnClick = UpdateSelect
	Checked = true
}
with (ExtendedSelect = p.CreateCheckBox(10,310,100,25,"ExtendedSelect"))
{
	OnClick = UpdateSelect
	Checked = true
}
with (Columns = p.CreateCheckBox(10,330,100,25,"Columns"))
{
	OnClick = UpdateSelect
	Checked = true	
}
function UpdateSelect(Sender)
{
	Box.Multiselect = Multiselect.Checked
	Box.ExtendedSelect = ExtendedSelect.Checked
	if (Columns.Checked)
		Box.ColumnWidth = 40; else
		Box.ColumnWidth = 0
}



f.Show()

o.Run()

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

