_ki = {
    init: function (self$19062, ns_name$19063) {
        if (_ki.namespaces[ns_name$19063] === undefined) {
            _ki.namespaces[ns_name$19063] = { vars: {} };
        }
        self$19062._ki_ns_name = ns_name$19063;
        self$19062._ki_ns_ctx = self$19062;
        _ki.intern.bind(self$19062)(_ki.modules.core);
        _ki.intern.bind(self$19062)(_ki.modules.mori);
        _ki.intern.bind(self$19062)(_ki.modules);
        _ki.intern.bind(self$19062)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$19064) {
        for (var e$19065 in obj$19064) {
            this[e$19065] = obj$19064[e$19065];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$19066) {
                return x$19066 === false || x$19066 == null ? false : true;
            },
            falsey: function (x$19067) {
                return !truthy(x$19067);
            },
            not: function (x$19068) {
                return !truthy(x$19068);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$19069 = 0;
                for (var i$19070 = 0; i$19070 < arguments.length; i$19070++) {
                    res$19069 += arguments[i$19070];
                }
                return res$19069;
            },
            sub: function () {
                var res$19071 = arguments[0];
                for (var i$19072 = 1; i$19072 < arguments.length; i$19072++) {
                    res$19071 -= arguments[i$19072];
                }
                return res$19071;
            },
            mul: function () {
                var res$19073 = 1;
                for (var i$19074 = 0; i$19074 < arguments.length; i$19074++) {
                    res$19073 *= arguments[i$19074];
                }
                return res$19073;
            },
            div: function () {
                var res$19075 = arguments[0];
                for (var i$19076 = 1; i$19076 < arguments.length; i$19076++) {
                    res$19075 /= arguments[i$19076];
                }
                return res$19075;
            },
            mod: function (a$19077, b$19078) {
                return a$19077 % b$19078;
            },
            lt: function () {
                var res$19079 = true;
                for (var i$19080 = 0; i$19080 < arguments.length - 1; i$19080++) {
                    res$19079 = res$19079 && arguments[i$19080] < arguments[i$19080 + 1];
                    if (!res$19079)
                        break;
                }
                return res$19079;
            },
            gt: function () {
                var res$19081 = true;
                for (var i$19082 = 0; i$19082 < arguments.length - 1; i$19082++) {
                    res$19081 = res$19081 && arguments[i$19082] > arguments[i$19082 + 1];
                    if (!res$19081)
                        break;
                }
                return res$19081;
            },
            leq: function () {
                var res$19083 = true;
                for (var i$19084 = 0; i$19084 < arguments.length - 1; i$19084++) {
                    res$19083 = res$19083 && arguments[i$19084] <= arguments[i$19084 + 1];
                    if (!res$19083)
                        break;
                }
                return res$19083;
            },
            geq: function () {
                var res$19085 = true;
                for (var i$19086 = 0; i$19086 < arguments.length - 1; i$19086++) {
                    res$19085 = res$19085 && arguments[i$19086] >= arguments[i$19086 + 1];
                }
                return res$19085;
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
            } catch (e$19087) {
                try {
                    return require('mori');
                } catch (e$19088) {
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
            _ki_ns_ctx['base'] = hash_map(keyword('uri'), 'http://localhost:8888', keyword('alias'), 'mem', keyword('name'), 'test', keyword('db'), '', keyword('url'), '/', keyword('basis'), '-', keyword('method'), 'get', keyword('data'), hash_map(), keyword('format'), 'edn', keyword('accept'), 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$19467 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$19479) {
                            return function () {
                                return function (v$19496) {
                                    var m$19498 = v$19496;
                                    return assoc(m$19498, keyword('db'), str(get(m$19498, keyword('alias')), '/', get(m$19498, keyword('name'))), keyword('url'), str(get(m$19498, keyword('uri')), get(m$19498, keyword('url'))));
                                }.call(this, merge(base, js_to_clj(opts$19479)));
                            }.call(this);
                        }
                    };
                var max_arity$19468 = 0;
                for (var a$19469 in fnmap$19467) {
                    max_arity$19468 = a$19469 > max_arity$19468 ? a$19469 : max_arity$19468;
                }
                fnmap$19467[null] = fnmap$19467[max_arity$19468];
                return function () {
                    var f$19588 = fnmap$19467[arguments.length] || fnmap$19467[null];
                    return f$19588.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (opts$19590) {
                'options for calling request with';
                return function () {
                    return function (v$19603) {
                        var o$19605 = v$19603;
                        return o$19605;
                    }.call(this, conn(opts$19590));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        exports.opts = opts;
        return exports.req = req;
    }();
}());
//# sourceMappingURL=datomiki.js.map