//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
/* jshint ignore:start */
_ki = {
    init: function (self$5975, ns_name$5976) {
        if (_ki.namespaces[ns_name$5976] === undefined) {
            _ki.namespaces[ns_name$5976] = { vars: {} };
        }
        self$5975._ki_ns_name = ns_name$5976;
        self$5975._ki_ns_ctx = self$5975;
        _ki.intern.bind(self$5975)(_ki.modules.core);
        _ki.intern.bind(self$5975)(_ki.modules.mori);
        _ki.intern.bind(self$5975)(_ki.modules);
        _ki.intern.bind(self$5975)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$5977) {
        for (var e$5978 in obj$5977) {
            this[e$5978] = obj$5977[e$5978];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$5979) {
                return x$5979 === false || x$5979 == null ? false : true;
            },
            falsey: function (x$5980) {
                return !truthy(x$5980);
            },
            not: function (x$5981) {
                return !truthy(x$5981);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$5982 = 0;
                for (var i$5983 = 0; i$5983 < arguments.length; i$5983++) {
                    res$5982 += arguments[i$5983];
                }
                return res$5982;
            },
            sub: function () {
                var res$5984 = arguments[0];
                for (var i$5985 = 1; i$5985 < arguments.length; i$5985++) {
                    res$5984 -= arguments[i$5985];
                }
                return res$5984;
            },
            mul: function () {
                var res$5986 = 1;
                for (var i$5987 = 0; i$5987 < arguments.length; i$5987++) {
                    res$5986 *= arguments[i$5987];
                }
                return res$5986;
            },
            div: function () {
                var res$5988 = arguments[0];
                for (var i$5989 = 1; i$5989 < arguments.length; i$5989++) {
                    res$5988 /= arguments[i$5989];
                }
                return res$5988;
            },
            mod: function (a$5990, b$5991) {
                return a$5990 % b$5991;
            },
            lt: function () {
                var res$5992 = true;
                for (var i$5993 = 0; i$5993 < arguments.length - 1; i$5993++) {
                    res$5992 = res$5992 && arguments[i$5993] < arguments[i$5993 + 1];
                    if (!res$5992)
                        break;
                }
                return res$5992;
            },
            gt: function () {
                var res$5994 = true;
                for (var i$5995 = 0; i$5995 < arguments.length - 1; i$5995++) {
                    res$5994 = res$5994 && arguments[i$5995] > arguments[i$5995 + 1];
                    if (!res$5994)
                        break;
                }
                return res$5994;
            },
            leq: function () {
                var res$5996 = true;
                for (var i$5997 = 0; i$5997 < arguments.length - 1; i$5997++) {
                    res$5996 = res$5996 && arguments[i$5997] <= arguments[i$5997 + 1];
                    if (!res$5996)
                        break;
                }
                return res$5996;
            },
            geq: function () {
                var res$5998 = true;
                for (var i$5999 = 0; i$5999 < arguments.length - 1; i$5999++) {
                    res$5998 = res$5998 && arguments[i$5999] >= arguments[i$5999 + 1];
                }
                return res$5998;
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
            } catch (e$6000) {
                try {
                    return require('mori');
                } catch (e$6001) {
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
            _ki_ns_ctx['transform'] = function (body$6131, response$6132) {
                return function () {
                    return function (v$6137) {
                        var o$6139 = v$6137;
                        return function () {
                            if (o$6139.format === 'json' && response$6132.headers['content-type'] === o$6139.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$6132.body = edn.toJS(edn.parse(body$6131));
                                } catch (e$6147) {
                                    console.error('Exception: string isn\'t edn - ' + e$6147);
                                    console.error(body$6131);
                                }
                            }
                            ;
                            return function () {
                                return function (v$6150) {
                                    var partial$6152 = v$6150;
                                    return function () {
                                        if (truthy(isArray(partial$6152))) {
                                            return apply(pick, response$6132, partial$6152);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$6152))) {
                                                return response$6132[partial$6152];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$6132;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$6139.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$6132.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$6435) {
                return toClj(data$6435);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$6444) {
                return merge(base, edenize(opts$6444), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$6471 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$6483) {
                        return function () {
                            return function (v$6488) {
                                var o$6490 = v$6488;
                                return assoc(o$6490, 'uri', str(get(o$6490, 'uri'), get(o$6490, 'url')), 'headers', hashMap('Accept', get(o$6490, 'accept'), 'Content-Type', get(o$6490, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$6483, 'pre'))) {
                                    return opts$6483;
                                }
                                return merge(base, edenize(opts$6483));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$6472 = 0;
                for (var a$6473 in fnmap$6471) {
                    max_arity$6472 = a$6473 > max_arity$6472 ? a$6473 : max_arity$6472;
                }
                fnmap$6471[null] = fnmap$6471[max_arity$6472];
                return function () {
                    var f$6588 = fnmap$6471[arguments.length] || fnmap$6471[null];
                    return f$6588.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$6590, cb$6591) {
                return function () {
                    return function (v$6605) {
                        var o$6607 = v$6605;
                        return function () {
                            if (truthy(falsey(cb$6591))) {
                                return request(o$6607);
                            }
                            return request(o$6607, function (err$6635, res$6636) {
                                return function () {
                                    if (truthy(res$6636.statusCode == 200 || res$6636.statusCode == 201)) {
                                        return cb$6591(err$6635, transform(res$6636.body, res$6636));
                                    }
                                    return cb$6591(err$6635, res$6636);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$6590)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$6669 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$6708) {
                        return function () {
                            if (truthy(isFunction(a$6708))) {
                                return aliases(hashMap(), a$6708);
                            }
                            return function () {
                                if (truthy(isObject(a$6708))) {
                                    return aliases(a$6708, false);
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
                    2: function (o$6782, cb$6783) {
                        return req(merge(edenize(o$6782), hashMap('url', '/data/')), cb$6783);
                    }
                };
                var max_arity$6670 = 0;
                for (var a$6671 in fnmap$6669) {
                    max_arity$6670 = a$6671 > max_arity$6670 ? a$6671 : max_arity$6670;
                }
                fnmap$6669[null] = fnmap$6669[max_arity$6670];
                return function () {
                    var f$6813 = fnmap$6669[arguments.length] || fnmap$6669[null];
                    return f$6813.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$6815 = {
                    1: function (cb$6827) {
                        return cdb(get(base, 'db'), hashMap(), cb$6827);
                    },
                    2: function (name$6885, cb$6886) {
                        return cdb(name$6885, hashMap(), cb$6886);
                    },
                    3: function (name$6923, o$6924, cb$6925) {
                        return function () {
                            return function (v$6935) {
                                var o$6937 = v$6935;
                                return req(merge(o$6937, hashMap('url', str('/data/', get(o$6937, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$6923, '"}'))), cb$6925);
                            }.call(this, preopts(o$6924));
                        }.call(this);
                    }
                };
                var max_arity$6816 = 0;
                for (var a$6817 in fnmap$6815) {
                    max_arity$6816 = a$6817 > max_arity$6816 ? a$6817 : max_arity$6816;
                }
                fnmap$6815[null] = fnmap$6815[max_arity$6816];
                return function () {
                    var f$7003 = fnmap$6815[arguments.length] || fnmap$6815[null];
                    return f$7003.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$7005) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$7010) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$7015) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$7020) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$7025) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$7030 = {
                    2: function (query$7039, cb$7040) {
                        return q(query$7039, hashMap(), cb$7040);
                    },
                    3: function (query$7077, o$7078, cb$7079) {
                        return function () {
                            return function (v$7089) {
                                var o$7091 = v$7089;
                                return function (v$7102) {
                                    var data$7104 = v$7102;
                                    return function (v$7107) {
                                        var limit$7109 = v$7107;
                                        return function (v$7112) {
                                            var offset$7114 = v$7112;
                                            return req(merge(edenize(o$7091), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$7077, limit$7109, offset$7114, ' :args [{:db/alias "', get(o$7091, 'alias'), '/', get(o$7091, 'db'), '"}]}'))), cb$7079);
                                        }.call(this, function () {
                                            if (truthy(get(data$7104, 'offset'))) {
                                                return str(' :offset ', get(data$7104, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$7104, 'limit'))) {
                                            return str(' :limit ', get(data$7104, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$7091, 'data'));
                            }.call(this, preopts(o$7078));
                        }.call(this);
                    }
                };
                var max_arity$7031 = 0;
                for (var a$7032 in fnmap$7030) {
                    max_arity$7031 = a$7032 > max_arity$7031 ? a$7032 : max_arity$7031;
                }
                fnmap$7030[null] = fnmap$7030[max_arity$7031];
                return function () {
                    var f$7261 = fnmap$7030[arguments.length] || fnmap$7030[null];
                    return f$7261.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$7263) {
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