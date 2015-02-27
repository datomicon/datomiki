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
            'db', d.cfg.rest.alias, // the default db
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
            _ki_ns_ctx['edenize'] = function (data$1879) {
                return toClj(data$1879);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$1888) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$1888));
                    } catch (e$1892) {
                        console.error('Exception: string isn\'t edn - ' + e$1892);
                        console.error(data$1888);
                        return data$1888;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$1895) {
                return merge(base, edenize(opts$1895), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$1922 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$1934) {
                        return function () {
                            return function (v$1939) {
                                var o$1941 = v$1939;
                                return assoc(o$1941, 'uri', str(get(o$1941, 'uri'), get(o$1941, 'url')), 'headers', hashMap('Accept', get(o$1941, 'accept'), 'Content-Type', get(o$1941, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$1934, 'pre'))) {
                                    return opts$1934;
                                }
                                return merge(base, edenize(opts$1934));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$1923 = 0;
                for (var a$1924 in fnmap$1922) {
                    max_arity$1923 = a$1924 > max_arity$1923 ? a$1924 : max_arity$1923;
                }
                fnmap$1922[null] = fnmap$1922[max_arity$1923];
                return function () {
                    var f$2039 = fnmap$1922[arguments.length] || fnmap$1922[null];
                    return f$2039.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$2041, o$2042) {
                return function () {
                    if (truthy(o$2042.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$2042.format))) {
                                return {
                                    'code': res$2041.statusCode,
                                    'body': o$2042.accept == 'application/edn' ? jsonize(res$2041.body) : res$2041.body
                                };
                            }
                            return hashMap(keyword('code'), res$2041.statusCode, keyword('body'), res$2041.body);
                        }.call(this);
                    }
                    return res$2041;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$2089, cb$2090) {
                return function () {
                    return function (v$2104) {
                        var o$2106 = v$2104;
                        return request(o$2106, function (err$2117, res$2118) {
                            return cb$2090(err$2117, response(res$2118, o$2106));
                        });
                    }.call(this, toJs(opts(o$2089)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$2137 = {
                    1: function (cb$2146) {
                        return aliases(hashMap(), cb$2146);
                    },
                    2: function (o$2174, cb$2175) {
                        return req(merge(edenize(o$2174), hashMap('url', '/data/')), cb$2175);
                    }
                };
                var max_arity$2138 = 0;
                for (var a$2139 in fnmap$2137) {
                    max_arity$2138 = a$2139 > max_arity$2138 ? a$2139 : max_arity$2138;
                }
                fnmap$2137[null] = fnmap$2137[max_arity$2138];
                return function () {
                    var f$2205 = fnmap$2137[arguments.length] || fnmap$2137[null];
                    return f$2205.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$2207 = {
                    1: function (cb$2219) {
                        return cdb(get(base, 'db'), hashMap(), cb$2219);
                    },
                    2: function (name$2277, cb$2278) {
                        return cdb(name$2277, hashMap(), cb$2278);
                    },
                    3: function (name$2315, o$2316, cb$2317) {
                        return function () {
                            return function (v$2327) {
                                var o$2329 = v$2327;
                                return req(merge(o$2329, hashMap('url', str('/data/', get(o$2329, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$2315, '"}'))), cb$2317);
                            }.call(this, preopts(o$2316));
                        }.call(this);
                    }
                };
                var max_arity$2208 = 0;
                for (var a$2209 in fnmap$2207) {
                    max_arity$2208 = a$2209 > max_arity$2208 ? a$2209 : max_arity$2208;
                }
                fnmap$2207[null] = fnmap$2207[max_arity$2208];
                return function () {
                    var f$2395 = fnmap$2207[arguments.length] || fnmap$2207[null];
                    return f$2395.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$2397) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$2402) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$2407) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$2412) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$2417) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$2422 = {
                    2: function (query$2431, cb$2432) {
                        return q(query$2431, hashMap(), cb$2432);
                    },
                    3: function (query$2469, o$2470, cb$2471) {
                        return function () {
                            return function (v$2481) {
                                var o$2483 = v$2481;
                                return function (v$2494) {
                                    var data$2496 = v$2494;
                                    return function (v$2499) {
                                        var limit$2501 = v$2499;
                                        return function (v$2504) {
                                            var offset$2506 = v$2504;
                                            return req(merge(edenize(o$2483), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$2469, limit$2501, offset$2506, ' :args [{:db/alias "', get(o$2483, 'alias'), '/', get(o$2483, 'db'), '"}]}'))), cb$2471);
                                        }.call(this, function () {
                                            if (truthy(get(data$2496, 'offset'))) {
                                                return str(' :offset ', get(data$2496, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$2496, 'limit'))) {
                                            return str(' :limit ', get(data$2496, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$2483, 'data'));
                            }.call(this, preopts(o$2470));
                        }.call(this);
                    }
                };
                var max_arity$2423 = 0;
                for (var a$2424 in fnmap$2422) {
                    max_arity$2423 = a$2424 > max_arity$2423 ? a$2424 : max_arity$2423;
                }
                fnmap$2422[null] = fnmap$2422[max_arity$2423];
                return function () {
                    var f$2653 = fnmap$2422[arguments.length] || fnmap$2422[null];
                    return f$2653.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$2655) {
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