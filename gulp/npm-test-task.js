var run = require('childish-process').run
var eho = require('./event-handlers')
var teh = require('./event-handlers').test // test event handling :)
var args = require('yargs')
  .string("t").alias("t", "--test").describe("t", "tell gulp what to test")
  .string("e").alias("e", "--event-handle")
  .describe("e", "use a predefined event-handlers recipe")
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

  run(test, {eventHandlers: (args.e && eho[args.e]) ? eho[args.e] : teh})
}
