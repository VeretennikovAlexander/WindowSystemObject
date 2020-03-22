//WindowSystemObject (WSO) example
//Copyright (C) Veretennikov A. B. 2004

use("Common.js")

function HTMLDir() { return StartupDir()+"..\\HTML\\"}
function WSODir() {return StartupDir()+"..\\..\\"}
function ResourceDir(){return StartupDir()+"..\\Data\\"}

KB_SHIFT = 0x10000000
KB_CTRL = 0x20000000
KB_ALT = 0x40000000

KB_LSHIFT = 0x01000000
KB_LCTRL = 0x02000000
KB_LALT = 0x04000000

KB_RSHIFT = 0x00100000
KB_RCTRL = 0x00200000
KB_RALT = 0x00400000

POSITION_NONE = 0xF000000

function GetMouseButton(B)
{
	if (B==1) return "Left"; else
	if (B==2) return "Right"; else
	if (B==16) return "Middle"; else
	return "Unknown"
}

function GetKeyboardFlags(F)
{
	var s = "";
	if (F & KB_SHIFT) s += " Shift"
	if (F & KB_CTRL) s += " Ctrl"
	if (F & KB_ALT) s += " Alt"
	
	var x = ""
	
	if (F & KB_LSHIFT) x += " LShift"
	if (F & KB_LCTRL) x += " LCtrl"
	if (F & KB_LALT) x += " LAlt"
	
	if (F & KB_RSHIFT) x += " RShift"
	if (F & KB_RCTRL) x += " RCtrl"
	if (F & KB_RALT) x += " RAlt"
	
	if (x!="") s += " ("+x+" )"
	
	return s
}

function ButtonClick(Sender)
{
	Sender.Form.MessageBox("Button: "+Sender.Text)
	List.Add("OnClick: "+Sender.Type+" "+Sender.Text)
}

function HelpAbout(Sender)
{
	WSOAbout(Sender,"Test")
}

function HelpHelp(Sender)
{
	WSOHelp()
};

function GraphicClick(Sender) { Sender.Color = Sender.Form.ColorDialog(Sender.Color) }

var CanClose

function OKResult(Sender) { CanClose = true; Sender.Form.Close() }

function ButtonClose(Sender) { Sender.Form.Close() }

function FormSizeMove(Sender)
{
	if (Sender.StatusBar!=null)
		Sender.StatusBar[1].Text = "Left: "+Sender.Left+", Top: "+Sender.Top+", Size: "+Sender.Width+"x"+Sender.Height
}

function FormCloseQuery(Sender,Result)
{
	CanClose = false

	var Form = f.CreateDialogForm(0, 0, 510, 100)
	Form.ClientWidth = 510
	Form.ClientHeight = 80
	Form.CenterControl()
	Form.TextOut(10, 10, "Do you really want to quit this program?")

	var YesButton = Form.CreateButton(10, 30, 75, 25, "Yes")
	YesButton.OnClick = OKResult
	YesButton.Default = true

	var NoButton = Form.CreateButton(90, 30, 75, 25, "No")
	NoButton.OnClick = ButtonClose
	NoButton.Cancel = true

	var HelpButton = Form.CreateButton(170, 30, 75, 25, "Help")
	HelpButton.OnClick = HelpAbout

	Form.HelpButton = HelpButton
	Form.ShowModal()
	Form.Destroy()
	
	Result.Put(CanClose)
}

function FormKeyDown(Sender,Key,Flags)
{
	List.Add("OnKeyDown: Form: "+Key+GetKeyboardFlags(Flags))
}

function ControlClick(Sender)
{
	List.Add("OnClick: "+Sender.Type)
}

function ControlDblClick(Sender,x,y,Button,Flags)
{
	List.Add("OnDblClick: "+Sender.Type+": "+x+" x "+y+" "+GetMouseButton(Button))
}

function FormMouseMove(Sender,x,y)
{
	if (Sender.StatusBar!=null) Sender.StatusBar[0].Text = x+" x "+y
}

function FormMouseLeave(Sender)
{
	if (Sender.StatusBar!=null) Sender.StatusBar[0].Text = "No Mouse in Control"
}

function EditChange(Sender)
{
	List.Add("OnChange: Edit, new Text = "+Sender.Text)
}

function ListChange(Sender)
{
	if (f.StatusBar!=null) f.StatusBar[2].Text = List.ItemIndex
}

function ActionControlChangeEx(Sender)
{
	f.MessageBox("Control Changed","",0)
}

function ActiveControlChange(Sender)
{
	if (f.StatusBar!=null)
	{
		if (Sender.ActiveControl!=null)
		f.StatusBar[3].Text = Sender.ActiveControl.Type+": "+Sender.ActiveControl.Text; else
		f.StatusBar[3].Text = "ActiveControl - null"
	}
}

o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

//AddEventHandler Example
f.AddEventHandler("OnActiveControlChange",ActiveControlChange)
f.AddEventHandler("OnActiveControlChange",ActionControlChangeEx)

//RemoveEventHandler Example
f.RemoveEventHandler("OnActiveControlChange",ActionControlChangeEx)

f.CreateStatusBar().Name = "StatusBar"
f.StatusBar.Add(50).AutoSize = true
f.StatusBar.Add(250)
f.StatusBar.Add(50)
f.StatusBar.Add(150)

f.Text = "Hello, I am a WindowSystemObject"

f.TextOut(10,220,"Events box:")
List = f.CreateListBox(10,240,210,250)
List.HorizontalExtent = 300
List.OnChange = ListChange
ListChange()

f.OnKeyDown = FormKeyDown
f.OnClick = ControlClick
f.OnDblClick = ControlDblClick
f.OnMove = FormSizeMove
f.OnResize = FormSizeMove
f.OnCloseQuery = FormCloseQuery
f.OnMouseMove = FormMouseMove
f.OnMouseLeave = FormMouseLeave

f.ClientWidth = 770
f.ClientHeight = 540
f.CenterControl()
f.Top = 10

f.Color = 0xFF00000F
f.UserData = 99

f.Icon = ResourceDir()+"wso.ico"

ControlsImages = o.CreateImageList()
ControlsImages.Load(ResourceDir()+"Controls16.bmp")

images = o.CreateImageList()
images.Load(ResourceDir()+"ToolBar.bmp")

f.PopupMenu.Text = "File"
ReBar = f.CreateReBar(10,60,300,60)
ReBar.Font.Color = 0x000000FF

TabControl = f.CreateTabControl(230,95,530,400)
TabControl.Images = ControlsImages
TabControl.MultiLine = true
TabControl.HotTrack = true
TabControl.Font.Color = 0x000000FF

x = TabControl.CreateTab("Button")
x.ImageIndex = 0
b = x.CreateButton(10,10,75,25,"Button")
f.AcceptButton = b
b.OnClick = ButtonClick
x.CreateCheckBox(10,40,120,25,"CheckBox")
x.CreateCheckBox(10,70,120,25,"CheckBox").Flat = true

x.CreateRadioButton(10,100,120,25,"RadioButton A").Flat = true
x.CreateRadioButton(10,130,120,25,"RadioButton B").Flat = true
x.CreateRadioButton(10,160,120,25,"RadioButton C").Flat = true

x.CreateRadioButton(10,200,120,25,"RadioButton D").Group = 1
x.CreateRadioButton(10,230,120,25,"RadioButton E")

x = TabControl.CreateTab("Edit")
x.ImageIndex = 1

function TestStrings(x)
{
	var HasItemData = true
	if (x.Type.indexOf("Edit") > -1)
		HasItemData = false

	var t = f.CreateDialogForm(0, 0, 310, 380)
	t.ClientWidth = 310
    t.ClientHeight = 360
	t.CenterControl()
	t.CreateButton(10,10,75,25,"Enum").OnClick = EnumStrings
	t.CreateButton(220,40,75,25,"Delete").OnClick = DeleteString
	t.CreateButton(220,70,75,25,"Insert").OnClick = InsertString
	t.CreateButton(220,100,75,25,"Set").OnClick = SetString
	t.CreateButton(220,130,75,25,"Set as Array").OnClick = SetStringArray
	t.CreateButton(220,160,75,25,"SetTop").OnClick = SetTopIndex
	if (HasItemData)
	{
		t.CreateButton(220,190,75,25,"Set ItemData").OnClick = SetItemData
	}
	
	var v = t.CreateButton(220,240,75,25,"Close")
	v.OnClick = ButtonClose
	v.Cancel = true
	
	v = t.CreateListBox(10,40,200,100)
	v.OnChange = ItemPropertyTest
	t.TextOut(10,160,"\"Item\" Property: \nclick mouse button on the list box")
	var vs = t.CreateEdit(10,200,200,25)
	vs.ReadOnly = true
	vs.ParentColor = true
	t.TextOut(10,230,"\"ItemIndex\" Property:")
	var vi = t.CreateEdit(10,250,200,25)
	vi.ReadOnly = true
	vi.ParentColor = true
	if (HasItemData)
	{
		t.TextOut(10,280,"\"ItemData\" Property: \nChange and press Set ItemData button")
		var vd = t.CreateEdit(10,320,200,25)
	}

	t.ShowModal()
	
	
	function EnumStrings(Sender)
	{
		v.Clear()
		//		for (Index=0;Index<x.Count;Index++)
		//			v.Add(x.Item(Index));
		
		for (var enumerator = new Enumerator(x);!enumerator.atEnd();enumerator.moveNext())
		{
			xitem = enumerator.item()
			v.add(xitem)
		}
	}
	
	function DeleteString(Sender)
	{
		x.Remove(v.ItemIndex)
		EnumStrings()
	}
	
	function InsertString(Sender)
	{
		x.Insert(v.ItemIndex,"Insert String by Index: "+v.ItemIndex)
		EnumStrings()
	}
	
	function SetString(Sender)
	{
		var w = v.ItemIndex
		x.Item(w) = "Set String by Index: "+w
		EnumStrings()
	}
	
	function SetStringArray(Sender)
	{
		x[v.ItemIndex] = "Set String by Index (As Array): "+v.ItemIndex
		EnumStrings()
	}

	function SetItemData(Sender)
	{
		var w = v.ItemIndex
		x.ItemData(w) = vd.Text
	}
	
	function SetTopIndex(Sender)
	{
		x.TopIndex = v.ItemIndex
	}
	
	function ItemPropertyTest(Sender)
	{
		vs.Text = x.Item(v.ItemIndex)
		vi.Text = v.ItemIndex
		if (HasItemData)
			vd.Text = x.ItemData(v.ItemIndex)
	}
}

e = x.CreateEdit(0,0,180,20)
e.Name = "e"
e.MaxLength = 160
e.OnChange = EditChange
e.Text="Editor"
e.Color = 0x00FFFF
CreateEditPage(x)

