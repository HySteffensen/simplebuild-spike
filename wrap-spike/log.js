

exports.success = function(options, success, failure) {
    console.log("SUCCESS");
    success();
}

exports.failure = function(options, success, failure) {
    console.log("FAILURE");
    failure();
}

