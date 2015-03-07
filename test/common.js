var chai = require("chai")
chai.use(require("chai-as-promised"))
chai.should()

global.assert = chai.assert
global.expect = chai.expect
global.isPromise = require("is-promise")

// the only thing that is being tested:
global.d = require("../datomiki.js")
