wso = new ActiveXObject("Scripting.WindowSystemObject")

wso.EnableVisualStyles = true

form = wso.CreateForm(0,0,0,0)

form.ClientWidth = 150
form.ClientHeight = 100
form.CenterControl()

button = form.CreateButton(10,10,75,25,"Close")
button.OnClick = ButtonClick

function ButtonClick(Sender)
{
	form.Close()
}

form.Show()

wso.Run()
