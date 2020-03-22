//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015


function startupDir() {
    var s = WScript.ScriptFullName;
    s = s.substring(0, s.lastIndexOf("\\") + 1);
    return s;
};

if (!this.uses) {
    uses = function (s) {
        var fso = new ActiveXObject("Scripting.FileSystemObject")
        eval(fso.openTextFile(startupDir() + s, 1, false).readAll()) 
        }
}

uses("External/es5-shim-4.1.9/es5-shim.js")
uses("Design/Core/Namespace.js")
uses("Design/Core/Library.js")
uses("Design/Core/LibraryEx.js")
uses("Design/Core/Files.js")
uses("Design/Core/Handlers.js")
uses("Design/Core/Console.js")
uses("Design/Core/Localization.js")
uses("Design/Core/Global.js")
uses("Design/Core/Help.js")
uses("Design/DesignerPropertyEditor.js")
uses("Design/ToolBox.js")
uses("Design/Details/ListBoxDetails.js")
uses("Design/Details/ActionDetails.js")
uses("Design/Details/TreeViewDetails.js")
uses("Design/Details/HeaderDetails.js")
uses("Design/Details/ListViewDetails.js")
uses("Design/Details/StatusBarDetails.js")
uses("Design/Documents/Document.js")
uses("Design/Documents/FormDocument.js")
uses("Design/Documents/TextDocument.js")
uses("Design/Documents/ImageDocument.js")
uses("Design/Config.js")
uses("Design/Docking.js")
uses("Design/Layout.js")
uses("Design/Images.js")
uses("Design/SolutionEnum.js")
uses("Design/SolutionBrowser.js")
uses("Design/Solution.js")
uses("Design/NewScript.js")
uses("Design/Documents.js")
uses("Design/Console.js")
uses("Design/Actions/ViewAsText.js")

o = new ActiveXObject("Scripting.WindowSystemObject")

o.enableVisualStyles = true

f = o.createForm(0,0,0,0)

f.clientWidth = 1200
f.clientHeight = 600
f.centerControl()
f.text = "Designer Example 0.1 (New features in WSO 1.1.17)"
var panels = {}

f.docking.uniqueId = "Form1"
f.docking.dropTarget = true
f.autoSplit = true
f.color = 0x00BEAE9E
f.borderWidth = 5

var designControl = null
var selectedControl = null

function removeDocument(sender) {
    var newDocuments = []
    documents.each(function (item) {
        if (item != sender) {
            newDocuments.push(item)
        }
    })
    documents = newDocuments
    updateWindowsMenu()

    designControl = null
    selectedControl = null

    sender.destroy()

    updateActiveDocument(f)
}

function createFormDocument(name, formDocument) {
    
    var clientControl = getClientControl()

	var doc = f.createFrame(10,10,100,100)
	doc.docking.pageControlTag = 1

	initDockingProperties(doc)

	doc.text = name

	formDocument = formDocument || new FormDocument()    

	var designFrame = doc.createFrame(0,0,420,400)
	designFrame.design.enabled = true
	designFrame.align = o.translate("AL_TOPLEFT")
	designFrame.name = "designFrame"

	doc.align = o.translate("AL_CLIENT")
	doc.docking.alwaysDockPage = true
	doc.docking.dropTarget = true
	//doc.docking.uniqueId = name

	formDocument.designFrame = designFrame
	formDocument.primaryControl = designFrame

    doc.UserData = formDocument

    documents.push(doc)

    doc.onUndockQuery = function (sender, undockContext) {
        if (!undockContext.controlVisible) {
            var document = sender.userData
            if (!document.checkModified(sender)) {
                undockContext.value = false
            }
        }
    }

    doc.onUndock = function (sender) {
        if (!sender.parent.visible)
        {
            removeDocument(sender)
        }
    }

    dockAsClient(doc, clientControl)

    updateWindowsMenu()

	return doc
}

