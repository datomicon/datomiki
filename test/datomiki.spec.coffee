#!/usr/bin/env mocha

d = require("../datomiki.js")
toJS = require("mori").clj_to_js

describe "datomiki", ->
  opts = toJS(d.opts())
  describe "conn", ->
    it "should assemble a db alias and a url", ->
      conn = toJS(d.conn())
      conn[":db"].should.equal opts[":alias"] + "/" + opts[":name"]
      conn[":url"].should.equal opts[":uri"] + opts[":url"]
