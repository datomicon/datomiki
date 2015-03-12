var _ = require('lodash')
var path = require('path')
var run = require('childish-process').run

module.exports = function (gulp, opts) {
  opts = opts || {}
  _.merge(opts, {exclude: []})
  var scripts = _.keys(require(path.join(process.cwd(), 'package.json')).scripts)
  scripts = _.difference(scripts, opts.exclude)
  if (scripts.length) {
    scripts.forEach(function (script) {
      gulp.task(script, function () {
        run('npm run ' + script)
      })
    })
  }
}
