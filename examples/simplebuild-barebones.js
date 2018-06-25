

exports.succeed = function succeed(options, success, failure) {
    success();
}

exports.fail = function fail(options, success, failure) {
    failure();
}

exports.succeedOrFail = function succeedOrFail(options, success, failure) {
    if (options.fail) failure("Failed, as configured");
    else success();
}