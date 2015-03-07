var gulp = require('gulp')
var shell = require('gulp-shell')

gulp.task('build', shell.task('npm run build'))
gulp.task('build:min', shell.task('npm run build:min'))
gulp.task('start', shell.task('npm start'))
gulp.task('test', shell.task('npm test'))
