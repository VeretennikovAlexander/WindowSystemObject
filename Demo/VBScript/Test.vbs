'WindowSystemObject (WSO) example
'Copyright (C) Veretennikov A. B. 2004

Set Wso = WScript.CreateObject("Scripting.WindowSystemObject")

Set Form = Wso.CreateForm(0,0,650,400)
Form.CenterControl()

Sub MouseMove(this,x,y,flags)
	this.Form.StatusBar.item(0).Text = CStr(x)+" x "+CStr(y)
End Sub

Sub MouseExit(this)
	this.Form.StatusBar.item(0).Text = "No Mouse In Control"
End Sub

Sub MouseUp(this,x,y,Button,Flags)
	this.Form.MessageBox "MouseUp "+CStr(x)+" x "+CStr(y)+", Button = "+CStr(Button)
End Sub

Sub KeyDown(this,Key,Flags)
	If ((Key <> 27) And (Key <> 112)) Then this.Form.MessageBox "KeyDown "+CStr(Key)
End Sub

Sub ButtonClick(this)
	this.Form.MessageBox "Button "+this.Text+": OnClick"
End Sub

int CanCloseVar

Sub OKResult(this)
	CanCloseVar = 1
	this.Form.Close()
End Sub

Function CanClose(Sender,Result)

CanCloseVar = 0

Set CanCloseDialog = Form.CreateDialogForm(0,0,510,100)
CanCloseDialog.CenterControl()
CanCloseDialog.TextOut 10,10,"Do you really want to quit this program?"

Set YesButton = CanCloseDialog.CreateButton(10,30,75,25,"Yes")
YesButton.OnClick = GetRef("OKResult")
YesButton.Default = true

Set NoButton = CanCloseDialog.CreateButton(90,30,75,25,"No")
NoButton.OnClick = GetRef("CloseFormHandler")
NoButton.Cancel = true

Set HelpButton = CanCloseDialog.CreateButton(170,30,75,25,"Help")
HelpButton.OnClick = GetRef("HelpAbout")

CanCloseDialog.HelpButton = HelpButton
CanCloseDialog.Color = &H00FF00FF
CanCloseDialog.ShowModal()
CanCloseDialog.Destroy()

If CanCloseVar = 1 Then Result.Put(true) Else Result.Put(false)

End Function

Set Button = Form.CreateButton(10,10,75,25,"Demo")

Button.AddEventHandler "OnClick",GetRef("ButtonClick")

Set CancelButton = Form.CreateButton(100,10,75,25,"Close")
CancelButton.OnClick = GetRef("CloseFormHandler")

Form.CreateStatusBar().Name = "StatusBar"
Form.StatusBar.Add(100).AutoSize = true
Form.OnMouseMove = GetRef("MouseMove")
Form.OnMouseLeave = GetRef("MouseExit")
Form.OnMouseUp = GetRef("MouseUp")
Form.OnKeyDown = GetRef("KeyDown")
Form.OnCloseQuery = GetRef("CanClose")

Set Text1 = Form.TextOut(10,60,"WindowSystemObject")
Text1.Font.Size = 16
Text1.Color = 255
Text1.Font.Bold = true

Form.TextOut 10,100,"This sample shows how to handle events from WindowsSystemObject using VBScript."+vbCr+vbCr+"Clicking any mouse button invokes OnMouseUp event handler."+vbCr+vbCr+"Moving mouse inside this window invokes OnMouseMove event handler."+vbCr+vbCr+"(The current mouse position is displayed in the status bar)"+vbCr+vbCr+"Moving mouse outside this window invokes OnMouseLeave event handler."+vbCr+vbCr+"Clicking Demo or Close buttons invokes OnClick event handler."+vbCr+vbCr+"Pressing any key invokes OnKeyDown event handler."+vbCr+vbCr+"Try to close this window to invoke OnCloseQuery event."

Set FileMenu = Form.Menu.Add("File")
FileMenu.Add("Exit",27).OnExecute = GetRef("CloseFormHandler")

Set HelpMenu = Form.Menu.Add("Help")
HelpMenu.Add("About","F1").OnExecute = GetRef("HelpAbout")

Form.Show()

Wso.Run()

Sub HelpAbout(Sender)
	Wso.About()
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

Sub AboutWSO_OnHitTest(Sender,x,y,ResultPtr)	
	ResultPtr.put(Wso.Translate("HTCAPTION"))
End Sub

Sub CloseFormHandler(Sender)
	Sender.Form.Close()
End Sub
