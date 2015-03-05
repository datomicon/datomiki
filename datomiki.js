//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$27482, ns_name$27483) {
        if (_ki.namespaces[ns_name$27483] === undefined) {
            _ki.namespaces[ns_name$27483] = { vars: {} };
        }
        self$27482._ki_ns_name = ns_name$27483;
        self$27482._ki_ns_ctx = self$27482;
        _ki.intern.bind(self$27482)(_ki.modules.core);
        _ki.intern.bind(self$27482)(_ki.modules.mori);
        _ki.intern.bind(self$27482)(_ki.modules);
        _ki.intern.bind(self$27482)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$27484) {
        for (var e$27485 in obj$27484) {
            this[e$27485] = obj$27484[e$27485];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$27486) {
                return x$27486 === false || x$27486 == null ? false : true;
            },
            falsey: function (x$27487) {
                return !truthy(x$27487);
            },
            not: function (x$27488) {
                return !truthy(x$27488);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$27489 = 0;
                for (var i$27490 = 0; i$27490 < arguments.length; i$27490++) {
                    res$27489 += arguments[i$27490];
                }
                return res$27489;
            },
            sub: function () {
                var res$27491 = arguments[0];
                for (var i$27492 = 1; i$27492 < arguments.length; i$27492++) {
                    res$27491 -= arguments[i$27492];
                }
                return res$27491;
            },
            mul: function () {
                var res$27493 = 1;
                for (var i$27494 = 0; i$27494 < arguments.length; i$27494++) {
                    res$27493 *= arguments[i$27494];
                }
                return res$27493;
            },
            div: function () {
                var res$27495 = arguments[0];
                for (var i$27496 = 1; i$27496 < arguments.length; i$27496++) {
                    res$27495 /= arguments[i$27496];
                }
                return res$27495;
            },
            mod: function (a$27497, b$27498) {
                return a$27497 % b$27498;
            },
            lt: function () {
                var res$27499 = true;
                for (var i$27500 = 0; i$27500 < arguments.length - 1; i$27500++) {
                    res$27499 = res$27499 && arguments[i$27500] < arguments[i$27500 + 1];
                    if (!res$27499)
                        break;
                }
                return res$27499;
            },
            gt: function () {
                var res$27501 = true;
                for (var i$27502 = 0; i$27502 < arguments.length - 1; i$27502++) {
                    res$27501 = res$27501 && arguments[i$27502] > arguments[i$27502 + 1];
                    if (!res$27501)
                        break;
                }
                return res$27501;
            },
            leq: function () {
                var res$27503 = true;
                for (var i$27504 = 0; i$27504 < arguments.length - 1; i$27504++) {
                    res$27503 = res$27503 && arguments[i$27504] <= arguments[i$27504 + 1];
                    if (!res$27503)
                        break;
                }
                return res$27503;
            },
            geq: function () {
                var res$27505 = true;
                for (var i$27506 = 0; i$27506 < arguments.length - 1; i$27506++) {
                    res$27505 = res$27505 && arguments[i$27506] >= arguments[i$27506 + 1];
                }
                return res$27505;
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
            } catch (e$27507) {
                try {
                    return require('mori');
                } catch (e$27508) {
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
            _ki_ns_ctx['transform'] = function (body$27618, response$27619) {
                return function () {
                    return function (v$27624) {
                        var o$27626 = v$27624;
                        return function () {
                            if (o$27626.format === 'json' && response$27619.headers['content-type'] === o$27626.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$27619.body = edn.toJS(edn.parse(body$27618));
                                } catch (e$27634) {
                                    console.error('Exception: string isn\'t edn - ' + e$27634);
                                    console.error(body$27618);
                                }
                            }
                            ;
                            return function () {
                                if (truthy(o$27626.resmod)) {
                                    return {
                                        'code': response$27619.statusCode,
                                        'body': response$27619.body
                                    };
                                }
                                return response$27619;
                            }.call(this);
                        }.call(this);
                    }.call(this, response$27619.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$27866) {
                return toClj(data$27866);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$27875) {
                return merge(base, edenize(opts$27875), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$27902 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$27914) {
                        return function () {
                            return function (v$27919) {
                                var o$27921 = v$27919;
                                return assoc(o$27921, 'uri', str(get(o$27921, 'uri'), get(o$27921, 'url')), 'headers', hashMap('Accept', get(o$27921, 'accept'), 'Content-Type', get(o$27921, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$27914, 'pre'))) {
                                    return opts$27914;
                                }
                                return merge(base, edenize(opts$27914));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$27903 = 0;
                for (var a$27904 in fnmap$27902) {
                    max_arity$27903 = a$27904 > max_arity$27903 ? a$27904 : max_arity$27903;
                }
                fnmap$27902[null] = fnmap$27902[max_arity$27903];
                return function () {
                    var f$28019 = fnmap$27902[arguments.length] || fnmap$27902[null];
                    return f$28019.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$28021, cb$28022) {
                return function () {
                    return function (v$28036) {
                        var o$28038 = v$28036;
                        return function () {
                            if (truthy(falsey(cb$28022))) {
                                return request(o$28038);
                            }
                            return request(o$28038, function (err$28066, res$28067) {
                                return cb$28022(err$28066, res$28067);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$28021)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$28079 = {
                    1: function (cb$28088) {
                        return aliases(hashMap(), cb$28088);
                    },
                    2: function (o$28116, cb$28117) {
                        return req(merge(edenize(o$28116), hashMap('url', '/data/')), cb$28117);
                    }
                };
                var max_arity$28080 = 0;
                for (var a$28081 in fnmap$28079) {
                    max_arity$28080 = a$28081 > max_arity$28080 ? a$28081 : max_arity$28080;
                }
                fnmap$28079[null] = fnmap$28079[max_arity$28080];
                return function () {
                    var f$28147 = fnmap$28079[arguments.length] || fnmap$28079[null];
                    return f$28147.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$28149 = {
                    1: function (cb$28161) {
                        return cdb(get(base, 'db'), hashMap(), cb$28161);
                    },
                    2: function (name$28219, cb$28220) {
                        return cdb(name$28219, hashMap(), cb$28220);
                    },
                    3: function (name$28257, o$28258, cb$28259) {
                        return function () {
                            return function (v$28269) {
                                var o$28271 = v$28269;
                                return req(merge(o$28271, hashMap('url', str('/data/', get(o$28271, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$28257, '"}'))), cb$28259);
                            }.call(this, preopts(o$28258));
                        }.call(this);
                    }
                };
                var max_arity$28150 = 0;
                for (var a$28151 in fnmap$28149) {
                    max_arity$28150 = a$28151 > max_arity$28150 ? a$28151 : max_arity$28150;
                }
                fnmap$28149[null] = fnmap$28149[max_arity$28150];
                return function () {
                    var f$28337 = fnmap$28149[arguments.length] || fnmap$28149[null];
                    return f$28337.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$28339) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$28344) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$28349) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$28354) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$28359) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$28364 = {
                    2: function (query$28373, cb$28374) {
                        return q(query$28373, hashMap(), cb$28374);
                    },
                    3: function (query$28411, o$28412, cb$28413) {
                        return function () {
                            return function (v$28423) {
                                var o$28425 = v$28423;
                                return function (v$28436) {
                                    var data$28438 = v$28436;
                                    return function (v$28441) {
                                        var limit$28443 = v$28441;
                                        return function (v$28446) {
                                            var offset$28448 = v$28446;
                                            return req(merge(edenize(o$28425), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$28411, limit$28443, offset$28448, ' :args [{:db/alias "', get(o$28425, 'alias'), '/', get(o$28425, 'db'), '"}]}'))), cb$28413);
                                        }.call(this, function () {
                                            if (truthy(get(data$28438, 'offset'))) {
                                                return str(' :offset ', get(data$28438, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$28438, 'limit'))) {
                                            return str(' :limit ', get(data$28438, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$28425, 'data'));
                            }.call(this, preopts(o$28412));
                        }.call(this);
                    }
                };
                var max_arity$28365 = 0;
                for (var a$28366 in fnmap$28364) {
                    max_arity$28365 = a$28366 > max_arity$28365 ? a$28366 : max_arity$28365;
                }
                fnmap$28364[null] = fnmap$28364[max_arity$28365];
                return function () {
                    var f$28595 = fnmap$28364[arguments.length] || fnmap$28364[null];
                    return f$28595.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$28597) {
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