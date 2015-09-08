var test = require('tape')
var argsToArray = require('./')

test(function (t) {
  function test () {
    return argsToArray(arguments)
  }
  t.equal(test(1, 2), [1, 2])
  t.equal(test(1), [1])
  t.end()
})
