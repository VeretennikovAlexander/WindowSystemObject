o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.Text = "WSO"
f.ClientWidth = 550
f.ClientHeight = 250
f.CenterControl()

var Buttons = f.Menu.Add("File")
with (Buttons)
{
	with (Add("Item Number 1"))
	{
		ImageIndex = 1
	}
	with (Add("Item 2"))
	{
		ImageIndex = 2
	}
	Add("-")
	with (Add("Item 3"))
	{
		ImageIndex = 3

		Add("Sub Item 1")
		Add("Sub Item 2")
	}
	with (Add("Item 4"))
	{
		ImageIndex = 4
		WholeDropDown = true

		Add("Sub Item 1")
		Add("Sub Item 2")
	}
}
Buttons.Images.Load(CurrentDir() + "../../Data/ToolBar.bmp")

ToolBar = f.CreateToolBar(10,10,400,50)
ToolBar.ShowText = true
ToolBar.AutoSizeButtons = false
ToolBar.ButtonWidth = 20
ToolBar.MinButtonWidth = 100
ToolBar.MaxButtonWidth = 100
ToolBar.MaxTextRows = 10
Init(ToolBar)
ToolBar.Font.Size = 16

ToolBar = f.CreateToolBar(10,90,400,50)
ToolBar.ShowText = true
ToolBar.PaddingX = 20
ToolBar.PaddingY = 20
ToolBar.ButtonSpacingX = 20
ToolBar.ButtonSpacingY = 20
Init(ToolBar)
ToolBar.Font.Size = 14

ToolBar = f.CreateToolBar(10,190,400,50)
Init(ToolBar)
ToolBar.Font.Size = 14


function Init(ToolBar)
{
	ToolBar.Buttons = Buttons
}

f.Show()

o.Run()


function CurrentDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("\\")+1); return s; }
