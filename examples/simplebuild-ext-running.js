(function() {
    "use strict";

    exports.wrap = function(module) {
        var result = {};
        Object.keys(module).forEach(function(key) {
            result[key] = transform(module[key]);
        });
        return result;
    };

    function transform(fn) {
        return function(options, success, failure) {
            console.log("Running...");
            fn(options, done(success), done(failure));
        };

        function done(fn) {
            return function() {
                console.log("...done.");
                fn.apply(this, arguments);
            };
        }
    }

}());