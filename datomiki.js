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
            _ki_ns_ctx['edn'] = require('jsedn');
            _ki.namespaces[_ki_ns_name].vars.edn = _ki_ns_ctx['edn'];
            return _ki_ns_ctx['edn'];
        }());
        (function () {
            _ki_ns_ctx['base'] = hashMap('uri', d.cfg.rest.uri, // the url will be appended to it
            'alias', d.cfg.rest.alias, // the storage alias
            'db', 'test', // the name of the db
            'url', '/', 'basis', '-', // the basis-t
            'method', 'get', 'data', hashMap(), 'content-type', 'application/edn', // could be application/x-www-form-urlencoded
            'accept', 'application/edn', 'format', 'json', // anything but json is left as is - a string
            'pre', false, // true if preopt was called, usually true
            'resmod', true);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$1883) {
                return toClj(data$1883);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$1892) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$1892));
                    } catch (e$1896) {
                        console.error('Exception: string isn\'t edn - ' + e$1896);
                        console.error(data$1892);
                        return data$1892;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$1899) {
                return merge(base, edenize(opts$1899), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$1926 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$1938) {
                        return function () {
                            return function (v$1943) {
                                var o$1945 = v$1943;
                                return assoc(o$1945, 'uri', str(get(o$1945, 'uri'), get(o$1945, 'url')), 'headers', hashMap('Accept', get(o$1945, 'accept'), 'Content-Type', get(o$1945, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$1938, 'pre'))) {
                                    return opts$1938;
                                }
                                return merge(base, edenize(opts$1938));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$1927 = 0;
                for (var a$1928 in fnmap$1926) {
                    max_arity$1927 = a$1928 > max_arity$1927 ? a$1928 : max_arity$1927;
                }
                fnmap$1926[null] = fnmap$1926[max_arity$1927];
                return function () {
                    var f$2043 = fnmap$1926[arguments.length] || fnmap$1926[null];
                    return f$2043.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$2045, o$2046) {
                return function () {
                    if (truthy(o$2046.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$2046.format))) {
                                return {
                                    'code': res$2045.statusCode,
                                    'body': o$2046.accept == 'application/edn' ? jsonize(res$2045.body) : res$2045.body
                                };
                            }
                            return hashMap(keyword('code'), res$2045.statusCode, keyword('body'), res$2045.body);
                        }.call(this);
                    }
                    return res$2045;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$2093, cb$2094) {
                return function () {
                    return function (v$2108) {
                        var o$2110 = v$2108;
                        return request(o$2110, function (err$2121, res$2122) {
                            return cb$2094(err$2121, response(res$2122, o$2110));
                        });
                    }.call(this, toJs(opts(o$2093)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$2141 = {
                    1: function (cb$2150) {
                        return aliases(hashMap(), cb$2150);
                    },
                    2: function (o$2178, cb$2179) {
                        return req(merge(edenize(o$2178), hashMap('url', '/data/')), cb$2179);
                    }
                };
                var max_arity$2142 = 0;
                for (var a$2143 in fnmap$2141) {
                    max_arity$2142 = a$2143 > max_arity$2142 ? a$2143 : max_arity$2142;
                }
                fnmap$2141[null] = fnmap$2141[max_arity$2142];
                return function () {
                    var f$2209 = fnmap$2141[arguments.length] || fnmap$2141[null];
                    return f$2209.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$2211 = {
                    1: function (cb$2223) {
                        return cdb(get(base, 'db'), hashMap(), cb$2223);
                    },
                    2: function (name$2281, cb$2282) {
                        return cdb(name$2281, hashMap(), cb$2282);
                    },
                    3: function (name$2319, o$2320, cb$2321) {
                        return function () {
                            return function (v$2331) {
                                var o$2333 = v$2331;
                                return req(merge(o$2333, hashMap('url', str('/data/', get(base, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$2319, '"}'))), cb$2321);
                            }.call(this, preopts(o$2320));
                        }.call(this);
                    }
                };
                var max_arity$2212 = 0;
                for (var a$2213 in fnmap$2211) {
                    max_arity$2212 = a$2213 > max_arity$2212 ? a$2213 : max_arity$2212;
                }
                fnmap$2211[null] = fnmap$2211[max_arity$2212];
                return function () {
                    var f$2399 = fnmap$2211[arguments.length] || fnmap$2211[null];
                    return f$2399.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$2401) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$2406) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$2411) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$2416) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$2421) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$2426 = {
                    2: function (query$2435, cb$2436) {
                        return q(query$2435, hashMap(), cb$2436);
                    },
                    3: function (query$2473, o$2474, cb$2475) {
                        return function () {
                            return function (v$2485) {
                                var o$2487 = v$2485;
                                return function (v$2498) {
                                    var data$2500 = v$2498;
                                    return function (v$2503) {
                                        var limit$2505 = v$2503;
                                        return function (v$2508) {
                                            var offset$2510 = v$2508;
                                            return req(merge(edenize(o$2487), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$2473, limit$2505, offset$2510, ' :args [{:db/alias "', get(o$2487, 'alias'), '/', get(o$2487, 'db'), '"}]}'))), cb$2475);
                                        }.call(this, function () {
                                            if (truthy(get(data$2500, 'offset'))) {
                                                return str(' :offset ', get(data$2500, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$2500, 'limit'))) {
                                            return str(' :limit ', get(data$2500, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$2487, 'data'));
                            }.call(this, preopts(o$2474));
                        }.call(this);
                    }
                };
                var max_arity$2427 = 0;
                for (var a$2428 in fnmap$2426) {
                    max_arity$2427 = a$2428 > max_arity$2427 ? a$2428 : max_arity$2427;
                }
                fnmap$2426[null] = fnmap$2426[max_arity$2427];
                return function () {
                    var f$2657 = fnmap$2426[arguments.length] || fnmap$2426[null];
                    return f$2657.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$2659) {
                return 'subscribe to events';
            };
            _ki.namespaces[_ki_ns_name].vars.events = _ki_ns_ctx['events'];
            return _ki_ns_ctx['events'];
        }());
        exports.opts = opts;
        exports.req = req;
        exports.aliases = aliases;
        exports.cdb = cdb;
        return exports.q = q;
    }();
}());
//# sourceMappingURL=datomiki.js.map