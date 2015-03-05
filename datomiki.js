//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$22970, ns_name$22971) {
        if (_ki.namespaces[ns_name$22971] === undefined) {
            _ki.namespaces[ns_name$22971] = { vars: {} };
        }
        self$22970._ki_ns_name = ns_name$22971;
        self$22970._ki_ns_ctx = self$22970;
        _ki.intern.bind(self$22970)(_ki.modules.core);
        _ki.intern.bind(self$22970)(_ki.modules.mori);
        _ki.intern.bind(self$22970)(_ki.modules);
        _ki.intern.bind(self$22970)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$22972) {
        for (var e$22973 in obj$22972) {
            this[e$22973] = obj$22972[e$22973];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$22974) {
                return x$22974 === false || x$22974 == null ? false : true;
            },
            falsey: function (x$22975) {
                return !truthy(x$22975);
            },
            not: function (x$22976) {
                return !truthy(x$22976);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$22977 = 0;
                for (var i$22978 = 0; i$22978 < arguments.length; i$22978++) {
                    res$22977 += arguments[i$22978];
                }
                return res$22977;
            },
            sub: function () {
                var res$22979 = arguments[0];
                for (var i$22980 = 1; i$22980 < arguments.length; i$22980++) {
                    res$22979 -= arguments[i$22980];
                }
                return res$22979;
            },
            mul: function () {
                var res$22981 = 1;
                for (var i$22982 = 0; i$22982 < arguments.length; i$22982++) {
                    res$22981 *= arguments[i$22982];
                }
                return res$22981;
            },
            div: function () {
                var res$22983 = arguments[0];
                for (var i$22984 = 1; i$22984 < arguments.length; i$22984++) {
                    res$22983 /= arguments[i$22984];
                }
                return res$22983;
            },
            mod: function (a$22985, b$22986) {
                return a$22985 % b$22986;
            },
            lt: function () {
                var res$22987 = true;
                for (var i$22988 = 0; i$22988 < arguments.length - 1; i$22988++) {
                    res$22987 = res$22987 && arguments[i$22988] < arguments[i$22988 + 1];
                    if (!res$22987)
                        break;
                }
                return res$22987;
            },
            gt: function () {
                var res$22989 = true;
                for (var i$22990 = 0; i$22990 < arguments.length - 1; i$22990++) {
                    res$22989 = res$22989 && arguments[i$22990] > arguments[i$22990 + 1];
                    if (!res$22989)
                        break;
                }
                return res$22989;
            },
            leq: function () {
                var res$22991 = true;
                for (var i$22992 = 0; i$22992 < arguments.length - 1; i$22992++) {
                    res$22991 = res$22991 && arguments[i$22992] <= arguments[i$22992 + 1];
                    if (!res$22991)
                        break;
                }
                return res$22991;
            },
            geq: function () {
                var res$22993 = true;
                for (var i$22994 = 0; i$22994 < arguments.length - 1; i$22994++) {
                    res$22993 = res$22993 && arguments[i$22994] >= arguments[i$22994 + 1];
                }
                return res$22993;
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
            } catch (e$22995) {
                try {
                    return require('mori');
                } catch (e$22996) {
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
            _ki_ns_ctx['request'] = require('request-promise');
            _ki.namespaces[_ki_ns_name].vars.request = _ki_ns_ctx['request'];
            return _ki_ns_ctx['request'];
        }());
        (function () {
            _ki_ns_ctx['d'] = require('dbin').use();
            _ki.namespaces[_ki_ns_name].vars.d = _ki_ns_ctx['d'];
            return _ki_ns_ctx['d'];
        }());
        (function () {
            _ki_ns_ctx['edn'] = require('jsedn');
            _ki.namespaces[_ki_ns_name].vars.edn = _ki_ns_ctx['edn'];
            return _ki_ns_ctx['edn'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$23106, response$23107) {
                return function () {
                    if (response$23107.request._rp_options.format === 'json' && response$23107.headers['content-type'] === response$23107.request._rp_options.expect) {
                        try {
                            // it should mutate the body - making it json
                            response$23107.body = edn.toJS(edn.parse(body$23106));
                        } catch (e$23114) {
                            console.error('Exception: string isn\'t edn - ' + e$23114);
                            console.error(body$23106);
                        }
                    }
                    ;
                    return function () {
                        if (truthy(response$23107.request._rp_options.resmod)) {
                            return {
                                'code': response$23107.statusCode,
                                'body': response$23107.body
                            };
                        }
                        return response$23107;
                    }.call(this);
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.transform = _ki_ns_ctx['transform'];
            return _ki_ns_ctx['transform'];
        }());
        (function () {
            _ki_ns_ctx['base'] = hashMap('uri', d.cfg.rest.uri, // the url will be appended to it
            'alias', d.cfg.rest.alias, // the storage alias
            'db', d.cfg.rest.alias, // the default db
            'url', '/', 'basis', '-', // the basis-t
            'method', 'get', 'data', hashMap(), 'content-type', 'application/edn', // could be application/x-www-form-urlencoded
            'accept', 'application/edn', 'expect', 'application/edn;charset=UTF-8', 'format', 'json', // if response body content-type is as "expect"-ed
            'transform', transform, // a request-promise option
            'pre', false, // true if preopt was called, usually true
            'resmod', true, // false to resolveWithFullResponse
            'simple', false);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$23346) {
                return toClj(data$23346);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$23355) {
                return merge(base, edenize(opts$23355), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$23382 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$23394) {
                        return function () {
                            return function (v$23399) {
                                var o$23401 = v$23399;
                                return assoc(o$23401, 'uri', str(get(o$23401, 'uri'), get(o$23401, 'url')), 'headers', hashMap('Accept', get(o$23401, 'accept'), 'Content-Type', get(o$23401, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$23394, 'pre'))) {
                                    return opts$23394;
                                }
                                return merge(base, edenize(opts$23394));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$23383 = 0;
                for (var a$23384 in fnmap$23382) {
                    max_arity$23383 = a$23384 > max_arity$23383 ? a$23384 : max_arity$23383;
                }
                fnmap$23382[null] = fnmap$23382[max_arity$23383];
                return function () {
                    var f$23499 = fnmap$23382[arguments.length] || fnmap$23382[null];
                    return f$23499.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$23501, cb$23502) {
                return function () {
                    return function (v$23516) {
                        var o$23518 = v$23516;
                        return function () {
                            if (truthy(falsey(cb$23502))) {
                                return request(o$23518);
                            }
                            return request(o$23518, function (err$23546, res$23547) {
                                return cb$23502(err$23546, res$23547);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$23501)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$23559 = {
                    1: function (cb$23568) {
                        return aliases(hashMap(), cb$23568);
                    },
                    2: function (o$23596, cb$23597) {
                        return req(merge(edenize(o$23596), hashMap('url', '/data/')), cb$23597);
                    }
                };
                var max_arity$23560 = 0;
                for (var a$23561 in fnmap$23559) {
                    max_arity$23560 = a$23561 > max_arity$23560 ? a$23561 : max_arity$23560;
                }
                fnmap$23559[null] = fnmap$23559[max_arity$23560];
                return function () {
                    var f$23627 = fnmap$23559[arguments.length] || fnmap$23559[null];
                    return f$23627.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$23629 = {
                    1: function (cb$23641) {
                        return cdb(get(base, 'db'), hashMap(), cb$23641);
                    },
                    2: function (name$23699, cb$23700) {
                        return cdb(name$23699, hashMap(), cb$23700);
                    },
                    3: function (name$23737, o$23738, cb$23739) {
                        return function () {
                            return function (v$23749) {
                                var o$23751 = v$23749;
                                return req(merge(o$23751, hashMap('url', str('/data/', get(o$23751, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$23737, '"}'))), cb$23739);
                            }.call(this, preopts(o$23738));
                        }.call(this);
                    }
                };
                var max_arity$23630 = 0;
                for (var a$23631 in fnmap$23629) {
                    max_arity$23630 = a$23631 > max_arity$23630 ? a$23631 : max_arity$23630;
                }
                fnmap$23629[null] = fnmap$23629[max_arity$23630];
                return function () {
                    var f$23817 = fnmap$23629[arguments.length] || fnmap$23629[null];
                    return f$23817.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$23819) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$23824) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$23829) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$23834) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$23839) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$23844 = {
                    2: function (query$23853, cb$23854) {
                        return q(query$23853, hashMap(), cb$23854);
                    },
                    3: function (query$23891, o$23892, cb$23893) {
                        return function () {
                            return function (v$23903) {
                                var o$23905 = v$23903;
                                return function (v$23916) {
                                    var data$23918 = v$23916;
                                    return function (v$23921) {
                                        var limit$23923 = v$23921;
                                        return function (v$23926) {
                                            var offset$23928 = v$23926;
                                            return req(merge(edenize(o$23905), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$23891, limit$23923, offset$23928, ' :args [{:db/alias "', get(o$23905, 'alias'), '/', get(o$23905, 'db'), '"}]}'))), cb$23893);
                                        }.call(this, function () {
                                            if (truthy(get(data$23918, 'offset'))) {
                                                return str(' :offset ', get(data$23918, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$23918, 'limit'))) {
                                            return str(' :limit ', get(data$23918, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$23905, 'data'));
                            }.call(this, preopts(o$23892));
                        }.call(this);
                    }
                };
                var max_arity$23845 = 0;
                for (var a$23846 in fnmap$23844) {
                    max_arity$23845 = a$23846 > max_arity$23845 ? a$23846 : max_arity$23845;
                }
                fnmap$23844[null] = fnmap$23844[max_arity$23845];
                return function () {
                    var f$24075 = fnmap$23844[arguments.length] || fnmap$23844[null];
                    return f$24075.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$24077) {
                return 'subscribe to events';
            };
            _ki.namespaces[_ki_ns_name].vars.events = _ki_ns_ctx['events'];
            return _ki_ns_ctx['events'];
        }());
        exports.opts = opts;
        exports.req = req;
        exports.aliases = aliases;
        exports.cdb = cdb;
        return exports.q = q;
    }();
}());
//# sourceMappingURL=datomiki.js.map