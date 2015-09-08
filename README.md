# args-to-array
[![Build Status](https://travis-ci.org/bsiddiqui/args-to-array.svg?branch=master)](https://travis-ci.org/bsiddiqui/args-to-array) [![Code Climate](https://codeclimate.com/github/bsiddiqui/args-to-array/badges/gpa.svg)](https://codeclimate.com/github/bsiddiqui/args-to-array) [![Version](https://badge.fury.io/js/args-to-array.svg)](http://badge.fury.io/js/args-to-array) [![Downloads](http://img.shields.io/npm/dm/args-to-array.svg)](https://www.npmjs.com/package/args-to-array)

Coverts a javascript arguments object into an array

## Install
``
$ npm install --save args-to-array
``

## Usage
```js
var argsToArray = require('args-to-array')

function add (1, 2) {
  args = argsToArray(arguments)
  // => [1, 2]
  ...
}
```

## API

#### `argsToArray(arguments)` -> `array`

##### arguments
*Required* <br>
Type: `object`

The javascript [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
