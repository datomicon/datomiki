_ki = {
    init: function (self$1529, ns_name$1530) {
        if (_ki.namespaces[ns_name$1530] === undefined) {
            _ki.namespaces[ns_name$1530] = { vars: {} };
        }
        self$1529._ki_ns_name = ns_name$1530;
        self$1529._ki_ns_ctx = self$1529;
        _ki.intern.bind(self$1529)(_ki.modules.core);
        _ki.intern.bind(self$1529)(_ki.modules.mori);
        _ki.intern.bind(self$1529)(_ki.modules);
        _ki.intern.bind(self$1529)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$1531) {
        for (var e$1532 in obj$1531) {
            this[e$1532] = obj$1531[e$1532];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$1533) {
                return x$1533 === false || x$1533 == null ? false : true;
            },
            falsey: function (x$1534) {
                return !truthy(x$1534);
            },
            not: function (x$1535) {
                return !truthy(x$1535);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$1536 = 0;
                for (var i$1537 = 0; i$1537 < arguments.length; i$1537++) {
                    res$1536 += arguments[i$1537];
                }
                return res$1536;
            },
            sub: function () {
                var res$1538 = arguments[0];
                for (var i$1539 = 1; i$1539 < arguments.length; i$1539++) {
                    res$1538 -= arguments[i$1539];
                }
                return res$1538;
            },
            mul: function () {
                var res$1540 = 1;
                for (var i$1541 = 0; i$1541 < arguments.length; i$1541++) {
                    res$1540 *= arguments[i$1541];
                }
                return res$1540;
            },
            div: function () {
                var res$1542 = arguments[0];
                for (var i$1543 = 1; i$1543 < arguments.length; i$1543++) {
                    res$1542 /= arguments[i$1543];
                }
                return res$1542;
            },
            mod: function (a$1544, b$1545) {
                return a$1544 % b$1545;
            },
            lt: function () {
                var res$1546 = true;
                for (var i$1547 = 0; i$1547 < arguments.length - 1; i$1547++) {
                    res$1546 = res$1546 && arguments[i$1547] < arguments[i$1547 + 1];
                    if (!res$1546)
                        break;
                }
                return res$1546;
            },
            gt: function () {
                var res$1548 = true;
                for (var i$1549 = 0; i$1549 < arguments.length - 1; i$1549++) {
                    res$1548 = res$1548 && arguments[i$1549] > arguments[i$1549 + 1];
                    if (!res$1548)
                        break;
                }
                return res$1548;
            },
            leq: function () {
                var res$1550 = true;
                for (var i$1551 = 0; i$1551 < arguments.length - 1; i$1551++) {
                    res$1550 = res$1550 && arguments[i$1551] <= arguments[i$1551 + 1];
                    if (!res$1550)
                        break;
                }
                return res$1550;
            },
            geq: function () {
                var res$1552 = true;
                for (var i$1553 = 0; i$1553 < arguments.length - 1; i$1553++) {
                    res$1552 = res$1552 && arguments[i$1553] >= arguments[i$1553 + 1];
                }
                return res$1552;
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
            } catch (e$1554) {
                try {
                    return require('mori');
                } catch (e$1555) {
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
            _ki_ns_ctx['base'] = hash_map('uri', d.cfg.rest.uri, 'alias', d.cfg.rest.alias, 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'accept', 'application/edn', 'format', 'json', 'resmod', true);
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$1870) {
                return js_to_clj(data$1870);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$1879) {
                return JSON.parse(clj_to_js(data$1879));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$1891 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$1903) {
                            return function () {
                                return function (v$1920) {
                                    var o$1922 = v$1920;
                                    return assoc(o$1922, 'db', str(get(o$1922, 'alias'), '/', get(o$1922, 'named')), 'uri', str(get(o$1922, 'uri'), get(o$1922, 'url')), 'headers', hash_map('accept', get(o$1922, 'accept')));
                                }.call(this, merge(base, edenize(opts$1903)));
                            }.call(this);
                        }
                    };
                var max_arity$1892 = 0;
                for (var a$1893 in fnmap$1891) {
                    max_arity$1892 = a$1893 > max_arity$1892 ? a$1893 : max_arity$1892;
                }
                fnmap$1891[null] = fnmap$1891[max_arity$1892];
                return function () {
                    var f$2009 = fnmap$1891[arguments.length] || fnmap$1891[null];
                    return f$2009.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = function (res$2011, o$2012) {
                return function () {
                    if (truthy(o$2012.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$2012.format))) {
                                return {
                                    'code': res$2011.statusCode,
                                    'body': o$2012.accept == 'application/edn' ? jsonize(res$2011.body) : res$2011.body
                                };
                            }
                            return hash_map(keyword('code'), res$2011.statusCode, keyword('body'), res$2011.body);
                        }.call(this);
                    }
                    return res$2011;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$2059, cb$2060) {
                return function () {
                    return function (v$2074) {
                        var o$2076 = v$2074;
                        return request(o$2076, function (err$2087, res$2088) {
                            return cb$2060(err$2087, response(res$2088, o$2076));
                        });
                    }.call(this, clj_to_js(opts(o$2059)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$2107 = {
                        1: function (cb$2116) {
                            return aliases(hash_map(), cb$2116);
                        },
                        2: function (o$2144, cb$2145) {
                            return req(merge(edenize(o$2144), hash_map('url', '/data/')), cb$2145);
                        }
                    };
                var max_arity$2108 = 0;
                for (var a$2109 in fnmap$2107) {
                    max_arity$2108 = a$2109 > max_arity$2108 ? a$2109 : max_arity$2108;
                }
                fnmap$2107[null] = fnmap$2107[max_arity$2108];
                return function () {
                    var f$2175 = fnmap$2107[arguments.length] || fnmap$2107[null];
                    return f$2175.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$2177) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$2182) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$2187) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$2192) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$2197) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$2202) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$2207) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$2212) {
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