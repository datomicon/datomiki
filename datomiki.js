_ki = {
    init: function (self$27653, ns_name$27654) {
        if (_ki.namespaces[ns_name$27654] === undefined) {
            _ki.namespaces[ns_name$27654] = { vars: {} };
        }
        self$27653._ki_ns_name = ns_name$27654;
        self$27653._ki_ns_ctx = self$27653;
        _ki.intern.bind(self$27653)(_ki.modules.core);
        _ki.intern.bind(self$27653)(_ki.modules.mori);
        _ki.intern.bind(self$27653)(_ki.modules);
        _ki.intern.bind(self$27653)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$27655) {
        for (var e$27656 in obj$27655) {
            this[e$27656] = obj$27655[e$27656];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$27657) {
                return x$27657 === false || x$27657 == null ? false : true;
            },
            falsey: function (x$27658) {
                return !truthy(x$27658);
            },
            not: function (x$27659) {
                return !truthy(x$27659);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$27660 = 0;
                for (var i$27661 = 0; i$27661 < arguments.length; i$27661++) {
                    res$27660 += arguments[i$27661];
                }
                return res$27660;
            },
            sub: function () {
                var res$27662 = arguments[0];
                for (var i$27663 = 1; i$27663 < arguments.length; i$27663++) {
                    res$27662 -= arguments[i$27663];
                }
                return res$27662;
            },
            mul: function () {
                var res$27664 = 1;
                for (var i$27665 = 0; i$27665 < arguments.length; i$27665++) {
                    res$27664 *= arguments[i$27665];
                }
                return res$27664;
            },
            div: function () {
                var res$27666 = arguments[0];
                for (var i$27667 = 1; i$27667 < arguments.length; i$27667++) {
                    res$27666 /= arguments[i$27667];
                }
                return res$27666;
            },
            mod: function (a$27668, b$27669) {
                return a$27668 % b$27669;
            },
            lt: function () {
                var res$27670 = true;
                for (var i$27671 = 0; i$27671 < arguments.length - 1; i$27671++) {
                    res$27670 = res$27670 && arguments[i$27671] < arguments[i$27671 + 1];
                    if (!res$27670)
                        break;
                }
                return res$27670;
            },
            gt: function () {
                var res$27672 = true;
                for (var i$27673 = 0; i$27673 < arguments.length - 1; i$27673++) {
                    res$27672 = res$27672 && arguments[i$27673] > arguments[i$27673 + 1];
                    if (!res$27672)
                        break;
                }
                return res$27672;
            },
            leq: function () {
                var res$27674 = true;
                for (var i$27675 = 0; i$27675 < arguments.length - 1; i$27675++) {
                    res$27674 = res$27674 && arguments[i$27675] <= arguments[i$27675 + 1];
                    if (!res$27674)
                        break;
                }
                return res$27674;
            },
            geq: function () {
                var res$27676 = true;
                for (var i$27677 = 0; i$27677 < arguments.length - 1; i$27677++) {
                    res$27676 = res$27676 && arguments[i$27677] >= arguments[i$27677 + 1];
                }
                return res$27676;
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
            } catch (e$27678) {
                try {
                    return require('mori');
                } catch (e$27679) {
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
            _ki_ns_ctx['edenize'] = function (data$27988) {
                return js_to_clj(data$27988);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$27997) {
                return JSON.parse(clj_to_js(data$27997));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$28009 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$28021) {
                            return function () {
                                return function (v$28038) {
                                    var o$28040 = v$28038;
                                    return assoc(o$28040, 'db', str(get(o$28040, 'alias'), '/', get(o$28040, 'named')), 'uri', str(get(o$28040, 'uri'), get(o$28040, 'url')), 'headers', hash_map('accept', get(o$28040, 'accept')));
                                }.call(this, merge(base, edenize(opts$28021)));
                            }.call(this);
                        }
                    };
                var max_arity$28010 = 0;
                for (var a$28011 in fnmap$28009) {
                    max_arity$28010 = a$28011 > max_arity$28010 ? a$28011 : max_arity$28010;
                }
                fnmap$28009[null] = fnmap$28009[max_arity$28010];
                return function () {
                    var f$28127 = fnmap$28009[arguments.length] || fnmap$28009[null];
                    return f$28127.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = function (res$28129, o$28130) {
                return function () {
                    if (truthy(o$28130.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$28130.format))) {
                                return {
                                    'code': res$28129.statusCode,
                                    'body': o$28130.accept == 'application/edn' ? jsonize(res$28129.body) : res$28129.body
                                };
                            }
                            return hash_map(keyword('code'), res$28129.statusCode, keyword('body'), res$28129.body);
                        }.call(this);
                    }
                    return res$28129;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$28177, cb$28178) {
                return function () {
                    return function (v$28192) {
                        var o$28194 = v$28192;
                        return request(o$28194, function (err$28205, res$28206) {
                            return cb$28178(err$28205, response(res$28206, o$28194));
                        });
                    }.call(this, clj_to_js(opts(o$28177)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (o$28225, cb$28226) {
                return req(merge(edenize(o$28225), hash_map('url', '/data/')), cb$28226);
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$28257) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$28262) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$28267) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$28272) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$28277) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$28282) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$28287) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$28292) {
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