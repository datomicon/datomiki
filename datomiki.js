_ki = {
    init: function (self$28965, ns_name$28966) {
        if (_ki.namespaces[ns_name$28966] === undefined) {
            _ki.namespaces[ns_name$28966] = { vars: {} };
        }
        self$28965._ki_ns_name = ns_name$28966;
        self$28965._ki_ns_ctx = self$28965;
        _ki.intern.bind(self$28965)(_ki.modules.core);
        _ki.intern.bind(self$28965)(_ki.modules.mori);
        _ki.intern.bind(self$28965)(_ki.modules);
        _ki.intern.bind(self$28965)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$28967) {
        for (var e$28968 in obj$28967) {
            this[e$28968] = obj$28967[e$28968];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$28969) {
                return x$28969 === false || x$28969 == null ? false : true;
            },
            falsey: function (x$28970) {
                return !truthy(x$28970);
            },
            not: function (x$28971) {
                return !truthy(x$28971);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$28972 = 0;
                for (var i$28973 = 0; i$28973 < arguments.length; i$28973++) {
                    res$28972 += arguments[i$28973];
                }
                return res$28972;
            },
            sub: function () {
                var res$28974 = arguments[0];
                for (var i$28975 = 1; i$28975 < arguments.length; i$28975++) {
                    res$28974 -= arguments[i$28975];
                }
                return res$28974;
            },
            mul: function () {
                var res$28976 = 1;
                for (var i$28977 = 0; i$28977 < arguments.length; i$28977++) {
                    res$28976 *= arguments[i$28977];
                }
                return res$28976;
            },
            div: function () {
                var res$28978 = arguments[0];
                for (var i$28979 = 1; i$28979 < arguments.length; i$28979++) {
                    res$28978 /= arguments[i$28979];
                }
                return res$28978;
            },
            mod: function (a$28980, b$28981) {
                return a$28980 % b$28981;
            },
            lt: function () {
                var res$28982 = true;
                for (var i$28983 = 0; i$28983 < arguments.length - 1; i$28983++) {
                    res$28982 = res$28982 && arguments[i$28983] < arguments[i$28983 + 1];
                    if (!res$28982)
                        break;
                }
                return res$28982;
            },
            gt: function () {
                var res$28984 = true;
                for (var i$28985 = 0; i$28985 < arguments.length - 1; i$28985++) {
                    res$28984 = res$28984 && arguments[i$28985] > arguments[i$28985 + 1];
                    if (!res$28984)
                        break;
                }
                return res$28984;
            },
            leq: function () {
                var res$28986 = true;
                for (var i$28987 = 0; i$28987 < arguments.length - 1; i$28987++) {
                    res$28986 = res$28986 && arguments[i$28987] <= arguments[i$28987 + 1];
                    if (!res$28986)
                        break;
                }
                return res$28986;
            },
            geq: function () {
                var res$28988 = true;
                for (var i$28989 = 0; i$28989 < arguments.length - 1; i$28989++) {
                    res$28988 = res$28988 && arguments[i$28989] >= arguments[i$28989 + 1];
                }
                return res$28988;
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
            } catch (e$28990) {
                try {
                    return require('mori');
                } catch (e$28991) {
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
            _ki_ns_ctx['edenize'] = function (data$29300) {
                return js_to_clj(data$29300);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$29309) {
                return JSON.parse(clj_to_js(data$29309));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$29321 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$29333) {
                            return function () {
                                return function (v$29350) {
                                    var o$29352 = v$29350;
                                    return assoc(o$29352, 'db', str(get(o$29352, 'alias'), '/', get(o$29352, 'named')), 'uri', str(get(o$29352, 'uri'), get(o$29352, 'url')), 'headers', hash_map('accept', get(o$29352, 'accept')));
                                }.call(this, merge(base, edenize(opts$29333)));
                            }.call(this);
                        }
                    };
                var max_arity$29322 = 0;
                for (var a$29323 in fnmap$29321) {
                    max_arity$29322 = a$29323 > max_arity$29322 ? a$29323 : max_arity$29322;
                }
                fnmap$29321[null] = fnmap$29321[max_arity$29322];
                return function () {
                    var f$29439 = fnmap$29321[arguments.length] || fnmap$29321[null];
                    return f$29439.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = function (res$29441, o$29442) {
                return function () {
                    if (truthy(o$29442.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$29442.format))) {
                                return {
                                    'code': res$29441.statusCode,
                                    'body': o$29442.accept == 'application/edn' ? jsonize(res$29441.body) : res$29441.body
                                };
                            }
                            return hash_map(keyword('code'), res$29441.statusCode, keyword('body'), res$29441.body);
                        }.call(this);
                    }
                    return res$29441;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$29489, cb$29490) {
                return function () {
                    return function (v$29504) {
                        var o$29506 = v$29504;
                        return request(o$29506, function (err$29517, res$29518) {
                            return cb$29490(err$29517, response(res$29518, o$29506));
                        });
                    }.call(this, clj_to_js(opts(o$29489)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$29537 = {
                        1: function (cb$29546) {
                            return aliases(hash_map(), cb$29546);
                        },
                        2: function (o$29574, cb$29575) {
                            return req(merge(edenize(o$29574), hash_map('url', '/data/')), cb$29575);
                        }
                    };
                var max_arity$29538 = 0;
                for (var a$29539 in fnmap$29537) {
                    max_arity$29538 = a$29539 > max_arity$29538 ? a$29539 : max_arity$29538;
                }
                fnmap$29537[null] = fnmap$29537[max_arity$29538];
                return function () {
                    var f$29605 = fnmap$29537[arguments.length] || fnmap$29537[null];
                    return f$29605.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$29607) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$29612) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$29617) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$29622) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$29627) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$29632) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$29637) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$29642) {
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