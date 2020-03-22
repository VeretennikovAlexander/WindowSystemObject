
this.getTemplatesFolderPath = function () {
    return startupDir() + "Templates\\"
}

this.getTemplatesFilter = function () {

    var templates = []

    var path = getTemplatesFolderPath()

    list(path, "")

    function list(path, templateName) {
        var folder = fso.getFolder(path)
        var fc = new Enumerator(folder.subFolders)

        for (; !fc.atEnd(); fc.moveNext()) {
            var item = fc.item()

            if (fso.folderExists(item)) {
                list(item + "\\", item.name)
            }
        }

        fc = new Enumerator(folder.files)

        for (; !fc.atEnd(); fc.moveNext()) {
            var item = fc.item()
            var name = item.name
            var ext = "*" + name.extractFileExt()
            var filter = templateName + " (" + ext + ")" + " | " + ext
         
            if (!templates[filter]) {
                templates[filter] = 1
                templates.push(filter)
            }
        }
    }

    var result = templates.join("|")   
    return result
}

function NewScriptDialog(parentDocument, references, path, formFileName) {
    var form = f.createDialogForm()
    form.clientWidth = 400
    form.clientHeight = 500

    var result = ""

    var tree = form.createTreeView()
    tree.align = o.translate("AL_CLIENT")
    tree.themeApplicationName = "Explorer"
        
    var bottom = form.createFrame(0, 0, 0, 40)
    bottom.align = o.translate("AL_BOTTOM")

    var namePanel = form.createFrame(0, 0, 0, 40)
    namePanel.align = o.translate("AL_BOTTOM")

    namePanel.margin = 10

    var text = namePanel.textOut(10, 10, "Name: ")
    text.align = o.translate("AL_LEFT")

    var nameEdit = namePanel.createEdit(100, 10, 100, 25)
    nameEdit.text = "Script1"
    nameEdit.align = o.translate("AL_CLIENT")

    var buttons = bottom.createFrame(0, 0, 200, 0)
    buttons.align = o.translate("AL_RIGHT")

    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var folderPath = getTemplatesFolderPath()
    
    list(tree.items, folderPath)

    function list(node, path) {   
        var folder = fso.getFolder(path)
        var fc = new Enumerator(folder.subFolders)
        
        for (; !fc.atEnd(); fc.moveNext()) {
            var item = fc.item()
            var newNode = node.add(item.name)
            
            if (fso.folderExists(item)) {

                list(newNode, item + "\\")
            }
        }

        fc = new Enumerator(folder.files)

        for (; !fc.atEnd(); fc.moveNext()) {
            var item = fc.item()
            var newNode = node.add(item.name)
            newNode.userData = item + ""
        }
    }

    tree.items.expand(true)

    var button = buttons.createButton(5, 5, 75, 25, "OK")
    button['default'] = true

    button.onClick = onClick
    tree.onDblClick = onClick

    function onClick(sender) {
        var node = tree.selectedItem
        var localName = nameEdit.text

        if (!checkNewReference(form, references, localName)) {
            return
        }
        
        if (node.userData) {
            var templateFileName = node.userData
            var text = fso.openTextFile(templateFileName).readAll()

            text = processTemplateText(text, formFileName)

            var fileName = path
                        
            var targetExt = templateFileName.extractFileExt()
            if (targetExt != localName.extractFileExt()) {
                localName += targetExt
            }

            fileName += localName

            if (fso.fileExists(fileName)) {
                var dialogResult = form.messageBox("File already exists:\n" + fileName + ".\n" + "Overwrite?", "", o.translate("MB_OKCANCEL | MB_ICONQUESTION"))
                if (dialogResult != o.translate("IDOK")) {
                    return
                }
            }

            var file = fso.createTextFile(fileName, true, false)
            file.writeLine(text)
            file.close()

            console.log("New script has been created: " + fileName)

            result = fileName

            sender.form.close()
        }
    }

    button = buttons.createButton(90, 5, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    form.sizeGrip = true
    form.centerControl()

    this.execute = function () {
        
        result = ""

        form.showModal()

        return result
    }

    function processTemplateText(text, formFileName) {
        var context = { formFileName : formFileName }
        
        var start = 0
        var leftStr
        var rightStr
        var str
        var count
        var l
        var r
        var b
        var startPattern = "$("

        while (true) {
            b = text.indexOf(startPattern, start)
            count = 1
            if (b < 0) {
                break
            }
            l = b + startPattern.length
            r = l + 1

            while (true) {
                if (r >= text.length) {
                    return text
                }

                var char = text.charAt(r)
                if (char == '(') {
                    count++
                } else 
                if (char == ')')
                {
                    count--;
                    if (count == 0) {
                        str = text.slice(l, r)
                        str = processValue(str, context)
                        leftStr = text.slice(0, b)
                        rightStr = text.slice(r + 1)
                        text = leftStr + str
                        start = text.length
                        text += rightStr
                        break
                    }
                }

                r++
            }
        }

        return text

        function processValue(value, context) {
            return eval(value)
        }
    }
}

this.NewScriptDialog = NewScriptDialog