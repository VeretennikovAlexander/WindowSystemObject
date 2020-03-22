o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 120
f.ClientHeight = 120
f.CenterControl()

f.Show()

frame = f.CreateFrame(10,10,100,100)
frame.BevelInner = o.Translate("BS_RAISED")
frame.BevelOuter = o.Translate("BS_LOWERED")
frame.TextOut(10,10,"Frame")

o.Run()

