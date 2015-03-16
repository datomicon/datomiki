var gulp = require('gulp')

// counting on the presence of 'build' and 'start'
require('./gulp/npm-scripts')(gulp, {
  exclude: ['test'],
  default: 'default',
  recipes: {'build:watch': 'build-w'}
})

// modify 'test'; reuse test fn for gulp test:watch
var test = require('./gulp/test-task')({testsRe: /\.spec\.coffee$/,
                                        testCmd: './node_modules/.bin/mocha'})
gulp.task('test', test)

gulp.task('test:watch', ['wait-up'], function() {
  gulp.watch(['./datomiki.js', 'test/*.spec.coffee'], test)
})

gulp.task('default', ['start', 'build:watch', 'test:watch'])
