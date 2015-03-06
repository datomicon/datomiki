//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$64542, ns_name$64543) {
        if (_ki.namespaces[ns_name$64543] === undefined) {
            _ki.namespaces[ns_name$64543] = { vars: {} };
        }
        self$64542._ki_ns_name = ns_name$64543;
        self$64542._ki_ns_ctx = self$64542;
        _ki.intern.bind(self$64542)(_ki.modules.core);
        _ki.intern.bind(self$64542)(_ki.modules.mori);
        _ki.intern.bind(self$64542)(_ki.modules);
        _ki.intern.bind(self$64542)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$64544) {
        for (var e$64545 in obj$64544) {
            this[e$64545] = obj$64544[e$64545];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$64546) {
                return x$64546 === false || x$64546 == null ? false : true;
            },
            falsey: function (x$64547) {
                return !truthy(x$64547);
            },
            not: function (x$64548) {
                return !truthy(x$64548);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$64549 = 0;
                for (var i$64550 = 0; i$64550 < arguments.length; i$64550++) {
                    res$64549 += arguments[i$64550];
                }
                return res$64549;
            },
            sub: function () {
                var res$64551 = arguments[0];
                for (var i$64552 = 1; i$64552 < arguments.length; i$64552++) {
                    res$64551 -= arguments[i$64552];
                }
                return res$64551;
            },
            mul: function () {
                var res$64553 = 1;
                for (var i$64554 = 0; i$64554 < arguments.length; i$64554++) {
                    res$64553 *= arguments[i$64554];
                }
                return res$64553;
            },
            div: function () {
                var res$64555 = arguments[0];
                for (var i$64556 = 1; i$64556 < arguments.length; i$64556++) {
                    res$64555 /= arguments[i$64556];
                }
                return res$64555;
            },
            mod: function (a$64557, b$64558) {
                return a$64557 % b$64558;
            },
            lt: function () {
                var res$64559 = true;
                for (var i$64560 = 0; i$64560 < arguments.length - 1; i$64560++) {
                    res$64559 = res$64559 && arguments[i$64560] < arguments[i$64560 + 1];
                    if (!res$64559)
                        break;
                }
                return res$64559;
            },
            gt: function () {
                var res$64561 = true;
                for (var i$64562 = 0; i$64562 < arguments.length - 1; i$64562++) {
                    res$64561 = res$64561 && arguments[i$64562] > arguments[i$64562 + 1];
                    if (!res$64561)
                        break;
                }
                return res$64561;
            },
            leq: function () {
                var res$64563 = true;
                for (var i$64564 = 0; i$64564 < arguments.length - 1; i$64564++) {
                    res$64563 = res$64563 && arguments[i$64564] <= arguments[i$64564 + 1];
                    if (!res$64563)
                        break;
                }
                return res$64563;
            },
            geq: function () {
                var res$64565 = true;
                for (var i$64566 = 0; i$64566 < arguments.length - 1; i$64566++) {
                    res$64565 = res$64565 && arguments[i$64566] >= arguments[i$64566 + 1];
                }
                return res$64565;
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
            } catch (e$64567) {
                try {
                    return require('mori');
                } catch (e$64568) {
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
            _ki_ns_ctx['pick'] = function (from$64690, keys$64691) {
                return function () {
                    return function (v$64696) {
                        var res$64698 = v$64696;
                        return function () {
                            var res$64702 = {};
                            do {
                                res$64702 = function () {
                                    return function (v$64728) {
                                        var key$64730 = v$64728;
                                        return function () {
                                            if (truthy(key$64730 == undefined)) {
                                                return res$64698;
                                            }
                                            return function () {
                                                res$64698[key$64730] = from$64690[key$64730];
                                                return {
                                                    _ki_recur: true,
                                                    _ki_vals: [keys$64691.pop()]
                                                };
                                            }.call(this);
                                        }.call(this);
                                    }(res$64702._ki_vals === undefined ? keys$64691.pop() : res$64702._ki_vals[0]);
                                    ;
                                }();
                            } while ((res$64702 || 0)._ki_recur);
                            return res$64702;
                        }.call(this);
                    }.call(this, {});
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.pick = _ki_ns_ctx['pick'];
            return _ki_ns_ctx['pick'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$64769, response$64770) {
                return function () {
                    return function (v$64775) {
                        var o$64777 = v$64775;
                        return function () {
                            if (o$64777.format === 'json' && response$64770.headers['content-type'] === o$64777.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$64770.body = edn.toJS(edn.parse(body$64769));
                                } catch (e$64785) {
                                    console.error('Exception: string isn\'t edn - ' + e$64785);
                                    console.error(body$64769);
                                }
                            }
                            ;
                            return function () {
                                return function (v$64788) {
                                    var partial$64790 = v$64788;
                                    return function () {
                                        if (truthy(isArray(partial$64790))) {
                                            return pick(response$64770, partial$64790);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$64790))) {
                                                return response$64770[partial$64790];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$64770;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$64777.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$64770.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$65070) {
                return toClj(data$65070);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$65079) {
                return merge(base, edenize(opts$65079), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$65106 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$65118) {
                        return function () {
                            return function (v$65123) {
                                var o$65125 = v$65123;
                                return assoc(o$65125, 'uri', str(get(o$65125, 'uri'), get(o$65125, 'url')), 'headers', hashMap('Accept', get(o$65125, 'accept'), 'Content-Type', get(o$65125, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$65118, 'pre'))) {
                                    return opts$65118;
                                }
                                return merge(base, edenize(opts$65118));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$65107 = 0;
                for (var a$65108 in fnmap$65106) {
                    max_arity$65107 = a$65108 > max_arity$65107 ? a$65108 : max_arity$65107;
                }
                fnmap$65106[null] = fnmap$65106[max_arity$65107];
                return function () {
                    var f$65223 = fnmap$65106[arguments.length] || fnmap$65106[null];
                    return f$65223.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$65225, cb$65226) {
                return function () {
                    return function (v$65240) {
                        var o$65242 = v$65240;
                        return function () {
                            if (truthy(falsey(cb$65226))) {
                                return request(o$65242);
                            }
                            return request(o$65242, function (err$65270, res$65271) {
                                return function () {
                                    if (truthy(res$65271.statusCode == 200 || res$65271.statusCode == 201)) {
                                        return cb$65226(err$65270, transform(res$65271.body, res$65271));
                                    }
                                    return cb$65226(err$65270, res$65271);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$65225)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$65304 = {
                    1: function (cb$65313) {
                        return aliases(hashMap(), cb$65313);
                    },
                    2: function (o$65341, cb$65342) {
                        return req(merge(edenize(o$65341), hashMap('url', '/data/')), cb$65342);
                    }
                };
                var max_arity$65305 = 0;
                for (var a$65306 in fnmap$65304) {
                    max_arity$65305 = a$65306 > max_arity$65305 ? a$65306 : max_arity$65305;
                }
                fnmap$65304[null] = fnmap$65304[max_arity$65305];
                return function () {
                    var f$65372 = fnmap$65304[arguments.length] || fnmap$65304[null];
                    return f$65372.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$65374 = {
                    1: function (cb$65386) {
                        return cdb(get(base, 'db'), hashMap(), cb$65386);
                    },
                    2: function (name$65444, cb$65445) {
                        return cdb(name$65444, hashMap(), cb$65445);
                    },
                    3: function (name$65482, o$65483, cb$65484) {
                        return function () {
                            return function (v$65494) {
                                var o$65496 = v$65494;
                                return req(merge(o$65496, hashMap('url', str('/data/', get(o$65496, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$65482, '"}'))), cb$65484);
                            }.call(this, preopts(o$65483));
                        }.call(this);
                    }
                };
                var max_arity$65375 = 0;
                for (var a$65376 in fnmap$65374) {
                    max_arity$65375 = a$65376 > max_arity$65375 ? a$65376 : max_arity$65375;
                }
                fnmap$65374[null] = fnmap$65374[max_arity$65375];
                return function () {
                    var f$65562 = fnmap$65374[arguments.length] || fnmap$65374[null];
                    return f$65562.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$65564) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$65569) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$65574) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$65579) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$65584) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$65589 = {
                    2: function (query$65598, cb$65599) {
                        return q(query$65598, hashMap(), cb$65599);
                    },
                    3: function (query$65636, o$65637, cb$65638) {
                        return function () {
                            return function (v$65648) {
                                var o$65650 = v$65648;
                                return function (v$65661) {
                                    var data$65663 = v$65661;
                                    return function (v$65666) {
                                        var limit$65668 = v$65666;
                                        return function (v$65671) {
                                            var offset$65673 = v$65671;
                                            return req(merge(edenize(o$65650), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$65636, limit$65668, offset$65673, ' :args [{:db/alias "', get(o$65650, 'alias'), '/', get(o$65650, 'db'), '"}]}'))), cb$65638);
                                        }.call(this, function () {
                                            if (truthy(get(data$65663, 'offset'))) {
                                                return str(' :offset ', get(data$65663, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$65663, 'limit'))) {
                                            return str(' :limit ', get(data$65663, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$65650, 'data'));
                            }.call(this, preopts(o$65637));
                        }.call(this);
                    }
                };
                var max_arity$65590 = 0;
                for (var a$65591 in fnmap$65589) {
                    max_arity$65590 = a$65591 > max_arity$65590 ? a$65591 : max_arity$65590;
                }
                fnmap$65589[null] = fnmap$65589[max_arity$65590];
                return function () {
                    var f$65820 = fnmap$65589[arguments.length] || fnmap$65589[null];
                    return f$65820.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$65822) {
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