//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")
wso.enableVisualStyles = true

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()

mainSplitPanel = form.createSplitPanel(0,0,0,0,false)
mainSplitPanel.align = wso.translate("AL_CLIENT")

innerSplitPanel = mainSplitPanel.createSplitPanel(0, 0, 0, 0, true)
//innerSplitPanel.minWidth = 100
//innerSplitPanel.minHeight = 100

rightPanel = mainSplitPanel.createFrame(0, 0, 10, 10)
rightPanel.color = 0x000000FF
rightPanel.parentBackground = false
//rightPanel.minWidth = 100
//rightPanel.minHeight = 100

innerSplitPanel.Width = 300

topPanel = innerSplitPanel.createFrame(0, 0, 100, 100)
topPanel.color = 0x0000FF00
topPanel.parentBackground = false

bottomPanel = innerSplitPanel.createFrame(0, 0, 100, 100)
bottomPanel.color = 0x00FF0000
bottomPanel.parentBackground = false

innerSplitPanel.defaultSplit = 0.3

topPanel.height = 100
topPanel.width = 100

fileMenu = form.menu.add("File")
invertVerticalMenuItem = fileMenu.add("Invert Vertical");
invertVerticalMenuItem.onExecute = function(sender)
{
    innerSplitPanel.vertical = !innerSplitPanel.vertical
    mainSplitPanel.vertical = !mainSplitPanel.vertical
}

liveMenuItem = fileMenu.add("Live")
liveMenuItem.onExecute = function (sender) {
    sender.checked = !sender.checked
    innerSplitPanel.live = sender.Checked
    mainSplitPanel.live = sender.Checked
}
liveMenuItem.checked = innerSplitPanel.live

firstSplitterMenuItem = form.menu.add("First splitter")
firstSplitterMenuItemVertical = firstSplitterMenuItem.add("Vertical");
firstSplitterMenuItemVertical.onExecute = function (sender) {
    sender.checked = !sender.checked
    mainSplitPanel.vertical = sender.checked
}
firstSplitterMenuItemVertical.onUpdate = function (sender) {
    sender.checked = mainSplitPanel.vertical
}


secondSplitterMenuItem = form.menu.add("Second splitter")
secondSplitterMenuItemVertical = secondSplitterMenuItem.add("Vertical");
secondSplitterMenuItemVertical.onExecute = function (sender) {
    sender.checked = !sender.checked
    innerSplitPanel.vertical = sender.checked
}
secondSplitterMenuItemVertical.onUpdate = function (sender) {
    sender.Checked = innerSplitPanel.vertical
}

form.show()

wso.run()
