
String.prototype.extractFileName = function () {
    var me = this
    for (var i = me.length - 1; i >= 0; i--) {
        var ch = me.charAt(i)
        if ((ch == '\\') || (ch == '/'))
	    {
	        return me.slice(i + 1);
	    };
    }
	return me
}


String.prototype.extractFileExt = function() {
	var me = this
    var result = ""

	for (var i = me.length - 1; i >= 0; i--) 	{
        var ch = me.charAt(i)
		if ((ch == '\\') || (ch == '/') || (ch == ':') || (ch == '.'))
		{
			if (ch == '.')
            {
				result = me.slice(i)
            }

			break
		}		
	}

	return result;
}


String.prototype.extractFilePath = function() {
    var me = this
    var result = ""

	for (var i = me.length - 1; i >= 0; i--)	{
        var ch = me.charAt(i)
		if ((ch == '\\') || (ch == '/') || (ch == ':'))
		{
			result = me.slice(0, i + 1)
            if (ch == ':')
            {
                result += '\\'
            }
			break
		}
	}

	return result	
}

String.prototype.readFile = function () {
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var file = fso.openTextFile(this)
    if (file.atEndOfStream) {
        return ""
    }
    return file.readAll()
}


String.prototype.equalsFileName = function (value) {
    return this.toUpperCase() == value.toUpperCase()
}

String.prototype.isRelativePath = function () {
    if (this.length <= 2) {
        return true
    }
    if (this.charAt(1) == ':') {
        return false
    }
    return true
}
