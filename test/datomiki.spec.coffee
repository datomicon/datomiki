#!/usr/bin/env mocha

d = require("../datomiki.js")
toJS = require("mori").clj_to_js

describe "datomiki", ->
  base = toJS(d.opts())
  describe "opts", ->
    it "should assemble a db alias and a url", ->
      opts = toJS(d.opts({}))
      opts[":db"].should.equal base[":alias"] + "/" + base[":named"]
      opts[":url"].should.equal base[":uri"] + base[":url"]
