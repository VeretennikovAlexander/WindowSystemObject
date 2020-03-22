#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004-2015

require 'win32ole'

def event (v,name)
	WIN32OLE_EVENT.new(v).on_event(name) 
end

o = WIN32OLE.new("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,650,400)
f.CenterControl()

event(f,'OnMouseMove') do |sender,x,y,flags|
	sender.Form.StatusBar.item(0).Text = String(x)+' x '+String(y)
end

event(f,'OnMouseLeave') do |sender|
	sender.Form.StatusBar.item(0).Text = "No Mouse In Control"
end

event(f,'OnMouseUp') do |sender,x,y,button|
	sender.Form.MessageBox("MouseUp "+String(x)+" x "+String(y)+", Button = "+String(button))
end

event(f,'OnKeyDown') do |sender,key,flags|
	if key != 27 and key!=112 
		sender.Form.MessageBox("KeyDown "+String(key)) 
	end
end

event(f,'OnCloseQuery') do |sender,result|
	canCloseVar = false

	canCloseDialog = f.CreateDialogForm(0,0,510,100)
	canCloseDialog.CenterControl()
	canCloseDialog.TextOut(10,10,"Do you really want to quit this program?")

	yesButton = canCloseDialog.CreateButton(10,30,75,25,"Yes")
	yesButton.Default = true
		
	noButton = canCloseDialog.CreateButton(90,30,75,25,"No")
	noButton.Cancel = true

	aboutButton = canCloseDialog.CreateButton(170,30,75,25,"Help")

	event(yesButton,'OnClick') do |sender|
		canCloseVar = true
		sender.Form.Close()
	end

	event(aboutButton,'OnClick') do |sender|
		o.About()
	end

	event(noButton,'OnClick') { |sender| closeFormHandler(sender) }

	canCloseDialog.HelpButton = aboutButton

	canCloseDialog.ShowModal()
	canCloseDialog.Destroy()

	result.Value = canCloseVar
end

f.CreateStatusBar().Name = "StatusBar"
f.StatusBar.Add(100).AutoSize = true

button = f.CreateButton(10,10,75,25,"Demo")

event(button,'OnClick') do |sender|
	sender.Form.MessageBox("Button "+sender.text+": OnClick")
end

cancelButton = f.CreateButton(100,10,75,25,"Close")

def closeFormHandler(sender)
	sender.Form().Close()
end

event(cancelButton,'OnClick') { |sender| closeFormHandler(sender) }

label1 = f.TextOut(10,60,"WindowSystemObject")
label1.Font.Size = 16
label1.Color = 255
label1.Font.Bold = true

f.TextOut(10,100,"This sample shows how to handle events from WindowsSystemObject using JScript.\x0D\x0DClicking any mouse button invokes OnMouseUp event handler.\x0D\x0DMoving mouse inside this window invokes OnMouseMove event handler.\x0D\x0D(The current mouse position is displayed in the status bar)\x0D\x0DMoving mouse outside this window invokes OnMouseLeave event handler.\x0D\x0DClicking Demo or Close buttons invokes OnClick event handler.\x0D\x0DPressing any key invokes OnKeyDown event handler.\x0D\x0DTry to close this window to invoke OnCloseQuery event.")

fileMenu = f.Menu.Add("File")
exitMenuItem = fileMenu.Add("Exit",27)

event(exitMenuItem,'OnExecute') { |sender| closeFormHandler(sender) }

helpMenu = f.Menu.Add("Help")

aboutMenuItem = helpMenu.Add("About","F1")

event(aboutMenuItem,'OnExecute') { |sender| o.About() }

f.Show()

o.Run()
