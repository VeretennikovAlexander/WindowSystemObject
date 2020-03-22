wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm(0,0,0,0)

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()

form.show()

wso.run()
