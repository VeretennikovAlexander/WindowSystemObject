//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")

POSITION_NONE = wso.translate("POSITION_NONE")

form = wso.createForm()
form.clientWidth = 150
form.clientHeight = 150
form.centerControl()

a = 3.14/2
b = 3.14/2

largeCircle = form.circle(0, 0, 10)
smallCircle = form.circle(0, 0, 5)
smallCircle.color = 0x000000FF

function timerExecute(sender)
{
	a = a+0.6
	largeCircle.setBounds(50 * Math.cos(a) + 75, 50 * Math.sin(a) + 75, POSITION_NONE, POSITION_NONE)
	b = b+1.1
	smallCircle.setBounds(50 * Math.cos(b) + 75, 50 * Math.sin(b) + 75, POSITION_NONE, POSITION_NONE)
}

timer = wso.createTimer()
timer.onExecute = timerExecute
timer.interval = 100
timer.active = true

form.show()

wso.run()