function createTextDocument(name, document) {

    var clientControl = getClientControl()

    var doc = f.createFrame(10, 10, 100, 100)
    doc.docking.pageControlTag = 1

    initDockingProperties(doc)

    doc.text = name

    document = document || new Document()

    var edit = doc.createRichEdit(0, 0, 420, 400)
    edit.align = o.translate("AL_CLIENT")
    edit.name = "edit"
    edit.font.name = "Courier New"

    var copyMenuItem = edit.popupMenu.add("Cut")
    copyMenuItem.onExecute = function (sender) {
        edit.cut()
    }
    copyMenuItem.OnUpdate = function (sender) {
        sender.enabled = edit.selEnd != edit.selStart
    }

    var copyMenuItem = edit.popupMenu.add("Copy")
    copyMenuItem.onExecute = function (sender) {
        edit.copy()
    }
    copyMenuItem.OnUpdate = function (sender) {
        sender.enabled = edit.selEnd != edit.selStart
    }

    var pasteMenuItem = edit.popupMenu.add("Paste")
    pasteMenuItem.onExecute = function (sender) {
        edit.paste()
    }
    pasteMenuItem.OnUpdate = function (sender) {
        sender.enabled = edit.canPaste
    }

    var selectAllMenuItem = edit.popupMenu.add("Select All")
    selectAllMenuItem.onExecute = function (sender) {
        edit.selectAll()
    }
   
    doc.align = o.translate("AL_CLIENT")
    doc.docking.alwaysDockPage = true
    doc.docking.dropTarget = true

    document.edit = edit
    document.primaryControl = edit

    doc.userData = document

    documents.push(doc)

    doc.onUndockQuery = function (sender, undockContext) {
        if (!undockContext.controlVisible) {
            var document = sender.userData
            if (!document.checkModified(sender)) {
                undockContext.value = false
            }
        }
    }

    doc.onUndock = function (sender) {
        if (!sender.parent.visible) {
            removeDocument(sender)
        }
    }

    dockAsClient(doc, clientControl)

    updateWindowsMenu()

    return doc
}

function createImageDocument(name, document) {

    var clientControl = getClientControl()

    var doc = f.createFrame(10, 10, 100, 100)
    doc.docking.pageControlTag = 1

    initDockingProperties(doc)

    doc.text = name

    document = document || new Document()

    var image = doc.drawImage(10,10,0,0,document.fileName)

    doc.align = o.translate("AL_CLIENT")
    doc.docking.alwaysDockPage = true
    doc.docking.dropTarget = true

    document.primaryControl = doc

    doc.userData = document

    documents.push(doc)

    doc.onUndockQuery = function (sender, undockContext) {
        if (!undockContext.controlVisible) {
            var document = sender.userData
            if (!document.checkModified(sender)) {
                undockContext.value = false
            }
        }
    }

    doc.onUndock = function (sender) {
        if (!sender.parent.visible) {
            removeDocument(sender)
        }
    }

    dockAsClient(doc, clientControl)

    updateWindowsMenu()

    return doc
}

function checkModifiedQuiet(list) {
    list.each(function (item) {
        var document = item.userData
        if (document.needCheckModified(item)) {
            if (!document.save()) {
                return false
            }
        }
    })

    return true
}

function checkModified(list) {

    var needCheckList = []

    list.each(function (item) {
        var document = item.userData
        if (document.needCheckModified(item)) {
            needCheckList.push(item)
        }
    })

    if (needCheckList.length == 0) {
        return true
    }

    var form = f.createDialogForm(0, 0, 400, 300)
    var frame = form.createFrame(0, 0, 0, 40)
    frame.align = o.translate("AL_TOP")
    frame.textOut(10,10,"Save changes to the following items:")
    var view = form.createListView(0,0,0,0,o.translate("LVS_REPORT"))
    view.align = o.translate("AL_CLIENT")
    view.checkBoxes = true
    view.columns.add("Name",300)
    var bottom = form.createFrame(0, 0, 0, 40)
    bottom.align = o.translate("AL_BOTTOM")
    form.centerControl()

    needCheckList.each(function(item){
        var listItem = view.add(item.text)
        listItem.checked = true
        listItem.userData = item
    })

    frame = bottom.createFrame(0, 0, 260, 25)
    frame.align = o.translate("AL_RIGHT")

    var result = false

    var button = frame.createButton(10, 10, 75, 25, "Yes")

    button.onClick = function (sender) {

        for (var i = 0; i < view.count; i++) {
            var item = view.item(i)
            if (item.checked) {
                var document = view.item(i).userData
                if (!document.userData.save()) {
                    return
                }
            }
        }

        result = true
        sender.form.close()
    }

    button = frame.createButton(90, 10, 75, 25, "No")
    button.onClick = function (sender) {
        result = true
        sender.form.close()
    }

    button = frame.createButton(170, 10, 75, 25, "Cancel")
    button.onClick = function (sender) {
        result = false
        sender.form.close()
    }

    form.onKeyDown = formKeyDownClose

    form.showModal()

    return result
}


function dockAsClient(doc, clientControl) {
    if (clientControl) {
        clientControl.docking.dockAsNeighbour(doc, o.Translate("AL_CLIENT"))
    } else {
        doc.setBounds(0,0,100,100)
    }
}

