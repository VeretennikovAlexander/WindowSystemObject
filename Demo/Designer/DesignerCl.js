this.uses = function(s){}
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally. This also holds a reference to known-good
// functions.
var $Array = Array;
var ArrayPrototype = $Array.prototype;
var $Object = Object;
var ObjectPrototype = $Object.prototype;
var FunctionPrototype = Function.prototype;
var $String = String;
var StringPrototype = $String.prototype;
var $Number = Number;
var NumberPrototype = $Number.prototype;
var array_slice = ArrayPrototype.slice;
var array_splice = ArrayPrototype.splice;
var array_push = ArrayPrototype.push;
var array_unshift = ArrayPrototype.unshift;
var array_concat = ArrayPrototype.concat;
var call = FunctionPrototype.call;
var max = Math.max;
var min = Math.min;

// Having a toString local variable name breaks in Opera so use to_string.
var to_string = ObjectPrototype.toString;

var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };

/* inlined from http://npmjs.com/define-properties */
var defineProperties = (function (has) {
  var supportsDescriptors = $Object.defineProperty && (function () {
      try {
          var obj = {};
          $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
          for (var _ in obj) { return false; }
          return obj.x === obj;
      } catch (e) { /* this is ES3 */
          return false;
      }
  }());

  // Define configurable, writable and non-enumerable props
  // if they don't exist.
  var defineProperty;
  if (supportsDescriptors) {
      defineProperty = function (object, name, method, forceAssign) {
          if (!forceAssign && (name in object)) { return; }
          $Object.defineProperty(object, name, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: method
          });
      };
  } else {
      defineProperty = function (object, name, method, forceAssign) {
          if (!forceAssign && (name in object)) { return; }
          object[name] = method;
      };
  }
  return function defineProperties(object, map, forceAssign) {
      for (var name in map) {
          if (has.call(map, name)) {
            defineProperty(object, name, map[name], forceAssign);
          }
      }
  };
}(ObjectPrototype.hasOwnProperty));

//
// Util
// ======
//

/* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
var isPrimitive = function isPrimitive(input) {
    var type = typeof input;
    return input === null || (type !== 'object' && type !== 'function');
};

var ES = {
    // ES5 9.4
    // http://es5.github.com/#x9.4
    // http://jsperf.com/to-integer
    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
    ToInteger: function ToInteger(num) {
        var n = +num;
        if (n !== n) { // isNaN
            n = 0;
        } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
        return n;
    },

    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
    ToPrimitive: function ToPrimitive(input) {
        var val, valueOf, toStr;
        if (isPrimitive(input)) {
            return input;
        }
        valueOf = input.valueOf;
        if (isCallable(valueOf)) {
            val = valueOf.call(input);
            if (isPrimitive(val)) {
                return val;
            }
        }
        toStr = input.toString;
        if (isCallable(toStr)) {
            val = toStr.call(input);
            if (isPrimitive(val)) {
                return val;
            }
        }
        throw new TypeError();
    },

    // ES5 9.9
    // http://es5.github.com/#x9.9
    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
    ToObject: function (o) {
        /* jshint eqnull: true */
        if (o == null) { // this matches both null and undefined
            throw new TypeError("can't convert " + o + ' to object');
        }
        return $Object(o);
    },

    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
    ToUint32: function ToUint32(x) {
        return x >>> 0;
    }
};

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

var Empty = function Empty() {};

defineProperties(FunctionPrototype, {
    bind: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isCallable(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var bound;
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    array_concat.call(args, array_slice.call(arguments))
                );
                if ($Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    array_concat.call(args, array_slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            array_push.call(boundArgs, '$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// us it in defining shortcuts.
var owns = call.bind(ObjectPrototype.hasOwnProperty);
var toStr = call.bind(ObjectPrototype.toString);
var strSlice = call.bind(StringPrototype.slice);
var strSplit = call.bind(StringPrototype.split);

//
// Array
// =====
//

var isArray = $Array.isArray || function isArray(obj) {
    return toStr(obj) === '[object Array]';
};

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) === undefined but should be "1"
var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
defineProperties(ArrayPrototype, {
    unshift: function () {
        array_unshift.apply(this, arguments);
        return this.length;
    }
}, hasUnshiftReturnValueBug);

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties($Array, { isArray: isArray });

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var boxedString = $Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
        });

        method.call([1], function () {
            'use strict';

            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};

defineProperties(ArrayPrototype, {
    forEach: function forEach(callbackfn /*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var i = -1;
        var length = self.length >>> 0;
        var T;
        if (arguments.length > 1) {
          T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.forEach callback must be a function');
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                if (typeof T !== 'undefined') {
                    callbackfn.call(T, self[i], i, object);
                } else {
                    callbackfn(self[i], i, object);
                }
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
defineProperties(ArrayPrototype, {
    map: function map(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;
        var result = $Array(length);
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.map callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                if (typeof T !== 'undefined') {
                    result[i] = callbackfn.call(T, self[i], i, object);
                } else {
                    result[i] = callbackfn(self[i], i, object);
                }
            }
        }
        return result;
    }
}, !properlyBoxesContext(ArrayPrototype.map));

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
defineProperties(ArrayPrototype, {
    filter: function filter(callbackfn /*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;
        var result = [];
        var value;
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.filter callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                value = self[i];
                if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
                    array_push.call(result, value);
                }
            }
        }
        return result;
    }
}, !properlyBoxesContext(ArrayPrototype.filter));

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
defineProperties(ArrayPrototype, {
    every: function every(callbackfn /*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.every callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                return false;
            }
        }
        return true;
    }
}, !properlyBoxesContext(ArrayPrototype.every));

// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
defineProperties(ArrayPrototype, {
    some: function some(callbackfn/*, thisArg */) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.some callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                return true;
            }
        }
        return false;
    }
}, !properlyBoxesContext(ArrayPrototype.some));

// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
var reduceCoercesToObject = false;
if (ArrayPrototype.reduce) {
    reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) { return list; }) === 'object';
}
defineProperties(ArrayPrototype, {
    reduce: function reduce(callbackfn /*, initialValue*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.reduce callback must be a function');
        }

        // no value to return if no initial value and an empty array
        if (length === 0 && arguments.length === 1) {
            throw new TypeError('reduce of empty array with no initial value');
        }

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length) {
                    throw new TypeError('reduce of empty array with no initial value');
                }
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self) {
                result = callbackfn(result, self[i], i, object);
            }
        }

        return result;
    }
}, !reduceCoercesToObject);

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
var reduceRightCoercesToObject = false;
if (ArrayPrototype.reduceRight) {
    reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) { return list; }) === 'object';
}
defineProperties(ArrayPrototype, {
    reduceRight: function reduceRight(callbackfn/*, initial*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.reduceRight callback must be a function');
        }

        // no value to return if no initial value, empty array
        if (length === 0 && arguments.length === 1) {
            throw new TypeError('reduceRight of empty array with no initial value');
        }

        var result;
        var i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0) {
                    throw new TypeError('reduceRight of empty array with no initial value');
                }
            } while (true);
        }

        if (i < 0) {
            return result;
        }

        do {
            if (i in self) {
                result = callbackfn(result, self[i], i, object);
            }
        } while (i--);

        return result;
    }
}, !reduceRightCoercesToObject);

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(searchElement /*, fromIndex */) {
        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
        var length = self.length >>> 0;

        if (length === 0) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = ES.ToInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === searchElement) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
defineProperties(ArrayPrototype, {
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
        var length = self.length >>> 0;

        if (length === 0) {
            return -1;
        }
        var i = length - 1;
        if (arguments.length > 1) {
            i = min(i, ES.ToInteger(arguments[1]));
        }
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && searchElement === self[i]) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2LastIndexOfBug);

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
var spliceNoopReturnsEmptyArray = (function () {
    var a = [1, 2];
    var result = a.splice();
    return a.length === 2 && isArray(result) && result.length === 0;
}());
defineProperties(ArrayPrototype, {
    // Safari 5.0 bug where .splice() returns undefined
    splice: function splice(start, deleteCount) {
        if (arguments.length === 0) {
            return [];
        } else {
            return array_splice.apply(this, arguments);
        }
    }
}, !spliceNoopReturnsEmptyArray);

var spliceWorksWithEmptyObject = (function () {
    var obj = {};
    ArrayPrototype.splice.call(obj, 0, 0, 1);
    return obj.length === 1;
}());
defineProperties(ArrayPrototype, {
    splice: function splice(start, deleteCount) {
        if (arguments.length === 0) { return []; }
        var args = arguments;
        this.length = max(ES.ToInteger(this.length), 0);
        if (arguments.length > 0 && typeof deleteCount !== 'number') {
            args = array_slice.call(arguments);
            if (args.length < 2) {
                array_push.call(args, this.length - start);
            } else {
                args[1] = ES.ToInteger(deleteCount);
            }
        }
        return array_splice.apply(this, args);
    }
}, !spliceWorksWithEmptyObject);
var spliceWorksWithLargeSparseArrays = (function () {
    // Per https://github.com/es-shims/es5-shim/issues/295
    // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
    var arr = new $Array(1e5);
    // note: the index MUST be 8 or larger or the test will false pass
    arr[8] = 'x';
    arr.splice(1, 1);
    // note: this test must be defined *after* the indexOf shim
    // per https://github.com/es-shims/es5-shim/issues/313
    return arr.indexOf('x') === 7;
}());
var spliceWorksWithSmallSparseArrays = (function () {
    // Per https://github.com/es-shims/es5-shim/issues/295
    // Opera 12.15 breaks on this, no idea why.
    var n = 256;
    var arr = [];
    arr[n] = 'a';
    arr.splice(n + 1, 0, 'b');
    return arr[n] === 'a';
}());
defineProperties(ArrayPrototype, {
    splice: function splice(start, deleteCount) {
        var O = ES.ToObject(this);
        var A = [];
        var len = ES.ToUint32(O.length);
        var relativeStart = ES.ToInteger(start);
        var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
        var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

        var k = 0;
        var from;
        while (k < actualDeleteCount) {
            from = $String(actualStart + k);
            if (owns(O, from)) {
                A[k] = O[from];
            }
            k += 1;
        }

        var items = array_slice.call(arguments, 2);
        var itemCount = items.length;
        var to;
        if (itemCount < actualDeleteCount) {
            k = actualStart;
            while (k < (len - actualDeleteCount)) {
                from = $String(k + actualDeleteCount);
                to = $String(k + itemCount);
                if (owns(O, from)) {
                    O[to] = O[from];
                } else {
                    delete O[to];
                }
                k += 1;
            }
            k = len;
            while (k > (len - actualDeleteCount + itemCount)) {
                delete O[k - 1];
                k -= 1;
            }
        } else if (itemCount > actualDeleteCount) {
            k = len - actualDeleteCount;
            while (k > actualStart) {
                from = $String(k + actualDeleteCount - 1);
                to = $String(k + itemCount - 1);
                if (owns(O, from)) {
                    O[to] = O[from];
                } else {
                    delete O[to];
                }
                k -= 1;
            }
        }
        k = actualStart;
        for (var i = 0; i < items.length; ++i) {
            O[k] = items[i];
            k += 1;
        }
        O.length = len - actualDeleteCount + itemCount;

        return A;
    }
}, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

//
// Object
// ======
//

// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14

// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
var hasDontEnumBug = !({ 'toString': null }).propertyIsEnumerable('toString');
var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
var hasStringEnumBug = !owns('x', '0');
var equalsConstructorPrototype = function (o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
};
var blacklistedKeys = {
    $window: true,
    $console: true,
    $parent: true,
    $self: true,
    $frames: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true
};
var hasAutomationEqualityBug = (function () {
    /* globals window */
    if (typeof window === 'undefined') { return false; }
    for (var k in window) {
        if (!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
            try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        }
    }
    return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (object) {
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) { return equalsConstructorPrototype(object); }
    try {
        return equalsConstructorPrototype(object);
    } catch (e) {
        return false;
    }
};
var dontEnums = [
    'toString',
    'toLocaleString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'constructor'
];
var dontEnumsLength = dontEnums.length;

var isArguments = function isArguments(value) {
    var str = toStr(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) {
        isArgs = !isArray(value) &&
          value !== null &&
          typeof value === 'object' &&
          typeof value.length === 'number' &&
          value.length >= 0 &&
          isCallable(value.callee);
    }
    return isArgs;
};

defineProperties($Object, {
    keys: function keys(object) {
        var isFn = isCallable(object);
        var isArgs = isArguments(object);
        var isObject = object !== null && typeof object === 'object';
        var isStr = isObject && isString(object);

        if (!isObject && !isFn && !isArgs) {
            throw new TypeError('Object.keys called on a non-object');
        }

        var theKeys = [];
        var skipProto = hasProtoEnumBug && isFn;
        if ((isStr && hasStringEnumBug) || isArgs) {
            for (var i = 0; i < object.length; ++i) {
                array_push.call(theKeys, $String(i));
            }
        }

        if (!isArgs) {
            for (var name in object) {
                if (!(skipProto && name === 'prototype') && owns(object, name)) {
                    array_push.call(theKeys, $String(name));
                }
            }
        }

        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for (var j = 0; j < dontEnumsLength; j++) {
                var dontEnum = dontEnums[j];
                if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
                    array_push.call(theKeys, dontEnum);
                }
            }
        }
        return theKeys;
    }
});

var keysWorksWithArguments = $Object.keys && (function () {
    // Safari 5.0 bug
    return $Object.keys(arguments).length === 2;
}(1, 2));
var originalKeys = $Object.keys;
defineProperties($Object, {
    keys: function keys(object) {
        if (isArguments(object)) {
            return originalKeys(array_slice.call(object));
        } else {
            return originalKeys(object);
        }
    }
}, !keysWorksWithArguments);

//
// Date
// ====
//

// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var negativeDate = -62198755200000;
var negativeYearString = '-000001';
var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

defineProperties(Date.prototype, {
    toISOString: function toISOString() {
        var result, length, value, year, month;
        if (!isFinite(this)) {
            throw new RangeError('Date.prototype.toISOString called on non-finite value.');
        }

        year = this.getUTCFullYear();

        month = this.getUTCMonth();
        // see https://github.com/es-shims/es5-shim/issues/111
        year += Math.floor(month / 12);
        month = (month % 12 + 12) % 12;

        // the date time string format is specified in 15.9.1.15.
        result = [month + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
        year = (
            (year < 0 ? '-' : (year > 9999 ? '+' : '')) +
            strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
        );

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two
            // digits.
            if (value < 10) {
                result[length] = '0' + value;
            }
        }
        // pad milliseconds to have three digits.
        return (
            year + '-' + array_slice.call(result, 0, 2).join('-') +
            'T' + array_slice.call(result, 2).join(':') + '.' +
            strSlice('000' + this.getUTCMilliseconds(), -3) + 'Z'
        );
    }
}, hasNegativeDateBug || hasSafari51DateBug);

// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var dateToJSONIsSupported = (function () {
    try {
        return Date.prototype.toJSON &&
            new Date(NaN).toJSON() === null &&
            new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
            Date.prototype.toJSON.call({ // generic
                toISOString: function () { return true; }
            });
    } catch (e) {
        return false;
    }
}());
if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be ES.ToPrimitive(O, hint Number).
        var O = $Object(this);
        var tv = ES.ToPrimitive(O);
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === 'number' && !isFinite(tv)) {
            return null;
        }
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        var toISO = O.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (!isCallable(toISO)) {
            throw new TypeError('toISOString property is not callable');
        }
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(O);

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
if (!Date.parse || doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    /* global Date: true */
    /* eslint-disable no-undef */
    Date = (function (NativeDate) {
    /* eslint-enable no-undef */
        // Date.length === 7
        var DateShim = function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            var date;
            if (this instanceof NativeDate) {
                date = length === 1 && $String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(DateShim.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, s) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
            } else {
                date = NativeDate.apply(this, arguments);
            }
            // Prevent mixups with unfixed Date object
            defineProperties(date, { constructor: DateShim }, true);
            return date;
        };

        // 15.9.1.15 Date Time String Format.
        var isoDateExpression = new RegExp('^' +
            '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
                                      // 6-digit extended year
            '(?:-(\\d{2})' + // optional month capture
            '(?:-(\\d{2})' + // optional day capture
            '(?:' + // capture hours:minutes:seconds.milliseconds
                'T(\\d{2})' + // hours capture
                ':(\\d{2})' + // minutes capture
                '(?:' + // optional :seconds.milliseconds
                    ':(\\d{2})' + // seconds capture
                    '(?:(\\.\\d{1,}))?' + // milliseconds capture
                ')?' +
            '(' + // capture UTC offset component
                'Z|' + // UTC capture
                '(?:' + // offset specifier +/-hours:minutes
                    '([-+])' + // sign capture
                    '(\\d{2})' + // hours offset capture
                    ':(\\d{2})' + // minutes offset capture
                ')' +
            ')?)?)?)?' +
        '$');

        var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

        var dayFromMonth = function dayFromMonth(year, month) {
            var t = month > 1 ? 1 : 0;
            return (
                months[month] +
                Math.floor((year - 1969 + t) / 4) -
                Math.floor((year - 1901 + t) / 100) +
                Math.floor((year - 1601 + t) / 400) +
                365 * (year - 1970)
            );
        };

        var toUTC = function toUTC(t) {
            return $Number(new NativeDate(1970, 0, 1, 0, 0, 0, t));
        };

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate) {
            if (owns(NativeDate, key)) {
                DateShim[key] = NativeDate[key];
            }
        }

        // Copy "native" methods explicitly; they may be non-enumerable
        defineProperties(DateShim, {
            now: NativeDate.now,
            UTC: NativeDate.UTC
        }, true);
        DateShim.prototype = NativeDate.prototype;
        defineProperties(DateShim.prototype, {
            constructor: DateShim
        }, true);

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        var parseShim = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                // parse months, days, hours, minutes, seconds, and milliseconds
                // provide default values if necessary
                // parse the UTC offset component
                var year = $Number(match[1]),
                    month = $Number(match[2] || 1) - 1,
                    day = $Number(match[3] || 1) - 1,
                    hour = $Number(match[4] || 0),
                    minute = $Number(match[5] || 0),
                    second = $Number(match[6] || 0),
                    millisecond = Math.floor($Number(match[7] || 0) * 1000),
                    // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    isLocalTime = Boolean(match[4] && !match[8]),
                    signOffset = match[9] === '-' ? 1 : -1,
                    hourOffset = $Number(match[10] || 0),
                    minuteOffset = $Number(match[11] || 0),
                    result;
                if (
                    hour < (
                        minute > 0 || second > 0 || millisecond > 0 ?
                        24 : 25
                    ) &&
                    minute < 60 && second < 60 && millisecond < 1000 &&
                    month > -1 && month < 12 && hourOffset < 24 &&
                    minuteOffset < 60 && // detect invalid offsets
                    day > -1 &&
                    day < (
                        dayFromMonth(year, month + 1) -
                        dayFromMonth(year, month)
                    )
                ) {
                    result = (
                        (dayFromMonth(year, month) + day) * 24 +
                        hour +
                        hourOffset * signOffset
                    ) * 60;
                    result = (
                        (result + minute + minuteOffset * signOffset) * 60 +
                        second
                    ) * 1000 + millisecond;
                    if (isLocalTime) {
                        result = toUTC(result);
                    }
                    if (-8.64e15 <= result && result <= 8.64e15) {
                        return result;
                    }
                }
                return NaN;
            }
            return NativeDate.parse.apply(this, arguments);
        };
        defineProperties(DateShim, { parse: parseShim });

        return DateShim;
    }(Date));
    /* global Date: false */
}

// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

//
// Number
// ======
//

// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
var hasToFixedBugs = NumberPrototype.toFixed && (
  (0.00008).toFixed(3) !== '0.000' ||
  (0.9).toFixed(0) !== '1' ||
  (1.255).toFixed(2) !== '1.25' ||
  (1000000000000000128).toFixed(0) !== '1000000000000000128'
);

var toFixedHelpers = {
  base: 1e7,
  size: 6,
  data: [0, 0, 0, 0, 0, 0],
  multiply: function multiply(n, c) {
      var i = -1;
      var c2 = c;
      while (++i < toFixedHelpers.size) {
          c2 += n * toFixedHelpers.data[i];
          toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
          c2 = Math.floor(c2 / toFixedHelpers.base);
      }
  },
  divide: function divide(n) {
      var i = toFixedHelpers.size, c = 0;
      while (--i >= 0) {
          c += toFixedHelpers.data[i];
          toFixedHelpers.data[i] = Math.floor(c / n);
          c = (c % n) * toFixedHelpers.base;
      }
  },
  numToString: function numToString() {
      var i = toFixedHelpers.size;
      var s = '';
      while (--i >= 0) {
          if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
              var t = $String(toFixedHelpers.data[i]);
              if (s === '') {
                  s = t;
              } else {
                  s += strSlice('0000000', 0, 7 - t.length) + t;
              }
          }
      }
      return s;
  },
  pow: function pow(x, n, acc) {
      return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
  },
  log: function log(x) {
      var n = 0;
      var x2 = x;
      while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
      }
      while (x2 >= 2) {
          n += 1;
          x2 /= 2;
      }
      return n;
  }
};

defineProperties(NumberPrototype, {
    toFixed: function toFixed(fractionDigits) {
        var f, x, s, m, e, z, j, k;

        // Test for NaN and round fractionDigits down
        f = $Number(fractionDigits);
        f = f !== f ? 0 : Math.floor(f);

        if (f < 0 || f > 20) {
            throw new RangeError('Number.toFixed called with invalid number of decimals');
        }

        x = $Number(this);

        // Test for NaN
        if (x !== x) {
            return 'NaN';
        }

        // If it is too big or small, return the string value of the number
        if (x <= -1e21 || x >= 1e21) {
            return $String(x);
        }

        s = '';

        if (x < 0) {
            s = '-';
            x = -x;
        }

        m = '0';

        if (x > 1e-21) {
            // 1e-21 < x < 1e21
            // -70 < log2(x) < 70
            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
            z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
            z *= 0x10000000000000; // Math.pow(2, 52);
            e = 52 - e;

            // -18 < e < 122
            // x = z / 2 ^ e
            if (e > 0) {
                toFixedHelpers.multiply(0, z);
                j = f;

                while (j >= 7) {
                    toFixedHelpers.multiply(1e7, 0);
                    j -= 7;
                }

                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
                j = e - 1;

                while (j >= 23) {
                    toFixedHelpers.divide(1 << 23);
                    j -= 23;
                }

                toFixedHelpers.divide(1 << j);
                toFixedHelpers.multiply(1, 1);
                toFixedHelpers.divide(2);
                m = toFixedHelpers.numToString();
            } else {
                toFixedHelpers.multiply(0, z);
                toFixedHelpers.multiply(1 << (-e), 0);
                m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
            }
        }

        if (f > 0) {
            k = m.length;

            if (k <= f) {
                m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
            } else {
                m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
            }
        } else {
            m = s + m;
        }

        return m;
    }
}, hasToFixedBugs);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === 't' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group

        StringPrototype.split = function (separator, limit) {
            var string = this;
            if (typeof separator === 'undefined' && limit === 0) {
                return [];
            }

            // If `separator` is not a regex, use native split
            if (!isRegex(separator)) {
                return strSplit(this, separator, limit);
            }

            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline ? 'm' : '') +
                        (separator.unicode ? 'u' : '') + // in ES6
                        (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength;
            var separatorCopy = new RegExp(separator.source, flags + 'g');
            string += ''; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            var splitLimit = typeof limit === 'undefined' ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                ES.ToUint32(limit);
            match = separatorCopy.exec(string);
            while (match) {
                // `separatorCopy.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    array_push.call(output, strSlice(string, lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        /* eslint-disable no-loop-func */
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (typeof arguments[i] === 'undefined') {
                                    match[i] = void 0;
                                }
                            }
                        });
                        /* eslint-enable no-loop-func */
                    }
                    if (match.length > 1 && match.index < string.length) {
                        array_push.apply(output, array_slice.call(match, 1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= splitLimit) {
                        break;
                    }
                }
                if (separatorCopy.lastIndex === match.index) {
                    separatorCopy.lastIndex++; // Avoid an infinite loop
                }
                match = separatorCopy.exec(string);
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separatorCopy.test('')) {
                    array_push.call(output, '');
                }
            } else {
                array_push.call(output, strSlice(string, lastLastIndex));
            }
            return output.length > splitLimit ? strSlice(output, 0, splitLimit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (typeof separator === 'undefined' && limit === 0) { return []; }
        return strSplit(this, separator, limit);
    };
}

var str_replace = StringPrototype.replace;
var replaceReportsGroupsCorrectly = (function () {
    var groups = [];
    'x'.replace(/x(.)?/g, function (match, group) {
        array_push.call(groups, group);
    });
    return groups.length === 1 && typeof groups[0] === 'undefined';
}());

if (!replaceReportsGroupsCorrectly) {
    StringPrototype.replace = function replace(searchValue, replaceValue) {
        var isFn = isCallable(replaceValue);
        var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
        if (!isFn || !hasCapturingGroups) {
            return str_replace.call(this, searchValue, replaceValue);
        } else {
            var wrappedReplaceValue = function (match) {
                var length = arguments.length;
                var originalLastIndex = searchValue.lastIndex;
                searchValue.lastIndex = 0;
                var args = searchValue.exec(match) || [];
                searchValue.lastIndex = originalLastIndex;
                array_push.call(args, arguments[length - 2], arguments[length - 1]);
                return replaceValue.apply(this, args);
            };
            return str_replace.call(this, searchValue, wrappedReplaceValue);
        }
    };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        var normalizedStart = start;
        if (start < 0) {
            normalizedStart = max(this.length + start, 0);
        }
        return string_substr.call(this, normalizedStart, length);
    }
}, hasNegativeSubstrBug);

// ES5 15.5.4.20
// whitespace from: http://es5.github.io/#x15.5.4.20
var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
    '\u2029\uFEFF';
var zeroWidth = '\u200b';
var wsRegexChars = '[' + ws + ']';
var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
defineProperties(StringPrototype, {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    trim: function trim() {
        if (typeof this === 'undefined' || this === null) {
            throw new TypeError("can't convert " + this + ' to object');
        }
        return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
    }
}, hasTrimWhitespaceBug);

// ES-5 15.1.2.2
if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
    /* global parseInt: true */
    parseInt = (function (origParseInt) {
        var hexRegex = /^0[xX]/;
        return function parseInt(str, radix) {
            var string = $String(str).trim();
            var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
            return origParseInt(string, defaultedRadix);
        };
    }(parseInt));
}

}));



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





Array.prototype.each = function (func, scope) {

    var result

    for (var i = 0; i < this.length; i++) {
        result = func.call(scope || this[i], this[i])
        if (result === false) {
            return false
        }
    }

    return true
}

if (!Array.prototype.map) {
    Array.prototype.map = function (func, scope) {

        var result = []

        for (var i = 0; i < this.length; i++) {
            result[i] = func.call(scope || this[i], this[i])
        }

        return result
    }
}

/**
    From Developer.mozilla.org / Array.prototype.includes().
*/
if (![].includes) {
    Array.prototype.includes = function (searchElement /*, fromIndex*/) {
        'use strict';
        var O = Object(this);
        var len = parseInt(O.length) || 0;
        if (len === 0) {
            return false;
        }
        var n = parseInt(arguments[1]) || 0;
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) { k = 0; }
        }
        var currentElement;
        while (k < len) {
            currentElement = O[k];
            if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
                return true;
            }
            k++;
        }
        return false;
    };
}


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


this.closeFormHandler = function(sender) {
    sender.form.close()
}




function Console() {

    this.log = function (str) {

        if (str.join) {
            str = str.join("")
        }

        str = new Date() + ": "+ str
        this.write(str)
    }

    this.write = function (str) {

    }
}

this.console = new Console()




this.wso = new ActiveXObject("Scripting.WindowSystemObject")
this.wsoExt = new ActiveXObject("Scripting.WindowSystemObjectExtensions")
this.fileManager = wsoExt.createFileManager()
this.fso = new ActiveXObject("Scripting.FileSystemObject")

String.prototype.equalsFileNameEx = function (value) {
    return fileManager.getCanonicalFileName(this) == fileManager.getCanonicalFileName(value)
}

this.tracing = false




this.wsoHelp = function () {
    var shell = new ActiveXObject("WScript.Shell")
    var fso = new ActiveXObject("Scripting.FileSystemObject")

    var dir = startupDir()
    var wsoHelpFile = ""

    for (i = 0; i < 5; i++) {        
        var file = dir + "wso.chm"

        if (fso.fileExists(file)) {
            wsoHelpFile = file
            break
        }

        file = dir + "wso_en.chm"

        if (fso.fileExists(file)) {
            wsoHelpFile = file
            break
        }

        dir = dir.slice(0, dir.length - 1).extractFilePath()
    }


    if (!fso.fileExists(wsoHelpFile)) {
        f.MessageBox("Help is not installed", "", o.translate("MB_OK | MB_ICONERROR"))
        return
    }

    //console.log("Running help file: " + wsoHelpFile)

    shell.run("\"" + wsoHelpFile + "\"")
}

this.initHelpMenu = function (menu) {
    var aboutMenuItem = menu.add("About")
    aboutMenuItem.onExecute = function () {
        wso.about()
    }

    var helpMenuItem = menu.add("Help", "F1")
    helpMenuItem.onExecute = wsoHelp
}



