_ki = {
    init: function (self$16927, ns_name$16928) {
        if (_ki.namespaces[ns_name$16928] === undefined) {
            _ki.namespaces[ns_name$16928] = { vars: {} };
        }
        self$16927._ki_ns_name = ns_name$16928;
        self$16927._ki_ns_ctx = self$16927;
        _ki.intern.bind(self$16927)(_ki.modules.core);
        _ki.intern.bind(self$16927)(_ki.modules.mori);
        _ki.intern.bind(self$16927)(_ki.modules);
        _ki.intern.bind(self$16927)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$16929) {
        for (var e$16930 in obj$16929) {
            this[e$16930] = obj$16929[e$16930];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$16931) {
                return x$16931 === false || x$16931 == null ? false : true;
            },
            falsey: function (x$16932) {
                return !truthy(x$16932);
            },
            not: function (x$16933) {
                return !truthy(x$16933);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$16934 = 0;
                for (var i$16935 = 0; i$16935 < arguments.length; i$16935++) {
                    res$16934 += arguments[i$16935];
                }
                return res$16934;
            },
            sub: function () {
                var res$16936 = arguments[0];
                for (var i$16937 = 1; i$16937 < arguments.length; i$16937++) {
                    res$16936 -= arguments[i$16937];
                }
                return res$16936;
            },
            mul: function () {
                var res$16938 = 1;
                for (var i$16939 = 0; i$16939 < arguments.length; i$16939++) {
                    res$16938 *= arguments[i$16939];
                }
                return res$16938;
            },
            div: function () {
                var res$16940 = arguments[0];
                for (var i$16941 = 1; i$16941 < arguments.length; i$16941++) {
                    res$16940 /= arguments[i$16941];
                }
                return res$16940;
            },
            mod: function (a$16942, b$16943) {
                return a$16942 % b$16943;
            },
            lt: function () {
                var res$16944 = true;
                for (var i$16945 = 0; i$16945 < arguments.length - 1; i$16945++) {
                    res$16944 = res$16944 && arguments[i$16945] < arguments[i$16945 + 1];
                    if (!res$16944)
                        break;
                }
                return res$16944;
            },
            gt: function () {
                var res$16946 = true;
                for (var i$16947 = 0; i$16947 < arguments.length - 1; i$16947++) {
                    res$16946 = res$16946 && arguments[i$16947] > arguments[i$16947 + 1];
                    if (!res$16946)
                        break;
                }
                return res$16946;
            },
            leq: function () {
                var res$16948 = true;
                for (var i$16949 = 0; i$16949 < arguments.length - 1; i$16949++) {
                    res$16948 = res$16948 && arguments[i$16949] <= arguments[i$16949 + 1];
                    if (!res$16948)
                        break;
                }
                return res$16948;
            },
            geq: function () {
                var res$16950 = true;
                for (var i$16951 = 0; i$16951 < arguments.length - 1; i$16951++) {
                    res$16950 = res$16950 && arguments[i$16951] >= arguments[i$16951 + 1];
                }
                return res$16950;
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
            } catch (e$16952) {
                try {
                    return require('mori');
                } catch (e$16953) {
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
            _ki_ns_ctx['base'] = hash_map('uri', 'http://localhost:8888', 'alias', 'free', 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'format', 'json', 'accept', 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$17241 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$17253) {
                            return function () {
                                return function (v$17270) {
                                    var o$17272 = v$17270;
                                    return assoc(o$17272, 'db', str(get(o$17272, 'alias'), '/', get(o$17272, 'named')), 'uri', str(get(o$17272, 'uri'), get(o$17272, 'url')), 'headers', hash_map('accept', get(o$17272, 'accept')));
                                }.call(this, merge(base, js_to_clj(opts$17253)));
                            }.call(this);
                        }
                    };
                var max_arity$17242 = 0;
                for (var a$17243 in fnmap$17241) {
                    max_arity$17242 = a$17243 > max_arity$17242 ? a$17243 : max_arity$17242;
                }
                fnmap$17241[null] = fnmap$17241[max_arity$17242];
                return function () {
                    var f$17359 = fnmap$17241[arguments.length] || fnmap$17241[null];
                    return f$17359.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$17361, cb$17362) {
                return function () {
                    return function (v$17376) {
                        var o$17378 = v$17376;
                        return request(o$17378, function (err$17389, res$17390) {
                            return function () {
                                if (truthy(equals('json', get(o$17378, 'format')))) {
                                    return cb$17362(err$17389, clj_to_js(res$17390));
                                }
                                return cb$17362(err$17389, res$17390);
                            }.call(this);
                        });
                    }.call(this, clj_to_js(opts(o$17361)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (opts$17436) {
                return 'list aliases';
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$17441) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$17446) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$17451) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$17456) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$17461) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$17466) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$17471) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$17476) {
                return 'subscribe to events';
            };
            _ki.namespaces[_ki_ns_name].vars.events = _ki_ns_ctx['events'];
            return _ki_ns_ctx['events'];
        }());
        exports.opts = opts;
        return exports.req = req;
    }();
}());
//# sourceMappingURL=datomiki.js.map