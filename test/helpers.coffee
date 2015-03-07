root = global

_ = require("lodash")
root.errors = require("request-promise/errors");

root.ok = (res, codes = [200, 201]) ->
  codes = [ codes ] if _.isNumber codes
  for c in codes
    return if res.statusCode is c
  console.log res.body # possibly helpful info
  assert false, "code #{res[code]}"

root.to = (v, fn) -> if _.isObject v then fn()

# caseless - not something we'd ever expect to find in a partial response
root.isNotTransformed = (res) -> expect(res.caseless).to.be.an "object"
root.isTransformed = (res) -> expect(res.caseless).to.be.an "undefined"
root.isPartiallyTransformed = (res) ->
  # it happens when a promise is rejected
  isTransformed res
  expect(res.followRedirects).to.be.a "boolean"
