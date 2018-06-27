

exports.wrap = function(module) {
    var result = {};
    Object.keys(module).forEach(function(key) {
        console.log("Running Transform....");
        result[key] = transform(module[key]);
    });
    return result;
}

function transform(fn) {
    return function(success) {
        fn(done(success));
    };
    

    function done(fn) {
        return function() {
            console.log("...done.");
            fn.apply(this, arguments);
        }
    }
}