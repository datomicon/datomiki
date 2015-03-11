//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
/* jshint ignore:start */
_ki = {
    init: function (self$1526, ns_name$1527) {
        if (_ki.namespaces[ns_name$1527] === undefined) {
            _ki.namespaces[ns_name$1527] = { vars: {} };
        }
        self$1526._ki_ns_name = ns_name$1527;
        self$1526._ki_ns_ctx = self$1526;
        _ki.intern.bind(self$1526)(_ki.modules.core);
        _ki.intern.bind(self$1526)(_ki.modules.mori);
        _ki.intern.bind(self$1526)(_ki.modules);
        _ki.intern.bind(self$1526)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$1528) {
        for (var e$1529 in obj$1528) {
            this[e$1529] = obj$1528[e$1529];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$1530) {
                return x$1530 === false || x$1530 == null ? false : true;
            },
            falsey: function (x$1531) {
                return !truthy(x$1531);
            },
            not: function (x$1532) {
                return !truthy(x$1532);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$1533 = 0;
                for (var i$1534 = 0; i$1534 < arguments.length; i$1534++) {
                    res$1533 += arguments[i$1534];
                }
                return res$1533;
            },
            sub: function () {
                var res$1535 = arguments[0];
                for (var i$1536 = 1; i$1536 < arguments.length; i$1536++) {
                    res$1535 -= arguments[i$1536];
                }
                return res$1535;
            },
            mul: function () {
                var res$1537 = 1;
                for (var i$1538 = 0; i$1538 < arguments.length; i$1538++) {
                    res$1537 *= arguments[i$1538];
                }
                return res$1537;
            },
            div: function () {
                var res$1539 = arguments[0];
                for (var i$1540 = 1; i$1540 < arguments.length; i$1540++) {
                    res$1539 /= arguments[i$1540];
                }
                return res$1539;
            },
            mod: function (a$1541, b$1542) {
                return a$1541 % b$1542;
            },
            lt: function () {
                var res$1543 = true;
                for (var i$1544 = 0; i$1544 < arguments.length - 1; i$1544++) {
                    res$1543 = res$1543 && arguments[i$1544] < arguments[i$1544 + 1];
                    if (!res$1543)
                        break;
                }
                return res$1543;
            },
            gt: function () {
                var res$1545 = true;
                for (var i$1546 = 0; i$1546 < arguments.length - 1; i$1546++) {
                    res$1545 = res$1545 && arguments[i$1546] > arguments[i$1546 + 1];
                    if (!res$1545)
                        break;
                }
                return res$1545;
            },
            leq: function () {
                var res$1547 = true;
                for (var i$1548 = 0; i$1548 < arguments.length - 1; i$1548++) {
                    res$1547 = res$1547 && arguments[i$1548] <= arguments[i$1548 + 1];
                    if (!res$1547)
                        break;
                }
                return res$1547;
            },
            geq: function () {
                var res$1549 = true;
                for (var i$1550 = 0; i$1550 < arguments.length - 1; i$1550++) {
                    res$1549 = res$1549 && arguments[i$1550] >= arguments[i$1550 + 1];
                }
                return res$1549;
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
            } catch (e$1551) {
                try {
                    return require('mori');
                } catch (e$1552) {
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
            _ki_ns_ctx['isArray'] = require('lodash').isArray;
            _ki.namespaces[_ki_ns_name].vars.isArray = _ki_ns_ctx['isArray'];
            return _ki_ns_ctx['isArray'];
        }());
        (function () {
            _ki_ns_ctx['isObject'] = require('lodash').isObject;
            _ki.namespaces[_ki_ns_name].vars.isObject = _ki_ns_ctx['isObject'];
            return _ki_ns_ctx['isObject'];
        }());
        (function () {
            _ki_ns_ctx['isString'] = require('lodash').isString;
            _ki.namespaces[_ki_ns_name].vars.isString = _ki_ns_ctx['isString'];
            return _ki_ns_ctx['isString'];
        }());
        (function () {
            _ki_ns_ctx['isFunction'] = require('lodash').isFunction;
            _ki.namespaces[_ki_ns_name].vars.isFunction = _ki_ns_ctx['isFunction'];
            return _ki_ns_ctx['isFunction'];
        }());
        (function () {
            _ki_ns_ctx['pick'] = require('lodash').pick;
            _ki.namespaces[_ki_ns_name].vars.pick = _ki_ns_ctx['pick'];
            return _ki_ns_ctx['pick'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$1682, response$1683) {
                return function () {
                    return function (v$1688) {
                        var o$1690 = v$1688;
                        return function () {
                            if (o$1690.format === 'json' && response$1683.headers['content-type'] === o$1690.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$1683.body = edn.toJS(edn.parse(body$1682));
                                } catch (e$1698) {
                                    console.error('Exception: string isn\'t edn - ' + e$1698);
                                    console.error(body$1682);
                                }
                            }
                            ;
                            return function () {
                                return function (v$1701) {
                                    var partial$1703 = v$1701;
                                    return function () {
                                        if (truthy(isArray(partial$1703))) {
                                            return apply(pick, response$1683, partial$1703);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$1703))) {
                                                return response$1683[partial$1703];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$1683;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$1690.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$1683.request._rp_options);
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
            'partial', vector('statusCode', 'body'), 'simple', // false to resolveWithFullResponse; or "body"
            false);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$1986) {
                return toClj(data$1986);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$1995) {
                return merge(base, edenize(opts$1995), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$2022 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$2034) {
                        return function () {
                            return function (v$2039) {
                                var o$2041 = v$2039;
                                return assoc(o$2041, 'uri', str(get(o$2041, 'uri'), get(o$2041, 'url')), 'headers', hashMap('Accept', get(o$2041, 'accept'), 'Content-Type', get(o$2041, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$2034, 'pre'))) {
                                    return opts$2034;
                                }
                                return merge(base, edenize(opts$2034));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$2023 = 0;
                for (var a$2024 in fnmap$2022) {
                    max_arity$2023 = a$2024 > max_arity$2023 ? a$2024 : max_arity$2023;
                }
                fnmap$2022[null] = fnmap$2022[max_arity$2023];
                return function () {
                    var f$2139 = fnmap$2022[arguments.length] || fnmap$2022[null];
                    return f$2139.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$2141, cb$2142) {
                return function () {
                    return function (v$2156) {
                        var o$2158 = v$2156;
                        return function () {
                            if (truthy(falsey(cb$2142))) {
                                return request(o$2158);
                            }
                            return request(o$2158, function (err$2186, res$2187) {
                                return function () {
                                    if (truthy(res$2187.statusCode == 200 || res$2187.statusCode == 201)) {
                                        return cb$2142(err$2186, transform(res$2187.body, res$2187));
                                    }
                                    return cb$2142(err$2186, res$2187);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$2141)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$2220 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$2259) {
                        return function () {
                            if (truthy(isFunction(a$2259))) {
                                return aliases(hashMap(), a$2259);
                            }
                            return function () {
                                if (truthy(isObject(a$2259))) {
                                    return aliases(a$2259, false);
                                }
                                return function () {
                                    if (truthy(keyword('else'))) {
                                        return function () {
                                            throw 'aliases called with an argument of unexpected type';
                                        }.call(this);
                                    }
                                    return undefined;
                                }.call(this);
                            }.call(this);
                        }.call(this);
                    },
                    2: function (o$2333, cb$2334) {
                        return req(merge(edenize(o$2333), hashMap('url', '/data/')), cb$2334);
                    }
                };
                var max_arity$2221 = 0;
                for (var a$2222 in fnmap$2220) {
                    max_arity$2221 = a$2222 > max_arity$2221 ? a$2222 : max_arity$2221;
                }
                fnmap$2220[null] = fnmap$2220[max_arity$2221];
                return function () {
                    var f$2364 = fnmap$2220[arguments.length] || fnmap$2220[null];
                    return f$2364.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$2366 = {
                    1: function (cb$2378) {
                        return cdb(get(base, 'db'), hashMap(), cb$2378);
                    },
                    2: function (name$2436, cb$2437) {
                        return cdb(name$2436, hashMap(), cb$2437);
                    },
                    3: function (name$2474, o$2475, cb$2476) {
                        return function () {
                            return function (v$2486) {
                                var o$2488 = v$2486;
                                return req(merge(o$2488, hashMap('url', str('/data/', get(o$2488, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$2474, '"}'))), cb$2476);
                            }.call(this, preopts(o$2475));
                        }.call(this);
                    }
                };
                var max_arity$2367 = 0;
                for (var a$2368 in fnmap$2366) {
                    max_arity$2367 = a$2368 > max_arity$2367 ? a$2368 : max_arity$2367;
                }
                fnmap$2366[null] = fnmap$2366[max_arity$2367];
                return function () {
                    var f$2554 = fnmap$2366[arguments.length] || fnmap$2366[null];
                    return f$2554.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$2556) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$2561) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$2566) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$2571) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$2576) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$2581 = {
                    2: function (query$2590, cb$2591) {
                        return q(query$2590, hashMap(), cb$2591);
                    },
                    3: function (query$2628, o$2629, cb$2630) {
                        return function () {
                            return function (v$2640) {
                                var o$2642 = v$2640;
                                return function (v$2653) {
                                    var data$2655 = v$2653;
                                    return function (v$2658) {
                                        var limit$2660 = v$2658;
                                        return function (v$2663) {
                                            var offset$2665 = v$2663;
                                            return req(merge(edenize(o$2642), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$2628, limit$2660, offset$2665, ' :args [{:db/alias "', get(o$2642, 'alias'), '/', get(o$2642, 'db'), '"}]}'))), cb$2630);
                                        }.call(this, function () {
                                            if (truthy(get(data$2655, 'offset'))) {
                                                return str(' :offset ', get(data$2655, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$2655, 'limit'))) {
                                            return str(' :limit ', get(data$2655, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$2642, 'data'));
                            }.call(this, preopts(o$2629));
                        }.call(this);
                    }
                };
                var max_arity$2582 = 0;
                for (var a$2583 in fnmap$2581) {
                    max_arity$2582 = a$2583 > max_arity$2582 ? a$2583 : max_arity$2582;
                }
                fnmap$2581[null] = fnmap$2581[max_arity$2582];
                return function () {
                    var f$2812 = fnmap$2581[arguments.length] || fnmap$2581[null];
                    return f$2812.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$2814) {
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