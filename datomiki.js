_ki = {
    init: function (self$25029, ns_name$25030) {
        if (_ki.namespaces[ns_name$25030] === undefined) {
            _ki.namespaces[ns_name$25030] = { vars: {} };
        }
        self$25029._ki_ns_name = ns_name$25030;
        self$25029._ki_ns_ctx = self$25029;
        _ki.intern.bind(self$25029)(_ki.modules.core);
        _ki.intern.bind(self$25029)(_ki.modules.mori);
        _ki.intern.bind(self$25029)(_ki.modules);
        _ki.intern.bind(self$25029)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$25031) {
        for (var e$25032 in obj$25031) {
            this[e$25032] = obj$25031[e$25032];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$25033) {
                return x$25033 === false || x$25033 == null ? false : true;
            },
            falsey: function (x$25034) {
                return !truthy(x$25034);
            },
            not: function (x$25035) {
                return !truthy(x$25035);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$25036 = 0;
                for (var i$25037 = 0; i$25037 < arguments.length; i$25037++) {
                    res$25036 += arguments[i$25037];
                }
                return res$25036;
            },
            sub: function () {
                var res$25038 = arguments[0];
                for (var i$25039 = 1; i$25039 < arguments.length; i$25039++) {
                    res$25038 -= arguments[i$25039];
                }
                return res$25038;
            },
            mul: function () {
                var res$25040 = 1;
                for (var i$25041 = 0; i$25041 < arguments.length; i$25041++) {
                    res$25040 *= arguments[i$25041];
                }
                return res$25040;
            },
            div: function () {
                var res$25042 = arguments[0];
                for (var i$25043 = 1; i$25043 < arguments.length; i$25043++) {
                    res$25042 /= arguments[i$25043];
                }
                return res$25042;
            },
            mod: function (a$25044, b$25045) {
                return a$25044 % b$25045;
            },
            lt: function () {
                var res$25046 = true;
                for (var i$25047 = 0; i$25047 < arguments.length - 1; i$25047++) {
                    res$25046 = res$25046 && arguments[i$25047] < arguments[i$25047 + 1];
                    if (!res$25046)
                        break;
                }
                return res$25046;
            },
            gt: function () {
                var res$25048 = true;
                for (var i$25049 = 0; i$25049 < arguments.length - 1; i$25049++) {
                    res$25048 = res$25048 && arguments[i$25049] > arguments[i$25049 + 1];
                    if (!res$25048)
                        break;
                }
                return res$25048;
            },
            leq: function () {
                var res$25050 = true;
                for (var i$25051 = 0; i$25051 < arguments.length - 1; i$25051++) {
                    res$25050 = res$25050 && arguments[i$25051] <= arguments[i$25051 + 1];
                    if (!res$25050)
                        break;
                }
                return res$25050;
            },
            geq: function () {
                var res$25052 = true;
                for (var i$25053 = 0; i$25053 < arguments.length - 1; i$25053++) {
                    res$25052 = res$25052 && arguments[i$25053] >= arguments[i$25053 + 1];
                }
                return res$25052;
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
            } catch (e$25054) {
                try {
                    return require('mori');
                } catch (e$25055) {
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
            _ki_ns_ctx['edenize'] = function (data$25364) {
                return js_to_clj(data$25364);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$25373) {
                return JSON.parse(clj_to_js(data$25373));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$25385 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$25397) {
                            return function () {
                                return function (v$25414) {
                                    var o$25416 = v$25414;
                                    return assoc(o$25416, 'db', str(get(o$25416, 'alias'), '/', get(o$25416, 'named')), 'uri', str(get(o$25416, 'uri'), get(o$25416, 'url')), 'headers', hash_map('accept', get(o$25416, 'accept')));
                                }.call(this, merge(base, edenize(opts$25397)));
                            }.call(this);
                        }
                    };
                var max_arity$25386 = 0;
                for (var a$25387 in fnmap$25385) {
                    max_arity$25386 = a$25387 > max_arity$25386 ? a$25387 : max_arity$25386;
                }
                fnmap$25385[null] = fnmap$25385[max_arity$25386];
                return function () {
                    var f$25503 = fnmap$25385[arguments.length] || fnmap$25385[null];
                    return f$25503.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = function (res$25505, o$25506) {
                return function () {
                    if (truthy(!o$25506.response)) {
                        return function () {
                            if (truthy(equals('json', o$25506.format))) {
                                return {
                                    'code': res$25505.statusCode,
                                    'body': o$25506.accept == 'application/edn' ? jsonize(res$25505.body) : res$25505.body
                                };
                            }
                            return hash_map(keyword('code'), res$25505.statusCode, keyword('body'), res$25505.body);
                        }.call(this);
                    }
                    return res$25505;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$25553, cb$25554) {
                return function () {
                    return function (v$25568) {
                        var o$25570 = v$25568;
                        return request(o$25570, function (err$25581, res$25582) {
                            return cb$25554(err$25581, response(res$25582, o$25570));
                        });
                    }.call(this, clj_to_js(opts(o$25553)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (o$25601, cb$25602) {
                return req(merge(edenize(o$25601), hash_map('url', '/data/')), cb$25602);
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$25633) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$25638) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$25643) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$25648) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$25653) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$25658) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$25663) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$25668) {
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