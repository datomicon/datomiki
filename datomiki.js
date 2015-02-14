_ki = {
    init: function (self$1535, ns_name$1536) {
        if (_ki.namespaces[ns_name$1536] === undefined) {
            _ki.namespaces[ns_name$1536] = { vars: {} };
        }
        self$1535._ki_ns_name = ns_name$1536;
        self$1535._ki_ns_ctx = self$1535;
        _ki.intern.bind(self$1535)(_ki.modules.core);
        _ki.intern.bind(self$1535)(_ki.modules.mori);
        _ki.intern.bind(self$1535)(_ki.modules);
        _ki.intern.bind(self$1535)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$1537) {
        for (var e$1538 in obj$1537) {
            this[e$1538] = obj$1537[e$1538];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$1539) {
                return x$1539 === false || x$1539 == null ? false : true;
            },
            falsey: function (x$1540) {
                return !truthy(x$1540);
            },
            not: function (x$1541) {
                return !truthy(x$1541);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$1542 = 0;
                for (var i$1543 = 0; i$1543 < arguments.length; i$1543++) {
                    res$1542 += arguments[i$1543];
                }
                return res$1542;
            },
            sub: function () {
                var res$1544 = arguments[0];
                for (var i$1545 = 1; i$1545 < arguments.length; i$1545++) {
                    res$1544 -= arguments[i$1545];
                }
                return res$1544;
            },
            mul: function () {
                var res$1546 = 1;
                for (var i$1547 = 0; i$1547 < arguments.length; i$1547++) {
                    res$1546 *= arguments[i$1547];
                }
                return res$1546;
            },
            div: function () {
                var res$1548 = arguments[0];
                for (var i$1549 = 1; i$1549 < arguments.length; i$1549++) {
                    res$1548 /= arguments[i$1549];
                }
                return res$1548;
            },
            mod: function (a$1550, b$1551) {
                return a$1550 % b$1551;
            },
            lt: function () {
                var res$1552 = true;
                for (var i$1553 = 0; i$1553 < arguments.length - 1; i$1553++) {
                    res$1552 = res$1552 && arguments[i$1553] < arguments[i$1553 + 1];
                    if (!res$1552)
                        break;
                }
                return res$1552;
            },
            gt: function () {
                var res$1554 = true;
                for (var i$1555 = 0; i$1555 < arguments.length - 1; i$1555++) {
                    res$1554 = res$1554 && arguments[i$1555] > arguments[i$1555 + 1];
                    if (!res$1554)
                        break;
                }
                return res$1554;
            },
            leq: function () {
                var res$1556 = true;
                for (var i$1557 = 0; i$1557 < arguments.length - 1; i$1557++) {
                    res$1556 = res$1556 && arguments[i$1557] <= arguments[i$1557 + 1];
                    if (!res$1556)
                        break;
                }
                return res$1556;
            },
            geq: function () {
                var res$1558 = true;
                for (var i$1559 = 0; i$1559 < arguments.length - 1; i$1559++) {
                    res$1558 = res$1558 && arguments[i$1559] >= arguments[i$1559 + 1];
                }
                return res$1558;
            },
            prn: function () {
                console.log.apply(console, arguments);
            },
            str: function () {
                return String.prototype.concat.apply('', arguments);
            }
        },
        mori: function () {
            try {
                return require('ki/node_modules/mori');
            } catch (e$1560) {
                try {
                    return require('mori');
                } catch (e$1561) {
                    return mori;
                }
            }
        }()
    }
};
(function () {
    _ki.init(this, '_ki');
    return function () {
        _ki.init(this, 'datomiki');
        (function () {
            _ki_ns_ctx['request'] = require('request');
            _ki.namespaces[_ki_ns_name].vars.request = _ki_ns_ctx['request'];
            return _ki_ns_ctx['request'];
        }());
        (function () {
            _ki_ns_ctx['d'] = require('dbin').use();
            _ki.namespaces[_ki_ns_name].vars.d = _ki_ns_ctx['d'];
            return _ki_ns_ctx['d'];
        }());
        (function () {
            _ki_ns_ctx['base'] = hashMap('uri', d.cfg.rest.uri, // the url will be appended to it
            'alias', d.cfg.rest.alias, // the storage alias
            'named', 'test', // the name of the db
            'db', '', // becomes :db/alias
            'url', '/', 'basis', '-', // the basis-t
            'method', 'get', 'data', hashMap(), 'accept', 'application/edn', 'format', 'json', // use "edn" if preferred
            'resmod', true);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$1876) {
                return toClj(data$1876);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$1885) {
                return JSON.parse(toJs(data$1885));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$1897 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$1909) {
                        return function () {
                            return function (v$1926) {
                                var o$1928 = v$1926;
                                return assoc(o$1928, 'db', str(get(o$1928, 'alias'), '/', get(o$1928, 'named')), 'uri', str(get(o$1928, 'uri'), get(o$1928, 'url')), 'headers', hashMap('accept', get(o$1928, 'accept')));
                            }.call(this, merge(base, edenize(opts$1909)));
                        }.call(this);
                    }
                };
                var max_arity$1898 = 0;
                for (var a$1899 in fnmap$1897) {
                    max_arity$1898 = a$1899 > max_arity$1898 ? a$1899 : max_arity$1898;
                }
                fnmap$1897[null] = fnmap$1897[max_arity$1898];
                return function () {
                    var f$2015 = fnmap$1897[arguments.length] || fnmap$1897[null];
                    return f$2015.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$2017, o$2018) {
                return function () {
                    if (truthy(o$2018.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$2018.format))) {
                                return {
                                    'code': res$2017.statusCode,
                                    'body': o$2018.accept == 'application/edn' ? jsonize(res$2017.body) : res$2017.body
                                };
                            }
                            return hashMap(keyword('code'), res$2017.statusCode, keyword('body'), res$2017.body);
                        }.call(this);
                    }
                    return res$2017;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$2065, cb$2066) {
                return function () {
                    return function (v$2080) {
                        var o$2082 = v$2080;
                        return request(o$2082, function (err$2093, res$2094) {
                            return cb$2066(err$2093, response(res$2094, o$2082));
                        });
                    }.call(this, toJs(opts(o$2065)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$2113 = {
                    1: function (cb$2122) {
                        return aliases(hashMap(), cb$2122);
                    },
                    2: function (o$2150, cb$2151) {
                        return req(merge(edenize(o$2150), hashMap('url', '/data/')), cb$2151);
                    }
                };
                var max_arity$2114 = 0;
                for (var a$2115 in fnmap$2113) {
                    max_arity$2114 = a$2115 > max_arity$2114 ? a$2115 : max_arity$2114;
                }
                fnmap$2113[null] = fnmap$2113[max_arity$2114];
                return function () {
                    var f$2181 = fnmap$2113[arguments.length] || fnmap$2113[null];
                    return f$2181.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$2183) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$2188) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$2193) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$2198) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$2203) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$2208) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$2213) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$2218) {
                return 'subscribe to events';
            };
            _ki.namespaces[_ki_ns_name].vars.events = _ki_ns_ctx['events'];
            return _ki_ns_ctx['events'];
        }());
        exports.opts = opts;
        exports.req = req;
        return exports.aliases = aliases;
    }();
}());
//# sourceMappingURL=datomiki.js.map