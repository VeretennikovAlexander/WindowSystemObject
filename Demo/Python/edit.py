#WindowSystemObject (WSO) example
#Copyright (C) Veretennikov A. B. 2004

from wso import *
from wsosamples import *

def FormCloseQuery(sender,resultptr):
	resultptr.Put(sender.Form.MessageBox("Do you really want to quit this program?","",o.Translate("MB_OKCANCEL")) == o.Translate("IDOK"))

def CloseFormHandler(sender):
	sender.Form.Close()

def HelpAbout(sender):
	AboutWSO(sender,"Text Editor Demo")

def EditUndoUpdate(sender):
	sender.Enabled = Edit.CanUndo

def EditUndo(sender):
	Edit.Undo()

def EditCopy(sender):
	Edit.Copy()

def EditCut(sender):
	Edit.Cut()

def EditCutCopyUpdate(sender):
	sender.Enabled = Edit.SelEnd<>Edit.SelStart

def EditPaste(*args):
	Edit.Paste()

def EditPasteUpdate(sender):
	sender.Enabled = Edit.CanPaste

def EditSelectAll(*args):
	Edit.SelectAll()

def FileOpen(*args):
	st = f.OpenDialog("","Text Files (*.txt)|*.txt")
	if st<>"":
		t = file(st)
		Edit.BeginUpdate()
		Edit.Clear()
		try:
			s = t.readline()
			while len(s)>0:	
				s = s.rstrip("\n")
				Edit.Add(s)
				s = t.readline()
		finally:
			Edit.EndUpdate()

def FileSaveAs(*args):
	st = f.SaveDialog("","Text Files (*.txt)|*.txt")
	if st<>"":
		t = file(st,"w")
		i = 0
		l = Edit.Count
		while i<l:
			t.write(Edit[i])
			t.write("\n")
			i = i+1
		

def WordWrapUpdate(sender):
	sender.Checked = Edit.WordWrap

def WordWrapExecute(sender):
	Edit.WordWrap = sender.Checked

def FormatFont(*args):
	Edit.Font = f.FontDialog(Edit.Font)

o = win32com.client.Dispatch("Scripting.WindowSystemObject")

f = o.CreateForm(0,0,0,0)

f.ClientWidth = 500
f.ClientHeight = 300
f.CenterControl()
f.Text = "Text Editor"

f.OnCloseQuery = getref(FormCloseQuery)

Edit = f.CreateEdit(0,0,0,0)
Edit.Align = o.Translate("AL_CLIENT")
Edit.HideSelection = False
Edit.MultiLine = True
Edit.ScrollBars = o.Translate("SS_BOTH")

Menu = f.CreateMenuBar(0,0,0,0)
Menu.Align = o.Translate("AL_TOP")
t = Menu.Menu.Add("File")
t.Add("Open","CTRL+O").OnExecute = getref(FileOpen)
t.Add("Save as ...","CTRL+S").OnExecute = getref(FileSaveAs)
t.NewLine()
t.Add("Exit","ESC").OnExecute = getref(CloseFormHandler)

t = Menu.Menu.Add("Edit")
j = t.Add("Undo")
j.OnExecute = getref(EditUndo)
j.OnUpdate = getref(EditUndoUpdate)

t.NewLine()

j = t.Add("Cut")
j.OnExecute = getref(EditCut)
j.OnUpdate = getref(EditCutCopyUpdate)

j = t.Add("Copy")
j.OnExecute = getref(EditCopy)
j.OnUpdate = getref(EditCutCopyUpdate)

j = t.Add("Paste")
j.OnExecute = getref(EditPaste)
j.OnUpdate = getref(EditPasteUpdate)

t.NewLine()
t.Add("Select All").OnExecute = getref(EditSelectAll)

t = Menu.Menu.Add("Format")
j = t.Add("Word Wrap")
j.CheckBox = True
j.OnExecute = getref(WordWrapExecute)
j.OnUpdate = getref(WordWrapUpdate)

t.NewLine()
t.Add("Font").OnExecute = getref(FormatFont)

t = Menu.Menu.Add("Help")
t.Add("About","F1").OnExecute = getref(HelpAbout)

f.CreateStatusBar()

f.Show()

o.Run()

