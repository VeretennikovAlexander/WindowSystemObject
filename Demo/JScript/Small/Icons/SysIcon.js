o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 400
f.CenterControl()

Icons = [
	"OIC_SAMPLE",
	"OIC_HAND",
	"OIC_QUES",
	"OIC_BANG",
	"OIC_NOTE",
	"OIC_WINLOGO",
	"OIC_WARNING",
	"OIC_ERROR",
	"OIC_INFORMATION",
	"OIC_SHIELD"
]

left = 10
top = 10

for (i = 0; i<Icons.length; i++)
{
	icon = o.LoadSysIcon(o.Translate(Icons[i]))

	f.TextOut(left,top,Icons[i]+":")

	image = f.DrawImage(left + 150,top,0,0,icon)

	image2 = f.DrawImage(left + 150 + 20 + image.Width,top,70,50,icon)
	image2.DrawType = o.Translate("DI_STRETCH")

	top += 10
	top += Math.max(image.Height,70)
}

f.AutoScroll = true

f.Show()

o.Run()
