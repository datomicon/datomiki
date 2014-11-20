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
            _ki_ns_ctx['base'] = hash_map('uri', 'http://localhost:8888', 'alias', 'free', 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'accept', 'application/edn', 'format', 'json', 'resmod', true);
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$1864) {
                return js_to_clj(data$1864);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$1873) {
                return JSON.parse(clj_to_js(data$1873));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$1885 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$1897) {
                            return function () {
                                return function (v$1914) {
                                    var o$1916 = v$1914;
                                    return assoc(o$1916, 'db', str(get(o$1916, 'alias'), '/', get(o$1916, 'named')), 'uri', str(get(o$1916, 'uri'), get(o$1916, 'url')), 'headers', hash_map('accept', get(o$1916, 'accept')));
                                }.call(this, merge(base, edenize(opts$1897)));
                            }.call(this);
                        }
                    };
                var max_arity$1886 = 0;
                for (var a$1887 in fnmap$1885) {
                    max_arity$1886 = a$1887 > max_arity$1886 ? a$1887 : max_arity$1886;
                }
                fnmap$1885[null] = fnmap$1885[max_arity$1886];
                return function () {
                    var f$2003 = fnmap$1885[arguments.length] || fnmap$1885[null];
                    return f$2003.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = function (res$2005, o$2006) {
                return function () {
                    if (truthy(o$2006.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$2006.format))) {
                                return {
                                    'code': res$2005.statusCode,
                                    'body': o$2006.accept == 'application/edn' ? jsonize(res$2005.body) : res$2005.body
                                };
                            }
                            return hash_map(keyword('code'), res$2005.statusCode, keyword('body'), res$2005.body);
                        }.call(this);
                    }
                    return res$2005;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$2053, cb$2054) {
                return function () {
                    return function (v$2068) {
                        var o$2070 = v$2068;
                        return request(o$2070, function (err$2081, res$2082) {
                            return cb$2054(err$2081, response(res$2082, o$2070));
                        });
                    }.call(this, clj_to_js(opts(o$2053)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$2101 = {
                        1: function (cb$2110) {
                            return aliases(hash_map(), cb$2110);
                        },
                        2: function (o$2138, cb$2139) {
                            return req(merge(edenize(o$2138), hash_map('url', '/data/')), cb$2139);
                        }
                    };
                var max_arity$2102 = 0;
                for (var a$2103 in fnmap$2101) {
                    max_arity$2102 = a$2103 > max_arity$2102 ? a$2103 : max_arity$2102;
                }
                fnmap$2101[null] = fnmap$2101[max_arity$2102];
                return function () {
                    var f$2169 = fnmap$2101[arguments.length] || fnmap$2101[null];
                    return f$2169.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$2171) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$2176) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$2181) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$2186) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$2191) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$2196) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$2201) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$2206) {
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