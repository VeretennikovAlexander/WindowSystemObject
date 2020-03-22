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
f.Text = "ListView Report Demo"

f.BorderWidth = 10
f.MinWidth = 500
f.MinHeight = 350

Top = f.CreateFrame(0,0,0,50)
Top.TextOut(10,10,"Odd items can be edited (1,3,5,etc)")
Top.Align = o.Translate("AL_TOP")

p = f.CreateFrame(0,0,100,0)
p.Align = o.Translate("AL_RIGHT")

Box = f.CreateListView(10,10,250,300)
Box.HotTrack = true
Box.Align = o.Translate("AL_CLIENT")

Ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
Box.LargeImages = Ext.SystemImageListLarge
Box.SmallImages = Ext.SystemImageListSmall
Box.Style = o.Translate("LV_VIEW_DETAILS")
Box.ReadOnly = false
Box.ReadOnlySubItems = false
Box.Align = o.Translate("AL_TOP")
Box.Height = 400

ListBox = f.CreateListBox(0,0,0,0)
ListBox.Align = o.Translate("AL_CLIENT")


p.CreateButton(10,10,75,25,"Help").OnClick = HelpAbout


t = p.CreateButton(10,70,75,25,"Close")
t.OnClick = CloseFormHandler

t = p.CreateButton(10,100,75,25,"Modify")
t.OnClick = ModifyClick

t = f.Menu.Add("File")
t = t.Add("Exit")
t.OnExecute = CloseFormHandler

t = f.Menu.Add("Help")
t = t.Add("About","F1")
t.OnExecute = HelpAbout

function HelpAbout(Sender)
{
	WSOAbout(Sender,"ListView Report Demo")
};

function ModifyClick(Sender)
{
	ListViewModifyExample(Box)
}

Box.TileLines = 2

Box.Columns.Add("Column 1")
Box.Columns.Add("Column 2",120)
Box.Columns.Add("Column 3",180)

//Box.TileHeight = 70

var Data = ["1.txt","1.jpg","1.png","1.doc","1.gif","1.xls","1.exe","1.bat","1.com","1.js","1.vbs","1.bmp","1.docx","1.ini","1.xml","1.xlsx","1.pdf","1.zip",
"1.rar","1.cab","1.java"]

Box.CustomDraw = true

for (i = 0; i<Data.length; i++)
{
	Item = Box.Add("Item "+i+": "+Data[i])
	Item.ImageIndex = Ext.GetFileSysIconIndexLarge(Data[i],o.Translate("FILE_ATTRIBUTE_ARCHIVE"))
	Item.SubItems(0) = "The first line for "+i
	Item.SubItems(1) = "The second line for (a b c d e f g h j k)"+i
}

Box.OnSubItemEdited = SubItemEdited
Box.OnBeginSubItemEdit = BeginSubItemEdit
Box.OnEdited = ItemEdited
Box.OnBeginEdit = BeginEdit
Box.OnDrawItem = OnDrawItem
Box.RowSelect = true
Box.HideSelection = false

RowSelect = p.CreateCheckBox(10,150,100,25,"RowSelect")
RowSelect.Checked = Box.RowSelect

RowSelect.OnChange = RowSelectChange

function RowSelectChange(Sender)
{
	Box.RowSelect = RowSelect.Checked
}

function OnDrawItem(Sender,Item)
{
	//Item: SubItems,ImageIndex or Text can't be changed in this method

	i = Item.Index
	if (i % 2 == 0)
		Item.TextBkColor = 0x00E0E0FF; else
		Item.TextBkColor = 0x00FFFFFF;
}

function SubItemEdited(Sender,Item,SubItemIndex,ResultPtr)
{
	ListBox.Add("SubItemEdited item = "+Item.Index+", sub item  = "+SubItemIndex+", new value = "+ResultPtr.Value)
}

function BeginSubItemEdit(Sender,Item,SubItemIndex,ResultPtr)
{
	if ((Item.Index % 2) == 0)
		ResultPtr.Value = false
	ListBox.Add("BeginSubItemEdit item = "+Item.Index+", sub item  = "+SubItemIndex+", result = "+ResultPtr.Value)
}

function ItemEdited(Sender,Item,ResultPtr)
{
	ListBox.Add("ItemEdited item = "+Item.Index+", new value = "+ResultPtr.Value)
}

function BeginEdit(Sender,Item,ResultPtr)
{
	if ((Item.Index % 2) == 0)
		ResultPtr.Value = false
	ListBox.Add("BeginEdit item = "+Item.Index+", result = "+ResultPtr.Value)
}

f.Show()

o.Run()


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }
