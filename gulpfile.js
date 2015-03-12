var gulp = require('gulp')
var shell = require('gulp-shell')
var keys = require('lodash').keys
var run = require('childish-process').run
var notifier = require('node-notifier')

var argv = require('yargs')
  .boolean("n").alias("n", "--test-new").describe("n", "= test/new.spec.coffee")
  .argv

// counting on the presence of 'build' and 'start'
var scripts = keys(require('./package.json').scripts)

scripts.forEach(function(script) {
  gulp.task(script, shell.task('npm run ' + script))
})

// override the test script task to also send notifications
gulp.task('test', function() {
  specific = (argv.n) ? ' test/new.spec.coffee' : ''
  run('npm test' + specific, {eventHandlers: {close: function(code) {
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
  run('npm run build:watch', {eventHandlers: {
    stderr: function(data) {
      notifier.notify({message: 'The build has failed!'})}
  }})
})

gulp.task('wait-up', shell.task("./node_modules/.bin/dbin gets-ok?"))

gulp.task('test:watch', ['wait-up'], function() {
  gulp.watch(['./datomiki.js', 'test/*.spec.coffee'], ['test'])
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
