o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 400
f.ClientHeight = 150
f.CenterControl()

t = f.CreateTrackBar(10,10,380,50)
t.EnableSelRange = true
t.SelStart = 20
t.SelEnd = 50

t.OnKeyDown = OnKeyDown
t.OnChange = OnChange
t.OnKeyUp = OnKeyUp


var Ctrl = false

function OnChange(Sender)
{
	if (Ctrl != true)
	{
		return
	}

	End = t.Position
	NewStart = Start
	NewEnd = End

	if (End < Start)
	{
		x = NewStart
		NewStart = NewEnd
		NewEnd = x
	}

	t.SelStart = NewStart
	t.SelEnd = NewEnd

}

function OnKeyUp(Sender,Key,Mode)
{
	if (Key == 17)
		Ctrl = false
}

function OnKeyDown(Sender,Key,Mode)
{
	if ((Key == 17) && (Ctrl == false))
	{	
		Ctrl = true
		Start = t.Position
	}	

}

f.TextOut(10,70,"To change seletion: down CTRL key, move slider, up CTRL key")


with (f.CreateButton(10,100,75,25,"Close"))
{
	OnClick = CloseFormHandler
	Default = true
	Cancel = true
}

f.Show()


o.Run()


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}
