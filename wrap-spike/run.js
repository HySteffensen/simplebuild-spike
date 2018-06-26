
var ext = require("./ext");
var log = ext.wrap(require("./log"));

log.success({}, success, failure);

log.failure({}, success, failure);

function success() {
    console.log("Succeeded!");
}

function failure(message) {
    console.log("Failed! " + message);
}