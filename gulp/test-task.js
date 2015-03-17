var run = require('childish-process')
var args = require('yargs')
  .string("t").alias("t", "--test").describe("t", "tell gulp what to test")
  .string("e").alias("e", "--event-handle")
  .describe("e", "use a predefined event-handlers template")
  .argv

module.exports = function (gulp, opts) {
  var o = opts || {}
  o.testCmd = o.testCmd || 'npm test'
  o.testsRe = o.testsRe || /\.js$/
  if (o.templates) {
    run = run({childish: {templates: require(o.templates)}})
  }

  function test(file) {
    var cmd = o.testCmd
    if (file) {
      if (file.event == 'change' && o.testsRe.test(file.path)) {
        cmd += ' ' + file.path
      }
      else {
        return // don't run it
      }
    }
    else if (args.t) {
      cmd += ' ' + args.t
    }
    run(cmd, {childish: {template: args.e || 'test'}})
  }

  gulp.task('test', test)
  return test // can use with gulp-watch
}
