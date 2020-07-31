"use strict";

const npmPackDependents = require("../lib");

npmPackDependents("ul").then(dependents => {
    console.log(dependents);
    // =>
    // [ '3abn',
    //   ...
    //   'wrabbit' ]
}).catch(console.error)
