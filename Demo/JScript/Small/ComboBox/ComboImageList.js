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
f.Text = "ComboBox ImageList Image Demo"

f.BorderWidth = 10
f.MinWidth = 100
f.MinHeight = 150

Top = f.CreateFrame(0,0,0,40)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"Combo box with images")

Box = f.CreateComboBox(10,10,250,300,o.Translate("CBS_DROPDOWNLIST"))
Box.Align = o.Translate("AL_CLIENT")
Box.Font.Size = 12

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

t = p.CreateButton(10,40,75,25,"Set Images")
t.OnClick = SetImages
t.Cancel = true

t = p.CreateButton(10,70,75,25,"Delete Item")
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

StyleBox = p.CreateComboBox(10,100,140,25,o.Translate("CBS_DROPDOWNLIST"))
StyleBox.Add("CBS_DROPDOWN")
StyleBox.Add("CBS_DROPDOWNLIST")
StyleBox.Add("CBS_SIMPLE")
for (i = 0; i<3; i++)
{
	StyleBox.ItemData(i) = o.Translate(StyleBox.Item(i))
}
StyleBox.OnChange = StyleChange
StyleBox.ItemIndex = 1

function StyleChange(Sender)
{
	i = Sender.ItemIndex
	Box.Style = Sender.ItemData(i)
}


f.Show()

o.Run()

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

