

this.createConsole = function (parent) {
    var consolePanel = parent.createFrame(10, 10, 100, 120)

    consoleEdit = consolePanel.createEdit(0, 0, 0, 0, o.translate("ES_MULTILINE | ES_READONLY"))
    consoleEdit.align = o.translate("AL_CLIENT")

    var consoleEditClearMenuItem = consoleEdit.popupMenu.add("Clear")
   
    consoleEditClearMenuItem.onExecute = function () {
        consoleEdit.clear()
    }

    console.write = function (text) {
        consoleEdit.add(text)
    }

    return consolePanel
}
