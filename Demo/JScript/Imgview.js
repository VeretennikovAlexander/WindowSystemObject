//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")

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

image = null

fileMenu = form.menu.add("File")
viewMenu = form.menu.add("View")
helpMenu = form.menu.add("Help")

initFileMenu(fileMenu)
initViewMenu(viewMenu)
initHelpMenu(helpMenu)

form.show()

wso.run()

function initFileMenu(fileMenu) {
    fileMenu.add("Open", "CTRL+O").onExecute = fileOpen

    closeMenuItem = fileMenu.add("Close")
    closeMenuItem.onExecute = closeExecute
    closeMenuItem.onUpdate = imageHandlerUpdate

    fileMenu.newLine()
    fileMenu.add("Exit", "ESC").onExecute = closeFormHandler
}

function initViewMenu(viewMenu) {
    invertMenuItem = viewMenu.Add("Invert")
    invertMenuItem.checkBox = true
    invertMenuItem.onExecute = invertExecute
    invertMenuItem.onUpdate = imageHandlerUpdate
}

function initHelpMenu(helpMenu) {
    helpMenu.add("About", "F1").onExecute = function () {
        wso.about()
    }
}

function fileOpen(sender)
{
	var fileName = form.openDialog("","All Images (*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif)|*.bmp;*.wmf;*.emf;*.ico;*.jpg;*.jpeg;*.gif|Bitmap Files (*.bmp)|*.bmp|Metafiles (*.wmf;*.emf)|*.wmf;*.emf|Jpeg Images (*.jpg;*.jpeg)|*.jpg;*.jpeg|Icons (*.ico)|*.ico|Gif Images (*.gif)|*.gif")
	if (fileName != "")
	{
	    if (image != null) {
	        image.Destroy()
	    }
		invertMenuItem.checked = false
		image = frame.drawImage(0, 0, 0, 0, fileName)
		
        if ((image.width>0) && (image.height>0))
		{
		    form.statusBar.item(0).text = fileName
			form.statusBar.item(1).text = image.Width + " x " + image.Height
		} else {
            closeExecute()
		    form.MessageBox("Cannot open image: " + fileName, "", wso.translate("MB_ICONHAND"))		    
		}
	}
}

function imageHandlerUpdate(sender)
{
	sender.Enabled = image != null
}

function invertExecute(sender)
{
    if (invertMenuItem.checked) {
        image.copyMode = wso.translate("NOTSRCCOPY");
    } else {
        image.copyMode = wso.translate("SRCCOPY")
    }
}

function closeExecute(sender)
{
	image.destroy()
	image = null
	form.statusBar.item(0).text = ""
	form.statusBar.item(1).text = ""
}

function closeFormHandler(sender) {
    sender.form.close()
}

