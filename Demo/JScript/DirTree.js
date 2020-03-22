//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015
//Requirements: JScript 5.0

testVersion(5,0)

wso = new ActiveXObject("Scripting.WindowSystemObject")
fso = new ActiveXObject("Scripting.FileSystemObject")

form = wso.createForm()

form.clientWidth = 500
form.clientHeight = 350
form.centerControl()
form.text = "Directory Tree Demo"

form.borderWidth = 10
form.minWidth = 500
form.minHeight = 350

tree = form.createTreeView(10, 10, 250, 300)
tree.hotTrack = true
tree.align = wso.translate("AL_CLIENT")

ext = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
tree.images = ext.systemImageListSmall

rightFrame = form.createFrame(0, 0, 100, 0)
rightFrame.align = wso.translate("AL_RIGHT")

rightFrame.createButton(10, 10, 75, 25, "Help").onClick = helpAbout

closeButton = rightFrame.createButton(10, 40, 75, 25, "Close")
closeButton.onClick = closeFormHandler
closeButton.cancel = true

drives = fso.Drives

for (enumerator = new Enumerator(drives); !enumerator.atEnd(); enumerator.moveNext())
{
    var newItem = tree.items.add(enumerator.item())
    newItem.imageIndex = ext.getFileSysIconIndexSmall(enumerator.item())
    newItem.add("")
}

tree.onExpanded = onExpanded

function getPath(item)
{
	var result = ""
	var current = item

	while (current.parent != null)
	{
	    result = current.text + "\\" + result
	    current = current.parent	
	}

	return result
};

function onExpanded(sender, item) {	
    
	try
	{

	    if (item.firstChild.text == "") {

	        tree.beginUpdate()
	        
	        try {

	            var folder = fso.getFolder(getPath(item))
	            var enumerator = new Enumerator(folder.subfolders)
	            
	            for (; !enumerator.atEnd(); enumerator.moveNext()) {
	                var fileItem = enumerator.item()
	                var newItem = item.add(fileItem.Name)
	                newItem.imageIndex = ext.getFileSysIconIndexSmall(fileItem)
	                try {
	                    var subFolders = fileItem.subfolders
	                    if (subFolders.count > 0) {
	                        newItem.add("")
	                    }
	                }
	                catch (e) {
	                }
	            }

	            item.firstChild.remove()
	            item.sort()

	        } finally {
	            tree.endUpdate()
	        }
	    }
	
	}
	catch(e)
	{
	    if (form.messageBox(e.description, "", wso.translate("MB_ICONERROR | MB_RETRYCANCEL")) == 4) {
	        onExpanded(sender, item)
	    } else {
	        item.collapse()
	    }
	};
};

function helpAbout(sender)
{
    wso.about()
};

tree.popupMenu.add("Update").onExecute = updateItem

function updateItem(sender)
{
    var selectedItem = tree.selectedItem
    selectedItem.collapse()
    selectedItem.clear()
    selectedItem.add("")
    selectedItem.expand()
}

fileMenu = form.menu.add("File")

exitMenuItem = fileMenu.add("Exit", "ESC")
exitMenuItem.onExecute = closeFormHandler

helpMenu = form.menu.add("Help")

aboutMenuItem = helpMenu.add("About", "F1")
aboutMenuItem.onExecute = helpAbout

form.show()

wso.run()

function closeFormHandler(sender)
{
    sender.form.close()
}

function testVersion(x, y) {
    if ((ScriptEngineMajorVersion() * 10 + ScriptEngineMinorVersion()) < (x * 10 + y)) {
        WScript.Echo("Sample requirements: JScript " + x + "." + y + " (Current: " + ScriptEngineMajorVersion() + "." + ScriptEngineMinorVersion() + ")")
        WScript.Quit()
    }
}


