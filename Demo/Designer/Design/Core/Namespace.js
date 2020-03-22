

function define(name, object) {

    var strs = name.split(".")

    var current = this

    for (i = 0; i < strs.length; i++) {
        var item = strs[i]

        if (i == (strs.length - 1)) {
            current[item] = object
        } else
        if (!current[item]) {
             current[item] = {}
        }
        current = current[item]        
    }
        
}

this.define = define


