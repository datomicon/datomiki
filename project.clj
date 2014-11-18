(defproject datomiki "0.0.1-SNAPSHOT"
  :description "datomic-free to test datomiki with"
  :url "https://github.com/orlin/datomiki"
  :license {:name "Unlicense"
            :url "http://unlicense.org/"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [com.datomic/datomic-free "0.9.5067" :exclusions [joda-time]]]
  :plugins [[lein-datomic "0.2.0"]
            [lein-ancient "0.4.4"]]
  :datomic {:config "datomic.cfg"
            :db-uri "datomic:dev://localhost:4334/test"
            :install-location "datomic/datomic-free-0.9.5067"})