function CreateEditPage(x)
{
	var e = x.e
	x.CreateButton(210,10,75,25,"SelectAll").OnClick = EditSelectAll
	x.CreateButton(290,10,75,25,"ClearSel").OnClick = EditClearSelection
	x.CreateButton(370,10,75,25,"TestStrings").OnClick = EditTestStrings
	
	x.TextOut(200,42,"CharCase")
	var c = x.CreateComboBox(300,40,100,25,o.Translate("CBS_DROPDOWNLIST"))
	c.Add("Lower")
	c.Add("Default")
	c.Add("Upper")
	c.ItemIndex = 1
	c.OnChange = EditStyle
	
	x.CreateCheckBox(200,70,120,20,"Password",e.Password).OnChange = EditPassword
	x.CreateCheckBox(320,70,120,20,"HideSelection",e.HideSelection).OnChange = EditHideSelection
	x.CreateCheckBox(440,70,120,20,"AcceptsTab",e.AcceptsTab).OnChange = EditAcceptsTab 

	x.CreateCheckBox(200,90,120,20,"ReadOnly",e.ReadOnly).OnChange = EditReadOnly
	x.CreateCheckBox(320,90,120,20,"MultiLine",e.MultiLine).OnChange = EditMultiLine
	x.CreateCheckBox(200,110,120,20,"WordWrap",e.WordWrap).OnChange = EditWordWrap
	x.CreateCheckBox(320,110,120,20,"Border",e.Border).OnChange = EditBorder
	x.TextOut(200,140,"MaxLength")
	var t = x.CreateEdit(300,138,80,20)
	t.DataType = o.Translate("DT_INTEGER")
	t.Min = 1
	t.Text = e.MaxLength
	t.OnChange = EditMaxLength
	x.TextOut(200,165,"ScrollBars")
	t = x.CreateComboBox(300,163,80,20,o.Translate("CBS_DROPDOWNLIST"))
	t.Add("None")
	t.Add("Horizontal")
	t.Add("Vertical")
	t.Add("Both")
	t.OnChange = EditScrollBars
	t.ItemIndex = e.ScrollBars
	x.TextOut(200,190,"LeftMargin")
	t = x.CreateEdit(300,188,80,20)
	t.DataType = o.Translate("DT_INTEGER")
	t.Min = 0
	t.Text = e.LeftMargin
	t.OnChange = EditLeftMargin
	t = x.TextOut(200,215,"RightMargin")
	t = x.CreateEdit(300,213,80,20)
	t.DataType = o.Translate("DT_INTEGER")
	t.Min = 0
	t.Text = e.RightMargin
	t.OnChange = EditRightMargin
	x.TextOut(200,240,"Text Align")
	t = x.CreateComboBox(300,238,80,20,o.Translate("CBS_DROPDOWNLIST"))
	t.Add("Default")
	t.Add("Left")
	t.Add("Right")
	t.Add("Center")
	t.ItemIndex = e.TextAlign
	t.OnChange = EditTextAlign
	t = x.TextOut(200,265,"DataType")
	t = x.CreateComboBox(300,263,80,20,o.Translate("CBS_DROPDOWNLIST"))
	t.Add("None (equal String)")
	t.Add("String")
	t.Add("Integer")
	t.Add("Float")
	t.Add("Hex")
	t.ItemIndex = e.DataType
	t.OnChange = EditDataType
	
	function EditStyle(Sender) {Sender.Parent.e.CharCase = Sender.ItemIndex-1; Sender.Parent.e.Text = Sender.Parent.e.Text /*Update Char Case*/}
	function EditTestStrings(Sender) {TestStrings(Sender.Parent.e)}
	function EditRightMargin(Sender) {Sender.Parent.e.RightMargin = Sender.Text}
	function EditLeftMargin(Sender) {Sender.Parent.e.LeftMargin = Sender.Text}
	function EditTextAlign(Sender) {Sender.Parent.e.TextAlign = Sender.ItemIndex}
	function EditDataType(Sender) {Sender.Parent.e.DataType = Sender.ItemIndex}
	function EditScrollBars(Sender) {Sender.Parent.e.ScrollBars = Sender.ItemIndex}
	function EditMaxLength(Sender) {Sender.Parent.e.MaxLength = Sender.Text}
	function EditPassword(Sender) {if (Sender.Checked) Sender.Parent.e.PasswordChar = "*"; else Sender.Parent.e.PasswordChar = ""}
	function EditHideSelection(Sender) {Sender.Parent.e.HideSelection = Sender.Checked}
	function EditAcceptsTab(Sender) {Sender.Parent.e.AcceptsTab = Sender.Checked}
	function EditReadOnly(Sender) {Sender.Parent.e.ReadOnly = Sender.Checked}
	function EditMultiLine(Sender) {Sender.Parent.e.MultiLine = Sender.Checked; Sender.Parent.e.Height = 100}
	function EditWordWrap(Sender) {Sender.Parent.e.WordWrap = Sender.Checked}
	function EditBorder(Sender) {Sender.Parent.e.Border = Sender.Checked}
	function EditSelectAll(Sender){Sender.Parent.e.SetFocus(); Sender.Parent.e.SelectAll()}
	function EditClearSelection(Sender){Sender.Parent.e.SetFocus(); Sender.Parent.e.ClearSelection()}
}

//ListBox
t = TabControl.CreateTab("ListBox")
t.ImageIndex = 2
ListBox = t.CreateListBox(10,10,240,200)
for (x = 1; x<100; x++) ListBox.Add("Item "+x)
t.CreateButton(260,10,75,25,"Test").OnClick = TestListBox
t.CreateCheckBox(260,40,150,25,"MultiSelect",ListBox.MultiSelect).OnChange = ListBoxMultiSelect
t.CreateCheckBox(260,70,150,25,"ExtendedSelect",ListBox.ExtendedSelect).OnChange = ListBoxExtendedSelect
t.TextOut(260,100,"Column Count:")
x = t.CreateEdit(260,130,100,25)
x.DataType = o.Translate("DT_INTEGER")
x.Min = 0
x.Text = ListBox.ColumnCount
x.OnChange = ListBoxColumnCount

t.TextOut(370,160,"Item height:")
x = t.CreateEdit(370,190,100,25)
x.DataType = o.Translate("DT_INTEGER")
x.Min = 0
x.Text = ListBox.ItemHeight
x.OnChange = ListBoxItemHeight

t.TextOut(260,160,"Column Width:")
x = t.CreateEdit(260,190,100,25)
x.DataType = o.Translate("DT_INTEGER")
x.Min = 0
x.Text = ListBox.ColumnWidth
x.OnChange = ListBoxColumnWidth

x = t.TextOut(260,220,"ScrollBars")
x = t.CreateComboBox(260,250,80,20,o.Translate("CBS_DROPDOWNLIST"))
with (x)
{
	Add("None")
	Add("Horizontal")
	Add("Vertical")
	Add("Both")
}
x.OnChange = ListBoxScrollBars
x.ItemIndex = ListBox.ScrollBars

function ListBoxScrollBars(Sender) {ListBox.ScrollBars = Sender.ItemIndex}
function ListBoxMultiSelect(Sender) {ListBox.MultiSelect = Sender.Checked}
function ListBoxExtendedSelect(Sender) {ListBox.ExtendedSelect = Sender.Checked}
function ListBoxColumnCount(Sender) {ListBox.ColumnCount = Sender.Text}
function ListBoxColumnWidth(Sender) {ListBox.ColumnWidth= Sender.Text}
function ListBoxItemHeight(Sender) {ListBox.ItemHeight= Sender.Text}
function TestListBox(Sender) {TestStrings(ListBox)}

//ComboBox
x = TabControl.CreateTab("Combo")
ComboTab = x
x.ImageIndex = 3
x.TextOut(10,10,"Style = CBS_DROPDOWN (Default)")
c = x.CreateComboBox(10,30,100,25)
c.Name = "Combo"
c.OnDropDown = ComboDropDown
for (q = 0; q<10; q++) c.Add("Item "+q)
c.Color = 0xF0F0FF

x.TextOut(10,80,"Style = CBS_DROPDOWNLIST")
c = x.CreateComboBox(10,100,100,25,3)
for (q = 0; q<10; q++) c.Add(" "+q)

x.TextOut(10,140,"Style = CBS_SIMPLE")
c = x.CreateComboBox(10,160,100,100,1)
for (q = 0; q<10; q++) c.Add(" "+q)

x.TextOut(220,10,"ItemHeight = 50")
c = x.CreateComboBox(220,40,100,100)
c.ItemHeight = 50
for (q = 0; q<10; q++) c.Add(" "+q)

x.TextOut(330,10,"Font.Size = 20")
c = x.CreateComboBox(330,40,100,100)
c.Font.Size = 20
for (q = 0; q<10; q++) c.Add(" "+q)


x.TextOut(220,150,"CharCase")
c = x.CreateComboBox(220,180,100,25,o.Translate("CBS_DROPDOWNLIST"))
c.Add("Lower")
c.Add("Default")
c.Add("Upper")
c.ItemIndex = 1
c.OnChange = ComboCharCase

x.CreateButton(220,210,75,25,"Test").OnClick = TestComboBox

function TestComboBox(Sender) {TestStrings(ComboTab.Combo)}
function ComboCharCase(Sender) { ComboTab.Combo.CharCase = Sender.ItemIndex - 1 }
function ComboDropDown(Sender) { List.Add("OnDropDown: ComboBox: "+Sender.Name)}

//ProgressBar
x = TabControl.CreateTab("Progress Bar")
x.ImageIndex = 4
ProgressPanel = x

x.OnShow = ShowProgressTab
x.OnHide = HideProgressTab

ProgressTimer = o.CreateTimer()
ProgressTimer.OnExecute = ProgressDown
ProgressTimer.Interval = 10

function ShowProgressTab(Sender){ProgressTimer.Active = true}
function HideProgressTab(Sender){ProgressTimer.Active = false}

p = x.CreateProgressBar(10,10,200,10)
x.CreateProgressBar(10,40,25,200,4)
x.CreateCheckBox(60,40,120,25,"Smooth",p.Smooth).OnChange = ProgressSmooth

function ProgressDown(Sender)
{
	for (var enumerator = new Enumerator(ProgressPanel.Controls); !enumerator.atEnd();enumerator.moveNext())
	{
		var xitem = enumerator.item()
		if (xitem.Type == "ProgressBar")
		{
			if (xitem.Position<xitem.Max) xitem.StepBy(1); else
				xitem.Position = xitem.Min
		}
	}
}

function ProgressSmooth(Sender)
{
	for (var enumerator = new Enumerator(ProgressPanel.Controls);!enumerator.atEnd();enumerator.moveNext())
	{
		var xitem = enumerator.item()
		if (xitem.Type == "ProgressBar")
			xitem.Smooth = Sender.Checked
	}
}

