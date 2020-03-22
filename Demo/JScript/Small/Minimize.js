o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.Show()

f.OnMinimize = OnMinimize
f.OnMaximize = OnMaximize
f.OnRestore = OnRestore

CanMinimize = f.CreateCheckBox(10,10,100,25,"Can minimize")
CanMaximize = f.CreateCheckBox(10,40,100,25,"Can maximize")
CanRestore = f.CreateCheckBox(10,70,100,25,"Can restore")

List = f.CreateListBox(10,100,480,180)

o.Run()

function OnMinimize(Sender,Result)
{
	if (!CanMinimize.Checked)		
		Result.Value = false
	List.Add("OnMinimize")
}

function OnMaximize(Sender,Result)
{
	if (!CanMaximize.Checked)		
		Result.Value = false
	List.Add("OnMaximize")
}

function OnRestore(Sender,Result)
{
	if (!CanRestore.Checked)		
		Result.Value = false
	List.Add("OnRestore")
}