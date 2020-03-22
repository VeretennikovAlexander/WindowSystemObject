
this.wsoHelp = function () {
    var shell = new ActiveXObject("WScript.Shell")
    var fso = new ActiveXObject("Scripting.FileSystemObject")

    var dir = startupDir()
    var wsoHelpFile = ""

    for (i = 0; i < 5; i++) {        
        var file = dir + "wso.chm"

        if (fso.fileExists(file)) {
            wsoHelpFile = file
            break
        }

        file = dir + "wso_en.chm"

        if (fso.fileExists(file)) {
            wsoHelpFile = file
            break
        }

        dir = dir.slice(0, dir.length - 1).extractFilePath()
    }


    if (!fso.fileExists(wsoHelpFile)) {
        f.MessageBox("Help is not installed", "", o.translate("MB_OK | MB_ICONERROR"))
        return
    }

    //console.log("Running help file: " + wsoHelpFile)

    shell.run("\"" + wsoHelpFile + "\"")
}

this.initHelpMenu = function (menu) {
    var aboutMenuItem = menu.add("About")
    aboutMenuItem.onExecute = function () {
        wso.about()
    }

    var helpMenuItem = menu.add("Help", "F1")
    helpMenuItem.onExecute = wsoHelp
}

