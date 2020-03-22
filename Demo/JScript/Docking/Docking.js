//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")

wso.enableVisualStyles = true

form = wso.createForm()

form.clientWidth = 600
form.ClientHeight = 400
form.centerControl()
form.text = "Docking framework example"
var panels = []
form.docking.uniqueId = "Form1"
form.docking.dropTarget = true
form.autoSplit = true

function createDocument(name)
{
    var doc = form.createFrame(10, 10, 100, 100)

    doc.text = name

	var edit = doc.createEdit(0,0,0,0,wso.translate("ES_MULTILINE"))
	edit.align = wso.translate("AL_CLIENT")
	edit.text = "Some text where"

	doc.align = wso.translate("AL_CLIENT")
	doc.docking.alwaysDockTab = true
	doc.docking.dropTarget = true
	doc.docking.uniqueId = name
	
	panels[name] = doc
	return doc	
}

function createPanel(name) {
    var panel = form.createFrame(10, 10, 150, 100)

    panel.text = name
    panel.align = wso.translate("AL_LEFT")
    panel.docking.alwaysDockPage = true
    panel.docking.dropTarget = true
    panel.docking.uniqueId = name

    panels[name] = panel

    return panel
}

function createBottomPanel(name) {
    var panel = form.createFrame(10, 10, 100, 100)
    
    panel.text = name
    panel.align = wso.translate("AL_BOTTOM")
    panel.docking.alwaysDockPage = true
    panel.docking.dropTarget = true
    panel.docking.uniqueId = name

    panels[name] = panel

    return panel
}


function createContextPanel() {
    var contextPanel = createPanel("Context")

    var treeView = contextPanel.createTreeView(0, 0, 0, 0)
    treeView.align = wso.translate("AL_CLIENT")
    var root = treeView.items.add("Item 1")
    for (i = 1; i < 5; i++) {
        root.add("Item 1." + i)
    }
    root.expand()

    return contextPanel
}

function createIndexPanel() {
    var indexPanel = createPanel("Index")

    var listBox = indexPanel.createListBox()
    listBox.align = wso.translate("AL_CLIENT")
    for (i = 1; i < 5; i++) {
        listBox.add("Item 1." + i)
    }

    return indexPanel
}

doc1 = createDocument("Doc1")

for (i = 2; i < 4; i++) {
    doc = createDocument("Doc" + i)
    doc1.docking.dockAsNeighbour(doc, wso.translate("AL_CLIENT"))
}
doc1.parent.visible = true

searchPanel = createBottomPanel("Search")
consolePanel = createBottomPanel("Console")

with (consolePanel) {
    with (createEdit(0, 0, 0, 0, wso.translate("ES_MULTILINE | ES_READONLY"))) {
        align = wso.translate("AL_CLIENT")
        add("Line 1")
        add("Line 2")
        add("Line 3")
    }
}
with (searchPanel) {
    with (createEdit(0, 0, 0, 0, wso.translate("ES_MULTILINE | ES_READONLY"))) {
        align = wso.translate("AL_CLIENT")
        add("Search result 1")
        add("Search result 2")
        add("Search result 3")
    }
}


searchPanel.docking.dockAsNeighbour(consolePanel, wso.translate("AL_CLIENT"))

contextPanel = createContextPanel()
indexPanel = createIndexPanel()

contextPanel.docking.dockAsNeighbour(indexPanel, wso.translate("AL_CLIENT"))

helpPanel = createPanel("Help")

contextPanel.docking.dockAsNeighbour(helpPanel, wso.translate("AL_CLIENT"))
contextPanel.parent.visible = true

helpPanel.textOut(10, 10, "Some Help can be there")

file = form.menu.add("File")
file.add("Exit").onExecute = closeFormHandler

windows = form.menu.add("Windows")
for (name in panels) {
    item = windows.add(name)
    item.onExecute = showPanel
}

function showPanel(sender) {
    panel = panels[sender.text]
    while (true) {
        panel.visible = true
        if (panel.type == "Form")
            break
        panel = panel.parent
    }
}

layout = form.menu.add("Layout")
layout.Add("Save").onExecute = saveLayout
layout.Add("Load").onExecute = loadLayout

form.Show()

wso.run()

function closeFormHandler(sender) {
    sender.form.close()
}



function saveLayout() {
    var text = wso.saveLayout()
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var file = fso.createTextFile(layoutFile())
    file.writeLine(text)
    file.close()
}

function loadLayout() {
    var fileName = layoutFile()
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    if (!fso.fileExists(fileName)) {
        form.messageBox("File " + fileName + " does not exists")
        return
    }
    var file = fso.OpenTextFile(fileName)
    var text = file.ReadAll()
    file.close()
    wso.loadLayout(text)
}

function currentDir() {
    var s = WScript.ScriptFullName;
    s = s.substring(0, s.lastIndexOf("\\") + 1);
    return s;
};

function layoutFile() {
    return configurationFolder() + "DockingEx.txt"
}

function configurationFolder() {
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var path = fso.GetSpecialFolder(temporaryFolder = 2) + "\\WSOExamples"
    if (!fso.FolderExists(path))
        fso.CreateFolder(path)
    return path + "\\"
}

