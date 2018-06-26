(function() {

    "use strict";

    var barebones = require('./simplebuild-barebones.js');

    var runningExt = require("./simplebuild-ext-running.js");
    var headerExt = require("./simplebuild-ext-header.js");

    barebones = headerExt.addHeader(runningExt.wrap(barebones));

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