
function SolutionBrowser(parent, documentControl) {

    var treeView = parent.createTreeView(0, 0, 200, 200)
    treeView.align = o.translate("AL_LEFT")
    treeView.images = wsoExt.systemImageListSmall

    var document = documentControl.userData

    enumReferences(documentControl.designFrame.design.references, treeView.items, document.fileName, function (item, treeItem, itemFilePath) {
        var newTreeItem = treeItem.add(item.text.extractFileName())

        if (item.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
            newTreeItem.imageIndex = wsoExt.getFileSysIconIndexSmall("Folder1", o.translate("FILE_ATTRIBUTE_DIRECTORY"))
        } else {
            newTreeItem.imageIndex = wsoExt.getFileSysIconIndexSmall(newTreeItem.text, 0)
        }
        
        newTreeItem.userData = {
            documentControl: documentControl,
            reference: item,
            filePath: itemFilePath
        }

        if (item.main) {
            newTreeItem.bold = true
        }

        return newTreeItem
    })


    this.getSelectedItem = function () {
        var item = treeView.selectedItem
        if (!item)
            return null
        return item.userData
    }

    this.getTreeView = function () {
        return treeView
    }
}

this.SolutionBrowser = SolutionBrowser


