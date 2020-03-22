//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015

wso = new ActiveXObject("Scripting.WindowSystemObject")
regions = wso.regions

form = wso.createForm()
form.sizeGrip = false
form.caption = false
form.maximizeBox = false
form.text = "Region Demo"
form.clientWidth = 300
form.clientHeight = 200
form.centerControl()

closeButton = form.createButton(120,90,75,25,"Close")
closeButton.onClick = closeFormHandler
closeButton['default'] = true
closeButton.cancel = true

ellipse = regions.createEllipticRgn(20,20,260,160)
ring = regions.combineRgn(ellipse, regions.createEllipticRgn(30, 30, 240, 140), wso.translate("RGN_DIFF"))
star = regions.createPolygonRgn(150,0,220,200,0,60,300,60,80,200,wso.translate("WINDING"))
region = regions.combineRgn(ring, star, wso.translate("RGN_OR"))

form.region = region

form.brush.color = 0x00FF0000
regionGraphic = form.drawRegion(0, 0, region)

text = form.textOut(40,70,"")
text.font.bold = true
text.font.color = 0x00FFFFFF

timer = wso.createTimer()
timer.interval = 100
timer.active = true
timer.onExecute = timerExecute

function timerExecute(sender)
{
	var date = new Date()
	text.text = date
};

function onHitTest(sender, x, y, resultPtr)
{
    resultPtr.put(wso.translate("HTCAPTION"))
};

form.onHitTest = onHitTest

form.show()

wso.run()


function closeFormHandler(sender) {
    sender.form.close()
}

