

exports.wrap = function(module) {
    var result = {};
    Object.keys(module).forEach(function(key) {
        result[key] = transform(module[key]);
    });
    return result;
};

function transform(fn) {
    return function(options, success, failure) {
        console.log("function transform running...");
        fn(
            options, 
            function() {
                console.log("...done.");
                success.apply(this, arguments);
            }, 
            function() {
                console.log("...done.");
                failure.apply(this, arguments);
            });
    }

    function done(fn) {
        return function() {
            console.log("...done.");
            fn.apply(this, arguments);
        };
    }
}