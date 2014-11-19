_ki = {
    init: function (self$32531, ns_name$32532) {
        if (_ki.namespaces[ns_name$32532] === undefined) {
            _ki.namespaces[ns_name$32532] = { vars: {} };
        }
        self$32531._ki_ns_name = ns_name$32532;
        self$32531._ki_ns_ctx = self$32531;
        _ki.intern.bind(self$32531)(_ki.modules.core);
        _ki.intern.bind(self$32531)(_ki.modules.mori);
        _ki.intern.bind(self$32531)(_ki.modules);
        _ki.intern.bind(self$32531)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$32533) {
        for (var e$32534 in obj$32533) {
            this[e$32534] = obj$32533[e$32534];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$32535) {
                return x$32535 === false || x$32535 == null ? false : true;
            },
            falsey: function (x$32536) {
                return !truthy(x$32536);
            },
            not: function (x$32537) {
                return !truthy(x$32537);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$32538 = 0;
                for (var i$32539 = 0; i$32539 < arguments.length; i$32539++) {
                    res$32538 += arguments[i$32539];
                }
                return res$32538;
            },
            sub: function () {
                var res$32540 = arguments[0];
                for (var i$32541 = 1; i$32541 < arguments.length; i$32541++) {
                    res$32540 -= arguments[i$32541];
                }
                return res$32540;
            },
            mul: function () {
                var res$32542 = 1;
                for (var i$32543 = 0; i$32543 < arguments.length; i$32543++) {
                    res$32542 *= arguments[i$32543];
                }
                return res$32542;
            },
            div: function () {
                var res$32544 = arguments[0];
                for (var i$32545 = 1; i$32545 < arguments.length; i$32545++) {
                    res$32544 /= arguments[i$32545];
                }
                return res$32544;
            },
            mod: function (a$32546, b$32547) {
                return a$32546 % b$32547;
            },
            lt: function () {
                var res$32548 = true;
                for (var i$32549 = 0; i$32549 < arguments.length - 1; i$32549++) {
                    res$32548 = res$32548 && arguments[i$32549] < arguments[i$32549 + 1];
                    if (!res$32548)
                        break;
                }
                return res$32548;
            },
            gt: function () {
                var res$32550 = true;
                for (var i$32551 = 0; i$32551 < arguments.length - 1; i$32551++) {
                    res$32550 = res$32550 && arguments[i$32551] > arguments[i$32551 + 1];
                    if (!res$32550)
                        break;
                }
                return res$32550;
            },
            leq: function () {
                var res$32552 = true;
                for (var i$32553 = 0; i$32553 < arguments.length - 1; i$32553++) {
                    res$32552 = res$32552 && arguments[i$32553] <= arguments[i$32553 + 1];
                    if (!res$32552)
                        break;
                }
                return res$32552;
            },
            geq: function () {
                var res$32554 = true;
                for (var i$32555 = 0; i$32555 < arguments.length - 1; i$32555++) {
                    res$32554 = res$32554 && arguments[i$32555] >= arguments[i$32555 + 1];
                }
                return res$32554;
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
            } catch (e$32556) {
                try {
                    return require('mori');
                } catch (e$32557) {
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
            _ki_ns_ctx['base'] = hash_map('uri', 'http://localhost:8888', 'alias', 'free', 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'format', 'json', 'accept', 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['ednize'] = function (data$32852) {
                return js_to_clj(data$32852);
            };
            _ki.namespaces[_ki_ns_name].vars.ednize = _ki_ns_ctx['ednize'];
            return _ki_ns_ctx['ednize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$32861 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$32873) {
                            return function () {
                                return function (v$32890) {
                                    var o$32892 = v$32890;
                                    return assoc(o$32892, 'db', str(get(o$32892, 'alias'), '/', get(o$32892, 'named')), 'uri', str(get(o$32892, 'uri'), get(o$32892, 'url')), 'headers', hash_map('accept', get(o$32892, 'accept')));
                                }.call(this, merge(base, ednize(opts$32873)));
                            }.call(this);
                        }
                    };
                var max_arity$32862 = 0;
                for (var a$32863 in fnmap$32861) {
                    max_arity$32862 = a$32863 > max_arity$32862 ? a$32863 : max_arity$32862;
                }
                fnmap$32861[null] = fnmap$32861[max_arity$32862];
                return function () {
                    var f$32979 = fnmap$32861[arguments.length] || fnmap$32861[null];
                    return f$32979.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$32981, cb$32982) {
                return function () {
                    return function (v$32996) {
                        var o$32998 = v$32996;
                        return request(o$32998, function (err$33009, res$33010) {
                            return function () {
                                if (truthy(equals('json', o$32998.format))) {
                                    return cb$32982(err$33009, clj_to_js(hash_map('code', res$33010.statusCode, 'body', clj_to_js(res$33010.body))));
                                }
                                return cb$32982(err$33009, hash_map(keyword('code'), res$33010.statusCode, keyword('body'), res$33010.body));
                            }.call(this);
                        });
                    }.call(this, clj_to_js(opts(o$32981)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (o$33084, cb$33085) {
                return req(merge(ednize(o$33084), hash_map('url', '/data/')), cb$33085);
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$33116) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$33121) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$33126) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$33131) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$33136) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$33141) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$33146) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$33151) {
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