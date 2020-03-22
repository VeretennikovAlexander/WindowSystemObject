require 'win32ole'

wso = WIN32OLE.new("Scripting.WindowSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()

form.show()

wso.run()
