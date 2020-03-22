require 'win32ole'

def event (v,name)
	WIN32OLE_EVENT.new(v).on_event(name) 
end

wso = WIN32OLE.new("Scripting.WindowSystemObject")

form = wso.createForm()

regions = wso.regions

frame = wso.createForm()
form.SizeGrip = false
form.Caption = false
form.MaximizeBox = false
form.Text = "Region Demo"
form.ClientWidth = 300
form.ClientHeight = 200
form.CenterControl()

button = form.createButton(120,90,75,25,"Close")

event(button,'OnClick') do |sender|
	sender.Form.Close()
end

button.default = true
button.cancel = true

ellipse = regions.createEllipticRgn(20,20,260,160)
ring = regions.combineRgn(ellipse,regions.createEllipticRgn(30,30,240,140),wso.translate("RGN_DIFF"))
star = regions.createPolygonRgn(150,0,220,200,0,60,300,60,80,200,wso.translate("WINDING"))
region = regions.CombineRgn(ring,star,wso.translate("RGN_OR"))

form.region = region

form.brush.color = 0x00FF0000
form.drawRegion(0,0,region)

text = form.textOut(60,70,"")
text.font.bold = true
text.font.color = 0x00FFFFFF

timer = wso.createTimer()
timer.interval = 100
timer.active = true

event(timer,'OnExecute') do
	text.text = Time.new
end

event(form,'OnHitTest') do |sender,x,y,result|
	result.put(wso.translate("HTCAPTION"))
end

form.show()

wso.run()

