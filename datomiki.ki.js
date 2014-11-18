ki macro (export $name)
         (js exports.$name = $name)

ki require core

ki (ns datomiki

  (def base {:uri "http://localhost:8888"
             :alias "free"
             :name "test"
             :db ""
             :url "/"
             :basis "-"
             :method "get"
             :data {}
             :format "edn"
             :accept "application/edn"})

  (defn opts
    ([] base) // the base default options
    ([opts]
      (let [m (merge base (js_to_clj opts))]
      (assoc m
        :db (str (get m :alias) "/" (get m :name))
        :url (str (get m :uri) (get m :url))))))

  // TODO:
  (defn req [opts]
    "options for calling request with"
    (let [o (conn opts)]
    o))

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

  (export opts))
