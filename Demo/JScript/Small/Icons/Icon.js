o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.Icon = "Shell32.dll,-16"

left = 10
for (i = 1; i<10; i++)
{
	image = f.DrawImage(left,10,0,0,o.LoadIcon("Shell32.dll,-"+i))
	left += image.Width
	left += 10
}

f.Show()

o.Run()
