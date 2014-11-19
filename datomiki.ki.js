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
             "format" "json" // use "edn" if preferred
             "accept" "application/edn"})

  (defn opts
    // get the default options or such to call request with
    ([] base) // the base default options
    ([opts] // one must, at least, change the url
      (let [o (merge base (js_to_clj opts))]
        (assoc o
          "db" (str (get o "alias") "/" (get o "named"))
          "uri" (str (get o "uri") (get o "url"))
          "headers" {"accept" (get o "accept")}))))

  (defn req [o cb]
    // make a request
    (let [o (clj_to_js (opts o))]
      (request o (fn [err res]
                     (if (equals "json" (get o "format"))
                       (cb err (clj_to_js res))
                       (cb err res))))))

  (defn aliases [opts]
    "list aliases")

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
  (export req))
