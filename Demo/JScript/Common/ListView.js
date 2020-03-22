
function ListViewModifyExample(Control)
{
	var Form = Control.Form.CreateDialogForm(0,0,410,500)
	Form.CenterControl()
	var Root = Form.Root

	var Right = Form.CreateFrame(0,0,100,0)
	Right.Align = Root.Translate("AL_RIGHT")

	var Bottom = Form.CreateFrame(0,0,0,70)
	Bottom.Align = Root.Translate("AL_BOTTOM")

	Right.CreateButton(10,10,75,25,"Enum").OnClick = EnumStrings
	Right.CreateButton(10,40,75,25,"Delete").OnClick = DeleteString
	Right.CreateButton(10,70,75,25,"Insert").OnClick = InsertString
	Right.CreateButton(10,100,75,25,"Add").OnClick = AddString
	Right.CreateButton(10,130,75,25,"Set").OnClick = SetString
	Right.CreateButton(10,160,75,25,"Set as Array").OnClick = SetStringArray
	Right.CreateButton(10,190,75,25,"SetTop").OnClick = SetTopIndex
	Right.CreateButton(10,220,75,25,"Clear").OnClick = ClearClick
	Right.CreateButton(10,250,75,25,"Group 0").OnClick = Group0
	Right.CreateButton(10,280,75,25,"Group 1").OnClick = Group1
	
	var CloseButton = Right.CreateButton(10,330,75,25,"Close")
	CloseButton.OnClick = ButtonClose
	CloseButton.Cancel = true

	var ListBox = Form.CreateListBox(10,40,300,200)
	ListBox.Align = Root.Translate("AL_CLIENT")
	ListBox.OnChange = ItemPropertyTest
	Bottom.TextOut(10,10,"\"Item\" Property: click mouse button on the list box")
	var Edit = Bottom.CreateEdit(10,35,200,25,0x800)

	Form.ShowModal()
	
	function EnumStrings(Sender)
	{
		ListBox.Clear()
		
		for (var enumerator = new Enumerator(Control);!enumerator.atEnd();enumerator.moveNext())
		{
			var Item = enumerator.item()
			ListBox.add(Item.Text)
		}
	}
	
	function DeleteString(Sender)
	{
		var ItemIndex = ListBox.ItemIndex
		if (ItemIndex < 0) return
		Control.Remove(ItemIndex)
		EnumStrings()
	}
	
	function InsertString(Sender)
	{
		var ItemIndex = ListBox.ItemIndex
		if (ItemIndex < 0) return
		Control.Insert(ItemIndex,"Insert String by Index: "+ItemIndex)
		EnumStrings()
	}

	function AddString(Sender)
	{
		Control.Add("Add String: "+Control.Count)
		EnumStrings()
	}
	
	function SetString(Sender)
	{
		var ItemIndex = ListBox.ItemIndex
		if (ItemIndex < 0)
			return
		Control.Item(ItemIndex).Text = "Set String by Index: "+ItemIndex
		EnumStrings()
	}
	
	function SetStringArray(Sender)
	{
		var ItemIndex = ListBox.ItemIndex
		if (ItemIndex < 0) return
		Control[ItemIndex].Text = "Set String by Index (As Array): "+ItemIndex
		EnumStrings()
	}
	
	function SetTopIndex(Sender)
	{
		var ItemIndex = ListBox.ItemIndex
		if (ItemIndex < 0) return
		Control.ItemIndex = ItemIndex
	}
	
	function ItemPropertyTest(Sender)
	{
		if (ListBox.ItemIndex < 0)
		{
			Edit.Text = ""
		} else
			Edit.Text = Control.Item(ListBox.ItemIndex).Text
	}

	function ButtonClose(Sender) 
	{ 
		Sender.Form.Close() 
	}

	function ClearClick(Sender)
	{
		Control.Clear()
		EnumStrings()
	}

	function Group0(Sender)
	{
		var ItemIndex = ListBox.ItemIndex
		if (ItemIndex < 0)
			return
		Control.Item(ItemIndex).Group = 0
		EnumStrings()
	}

	function Group1(Sender)
	{
		var ItemIndex = ListBox.ItemIndex
		if (ItemIndex < 0)
			return
		Control.Item(ItemIndex).Group = 1
		EnumStrings()
	}

}

this.ListViewModifyExample = ListViewModifyExample