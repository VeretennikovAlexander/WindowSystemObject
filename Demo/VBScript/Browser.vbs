'WindowSystemObject (WSO) example
'Copyright (C) Veretennikov A. B. 2004-2015

Set Wso = WScript.CreateObject("Scripting.WindowSystemObject")

Set Form = Wso.CreateForm()
Form.ClientWidth = 500
Form.ClientHeight = 300
Form.CenterControl()
Form.Text = "Web Browser"

Set ReBar = Form.CreateReBar(0,0,0,0)
Set MenuBar = ReBar.CreateMenuBar(0,0,0,25)

Set FileMenu = MenuBar.Menu.Add("File")
Set OpenItem = FileMenu.Add("Open","CTRL+O")
OpenItem.OnExecute = GetRef("FileOpen")

FileMenu.Add "-"
FileMenu.Add("Exit","ESC").OnExecute = GetRef("CloseFormHandler")

Set ViewMenu = MenuBar.Menu.Add("View")
Set GoMenuItem = ViewMenu.Add("Go")

Set BackItem = GoMenuItem.Add("Back","ALT+LEFT")
BackItem.OnExecute = GetRef("GoBack")

Set ForwardItem = GoMenuItem.Add("Forward","ALT+RIGHT")
ForwardItem.OnExecute = GetRef("GoForward")

GoMenuItem.NewLine()

Set HomeItem = GoMenuItem.Add("Home","ALT+HOME")
HomeItem.OnExecute = GetRef("GoHome")

Set StopItem = ViewMenu.Add("Stop")
StopItem.OnExecute = GetRef("GoStop")

Set RefreshItem = ViewMenu.Add("Refresh","F5")
RefreshItem.OnExecute = GetRef("Refresh")

Set HelpMenu = MenuBar.Menu.Add("Help")
Set HelpItem = HelpMenu.Add("About","F1")
HelpItem.OnExecute = GetRef("HelpAbout")

Set ToolBar = ReBar.CreateToolBar(0,0,0,25)
ToolBar.ShowText = true
ToolBar.Buttons.Add(BackItem)
ToolBar.Buttons.Add(ForwardItem)
ToolBar.Buttons.Add(StopItem)
ToolBar.Buttons.Add(RefreshItem)
ToolBar.Buttons.Add(HomeItem)
ToolBar.Buttons.Add("Search").OnExecute = GetRef("GoSearch")
ToolBar.Buttons.Add(OpenItem)
ToolBar.Buttons.Add("-")
ToolBar.Buttons.Add(HelpItem)

Set Path = ReBar.CreateComboBox(0,0,100,25)
ReBar.Band(Path).Text = "Address"
Path.OnKeyDown = GetRef("PathKeyDown")

Set StatusBar = Form.CreateStatusBar()
StatusBar.Add(100).AutoSize = true
StatusBar.Add(100).AutoSize = true

Set Browser = Form.CreateActiveXControl(0,0,0,0,"{8856F961-340A-11D0-A96B-00C04FD705A2}")
Browser.Align = Wso.Translate("AL_CLIENT")
Browser.Events.DownloadBegin = GetRef("DownloadBegin")
Browser.Events.DownloadComplete = GetRef("DownloadComplete")
Browser.Events.TitleChange = GetRef("TitleChange")

Sub FileOpen(Sender)
	s = Form.OpenDialog("","HTML Files (*.HTM;*.HTML)|*.HTM;*.HTML")
	If s<>"" Then Browser.Control.Navigate(s)
End Sub

Sub HelpAbout(Sender)
	Wso.About()
End Sub

Sub PathKeyDown(Sender,Key,Flags)
	If Key = 13 Then Browser.Control.Navigate(Sender.Text)
End Sub

Sub GoBack(Sender)
	On Error Resume Next
	Browser.Control.GoBack()
End Sub

Sub GoForward(Sender)
	On Error Resume Next
	Browser.Control.GoForward()
End Sub

Sub GoStop(Sender)
	Browser.Control.Stop()
End Sub

Sub Refresh(Sender)
	On Error Resume Next
	Browser.Control.Refresh()
End Sub

Sub GoHome(Sender)
	Browser.Control.GoHome()
End Sub

Sub GoSearch(Sender)
	Browser.Control.GoSearch()
End Sub

Sub DownloadBegin()
	StatusBar.Item(0).Text = "Downloading"
End Sub

Sub DownloadComplete()
	StatusBar.Item(0).Text = "Complete"
End Sub

Sub TitleChange(Text)
	StatusBar.Item(1).Text = Browser.Control.LocationName
	Path.Text = Browser.Control.LocationURL
End Sub

Form.Show()

Wso.Run()

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

Sub CloseFormHandler(Sender)
	Sender.Form.Close()
End Sub
