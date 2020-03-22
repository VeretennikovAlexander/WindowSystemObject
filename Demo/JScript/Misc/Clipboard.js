wso = new ActiveXObject("Scripting.WindowSystemObject")
wsoExt = new ActiveXObject("Scripting.WindowSystemObjectExtensions")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()

edit = form.createEdit(0, 0, 10, 100, wso.translate("ES_MULTILINE"))
edit.align = wso.translate("AL_CLIENT")

panel = form.createFrame(0, 0, 10, 50)
panel.align = wso.translate("AL_BOTTOM")

clipboard = wsoExt.createClipboard(true)
clipboard.onChange = clipboardChange

with (panel.createButton(10,10,75,25,"Clear"))
{
	onClick = emptyClipboard
}

with (panel.createButton(100,10,75,25,"Copy from: "))
{
	onClick = copyToClipboard
}

text = panel.createEdit(200,10,100,25)

edit.text = clipboard.text

form.show()

wso.run()


function clipboardChange(sender)
{
	edit.text = clipboard.text
}

function emptyClipboard(sender)
{
	clipboard.empty()
}

function copyToClipboard(sender)
{
	clipboard.text = text.text
}