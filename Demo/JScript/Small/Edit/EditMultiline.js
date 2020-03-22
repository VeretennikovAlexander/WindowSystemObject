o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.Text = "WSO"
f.ClientWidth = 200
f.ClientHeight = 100
f.CenterControl()

Edit = f.CreateEdit(10,10,180,25)
Edit.MultiLine = true
Edit.Add("Line 1")
Edit.Add("Line 2")
Edit.Add("Line 3")
Edit.Align = o.Translate("AL_CLIENT")

f.Show()

o.Run()

