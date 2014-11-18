_ki = {
    init: function (self$8441, ns_name$8442) {
        if (_ki.namespaces[ns_name$8442] === undefined) {
            _ki.namespaces[ns_name$8442] = { vars: {} };
        }
        self$8441._ki_ns_name = ns_name$8442;
        self$8441._ki_ns_ctx = self$8441;
        _ki.intern.bind(self$8441)(_ki.modules.core);
        _ki.intern.bind(self$8441)(_ki.modules.mori);
        _ki.intern.bind(self$8441)(_ki.modules);
        _ki.intern.bind(self$8441)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$8443) {
        for (var e$8444 in obj$8443) {
            this[e$8444] = obj$8443[e$8444];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$8445) {
                return x$8445 === false || x$8445 == null ? false : true;
            },
            falsey: function (x$8446) {
                return !truthy(x$8446);
            },
            not: function (x$8447) {
                return !truthy(x$8447);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$8448 = 0;
                for (var i$8449 = 0; i$8449 < arguments.length; i$8449++) {
                    res$8448 += arguments[i$8449];
                }
                return res$8448;
            },
            sub: function () {
                var res$8450 = arguments[0];
                for (var i$8451 = 1; i$8451 < arguments.length; i$8451++) {
                    res$8450 -= arguments[i$8451];
                }
                return res$8450;
            },
            mul: function () {
                var res$8452 = 1;
                for (var i$8453 = 0; i$8453 < arguments.length; i$8453++) {
                    res$8452 *= arguments[i$8453];
                }
                return res$8452;
            },
            div: function () {
                var res$8454 = arguments[0];
                for (var i$8455 = 1; i$8455 < arguments.length; i$8455++) {
                    res$8454 /= arguments[i$8455];
                }
                return res$8454;
            },
            mod: function (a$8456, b$8457) {
                return a$8456 % b$8457;
            },
            lt: function () {
                var res$8458 = true;
                for (var i$8459 = 0; i$8459 < arguments.length - 1; i$8459++) {
                    res$8458 = res$8458 && arguments[i$8459] < arguments[i$8459 + 1];
                    if (!res$8458)
                        break;
                }
                return res$8458;
            },
            gt: function () {
                var res$8460 = true;
                for (var i$8461 = 0; i$8461 < arguments.length - 1; i$8461++) {
                    res$8460 = res$8460 && arguments[i$8461] > arguments[i$8461 + 1];
                    if (!res$8460)
                        break;
                }
                return res$8460;
            },
            leq: function () {
                var res$8462 = true;
                for (var i$8463 = 0; i$8463 < arguments.length - 1; i$8463++) {
                    res$8462 = res$8462 && arguments[i$8463] <= arguments[i$8463 + 1];
                    if (!res$8462)
                        break;
                }
                return res$8462;
            },
            geq: function () {
                var res$8464 = true;
                for (var i$8465 = 0; i$8465 < arguments.length - 1; i$8465++) {
                    res$8464 = res$8464 && arguments[i$8465] >= arguments[i$8465 + 1];
                }
                return res$8464;
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
            } catch (e$8466) {
                try {
                    return require('mori');
                } catch (e$8467) {
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
            _ki_ns_ctx['base'] = hash_map(keyword('uri'), 'http://localhost:8888', keyword('alias'), 'free', keyword('named'), 'test', keyword('db'), '', keyword('url'), '/', keyword('basis'), '-', keyword('method'), 'get', keyword('data'), hash_map(), keyword('format'), 'edn', keyword('accept'), 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$8879 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$8891) {
                            return function () {
                                return function (v$8908) {
                                    var m$8910 = v$8908;
                                    return assoc(m$8910, keyword('db'), str(get(m$8910, keyword('alias')), '/', get(m$8910, keyword('named'))), keyword('url'), str(get(m$8910, keyword('uri')), get(m$8910, keyword('url'))));
                                }.call(this, merge(base, js_to_clj(opts$8891)));
                            }.call(this);
                        }
                    };
                var max_arity$8880 = 0;
                for (var a$8881 in fnmap$8879) {
                    max_arity$8880 = a$8881 > max_arity$8880 ? a$8881 : max_arity$8880;
                }
                fnmap$8879[null] = fnmap$8879[max_arity$8880];
                return function () {
                    var f$9000 = fnmap$8879[arguments.length] || fnmap$8879[null];
                    return f$9000.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (opts$9002) {
                'options for calling request with';
                return function () {
                    return function (v$9015) {
                        var o$9017 = v$9015;
                        return o$9017;
                    }.call(this, conn(opts$9002));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (opts$9023) {
                return 'list aliases';
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$9028) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$9033) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$9038) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$9043) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$9048) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$9053) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$9058) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$9063) {
                return 'subscribe to events';
            };
            _ki.namespaces[_ki_ns_name].vars.events = _ki_ns_ctx['events'];
            return _ki_ns_ctx['events'];
        }());
        return exports.opts = opts;
    }();
}());
//# sourceMappingURL=datomiki.js.map