
var Document = function () {

    var moveBackupItem = function (backupList, i) {
        var str = backupList[i]

        if (fso.fileExists(str)) {

            if (i >= (backupList.length - 1)) {

                console.log("Deleting file: " + str)

                fso.deleteFile(str)
            } else {
                moveBackupItem(backupList, i + 1)
                var newStr = backupList[i + 1]

                console.log("Moving file: " + str + " -> " + newStr)

                fso.moveFile(str, newStr)
            }
        }
    }

    var makeBackup = function () {
        if (fso.fileExists(this.fileName)) {
            
            console.log("File " + this.fileName + " already exists, move to backup")

            var backupList = [this.fileName]
            for (var i = 1; i <= this.backupCount; i++) {
                var str = this.fileName + "~" + i
                backupList.push(str)
            }
            moveBackupItem(backupList, 0)
        } else {

            console.log("File " + this.fileName + " does not exists")
        }
    }

    var saveToFile = function (text) {
        console.log(["Saving document: ", this.fileName, this.unicode ? ", unicode" : ""])

        makeBackup.call(this)

        var fso = new ActiveXObject("Scripting.FileSystemObject")
        var file = fso.createTextFile(this.fileName, true, this.unicode)
        file.write(text)
        file.close()

        this.text = text

        console.log(["Saved document: ", this.fileName, this.unicode ? ", unicode" : ""])
    }

    this.save = function () {
        var text = this.getText()

        if (this.fileName.length == 0) {
            var saveDialog = f.createSaveDialog()
            saveDialog.filter = this.filter
            if (saveDialog.execute()) {
                this.fileName = saveDialog.fileName
            } else {
                return false
            }
        }

        saveToFile.call(this, text)
        return true
    }

    this.open = function () {
        var openDialog = f.createOpenDialog()
        openDialog.filter = this.filter
        if (openDialog.execute()) {
            return this.load(openDialog.fileName)
        }
    }

    this.load = function (value) {
        console.log(["Loading document: ", value, this.unicode ? ", unicode" : ""])

        var fso = new ActiveXObject("Scripting.FileSystemObject")
        var forReading = 1
        var create = false
        var format = this.unicode ? -1 : -2 //-2, Opens the file using the system default., -1, Opens the file as Unicode.
        var file = fso.openTextFile(value,
            forReading,
            create,
            format)

        if (file.atEndOfStream) {
            this.text = ""
        } else {
            this.text = file.readAll()
        }

        this.fileName = value

        return this.text
    }

    this.needCheckModified = function () {
        throw "Abstract metnod call"
    }

    this.checkModified = function (documentControl, hideNoButton) {

        var document = this

        if (this.needCheckModified()) {
            var message = "Save changes to the following items:\n"
            message += documentControl.text
            message += "?"
            var flags

            if (hideNoButton) {
                flags = o.translate("MB_OKCANCEL")
            } else {
                flags = o.translate("MB_YESNOCANCEL")
            }

            var result = f.MessageBox(message, "", flags | o.translate("MB_ICONQUESTION"))
            if (result == o.translate("IDCANCEL")) {
                return false
            } else
                if ((result == o.translate("IDYES")) || (result == o.translate("IDOK"))) {
                    if (!document.save()) {
                        return false
                    }
                }

        }

        return true
    }

    this.getText = function () {
        throw "Abstract method"
    }

}

Document.prototype = {
    fileName: "",
    filter : "",
    text : "",
    isDocument : true,
    unicode: true,
    backupCount : 1
}

this.Document = Document
