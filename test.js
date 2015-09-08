var test = require('tape')
var argsToArray = require('./')

test(function (t) {
  t.equal(argsToArray({ 0: 'foo', 1: 'bar' }), ['foo', 'bar'])
  t.equal(argsToArray({ 0: 'foo' }), ['foo'])
})