function PropertyEditor(value) {

    var designControl
    var documentControl
    var propertyGrid = value
    var newItem
    var item
    var symbolicValues
    var current
    var editFrame

    this.type = "PropertyEditor"

    var propertyIsOptional = function(item){
        if (item.exType == o.translate("PROPERTY_EX_TYPE_MENU")) {
            return true
        } else
            if (item.exType == o.translate("PROPERTY_EX_TYPE_IMAGES")) {
                return true
            }
        return false
    }

    var queryProperty = function (target, propertyItem) {

        item = propertyItem

        newItem = propertyGrid.lookup(item.text)
        if (newItem == null)
            newItem = target.add(item.text)

        newItem.userData = item

        symbolicValues = item.symbolicValues

        if (propertyIsOptional(item)) {
            current = null
        } else {
            current = designControl[item.text]
        }
    }

    var createEditFrame = function () {
        editFrame = propertyGrid.createFrame(0, 0, 0, 0)
        editFrame.parentBackground = false
        editFrame.color = propertyGrid.valueColor
        return editFrame
    }

    var createEditButton = function () {
       var editButton = editFrame.createButton(0, 0, 25, 0, "...")
       editButton.align = o.translate("AL_RIGHT")
       return editButton
    }

    var setText = function (editControl, text) {
        editControl.maskEvents = true
        editControl.text = text
        editControl.maskEvents = false
    }

    var setItemIndex = function(editControl, itemIndex) {
        editControl.maskEvents = true
        editControl.itemIndex = itemIndex
        editControl.maskEvents = false
    }

    var createDialogForm = function (sender, clientWidth, clientHeight, text) {
        var form = sender.form.createDialogForm()
        form.clientWidth = clientWidth
        form.clientHeight = clientHeight
        form.centerControl()
        form.sizeGrip = true
        form.text = text
        return form
    }

    var reloadPropertyGrid = function () {
        propertyGrid.userData.buildPropertyGrid(designControl, true, documentControl)
    }

    var makeOnChange = function (func, reloadAll) {
        return function (sender) {
            var property = propertyGrid.lookup(sender)
            if (!property) return
            func(sender, property)
            propertyGrid.userData.onPropertyChanged(property, sender.text)

            if (reloadAll) {
                reloadPropertyGrid()
            }
        }
    }

    var createFieldCombination = function () {

        editFrame = newItem.control

        if (editFrame == null) {
            newFieldCombination()
        } 
        
        var edit = editFrame.edit

        setText(edit, getCombinationValue(current, item))
    }

    var getCombinationValue = function(current, item) {

        var symbolicValues = new Collection(item.symbolicValues)
        var str = ""

        symbolicValues.each(function (item) {
            if (current & o.translate(item)) {
                if (str.length > 0)
                    str += ", "
                str += item
            }
        })

        return str
    }

    var newFieldCombination = function () {
        editFrame = createEditFrame()
        
        var editButton = createEditButton()

        var edit = editFrame.createEdit(0, 0, 0, 0)
        edit.align = o.translate("AL_CLIENT")
        edit.readOnly = true
        edit.name = "edit"

        editButton.OnClick = function (sender) {
            var property = propertyGrid.lookup(sender)
            if (!property) return

            var designValue = designControl[property.text]

            var form = createDialogForm(sender, 400, 200, property.text)

            var targetEdit = sender.parent.edit

            var checkBoxFrame = form.createFrame()
            checkBoxFrame.align = o.translate("AL_CLIENT")
            checkBoxFrame.autoScroll = true

            var symbolicValues = new Collection(property.userData.symbolicValues)

            symbolicValues.each(function (symbolicValue, i) {
                var checkBox = checkBoxFrame.createCheckBox(10, 10 + i * 30, 100, 25, symbolicValue)
                checkBox.checked = designValue & o.translate(symbolicValue)
            })

            var frame = form.createFrame(0, 0, 0, 50)
            frame.Align = o.Translate("AL_BOTTOM")

            var rightFrame = frame.createFrame(0, 0, 200, 0)
            rightFrame.align = o.Translate("AL_RIGHT")

            var button = rightFrame.createButton(10, 10, 75, 25, "OK")

            button.OnClick = function (sender) {
                var value = 0

                for (var i = 0; i < checkBoxFrame.controls.Count; i++) {
                    var checkBox = checkBoxFrame.controls.item(i)
                    if (checkBox.checked)
                        value |= o.translate(checkBox.text)
                }

                designControl[property.text] = value
                targetEdit.text = getCombinationValue(value, property.UserData)

                sender.form.close()
            }
            button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
            button.onClick = closeFormHandler
            button.cancel = true

            form.showModal()
        }
    }

    var createFieldSymbolicValues = function () {
        
        var editControl = newItem.control
        
        if (editControl == null) {
            editControl = newFieldSymbolicValues()            
        }
        
        for (var j = 0; j < symbolicValues.Count; j++) {
            var value = symbolicValues.item(j)
            if (o.translate(value) == current) {
                setItemIndex(editControl, j)
                break
            }
        }

        editControl.maskEvents = false
    }

    var newFieldSymbolicValues = function () {
        var editControl = propertyGrid.createComboBox(0, 0, 0, 0, o.translate("CBS_DROPDOWNLIST"))
        editControl.maskEvents = true
        editControl.beginUpdate()

        for (var j = 0; j < symbolicValues.Count; j++) {
            var value = symbolicValues.item(j)
            editControl.Add(value)
        }

        editControl.endUpdate()

        editControl.onChange = makeOnChange(function (sender, property) {
            var value = o.translate(sender.text)
            designControl[property.text] = value
        })

        return editControl
    }

    var createFieldBSTR = function () {
        
        editFrame = newItem.control        
                
        if (editFrame == null) {
            newFieldBSTR()
        }
        
        var editControl = editFrame.edit
        
        setText(editControl, current)
    }

    var newFieldBSTR = function () {
        editFrame = createEditFrame()

        var editControl
        var options = item.options
        if (options) {
            editControl = editFrame.createComboBox()
            $(options).each(function (option) {
                editControl.add(option)
            })
        } else
        {
            editControl = editFrame.createEdit()
        }

        var editButton = createEditButton()

        editControl.align = o.translate("AL_CLIENT")
        editControl.name = "edit"

        editControl.onChange = makeOnChange(function (sender, property) {
            designControl[property.text] = sender.text
        })

        editButton.OnClick = function (sender) {
            var property = propertyGrid.lookup(sender)
            var form = createDialogForm(sender, 400, 200, property.text)

            var targetEdit = sender.parent.edit

            var edit = form.createEdit(0, 0, 0, 150)
            edit.multiLine = true
            edit.text = targetEdit.text
            edit.align = o.translate("AL_CLIENT")

            var frame = form.createFrame(0, 0, 0, 50)
            frame.align = o.Translate("AL_BOTTOM")

            var rightFrame = frame.createFrame(0, 0, 200, 0)
            rightFrame.Align = o.Translate("AL_RIGHT")

            var button = rightFrame.createButton(10, 10, 75, 25, "OK")

            button.OnClick = function (sender) {
                targetEdit.text = edit.text
                sender.form.close()
            }

            button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
            button.onClick = closeFormHandler
            button.cancel = true

            form.showModal()
        }
    }

    var createFieldI4 = function () {
        var editControl = newItem.control
        if (editControl == null) {
            editControl = propertyGrid.createEdit(0, 0, 0, 0)
            editControl.maskEvents = true
            editControl.dataType = o.translate("DT_INTEGER")

            editControl.onChange = makeOnChange(function (sender,property) {
                designControl[property.text] = sender.text
            })
        }
        setText(editControl, current)
        editControl.maskEvents = false
    }

    var createFieldUI4 = function () {
        var editControl = newItem.control
        if (editControl == null) {
            editControl = propertyGrid.createEdit(0, 0, 0, 0)
            editControl.maskEvents = true
            editControl.dataType = o.Translate("DT_INTEGER")

            editControl.onChange = makeOnChange(function (sender, property) {
                if (sender.text < 0)
                    sender.text = 0
                designControl[property.text] = sender.text
            })
        }
        setText(editControl, current)
        editControl.MaskEvents = false
    }

    var createFieldBOOL = function () {
        var editFrame = newItem.control
        var editControl
        if (editFrame == null) {
            editFrame = createEditFrame()
            editControl = editFrame.createCheckBox(2, 0, 20, 20)
            editControl.name = "editControl"

            editControl.onChange = makeOnChange(function (sender,property) {
                designControl[property.text] = sender.Checked
                sender.Checked = designControl[property.text]
            }, true)
        } else {
            editControl = editFrame.editControl
        }

        editControl.maskEvents = true
        editControl.checked = current
        editControl.maskEvents = false
    }

    var createFieldDATE = function() {
        var editControl = newItem.Control
        if (editControl == null) {
            editControl = propertyGrid.createDateTimePicker()

            editControl.onChange = makeOnChange(function (sender,property) {
                designControl[property.text].value = sender.value.value
            })
        }
        editControl.value.value = current.value
    }

    var createFieldColor = function () {
        editFrame = newItem.control
        
        if (editFrame == null) {
            newFieldColor()
        }
        
        var editControl = editFrame.editControl
        
        setItemIndex(editControl, editControl.Count - 1)

        for (var j = 0; j < symbolicValues.Count; j++) {
            var value = symbolicValues.item(j)
            if (o.translate(value) == current) {
                setItemIndex(editControl, j)
                break
            }
        }

        editControl.maskEvents = false
    }

    var newFieldColor = function () {
        editFrame = createEditFrame()

        var editControl = editFrame.createComboBox(0, 0, 0, 0, o.Translate("CBS_DROPDOWNLIST"))
        editControl.align = o.translate("AL_CLIENT")
        editControl.name = "editControl"
        editControl.maskEvents = true

        var editButton = createEditButton()

        editButton.OnClick = function (sender) {
            var property = propertyGrid.lookup(sender)
            if (!property) return

            var designValue = designControl[property.text]
            var editControl = sender.parent.editControl

            var colorDialog = sender.form.createColorDialog()
            colorDialog.color = designValue

            if (colorDialog.Execute()) {
                editControl.itemIndex = editControl.count - 1
                designControl[property.text] = colorDialog.color
                editControl.repaint()
            }
        }

        var customValueText = "Custom"

        editControl.beginUpdate()
        for (var j = 0; j < symbolicValues.Count; j++) {
            var value = symbolicValues.item(j)
            editControl.add(value)
        }
        editControl.add(customValueText)
        editControl.endUpdate()

        editControl.onChange = makeOnChange(function (sender, property) {
            if (sender.text == customValueText) {
            } else {
                var value = o.translate(sender.text)
                designControl[property.text] = value
            }
        })

        editControl.customDraw = true;

        editControl.onDrawItem = function (sender, listControlItem) {
            var text = sender.item(listControlItem.Index)
            if (text == customValueText) {
                var property = propertyGrid.lookup(sender)
                if (property) {
                    listControlItem.textBkColor = designControl[property.text]
                }
            } else
                if (listControlItem.index >= 0) {
                    listControlItem.textBkColor = o.Translate(text)
                }
            listControlItem.font.color = o.color.invert(listControlItem.textBkColor)
        }
    }

    var createFieldKey = function () {
        var editControl = newItem.control

        if (editControl == null) {
            editControl = propertyGrid.createHotKey()
            editControl.maskEvents = true

            editControl.onChange = makeOnChange(function (sender, property) {
                designControl[property.text] = sender.key
            })
        }
        
        editControl.key = current

        editControl.maskEvents = false
    }

    var createFieldMenu = function () {
        editFrame = newItem.control

        if (editFrame == null) {
            editFrame = createEditFrame()
            var editFrameTitle = editFrame.textOut(1, 5, "")
            editFrameTitle.name = "title"
            
            var clearButton = editButton = editFrame.createButton(0, 0, 25, 0, "X")
            clearButton.align = o.translate("AL_RIGHT")
            clearButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return
                designControl[property.text] = property
                reloadPropertyGrid()
            }
            clearButton.name = "clearButton"

            var editButton = createEditButton()
            editButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return

                Designer.details.Action(null, designControl, property.text)

                reloadPropertyGrid()
            }

            editButton.tabOrder = 0
        }

        var hasMenu = designControl.propertyHasValue(item.text)
        editFrame.title.text = hasMenu ? "(menu)" : "(null)"
        editFrame.clearButton.visible = hasMenu
    }

    var createFieldFont = function () {
        editFrame = newItem.control

        if (editFrame == null) {
            editFrame = createEditFrame()
            var editButton = createEditButton()

            editButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return

                var fontDialog = sender.form.createFontDialog()
                fontDialog.font = designControl[property.text]
                if (fontDialog.execute()) {
                    designControl[property.text] = fontDialog.font
                }
            }
        }
    }

    var createFieldImages = function () {
        editFrame = newItem.control

        if (editFrame == null) {
            editFrame = createEditFrame()

            var editFrameTitle = editFrame.textOut(1, 5, "")
            editFrameTitle.name = "title"

            var clearButton = editButton = editFrame.createButton(0, 0, 25, 0, "X")
            clearButton.align = o.translate("AL_RIGHT")
            clearButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return
                designControl[property.text] = property
                reloadPropertyGrid()
            }
            clearButton.name = "clearButton"

            var editButton = createEditButton()

            editButton.onClick = function (sender) {
                var property = propertyGrid.lookup(sender)
                if (!property) return

                var document = documentControl.userData
                if (!document.fileName) {
                    if (!document.save()) {
                        return
                    }
                }
                var value = designControl[property.text]
                var references = documentControl.designFrame.design.references

                var form = sender.form.createDialogForm()
                form.clientWidth = 690
                form.clientHeight = 400
                form.centerControl()
                form.sizeGrip = true

                var frame = form.createFrame(0, 0, 0, 0)
                frame.align = o.translate("AL_CLIENT")
                frame.name = "frame"
                frame.autoSplit = true

                var solutionBrowser = new SolutionBrowser(frame, documentControl)

                var rightFrame = frame.createFrame()
                rightFrame.align = o.translate("AL_CLIENT")

                var list = rightFrame.createListView(0, 0, 0, 0, o.translate("LVS_REPORT"))
                list.align = o.translate("AL_CLIENT")
                list.multiSelect = false
                list.columns.add("Image", 200)

                $(value.references).each(function (item) {
                    var itemReference = references.lookup(item)
                    if (itemReference) {
                        var listItem = list.add(itemReference.text)
                        listItem.userData = {
                            reference: itemReference
                        }
                    } else {
                        list.add("Unknown: " + item)
                    }
                })

                var listFrame = rightFrame.createFrame(0, 0, 0, 50)
                listFrame.align = o.translate("AL_BOTTOM")

                var listAddButton = listFrame.createButton(10, 10, 75, 25, "Add")
               
                var addEventHandler = function () {
                    var item = solutionBrowser.getSelectedItem()
                    if (!item) {
                        return
                    }

                    var itemReference = item.reference
                    if (itemReference.referenceType == o.translate("REFERENCE_TYPE_IMAGE")) {
                        var listItem = list.add(itemReference.text)
                        listItem.userData = {
                            reference: itemReference
                        }
                    }
                }

                listAddButton.onClick = addEventHandler
                solutionBrowser.getTreeView().onDblClick = addEventHandler

                var listRemoveButton = listFrame.createButton(100, 10, 75, 25, "Remove")
                listRemoveButton.onClick = function () {
                    var itemIndex = list.itemIndex
                    if (itemIndex >= 0) {
                        list.remove(itemIndex)
                    }
                }

                frame = form.createFrame(0, 0, 0, 50)
                frame.Align = o.translate("AL_BOTTOM")
                var rightFrame = frame.createFrame(0, 0, 200, 0)
                rightFrame.align = o.translate("AL_RIGHT")
                button = rightFrame.createButton(10, 10, 75, 25, "OK")

                button.onClick = function (sender) {

                    var valueReferences = value.references
                    valueReferences.clear()

                    var filePaths = []

                    enumReferences(references, null, document.fileName, function (item, treeItem, filePath) {
                        filePaths[item.id] = filePath
                    })

                    value.clear()

                    $(list).each(function (item) {
                        var reference = item.userData.reference
                        valueReferences.add(reference.id)

                        var fileName = filePaths[reference.id]
                        console.log("Load image: " + fileName)
                        value.add(fileName)
                    })

                    sender.form.close()
                }
                button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
                button.onClick = closeFormHandler
                button.cancel = true

                form.showModal()

                reloadPropertyGrid()
            }

            editButton.tabOrder = 0
        }

        var propertyHasValue = designControl.propertyHasValue(item.text)
        editFrame.title.text = propertyHasValue ? "(images)" : "(null)"
        editFrame.clearButton.visible = propertyHasValue
    }

    this.createField = function () {
        if (item.exType == o.translate("PROPERTY_EX_TYPE_COLOR")) {
            createFieldColor()
        } else
        if (item.exType == o.translate("PROPERTY_EX_TYPE_KEY")) {
            createFieldKey()
        } else
        if (item.exType == o.translate("PROPERTY_EX_TYPE_MENU")) {
            createFieldMenu()
        } else
        if (item.exType == o.translate("PROPERTY_EX_TYPE_FONT")) {
            createFieldFont()
        } else
        if (item.exType == o.translate("PROPERTY_EX_TYPE_IMAGES")) {
            createFieldImages()
        } else
        if (item.Combination) {
            createFieldCombination()
        } else
        if (symbolicValues) {
            createFieldSymbolicValues()
        } else
        if ((item.type == o.Translate("VT_BSTR")) || (item.type == o.Translate("VT_VARIANT"))) {
            createFieldBSTR()
        } else
        if (item.type == o.Translate("VT_I4")) {
            createFieldI4()
        } else
        if ((item.type == o.Translate("VT_UI4")) || (item.type == o.Translate("VT_UI2"))) {
            createFieldUI4()
        } else
        if (item.type == o.Translate("VT_BOOL")) {
            createFieldBOOL()
        } else
        if (item.type == o.Translate("VT_DATE")) {
            createFieldDATE()
        }
    }

    this.loadDesignProperties = function (target, source) {
        for (var i = 0; i < source.count; i++) {
            var item = source.item(i)
            queryProperty(target, item)

            if (item.Count == 0) {
                try{
                    this.createField()
                }
                catch (e) {
                    f.MessageBox(e.message + " / " + item.text)
                }

            } else {
                this.loadDesignProperties(newItem, item)
            }
        }
    }

    this.initPropertyGrid = function () {
        this.loadDesignProperties(propertyGrid.items, designControl.design.properties)
    }

    this.buildPropertyGrid = function (designControlValue, reuse, documentControlValue) {

        //console.log("Build property grid")

        designControl = designControlValue
        documentControl = documentControlValue

        propertyGrid.beginUpdate()
        if (!reuse) {
            propertyGrid.items.clear()
        }

        this.initPropertyGrid()

        propertyGrid.endUpdate()
    }

    this.copyProperties = function (target, source, properties) {
        properties = properties || target.design.properties

        for (var i = 0; i < properties.Count; i++) {
            var item = properties.item(i)

            if (item.Count == 0) {

                var isOptional = propertyIsOptional(item)
                var text = item.text
                var value

                if (isOptional) {
                    if (source.propertyHasValue(text)) {
                        value = source[text]
                    } else {
                        value = item
                    }
                } else {
                    value = source[text]
                }

                target[text] = value

                //console.log("Set property: "+ text)
            } else {
                this.copyProperties(target, source, item)
            }
        }
    }

    this.onPropertyChanged = function () { }
}

this.PropertyEditor = PropertyEditor


