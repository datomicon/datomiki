var gulp = require('gulp')

// counting on the presence of 'build' and 'start'
require('./gulp/npm-scripts')(gulp, {
  exclude: ['test'],
  default: 'default',
  customize: {'build:watch': 'build-w'},
  templates: './childish-templates.json'
})

// modify 'test'; reuse test fn for gulp test:watch
var test = require('./gulp/test-task')({testsRe: /\.spec\.coffee$/,
                                        testCmd: './node_modules/.bin/mocha',
                                        templates: './childish-templates.json'})
gulp.task('test', test)

gulp.task('test:watch', ['wait-up'], function() {
  gulp.watch(['./datomiki.js', 'test/*.spec.coffee'], test)
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
