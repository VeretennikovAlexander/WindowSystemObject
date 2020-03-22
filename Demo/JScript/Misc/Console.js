wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()

form.show()

console = wso.console

console.visible = true

for (i = 0; i<10; i++)
{
    console.writeLine(i)
}

timer = wso.createTimer()
timer.interval = 500
timer.onExecute = onTimer
timer.active = true

function onTimer()
{
//	Console.Visible = false
//	Console.Visible = true
	console.write(".")
}


wso.run()

