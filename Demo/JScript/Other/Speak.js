wso = new ActiveXObject("Scripting.WindowSystemObject")

wso.enableVisualStyles = true

form = wso.createForm()

form.text = "Talking to a User Example, Speech API COM object is required."

topFrame = form.createFrame(0, 0, 0, 100)
topFrame.align = wso.translate("AL_TOP")

topFrame.textOut(10,10,
    [
    "Creates an instance of the Microsoft Speech API COM object",
    "Sends it text to speak."
    ].join("\n")
)

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()

edit = form.createEdit(0, 0, 0, 0, wso.translate("ES_MULTILINE"))
edit.wordWrap = true
edit.align = wso.translate("AL_CLIENT")

edit.text = [
"There was a young lady of Niger.",
"Who smiled when she rode on a tiger.",
"They returned from the ride",
"With the lady inside,",
"And the smile on the face of the tiger"
].join("\r\n")

form.show()

button = topFrame.createButton(10, 50, 75, 25, "Execute")
button.onClick = function(){
    var voice = new ActiveXObject("SAPI.SpVoice")
    voice.speak(edit.text)
    while (!voice.waitUntilDone(0))
    {
        WScript.sleep(100)
    }
}


wso.run()

