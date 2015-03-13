var gulp = require('gulp')
var run = require('childish-process').run
var eho = require('./gulp/event-handlers')
var notifier = require('node-notifier')

// counting on the presence of 'build' and 'start'
require('./gulp/npm-scripts')(gulp, {exclude: ['test', 'build:watch']})

// modify 'test'; reuse test fn for gulp test:watch
var test = require('./gulp/test-task')({testsRe: /\.spec\.coffee$/,
                                        testCmd: './node_modules/.bin/mocha'})
gulp.task('test', test)

// extend 'build:watch'
gulp.task('build:watch', function() {
  run('npm run build:watch', {eventHandlers: eho.build})
})

gulp.task('wait-up', function () {
  run("./node_modules/.bin/dbin gets-ok?")
})

gulp.task('test:watch', ['wait-up'], function() {
  gulp.watch(['./datomiki.js', 'test/*.spec.coffee'], test)
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
