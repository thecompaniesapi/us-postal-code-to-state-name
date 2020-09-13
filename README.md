# US Postal Code To State Name

[![npm](https://img.shields.io/npm/v/@prospectwith/us-postal-code-to-state-name.svg)](https://www.npmjs.com/package/@prospectwith/us-postal-code-to-state-name)
[![npm](https://img.shields.io/npm/dm/@prospectwith/us-postal-code-to-state-name.svg)](https://npm-stat.com/charts.html?package=@prospectwith/us-postal-code-to-state-name)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/prospectwith/us-postal-code-to-state-name.svg)](http://isitmaintained.com/project/prospectwith/us-postal-code-to-state-name "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/prospectwith/us-postal-code-to-state-name.svg)](http://isitmaintained.com/project/prospectwith/us-postal-code-to-state-name "Percentage of issues still open")
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/prospectwith/us-postal-code-to-state-name/blob/master/LICENSE)

## Installation

```
npm install @prospectwith/us-postal-code-to-state-name

# Or if you prefer using yarn
yarn add @prospectwith/us-postal-code-to-state-name
```

### Imports

```js
const { convertPostalCodeToStateName } = require("@prospectwith/us-postal-code-to-state-name")

convertPostalCodeToStateName("al") // Will output Alabama

const { data } = require("@prospectwith/us-postal-code-to-state-name")

console.log(data) // Will output the full data object with all postal codes, abbreviations and state names
```

## Contributing

You are more than welcome to contribute to this package. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

## License

This package is [MIT licensed](LICENSE).
