from wso import *

wso = win32com.client.Dispatch("Scripting.WindowSystemObject")

wso.EnableVisualStyles = 1

form = wso.CreateForm(0,0,0,0)
form.ClientWidth = 150
form.ClientHeight = 100
form.CenterControl()

def ButtonClick(sender):
	sender.Form.Close()

button = form.CreateButton(10,10,75,25,"Close")

button.OnClick = getref(ButtonClick)

form.Show()

wso.Run()