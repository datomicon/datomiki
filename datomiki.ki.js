ki macro (export $name)
         (js exports.$name = $name)

ki require core

ki (ns datomiki

  (def request (require "request"))
  (def d (.use (require "dbin"))) // just for defaults
  (def edn (require "jsedn"))

  (def // default options
       base {"uri" (js d.cfg.rest.uri) // the url will be appended to it
             "alias" (js d.cfg.rest.alias) // the storage alias
             "named" "test" // the name of the db
             "db" "" // a value for :db/alias (assembled late in the req, so, useless?)
             "url" "/"
             "basis" "-" // the basis-t
             "method" "get"
             "data" {}
             "content-type" "application/edn" // could be application/x-www-form-urlencoded
             "accept" "application/edn"
             "format" "json" // anything but json is left as is - a string
             "resmod" true // false if you want to see what request does
            })

  (defn edenize [data]
    // make sure data is in edn format
    // it appears toClj can run ok 2 times in a row on the same data
    // still good to have names that are easier for congnitive parsing
    (toClj data))

  (defn jsonize [data]
    (try (js return edn.toJS(edn.parse(data)))
      (catch e (js
        console.error("Exception: string isn't edn - " + e);
        console.error(data);
        return data;))))

  (defn opts
    // get the default options or such to call request with
    ([] base) // the base default options
    ([opts] // one must, at least, change the url
      (let [o (merge base (edenize opts))]
        (assoc o
          "db" (str (get o "alias") "/" (get o "named"))
          "uri" (str (get o "uri") (get o "url"))
          "headers" { "Accept" (get o "accept")
                      "Content-Type" (get o "content-type") } ))))

  (defn response [res o]
    // the response, with mods
    (if (js o.resmod)
      (if (equals "json" (js o.format))
        (js {"code": res.statusCode,
             "body": (o.accept == "application/edn") ?
                      jsonize(res.body) : res.body})
        {:code (js res.statusCode)
         :body (js res.body)})
      // perhaps for debugging -- request's json, though the body format is edn
      res))

  (defn req [o cb]
    // make a request
    (let [o (toJs (opts o))]
      (request o (fn [err res] (cb err (response res o))))))

  (defn aliases
    // list aliases
    ([cb] (aliases {} cb))
    ([o cb] (req (merge (edenize o) {"url" "/data/"}) cb)))

  (defn cdb
    // create database
    ([cb] (cdb (get base "named") {} cb))
    ([name cb] (cdb name {} cb))
    ([name o cb] (req (merge (edenize o)
                        { "url" (str "/data/" (get base "alias") "/")
                          "method" "post"
                          "body" (str "{:db-name \"" name "\"}") })
                      cb)))

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
    ([query o cb] (req (merge (edenize o)
                              { "url" "/api/query"
                                "method" "post"
                                "body" (str "{:q "
                                            query
                                            " :args [{:db/alias \""
                                            (get base "alias")
                                            "/"
                                            (get base "named")
                                            "\"}]}") })
                        cb)))

  (defn events [opts]
    "subscribe to events")

  (export opts)
  (export req)
  (export aliases)
  (export cdb)
  (export q))
