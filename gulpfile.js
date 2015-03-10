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

// override the test script task to also send notifications
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

// override the build:watch script task to also send notifications
gulp.task('build:watch', function() {
  run("npm run build:watch", {eventHandlers: {
    stderr: function(data) {
      notifier.notify({message: 'The build has failed!'})}
  }})
})

gulp.task('test:watch', function() {
  gulp.watch(['./datomiki.ki.js', 'test/*.spec.coffee'], ['test'])
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
