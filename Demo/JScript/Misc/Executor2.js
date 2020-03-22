wso = new ActiveXObject("Scripting.WindowSystemObject")

ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()

form.textOut(10, 10, "Integrity level:")

integrityLevel = form.createComboBox(100, 10, 100, 25)
integrityLevel.add("Untrusted")
integrityLevel.add("Low")
integrityLevel.add("Medium")
integrityLevel.add("High")
integrityLevel.add("System")

label = form.textOut(10, 40, "")

button = form.createButton(220, 10, 75, 25, "Start")
button.onClick = function(){
	executor = ext.createExecutor()
	executor.commandLine = "notepad.exe"
	executor.integrityLevel = integrityLevel.Text
	executor.onComplete = function(sender){
		label.Text = "Completed/"+sender.exitCode
	}
	if (executor.execute())
	{
		label.Text = "Started"
	} else
	{
		label.Text = "Error/"+executor.error.number+"/"+executor.error.description+"/"+executor.error.comment
	}
}

button = form.createButton(300, 10, 75, 25, "Terminate")
button.onClick = function(){
	executor.terminate(10)
}

button = form.createButton(380, 10, 75, 25, "Wait")
button.onClick = function(){
    form.messageBox("Wait result: " + executor.Wait())
}


form.show()

wso.run()
