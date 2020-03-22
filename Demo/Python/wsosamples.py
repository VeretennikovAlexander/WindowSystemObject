#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

from wso import *
from WSOConsts import *

def AboutWSO(sender,s):

	def CloseFormHandler(sender):
		sender.Form.Close()

	def OnHitTest(Sender,x,y,ResultPtr):
		ResultPtr.put(HTCAPTION)

	o = sender.Form.Root

	j = sender.Form.CreateDialogForm(0,0,0,0)
	j.ClientWidth = 400
	j.ClientHeight = 250
	j.CenterControl()
	t = j.Rectangle(0,0,0,75)
	t.Brush.Color = 0x00FFA0A0
	t.Brush.Style = o.Translate("B_GRADIENT | DIRECTION_TOP_BOTTOM")
	t.Brush.GradientColor = 0x00FFEEEE
	t.Pen.Color = 0x00FF5555
	t.Align = o.Translate("AL_TOP")
	
	t = j.Rectangle(0,0,0,0)
	t.Brush.Color = 0x00FFEEEE
	t.Brush.Style = o.Translate("B_GRADIENT | DIRECTION_TOP_BOTTOM")
	t.Brush.GradientColor = 0x00FFEEEE
	t.Pen.Color = 0x00FF5555
	t.Align = o.Translate("AL_CLIENT")		
	
	t = j.CreateButton(300,220,75,25,"Close")
	t.OnClick = getref(CloseFormHandler)
	t.Default = 1
	t.Cancel = 1

	t = j.TextOut(100,10,j.Root.Version.String)
	t.Font.Bold = 1
	t.Font.Name = "Arial Black"
	t.Font.Size = 14
	t.Font.Color = 0x000000FF
	t.Font.Bold = 1
	t.Font.Italic = 1
	t.Font.Angle = 5	
	j.TextOut(100,50,s).Font.Bold = 1
	j.TextOut(100,90,"(C) Veretennikov A. B. 2004 - 2006")
	j.CreateHyperLink(100,130,200,25,j.Root.Version.Url,"WSO in the Web")
	j.Color = 0x00FFEEEE
	if j.Root.Version.Trial:
		j.TextOut(100,170,"It is a Demo version of WSO\rwith several serious limitations.\rTry it and buy the full version.")
	j.Text = "About WSO"

	j.OnHitTest = getref(OnHitTest)

	j.ShowModal()
	j.Destroy()

