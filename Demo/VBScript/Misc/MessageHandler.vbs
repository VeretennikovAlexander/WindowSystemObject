'WindowSystemObject (WSO) Sample

Set o = WScript.CreateObject("Scripting.WindowSystemObject")
Set x = WScript.CreateObject("Scripting.WindowSystemObjectExtensions")

Set f = o.CreateForm(0,0,0,0)
f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

set label1 = f.TextOut(10,10,"")

x.AddMessageHandler f,&H00000200,GetRef("MouseMoveHandler")

f.Show()
o.Run()


Sub MouseMoveHandler(Sender,Message,WParam,LParam,Result)	
	Str = Right("00000000" & Hex(LParam),8)
	StrX = "&H" & Right(Str,4)
	StrY = "&H" & Left(Str,4)
	label1.Text = CStr(CLng(StrX)) & " " & CStr(CLng(StrY))
End Sub

