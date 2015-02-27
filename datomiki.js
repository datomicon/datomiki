_ki = {
    init: function (self$2676, ns_name$2677) {
        if (_ki.namespaces[ns_name$2677] === undefined) {
            _ki.namespaces[ns_name$2677] = { vars: {} };
        }
        self$2676._ki_ns_name = ns_name$2677;
        self$2676._ki_ns_ctx = self$2676;
        _ki.intern.bind(self$2676)(_ki.modules.core);
        _ki.intern.bind(self$2676)(_ki.modules.mori);
        _ki.intern.bind(self$2676)(_ki.modules);
        _ki.intern.bind(self$2676)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$2678) {
        for (var e$2679 in obj$2678) {
            this[e$2679] = obj$2678[e$2679];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$2680) {
                return x$2680 === false || x$2680 == null ? false : true;
            },
            falsey: function (x$2681) {
                return !truthy(x$2681);
            },
            not: function (x$2682) {
                return !truthy(x$2682);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$2683 = 0;
                for (var i$2684 = 0; i$2684 < arguments.length; i$2684++) {
                    res$2683 += arguments[i$2684];
                }
                return res$2683;
            },
            sub: function () {
                var res$2685 = arguments[0];
                for (var i$2686 = 1; i$2686 < arguments.length; i$2686++) {
                    res$2685 -= arguments[i$2686];
                }
                return res$2685;
            },
            mul: function () {
                var res$2687 = 1;
                for (var i$2688 = 0; i$2688 < arguments.length; i$2688++) {
                    res$2687 *= arguments[i$2688];
                }
                return res$2687;
            },
            div: function () {
                var res$2689 = arguments[0];
                for (var i$2690 = 1; i$2690 < arguments.length; i$2690++) {
                    res$2689 /= arguments[i$2690];
                }
                return res$2689;
            },
            mod: function (a$2691, b$2692) {
                return a$2691 % b$2692;
            },
            lt: function () {
                var res$2693 = true;
                for (var i$2694 = 0; i$2694 < arguments.length - 1; i$2694++) {
                    res$2693 = res$2693 && arguments[i$2694] < arguments[i$2694 + 1];
                    if (!res$2693)
                        break;
                }
                return res$2693;
            },
            gt: function () {
                var res$2695 = true;
                for (var i$2696 = 0; i$2696 < arguments.length - 1; i$2696++) {
                    res$2695 = res$2695 && arguments[i$2696] > arguments[i$2696 + 1];
                    if (!res$2695)
                        break;
                }
                return res$2695;
            },
            leq: function () {
                var res$2697 = true;
                for (var i$2698 = 0; i$2698 < arguments.length - 1; i$2698++) {
                    res$2697 = res$2697 && arguments[i$2698] <= arguments[i$2698 + 1];
                    if (!res$2697)
                        break;
                }
                return res$2697;
            },
            geq: function () {
                var res$2699 = true;
                for (var i$2700 = 0; i$2700 < arguments.length - 1; i$2700++) {
                    res$2699 = res$2699 && arguments[i$2700] >= arguments[i$2700 + 1];
                }
                return res$2699;
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
            } catch (e$2701) {
                try {
                    return require('mori');
                } catch (e$2702) {
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
            'db', d.cfg.rest.alias, // the default db
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
            _ki_ns_ctx['edenize'] = function (data$3020) {
                return toClj(data$3020);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$3029) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$3029));
                    } catch (e$3033) {
                        console.error('Exception: string isn\'t edn - ' + e$3033);
                        console.error(data$3029);
                        return data$3029;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$3036) {
                return merge(base, edenize(opts$3036), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$3063 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$3075) {
                        return function () {
                            return function (v$3080) {
                                var o$3082 = v$3080;
                                return assoc(o$3082, 'uri', str(get(o$3082, 'uri'), get(o$3082, 'url')), 'headers', hashMap('Accept', get(o$3082, 'accept'), 'Content-Type', get(o$3082, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$3075, 'pre'))) {
                                    return opts$3075;
                                }
                                return merge(base, edenize(opts$3075));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$3064 = 0;
                for (var a$3065 in fnmap$3063) {
                    max_arity$3064 = a$3065 > max_arity$3064 ? a$3065 : max_arity$3064;
                }
                fnmap$3063[null] = fnmap$3063[max_arity$3064];
                return function () {
                    var f$3180 = fnmap$3063[arguments.length] || fnmap$3063[null];
                    return f$3180.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$3182, o$3183) {
                return function () {
                    if (truthy(o$3183.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$3183.format))) {
                                return {
                                    'code': res$3182.statusCode,
                                    'body': o$3183.accept == 'application/edn' ? jsonize(res$3182.body) : res$3182.body
                                };
                            }
                            return hashMap(keyword('code'), res$3182.statusCode, keyword('body'), res$3182.body);
                        }.call(this);
                    }
                    return res$3182;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$3230, cb$3231) {
                return function () {
                    return function (v$3245) {
                        var o$3247 = v$3245;
                        return request(o$3247, function (err$3258, res$3259) {
                            return cb$3231(err$3258, response(res$3259, o$3247));
                        });
                    }.call(this, toJs(opts(o$3230)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$3278 = {
                    1: function (cb$3287) {
                        return aliases(hashMap(), cb$3287);
                    },
                    2: function (o$3315, cb$3316) {
                        return req(merge(edenize(o$3315), hashMap('url', '/data/')), cb$3316);
                    }
                };
                var max_arity$3279 = 0;
                for (var a$3280 in fnmap$3278) {
                    max_arity$3279 = a$3280 > max_arity$3279 ? a$3280 : max_arity$3279;
                }
                fnmap$3278[null] = fnmap$3278[max_arity$3279];
                return function () {
                    var f$3346 = fnmap$3278[arguments.length] || fnmap$3278[null];
                    return f$3346.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$3348 = {
                    1: function (cb$3360) {
                        return cdb(get(base, 'db'), hashMap(), cb$3360);
                    },
                    2: function (name$3418, cb$3419) {
                        return cdb(name$3418, hashMap(), cb$3419);
                    },
                    3: function (name$3456, o$3457, cb$3458) {
                        return function () {
                            return function (v$3468) {
                                var o$3470 = v$3468;
                                return req(merge(o$3470, hashMap('url', str('/data/', get(o$3470, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$3456, '"}'))), cb$3458);
                            }.call(this, preopts(o$3457));
                        }.call(this);
                    }
                };
                var max_arity$3349 = 0;
                for (var a$3350 in fnmap$3348) {
                    max_arity$3349 = a$3350 > max_arity$3349 ? a$3350 : max_arity$3349;
                }
                fnmap$3348[null] = fnmap$3348[max_arity$3349];
                return function () {
                    var f$3536 = fnmap$3348[arguments.length] || fnmap$3348[null];
                    return f$3536.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$3538) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$3543) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$3548) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$3553) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$3558) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$3563 = {
                    2: function (query$3572, cb$3573) {
                        return q(query$3572, hashMap(), cb$3573);
                    },
                    3: function (query$3610, o$3611, cb$3612) {
                        return function () {
                            return function (v$3622) {
                                var o$3624 = v$3622;
                                return function (v$3635) {
                                    var data$3637 = v$3635;
                                    return function (v$3640) {
                                        var limit$3642 = v$3640;
                                        return function (v$3645) {
                                            var offset$3647 = v$3645;
                                            return req(merge(edenize(o$3624), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$3610, limit$3642, offset$3647, ' :args [{:db/alias "', get(o$3624, 'alias'), '/', get(o$3624, 'db'), '"}]}'))), cb$3612);
                                        }.call(this, function () {
                                            if (truthy(get(data$3637, 'offset'))) {
                                                return str(' :offset ', get(data$3637, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$3637, 'limit'))) {
                                            return str(' :limit ', get(data$3637, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$3624, 'data'));
                            }.call(this, preopts(o$3611));
                        }.call(this);
                    }
                };
                var max_arity$3564 = 0;
                for (var a$3565 in fnmap$3563) {
                    max_arity$3564 = a$3565 > max_arity$3564 ? a$3565 : max_arity$3564;
                }
                fnmap$3563[null] = fnmap$3563[max_arity$3564];
                return function () {
                    var f$3794 = fnmap$3563[arguments.length] || fnmap$3563[null];
                    return f$3794.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$3796) {
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