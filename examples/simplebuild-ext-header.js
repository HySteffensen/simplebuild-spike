(function() {

    "use strict";

    exports.addHeader = function(module) {
        var result = {};
        Object.keys(module).forEach(function(key) {
            result[key] = transform(module[key]);
        });
        return result;
    };

    function transform(fn) {
        return function(options, success, failure) {
            console.log(fn.title);
            console.log("---------");
            fn(options, success, failure);
        };
    }







}());