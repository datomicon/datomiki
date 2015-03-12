var run = require('childish-process').run
var notifier = require('node-notifier')
var args = require('yargs')
  .string("t").alias("t", "--test").describe("n", "tell gulp what to test")
  .boolean("n").alias("n", "--test-new").describe("n", "only test/new.spec.coffee")
  .argv

module.exports = function (event) {
  var test = 'npm test'
  if (typeof event !== "function" && typeof event === "object") {
    if (event.type === "changed" || event.type === "added")
      if (/.spec.coffee$/.test(event.path))
        test += ' ' + event.path
  }
  else {
    if (args.t) test += ' ' + args.t
    if (args.n) test += ' test/new.spec.coffee'
  }
  run(test, {eventHandlers: {close: function(code) {
      if (code === 0) {
        notifier.notify({message: 'The tests have passed.'})
      }
      else {
        notifier.notify({message: 'Tests fail!'})
      }
  }}})
}
