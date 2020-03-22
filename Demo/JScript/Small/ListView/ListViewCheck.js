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
f.Text = "ListView CheckBoxes Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,70)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"Use combo box to change view type (Large icons or other).")
Top.TextOut(10,40,"Use left mouse button or space key to change checkbox state.")

Box = f.CreateListView(10,10,250,300)
Box.HotTrack = true
Box.Align = o.Translate("AL_CLIENT")

Ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
Box.LargeImages = Ext.SystemImageListLarge
Box.SmallImages = Ext.SystemImageListSmall
Box.Style = o.Translate("LV_VIEW_TILE")

p = f.CreateFrame(0,0,120,0)
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
	WSOAbout(Sender,"ListView Tile Demo")
};

Box.TileLines = 2

//We need to add some column for tile view
Box.Columns.Add("Column 1")
Box.Columns.Add("Column 2")

Box.TileHeight = 70

var Data = ["1.txt","1.jpg","1.png","1.doc","1.gif","1.xls","1.exe","1.bat"]

for (i = 0; i<Data.length; i++)
{
	Item = Box.Add(Data[i])
	Item.ImageIndex = Ext.GetFileSysIconIndexLarge(Data[i],o.Translate("FILE_ATTRIBUTE_ARCHIVE"))
	Item.SubItems(0) = "The first line for "+i
	Item.SubItems(1) = "The second line for (a b c d e f g h j k)"+i
}

StyleBox = p.CreateComboBox(10,40,75,25,o.translate("CBS_DROPDOWNLIST"))
StyleBox.Add("Large Icon")
StyleBox.Add("Report")
StyleBox.Add("Small Icon")
StyleBox.Add("List")
StyleBox.Add("Tile")
StyleBox.OnChange = StyleBoxChange
StyleBox.ItemIndex = Box.Style

CheckByMouse = p.CreateCheckBox(10,100,100,25,"Check by mouse")
CheckByMouse.OnChange = CheckByMouseOnChange
CheckByMouse.Checked = Box.CheckByMouse

function CheckByMouseOnChange(Sender)
{
	Box.CheckByMouse = Sender.Checked
}

Box.TransparentBackground = true
Box.DoubleBuffering = true
Box.IconSpacingWidth = 100
Box.IconSpacingHeight = 100

Box.CheckBoxes = true

f.Show()

o.Run()

function StyleBoxChange(Sender)
{
	Box.Style = StyleBox.ItemIndex
}


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }
