var _ = require('lodash')
var path = require('path')
var run = require('childish-process').run
var eho = require('./event-handlers')
var args = require('yargs')
  .string("e").alias("e", "--event-handle")
  .describe("e", "use a predefined event-handlers recipe")
  .argv

module.exports = function (gulp, opts) {
  o = opts || {}
  _.merge(o, {exclude: [], eventHandlers: eho.default})
  if (args.e && eho[args.e]) o.eventHandlers = eho[args.e]
  var scripts = _.keys(require(path.join(process.cwd(), 'package.json')).scripts)
  scripts = _.difference(scripts, opts.exclude)
  if (scripts.length) {
    scripts.forEach(function (script) {
      gulp.task(script, function () {
        run('npm run ' + script, {eventHandlers: o.eventHandlers})
      })
    })
  }
}
