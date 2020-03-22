#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

from wso import *
from wsosamples import *

def CloseFormHandler(sender):
	sender.Form.Close()

def HelpAbout(sender):
	AboutWSO(sender,"Web Browser Sample")

def FileOpen(Sender):
	s = f.OpenDialog("","HTML Files (*.HTM;*.HTML)|*.HTM;*.HTML")
	if s<>"": Browser.Control.Navigate(s)

def PathKeyDown(Sender,key,flags):
	if args[0] == 13: Browser.Control.Navigate(Sender.Text)

def GoBack(*args):
	try:
		Browser.Control.GoBack()
	except: {}

def GoForward(*args):
	try:
		Browser.Control.GoForward()
	except: {}

def GoStop(*args):
	Browser.Control.Stop()

def Refresh(*args):
	try:
		Browser.Control.Refresh()
	except: {}

def GoHome(*args):
	Browser.Control.GoHome()

def GoSearch(*args):
	Browser.Control.GoSearch()

def DownloadBegin():
	StatusBar[0].Text = "Downloading"

def DownloadComplete():
	StatusBar[0].Text = "Complete"

def TitleChange(Text):
	StatusBar[1].Text = Browser.Control.LocationName
	Path.Text = Browser.Control.LocationURL

o = win32com.client.Dispatch("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()
f.Text = "Web Browser"

R = f.CreateReBar(0,0,0,0)
M = R.CreateMenuBar(0,0,0,25)
t = M.Menu.Add("File")
OpenItem = t.Add("Open","CTRL+O")
OpenItem.OnExecute = getref(FileOpen)
t.Add("-")
t.Add("Exit","ESC").OnExecute = getref(CloseFormHandler)

q = M.Menu.Add("View")
t = q.Add("Go")
BackItem = t.Add("Back","ALT+LEFT")
BackItem.OnExecute = getref(GoBack)
ForwardItem = t.Add("Forward","ALT+RIGHT")
ForwardItem.OnExecute = getref(GoForward)
t.NewLine()
HomeItem = t.Add("Home","ALT+HOME")
HomeItem.OnExecute = getref(GoHome)

StopItem = q.Add("Stop")
StopItem.OnExecute = getref(GoStop)
RefreshItem = q.Add("Refresh","F5")
RefreshItem.OnExecute = getref(Refresh)

t = M.Menu.Add("Help")
HelpItem = t.Add("About","F1")
HelpItem.OnExecute = getref(HelpAbout)

ToolBar = R.CreateToolBar(0,0,0,25)
ToolBar.ShowText = True
ToolBar.Buttons.Add(BackItem)
ToolBar.Buttons.Add(ForwardItem)
ToolBar.Buttons.Add(StopItem)
ToolBar.Buttons.Add(RefreshItem)
ToolBar.Buttons.Add(HomeItem)
ToolBar.Buttons.Add("Search").OnExecute = getref(GoSearch)
ToolBar.Buttons.Add(OpenItem)
ToolBar.Buttons.Add("-")
ToolBar.Buttons.Add(HelpItem)

Path = R.CreateComboBox(0,0,100,25)
#R.Band(Path).Text = "Address"
Path.OnKeyDown = getref(PathKeyDown)

StatusBar = f.CreateStatusBar()
StatusBar.Add(100).AutoSize = True
StatusBar.Add(100).AutoSize = True

Browser = f.CreateActiveXControl(0,0,0,0,"{8856F961-340A-11D0-A96B-00C04FD705A2}")
Browser.Align = o.Translate("AL_CLIENT")
Browser.Events.DownloadBegin = getref(DownloadBegin)
Browser.Events.DownloadComplete = getref(DownloadComplete)
Browser.Events.TitleChange = getref(TitleChange)

f.Show()

o.Run()