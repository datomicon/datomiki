_ki = {
    init: function (self$17715, ns_name$17716) {
        if (_ki.namespaces[ns_name$17716] === undefined) {
            _ki.namespaces[ns_name$17716] = { vars: {} };
        }
        self$17715._ki_ns_name = ns_name$17716;
        self$17715._ki_ns_ctx = self$17715;
        _ki.intern.bind(self$17715)(_ki.modules.core);
        _ki.intern.bind(self$17715)(_ki.modules.mori);
        _ki.intern.bind(self$17715)(_ki.modules);
        _ki.intern.bind(self$17715)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$17717) {
        for (var e$17718 in obj$17717) {
            this[e$17718] = obj$17717[e$17718];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$17719) {
                return x$17719 === false || x$17719 == null ? false : true;
            },
            falsey: function (x$17720) {
                return !truthy(x$17720);
            },
            not: function (x$17721) {
                return !truthy(x$17721);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$17722 = 0;
                for (var i$17723 = 0; i$17723 < arguments.length; i$17723++) {
                    res$17722 += arguments[i$17723];
                }
                return res$17722;
            },
            sub: function () {
                var res$17724 = arguments[0];
                for (var i$17725 = 1; i$17725 < arguments.length; i$17725++) {
                    res$17724 -= arguments[i$17725];
                }
                return res$17724;
            },
            mul: function () {
                var res$17726 = 1;
                for (var i$17727 = 0; i$17727 < arguments.length; i$17727++) {
                    res$17726 *= arguments[i$17727];
                }
                return res$17726;
            },
            div: function () {
                var res$17728 = arguments[0];
                for (var i$17729 = 1; i$17729 < arguments.length; i$17729++) {
                    res$17728 /= arguments[i$17729];
                }
                return res$17728;
            },
            mod: function (a$17730, b$17731) {
                return a$17730 % b$17731;
            },
            lt: function () {
                var res$17732 = true;
                for (var i$17733 = 0; i$17733 < arguments.length - 1; i$17733++) {
                    res$17732 = res$17732 && arguments[i$17733] < arguments[i$17733 + 1];
                    if (!res$17732)
                        break;
                }
                return res$17732;
            },
            gt: function () {
                var res$17734 = true;
                for (var i$17735 = 0; i$17735 < arguments.length - 1; i$17735++) {
                    res$17734 = res$17734 && arguments[i$17735] > arguments[i$17735 + 1];
                    if (!res$17734)
                        break;
                }
                return res$17734;
            },
            leq: function () {
                var res$17736 = true;
                for (var i$17737 = 0; i$17737 < arguments.length - 1; i$17737++) {
                    res$17736 = res$17736 && arguments[i$17737] <= arguments[i$17737 + 1];
                    if (!res$17736)
                        break;
                }
                return res$17736;
            },
            geq: function () {
                var res$17738 = true;
                for (var i$17739 = 0; i$17739 < arguments.length - 1; i$17739++) {
                    res$17738 = res$17738 && arguments[i$17739] >= arguments[i$17739 + 1];
                }
                return res$17738;
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
            } catch (e$17740) {
                try {
                    return require('mori');
                } catch (e$17741) {
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
            _ki_ns_ctx['ednize'] = function (data$18050) {
                return js_to_clj(data$18050);
            };
            _ki.namespaces[_ki_ns_name].vars.ednize = _ki_ns_ctx['ednize'];
            return _ki_ns_ctx['ednize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$18059) {
                return JSON.parse(clj_to_js(data$18059));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$18071 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$18083) {
                            return function () {
                                return function (v$18100) {
                                    var o$18102 = v$18100;
                                    return assoc(o$18102, 'db', str(get(o$18102, 'alias'), '/', get(o$18102, 'named')), 'uri', str(get(o$18102, 'uri'), get(o$18102, 'url')), 'headers', hash_map('accept', get(o$18102, 'accept')));
                                }.call(this, merge(base, ednize(opts$18083)));
                            }.call(this);
                        }
                    };
                var max_arity$18072 = 0;
                for (var a$18073 in fnmap$18071) {
                    max_arity$18072 = a$18073 > max_arity$18072 ? a$18073 : max_arity$18072;
                }
                fnmap$18071[null] = fnmap$18071[max_arity$18072];
                return function () {
                    var f$18189 = fnmap$18071[arguments.length] || fnmap$18071[null];
                    return f$18189.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = function (res$18191, o$18192) {
                return function () {
                    return function (v$18197) {
                        var body$18199 = v$18197;
                        return function () {
                            if (truthy(o$18192.response)) {
                                return res$18191;
                            }
                            return function () {
                                if (truthy(equals('json', o$18192.format))) {
                                    return {
                                        'code': res$18191.statusCode,
                                        'body': body$18199
                                    };
                                }
                                return hash_map(keyword('code'), res$18191.statusCode, keyword('body'), body$18199);
                            }.call(this);
                        }.call(this);
                    }.call(this, function () {
                        if (truthy(truthy(equals('json', o$18192.format)) && truthy(equals('application/edn', o$18192.accept)))) {
                            return jsonize(res$18191.body);
                        }
                        return res$18191.body;
                    }.call(this));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$18279, cb$18280) {
                return function () {
                    return function (v$18294) {
                        var o$18296 = v$18294;
                        return request(o$18296, function (err$18307, res$18308) {
                            return cb$18280(err$18307, response(res$18308, o$18296));
                        });
                    }.call(this, clj_to_js(opts(o$18279)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (o$18327, cb$18328) {
                return req(merge(ednize(o$18327), hash_map('url', '/data/')), cb$18328);
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$18359) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$18364) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$18369) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$18374) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$18379) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$18384) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$18389) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$18394) {
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