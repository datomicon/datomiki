_ki = {
    init: function (self$6453, ns_name$6454) {
        if (_ki.namespaces[ns_name$6454] === undefined) {
            _ki.namespaces[ns_name$6454] = { vars: {} };
        }
        self$6453._ki_ns_name = ns_name$6454;
        self$6453._ki_ns_ctx = self$6453;
        _ki.intern.bind(self$6453)(_ki.modules.core);
        _ki.intern.bind(self$6453)(_ki.modules.mori);
        _ki.intern.bind(self$6453)(_ki.modules);
        _ki.intern.bind(self$6453)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$6455) {
        for (var e$6456 in obj$6455) {
            this[e$6456] = obj$6455[e$6456];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$6457) {
                return x$6457 === false || x$6457 == null ? false : true;
            },
            falsey: function (x$6458) {
                return !truthy(x$6458);
            },
            not: function (x$6459) {
                return !truthy(x$6459);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$6460 = 0;
                for (var i$6461 = 0; i$6461 < arguments.length; i$6461++) {
                    res$6460 += arguments[i$6461];
                }
                return res$6460;
            },
            sub: function () {
                var res$6462 = arguments[0];
                for (var i$6463 = 1; i$6463 < arguments.length; i$6463++) {
                    res$6462 -= arguments[i$6463];
                }
                return res$6462;
            },
            mul: function () {
                var res$6464 = 1;
                for (var i$6465 = 0; i$6465 < arguments.length; i$6465++) {
                    res$6464 *= arguments[i$6465];
                }
                return res$6464;
            },
            div: function () {
                var res$6466 = arguments[0];
                for (var i$6467 = 1; i$6467 < arguments.length; i$6467++) {
                    res$6466 /= arguments[i$6467];
                }
                return res$6466;
            },
            mod: function (a$6468, b$6469) {
                return a$6468 % b$6469;
            },
            lt: function () {
                var res$6470 = true;
                for (var i$6471 = 0; i$6471 < arguments.length - 1; i$6471++) {
                    res$6470 = res$6470 && arguments[i$6471] < arguments[i$6471 + 1];
                    if (!res$6470)
                        break;
                }
                return res$6470;
            },
            gt: function () {
                var res$6472 = true;
                for (var i$6473 = 0; i$6473 < arguments.length - 1; i$6473++) {
                    res$6472 = res$6472 && arguments[i$6473] > arguments[i$6473 + 1];
                    if (!res$6472)
                        break;
                }
                return res$6472;
            },
            leq: function () {
                var res$6474 = true;
                for (var i$6475 = 0; i$6475 < arguments.length - 1; i$6475++) {
                    res$6474 = res$6474 && arguments[i$6475] <= arguments[i$6475 + 1];
                    if (!res$6474)
                        break;
                }
                return res$6474;
            },
            geq: function () {
                var res$6476 = true;
                for (var i$6477 = 0; i$6477 < arguments.length - 1; i$6477++) {
                    res$6476 = res$6476 && arguments[i$6477] >= arguments[i$6477 + 1];
                }
                return res$6476;
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
            } catch (e$6478) {
                try {
                    return require('mori');
                } catch (e$6479) {
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
            _ki_ns_ctx['d'] = require('dbin').use();
            _ki.namespaces[_ki_ns_name].vars.d = _ki_ns_ctx['d'];
            return _ki_ns_ctx['d'];
        }());
        (function () {
            _ki_ns_ctx['base'] = hash_map('uri', d.cfg.rest.uri, 'alias', d.cfg.rest.alias, 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'accept', 'application/edn', 'format', 'json', 'resmod', true);
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$6794) {
                return js_to_clj(data$6794);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$6803) {
                return JSON.parse(clj_to_js(data$6803));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$6815 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$6827) {
                            return function () {
                                return function (v$6844) {
                                    var o$6846 = v$6844;
                                    return assoc(o$6846, 'db', str(get(o$6846, 'alias'), '/', get(o$6846, 'named')), 'uri', str(get(o$6846, 'uri'), get(o$6846, 'url')), 'headers', hash_map('accept', get(o$6846, 'accept')));
                                }.call(this, merge(base, edenize(opts$6827)));
                            }.call(this);
                        }
                    };
                var max_arity$6816 = 0;
                for (var a$6817 in fnmap$6815) {
                    max_arity$6816 = a$6817 > max_arity$6816 ? a$6817 : max_arity$6816;
                }
                fnmap$6815[null] = fnmap$6815[max_arity$6816];
                return function () {
                    var f$6933 = fnmap$6815[arguments.length] || fnmap$6815[null];
                    return f$6933.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = function (res$6935, o$6936) {
                return function () {
                    if (truthy(o$6936.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$6936.format))) {
                                return {
                                    'code': res$6935.statusCode,
                                    'body': o$6936.accept == 'application/edn' ? jsonize(res$6935.body) : res$6935.body
                                };
                            }
                            return hash_map(keyword('code'), res$6935.statusCode, keyword('body'), res$6935.body);
                        }.call(this);
                    }
                    return res$6935;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$6983, cb$6984) {
                return function () {
                    return function (v$6998) {
                        var o$7000 = v$6998;
                        return request(o$7000, function (err$7011, res$7012) {
                            return cb$6984(err$7011, response(res$7012, o$7000));
                        });
                    }.call(this, clj_to_js(opts(o$6983)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$7031 = {
                        1: function (cb$7040) {
                            return aliases(hash_map(), cb$7040);
                        },
                        2: function (o$7068, cb$7069) {
                            return req(merge(edenize(o$7068), hash_map('url', '/data/')), cb$7069);
                        }
                    };
                var max_arity$7032 = 0;
                for (var a$7033 in fnmap$7031) {
                    max_arity$7032 = a$7033 > max_arity$7032 ? a$7033 : max_arity$7032;
                }
                fnmap$7031[null] = fnmap$7031[max_arity$7032];
                return function () {
                    var f$7099 = fnmap$7031[arguments.length] || fnmap$7031[null];
                    return f$7099.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$7101) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$7106) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$7111) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$7116) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$7121) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$7126) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$7131) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$7136) {
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