x = TabControl.CreateTab("ScrollBar")
x.ImageIndex = 18
VScroll = x.CreateScrollBar(10,10,25,280,1)
HScroll = x.CreateScrollBar(40,10,320,15)

VScroll.Min = -10
VScroll.Page = 70
VScroll.Max = 160
VScroll.OnChange = VScrollChange
HScroll.OnChange = HScrollChange

x.TextOut(40,50,"Vertical ScrollBar Position (Min = "+VScroll.Min+", Max = "+VScroll.Max+"):")
VScrollText = x.TextOut(40,75,"0")
x.TextOut(40,100,"Horizontal ScrollBar Position (Min = "+HScroll.Min+", Max = "+HScroll.Max+"):")
HScrollText = x.TextOut(40,125,"0")

function VScrollChange(Sender){VScrollText.Text = Sender.Position	}
function HScrollChange(Sender){HScrollText.Text = Sender.Position	}

t = TabControl.CreateTab("TrackBar")
t.ImageIndex = 17

TrackBarStatus = t.CreateStatusBar()

TrackBarStatus.Add(100).AutoSize = true

TrackBar = t.CreateTrackBar(10,10,200,40)
TrackBar.TickFrequency = 10
TrackBar.OnChange = TrackBarChange

t.CreateCheckBox(220,10,150,20,"Vertical",TrackBar.Vertical).OnChange = TrackBarVertical
t.CreateCheckBox(220,30,150,20,"EnableSelRange",TrackBar.EnableSelRange).OnChange = TrackBarEnableSelRange

function TrackBarChange(Sender) { TrackBarStatus[0].Text = TrackBar.Position}

TrackBarChange(TrackBar)

function TrackBarEnableSelRange(Sender) { TrackBar.EnableSelRange = Sender.Checked}

function TrackBarVertical(Sender)
{
	TrackBar.Vertical = Sender.Checked
	if (TrackBar.Vertical) TrackBar.SetBounds(POSITION_NONE,POSITION_NONE,40,200); else
		TrackBar.SetBounds(POSITION_NONE,POSITION_NONE,200,40)
}

x = t.TextOut(220,80,"TickMarks")
x = t.CreateComboBox(300,78,100,25,o.Translate("CBS_DROPDOWNLIST"))
with (x)
{
	Add("Bottom")
	Add("None")
	Add("Top")
	Add("Both")
}
x.ItemIndex = TrackBar.TickMarks+1
x.OnChange = TrackBarTickMarks

function TrackBarTickMarks(Sender)
{
	TrackBar.TickMarks = Sender.ItemIndex-1
}

StatusPanel = TabControl.CreateTab("StatusBar")
StatusPanel.ImageIndex = 6
StatusPanel.CreateStatusBar().Name = "StatusBar"
StatusPanel.StatusBar.Add(50,o.Translate("BS_NONE")).Text = "Panel A"
StatusPanel.StatusBar.Add(100,o.Translate("BS_RAISED")).Text = "Panel B"
StatusPanel.StatusBar.Add(100,o.Translate("BS_LOWERED")).Text = "Panel C"

function StatusBarSimpleChange(Sender) {  StatusPanel.StatusBar.Simple = Sender.Checked }
function StatusBarSizeGripChange(Sender) {  StatusPanel.StatusBar.SizeGrip = Sender.Checked }
function StatusBarEnum(Sender)
{
	StatusPanelBox.Clear()
	
	for (var enumerator = new Enumerator(StatusPanel.StatusBar);!enumerator.atEnd();enumerator.moveNext())
	{
		var xitem = enumerator.item()
		StatusPanelBox.add(xitem.Text+", Width = "+xitem.Width+", Border = "+xitem.Border)
	}
}
function StatusBarRemove(Sender) {StatusPanel.StatusBar.Remove(StatusPanelBox.ItemIndex)}
function StatusBarAdd(Sender)
{
    var j = f.CreateForm(0, 0, 300, 280)
    j.ClientWidth = 300
    j.ClientHeight = 260
	j.CenterControl()
	j.ControlBox = false
	j.TextOut(10, 10, "Enter StatusPanel Text")

	var NewItemName = j.CreateEdit(10, 30, 270, 25)

	j.TextOut(10, 60, "Enter StatusPanel Width")

	var NewItemWidth = j.CreateEdit(10,90,270,25)
	NewItemWidth.DataType = o.Translate("DT_INTEGER")
	NewItemWidth.Min = 0
	NewItemWidth.Text = "100"

	j.TextOut(10,122,"Border")
	
    var NewItemBorder = j.CreateComboBox(x.Width+20,120,100,25,o.Translate("CBS_DROPDOWNLIST"))
    NewItemBorder.Add("Lowered")
    NewItemBorder.Add("None")
    NewItemBorder.Add("Raised")
    NewItemBorder.ItemIndex = 0
	
	var NewItemAutoSize = j.CreateCheckBox(10,150,100,25,"AutoSize",false)
	
	var OkButton = j.CreateButton(100,180,75,25,"OK")
	OkButton.OnClick = StatusBarAdd
	OkButton.Default = true

	var CancelButton = j.CreateButton(200,180,75,25,"Cancel")
	CancelButton.OnClick = ButtonClose
	CancelButton.Cancel = true

	j.ShowModal()
	j.Destroy()
	
	function StatusBarAdd(Sender)
	{
	    var NewItem = StatusPanel.StatusBar.Add(NewItemWidth.Text)
	    NewItem.Text = NewItemName.Text
	    NewItem.Border = NewItemBorder.ItemIndex - 1
	    NewItem.AutoSize = NewItemAutoSize.Checked

		Sender.Form.Close()
	}
}

StatusPanel.CreateCheckBox(10,10,120,25,"Simple",StatusPanel.StatusBar.Simple).OnChange = StatusBarSimpleChange
StatusPanel.CreateCheckBox(10,40,120,25,"SizeGrip",StatusPanel.StatusBar.SizeGrip).OnChange = StatusBarSizeGripChange

StatusPanelBox = StatusPanel.CreateListBox(10,80,280,180)

StatusPanel.CreateButton(300,10,75,25,"Enum").OnClick = StatusBarEnum
StatusPanel.CreateButton(300,40,75,25,"Remove").OnClick = StatusBarRemove
StatusPanel.CreateButton(300,70,75,25,"Add").OnClick = StatusBarAdd

x = TabControl.CreateTab("HyperLink")
x.ImageIndex = 7
t = x.CreateHyperLink(10,10,100,25,"www.ru")

t = TabControl.CreateTab("ListView")
t.ImageIndex = 12

x = t.CreateComboBox(280,10,100,25,o.Translate("CBS_DROPDOWNLIST"))
with (x)
{
	x.Add("Normal")
	x.Add("Report")
	x.Add("Small")
	x.Add("List")
}
x.ItemIndex = 0
x.OnChange = ListViewStyle

ListViewStatus = t.CreateStatusBar()
ListViewStatus.Add(150).AutoSize = true
ListViewStatus.Add(150).AutoSize = true

x = t.CreateListView(10,10,260,260)
x.HideSelection = false
x.OnDblClick = ControlDblClick
x.OnChange = ListViewChange
x.Font.Color = 0x00FF0000
x.Color = 0x00FFE0E0
x.TextBkColor = 0x00FFF0F0
ListView = x
x.LargeImages = images
x.SmallImages = images
x.OnColumnResize = ColumnResize

function ColumnResize(Sender,Item)
{
	List.Add("Column Resize "+Item.Index+" "+Sender.Type)
}

j = x.Columns.Add("Column A",190)
j.ImageIndex = 1
j.DataType = 1

with (x.Columns.Add("Column B", 150, o.Translate("AL_RIGHT"))) {
    DataType = 1
    OnEndDrag = ListViewHeaderOnEndDrag
}
with (x.Columns.Add("Column C")) {
    DataType = 2
    OnEndDrag = ListViewHeaderOnEndDrag
}
with (x.Columns.Add("Column E", 200)) {
    DataType = 3
    OnEndDrag = ListViewHeaderOnEndDrag
}

function ListViewHeaderOnEndDrag(Sender) {
    List.Add("OnDragDrop: HeaderItem(ListView) " + Sender.Index)
}

function InitializeListView()
{
	ListView.BeginUpdate()
	ListView.Count = 70
	for (p=0; p<70; p++)
	{
		ListView.item(p).Text = "Item "+ p
		ListView.item(p).ImageIndex = p
		ListView.item(p).SubItems(0) = "SubItem "+p
		ListView.item(p).SubItemImage(1) = 0
	}
	for (q=0; q<50; q++) ListView.Add("By Add "+q).Checked = true
	for (q=0; q<60; q++) ListView.Insert(70+q,"By Insert "+q)
	for (q=79; q>60; q--) ListView.Remove(q) //Remove 19 Elements
	
	for (q=0; q<ListView.Count; q++) ListView.item(q).SubItems(1) = Math.floor(Math.random()*1000)
	for (q=0; q<ListView.Count; q++) ListView.item(q).SubItems(2) = Math.random()
	
	ListView.EndUpdate()
}

InitializeListView()

ListView.OnData = ListViewData
ListView.OnEdited = ListViewEdited

function ListViewEdited(Sender,Item,NewTextPtr)
{
	List.Add("ListView OnEdit: "+Item.Index+", OldText: "+Item.Text+", NewText: "+NewTextPtr.Value)
}

function ListViewData(Sender,Item)
{
	Item.Text = "OwnerData Item "+Item.Index
	Item.ImageIndex = Item.Index - Math.floor(Item.Index / 7)*7
	Item.Checked = Item.Index - Math.floor(Item.Index / 2)*2
	Item.SubItems(0) = "SubItem #0 of "+Item.Index
	Item.SubItems(1) = "SubItem #1 of "+Item.Index
	Item.SubItemImage(1) = Item.ImageIndex+1
}

ListView.ItemIndex = 60

t.CreateCheckBox(280,40,120,20,"HideSelection",ListView.HideSelection).OnChange = ListViewHideSelection
t.CreateCheckBox(280,60,120,20,"MultiSelect",ListView.MultiSelect).OnChange = ListViewMultiSelect
t.CreateCheckBox(280,80,120,20,"CheckBoxes",ListView.CheckBoxes).OnChange = ListViewCheckBoxes
t.CreateCheckBox(280,100,120,20,"GridLines",ListView.GridLines).OnChange = ListViewGridLines
t.CreateCheckBox(280,120,120,20,"HotTrack",ListView.HotTrack).OnChange = ListViewHotTrack
t.CreateCheckBox(280,140,120,20,"RowSelect",ListView.RowSelect).OnChange = ListViewRowSelect
t.CreateCheckBox(280,160,120,20,"BorderSelect",ListView.BorderSelect).OnChange = ListViewBorderSelect
t.CreateCheckBox(280,180,120,20,"FlatScrollBars",ListView.FlatScrollBars).OnChange = ListViewFlatScrollBars
t.CreateCheckBox(280,200,120,20,"OwnerData",ListView.OwnerData).OnChange = ListViewOwnerData
t.CreateCheckBox(280,220,120,20,"ReadOnly",ListView.ReadOnly).OnChange = ListViewReadOnly
t.CreateCheckBox(280, 240, 120, 20, "WrapText", ListView.WrapText).OnChange = ListViewWrapText
t.CreateCheckBox(400, 150, 120, 20, "HeaderDragDrop", e.HeaderDragDrop).OnChange = ListViewHeaderDragDrop

