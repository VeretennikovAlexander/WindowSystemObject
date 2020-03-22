


function Design_DetailsButtonClick_StatusBar(sender, control) {

    var documentControl = getActiveDocumentControlFromControl(control)
    var document = documentControl.userData
    documentControl.designFrame.design.references.fileName = document.fileName

    var form = control.form.createDialogForm()
    form.clientWidth = 690
    form.clientHeight = 400
    form.centerControl()
    form.sizeGrip = true

    var frame = form.createFrame(0, 0, 0, 0)
    frame.align = o.translate("AL_CLIENT")
    frame.name = "frame"

    var statusBar = form.createStatusBar()

    var text = control.design.save()
    statusBar.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

    var view = frame.createListBox(0, 0, 0, 150)
    view.align = o.translate("AL_CLIENT")
    updateView()

    var propertyGrid = frame.createPropertyGrid(0, 0, 300, 0)
    propertyGrid.align = o.translate("AL_RIGHT")
    var editor = new PropertyEditor(propertyGrid)
    propertyGrid.userData = editor

    var bottomFrame = frame.createFrame(0, 0, 0, 40)
    bottomFrame.Align = o.translate("AL_BOTTOM")

    function getStatusItemText(index, item) { 
        return index+ ": "+ "width" + " = " + item.width
    }

    function updateView() {
        view.clear()
        for (var i = 0; i < statusBar.count; i++) {
            view.add(getStatusItemText(i,statusBar.item(i)))
        }
    }

    function updateSelected() {
        if (view.itemIndex < 0) {
            propertyGrid.items.clear()
        } else {
            var item = statusBar.item(view.itemIndex)
            editor.buildPropertyGrid(item, true)
        }
    }

    var button = bottomFrame.createButton(10, 10, 80, 25, "Add")

    button.onClick = function (sender) {
        var item = statusBar.add(100)
        view.add(getStatusItemText(view.count, item))
        view.itemIndex = view.count - 1
    }

    button = bottomFrame.createButton(100, 10, 80, 25, "Delete")
    button.onClick = function (sender) {
        var itemIndex = view.itemIndex
        if (itemIndex > -1) {
            statusBar.remove(itemIndex)
            view.remove(itemIndex)
        }
        updateSelected()
    }

    view.onChange = function () {
        updateSelected()
    }

    frame = form.createFrame(0, 0, 0, 50)
    frame.Align = o.translate("AL_BOTTOM")
    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    button = rightFrame.createButton(10, 10, 75, 25, "OK")

    button.onClick = function (sender) {

        var text = statusBar.design.save()
        control.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

        sender.form.close()
    }
    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    editor.onPropertyChanged = function (property, newValue) {
        if (property.Text == "Text") {
            var itemIndex = view.itemIndex
            if (itemIndex > -1) {
                view.maskEvents = true
                view.item(itemIndex) = getStatusItemText(itemIndex, statusBar.item(itemIndex))
                view.maskEvents = false
            }
        }
    }

    view.itemIndex = 0

    form.ShowModal()
}

define("Designer.details.StatusBar", Design_DetailsButtonClick_StatusBar)

