//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
/* jshint ignore:start */
_ki = {
    init: function (self$5968, ns_name$5969) {
        if (_ki.namespaces[ns_name$5969] === undefined) {
            _ki.namespaces[ns_name$5969] = { vars: {} };
        }
        self$5968._ki_ns_name = ns_name$5969;
        self$5968._ki_ns_ctx = self$5968;
        _ki.intern.bind(self$5968)(_ki.modules.core);
        _ki.intern.bind(self$5968)(_ki.modules.mori);
        _ki.intern.bind(self$5968)(_ki.modules);
        _ki.intern.bind(self$5968)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$5970) {
        for (var e$5971 in obj$5970) {
            this[e$5971] = obj$5970[e$5971];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$5972) {
                return x$5972 === false || x$5972 == null ? false : true;
            },
            falsey: function (x$5973) {
                return !truthy(x$5973);
            },
            not: function (x$5974) {
                return !truthy(x$5974);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$5975 = 0;
                for (var i$5976 = 0; i$5976 < arguments.length; i$5976++) {
                    res$5975 += arguments[i$5976];
                }
                return res$5975;
            },
            sub: function () {
                var res$5977 = arguments[0];
                for (var i$5978 = 1; i$5978 < arguments.length; i$5978++) {
                    res$5977 -= arguments[i$5978];
                }
                return res$5977;
            },
            mul: function () {
                var res$5979 = 1;
                for (var i$5980 = 0; i$5980 < arguments.length; i$5980++) {
                    res$5979 *= arguments[i$5980];
                }
                return res$5979;
            },
            div: function () {
                var res$5981 = arguments[0];
                for (var i$5982 = 1; i$5982 < arguments.length; i$5982++) {
                    res$5981 /= arguments[i$5982];
                }
                return res$5981;
            },
            mod: function (a$5983, b$5984) {
                return a$5983 % b$5984;
            },
            lt: function () {
                var res$5985 = true;
                for (var i$5986 = 0; i$5986 < arguments.length - 1; i$5986++) {
                    res$5985 = res$5985 && arguments[i$5986] < arguments[i$5986 + 1];
                    if (!res$5985)
                        break;
                }
                return res$5985;
            },
            gt: function () {
                var res$5987 = true;
                for (var i$5988 = 0; i$5988 < arguments.length - 1; i$5988++) {
                    res$5987 = res$5987 && arguments[i$5988] > arguments[i$5988 + 1];
                    if (!res$5987)
                        break;
                }
                return res$5987;
            },
            leq: function () {
                var res$5989 = true;
                for (var i$5990 = 0; i$5990 < arguments.length - 1; i$5990++) {
                    res$5989 = res$5989 && arguments[i$5990] <= arguments[i$5990 + 1];
                    if (!res$5989)
                        break;
                }
                return res$5989;
            },
            geq: function () {
                var res$5991 = true;
                for (var i$5992 = 0; i$5992 < arguments.length - 1; i$5992++) {
                    res$5991 = res$5991 && arguments[i$5992] >= arguments[i$5992 + 1];
                }
                return res$5991;
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
            } catch (e$5993) {
                try {
                    return require('mori');
                } catch (e$5994) {
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
            _ki_ns_ctx['transform'] = function (body$6124, response$6125) {
                return function () {
                    return function (v$6130) {
                        var o$6132 = v$6130;
                        return function () {
                            if (o$6132.format === 'json' && response$6125.headers['content-type'] === o$6132.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$6125.body = edn.toJS(edn.parse(body$6124));
                                } catch (e$6140) {
                                    console.error('Exception: string isn\'t edn - ' + e$6140);
                                    console.error(body$6124);
                                }
                            }
                            ;
                            return function () {
                                return function (v$6143) {
                                    var partial$6145 = v$6143;
                                    return function () {
                                        if (truthy(isArray(partial$6145))) {
                                            return apply(pick, response$6125, partial$6145);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$6145))) {
                                                return response$6125[partial$6145];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$6125;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$6132.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$6125.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$6428) {
                return toClj(data$6428);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$6437) {
                return merge(base, edenize(opts$6437), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$6464 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$6476) {
                        return function () {
                            return function (v$6481) {
                                var o$6483 = v$6481;
                                return assoc(o$6483, 'uri', str(get(o$6483, 'uri'), get(o$6483, 'url')), 'headers', hashMap('Accept', get(o$6483, 'accept'), 'Content-Type', get(o$6483, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$6476, 'pre'))) {
                                    return opts$6476;
                                }
                                return merge(base, edenize(opts$6476));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$6465 = 0;
                for (var a$6466 in fnmap$6464) {
                    max_arity$6465 = a$6466 > max_arity$6465 ? a$6466 : max_arity$6465;
                }
                fnmap$6464[null] = fnmap$6464[max_arity$6465];
                return function () {
                    var f$6581 = fnmap$6464[arguments.length] || fnmap$6464[null];
                    return f$6581.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$6583, cb$6584) {
                return function () {
                    return function (v$6598) {
                        var o$6600 = v$6598;
                        return function () {
                            if (truthy(falsey(cb$6584))) {
                                return request(o$6600);
                            }
                            return request(o$6600, function (err$6628, res$6629) {
                                return function () {
                                    if (truthy(res$6629.statusCode == 200 || res$6629.statusCode == 201)) {
                                        return cb$6584(err$6628, transform(res$6629.body, res$6629));
                                    }
                                    return cb$6584(err$6628, res$6629);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$6583)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$6662 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$6701) {
                        return function () {
                            if (truthy(isFunction(a$6701))) {
                                return aliases(hashMap(), a$6701);
                            }
                            return function () {
                                if (truthy(isObject(a$6701))) {
                                    return aliases(a$6701, false);
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
                    2: function (o$6775, cb$6776) {
                        return req(merge(edenize(o$6775), hashMap('url', '/data/')), cb$6776);
                    }
                };
                var max_arity$6663 = 0;
                for (var a$6664 in fnmap$6662) {
                    max_arity$6663 = a$6664 > max_arity$6663 ? a$6664 : max_arity$6663;
                }
                fnmap$6662[null] = fnmap$6662[max_arity$6663];
                return function () {
                    var f$6806 = fnmap$6662[arguments.length] || fnmap$6662[null];
                    return f$6806.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$6808 = {
                    1: function (cb$6820) {
                        return cdb(get(base, 'db'), hashMap(), cb$6820);
                    },
                    2: function (name$6878, cb$6879) {
                        return cdb(name$6878, hashMap(), cb$6879);
                    },
                    3: function (name$6916, o$6917, cb$6918) {
                        return function () {
                            return function (v$6928) {
                                var o$6930 = v$6928;
                                return req(merge(o$6930, hashMap('url', str('/data/', get(o$6930, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$6916, '"}'))), cb$6918);
                            }.call(this, preopts(o$6917));
                        }.call(this);
                    }
                };
                var max_arity$6809 = 0;
                for (var a$6810 in fnmap$6808) {
                    max_arity$6809 = a$6810 > max_arity$6809 ? a$6810 : max_arity$6809;
                }
                fnmap$6808[null] = fnmap$6808[max_arity$6809];
                return function () {
                    var f$6996 = fnmap$6808[arguments.length] || fnmap$6808[null];
                    return f$6996.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$6998) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$7003) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$7008) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$7013) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$7018) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$7023 = {
                    2: function (query$7032, cb$7033) {
                        return q(query$7032, hashMap(), cb$7033);
                    },
                    3: function (query$7070, o$7071, cb$7072) {
                        return function () {
                            return function (v$7082) {
                                var o$7084 = v$7082;
                                return function (v$7095) {
                                    var data$7097 = v$7095;
                                    return function (v$7100) {
                                        var limit$7102 = v$7100;
                                        return function (v$7105) {
                                            var offset$7107 = v$7105;
                                            return req(merge(edenize(o$7084), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$7070, limit$7102, offset$7107, ' :args [{:db/alias "', get(o$7084, 'alias'), '/', get(o$7084, 'db'), '"}]}'))), cb$7072);
                                        }.call(this, function () {
                                            if (truthy(get(data$7097, 'offset'))) {
                                                return str(' :offset ', get(data$7097, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$7097, 'limit'))) {
                                            return str(' :limit ', get(data$7097, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$7084, 'data'));
                            }.call(this, preopts(o$7071));
                        }.call(this);
                    }
                };
                var max_arity$7024 = 0;
                for (var a$7025 in fnmap$7023) {
                    max_arity$7024 = a$7025 > max_arity$7024 ? a$7025 : max_arity$7024;
                }
                fnmap$7023[null] = fnmap$7023[max_arity$7024];
                return function () {
                    var f$7254 = fnmap$7023[arguments.length] || fnmap$7023[null];
                    return f$7254.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$7256) {
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