
this.enumReferences = function (references, start, fileName, func) {

    var currentFilePath = fileName.extractFilePath()

    addReferences(references, start, currentFilePath)

    function addReferences(references, treeItem, currentFilePath) {

        var newCurrentFilePath

        $(references).each(function (item) {
            
            newCurrentFilePath = currentFilePath
            if (item.text.isRelativePath()) {
                newCurrentFilePath += item.text
            } else {
                newCurrentFilePath = item.text
            }

            var newTreeItem = func(item, treeItem, newCurrentFilePath)
                        
            if (item.referenceType != o.translate("REFERENCE_TYPE_FOLDER")) {
                newCurrentFilePath = newCurrentFilePath.extractFilePath()
            } else {
                newCurrentFilePath += "\\"
            }

            addReferences(item, newTreeItem, newCurrentFilePath)
        })
    }

}