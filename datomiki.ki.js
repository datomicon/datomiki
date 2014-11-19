ki macro (export $name)
         (js exports.$name = $name)

ki require core

ki (ns datomiki

  (def request (require "request"))

  (def base {"uri" "http://localhost:8888"
             "alias" "free"
             "named" "test"
             "db" ""
             "url" "/"
             "basis" "-"
             "method" "get"
             "data" {}
             "format" "edn"
             "accept" "application/edn"})

  (defn opts
    ([] base) // the base default options
    ([opts]
      (let [m (merge base (js_to_clj opts))]
        (assoc m
          "db" (str (get m "alias") "/" (get m "named"))
          "uri" (str (get m "uri") (get m "url"))
          "headers" {"accept" (get m "accept")}))))

  (defn req [o cb]
    "make a request"
    (let [o (clj_to_js (opts o))]
      (request o (fn [err res] (cb err res)))))

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
