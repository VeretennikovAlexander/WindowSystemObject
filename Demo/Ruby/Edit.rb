require 'win32ole'

def event (v,name)
	WIN32OLE_EVENT.new(v).on_event(name) 
end

wso = WIN32OLE.new("Scripting.WindowSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 300
form.centerControl()
form.text = "Text Editor"

edit = form.createEdit(0,0,0,0)
edit.align = wso.translate("AL_CLIENT")
edit.hideSelection = false
edit.multiLine = true
edit.scrollBars = wso.translate("SS_BOTH")

menu = form.createMenuBar(0,0,0,0)
menu.align = wso.translate("AL_TOP")

fileMenu = menu.menu.add("File")
openFileMenuItem = fileMenu.add("Open","CTRL+O")

event(openFileMenuItem,'OnExecute') do
	st = form.openDialog("","Text Files (*.txt)|*.txt")
	if st!=""
		fs = WIN32OLE.new("Scripting.FileSystemObject")
		file = fs.openTextFile(st,1,false)
		edit.clear()
		edit.text = file.readAll()
	end
end

saveFileMenuItem = fileMenu.add("Save as ...","CTRL+S")

event(saveFileMenuItem,'OnExecute') do
	st = form.saveDialog("","Text Files (*.txt)|*.txt")
	if st!=""	
		fs = WIN32OLE.new("Scripting.FileSystemObject")
		file = fs.createTextFile(st,true)
		file.write(edit.Text)
		file.close()
	end
end

fileMenu.newLine()

exitMenuItem = fileMenu.add("Exit","ESC")

event(exitMenuItem,'OnExecute') do |sender|
	sender.form.close()
end

editMenu = menu.menu.add("Edit")

undoMenuItem = editMenu.add("Undo")

event(undoMenuItem,'OnExecute') do |sender|
	edit.undo()
end

event(undoMenuItem,'OnUpdate') do |sender|
	sender.enabled = edit.canUndo
end

editMenu.newLine()

cutMenuItem = editMenu.add("Cut")

event(cutMenuItem,'OnExecute') do |sender|
	edit.cut()
end

event(cutMenuItem,'OnUpdate') do |sender|
	sender.enabled = edit.selEnd != edit.selStart
end

copyMenuItem = editMenu.Add("Copy")

event(copyMenuItem,'OnExecute') do |sender|
	edit.copy()
end

event(copyMenuItem,'OnUpdate') do |sender|
	sender.enabled = edit.selEnd != edit.selStart
end


pasteMenuItem = editMenu.Add("Paste")

event(pasteMenuItem,'OnExecute') do |sender|
	edit.paste()
end

event(pasteMenuItem,'OnUpdate') do |sender|
	sender.enabled = edit.canPaste
end

editMenu.newLine()

selectAllMenuItem = editMenu.add("Select All")

event(selectAllMenuItem,'OnExecute') do |sender|
	edit.selectAll()
end

formatMenu = menu.menu.add("Format")

wordWrapMenuItem = formatMenu.add("Word Wrap")
wordWrapMenuItem.CheckBox = true


event(wordWrapMenuItem,'OnExecute') do |sender|
	edit.wordWrap = sender.checked
end

event(wordWrapMenuItem,'OnUpdate') do |sender|
	sender.checked = edit.wordWrap
end

formatMenu.newLine()
fontMenuItem = formatMenu.add("Font")


event(fontMenuItem,'OnExecute') do |sender|
	edit.font = form.fontDialog(edit.font)
end

helpMenu = menu.Menu.add("Help")

aboutMenuItem = helpMenu.add("About","F1")


event(aboutMenuItem,'OnExecute') do |sender|
	wso.about()
end

form.createStatusBar()

event(form,'OnCloseQuery') do |sender,result|
	msgBoxResult = sender.form.messageBox("Do you really want to quit this program?","",wso.translate("MB_OKCANCEL"))
	result.put(msgBoxResult == wso.translate("IDOK"))
end

form.show()

wso.run()

