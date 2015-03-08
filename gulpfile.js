var gulp = require('gulp')
var shell = require('gulp-shell')
var keys = require('lodash').keys

// counting on the presence of 'build' and 'start'
var scripts = keys(require('./package.json').scripts)

scripts.forEach(function(script) {
  gulp.task(script, shell.task('npm run ' + script))
})

gulp.task('watch', function(){
  gulp.watch('./*.ki.js', ['build'])
})

gulp.task('default', ['start', 'build', 'watch'])
