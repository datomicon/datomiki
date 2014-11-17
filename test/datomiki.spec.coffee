#!/usr/bin/env mocha

kida = require("../datomiki.js")

describe "datomiki", ->

  describe "conn", ->

    it "should return a uri", ->
      kida.conn(
        uri: "http://localhost:8888")
        .should.equal "http://localhost:8888"
