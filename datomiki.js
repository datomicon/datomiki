_ki = {
    init: function (self$7802, ns_name$7803) {
        if (_ki.namespaces[ns_name$7803] === undefined) {
            _ki.namespaces[ns_name$7803] = { vars: {} };
        }
        self$7802._ki_ns_name = ns_name$7803;
        self$7802._ki_ns_ctx = self$7802;
        _ki.intern.bind(self$7802)(_ki.modules.core);
        _ki.intern.bind(self$7802)(_ki.modules.mori);
        _ki.intern.bind(self$7802)(_ki.modules);
        _ki.intern.bind(self$7802)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$7804) {
        for (var e$7805 in obj$7804) {
            this[e$7805] = obj$7804[e$7805];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$7806) {
                return x$7806 === false || x$7806 == null ? false : true;
            },
            falsey: function (x$7807) {
                return !truthy(x$7807);
            },
            not: function (x$7808) {
                return !truthy(x$7808);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$7809 = 0;
                for (var i$7810 = 0; i$7810 < arguments.length; i$7810++) {
                    res$7809 += arguments[i$7810];
                }
                return res$7809;
            },
            sub: function () {
                var res$7811 = arguments[0];
                for (var i$7812 = 1; i$7812 < arguments.length; i$7812++) {
                    res$7811 -= arguments[i$7812];
                }
                return res$7811;
            },
            mul: function () {
                var res$7813 = 1;
                for (var i$7814 = 0; i$7814 < arguments.length; i$7814++) {
                    res$7813 *= arguments[i$7814];
                }
                return res$7813;
            },
            div: function () {
                var res$7815 = arguments[0];
                for (var i$7816 = 1; i$7816 < arguments.length; i$7816++) {
                    res$7815 /= arguments[i$7816];
                }
                return res$7815;
            },
            mod: function (a$7817, b$7818) {
                return a$7817 % b$7818;
            },
            lt: function () {
                var res$7819 = true;
                for (var i$7820 = 0; i$7820 < arguments.length - 1; i$7820++) {
                    res$7819 = res$7819 && arguments[i$7820] < arguments[i$7820 + 1];
                    if (!res$7819)
                        break;
                }
                return res$7819;
            },
            gt: function () {
                var res$7821 = true;
                for (var i$7822 = 0; i$7822 < arguments.length - 1; i$7822++) {
                    res$7821 = res$7821 && arguments[i$7822] > arguments[i$7822 + 1];
                    if (!res$7821)
                        break;
                }
                return res$7821;
            },
            leq: function () {
                var res$7823 = true;
                for (var i$7824 = 0; i$7824 < arguments.length - 1; i$7824++) {
                    res$7823 = res$7823 && arguments[i$7824] <= arguments[i$7824 + 1];
                    if (!res$7823)
                        break;
                }
                return res$7823;
            },
            geq: function () {
                var res$7825 = true;
                for (var i$7826 = 0; i$7826 < arguments.length - 1; i$7826++) {
                    res$7825 = res$7825 && arguments[i$7826] >= arguments[i$7826 + 1];
                }
                return res$7825;
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
            } catch (e$7827) {
                try {
                    return require('mori');
                } catch (e$7828) {
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
            _ki_ns_ctx['base'] = hash_map(keyword('uri'), 'http://localhost:8888', keyword('alias'), 'free', keyword('name'), 'test', keyword('db'), '', keyword('url'), '/', keyword('basis'), '-', keyword('method'), 'get', keyword('data'), hash_map(), keyword('format'), 'edn', keyword('accept'), 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$8240 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$8252) {
                            return function () {
                                return function (v$8269) {
                                    var m$8271 = v$8269;
                                    return assoc(m$8271, keyword('db'), str(get(m$8271, keyword('alias')), '/', get(m$8271, keyword('name'))), keyword('url'), str(get(m$8271, keyword('uri')), get(m$8271, keyword('url'))));
                                }.call(this, merge(base, js_to_clj(opts$8252)));
                            }.call(this);
                        }
                    };
                var max_arity$8241 = 0;
                for (var a$8242 in fnmap$8240) {
                    max_arity$8241 = a$8242 > max_arity$8241 ? a$8242 : max_arity$8241;
                }
                fnmap$8240[null] = fnmap$8240[max_arity$8241];
                return function () {
                    var f$8361 = fnmap$8240[arguments.length] || fnmap$8240[null];
                    return f$8361.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (opts$8363) {
                'options for calling request with';
                return function () {
                    return function (v$8376) {
                        var o$8378 = v$8376;
                        return o$8378;
                    }.call(this, conn(opts$8363));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (opts$8384) {
                return 'list aliases';
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$8389) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$8394) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$8399) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$8404) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$8409) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$8414) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$8419) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$8424) {
                return 'subscribe to events';
            };
            _ki.namespaces[_ki_ns_name].vars.events = _ki_ns_ctx['events'];
            return _ki_ns_ctx['events'];
        }());
        return exports.opts = opts;
    }();
}());
//# sourceMappingURL=datomiki.js.map