#WindowSystemObject (WSO) sample
#Copyright (C) Veretennikov A. B. 2004-2015

require 'win32ole'

def event (v,name)
	WIN32OLE_EVENT.new(v).on_event(name) 
end

wso = WIN32OLE.new("Scripting.WindowSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()
form.text = "Web Browser"

reBar = form.createReBar()
menuBar = reBar.createMenuBar(0,0,0,25)

fileMenu = menuBar.menu.add("File")

openMenuItem = fileMenu.add("Open","CTRL+O")
fileMenu.add("-")
exitMenuItem = fileMenu.add("Exit","ESC")

viewMenu = menuBar.menu.add("View")

goMenu = viewMenu.add("Go")
backMenuItem = goMenu.add("Back","ALT+LEFT")
forwardMenuItem = goMenu.add("Forward","ALT+RIGHT")
goMenu.newLine()
homeMenuItem = goMenu.add("Home","ALT+HOME")

stopMenuItem = viewMenu.add("Stop")
refreshMenuItem = viewMenu.add("Refresh","F5")

helpMenu = menuBar.menu.add("Help")
helpMenuItem = helpMenu.add("About","F1")

toolBar = reBar.createToolBar(0,0,0,25)
toolBar.showText = true
buttons = toolBar.buttons

buttons.add(backMenuItem)
buttons.add(forwardMenuItem)
buttons.add(stopMenuItem)
buttons.add(refreshMenuItem)
buttons.add(homeMenuItem)

searchMenuItem = buttons.add("Search")
	
buttons.add(openMenuItem)
buttons.add("-")
buttons.add(helpMenuItem)


path = reBar.createComboBox(0,0,100,25)
reBar.band(path).text = "Address"

statusBar = form.createStatusBar()
statusBar.add(100).autoSize = true
statusBar.add(100).autoSize = true

browser = form.createActiveXControl(0,0,0,0,"{8856F961-340A-11D0-A96B-00C04FD705A2}")
browser.align = wso.translate("AL_CLIENT")

event(path,'OnKeyDown') do |sender,key|
	if key == 13
		browser.control.navigate(sender.text)
	end
end

event(browser.events,'DownloadBegin') do 
	statusBar.item(0).text = "Downloading"
end

event(browser.events,'DownloadComplete') do 
	statusBar.item(0).text = "Complete"
end

event(browser.events,'TitleChange') do 
	statusBar.item(1).text = browser.control.locationName
	path.text = browser.control.locationURL
end


event(openMenuItem,'OnExecute') do |sender|
	s = form.openDialog("","HTML Files (*.HTM;*.HTML)|*.HTM;*.HTML")
	if s!="" 
		browser.control.navigate(s)
	end
end

event(exitMenuItem,'OnExecute') do |sender|
	sender.form.close()
end

event(backMenuItem,'OnExecute') do |sender|
	begin
		browser.control.goBack()
	rescue Exception => e
		print e.message
		print e.backtrace.inspect
	end	
end

event(forwardMenuItem,'OnExecute') do |sender|
	begin
		browser.control.goForward()
	rescue Exception => e
		print e.message
		print e.backtrace.inspect
	end
end

event(homeMenuItem,'OnExecute') do |sender|
	browser.control.goHome()
end

event(stopMenuItem,'OnExecute') do |sender|
	browser.control.stop()
end

event(refreshMenuItem,'OnExecute') do |sender|
	begin
		browser.control.refresh()
	rescue Exception => e
		print e.message
		print e.backtrace.inspect
	end
end

event(helpMenuItem,'OnExecute') do |sender|
	wso.about()
end

event(searchMenuItem,'OnExecute') do |sender|
	browser.control.goSearch()
end

form.show()

wso.run()




