//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$30878, ns_name$30879) {
        if (_ki.namespaces[ns_name$30879] === undefined) {
            _ki.namespaces[ns_name$30879] = { vars: {} };
        }
        self$30878._ki_ns_name = ns_name$30879;
        self$30878._ki_ns_ctx = self$30878;
        _ki.intern.bind(self$30878)(_ki.modules.core);
        _ki.intern.bind(self$30878)(_ki.modules.mori);
        _ki.intern.bind(self$30878)(_ki.modules);
        _ki.intern.bind(self$30878)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$30880) {
        for (var e$30881 in obj$30880) {
            this[e$30881] = obj$30880[e$30881];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$30882) {
                return x$30882 === false || x$30882 == null ? false : true;
            },
            falsey: function (x$30883) {
                return !truthy(x$30883);
            },
            not: function (x$30884) {
                return !truthy(x$30884);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$30885 = 0;
                for (var i$30886 = 0; i$30886 < arguments.length; i$30886++) {
                    res$30885 += arguments[i$30886];
                }
                return res$30885;
            },
            sub: function () {
                var res$30887 = arguments[0];
                for (var i$30888 = 1; i$30888 < arguments.length; i$30888++) {
                    res$30887 -= arguments[i$30888];
                }
                return res$30887;
            },
            mul: function () {
                var res$30889 = 1;
                for (var i$30890 = 0; i$30890 < arguments.length; i$30890++) {
                    res$30889 *= arguments[i$30890];
                }
                return res$30889;
            },
            div: function () {
                var res$30891 = arguments[0];
                for (var i$30892 = 1; i$30892 < arguments.length; i$30892++) {
                    res$30891 /= arguments[i$30892];
                }
                return res$30891;
            },
            mod: function (a$30893, b$30894) {
                return a$30893 % b$30894;
            },
            lt: function () {
                var res$30895 = true;
                for (var i$30896 = 0; i$30896 < arguments.length - 1; i$30896++) {
                    res$30895 = res$30895 && arguments[i$30896] < arguments[i$30896 + 1];
                    if (!res$30895)
                        break;
                }
                return res$30895;
            },
            gt: function () {
                var res$30897 = true;
                for (var i$30898 = 0; i$30898 < arguments.length - 1; i$30898++) {
                    res$30897 = res$30897 && arguments[i$30898] > arguments[i$30898 + 1];
                    if (!res$30897)
                        break;
                }
                return res$30897;
            },
            leq: function () {
                var res$30899 = true;
                for (var i$30900 = 0; i$30900 < arguments.length - 1; i$30900++) {
                    res$30899 = res$30899 && arguments[i$30900] <= arguments[i$30900 + 1];
                    if (!res$30899)
                        break;
                }
                return res$30899;
            },
            geq: function () {
                var res$30901 = true;
                for (var i$30902 = 0; i$30902 < arguments.length - 1; i$30902++) {
                    res$30901 = res$30901 && arguments[i$30902] >= arguments[i$30902 + 1];
                }
                return res$30901;
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
            } catch (e$30903) {
                try {
                    return require('mori');
                } catch (e$30904) {
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
            _ki_ns_ctx['transform'] = function (body$31014, response$31015) {
                return function () {
                    return function (v$31020) {
                        var o$31022 = v$31020;
                        return function () {
                            if (o$31022.format === 'json' && response$31015.headers['content-type'] === o$31022.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$31015.body = edn.toJS(edn.parse(body$31014));
                                } catch (e$31030) {
                                    console.error('Exception: string isn\'t edn - ' + e$31030);
                                    console.error(body$31014);
                                }
                            }
                            ;
                            return function () {
                                if (truthy(o$31022.resmod)) {
                                    return {
                                        'code': response$31015.statusCode,
                                        'body': response$31015.body
                                    };
                                }
                                return response$31015;
                            }.call(this);
                        }.call(this);
                    }.call(this, response$31015.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$31262) {
                return toClj(data$31262);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$31271) {
                return merge(base, edenize(opts$31271), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$31298 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$31310) {
                        return function () {
                            return function (v$31315) {
                                var o$31317 = v$31315;
                                return assoc(o$31317, 'uri', str(get(o$31317, 'uri'), get(o$31317, 'url')), 'headers', hashMap('Accept', get(o$31317, 'accept'), 'Content-Type', get(o$31317, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$31310, 'pre'))) {
                                    return opts$31310;
                                }
                                return merge(base, edenize(opts$31310));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$31299 = 0;
                for (var a$31300 in fnmap$31298) {
                    max_arity$31299 = a$31300 > max_arity$31299 ? a$31300 : max_arity$31299;
                }
                fnmap$31298[null] = fnmap$31298[max_arity$31299];
                return function () {
                    var f$31415 = fnmap$31298[arguments.length] || fnmap$31298[null];
                    return f$31415.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$31417, cb$31418) {
                return function () {
                    return function (v$31432) {
                        var o$31434 = v$31432;
                        return function () {
                            if (truthy(falsey(cb$31418))) {
                                return request(o$31434);
                            }
                            return request(o$31434, function (err$31462, res$31463) {
                                return cb$31418(err$31462, res$31463);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$31417)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$31475 = {
                    1: function (cb$31484) {
                        return aliases(hashMap(), cb$31484);
                    },
                    2: function (o$31512, cb$31513) {
                        return req(merge(edenize(o$31512), hashMap('url', '/data/')), cb$31513);
                    }
                };
                var max_arity$31476 = 0;
                for (var a$31477 in fnmap$31475) {
                    max_arity$31476 = a$31477 > max_arity$31476 ? a$31477 : max_arity$31476;
                }
                fnmap$31475[null] = fnmap$31475[max_arity$31476];
                return function () {
                    var f$31543 = fnmap$31475[arguments.length] || fnmap$31475[null];
                    return f$31543.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$31545 = {
                    1: function (cb$31557) {
                        return cdb(get(base, 'db'), hashMap(), cb$31557);
                    },
                    2: function (name$31615, cb$31616) {
                        return cdb(name$31615, hashMap(), cb$31616);
                    },
                    3: function (name$31653, o$31654, cb$31655) {
                        return function () {
                            return function (v$31665) {
                                var o$31667 = v$31665;
                                return req(merge(o$31667, hashMap('url', str('/data/', get(o$31667, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$31653, '"}'))), cb$31655);
                            }.call(this, preopts(o$31654));
                        }.call(this);
                    }
                };
                var max_arity$31546 = 0;
                for (var a$31547 in fnmap$31545) {
                    max_arity$31546 = a$31547 > max_arity$31546 ? a$31547 : max_arity$31546;
                }
                fnmap$31545[null] = fnmap$31545[max_arity$31546];
                return function () {
                    var f$31733 = fnmap$31545[arguments.length] || fnmap$31545[null];
                    return f$31733.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$31735) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$31740) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$31745) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$31750) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$31755) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$31760 = {
                    2: function (query$31769, cb$31770) {
                        return q(query$31769, hashMap(), cb$31770);
                    },
                    3: function (query$31807, o$31808, cb$31809) {
                        return function () {
                            return function (v$31819) {
                                var o$31821 = v$31819;
                                return function (v$31832) {
                                    var data$31834 = v$31832;
                                    return function (v$31837) {
                                        var limit$31839 = v$31837;
                                        return function (v$31842) {
                                            var offset$31844 = v$31842;
                                            return req(merge(edenize(o$31821), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$31807, limit$31839, offset$31844, ' :args [{:db/alias "', get(o$31821, 'alias'), '/', get(o$31821, 'db'), '"}]}'))), cb$31809);
                                        }.call(this, function () {
                                            if (truthy(get(data$31834, 'offset'))) {
                                                return str(' :offset ', get(data$31834, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$31834, 'limit'))) {
                                            return str(' :limit ', get(data$31834, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$31821, 'data'));
                            }.call(this, preopts(o$31808));
                        }.call(this);
                    }
                };
                var max_arity$31761 = 0;
                for (var a$31762 in fnmap$31760) {
                    max_arity$31761 = a$31762 > max_arity$31761 ? a$31762 : max_arity$31761;
                }
                fnmap$31760[null] = fnmap$31760[max_arity$31761];
                return function () {
                    var f$31991 = fnmap$31760[arguments.length] || fnmap$31760[null];
                    return f$31991.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$31993) {
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