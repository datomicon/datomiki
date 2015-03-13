var notifier = require('node-notifier')

module.exports = {
  test:
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