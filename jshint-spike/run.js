

var jshint = require("./jshint_runner");

var validationWillPass = ["(function() {'use strict';}());", "console.log('hello, world!');"];
var validationWillFail = ["'use strict';", "console.log('hello, world!');"];

jshint.lintSource(validationWillPass);
jshint.lintSource(validationWillFail);