t.CreateButton(400,40,100,25,"SelectAll").OnClick = ListViewSelectAll
t.CreateButton(400,70,100,25,"ClearSelection").OnClick = ListViewClearSelection
t.CreateButton(400,100,100,25,"EditItem").OnClick = ListViewEditItem

function ListViewOwnerData(Sender)
{
	ListView.OwnerData = Sender.Checked
	if (ListView.OwnerData)
	ListView.Count = 10000000; else
	InitializeListView()
}

function ListViewSelectAll(Sender)
{
	if (ListView.HideSelection)
		f.MessageBox("To see the result of selection set HideSelection to false")
	ListView.SelectAll()
}

function ListViewClearSelection(Sender)
{
	if (ListView.HideSelection)
		f.MessageBox("To see the result of selection set HideSelection to false")
	ListView.ClearSelection()
}

function ListViewEditItem(Sender)
{
	if (ListView.ReadOnly)
		f.MessageBox("To see the result of editing set ReadOnly to false")
	ListView.EditItem(ListView.ItemIndex)
}

function ListViewWrapText(Sender) { ListView.WrapText = Sender.Checked }
function ListViewReadOnly(Sender) { ListView.ReadOnly = Sender.Checked }
function ListViewFlatScrollBars(Sender) { ListView.FlatScrollBars= Sender.Checked }
function ListViewBorderSelect(Sender) { ListView.BorderSelect = Sender.Checked }
function ListViewRowSelect(Sender) { ListView.RowSelect = Sender.Checked }
function ListViewHotTrack(Sender) { ListView.HotTrack = Sender.Checked }
function ListViewGridLines(Sender) { ListView.GridLines = Sender.Checked }
function ListViewCheckBoxes(Sender) { ListView.CheckBoxes = Sender.Checked }
function ListViewMultiSelect(Sender) { ListView.MultiSelect = Sender.Checked }
function ListViewHideSelection(Sender) { ListView.HideSelection = Sender.Checked }
function ListViewStyle(Sender) { ListView.Style = Sender.ItemIndex }
function ListViewHeaderDragDrop(Sender) { ListView.HeaderDragDrop = Sender.Checked }
function ListViewChange(Sender) {
	ListViewStatus[0].Text = "ItemIndex: "+Sender.ItemIndex
	ListViewStatus[1].Text = "SelCount: "+Sender.SelCount
}

t = TabControl.CreateTab("Header")
t.ImageIndex = 13

x = t.CreateHeader(10,10,460,25)
x.OnColumnResize = ColumnResize

Header = x
x.Images = images
j = x.Add("Column A")
j.ImageIndex = 1
j.OnClick = ColumnClick
j.OnEndDrag = HeaderOnEndDrag
j = x.Add("Column B",150)
j.OnClick = ColumnClick
j.OnEndDrag = HeaderOnEndDrag
j.SortType = 1
j = x.Add("Column C", 100)
j.OnClick = ColumnClick
j.OnEndDrag = HeaderOnEndDrag

function ColumnClick(Sender)
{
	f.MessageBox("Column Click \""+Sender.Text+"\"")
}

t.CreateCheckBox(10,40,100,25,"Flat").OnClick = HeaderFlat
t.CreateCheckBox(10, 70, 100, 25, "HotTrack").OnClick = HeaderHotTrack
t.CreateCheckBox(120, 40, 100, 25, "DragDrop").OnClick = HeaderDragDrop

HeaderBox = t.CreateListBox(10,100,380,190)

t.CreateButton(400,40,75,25,"Enum").OnClick = HeaderEnum
t.CreateButton(400,70,75,25,"Remove").OnClick = HeaderRemove
t.CreateButton(400,100,75,25,"Add").OnClick = HeaderAdd

function HeaderFlat(Sender) {Header.Flat = Sender.Checked}
function HeaderHotTrack(Sender) {Header.HotTrack = Sender.Checked}
function HeaderDragDrop(Sender) { Header.DragDrop = Sender.Checked }

function HeaderOnEndDrag(Sender) {
    List.Add("OnDragDrop: HeaderItem "+Sender.Index)
}

function HeaderEnum(Sender)
{
	HeaderBox.Clear()	
	
	for (var enumerator = new Enumerator(Header);!enumerator.atEnd();enumerator.moveNext())
	{
		var xitem = enumerator.item()
		HeaderBox.add(xitem.Text+", Width = "+xitem.Width+", TextAlign = "+xitem.TextAlign+", ImageIndex = "+xitem.ImageIndex+", Order = "+xitem.Order)
	}
}
function HeaderRemove(Sender) {Header.Remove(HeaderBox.ItemIndex)}
function HeaderAdd(Sender)
{
    var j = f.CreateForm(0, 0, 300, 280)
    j.ClientWidth = 300
    j.ClientHEight = 260
	j.CenterControl()
	j.ControlBox = false
	j.TextOut(10, 10, "Enter HeaderItem Text")

	var NewItemText = j.CreateEdit(10, 30, 270, 25)

	j.TextOut(10,60,"Enter HeaderItem Width")
	
    var NewItemWidth = j.CreateEdit(10,90,270,25)
    NewItemWidth.DataType = o.Translate("DT_INTEGER")
    NewItemWidth.Min = 0
    NewItemWidth.Text = "100"

	j.TextOut(10,122,"TextAlign")
	
    var NewItemTextAlign = j.CreateComboBox(x.Width+20,120,100,25,o.Translate("CBS_DROPDOWNLIST"))
	NewItemTextAlign.Add("Left")
	NewItemTextAlign.Add("Center")
	NewItemTextAlign.Add("Right")
	NewItemTextAlign.ItemIndex = 0

	j.TextOut(10,152,"ImageIndex")
	
    var NewItemImageIndex = j.CreateEdit(x.Width+20,150,100,25)
    NewItemImageIndex.DataType = o.Translate("DT_INTEGER")
    NewItemImageIndex.Text = -1
	
	var OKButton = j.CreateButton(100,180,75,25,"OK")
	OKButton.OnClick = HeaderAddItem
	OKButton.Default = true

	var CancelButton = j.CreateButton(200,180,75,25,"Cancel")
	CancelButton.OnClick = ButtonClose
	CancelButton.Cancel = true

	j.ShowModal()
	j.Destroy()
	
	function HeaderAddItem(Sender)
	{
	    var NewItem = Header.Add(NewItemText.Text)
	    NewItem.Width = NewItemWidth.Text
	    switch (NewItemTextAlign.ItemIndex)
		{
		    case 0: NewItem.TextAlign = o.Translate("AL_LEFT"); break
		    case 1: NewItem.TextAlign = o.Translate("AL_CENTER"); break
		    case 2: NewItem.TextAlign = o.Translate("AL_RIGHT"); break
		}
        NewItem.ImageIndex = NewItemImageIndex.Text
        NewItem.OnClick = ColumnClick
		Sender.Form.Close()
	}
}

t = TabControl.CreateTab("TreeView")
t.ImageIndex = 14

x = t.CreateTreeView(10,10,200,260)

TreeViewStatus = t.CreateStatusBar()
TreeViewStatus.Add(100).AutoSize = true

TreeView = x
x.Font.Color = 0x00FF0000
x.Color = 0x00FFE0E0
x.Images = images
x.OnEdited = TreeViewEdited
x.OnChange = TreeViewChange
x.OnExpanding = TreeViewExpanding
x.OnExpanded = TreeViewExpanded
x.OnCollapsing = TreeViewCollapsing
x.OnCollapsed = TreeViewCollapsed

j = x.Items.Add("Root",0)
x.Items.Add("ExRoot",0)
x = j.Add("Item A",1)
for (p = 0; p<10; p++) x.Add("SubItem "+p,p)
j.Add("Item B",2)
j.Add("Item C",3)
j.Add("Item D",4)
j.Add("Item E",5)
j.Add("Item F",6)
j.Add("Item G",7)
j.Add("Item H",8)
x = j.Insert(7,"Inserted to 7",9)
x.Add("B")
x.Add("C")
x.Add("A")
x.Add("Z")
x.Add("A")
x.Add("F")
j.Expand()
j.Selected = true
j.Bold = true

t.CreateButton(220,10,75,25,"Info").OnClick = TreeViewInfoSelected
t.CreateButton(300,10,75,25,"Add").OnClick = TreeViewAddItem
t.CreateButton(380,10,75,25,"Remove").OnClick = TreeViewRemoveItem

TreeItems = t.CreateListBox(220,40,230,110)

t.CreateCheckBox(220,150,120,20,"HasButtons",TreeView.HasButtons).OnChange = TreeViewHasButtonsClick
t.CreateCheckBox(220,170,120,20,"HasLines",TreeView.HasLines).OnChange = TreeViewHasLinesClick
t.CreateCheckBox(220,190,120,20,"LinesAtRoot",TreeView.LinesAtRoot).OnChange = TreeViewLinesAtRoot
t.CreateCheckBox(220,210,120,20,"ReadOnly",TreeView.ReadOnly).OnChange = TreeViewReadOnly
t.CreateCheckBox(220,230,120,20,"CheckBoxes",TreeView.CheckBoxes).OnChange = TreeViewCheckBoxes
t.CreateCheckBox(220,250,120,20,"HotTrack",TreeView.HotTrack).OnChange = TreeViewHotTrack
t.CreateCheckBox(340,190,120,20,"RowSelect",TreeView.RowSelect).OnChange = TreeViewRowSelect
t.CreateCheckBox(340,210,120,20,"HideSelection",TreeView.HideSelection).OnChange = TreeViewHideSelection
t.CreateCheckBox(340,230,120,20,"AutoExpand",TreeView.AutoExpand).OnChange = TreeViewAutoExpand

t.CreateButton(340,150,75,25,"EditLabel").OnClick = TreeViewEditItem

