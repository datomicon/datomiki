_ki = {
    init: function (self$19739, ns_name$19740) {
        if (_ki.namespaces[ns_name$19740] === undefined) {
            _ki.namespaces[ns_name$19740] = { vars: {} };
        }
        self$19739._ki_ns_name = ns_name$19740;
        self$19739._ki_ns_ctx = self$19739;
        _ki.intern.bind(self$19739)(_ki.modules.core);
        _ki.intern.bind(self$19739)(_ki.modules.mori);
        _ki.intern.bind(self$19739)(_ki.modules);
        _ki.intern.bind(self$19739)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$19741) {
        for (var e$19742 in obj$19741) {
            this[e$19742] = obj$19741[e$19742];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$19743) {
                return x$19743 === false || x$19743 == null ? false : true;
            },
            falsey: function (x$19744) {
                return !truthy(x$19744);
            },
            not: function (x$19745) {
                return !truthy(x$19745);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$19746 = 0;
                for (var i$19747 = 0; i$19747 < arguments.length; i$19747++) {
                    res$19746 += arguments[i$19747];
                }
                return res$19746;
            },
            sub: function () {
                var res$19748 = arguments[0];
                for (var i$19749 = 1; i$19749 < arguments.length; i$19749++) {
                    res$19748 -= arguments[i$19749];
                }
                return res$19748;
            },
            mul: function () {
                var res$19750 = 1;
                for (var i$19751 = 0; i$19751 < arguments.length; i$19751++) {
                    res$19750 *= arguments[i$19751];
                }
                return res$19750;
            },
            div: function () {
                var res$19752 = arguments[0];
                for (var i$19753 = 1; i$19753 < arguments.length; i$19753++) {
                    res$19752 /= arguments[i$19753];
                }
                return res$19752;
            },
            mod: function (a$19754, b$19755) {
                return a$19754 % b$19755;
            },
            lt: function () {
                var res$19756 = true;
                for (var i$19757 = 0; i$19757 < arguments.length - 1; i$19757++) {
                    res$19756 = res$19756 && arguments[i$19757] < arguments[i$19757 + 1];
                    if (!res$19756)
                        break;
                }
                return res$19756;
            },
            gt: function () {
                var res$19758 = true;
                for (var i$19759 = 0; i$19759 < arguments.length - 1; i$19759++) {
                    res$19758 = res$19758 && arguments[i$19759] > arguments[i$19759 + 1];
                    if (!res$19758)
                        break;
                }
                return res$19758;
            },
            leq: function () {
                var res$19760 = true;
                for (var i$19761 = 0; i$19761 < arguments.length - 1; i$19761++) {
                    res$19760 = res$19760 && arguments[i$19761] <= arguments[i$19761 + 1];
                    if (!res$19760)
                        break;
                }
                return res$19760;
            },
            geq: function () {
                var res$19762 = true;
                for (var i$19763 = 0; i$19763 < arguments.length - 1; i$19763++) {
                    res$19762 = res$19762 && arguments[i$19763] >= arguments[i$19763 + 1];
                }
                return res$19762;
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
            } catch (e$19764) {
                try {
                    return require('mori');
                } catch (e$19765) {
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
            _ki_ns_ctx['ednize'] = function (data$20074) {
                return js_to_clj(data$20074);
            };
            _ki.namespaces[_ki_ns_name].vars.ednize = _ki_ns_ctx['ednize'];
            return _ki_ns_ctx['ednize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$20083) {
                return JSON.parse(clj_to_js(data$20083));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$20095 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$20107) {
                            return function () {
                                return function (v$20124) {
                                    var o$20126 = v$20124;
                                    return assoc(o$20126, 'db', str(get(o$20126, 'alias'), '/', get(o$20126, 'named')), 'uri', str(get(o$20126, 'uri'), get(o$20126, 'url')), 'headers', hash_map('accept', get(o$20126, 'accept')));
                                }.call(this, merge(base, ednize(opts$20107)));
                            }.call(this);
                        }
                    };
                var max_arity$20096 = 0;
                for (var a$20097 in fnmap$20095) {
                    max_arity$20096 = a$20097 > max_arity$20096 ? a$20097 : max_arity$20096;
                }
                fnmap$20095[null] = fnmap$20095[max_arity$20096];
                return function () {
                    var f$20213 = fnmap$20095[arguments.length] || fnmap$20095[null];
                    return f$20213.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = function (res$20215, o$20216) {
                return function () {
                    return function (v$20221) {
                        var body$20223 = v$20221;
                        return function () {
                            if (truthy(o$20216.response)) {
                                return res$20215;
                            }
                            return function () {
                                if (truthy(equals('json', o$20216.format))) {
                                    return {
                                        'code': res$20215.statusCode,
                                        'body': body$20223
                                    };
                                }
                                return hash_map(keyword('code'), res$20215.statusCode, keyword('body'), body$20223);
                            }.call(this);
                        }.call(this);
                    }.call(this, o$20216.format == 'json' && o$20216.accept == 'application/edn' ? jsonize(res$20215.body) : res$20215.body);
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$20271, cb$20272) {
                return function () {
                    return function (v$20286) {
                        var o$20288 = v$20286;
                        return request(o$20288, function (err$20299, res$20300) {
                            return cb$20272(err$20299, response(res$20300, o$20288));
                        });
                    }.call(this, clj_to_js(opts(o$20271)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (o$20319, cb$20320) {
                return req(merge(ednize(o$20319), hash_map('url', '/data/')), cb$20320);
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$20351) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$20356) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$20361) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$20366) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$20371) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$20376) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$20381) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$20386) {
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