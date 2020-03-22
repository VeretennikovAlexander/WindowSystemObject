wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 400
form.centerControl()
form.text = "TaskBar Example"

with (form.textOut(10,30,"TaskBar Example (Windows 7 required)"))
{
	font.size = 16
	font.color = 0x000000FF
}
with (form.textOut(10,60,"Move mouse over Application Icon in the TaskBar"))
{
	font.size = 14
	font.color = 0x000000FF
}

images = wso.createImageList()
images.load(resourceDir()+"ToolBar.bmp")

form.taskBar.addImages(images)

with (form.taskBar.buttons)
{
	with (add("Button 1"))
	{
		imageIndex = 0
		onExecute = buttonClick
	}
    with (add("Button 2 (DismissonClick)"))
	{
	    imageIndex = 1
	    onExecute = buttonClick
		dismissonClick = true
	}
    with (add("Button 3 (Noninteractive)"))
	{
	    imageIndex = 2
	    onExecute = buttonClick
		noninteractive = true
	}
    with (add("Button 4 (Nobackground)"))
	{
	    imageIndex = 3
	    onExecute = buttonClick
		nobackground = true
	}
}

function buttonClick(sender)
{
	form.messageBox(sender.text)
}

form.drawImage(10,100,400,250,resourceDir()+"TaskBar.jpg")

function timerExecute(sender)
{
	position = form.taskBar.position
	position += 4
	if (position > 100)
	{
	    position = 0
	    state++

	    if (state % 4 == 1) {
	        form.taskBar.state = wso.translate("TBPF_PAUSED")
	    } else
	    if (state % 4 == 2) {
	        form.taskBar.state = wso.translate("TBPF_INDETERMINATE")
	    } else
	    if (state % 4 == 3) {
	        form.taskBar.state = wso.translate("TBPF_ERROR")
	    } else {
	        form.taskBar.state = wso.translate("TBPF_NORMAL")
	    }
	}
	form.taskBar.position = position
}

form.taskBar.max = 100
state = 0

timer = wso.createTimer()
timer.onExecute = timerExecute
timer.interval = 50
timer.active = true

//form.taskBar.setThumbnailClip(10, 10, 100, 100)

form.show()

wso.run()


function resourceDir() {
    return startupDir() + "..\\Data\\" 
}

function startupDir() {
    var s = WScript.ScriptFullName
    s = s.substring(0, s.lastIndexOf("\\") + 1)
    return s
}


