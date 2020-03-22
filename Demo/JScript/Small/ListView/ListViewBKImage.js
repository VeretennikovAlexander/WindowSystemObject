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
f.Text = "ListView Background Image Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"List view with image as background (requires comctl32.dll version 4.71 or later)")

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


for (i = 0; i<100; i++)
{
	Box.Add("Item "+i).Hint = "Hint for element: "+i+SomeText()
}

Box.InfoTip = true

Image = o.LoadImage(ResourceDir()+"BK.JPG")
Box.BackgroundImage = Image


with (p.DrawImage(10,50,70,20,ResourceDir()+"BK.JPG"))
{
	Settings = new Object
	Settings.Image = ResourceDir()+"BK.JPG"
	Settings.Color = 0x00000000
	UserData = Settings 
	OnClick = UpdateBackground
	OnMouseEnter = ImageMouseEnter
	OnMouseLeave = ImageMouseLeave
}
with (p.DrawImage(10,80,70,30,ResourceDir()+"BK1.bmp"))
{
	Settings = new Object
	Settings.Image = ResourceDir()+"BK1.bmp"
	Settings.Color = 0x00FFFFFF
	UserData = Settings 
	OnClick = UpdateBackground
	OnMouseEnter = ImageMouseEnter
	OnMouseLeave = ImageMouseLeave
}
with (p.DrawImage(10,120,120,120,ResourceDir()+"RafaelMadonna.bmp"))
{
	Settings = new Object
	Settings.Image = ResourceDir()+"RafaelMadonna.bmp"
	Settings.Color = 0x00FFFFFF
	DrawType = o.Translate("DI_PROPORTIONAL_STRETCH")
	UserData = Settings 
	OnClick = UpdateBackground
	OnMouseEnter = ImageMouseEnter
	OnMouseLeave = ImageMouseLeave
}
with (p.Rectangle(10,250,70,30))
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
function ImageMouseEnter(Sender)
{
	Sender.AlphaBlend = 150
}
function ImageMouseLeave(Sender)
{
	Sender.AlphaBlend = 0
}


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

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