function TreeViewAutoExpand(Sender) {TreeView.AutoExpand = Sender.Checked }
function TreeViewHideSelection(Sender) {TreeView.HideSelection = Sender.Checked }
function TreeViewHotTrack(Sender) {TreeView.HotTrack = Sender.Checked }
function TreeViewRowSelect(Sender) {TreeView.RowSelect = Sender.Checked }
function TreeViewCheckBoxes(Sender) {TreeView.CheckBoxes = Sender.Checked }
function TreeViewReadOnly(Sender) {TreeView.ReadOnly = Sender.Checked }
function TreeViewLinesAtRoot(Sender) {TreeView.LinesAtRoot = Sender.Checked }
function TreeViewHasLinesClick(Sender) {TreeView.HasLines = Sender.Checked }
function TreeViewHasButtonsClick(Sender) {TreeView.HasButtons = Sender.Checked }

function TreeViewExpanding(Sender,Item)
{
	List.Add("TreeView Expanding: "+Item.Text)
}

function TreeViewExpanded(Sender,Item)
{
	List.Add("TreeView Expanded: "+Item.Text)
}

function TreeViewCollapsing(Sender,Item)
{
	List.Add("TreeView Collapsing: "+Item.Text)
}

function TreeViewCollapsed(Sender,Item)
{
	List.Add("TreeView Collapsed: "+Item.Text)
}

function TreeViewChange(Sender)
{
	if (Sender.SelectedItem == null)
		TreeViewStatus[0].Text = ""; else
		TreeViewStatus[0].Text = Sender.SelectedItem.Text
}

function TreeViewEdited(Sender,Item,NewTextPtr)
{
	List.Add("TreeView OnEdit: OldText: "+Item.Text+", NewText: "+NewTextPtr.Value)
}

function TreeViewAddItem(Sender)
{
	var t = TreeView.SelectedItem
	if (TreeView.SelectedItem == null)
	if (TreeView.Items.Count == 0)
	t = TreeView.Items; else
	{
		f.MessageBox("No selected items in TreeView")
		return
	}
	var x = t.Add("New Item",0,0)
	t.Expand()
	x.Selected = true
	x.EditLabel()
	x = null
}

function TreeViewRemoveItem(Sender)
{
	if (TreeView.SelectedItem == null)
	{
		f.MessageBox("No selected items in TreeView")
		return
	}
	TreeView.SelectedItem.Remove()
}

function TreeViewEditItem(Sender)
{
	if (TreeView.SelectedItem == null)
	{
		f.MessageBox("No selected items in TreeView")
		return
	}
	
	if (TreeView.ReadOnly)
		f.MessageBox("To see the result of editing set ReadOnly to false")
	TreeView.SelectedItem.EditLabel()
}

function TreeViewInfoSelected(Sender)
{
	x = TreeView.SelectedItem
	
	if (x == null)
	{
		f.MessageBox("No selected items in TreeView")
		return
	}
	
	TreeItems.Clear()
	
	function AddItemInfo(InfoString,ItemPointer)
	{
		if (ItemPointer == null)
			TreeItems.Add(InfoString+" = NULL"); else
			TreeItems.Add(InfoString+" = "+ItemPointer.Text)
	}
	
	TreeItems.Add("Information: "+x.Text)
	TreeItems.Add("")
	
	AddItemInfo("Parent",x.Parent)
	AddItemInfo("FirstChild",x.FirstChild)
	AddItemInfo("LastChild",x.LastChild)
	AddItemInfo("NextSibling",x.NextSibling)
	AddItemInfo("LastSibling",x.LastSibling)
	TreeItems.Add("Selected "+x.Selected)
	TreeItems.Add("Expanded "+x.Expanded)
	TreeItems.Add("Bold "+x.Bold)
	TreeItems.Add("Checked "+x.Checked)
	TreeItems.Add("HasChildren "+x.HasChildren)
	
	TreeItems.Add("")
	TreeItems.Add("Enumeration:")
	TreeItems.Add("")
	
	TreeItems.Add("By Enumerator:")
	TreeItems.Add("")
	
	for (var enumerator = new Enumerator(TreeView.SelectedItem);!enumerator.atEnd();enumerator.moveNext())
	{
		var xitem = enumerator.item()
		TreeItems.add(xitem.text)
	}
	
	TreeItems.Add("")
	TreeItems.Add("By Count\\Item properties:")
	TreeItems.Add("")
	xitem = TreeView.SelectedItem
	
	TreeItems.Add("Count = "+xitem.Count)
	TreeItems.Add("")
	
	for (j = 0; j<xitem.Count; j++)
	TreeItems.Add(xitem.item(j).Text)
	
	x = null;
}

t = TabControl.CreateTab("UpDown")
t.ImageIndex = 15

UpDown = t.CreateUpDown(10,10,60,60)
UpDown.OnChange = UpDownChange

t.TextOut(100,10,"Min")
t.TextOut(100,40,"Max")
t.TextOut(100,70,"Position")

UpDownMin = x = t.CreateEdit(200,8,100,25); x.OnChange = UpDownMinChange
x.DataType = o.Translate("DT_INTEGER")
UpDownMax = x = t.CreateEdit(200,38,100,25); x.OnChange = UpDownMaxChange
x.DataType = o.Translate("DT_INTEGER")
UpDownPos = x = t.CreateEdit(200,68,100,25); x.OnChange = UpDownPosChange
x.DataType = o.Translate("DT_INTEGER")

t.CreateCheckBox(100,100,100,20,"Vertical",UpDown.Vertical).OnChange = UpDownVertical
t.CreateCheckBox(100,120,100,20,"HotTrack",UpDown.HotTrack).OnChange = UpDownHotTrack

function UpDownHotTrack(Sender){ UpDown.HotTrack = Sender.Checked}
function UpDownVertical(Sender){ UpDown.Vertical = Sender.Checked}
function UpDownMinChange(Sender){ UpDown.Min = Sender.Text}
function UpDownMaxChange(Sender){ UpDown.Max = Sender.Text}
function UpDownPosChange(Sender){ UpDown.Position = Sender.Text}

UpDownStatus = t.CreateStatusBar()
UpDownStatus.Add(100).AutoSize = true
function UpDownChange(Sender)
{
	UpDownStatus[0].Text = Sender.Position
	UpDownMin.Text = UpDown.Min
	UpDownMax.Text = UpDown.Max
	UpDownPos.Text = UpDown.Position
}

UpDownChange(UpDown)

t = TabControl.CreateTab("Animate")
t.ImageIndex = 27

Animate = t.CreateAnimate(10,10,280,100)
Animate.Open(3,true)

t.CreateCheckBox(10,200,100,20,"Transparent",Animate.Transparent).OnChange = AnimateTransparent
t.CreateCheckBox(10,220,100,20,"Center",Animate.Center).OnChange = AnimateCenter
t.CreateCheckBox(10,240,100,20,"AutoRepeat",Animate.AutoRepeat).OnChange = AnimateAutoRepeat

t.CreateButton(300,10,75,25,"Play").OnClick = AnimatePlay
t.CreateButton(300,40,75,25,"Stop").OnClick = AnimateStop
t.CreateButton(300,70,75,25,"Open").OnClick = AnimateOpen

function AnimatePlay(Sender) { Animate.Play() }
function AnimateStop(Sender) { Animate.Stop() }
function AnimateOpen(Sender) {
	s = f.OpenDialog("AVI","AVI Files (*.AVI)|*.AVI")
	if (s!="") Animate.Open(s,true)
}
function AnimateCenter(Sender) { Animate.Center = Sender.Checked }
function AnimateTransparent(Sender) { Animate.Transparent = Sender.Checked }
function AnimateAutoRepeat(Sender) { Animate.AutoRepeat = Sender.Checked }

t.TextOut(300,100,"Shell32 AVI:")
x = t.CreateComboBox(300,120,100,25,o.Translate("CBS_DROPDOWNLIST"))
for (p=0; p<8; p++) x.Add(p)
x.ItemIndex = 3
x.OnChange = Shell32AVIChange

function Shell32AVIChange(Sender) {Animate.Open(Sender.ItemIndex,true)}

t = TabControl.CreateTab("HotKey")
t.ImageIndex = 21

HotKey = t.CreateHotKey(10,10,100,25)

HotKeyStatus = t.CreateStatusBar()
HotKeyStatus.Add(100).AutoSize = true

HotKey.OnChange = HotKeyChange

function HotKeyChange(Sender)
{
	HotKeyStatus[0].Text = Sender.Key
}

t = TabControl.CreateTab("IPAddress")
t.ImageIndex = 22

IPAddress = t.CreateIPAddress(10,10,150,25)

IPStatus = t.CreateStatusBar()
IPStatus.Add(100).AutoSize = true

IPAddress.OnChange = IPAddressChange

function IPAddressChange(Sender) { IPStatus.item(0).Text = Sender.Text }

t = TabControl.CreateTab("DateTimePicker")
t.ImageIndex = 24

DateTimePicker = t.CreateDateTimePicker(10,10,150,25)
DateTimePicker.OnChange = DateTimePickerChange

DateTimePickerStatus = t.CreateStatusBar()
DateTimePickerStatus.Add(100).AutoSize = 100

t.TextOut(10,100,"Style")
x = t.CreateComboBox(10,125,100,25,o.Translate("CBS_DROPDOWNLIST"))
x.Add("Short")
x.Add("Long")
x.Add("Time")
x.OnChange = DateTimeFormatChange
x.ItemIndex = 0

function DateTimePickerChange(Sender) { DateTimePickerStatus.item(0).Text = DateTimeToString(DateTimePicker.Value)}
function DateTimeFormatChange(Sender)
{
	switch (Sender.ItemIndex)
	{
		case 0: DateTimePicker.Style = 0; break
		case 1: DateTimePicker.Style = 4; break
		case 2: DateTimePicker.Style = 9; break
	}
}

t.CreateCheckBox(10,150,150,25,"ShowCheckBox",DateTimePicker.ShowCheckBox).OnChange = DateTimePickerShowCheckBox
t.CreateCheckBox(10,170,150,25,"ShowUpDown",DateTimePicker.ShowUpDown).OnChange = DateTimePickerShowUpDown
t.CreateCheckBox(10,190,150,25,"DropDownRightAlign",DateTimePicker.DropDownRightAlign).OnChange = DateTimePickerDropDownRightAlign

function DateTimePickerShowCheckBox(Sender) { DateTimePicker.ShowCheckBox = Sender.Checked }
function DateTimePickerShowUpDown(Sender) { DateTimePicker.ShowUpDown = Sender.Checked }
function DateTimePickerDropDownRightAlign(Sender) { DateTimePicker.DropDownRightAlign = Sender.Checked }

t = TabControl.CreateTab("Calendar")
t.ImageIndex = 23
Calendar = t.CreateCalendar(10,10,200,200)
Calendar.OnChange = CalendarChange

CalendarStatus = t.CreateStatusBar()
CalendarStatus.Add(100).AutoSize = true

function DateToString(x)
{
	return x.Day+"."+x.Month+"."+x.Year
}

function DateTimeToString(x)
{
	return x.Value
	//return DateToString(x)+" "+x.Hour+"."+x.Minute+"."+x.Second
}

