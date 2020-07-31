"use strict"

const dependants = require("npm-dependants")

/**
 * npmPackDependents
 * Get the dependents of a npm package. This will resolve with an array of
 * strings (the names of the dependents).
 *
 * @name npmPackDependents
 * @function
 * @param {String} name The package name.
 * @returns {Promise} A promise.
 */
module.exports = async function npmPackDependents (name) {
    const deps = []
    for await (const dependant of dependants(name)) {
        deps.push(dependant)
    }
    return deps
}
