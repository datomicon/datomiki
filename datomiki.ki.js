ki macro (export $name)
         (js exports.$name = $name)

ki require core

ki (ns datomiki

  (def request (require "request"))

  (def // default options
       base {"uri" "http://localhost:8888" // the url will be appended to it
             "alias" "free" // the storage alias
             "named" "test" // the name of the db
             "db" "" // becomes :db/alias
             "url" "/"
             "basis" "-" // the basis-t
             "method" "get"
             "data" {}
             "accept" "application/edn"
             "format" "json" // use "edn" if preferred
             "response" false})

  (defn edenize [data]
    // make sure data is in edn format
    // it appears js_to_clj can run ok 2 times in a row on the same data
    // still good to have names that are easier for congnitive parsing
    (js_to_clj data))

  (defn jsonize [data]
    // TODO: any faster JSON parsers?
    (JSON.parse (clj_to_js data)))

  (defn opts
    // get the default options or such to call request with
    ([] base) // the base default options
    ([opts] // one must, at least, change the url
      (let [o (merge base (edenize opts))]
        (assoc o
          "db" (str (get o "alias") "/" (get o "named"))
          "uri" (str (get o "uri") (get o "url"))
          "headers" {"accept" (get o "accept")}))))

  (defn response [res o]
    // takes care of the response
    (if (js ! o.response)
      // a false response is a modified response
      (if (equals "json" (js o.format))
        (js {"code": res.statusCode,
             "body": (o.accept == "application/edn") ?
                      jsonize(res.body) : res.body})
        {:code (js res.statusCode)
         :body (js res.body)})
      // a true response means unchanged
      res))

  (defn req [o cb]
    // make a request
    (let [o (clj_to_js (opts o))]
      (request o (fn [err res] (cb err (response res o))))))

  (defn aliases [o cb]
    // list aliases
    (req (merge (edenize o) {"url" "/data/"}) cb))

  (defn cdb [opts]
    "create database")

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

  (defn q [opts]
    "query")

  (defn events [opts]
    "subscribe to events")

  (export opts)
  (export req)
  (export aliases))
