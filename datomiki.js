//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$29746, ns_name$29747) {
        if (_ki.namespaces[ns_name$29747] === undefined) {
            _ki.namespaces[ns_name$29747] = { vars: {} };
        }
        self$29746._ki_ns_name = ns_name$29747;
        self$29746._ki_ns_ctx = self$29746;
        _ki.intern.bind(self$29746)(_ki.modules.core);
        _ki.intern.bind(self$29746)(_ki.modules.mori);
        _ki.intern.bind(self$29746)(_ki.modules);
        _ki.intern.bind(self$29746)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$29748) {
        for (var e$29749 in obj$29748) {
            this[e$29749] = obj$29748[e$29749];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$29750) {
                return x$29750 === false || x$29750 == null ? false : true;
            },
            falsey: function (x$29751) {
                return !truthy(x$29751);
            },
            not: function (x$29752) {
                return !truthy(x$29752);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$29753 = 0;
                for (var i$29754 = 0; i$29754 < arguments.length; i$29754++) {
                    res$29753 += arguments[i$29754];
                }
                return res$29753;
            },
            sub: function () {
                var res$29755 = arguments[0];
                for (var i$29756 = 1; i$29756 < arguments.length; i$29756++) {
                    res$29755 -= arguments[i$29756];
                }
                return res$29755;
            },
            mul: function () {
                var res$29757 = 1;
                for (var i$29758 = 0; i$29758 < arguments.length; i$29758++) {
                    res$29757 *= arguments[i$29758];
                }
                return res$29757;
            },
            div: function () {
                var res$29759 = arguments[0];
                for (var i$29760 = 1; i$29760 < arguments.length; i$29760++) {
                    res$29759 /= arguments[i$29760];
                }
                return res$29759;
            },
            mod: function (a$29761, b$29762) {
                return a$29761 % b$29762;
            },
            lt: function () {
                var res$29763 = true;
                for (var i$29764 = 0; i$29764 < arguments.length - 1; i$29764++) {
                    res$29763 = res$29763 && arguments[i$29764] < arguments[i$29764 + 1];
                    if (!res$29763)
                        break;
                }
                return res$29763;
            },
            gt: function () {
                var res$29765 = true;
                for (var i$29766 = 0; i$29766 < arguments.length - 1; i$29766++) {
                    res$29765 = res$29765 && arguments[i$29766] > arguments[i$29766 + 1];
                    if (!res$29765)
                        break;
                }
                return res$29765;
            },
            leq: function () {
                var res$29767 = true;
                for (var i$29768 = 0; i$29768 < arguments.length - 1; i$29768++) {
                    res$29767 = res$29767 && arguments[i$29768] <= arguments[i$29768 + 1];
                    if (!res$29767)
                        break;
                }
                return res$29767;
            },
            geq: function () {
                var res$29769 = true;
                for (var i$29770 = 0; i$29770 < arguments.length - 1; i$29770++) {
                    res$29769 = res$29769 && arguments[i$29770] >= arguments[i$29770 + 1];
                }
                return res$29769;
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
            } catch (e$29771) {
                try {
                    return require('mori');
                } catch (e$29772) {
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
            _ki_ns_ctx['transform'] = function (body$29882, response$29883) {
                return function () {
                    return function (v$29888) {
                        var o$29890 = v$29888;
                        return function () {
                            if (o$29890.format === 'json' && response$29883.headers['content-type'] === o$29890.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$29883.body = edn.toJS(edn.parse(body$29882));
                                } catch (e$29898) {
                                    console.error('Exception: string isn\'t edn - ' + e$29898);
                                    console.error(body$29882);
                                }
                            }
                            ;
                            return function () {
                                if (truthy(o$29890.resmod)) {
                                    return {
                                        'code': response$29883.statusCode,
                                        'body': response$29883.body
                                    };
                                }
                                return response$29883;
                            }.call(this);
                        }.call(this);
                    }.call(this, response$29883.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$30130) {
                return toClj(data$30130);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$30139) {
                return merge(base, edenize(opts$30139), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$30166 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$30178) {
                        return function () {
                            return function (v$30183) {
                                var o$30185 = v$30183;
                                return assoc(o$30185, 'uri', str(get(o$30185, 'uri'), get(o$30185, 'url')), 'headers', hashMap('Accept', get(o$30185, 'accept'), 'Content-Type', get(o$30185, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$30178, 'pre'))) {
                                    return opts$30178;
                                }
                                return merge(base, edenize(opts$30178));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$30167 = 0;
                for (var a$30168 in fnmap$30166) {
                    max_arity$30167 = a$30168 > max_arity$30167 ? a$30168 : max_arity$30167;
                }
                fnmap$30166[null] = fnmap$30166[max_arity$30167];
                return function () {
                    var f$30283 = fnmap$30166[arguments.length] || fnmap$30166[null];
                    return f$30283.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$30285, cb$30286) {
                return function () {
                    return function (v$30300) {
                        var o$30302 = v$30300;
                        return function () {
                            if (truthy(falsey(cb$30286))) {
                                return request(o$30302);
                            }
                            return request(o$30302, function (err$30330, res$30331) {
                                return cb$30286(err$30330, res$30331);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$30285)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$30343 = {
                    1: function (cb$30352) {
                        return aliases(hashMap(), cb$30352);
                    },
                    2: function (o$30380, cb$30381) {
                        return req(merge(edenize(o$30380), hashMap('url', '/data/')), cb$30381);
                    }
                };
                var max_arity$30344 = 0;
                for (var a$30345 in fnmap$30343) {
                    max_arity$30344 = a$30345 > max_arity$30344 ? a$30345 : max_arity$30344;
                }
                fnmap$30343[null] = fnmap$30343[max_arity$30344];
                return function () {
                    var f$30411 = fnmap$30343[arguments.length] || fnmap$30343[null];
                    return f$30411.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$30413 = {
                    1: function (cb$30425) {
                        return cdb(get(base, 'db'), hashMap(), cb$30425);
                    },
                    2: function (name$30483, cb$30484) {
                        return cdb(name$30483, hashMap(), cb$30484);
                    },
                    3: function (name$30521, o$30522, cb$30523) {
                        return function () {
                            return function (v$30533) {
                                var o$30535 = v$30533;
                                return req(merge(o$30535, hashMap('url', str('/data/', get(o$30535, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$30521, '"}'))), cb$30523);
                            }.call(this, preopts(o$30522));
                        }.call(this);
                    }
                };
                var max_arity$30414 = 0;
                for (var a$30415 in fnmap$30413) {
                    max_arity$30414 = a$30415 > max_arity$30414 ? a$30415 : max_arity$30414;
                }
                fnmap$30413[null] = fnmap$30413[max_arity$30414];
                return function () {
                    var f$30601 = fnmap$30413[arguments.length] || fnmap$30413[null];
                    return f$30601.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$30603) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$30608) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$30613) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$30618) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$30623) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$30628 = {
                    2: function (query$30637, cb$30638) {
                        return q(query$30637, hashMap(), cb$30638);
                    },
                    3: function (query$30675, o$30676, cb$30677) {
                        return function () {
                            return function (v$30687) {
                                var o$30689 = v$30687;
                                return function (v$30700) {
                                    var data$30702 = v$30700;
                                    return function (v$30705) {
                                        var limit$30707 = v$30705;
                                        return function (v$30710) {
                                            var offset$30712 = v$30710;
                                            return req(merge(edenize(o$30689), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$30675, limit$30707, offset$30712, ' :args [{:db/alias "', get(o$30689, 'alias'), '/', get(o$30689, 'db'), '"}]}'))), cb$30677);
                                        }.call(this, function () {
                                            if (truthy(get(data$30702, 'offset'))) {
                                                return str(' :offset ', get(data$30702, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$30702, 'limit'))) {
                                            return str(' :limit ', get(data$30702, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$30689, 'data'));
                            }.call(this, preopts(o$30676));
                        }.call(this);
                    }
                };
                var max_arity$30629 = 0;
                for (var a$30630 in fnmap$30628) {
                    max_arity$30629 = a$30630 > max_arity$30629 ? a$30630 : max_arity$30629;
                }
                fnmap$30628[null] = fnmap$30628[max_arity$30629];
                return function () {
                    var f$30859 = fnmap$30628[arguments.length] || fnmap$30628[null];
                    return f$30859.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$30861) {
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