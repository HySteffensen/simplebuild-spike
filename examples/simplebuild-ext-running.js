(function() {
    "use strict";

    exports.wrap = function(module) {
        var result = {};
        Object.keys(module).forEach(function(key) {
            result[key] = transform(module[key]);
            result[key].title = module[key].title;
            result[key].description = module[key].description;
        });
        return result;
    };

    function transform(fn) {
        return function(options, success, failure) {
            console.log("Running Transform...");
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