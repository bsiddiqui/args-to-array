'use strict'

module.exports = function argsToArray () {
  var args = new Array(arguments.length)
  for (var i = 0; i < args.length; i++) {
    args[i] = arguments[i]
  }
  return args
}
