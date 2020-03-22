wso = new ActiveXObject("Scripting.WindowSystemObject")

function createForm(i, x, y, w, h)
{
    var form = wso.createForm()

    form.text = "Form " + i
    form.setBounds(x, y, w, h)

    var box = form.createListBox()
    box.Align = wso.translate("AL_CLIENT")

    form.onActivate = onActivate

    form.show()

    function onActivate(sender, flags)
    {
	    var s
	    if (flags == wso.translate("WA_INACTIVE"))
		    s = "Deactivated"; else
	    if (flags == wso.translate("WA_ACTIVE"))
		    s = "Activated"; else
	    if (flags == wso.translate("WA_CLICKACTIVE"))
		    s = "Activated by mouse"; else
	        s = flags

	    box.add(s)
    }

    return form
}

f1 = createForm(1, 10, 10, 500, 300)
f2 = createForm(2, 10, 310, 500, 300)

var form = wso.createForm()

form.text = "Main Form"
form.setBounds(520, 10, 500, 300)
form.show()

with (form.createButton(10, 10, 100, 25, "Activate Form 1"))
{
	onClick = activateForm
	userData = f1
}

with (form.createButton(10, 40, 100, 25, "Activate Form 2"))
{
    onClick = activateForm
    userData = f2
}

with (form.createButton(120, 10, 100, 25, "Foreground Form 1"))
{
    onClick = foregroundForm
	userData = f1
}

with (form.createButton(120, 40, 100, 25, "Foreground Form 2"))
{
    onClick = foregroundForm
    userData = f2
}


function activateForm(sender)
{
    sender.userData.active = true
}

function foregroundForm(sender)
{
    sender.userData.foreground = true
}

timer = wso.createTimer()
timer.interval = 100
timer.onExecute = onTimer
timer.active = true

label = form.textOut(10, 100, "")

function onTimer()
{
	var s = [
        "Form 1 Active: " + f1.Active,
	    "Form 1 Foreground: " + f1.Foreground,
	    "Form 2 Active: " + f2.Active,
	    "Form 2 Foreground: " + f2.Foreground,
	    "Active Form: " + (wso.activeForm != null ? wso.activeForm.Text : "NULL"),
	    "Foreground Form: " + (wso.foregroundForm != null ? wso.foregroundForm.Text : "NULL")
    ].join("\r\n")

	label.Text = s
}

form.onClose = onClose

function onClose()
{
	wso.stop()
}

wso.run()

