


var FormDocument = function () {

    FormDocument.supertype.constructor.call(this)

    this.needCheckModified = function () {
        var document = this
        var text = document.designFrame.design.save()
        if (text != document.text) {
            return true
        }
        return false
    }
    
    this.getText = function () {
        return this.designFrame.design.save()
    }
}

FormDocument.prototype = new Document()
FormDocument.supertype = Document.prototype
FormDocument.prototype.filter = "WSO Form (*.wfm)|*.wfm"
FormDocument.prototype.backupCount = 5

this.FormDocument = FormDocument

