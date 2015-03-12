var path = require('path')
var keys = require('lodash').keys
var run = require('childish-process').run

module.exports = function (gulp, opts) {
  var scripts = keys(require(path.join(process.cwd(), 'package.json')).scripts)

  scripts.forEach(function (script) {
    gulp.task(script, function () {
        run('npm run ' + script)
      })
    })
}
