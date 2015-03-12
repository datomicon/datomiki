var run = require('childish-process').run
var hen = require('./event-handlers').test // handle event notifications :)
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

  run(test, {eventHandlers: hen})
}
