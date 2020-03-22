//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()
form.text = "Text Editor"

edit = form.createEdit()
edit.align = wso.translate("AL_CLIENT")
edit.hideSelection = false
edit.multiLine = true
edit.scrollBars = wso.translate("SS_BOTH")

menu = form.createMenuBar()
menu.align = wso.translate("AL_TOP")

fileMenu = menu.menu.add("File")
editMenu = menu.menu.add("Edit")
formatMenu = menu.menu.add("Format")
helpMenu = menu.menu.add("Help")

initFileMenu(fileMenu)
initEditMenu(editMenu)
initFormatMenu(formatMenu)
initHelpMenu(helpMenu)

function initFileMenu(fileMenu) {
    fileMenu.add("Open", "CTRL+O").onExecute = fileOpen
    fileMenu.add("Save as ...", "CTRL+S").onExecute = fileSaveAs
    fileMenu.newLine()
    fileMenu.add("Exit", "ESC").onExecute = closeFormHandler
}

function initEditMenu(editMenu) {

    undoMenuItem = editMenu.add("Undo")
    undoMenuItem.onExecute = function () {
        edit.undo()
    }
    undoMenuItem.onUpdate = function (sender) {
        sender.enabled = edit.CanUndo
    }

    editMenu.newLine()

    cutMenuItem = editMenu.add("Cut")
    cutMenuItem.onExecute = function () {
        edit.Cut()
    }
    cutMenuItem.onUpdate = function (sender) {
        sender.Enabled = edit.SelEnd != edit.SelStart
    }


    copyMenuItem = editMenu.add("Copy")
    copyMenuItem.onExecute = function (sender) {
        edit.Copy()
    }
    copyMenuItem.onUpdate = function (sender) {
        sender.Enabled = edit.SelEnd != edit.SelStart
    }

    pasteMenuItem = editMenu.add("Paste")
    pasteMenuItem.onExecute = function (sender) {
        edit.paste()
    }
    pasteMenuItem.onUpdate = function (sender) {
        sender.enabled = edit.canPaste
    }

    editMenu.newLine()
    editMenu.add("Select All", "CTRL+A").onExecute = function (sender) {
        edit.selectAll()
    }

}

function initFormatMenu(formatMenu) {

    wordWrapMenuItem = formatMenu.add("Word Wrap")
    wordWrapMenuItem.checkBox = true
    wordWrapMenuItem.onExecute = function (sender) {
        edit.wordWrap = sender.checked
    }
    wordWrapMenuItem.onUpdate = function (sender) {
        sender.checked = edit.wordWrap
    }

    formatMenu.newLine()
    formatMenu.add("Font").onExecute = function () {
        edit.Font = form.fontDialog(edit.Font)
    }

}

function initHelpMenu(helpMenu) {
    helpMenu.add("About", "F1").onExecute = function () {
        wso.About()
    }
}

form.createStatusBar()
form.onCloseQuery = formCloseQuery

function fileOpen(sender)
{
	var st = form.openDialog("","Text Files (*.txt)|*.txt")
	if (st != "")
	{
		var fs = new ActiveXObject("Scripting.FileSystemObject")
		var file = fs.openTextFile(st,1,false)
		edit.clear()
		WScript.Interactive = false
		edit.text = file.readAll()
		WScript.Interactive = true
		file.close()
	}
}

function fileSaveAs(sender)
{
    var st = form.saveDialog("", "Text Files (*.txt)|*.txt")
	if (st != "")
	{
		fs = new ActiveXObject("Scripting.FileSystemObject")
		file = fs.createTextFile(st,true)
		file.write(edit.Text)
		file.close()
	}
}

form.show()

wso.run()

function formCloseQuery(sender,resultPtr)
{
    resultPtr.put(sender.form.messageBox("Do you really want to quit this program?", "", wso.translate("MB_OKCANCEL")) == wso.translate("IDOK"))
}

function closeFormHandler(sender)
{
	sender.form.close()
}

