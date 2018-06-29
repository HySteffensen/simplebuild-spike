(function() {
    
    "use strict";

    var jshint = require("jshint").JSHINT;

     exports.lintSource = function lintSource(source) {
        var pass = jshint(source);

        if (pass) {
            console.log("PASS\n");
        }
        else {
            console.log("FAILED\n");
            jshint.errors.forEach(function(error) {
                console.log(error.line + ": " + error.evidence.trim());
                console.log("   " + error.code + " - " + error.reason);
            });

            // console.log(jshint.errors);
            // console.log(jshint.data());
        }
    }

}());
