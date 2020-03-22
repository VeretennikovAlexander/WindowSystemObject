
function Design_Details_Header(sender, control, field) {

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

    var topFrame = form.createFrame(0, 0, 0, 50)
    topFrame.align = o.translate("AL_TOP")
    topFrame.borderWidth = 10

    var header = topFrame.createHeader()
    header.align = o.translate("AL_CLIENT")

    var text = control.design.save()
    header.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

    var view = frame.createListBox(0, 0, 0, 150)
    view.align = o.translate("AL_CLIENT")
    updateView()
    
    var propertyGrid = frame.createPropertyGrid(0, 0, 300, 0)
    propertyGrid.align = o.translate("AL_RIGHT")
    var editor = new PropertyEditor(propertyGrid)
    propertyGrid.userData = editor
       
    var bottomFrame = frame.createFrame(0, 0, 0, 40)
    bottomFrame.Align = o.translate("AL_BOTTOM")

    function updateView() {
        view.clear()
        for (var i = 0; i < header.count; i++) {
            view.add(header.item(i).text)
        }
    }

    header.onColumnClick = function (sender, column) {
        view.itemIndex = column.index
    }


    function updateSelected() {
        if (view.itemIndex < 0) {
            propertyGrid.items.clear()
        } else {
            var item = header.item(view.itemIndex)
            editor.buildPropertyGrid(item, true)
        }
    }

    var button = bottomFrame.createButton(10, 10, 80, 25, "Add")
    
    button.onClick = function (sender) {
        var itemText = "New Column"
        var item = header.add(itemText)
        view.add(itemText)
        view.itemIndex = view.count-1
    }
       
    button = bottomFrame.createButton(100, 10, 80, 25, "Delete")
    button.onClick = function (sender) {
        var itemIndex = view.itemIndex
        if (itemIndex > -1) {
            header.remove(itemIndex)
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

        var text = header.design.save()
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
                view.item(itemIndex) = newValue
                view.maskEvents = false
            }               
        }
    }

    view.itemIndex = 0

    form.ShowModal()
}

define("Designer.details.Header", function (sender, control) {
    Design_Details_Header(sender, control)
})


