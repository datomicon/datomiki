var gulp = require('gulp'),
    watch = require('gulp-watch')

require('gulp-npm-run')(gulp, {
  requireStrict: true,
  require: ['build', 'start'],
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
