_ki = {
    init: function (self$36660, ns_name$36661) {
        if (_ki.namespaces[ns_name$36661] === undefined) {
            _ki.namespaces[ns_name$36661] = { vars: {} };
        }
        self$36660._ki_ns_name = ns_name$36661;
        self$36660._ki_ns_ctx = self$36660;
        _ki.intern.bind(self$36660)(_ki.modules.core);
        _ki.intern.bind(self$36660)(_ki.modules.mori);
        _ki.intern.bind(self$36660)(_ki.modules);
        _ki.intern.bind(self$36660)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$36662) {
        for (var e$36663 in obj$36662) {
            this[e$36663] = obj$36662[e$36663];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$36664) {
                return x$36664 === false || x$36664 == null ? false : true;
            },
            falsey: function (x$36665) {
                return !truthy(x$36665);
            },
            not: function (x$36666) {
                return !truthy(x$36666);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$36667 = 0;
                for (var i$36668 = 0; i$36668 < arguments.length; i$36668++) {
                    res$36667 += arguments[i$36668];
                }
                return res$36667;
            },
            sub: function () {
                var res$36669 = arguments[0];
                for (var i$36670 = 1; i$36670 < arguments.length; i$36670++) {
                    res$36669 -= arguments[i$36670];
                }
                return res$36669;
            },
            mul: function () {
                var res$36671 = 1;
                for (var i$36672 = 0; i$36672 < arguments.length; i$36672++) {
                    res$36671 *= arguments[i$36672];
                }
                return res$36671;
            },
            div: function () {
                var res$36673 = arguments[0];
                for (var i$36674 = 1; i$36674 < arguments.length; i$36674++) {
                    res$36673 /= arguments[i$36674];
                }
                return res$36673;
            },
            mod: function (a$36675, b$36676) {
                return a$36675 % b$36676;
            },
            lt: function () {
                var res$36677 = true;
                for (var i$36678 = 0; i$36678 < arguments.length - 1; i$36678++) {
                    res$36677 = res$36677 && arguments[i$36678] < arguments[i$36678 + 1];
                    if (!res$36677)
                        break;
                }
                return res$36677;
            },
            gt: function () {
                var res$36679 = true;
                for (var i$36680 = 0; i$36680 < arguments.length - 1; i$36680++) {
                    res$36679 = res$36679 && arguments[i$36680] > arguments[i$36680 + 1];
                    if (!res$36679)
                        break;
                }
                return res$36679;
            },
            leq: function () {
                var res$36681 = true;
                for (var i$36682 = 0; i$36682 < arguments.length - 1; i$36682++) {
                    res$36681 = res$36681 && arguments[i$36682] <= arguments[i$36682 + 1];
                    if (!res$36681)
                        break;
                }
                return res$36681;
            },
            geq: function () {
                var res$36683 = true;
                for (var i$36684 = 0; i$36684 < arguments.length - 1; i$36684++) {
                    res$36683 = res$36683 && arguments[i$36684] >= arguments[i$36684 + 1];
                }
                return res$36683;
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
            } catch (e$36685) {
                try {
                    return require('mori');
                } catch (e$36686) {
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
            _ki_ns_ctx['edn'] = require('jsedn');
            _ki.namespaces[_ki_ns_name].vars.edn = _ki_ns_ctx['edn'];
            return _ki_ns_ctx['edn'];
        }());
        (function () {
            _ki_ns_ctx['base'] = hashMap('uri', d.cfg.rest.uri, // the url will be appended to it
            'alias', d.cfg.rest.alias, // the storage alias
            'named', 'test', // the name of the db
            'db', '', // a value for :db/alias (assembled late in the req, so, useless?)
            'url', '/', 'basis', '-', // the basis-t
            'method', 'get', 'data', hashMap(), 'content-type', 'application/edn', // could be application/x-www-form-urlencoded
            'accept', 'application/edn', 'format', 'json', // anything but json is left as is - a string
            'resmod', true);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$37022) {
                return toClj(data$37022);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$37031) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$37031));
                    } catch (e$37035) {
                        console.error('Exception: string isn\'t edn - ' + e$37035);
                        console.error(data$37031);
                        return data$37031;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$37038 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$37050) {
                        return function () {
                            return function (v$37067) {
                                var o$37069 = v$37067;
                                return assoc(o$37069, 'db', str(get(o$37069, 'alias'), '/', get(o$37069, 'named')), 'uri', str(get(o$37069, 'uri'), get(o$37069, 'url')), 'headers', hashMap('Accept', get(o$37069, 'accept'), 'Content-Type', get(o$37069, 'content-type')));
                            }.call(this, merge(base, edenize(opts$37050)));
                        }.call(this);
                    }
                };
                var max_arity$37039 = 0;
                for (var a$37040 in fnmap$37038) {
                    max_arity$37039 = a$37040 > max_arity$37039 ? a$37040 : max_arity$37039;
                }
                fnmap$37038[null] = fnmap$37038[max_arity$37039];
                return function () {
                    var f$37169 = fnmap$37038[arguments.length] || fnmap$37038[null];
                    return f$37169.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$37171, o$37172) {
                return function () {
                    if (truthy(o$37172.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$37172.format))) {
                                return {
                                    'code': res$37171.statusCode,
                                    'body': o$37172.accept == 'application/edn' ? jsonize(res$37171.body) : res$37171.body
                                };
                            }
                            return hashMap(keyword('code'), res$37171.statusCode, keyword('body'), res$37171.body);
                        }.call(this);
                    }
                    return res$37171;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$37219, cb$37220) {
                return function () {
                    return function (v$37234) {
                        var o$37236 = v$37234;
                        return request(o$37236, function (err$37247, res$37248) {
                            return cb$37220(err$37247, response(res$37248, o$37236));
                        });
                    }.call(this, toJs(opts(o$37219)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$37267 = {
                    1: function (cb$37276) {
                        return aliases(hashMap(), cb$37276);
                    },
                    2: function (o$37304, cb$37305) {
                        return req(merge(edenize(o$37304), hashMap('url', '/data/')), cb$37305);
                    }
                };
                var max_arity$37268 = 0;
                for (var a$37269 in fnmap$37267) {
                    max_arity$37268 = a$37269 > max_arity$37268 ? a$37269 : max_arity$37268;
                }
                fnmap$37267[null] = fnmap$37267[max_arity$37268];
                return function () {
                    var f$37335 = fnmap$37267[arguments.length] || fnmap$37267[null];
                    return f$37335.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$37337 = {
                    1: function (cb$37349) {
                        return cdb(get(base, 'named'), hashMap(), cb$37349);
                    },
                    2: function (name$37407, cb$37408) {
                        return cdb(name$37407, hashMap(), cb$37408);
                    },
                    3: function (name$37445, o$37446, cb$37447) {
                        return req(merge(edenize(o$37446), hashMap('url', str('/data/', get(base, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$37445, '"}'))), cb$37447);
                    }
                };
                var max_arity$37338 = 0;
                for (var a$37339 in fnmap$37337) {
                    max_arity$37338 = a$37339 > max_arity$37338 ? a$37339 : max_arity$37338;
                }
                fnmap$37337[null] = fnmap$37337[max_arity$37338];
                return function () {
                    var f$37516 = fnmap$37337[arguments.length] || fnmap$37337[null];
                    return f$37516.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$37518) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$37523) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$37528) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$37533) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$37538) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$37543 = {
                    2: function (query$37552, cb$37553) {
                        return q(query$37552, hashMap(), cb$37553);
                    },
                    3: function (query$37590, o$37591, cb$37592) {
                        return req(merge(edenize(o$37591), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$37590, ' :args [{:db/alias "', get(base, 'alias'), '/', get(base, 'named'), '"}]}'))), cb$37592);
                    }
                };
                var max_arity$37544 = 0;
                for (var a$37545 in fnmap$37543) {
                    max_arity$37544 = a$37545 > max_arity$37544 ? a$37545 : max_arity$37544;
                }
                fnmap$37543[null] = fnmap$37543[max_arity$37544];
                return function () {
                    var f$37670 = fnmap$37543[arguments.length] || fnmap$37543[null];
                    return f$37670.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$37672) {
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