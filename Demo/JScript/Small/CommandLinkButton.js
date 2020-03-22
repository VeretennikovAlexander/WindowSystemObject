o = new ActiveXObject("Scripting.WindowSystemObject")
o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.TextOut(10,10,"Command link button example")
f.TextOut(10,40,"Windows Vista and EnableVisualStyles required")

Button = f.CreateButton(10,70,200,55,"Close")
Button.CommandLinkButton = true
Button.OnClick = CloseFormHandler
Button.Note = "Click this to close window"

Button = f.CreateButton(10,130,200,55,"Admin Button")
Button.CommandLinkButton = true
Button.OnClick = CloseFormHandler
Button.Note = "Click this to close window"
Button.Shield = true

f.Show()

o.Run()


function CloseFormHandler(Sender)
{
	Sender.Form.Close()
}
