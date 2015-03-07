#!/usr/bin/env mocha

toJs = require("mori").toJs
request = require("request")


describe "datomiki", ->
  base = toJs(d.opts())

  describe "opts", ->
    it "should assemble a uri", ->
      opts = toJs(d.opts({}))
      opts.uri.should.equal base.uri + base.url

  describe "request", ->
    it "can be made using opts, tests that the server is running", (done) ->
      request toJs(d.opts(accept: "text/html")), (err, res) ->
        console.log err if err
        ok res
        done()

  describe "req", ->
    it "can be used without helper functions, request with less code", (done) ->
      d.req accept: "text/html", (err, res) ->
        ok res
        done()

  describe "aliases", ->
    it "can get a list of storage aliases", (done) ->
      d.aliases (err, res) ->
        ok res
        done()
    it "is also a promise", (done) ->
      res = d.aliases()
      isPromise(res)
      res.then (res) ->
        ok res
        done()
    it "can return just the body, though the promise should be made simple", ->
      res = d.aliases({partial: "body", simple: true})
      res.should.be.fulfilled
      res.should.eventually.be.an "array"

  describe "a promised error for /data", ->
    it "/data gets a 404, because a trailing / is expected", (done) ->
      d.req(url: "/data", simple: true).then((res) ->
          # this doesn't get called, can't even console.log
          assert(false, "the promise can't be resolved!")
        ).catch(errors.StatusCodeError, (reason) ->
          # this cannot fail the test, not getting full response
          ok reason, 404
        ).finally -> done()
    it "by default, the promise is fulfilled whatever the statusCode", (done) ->
      d.req(url: "/data").then (res) ->
          # this cannot fail the test, the response doesn't have much info
          ok res, 404
          isTransformed res
          done()
    it "if a promise is 'simple', an uncaught 404 should be rejected", ->
      res = d.req url: "/data", simple: true
      assert.isRejected res
      res.should.be.rejectedWith errors.StatusCodeError
      isPartiallyTransformed res # NOTE: it seems weird - compare to the 1st it

  describe "callback statusCode errors work the same, simple is ignored", ->
    it "given a callback: error not thrown, transform not called", (done) ->
      d.req url: "/data", (err, res) ->
        ok res, 404
        isNotTransformed res
        done()

  describe "create database", ->
    it "creates the default test database if it doesn't already exist", (done) ->
      d.cdb (err, res) ->
        ok res # 201 if created, 200 if already exists
        done()
    it "explicitly creates the test database again, still ok", (done) ->
      d.cdb "test", (err, res) ->
        ok res # 200 for sure
        done()

  describe "query", ->
    it "can query the default database", (done) ->
      d.q "[:find ?e ?doc :where [?e :db/doc ?doc]]", (err, res) ->
        ok res
        done()
    it "can query a specified database with limit", (done) ->
      d.q "[:find ?e ?doc :where [?e :db/doc ?doc]]", {db: "test", data: {limit: 3}}, (err, res) ->
        ok res
        to res.body, -> count(res.body).should.eql 3
        done()
