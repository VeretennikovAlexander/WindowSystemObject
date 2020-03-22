#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

from wso import *
from wsosamples import *

def FileOpen(sender):
	s = f.OpenDialog("","All Images (*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif)|*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif|Bitmap Files (*.bmp)|*.bmp|Metafiles (*.wmf;*.emf)|*.wmf;*.emf|Jpeg Images (*.jpg;*.jpeg)|*.jpg;*.jpeg|Icons (*.ico)|*.ico|Gif Images (*.gif)|*.gif")
	if s<>"":		
		global ImageOpened
		if ImageOpened == 1:
			z.image.Destroy()
			ImageOpened = 0
		
		Invert.Checked = 0
		z.DrawImage(0,0,0,0,s).Name = "image"
		
		if (z.image.Width>0) and (z.image.Height>0):
			f.StatusBar[0].Text = s
			f.StatusBar[1].Text = str(z.image.Width)+" x "+str(z.image.Height)
			ImageOpened = 1
		else:
			z.Image.Destroy()
			f.StatusBar[0].Text = ""
			f.StatusBar[1].Text = ""
			f.MessageBox("Cannot open image","",o.Translate("MB_ICONHAND"))

def CloseExecute(sender):
	global ImageOpened
	if ImageOpened:
		z.image.Destroy()
		ImageOpened = 0
		f.StatusBar[0].Text = ""
		f.StatusBar[1].Text = ""

def ImageHandlerUpdate(sender):
	global ImageOpened
	sender.Enabled = ImageOpened

def InvertExecute(*args):
	if Invert.Checked:
		z.image.CopyMode = o.Translate("NOTSRCCOPY")
	else:
		z.image.CopyMode = o.Translate("SRCCOPY")

def CloseFormHandler(sender):
	sender.Form.Close()

def HelpAbout(sender):
	AboutWSO(sender,"Image Viewer Demo")

o = win32com.client.Dispatch("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()
f.Text = "Image Viewer"

z = f.CreateFrame(0,0,0,0)
z.Align = o.Translate("AL_CLIENT")
z.AutoScroll = 1
z.Border = 1

f.CreateStatusBar().Name = "StatusBar"
f.StatusBar.Add(100).AutoSize = 1
f.StatusBar.Add(100).AutoSize = 1

ImageOpened = 0

t = f.Menu.Add("File")
t.Add("Open","CTRL+O").OnExecute = getref(FileOpen)
x = t.Add("Close")
x.OnExecute = getref(CloseExecute)
x.OnUpdate = getref(ImageHandlerUpdate)
t.NewLine()
t.Add("Exit","ESC").OnExecute = getref(CloseFormHandler)

t = f.Menu.Add("View")
Invert = t.Add("Invert")
Invert.CheckBox = 1
Invert.OnExecute = getref(InvertExecute)
Invert.OnUpdate = getref(ImageHandlerUpdate)

t = f.Menu.Add("Help")
t.Add("About","F1").OnExecute = getref(HelpAbout)

f.Show()

o.Run()