function ToolBox(value , str) {

    var form = value
    var name = str
    var panel
    var toolBar
    var toolBarPanel
    var toolBars = []
    var top = 0
    var buttons
    var innerPanel
     
    this.createPanel = function () {
        panel = form.createFrame(10, 10, 150, 100)

        initDockingProperties(panel)

        panel.autoScroll = true

        panel.text = name
        panel.align = o.translate("AL_RIGHT")
        panel.docking.alwaysDockPage = true
        panel.docking.dropTarget = true
        panel.docking.uniqueId = name

        innerPanel = panel.createFrame(0, 0, 150, 100)

        panel.onResize = function (sender) {
            innerPanel.width = sender.clientWidth - 1
            toolBars.each(function (item) {
                item.toolBar.minButtonWidth = innerPanel.width
            })
        }    

        return panel
    }

    this.createToolBar = function (title) {
        toolBarPanel = innerPanel.createFrame(0, top, panel.width, 25)
        toolBarPanel.align = o.translate("AL_TOP")
        var edit = toolBarPanel.createEdit()
        edit.text = title
        edit.parentColor = true
        edit.border = 0
        edit.align = o.translate("AL_TOP")
        edit.readOnly = true
        edit.color = 0x00FFF0E0
        edit.cursor = o.translate("IDC_ARROW")
        toolBar = toolBarPanel.createToolBar(0, edit.height)
        toolBar.Align = o.Translate("AL_TOP")
        toolBar.vertical = true
        toolBar.showText = true
        toolBar.buttonWidth = 130
        toolBar.minButtonWidth = 130
        toolBar.buttonHeight = 35
        toolBar.list = true
        toolBar.flat = true
        toolBar.autoSizeButtons = false
        toolBar.name = "toolBar"
        //toolBar.ButtonSpacingY = 3
        buttons = toolBar.buttons
        buttons.images.load(startupDir() + "Design/Resources/Controls16.bmp")

        var item = {
            toolBarPanel: toolBarPanel,
            toolBar: toolBar
        }
        toolBars.push(item)
        return toolBar
    }

    this.completeToolBar = function () {
        toolBarPanel.clientHeight = toolBar.top + toolBar.height
        top += toolBarPanel.height
        toolBarPanel = null
        toolBar = null
        innerPanel.clientHeight = top
    }

    var getActiveButton = function(sender) {
        var buttons = sender.buttons
        for (var i = 0; i < buttons.count; i++) {
            var button = buttons[i];
            if (button.checked) {
                return button
            }
        }
        return null
    }

    var buttonsAllUp = function (sender, activeButton) {
        if (!sender) {
            toolBars.each(function (item) {
                buttonsAllUp(item.toolBar, activeButton)
            })
            return
        }
        var buttons = sender.buttons
        for (var i = 0; i < buttons.Count; i++) {
            var button = buttons[i];
            if (button != activeButton)
                if (button.checked) {
                    button.checked = false
                }
        }
    }

    this.buttonsAllUp = buttonsAllUp

    var add = function (name, imageIndex) {
        var button = buttons.add(name)
        button.imageIndex = imageIndex
        button.radioCheck = true
        button.allowAllUp = true
        button.onExecute = function (sender) {
            buttonsAllUp(null, sender)
            var activeButton = getActiveButton(sender.control)
            if (activeButton != null) {
                form.design.newControlType = activeButton.text
                sender.control.setFocus()
            } else {
                form.design.newControlType = ""
            }
        }
    }

    this.createToolBars = function () {
    
        this.createToolBar("Controls")

        add("Button", 0)
        add("CheckBox", 29)
        add("ComboBox", 3)
        add("Calendar", 23)
        add("DateTimePicker", 24)
        add("Edit", 1)
        add("Header", 13)
        add("HotKey", 21)
        add("HyperLink", 7)
        add("IPAddress", 22)
        add("ListBox", 2)
        add("ListView", 12)
        add("ProgressBar", 4)
        //
        add("PropertyGrid", 25)
        add("RadioButton", 30)

        //
        //add("ResourceUsageGraph", 1)
        add("RichEdit", 20)
        add("ScrollBar", 18)
        add("StatusBar", 6)
        //
        add("ToolBar", 1)
        add("TrackBar", 17)
        add("TreeView", 14)
        add("UpDown", 15)

        //
        add("MenuBar", 13)
           
        this.completeToolBar()

        this.createToolBar("Graphics")

        add("Text", 31)

        this.completeToolBar()

        this.createToolBar("Containers")

        add("Frame", 25)
        add("GroupBox", 11)
        add("AutoSplitFrame", 28)
        //
        add("PageControl", 8)
        add("Pager", 5)
        add("ReBar", 26)
        add("TabControl", 8)

        this.completeToolBar()

        this.createToolBar("Other")

        add("Animate", 27)

        this.completeToolBar()
    }

    this.getPanel = function () {
        return panel
    }

    this.create = function () {
        this.createPanel()
        this.createToolBars()
        this.buttonsAllUp()
    }
}


this.ToolBox = ToolBox



function Design_DetailsButtonClick_ListBox(sender, control) {
    var form = control.form.createDialogForm(0, 0, 0, 0)
    form.clientWidth = 400
    form.clientHeight = 200
    form.centerControl()
    form.sizeGrip = true

    var edit = form.createEdit(0, 0, 0, 150)
    edit.multiLine = true
    edit.align = o.translate("AL_CLIENT")

    var frame = form.createFrame(0, 0, 0, 50)
    frame.align = o.translate("AL_BOTTOM")

    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    var button = rightFrame.createButton(10, 10, 75, 25, "OK")

    for (var i = 0; i < control.count; i++)
        edit.add(control.item(i))

    button.onClick = function (sender) {

        control.clear()
        for (var i = 0; i < edit.count; i++)
            control.add(edit.item(i))

        sender.form.close()
    }

    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true
    form.showModal()
}

define("Designer.details.ListBox", Design_DetailsButtonClick_ListBox)
define("Designer.details.ComboBox", Design_DetailsButtonClick_ListBox)


function Design_Details_Action(sender, control, field) {
    var form = control.form.createDialogForm()
    form.clientWidth = 690
    form.clientHeight = 400
    form.centerControl()
    form.sizeGrip = true

    var frame = form.createFrame(0, 0, 0, 0)
    frame.align = o.translate("AL_CLIENT")
    frame.name = "frame"
    
    var treeView = frame.createTreeView(0, 0, 0, 150)
    treeView.themeApplicationName = "Explorer"
    treeView.align = o.Translate("AL_CLIENT")
    treeView.name = "treeView"
    treeView.hideSelection = false

    var propertyGrid = frame.createPropertyGrid(0, 0, 300, 0)
    propertyGrid.align = o.translate("AL_RIGHT")
    var editor = new PropertyEditor(propertyGrid)
    propertyGrid.userData = editor

    editor.onPropertyChanged = function (property, newValue) {
        if (property.Text == "Text") {
            treeViewActiveItem().text = newValue
        }
    }


    copyActions(form.menu, control[field])

    var root = treeView.items.add(field)

    copyActions(root, form.menu)

    function copyActions(target, source) {
        target.clear()

        if (target.type == "Action") {
            editor.copyProperties(target, source)
        } else {
            target.userData = source
        }

        for (var i = 0; i < source.count; i++) {
            var item = source.item(i)
            var newItem = target.add(item.text)            
            copyActions(newItem, item)
        }
    }

    root.userData = form.menu

    var bottomFrame = frame.createFrame(0, 0, 0, 40)
    bottomFrame.Align = o.translate("AL_BOTTOM")

    function treeViewActiveItem() {
        var item = treeView.selectedItem
        if (item == null)
            item = treeView.items
        return item
    }

    function treeViewChange() {
        var item = treeView.selectedItem
        if (item == null) {
            propertyGrid.items.clear()
        } else {
            editor.buildPropertyGrid(item.userData, true,
                getActiveDocumentControlFromControl(control))
        }
    }

    treeView.onChange = treeViewChange

    var button = bottomFrame.createButton(10, 10, 80, 25, "Add Root")

    function addNode(item) {
        var newItem = item.add("New Action")
        var newAction = item.userData.add(newItem.Text)

        item.expand()

        newItem.userData = newAction
        newItem.selected = true
    }

    button.onClick = function (sender) {
        addNode(root)
    }

    var button = bottomFrame.createButton(100, 10, 80, 25, "Add Child")

    button.onClick = function (sender) {
        var item = treeViewActiveItem()
        addNode(item)
    }

    var button = bottomFrame.createButton(190, 10, 80, 25, "Add Neighbor")

    button.onClick = function (sender) {
        var item = treeViewActiveItem()
        if (item.parent)
            if (item.parent.userData)
                item = item.parent
        addNode(item)
    }

    button = bottomFrame.createButton(280, 10, 80, 25, "Delete")
    button.onClick = function (sender) {
        var item = treeView.selectedItem
        if (item != null) {
            var parent = item.parent
            if (parent.userData) {
                parent.userData.remove(item.userData)
                item.remove()
            }
        } else {
            //form.MessageBox("No item selected")
        }
    }

    frame = form.createFrame(0, 0, 0, 50)
    frame.Align = o.translate("AL_BOTTOM")
    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    button = rightFrame.createButton(10, 10, 75, 25, "OK")

    button.onClick = function (sender) {

        copyActions(control[field], sender.form.menu)

        sender.form.close()
    }
    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    treeView.items.expand(true)

    form.ShowModal()
}

define("Designer.details.ToolBar", function (sender, control) {
    Design_Details_Action(sender, control, "Buttons")
})
define("Designer.details.MenuBar", function (sender, control) {
    Design_Details_Action(sender, control, "Menu")
})
define("Designer.details.Action", Design_Details_Action)



function Design_Details_TreeView(sender, control, field) {

    var documentControl = getActiveDocumentControlFromControl(control)
    var document = documentControl.userData

    var form = control.form.createDialogForm()
    form.clientWidth = 690
    form.clientHeight = 400
    form.centerControl()
    form.sizeGrip = true

    var frame = form.createFrame(0, 0, 0, 0)
    frame.align = o.translate("AL_CLIENT")
    frame.name = "frame"

    var treeView = frame.createTreeView(0, 0, 0, 150)
    treeView.themeApplicationName = "Explorer"
    treeView.align = o.Translate("AL_CLIENT")
    treeView.name = "treeView"
    treeView.hideSelection = false
    treeView.checkBoxes = control.checkBoxes
    treeView.images = control.images
    treeView.stateImages = control.stateImages
    
    var propertyGrid = frame.createPropertyGrid(0, 0, 300, 0)
    propertyGrid.align = o.translate("AL_RIGHT")
    var editor = new PropertyEditor(propertyGrid)
    propertyGrid.userData = editor

    copyNodes(treeView.items, control[field])

    function copyNodes(target, source) {
        target.clear()
        var text = source.design.save();
        target.design.load(text)
    }
    
    var bottomFrame = frame.createFrame(0, 0, 0, 40)
    bottomFrame.Align = o.translate("AL_BOTTOM")

    function treeViewActiveItem() {
        var item = treeView.selectedItem
        if (item == null)
            item = treeView.items
        return item
    }

    function treeViewChange() {
        var item = treeView.selectedItem
        if (item == null) {
            propertyGrid.items.clear()
        } else {
            editor.buildPropertyGrid(item, true)
        }
    }

    treeView.onChange = treeViewChange

    var button = bottomFrame.createButton(10, 10, 80, 25, "Add Root")

    function addNode(item) {
        var newItem = item.add("New Node")

        item.expand()

        newItem.selected = true
    }

    button.onClick = function (sender) {
        var item = treeView.items
        addNode(item)
    }

    var button = bottomFrame.createButton(100, 10, 80, 25, "Add Child")

    button.onClick = function (sender) {
        var item = treeViewActiveItem()
        addNode(item)
    }

    var button = bottomFrame.createButton(190, 10, 80, 25, "Add Neighbor")

    button.onClick = function (sender) {
        var item = treeViewActiveItem()
        if (item.parent)
            item = item.parent
        addNode(item)
    }

    button = bottomFrame.createButton(280, 10, 80, 25, "Delete")
    button.onClick = function (sender) {
        var item = treeView.selectedItem
        if (item != null) {
            var parent = item.parent
            item.remove()
        } else {
            //form.MessageBox("No item selected")
        }
    }

    frame = form.createFrame(0, 0, 0, 50)
    frame.Align = o.translate("AL_BOTTOM")
    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    button = rightFrame.createButton(10, 10, 75, 25, "OK")

    button.onClick = function (sender) {

        copyNodes(control[field], treeView.items)
                
        sender.form.close()
    }
    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    treeView.items.expand(true)

    form.ShowModal()
}

define("Designer.details.TreeView", function (sender, control) {
    Design_Details_TreeView(sender,control,"items")
})



function Design_Details_Header(sender, control, field) {

    var documentControl = getActiveDocumentControlFromControl(control)
    var document = documentControl.userData
    documentControl.designFrame.design.references.fileName = document.fileName

    var form = control.form.createDialogForm()
    form.clientWidth = 690
    form.clientHeight = 400
    form.centerControl()
    form.sizeGrip = true

    var frame = form.createFrame(0, 0, 0, 0)
    frame.align = o.translate("AL_CLIENT")
    frame.name = "frame"

    var topFrame = form.createFrame(0, 0, 0, 50)
    topFrame.align = o.translate("AL_TOP")
    topFrame.borderWidth = 10

    var header = topFrame.createHeader()
    header.align = o.translate("AL_CLIENT")

    var text = control.design.save()
    header.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

    var view = frame.createListBox(0, 0, 0, 150)
    view.align = o.translate("AL_CLIENT")
    updateView()
    
    var propertyGrid = frame.createPropertyGrid(0, 0, 300, 0)
    propertyGrid.align = o.translate("AL_RIGHT")
    var editor = new PropertyEditor(propertyGrid)
    propertyGrid.userData = editor
       
    var bottomFrame = frame.createFrame(0, 0, 0, 40)
    bottomFrame.Align = o.translate("AL_BOTTOM")

    function updateView() {
        view.clear()
        for (var i = 0; i < header.count; i++) {
            view.add(header.item(i).text)
        }
    }

    header.onColumnClick = function (sender, column) {
        view.itemIndex = column.index
    }


    function updateSelected() {
        if (view.itemIndex < 0) {
            propertyGrid.items.clear()
        } else {
            var item = header.item(view.itemIndex)
            editor.buildPropertyGrid(item, true)
        }
    }

    var button = bottomFrame.createButton(10, 10, 80, 25, "Add")
    
    button.onClick = function (sender) {
        var itemText = "New Column"
        var item = header.add(itemText)
        view.add(itemText)
        view.itemIndex = view.count-1
    }
       
    button = bottomFrame.createButton(100, 10, 80, 25, "Delete")
    button.onClick = function (sender) {
        var itemIndex = view.itemIndex
        if (itemIndex > -1) {
            header.remove(itemIndex)
            view.remove(itemIndex)
        }
        updateSelected()
    }

    view.onChange = function () {
        updateSelected()
    }

    frame = form.createFrame(0, 0, 0, 50)
    frame.Align = o.translate("AL_BOTTOM")
    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    button = rightFrame.createButton(10, 10, 75, 25, "OK")

    button.onClick = function (sender) {

        var text = header.design.save()
        control.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

        sender.form.close()
    }
    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    editor.onPropertyChanged = function (property, newValue) {
        if (property.Text == "Text") {
            var itemIndex = view.itemIndex
            if (itemIndex > -1) {
                view.maskEvents = true
                view.item(itemIndex) = newValue
                view.maskEvents = false
            }               
        }
    }

    view.itemIndex = 0

    form.ShowModal()
}

define("Designer.details.Header", function (sender, control) {
    Design_Details_Header(sender, control)
})




