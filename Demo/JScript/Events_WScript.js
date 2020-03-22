wso = new ActiveXObject("Scripting.WindowSystemObject")

myForm = wso.createForm(0,0,650,400)
myForm.centerControl()
myForm.show()

WScript.ConnectObject(myForm, "form_");

function form_OnClick()
{
    myForm.messageBox("OnClick")
}

function form_OnMouseMove(sender,x,y)
{
    myForm.text = x + " " + y
}

wso.run()

