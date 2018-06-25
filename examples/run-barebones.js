(function() {

    "use strict";

    var runningExt = require("./simplebuild-ext-running.js");
    var barebones = runningExt.wrap(require('./simplebuild-barebones.js'));

    console.log("Running succeed()");
    barebones.succeed({}, success, failure);

    console.log("Running fail()");
    barebones.fail({}, success, failure);

    console.log("Run succeedOrFail()");
    barebones.succeedOrFail({ fail: true }, success, failure);

    function success() {
        console.log("Succeeded!");
    }

    function failure(message) {
        console.log("Failed! " + message);
    }

}());