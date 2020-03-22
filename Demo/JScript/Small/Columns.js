o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 800
f.ClientHeight = 400
f.CenterControl()

f.Show()

RightFrame = f.CreateFrame(0,0,220,220)
RightFrame.Align = o.Translate("AL_RIGHT")

HeaderFrame = f.CreateFrame(0,0,200,200)
HeaderFrame.Align = o.Translate("AL_TOP")

ListView = f.CreateListView(10, 40, 400, 440, o.Translate("LVS_REPORT | LVS_OWNERDATA | LVS_SHOWSELALWAYS"));
ListView.Align = o.Translate("AL_CLIENT")
InitColumns(ListView.Columns)
ListView.HeaderDragDrop = true

Header = HeaderFrame.CreateHeader(10,10,500,25)
InitColumns(Header)
Header.DragDrop = true

function InitColumns(View)
{
	View.Add("Index", 50)
	View.Add("Name", 150)
	View.Add("Size", 50)
	View.Add("Author", 50)
	View.Add("Format", 50)
}

ColumnsConfig = RightFrame.CreateListView(10,10,200,150,o.Translate("LVS_REPORT | LVS_SHOWSELALWAYS"))
ColumnsConfig.Columns.Add("Name")
ColumnsConfig.CheckBoxes = true
for (i = 0; i<Header.Count; i++)
{
	with (ColumnsConfig.Add(Header.item(i).Text))
	{
		Checked = true
		UserData = i
	}
}

Button = RightFrame.CreateButton(10,200,60,25,"Up")
Button.OnClick = Up
Button = RightFrame.CreateButton(80,200,60,25,"Down")
Button.OnClick = Down


function Up()
{
	if (ColumnsConfig.ItemIndex < 1)
		return
	ExChange(ColumnsConfig.ItemIndex,ColumnsConfig.ItemIndex-1)
	ColumnsConfig.ItemIndex = ColumnsConfig.ItemIndex-1
}

function Down()
{
	if ((ColumnsConfig.ItemIndex < 0) || (ColumnsConfig.ItemIndex >= (ColumnsConfig.Count-1)))
		return
	ExChange(ColumnsConfig.ItemIndex,ColumnsConfig.ItemIndex+1)
	ColumnsConfig.ItemIndex = ColumnsConfig.ItemIndex+1
}

function ExChange(i,j)
{
	var Text = ColumnsConfig.Item(i).Text
	var UserData = ColumnsConfig.Item(i).UserData
	ColumnsConfig.Item(i).Text = ColumnsConfig.Item(j).Text
	ColumnsConfig.Item(i).UserData = ColumnsConfig.Item(j).UserData
	ColumnsConfig.Item(j).Text = Text
	ColumnsConfig.Item(j).UserData = UserData 
}

Button = RightFrame.CreateButton(10,240,150,25,"Visibility update")
Button.OnClick = VisibleUpdate

Button = RightFrame.CreateButton(10,280,150,25,"Apply")
Button.OnClick = Update

function Update()
{
	UpdateColumns(ListView.Columns,true)	
	UpdateColumns(Header,true)
}

function VisibleUpdate()
{
	UpdateColumns(ListView.Columns,false)	
	UpdateColumns(Header,false)
}

function UpdateColumns(View,OrderUpdate)
{
	for (i = 0; i<Header.Count; i++)
	{
		var ColumnsItem = ColumnsConfig.item(i)
		var ColumnIndex = ColumnsItem.UserData
		View.item(ColumnIndex).Visible = ColumnsItem.Checked
		if (OrderUpdate)
		{
			View.item(ColumnIndex).Order = i
		}
	}
}

function GetOrder(View)
{
	var s = ""
	for (i = 0; i<Header.Count; i++)
	{
		if (i > 0) s += ","
		s += View.item(i).Text+" = "+View.item(i).Order
	}
	return s
}

function Click()
{
	f.Text = GetOrder(Header)+" / "+GetOrder(ListView.Columns)
}
RightFrame.OnDblClick= Click

o.Run()
