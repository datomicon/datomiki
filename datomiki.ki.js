ki macro (export $name)
         (js exports.$name = $name)

ki require core

ki (ns datomiki

  (def base {:uri "http://localhost:8888"
             :alias "mem"
             :name "test"
             :db ""
             :url "/"
             :basis "-"
             :method "get"
             :data {}
             :format "edn"
             :accept "application/edn"})

  (defn opts [] base)

  (defn conn [opts]
    (let [m (merge base (js_to_clj opts))]
    (assoc m
      :db (str (get m :alias) "/" (get m :name))
      :url (str (get m :uri) (get m :url)))))

  (export opts)
  (export conn))
