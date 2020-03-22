
this.wso = new ActiveXObject("Scripting.WindowSystemObject")
this.wsoExt = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
this.fileManager = wsoExt.createFileManager()
this.fso = new ActiveXObject("Scripting.FileSystemObject")

String.prototype.equalsFileNameEx = function (value) {
    return fileManager.getCanonicalFileName(this) == fileManager.getCanonicalFileName(value)
}

this.tracing = false


