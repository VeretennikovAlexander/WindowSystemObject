//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2006

o = new ActiveXObject("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()

f.Text = "FileOpenDialog Demo"

f.CreateButton(10,10,75,25,"Open").OnClick = FileOpen

f.TextOut(10,100,"Folder:")
f.TextOut(10,120,"File:")
f.TextOut(10,140,"FilterIndex:")

Folder = f.TextOut(150,100,"")
File = f.TextOut(150,120,"")
FilterIndex = f.TextOut(150,140,"")

function FileOpen(Sender)
{
	t = f.CreateOpenDialog();
	t.Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*"
	t.DefaultExt = "txt"
	t.FilterIndex = 2
	t.Flags = o.Translate("OFN_OPENDEFAULT | OFN_SHOWHELP")
	t.Text = "Select file"
	t.OnCloseQuery = OnCloseQuery
	t.OnFolderChange = OnFolderChange
	t.OnChange = OnChange
	t.OnHelp = OnHelp
	t.OnTypeChange = OnTypeChange
	if (t.Execute())
		f.MessageBox("File: "+t.FileName+"\rFilterIndex = "+t.FilterIndex)
};

function OnHelp(Sender)
{
	f.MessageBox("Help")
}

function OnFolderChange(Sender)
{
	Folder.Text = t.Directory
}

function OnChange(Sender)
{
	File.Text = t.FileName
}

function OnTypeChange(Sender)
{
	FilterIndex.Text = t.FilterIndex
}

function OnCloseQuery(Sender,ResultPtr)
{
	ResultPtr.Value = f.MessageBox("File: "+Sender.FileName+". Close ?","",o.Translate("MB_OKCANCEL")) == o.Translate("IDOK")
}

f.Show()

o.Run()
