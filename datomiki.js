_ki = {
    init: function (self$2807, ns_name$2808) {
        if (_ki.namespaces[ns_name$2808] === undefined) {
            _ki.namespaces[ns_name$2808] = { vars: {} };
        }
        self$2807._ki_ns_name = ns_name$2808;
        self$2807._ki_ns_ctx = self$2807;
        _ki.intern.bind(self$2807)(_ki.modules.core);
        _ki.intern.bind(self$2807)(_ki.modules.mori);
        _ki.intern.bind(self$2807)(_ki.modules);
        _ki.intern.bind(self$2807)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$2809) {
        for (var e$2810 in obj$2809) {
            this[e$2810] = obj$2809[e$2810];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$2811) {
                return x$2811 === false || x$2811 == null ? false : true;
            },
            falsey: function (x$2812) {
                return !truthy(x$2812);
            },
            not: function (x$2813) {
                return !truthy(x$2813);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$2814 = 0;
                for (var i$2815 = 0; i$2815 < arguments.length; i$2815++) {
                    res$2814 += arguments[i$2815];
                }
                return res$2814;
            },
            sub: function () {
                var res$2816 = arguments[0];
                for (var i$2817 = 1; i$2817 < arguments.length; i$2817++) {
                    res$2816 -= arguments[i$2817];
                }
                return res$2816;
            },
            mul: function () {
                var res$2818 = 1;
                for (var i$2819 = 0; i$2819 < arguments.length; i$2819++) {
                    res$2818 *= arguments[i$2819];
                }
                return res$2818;
            },
            div: function () {
                var res$2820 = arguments[0];
                for (var i$2821 = 1; i$2821 < arguments.length; i$2821++) {
                    res$2820 /= arguments[i$2821];
                }
                return res$2820;
            },
            mod: function (a$2822, b$2823) {
                return a$2822 % b$2823;
            },
            lt: function () {
                var res$2824 = true;
                for (var i$2825 = 0; i$2825 < arguments.length - 1; i$2825++) {
                    res$2824 = res$2824 && arguments[i$2825] < arguments[i$2825 + 1];
                    if (!res$2824)
                        break;
                }
                return res$2824;
            },
            gt: function () {
                var res$2826 = true;
                for (var i$2827 = 0; i$2827 < arguments.length - 1; i$2827++) {
                    res$2826 = res$2826 && arguments[i$2827] > arguments[i$2827 + 1];
                    if (!res$2826)
                        break;
                }
                return res$2826;
            },
            leq: function () {
                var res$2828 = true;
                for (var i$2829 = 0; i$2829 < arguments.length - 1; i$2829++) {
                    res$2828 = res$2828 && arguments[i$2829] <= arguments[i$2829 + 1];
                    if (!res$2828)
                        break;
                }
                return res$2828;
            },
            geq: function () {
                var res$2830 = true;
                for (var i$2831 = 0; i$2831 < arguments.length - 1; i$2831++) {
                    res$2830 = res$2830 && arguments[i$2831] >= arguments[i$2831 + 1];
                }
                return res$2830;
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
            } catch (e$2832) {
                try {
                    return require('mori');
                } catch (e$2833) {
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
            _ki_ns_ctx['base'] = hash_map('uri', 'http://localhost:8888', 'alias', 'free', 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'format', 'edn', 'accept', 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$3109 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$3121) {
                            return function () {
                                return function (v$3138) {
                                    var m$3140 = v$3138;
                                    return assoc(m$3140, 'db', str(get(m$3140, 'alias'), '/', get(m$3140, 'named')), 'url', str(get(m$3140, 'uri'), get(m$3140, 'url')));
                                }.call(this, merge(base, js_to_clj(opts$3121)));
                            }.call(this);
                        }
                    };
                var max_arity$3110 = 0;
                for (var a$3111 in fnmap$3109) {
                    max_arity$3110 = a$3111 > max_arity$3110 ? a$3111 : max_arity$3110;
                }
                fnmap$3109[null] = fnmap$3109[max_arity$3110];
                return function () {
                    var f$3206 = fnmap$3109[arguments.length] || fnmap$3109[null];
                    return f$3206.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (opts$3208) {
                'options for calling request with';
                return function () {
                    return function (v$3221) {
                        var o$3223 = v$3221;
                        return o$3223;
                    }.call(this, conn(opts$3208));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (opts$3229) {
                return 'list aliases';
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$3234) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$3239) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$3244) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$3249) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$3254) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$3259) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$3264) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$3269) {
                return 'subscribe to events';
            };
            _ki.namespaces[_ki_ns_name].vars.events = _ki_ns_ctx['events'];
            return _ki_ns_ctx['events'];
        }());
        return exports.opts = opts;
    }();
}());
//# sourceMappingURL=datomiki.js.map