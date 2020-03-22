require 'win32ole'

wso = WIN32OLE.new("Scripting.WindowSystemObject")

wso.EnableVisualStyles = true

form = wso.CreateForm(0,0,0,0)

form.ClientWidth = 150
form.ClientHeight = 100
form.CenterControl()

button = form.CreateButton(10,10,75,25,'Close')

WIN32OLE_EVENT.new(button).on_event('OnClick') do
	form.Close()
end


form.Show()

wso.Run()
