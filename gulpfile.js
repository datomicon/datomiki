var gulp = require('gulp')
var shell = require('gulp-shell')

var scripts = ['build', 'build:min', 'start', 'test']

scripts.forEach(function(script) {
  gulp.task(script, shell.task('npm run ' + script))
})

gulp.task('watch', function(){
  gulp.watch('./*.ki.js', ['build'])
})

gulp.task('default', ['start', 'build', 'watch'])
