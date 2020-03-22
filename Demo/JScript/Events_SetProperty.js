wso = new ActiveXObject("Scripting.WindowSystemObject")

myForm = wso.createForm(0,0,650,400)
myForm.centerControl()
myForm.show()

myForm.onClick = function() {
    myForm.messageBox("OnClick")
}

myForm.onMouseMove = function(sender, x, y) {
    myForm.text = x + " " + y
}

wso.run()

