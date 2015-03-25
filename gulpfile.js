var gulp = require('gulp-npm-run')(require('gulp'), {
  include: {'start': 'Run the datomic servers. This task doesn\'t exit.'},
  exclude: ['test'],
  require: ['build', 'start'],
  requireStrict: true,
  customize: {'build:watch': 'build-w'},
  templates: 'notifications.json'
})

// modify 'test'; reuse test fn for gulp test:watch
var test = require('gulp-npm-test')(gulp, {
  testsRe: /\.spec\.coffee$/,
  testCmd: 'node_modules/.bin/mocha'
})

gulp.task('test:watch', ['wait-up'], function() {
  require('gulp-watch')(['./datomiki.js', 'test/*.spec.coffee'], test)
})

gulp.task('dev', 'Develop datomiki...', ['start', 'build:watch', 'test:watch'])

gulp.task('default', 'Delegates to `gulp help`.', ['help'])
