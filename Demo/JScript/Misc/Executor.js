wso = new ActiveXObject("Scripting.WindowSystemObject")

ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()

top = 10

for (i = 0; i<3; i++)
{
    form.textOut(10, top, "Process: " + i);

    status = form.textOut(100, top, "")

	executor = ext.createExecutor()
	executor.commandLine = "calc.exe"
	executor.userData = status
	executor.onComplete = function(sender)
	{
		sender.userData.text = "Completed/"+sender.exitCode
	}

	top += 30

	if (executor.execute())
		status.Text = "Started"; else
		status.Text = "Error"

	
}


form.show()

wso.run()

