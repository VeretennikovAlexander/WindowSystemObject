
function ToolBox(value , str) {

    var form = value
    var name = str
    var panel
    var toolBar
    var toolBarPanel
    var toolBars = []
    var top = 0
    var buttons
    var innerPanel
     
    this.createPanel = function () {
        panel = form.createFrame(10, 10, 150, 100)

        initDockingProperties(panel)

        panel.autoScroll = true

        panel.text = name
        panel.align = o.translate("AL_RIGHT")
        panel.docking.alwaysDockPage = true
        panel.docking.dropTarget = true
        panel.docking.uniqueId = name

        innerPanel = panel.createFrame(0, 0, 150, 100)

        panel.onResize = function (sender) {
            innerPanel.width = sender.clientWidth - 1
            toolBars.each(function (item) {
                item.toolBar.minButtonWidth = innerPanel.width
            })
        }    

        return panel
    }

    this.createToolBar = function (title) {
        toolBarPanel = innerPanel.createFrame(0, top, panel.width, 25)
        toolBarPanel.align = o.translate("AL_TOP")
        var edit = toolBarPanel.createEdit()
        edit.text = title
        edit.parentColor = true
        edit.border = 0
        edit.align = o.translate("AL_TOP")
        edit.readOnly = true
        edit.color = 0x00FFF0E0
        edit.cursor = o.translate("IDC_ARROW")
        toolBar = toolBarPanel.createToolBar(0, edit.height)
        toolBar.Align = o.Translate("AL_TOP")
        toolBar.vertical = true
        toolBar.showText = true
        toolBar.buttonWidth = 130
        toolBar.minButtonWidth = 130
        toolBar.buttonHeight = 35
        toolBar.list = true
        toolBar.flat = true
        toolBar.autoSizeButtons = false
        toolBar.name = "toolBar"
        //toolBar.ButtonSpacingY = 3
        buttons = toolBar.buttons
        buttons.images.load(startupDir() + "Design/Resources/Controls16.bmp")

        var item = {
            toolBarPanel: toolBarPanel,
            toolBar: toolBar
        }
        toolBars.push(item)
        return toolBar
    }

    this.completeToolBar = function () {
        toolBarPanel.clientHeight = toolBar.top + toolBar.height
        top += toolBarPanel.height
        toolBarPanel = null
        toolBar = null
        innerPanel.clientHeight = top
    }

    var getActiveButton = function(sender) {
        var buttons = sender.buttons
        for (var i = 0; i < buttons.count; i++) {
            var button = buttons[i];
            if (button.checked) {
                return button
            }
        }
        return null
    }

    var buttonsAllUp = function (sender, activeButton) {
        if (!sender) {
            toolBars.each(function (item) {
                buttonsAllUp(item.toolBar, activeButton)
            })
            return
        }
        var buttons = sender.buttons
        for (var i = 0; i < buttons.Count; i++) {
            var button = buttons[i];
            if (button != activeButton)
                if (button.checked) {
                    button.checked = false
                }
        }
    }

    this.buttonsAllUp = buttonsAllUp

    var add = function (name, imageIndex) {
        var button = buttons.add(name)
        button.imageIndex = imageIndex
        button.radioCheck = true
        button.allowAllUp = true
        button.onExecute = function (sender) {
            buttonsAllUp(null, sender)
            var activeButton = getActiveButton(sender.control)
            if (activeButton != null) {
                form.design.newControlType = activeButton.text
                sender.control.setFocus()
            } else {
                form.design.newControlType = ""
            }
        }
    }

    this.createToolBars = function () {
    
        this.createToolBar("Controls")

        add("Button", 0)
        add("CheckBox", 29)
        add("ComboBox", 3)
        add("Calendar", 23)
        add("DateTimePicker", 24)
        add("Edit", 1)
        add("Header", 13)
        add("HotKey", 21)
        add("HyperLink", 7)
        add("IPAddress", 22)
        add("ListBox", 2)
        add("ListView", 12)
        add("ProgressBar", 4)
        //
        add("PropertyGrid", 25)
        add("RadioButton", 30)

        //
        //add("ResourceUsageGraph", 1)
        add("RichEdit", 20)
        add("ScrollBar", 18)
        add("StatusBar", 6)
        //
        add("ToolBar", 1)
        add("TrackBar", 17)
        add("TreeView", 14)
        add("UpDown", 15)

        //
        add("MenuBar", 13)
           
        this.completeToolBar()

        this.createToolBar("Graphics")

        add("Text", 31)

        this.completeToolBar()

        this.createToolBar("Containers")

        add("Frame", 25)
        add("GroupBox", 11)
        add("AutoSplitFrame", 28)
        //
        add("PageControl", 8)
        add("Pager", 5)
        add("ReBar", 26)
        add("TabControl", 8)

        this.completeToolBar()

        this.createToolBar("Other")

        add("Animate", 27)

        this.completeToolBar()
    }

    this.getPanel = function () {
        return panel
    }

    this.create = function () {
        this.createPanel()
        this.createToolBars()
        this.buttonsAllUp()
    }
}


this.ToolBox = ToolBox
