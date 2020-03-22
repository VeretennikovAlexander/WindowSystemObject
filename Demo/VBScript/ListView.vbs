'WindowSystemObject (WSO) example
'Copyright (C) Veretennikov A. B. 2004-2015

Set Wso = WScript.CreateObject("Scripting.WindowSystemObject")

Set Form = Wso.CreateForm()
Form.ClientWidth = 600
Form.ClientHeight = 300
Form.CenterControl()
Form.Text = "ListView Sample"

Set RightPanel = Form.CreateFrame(0,0,100,0)
RightPanel.Align = Wso.Translate("AL_RIGHT")

Set View = Form.CreateListView(0,0,0,0)
View.Align = Wso.Translate("AL_CLIENT")
View.RowSelect = true
View.Style = Wso.Translate("LVS_REPORT")
View.HideSelection = false

View.Columns.Add "Column A",70
View.Columns.Add "Column B",100
View.Columns.Add "Column C",150

Set Images = Wso.CreateImageList()
Images.Load(ResourceDir()+"ToolBar.bmp")

View.LargeImages = Images
View.SmallImages = Images

For counter = 1 To 10
	Set Item = View.Add(counter)
	Item.SubItems(0) = "SubItem 1 of "+CStr(counter)
	Item.SubItems(1) = "SubItem 2 of "+CStr(counter)
	Item.ImageIndex = counter Mod 15
Next

Set CloseButton = RightPanel.CreateButton(10,10,75,25,"Close")
CloseButton.OnClick = GetRef("CloseFormHandler")

Set ExecuteItem = RightPanel.CreateButton(10,50,75,25,"Execute")
ExecuteItem.OnClick = GetRef("ExecuteItemHandler")


Set AddItem = RightPanel.CreateButton(10,90,75,25,"Add")
AddItem.OnClick = GetRef("AddItemHandler")

Set DeleteItem = RightPanel.CreateButton(10,130,75,25,"Delete")
DeleteItem.OnClick = GetRef("DeleteItemHandler")

Form.Show()

Wso.Run()

Sub CloseFormHandler(Sender)
	Sender.Form.Close()
End Sub

Sub ExecuteItemHandler(Sender)
	If View.ItemIndex >= 0 Then
		Form.MessageBox("Item "+CStr(View.ItemIndex) +" selected")
	Else
		Form.MessageBox("No items selected")	
	End If
End Sub

Sub DeleteItemHandler(Sender)	
	View.BeginUpdate()

	For i = View.Count-1 To 0 Step -1

		if View.Item(i).Selected Then
			View.Remove(i)
		End If
	Next

	View.EndUpdate()
	View.ClearSelection()
End Sub

Sub AddItemHandler(Sender)
	Set Item = View.Add(counter)
	Item.SubItems(0) = "SubItem 1 of "+CStr(counter)
	Item.SubItems(1) = "SubItem 2 of "+CStr(counter)
	Item.ImageIndex = counter Mod 15
	counter = counter + 1
End Sub

Function ResourceDir()
	ResourceDir = StartupDir()+"..\\Data\\"
End Function

Function StartupDir()
	Dim s
	s = WScript.ScriptFullName
	s = Right(s,InStrRev(s,"\\"))
	StartupDir = s
End Function

