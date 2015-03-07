//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
/* jshint ignore:start */
_ki = {
    init: function (self$1534, ns_name$1535) {
        if (_ki.namespaces[ns_name$1535] === undefined) {
            _ki.namespaces[ns_name$1535] = { vars: {} };
        }
        self$1534._ki_ns_name = ns_name$1535;
        self$1534._ki_ns_ctx = self$1534;
        _ki.intern.bind(self$1534)(_ki.modules.core);
        _ki.intern.bind(self$1534)(_ki.modules.mori);
        _ki.intern.bind(self$1534)(_ki.modules);
        _ki.intern.bind(self$1534)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$1536) {
        for (var e$1537 in obj$1536) {
            this[e$1537] = obj$1536[e$1537];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$1538) {
                return x$1538 === false || x$1538 == null ? false : true;
            },
            falsey: function (x$1539) {
                return !truthy(x$1539);
            },
            not: function (x$1540) {
                return !truthy(x$1540);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$1541 = 0;
                for (var i$1542 = 0; i$1542 < arguments.length; i$1542++) {
                    res$1541 += arguments[i$1542];
                }
                return res$1541;
            },
            sub: function () {
                var res$1543 = arguments[0];
                for (var i$1544 = 1; i$1544 < arguments.length; i$1544++) {
                    res$1543 -= arguments[i$1544];
                }
                return res$1543;
            },
            mul: function () {
                var res$1545 = 1;
                for (var i$1546 = 0; i$1546 < arguments.length; i$1546++) {
                    res$1545 *= arguments[i$1546];
                }
                return res$1545;
            },
            div: function () {
                var res$1547 = arguments[0];
                for (var i$1548 = 1; i$1548 < arguments.length; i$1548++) {
                    res$1547 /= arguments[i$1548];
                }
                return res$1547;
            },
            mod: function (a$1549, b$1550) {
                return a$1549 % b$1550;
            },
            lt: function () {
                var res$1551 = true;
                for (var i$1552 = 0; i$1552 < arguments.length - 1; i$1552++) {
                    res$1551 = res$1551 && arguments[i$1552] < arguments[i$1552 + 1];
                    if (!res$1551)
                        break;
                }
                return res$1551;
            },
            gt: function () {
                var res$1553 = true;
                for (var i$1554 = 0; i$1554 < arguments.length - 1; i$1554++) {
                    res$1553 = res$1553 && arguments[i$1554] > arguments[i$1554 + 1];
                    if (!res$1553)
                        break;
                }
                return res$1553;
            },
            leq: function () {
                var res$1555 = true;
                for (var i$1556 = 0; i$1556 < arguments.length - 1; i$1556++) {
                    res$1555 = res$1555 && arguments[i$1556] <= arguments[i$1556 + 1];
                    if (!res$1555)
                        break;
                }
                return res$1555;
            },
            geq: function () {
                var res$1557 = true;
                for (var i$1558 = 0; i$1558 < arguments.length - 1; i$1558++) {
                    res$1557 = res$1557 && arguments[i$1558] >= arguments[i$1558 + 1];
                }
                return res$1557;
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
            } catch (e$1559) {
                try {
                    return require('mori');
                } catch (e$1560) {
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
            _ki_ns_ctx['pick'] = function (from$1690, keys$1691) {
                return function () {
                    return function (v$1696) {
                        var res$1698 = v$1696;
                        return function () {
                            var res$1702 = {};
                            do {
                                res$1702 = function () {
                                    return function (v$1728) {
                                        var key$1730 = v$1728;
                                        return function () {
                                            if (truthy(key$1730 == undefined)) {
                                                return res$1698;
                                            }
                                            return function () {
                                                res$1698[key$1730] = from$1690[key$1730];
                                                return {
                                                    _ki_recur: true,
                                                    _ki_vals: [keys$1691.pop()]
                                                };
                                            }.call(this);
                                        }.call(this);
                                    }(res$1702._ki_vals === undefined ? keys$1691.pop() : res$1702._ki_vals[0]);
                                    ;
                                }();
                            } while ((res$1702 || 0)._ki_recur);
                            return res$1702;
                        }.call(this);
                    }.call(this, {});
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.pick = _ki_ns_ctx['pick'];
            return _ki_ns_ctx['pick'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$1769, response$1770) {
                return function () {
                    return function (v$1775) {
                        var o$1777 = v$1775;
                        return function () {
                            if (o$1777.format === 'json' && response$1770.headers['content-type'] === o$1777.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$1770.body = edn.toJS(edn.parse(body$1769));
                                } catch (e$1785) {
                                    console.error('Exception: string isn\'t edn - ' + e$1785);
                                    console.error(body$1769);
                                }
                            }
                            ;
                            return function () {
                                return function (v$1788) {
                                    var partial$1790 = v$1788;
                                    return function () {
                                        if (truthy(isArray(partial$1790))) {
                                            return pick(response$1770, partial$1790);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$1790))) {
                                                return response$1770[partial$1790];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$1770;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$1777.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$1770.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$2070) {
                return toClj(data$2070);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$2079) {
                return merge(base, edenize(opts$2079), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$2106 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$2118) {
                        return function () {
                            return function (v$2123) {
                                var o$2125 = v$2123;
                                return assoc(o$2125, 'uri', str(get(o$2125, 'uri'), get(o$2125, 'url')), 'headers', hashMap('Accept', get(o$2125, 'accept'), 'Content-Type', get(o$2125, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$2118, 'pre'))) {
                                    return opts$2118;
                                }
                                return merge(base, edenize(opts$2118));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$2107 = 0;
                for (var a$2108 in fnmap$2106) {
                    max_arity$2107 = a$2108 > max_arity$2107 ? a$2108 : max_arity$2107;
                }
                fnmap$2106[null] = fnmap$2106[max_arity$2107];
                return function () {
                    var f$2223 = fnmap$2106[arguments.length] || fnmap$2106[null];
                    return f$2223.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$2225, cb$2226) {
                return function () {
                    return function (v$2240) {
                        var o$2242 = v$2240;
                        return function () {
                            if (truthy(falsey(cb$2226))) {
                                return request(o$2242);
                            }
                            return request(o$2242, function (err$2270, res$2271) {
                                return function () {
                                    if (truthy(res$2271.statusCode == 200 || res$2271.statusCode == 201)) {
                                        return cb$2226(err$2270, transform(res$2271.body, res$2271));
                                    }
                                    return cb$2226(err$2270, res$2271);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$2225)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$2304 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$2343) {
                        return function () {
                            if (truthy(isFunction(a$2343))) {
                                return aliases(hashMap(), a$2343);
                            }
                            return function () {
                                if (truthy(isObject(a$2343))) {
                                    return aliases(a$2343, false);
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
                    2: function (o$2417, cb$2418) {
                        return req(merge(edenize(o$2417), hashMap('url', '/data/')), cb$2418);
                    }
                };
                var max_arity$2305 = 0;
                for (var a$2306 in fnmap$2304) {
                    max_arity$2305 = a$2306 > max_arity$2305 ? a$2306 : max_arity$2305;
                }
                fnmap$2304[null] = fnmap$2304[max_arity$2305];
                return function () {
                    var f$2448 = fnmap$2304[arguments.length] || fnmap$2304[null];
                    return f$2448.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$2450 = {
                    1: function (cb$2462) {
                        return cdb(get(base, 'db'), hashMap(), cb$2462);
                    },
                    2: function (name$2520, cb$2521) {
                        return cdb(name$2520, hashMap(), cb$2521);
                    },
                    3: function (name$2558, o$2559, cb$2560) {
                        return function () {
                            return function (v$2570) {
                                var o$2572 = v$2570;
                                return req(merge(o$2572, hashMap('url', str('/data/', get(o$2572, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$2558, '"}'))), cb$2560);
                            }.call(this, preopts(o$2559));
                        }.call(this);
                    }
                };
                var max_arity$2451 = 0;
                for (var a$2452 in fnmap$2450) {
                    max_arity$2451 = a$2452 > max_arity$2451 ? a$2452 : max_arity$2451;
                }
                fnmap$2450[null] = fnmap$2450[max_arity$2451];
                return function () {
                    var f$2638 = fnmap$2450[arguments.length] || fnmap$2450[null];
                    return f$2638.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$2640) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$2645) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$2650) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$2655) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$2660) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$2665 = {
                    2: function (query$2674, cb$2675) {
                        return q(query$2674, hashMap(), cb$2675);
                    },
                    3: function (query$2712, o$2713, cb$2714) {
                        return function () {
                            return function (v$2724) {
                                var o$2726 = v$2724;
                                return function (v$2737) {
                                    var data$2739 = v$2737;
                                    return function (v$2742) {
                                        var limit$2744 = v$2742;
                                        return function (v$2747) {
                                            var offset$2749 = v$2747;
                                            return req(merge(edenize(o$2726), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$2712, limit$2744, offset$2749, ' :args [{:db/alias "', get(o$2726, 'alias'), '/', get(o$2726, 'db'), '"}]}'))), cb$2714);
                                        }.call(this, function () {
                                            if (truthy(get(data$2739, 'offset'))) {
                                                return str(' :offset ', get(data$2739, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$2739, 'limit'))) {
                                            return str(' :limit ', get(data$2739, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$2726, 'data'));
                            }.call(this, preopts(o$2713));
                        }.call(this);
                    }
                };
                var max_arity$2666 = 0;
                for (var a$2667 in fnmap$2665) {
                    max_arity$2666 = a$2667 > max_arity$2666 ? a$2667 : max_arity$2666;
                }
                fnmap$2665[null] = fnmap$2665[max_arity$2666];
                return function () {
                    var f$2896 = fnmap$2665[arguments.length] || fnmap$2665[null];
                    return f$2896.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$2898) {
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