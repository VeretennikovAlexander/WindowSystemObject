


var TextDocument = function () {

    TextDocument.supertype.constructor.call(this)

    this.needCheckModified = function () {
        var document = this
        var text = document.edit.text
        if (text != document.text) {
            return true
        }
        return false
    }

    this.getText = function () {
        return this.edit.text
    }
}

TextDocument.prototype = new Document()
TextDocument.supertype = Document.prototype
TextDocument.prototype.filter = "Text Document (*.txt)|*.txt"
TextDocument.prototype.unicode = false

this.TextDocument = TextDocument
