'use strict'

module.exports = function argsArrayToArray (args) {
  var argsArray = new Array(args.length)
  for (var i = 0; i < argsArray.length; i++) {
    argsArray[i] = args[i]
  }
  return argsArray
}
