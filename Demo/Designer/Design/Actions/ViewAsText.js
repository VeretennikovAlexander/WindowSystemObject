
this.addDocumentViewAsTextMenuItem = function (menu) {

    var viewTextMenuItem = menu.Add("View As Text", "F3")
    viewTextMenuItem.userData = {
        text: viewTextMenuItem.Text
    }
    viewTextMenuItem.onUpdate = actionUpdateActiveFormDocumentRequired
    viewTextMenuItem.onExecute = documentViewAsText

    function documentViewAsText(sender) {

        var activeDocument = getActiveDocumentControl()
        var text = activeDocument.userData.designFrame.design.save()

        var form = f.CreateDialogForm(0, 0, 0, 0)
        form.clientWidth = 500
        form.clientHeight = 600
        form.sizeGrip = true

        var edit = form.createEdit(0, 0, 0, 0, o.translate("ES_MULTILINE | ES_READONLY"))
        edit.scrollBars = o.translate("SS_BOTH")
        edit.align = o.translate("AL_CLIENT")
        edit.text = text
        edit.font.name = "Courier New"

        var frame = form.createFrame(0, 0, 0, 50)
        frame.align = o.translate("AL_BOTTOM")
        frame.borderWidth = 10

        var button = frame.createButton(10, 10, 70, 25, "OK")
        button.align = o.translate("AL_RIGHT")
        button.onClick = closeFormHandler

        form.centerControl()
        form.onKeyDown = formKeyDownClose
        form.showModal()
    }

}
