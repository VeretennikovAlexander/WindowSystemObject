//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")

wso.enableVisualStyles = true

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()
form.text = "Rich Text Editor"

form.createStatusBar().name = "statusBar"

form.statusBar.add(100).text = "Line: 1"

edit = form.createRichEdit(0, 0, 0, 0, wso.translate("ES_MULTILINE"), 5)
edit.align = wso.translate("AL_CLIENT")
edit.hideSelection = false
edit.multiLine = true
edit.scrollBars = wso.translate("SS_BOTH")
edit.onSelChange = onSelChange

images = wso.createImageList()
images.load(resourceDir() + "ToolBar.bmp")

reBar = form.createReBar()

menu = reBar.createMenuBar()
menu.menu.images = images

toolBar = reBar.createToolBar(0,0,0,25)
toolBar.buttons.images = images

fileMenu = menu.menu.add("File")
editMenu = menu.menu.add("Edit")
paragraphMenu = menu.menu.add("Paragraph")
formatMenu = menu.menu.add("Format")
rotateMenu = menu.menu.add("Rotate")
helpMenu = menu.menu.add("Help")

initFileMenu(fileMenu)
initEditMenu(editMenu)
initParagraphMenu(paragraphMenu)
initFormatMenu(formatMenu)
initRotateMenu(rotateMenu)
initHelpMenu(helpMenu)

function initFileMenu(fileMenu) {

    var openMenuItem = fileMenu.add("Open", "CTRL+O")
    openMenuItem.onExecute = fileOpen
    openMenuItem.imageIndex = 0
    toolBar.buttons.add(openMenuItem)

    var saveMenuItem = fileMenu.add("Save as ...", "CTRL+S")
    saveMenuItem.onExecute = fileSaveAs
    saveMenuItem.imageIndex = 1
    toolBar.buttons.add(saveMenuItem)
    toolBar.buttons.newLine()

    fileMenu.NewLine()

    var printMenuItem = fileMenu.Add("Print", "CTRL+P")
    printMenuItem.onExecute = filePrint
    printMenuItem.imageIndex = 2
    toolBar.buttons.add(printMenuItem)
    toolBar.buttons.newLine()

    fileMenu.NewLine()

    var exitMenuItem = fileMenu.Add("Exit", "ESC")
    exitMenuItem.onExecute = closeFormHandler
    exitMenuItem.imageIndex = 16
    toolBar.buttons.add(exitMenuItem)
    toolBar.buttons.newLine()

    function filePrint(sender) {
        var printDialog = form.printDialog()
        var i

        if (printDialog != null) {
            printInfo = wso.createPrintInfo()
            printInfo.documentName = "RichEdit Print"

            printInfo.leftMargin = 2500
            printInfo.rightMargin = 2500
            printInfo.topMargin = 2500
            printInfo.bottomMargin = 2500
            printInfo.marginMeasurement = wso.translate("PSD_INHUNDREDTHSOFMILLIMETERS")

            for (i = 0; i < printDialog.Copies; i++)
                edit.print(printDialog.driver, printDialog.device, printInfo)
        }
    }
}

function initEditMenu(editMenu) {
    var undoMenuItem = editMenu.add("Undo")
    undoMenuItem.onExecute = function () {
        edit.undo()
    }
    undoMenuItem.onUpdate = function (sender) {
        sender.enabled = edit.CanUndo
    }
    undoMenuItem.imageIndex = 17

    editMenu.newLine()

    var cutMenuItem = editMenu.add("Cut")
    cutMenuItem.onExecute = function () {
        edit.Cut()
    }
    cutMenuItem.onUpdate = function (sender) {
        sender.Enabled = edit.SelEnd != edit.SelStart
    }
    cutMenuItem.imageIndex = 4
    toolBar.buttons.add(cutMenuItem)

    var copyMenuItem = editMenu.add("Copy")
    copyMenuItem.onExecute = function (sender) {
        edit.Copy()
    }
    copyMenuItem.onUpdate = function (sender) {
        sender.Enabled = edit.SelEnd != edit.SelStart
    }
    copyMenuItem.imageIndex = 5
    toolBar.buttons.add(copyMenuItem)

    var pasteMenuItem = editMenu.add("Paste")
    pasteMenuItem.onExecute = function (sender) {
        edit.paste()
    }
    pasteMenuItem.onUpdate = function (sender) {
        sender.enabled = edit.canPaste
    }
    pasteMenuItem.imageIndex = 6
    toolBar.buttons.add(pasteMenuItem)
    toolBar.buttons.newLine()

    editMenu.newLine()
    editMenu.add("Select All", "CTRL+A").onExecute = function (sender) {
        edit.selectAll()
    }

    editMenu.newLine()

    var findMenuItem = editMenu.add("Find", "CTRL+F")
    findMenuItem.onExecute = editFind
    findMenuItem.imageIndex = 12
    toolBar.buttons.add(findMenuItem)

    var replaceMenuItem = editMenu.add("Replace")
    replaceMenuItem.onExecute = editReplace
    replaceMenuItem.imageIndex = 13
    toolBar.buttons.add(replaceMenuItem)
    toolBar.buttons.newLine()

    editMenu.newLine()

    var fontMenuItem = editMenu.add("Font")
    fontMenuItem.onExecute = function (sender) {
        edit.selFont = form.fontDialog(edit.selFont)
    }
    fontMenuItem.imageIndex = 14
    toolBar.buttons.add(fontMenuItem)
    toolBar.buttons.newLine()

    editMenu.images = images
    edit.PopupMenu = editMenu
}

