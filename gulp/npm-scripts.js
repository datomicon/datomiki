var _ = require('lodash')
var path = require('path')
var run = require('childish-process').run
var eho = require('./event-handlers')
var args = require('yargs')
  .string("e").alias("e", "--event-handle")
  .describe("e", "use a predefined event-handlers recipe")
  .argv

module.exports = function (gulp, opts) {
  o = opts || {eventHandlers: {}}
  _.merge(o, {exclude: [], eventHandlers: eho.default})
  var scripts = _.keys(require(path.join(process.cwd(), 'package.json')).scripts)
  scripts = _.difference(scripts, opts.exclude)
  if (scripts.length) {
    scripts.forEach(function (script) {
      if (args.e && eho[args.e])
        o.eventHandlers = eho[args.e]
      else if(opts.eventHandlers[script]) {
        if(typeof opts.eventHandlers[script] === "object")
          o.eventHandlers = opts.eventHandlers[script]
        else if(typeof opts.eventHandlers[script] === "string" &&
                eho[opts.eventHandlers[script]])
          o.eventHandlers = eho[opts.eventHandlers[script]]
        }
      gulp.task(script, function () {
        run('npm run ' + script, {eventHandlers: o.eventHandlers})
      })
    })
  }
}
