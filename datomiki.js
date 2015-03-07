//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$142091, ns_name$142092) {
        if (_ki.namespaces[ns_name$142092] === undefined) {
            _ki.namespaces[ns_name$142092] = { vars: {} };
        }
        self$142091._ki_ns_name = ns_name$142092;
        self$142091._ki_ns_ctx = self$142091;
        _ki.intern.bind(self$142091)(_ki.modules.core);
        _ki.intern.bind(self$142091)(_ki.modules.mori);
        _ki.intern.bind(self$142091)(_ki.modules);
        _ki.intern.bind(self$142091)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$142093) {
        for (var e$142094 in obj$142093) {
            this[e$142094] = obj$142093[e$142094];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$142095) {
                return x$142095 === false || x$142095 == null ? false : true;
            },
            falsey: function (x$142096) {
                return !truthy(x$142096);
            },
            not: function (x$142097) {
                return !truthy(x$142097);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$142098 = 0;
                for (var i$142099 = 0; i$142099 < arguments.length; i$142099++) {
                    res$142098 += arguments[i$142099];
                }
                return res$142098;
            },
            sub: function () {
                var res$142100 = arguments[0];
                for (var i$142101 = 1; i$142101 < arguments.length; i$142101++) {
                    res$142100 -= arguments[i$142101];
                }
                return res$142100;
            },
            mul: function () {
                var res$142102 = 1;
                for (var i$142103 = 0; i$142103 < arguments.length; i$142103++) {
                    res$142102 *= arguments[i$142103];
                }
                return res$142102;
            },
            div: function () {
                var res$142104 = arguments[0];
                for (var i$142105 = 1; i$142105 < arguments.length; i$142105++) {
                    res$142104 /= arguments[i$142105];
                }
                return res$142104;
            },
            mod: function (a$142106, b$142107) {
                return a$142106 % b$142107;
            },
            lt: function () {
                var res$142108 = true;
                for (var i$142109 = 0; i$142109 < arguments.length - 1; i$142109++) {
                    res$142108 = res$142108 && arguments[i$142109] < arguments[i$142109 + 1];
                    if (!res$142108)
                        break;
                }
                return res$142108;
            },
            gt: function () {
                var res$142110 = true;
                for (var i$142111 = 0; i$142111 < arguments.length - 1; i$142111++) {
                    res$142110 = res$142110 && arguments[i$142111] > arguments[i$142111 + 1];
                    if (!res$142110)
                        break;
                }
                return res$142110;
            },
            leq: function () {
                var res$142112 = true;
                for (var i$142113 = 0; i$142113 < arguments.length - 1; i$142113++) {
                    res$142112 = res$142112 && arguments[i$142113] <= arguments[i$142113 + 1];
                    if (!res$142112)
                        break;
                }
                return res$142112;
            },
            geq: function () {
                var res$142114 = true;
                for (var i$142115 = 0; i$142115 < arguments.length - 1; i$142115++) {
                    res$142114 = res$142114 && arguments[i$142115] >= arguments[i$142115 + 1];
                }
                return res$142114;
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
            } catch (e$142116) {
                try {
                    return require('mori');
                } catch (e$142117) {
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
            _ki_ns_ctx['pick'] = function (from$142247, keys$142248) {
                return function () {
                    return function (v$142253) {
                        var res$142255 = v$142253;
                        return function () {
                            var res$142259 = {};
                            do {
                                res$142259 = function () {
                                    return function (v$142285) {
                                        var key$142287 = v$142285;
                                        return function () {
                                            if (truthy(key$142287 == undefined)) {
                                                return res$142255;
                                            }
                                            return function () {
                                                res$142255[key$142287] = from$142247[key$142287];
                                                return {
                                                    _ki_recur: true,
                                                    _ki_vals: [keys$142248.pop()]
                                                };
                                            }.call(this);
                                        }.call(this);
                                    }(res$142259._ki_vals === undefined ? keys$142248.pop() : res$142259._ki_vals[0]);
                                    ;
                                }();
                            } while ((res$142259 || 0)._ki_recur);
                            return res$142259;
                        }.call(this);
                    }.call(this, {});
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.pick = _ki_ns_ctx['pick'];
            return _ki_ns_ctx['pick'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$142326, response$142327) {
                return function () {
                    return function (v$142332) {
                        var o$142334 = v$142332;
                        return function () {
                            if (o$142334.format === 'json' && response$142327.headers['content-type'] === o$142334.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$142327.body = edn.toJS(edn.parse(body$142326));
                                } catch (e$142342) {
                                    console.error('Exception: string isn\'t edn - ' + e$142342);
                                    console.error(body$142326);
                                }
                            }
                            ;
                            return function () {
                                return function (v$142345) {
                                    var partial$142347 = v$142345;
                                    return function () {
                                        if (truthy(isArray(partial$142347))) {
                                            return pick(response$142327, partial$142347);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$142347))) {
                                                return response$142327[partial$142347];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$142327;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$142334.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$142327.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$142627) {
                return toClj(data$142627);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$142636) {
                return merge(base, edenize(opts$142636), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$142663 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$142675) {
                        return function () {
                            return function (v$142680) {
                                var o$142682 = v$142680;
                                return assoc(o$142682, 'uri', str(get(o$142682, 'uri'), get(o$142682, 'url')), 'headers', hashMap('Accept', get(o$142682, 'accept'), 'Content-Type', get(o$142682, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$142675, 'pre'))) {
                                    return opts$142675;
                                }
                                return merge(base, edenize(opts$142675));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$142664 = 0;
                for (var a$142665 in fnmap$142663) {
                    max_arity$142664 = a$142665 > max_arity$142664 ? a$142665 : max_arity$142664;
                }
                fnmap$142663[null] = fnmap$142663[max_arity$142664];
                return function () {
                    var f$142780 = fnmap$142663[arguments.length] || fnmap$142663[null];
                    return f$142780.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$142782, cb$142783) {
                return function () {
                    return function (v$142797) {
                        var o$142799 = v$142797;
                        return function () {
                            if (truthy(falsey(cb$142783))) {
                                return request(o$142799);
                            }
                            return request(o$142799, function (err$142827, res$142828) {
                                return function () {
                                    if (truthy(res$142828.statusCode == 200 || res$142828.statusCode == 201)) {
                                        return cb$142783(err$142827, transform(res$142828.body, res$142828));
                                    }
                                    return cb$142783(err$142827, res$142828);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$142782)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$142861 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$142900) {
                        return function () {
                            if (truthy(isFunction(a$142900))) {
                                return aliases(hashMap(), a$142900);
                            }
                            return function () {
                                if (truthy(isObject(a$142900))) {
                                    return aliases(a$142900, false);
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
                    2: function (o$142974, cb$142975) {
                        return req(merge(edenize(o$142974), hashMap('url', '/data/')), cb$142975);
                    }
                };
                var max_arity$142862 = 0;
                for (var a$142863 in fnmap$142861) {
                    max_arity$142862 = a$142863 > max_arity$142862 ? a$142863 : max_arity$142862;
                }
                fnmap$142861[null] = fnmap$142861[max_arity$142862];
                return function () {
                    var f$143005 = fnmap$142861[arguments.length] || fnmap$142861[null];
                    return f$143005.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$143007 = {
                    1: function (cb$143019) {
                        return cdb(get(base, 'db'), hashMap(), cb$143019);
                    },
                    2: function (name$143077, cb$143078) {
                        return cdb(name$143077, hashMap(), cb$143078);
                    },
                    3: function (name$143115, o$143116, cb$143117) {
                        return function () {
                            return function (v$143127) {
                                var o$143129 = v$143127;
                                return req(merge(o$143129, hashMap('url', str('/data/', get(o$143129, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$143115, '"}'))), cb$143117);
                            }.call(this, preopts(o$143116));
                        }.call(this);
                    }
                };
                var max_arity$143008 = 0;
                for (var a$143009 in fnmap$143007) {
                    max_arity$143008 = a$143009 > max_arity$143008 ? a$143009 : max_arity$143008;
                }
                fnmap$143007[null] = fnmap$143007[max_arity$143008];
                return function () {
                    var f$143195 = fnmap$143007[arguments.length] || fnmap$143007[null];
                    return f$143195.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$143197) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$143202) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$143207) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$143212) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$143217) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$143222 = {
                    2: function (query$143231, cb$143232) {
                        return q(query$143231, hashMap(), cb$143232);
                    },
                    3: function (query$143269, o$143270, cb$143271) {
                        return function () {
                            return function (v$143281) {
                                var o$143283 = v$143281;
                                return function (v$143294) {
                                    var data$143296 = v$143294;
                                    return function (v$143299) {
                                        var limit$143301 = v$143299;
                                        return function (v$143304) {
                                            var offset$143306 = v$143304;
                                            return req(merge(edenize(o$143283), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$143269, limit$143301, offset$143306, ' :args [{:db/alias "', get(o$143283, 'alias'), '/', get(o$143283, 'db'), '"}]}'))), cb$143271);
                                        }.call(this, function () {
                                            if (truthy(get(data$143296, 'offset'))) {
                                                return str(' :offset ', get(data$143296, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$143296, 'limit'))) {
                                            return str(' :limit ', get(data$143296, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$143283, 'data'));
                            }.call(this, preopts(o$143270));
                        }.call(this);
                    }
                };
                var max_arity$143223 = 0;
                for (var a$143224 in fnmap$143222) {
                    max_arity$143223 = a$143224 > max_arity$143223 ? a$143224 : max_arity$143223;
                }
                fnmap$143222[null] = fnmap$143222[max_arity$143223];
                return function () {
                    var f$143453 = fnmap$143222[arguments.length] || fnmap$143222[null];
                    return f$143453.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$143455) {
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