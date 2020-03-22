
function Design_Details_TreeView(sender, control, field) {

    var documentControl = getActiveDocumentControlFromControl(control)
    var document = documentControl.userData

    var form = control.form.createDialogForm()
    form.clientWidth = 690
    form.clientHeight = 400
    form.centerControl()
    form.sizeGrip = true

    var frame = form.createFrame(0, 0, 0, 0)
    frame.align = o.translate("AL_CLIENT")
    frame.name = "frame"

    var treeView = frame.createTreeView(0, 0, 0, 150)
    treeView.themeApplicationName = "Explorer"
    treeView.align = o.Translate("AL_CLIENT")
    treeView.name = "treeView"
    treeView.hideSelection = false
    treeView.checkBoxes = control.checkBoxes
    treeView.images = control.images
    treeView.stateImages = control.stateImages
    
    var propertyGrid = frame.createPropertyGrid(0, 0, 300, 0)
    propertyGrid.align = o.translate("AL_RIGHT")
    var editor = new PropertyEditor(propertyGrid)
    propertyGrid.userData = editor

    copyNodes(treeView.items, control[field])

    function copyNodes(target, source) {
        target.clear()
        var text = source.design.save();
        target.design.load(text)
    }
    
    var bottomFrame = frame.createFrame(0, 0, 0, 40)
    bottomFrame.Align = o.translate("AL_BOTTOM")

    function treeViewActiveItem() {
        var item = treeView.selectedItem
        if (item == null)
            item = treeView.items
        return item
    }

    function treeViewChange() {
        var item = treeView.selectedItem
        if (item == null) {
            propertyGrid.items.clear()
        } else {
            editor.buildPropertyGrid(item, true)
        }
    }

    treeView.onChange = treeViewChange

    var button = bottomFrame.createButton(10, 10, 80, 25, "Add Root")

    function addNode(item) {
        var newItem = item.add("New Node")

        item.expand()

        newItem.selected = true
    }

    button.onClick = function (sender) {
        var item = treeView.items
        addNode(item)
    }

    var button = bottomFrame.createButton(100, 10, 80, 25, "Add Child")

    button.onClick = function (sender) {
        var item = treeViewActiveItem()
        addNode(item)
    }

    var button = bottomFrame.createButton(190, 10, 80, 25, "Add Neighbor")

    button.onClick = function (sender) {
        var item = treeViewActiveItem()
        if (item.parent)
            item = item.parent
        addNode(item)
    }

    button = bottomFrame.createButton(280, 10, 80, 25, "Delete")
    button.onClick = function (sender) {
        var item = treeView.selectedItem
        if (item != null) {
            var parent = item.parent
            item.remove()
        } else {
            //form.MessageBox("No item selected")
        }
    }

    frame = form.createFrame(0, 0, 0, 50)
    frame.Align = o.translate("AL_BOTTOM")
    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    button = rightFrame.createButton(10, 10, 75, 25, "OK")

    button.onClick = function (sender) {

        copyNodes(control[field], treeView.items)
                
        sender.form.close()
    }
    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    treeView.items.expand(true)

    form.ShowModal()
}

define("Designer.details.TreeView", function (sender, control) {
    Design_Details_TreeView(sender,control,"items")
})

