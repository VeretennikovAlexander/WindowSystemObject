//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2006

o = new ActiveXObject("Scripting.WindowSystemObject")

o.EnableVisualStyles = true

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 670
f.ClientHeight = 600
f.CenterControl()

f.Text = "FileOpenDialog Demo"

f.CreateButton(10, 10, 75, 25, "Open").OnClick = FileOpen
f.CreateButton(100, 10, 75, 25, "Save").OnClick = FileSave
f.CreateButton(210, 10, 100, 25, "Form.OpenDialog").OnClick = FileOpen2
f.CreateButton(320, 10, 100, 25, "Form.SaveDialog").OnClick = FileSave2

f.TextOut(10,50,"Folder:")
f.TextOut(10,80,"File:")
f.TextOut(10,110,"FilterIndex:")

Folder = f.TextOut(150,50,"")
File = f.TextOut(150,80,"")
FilterIndex = f.TextOut(150, 110, "")

ListBox = f.CreateListBox(10, 130, 650, 70)

var CheckBoxesTop = 220

EnableVistaFileDialogCheckBox = f.CreateCheckBox(10, CheckBoxesTop, 200, 25, "Enable new style (Vista) file dialog")

EnableVistaFileDialogCheckBox.Checked = o.EnableVistaFileDialog

EnableVistaFileDialogCheckBox.OnChange = EnableVistaFileDialogCheckBoxOnChange

function EnableVistaFileDialogCheckBoxOnChange() {
    o.EnableVistaFileDialog = EnableVistaFileDialogCheckBox.Checked
}

var Properties = [
"OverwritePrompt",
"AllowMultiselect",
"PathMustExist",
"FileMustExist",
"CreatePrompt",
"NoReadOnlyReturn",
"NoTestFileCreate",
"NoDereferenceLinks",
"DontAddToRecent",
"ForceShowHidden"]

var PropertiesVista = [
    "ForceFileSystem",
    "AllNonStorageItems",
    "HideMRUPlaces",
    "HidePinnedPlaces",
    "DefaultNoMiniMode",
    "ForcePreviewPaneOn"
]

var PropertiesXP = [
    "NoPlacesBar"
]


var PropertiesBox = []

SetInitialFileCheckBox = f.CreateCheckBox(10, CheckBoxesTop + 30, 200, 25, "Set initial file name")
SetInitialFolderCheckBox = f.CreateCheckBox(10, CheckBoxesTop + 60, 200, 25, "Set initial folder")
SetInitialRelativeFileCheckBox = f.CreateCheckBox(10, CheckBoxesTop + 90, 200, 25, "Set initial relative file name (1.txt)")

CheckBoxLeft = 220

CreateCheckboxes(CheckBoxLeft, CheckBoxesTop, Properties, "All")
CreateCheckboxes(CheckBoxLeft, CheckBoxesTop, PropertiesVista, "New style (Vista)")
CreateCheckboxes(CheckBoxLeft, CheckBoxesTop, PropertiesXP, "Old style")

function CreateCheckboxes(Left, Top, Properties, Text) {

    f.TextOut(Left, Top, Text).Font.Bold = true

    Top += 30
   
    CheckBoxLeft += 160

    var t = f.CreateOpenDialog();
    
    for (i = 0; i < Properties.length; i++) {
        var Name = Properties[i]

        var CheckBox = f.CreateCheckBox(Left, Top, 150, 25, Name)
        Top += 30
        PropertiesBox[Name] = CheckBox
        
        CheckBox.Checked = t[Name]
    }
}

function InitDialog(t) {

    t.OnCloseQuery = OnCloseQuery
    t.OnFolderChange = OnFolderChange
    t.OnChange = OnChange
    t.OnHelp = OnHelp
    t.OnTypeChange = OnTypeChange

    if (SetInitialFileCheckBox.Checked) {
        t.FileName = WScript.ScriptFullName
    } else
    if (SetInitialRelativeFileCheckBox.Checked) {
        t.FileName = "1.txt"
    } 
    if (SetInitialFolderCheckBox.Checked) {
        t.Directory = StartupDir()
    }

    for (Item in PropertiesBox)
    {
        t[Item] = PropertiesBox[Item].Checked
    }

    t.AddPlace(StartupDir(),"Place 1")
}

function ShowDialog(t) {

    InitDialog(t)

    var Result = t.Execute()

    Folder.Text = t.Directory
    File.Text = t.FileName

    if (Result) {
        f.MessageBox("File: " + t.FileName + "\rFilterIndex = " + t.FilterIndex)

        FileNames = t.FileNames

        ListBox.Clear()
          
        for (i = 0; i < FileNames.count; i++) {
            ListBox.Add(FileNames.item(i));
        }        
    }
}

function FileOpen(Sender)
{
	t = f.CreateOpenDialog();
	t.Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*"
	t.DefaultExt = "txt"
	t.FilterIndex = 2
	t.Flags = o.Translate("OFN_OPENDEFAULT")
	t.Text = "Select file"

	ShowDialog(t)	
};

function FileSave(Sender)
{
	t = f.CreateSaveDialog();
	t.Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*"
	t.DefaultExt = "txt"
	t.FilterIndex = 2
	t.Flags = o.Translate("OFN_SAVEDEFAULT")
	t.Text = "Select file"
	
	ShowDialog(t)
};

function CheckResult(Value) {

    Folder.Text = ""
    File.Text = Value

    if (Value.length > 0)
    {
        f.MessageBox("File: " + Value)
    }
}

function FileOpen2(Sender) {
    t = f.CreateOpenDialog();
    t.Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*"
    t.DefaultExt = "txt"
    t.FilterIndex = 2
    t.Flags = o.Translate("OFN_OPENDEFAULT")
    t.Text = "Select file"

    InitDialog(t)
    
    var File = f.OpenDialog(t.DefaultExt,t.Filter,t.FileName,t.Flags)
    
    CheckResult(File)
};

function FileSave2(Sender) {
    t = f.CreateSaveDialog();
    t.Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*"
    t.DefaultExt = "txt"
    t.FilterIndex = 2
    t.Flags = o.Translate("OFN_SAVEDEFAULT")
    t.Text = "Select file"

    InitDialog(t)
    
    var File = f.SaveDialog(t.DefaultExt,t.Filter,t.FileName,t.Flags)
    
    CheckResult(File)
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

function StartupDir() { s = WScript.ScriptFullName; s = s.substring(0, s.lastIndexOf("\\") + 1); return s; }
