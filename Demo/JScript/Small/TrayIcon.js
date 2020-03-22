//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2013

o = new ActiveXObject("Scripting.WindowSystemObject");
o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0);

f.ClientWidth = 500;
f.ClientHeight = 300;
f.CenterControl();

function CurrentDir() {s = WScript.ScriptFullName; s = s.substring(0,s.lastIndexOf("\\")+1); return s; }

f.Text = "TrayIcon Demo";

f.TextOut(10,10,"Events:");
l = f.CreateListBox(10,40,300,250);

t = o.CreateTrayIcon();
t.Images.Load(CurrentDir()+"../../Data/Controls16.bmp");
t.Active = true;
t.Hint = "WSO TrayIcon Demo";
t.OnClick = OnClick;
t.OnMouseDown = OnMouseDown;
t.OnMouseUp = OnMouseUp;
t.OnDblClick = OnDblClick;
t.BalloonTip.Text = "WSO TrayIcon Demo Balloon Tip Text You Can See Where"
t.BalloonTip.Title = "WSO TrayIcon Demo"
t.BalloonTip.Icon = o.Translate("NIIF_WARNING | NIIF_LARGE_ICON")
t.BalloonTip.Timeout = 15000

with (t.PopupMenu.Add("Item A"))
{
	OnExecute = OnItemClick;
	ImageIndex = 1
}
t.PopupMenu.Add("Item B").OnExecute = OnItemClick;
t.PopupMenu.Images = t.Images

BalloonTipButton = f.CreateButton(320,40,100,25,"Show Balloon Tip")
BalloonTipButton.OnClick = BalloonTipButtonClick

f.TextRect(320,80,100,200,"Balloon Tip requires Windows XP and Themes")

function BalloonTipButtonClick(Sender)
{
	t.BalloonTip.Visible = true
}

function OnClick(Sender)
{
	l.Add("OnClick");
};

function OnMouseDown(Sender,x,y,Button,Flags)
{
	l.Add("OnMouseDown: "+x+" x "+y+", Button = "+Button+", Flags = "+Flags);
};

function OnMouseUp(Sender,x,y,Button,Flags)
{
	l.Add("OnMouseUp: "+x+" x "+y+", Button = "+Button+", Flags = "+Flags);
};

function OnDblClick(Sender,x,y,Button,Flags)
{
	l.Add("OnDblClick: "+x+" x "+y+", Button = "+Button+", Flags = "+Flags);
};

function OnItemClick(Sender)
{
	f.MessageBox("OnExecute "+Sender.Text);
};

f.Show();

o.Run();

t.Active = false