function getClientControl() {
    var clientControl = null

    new Collection(f.controls).each(function(item){
        if (item.align == o.translate("AL_CLIENT"))
        {
            clientControl = item
        }
    })

    if (clientControl)
    if ((clientControl.type == "PageControl") || (clientControl.type == "TabControl"))
    for (var i = 0; i<2; i++)
    {
        if (clientControl.docking.autoCreated) {
            clientControl = clientControl.controls.item(0)            
        }
    }
    

    return clientControl
}

function createDockingPanel(panel, name, align) {

    initDockingProperties(panel)

    panel.text = name
    panel.align = align
    panel.docking.alwaysDockPage = true
    panel.docking.dropTarget = true
    panel.docking.uniqueId = name
    panels[name] = panel
    return panel
}

function createPanel(name)
{
	var panel = f.createFrame(10, 10, 150, 100)

	return createDockingPanel(panel, name, o.translate("AL_LEFT"))    	
}

function createBottomPanel(name)
{
	var panel = f.createFrame(10, 10, 100, 120)

	return createDockingPanel(panel, name, o.translate("AL_BOTTOM"))
}

function createConsolePanel(name) {
    var panel = createConsole(f)

    return createDockingPanel(panel, name, o.translate("AL_BOTTOM"))
}

function addToolBoxEvents(form) {

    form.design.addEventHandler("OnControlCreate", function (sender, control) {

        toolBox.buttonsAllUp()

        var detailsFunction = Designer.details[control.Type]
        if (detailsFunction) {
            control.design.showDetailsButton = true
            control.design.onDetailsButtonClick = detailsFunction
        }
    })
    
    form.design.addEventHandler("OnActiveControlChange", function (sender, control) {
        setDesignControl(control)
    })
}

function createToolBox(name)
{
    toolBox = new ToolBox(f, name)

    toolBox.create()

    panels[name] = toolBox.getPanel()

    designControl = null

    addToolBoxEvents(f)

    return toolBox.getPanel()
}
    
function setDesignControl(control)
{
    if (designControl != control) {

        designControl = control

        if (designControl) {
            selectedControl = null

            propertiesPanel.text = "Properties" + " - " + designControl.type
        } else {
            propertiesPanel.text = "Properties"
        }

        if (!designControl || !designControl.design.enabled) {
            propertyGridTabs.ItemIndex = 0
            return
        }


        var reuse = true
        var propertyGrid

        if (reuse) {
            var name = ".PropertyGrid_" + designControl.Type

            var tab = propertyGridTabs[name]
            if (tab == null) {
                tab = propertyGridTabs.CreateTab("")
                tab.name = name
                tab.userData = propertyGridTabs.controls.count - 1

                propertyGrid = tab.createPropertyGrid(0, 0, 0, 0)
                propertyGrid.align = o.translate("AL_CLIENT")
            }
            propertyGrid = tab.Controls.item(0)
            propertyGridTabs.ItemIndex = tab.UserData
        } else {
            propertyGrid = propertyGridTabs.controls.item(0).controls.item(0)
        }

        if (!propertyGrid.userData)
            propertyGrid.userData = new PropertyEditor(propertyGrid)

        propertyGrid.userData.buildPropertyGrid(designControl, reuse,
            getActiveDocumentControlFromControl(designControl))

    }

    updateSolution()
}

function setSelectedControl(control)
{
    if (designControl) {
        selectedControl = null
        return
    }
    if (selectedControl != control) {
        selectedControl = control
    }
}

function createProperties(Name) {
    var panel = f.CreateFrame(10, 10, 350, 100)

    initDockingProperties(panel)

    panel.text = Name
    panel.align = o.translate("AL_RIGHT")
    panel.docking.alwaysDockPage = true
    panel.docking.dropTarget = true
    panel.docking.uniqueId = Name
    panels[Name] = panel

    propertyGridTabs = panel.createTabControl(0, 0, 0, 0)
    propertyGridTabs.tabsVisible = false
    propertyGridTabs.align = o.translate("AL_CLIENT")
    var tab = propertyGridTabs.createTab("")
    tab.name = "PropertyGrid_Default"
    tab.userData = propertyGridTabs.controls.count - 1

    var propertyGrid = tab.createPropertyGrid()
    propertyGrid.align = o.translate("AL_CLIENT")

    PropertyGridFrame = panel

    //setDesignControl(Panel.CreateEdit())
    //setDesignControl(Panel.CreateComboBox())
    
    propertyGridTabs.ItemIndex = 0

    var docDescriptor = {
        filter: "-",
        useDesignControl : true
    }

    panel.userData = docDescriptor

    return panel
}

