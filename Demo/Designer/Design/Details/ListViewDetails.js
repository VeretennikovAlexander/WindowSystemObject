
function Design_Details_ListView(sender, control) {

    function ObjectUpdate(control) {

        var prev = {}

        this.set = function (name, value) {

            prev[name] = control[name]
            control[name] = value

        }

        this.save = function (name) {
            prev[name] = control[name]
        }

        this.restore = function (name) {
            control[name] = prev[name]
        }

        this.revert = function()
        { 
            for (var item in prev)
            {
                control[item] = prev[item]
            }
        }

    }

    var listView
    var subItemsEditor
    var frame
    var itemsFrame
    var columnsFrame
    var columnsBox
    var columns
    var ownerData
    var listViewUpdate

    function treeItemText(text) {
        if (text.length > 0)
            return text
        return "[ ]"
    }

    function createTreeItem(item) {
        var newTreeItem = subItemsEditor.items.add(treeItemText(item.text))
        newTreeItem.userData = item
        for (var i = 1; i < columns.count; i++) {
            var subItem = item.subItemsEx(i-1)
            var subItemText = subItem.text
            var text = treeItemText(subItemText)
            var treeSubItem = newTreeItem.add(text)
            treeSubItem.userData = subItem
        }
        newTreeItem.expand(true)
        return newTreeItem
    }

    function refreshSubItemsEditor() {
        subItemsEditor.items.clear()

        for (var i = 0; i < listView.count; i++) {
            var item = listView.item(i)
            createTreeItem(item)
        }

        subItemsEditor.items.expand(true)
    }

    function createItemsFrame() {
        itemsFrame = frame.createFrame(0, 0, 0, 250)
        itemsFrame.align = o.Translate("AL_BOTTOM")

        subItemsEditor = itemsFrame.createTreeView(0, 0, 0, 250)
        subItemsEditor.themeApplicationName = "Explorer"
        subItemsEditor.align = o.Translate("AL_CLIENT")
        subItemsEditor.hideSelection = false

        refreshSubItemsEditor()
        

        if (ownerData) {
            return
        }

        var bottomFrame = itemsFrame.createFrame(0, 0, 0, 40)
        bottomFrame.Align = o.translate("AL_BOTTOM")

        var button = bottomFrame.createButton(10, 10, 80, 25, "Add")
        button.onClick = function (sender) {
            var newItem = listView.add("New Item")
            var newTreeItem = createTreeItem(newItem)
            
            listView.itemIndex = newItem.index
            newItem.selected = true
            newTreeItem.selected = true
        }

        button = bottomFrame.createButton(100, 10, 80, 25, "Delete")
        button.onClick = function (sender) {
            var item = subItemsEditor.selectedItem
            if (item != null) {
                var index = item.userData.index
                item.remove()
                listView.remove(index)
            } else {
                //form.MessageBox("No item selected")
            }
        }
    }

    function refreshColumnsBox() {
        columnsBox.clear()
        for (var i = 0; i < columns.count; i++) {
            columnsBox.add(columns.item(i).text)
        }
    }

    function updateDesignColumnItem() {
        if (!columnsFrame.visible)
            return

        var item
        if (columnsBox.itemIndex < 0) {
            item = null
        } else {
            item = columns.item(columnsBox.itemIndex)
        }
        setDesignPropertyItem(item)
    }

    function createColumnsFrame() {
        
        columnsFrame = frame.createFrame(0, 0, 0, 250)
        columnsFrame.align = o.Translate("AL_BOTTOM")
        columnsFrame.hide()

        columnsBox = columnsFrame.createListBox()
        columnsBox.align = o.translate("AL_CLIENT")
        
        refreshColumnsBox()

        var bottomFrame = columnsFrame.createFrame(0, 0, 0, 40)
        bottomFrame.Align = o.translate("AL_BOTTOM")

        function columnsChanged() {
            refreshSubItemsEditor()
            listView.clearSelection()
        }

        var button = bottomFrame.createButton(10, 10, 80, 25, "Add")
        button.onClick = function (sender) {
            var columnText = "New Column"

            var newColumn = columns.add("New Column")
            columnsBox.add(columnText)

            columnsChanged()
        }

        button = bottomFrame.createButton(100, 10, 80, 25, "Delete")
        button.onClick = function (sender) {
            if (columnsBox.itemIndex > -1) {
                columns.remove(columnsBox.itemIndex)

                refreshColumnsBox()
                
                columnsChanged()
            }
        }

        columnsBox.onChange = function (sender) {
            updateDesignColumnItem()
        }

        columnsFrame.onShow = function(sender) {
            listView.style = o.translate("LVS_REPORT")
        }

        columnsFrame.onHide = function (sender) {
            listViewUpdate.restore("style")
        }
                
    }

    var designItem = null

    var form = control.form.createDialogForm()
    form.clientWidth = 690
    form.clientHeight = 600
    form.centerControl()
    form.sizeGrip = true

    var topFrame = form.createFrame(0, 0, 0, 40)
    topFrame.align = o.Translate("AL_TOP")
    var toolBar = topFrame.createToolBar(10, 10, 200, 25)
    toolBar.list = true
    toolBar.showText = true
    var buttons = toolBar.buttons
    var tabs = []

    function addButton(name, control) {
        var button = buttons.add(name)
        button.radioCheck = true
        button.userData = control        
        tabs.push(control)

        button.onExecute = function (sender) {

            tabs.each(function (item) {
                item.hide()
            })

            sender.userData.show()
                        
            if (itemsFrame.visible) {
                updateDesignPropertyItem()
            }
            if (columnsFrame.visible) {
                updateDesignColumnItem()
            }
        }
        return button
    }

    var documentControl = getActiveDocumentControlFromControl(control)
    var document = documentControl.userData
    documentControl.designFrame.design.references.fileName = document.fileName

    frame = form.createFrame(0, 0, 0, 0)
    frame.align = o.translate("AL_CLIENT")
    frame.autoSplit = true

    listView = frame.createListView(0, 0, 0, 150)
    listView.align = o.Translate("AL_CLIENT")
    
    var text = control.design.save()
    listView.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

    columns = listView.columns
    ownerData = listView.ownerData

    listViewUpdate = new ObjectUpdate(listView)
    listViewUpdate.set("hideSelection", false)
    listViewUpdate.set("multiSelect", false)
    listViewUpdate.save("style")

    createItemsFrame()
    createColumnsFrame()

    var buttonItems = addButton("Items", itemsFrame)
    var buttonColumns = addButton("Columns", columnsFrame)

    frame = form.createFrame(0, 0, 0, 50)
    frame.Align = o.translate("AL_BOTTOM")

    var propertyGrid = form.createPropertyGrid(0, 0, 300, 0)
    propertyGrid.align = o.translate("AL_RIGHT")
    var editor = new PropertyEditor(propertyGrid)
    propertyGrid.userData = editor

          

    function listViewSelectedItem() {
        var itemIndex = listView.itemIndex
        if (itemIndex < 0) {
            return null
        }
        return listView.item(itemIndex)
    }

    function setDesignPropertyItem(item) {

        if (designItem == item) {
            return
        }
        
        designItem = item

        if (item == null) {
            propertyGrid.items.clear()
        } else {
            editor.buildPropertyGrid(item, false)
        }
    }

    function updateDesignPropertyItem() {
        if (!itemsFrame.visible) {
            return
        }

        var selectedItem = subItemsEditor.selectedItem
        var object = null
        if (selectedItem) {
            var object = selectedItem.userData
            var item = object
            if (item.type != "ListItem") {
                item = item.Parent
            }

            listView.itemIndex = item.index
            listViewSelectedItem().selected = true
        }

        setDesignPropertyItem(object)
    }

    function setListViewEvents() {
            
        subItemsEditor.onChange = function (sender) {
            updateDesignPropertyItem()
        }

        listView.onChange = function (sender) {
            if (!itemsFrame.visible) {
                return
            }

            var item = listViewSelectedItem()
            if (item) {
                var treeItem = subItemsEditor.items.item(item.index)
                var selectedItem = subItemsEditor.selectedItem
                if (selectedItem != null) {
                    if ((selectedItem == treeItem) || (selectedItem.parent == treeItem)) {
                        treeItem = null
                    }
                }

                if (treeItem != null) {
                    treeItem.selected = true
                }
            }
            updateDesignPropertyItem()
        }
    }

    if (!ownerData) {
        setListViewEvents()
    }
       
    
    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    button = rightFrame.createButton(10, 10, 75, 25, "OK")

    button.onClick = function (sender) {

        listViewUpdate.revert()

        var text = listView.design.save()
        control.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

        sender.form.close()
    }
    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    editor.onPropertyChanged = function (property, newValue) {
        if (property.Text == "Text") {
            if (itemsFrame.visible) {
                subItemsEditor.selectedItem.text = treeItemText(newValue)
            } else
                if (columnsFrame.visible) {
                    var itemIndex = columnsBox.itemIndex
                    if (itemIndex > -1) {
                        columnsBox.maskEvents = true
                        columnsBox.item(itemIndex) = newValue
                        columnsBox.maskEvents = false
                    }
                }
        }
    }
       

    form.ShowModal()
}

define("Designer.details.ListView", function (sender, control) {
    Design_Details_ListView(sender, control)
})

