#!/usr/bin/env mocha

d = require("../datomiki.js")
toJS = require("mori").clj_to_js
request = require("request")

ok = (res) -> res.statusCode.should.eql 200

describe "datomiki", ->
  base = toJS(d.opts())

  describe "opts", ->
    it "should assemble a db alias and a url", ->
      opts = toJS(d.opts({}))
      opts.db.should.equal base.alias + "/" + base.named
      opts.uri.should.equal base.uri + base.url

  describe "request", ->
    it "can be made using opts, tests that the server is running", (done) ->
      request toJS(d.opts(accept: "text/html")), (err, res) ->
        console.log err if err
        ok res
        done()

  describe "req", ->
    it "can be used without helper functions, request with less code", (done) ->
      d.req accept: "text/html", (err, res) ->
        ok res
        done()
