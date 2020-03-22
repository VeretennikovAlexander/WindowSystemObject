
this.documents = []

this.getDocumentControlByFileName = function(fileName) {
    var result = null
    documents.each(function (item) {
        var document = item.userData
        if (document)
            if (document.fileName) {
                if (document.fileName.equalsFileName(fileName)) {
                    result = item
                }
            }
    })
    return result
}

this.getActiveDocumentControlFromControl = function(activeControl) {
    if (!activeControl)
        return null

    /*
    Page or Tab Dock.
    */
    if (activeControl.docking.autoCreated) {
        activeControl = activeControl.controls.item(0)
    }

    while (activeControl) {
        var userData = activeControl.userData
        if (userData)
            if (userData.isDocument) {
                return activeControl
            }
        activeControl = activeControl.parent
    }

    return null
}