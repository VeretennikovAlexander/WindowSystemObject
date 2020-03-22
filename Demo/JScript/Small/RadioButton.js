o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.Text = "WSO"
f.ClientWidth = 200
f.ClientHeight = 100
f.CenterControl()

with (R1 = f.CreateRadioButton(10,10,100,25,"Check 1"))
{
	Group = 1
}

with (R2 = f.CreateRadioButton(10,40,100,25,"Check 2"))
{
	Group = 1
}

with (R3 = f.CreateRadioButton(10,70,100,25,"Check 3"))
{
	Group = 1
}


with (R4 = f.CreateRadioButton(110,10,100,25,"Check 4"))
{
	Group = 2
}

with (R5 = f.CreateRadioButton(110,40,100,25,"Check 5"))
{
	Group = 2
}

with (R6 = f.CreateRadioButton(110,70,100,25,"Check 6"))
{
	Group = 2
}

R5.Checked = true

f.Show()

o.Run()


