#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

from wso import *
from wsosamples import *

o = win32com.client.Dispatch("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,650,400)
f.CenterControl()

def MouseMove(sender,x,y,flags):
	sender.Form.StatusBar[0].Text = str(x)+" x "+str(y)

def MouseExit(sender):
	sender.Form.StatusBar[0].Text = "No Mouse In Control"

def MouseUp(sender,x,y,button,flags):
	sender.Form.MessageBox("MouseUp "+str(x)+" x "+str(y)+", Button = "+str(button));

def KeyDown(sender,key,flags):
	if (key != 27) and (key != 112): sender.Form.MessageBox("KeyDown "+str(key))

def ButtonClick(sender):
	sender.Form.MessageBox("Button "+sender.text+": OnClick")

def CloseFormHandler(sender):
	sender.Form.Close()

CanCloseVar = 1

def OKResult(sender):
	global CanCloseVar
	CanCloseVar = 1
	sender.Form.Close()

def HelpAbout(sender):
	AboutWSO(sender,"Event Handler Sample")

def CanClose(sender,resultptr):
	global CanCloseVar
	CanCloseVar = 0
	CanCloseDialog = f.CreateDialogForm(0,0,510,100)
	CanCloseDialog.CenterControl()
	CanCloseDialog.TextOut(10,10,"Do you really want to quit this program?")

	YesButton = CanCloseDialog.CreateButton(10,30,75,25,"Yes")
	YesButton.OnClick = getref(OKResult)
	YesButton.Default = 1

	NoButton = CanCloseDialog.CreateButton(90,30,75,25,"No")
	NoButton.OnClick = getref(CloseFormHandler)
	NoButton.Cancel = 1

	HelpButton = CanCloseDialog.CreateButton(170,30,75,25,"Help")
	HelpButton.OnClick = getref(HelpAbout)

	CanCloseDialog.HelpButton = HelpButton
	CanCloseDialog.Color = 0xFF00FF
	CanCloseDialog.ShowModal()
	CanCloseDialog.Destroy()
	resultptr.Put(CanCloseVar)

Button = f.CreateButton(10,10,75,25,"Demo")

Button.AddEventHandler("OnClick",getref(ButtonClick))

CancelButton = f.CreateButton(100,10,75,25,"Close")
CancelButton.OnClick = getref(CloseFormHandler)

f.CreateStatusBar().Name = "StatusBar"
f.StatusBar.Add(100).AutoSize = 1
f.OnMouseMove = getref(MouseMove)
f.OnMouseLeave = getref(MouseExit)
f.OnMouseUp = getref(MouseUp)
f.OnKeyDown = getref(KeyDown)
f.OnCloseQuery = getref(CanClose)

Text1 = f.TextOut(10,60,"WindowSystemObject")
Text1.Font.Size = 16
Text1.Color = 255
Text1.Font.Bold = 1

f.TextOut(10,100,"This sample shows how to handle events from WindowsSystemObject using Python.\x0D\x0DClicking any mouse button invokes OnMouseUp event handler.\x0D\x0DMoving mouse inside this window invokes OnMouseMove event handler.\x0D\x0D(The current mouse position is displayed in the status bar)\x0D\x0DMoving mouse outside this window invokes OnMouseLeave event handler.\x0D\x0DClicking Demo or Close buttons invokes OnClick event handler.\x0D\x0DPressing any key invokes OnKeyDown event handler.\x0D\x0DTry to close this window to invoke OnCloseQuery event.")

FileMenu = f.Menu.Add("File")
FileMenu.Add("Exit",27).OnExecute = getref(CloseFormHandler)

HelpMenu = f.Menu.Add("Help")
HelpMenu.Add("About","F1").OnExecute = getref(HelpAbout)

f.Show()

o.Run()