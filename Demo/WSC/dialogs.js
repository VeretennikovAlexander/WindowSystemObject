//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004 

o = new ActiveXObject("Scripting.WindowSystemObject");
f = o.CreateForm(0,0,500,300);
f.CenterControl();

d = new ActiveXObject("Scripting.WindowSystemObject.Dialogs");


f.CreateButton(10,10,110,25,"InputBox").OnClick = InputBox;
f.CreateButton(10,40,110,25,"InputPasswordBox").OnClick = InputPasswordBox;
f.CreateButton(10,70,110,25,"ChoicesDialog").OnClick = ChoicesDialog;

function InputPasswordBox(Sender)
{
	s = d.InputPasswordDialog("InputPasswordBox Example","Enter text","StartText");
	if (s!="") f.MessageBox("Result: \""+s+"\"");
}

function InputBox(Sender)
{
	s = d.InputDialog("InputBox Example","Enter text","StartText",2,"Variant A","Variant B");
	if (s!="") f.MessageBox("Result: \""+s+"\"");
}

function ChoicesDialog(Sender)
{
	s = d.ChoicesDialog("Choices Dialog","Source list","Destination list","A\rB\rC\rE\rD","X\rY\rZ");
	if (s!="") f.MessageBox(s);
}

f.Show();
o.Run();
