//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

function currentDir() {
    var s = WScript.scriptFullName
    s = s.substring(0, s.lastIndexOf("\\") + 1)
    return s
}

function resourceDir() {
    return currentDir() + "..\\Data\\"
}

wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm()
form.clientWidth = 500
form.clientHeight = 500
form.centerControl()
form.text = "ActiveX Demo"
form.sizeGrip = false
form.maximizeBox = false

tabControl = form.createTabControl(0, 0, 500, 500)

webTab = tabControl.createTab("WebBrowser")

webBrowser = webTab.createActiveXControl(10,30,470,240,"{8856F961-340A-11D0-A96B-00C04FD705A2}")

function createEventsEdit(parent, control)
{
    parent.TextOut(10, 280, "Events")

    var edit = parent.createEdit(10, 300, 250, 170, wso.translate("ES_MULTILINE"))
	edit.readOnly = true
	edit.wordWrap = true

	edit.add("Group Count = " + control.events.count)
	edit.add("")

	var index = 0

	for (enumerator = new Enumerator(control.events); !enumerator.atEnd(); enumerator.moveNext())
	{
		var item = enumerator.item()
		edit.add("Group " + index)
		index++
		edit.add("ID = " + item.ID)
		edit.add("Name = " + item.Name)
		edit.add("")
		edit.add("Events:")
		edit.add("")
		edit.add(item.Text)
		edit.add("")
		edit.add("")
	}
	
}

if (webBrowser != null)
{
    createEventsEdit(webTab, webBrowser)
    
    webTab.textOut(270, 280, "Events Box")

    webTab.textOut(10, 10, "ActiveX Control:")

    listBox = webTab.createListBox(270, 300, 200, 170)

    // set event handler for any connection point
    webBrowser.events.addEventHandler("DownloadBegin", downloadBegin)

    // set event handler for a specific connection point
    webBrowser.events.item("DWebBrowserEvents").DownloadComplete = downloadComplete
    webBrowser.control.navigate(resourceDir() + "WSO.htm")
};

function downloadBegin()
{
    listBox.add("DownloadBegin")
}

function downloadComplete()
{
    listBox.add("DownloadComplete")
}

form.show()

wso.run()
