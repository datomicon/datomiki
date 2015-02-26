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
            'db', 'test', // the name of the db
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
            _ki_ns_ctx['edenize'] = function (data$3024) {
                return toClj(data$3024);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$3033) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$3033));
                    } catch (e$3037) {
                        console.error('Exception: string isn\'t edn - ' + e$3037);
                        console.error(data$3033);
                        return data$3033;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$3040) {
                return merge(base, edenize(opts$3040), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$3067 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$3079) {
                        return function () {
                            return function (v$3084) {
                                var o$3086 = v$3084;
                                return assoc(o$3086, 'uri', str(get(o$3086, 'uri'), get(o$3086, 'url')), 'headers', hashMap('Accept', get(o$3086, 'accept'), 'Content-Type', get(o$3086, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$3079, 'pre'))) {
                                    return opts$3079;
                                }
                                return merge(base, edenize(opts$3079));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$3068 = 0;
                for (var a$3069 in fnmap$3067) {
                    max_arity$3068 = a$3069 > max_arity$3068 ? a$3069 : max_arity$3068;
                }
                fnmap$3067[null] = fnmap$3067[max_arity$3068];
                return function () {
                    var f$3184 = fnmap$3067[arguments.length] || fnmap$3067[null];
                    return f$3184.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$3186, o$3187) {
                return function () {
                    if (truthy(o$3187.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$3187.format))) {
                                return {
                                    'code': res$3186.statusCode,
                                    'body': o$3187.accept == 'application/edn' ? jsonize(res$3186.body) : res$3186.body
                                };
                            }
                            return hashMap(keyword('code'), res$3186.statusCode, keyword('body'), res$3186.body);
                        }.call(this);
                    }
                    return res$3186;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$3234, cb$3235) {
                return function () {
                    return function (v$3249) {
                        var o$3251 = v$3249;
                        return request(o$3251, function (err$3262, res$3263) {
                            return cb$3235(err$3262, response(res$3263, o$3251));
                        });
                    }.call(this, toJs(opts(o$3234)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$3282 = {
                    1: function (cb$3291) {
                        return aliases(hashMap(), cb$3291);
                    },
                    2: function (o$3319, cb$3320) {
                        return req(merge(edenize(o$3319), hashMap('url', '/data/')), cb$3320);
                    }
                };
                var max_arity$3283 = 0;
                for (var a$3284 in fnmap$3282) {
                    max_arity$3283 = a$3284 > max_arity$3283 ? a$3284 : max_arity$3283;
                }
                fnmap$3282[null] = fnmap$3282[max_arity$3283];
                return function () {
                    var f$3350 = fnmap$3282[arguments.length] || fnmap$3282[null];
                    return f$3350.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$3352 = {
                    1: function (cb$3364) {
                        return cdb(get(base, 'db'), hashMap(), cb$3364);
                    },
                    2: function (name$3422, cb$3423) {
                        return cdb(name$3422, hashMap(), cb$3423);
                    },
                    3: function (name$3460, o$3461, cb$3462) {
                        return function () {
                            return function (v$3472) {
                                var o$3474 = v$3472;
                                return req(merge(o$3474, hashMap('url', str('/data/', get(o$3474, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$3460, '"}'))), cb$3462);
                            }.call(this, preopts(o$3461));
                        }.call(this);
                    }
                };
                var max_arity$3353 = 0;
                for (var a$3354 in fnmap$3352) {
                    max_arity$3353 = a$3354 > max_arity$3353 ? a$3354 : max_arity$3353;
                }
                fnmap$3352[null] = fnmap$3352[max_arity$3353];
                return function () {
                    var f$3540 = fnmap$3352[arguments.length] || fnmap$3352[null];
                    return f$3540.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$3542) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$3547) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$3552) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$3557) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$3562) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$3567 = {
                    2: function (query$3576, cb$3577) {
                        return q(query$3576, hashMap(), cb$3577);
                    },
                    3: function (query$3614, o$3615, cb$3616) {
                        return function () {
                            return function (v$3626) {
                                var o$3628 = v$3626;
                                return function (v$3639) {
                                    var data$3641 = v$3639;
                                    return function (v$3644) {
                                        var limit$3646 = v$3644;
                                        return function (v$3649) {
                                            var offset$3651 = v$3649;
                                            return req(merge(edenize(o$3628), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$3614, limit$3646, offset$3651, ' :args [{:db/alias "', get(o$3628, 'alias'), '/', get(o$3628, 'db'), '"}]}'))), cb$3616);
                                        }.call(this, function () {
                                            if (truthy(get(data$3641, 'offset'))) {
                                                return str(' :offset ', get(data$3641, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$3641, 'limit'))) {
                                            return str(' :limit ', get(data$3641, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$3628, 'data'));
                            }.call(this, preopts(o$3615));
                        }.call(this);
                    }
                };
                var max_arity$3568 = 0;
                for (var a$3569 in fnmap$3567) {
                    max_arity$3568 = a$3569 > max_arity$3568 ? a$3569 : max_arity$3568;
                }
                fnmap$3567[null] = fnmap$3567[max_arity$3568];
                return function () {
                    var f$3798 = fnmap$3567[arguments.length] || fnmap$3567[null];
                    return f$3798.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$3800) {
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