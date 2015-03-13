var gulp = require('gulp')
var run = require('childish-process').run

// counting on the presence of 'build' and 'start'
require('./gulp/npm-scripts')(gulp, {
  exclude: ['test'],
  eventHandlers: {"build:watch": "build-w"}
})

// modify 'test'; reuse test fn for gulp test:watch
var test = require('./gulp/test-task')({testsRe: /\.spec\.coffee$/,
                                        testCmd: './node_modules/.bin/mocha'})
gulp.task('test', test)

gulp.task('wait-up', function () {
  run("./node_modules/.bin/dbin gets-ok?")
})

gulp.task('test:watch', ['wait-up'], function() {
  gulp.watch(['./datomiki.js', 'test/*.spec.coffee'], test)
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
