

function Design_DetailsButtonClick_ListBox(sender, control) {
    var form = control.form.createDialogForm(0, 0, 0, 0)
    form.clientWidth = 400
    form.clientHeight = 200
    form.centerControl()
    form.sizeGrip = true

    var edit = form.createEdit(0, 0, 0, 150)
    edit.multiLine = true
    edit.align = o.translate("AL_CLIENT")

    var frame = form.createFrame(0, 0, 0, 50)
    frame.align = o.translate("AL_BOTTOM")

    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    var button = rightFrame.createButton(10, 10, 75, 25, "OK")

    for (var i = 0; i < control.count; i++)
        edit.add(control.item(i))

    button.onClick = function (sender) {

        control.clear()
        for (var i = 0; i < edit.count; i++)
            control.add(edit.item(i))

        sender.form.close()
    }

    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true
    form.showModal()
}

define("Designer.details.ListBox", Design_DetailsButtonClick_ListBox)
define("Designer.details.ComboBox", Design_DetailsButtonClick_ListBox)
