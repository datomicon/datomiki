var notifier = require('node-notifier')

module.exports = {
  "default":
    {stderr: function(data) {
      notifier.notify({message: 'The command has failed!'})}
    },
  "build-w":
    {stderr: function(data) {
      notifier.notify({message: 'The build has failed!'})}
    },
  "test":
    {close: function(code) {
      if (code === 0) {
        notifier.notify({message: 'The tests have passed.'})
      }
      else {
        notifier.notify({message: 'Tests fail!'})
      }
    }},
  "test-part":
    {close: function(code) {
      if (code === 0) {
        notifier.notify({message: 'The requested tests have passed.'})
      }
      else {
        notifier.notify({message: 'Some tests fail!'})
      }
    }}
}
