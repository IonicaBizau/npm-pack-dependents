"use strict";

const npmPackDependents = require("../lib");

npmPackDependents("ul", (err, dependents) => {
    console.log(err || dependents);
    // =>
    // [ '3abn',
    //   ...
    //   'wrabbit' ]
})

npmPackDependents("ul").then(dependents => {
    console.log(dependents);
    // =>
    // [ '3abn',
    //   ...
    //   'wrabbit' ]
})