function CalendarChange(Sender)
{
	CalendarStatus.item(0).Text = DateToString(Calendar.SelStart)+" - "+DateToString(Calendar.SelEnd)
}

t.CreateCheckBox(300,10,150,20,"MultiSelect",Calendar.MultiSelect).OnChange = CalendarMultiSelect
t.CreateCheckBox(300,30,150,20,"TodayText",Calendar.TodayText).OnChange = CalendarTodayText
t.CreateCheckBox(300,50,150,20,"TodayCircle",Calendar.TodayCircle).OnChange = CalendarTodayCircle
t.CreateCheckBox(300,70,150,20,"WeekNumbers",Calendar.WeekNumbers).OnChange = CalendarWeekNumbers

function CalendarMultiSelect(Sender) { Calendar.MultiSelect = Sender.Checked }
function CalendarTodayText(Sender) { Calendar.TodayText = Sender.Checked }
function CalendarTodayCircle(Sender) { Calendar.TodayCircle = Sender.Checked }
function CalendarWeekNumbers(Sender) { Calendar.WeekNumbers = Sender.Checked }

t = TabControl.CreateTab("RichEdit")
t.ImageIndex = 20

RichEdit = t.CreateRichEdit(10,10,180,150)
RichEdit.Color = 0x000000FF
RichEdit.Name = "e"
RichEdit.Font.Size = 8

RichEdit.Add("Red Line")
RichEdit.SelectAll()
RichEdit.SelFont.Color = 0x000000FF
RichEdit.SelFont.Size = 19
//RichEdit.OnSelChange = RichEditSelChange

t.CreateButton(10,170,75,25,"SelFont").OnClick = RichEditSelFont
t.CreateCheckBox(10,200,150,20,"AutoURLDetect",RichEdit.AutoURLDetect).OnClick = RichEditAutoURLDetect

CreateEditPage(t)

function RichEditSelFont(Sender) {RichEdit.SelFont = f.FontDialog(RichEdit.SelFont) }
function RichEditAutoURLDetect(Sender) { RichEdit.AutoURLDetect = Sender.Checked }
function RichEditSelChange(Sender) {List.Add("OnSelChange: RichEdit")}

t = TabControl.CreateTab("ScrollBox")
t.ImageIndex = 10
k = t.CreateButton(0,0,75,0,"Button With Left Align")
k.Align = o.Translate("AL_LEFT")
t.AutoScroll = true
k = t.CreateButton(400,450,75,25,"Button 3")
k = t.TextOut(550,350,"A")
k = t.CreateButton(400,400,75,25,"Button 2")
k = t.Rectangle(500,370,100,30)
t.CreateButton(400,10,75,25,"Button 1")

t = TabControl.CreateTab("GroupBox")
t.ImageIndex = 11
t.CreateGroupBox(10,10,100,100).Text = "GroupBox"

t = TabControl.CreateTab("Panel")
t.ImageIndex = 25

Panel = x = t.CreateFrame(10,10,100,100)
x.BevelOuter = 1

t.TextOut(200,10,"BevelOuter")
x = t.CreateComboBox(300,10,100,25,o.Translate("CBS_DROPDOWNLIST"))
x.Add("Lowered")
x.Add("None")
x.Add("Raised")
x.ItemIndex = 2
x.OnChange = BevelOuterChange

t.TextOut(200,40,"BevelInner")
x = t.CreateComboBox(300,40,100,25,o.Translate("CBS_DROPDOWNLIST"))
x.Add("Lowered")
x.Add("None")
x.Add("Raised")
x.ItemIndex = 1
x.OnChange = BevelInnerChange

t.TextOut(200,80,"BorderWidth")

x = t.CreateEdit(300,80,100,25)
x.DataType = o.Translate("DT_INTEGER")
x.Min = 0
x.Text = Panel.BorderWidth
x.OnChange = PanelBorderWidth

t.TextOut(200,120,"BevelWidth")

x = t.CreateEdit(300,120,100,25)
x.Text = Panel.BevelWidth
x.DataType = o.Translate("DT_INTEGER")
x.Min = 0
x.OnChange = PanelBevelWidth

function BevelOuterChange(Sender) { Panel.BevelOuter = Sender.ItemIndex-1 }
function BevelInnerChange(Sender) { Panel.BevelInner = Sender.ItemIndex-1 }
function PanelBorderWidth(Sender) { Panel.BorderWidth = Sender.Text }
function PanelBevelWidth(Sender) { Panel.BevelWidth = Sender.Text }

t = TabControl.CreateTab("Pager")
t.ImageIndex = 5
Pager = t.CreatePager(10,10,150,150)
k = Pager.CreateFrame(0,0,1000,1000)
k.ParentColor = false
k.CreateButton(10,10,75,25,"Button A")
k.CreateButton(10,250,75,25,"Button B")
Pager.ButtonSize = 20
Pager.BorderWidth = 10
Pager.Position = 200
Pager.Color = 0x000000FF
Pager.AutoScroll = true
t.CreateCheckBox(170,10,80,25,"AutoScroll",Pager.AutoScroll).OnChange =
new Function("Sender","Pager.AutoScroll = Sender.Checked")
t.TextOut(170,50,"ButtonSize:")
PagerButtonSize = t.CreateEdit(170,70,80,25)
PagerButtonSize.DataType = o.Translate("DT_INTEGER")
PagerButtonSize.Min = 0
PagerButtonSize.Text = Pager.ButtonSize
PagerButtonSize.OnChange = new Function("Sender","Pager.ButtonSize = PagerButtonSize.Text")

t = TabControl.CreateTab("TabControl")
t.ImageIndex = 8
TabBar = t

x = t.CreateCheckBox(10,10,100,25,"Buttons")
x.OnClick = TabButtons
x.Checked = TabControl.Buttons
x.Name = "TabButtons"
x = t.CreateCheckBox(10,40,100,25,"MultiLine")
x.OnClick = TabMultiLine
x.Checked = TabControl.MultiLine
x.Name = "TabMultiLine"
x = t.CreateCheckBox(10,70,100,25,"HotTrack")
x.OnClick = TabHotTrack
x.Checked = TabControl.HotTrack
x.Name = "TabHotTrack"
x = t.CreateCheckBox(10,100,100,25,"FlatButtons")
x.OnClick = TabFlatButtons
x.Checked = TabControl.FlatButtons
x.Name = "TabFlatButtons"
x = t.CreateCheckBox(10,130,100,25,"RaggedRight")
x.OnClick = TabRaggedRight
x.Checked = TabControl.RaggedRight
x.Name = "TabRaggedRight"
x = t.CreateCheckBox(10,160,100,25,"TabsVisible")
x.OnClick = TabTabsVisible
x.Checked = TabControl.TabsVisible
x.Name = "TabTabsVisible"

function UpdateTab(Sender)
{
	TabBar.TabButtons.Checked = TabControl.Buttons
	TabBar.TabMultiLine.Checked = TabControl.MultiLine
	TabBar.TabHotTrack.Checked = TabControl.HotTrack
	TabBar.TabFlatButtons.Checked = TabControl.FlatButtons
	TabBar.TabRaggedRight.Checked = TabControl.RaggedRight
	TabBar.TabTabsVisible.Checked = TabControl.TabsVisible
}
function TabButtons(Sender) {TabControl.Buttons = Sender.Checked; UpdateTab()}
function TabMultiLine(Sender) {TabControl.MultiLine = Sender.Checked; UpdateTab()}
function TabHotTrack(Sender) {TabControl.HotTrack = Sender.Checked; UpdateTab()}
function TabFlatButtons(Sender) {TabControl.FlatButtons = Sender.Checked; UpdateTab()}
function TabRaggedRight(Sender) {TabControl.RaggedRight = Sender.Checked; UpdateTab()}
function TabTabsVisible(Sender) {TabControl.TabsVisible = Sender.Checked; UpdateTab()}

t = TabControl.CreateTab("ReBar")
t.ImageIndex = 26

t.CreateCheckBox(10,10,100,25,"Locked",ReBar.Locked).OnChange = ReBarLocked

function ReBarLocked(Sender){	ReBar.Locked = Sender.Checked}

x = TabControl.CreateTab("Graphics")

x.AutoScroll = true
x.TextOut(10,10,"Figures:").Font.Size = 10

x.Brush.Image = ResourceDir()+"Image.bmp"
Circle = x.Circle(140,210,50)
Circle.OnClick = GraphicClick
x.Brush.Default()

k = x.Line(100,10,200,10)
k.OnMouseEnter = GraphicMouseEnter
k.OnMouseLeave = GraphicMouseLeave

k = x.Line(200,100,250,150)
k.Pen.Width = 10
k.OnMouseEnter = GraphicMouseEnter
k.OnMouseLeave = GraphicMouseLeave

k = x.Line(220,100,270,150)
k.OnMouseEnter = GraphicMouseEnter
k.OnMouseLeave = GraphicMouseLeave

k = x.Line(260,100,260,150)
k.OnMouseEnter = GraphicMouseEnter
k.OnMouseLeave = GraphicMouseLeave

k = x.Rectangle(100,20,90,25)
k.OnMouseEnter = GraphicMouseEnter
k.OnMouseLeave = GraphicMouseLeave

k = x.RoundRect(200,200,100,50,20,20)
k.Color = 0x0000FF00
k.OnMouseEnter = GraphicMouseEnter
k.OnMouseLeave = GraphicMouseLeave

x.Pen.Color = 0x0000FF
x.Brush.Color = 0xFF0000

x.Brush.Style = o.Translate("B_DIAGONAL")
k = x.Ellipse(30,50,140,100)
k.OnMouseEnter = GraphicMouseEnter
k.OnMouseLeave = GraphicMouseLeave

x.TextOut(10,350,"Text:").Font.Size = 10

x.TextOut(100,370,"Italic").Font.Italic = true
x.TextOut(100,390,"Underline").Font.Underline = true
x.TextOut(100,410,"Strikethrough").Font.Strikethrough = true
x.TextOut(100,430,"Bold").Font.Bold = true
x.TextOut(100,450,"Arial Black").Font.Name = "Arial Black"

x.TextOut(250,350,"Rotated text:")
f36 = x.TextOut(250,450,"36")
f36.Font.Name = "Arial Black"
f36.Font.Size = 36
f36.Font.Angle = 1450
f36.OnMouseEnter = GraphicMouseEnter
f36.OnMouseLeave = GraphicMouseLeave

f36 = x.TextOut(300,400,"36")
f36.Font.Name = "Arial Black"
f36.Font.Size = 36
f36.Font.Angle = 450
f36.OnMouseEnter = GraphicMouseEnter
f36.OnMouseLeave = GraphicMouseLeave

t = x.Arc(150,150,150,50,150,150,300,200)
t.Color = 0x0000FFFF
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

