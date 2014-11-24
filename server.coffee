#!/usr/bin/env coffee

run = require("childish-process").run
cfg = require("./datomic/config.json")

base_path = "#{cfg.located}/datomic-#{cfg.edition}-#{cfg.version}"
alias_uri = "#{cfg.rest.alias} #{cfg.rest.uri}"

# start the servers
run "lein datomic start", cwd: "#{process.cwd()}/#{cfg.located}" # transactor
run "#{base_path}/bin/rest -p #{cfg.rest.port} #{alias_uri}" # rest
