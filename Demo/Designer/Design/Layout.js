

this.layoutFile = function() {
    return configurationFolder() + "Designer.txt"
}


this.layoutLockFile = function () {
    return layoutFile() + ".lock"
}


this.saveLayout = function () {
    var fileName = layoutFile()
    console.log("Saving layout: "+ fileName)

    var text = o.saveLayout()
    var file = fso.createTextFile(fileName, true, true)
    file.writeLine(text)
    file.close()

    console.log("Layout has been saved: " + file)
}


this.loadLayout = function (warningIfNoData) {
    var fileName = layoutFile()
    var lockFileName = layoutLockFile()
    console.log("Loading layout: " + fileName)

    if (fso.fileExists(lockFileName)) {
        if (fso.fileExists(fileName)) {

            console.log("Deleting file: " + fileName)
            fso.deleteFile(fileName)

            console.log("Deleting file: " + lockFileName)
            fso.deleteFile(lockFileName)

            console.log("An layout loading error detected, the layout file has been discarded")
            return
        }
    }

    if (!fso.fileExists(fileName)) {
        if (warningIfNoData) {
            f.MessageBox("File " + fileName + " does not exists")
        }
        return
    }

    console.log("Placing lock: " + lockFileName)
    var lockFile = fso.createTextFile(lockFileName, true, true)
    lockFile.close()

    var forReading = 1
    var create = false
    var format = -1 //Opens the file as Unicode.
    var file = fso.openTextFile(fileName,
            forReading,
            create,
            format)
    var text = file.readAll()
    file.Close()
    o.loadLayout(text)

    console.log("Deleting lock: " + lockFileName)
    fso.deleteFile(lockFileName)

    console.log("Layout has been loaded: " + file)
}

this.clearLayout = function () {
    var text = o.saveLayout()
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var file = layoutFile()

    console.log("Deleting file: " + file)
    fso.deleteFile(file)
}