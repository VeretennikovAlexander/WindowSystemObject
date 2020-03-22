Set Wso = WScript.CreateObject("Scripting.WindowSystemObject")

Set Form = Wso.CreateForm()

Form.ClientWidth = 500
Form.ClientHeight = 300
Form.CenterControl()

Form.Show()

Wso.Run()
