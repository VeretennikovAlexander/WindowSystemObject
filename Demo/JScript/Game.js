//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

roundRectWidth = 100

wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()
form.borderWidth = 10

form.text = "Catch-the-circle"
form.onMouseMove = formMouseMove

options = form.createFrame(0, 0, 100, 0)
options.align = wso.translate("AL_RIGHT")
options.textOut(10, 10, "Options")
options.createButton(10, 40, 75, 25, "Pause (P)").onClick = pause
options.textOut(10, 70, "Level:")

level = options.createComboBox(10, 100, 75, 25, wso.translate("CBS_DROPDOWNLIST"))
for (p = 1; p < 10; p++) {
    level.add(p)
}
level.onChange = levelChange
level.itemIndex = 2

form.onKeyDown = formKeyDown

function formKeyDown(sender, key, flags) {
    //Space
    if (key == 80) {
        pause(sender)
    }
}

frame = form.createFrame()
frame.align = wso.translate("AL_CLIENT")
frame.onMouseMove = formMouseMove
frame.color = 0x0000000
frame.bevelOuter = 1
frame.bevelInner = -1

circle = frame.circle(Math.floor((frame.clientWidth - 1) * Math.random()), 50, 10)

roundRect = frame.roundRect(10, 280, roundRectWidth, 10, 10, 10)
roundRect.color = 0x000000FF
roundRect.align = wso.translate("AL_AT_BOTTOM")
cx = 3
cy = 3

function formMouseMove(sender, x, y, button, flags)
{
    x = x - (roundRect.width / 2)
	if (x<0) x = 0
	m = frame.ClientWidth - roundRect.Width
	if (x>m) x = m
	roundRect.left = x
}

timer = wso.createTimer()
timer.onExecute = timerExecute
timer.interval = 10
timer.active = true

function timerExecute(sender)
{
	circle.left += cx
	circle.Top += cy
	if (circle.top > frame.clientHeight - circle.height - roundRect.height)
	{
	    if ((circle.left + 20 < roundRect.left) || (circle.left - 20 > roundRect.left + roundRect.width))
		{
			sender.active = false
			if (form.messageBox("Game is over, repeat once more?", "", wso.translate("MB_ICONQUESTION | MB_OKCANCEL")) != 1) {
			    form.Close()
			} else {
			    circle.top = 0
			    cy = sign(cy) * cy
			    sender.active = true
			}
			return
		}
		cy = -cy
	}

    if (circle.top < 0)
		cy = -cy
    if ((circle.left > frame.clientWidth - 20) || (circle.left < 0))
		cx = -cx
}

function pause(sender)
{
    timer.Active = !timer.Active
}

function sign(x)
{
	if (x>0) return 1; else
	if (x<0) return -1; else
	return 0
}

function levelChange(sender)
{
    cx = sign(cx) * (sender.itemIndex + 1)
    cy = sign(cy) * (sender.itemIndex + 1)
}

form.show()

wso.run()
