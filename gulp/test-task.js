var run = require('childish-process').run
var eho = require('./event-handlers')
var teh = require('./event-handlers').test // default: test event handling
var args = require('yargs')
  .string("t").alias("t", "--test").describe("t", "tell gulp what to test")
  .string("e").alias("e", "--event-handle")
  .describe("e", "use a predefined event-handlers recipe")
  .argv

module.exports = function (opts) {
  var o = opts || {}
  o.testCmd = o.testCmd || 'npm test'
  o.testsRe = o.testRe || /\.js$/

  return function (event) {
    if (typeof event !== "function" && typeof event === "object") {
      if (event.type === "changed" || event.type === "added")
        if (o.testsRe.test(event.path))
          o.testCmd += ' ' + event.path
    }
    else if (args.t)
      o.testCmd += ' ' + args.t

    run(o.testCmd, {eventHandlers: (args.e && eho[args.e]) ? eho[args.e] : teh})
  }
}
