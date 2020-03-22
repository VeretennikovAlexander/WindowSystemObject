o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

t = f.CreateFrame(0,0,0,0)
t.Name = "Left"
t.Text = "Test"

t = f.CreateFrame(0,0,0,0)
t.Name = "Show"
t.Text = "Test"

f.Text = f.Left.Text
f.Text += " "
f.Text += f.Show.Text

f.Show()

o.Run()
