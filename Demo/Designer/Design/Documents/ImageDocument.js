


var ImageDocument = function () {

    ImageDocument.supertype.constructor.call(this)

    this.needCheckModified = function () {
        return false
    }

    this.checkModified = function () {
        return true
    }

    this.getText = function () {
        throw "Not implemented"
    }

    this.save = function () {
        throw "Not implemented"
    }
}

ImageDocument.prototype = new Document()
ImageDocument.supertype = Document.prototype
ImageDocument.prototype.filter = ""
ImageDocument.prototype.backupCount = 5

this.ImageDocument = ImageDocument


