#!/usr/bin/env coffee

d = require("../datomiki.js")
toJS = require("mori").clj_to_js
wait = require("wait")
request = require("request")

patience = 2000 # how long request will wait (timeout)
spacings = 100 # time between retries
duration = 42000 # the ultimate patience of a process
opts = toJS d.opts method: "GET", url: "/data/free/", timeout: patience

exit = (code, res) ->
  if res?
    console.log "Got status
#{res?.statusCode} for
#{res?.request?.method}
#{res?.request?.uri?.href}"
  process.exit code

console.log opts.method + ' ' + opts.uri
waiting = false

wait.doAndRepeat 100, ->
  request.get opts, (err, res) ->
    if !err
      console.log() if waiting
      if res.statusCode is 200
        exit 0, res
      else
        exit 1, res
    else
      # isn't up yet
      waiting = true
      process.stdout.write '.'

wait.wait duration, ->
  console.log() if waiting
  console.log "Giving-up after #{duration} ms"
  exit 1