/*
doc1 = createFormDocument("Doc1")
for (i = 2; i<4; i++)
{
    createFormDocument("Doc" + i)
}

doc1.Parent.Visible = true
*/

createToolBox("ToolBox")

//searchPanel = createBottomPanel("Search")
searchPanel = null

consolePanel = createConsolePanel("Console")

propertiesPanel = createProperties("Properties")

if (searchPanel) {
    with (searchPanel) {
        with (createEdit(0, 0, 0, 0, o.translate("ES_MULTILINE | ES_READONLY"))) {
            align = o.translate("AL_CLIENT")
            add("Search result 1")
            add("Search result 2")
            add("Search result 3")
        }
    }
    searchPanel.Docking.DockAsNeighbour(consolePanel, o.Translate("AL_CLIENT"))
}


solutionPanel = createPanel("Solution")
solutionTreeView = new SolutionTreeView(solutionPanel)

/*
IndexPanel = createPanel("Index")
var ListBox = IndexPanel.CreateListBox(0,0,0,0)
ListBox.Align = o.Translate("AL_CLIENT")
for (i = 1; i<5; i++)
{
	ListBox.Add("Item 1."+i)
}
*/

//solutionPanel.Docking.DockAsNeighbour(IndexPanel, o.Translate("AL_CLIENT"))

HelpPanel = createPanel("Help")
solutionPanel.Docking.DockAsNeighbour(HelpPanel, o.Translate("AL_CLIENT"))
solutionPanel.Parent.Visible = true
HelpPanel.TextOut(10, 10, "Designer Example 0.1").font.bold = true
HelpPanel.TextOut(10, 40, "See Designer page\nin the Help (F1)")

fileMenu = f.Menu.Add("File")

function getActiveDocumentControl() {
    var activeForm = o.activeForm 
    if (!activeForm)
        return null

    var activeControl = activeForm.activeControl
    var result = getActiveDocumentControlFromControl(activeControl)

    if (result) {
        return result
    }

    if (designControl) {
        return getActiveDocumentControlFromControl(designControl)
    }

    return getActiveDocumentControlFromControl(selectedControl)
}

function actionUpdateActiveDocumentRequired(sender) {
    var activeDocument = getActiveDocumentControl()
    sender.enabled = activeDocument != null
    var docName = ""
    if (activeDocument != null) {
        docName = " " + activeDocument.text
    }

    sender.text = sender.userData.text + docName
}

function actionUpdateActiveFormDocumentRequired(sender) {
    var activeDocument = getActiveDocumentControl()
    
    if (activeDocument)
    if ((activeDocument.userData instanceof FormDocument) == false) {
        activeDocument = null
    }

    sender.enabled = activeDocument != null
    var docName = ""
    if (activeDocument != null) {
        docName = " " + activeDocument.text
    }

    sender.text = sender.userData.text + docName
    sender.visible = sender.enabled
}

function updateSolution(force, activeDocument) {
    var activeDocument = activeDocument || getActiveDocumentControl()
    solutionTreeView.update(activeDocument, force)
}


newMenuItem = fileMenu.add("New", "Ctrl+N")
newMenuItem.onExecute = function () {
    var doc = createFormDocument("Form1")
    doc.setFocus()
}

openMenuItem = fileMenu.add("Open...", "Ctrl+O")
openMenuItem.userData = openMenuItem.Text
openMenuItem.onExecute = function () {
    var formDocument = new FormDocument()
    var text = formDocument.open()
    if (text) {
        var doc = createFormDocument("",formDocument)
        var designFrame = doc.userData.designFrame
        doc.userData = formDocument
        formDocument.designFrame = designFrame
        formDocument.designFrame.design.load(text, o.translate("DESIGN_LOAD_HIDDEN"), formDocument.fileName)
        doc.text = formDocument.fileName.extractFileName()
        doc.setFocus()
        updateWindowsMenu()
    }
}

saveMenuItem = fileMenu.Add("Save", "Ctrl+S")
saveMenuItem.userData = {
        text: saveMenuItem.Text
    }

saveMenuItem.onUpdate = actionUpdateActiveDocumentRequired
saveMenuItem.onExecute = function () {
    var activeDocument = getActiveDocumentControl()
    var document = activeDocument.userData
    if (document.save()) {
        activeDocument.text = document.fileName.extractFileName()
        updateSolution(true)
    }
}

