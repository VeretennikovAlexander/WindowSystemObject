o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

TransparentColor = 0x005050FF

f.Layering.Layered = true
f.Layering.Alpha = 120
f.Layering.TransparentColor = TransparentColor

f.TextOut(10,10,"Layered Window")

f.Rectangle(220,10,150,100).Color = TransparentColor

f.CreateButton(10,30,100,25,"Close").OnClick = CloseFormHandler

Track = f.CreateTrackBar(10,70,200,25)
Track.Max = 255
Track.Position = f.Layering.Alpha

Track.OnChange = function() {
	f.Layering.Alpha = Track.Position
}

TransparentColorCheck = f.CreateCheckBox(10,100,100,25,"Use Transparent Color")

TransparentColorCheck.OnChange = function() {
	f.Layering.Flags = TransparentColorCheck.Checked ? o.Translate("LWA_ALPHA | LWA_COLORKEY") : o.Translate("LWA_ALPHA")
}

f.Show()

o.Run()



function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}
