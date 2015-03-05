//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$28614, ns_name$28615) {
        if (_ki.namespaces[ns_name$28615] === undefined) {
            _ki.namespaces[ns_name$28615] = { vars: {} };
        }
        self$28614._ki_ns_name = ns_name$28615;
        self$28614._ki_ns_ctx = self$28614;
        _ki.intern.bind(self$28614)(_ki.modules.core);
        _ki.intern.bind(self$28614)(_ki.modules.mori);
        _ki.intern.bind(self$28614)(_ki.modules);
        _ki.intern.bind(self$28614)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$28616) {
        for (var e$28617 in obj$28616) {
            this[e$28617] = obj$28616[e$28617];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$28618) {
                return x$28618 === false || x$28618 == null ? false : true;
            },
            falsey: function (x$28619) {
                return !truthy(x$28619);
            },
            not: function (x$28620) {
                return !truthy(x$28620);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$28621 = 0;
                for (var i$28622 = 0; i$28622 < arguments.length; i$28622++) {
                    res$28621 += arguments[i$28622];
                }
                return res$28621;
            },
            sub: function () {
                var res$28623 = arguments[0];
                for (var i$28624 = 1; i$28624 < arguments.length; i$28624++) {
                    res$28623 -= arguments[i$28624];
                }
                return res$28623;
            },
            mul: function () {
                var res$28625 = 1;
                for (var i$28626 = 0; i$28626 < arguments.length; i$28626++) {
                    res$28625 *= arguments[i$28626];
                }
                return res$28625;
            },
            div: function () {
                var res$28627 = arguments[0];
                for (var i$28628 = 1; i$28628 < arguments.length; i$28628++) {
                    res$28627 /= arguments[i$28628];
                }
                return res$28627;
            },
            mod: function (a$28629, b$28630) {
                return a$28629 % b$28630;
            },
            lt: function () {
                var res$28631 = true;
                for (var i$28632 = 0; i$28632 < arguments.length - 1; i$28632++) {
                    res$28631 = res$28631 && arguments[i$28632] < arguments[i$28632 + 1];
                    if (!res$28631)
                        break;
                }
                return res$28631;
            },
            gt: function () {
                var res$28633 = true;
                for (var i$28634 = 0; i$28634 < arguments.length - 1; i$28634++) {
                    res$28633 = res$28633 && arguments[i$28634] > arguments[i$28634 + 1];
                    if (!res$28633)
                        break;
                }
                return res$28633;
            },
            leq: function () {
                var res$28635 = true;
                for (var i$28636 = 0; i$28636 < arguments.length - 1; i$28636++) {
                    res$28635 = res$28635 && arguments[i$28636] <= arguments[i$28636 + 1];
                    if (!res$28635)
                        break;
                }
                return res$28635;
            },
            geq: function () {
                var res$28637 = true;
                for (var i$28638 = 0; i$28638 < arguments.length - 1; i$28638++) {
                    res$28637 = res$28637 && arguments[i$28638] >= arguments[i$28638 + 1];
                }
                return res$28637;
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
            } catch (e$28639) {
                try {
                    return require('mori');
                } catch (e$28640) {
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
            _ki_ns_ctx['transform'] = function (body$28750, response$28751) {
                return function () {
                    return function (v$28756) {
                        var o$28758 = v$28756;
                        return function () {
                            if (o$28758.format === 'json' && response$28751.headers['content-type'] === o$28758.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$28751.body = edn.toJS(edn.parse(body$28750));
                                } catch (e$28766) {
                                    console.error('Exception: string isn\'t edn - ' + e$28766);
                                    console.error(body$28750);
                                }
                            }
                            ;
                            return function () {
                                if (truthy(o$28758.resmod)) {
                                    return {
                                        'code': response$28751.statusCode,
                                        'body': response$28751.body
                                    };
                                }
                                return response$28751;
                            }.call(this);
                        }.call(this);
                    }.call(this, response$28751.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$28998) {
                return toClj(data$28998);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$29007) {
                return merge(base, edenize(opts$29007), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$29034 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$29046) {
                        return function () {
                            return function (v$29051) {
                                var o$29053 = v$29051;
                                return assoc(o$29053, 'uri', str(get(o$29053, 'uri'), get(o$29053, 'url')), 'headers', hashMap('Accept', get(o$29053, 'accept'), 'Content-Type', get(o$29053, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$29046, 'pre'))) {
                                    return opts$29046;
                                }
                                return merge(base, edenize(opts$29046));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$29035 = 0;
                for (var a$29036 in fnmap$29034) {
                    max_arity$29035 = a$29036 > max_arity$29035 ? a$29036 : max_arity$29035;
                }
                fnmap$29034[null] = fnmap$29034[max_arity$29035];
                return function () {
                    var f$29151 = fnmap$29034[arguments.length] || fnmap$29034[null];
                    return f$29151.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$29153, cb$29154) {
                return function () {
                    return function (v$29168) {
                        var o$29170 = v$29168;
                        return function () {
                            if (truthy(falsey(cb$29154))) {
                                return request(o$29170);
                            }
                            return request(o$29170, function (err$29198, res$29199) {
                                return cb$29154(err$29198, res$29199);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$29153)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$29211 = {
                    1: function (cb$29220) {
                        return aliases(hashMap(), cb$29220);
                    },
                    2: function (o$29248, cb$29249) {
                        return req(merge(edenize(o$29248), hashMap('url', '/data/')), cb$29249);
                    }
                };
                var max_arity$29212 = 0;
                for (var a$29213 in fnmap$29211) {
                    max_arity$29212 = a$29213 > max_arity$29212 ? a$29213 : max_arity$29212;
                }
                fnmap$29211[null] = fnmap$29211[max_arity$29212];
                return function () {
                    var f$29279 = fnmap$29211[arguments.length] || fnmap$29211[null];
                    return f$29279.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$29281 = {
                    1: function (cb$29293) {
                        return cdb(get(base, 'db'), hashMap(), cb$29293);
                    },
                    2: function (name$29351, cb$29352) {
                        return cdb(name$29351, hashMap(), cb$29352);
                    },
                    3: function (name$29389, o$29390, cb$29391) {
                        return function () {
                            return function (v$29401) {
                                var o$29403 = v$29401;
                                return req(merge(o$29403, hashMap('url', str('/data/', get(o$29403, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$29389, '"}'))), cb$29391);
                            }.call(this, preopts(o$29390));
                        }.call(this);
                    }
                };
                var max_arity$29282 = 0;
                for (var a$29283 in fnmap$29281) {
                    max_arity$29282 = a$29283 > max_arity$29282 ? a$29283 : max_arity$29282;
                }
                fnmap$29281[null] = fnmap$29281[max_arity$29282];
                return function () {
                    var f$29469 = fnmap$29281[arguments.length] || fnmap$29281[null];
                    return f$29469.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$29471) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$29476) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$29481) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$29486) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$29491) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$29496 = {
                    2: function (query$29505, cb$29506) {
                        return q(query$29505, hashMap(), cb$29506);
                    },
                    3: function (query$29543, o$29544, cb$29545) {
                        return function () {
                            return function (v$29555) {
                                var o$29557 = v$29555;
                                return function (v$29568) {
                                    var data$29570 = v$29568;
                                    return function (v$29573) {
                                        var limit$29575 = v$29573;
                                        return function (v$29578) {
                                            var offset$29580 = v$29578;
                                            return req(merge(edenize(o$29557), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$29543, limit$29575, offset$29580, ' :args [{:db/alias "', get(o$29557, 'alias'), '/', get(o$29557, 'db'), '"}]}'))), cb$29545);
                                        }.call(this, function () {
                                            if (truthy(get(data$29570, 'offset'))) {
                                                return str(' :offset ', get(data$29570, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$29570, 'limit'))) {
                                            return str(' :limit ', get(data$29570, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$29557, 'data'));
                            }.call(this, preopts(o$29544));
                        }.call(this);
                    }
                };
                var max_arity$29497 = 0;
                for (var a$29498 in fnmap$29496) {
                    max_arity$29497 = a$29498 > max_arity$29497 ? a$29498 : max_arity$29497;
                }
                fnmap$29496[null] = fnmap$29496[max_arity$29497];
                return function () {
                    var f$29727 = fnmap$29496[arguments.length] || fnmap$29496[null];
                    return f$29727.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$29729) {
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