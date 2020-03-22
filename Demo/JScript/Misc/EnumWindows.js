wso = new ActiveXObject("Scripting.WindowSystemObject")
wsoExt = new ActiveXObject("Scripting.WindowSystemObjectExtensions")

form = wso.createForm()

form.clientWidth = 700
form.clientHeight = 500
form.centerControl()

form.show()

listView = form.createListView(10, 10, 480, 200, wso.translate("LVS_REPORT | LVS_OWNERDATA | LVS_SHOWSELALWAYS"))

listView.columns.add("Name", 300)
listView.columns.add("Class Name", 300)
listView.gridLines = true
listView.rowSelect = true
listView.onData = listViewOnData
listView.align = wso.translate("AL_CLIENT")

panel = form.createFrame(0, 0, 0, 40)
panel.align = wso.translate("AL_BOTTOM")

button = panel.createButton(10,10,100,25,"Enum")
button.onClick = enumWindows

button = panel.createButton(120,10,100,25,"Close Selected")
button.onClick = closeSelectedWindow

windows = null
data = []

function listViewOnData(sender, item)
{
	var i = item.index
	var window = data[i]
	item.text = window.text
	item.subItems(0) = window.className
}

function enumWindows()
{
    listView.clear()
	windows = wsoExt.EnumWindows()
	data = []
	for (i = 0; i<windows.Count; i++)
	{
		item = windows.item(i)
		window = {}
		window.text = item.Text
		window.className = item.className
		data[data.length] = window
	}
    listView.count = windows.count
	form.text = windows.count
}

function closeSelectedWindow()
{
	var index = listView.itemIndex
	if (index != -1)
	{
		var window = windows.item(index)
		wsoExt.postMessage(window, WM_CLOSE = 0x0010, 0, 0)
	}
}

wso.run()
