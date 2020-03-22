
this.checkNewReference = function (form, references, localName) {

    var invalidCharIndex = localName.search(/[\\\/*:?"<>|]/)
    if (invalidCharIndex > -1) {
        form.messageBox("Invalid character: " + localName.substr(invalidCharIndex, 1),
                "", o.translate("MB_OK | MB_ICONERROR"))
        return false
    }

    if (references.find(localName)) {
        form.MessageBox("File or folder already exists", "", o.translate("MB_OK | MB_ICONERROR"))
        return false
    }

    if (localName.length == 0) {
        return false
    }

    return true
}

function SolutionTreeView(solutionPanel) {

    var me = this

    var activeDocumentControl = null
    var rootDocumentControl = null

    var solutionTreeView = solutionPanel.createTreeView(0, 0, 0, 0)
    solutionTreeView.align = o.Translate("AL_CLIENT")
    solutionTreeView.themeApplicationName = "Explorer"
    solutionTreeView.hideSelection = false

    solutionTreeView.images = wsoExt.systemImageListSmall
    
    var solutionTreeViewMenu = solutionTreeView.popupMenu

    function solutionTreeMenuItemUpdate(sender) {
        var selectedItem = solutionTreeView.selectedItem
        var enabled = selectedItem != null
        
        if (enabled) {
            var documentControl = selectedItem.userData.documentControl
            var references = selectedItem.userData.references

            if (references == null) {
                enabled = false
            } else
            if (references.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
                //
            } else
                if (selectedItem.parent != solutionTreeView.items) {
                    enabled = false
                } else {
                    if ((documentControl.userData instanceof FormDocument) == false) {
                        enabled = false
                    }
                }           
        }

        sender.enabled = enabled
        sender.visible = enabled
    }

    var solutionTreeNewItem = solutionTreeViewMenu.add("New Item")
    solutionTreeNewItem.onUpdate = solutionTreeMenuItemUpdate

    var solutionTreeNewFolderItem = solutionTreeViewMenu.add("New Folder")
    solutionTreeNewFolderItem.onUpdate = solutionTreeMenuItemUpdate

    function getSavedSelectedDocument() {
        var selectedItem = solutionTreeView.selectedItem
        var documentControl = selectedItem.userData.documentControl
        var document = documentControl.userData

        if (!document.checkModified(documentControl,true)) {
            return null
        }

        documentControl.text = document.fileName.extractFileName()

        return documentControl
    }

    solutionTreeNewItem.onExecute = function () {
        var documentControl = getSavedSelectedDocument()
        if (!documentControl) {
            return
        }

        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references

        var document = documentControl.userData

        var path = getFullPath(selectedItem, "")

        var rootDocument = rootDocumentControl.userData
        var rootDocumentFileName = document.fileName
        var rootDocumentRelativeFileName = fileManager.getRelativeFileName(path, rootDocumentFileName);

        var newScriptDialog = new NewScriptDialog(document, references, path, rootDocumentRelativeFileName)
        var newFileName = newScriptDialog.execute()

        if (newFileName.length > 0) {
            var reference = references.add(newFileName.extractFileName())
            reference.referenceType = o.translate("REFERENCE_TYPE_EXECUTABLE")

            me.update(activeDocumentControl, true)

            openReference(reference,newFileName)
        }
    }

    function openReference(reference, newFileName) {
        if (reference.referenceType == o.translate("REFERENCE_TYPE_EXECUTABLE")) {
            openTextDocument(newFileName)
        } else {
            openImageDocument(newFileName)
        }
    }

    function openTextDocument(newFileName) {
        var newDocument = new TextDocument()
        newDocument.load(newFileName)

        var doc = createTextDocument(newFileName.extractFileName(), newDocument)
        doc.edit.text = newDocument.text
        doc.edit.setFocus()

        updateSolution(true, doc)
    }

    function openImageDocument(newFileName) {
        var newDocument = new ImageDocument()
        newDocument.fileName = newFileName
      
        var doc = createImageDocument(newFileName.extractFileName(), newDocument)

        updateSolution(true, doc)
    }

    function getFullPath(selectedItem, text) {
        var references = selectedItem.userData.references
        var value = me.getFullFileNameByReferences(references)
        if (references.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
            value += "\\"
        } else {
            value = value.extractFilePath()
        }
        return value + text
    }

    function getFullFileName(selectedItem) {
        return me.getFullFileNameByReferences(selectedItem.userData.references)
    }
       
    this.getFullFileNameByReferences = function (item) {
        var document = rootDocumentControl.userData

        if (!item.parent) {
            return document.fileName
        }

        if (!item.text.isRelativePath()) {
            return item.text
        }

        var path = ""
        while (true) {
            if (!item.parent) {
                path = document.fileName.extractFilePath() + path
                break
            } else {
                path = item.text + "\\" + path
            }
            item = item.parent
        }
        return path.slice(0, path.length - 1)
    }


    solutionTreeNewFolderItem.onExecute = function () {
        var documentControl = getSavedSelectedDocument()
        if (!documentControl) {
            return
        }

        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references

        var document = documentControl.userData

        var form = f.createDialogForm()
        form.clientWidth = 300
        form.clientHeight = 90

        form.margin = 10
        var edit = form.createEdit()
        edit.align = o.translate("AL_CLIENT")
        var bottomFrame = form.createFrame(0, 0, 0, 40)
        bottomFrame.align = o.translate("AL_BOTTOM")
        var buttonsFrame = bottomFrame.createFrame(0, 0, 200, 0)
        buttonsFrame.align = o.translate("AL_RIGHT")
        buttonsFrame.margin = 10

        var button = buttonsFrame.createButton(0, 0, 75, 0, "OK")
        button.align = o.translate("AL_LEFT")
        button['default'] = true
        button.onClick = function () {
            var localName = edit.text

            if (!checkNewReference(form, references, localName)) {
                return
            }
            
            var path = getFullPath(selectedItem, localName)

            var fso = new ActiveXObject("Scripting.FileSystemObject")
            if (fso.folderExists(path) == false) {
                fso.createFolder(path)

                console.log("New folder has been created: " + path)
            } else {
                console.log("Folder already exists: " + path)
            }

            references.add(localName).referenceType = o.translate("REFERENCE_TYPE_FOLDER")
            me.update(activeDocumentControl, true)
            form.close()            
        }

        button = buttonsFrame.createButton(0, 0, 75, 0, "Cancel")
        button.align = o.translate("AL_LEFT")
        button.onClick = closeFormHandler
        button.cancel = true

        form.centerControl()
        form.sizeGrip = true
        form.showModal()
    }

    var solutionTreeExistingItem = solutionTreeViewMenu.add("Add Existing Item")
    solutionTreeExistingItem.onUpdate = solutionTreeMenuItemUpdate

    solutionTreeExistingItem.onExecute = function () {
        var documentControl = getSavedSelectedDocument()
        if (!documentControl) {
            return
        }

        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references

        var openDialog = f.createOpenDialog()
        var filter = getTemplatesFilter()
        filter += "|" + getIconsFilter()
        filter += "|" + getImagesFilter()
        openDialog.filter = filter
        if (openDialog.execute()) {
            var newFileName = openDialog.fileName

            if (newFileName.length > 0) {

                var fullPath = me.getFullFileNameByReferences(references)

                var reference = references.add(newFileName, fullPath)

                newFileName = me.getFullFileNameByReferences(reference)

                if (newFileName.fileNameInFilter(iconExtensions)) {
                    reference.referenceType = o.translate("REFERENCE_TYPE_ICON")
                } else
                    if (newFileName.fileNameInFilter(imageExtensions)) {
                        reference.referenceType = o.translate("REFERENCE_TYPE_IMAGE")
                    } else {
                        reference.referenceType = o.translate("REFERENCE_TYPE_EXECUTABLE")
                    }

                me.update(activeDocumentControl, true)

                openReference(reference,newFileName)
            }
        }
    }

    var propertiesMenuItem = solutionTreeViewMenu.add("Properties")
    propertiesMenuItem.onUpdate = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        var enabled = selectedItem != null

        if (enabled) {
            var references = selectedItem.userData.references
            enabled = references != null
        }

        sender.enabled = enabled
        sender.visible = enabled
    }

    propertiesMenuItem.onExecute = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references

        var form = sender.form.createDialogForm()

        form.clientWidth = 300
        form.clientHeight = 120

        form.margin = 10
        form.minHeight = form.height

        var frame = form.createFrame(0, 0, 0, 40)
        frame.align = o.translate("AL_TOP")
        frame.margin = 10
        frame.textOut(10, 10, "Value: ").align = o.translate("AL_LEFT")
        var edit = frame.createEdit()
        edit.align = o.translate("AL_CLIENT")
        edit.parentColor = true
        edit.readOnly = true
        edit.border = false
        edit.text = references.text

        var bottomFrame = form.createFrame(0, 0, 0, 40)
        bottomFrame.align = o.translate("AL_BOTTOM")
        var buttonsFrame = bottomFrame.createFrame(0, 0, 100, 0)
        buttonsFrame.align = o.translate("AL_RIGHT")
        buttonsFrame.margin = 10

        var button = buttonsFrame.createButton(0, 0, 75, 0, "OK")
        button.align = o.translate("AL_LEFT")
        button['default'] = true
        button.cancel = true
        button.onClick = function (sender) {
            sender.form.close()
        }

        form.sizeGrip = true
        form.centerControl()
        form.showModal()
    }

    solutionTreeViewMenu.newLine()

    var solutionTreeRemoveMainMenuItem = solutionTreeViewMenu.add("Remove")

    solutionTreeRemoveMainMenuItem.onExecute = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        if (!selectedItem) {
            return
        }
        var references = selectedItem.userData.references

        var fullPath = me.getFullFileNameByReferences(references)
        var deleteFile = false

        var form = f.createDialogForm()
        form.clientWidth = 300
        form.clientHeight = 150
        var image = form.drawImage(10, 10, 0, 0, o.loadSysIcon(o.translate("OIC_QUES")))

        form.textOut(image.right + 10, 10, "Remove " + references.text + "?")
        form.textOut(image.right + 10, 30, fullPath)

        var deleteFileCheckBox = form.createCheckBox(10, 60, 100, 25, "Delete file")
        deleteFileCheckBox.visible = references.count == 0

        var bottomFrame = form.createFrame(0, 0, 0, 40)
        bottomFrame.align = o.translate("AL_BOTTOM")
        var buttonsFrame = bottomFrame.createFrame(0, 0, 200, 0)
        buttonsFrame.align = o.translate("AL_RIGHT")
        buttonsFrame.margin = 5

        var button = buttonsFrame.createButton(0, 0, 75, 0, "OK")
        button.align = o.translate("AL_LEFT")
        button['default'] = true
        button.onClick = function () {
            form.userData = 1
            deleteFile = deleteFileCheckBox.checked
            form.close()
        }

        button = buttonsFrame.createButton(0, 0, 75, 0, "Cancel")
        button.align = o.translate("AL_LEFT")
        button.onClick = closeFormHandler
        button.cancel = true

        form.centerControl()
        form.sizeGrip = true
        form.userData = 0
        form.showModal()

        if (form.userData == 1) {
            references.parent.remove(references)
            if (deleteFile) {
                var fso = new ActiveXObject("Scripting.FileSystemObject")
                console.log("Deleting file: " + fullPath, true)
                fso.deleteFile(fullPath)
            }
            me.update(activeDocumentControl, true)
        }
    }

    solutionTreeRemoveMainMenuItem.onUpdate = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        var enabled = false
        if (selectedItem) {
            var references = selectedItem.userData.references

            enabled = references.parent != null
        }

        sender.enabled = enabled
        sender.visible = enabled
    }

    var solutionTreeSetMainMenuItem = solutionTreeViewMenu.add("Set as Main Script")
    solutionTreeSetMainMenuItem.onExecute = function () {
        var document = rootDocumentControl.userData
        var rootReferences = document.designFrame.design.references
        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references
        var value = !references.main

        $(rootReferences).visit(function (item) {
            item.main = false
        })

        references.main = value

        me.update(activeDocumentControl, true)
    }

    solutionTreeSetMainMenuItem.onUpdate = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        var enabled = selectedItem != null

        if (enabled) {
            var references = selectedItem.userData.references

            if (references == null) {
                enabled = false
            } else
                if (references.referenceType != o.translate("REFERENCE_TYPE_EXECUTABLE")) {
                    enabled = false
                }
        }

        if (!rootDocumentControl) {
            enabled = false
        } else
        if ((rootDocumentControl.userData instanceof FormDocument) == false) {
            enabled = false
        }

        sender.enabled = enabled
        sender.visible = enabled
    }

    solutionTreeView.onDblClick = function () {
        var selectedItem = solutionTreeView.selectedItem
        if (selectedItem == null) {
            return
        }
        var documentControl = selectedItem.userData.documentControl
        var references = selectedItem.userData.references
        if (references == null) {
            return
        }
        if (references.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
            return
        }
        if (references.text == "") {
            return
        }

        var document = documentControl.userData
        var path = getFullFileName(selectedItem)
        var documentControl = getDocumentControlByFileName(path)
        if (documentControl) {
            ensureVisible(documentControl)

            setSelectedControl(documentControl.userData.primaryControl)
            selectedControl.setFocus()
            return
        }
        openReference(references,path)
    }
        
    function getParentDocumentControlByFileName(fileName) {
        var result = null
        var found = false

        documents.each(function (item) {
            var document = item.userData
            if (document)
                if (document.fileName)
                    if (document.designFrame) {
                        path = document.fileName.extractFilePath()

                        checkPath(document.designFrame.design.references, path)

                        function checkPath(references, path) {
                            $(references).each(function (reference) {
                                var referenceFileName = path + reference.text
                                if (reference.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
                                    checkPath(reference, referenceFileName + "\\")
                                } else {
                                    if (!reference.text.isRelativePath()) {
                                        referenceFileName = reference.text
                                    }

                                    if (referenceFileName.equalsFileNameEx(fileName)) {
                                        result = item
                                        found = true
                                    }
                                }
                            })
                        }


                    }

            return !found
        })

        return result
    }

    this.update = function (newActiveDocumentControl, force) {

        if (!force)
            if (activeDocumentControl == newActiveDocumentControl) {
                return
            }

        if (newActiveDocumentControl)
            if (!newActiveDocumentControl.userData) {
                newActiveDocumentControl = null
            }

        activeDocumentControl = newActiveDocumentControl
        rootDocumentControl = activeDocumentControl

        if (rootDocumentControl) {
            var fileName

            while (true) {
                fileName = rootDocumentControl.userData.fileName

                var parentActiveDocumentControl = getParentDocumentControlByFileName(fileName)
                if (parentActiveDocumentControl) {
                    rootDocumentControl = parentActiveDocumentControl
                } else {
                    break
                }
            }
        }

        solutionTreeView.beginUpdate()
        try {
            var root = solutionTreeView.items
            root.clear()

            if (rootDocumentControl) {

                var treeItem = root.add(rootDocumentControl.text)
                treeItem.imageIndex = wsoExt.getFileSysIconIndexSmall(treeItem.text, 0)

                treeItem.userData = {
                    documentControl: rootDocumentControl
                }

                var document = rootDocumentControl.userData

                if (document.designFrame) {

                    treeItem.userData.references = document.designFrame.design.references

                    enumReferences(treeItem.userData.references, treeItem, document.fileName, function (item, treeItem, itemFilePath) {
                        var newTreeItem = treeItem.add(item.text.extractFileName())

                        if (item.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
                            newTreeItem.imageIndex = wsoExt.getFileSysIconIndexSmall("Folder1", o.translate("FILE_ATTRIBUTE_DIRECTORY"))
                        } else {
                            newTreeItem.imageIndex = wsoExt.getFileSysIconIndexSmall(newTreeItem.text, 0)
                        }

                        newTreeItem.userData = {
                            documentControl: rootDocumentControl,
                            references: item
                        }

                        if (tracing) {
                            var str1 = me.getFullFileNameByReferences(item)
                            var str2 = itemFilePath
                            console.log(str1)
                            console.log(str2)
                            if (str1 != str2) {
                                WScript.echo("Current path error")
                            }
                        }

                        if (activeDocumentControl.userData.fileName.equalsFileNameEx(itemFilePath)) {
                            newTreeItem.selected = true
                        }
                        
                        if (item.main) {
                            newTreeItem.bold = true
                        }

                        return newTreeItem
                    })

                }
            }

            root.expand(true)
        }
        finally {
            solutionTreeView.endUpdate()
        }
    }
}

this.SolutionTreeView = SolutionTreeView