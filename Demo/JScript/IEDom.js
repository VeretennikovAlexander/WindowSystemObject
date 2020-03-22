//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2010-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()
form.text = "WSO DOM Sample"

reBar = form.createReBar()
menuBar = reBar.createMenuBar(0, 0, 0, 25)

fileMenu = menuBar.menu.add("File")
fileMenu.add("Exit","ESC").onExecute = closeFormHandler

helpMenu = menuBar.menu.add("Help")
helpMenu.add("About", "F1").onExecute = function () {
    wso.about()
}


statusBar = form.createStatusBar()
statusBar.add(100).autoSize = true
statusBar.add(100).autoSize = true

browser = form.createActiveXControl(0,0,0,0,"{8856F961-340A-11D0-A96B-00C04FD705A2}")
browser.align = wso.translate("AL_CLIENT")
browser.events.downloadBegin = downloadBegin
browser.events.downloadComplete = downloadComplete
browser.events.titleChange = titleChange
browser.events.navigateComplete2 = navigateComplete2

form.show()

browser.control.navigate(startupDir() + "iedom.htm")

wso.run()

function downloadBegin()
{
	statusBar.item(0).text = "Downloading"
}

function downloadComplete()
{
	statusBar.item(0).text = "Complete"
}

function navigateComplete2()
{
    var document = browser.control.document
    var body = document.body
	if (body == null)
	{
		form.MessageBox("Can't load start page")
		return
	}

    var div = document.createElement("DIV")
	div.innerText = "WSO DOM Sample"
	body.appendChild(div)

	var div = document.createElement("DIV")
	div.innerText = "This document generated at run time"
	body.appendChild(div)

	var table = document.createElement("TABLE")

	table.cellSpacing = 0
	table.cellPadding = 0

	for (var i = 0; i<10; i++)
	{
		var row = table.insertRow()

		var cell = row.insertCell()

		var link = document.createElement("A")
		cell.appendChild(link)
		link.innerText = "Row "+i
		link.href = "javascript:alert('Row "+i+" selected')"
	}

	body.appendChild(table)
}

function titleChange()
{
	statusBar.item(1).text = browser.control.locationName
}

function closeFormHandler(sender) {
    sender.form.close()
}

function startupDir() {
    var s = WScript.ScriptFullName
    s = s.substring(0, s.lastIndexOf("\\") + 1)
    return s
}


