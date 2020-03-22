#WindowSystemObject (WSO) sample
#Copyright (C) Veretennikov A. B. 2004-2015

require 'win32ole'

def event (v,name)
	WIN32OLE_EVENT.new(v).on_event(name) 
end

wso = WIN32OLE.new("Scripting.WindowSystemObject")

form = wso.createForm()
form.text = "Image Viewer"
form.clientWidth = 600
form.clientHeight = 260
form.centerControl()

frame = form.createFrame()
frame.align = wso.translate("AL_CLIENT")
frame.autoScroll = true
frame.border = true

form.createStatusBar().name = "statusBar"
form.statusBar.add(100).autoSize = true
form.statusBar.add(100).autoSize = true
image = nil

fileMenu = form.menu.add("File")
openFileMenuItem = fileMenu.add("Open","CTRL+O")

closeMenuItem = fileMenu.add("Close")

event(closeMenuItem,'OnExecute') do
	image.destroy()
	image = nil
	form.statusBar.item(0).text = ""
	form.statusBar.item(1).text = ""
end

event(closeMenuItem,'OnUpdate') do |sender|
	sender.enabled = (image!=nil)
end

fileMenu.newLine()
exitMenuItem = fileMenu.add("Exit","ESC")

event(exitMenuItem,'OnExecute') do |sender|
	sender.form.close()
end

viewMenu = form.menu.add("View")

invertMenuItem = viewMenu.add("Invert")
invertMenuItem.checkBox = true

event(invertMenuItem,'OnExecute') do
	if (invertMenuItem.checked)
		image.copyMode = wso.translate("NOTSRCCOPY"); else
		image.copyMode = wso.translate("SRCCOPY")
	end
end

event(invertMenuItem,'OnUpdate') do |sender|
	sender.enabled = (image!=nil)
end


helpMenu = form.menu.add("Help")


helpMenuItem = helpMenu.add("About","F1")

event(helpMenuItem,'OnExecute') do
	wso.about()
end

event(openFileMenuItem,'OnExecute') do
	s = form.openDialog("","All Images (*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif)|*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif|Bitmap Files (*.bmp)|*.bmp|Metafiles (*.wmf;*.emf)|*.wmf;*.emf|Jpeg Images (*.jpg;*.jpeg)|*.jpg;*.jpeg|Icons (*.ico)|*.ico|Gif Images (*.gif)|*.gif")
	if s!=""
	
		if image != nil
			image.Destroy()
		end
		invertMenuItem.checked = false
		image = frame.DrawImage(0,0,0,0,s)
		if image.width>0 && image.height>0
			
			form.statusBar.item(0).text = s
			form.statusBar.item(1).text = image.width.to_s + " x " + image.height.to_s
			
		else
			image.destroy()
			image = nil
			form.statusBar.item(0).text = ""
			form.statusBar.item(1).text = ""
			form.messageBox("Cannot open image","",wso.translate('MB_ICONHAND'))
		end
	end
end


form.show()

wso.run()
