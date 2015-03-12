var run = require('childish-process').run
var notifier = require('node-notifier')
var args = require('yargs')
  .string("t").alias("t", "--test").describe("t", "tell gulp what to test")
  .argv

module.exports = function (event) {
  var test = 'npm test'
  if (typeof event !== "function" && typeof event === "object") {
    if (event.type === "changed" || event.type === "added")
      if (/.spec.coffee$/.test(event.path))
        test += ' ' + event.path
  }
  else if (args.t)
    test += ' ' + args.t
  run(test, {eventHandlers: {close: function(code) {
      if (code === 0) {
        notifier.notify({message: 'The tests have passed.'})
      }
      else {
        notifier.notify({message: 'Tests fail!'})
      }
  }}})
}
