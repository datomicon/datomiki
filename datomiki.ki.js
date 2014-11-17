ki macro (export $name)
         (js exports.$name = $name)

ki require core

ki (ns datomiki

  (defn conn [opts]
    opts.uri)

  (export conn))
