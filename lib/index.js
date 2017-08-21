"use strict"

const url = require("url")
    , req = require("jsonrequest")

/**
 * npmPackDependents
 * Get the dependents of a npm package. This will resolve with an array of
 * strings (the names of the dependents).
 *
 * @name npmPackDependents
 * @function
 * @param {String} name The package name.
 * @param {Function} cb The callback function.
 * @returns {Promise} A promise.
 */
module.exports = function npmPackDependents (name, cb) {
    const pageSize = 1000

    function getURLForPage(page) {
        return url.format({
            protocol: 'https',
            host: 'skimdb.npmjs.com',
            pathname: '/registry/_design/app/_view/dependedUpon',
            query: {
                group_level: 2,
                startkey: JSON.stringify([name]),
                endkey: JSON.stringify([name, {}]),
                limit: pageSize,
                skip: page * pageSize,
                state: 'update_after'
            }
        })
    }

    return new Promise((res, rej) => {
        const all = []
        function seq(page) {
            const url = getURLForPage(page)
            req(url, (err, docs) => {
                if (err) {
                    rej(err)
                    cb && cb(err)
                    return
                }
                docs = docs.rows.map(c => c.key[1])
                all.push.apply(all, docs)
                if (!docs.length) {
                    res(all)
                    cb && cb(null, all)
                } else {
                    seq(page + 1)
                }
            })
        }
        seq(0)
    })
}
