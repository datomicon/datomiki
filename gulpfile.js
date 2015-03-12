var gulp = require('gulp')
var test = require('./gulp/npm-test-task')
var run = require('childish-process').run
var notifier = require('node-notifier')

// counting on the presence of 'build' and 'start'
require('./gulp/npm-scripts')(gulp, {exclude: ['test', 'build:watch']})

// extend 'test'
gulp.task('test', test)

// extend 'build:watch'
gulp.task('build:watch', function() {
  run('npm run build:watch', {eventHandlers: {
    stderr: function(data) {
      notifier.notify({message: 'The build has failed!'})}
  }})
})

gulp.task('wait-up', function () {
  run("./node_modules/.bin/dbin gets-ok?")
})

gulp.task('test:watch', ['wait-up'], function() {
  gulp.watch(['./datomiki.js', 'test/*.spec.coffee'], test)
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
