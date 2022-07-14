// Module for example, installing and using
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const cleanArray = _.flattenDeep(items)

console.log(cleanArray);