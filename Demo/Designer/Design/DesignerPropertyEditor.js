
function PropertyEditor(value) {

    var designControl
    var documentControl
    var propertyGrid = value
    var newItem
    var item
    var symbolicValues
    var current
    var editFrame

    this.type = "PropertyEditor"

    var propertyIsOptional = function(item){
        if (item.exType == o.translate("PROPERTY_EX_TYPE_MENU")) {
            return true
        } else
            if (item.exType == o.translate("PROPERTY_EX_TYPE_IMAGES")) {
                return true
            }
        return false
    }

    var queryProperty = function (target, propertyItem) {

        item = propertyItem

        newItem = propertyGrid.lookup(item.text)
        if (newItem == null)
            newItem = target.add(item.text)

        newItem.userData = item

        symbolicValues = item.symbolicValues

        if (propertyIsOptional(item)) {
            current = null
        } else {
            current = designControl[item.text]
        }
    }

    var createEditFrame = function () {
        editFrame = propertyGrid.createFrame(0, 0, 0, 0)
        editFrame.parentBackground = false
        editFrame.color = propertyGrid.valueColor
        return editFrame
    }

    var createEditButton = function () {
       var editButton = editFrame.createButton(0, 0, 25, 0, "...")
       editButton.align = o.translate("AL_RIGHT")
       return editButton
    }

    var setText = function (editControl, text) {
        editControl.maskEvents = true
        editControl.text = text
        editControl.maskEvents = false
    }

    var setItemIndex = function(editControl, itemIndex) {
        editControl.maskEvents = true
        editControl.itemIndex = itemIndex
        editControl.maskEvents = false
    }

    var createDialogForm = function (sender, clientWidth, clientHeight, text) {
        var form = sender.form.createDialogForm()
        form.clientWidth = clientWidth
        form.clientHeight = clientHeight
        form.centerControl()
        form.sizeGrip = true
        form.text = text
        return form
    }

    var reloadPropertyGrid = function () {
        propertyGrid.userData.buildPropertyGrid(designControl, true, documentControl)
    }

    var makeOnChange = function (func, reloadAll) {
        return function (sender) {
            var property = propertyGrid.lookup(sender)
            if (!property) return
            func(sender, property)
            propertyGrid.userData.onPropertyChanged(property, sender.text)

            if (reloadAll) {
                reloadPropertyGrid()
            }
        }
    }

    var createFieldCombination = function () {

        editFrame = newItem.control

        if (editFrame == null) {
            newFieldCombination()
        } 
        
        var edit = editFrame.edit

        setText(edit, getCombinationValue(current, item))
    }

    var getCombinationValue = function(current, item) {

        var symbolicValues = new Collection(item.symbolicValues)
        var str = ""

        symbolicValues.each(function (item) {
            if (current & o.translate(item)) {
                if (str.length > 0)
                    str += ", "
                str += item
            }
        })

        return str
    }

    var newFieldCombination = function () {
        editFrame = createEditFrame()
        
        var editButton = createEditButton()

        var edit = editFrame.createEdit(0, 0, 0, 0)
        edit.align = o.translate("AL_CLIENT")
        edit.readOnly = true
        edit.name = "edit"

        editButton.OnClick = function (sender) {
            var property = propertyGrid.lookup(sender)
            if (!property) return

            var designValue = designControl[property.text]

            var form = createDialogForm(sender, 400, 200, property.text)

            var targetEdit = sender.parent.edit

            var checkBoxFrame = form.createFrame()
            checkBoxFrame.align = o.translate("AL_CLIENT")
            checkBoxFrame.autoScroll = true

            var symbolicValues = new Collection(property.userData.symbolicValues)

            symbolicValues.each(function (symbolicValue, i) {
                var checkBox = checkBoxFrame.createCheckBox(10, 10 + i * 30, 100, 25, symbolicValue)
                checkBox.checked = designValue & o.translate(symbolicValue)
            })

            var frame = form.createFrame(0, 0, 0, 50)
            frame.Align = o.Translate("AL_BOTTOM")

            var rightFrame = frame.createFrame(0, 0, 200, 0)
            rightFrame.align = o.Translate("AL_RIGHT")

            var button = rightFrame.createButton(10, 10, 75, 25, "OK")

            button.OnClick = function (sender) {
                var value = 0

                for (var i = 0; i < checkBoxFrame.controls.Count; i++) {
                    var checkBox = checkBoxFrame.controls.item(i)
                    if (checkBox.checked)
                        value |= o.translate(checkBox.text)
                }

                designControl[property.text] = value
                targetEdit.text = getCombinationValue(value, property.UserData)

                sender.form.close()
            }
            button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
            button.onClick = closeFormHandler
            button.cancel = true

            form.showModal()
        }
    }

    var createFieldSymbolicValues = function () {
        
        var editControl = newItem.control
        
        if (editControl == null) {
            editControl = newFieldSymbolicValues()            
        }
        
        for (var j = 0; j < symbolicValues.Count; j++) {
            var value = symbolicValues.item(j)
            if (o.translate(value) == current) {
                setItemIndex(editControl, j)
                break
            }
        }

        editControl.maskEvents = false
    }

    var newFieldSymbolicValues = function () {
        var editControl = propertyGrid.createComboBox(0, 0, 0, 0, o.translate("CBS_DROPDOWNLIST"))
        editControl.maskEvents = true
        editControl.beginUpdate()

        for (var j = 0; j < symbolicValues.Count; j++) {
            var value = symbolicValues.item(j)
            editControl.Add(value)
        }

        editControl.endUpdate()

        editControl.onChange = makeOnChange(function (sender, property) {
            var value = o.translate(sender.text)
            designControl[property.text] = value
        })

        return editControl
    }

    var createFieldBSTR = function () {
        
        editFrame = newItem.control        
                
        if (editFrame == null) {
            newFieldBSTR()
        }
        
        var editControl = editFrame.edit
        
        setText(editControl, current)
    }

    var newFieldBSTR = function () {
        editFrame = createEditFrame()

        var editControl
        var options = item.options
        if (options) {
            editControl = editFrame.createComboBox()
            $(options).each(function (option) {
                editControl.add(option)
            })
        } else
        {
            editControl = editFrame.createEdit()
        }

        var editButton = createEditButton()

        editControl.align = o.translate("AL_CLIENT")
        editControl.name = "edit"

        editControl.onChange = makeOnChange(function (sender, property) {
            designControl[property.text] = sender.text
        })

        editButton.OnClick = function (sender) {
            var property = propertyGrid.lookup(sender)
            var form = createDialogForm(sender, 400, 200, property.text)

            var targetEdit = sender.parent.edit

            var edit = form.createEdit(0, 0, 0, 150)
            edit.multiLine = true
            edit.text = targetEdit.text
            edit.align = o.translate("AL_CLIENT")

            var frame = form.createFrame(0, 0, 0, 50)
            frame.align = o.Translate("AL_BOTTOM")

            var rightFrame = frame.createFrame(0, 0, 200, 0)
            rightFrame.Align = o.Translate("AL_RIGHT")

            var button = rightFrame.createButton(10, 10, 75, 25, "OK")

            button.OnClick = function (sender) {
                targetEdit.text = edit.text
                sender.form.close()
            }

            button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
            button.onClick = closeFormHandler
            button.cancel = true

            form.showModal()
        }
    }

    var createFieldI4 = function () {
        var editControl = newItem.control
        if (editControl == null) {
            editControl = propertyGrid.createEdit(0, 0, 0, 0)
            editControl.maskEvents = true
            editControl.dataType = o.translate("DT_INTEGER")

            editControl.onChange = makeOnChange(function (sender,property) {
                designControl[property.text] = sender.text
            })
        }
        setText(editControl, current)
        editControl.maskEvents = false
    }

    var createFieldUI4 = function () {
        var editControl = newItem.control
        if (editControl == null) {
            editControl = propertyGrid.createEdit(0, 0, 0, 0)
            editControl.maskEvents = true
            editControl.dataType = o.Translate("DT_INTEGER")

            editControl.onChange = makeOnChange(function (sender, property) {
                if (sender.text < 0)
                    sender.text = 0
                designControl[property.text] = sender.text
            })
        }
        setText(editControl, current)
        editControl.MaskEvents = false
    }

    var createFieldBOOL = function () {
        var editFrame = newItem.control
        var editControl
        if (editFrame == null) {
            editFrame = createEditFrame()
            editControl = editFrame.createCheckBox(2, 0, 20, 20)
            editControl.name = "editControl"

            editControl.onChange = makeOnChange(function (sender,property) {
                designControl[property.text] = sender.Checked
                sender.Checked = designControl[property.text]
            }, true)
        } else {
            editControl = editFrame.editControl
        }

        editControl.maskEvents = true
        editControl.checked = current
        editControl.maskEvents = false
    }

    var createFieldDATE = function() {
        var editControl = newItem.Control
        if (editControl == null) {
            editControl = propertyGrid.createDateTimePicker()

            editControl.onChange = makeOnChange(function (sender,property) {
                designControl[property.text].value = sender.value.value
            })
        }
        editControl.value.value = current.value
    }

    var createFieldColor = function () {
        editFrame = newItem.control
        
        if (editFrame == null) {
            newFieldColor()
        }
        
        var editControl = editFrame.editControl
        
        setItemIndex(editControl, editControl.Count - 1)

        for (var j = 0; j < symbolicValues.Count; j++) {
            var value = symbolicValues.item(j)
            if (o.translate(value) == current) {
                setItemIndex(editControl, j)
                break
            }
        }

        editControl.maskEvents = false
    }

    var newFieldColor = function () {
        editFrame = createEditFrame()

        var editControl = editFrame.createComboBox(0, 0, 0, 0, o.Translate("CBS_DROPDOWNLIST"))
        editControl.align = o.translate("AL_CLIENT")
        editControl.name = "editControl"
        editControl.maskEvents = true

        var editButton = createEditButton()

        editButton.OnClick = function (sender) {
            var property = propertyGrid.lookup(sender)
            if (!property) return

            var designValue = designControl[property.text]
            var editControl = sender.parent.editControl

            var colorDialog = sender.form.createColorDialog()
            colorDialog.color = designValue

            if (colorDialog.Execute()) {
                editControl.itemIndex = editControl.count - 1
                designControl[property.text] = colorDialog.color
                editControl.repaint()
            }
        }

        var customValueText = "Custom"

        editControl.beginUpdate()
        for (var j = 0; j < symbolicValues.Count; j++) {
            var value = symbolicValues.item(j)
            editControl.add(value)
        }
        editControl.add(customValueText)
        editControl.endUpdate()

        editControl.onChange = makeOnChange(function (sender, property) {
            if (sender.text == customValueText) {
            } else {
                var value = o.translate(sender.text)
                designControl[property.text] = value
            }
        })

        editControl.customDraw = true;

        editControl.onDrawItem = function (sender, listControlItem) {
            var text = sender.item(listControlItem.Index)
            if (text == customValueText) {
                var property = propertyGrid.lookup(sender)
                if (property) {
                    listControlItem.textBkColor = designControl[property.text]
                }
            } else
                if (listControlItem.index >= 0) {
                    listControlItem.textBkColor = o.Translate(text)
                }
            listControlItem.font.color = o.color.invert(listControlItem.textBkColor)
        }
    }

    var createFieldKey = function () {
        var editControl = newItem.control

        if (editControl == null) {
            editControl = propertyGrid.createHotKey()
            editControl.maskEvents = true

            editControl.onChange = makeOnChange(function (sender, property) {
                designControl[property.text] = sender.key
            })
        }
        
        editControl.key = current

        editControl.maskEvents = false
    }

    var createFieldMenu = function () {
        editFrame = newItem.control

        if (editFrame == null) {
            editFrame = createEditFrame()
            var editFrameTitle = editFrame.textOut(1, 5, "")
            editFrameTitle.name = "title"
            
            var clearButton = editButton = editFrame.createButton(0, 0, 25, 0, "X")
            clearButton.align = o.translate("AL_RIGHT")
            clearButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return
                designControl[property.text] = property
                reloadPropertyGrid()
            }
            clearButton.name = "clearButton"

            var editButton = createEditButton()
            editButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return

                Designer.details.Action(null, designControl, property.text)

                reloadPropertyGrid()
            }

            editButton.tabOrder = 0
        }

        var hasMenu = designControl.propertyHasValue(item.text)
        editFrame.title.text = hasMenu ? "(menu)" : "(null)"
        editFrame.clearButton.visible = hasMenu
    }

    var createFieldFont = function () {
        editFrame = newItem.control

        if (editFrame == null) {
            editFrame = createEditFrame()
            var editButton = createEditButton()

            editButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return

                var fontDialog = sender.form.createFontDialog()
                fontDialog.font = designControl[property.text]
                if (fontDialog.execute()) {
                    designControl[property.text] = fontDialog.font
                }
            }
        }
    }

    var createFieldImages = function () {
        editFrame = newItem.control

        if (editFrame == null) {
            editFrame = createEditFrame()

            var editFrameTitle = editFrame.textOut(1, 5, "")
            editFrameTitle.name = "title"

            var clearButton = editButton = editFrame.createButton(0, 0, 25, 0, "X")
            clearButton.align = o.translate("AL_RIGHT")
            clearButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return
                designControl[property.text] = property
                reloadPropertyGrid()
            }
            clearButton.name = "clearButton"

            var editButton = createEditButton()

            editButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return

                var document = documentControl.userData
                if (!document.fileName) {
                    if (!document.save()) {
                        return
                    }
                }
                var value = designControl[property.text]
                var references = documentControl.designFrame.design.references

                var form = sender.form.createDialogForm()
                form.clientWidth = 690
                form.clientHeight = 400
                form.centerControl()
                form.sizeGrip = true

                var frame = form.createFrame(0, 0, 0, 0)
                frame.align = o.translate("AL_CLIENT")
                frame.name = "frame"
                frame.autoSplit = true

                var solutionBrowser = new SolutionBrowser(frame, documentControl)

                var rightFrame = frame.createFrame()
                rightFrame.align = o.translate("AL_CLIENT")

                var list = rightFrame.createListView(0, 0, 0, 0, o.translate("LVS_REPORT"))
                list.align = o.translate("AL_CLIENT")
                list.multiSelect = false
                list.columns.add("Image", 200)

                $(value.references).each(function (item) {
                    var itemReference = references.lookup(item)
                    if (itemReference) {
                        var listItem = list.add(itemReference.text)
                        listItem.userData = {
                            reference: itemReference
                        }
                    } else {
                        list.add("Unknown: " + item)
                    }
                })

                var listFrame = rightFrame.createFrame(0, 0, 0, 50)
                listFrame.align = o.translate("AL_BOTTOM")

                var listAddButton = listFrame.createButton(10, 10, 75, 25, "Add")
               
                var addEventHandler = function () {
                    var item = solutionBrowser.getSelectedItem()
                    if (!item) {
                        return
                    }

                    var itemReference = item.reference
                    if (itemReference.referenceType == o.translate("REFERENCE_TYPE_IMAGE")) {
                        var listItem = list.add(itemReference.text)
                        listItem.userData = {
                            reference: itemReference
                        }
                    }
                }

                listAddButton.onClick = addEventHandler
                solutionBrowser.getTreeView().onDblClick = addEventHandler

                var listRemoveButton = listFrame.createButton(100, 10, 75, 25, "Remove")
                listRemoveButton.onClick = function () {
                    var itemIndex = list.itemIndex
                    if (itemIndex >= 0) {
                        list.remove(itemIndex)
                    }
                }

                frame = form.createFrame(0, 0, 0, 50)
                frame.Align = o.translate("AL_BOTTOM")
                var rightFrame = frame.createFrame(0, 0, 200, 0)
                rightFrame.align = o.translate("AL_RIGHT")
                button = rightFrame.createButton(10, 10, 75, 25, "OK")

                button.onClick = function (sender) {

                    var valueReferences = value.references
                    valueReferences.clear()

                    var filePaths = []

                    enumReferences(references, null, document.fileName, function (item, treeItem, filePath) {
                        filePaths[item.id] = filePath
                    })

                    value.clear()

                    $(list).each(function (item) {
                        var reference = item.userData.reference
                        valueReferences.add(reference.id)

                        var fileName = filePaths[reference.id]
                        console.log("Load image: " + fileName)
                        value.add(fileName)
                    })

                    sender.form.close()
                }
                button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
                button.onClick = closeFormHandler
                button.cancel = true

                form.showModal()

                reloadPropertyGrid()
            }

            editButton.tabOrder = 0
        }

        var propertyHasValue = designControl.propertyHasValue(item.text)
        editFrame.title.text = propertyHasValue ? "(images)" : "(null)"
        editFrame.clearButton.visible = propertyHasValue
    }

    this.createField = function () {
        if (item.exType == o.translate("PROPERTY_EX_TYPE_COLOR")) {
            createFieldColor()
        } else
        if (item.exType == o.translate("PROPERTY_EX_TYPE_KEY")) {
            createFieldKey()
        } else
        if (item.exType == o.translate("PROPERTY_EX_TYPE_MENU")) {
            createFieldMenu()
        } else
        if (item.exType == o.translate("PROPERTY_EX_TYPE_FONT")) {
            createFieldFont()
        } else
        if (item.exType == o.translate("PROPERTY_EX_TYPE_IMAGES")) {
            createFieldImages()
        } else
        if (item.Combination) {
            createFieldCombination()
        } else
        if (symbolicValues) {
            createFieldSymbolicValues()
        } else
        if ((item.type == o.Translate("VT_BSTR")) || (item.type == o.Translate("VT_VARIANT"))) {
            createFieldBSTR()
        } else
        if (item.type == o.Translate("VT_I4")) {
            createFieldI4()
        } else
        if ((item.type == o.Translate("VT_UI4")) || (item.type == o.Translate("VT_UI2"))) {
            createFieldUI4()
        } else
        if (item.type == o.Translate("VT_BOOL")) {
            createFieldBOOL()
        } else
        if (item.type == o.Translate("VT_DATE")) {
            createFieldDATE()
        }
    }

    this.loadDesignProperties = function (target, source) {
        for (var i = 0; i < source.count; i++) {
            var item = source.item(i)
            queryProperty(target, item)

            if (item.Count == 0) {
                try{
                    this.createField()
                }
                catch (e) {
                    f.MessageBox(e.message + " / " + item.text)
                }

            } else {
                this.loadDesignProperties(newItem, item)
            }
        }
    }

    this.initPropertyGrid = function () {
        this.loadDesignProperties(propertyGrid.items, designControl.design.properties)
    }

    this.buildPropertyGrid = function (designControlValue, reuse, documentControlValue) {

        //console.log("Build property grid")

        designControl = designControlValue
        documentControl = documentControlValue

        propertyGrid.beginUpdate()
        if (!reuse) {
            propertyGrid.items.clear()
        }

        this.initPropertyGrid()

        propertyGrid.endUpdate()
    }

    this.copyProperties = function (target, source, properties) {
        properties = properties || target.design.properties

        for (var i = 0; i < properties.Count; i++) {
            var item = properties.item(i)

            if (item.Count == 0) {

                var isOptional = propertyIsOptional(item)
                var text = item.text
                var value

                if (isOptional) {
                    if (source.propertyHasValue(text)) {
                        value = source[text]
                    } else {
                        value = item
                    }
                } else {
                    value = source[text]
                }

                target[text] = value

                //console.log("Set property: "+ text)
            } else {
                this.copyProperties(target, source, item)
            }
        }
    }

    this.onPropertyChanged = function () { }
}

this.PropertyEditor = PropertyEditor
