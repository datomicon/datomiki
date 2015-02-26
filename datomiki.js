_ki = {
    init: function (self$49686, ns_name$49687) {
        if (_ki.namespaces[ns_name$49687] === undefined) {
            _ki.namespaces[ns_name$49687] = { vars: {} };
        }
        self$49686._ki_ns_name = ns_name$49687;
        self$49686._ki_ns_ctx = self$49686;
        _ki.intern.bind(self$49686)(_ki.modules.core);
        _ki.intern.bind(self$49686)(_ki.modules.mori);
        _ki.intern.bind(self$49686)(_ki.modules);
        _ki.intern.bind(self$49686)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$49688) {
        for (var e$49689 in obj$49688) {
            this[e$49689] = obj$49688[e$49689];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$49690) {
                return x$49690 === false || x$49690 == null ? false : true;
            },
            falsey: function (x$49691) {
                return !truthy(x$49691);
            },
            not: function (x$49692) {
                return !truthy(x$49692);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$49693 = 0;
                for (var i$49694 = 0; i$49694 < arguments.length; i$49694++) {
                    res$49693 += arguments[i$49694];
                }
                return res$49693;
            },
            sub: function () {
                var res$49695 = arguments[0];
                for (var i$49696 = 1; i$49696 < arguments.length; i$49696++) {
                    res$49695 -= arguments[i$49696];
                }
                return res$49695;
            },
            mul: function () {
                var res$49697 = 1;
                for (var i$49698 = 0; i$49698 < arguments.length; i$49698++) {
                    res$49697 *= arguments[i$49698];
                }
                return res$49697;
            },
            div: function () {
                var res$49699 = arguments[0];
                for (var i$49700 = 1; i$49700 < arguments.length; i$49700++) {
                    res$49699 /= arguments[i$49700];
                }
                return res$49699;
            },
            mod: function (a$49701, b$49702) {
                return a$49701 % b$49702;
            },
            lt: function () {
                var res$49703 = true;
                for (var i$49704 = 0; i$49704 < arguments.length - 1; i$49704++) {
                    res$49703 = res$49703 && arguments[i$49704] < arguments[i$49704 + 1];
                    if (!res$49703)
                        break;
                }
                return res$49703;
            },
            gt: function () {
                var res$49705 = true;
                for (var i$49706 = 0; i$49706 < arguments.length - 1; i$49706++) {
                    res$49705 = res$49705 && arguments[i$49706] > arguments[i$49706 + 1];
                    if (!res$49705)
                        break;
                }
                return res$49705;
            },
            leq: function () {
                var res$49707 = true;
                for (var i$49708 = 0; i$49708 < arguments.length - 1; i$49708++) {
                    res$49707 = res$49707 && arguments[i$49708] <= arguments[i$49708 + 1];
                    if (!res$49707)
                        break;
                }
                return res$49707;
            },
            geq: function () {
                var res$49709 = true;
                for (var i$49710 = 0; i$49710 < arguments.length - 1; i$49710++) {
                    res$49709 = res$49709 && arguments[i$49710] >= arguments[i$49710 + 1];
                }
                return res$49709;
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
            } catch (e$49711) {
                try {
                    return require('mori');
                } catch (e$49712) {
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
            _ki_ns_ctx['request'] = require('request');
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
            _ki_ns_ctx['base'] = hashMap('uri', d.cfg.rest.uri, // the url will be appended to it
            'alias', d.cfg.rest.alias, // the storage alias
            'named', 'test', // the name of the db
            'db', '', // a value for :db/alias (assembled late in the req, so, useless?)
            'url', '/', 'basis', '-', // the basis-t
            'method', 'get', 'data', hashMap(), 'content-type', 'application/edn', // could be application/x-www-form-urlencoded
            'accept', 'application/edn', 'format', 'json', // anything but json is left as is - a string
            'pre', false, // true if preopt was called, usually true
            'resmod', true);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$50058) {
                return toClj(data$50058);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$50067) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$50067));
                    } catch (e$50071) {
                        console.error('Exception: string isn\'t edn - ' + e$50071);
                        console.error(data$50067);
                        return data$50067;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$50074) {
                return merge(base, edenize(opts$50074), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$50101 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$50113) {
                        return function () {
                            return function (v$50118) {
                                var o$50120 = v$50118;
                                return assoc(o$50120, 'db', str(get(o$50120, 'alias'), '/', get(o$50120, 'named')), 'uri', str(get(o$50120, 'uri'), get(o$50120, 'url')), 'headers', hashMap('Accept', get(o$50120, 'accept'), 'Content-Type', get(o$50120, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$50113, 'pre'))) {
                                    return opts$50113;
                                }
                                return merge(base, edenize(opts$50113));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$50102 = 0;
                for (var a$50103 in fnmap$50101) {
                    max_arity$50102 = a$50103 > max_arity$50102 ? a$50103 : max_arity$50102;
                }
                fnmap$50101[null] = fnmap$50101[max_arity$50102];
                return function () {
                    var f$50248 = fnmap$50101[arguments.length] || fnmap$50101[null];
                    return f$50248.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$50250, o$50251) {
                return function () {
                    if (truthy(o$50251.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$50251.format))) {
                                return {
                                    'code': res$50250.statusCode,
                                    'body': o$50251.accept == 'application/edn' ? jsonize(res$50250.body) : res$50250.body
                                };
                            }
                            return hashMap(keyword('code'), res$50250.statusCode, keyword('body'), res$50250.body);
                        }.call(this);
                    }
                    return res$50250;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$50298, cb$50299) {
                return function () {
                    return function (v$50313) {
                        var o$50315 = v$50313;
                        return request(o$50315, function (err$50326, res$50327) {
                            return cb$50299(err$50326, response(res$50327, o$50315));
                        });
                    }.call(this, toJs(opts(o$50298)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$50346 = {
                    1: function (cb$50355) {
                        return aliases(hashMap(), cb$50355);
                    },
                    2: function (o$50383, cb$50384) {
                        return req(merge(edenize(o$50383), hashMap('url', '/data/')), cb$50384);
                    }
                };
                var max_arity$50347 = 0;
                for (var a$50348 in fnmap$50346) {
                    max_arity$50347 = a$50348 > max_arity$50347 ? a$50348 : max_arity$50347;
                }
                fnmap$50346[null] = fnmap$50346[max_arity$50347];
                return function () {
                    var f$50414 = fnmap$50346[arguments.length] || fnmap$50346[null];
                    return f$50414.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$50416 = {
                    1: function (cb$50428) {
                        return cdb(get(base, 'named'), hashMap(), cb$50428);
                    },
                    2: function (name$50486, cb$50487) {
                        return cdb(name$50486, hashMap(), cb$50487);
                    },
                    3: function (name$50524, o$50525, cb$50526) {
                        return function () {
                            return function (v$50536) {
                                var o$50538 = v$50536;
                                return req(merge(o$50538, hashMap('url', str('/data/', get(base, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$50524, '"}'))), cb$50526);
                            }.call(this, preopts(o$50525));
                        }.call(this);
                    }
                };
                var max_arity$50417 = 0;
                for (var a$50418 in fnmap$50416) {
                    max_arity$50417 = a$50418 > max_arity$50417 ? a$50418 : max_arity$50417;
                }
                fnmap$50416[null] = fnmap$50416[max_arity$50417];
                return function () {
                    var f$50604 = fnmap$50416[arguments.length] || fnmap$50416[null];
                    return f$50604.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$50606) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$50611) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$50616) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$50621) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$50626) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$50631 = {
                    2: function (query$50640, cb$50641) {
                        return q(query$50640, hashMap(), cb$50641);
                    },
                    3: function (query$50678, o$50679, cb$50680) {
                        return function () {
                            return function (v$50690) {
                                var o$50692 = v$50690;
                                return req(merge(edenize(o$50692), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$50678, ' :args [{:db/alias "', get(o$50692, 'alias'), '/', get(o$50692, 'named'), '"}]}'))), cb$50680);
                            }.call(this, preopts(o$50679));
                        }.call(this);
                    }
                };
                var max_arity$50632 = 0;
                for (var a$50633 in fnmap$50631) {
                    max_arity$50632 = a$50633 > max_arity$50632 ? a$50633 : max_arity$50632;
                }
                fnmap$50631[null] = fnmap$50631[max_arity$50632];
                return function () {
                    var f$50771 = fnmap$50631[arguments.length] || fnmap$50631[null];
                    return f$50771.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$50773) {
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