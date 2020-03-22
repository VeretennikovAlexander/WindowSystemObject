
var Collection = function(value) {

    var object = value

    this.count = function () {
        return object.count
    }

    this.each = function (func, scope) {
        
        var result

        for (var i = 0; i < object.count; i++) {
            var item = object.item(i)
            result = func.call(scope || item, item, i)

            if (result === false) {
                return false
            }
        }
    }

    this.indexOf = function (item) {

        for (var j = 0; j < object.count; j++) {
            var value = object.item(j)
            if (value == current) {
                return j
            }
        }

        return -1
    }

    this.visit = function (func, scope) {

        var result = true
       
        result = func.call(scope || value, value)

        result &= this.each(function (item) {        
            return new Collection(item).visit(func, scope)
        })

        return result
    }
}

this.Collection = Collection

var ControlsCollection = function (value) {

    ControlsCollection.supertype.constructor.call(this,value.controls)

    this.visit = function (func, scope) {

        var result = true

        result = func.call(scope || value, value)
        
        if (value.controls) {
            result &= this.each(function (item) {
                return new ControlsCollection(item).visit(func, scope)
            })
        }

        return result
    }

    
}

ControlsCollection.prototype = new Collection()
ControlsCollection.supertype = Collection.prototype

this.ControlsCollection = ControlsCollection

this.$ = function (value) {
    var controls = null

    try {
        controls = value.controls
    }
    catch (e) {
    }

    if (controls)
        return new ControlsCollection(value)
    return new Collection(value)
}
