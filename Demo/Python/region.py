#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

from wso import *
from WSOConsts import *
from time import *

def CloseFormHandler(sender):
	sender.Form.Close()

def TimerExecute(Sender):
	t.Text = strftime("%a, %d %b %Y %H:%M:%S +0000", localtime())

def FormHitTest(Sender,x,y,resultptr):
	resultptr.put(HTCAPTION)

o = win32com.client.Dispatch("Scripting.WindowSystemObject")
r = o.Regions

f = o.CreateForm(0,0,0,0)

f.SizeGrip = False
f.Caption = False
f.MaximizeBox = False
f.Text = "Region Demo"
f.ClientWidth = 300
f.ClientHeight = 200
f.CenterControl()

x = f.CreateButton(120,90,75,25,"Close")
x.OnClick = getref(CloseFormHandler)
x.Default = True
x.Cancel = True

h = r.CreateEllipticRgn(20,20,260,160)
h = r.CombineRgn(h,r.CreateEllipticRgn(30,30,240,140),RGN_DIFF)
j = r.CreatePolygonRgn(150,0,220,200,0,60,300,60,80,200,WINDING)
h = r.CombineRgn(h,j,RGN_OR)

f.Region = h

f.Brush.Color = 0x00FF0000
f.DrawRegion(0,0,h)

t = f.TextOut(40,70,"")
t.Font.Bold = True
t.Font.Color = 0x00FFFFFF

x = o.CreateTimer()
x.Interval = 100
x.Active = True
x.OnExecute = getref(TimerExecute)

f.OnHitTest = getref(FormHitTest)

f.Show()

o.Run()

