"use strict";

var npmPackDependents = require("../lib");

npmPackDependents("ul").then(function (dependents) {
    console.log(dependents);
    // =>
    // [ '3abn',
    //   ...
    //   'wrabbit' ]
}).catch(console.error);