t = x.Chord(50,150,100,150,50,200,150,250)
t.Brush.Style = o.Translate("B_CROSS")
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

t = x.Chord(100,150,50,50,150,200,100,150)
t.Brush.Style = 0
t.Pen.Color = 0x00FFFFFF
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

t = x.Pie(400,100,100,100,400,100,500,100)
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

t = x.Pie(400,10,100,90,400,10,0,0)
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

t = x.Pie(400,60,100,40,400,100,0,0)
t.Brush.Style = o.Translate("B_CLEAR")
t.Pen.Width = 7
t.Pen.Color = 0x00FF0000
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

t = x.Bevel(230,10,40,40,1,-1,1,1)
t.Brush.Default()
t.Brush.Style = 0
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

t = x.Bevel(260,20,20,20,1,-1,0,1)
t.Brush.Default()
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

t = x.Polygon(400,200,400,300,300,150)
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

//t = x.Polygon(100,100,150,200,30,150,180,150,50,200)
t = x.Polygon(200,10,250,110,130,60,280,60,150,110)
t.FillAll = true
t.Brush.Style = 1
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave
t.Left = 250

t = x.Polygon(300,200,300,300,200,150)
t.Brush.Style = 0
t.Pen.Default()
t.OnMouseEnter = GraphicMouseEnter
t.OnMouseLeave = GraphicMouseLeave

var GraphPenColor
var GraphColor

function GraphicMouseEnter(Sender)
{
	GraphPenColor = Sender.Pen.Color
	GraphColor = Sender.Color
	Sender.Color = 0x000000FF
	Sender.Pen.Color = 0x000000FF
}

function GraphicMouseLeave(Sender)
{
	Sender.Color = GraphColor
	Sender.Pen.Color = GraphPenColor
}

t = TabControl.CreateTab("Image")
t.ImageIndex = 16
Image = o.LoadImage(ResourceDir()+"WSO.JPG")
t.DrawImage(0,0,0,0,Image)
t.DrawImage(350,100,100,100,Image).DrawType = o.Translate("DI_STRETCH")

ActiveXTab = TabControl.CreateTab("ActiveX Control")
ActiveXTab.ImageIndex = 19
ActiveXTab.AutoScroll = true

var ActiveXCreated = false
function CreateActiveXControl()
{
	//x = t.CreateActiveXControl(10,10,280,260,"{22D6F312-B0F6-11D0-94AB-0080C74C7E95}");
	//m = x.Control;
	//m.Navigate("F:\\Projects\\C\\ATL\\Test.htm");
	
	x = ActiveXTab.CreateActiveXControl(10,10,460,260,"{8856F961-340A-11D0-A96B-00C04FD705A2}")
	m = x.Control
	m.Navigate(ResourceDir()+"WSO.htm")
	
	x = ActiveXTab.CreateActiveXControl(10,300,400,260,HTMLDir()+"Test.htm")
}

function TabControlChanged(Sender)
{
	if (TabControl.ItemIndex == 27)
	if (!ActiveXCreated)
	{
		ActiveXCreated = true
		CreateActiveXControl()
	}
}

TabControl.AddEventHandler("OnChange",TabControlChanged)

List.Color = 0xF0F0F0

function GetControls(Box)
{
	Box.Clear()
	
	for (var enumerator = new Enumerator(f.Controls);!enumerator.atEnd();enumerator.moveNext())
	{
		var x = enumerator.item()
		Box.add(x.Type+": "+x.Text)
	}
	
	Box.ItemIndex = 0
}

function EnumControls(Sender) {GetControls(elist)}

function ClearControls(Sender) {f.Controls.Clear()}

function DeleteControl(Sender) {f.Controls.Remove(elist.ItemIndex)}

function ExChangeControls(Sender)
{
    var j = o.CreateForm(150, 150, 450, 200)
    j.ClientWidth = 450
    j.ClientHeight = 180
	var tx = j.CreateListBox(10,10,200,100)
	GetControls(tx);
	var ty = j.CreateListBox(220,10,200,100)
	GetControls(ty)
	j.CreateButton(10,120,75,25,"ExChange").OnClick = ExChangeProc
	j.CancelButton = j.CreateButton(90,120,75,25,"Cancel")
	j.CancelButton.OnClick = ButtonClose
	j.ShowModal()
	j.Destroy()
	
	function ExChangeProc(Sender)
	{
		f.Controls.ExChange(tx.ItemIndex,ty.ItemIndex)
		j.Close()
	}
	
}

x = TabControl.CreateTab("Controls")
elist = x.CreateListBox(0,0,200,200)
elist.Align = o.Translate("AL_TOP")
x.CreateButton(0,205,75,25,"Enum").OnClick = EnumControls
x.CreateButton(80,205,75,25,"Clear").OnClick = ClearControls
x.CreateButton(0,235,75,25,"Delete").OnClick = DeleteControl
x.CreateButton(80,235,75,25,"ExChange").OnClick = ExChangeControls

function FileOpenDialog(Sender)
{
	s = Sender.Form.OpenDialog("txt","Text File | *.txt","",0)
	if (s!="")
		Sender.Form.MessageBox("File: "+s,"",0)
}

function FileSaveDialog(Sender)
{
	s = Sender.Form.SaveDialog("txt","Text File | *.txt","",0)
	if (s!="")
		Sender.Form.MessageBox("File: "+s,"",0)
}

function FolderDialog(Sender)
{
	s = Sender.Form.SelectFolderDialog("Select Folder",0)
	if (s!="")
		Sender.Form.MessageBox("Folder: "+s,"",0)
}

function PrintDialog(Sender)
{
	c = Sender.Form.PrintDialog(0)
	if (c)
	{
		Sender.Form.MessageBox(
		"Copies: "+c.Copies+"\x0D"+
		"Collate: "+c.Collate+"\x0D"+
		"Selection: "+c.Selection+"\x0D"+
		"All: "+c.All+"\x0D"+
		"Range: "+c.Range+"\x0D"+
		"ToFile: "+c.ToFile+"\x0D"+
		"FromPage: "+c.FromPage+"\x0D"+
		"ToPage: "+c.ToPage+"\x0D"+
		"Driver: "+c.Driver+"\x0D"+
		"Device: "+c.Device+"\x0D"+
		"Port: "+c.Port,"",0)
	}
}

function PrinterSetupDialog(Sender)
{
	c = Sender.Form.PrinterSetupDialog(0)
	if (c)
	{
		Sender.Form.MessageBox(
		"Driver: "+c.Driver+"\x0D"+
		"Device: "+c.Device+"\x0D"+
		"Port: "+c.Port,"",0)
	}
}

function PageSetupDialog(Sender)
{
	c = Sender.Form.PageSetupDialog(0)
	if (c)
	{
		Sender.Form.MessageBox(
		"PaperWidth: "+c.PaperWidth+"\x0D"+
		"PaperHeight: "+c.PaperHeight+"\x0D"+
		"LeftMargin: "+c.LeftMargin+"\x0D"+
		"RightMargin: "+c.RightMargin+"\x0D"+
		"TopMargin: "+c.TopMargin+"\x0D"+
		"BottomMargin: "+c.BottomMargin+"\x0D"+
		"Driver: "+c.Driver+"\x0D"+
		"Device: "+c.Device+"\x0D"+
		"Port: "+c.Port,"",0)
	}
}

d = TabControl.CreateTab("Dialogs")
d.ParentColor = true

d.CreateButton(0,0,110,25,"File Open").OnClick = FileOpenDialog
d.CreateButton(0,30,110,25,"File Save").OnClick = FileSaveDialog
d.CreateButton(0,60,110,25,"Folder Dialog").OnClick = FolderDialog
d.CreateButton(0,90,110,25,"Print").OnClick = PrintDialog
d.CreateButton(0,120,110,25,"Print Setup").OnClick = PrinterSetupDialog
d.CreateButton(0,150,110,25,"Page Setup").OnClick = PageSetupDialog
d.CreateButton(0,180,110,25,"Font Dialog").OnClick = FontDialog
d.CreateButton(0,210,110,25,"Color Dialog").OnClick = ColorDialog
d.CreateButton(120,0,110,25,"Find Dialog").OnClick = FindDialog
d.CreateButton(120,30,110,25,"Replace Dialog").OnClick = ReplaceDialog
FontText = d.TextOut(120,100,"Text")

function FontDialog(Sender)
{
	FontText.Font = f.FontDialog(FontText.Font)
}

function ColorDialog(Sender)
{
	FontText.Color = f.ColorDialog(FontText.Color)
}

function FindDialog(Sender)
{
	t = f.CreateFindDialog("FindText",o.Translate("FR_SHOWHELP | FR_DOWN"))
	t.OnFind = OnFindReplaceDialogFind
	t.OnReplace = OnFindReplaceDialogReplace
	t.OnReplaceAll = OnFindReplaceDialogReplaceAll
	t.OnClose = OnFindReplaceDialogClose
	t.OnHelp = OnFindReplaceDialogHelp
}

function ReplaceDialog(Sender)
{
	t = f.CreateReplaceDialog("FindText","ReplaceText")
	t.OnFind = OnFindReplaceDialogFind
	t.OnReplace = OnFindReplaceDialogReplace
	t.OnReplaceAll = OnFindReplaceDialogReplaceAll
	t.OnClose = OnFindReplaceDialogClose
	t.OnHelp = OnFindReplaceDialogHelp
}

function OnFindReplaceDialogFind(Sender)
{
	f.MessageBox("OnFind: \nFindText ="+Sender.FindText+"\nReplaceText ="+Sender.ReplaceText+
	"\nSearchDown ="+Sender.SearchDown+"\nMatchCase ="+Sender.MatchCase+
	"\nWholeWord ="+Sender.WholeWord)
}

function OnFindReplaceDialogReplace()
{
	f.MessageBox("OnReplace")
}

function OnFindReplaceDialogReplaceAll()
{
	f.MessageBox("OnReplaceAll")
}

function OnFindReplaceDialogClose()
{
	f.MessageBox("OnClose")
}

function OnFindReplaceDialogHelp()
{
	f.MessageBox("OnHelp")
}

function SelectIcon(Sender)
{
	s = Sender.Form.OpenDialog("ico","Icons (*.ico) | *.ico",0)
	if (s!="")
		Sender.Form.Icon = s
}

function MaximizeBoxClick(Sender) {Sender.Form.MaximizeBox = Sender.Checked}
function MinimizeBoxClick(Sender) {Sender.Form.MinimizeBox = Sender.Checked}
function ControlBoxClick(Sender) {Sender.Form.ControlBox = Sender.Checked}
function SizeGripClick(Sender) {Sender.Form.SizeGrip = Sender.Checked}
function TopMostClick(Sender) {Sender.Form.TopMost = Sender.Checked}
function ToolWindowClick(Sender) {Sender.Form.ToolWindow = Sender.Checked}
function CaptionClick(Sender) {Sender.Form.Caption = Sender.Checked}

