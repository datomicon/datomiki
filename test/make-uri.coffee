#!/usr/bin/env coffee

d = require("../datomiki.js")
toJS = require("mori").clj_to_js

opts = toJS d.opts url: "/data/free/"

process.stdout.write opts.uri