function initParagraphMenu(paragraphMenu)
{
    var leftAlignMenuItem = paragraphMenu.add("Left")
    leftAlignMenuItem.userData = wso.translate("AL_LEFT")
    leftAlignMenuItem.onExecute = paragraphAlign
    leftAlignMenuItem.onUpdate = paragraphAlignUpdate

    var centerAlignMenuItem = paragraphMenu.add("Center");
    centerAlignMenuItem.userData = wso.translate("AL_CENTER");
    centerAlignMenuItem.onExecute = paragraphAlign;
    centerAlignMenuItem.onUpdate = paragraphAlignUpdate

    var rightAlignMenuItem = paragraphMenu.add("Right");
    rightAlignMenuItem.userData = wso.translate("AL_RIGHT");
    rightAlignMenuItem.onExecute = paragraphAlign;
    rightAlignMenuItem.onUpdate = paragraphAlignUpdate

    paragraphMenu.newLine()

    var bulletsMenuItem = paragraphMenu.add("Bullets");
    bulletsMenuItem.onExecute = function (sender) {
        edit.paragraph.numbering = sender.checked
    }
    bulletsMenuItem.onUpdate = function (sender) {
        sender.checked = edit.paragraph.numbering
    }
    bulletsMenuItem.checkBox = true

    function paragraphAlignUpdate(sender) {
        sender.checked = edit.paragraph.align == sender.userData
    }

    function paragraphAlign(sender) {
        edit.paragraph.align = sender.userData
    }
}

function initFormatMenu(formatMenu) {
    var wordWrapMenuItem = formatMenu.add("Word Wrap")
    wordWrapMenuItem.checkBox = true
    wordWrapMenuItem.onExecute = function (sender) {
        edit.wordWrap = sender.checked 
    }
    wordWrapMenuItem.onUpdate = function (sender) {
        sender.checked = edit.wordWrap
    }
    
    formatMenu.newLine()

    var fontMenuItem = formatMenu.add("Font")
    fontMenuItem.onExecute = function (sender) {
        edit.font = form.fontDialog(edit.font)
    }
    fontMenuItem.imageIndex = 14

    formatMenu.newLine()
    
    var autoURLDetectionMenuItem = formatMenu.add("Auto URL detection")
    autoURLDetectionMenuItem.onExecute = function (sender) {
        edit.autoURLDetect = sender.checked
    }
    autoURLDetectionMenuItem.onUpdate = function (sender) {
        sender.checked = edit.autoURLDetect
    }
    autoURLDetectionMenuItem.checkBox = true

    formatMenu.newLine()

    var toolBarMenuItem = formatMenu.add("ToolBar")
    toolBarMenuItem.checkBox = true
    toolBarMenuItem.onExecute = function (sender) {
        toolBar.visible = sender.checked
    }
    toolBarMenuItem.onUpdate = function (sender) {
        sender.checked = toolBar.visible
    }
}

function initRotateMenu(rotateMenu) {
    rotateNames = [0, 90, 180, 270]
    for (i = 0; i < 4; i++) {
        with (rotateMenu.Add(rotateNames[i] + "")) {
            userData = i
            onExecute = rotateExecute
        }
    }

    function rotateExecute(sender) {
        edit.pageRotate = sender.userData
    }

}

