o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 200
f.ClientHeight = 100
f.CenterControl()

button = f.CreateButton(10,10,75,25,"Test")
button.Default = true
button.OnClick = function(){
	f.MessageBox("Test")
}

f.CreateEdit(10,40,100,25).SetFocus()

f.TextOut(10,70,"Press Enter")

f.Show()

o.Run()
