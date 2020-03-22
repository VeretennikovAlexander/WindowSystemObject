//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")

form = wso.CreateForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()
form.sizeGrip = false
form.caption = false
form.maximizeBox = false

imageFile = "RafaelMadonna.bmp"
region = wso.regions.createRgnFromImage(resourceDir() + imageFile,0x00000000)
form.region = region

image = form.drawImage(0, 0, 0, 0, resourceDir() + imageFile)
form.clientWidth = image.imageWidth
form.clientHeight = image.imageHeight
form.centerControl()

image.setBounds(0, 0, image.imageWidth, image.imageHeight)
image.drawType = wso.translate("DI_STRETCH")

function onHitTest(sender, x, y, resultPtr)
{
    resultPtr.put(wso.translate("HTCAPTION"))
};

form.onHitTest = onHitTest

form.show()

wso.run()

function startupDir() {
    var s = WScript.ScriptFullName
    s = s.substring(0, s.lastIndexOf("\\") + 1)
    return s
}

function resourceDir() {
    return startupDir() + "..\\Data\\" 
}
