wso = new ActiveXObject("Scripting.WindowSystemObject")

f = wso.createForm(0, 0, 0, 0)

fileName = startupDir() + "$(context.formFileName.replace(/\\/g,'\\\\'))"

f.design.open(fileName)

f.centerControl()

/*
    To set a control properties get the control by its Id.

    f.get("Edit1").Text = "Test"
*/

f.show()

wso.run()

function startupDir() {
    var s = WScript.scriptFullName;
    s = s.substring(0, s.lastIndexOf("\\") + 1);
    return s;
};

