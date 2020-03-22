//WindowSystemObject (WSO) example
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm(0,0,650,400)
form.centerControl()

function mouseMove(sender,x,y,flags)
{
	sender.form.statusBar.item(0).text = x+" x "+y
}

function mouseExit(sender)
{
	sender.form.statusBar.item(0).text = "No Mouse In Control"
}

function mouseUp(sender,x,y,button,flags)
{
	sender.form.messageBox("MouseUp "+x+" x "+y+", Button = "+button)
}

function keyDown(sender,key,flags)
{
    if ((key != 27) && (key != 112)) sender.form.messageBox("KeyDown " + key)
}

function buttonClick(sender)
{
    sender.form.messageBox("Button " + sender.text + ": OnClick")
}

var canCloseVar

function OKResult(sender)
{
	canCloseVar = true
	sender.form.close()
}

function canClose(sender,result)
{
	canCloseVar = false
	
	var canCloseDialog = form.createDialogForm(0,0,510,100)
	canCloseDialog.centerControl()
	canCloseDialog.textOut(10,10,"Do you really want to quit this program?")

	var yesButton = canCloseDialog.createButton(10,30,75,25,"Yes")
	yesButton.onClick = OKResult
	yesButton['default'] = true

	var noButton = canCloseDialog.createButton(90,30,75,25,"No")
	noButton.onClick = closeFormHandler
	noButton.cancel = true

	var helpButton = canCloseDialog.createButton(170,30,75,25,"Help")
	helpButton.onClick = helpAbout

	canCloseDialog.helpButton = helpButton
	canCloseDialog.color = 0xFF00FF
	canCloseDialog.showModal()
	canCloseDialog.destroy()

	result.put(canCloseVar)
}

button = form.createButton(10,10,75,25,"Demo")

button.addEventHandler("OnClick",buttonClick)

cancelButton = form.createButton(100,10,75,25,"Close")
cancelButton.onClick = closeFormHandler

form.createStatusBar().name = "statusBar"
form.statusBar.add(100).autoSize = true
form.onMouseMove = mouseMove
form.onMouseLeave = mouseExit
form.onMouseUp = mouseUp
form.onKeyDown = keyDown
form.onCloseQuery = canClose

text1 = form.textOut(10,60,"WindowSystemObject")
text1.font.size = 16
text1.color = 255
text1.font.bold = true

form.TextOut(10, 100,
    ["This sample shows how to handle events from WindowsSystemObject using JScript.",
    "Clicking any mouse button invokes OnMouseUp event handler.",
    "Moving mouse inside this window invokes OnMouseMove event handler.",
    "(The current mouse position is displayed in the status bar)",
    "Moving mouse outside this window invokes OnMouseLeave event handler.",
    "Clicking Demo or Close buttons invokes OnClick event handler.",
    "Pressing any key invokes OnKeyDown event handler.",
    "Try to close this window to invoke OnCloseQuery event."].join("\x0D\x0D"))

fileMenu = form.menu.add("File")
fileMenu.add("Exit",27).onExecute = closeFormHandler

helpMenu = form.menu.add("Help")
helpMenu.Add("About","F1").onExecute = helpAbout

form.show()

wso.run()

function helpAbout(sender)
{
	wso.about()
}

function closeFormHandler(sender)
{
	sender.form.close()
}


