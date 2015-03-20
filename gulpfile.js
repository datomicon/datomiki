var gulp = require('gulp'),
    watch = require('gulp-watch')

// counting on the presence of 'build' and 'start'
require('gulp-npm-run')(gulp, {
  exclude: ['test'],
  default: 'default',
  customize: {'build:watch': 'build-w'},
  templates: 'notifications.json'
})

// modify 'test'; reuse test fn for gulp test:watch
var test = require('gulp-npm-test')(gulp, {
  testsRe: /\.spec\.coffee$/,
  testCmd: 'node_modules/.bin/mocha'
})

gulp.task('test:watch', ['wait-up'], function() {
  watch(['./datomiki.js', 'test/*.spec.coffee'], test)
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