function Design_Details_ListView(sender, control) {

    function ObjectUpdate(control) {

        var prev = {}

        this.set = function (name, value) {

            prev[name] = control[name]
            control[name] = value

        }

        this.save = function (name) {
            prev[name] = control[name]
        }

        this.restore = function (name) {
            control[name] = prev[name]
        }

        this.revert = function()
        { 
            for (var item in prev)
            {
                control[item] = prev[item]
            }
        }

    }

    var listView
    var subItemsEditor
    var frame
    var itemsFrame
    var columnsFrame
    var columnsBox
    var columns
    var ownerData
    var listViewUpdate

    function treeItemText(text) {
        if (text.length > 0)
            return text
        return "[ ]"
    }

    function createTreeItem(item) {
        var newTreeItem = subItemsEditor.items.add(treeItemText(item.text))
        newTreeItem.userData = item
        for (var i = 1; i < columns.count; i++) {
            var subItem = item.subItemsEx(i-1)
            var subItemText = subItem.text
            var text = treeItemText(subItemText)
            var treeSubItem = newTreeItem.add(text)
            treeSubItem.userData = subItem
        }
        newTreeItem.expand(true)
        return newTreeItem
    }

    function refreshSubItemsEditor() {
        subItemsEditor.items.clear()

        for (var i = 0; i < listView.count; i++) {
            var item = listView.item(i)
            createTreeItem(item)
        }

        subItemsEditor.items.expand(true)
    }

    function createItemsFrame() {
        itemsFrame = frame.createFrame(0, 0, 0, 250)
        itemsFrame.align = o.Translate("AL_BOTTOM")

        subItemsEditor = itemsFrame.createTreeView(0, 0, 0, 250)
        subItemsEditor.themeApplicationName = "Explorer"
        subItemsEditor.align = o.Translate("AL_CLIENT")
        subItemsEditor.hideSelection = false

        refreshSubItemsEditor()
        

        if (ownerData) {
            return
        }

        var bottomFrame = itemsFrame.createFrame(0, 0, 0, 40)
        bottomFrame.Align = o.translate("AL_BOTTOM")

        var button = bottomFrame.createButton(10, 10, 80, 25, "Add")
        button.onClick = function (sender) {
            var newItem = listView.add("New Item")
            var newTreeItem = createTreeItem(newItem)
            
            listView.itemIndex = newItem.index
            newItem.selected = true
            newTreeItem.selected = true
        }

        button = bottomFrame.createButton(100, 10, 80, 25, "Delete")
        button.onClick = function (sender) {
            var item = subItemsEditor.selectedItem
            if (item != null) {
                var index = item.userData.index
                item.remove()
                listView.remove(index)
            } else {
                //form.MessageBox("No item selected")
            }
        }
    }

    function refreshColumnsBox() {
        columnsBox.clear()
        for (var i = 0; i < columns.count; i++) {
            columnsBox.add(columns.item(i).text)
        }
    }

    function updateDesignColumnItem() {
        if (!columnsFrame.visible)
            return

        var item
        if (columnsBox.itemIndex < 0) {
            item = null
        } else {
            item = columns.item(columnsBox.itemIndex)
        }
        setDesignPropertyItem(item)
    }

    function createColumnsFrame() {
        
        columnsFrame = frame.createFrame(0, 0, 0, 250)
        columnsFrame.align = o.Translate("AL_BOTTOM")
        columnsFrame.hide()

        columnsBox = columnsFrame.createListBox()
        columnsBox.align = o.translate("AL_CLIENT")
        
        refreshColumnsBox()

        var bottomFrame = columnsFrame.createFrame(0, 0, 0, 40)
        bottomFrame.Align = o.translate("AL_BOTTOM")

        function columnsChanged() {
            refreshSubItemsEditor()
            listView.clearSelection()
        }

        var button = bottomFrame.createButton(10, 10, 80, 25, "Add")
        button.onClick = function (sender) {
            var columnText = "New Column"

            var newColumn = columns.add("New Column")
            columnsBox.add(columnText)

            columnsChanged()
        }

        button = bottomFrame.createButton(100, 10, 80, 25, "Delete")
        button.onClick = function (sender) {
            if (columnsBox.itemIndex > -1) {
                columns.remove(columnsBox.itemIndex)

                refreshColumnsBox()
                
                columnsChanged()
            }
        }

        columnsBox.onChange = function (sender) {
            updateDesignColumnItem()
        }

        columnsFrame.onShow = function(sender) {
            listView.style = o.translate("LVS_REPORT")
        }

        columnsFrame.onHide = function (sender) {
            listViewUpdate.restore("style")
        }
                
    }

    var designItem = null

    var form = control.form.createDialogForm()
    form.clientWidth = 690
    form.clientHeight = 600
    form.centerControl()
    form.sizeGrip = true

    var topFrame = form.createFrame(0, 0, 0, 40)
    topFrame.align = o.Translate("AL_TOP")
    var toolBar = topFrame.createToolBar(10, 10, 200, 25)
    toolBar.list = true
    toolBar.showText = true
    var buttons = toolBar.buttons
    var tabs = []

    function addButton(name, control) {
        var button = buttons.add(name)
        button.radioCheck = true
        button.userData = control        
        tabs.push(control)

        button.onExecute = function (sender) {

            tabs.each(function (item) {
                item.hide()
            })

            sender.userData.show()
                        
            if (itemsFrame.visible) {
                updateDesignPropertyItem()
            }
            if (columnsFrame.visible) {
                updateDesignColumnItem()
            }
        }
        return button
    }

    var documentControl = getActiveDocumentControlFromControl(control)
    var document = documentControl.userData
    documentControl.designFrame.design.references.fileName = document.fileName

    frame = form.createFrame(0, 0, 0, 0)
    frame.align = o.translate("AL_CLIENT")
    frame.autoSplit = true

    listView = frame.createListView(0, 0, 0, 150)
    listView.align = o.Translate("AL_CLIENT")
    
    var text = control.design.save()
    listView.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

    columns = listView.columns
    ownerData = listView.ownerData

    listViewUpdate = new ObjectUpdate(listView)
    listViewUpdate.set("hideSelection", false)
    listViewUpdate.set("multiSelect", false)
    listViewUpdate.save("style")

    createItemsFrame()
    createColumnsFrame()

    var buttonItems = addButton("Items", itemsFrame)
    var buttonColumns = addButton("Columns", columnsFrame)

    frame = form.createFrame(0, 0, 0, 50)
    frame.Align = o.translate("AL_BOTTOM")

    var propertyGrid = form.createPropertyGrid(0, 0, 300, 0)
    propertyGrid.align = o.translate("AL_RIGHT")
    var editor = new PropertyEditor(propertyGrid)
    propertyGrid.userData = editor

          

    function listViewSelectedItem() {
        var itemIndex = listView.itemIndex
        if (itemIndex < 0) {
            return null
        }
        return listView.item(itemIndex)
    }

    function setDesignPropertyItem(item) {

        if (designItem == item) {
            return
        }
        
        designItem = item

        if (item == null) {
            propertyGrid.items.clear()
        } else {
            editor.buildPropertyGrid(item, false)
        }
    }

    function updateDesignPropertyItem() {
        if (!itemsFrame.visible) {
            return
        }

        var selectedItem = subItemsEditor.selectedItem
        var object = null
        if (selectedItem) {
            var object = selectedItem.userData
            var item = object
            if (item.type != "ListItem") {
                item = item.Parent
            }

            listView.itemIndex = item.index
            listViewSelectedItem().selected = true
        }

        setDesignPropertyItem(object)
    }

    function setListViewEvents() {
            
        subItemsEditor.onChange = function (sender) {
            updateDesignPropertyItem()
        }

        listView.onChange = function (sender) {
            if (!itemsFrame.visible) {
                return
            }

            var item = listViewSelectedItem()
            if (item) {
                var treeItem = subItemsEditor.items.item(item.index)
                var selectedItem = subItemsEditor.selectedItem
                if (selectedItem != null) {
                    if ((selectedItem == treeItem) || (selectedItem.parent == treeItem)) {
                        treeItem = null
                    }
                }

                if (treeItem != null) {
                    treeItem.selected = true
                }
            }
            updateDesignPropertyItem()
        }
    }

    if (!ownerData) {
        setListViewEvents()
    }
       
    
    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    button = rightFrame.createButton(10, 10, 75, 25, "OK")

    button.onClick = function (sender) {

        listViewUpdate.revert()

        var text = listView.design.save()
        control.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

        sender.form.close()
    }
    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    editor.onPropertyChanged = function (property, newValue) {
        if (property.Text == "Text") {
            if (itemsFrame.visible) {
                subItemsEditor.selectedItem.text = treeItemText(newValue)
            } else
                if (columnsFrame.visible) {
                    var itemIndex = columnsBox.itemIndex
                    if (itemIndex > -1) {
                        columnsBox.maskEvents = true
                        columnsBox.item(itemIndex) = newValue
                        columnsBox.maskEvents = false
                    }
                }
        }
    }
       

    form.ShowModal()
}

define("Designer.details.ListView", function (sender, control) {
    Design_Details_ListView(sender, control)
})





