o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.Text = "WSO"
f.ClientWidth = 200
f.ClientHeight = 100
f.CenterControl()

Frame = f.CreateGroupBox(10,10,180,80)
Frame.TextOut(10,20,"Test")
Frame.Text = "Frame"

f.Show()

o.Run()

