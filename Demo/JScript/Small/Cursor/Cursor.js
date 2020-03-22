o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 300
f.ClientHeight = 200
f.CenterControl()

f.Rectangle(10,10,100,100).Cursor = o.Translate("IDC_WAIT");

f.CreateEdit(150,10,100,15).Cursor = 0;

with (f.Circle(100,100,50))
{
	Cursor = o.Translate("IDC_CROSS");
}

f.Cursor = o.Translate("IDC_SIZEALL")

f.Show()

o.Run()
