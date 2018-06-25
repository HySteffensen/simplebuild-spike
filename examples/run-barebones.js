

var barebones = require('./simplebuild-barebones');

console.log("run succeed()");
barebones.succeed({}, success, failure);

console.log("run fail()");
barebones.fail({}, success, failure);

console.log("Run succeedOrFail()");
barebones.succeedOrFail({ fail: true }, success, failure);

function success() {
    console.log("Succeeded!");
}

function failure(message) {
    console.log("Failed! " + message);
}