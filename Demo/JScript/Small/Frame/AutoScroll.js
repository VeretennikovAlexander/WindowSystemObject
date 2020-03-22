o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 300
f.ClientHeight = 200
f.CenterControl()

f.Show()

f.AutoScroll = true

for (i = 0; i<4; i++)
{
	for (j = 0; j < 5; j++)
	{
		f.CreateButton(20+i*170,20+j*70,140,40,"Button "+i+"/"+j)
	}
}

o.Run()

