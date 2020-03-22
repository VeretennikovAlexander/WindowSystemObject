//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

function currentDir() {
    var s = WScript.scriptFullName
    s = s.substring(0, s.lastIndexOf("\\") + 1)
    return s
}

wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.createForm()
form.clientWidth = 500
form.clientHeight = 500
form.centerControl()
form.text = "ActiveX Demo"
form.sizeGrip = true
form.maximizeBox = false

tabControl = form.createTabControl(0, 0, 500, 500)
tabControl.align = wso.translate("AL_CLIENT")

function createEventsEdit(parent, control, top) {
    parent.TextOut(10, top, "Events")

    var edit = parent.createEdit(10, top + 20, 250, 170, wso.translate("ES_MULTILINE"))
    edit.readOnly = true
    edit.wordWrap = true

    edit.add("Group Count = " + control.events.count)
    edit.add("")

    var index = 0

    for (enumerator = new Enumerator(control.events); !enumerator.atEnd(); enumerator.moveNext()) {
        var item = enumerator.item()
        edit.add("Group " + index)
        index++
        edit.add("ID = " + item.ID)
        edit.add("Name = " + item.Name)
        edit.add("")
        edit.add("Events:")
        edit.add("")
        edit.add(item.Text)
        edit.add("")
        edit.add("")
    }

}

mediaTab = tabControl.createTab("MediaPlayer")
mediaTab.TextOut(10, 10, "MediaPlayer ActiveX Control must be installed!")

mediaPlayer = mediaTab.createActiveXControl(10, 30, 460, 240, "{22D6F312-B0F6-11D0-94AB-0080C74C7E95}")
mediaPlayer.align = wso.translate("AL_TOP")

if (mediaPlayer != null)
{
    var bottomPanel = mediaTab.createFrame()
    bottomPanel.align = wso.translate("AL_CLIENT")

    createEventsEdit(bottomPanel, mediaPlayer, 10)

    bottomPanel.TextOut(270, 10, "Events Box")
    
    listBox = bottomPanel.createListBox(270, 30, 200, 140)

    bottomPanel.createButton(270, 180, 75, 25, "Open").onClick = mediaOpen

    function mediaOpen(sender)
	{
	    var fileName = form.openDialog("","All Files (*.*)|*.*")
	    if (fileName != "") {
	        mediaPlayer.control.fileName = fileName
	    }
	}

	mediaPlayer.events.endOfStream = mediaPlayerEndOfStream
	mediaPlayer.events.addEventHandler("PlayStateChange", mediaPlayerPlayStateChange)
	mediaPlayer.events.addEventHandler("OpenStateChange", mediaPlayerOpenStateChange)
	
	function mediaPlayerPlayStateChange()
	{
	    listBox.Add("PlayState Change")
	}
	
	function mediaPlayerOpenStateChange()
	{
	    listBox.Add("OpenState Change")
	}
	
	function mediaPlayerEndOfStream()
	{
	    listBox.Add("End Of Stream")
	}
}

form.show()

wso.run()
