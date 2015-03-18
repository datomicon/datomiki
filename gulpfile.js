var gulp = require('gulp'),
    watch = require('gulp-watch')

// counting on the presence of 'build' and 'start'
require('./gulp/npm-scripts')(gulp, {
  exclude: ['test'],
  default: 'default',
  customize: {'build:watch': 'build-w'},
  templates: './childish-templates.json'
})

// modify 'test'; reuse test fn for gulp test:watch
var test = require('./gulp/test-task')(gulp, {
  testsRe: /\.spec\.coffee$/,
  testCmd: './node_modules/.bin/mocha',
  templates: './childish-templates.json',
  templateFull: 'test', // for running all the tests
  templatePart: 'test-part' // partial testing (e.g. test file change event)
})

gulp.task('test:watch', ['wait-up'], function() {
  watch(['./datomiki.js', 'test/*.spec.coffee'], test)
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
