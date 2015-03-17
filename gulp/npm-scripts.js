var _ = require('lodash')
var path = require('path')
var run = require('childish-process')
var args = require('yargs')
  .string("e").alias("e", "--event-handle")
  .describe("e", "use a predefined event-handlers template")
  .argv

module.exports = function (gulp, opts) {
  var o = opts || {}
  _.merge(o, {exclude: [], customize: {}})
  var scripts = _.keys(require(path.join(process.cwd(), 'package.json')).scripts)
  scripts = _.difference(scripts, o.exclude)
  if (o.templates) {
    run = run({childish: {templates: require(o.templates)}})
  }

  if (scripts.length) {
    scripts.forEach(function (script) {
      gulp.task(script, function () {
        var recipe = args.e || o.customize[script] || o.default || 'default'
        if (typeof recipe === "string") {
          recipe = {template: recipe}
        }
        run('npm run ' + script, {childish: recipe})
      })
    })
  }
}
