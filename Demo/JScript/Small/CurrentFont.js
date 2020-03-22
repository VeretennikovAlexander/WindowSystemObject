o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.TextOut(10,10,"Current font: "+f.Font.Name)

f.Show()

o.Run()
