
var fso = new ActiveXObject("Scripting.FileSystemObject")
var file = fso.createTextFile(startupDir() + "DesignerCl.js")

var text = "this.uses = function(s){}";

file.writeLine(text)

function startupDir() {
    var s = WScript.ScriptFullName;
    s = s.substring(0, s.lastIndexOf("\\") + 1);
    return s;
};

if (!this.uses) {
    uses = function (s) {
        var text = fso.openTextFile(startupDir() + s, 1, false).readAll()
        file.writeLine(text)
    }
}

uses("External/es5-shim-4.1.9/es5-shim.js")
uses("Design/Core/Namespace.js")
uses("Design/Core/Library.js")
uses("Design/Core/LibraryEx.js")
uses("Design/Core/Files.js")
uses("Design/Core/Handlers.js")
uses("Design/Core/Console.js")
uses("Design/Core/Localization.js")
uses("Design/Core/Global.js")
uses("Design/Core/Help.js")
uses("Design/DesignerPropertyEditor.js")
uses("Design/ToolBox.js")
uses("Design/Details/ListBoxDetails.js")
uses("Design/Details/ActionDetails.js")
uses("Design/Details/TreeViewDetails.js")
uses("Design/Details/HeaderDetails.js")
uses("Design/Details/ListViewDetails.js")
uses("Design/Details/StatusBarDetails.js")
uses("Design/Documents/Document.js")
uses("Design/Documents/FormDocument.js")
uses("Design/Documents/TextDocument.js")
uses("Design/Documents/ImageDocument.js")
uses("Design/Config.js")
uses("Design/Docking.js")
uses("Design/Layout.js")
uses("Design/Images.js")
uses("Design/SolutionEnum.js")
uses("Design/SolutionBrowser.js")
uses("Design/Solution.js")
uses("Design/NewScript.js")
uses("Design/Documents.js")
uses("Design/Console.js")
uses("Design/Actions/ViewAsText.js")

uses("Designer.js")

file.close()


