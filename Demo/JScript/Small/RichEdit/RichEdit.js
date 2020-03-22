o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 300
f.ClientHeight = 200
f.CenterControl()

r = f.CreateRichEdit(10,10,400,100)
r.Align = o.Translate("AL_CLIENT")

r.Font.Size = 14

r.Add("Line 1")

r.SelFont.Color = 0x00FF0000

r.Add("Line 3")

r.SelFont.Bold = true
r.SelFont.Color = 0x000000FF
r.SelFont.Size = 16

r.Add("Line 2")

f.Show()

o.Run()
