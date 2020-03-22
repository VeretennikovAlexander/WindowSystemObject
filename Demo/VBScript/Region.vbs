'WindowSystemObject (WSO) example
'Copyright (C) Veretennikov A. B. 2004-2015

Set Wso = WScript.CreateObject("Scripting.WindowSystemObject")
Set Regions = Wso.Regions

Set Form = Wso.CreateForm()
Form.SizeGrip = false
Form.Caption = false
Form.MaximizeBox = false
Form.Text = "Region Demo"
Form.ClientWidth = 300
Form.ClientHeight = 200
Form.CenterControl()

Set x = Form.CreateButton(120,90,75,25,"Close")
x.OnClick = GetRef("CloseFormHandler")
x.Default = true
x.Cancel = true

Set Ellipse = Regions.CreateEllipticRgn(20,20,260,160)
Set Ring = Regions.CombineRgn(Ellipse,Regions.CreateEllipticRgn(30,30,240,140),Wso.Translate("RGN_DIFF"))
Set Star = Regions.CreatePolygonRgn(150,0,220,200,0,60,300,60,80,200,Wso.Translate("WINDING"))
Set Region = Regions.CombineRgn(Ring,Star,Wso.Translate("RGN_OR"))

Form.Region = Region

Form.Brush.Color = &H00FF0000
Form.DrawRegion 0,0,Region

Set Text = Form.TextOut(40,70,"")
Text.Font.Bold = true
Text.Font.Color = &H00FFFFFF

Set Timer1 = Wso.CreateTimer()
Timer1.Interval = 100
Timer1.Active = true
Timer1.OnExecute = GetRef("TimerExecute")

Sub TimerExecute(Sender)
	Text.Text = Now()
End Sub

Sub FormHitTest(Sender,x,y,ResultPtr)
	ResultPtr.put(Wso.Translate("HTCAPTION"))
End Sub

Form.OnHitTest = GetRef("FormHitTest")

Form.Show()

Wso.Run()

Sub CloseFormHandler(Sender)
	Sender.Form.Close()
End Sub
