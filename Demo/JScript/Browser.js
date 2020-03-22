//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()
form.text = "Web Browser"

reBar = form.createReBar()

menuBar = reBar.createMenuBar(0, 0, 0, 25)

fileMenu = menuBar.menu.add("File")
viewMenu = menuBar.menu.add("View")
helpMenu = menuBar.menu.add("Help")

initFileMenu(fileMenu)
initViewMenu(viewMenu)
initHelpMenu(helpMenu)

function initFileMenu(fileMenu) {
    openMenuItem = fileMenu.Add("Open", "CTRL+O")
    openMenuItem.onExecute = fileOpen

    fileMenu.add("-")
    fileMenu.add("Exit", "ESC").onExecute = closeFormHandler
}

function initViewMenu(viewMenu) {

    goMenuItem = viewMenu.add("Go")

    backMenuItem = goMenuItem.add("Back", "ALT+LEFT")
    backMenuItem.onExecute = goBack

    forwardMenuItem = goMenuItem.add("Forward", "ALT+RIGHT")
    forwardMenuItem.onExecute = goForward

    goMenuItem.NewLine()

    homeMenuItem = goMenuItem.add("Home", "ALT+HOME")
    homeMenuItem.onExecute = goHome

    stopMenuItem = viewMenu.add("Stop")
    stopMenuItem.onExecute = goStop

    refreshMenuItem = viewMenu.add("Refresh", "F5")
    refreshMenuItem.OnExecute = refresh
}

function initHelpMenu(helpMenu) {
    helpMenuItem = helpMenu.add("About", "F1")
    helpMenuItem.onExecute = helpAbout
}

toolBar = reBar.createToolBar(0,0,0,25)
toolBar.showText = true
with (toolBar.buttons)
{
    add(backMenuItem)
    add(forwardMenuItem)
    add(stopMenuItem)
    add(refreshMenuItem)
    add(homeMenuItem)
	add("Search").onExecute = goSearch
	add(openMenuItem)
	add("-")
	add(helpMenuItem)
}

path = reBar.createComboBox(0,0,100,25)
reBar.band(path).text = "Address"
path.onKeyDown = pathKeyDown

statusBar = form.createStatusBar()
statusBar.add(100).autoSize = true
statusBar.add(100).autoSize = true

browser = form.createActiveXControl(0,0,0,0,"{8856F961-340A-11D0-A96B-00C04FD705A2}")
browser.align = wso.translate("AL_CLIENT")
browser.events.DownloadBegin = downloadBegin
browser.events.DownloadComplete = downloadComplete
browser.events.TitleChange = titleChange

form.show()

wso.run()

function fileOpen(sender)
{
	var fileName = form.openDialog("","HTML Files (*.HTM;*.HTML)|*.HTM;*.HTML")
	if (fileName != "") {
	    browser.control.navigate(fileName)
	}
}

function helpAbout(sender)
{
	wso.about()
}

function pathKeyDown(sender,key,flags)
{
    if (key == 13) {
        browser.control.navigate(sender.Text)
    }
}

function goBack(sender)
{
	WScript.Interactive = false
	browser.control.goBack()
	WScript.Interactive = true
}

function goForward(sender)
{
	WScript.Interactive = false
	browser.control.goForward()
	WScript.Interactive = true
}

function goStop(sender)
{
    browser.control.stop()
}

function refresh(sender)
{
	WScript.Interactive = false
	browser.control.refresh()
	WScript.Interactive = true
}

function goHome(sender)
{
	browser.control.goHome()
}

function goSearch(sender)
{
	browser.control.goSearch()
}

function downloadBegin()
{
	statusBar.item(0).text = "Downloading"
}

function downloadComplete()
{
    statusBar.item(0).text = "Complete"
}

function titleChange(text)
{
    statusBar.item(1).text = browser.control.locationName
    path.Text = browser.control.locationURL
}

function closeFormHandler(sender)
{
	sender.form.close()
}

