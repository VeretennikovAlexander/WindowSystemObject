//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2013
//Requirements: JScript 5.0

use("Common.js")
use("ListView.js")

TestVersion(5,0)

o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

fs = new ActiveXObject("Scripting.FileSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 550
f.ClientHeight = 650
f.CenterControl()
f.Text = "ListView Group Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,70)
Top.Align = o.Translate("AL_TOP")
Top.TextOut(10,10,"Use combo box to change view type (Large icons or other)")
Top.TextOut(10,40,"Groups requires Windows XP and Themes enabled")

Box = f.CreateListView(10,10,250,300)
Box.HotTrack = true
Box.Align = o.Translate("AL_CLIENT")

Ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
Box.LargeImages = Ext.SystemImageListLarge
Box.SmallImages = Ext.SystemImageListSmall
//Box.Style = o.Translate("LV_VIEW_TILE")
Box.Style = o.Translate("LV_VIEW_ICON")

p = f.CreateFrame(0,0,100,0)
p.Align = o.Translate("AL_RIGHT")

p.CreateButton(10,10,75,25,"Help").OnClick = HelpAbout


t = p.CreateButton(10,70,75,25,"Close")
t.OnClick = CloseFormHandler
t.Cancel = true

t = p.CreateButton(10,100,75,25,"Modify")
t.OnClick = ModifyClick

t = f.Menu.Add("File")
t = t.Add("Exit","ESC")
t.OnExecute = CloseFormHandler

t = f.Menu.Add("Help")
t = t.Add("About","F1")
t.OnExecute = HelpAbout

function HelpAbout(Sender)
{
	WSOAbout(Sender,"ListView Groups Demo")
};

function ModifyClick(Sender)
{
	ListViewModifyExample(Box)
}

Box.TileLines = 2

//We need to add some column for tile view
Box.Columns.Add("Column 1")
Box.Columns.Add("Column 2")

//Box.TileHeight = 70

var Data = ["1.txt","1.jpg","1.png","1.doc","1.gif","1.xls","1.exe","1.bat","1.com","1.js","1.vbs","1.bmp","1.docx","1.ini","1.xml","1.xlsx","1.pdf","1.zip",
"1.rar","1.cab","1.java"]

Box.GroupHeaderImages.Load(ResourceDir()+"Controls16.bmp");

Group1 = Box.Groups.Add("Group 1")
Group2 = Box.Groups.Add("Group 2")

Group1.SubTitle = "The group 1 description where"
Group1.Task = "Task"
Group1.DescriptionTop = "DescriptionTop"
Group1.DescriptionBottom = "DescriptionBottom"
Group1.SubsetTitle = "SubsetTitle"
//Group1.Subseted = true
//Group1.TitleImage = 1
//Group1.ExtendedImage = 1
Group1.HeaderAlign = o.Translate("AL_CENTER")
Group1.FooterAlign = o.Translate("AL_CENTER")
Group1.Collapsible = true
Group2.TitleImage = 1
Group1.Footer = "Group 1 Footer Text"
Group2.Footer = "Group 2 Footer Text"

for (i = 0; i<Data.length; i++)
{
	Item = Box.Add("Item "+i+": "+Data[i])
	Item.ImageIndex = Ext.GetFileSysIconIndexLarge(Data[i],o.Translate("FILE_ATTRIBUTE_ARCHIVE"))
	Item.SubItems(0) = "The first line for "+i
	Item.SubItems(1) = "The second line for (a b c d e f g h j k)"+i
	Item.Group = i % 2
}

StyleBox = p.CreateComboBox(10,40,75,25,o.translate("CBS_DROPDOWNLIST"))
StyleBox.Add("Large Icon")
StyleBox.Add("Report")
StyleBox.Add("Small Icon")
StyleBox.Add("List")
StyleBox.Add("Tile")
StyleBox.OnChange = StyleBoxChange
StyleBox.ItemIndex = Box.Style

Box.TransparentBackground = true
Box.DoubleBuffering = true
Box.OnGroupLinkClick = OnGroupLinkClick

//Box.CheckBoxes = true

f.Show()

o.Run()

function StyleBoxChange(Sender)
{
	Box.Style = StyleBox.ItemIndex
}

function OnGroupLinkClick(Sender,Group){
	f.MessageBox(Group.Header + " clicked")
}

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }
