var run = require('childish-process')
var args = require('yargs')
  .string("t").alias("t", "--test").describe("t", "tell gulp what to test")
  .argv

module.exports = function (gulp, opts) {
  var o = opts || {}
  o.taskName = o.taskName || 'test'
  o.testCmd = o.testCmd || 'npm test'
  o.testsRe = o.testsRe || /\.js$/
  o.templateFull = o.templateFull || 'test'
  o.templatePart = o.templatePart || o.templateFull
  if (o.templates) {
    run = run({childish: {templates: require(o.templates)}})
  }

  function test(what) {
    var cmd = o.testCmd
    var template = o.templateFull
    if (typeof what === 'object') {
      // https://github.com/wearefractal/vinyl
      if (what.event == 'change' && o.testsRe.test(what.path)) {
        cmd += ' ' + what.path
        template = o.templatePart
      }
      else {
        // console.log('ignoring', what.path, what.event)
        return // don't run it
      }
    }
    else if (args.t) {
      cmd += ' ' + args.t
      template = o.templatePart
    }
    run(cmd, {childish: {template: template}})
  }

  gulp.task(o.taskName, test)
  return test // can use with gulp-watch
}
