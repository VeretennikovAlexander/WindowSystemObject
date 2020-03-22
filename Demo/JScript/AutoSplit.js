//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")
wso.enableVisualStyles = true

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()

frame = form.createFrame()
frame.align = wso.translate("AL_CLIENT")
frame.autoSplit = true

leftPanel = frame.createFrame()

rightPanel = frame.createFrame(0,0,10,10)
rightPanel.color = 0x000000FF
rightPanel.parentBackground = false
rightPanel.align = wso.translate("AL_CLIENT")

leftPanel.align = wso.translate("AL_LEFT")
leftPanel.width = 300
leftPanel.autoSplit = true

leftTopPanel = leftPanel.createFrame(0,0,100,100)
leftTopPanel.color = 0x0000FF00
leftTopPanel.parentBackground = false
leftTopPanel.align = wso.translate("AL_TOP")

leftBottomPanel = leftPanel.createFrame(0,0,100,100)
leftBottomPanel.color = 0x00FF0000
leftBottomPanel.parentBackground = false
leftBottomPanel.align = wso.translate("AL_CLIENT")

leftBottomPanel.height = 100

form.show()

wso.run()
