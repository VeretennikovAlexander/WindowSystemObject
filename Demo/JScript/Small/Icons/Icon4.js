o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

file = "Shell32.dll"

count = o.GetIconCount(file)

f.TextOut(10,10,"Icons in the "+file+": "+count)


f.Icon = o.LoadIcon("Shell32.dll,-16")

left = 10
top = 40
maxHeight = 0

f.Show()

for (i = 1; i<=count; i++)
{
	image = f.DrawImage(left,top,0,0,"Shell32.dll,"+i)
	left += image.Width
	left += 10
	
	if (left >= f.ClientWidth)
	{
		left = 10
		top += maxHeight
		maxHeight = 0
		image.Left = left
		image.Top = top
		left += image.Width
		left += 10		
	}

	if (maxHeight < image.Height)
		maxHeight = image.Height

	image.UserData = i

	image.OnMouseEnter = function(Sender){
		f.Text = Sender.UserData
	}

	image.OnMouseLeave = function(Sender){
		f.Text = ""
	}
}

f.AutoScroll = true


o.Run()
