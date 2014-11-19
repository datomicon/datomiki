_ki = {
    init: function (self$12905, ns_name$12906) {
        if (_ki.namespaces[ns_name$12906] === undefined) {
            _ki.namespaces[ns_name$12906] = { vars: {} };
        }
        self$12905._ki_ns_name = ns_name$12906;
        self$12905._ki_ns_ctx = self$12905;
        _ki.intern.bind(self$12905)(_ki.modules.core);
        _ki.intern.bind(self$12905)(_ki.modules.mori);
        _ki.intern.bind(self$12905)(_ki.modules);
        _ki.intern.bind(self$12905)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$12907) {
        for (var e$12908 in obj$12907) {
            this[e$12908] = obj$12907[e$12908];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$12909) {
                return x$12909 === false || x$12909 == null ? false : true;
            },
            falsey: function (x$12910) {
                return !truthy(x$12910);
            },
            not: function (x$12911) {
                return !truthy(x$12911);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$12912 = 0;
                for (var i$12913 = 0; i$12913 < arguments.length; i$12913++) {
                    res$12912 += arguments[i$12913];
                }
                return res$12912;
            },
            sub: function () {
                var res$12914 = arguments[0];
                for (var i$12915 = 1; i$12915 < arguments.length; i$12915++) {
                    res$12914 -= arguments[i$12915];
                }
                return res$12914;
            },
            mul: function () {
                var res$12916 = 1;
                for (var i$12917 = 0; i$12917 < arguments.length; i$12917++) {
                    res$12916 *= arguments[i$12917];
                }
                return res$12916;
            },
            div: function () {
                var res$12918 = arguments[0];
                for (var i$12919 = 1; i$12919 < arguments.length; i$12919++) {
                    res$12918 /= arguments[i$12919];
                }
                return res$12918;
            },
            mod: function (a$12920, b$12921) {
                return a$12920 % b$12921;
            },
            lt: function () {
                var res$12922 = true;
                for (var i$12923 = 0; i$12923 < arguments.length - 1; i$12923++) {
                    res$12922 = res$12922 && arguments[i$12923] < arguments[i$12923 + 1];
                    if (!res$12922)
                        break;
                }
                return res$12922;
            },
            gt: function () {
                var res$12924 = true;
                for (var i$12925 = 0; i$12925 < arguments.length - 1; i$12925++) {
                    res$12924 = res$12924 && arguments[i$12925] > arguments[i$12925 + 1];
                    if (!res$12924)
                        break;
                }
                return res$12924;
            },
            leq: function () {
                var res$12926 = true;
                for (var i$12927 = 0; i$12927 < arguments.length - 1; i$12927++) {
                    res$12926 = res$12926 && arguments[i$12927] <= arguments[i$12927 + 1];
                    if (!res$12926)
                        break;
                }
                return res$12926;
            },
            geq: function () {
                var res$12928 = true;
                for (var i$12929 = 0; i$12929 < arguments.length - 1; i$12929++) {
                    res$12928 = res$12928 && arguments[i$12929] >= arguments[i$12929 + 1];
                }
                return res$12928;
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
            } catch (e$12930) {
                try {
                    return require('mori');
                } catch (e$12931) {
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
            _ki_ns_ctx['base'] = hash_map('uri', 'http://localhost:8888', 'alias', 'free', 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'accept', 'application/edn', 'format', 'json', 'response', false);
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['ednize'] = function (data$13236) {
                return js_to_clj(data$13236);
            };
            _ki.namespaces[_ki_ns_name].vars.ednize = _ki_ns_ctx['ednize'];
            return _ki_ns_ctx['ednize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$13245 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$13257) {
                            return function () {
                                return function (v$13274) {
                                    var o$13276 = v$13274;
                                    return assoc(o$13276, 'db', str(get(o$13276, 'alias'), '/', get(o$13276, 'named')), 'uri', str(get(o$13276, 'uri'), get(o$13276, 'url')), 'headers', hash_map('accept', get(o$13276, 'accept')));
                                }.call(this, merge(base, ednize(opts$13257)));
                            }.call(this);
                        }
                    };
                var max_arity$13246 = 0;
                for (var a$13247 in fnmap$13245) {
                    max_arity$13246 = a$13247 > max_arity$13246 ? a$13247 : max_arity$13246;
                }
                fnmap$13245[null] = fnmap$13245[max_arity$13246];
                return function () {
                    var f$13363 = fnmap$13245[arguments.length] || fnmap$13245[null];
                    return f$13363.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = function (res$13365, o$13366) {
                return function () {
                    if (truthy(o$13366.response)) {
                        return res$13365;
                    }
                    return function () {
                        if (truthy(equals('json', o$13366.format))) {
                            return clj_to_js(hash_map('code', res$13365.statusCode, 'body', clj_to_js(res$13365.body)));
                        }
                        return hash_map(keyword('code'), res$13365.statusCode, keyword('body'), res$13365.body);
                    }.call(this);
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$13434, cb$13435) {
                return function () {
                    return function (v$13449) {
                        var o$13451 = v$13449;
                        return request(o$13451, function (err$13462, res$13463) {
                            return cb$13435(err$13462, response(res$13463, o$13451));
                        });
                    }.call(this, clj_to_js(opts(o$13434)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (o$13482, cb$13483) {
                return req(merge(ednize(o$13482), hash_map('url', '/data/')), cb$13483);
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$13514) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$13519) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$13524) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$13529) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$13534) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$13539) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$13544) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$13549) {
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