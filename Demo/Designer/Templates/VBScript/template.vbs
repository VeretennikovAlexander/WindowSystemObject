Set Wso = WScript.CreateObject("Scripting.WindowSystemObject")

Set f = Wso.CreateForm(0, 0, 0, 0)

Dim FileName
Dim Text

FileName = StartupDir() + "$(context.formFileName.replace(/\\/g,'\\\\'))"

f.Design.Open(FileName)

f.CenterControl()

' To set a control properties get the control by its Id.
' f.get("Edit1").Text = "Test"

f.Show()

wso.Run()

Function StartupDir()
	Dim s
	s = WScript.ScriptFullName
	s = Left(s,InStrRev(s,"\"))
	StartupDir = s
End Function

