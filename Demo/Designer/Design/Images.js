

this.iconExtensions = [".ico"]
this.imageExtensions = [".bmp",".wmf",".emf",".ico",".jpg",".jpeg",".gif"]

this.getFilterFromArray = function (value, name) {
    var exts = value.map(function (item) {
        return "*" + item
    }).join(";")

    var result = name
    result += " ("
    result += exts
    result += ")"
    result += "|"
    result += exts
    return result
}

String.prototype.fileNameInFilter = function(value){
    var ext = this.extractFileExt().toLowerCase()    
    return value.includes(ext)
}

this.getIconsFilter = function () {
    return getFilterFromArray(iconExtensions, "Icons")
}

this.getImagesFilter = function () {
    return getFilterFromArray(imageExtensions, "Images")
}