d = TabControl.CreateTab("Form")
d.ImageIndex = 9
d.CreateButton(10,10,75,25,"Select Icon").OnClick = SelectIcon
d.CreateCheckBox(10,40,100,25,"MaximizeBox",f.MaximizeBox).OnChange = MaximizeBoxClick
d.CreateCheckBox(10,70,100,25,"MinimizeBox",f.MinimizeBox).OnChange = MinimizeBoxClick
d.CreateCheckBox(10,100,100,25,"ControlBox",f.ControlBox).OnChange = ControlBoxClick
d.CreateCheckBox(10,130,100,25,"SizeGrip",f.SizeGrip).OnChange = SizeGripClick
d.CreateCheckBox(10,160,100,25,"TopMost",f.TopMost).OnChange = TopMostClick
d.CreateCheckBox(10,190,100,25,"ToolWindow",f.ToolWindow).OnChange = ToolWindowClick
d.CreateCheckBox(10,220,100,25,"Caption",f.Caption).OnChange = CaptionClick

function FormColor(Sender) { Sender.Form.Color = Sender.Form.ColorDialog(Sender.Form.Color) }
b = d.CreateButton(100,10,75,25,"Color")
b.Flat = true
b.OnClick = FormColor

function ControlSelect(Sender) {	TabControl.ItemIndex = Sender.UserData}

function MenuClick(Sender) {	f.MessageBox(Sender.Text,"",0)}

m = f.PopupMenu.Add("Open","Ctrl+O")
m.ImageIndex = 0
m.OnExecute = FileOpenDialog

m = f.PopupMenu.Add("Save","Ctrl+S")
m.ImageIndex = 1
m.OnExecute = FileSaveDialog

m = f.PopupMenu.Add("Print","Ctrl+P")
m.ImageIndex = 2
m.OnExecute = PrintDialog
x = m

m = f.PopupMenu.Add("Preview")
m.ImageIndex = 3
m.OnExecute = MenuClick

m = f.PopupMenu.Add("History")
m.ImageIndex = 11
m.OnExecute = MenuClick

HelpItem = f.PopupMenu.Add("Help","F1")
HelpItem.OnExecute = HelpHelp
HelpItem.ImageIndex = 15

AboutItem = f.PopupMenu.Add("About")
AboutItem.OnExecute = HelpAbout
AboutItem.ImageIndex = 9

m = f.PopupMenu.Add("-")
m = f.PopupMenu.Add("Exit")
m.Key = 27
m.OnExecute = ButtonClose
m.ImageIndex = 16

f.PopupMenu.NewLine()
m = f.PopupMenu.Add("Disabled")
m.ImageIndex = 6
m.Enabled = false

f.PopupMenu.Add("Invisible").Visible = false

m = f.PopupMenu.Add("Checked")
m.Key = "CTRL+C"
m.CheckBox = true
m.Checked = true

f.PopupMenu.NewLine()
m = f.PopupMenu.Add("Radio Item A")
m.Key = "ALT+A"
m.RadioCheck = true
m.Checked = true

m = f.PopupMenu.Add("Radio Item B")
m.Key = "ALT+B"
m.RadioCheck = true
m = f.PopupMenu.Add("Radio Item C")
m.Key = "ALT+C"
m.RadioCheck = true

m = f.PopupMenu.Insert(1,"New")
m.Key = 78 | o.Translate("KB_CTRL")
m.OnExecute = MenuClick
m.ImageIndex = 10

m.Add("Object A").OnExecute = MenuClick
m.Add("Object B").OnExecute = MenuClick
m.Add("Object C").OnExecute = MenuClick
m.Add("Object D").OnExecute = MenuClick
m.Add("Object E").OnExecute = MenuClick
x = m.Add("Object F")
x.OnExecute = MenuClick
x.Break = true;
m.Add("Object J").OnExecute = MenuClick
m.Add("Object H").OnExecute = MenuClick
m.Add("Object I").OnExecute = MenuClick
m.Add("Object G").OnExecute = MenuClick

f.PopupMenu.Images = images

f.MinWidth = f.Width
f.MinHeight = 270

f.Menu.Images = images
f.Menu.Add(f.PopupMenu)

m = f.Menu.Add("Controls")
m.OnExecute = MenuClick
m.Images = ControlsImages

t = m.Add("Controls")

x = t.Add("Button"); x.OnExecute = ControlSelect; x.ImageIndex = 0
x = t.Add("Edit"); x.OnExecute = ControlSelect; x.UserData = 1; x.ImageIndex = 1
x = t.Add("ListBox"); x.OnExecute = ControlSelect; x.UserData = 2; x.ImageIndex = 2
x = t.Add("ComboBox"); x.OnExecute = ControlSelect; x.UserData = 3; x.ImageIndex = 3
x = t.Add("ProgressBar"); x.OnExecute = ControlSelect; x.UserData = 4; x.ImageIndex = 4
x = t.Add("ScrollBar"); x.OnExecute = ControlSelect; x.UserData = 5; x.ImageIndex = 18
x = t.Add("TrackBar"); x.OnExecute = ControlSelect; x.UserData = 6; x.ImageIndex = 17
x = t.Add("StatusBar"); x.OnExecute = ControlSelect; x.UserData = 7; x.ImageIndex = 6
x = t.Add("HyperLink"); x.OnExecute = ControlSelect; x.UserData = 8; x.ImageIndex = 7
x = t.Add("ListView"); x.OnExecute = ControlSelect; x.UserData = 9; x.ImageIndex = 12
x = t.Add("Header"); x.OnExecute = ControlSelect; x.UserData = 10; x.ImageIndex = 13
x = t.Add("TreeView"); x.OnExecute = ControlSelect; x.UserData = 11; x.ImageIndex = 14
x = t.Add("UpDown"); x.OnExecute = ControlSelect; x.UserData = 12; x.ImageIndex = 15
x = t.Add("Animate"); x.OnExecute = ControlSelect; x.UserData = 13; x.ImageIndex = 27
x = t.Add("HotKey"); x.OnExecute = ControlSelect; x.UserData = 14; x.ImageIndex = 21
x = t.Add("IPAddress"); x.OnExecute = ControlSelect; x.UserData = 15; x.ImageIndex = 22
x = t.Add("DateTimePicker"); x.OnExecute = ControlSelect; x.UserData = 16; x.ImageIndex = 24
x = t.Add("Calendar"); x.OnExecute = ControlSelect; x.UserData = 17; x.ImageIndex = 23
x = t.Add("RichEdit"); x.OnExecute = ControlSelect; x.UserData = 18; x.ImageIndex = 20
x = t.Add("Splitter"); x.OnExecute = ControlSelect; x.UserData = 31; x.ImageIndex = 28

t = m.Add("Containers")

x = t.Add("ScrollBox"); x.OnExecute = ControlSelect; x.UserData = 19; x.ImageIndex = 10
x = t.Add("GroupBox"); x.OnExecute = ControlSelect; x.UserData = 20; x.ImageIndex = 11
x = t.Add("Panel"); x.OnExecute = ControlSelect; x.UserData = 21; x.ImageIndex = 25
x = t.Add("Pager"); x.OnExecute = ControlSelect; x.UserData = 22; x.ImageIndex = 5
x = t.Add("TabControl"); x.OnExecute = ControlSelect; x.UserData = 23; x.ImageIndex = 8
x = t.Add("ReBar"); x.OnExecute = ControlSelect; x.UserData = 24; x.ImageIndex = 26

x = m.Add("Graphics"); x.OnExecute = ControlSelect; x.UserData = 25
x = m.Add("Image"); x.OnExecute = ControlSelect; x.UserData = 26; x.ImageIndex = 16

x = m.Add("ActiveX Control"); x.OnExecute = ControlSelect; x.UserData = 27; x.ImageIndex = 19

m.NewLine()
x = m.Add("Form Controls (Collection)"); x.OnExecute = ControlSelect; x.UserData = 28
x = m.Add("Dialogs"); x.OnExecute = ControlSelect; x.UserData = 29

x = m.Add("Form"); x.OnExecute = ControlSelect; x.UserData = 30; x.ImageIndex = 9

t = f.Menu.Add("Dialogs"); m.OnExecute = MenuClick

t.Add("File Open").OnExecute = FileOpenDialog
t.Add("File Save").OnExecute = FileSaveDialog
t.Add("Folder Dialog").OnExecute = FolderDialog
t.Add("Print").OnExecute = PrintDialog
t.Add("Print Setup").OnExecute = PrinterSetupDialog
t.Add("Page Setup").OnExecute = PageSetupDialog
t.Add("Font Dialog").OnExecute = FontDialog
t.Add("Color Dialog").OnExecute = ColorDialog
t.Add("Find Dialog").OnExecute = FindDialog
t.Add("Replace Dialog").OnExecute = ReplaceDialog

m = f.Menu.Add("Help"); m.OnExecute = MenuClick
m.Add(HelpItem)
m.NewLine()
m.Add(AboutItem)

t = ReBar.CreateMenuBar(0,0,10,0)
t.Menu = f.Menu
t = ReBar.CreateToolBar(0,0,10,0)
t.Buttons = f.PopupMenu
ReBar.InsertNewRow = false
t = ReBar.CreateEdit(0,0,150,25)
ReBar.Band(t).Text = "Edit in ReBar"
ReBar.Images = images
ReBar.Band(t).ImageIndex = 1

m = f.CreateToolBar(0,55,650,0)
m.Flat = false
m.ShowText = true
m.Buttons = f.PopupMenu

with (f.GraphFont)
{
	Name = "Arial Black"
	Size = 16
	Color = 0x000000FF
	Bold = true
	Italic = true
	Angle = 100
}
f.TextOut(15,130,"Welcome to\x0DWSO")

t = TabControl.CreateTab("Splitter")
t.ImageIndex = 28
x = t.CreateListView(0,0,100,0)
x.Align = o.Translate("AL_LEFT")
x.MinWidth = 70
x.MaxWidth = 260
s = t.CreateSplitter(o.Translate("AL_LEFT"))
j = t.CreateFrame(0,0,0,0)
j.Align = o.Translate("AL_CLIENT")
j.CreateListView(0,0,0,100).Align = o.Translate("AL_BOTTOM")
j.CreateSplitter(o.Translate("AL_BOTTOM"))
j.CreateListView(0,0,0,0).Align = o.Translate("AL_CLIENT")
j.CreateListBox(0,0,0,60).Align = o.Translate("AL_TOP")

f.Show()

o.Run()

function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}

function LibraryDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("Demo")); return s+"Demo\\JScript\\Common\\"; }
function use(s){eval(new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(LibraryDir() + s,1,false).ReadAll()) }

