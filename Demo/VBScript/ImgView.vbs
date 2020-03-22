'WindowSystemObject (WSO) example
'Copyright (C) Veretennikov A. B. 2004-2015

Set Wso = WScript.CreateObject("Scripting.WindowSystemObject")

Set Form = Wso.CreateForm()
Form.ClientWidth = 500
Form.ClientHeight = 300
Form.CenterControl()
Form.Text = "Image Viewer"

Set Frame = Form.CreateFrame(0,0,0,0)
Frame.Align = Wso.Translate("AL_CLIENT")
Frame.AutoScroll = true
Frame.Border = true

Form.CreateStatusBar().Name = "StatusBar"
Form.StatusBar.Add(100).AutoSize = true
Form.StatusBar.Add(100).AutoSize = true

Dim ImageOpened
ImageOpened = False

Set FileMenu = Form.Menu.Add("File")
FileMenu.Add("Open","CTRL+O").OnExecute = GetRef("FileOpen")

Set CloseMenuItem = FileMenu.Add("Close")
CloseMenuItem.OnExecute = GetRef("CloseExecute")
CloseMenuItem.OnUpdate = GetRef("ImageHandlerUpdate")

FileMenu.NewLine()
FileMenu.Add("Exit","ESC").OnExecute = GetRef("CloseFormHandler")

Set ViewMenu = Form.Menu.Add("View")
Set Invert = ViewMenu.Add("Invert")
Invert.CheckBox = true
Invert.OnExecute = GetRef("InvertExecute")
Invert.OnUpdate = GetRef("ImageHandlerUpdate")

Set HelpMenu = Form.Menu.Add("Help")
HelpMenu.Add("About","F1").OnExecute = GetRef("AboutClick")

Form.Show()

Wso.Run()

Sub FileOpen(Sender)
	s = Form.OpenDialog("","All Images (*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif)|*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif|Bitmap Files (*.bmp)|*.bmp|Metafiles (*.wmf;*.emf)|*.wmf;*.emf|Jpeg Images (*.jpg;*.jpeg)|*.jpg;*.jpeg|Icons (*.ico)|*.ico|Gif Images (*.gif)|*.gif")
	If s<>"" Then
		
		If ImageOpened = True Then
			Frame.image.Destroy()
			ImageOpened = False
		End If
		
		Invert.Checked = false
		Frame.DrawImage(0,0,0,0,s).Name = "image"
		
		If (Frame.image.Width>0) And (Frame.image.Height>0) Then
			Form.StatusBar.item(0).Text = s
			Form.StatusBar.item(1).Text = CStr(Frame.image.Width)+" x "+CStr(Frame.image.Height)
			ImageOpened = True
			Else
			Frame.Image.Destroy()
			Form.StatusBar.item(0).Text = ""
			Form.StatusBar.item(1).Text = ""
			Form.MessageBox "Cannot open image","",Wso.Translate("MB_ICONHAND")
		End If
	End If
End Sub

Sub AboutClick(Sender)
	AboutWSO Sender,"Image Viewer Demo"
End Sub

Sub ImageHandlerUpdate(Sender)
	Sender.Enabled = ImageOpened
End Sub

Sub InvertExecute(Sender)
	If Invert.Checked Then
		Frame.image.CopyMode = Wso.Translate("NOTSRCCOPY")
		Else
		Frame.image.CopyMode = Wso.Translate("SRCCOPY")
	End If
End Sub

Sub CloseExecute(Sender)
	if ImageOpened Then
		Frame.image.Destroy()
		ImageOpened = False
		Form.StatusBar.item(0).Text = ""
		Form.StatusBar.item(1).Text = ""
	End If
End Sub

Function StartupDir()
	Dim s
	s = WScript.ScriptFullName
	s = Left(s,InStrRev(s,"\"))
	StartupDir = s
End Function

Sub WSOHelp(Sender)
	Set shell = WScript.CreateObject("WScript.Shell")
	shell.Run """"+StartupDir() + "..\..\wso.chm"+""""
End Sub

Sub AboutWSO(Sender,s)
	Set DialogForm = Sender.Form.CreateDialogForm()
	DialogForm.ClientWidth = 400
	DialogForm.ClientHeight = 250
	DialogForm.CenterControl()

	Set Rectangle = DialogForm.Rectangle(0,0,0,75)
	Rectangle.Brush.Color = &H00FFA0A0
	Rectangle.Brush.Style = Wso.Translate("B_GRADIENT | DIRECTION_TOP_BOTTOM")
	Rectangle.Brush.GradientColor = &H00FFEEEE
	Rectangle.Pen.Color = &H00FF5555
	Rectangle.Align = Wso.Translate("AL_TOP")	

	Set Rectangle = DialogForm.Rectangle(0,0,0,0)
	Rectangle.Brush.Color = &H00FFEEEE
	Rectangle.Brush.Style = Wso.Translate("B_GRADIENT | DIRECTION_TOP_BOTTOM")
	Rectangle.Brush.GradientColor = &H00FFEEEE
	Rectangle.Pen.Color = &H00FF5555
	Rectangle.Align = Wso.Translate("AL_CLIENT")		

	Set CloseButton = DialogForm.CreateButton(220,220,75,25,"Close")
	CloseButton.OnClick = GetRef("CloseFormHandler")
	CloseButton.Default = true
	CloseButton.Cancel = true

	Set HelpButton = DialogForm.CreateButton(300,220,75,25,"Help")
	HelpButton.OnClick = GetRef("WSOHelp")
	DialogForm.HelpButton = HelpButton

	Set Text = DialogForm.TextOut(100,10,DialogForm.Root.Version.String)
	Text.Font.Bold = true
	Text.Font.Name = "Arial Black"
	Text.Font.Size = 14
	Text.Font.Color = &H000000FF
	Text.Font.Bold = true
	Text.Font.Italic = true
	Text.Font.Angle = 5

	DialogForm.DrawImage 40,10,32,32,StartupDir()+"..\Data\WSO.ICO"
	DialogForm.TextOut(100,50,s).Font.Bold = true
	DialogForm.TextOut 100,90,"(C) Veretennikov A. B. 2004 - 2015"
	DialogForm.CreateHyperLink 100,130,200,25,DialogForm.Root.Version.Url,"WSO in the Web"
	DialogForm.Color = &H00FFEEEE	
	DialogForm.Text = "About WSO"

	DialogForm.OnHitTest = GetRef("AboutWSO_OnHitTest")

	DialogForm.ShowModal()
	DialogForm.Destroy()
End Sub

Sub AboutWSO_OnHitTest(Sender,x,y,ResultPtr)	
	ResultPtr.put(Wso.Translate("HTCAPTION"))
End Sub

Sub CloseFormHandler(Sender)
	Sender.Form.Close()
End Sub
