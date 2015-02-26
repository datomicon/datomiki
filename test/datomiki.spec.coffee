#!/usr/bin/env mocha

d = require("../datomiki.js")
toJs = require("mori").toJs
request = require("request")
assert = require("assert")

ok = (res) -> assert (res.code == 200 || res.code == 201), "code #{res.code}"

describe "datomiki", ->
  base = toJs(d.opts())

  describe "opts", ->
    it "should assemble a db alias and a url", ->
      opts = toJs(d.opts({}))
      opts.db.should.equal base.alias + "/" + base.named
      opts.uri.should.equal base.uri + base.url

  describe "request", ->
    it "can be made using opts, tests that the server is running", (done) ->
      request toJs(d.opts(accept: "text/html")), (err, res) ->
        console.log err if err
        res.statusCode.should.eql 200
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
        (typeof res.body).should.equal "object"
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