fileMenu.add("-")

runMenuItem = fileMenu.Add("Run", "F5")
runMenuItem.userData = {
    text: runMenuItem.Text
}

runMenuItem.onExecute = function (sender) {

    if (!checkModifiedQuiet(documents)) {
        return
    }

    var fileName = sender.userData.fileName
    console.log("Running " + fileName)

    var shell = new ActiveXObject("WScript.Shell")
    shell.Run('"' + fileName + '"')
}

runMenuItem.onUpdate = function (sender) {

    var activeDocumentControl = getActiveDocumentControl()

    var scriptFileName = ""
    var docName = ""

    if (activeDocumentControl)
    {
        if (activeDocumentControl.userData instanceof FormDocument) {
            var formDocument = activeDocumentControl.userData

            $(formDocument.designFrame.design.references).visit(function (item) {

                if (item.main) {
                    scriptFileName = solutionTreeView.getFullFileNameByReferences(item)
                }
            })
        } else
            if (activeDocumentControl.userData instanceof TextDocument) {
              var document = activeDocumentControl.userData
              scriptFileName = document.fileName
        }
        docName = " " + activeDocumentControl.text
    }

    enabled = scriptFileName.length > 0

    sender.userData.fileName = scriptFileName

    sender.enabled = enabled    
    sender.text = sender.userData.text + docName
    sender.visible = enabled
}

fileMenu.add("-")

fileMenu.Add("Exit").OnExecute = closeFormHandler

viewMenu = f.Menu.Add("View")
previewMenuItem = viewMenu.Add("Preview", "F2")
previewMenuItem.userData = {
       text: previewMenuItem.Text
   }

previewMenuItem.onUpdate = actionUpdateActiveFormDocumentRequired
previewMenuItem.onExecute = function () {
    var activeDocument = getActiveDocumentControl()

    if (activeDocument.userData.needCheckModified()) {
        if (!activeDocument.userData.save()) {
            return
        }
    }

    //var text = activeDocument.userData.designFrame.design.save()
    var form = f.createDialogForm(0, 0, 500, 400)
    form.text = "Preview"
    form.sizeGrip = true
    form.design.open(activeDocument.userData.fileName)
    form.centerControl()
    form.onKeyDown = formKeyDownClose
    form.showModal()
}

viewMenu.add("-")

addDocumentViewAsTextMenuItem(viewMenu)

function formKeyDownClose(Sender, Key) {
    if (Key == o.Translate("VK_ESCAPE")) {
        Sender.Close()
    }
}



windowsMenu = f.menu.add("Windows")

updateWindowsMenu()

function updateWindowsMenu() {
    
    if (typeof(windowsMenu) == 'undefined') {
        return
    }

    windowsMenu.clear()

    for (name in panels) {
        menuItem = windowsMenu.add(name)
        menuItem.onExecute = showPanel
    }

    if (documents.length > 0) {
        windowsMenu.add("-")
    }

    documents.each(function (item) {
        menuItem = windowsMenu.add(item.text)
        menuItem.userData = item
        menuItem.onExecute = showPanel
    })
}

function ensureVisible(panel) {
    while (true) {
        panel.Visible = true
        if (panel.type == "Form")
            break
        panel = panel.Parent
    }
}

function showPanel(sender)
{
    panel = sender.userData || panels[sender.Text]
    ensureVisible(panel)
}

layoutMenu = f.menu.add("Layout")
layoutMenu.Add("Save").onExecute = saveLayout
layoutMenu.Add("Load").onExecute = loadLayout
layoutMenu.Add("Clear").onExecute = clearLayout

initHelpMenu(f.menu.add("Help"))

f.onCloseQuery = function (sender, resultPtr) {
    if (!checkModified(documents)) {
        resultPtr.value = false
    }
}

function updateActiveDocument(form) {
    var activeControl = form.activeControl
    if (activeControl) {
        var documentControl = getActiveDocumentControlFromControl(activeControl)
        if (documentControl) {
            setSelectedControl(activeControl)
        }
    }
    updateSolution()
}

function updateFormEvents(form) {

    form.onActiveControlChange = function (sender) {
        updateActiveDocument(form)        
    }
    /*
    f.design.onDesignerAdd = function (sender, control) {
        console.log("Designer add: " + sender.type+","+control.type)
    }

    f.design.onDesignerRemove = function (sender, control) {
        console.log("Designer remove: " + sender.type + "," + control.type)
    }*/
}

updateFormEvents(f)

loadLayout()

f.Show()

o.Run()



