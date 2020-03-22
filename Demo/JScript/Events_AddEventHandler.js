wso = new ActiveXObject("Scripting.WindowSystemObject")

myForm = wso.createForm(0,0,650,400)
myForm.centerControl()
myForm.show()

myForm.addEventHandler("OnClick", function () {
    myForm.messageBox("OnClick")
})

myForm.addEventHandler("OnMouseMove", function (sender, x, y) {
    myForm.text = x + " " + y
})

wso.run()