function initHelpMenu(helpMenu) {
    var aboutMenuItem = helpMenu.add("About", "F1")
    aboutMenuItem.onExecute = function () {
        wso.about()
    }
    aboutMenuItem.imageIndex = 9
    toolBar.buttons.add(aboutMenuItem)
}

function open(fileName)
{
	var fs = new ActiveXObject("Scripting.FileSystemObject")
	var file = fs.openTextFile(fileName, 1, false)
	if (!edit.load(file))
	{
	    file = fs.openTextFile(fileName, 1, false)
		edit.load(file,wso.translate("SF_TEXT"))
	}
}

function fileOpen(sender)
{
	var fileName = form.openDialog("","All Documents (*.txt;*.rtf)|*.txt;*.rtf|Text Files (*.txt)|*.txt|RTF Files (*.rtf)|*.rtf")
	if (fileName != "") {
	    open(fileName)
	}
}

function fileSaveAs(sender)
{
	var saveDialog = form.createSaveDialog()
	saveDialog.filter = "Text Files (*.txt)|*.txt | RTF Files (*.rtf)|*.rtf"

	if (saveDialog.Execute())
	{
	    var fileName = saveDialog.fileName
		var fs = new ActiveXObject("Scripting.FileSystemObject")
		var flags

		if (saveDialog.filterIndex == 2) {
		    flags = wso.translate("SF_RTF")
		} else {
		    flags = wso.translate("SF_TEXT")
		}

		var file = fs.createTextFile(fileName, true)
		edit.save(file)
	}
}

var findDialog = null
var replaceDialog = null

function editFind(sender)
{
    if (findDialog == null) {
        findDialog = form.createFindDialog("", wso.translate("FR_NOUPDOWN | FR_DOWN"))
    }
    findDialog.onFind = onFind
    findDialog.onClose = onFindDialogClose

    function onFindDialogClose(sender) {
        findDialog = null
    }
    
}

function editReplace(sender)
{
    if (replaceDialog == null) {
        replaceDialog = form.createReplaceDialog("", "", wso.translate("FR_NOUPDOWN | FR_DOWN"))
    }
    replaceDialog.onFind = onFind
    replaceDialog.onClose = onReplaceDialogClose
    replaceDialog.onReplace = onReplace
    replaceDialog.onReplaceAll = onReplaceAll

    function onReplaceDialogClose(sender) {
        replaceDialog = null
    }

    function onReplace(sender) {
        edit.replaceSelection(sender.replaceText, true)
    }

    function onReplaceAll(sender) {
        if (findText(sender, true) != -1) {
            onReplace(sender)
            while (findText(sender, false) != -1) {
                onReplace(sender)
            }
        }
    }


}

function onFind(sender) {
    findText(sender, true)
}

function findText(sender, errorMessage)
{
	findFlags = wso.translate("FR_DOWN")
	if (sender.matchCase) findFlags |= wso.translate("FR_MATCHCASE")
	if (sender.wholeWord) findFlags |= wso.translate("FR_WHOLEWORD")

	minPos = edit.selStart
	maxPos = -1
	string = new String(sender.findText)
	var position = edit.findText(sender.findText, findFlags, minPos, maxPos)

	if ((edit.selStart == position) && (edit.selEnd == position + string.length))
	{
		minPos++
		position = edit.findText(sender.findText, findFlags, minPos, maxPos)
	}

    if (position != -1) {
        edit.selStart = position
        edit.selEnd = position + string.length
	} else
	if (errorMessage) {
	    form.messageBox("Text not found: " + string)
	}
	return position
}


function onSelChange(sender)
{
    form.statusBar[0].text = "Line: " + (sender.lineFromChar(sender.selStart) + 1)
}

args = WScript.Arguments;

if (args.length > 0) {
    open(a(0))
}

form.onCloseQuery = formCloseQuery

form.show()

wso.run()

function formCloseQuery(sender, resultPtr) {
    resultPtr.put(sender.form.messageBox("Do you really want to quit this program?", "", wso.translate("MB_OKCANCEL")) == wso.translate("IDOK"))
}

function closeFormHandler(sender) {
    sender.form.close()
}

function startupDir() {
    var s = WScript.ScriptFullName
    s = s.substring(0, s.lastIndexOf("\\") + 1)
    return s
}

function resourceDir() {
    return startupDir() + "..\\Data\\"
}

