_ki = {
    init: function (self$62982, ns_name$62983) {
        if (_ki.namespaces[ns_name$62983] === undefined) {
            _ki.namespaces[ns_name$62983] = { vars: {} };
        }
        self$62982._ki_ns_name = ns_name$62983;
        self$62982._ki_ns_ctx = self$62982;
        _ki.intern.bind(self$62982)(_ki.modules.core);
        _ki.intern.bind(self$62982)(_ki.modules.mori);
        _ki.intern.bind(self$62982)(_ki.modules);
        _ki.intern.bind(self$62982)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$62984) {
        for (var e$62985 in obj$62984) {
            this[e$62985] = obj$62984[e$62985];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$62986) {
                return x$62986 === false || x$62986 == null ? false : true;
            },
            falsey: function (x$62987) {
                return !truthy(x$62987);
            },
            not: function (x$62988) {
                return !truthy(x$62988);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$62989 = 0;
                for (var i$62990 = 0; i$62990 < arguments.length; i$62990++) {
                    res$62989 += arguments[i$62990];
                }
                return res$62989;
            },
            sub: function () {
                var res$62991 = arguments[0];
                for (var i$62992 = 1; i$62992 < arguments.length; i$62992++) {
                    res$62991 -= arguments[i$62992];
                }
                return res$62991;
            },
            mul: function () {
                var res$62993 = 1;
                for (var i$62994 = 0; i$62994 < arguments.length; i$62994++) {
                    res$62993 *= arguments[i$62994];
                }
                return res$62993;
            },
            div: function () {
                var res$62995 = arguments[0];
                for (var i$62996 = 1; i$62996 < arguments.length; i$62996++) {
                    res$62995 /= arguments[i$62996];
                }
                return res$62995;
            },
            mod: function (a$62997, b$62998) {
                return a$62997 % b$62998;
            },
            lt: function () {
                var res$62999 = true;
                for (var i$63000 = 0; i$63000 < arguments.length - 1; i$63000++) {
                    res$62999 = res$62999 && arguments[i$63000] < arguments[i$63000 + 1];
                    if (!res$62999)
                        break;
                }
                return res$62999;
            },
            gt: function () {
                var res$63001 = true;
                for (var i$63002 = 0; i$63002 < arguments.length - 1; i$63002++) {
                    res$63001 = res$63001 && arguments[i$63002] > arguments[i$63002 + 1];
                    if (!res$63001)
                        break;
                }
                return res$63001;
            },
            leq: function () {
                var res$63003 = true;
                for (var i$63004 = 0; i$63004 < arguments.length - 1; i$63004++) {
                    res$63003 = res$63003 && arguments[i$63004] <= arguments[i$63004 + 1];
                    if (!res$63003)
                        break;
                }
                return res$63003;
            },
            geq: function () {
                var res$63005 = true;
                for (var i$63006 = 0; i$63006 < arguments.length - 1; i$63006++) {
                    res$63005 = res$63005 && arguments[i$63006] >= arguments[i$63006 + 1];
                }
                return res$63005;
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
            } catch (e$63007) {
                try {
                    return require('mori');
                } catch (e$63008) {
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
            _ki_ns_ctx['edenize'] = function (data$63330) {
                return toClj(data$63330);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$63339) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$63339));
                    } catch (e$63343) {
                        console.error('Exception: string isn\'t edn - ' + e$63343);
                        console.error(data$63339);
                        return data$63339;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$63346) {
                return merge(base, edenize(opts$63346), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$63373 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$63385) {
                        return function () {
                            return function (v$63390) {
                                var o$63392 = v$63390;
                                return assoc(o$63392, 'uri', str(get(o$63392, 'uri'), get(o$63392, 'url')), 'headers', hashMap('Accept', get(o$63392, 'accept'), 'Content-Type', get(o$63392, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$63385, 'pre'))) {
                                    return opts$63385;
                                }
                                return merge(base, edenize(opts$63385));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$63374 = 0;
                for (var a$63375 in fnmap$63373) {
                    max_arity$63374 = a$63375 > max_arity$63374 ? a$63375 : max_arity$63374;
                }
                fnmap$63373[null] = fnmap$63373[max_arity$63374];
                return function () {
                    var f$63490 = fnmap$63373[arguments.length] || fnmap$63373[null];
                    return f$63490.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$63492, o$63493) {
                return function () {
                    if (truthy(o$63493.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$63493.format))) {
                                return {
                                    'code': res$63492.statusCode,
                                    'body': o$63493.accept == 'application/edn' ? jsonize(res$63492.body) : res$63492.body
                                };
                            }
                            return hashMap(keyword('code'), res$63492.statusCode, keyword('body'), res$63492.body);
                        }.call(this);
                    }
                    return res$63492;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$63540, cb$63541) {
                return function () {
                    return function (v$63555) {
                        var o$63557 = v$63555;
                        return request(o$63557, function (err$63568, res$63569) {
                            return cb$63541(err$63568, response(res$63569, o$63557));
                        });
                    }.call(this, toJs(opts(o$63540)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$63588 = {
                    1: function (cb$63597) {
                        return aliases(hashMap(), cb$63597);
                    },
                    2: function (o$63625, cb$63626) {
                        return req(merge(edenize(o$63625), hashMap('url', '/data/')), cb$63626);
                    }
                };
                var max_arity$63589 = 0;
                for (var a$63590 in fnmap$63588) {
                    max_arity$63589 = a$63590 > max_arity$63589 ? a$63590 : max_arity$63589;
                }
                fnmap$63588[null] = fnmap$63588[max_arity$63589];
                return function () {
                    var f$63656 = fnmap$63588[arguments.length] || fnmap$63588[null];
                    return f$63656.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$63658 = {
                    1: function (cb$63670) {
                        return cdb(get(base, 'db'), hashMap(), cb$63670);
                    },
                    2: function (name$63728, cb$63729) {
                        return cdb(name$63728, hashMap(), cb$63729);
                    },
                    3: function (name$63766, o$63767, cb$63768) {
                        return function () {
                            return function (v$63778) {
                                var o$63780 = v$63778;
                                return req(merge(o$63780, hashMap('url', str('/data/', get(base, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$63766, '"}'))), cb$63768);
                            }.call(this, preopts(o$63767));
                        }.call(this);
                    }
                };
                var max_arity$63659 = 0;
                for (var a$63660 in fnmap$63658) {
                    max_arity$63659 = a$63660 > max_arity$63659 ? a$63660 : max_arity$63659;
                }
                fnmap$63658[null] = fnmap$63658[max_arity$63659];
                return function () {
                    var f$63846 = fnmap$63658[arguments.length] || fnmap$63658[null];
                    return f$63846.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$63848) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$63853) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$63858) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$63863) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$63868) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$63873 = {
                    2: function (query$63882, cb$63883) {
                        return q(query$63882, hashMap(), cb$63883);
                    },
                    3: function (query$63920, o$63921, cb$63922) {
                        return function () {
                            return function (v$63932) {
                                var o$63934 = v$63932;
                                return function (v$63945) {
                                    var data$63947 = v$63945;
                                    return function (v$63950) {
                                        var limit$63952 = v$63950;
                                        return function (v$63955) {
                                            var offset$63957 = v$63955;
                                            return req(merge(edenize(o$63934), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$63920, limit$63952, offset$63957, ' :args [{:db/alias "', get(o$63934, 'alias'), '/', get(o$63934, 'db'), '"}]}'))), cb$63922);
                                        }.call(this, function () {
                                            if (truthy(get(data$63947, 'offset'))) {
                                                return str(' :offset ', get(data$63947, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$63947, 'limit'))) {
                                            return str(' :limit ', get(data$63947, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$63934, 'data'));
                            }.call(this, preopts(o$63921));
                        }.call(this);
                    }
                };
                var max_arity$63874 = 0;
                for (var a$63875 in fnmap$63873) {
                    max_arity$63874 = a$63875 > max_arity$63874 ? a$63875 : max_arity$63874;
                }
                fnmap$63873[null] = fnmap$63873[max_arity$63874];
                return function () {
                    var f$64104 = fnmap$63873[arguments.length] || fnmap$63873[null];
                    return f$64104.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$64106) {
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