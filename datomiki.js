_ki = {
    init: function (self$6841, ns_name$6842) {
        if (_ki.namespaces[ns_name$6842] === undefined) {
            _ki.namespaces[ns_name$6842] = { vars: {} };
        }
        self$6841._ki_ns_name = ns_name$6842;
        self$6841._ki_ns_ctx = self$6841;
        _ki.intern.bind(self$6841)(_ki.modules.core);
        _ki.intern.bind(self$6841)(_ki.modules.mori);
        _ki.intern.bind(self$6841)(_ki.modules);
        _ki.intern.bind(self$6841)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$6843) {
        for (var e$6844 in obj$6843) {
            this[e$6844] = obj$6843[e$6844];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$6845) {
                return x$6845 === false || x$6845 == null ? false : true;
            },
            falsey: function (x$6846) {
                return !truthy(x$6846);
            },
            not: function (x$6847) {
                return !truthy(x$6847);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$6848 = 0;
                for (var i$6849 = 0; i$6849 < arguments.length; i$6849++) {
                    res$6848 += arguments[i$6849];
                }
                return res$6848;
            },
            sub: function () {
                var res$6850 = arguments[0];
                for (var i$6851 = 1; i$6851 < arguments.length; i$6851++) {
                    res$6850 -= arguments[i$6851];
                }
                return res$6850;
            },
            mul: function () {
                var res$6852 = 1;
                for (var i$6853 = 0; i$6853 < arguments.length; i$6853++) {
                    res$6852 *= arguments[i$6853];
                }
                return res$6852;
            },
            div: function () {
                var res$6854 = arguments[0];
                for (var i$6855 = 1; i$6855 < arguments.length; i$6855++) {
                    res$6854 /= arguments[i$6855];
                }
                return res$6854;
            },
            mod: function (a$6856, b$6857) {
                return a$6856 % b$6857;
            },
            lt: function () {
                var res$6858 = true;
                for (var i$6859 = 0; i$6859 < arguments.length - 1; i$6859++) {
                    res$6858 = res$6858 && arguments[i$6859] < arguments[i$6859 + 1];
                    if (!res$6858)
                        break;
                }
                return res$6858;
            },
            gt: function () {
                var res$6860 = true;
                for (var i$6861 = 0; i$6861 < arguments.length - 1; i$6861++) {
                    res$6860 = res$6860 && arguments[i$6861] > arguments[i$6861 + 1];
                    if (!res$6860)
                        break;
                }
                return res$6860;
            },
            leq: function () {
                var res$6862 = true;
                for (var i$6863 = 0; i$6863 < arguments.length - 1; i$6863++) {
                    res$6862 = res$6862 && arguments[i$6863] <= arguments[i$6863 + 1];
                    if (!res$6862)
                        break;
                }
                return res$6862;
            },
            geq: function () {
                var res$6864 = true;
                for (var i$6865 = 0; i$6865 < arguments.length - 1; i$6865++) {
                    res$6864 = res$6864 && arguments[i$6865] >= arguments[i$6865 + 1];
                }
                return res$6864;
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
            } catch (e$6866) {
                try {
                    return require('mori');
                } catch (e$6867) {
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
        var request$6872 = require('request');
        (function () {
            _ki_ns_ctx['base'] = hash_map('uri', 'http://localhost:8888', 'alias', 'free', 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'format', 'edn', 'accept', 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$7149 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$7161) {
                            return function () {
                                return function (v$7178) {
                                    var m$7180 = v$7178;
                                    return assoc(m$7180, 'db', str(get(m$7180, 'alias'), '/', get(m$7180, 'named')), 'uri', str(get(m$7180, 'uri'), get(m$7180, 'url')), 'headers', hash_map('accept', get(m$7180, 'accept')));
                                }.call(this, merge(base, js_to_clj(opts$7161)));
                            }.call(this);
                        }
                    };
                var max_arity$7150 = 0;
                for (var a$7151 in fnmap$7149) {
                    max_arity$7150 = a$7151 > max_arity$7150 ? a$7151 : max_arity$7150;
                }
                fnmap$7149[null] = fnmap$7149[max_arity$7150];
                return function () {
                    var f$7267 = fnmap$7149[arguments.length] || fnmap$7149[null];
                    return f$7267.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$7269, cb$7270) {
                'make a request';
                return function () {
                    return function (v$7287) {
                        var o$7289 = v$7287;
                        return request$6872(o$7289, function (err$7300, res$7301, body$7302) {
                            return cb$7270(err$7300, body$7302);
                        });
                    }.call(this, clj_to_js(opts(o$7269)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (opts$7314) {
                return 'list aliases';
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$7319) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$7324) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$7329) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$7334) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$7339) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$7344) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$7349) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$7354) {
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