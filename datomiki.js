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
            _ki_ns_ctx['pick'] = function (from$1682, keys$1683) {
                return function () {
                    return function (v$1688) {
                        var res$1690 = v$1688;
                        return function () {
                            var res$1694 = {};
                            do {
                                res$1694 = function () {
                                    return function (v$1720) {
                                        var key$1722 = v$1720;
                                        return function () {
                                            if (truthy(key$1722 == undefined)) {
                                                return res$1690;
                                            }
                                            return function () {
                                                res$1690[key$1722] = from$1682[key$1722];
                                                return {
                                                    _ki_recur: true,
                                                    _ki_vals: [keys$1683.pop()]
                                                };
                                            }.call(this);
                                        }.call(this);
                                    }(res$1694._ki_vals === undefined ? keys$1683.pop() : res$1694._ki_vals[0]);
                                    ;
                                }();
                            } while ((res$1694 || 0)._ki_recur);
                            return res$1694;
                        }.call(this);
                    }.call(this, {});
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.pick = _ki_ns_ctx['pick'];
            return _ki_ns_ctx['pick'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$1761, response$1762) {
                return function () {
                    return function (v$1767) {
                        var o$1769 = v$1767;
                        return function () {
                            if (o$1769.format === 'json' && response$1762.headers['content-type'] === o$1769.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$1762.body = edn.toJS(edn.parse(body$1761));
                                } catch (e$1777) {
                                    console.error('Exception: string isn\'t edn - ' + e$1777);
                                    console.error(body$1761);
                                }
                            }
                            ;
                            return function () {
                                return function (v$1780) {
                                    var partial$1782 = v$1780;
                                    return function () {
                                        if (truthy(isArray(partial$1782))) {
                                            return pick(response$1762, partial$1782);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$1782))) {
                                                return response$1762[partial$1782];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$1762;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$1769.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$1762.request._rp_options);
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.transform = _ki_ns_ctx['transform'];
            return _ki_ns_ctx['transform'];
        }());
        (function () {
            // the default db
            _ki_ns_ctx['base'] = hashMap('uri', d.cfg.rest.uri, // the url will be appended to it
            'alias', d.cfg.rest.alias, // the storage alias
            'db', d.cfg.rest.alias, 'url', '/', 'basis', '-', // the basis-t
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
            _ki_ns_ctx['edenize'] = function (data$2062) {
                return toClj(data$2062);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$2071) {
                return merge(base, edenize(opts$2071), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$2098 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$2110) {
                        return function () {
                            return function (v$2115) {
                                var o$2117 = v$2115;
                                return assoc(o$2117, 'uri', str(get(o$2117, 'uri'), get(o$2117, 'url')), 'headers', hashMap('Accept', get(o$2117, 'accept'), 'Content-Type', get(o$2117, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$2110, 'pre'))) {
                                    return opts$2110;
                                }
                                return merge(base, edenize(opts$2110));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$2099 = 0;
                for (var a$2100 in fnmap$2098) {
                    max_arity$2099 = a$2100 > max_arity$2099 ? a$2100 : max_arity$2099;
                }
                fnmap$2098[null] = fnmap$2098[max_arity$2099];
                return function () {
                    var f$2215 = fnmap$2098[arguments.length] || fnmap$2098[null];
                    return f$2215.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$2217, cb$2218) {
                return function () {
                    return function (v$2232) {
                        var o$2234 = v$2232;
                        return function () {
                            if (truthy(falsey(cb$2218))) {
                                return request(o$2234);
                            }
                            return request(o$2234, function (err$2262, res$2263) {
                                return function () {
                                    if (truthy(res$2263.statusCode == 200 || res$2263.statusCode == 201)) {
                                        return cb$2218(err$2262, transform(res$2263.body, res$2263));
                                    }
                                    return cb$2218(err$2262, res$2263);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$2217)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$2296 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$2335) {
                        return function () {
                            if (truthy(isFunction(a$2335))) {
                                return aliases(hashMap(), a$2335);
                            }
                            return function () {
                                if (truthy(isObject(a$2335))) {
                                    return aliases(a$2335, false);
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
                    2: function (o$2409, cb$2410) {
                        return req(merge(edenize(o$2409), hashMap('url', '/data/')), cb$2410);
                    }
                };
                var max_arity$2297 = 0;
                for (var a$2298 in fnmap$2296) {
                    max_arity$2297 = a$2298 > max_arity$2297 ? a$2298 : max_arity$2297;
                }
                fnmap$2296[null] = fnmap$2296[max_arity$2297];
                return function () {
                    var f$2440 = fnmap$2296[arguments.length] || fnmap$2296[null];
                    return f$2440.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$2442 = {
                    1: function (cb$2454) {
                        return cdb(get(base, 'db'), hashMap(), cb$2454);
                    },
                    2: function (name$2512, cb$2513) {
                        return cdb(name$2512, hashMap(), cb$2513);
                    },
                    3: function (name$2550, o$2551, cb$2552) {
                        return function () {
                            return function (v$2562) {
                                var o$2564 = v$2562;
                                return req(merge(o$2564, hashMap('url', str('/data/', get(o$2564, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$2550, '"}'))), cb$2552);
                            }.call(this, preopts(o$2551));
                        }.call(this);
                    }
                };
                var max_arity$2443 = 0;
                for (var a$2444 in fnmap$2442) {
                    max_arity$2443 = a$2444 > max_arity$2443 ? a$2444 : max_arity$2443;
                }
                fnmap$2442[null] = fnmap$2442[max_arity$2443];
                return function () {
                    var f$2630 = fnmap$2442[arguments.length] || fnmap$2442[null];
                    return f$2630.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$2632) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$2637) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$2642) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$2647) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$2652) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$2657 = {
                    2: function (query$2666, cb$2667) {
                        return q(query$2666, hashMap(), cb$2667);
                    },
                    3: function (query$2704, o$2705, cb$2706) {
                        return function () {
                            return function (v$2716) {
                                var o$2718 = v$2716;
                                return function (v$2729) {
                                    var data$2731 = v$2729;
                                    return function (v$2734) {
                                        var limit$2736 = v$2734;
                                        return function (v$2739) {
                                            var offset$2741 = v$2739;
                                            return req(merge(edenize(o$2718), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$2704, limit$2736, offset$2741, ' :args [{:db/alias "', get(o$2718, 'alias'), '/', get(o$2718, 'db'), '"}]}'))), cb$2706);
                                        }.call(this, function () {
                                            if (truthy(get(data$2731, 'offset'))) {
                                                return str(' :offset ', get(data$2731, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$2731, 'limit'))) {
                                            return str(' :limit ', get(data$2731, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$2718, 'data'));
                            }.call(this, preopts(o$2705));
                        }.call(this);
                    }
                };
                var max_arity$2658 = 0;
                for (var a$2659 in fnmap$2657) {
                    max_arity$2658 = a$2659 > max_arity$2658 ? a$2659 : max_arity$2658;
                }
                fnmap$2657[null] = fnmap$2657[max_arity$2658];
                return function () {
                    var f$2888 = fnmap$2657[arguments.length] || fnmap$2657[null];
                    return f$2888.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$2890) {
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