Set Wso = WScript.CreateObject("Scripting.WindowSystemObject")

wso.EnableVisualStyles = true

Set Form = Wso.CreateForm()
Form.ClientWidth = 150
Form.ClientHeight = 100
Form.CenterControl()

Set Button = form.CreateButton(10,10,75,25,"Close")

Button.OnClick = GetRef("ButtonClick")

Sub ButtonClick(this)
	form.Close()
End Sub

Form.Show()

Wso.Run()