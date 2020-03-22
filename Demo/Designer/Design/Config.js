

this.configurationFolder = function() {
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var temporaryFolder = 2
    var path = fso.GetSpecialFolder(temporaryFolder) + "\\WSOExamples"
    if (!fso.FolderExists(path))
        fso.CreateFolder(path)
    return path + "\\"
}