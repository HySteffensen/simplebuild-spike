

exports.succeed = function succeed(options, success, failure) {
    console.log("This will succeed.");
    success();
}

exports.fail = function fail(options, success, failure) {
    console.log("This will fail.");
    failure("Failed, as requested.");
}

exports.succeedOrFail = function succeedOrFail(options, success, failure) {
    console.log("This will succeed or fail.");
    if (options.fail) failure("Failed, as configured");
    else success();
}