function Design_DetailsButtonClick_StatusBar(sender, control) {

    var documentControl = getActiveDocumentControlFromControl(control)
    var document = documentControl.userData
    documentControl.designFrame.design.references.fileName = document.fileName

    var form = control.form.createDialogForm()
    form.clientWidth = 690
    form.clientHeight = 400
    form.centerControl()
    form.sizeGrip = true

    var frame = form.createFrame(0, 0, 0, 0)
    frame.align = o.translate("AL_CLIENT")
    frame.name = "frame"

    var statusBar = form.createStatusBar()

    var text = control.design.save()
    statusBar.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

    var view = frame.createListBox(0, 0, 0, 150)
    view.align = o.translate("AL_CLIENT")
    updateView()

    var propertyGrid = frame.createPropertyGrid(0, 0, 300, 0)
    propertyGrid.align = o.translate("AL_RIGHT")
    var editor = new PropertyEditor(propertyGrid)
    propertyGrid.userData = editor

    var bottomFrame = frame.createFrame(0, 0, 0, 40)
    bottomFrame.Align = o.translate("AL_BOTTOM")

    function getStatusItemText(index, item) { 
        return index+ ": "+ "width" + " = " + item.width
    }

    function updateView() {
        view.clear()
        for (var i = 0; i < statusBar.count; i++) {
            view.add(getStatusItemText(i,statusBar.item(i)))
        }
    }

    function updateSelected() {
        if (view.itemIndex < 0) {
            propertyGrid.items.clear()
        } else {
            var item = statusBar.item(view.itemIndex)
            editor.buildPropertyGrid(item, true)
        }
    }

    var button = bottomFrame.createButton(10, 10, 80, 25, "Add")

    button.onClick = function (sender) {
        var item = statusBar.add(100)
        view.add(getStatusItemText(view.count, item))
        view.itemIndex = view.count - 1
    }

    button = bottomFrame.createButton(100, 10, 80, 25, "Delete")
    button.onClick = function (sender) {
        var itemIndex = view.itemIndex
        if (itemIndex > -1) {
            statusBar.remove(itemIndex)
            view.remove(itemIndex)
        }
        updateSelected()
    }

    view.onChange = function () {
        updateSelected()
    }

    frame = form.createFrame(0, 0, 0, 50)
    frame.Align = o.translate("AL_BOTTOM")
    var rightFrame = frame.createFrame(0, 0, 200, 0)
    rightFrame.align = o.translate("AL_RIGHT")
    button = rightFrame.createButton(10, 10, 75, 25, "OK")

    button.onClick = function (sender) {

        var text = statusBar.design.save()
        control.design.load(text, o.translate("DESIGN_LOAD_NO_POSITION"), documentControl.designFrame)

        sender.form.close()
    }
    button = rightFrame.createButton(100, 10, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    editor.onPropertyChanged = function (property, newValue) {
        if (property.Text == "Text") {
            var itemIndex = view.itemIndex
            if (itemIndex > -1) {
                view.maskEvents = true
                view.item(itemIndex) = getStatusItemText(itemIndex, statusBar.item(itemIndex))
                view.maskEvents = false
            }
        }
    }

    view.itemIndex = 0

    form.ShowModal()
}

define("Designer.details.StatusBar", Design_DetailsButtonClick_StatusBar)



var Document = function () {

    var moveBackupItem = function (backupList, i) {
        var str = backupList[i]

        if (fso.fileExists(str)) {

            if (i >= (backupList.length - 1)) {

                console.log("Deleting file: " + str)

                fso.deleteFile(str)
            } else {
                moveBackupItem(backupList, i + 1)
                var newStr = backupList[i + 1]

                console.log("Moving file: " + str + " -> " + newStr)

                fso.moveFile(str, newStr)
            }
        }
    }

    var makeBackup = function () {
        if (fso.fileExists(this.fileName)) {
            
            console.log("File " + this.fileName + " already exists, move to backup")

            var backupList = [this.fileName]
            for (var i = 1; i <= this.backupCount; i++) {
                var str = this.fileName + "~" + i
                backupList.push(str)
            }
            moveBackupItem(backupList, 0)
        } else {

            console.log("File " + this.fileName + " does not exists")
        }
    }

    var saveToFile = function (text) {
        console.log(["Saving document: ", this.fileName, this.unicode ? ", unicode" : ""])

        makeBackup.call(this)

        var fso = new ActiveXObject("Scripting.FileSystemObject")
        var file = fso.createTextFile(this.fileName, true, this.unicode)
        file.write(text)
        file.close()

        this.text = text

        console.log(["Saved document: ", this.fileName, this.unicode ? ", unicode" : ""])
    }

    this.save = function () {
        var text = this.getText()

        if (this.fileName.length == 0) {
            var saveDialog = f.createSaveDialog()
            saveDialog.filter = this.filter
            if (saveDialog.execute()) {
                this.fileName = saveDialog.fileName
            } else {
                return false
            }
        }

        saveToFile.call(this, text)
        return true
    }

    this.open = function () {
        var openDialog = f.createOpenDialog()
        openDialog.filter = this.filter
        if (openDialog.execute()) {
            return this.load(openDialog.fileName)
        }
    }

    this.load = function (value) {
        console.log(["Loading document: ", value, this.unicode ? ", unicode" : ""])

        var fso = new ActiveXObject("Scripting.FileSystemObject")
        var forReading = 1
        var create = false
        var format = this.unicode ? -1 : -2 //-2, Opens the file using the system default., -1, Opens the file as Unicode.
        var file = fso.openTextFile(value,
            forReading,
            create,
            format)

        if (file.atEndOfStream) {
            this.text = ""
        } else {
            this.text = file.readAll()
        }

        this.fileName = value

        return this.text
    }

    this.needCheckModified = function () {
        throw "Abstract metnod call"
    }

    this.checkModified = function (documentControl, hideNoButton) {

        var document = this

        if (this.needCheckModified()) {
            var message = "Save changes to the following items:\n"
            message += documentControl.text
            message += "?"
            var flags

            if (hideNoButton) {
                flags = o.translate("MB_OKCANCEL")
            } else {
                flags = o.translate("MB_YESNOCANCEL")
            }

            var result = f.MessageBox(message, "", flags | o.translate("MB_ICONQUESTION"))
            if (result == o.translate("IDCANCEL")) {
                return false
            } else
                if ((result == o.translate("IDYES")) || (result == o.translate("IDOK"))) {
                    if (!document.save()) {
                        return false
                    }
                }

        }

        return true
    }

    this.getText = function () {
        throw "Abstract method"
    }

}

Document.prototype = {
    fileName: "",
    filter : "",
    text : "",
    isDocument : true,
    unicode: true,
    backupCount : 1
}

this.Document = Document




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





this.configurationFolder = function() {
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var temporaryFolder = 2
    var path = fso.GetSpecialFolder(temporaryFolder) + "\\WSOExamples"
    if (!fso.FolderExists(path))
        fso.CreateFolder(path)
    return path + "\\"
}


function docOnDockControlCreate(sender, control, dockTarget, context) {
    if (control.type == "Frame") {
        control.color = 0x00BEAE9E
        control.parentBackground = false
    }
    if (control.type == "PageControl") {
        if (control.docking.pageControlTag == 1) {
            control.headerVisible = false
            control.tabsAlign = o.translate("AL_TOP")
            control.flatButtons = false
            control.showSingleTab = true
            control.tabCloseButton = true
            control.hideClippedTabs = true

            control.tabColors.selected.color = 0x00FFFFFF
            control.tabColors.color = 0x00BEAE9E
            control.tabColors.selected.controlFocused.color = 0x00D7F7FF
            control.closeButtonColors.hot.color = 0x0055DDFF
            control.chevronColors.hot.color = 0x0055DDFF
        } else {
            control.closeButtonColors.hot.color = 0x0055DDFF
            control.closeButtonColors.hot.fontColor = 0
        }
    }
    if (control.type == "Form") {
        control.onEnterSizeMove = function (sender) {
            sender.layering.alpha = 170
            sender.layering.layered = true
        }
        control.onExitSizeMove = function (sender) {
            sender.layering.layered = false
        }

        function hasDocument(control) {
            var document = control.userData
            if (document)
                if (document.isDocument) {
                    return true
                }
            return false
        }

        function getInnerDocument(sender) {
            if (sender.controls.count != 1) {
                return null
            }
            var control = sender.controls.item(0)
            if (hasDocument(control)) {
                return control
            }
            return null
        }

        control.onHide = function (sender, resultPtr) {
            var control = getInnerDocument(sender)
            if (control == null) {
                return
            }
            removeDocument(control)
        }

        control.onCloseQuery = function (sender, resultPtr) {
            var documents = []
            
            $(sender).visit(function (item) {
                if (hasDocument(item)) {
                    documents.push(item)
                }
            })

            var result = checkModified(documents)

            if (!result) {
                resultPtr.value = false
            }
        }

        updateFormEvents(control)   
    }
}

function docOnBeginDock(sender, dockTarget, context) {

}

function initDockingProperties(control) {
    control.onDockControlCreate = docOnDockControlCreate
    control.onBeginDock = docOnBeginDock
}

this.initDockingProperties = initDockingProperties


this.layoutFile = function() {
    return configurationFolder() + "Designer.txt"
}


this.layoutLockFile = function () {
    return layoutFile() + ".lock"
}


this.saveLayout = function () {
    var fileName = layoutFile()
    console.log("Saving layout: "+ fileName)

    var text = o.saveLayout()
    var file = fso.createTextFile(fileName, true, true)
    file.writeLine(text)
    file.close()

    console.log("Layout has been saved: " + file)
}


this.loadLayout = function (warningIfNoData) {
    var fileName = layoutFile()
    var lockFileName = layoutLockFile()
    console.log("Loading layout: " + fileName)

    if (fso.fileExists(lockFileName)) {
        if (fso.fileExists(fileName)) {

            console.log("Deleting file: " + fileName)
            fso.deleteFile(fileName)

            console.log("Deleting file: " + lockFileName)
            fso.deleteFile(lockFileName)

            console.log("An layout loading error detected, the layout file has been discarded")
            return
        }
    }

    if (!fso.fileExists(fileName)) {
        if (warningIfNoData) {
            f.MessageBox("File " + fileName + " does not exists")
        }
        return
    }

    console.log("Placing lock: " + lockFileName)
    var lockFile = fso.createTextFile(lockFileName, true, true)
    lockFile.close()

    var forReading = 1
    var create = false
    var format = -1 //Opens the file as Unicode.
    var file = fso.openTextFile(fileName,
            forReading,
            create,
            format)
    var text = file.readAll()
    file.Close()
    o.loadLayout(text)

    console.log("Deleting lock: " + lockFileName)
    fso.deleteFile(lockFileName)

    console.log("Layout has been loaded: " + file)
}

this.clearLayout = function () {
    var text = o.saveLayout()
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var file = layoutFile()

    console.log("Deleting file: " + file)
    fso.deleteFile(file)
}


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



this.enumReferences = function (references, start, fileName, func) {

    var currentFilePath = fileName.extractFilePath()

    addReferences(references, start, currentFilePath)

    function addReferences(references, treeItem, currentFilePath) {

        var newCurrentFilePath

        $(references).each(function (item) {
            
            newCurrentFilePath = currentFilePath
            if (item.text.isRelativePath()) {
                newCurrentFilePath += item.text
            } else {
                newCurrentFilePath = item.text
            }

            var newTreeItem = func(item, treeItem, newCurrentFilePath)
                        
            if (item.referenceType != o.translate("REFERENCE_TYPE_FOLDER")) {
                newCurrentFilePath = newCurrentFilePath.extractFilePath()
            } else {
                newCurrentFilePath += "\\"
            }

            addReferences(item, newTreeItem, newCurrentFilePath)
        })
    }

}

function SolutionBrowser(parent, documentControl) {

    var treeView = parent.createTreeView(0, 0, 200, 200)
    treeView.align = o.translate("AL_LEFT")
    treeView.images = wsoExt.systemImageListSmall

    var document = documentControl.userData

    enumReferences(documentControl.designFrame.design.references, treeView.items, document.fileName, function (item, treeItem, itemFilePath) {
        var newTreeItem = treeItem.add(item.text.extractFileName())

        if (item.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
            newTreeItem.imageIndex = wsoExt.getFileSysIconIndexSmall("Folder1", o.translate("FILE_ATTRIBUTE_DIRECTORY"))
        } else {
            newTreeItem.imageIndex = wsoExt.getFileSysIconIndexSmall(newTreeItem.text, 0)
        }
        
        newTreeItem.userData = {
            documentControl: documentControl,
            reference: item,
            filePath: itemFilePath
        }

        if (item.main) {
            newTreeItem.bold = true
        }

        return newTreeItem
    })


    this.getSelectedItem = function () {
        var item = treeView.selectedItem
        if (!item)
            return null
        return item.userData
    }

    this.getTreeView = function () {
        return treeView
    }
}

this.SolutionBrowser = SolutionBrowser




this.checkNewReference = function (form, references, localName) {

    var invalidCharIndex = localName.search(/[\\\/*:?"<>|]/)
    if (invalidCharIndex > -1) {
        form.messageBox("Invalid character: " + localName.substr(invalidCharIndex, 1),
                "", o.translate("MB_OK | MB_ICONERROR"))
        return false
    }

    if (references.find(localName)) {
        form.MessageBox("File or folder already exists", "", o.translate("MB_OK | MB_ICONERROR"))
        return false
    }

    if (localName.length == 0) {
        return false
    }

    return true
}

function SolutionTreeView(solutionPanel) {

    var me = this

    var activeDocumentControl = null
    var rootDocumentControl = null

    var solutionTreeView = solutionPanel.createTreeView(0, 0, 0, 0)
    solutionTreeView.align = o.Translate("AL_CLIENT")
    solutionTreeView.themeApplicationName = "Explorer"
    solutionTreeView.hideSelection = false

    solutionTreeView.images = wsoExt.systemImageListSmall
    
    var solutionTreeViewMenu = solutionTreeView.popupMenu

    function solutionTreeMenuItemUpdate(sender) {
        var selectedItem = solutionTreeView.selectedItem
        var enabled = selectedItem != null
        
        if (enabled) {
            var documentControl = selectedItem.userData.documentControl
            var references = selectedItem.userData.references

            if (references == null) {
                enabled = false
            } else
            if (references.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
                //
            } else
                if (selectedItem.parent != solutionTreeView.items) {
                    enabled = false
                } else {
                    if ((documentControl.userData instanceof FormDocument) == false) {
                        enabled = false
                    }
                }           
        }

        sender.enabled = enabled
        sender.visible = enabled
    }

    var solutionTreeNewItem = solutionTreeViewMenu.add("New Item")
    solutionTreeNewItem.onUpdate = solutionTreeMenuItemUpdate

    var solutionTreeNewFolderItem = solutionTreeViewMenu.add("New Folder")
    solutionTreeNewFolderItem.onUpdate = solutionTreeMenuItemUpdate

    function getSavedSelectedDocument() {
        var selectedItem = solutionTreeView.selectedItem
        var documentControl = selectedItem.userData.documentControl
        var document = documentControl.userData

        if (!document.checkModified(documentControl,true)) {
            return null
        }

        documentControl.text = document.fileName.extractFileName()

        return documentControl
    }

    solutionTreeNewItem.onExecute = function () {
        var documentControl = getSavedSelectedDocument()
        if (!documentControl) {
            return
        }

        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references

        var document = documentControl.userData

        var path = getFullPath(selectedItem, "")

        var rootDocument = rootDocumentControl.userData
        var rootDocumentFileName = document.fileName
        var rootDocumentRelativeFileName = fileManager.getRelativeFileName(path, rootDocumentFileName);

        var newScriptDialog = new NewScriptDialog(document, references, path, rootDocumentRelativeFileName)
        var newFileName = newScriptDialog.execute()

        if (newFileName.length > 0) {
            var reference = references.add(newFileName.extractFileName())
            reference.referenceType = o.translate("REFERENCE_TYPE_EXECUTABLE")

            me.update(activeDocumentControl, true)

            openReference(reference,newFileName)
        }
    }

    function openReference(reference, newFileName) {
        if (reference.referenceType == o.translate("REFERENCE_TYPE_EXECUTABLE")) {
            openTextDocument(newFileName)
        } else {
            openImageDocument(newFileName)
        }
    }

    function openTextDocument(newFileName) {
        var newDocument = new TextDocument()
        newDocument.load(newFileName)

        var doc = createTextDocument(newFileName.extractFileName(), newDocument)
        doc.edit.text = newDocument.text
        doc.edit.setFocus()

        updateSolution(true, doc)
    }

    function openImageDocument(newFileName) {
        var newDocument = new ImageDocument()
        newDocument.fileName = newFileName
      
        var doc = createImageDocument(newFileName.extractFileName(), newDocument)

        updateSolution(true, doc)
    }

    function getFullPath(selectedItem, text) {
        var references = selectedItem.userData.references
        var value = me.getFullFileNameByReferences(references)
        if (references.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
            value += "\\"
        } else {
            value = value.extractFilePath()
        }
        return value + text
    }

    function getFullFileName(selectedItem) {
        return me.getFullFileNameByReferences(selectedItem.userData.references)
    }
       
    this.getFullFileNameByReferences = function (item) {
        var document = rootDocumentControl.userData

        if (!item.parent) {
            return document.fileName
        }

        if (!item.text.isRelativePath()) {
            return item.text
        }

        var path = ""
        while (true) {
            if (!item.parent) {
                path = document.fileName.extractFilePath() + path
                break
            } else {
                path = item.text + "\\" + path
            }
            item = item.parent
        }
        return path.slice(0, path.length - 1)
    }


    solutionTreeNewFolderItem.onExecute = function () {
        var documentControl = getSavedSelectedDocument()
        if (!documentControl) {
            return
        }

        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references

        var document = documentControl.userData

        var form = f.createDialogForm()
        form.clientWidth = 300
        form.clientHeight = 90

        form.margin = 10
        var edit = form.createEdit()
        edit.align = o.translate("AL_CLIENT")
        var bottomFrame = form.createFrame(0, 0, 0, 40)
        bottomFrame.align = o.translate("AL_BOTTOM")
        var buttonsFrame = bottomFrame.createFrame(0, 0, 200, 0)
        buttonsFrame.align = o.translate("AL_RIGHT")
        buttonsFrame.margin = 10

        var button = buttonsFrame.createButton(0, 0, 75, 0, "OK")
        button.align = o.translate("AL_LEFT")
        button['default'] = true
        button.onClick = function () {
            var localName = edit.text

            if (!checkNewReference(form, references, localName)) {
                return
            }
            
            var path = getFullPath(selectedItem, localName)

            var fso = new ActiveXObject("Scripting.FileSystemObject")
            if (fso.folderExists(path) == false) {
                fso.createFolder(path)

                console.log("New folder has been created: " + path)
            } else {
                console.log("Folder already exists: " + path)
            }

            references.add(localName).referenceType = o.translate("REFERENCE_TYPE_FOLDER")
            me.update(activeDocumentControl, true)
            form.close()            
        }

        button = buttonsFrame.createButton(0, 0, 75, 0, "Cancel")
        button.align = o.translate("AL_LEFT")
        button.onClick = closeFormHandler
        button.cancel = true

        form.centerControl()
        form.sizeGrip = true
        form.showModal()
    }

    var solutionTreeExistingItem = solutionTreeViewMenu.add("Add Existing Item")
    solutionTreeExistingItem.onUpdate = solutionTreeMenuItemUpdate

    solutionTreeExistingItem.onExecute = function () {
        var documentControl = getSavedSelectedDocument()
        if (!documentControl) {
            return
        }

        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references

        var openDialog = f.createOpenDialog()
        var filter = getTemplatesFilter()
        filter += "|" + getIconsFilter()
        filter += "|" + getImagesFilter()
        openDialog.filter = filter
        if (openDialog.execute()) {
            var newFileName = openDialog.fileName

            if (newFileName.length > 0) {

                var fullPath = me.getFullFileNameByReferences(references)

                var reference = references.add(newFileName, fullPath)

                newFileName = me.getFullFileNameByReferences(reference)

                if (newFileName.fileNameInFilter(iconExtensions)) {
                    reference.referenceType = o.translate("REFERENCE_TYPE_ICON")
                } else
                    if (newFileName.fileNameInFilter(imageExtensions)) {
                        reference.referenceType = o.translate("REFERENCE_TYPE_IMAGE")
                    } else {
                        reference.referenceType = o.translate("REFERENCE_TYPE_EXECUTABLE")
                    }

                me.update(activeDocumentControl, true)

                openReference(reference,newFileName)
            }
        }
    }

    var propertiesMenuItem = solutionTreeViewMenu.add("Properties")
    propertiesMenuItem.onUpdate = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        var enabled = selectedItem != null

        if (enabled) {
            var references = selectedItem.userData.references
            enabled = references != null
        }

        sender.enabled = enabled
        sender.visible = enabled
    }

    propertiesMenuItem.onExecute = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references

        var form = sender.form.createDialogForm()

        form.clientWidth = 300
        form.clientHeight = 120

        form.margin = 10
        form.minHeight = form.height

        var frame = form.createFrame(0, 0, 0, 40)
        frame.align = o.translate("AL_TOP")
        frame.margin = 10
        frame.textOut(10, 10, "Value: ").align = o.translate("AL_LEFT")
        var edit = frame.createEdit()
        edit.align = o.translate("AL_CLIENT")
        edit.parentColor = true
        edit.readOnly = true
        edit.border = false
        edit.text = references.text

        var bottomFrame = form.createFrame(0, 0, 0, 40)
        bottomFrame.align = o.translate("AL_BOTTOM")
        var buttonsFrame = bottomFrame.createFrame(0, 0, 100, 0)
        buttonsFrame.align = o.translate("AL_RIGHT")
        buttonsFrame.margin = 10

        var button = buttonsFrame.createButton(0, 0, 75, 0, "OK")
        button.align = o.translate("AL_LEFT")
        button['default'] = true
        button.cancel = true
        button.onClick = function (sender) {
            sender.form.close()
        }

        form.sizeGrip = true
        form.centerControl()
        form.showModal()
    }

    solutionTreeViewMenu.newLine()

    var solutionTreeRemoveMainMenuItem = solutionTreeViewMenu.add("Remove")

    solutionTreeRemoveMainMenuItem.onExecute = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        if (!selectedItem) {
            return
        }
        var references = selectedItem.userData.references

        var fullPath = me.getFullFileNameByReferences(references)
        var deleteFile = false

        var form = f.createDialogForm()
        form.clientWidth = 300
        form.clientHeight = 150
        var image = form.drawImage(10, 10, 0, 0, o.loadSysIcon(o.translate("OIC_QUES")))

        form.textOut(image.right + 10, 10, "Remove " + references.text + "?")
        form.textOut(image.right + 10, 30, fullPath)

        var deleteFileCheckBox = form.createCheckBox(10, 60, 100, 25, "Delete file")
        deleteFileCheckBox.visible = references.count == 0

        var bottomFrame = form.createFrame(0, 0, 0, 40)
        bottomFrame.align = o.translate("AL_BOTTOM")
        var buttonsFrame = bottomFrame.createFrame(0, 0, 200, 0)
        buttonsFrame.align = o.translate("AL_RIGHT")
        buttonsFrame.margin = 5

        var button = buttonsFrame.createButton(0, 0, 75, 0, "OK")
        button.align = o.translate("AL_LEFT")
        button['default'] = true
        button.onClick = function () {
            form.userData = 1
            deleteFile = deleteFileCheckBox.checked
            form.close()
        }

        button = buttonsFrame.createButton(0, 0, 75, 0, "Cancel")
        button.align = o.translate("AL_LEFT")
        button.onClick = closeFormHandler
        button.cancel = true

        form.centerControl()
        form.sizeGrip = true
        form.userData = 0
        form.showModal()

        if (form.userData == 1) {
            references.parent.remove(references)
            if (deleteFile) {
                var fso = new ActiveXObject("Scripting.FileSystemObject")
                console.log("Deleting file: " + fullPath, true)
                fso.deleteFile(fullPath)
            }
            me.update(activeDocumentControl, true)
        }
    }

    solutionTreeRemoveMainMenuItem.onUpdate = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        var enabled = false
        if (selectedItem) {
            var references = selectedItem.userData.references

            enabled = references.parent != null
        }

        sender.enabled = enabled
        sender.visible = enabled
    }

    var solutionTreeSetMainMenuItem = solutionTreeViewMenu.add("Set as Main Script")
    solutionTreeSetMainMenuItem.onExecute = function () {
        var document = rootDocumentControl.userData
        var rootReferences = document.designFrame.design.references
        var selectedItem = solutionTreeView.selectedItem
        var references = selectedItem.userData.references
        var value = !references.main

        $(rootReferences).visit(function (item) {
            item.main = false
        })

        references.main = value

        me.update(activeDocumentControl, true)
    }

    solutionTreeSetMainMenuItem.onUpdate = function (sender) {
        var selectedItem = solutionTreeView.selectedItem
        var enabled = selectedItem != null

        if (enabled) {
            var references = selectedItem.userData.references

            if (references == null) {
                enabled = false
            } else
                if (references.referenceType != o.translate("REFERENCE_TYPE_EXECUTABLE")) {
                    enabled = false
                }
        }

        if (!rootDocumentControl) {
            enabled = false
        } else
        if ((rootDocumentControl.userData instanceof FormDocument) == false) {
            enabled = false
        }

        sender.enabled = enabled
        sender.visible = enabled
    }

    solutionTreeView.onDblClick = function () {
        var selectedItem = solutionTreeView.selectedItem
        if (selectedItem == null) {
            return
        }
        var documentControl = selectedItem.userData.documentControl
        var references = selectedItem.userData.references
        if (references == null) {
            return
        }
        if (references.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
            return
        }
        if (references.text == "") {
            return
        }

        var document = documentControl.userData
        var path = getFullFileName(selectedItem)
        var documentControl = getDocumentControlByFileName(path)
        if (documentControl) {
            ensureVisible(documentControl)

            setSelectedControl(documentControl.userData.primaryControl)
            selectedControl.setFocus()
            return
        }
        openReference(references,path)
    }
        
    function getParentDocumentControlByFileName(fileName) {
        var result = null
        var found = false

        documents.each(function (item) {
            var document = item.userData
            if (document)
                if (document.fileName)
                    if (document.designFrame) {
                        path = document.fileName.extractFilePath()

                        checkPath(document.designFrame.design.references, path)

                        function checkPath(references, path) {
                            $(references).each(function (reference) {
                                var referenceFileName = path + reference.text
                                if (reference.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
                                    checkPath(reference, referenceFileName + "\\")
                                } else {
                                    if (!reference.text.isRelativePath()) {
                                        referenceFileName = reference.text
                                    }

                                    if (referenceFileName.equalsFileNameEx(fileName)) {
                                        result = item
                                        found = true
                                    }
                                }
                            })
                        }


                    }

            return !found
        })

        return result
    }

    this.update = function (newActiveDocumentControl, force) {

        if (!force)
            if (activeDocumentControl == newActiveDocumentControl) {
                return
            }

        if (newActiveDocumentControl)
            if (!newActiveDocumentControl.userData) {
                newActiveDocumentControl = null
            }

        activeDocumentControl = newActiveDocumentControl
        rootDocumentControl = activeDocumentControl

        if (rootDocumentControl) {
            var fileName

            while (true) {
                fileName = rootDocumentControl.userData.fileName

                var parentActiveDocumentControl = getParentDocumentControlByFileName(fileName)
                if (parentActiveDocumentControl) {
                    rootDocumentControl = parentActiveDocumentControl
                } else {
                    break
                }
            }
        }

        solutionTreeView.beginUpdate()
        try {
            var root = solutionTreeView.items
            root.clear()

            if (rootDocumentControl) {

                var treeItem = root.add(rootDocumentControl.text)
                treeItem.imageIndex = wsoExt.getFileSysIconIndexSmall(treeItem.text, 0)

                treeItem.userData = {
                    documentControl: rootDocumentControl
                }

                var document = rootDocumentControl.userData

                if (document.designFrame) {

                    treeItem.userData.references = document.designFrame.design.references

                    enumReferences(treeItem.userData.references, treeItem, document.fileName, function (item, treeItem, itemFilePath) {
                        var newTreeItem = treeItem.add(item.text.extractFileName())

                        if (item.referenceType == o.translate("REFERENCE_TYPE_FOLDER")) {
                            newTreeItem.imageIndex = wsoExt.getFileSysIconIndexSmall("Folder1", o.translate("FILE_ATTRIBUTE_DIRECTORY"))
                        } else {
                            newTreeItem.imageIndex = wsoExt.getFileSysIconIndexSmall(newTreeItem.text, 0)
                        }

                        newTreeItem.userData = {
                            documentControl: rootDocumentControl,
                            references: item
                        }

                        if (tracing) {
                            var str1 = me.getFullFileNameByReferences(item)
                            var str2 = itemFilePath
                            console.log(str1)
                            console.log(str2)
                            if (str1 != str2) {
                                WScript.echo("Current path error")
                            }
                        }

                        if (activeDocumentControl.userData.fileName.equalsFileNameEx(itemFilePath)) {
                            newTreeItem.selected = true
                        }
                        
                        if (item.main) {
                            newTreeItem.bold = true
                        }

                        return newTreeItem
                    })

                }
            }

            root.expand(true)
        }
        finally {
            solutionTreeView.endUpdate()
        }
    }
}

this.SolutionTreeView = SolutionTreeView

this.getTemplatesFolderPath = function () {
    return startupDir() + "Templates\\"
}

this.getTemplatesFilter = function () {

    var templates = []

    var path = getTemplatesFolderPath()

    list(path, "")

    function list(path, templateName) {
        var folder = fso.getFolder(path)
        var fc = new Enumerator(folder.subFolders)

        for (; !fc.atEnd(); fc.moveNext()) {
            var item = fc.item()

            if (fso.folderExists(item)) {
                list(item + "\\", item.name)
            }
        }

        fc = new Enumerator(folder.files)

        for (; !fc.atEnd(); fc.moveNext()) {
            var item = fc.item()
            var name = item.name
            var ext = "*" + name.extractFileExt()
            var filter = templateName + " (" + ext + ")" + " | " + ext
         
            if (!templates[filter]) {
                templates[filter] = 1
                templates.push(filter)
            }
        }
    }

    var result = templates.join("|")   
    return result
}

function NewScriptDialog(parentDocument, references, path, formFileName) {
    var form = f.createDialogForm()
    form.clientWidth = 400
    form.clientHeight = 500

    var result = ""

    var tree = form.createTreeView()
    tree.align = o.translate("AL_CLIENT")
    tree.themeApplicationName = "Explorer"
        
    var bottom = form.createFrame(0, 0, 0, 40)
    bottom.align = o.translate("AL_BOTTOM")

    var namePanel = form.createFrame(0, 0, 0, 40)
    namePanel.align = o.translate("AL_BOTTOM")

    namePanel.margin = 10

    var text = namePanel.textOut(10, 10, "Name: ")
    text.align = o.translate("AL_LEFT")

    var nameEdit = namePanel.createEdit(100, 10, 100, 25)
    nameEdit.text = "Script1"
    nameEdit.align = o.translate("AL_CLIENT")

    var buttons = bottom.createFrame(0, 0, 200, 0)
    buttons.align = o.translate("AL_RIGHT")

    var fso = new ActiveXObject("Scripting.FileSystemObject")
    var folderPath = getTemplatesFolderPath()
    
    list(tree.items, folderPath)

    function list(node, path) {   
        var folder = fso.getFolder(path)
        var fc = new Enumerator(folder.subFolders)
        
        for (; !fc.atEnd(); fc.moveNext()) {
            var item = fc.item()
            var newNode = node.add(item.name)
            
            if (fso.folderExists(item)) {

                list(newNode, item + "\\")
            }
        }

        fc = new Enumerator(folder.files)

        for (; !fc.atEnd(); fc.moveNext()) {
            var item = fc.item()
            var newNode = node.add(item.name)
            newNode.userData = item + ""
        }
    }

    tree.items.expand(true)

    var button = buttons.createButton(5, 5, 75, 25, "OK")
    button['default'] = true

    button.onClick = onClick
    tree.onDblClick = onClick

    function onClick(sender) {
        var node = tree.selectedItem
        var localName = nameEdit.text

        if (!checkNewReference(form, references, localName)) {
            return
        }
        
        if (node.userData) {
            var templateFileName = node.userData
            var text = fso.openTextFile(templateFileName).readAll()

            text = processTemplateText(text, formFileName)

            var fileName = path
                        
            var targetExt = templateFileName.extractFileExt()
            if (targetExt != localName.extractFileExt()) {
                localName += targetExt
            }

            fileName += localName

            if (fso.fileExists(fileName)) {
                var dialogResult = form.messageBox("File already exists:\n" + fileName + ".\n" + "Overwrite?", "", o.translate("MB_OKCANCEL | MB_ICONQUESTION"))
                if (dialogResult != o.translate("IDOK")) {
                    return
                }
            }

            var file = fso.createTextFile(fileName, true, false)
            file.writeLine(text)
            file.close()

            console.log("New script has been created: " + fileName)

            result = fileName

            sender.form.close()
        }
    }

    button = buttons.createButton(90, 5, 75, 25, "Cancel")
    button.onClick = closeFormHandler
    button.cancel = true

    form.sizeGrip = true
    form.centerControl()

    this.execute = function () {
        
        result = ""

        form.showModal()

        return result
    }

    function processTemplateText(text, formFileName) {
        var context = { formFileName : formFileName }
        
        var start = 0
        var leftStr
        var rightStr
        var str
        var count
        var l
        var r
        var b
        var startPattern = "$("

        while (true) {
            b = text.indexOf(startPattern, start)
            count = 1
            if (b < 0) {
                break
            }
            l = b + startPattern.length
            r = l + 1

            while (true) {
                if (r >= text.length) {
                    return text
                }

                var char = text.charAt(r)
                if (char == '(') {
                    count++
                } else 
                if (char == ')')
                {
                    count--;
                    if (count == 0) {
                        str = text.slice(l, r)
                        str = processValue(str, context)
                        leftStr = text.slice(0, b)
                        rightStr = text.slice(r + 1)
                        text = leftStr + str
                        start = text.length
                        text += rightStr
                        break
                    }
                }

                r++
            }
        }

        return text

        function processValue(value, context) {
            return eval(value)
        }
    }
}

this.NewScriptDialog = NewScriptDialog

this.documents = []

this.getDocumentControlByFileName = function(fileName) {
    var result = null
    documents.each(function (item) {
        var document = item.userData
        if (document)
            if (document.fileName) {
                if (document.fileName.equalsFileName(fileName)) {
                    result = item
                }
            }
    })
    return result
}

this.getActiveDocumentControlFromControl = function(activeControl) {
    if (!activeControl)
        return null

    /*
    Page or Tab Dock.
    */
    if (activeControl.docking.autoCreated) {
        activeControl = activeControl.controls.item(0)
    }

    while (activeControl) {
        var userData = activeControl.userData
        if (userData)
            if (userData.isDocument) {
                return activeControl
            }
        activeControl = activeControl.parent
    }

    return null
}


this.createConsole = function (parent) {
    var consolePanel = parent.createFrame(10, 10, 100, 120)

    consoleEdit = consolePanel.createEdit(0, 0, 0, 0, o.translate("ES_MULTILINE | ES_READONLY"))
    consoleEdit.align = o.translate("AL_CLIENT")

    var consoleEditClearMenuItem = consoleEdit.popupMenu.add("Clear")
   
    consoleEditClearMenuItem.onExecute = function () {
        consoleEdit.clear()
    }

    console.write = function (text) {
        consoleEdit.add(text)
    }

    return consolePanel
}


this.addDocumentViewAsTextMenuItem = function (menu) {

    var viewTextMenuItem = menu.Add("View As Text", "F3")
    viewTextMenuItem.userData = {
        text: viewTextMenuItem.Text
    }
    viewTextMenuItem.onUpdate = actionUpdateActiveFormDocumentRequired
    viewTextMenuItem.onExecute = documentViewAsText

    function documentViewAsText(sender) {

        var activeDocument = getActiveDocumentControl()
        var text = activeDocument.userData.designFrame.design.save()

        var form = f.CreateDialogForm(0, 0, 0, 0)
        form.clientWidth = 500
        form.clientHeight = 600
        form.sizeGrip = true

        var edit = form.createEdit(0, 0, 0, 0, o.translate("ES_MULTILINE | ES_READONLY"))
        edit.scrollBars = o.translate("SS_BOTH")
        edit.align = o.translate("AL_CLIENT")
        edit.text = text
        edit.font.name = "Courier New"

        var frame = form.createFrame(0, 0, 0, 50)
        frame.align = o.translate("AL_BOTTOM")
        frame.borderWidth = 10

        var button = frame.createButton(10, 10, 70, 25, "OK")
        button.align = o.translate("AL_RIGHT")
        button.onClick = closeFormHandler

        form.centerControl()
        form.onKeyDown = formKeyDownClose
        form.showModal()
    }

}

//WindowSystemObject (WSO) sample
//Copyright (C) Veretennikov A. B. 2004-2015


function startupDir() {
    var s = WScript.ScriptFullName;
    s = s.substring(0, s.lastIndexOf("\\") + 1);
    return s;
};

if (!this.uses) {
    uses = function (s) {
        var fso = new ActiveXObject("Scripting.FileSystemObject")
        eval(fso.openTextFile(startupDir() + s, 1, false).readAll()) 
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

o = new ActiveXObject("Scripting.WindowSystemObject")

o.enableVisualStyles = true

f = o.createForm(0,0,0,0)

f.clientWidth = 1200
f.clientHeight = 600
f.centerControl()
f.text = "Designer Example 0.1 (New features in WSO 1.1.17)"
var panels = {}

f.docking.uniqueId = "Form1"
f.docking.dropTarget = true
f.autoSplit = true
f.color = 0x00BEAE9E
f.borderWidth = 5

var designControl = null
var selectedControl = null

function removeDocument(sender) {
    var newDocuments = []
    documents.each(function (item) {
        if (item != sender) {
            newDocuments.push(item)
        }
    })
    documents = newDocuments
    updateWindowsMenu()

    designControl = null
    selectedControl = null

    sender.destroy()

    updateActiveDocument(f)
}

function createFormDocument(name, formDocument) {
    
    var clientControl = getClientControl()

	var doc = f.createFrame(10,10,100,100)
	doc.docking.pageControlTag = 1

	initDockingProperties(doc)

	doc.text = name

	formDocument = formDocument || new FormDocument()    

	var designFrame = doc.createFrame(0,0,420,400)
	designFrame.design.enabled = true
	designFrame.align = o.translate("AL_TOPLEFT")
	designFrame.name = "designFrame"

	doc.align = o.translate("AL_CLIENT")
	doc.docking.alwaysDockPage = true
	doc.docking.dropTarget = true
	//doc.docking.uniqueId = name

	formDocument.designFrame = designFrame
	formDocument.primaryControl = designFrame

    doc.UserData = formDocument

    documents.push(doc)

    doc.onUndockQuery = function (sender, undockContext) {
        if (!undockContext.controlVisible) {
            var document = sender.userData
            if (!document.checkModified(sender)) {
                undockContext.value = false
            }
        }
    }

    doc.onUndock = function (sender) {
        if (!sender.parent.visible)
        {
            removeDocument(sender)
        }
    }

    dockAsClient(doc, clientControl)

    updateWindowsMenu()

	return doc
}

function createTextDocument(name, document) {

    var clientControl = getClientControl()

    var doc = f.createFrame(10, 10, 100, 100)
    doc.docking.pageControlTag = 1

    initDockingProperties(doc)

    doc.text = name

    document = document || new Document()

    var edit = doc.createRichEdit(0, 0, 420, 400)
    edit.align = o.translate("AL_CLIENT")
    edit.name = "edit"
    edit.font.name = "Courier New"

    var copyMenuItem = edit.popupMenu.add("Cut")
    copyMenuItem.onExecute = function (sender) {
        edit.cut()
    }
    copyMenuItem.OnUpdate = function (sender) {
        sender.enabled = edit.selEnd != edit.selStart
    }

    var copyMenuItem = edit.popupMenu.add("Copy")
    copyMenuItem.onExecute = function (sender) {
        edit.copy()
    }
    copyMenuItem.OnUpdate = function (sender) {
        sender.enabled = edit.selEnd != edit.selStart
    }

    var pasteMenuItem = edit.popupMenu.add("Paste")
    pasteMenuItem.onExecute = function (sender) {
        edit.paste()
    }
    pasteMenuItem.OnUpdate = function (sender) {
        sender.enabled = edit.canPaste
    }

    var selectAllMenuItem = edit.popupMenu.add("Select All")
    selectAllMenuItem.onExecute = function (sender) {
        edit.selectAll()
    }
   
    doc.align = o.translate("AL_CLIENT")
    doc.docking.alwaysDockPage = true
    doc.docking.dropTarget = true

    document.edit = edit
    document.primaryControl = edit

    doc.userData = document

    documents.push(doc)

    doc.onUndockQuery = function (sender, undockContext) {
        if (!undockContext.controlVisible) {
            var document = sender.userData
            if (!document.checkModified(sender)) {
                undockContext.value = false
            }
        }
    }

    doc.onUndock = function (sender) {
        if (!sender.parent.visible) {
            removeDocument(sender)
        }
    }

    dockAsClient(doc, clientControl)

    updateWindowsMenu()

    return doc
}

function createImageDocument(name, document) {

    var clientControl = getClientControl()

    var doc = f.createFrame(10, 10, 100, 100)
    doc.docking.pageControlTag = 1

    initDockingProperties(doc)

    doc.text = name

    document = document || new Document()

    var image = doc.drawImage(10,10,0,0,document.fileName)

    doc.align = o.translate("AL_CLIENT")
    doc.docking.alwaysDockPage = true
    doc.docking.dropTarget = true

    document.primaryControl = doc

    doc.userData = document

    documents.push(doc)

    doc.onUndockQuery = function (sender, undockContext) {
        if (!undockContext.controlVisible) {
            var document = sender.userData
            if (!document.checkModified(sender)) {
                undockContext.value = false
            }
        }
    }

    doc.onUndock = function (sender) {
        if (!sender.parent.visible) {
            removeDocument(sender)
        }
    }

    dockAsClient(doc, clientControl)

    updateWindowsMenu()

    return doc
}

function checkModifiedQuiet(list) {
    list.each(function (item) {
        var document = item.userData
        if (document.needCheckModified(item)) {
            if (!document.save()) {
                return false
            }
        }
    })

    return true
}

function checkModified(list) {

    var needCheckList = []

    list.each(function (item) {
        var document = item.userData
        if (document.needCheckModified(item)) {
            needCheckList.push(item)
        }
    })

    if (needCheckList.length == 0) {
        return true
    }

    var form = f.createDialogForm(0, 0, 400, 300)
    var frame = form.createFrame(0, 0, 0, 40)
    frame.align = o.translate("AL_TOP")
    frame.textOut(10,10,"Save changes to the following items:")
    var view = form.createListView(0,0,0,0,o.translate("LVS_REPORT"))
    view.align = o.translate("AL_CLIENT")
    view.checkBoxes = true
    view.columns.add("Name",300)
    var bottom = form.createFrame(0, 0, 0, 40)
    bottom.align = o.translate("AL_BOTTOM")
    form.centerControl()

    needCheckList.each(function(item){
        var listItem = view.add(item.text)
        listItem.checked = true
        listItem.userData = item
    })

    frame = bottom.createFrame(0, 0, 260, 25)
    frame.align = o.translate("AL_RIGHT")

    var result = false

    var button = frame.createButton(10, 10, 75, 25, "Yes")

    button.onClick = function (sender) {

        for (var i = 0; i < view.count; i++) {
            var item = view.item(i)
            if (item.checked) {
                var document = view.item(i).userData
                if (!document.userData.save()) {
                    return
                }
            }
        }

        result = true
        sender.form.close()
    }

    button = frame.createButton(90, 10, 75, 25, "No")
    button.onClick = function (sender) {
        result = true
        sender.form.close()
    }

    button = frame.createButton(170, 10, 75, 25, "Cancel")
    button.onClick = function (sender) {
        result = false
        sender.form.close()
    }

    form.onKeyDown = formKeyDownClose

    form.showModal()

    return result
}


function dockAsClient(doc, clientControl) {
    if (clientControl) {
        clientControl.docking.dockAsNeighbour(doc, o.Translate("AL_CLIENT"))
    } else {
        doc.setBounds(0,0,100,100)
    }
}

function getClientControl() {
    var clientControl = null

    new Collection(f.controls).each(function(item){
        if (item.align == o.translate("AL_CLIENT"))
        {
            clientControl = item
        }
    })

    if (clientControl)
    if ((clientControl.type == "PageControl") || (clientControl.type == "TabControl"))
    for (var i = 0; i<2; i++)
    {
        if (clientControl.docking.autoCreated) {
            clientControl = clientControl.controls.item(0)            
        }
    }
    

    return clientControl
}

function createDockingPanel(panel, name, align) {

    initDockingProperties(panel)

    panel.text = name
    panel.align = align
    panel.docking.alwaysDockPage = true
    panel.docking.dropTarget = true
    panel.docking.uniqueId = name
    panels[name] = panel
    return panel
}

function createPanel(name)
{
	var panel = f.createFrame(10, 10, 150, 100)

	return createDockingPanel(panel, name, o.translate("AL_LEFT"))    	
}

function createBottomPanel(name)
{
	var panel = f.createFrame(10, 10, 100, 120)

	return createDockingPanel(panel, name, o.translate("AL_BOTTOM"))
}

function createConsolePanel(name) {
    var panel = createConsole(f)

    return createDockingPanel(panel, name, o.translate("AL_BOTTOM"))
}

function addToolBoxEvents(form) {

    form.design.addEventHandler("OnControlCreate", function (sender, control) {

        toolBox.buttonsAllUp()

        var detailsFunction = Designer.details[control.Type]
        if (detailsFunction) {
            control.design.showDetailsButton = true
            control.design.onDetailsButtonClick = detailsFunction
        }
    })
    
    form.design.addEventHandler("OnActiveControlChange", function (sender, control) {
        setDesignControl(control)
    })
}

function createToolBox(name)
{
    toolBox = new ToolBox(f, name)

    toolBox.create()

    panels[name] = toolBox.getPanel()

    designControl = null

    addToolBoxEvents(f)

    return toolBox.getPanel()
}
    
function setDesignControl(control)
{
    if (designControl != control) {

        designControl = control

        if (designControl) {
            selectedControl = null

            propertiesPanel.text = "Properties" + " - " + designControl.type
        } else {
            propertiesPanel.text = "Properties"
        }

        if (!designControl || !designControl.design.enabled) {
            propertyGridTabs.ItemIndex = 0
            return
        }


        var reuse = true
        var propertyGrid

        if (reuse) {
            var name = ".PropertyGrid_" + designControl.Type

            var tab = propertyGridTabs[name]
            if (tab == null) {
                tab = propertyGridTabs.CreateTab("")
                tab.name = name
                tab.userData = propertyGridTabs.controls.count - 1

                propertyGrid = tab.createPropertyGrid(0, 0, 0, 0)
                propertyGrid.align = o.translate("AL_CLIENT")
            }
            propertyGrid = tab.Controls.item(0)
            propertyGridTabs.ItemIndex = tab.UserData
        } else {
            propertyGrid = propertyGridTabs.controls.item(0).controls.item(0)
        }

        if (!propertyGrid.userData)
            propertyGrid.userData = new PropertyEditor(propertyGrid)

        propertyGrid.userData.buildPropertyGrid(designControl, reuse,
            getActiveDocumentControlFromControl(designControl))

    }

    updateSolution()
}

function setSelectedControl(control)
{
    if (designControl) {
        selectedControl = null
        return
    }
    if (selectedControl != control) {
        selectedControl = control
    }
}

function createProperties(Name) {
    var panel = f.CreateFrame(10, 10, 350, 100)

    initDockingProperties(panel)

    panel.text = Name
    panel.align = o.translate("AL_RIGHT")
    panel.docking.alwaysDockPage = true
    panel.docking.dropTarget = true
    panel.docking.uniqueId = Name
    panels[Name] = panel

    propertyGridTabs = panel.createTabControl(0, 0, 0, 0)
    propertyGridTabs.tabsVisible = false
    propertyGridTabs.align = o.translate("AL_CLIENT")
    var tab = propertyGridTabs.createTab("")
    tab.name = "PropertyGrid_Default"
    tab.userData = propertyGridTabs.controls.count - 1

    var propertyGrid = tab.createPropertyGrid()
    propertyGrid.align = o.translate("AL_CLIENT")

    PropertyGridFrame = panel

    //setDesignControl(Panel.CreateEdit())
    //setDesignControl(Panel.CreateComboBox())
    
    propertyGridTabs.ItemIndex = 0

    var docDescriptor = {
        filter: "-",
        useDesignControl : true
    }

    panel.userData = docDescriptor

    return panel
}

/*
doc1 = createFormDocument("Doc1")
for (i = 2; i<4; i++)
{
    createFormDocument("Doc" + i)
}

doc1.Parent.Visible = true
*/

createToolBox("ToolBox")

//searchPanel = createBottomPanel("Search")
searchPanel = null

consolePanel = createConsolePanel("Console")

propertiesPanel = createProperties("Properties")

if (searchPanel) {
    with (searchPanel) {
        with (createEdit(0, 0, 0, 0, o.translate("ES_MULTILINE | ES_READONLY"))) {
            align = o.translate("AL_CLIENT")
            add("Search result 1")
            add("Search result 2")
            add("Search result 3")
        }
    }
    searchPanel.Docking.DockAsNeighbour(consolePanel, o.Translate("AL_CLIENT"))
}


solutionPanel = createPanel("Solution")
solutionTreeView = new SolutionTreeView(solutionPanel)

/*
IndexPanel = createPanel("Index")
var ListBox = IndexPanel.CreateListBox(0,0,0,0)
ListBox.Align = o.Translate("AL_CLIENT")
for (i = 1; i<5; i++)
{
	ListBox.Add("Item 1."+i)
}
*/

//solutionPanel.Docking.DockAsNeighbour(IndexPanel, o.Translate("AL_CLIENT"))

HelpPanel = createPanel("Help")
solutionPanel.Docking.DockAsNeighbour(HelpPanel, o.Translate("AL_CLIENT"))
solutionPanel.Parent.Visible = true
HelpPanel.TextOut(10, 10, "Designer Example 0.1").font.bold = true
HelpPanel.TextOut(10, 40, "See Designer page\nin the Help (F1)")

fileMenu = f.Menu.Add("File")

function getActiveDocumentControl() {
    var activeForm = o.activeForm 
    if (!activeForm)
        return null

    var activeControl = activeForm.activeControl
    var result = getActiveDocumentControlFromControl(activeControl)

    if (result) {
        return result
    }

    if (designControl) {
        return getActiveDocumentControlFromControl(designControl)
    }

    return getActiveDocumentControlFromControl(selectedControl)
}

function actionUpdateActiveDocumentRequired(sender) {
    var activeDocument = getActiveDocumentControl()
    sender.enabled = activeDocument != null
    var docName = ""
    if (activeDocument != null) {
        docName = " " + activeDocument.text
    }

    sender.text = sender.userData.text + docName
}

function actionUpdateActiveFormDocumentRequired(sender) {
    var activeDocument = getActiveDocumentControl()
    
    if (activeDocument)
    if ((activeDocument.userData instanceof FormDocument) == false) {
        activeDocument = null
    }

    sender.enabled = activeDocument != null
    var docName = ""
    if (activeDocument != null) {
        docName = " " + activeDocument.text
    }

    sender.text = sender.userData.text + docName
    sender.visible = sender.enabled
}

function updateSolution(force, activeDocument) {
    var activeDocument = activeDocument || getActiveDocumentControl()
    solutionTreeView.update(activeDocument, force)
}


newMenuItem = fileMenu.add("New", "Ctrl+N")
newMenuItem.onExecute = function () {
    var doc = createFormDocument("Form1")
    doc.setFocus()
}

openMenuItem = fileMenu.add("Open...", "Ctrl+O")
openMenuItem.userData = openMenuItem.Text
openMenuItem.onExecute = function () {
    var formDocument = new FormDocument()
    var text = formDocument.open()
    if (text) {
        var doc = createFormDocument("",formDocument)
        var designFrame = doc.userData.designFrame
        doc.userData = formDocument
        formDocument.designFrame = designFrame
        formDocument.designFrame.design.load(text, o.translate("DESIGN_LOAD_HIDDEN"), formDocument.fileName)
        doc.text = formDocument.fileName.extractFileName()
        doc.setFocus()
        updateWindowsMenu()
    }
}

saveMenuItem = fileMenu.Add("Save", "Ctrl+S")
saveMenuItem.userData = {
        text: saveMenuItem.Text
    }

saveMenuItem.onUpdate = actionUpdateActiveDocumentRequired
saveMenuItem.onExecute = function () {
    var activeDocument = getActiveDocumentControl()
    var document = activeDocument.userData
    if (document.save()) {
        activeDocument.text = document.fileName.extractFileName()
        updateSolution(true)
    }
}

fileMenu.add("-")

runMenuItem = fileMenu.Add("Run", "F5")
runMenuItem.userData = {
    text: runMenuItem.Text
}

runMenuItem.onExecute = function (sender) {

    if (!checkModifiedQuiet(documents)) {
        return
    }

    var fileName = sender.userData.fileName
    console.log("Running " + fileName)

    var shell = new ActiveXObject("WScript.Shell")
    shell.Run('"' + fileName + '"')
}

runMenuItem.onUpdate = function (sender) {

    var activeDocumentControl = getActiveDocumentControl()

    var scriptFileName = ""
    var docName = ""

    if (activeDocumentControl)
    {
        if (activeDocumentControl.userData instanceof FormDocument) {
            var formDocument = activeDocumentControl.userData

            $(formDocument.designFrame.design.references).visit(function (item) {

                if (item.main) {
                    scriptFileName = solutionTreeView.getFullFileNameByReferences(item)
                }
            })
        } else
            if (activeDocumentControl.userData instanceof TextDocument) {
              var document = activeDocumentControl.userData
              scriptFileName = document.fileName
        }
        docName = " " + activeDocumentControl.text
    }

    enabled = scriptFileName.length > 0

    sender.userData.fileName = scriptFileName

    sender.enabled = enabled    
    sender.text = sender.userData.text + docName
    sender.visible = enabled
}

fileMenu.add("-")

fileMenu.Add("Exit").OnExecute = closeFormHandler

viewMenu = f.Menu.Add("View")
previewMenuItem = viewMenu.Add("Preview", "F2")
previewMenuItem.userData = {
       text: previewMenuItem.Text
   }

previewMenuItem.onUpdate = actionUpdateActiveFormDocumentRequired
previewMenuItem.onExecute = function () {
    var activeDocument = getActiveDocumentControl()

    if (activeDocument.userData.needCheckModified()) {
        if (!activeDocument.userData.save()) {
            return
        }
    }

    //var text = activeDocument.userData.designFrame.design.save()
    var form = f.createDialogForm(0, 0, 500, 400)
    form.text = "Preview"
    form.sizeGrip = true
    form.design.open(activeDocument.userData.fileName)
    form.centerControl()
    form.onKeyDown = formKeyDownClose
    form.showModal()
}

viewMenu.add("-")

addDocumentViewAsTextMenuItem(viewMenu)

function formKeyDownClose(Sender, Key) {
    if (Key == o.Translate("VK_ESCAPE")) {
        Sender.Close()
    }
}



windowsMenu = f.menu.add("Windows")

updateWindowsMenu()

function updateWindowsMenu() {
    
    if (typeof(windowsMenu) == 'undefined') {
        return
    }

    windowsMenu.clear()

    for (name in panels) {
        menuItem = windowsMenu.add(name)
        menuItem.onExecute = showPanel
    }

    if (documents.length > 0) {
        windowsMenu.add("-")
    }

    documents.each(function (item) {
        menuItem = windowsMenu.add(item.text)
        menuItem.userData = item
        menuItem.onExecute = showPanel
    })
}

function ensureVisible(panel) {
    while (true) {
        panel.Visible = true
        if (panel.type == "Form")
            break
        panel = panel.Parent
    }
}

function showPanel(sender)
{
    panel = sender.userData || panels[sender.Text]
    ensureVisible(panel)
}

layoutMenu = f.menu.add("Layout")
layoutMenu.Add("Save").onExecute = saveLayout
layoutMenu.Add("Load").onExecute = loadLayout
layoutMenu.Add("Clear").onExecute = clearLayout

initHelpMenu(f.menu.add("Help"))

f.onCloseQuery = function (sender, resultPtr) {
    if (!checkModified(documents)) {
        resultPtr.value = false
    }
}

function updateActiveDocument(form) {
    var activeControl = form.activeControl
    if (activeControl) {
        var documentControl = getActiveDocumentControlFromControl(activeControl)
        if (documentControl) {
            setSelectedControl(activeControl)
        }
    }
    updateSolution()
}

function updateFormEvents(form) {

    form.onActiveControlChange = function (sender) {
        updateActiveDocument(form)        
    }
    /*
    f.design.onDesignerAdd = function (sender, control) {
        console.log("Designer add: " + sender.type+","+control.type)
    }

    f.design.onDesignerRemove = function (sender, control) {
        console.log("Designer remove: " + sender.type + "," + control.type)
    }*/
}

updateFormEvents(f)

loadLayout()

f.Show()

o.Run()




