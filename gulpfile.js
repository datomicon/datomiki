var gulp = require('gulp')
var shell = require('gulp-shell')
var keys = require('lodash').keys
var run = require('childish-process').run
var notifier = require('node-notifier')

// counting on the presence of 'build' and 'start'
var scripts = keys(require('./package.json').scripts)

scripts.forEach(function(script) {
  gulp.task(script, shell.task('npm run ' + script))
})

// override the test script task
gulp.task('test', function() {
  run("npm test", {eventHandlers: {close: function(code) {
      if (code === 0) {
        notifier.notify({message: 'The tests have passed.'})
      }
      else {
        notifier.notify({message: 'Tests fail!'})
      }
  }}})
})

gulp.task('test:watch', function() {
  gulp.watch('./datomiki.ki.js', ['test'])
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
