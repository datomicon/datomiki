//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$61942, ns_name$61943) {
        if (_ki.namespaces[ns_name$61943] === undefined) {
            _ki.namespaces[ns_name$61943] = { vars: {} };
        }
        self$61942._ki_ns_name = ns_name$61943;
        self$61942._ki_ns_ctx = self$61942;
        _ki.intern.bind(self$61942)(_ki.modules.core);
        _ki.intern.bind(self$61942)(_ki.modules.mori);
        _ki.intern.bind(self$61942)(_ki.modules);
        _ki.intern.bind(self$61942)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$61944) {
        for (var e$61945 in obj$61944) {
            this[e$61945] = obj$61944[e$61945];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$61946) {
                return x$61946 === false || x$61946 == null ? false : true;
            },
            falsey: function (x$61947) {
                return !truthy(x$61947);
            },
            not: function (x$61948) {
                return !truthy(x$61948);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$61949 = 0;
                for (var i$61950 = 0; i$61950 < arguments.length; i$61950++) {
                    res$61949 += arguments[i$61950];
                }
                return res$61949;
            },
            sub: function () {
                var res$61951 = arguments[0];
                for (var i$61952 = 1; i$61952 < arguments.length; i$61952++) {
                    res$61951 -= arguments[i$61952];
                }
                return res$61951;
            },
            mul: function () {
                var res$61953 = 1;
                for (var i$61954 = 0; i$61954 < arguments.length; i$61954++) {
                    res$61953 *= arguments[i$61954];
                }
                return res$61953;
            },
            div: function () {
                var res$61955 = arguments[0];
                for (var i$61956 = 1; i$61956 < arguments.length; i$61956++) {
                    res$61955 /= arguments[i$61956];
                }
                return res$61955;
            },
            mod: function (a$61957, b$61958) {
                return a$61957 % b$61958;
            },
            lt: function () {
                var res$61959 = true;
                for (var i$61960 = 0; i$61960 < arguments.length - 1; i$61960++) {
                    res$61959 = res$61959 && arguments[i$61960] < arguments[i$61960 + 1];
                    if (!res$61959)
                        break;
                }
                return res$61959;
            },
            gt: function () {
                var res$61961 = true;
                for (var i$61962 = 0; i$61962 < arguments.length - 1; i$61962++) {
                    res$61961 = res$61961 && arguments[i$61962] > arguments[i$61962 + 1];
                    if (!res$61961)
                        break;
                }
                return res$61961;
            },
            leq: function () {
                var res$61963 = true;
                for (var i$61964 = 0; i$61964 < arguments.length - 1; i$61964++) {
                    res$61963 = res$61963 && arguments[i$61964] <= arguments[i$61964 + 1];
                    if (!res$61963)
                        break;
                }
                return res$61963;
            },
            geq: function () {
                var res$61965 = true;
                for (var i$61966 = 0; i$61966 < arguments.length - 1; i$61966++) {
                    res$61965 = res$61965 && arguments[i$61966] >= arguments[i$61966 + 1];
                }
                return res$61965;
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
            } catch (e$61967) {
                try {
                    return require('mori');
                } catch (e$61968) {
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
            _ki_ns_ctx['isString'] = require('lodash').isString;
            _ki.namespaces[_ki_ns_name].vars.isString = _ki_ns_ctx['isString'];
            return _ki_ns_ctx['isString'];
        }());
        (function () {
            _ki_ns_ctx['pick'] = function (from$62090, keys$62091) {
                return function () {
                    return function (v$62096) {
                        var res$62098 = v$62096;
                        return function () {
                            var res$62102 = {};
                            do {
                                res$62102 = function () {
                                    return function (v$62128) {
                                        var key$62130 = v$62128;
                                        return function () {
                                            if (truthy(key$62130 == undefined)) {
                                                return res$62098;
                                            }
                                            return function () {
                                                res$62098[key$62130] = from$62090[key$62130];
                                                return {
                                                    _ki_recur: true,
                                                    _ki_vals: [keys$62091.pop()]
                                                };
                                            }.call(this);
                                        }.call(this);
                                    }(res$62102._ki_vals === undefined ? keys$62091.pop() : res$62102._ki_vals[0]);
                                    ;
                                }();
                            } while ((res$62102 || 0)._ki_recur);
                            return res$62102;
                        }.call(this);
                    }.call(this, {});
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.pick = _ki_ns_ctx['pick'];
            return _ki_ns_ctx['pick'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$62169, response$62170) {
                return function () {
                    return function (v$62175) {
                        var o$62177 = v$62175;
                        return function () {
                            if (o$62177.format === 'json' && response$62170.headers['content-type'] === o$62177.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$62170.body = edn.toJS(edn.parse(body$62169));
                                } catch (e$62185) {
                                    console.error('Exception: string isn\'t edn - ' + e$62185);
                                    console.error(body$62169);
                                }
                            }
                            ;
                            return function () {
                                return function (v$62188) {
                                    var partial$62190 = v$62188;
                                    return function () {
                                        if (truthy(isArray(partial$62190))) {
                                            return pick(response$62170, partial$62190);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$62190))) {
                                                return response$62170[partial$62190];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$62170;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$62177.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$62170.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$62470) {
                return toClj(data$62470);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$62479) {
                return merge(base, edenize(opts$62479), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$62506 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$62518) {
                        return function () {
                            return function (v$62523) {
                                var o$62525 = v$62523;
                                return assoc(o$62525, 'uri', str(get(o$62525, 'uri'), get(o$62525, 'url')), 'headers', hashMap('Accept', get(o$62525, 'accept'), 'Content-Type', get(o$62525, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$62518, 'pre'))) {
                                    return opts$62518;
                                }
                                return merge(base, edenize(opts$62518));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$62507 = 0;
                for (var a$62508 in fnmap$62506) {
                    max_arity$62507 = a$62508 > max_arity$62507 ? a$62508 : max_arity$62507;
                }
                fnmap$62506[null] = fnmap$62506[max_arity$62507];
                return function () {
                    var f$62623 = fnmap$62506[arguments.length] || fnmap$62506[null];
                    return f$62623.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$62625, cb$62626) {
                return function () {
                    return function (v$62640) {
                        var o$62642 = v$62640;
                        return function () {
                            if (truthy(falsey(cb$62626))) {
                                return request(o$62642);
                            }
                            return request(o$62642, function (err$62670, res$62671) {
                                return function () {
                                    if (truthy(res$62671.statusCode == 200 || res$62671.statusCode == 201)) {
                                        return cb$62626(err$62670, transform(res$62671.body, res$62671));
                                    }
                                    return cb$62626(err$62670, res$62671);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$62625)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$62704 = {
                    1: function (cb$62713) {
                        return aliases(hashMap(), cb$62713);
                    },
                    2: function (o$62741, cb$62742) {
                        return req(merge(edenize(o$62741), hashMap('url', '/data/')), cb$62742);
                    }
                };
                var max_arity$62705 = 0;
                for (var a$62706 in fnmap$62704) {
                    max_arity$62705 = a$62706 > max_arity$62705 ? a$62706 : max_arity$62705;
                }
                fnmap$62704[null] = fnmap$62704[max_arity$62705];
                return function () {
                    var f$62772 = fnmap$62704[arguments.length] || fnmap$62704[null];
                    return f$62772.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$62774 = {
                    1: function (cb$62786) {
                        return cdb(get(base, 'db'), hashMap(), cb$62786);
                    },
                    2: function (name$62844, cb$62845) {
                        return cdb(name$62844, hashMap(), cb$62845);
                    },
                    3: function (name$62882, o$62883, cb$62884) {
                        return function () {
                            return function (v$62894) {
                                var o$62896 = v$62894;
                                return req(merge(o$62896, hashMap('url', str('/data/', get(o$62896, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$62882, '"}'))), cb$62884);
                            }.call(this, preopts(o$62883));
                        }.call(this);
                    }
                };
                var max_arity$62775 = 0;
                for (var a$62776 in fnmap$62774) {
                    max_arity$62775 = a$62776 > max_arity$62775 ? a$62776 : max_arity$62775;
                }
                fnmap$62774[null] = fnmap$62774[max_arity$62775];
                return function () {
                    var f$62962 = fnmap$62774[arguments.length] || fnmap$62774[null];
                    return f$62962.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$62964) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$62969) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$62974) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$62979) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$62984) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$62989 = {
                    2: function (query$62998, cb$62999) {
                        return q(query$62998, hashMap(), cb$62999);
                    },
                    3: function (query$63036, o$63037, cb$63038) {
                        return function () {
                            return function (v$63048) {
                                var o$63050 = v$63048;
                                return function (v$63061) {
                                    var data$63063 = v$63061;
                                    return function (v$63066) {
                                        var limit$63068 = v$63066;
                                        return function (v$63071) {
                                            var offset$63073 = v$63071;
                                            return req(merge(edenize(o$63050), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$63036, limit$63068, offset$63073, ' :args [{:db/alias "', get(o$63050, 'alias'), '/', get(o$63050, 'db'), '"}]}'))), cb$63038);
                                        }.call(this, function () {
                                            if (truthy(get(data$63063, 'offset'))) {
                                                return str(' :offset ', get(data$63063, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$63063, 'limit'))) {
                                            return str(' :limit ', get(data$63063, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$63050, 'data'));
                            }.call(this, preopts(o$63037));
                        }.call(this);
                    }
                };
                var max_arity$62990 = 0;
                for (var a$62991 in fnmap$62989) {
                    max_arity$62990 = a$62991 > max_arity$62990 ? a$62991 : max_arity$62990;
                }
                fnmap$62989[null] = fnmap$62989[max_arity$62990];
                return function () {
                    var f$63220 = fnmap$62989[arguments.length] || fnmap$62989[null];
                    return f$63220.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$63222) {
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