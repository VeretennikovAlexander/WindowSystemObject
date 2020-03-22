//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015
//Requirements: JScript 5.4

testVersion(5,4)

wso = new ActiveXObject("Scripting.WindowSystemObject")
wsoExt = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
fso = new ActiveXObject("Scripting.FileSystemObject")
shell = new ActiveXObject("WScript.Shell")

wso.enableVisualStyles = true

form = wso.createForm()

form.text = "File Manager"
form.clientWidth = 600
form.clientHeight = 460
form.centerControl()

menu = form.menu

fileMenu = menu.add("File")

exitMenuItem = fileMenu.add("Exit", "ESC")
exitMenuItem.onExecute = closeFormHandler

helpMenu = menu.add("Help")

helpMenuItem = helpMenu.add("About", "F1")
helpMenuItem.onExecute = function () {
    wso.about()
}

sizeUpdating = false

leftFrame = createFrame("L")
leftFrame.align = wso.translate("AL_LEFT")

form.createSplitter(leftFrame.align).width = 2

rightFrame = createFrame("R")
rightFrame.align = wso.translate("AL_CLIENT")

readDir(form.L)
readDir(form.R)

function createFrame(name)
{
    var frame = form.createFrame(0, 0, 300, 0)

	frame.createComboBox(0, 0, 0, 25).name = "caption"
	frame.caption.text = startupDir()
	frame.caption.readOnly = true

	for (var e = new Enumerator(fso.Drives); !e.atEnd(); e.moveNext()) {
	    frame.caption.add(e.item() + "\\")
	}
	
	frame.caption.onChange = captionChange
	frame.caption.align = wso.translate("AL_TOP")

	frame.name = name

	frame.createListView(0, 0, 200, 200, wso.translate("LVS_REPORT")).name = "box"

	frame.box.align = wso.translate("AL_TOP")
	frame.box.columns.add("Name", 270)

	frame.createSplitter(frame.box.align).height = 2

	frame.box.onDblClick = boxClick
	frame.box.onChange = filesChange
	frame.box.onResize = boxResize
	frame.box.smallImages = wsoExt.SystemImageListSmall
	frame.box.themeApplicationName = "explorer"

	frame.createListView(0, 0, 0, 200, wso.translate("LVS_REPORT")).name = "files"
	
    frame.files.align = wso.translate("AL_CLIENT")
	frame.files.columns.add("Name", 270)
	frame.files.onDblClick = filesClick
	frame.files.onChange = filesChange
	frame.files.smallImages = wsoExt.SystemImageListSmall

	frame.createStatusBar().name = "status"
	frame.status.add(100).autoSize = true
	frame.status.add(50).autoSize = true
	frame.status.add(100).autoSize = true
	
	function captionChange(sender)
	{
		try
		{
			readDir(sender.parent)
		}
		catch(a)
		{
			s = sender.parent.caption.text
			sender.parent.caption.text = startupDir()
			form.messageBox("Cannot read folder: "+s)
			captionChange(sender)
		}
	}
	
	return frame
}

function filesChange(sender)
{
	panel = sender.parent

	if (panel.box.focused) {
	    sender = panel.box
	} else {
	    sender = panel.files
	}

	status = sender.parent.status

	var s
	
    if (sender.itemIndex < 0) {
        s = ""
    } else {
        s = sender.item(sender.itemIndex).text
    }

    status[0].text = s
	if (s == "")
	{
	    status[1].text = ""
	    status[2].text = ""
		return
	} else
	if (s == "..")
	{
	    status[1].text = "<<UP>>"
	    status[2].text = ""
	} else
	{
	    s = sender.parent.caption.text + s
	    
        var fileObject

        if (fso.fileExists(s)) {
            fileObject = fso.GetFile(s)
        } else
            if (fso.folderExists(s)) {
                fileObject = fso.GetFolder(s)
            } else {
                status[1].text = ""
                status[2].text = ""
                return
            }

        status[1].text = getAttributes(fileObject.Attributes)
        status[2].text = fileObject.DateLastModified
	}
}

function getAttributes(attributes)
{
	var s = ""
	if (attributes & 1) s += "R"
	if (attributes & 32) s += "A"
	if (attributes & 4) s += "S"
	if (attributes & 2) s += "H"
	if (attributes & 16) s += "D"
	if (attributes & 2048) s += "C"
	if (attributes & 1024) s += "L"
	return s
}


function readDir(panel)
{
    panel.box.clear()
    panel.files.clear()

    var folder = fso.getFolder(panel.caption.text)

    if (fso.getParentFolderName(panel.caption.text) != "") {
	    panel.box.add("..")
	}

	for (var e = new Enumerator(folder.SubFolders); !e.atEnd(); e.moveNext())
	{
	    var fileName = fso.getFileName(e.item())

		with (panel.box.add(fileName))
		{
			imageIndex = wsoExt.getFileSysIconIndexSmall(e.item())
		}
	}


    for (var e = new Enumerator(folder.Files); !e.atEnd(); e.moveNext())
	{
	    var fileName = fso.getFileName(e.item())

	    with (panel.files.add(fileName))
		{
		    imageIndex = wsoExt.getFileSysIconIndexSmall(e.item())
		}
	}
	
	panel.box.ItemIndex = 0
	panel.files.ItemIndex = 0
}

function boxResize(sender)
{
	if (sizeUpdating) return
	sizeUpdating = true

	if (sender.parent == form.R) {
	    form.L.box.height = sender.height;
	} else {
	    form.R.box.height = sender.height
	}

	sizeUpdating = false
}

function boxClick(sender)
{
    if (sender.itemIndex < 0) return

    var s = sender[sender.itemIndex].text

	if (s != null)
	{
	    var panel = sender.parent
	    if (s == "..") {
	        s = fso.GetParentFolderName(panel.caption.text)
	    } else {
	        s = panel.caption.text + s
	    }

	    if (s.charAt(s.length - 1) != '\\') s = s + "\\"

	    panel.caption.text = s

		readDir(panel)
	}
}

function filesClick(sender)
{
    if (sender.itemIndex < 0) return

    var fileName = sender.item(sender.itemIndex).text
    if (fileName != "")
        shell.run("\"" + sender.parent.caption.text + fileName + "\"")
}

function controlChange(sender)
{
	filesChange(form.L.box)
	filesChange(form.R.box)
}

form.onKeyDown = function (sender, key, flags) {
    sender = form.activeControl
    if ((key == 13) && (sender != null)) {
        if (sender.name == "box") boxClick(sender); else
            if (sender.name == "files") filesClick(sender)
    }
}

form.onActiveControlChange = controlChange

form.show()

wso.run()

function closeFormHandler(sender) {
    sender.form.close()
}

function testVersion(x, y) {
    if ((ScriptEngineMajorVersion() * 10 + ScriptEngineMinorVersion()) < (x * 10 + y)) {
        WScript.Echo("Sample requirements: JScript " + x + "." + y + " (Current: " + ScriptEngineMajorVersion() + "." + ScriptEngineMinorVersion() + ")")
        WScript.Quit()
    }
}

function startupDir() {
    var s = WScript.ScriptFullName
    s = s.substring(0, s.lastIndexOf("\\") + 1)
    return s
}

