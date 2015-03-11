//# sourceMappingURL=datomiki.js.map
require("source-map-support").install()

/* jshint ignore:start */

ki require core

ki (ns datomiki

  (def request (require "request-promise"))
  (def d (.use (require "dbin"))) // just for defaults
  (def edn (require "jsedn"))
  (def isArray (js require("lodash").isArray))
  (def isObject (js require("lodash").isObject))
  (def isString (js require("lodash").isString))
  (def isFunction (js require("lodash").isFunction))
  (def pick (js require("lodash").pick))

  (defn transform [body response]
    (let [o (js response.request._rp_options)]
      (do
        (js if (o.format === "json" &&
                response.headers["content-type"] === o.expect) {
              // it should mutate the body - making it json
              try { response.body = edn.toJS(edn.parse(body)); }
              catch (e) {
                console.error("Exception: string isn't edn - " + e);
                console.error(body);
              }
            })
        (let [partial (js o.partial)]
          (cond
            (isArray partial) (apply pick response partial)
            (isString partial) (js response[partial])
            :else response)))))

  (def // default options
       base {"uri" (js d.cfg.rest.uri) // the url will be appended to it
             "alias" (js d.cfg.rest.alias) // the storage alias
             "db" (js d.cfg.rest.alias) // the default db
             "url" "/"
             "basis" "-" // the basis-t
             "method" "get"
             "data" {}
             "content-type" "application/edn" // could be application/x-www-form-urlencoded
             "accept" "application/edn"
             "expect" "application/edn;charset=UTF-8"
             "format" "json" // if response body content-type is as "expect"-ed
             "transform" transform // a request-promise option
             "pre" false // true if preopt was called, usually true
             "partial" ["statusCode" "body"] // false to resolveWithFullResponse; or "body"
             "simple" false // a request-promise option - no statusCode will throw an error
            })

  (defn edenize [data]
    // make sure data is in edn format
    // it appears toClj can run ok 2 times in a row on the same data
    // still good to have names that are easier for congnitive parsing
    (toClj data))

  (defn preopts [opts]
    // the opts are often needed early
    (merge base (edenize opts) {"pre" true}))

  (defn opts
    // get the default options or such to call request with
    ([] base) // the base default options
    ([opts] // one must, at least, change the url
      (let [o (if (get opts "pre") opts (merge base (edenize opts)))]
        (assoc o
          "uri" (str (get o "uri") (get o "url"))
          "headers" { "Accept" (get o "accept")
                      "Content-Type" (get o "content-type") } ))))

  (defn req [o cb]
    // make a request
    (let [o (toJs (opts o))]
      (if (falsey cb)
        (request o)
        (request o (fn [err res]
          (if (js res.statusCode == 200 || res.statusCode == 201)
            (cb err (transform (js res.body) res))
            (cb err res)))))))

  (defn aliases
    // list aliases
    ([] (aliases {} false))
    ([a]
      (cond
        (isFunction a) (aliases {} a) // functions are also objects, must be 1st
        (isObject a) (aliases a false)
        :else (throw "aliases called with an argument of unexpected type")))
    ([o cb] (req (merge (edenize o) {"url" "/data/"}) cb)))

  (defn cdb
    // create database
    ([cb] (cdb (get base "db") {} cb))
    ([name cb] (cdb name {} cb))
    ([name o cb]
      (let [o (preopts o)]
        (req (merge o { "url" (str "/data/" (get o "alias") "/")
                        "method" "post"
                        "body" (str "{:db-name \"" name "\"}") })
             cb))))

  (defn dbs [opts]
    "list databases")

  (defn info [opts]
    "retrieve database info")

  (defn transact [opts]
    "process transaction")

  (defn datoms [opts]
    "retrieve datoms")

  (defn entity [opts]
    "retrieve entity")

  (defn q
    // query
    ([query cb] (q query {} cb))
    ([query o cb]
      (let
        [o (preopts o)
         data (get o "data")
         limit (if (get data "limit") (str " :limit " (get data "limit")) "")
         offset (if (get data "offset")
                    (str " :offset " (get data "offset")) "")]
        (req (merge (edenize o)
                    { "url" "/api/query"
                      "method" "post"
                      "body" (str "{:q " query
                                  limit
                                  offset
                                  " :args [{:db/alias \""
                                  (get o "alias") "/" (get o "db")
                                  "\"}]}") })
              cb))))

  (defn events [opts]
    "subscribe to events")

  (export opts)
  (export req)
  (export aliases)
  (export cdb)
  (export q))
