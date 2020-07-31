
















# npm-pack-dependents

Get the dependents' names of a npm package.




## Installation

```sh
$ npm i npm-pack-dependents
```









## Example






```js
"use strict";

const npmPackDependents = require("npm-pack-dependents");

npmPackDependents("ul").then(dependents => {
    console.log(dependents);
    // =>
    // [ '3abn',
    //   ...
    //   'wrabbit' ]
}).catch(console.error)

```






## Documentation





### `npmPackDependents(name)`
Get the dependents of a npm package. This will resolve with an array of
strings (the names of the dependents).

#### Params

- **String** `name`: The package name.

#### Return
- **Promise** A promise.






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
