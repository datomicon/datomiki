_ki = {
    init: function (self$8435, ns_name$8436) {
        if (_ki.namespaces[ns_name$8436] === undefined) {
            _ki.namespaces[ns_name$8436] = { vars: {} };
        }
        self$8435._ki_ns_name = ns_name$8436;
        self$8435._ki_ns_ctx = self$8435;
        _ki.intern.bind(self$8435)(_ki.modules.core);
        _ki.intern.bind(self$8435)(_ki.modules.mori);
        _ki.intern.bind(self$8435)(_ki.modules);
        _ki.intern.bind(self$8435)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$8437) {
        for (var e$8438 in obj$8437) {
            this[e$8438] = obj$8437[e$8438];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$8439) {
                return x$8439 === false || x$8439 == null ? false : true;
            },
            falsey: function (x$8440) {
                return !truthy(x$8440);
            },
            not: function (x$8441) {
                return !truthy(x$8441);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$8442 = 0;
                for (var i$8443 = 0; i$8443 < arguments.length; i$8443++) {
                    res$8442 += arguments[i$8443];
                }
                return res$8442;
            },
            sub: function () {
                var res$8444 = arguments[0];
                for (var i$8445 = 1; i$8445 < arguments.length; i$8445++) {
                    res$8444 -= arguments[i$8445];
                }
                return res$8444;
            },
            mul: function () {
                var res$8446 = 1;
                for (var i$8447 = 0; i$8447 < arguments.length; i$8447++) {
                    res$8446 *= arguments[i$8447];
                }
                return res$8446;
            },
            div: function () {
                var res$8448 = arguments[0];
                for (var i$8449 = 1; i$8449 < arguments.length; i$8449++) {
                    res$8448 /= arguments[i$8449];
                }
                return res$8448;
            },
            mod: function (a$8450, b$8451) {
                return a$8450 % b$8451;
            },
            lt: function () {
                var res$8452 = true;
                for (var i$8453 = 0; i$8453 < arguments.length - 1; i$8453++) {
                    res$8452 = res$8452 && arguments[i$8453] < arguments[i$8453 + 1];
                    if (!res$8452)
                        break;
                }
                return res$8452;
            },
            gt: function () {
                var res$8454 = true;
                for (var i$8455 = 0; i$8455 < arguments.length - 1; i$8455++) {
                    res$8454 = res$8454 && arguments[i$8455] > arguments[i$8455 + 1];
                    if (!res$8454)
                        break;
                }
                return res$8454;
            },
            leq: function () {
                var res$8456 = true;
                for (var i$8457 = 0; i$8457 < arguments.length - 1; i$8457++) {
                    res$8456 = res$8456 && arguments[i$8457] <= arguments[i$8457 + 1];
                    if (!res$8456)
                        break;
                }
                return res$8456;
            },
            geq: function () {
                var res$8458 = true;
                for (var i$8459 = 0; i$8459 < arguments.length - 1; i$8459++) {
                    res$8458 = res$8458 && arguments[i$8459] >= arguments[i$8459 + 1];
                }
                return res$8458;
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
            } catch (e$8460) {
                try {
                    return require('mori');
                } catch (e$8461) {
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
            _ki_ns_ctx['base'] = hash_map('uri', 'http://localhost:8888', 'alias', 'free', 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'format', 'edn', 'accept', 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$8749 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$8761) {
                            return function () {
                                return function (v$8778) {
                                    var m$8780 = v$8778;
                                    return assoc(m$8780, 'db', str(get(m$8780, 'alias'), '/', get(m$8780, 'named')), 'uri', str(get(m$8780, 'uri'), get(m$8780, 'url')), 'headers', hash_map('accept', get(m$8780, 'accept')));
                                }.call(this, merge(base, js_to_clj(opts$8761)));
                            }.call(this);
                        }
                    };
                var max_arity$8750 = 0;
                for (var a$8751 in fnmap$8749) {
                    max_arity$8750 = a$8751 > max_arity$8750 ? a$8751 : max_arity$8750;
                }
                fnmap$8749[null] = fnmap$8749[max_arity$8750];
                return function () {
                    var f$8867 = fnmap$8749[arguments.length] || fnmap$8749[null];
                    return f$8867.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$8869, cb$8870) {
                'make a request';
                return function () {
                    return function (v$8887) {
                        var o$8889 = v$8887;
                        return request(o$8889, function (err$8900, res$8901) {
                            return cb$8870(err$8900, res$8901);
                        });
                    }.call(this, clj_to_js(opts(o$8869)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (opts$8913) {
                return 'list aliases';
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$8918) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$8923) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$8928) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$8933) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$8938) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$8943) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$8948) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$8953) {
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