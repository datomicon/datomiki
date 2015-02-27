//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$10643, ns_name$10644) {
        if (_ki.namespaces[ns_name$10644] === undefined) {
            _ki.namespaces[ns_name$10644] = { vars: {} };
        }
        self$10643._ki_ns_name = ns_name$10644;
        self$10643._ki_ns_ctx = self$10643;
        _ki.intern.bind(self$10643)(_ki.modules.core);
        _ki.intern.bind(self$10643)(_ki.modules.mori);
        _ki.intern.bind(self$10643)(_ki.modules);
        _ki.intern.bind(self$10643)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$10645) {
        for (var e$10646 in obj$10645) {
            this[e$10646] = obj$10645[e$10646];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$10647) {
                return x$10647 === false || x$10647 == null ? false : true;
            },
            falsey: function (x$10648) {
                return !truthy(x$10648);
            },
            not: function (x$10649) {
                return !truthy(x$10649);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$10650 = 0;
                for (var i$10651 = 0; i$10651 < arguments.length; i$10651++) {
                    res$10650 += arguments[i$10651];
                }
                return res$10650;
            },
            sub: function () {
                var res$10652 = arguments[0];
                for (var i$10653 = 1; i$10653 < arguments.length; i$10653++) {
                    res$10652 -= arguments[i$10653];
                }
                return res$10652;
            },
            mul: function () {
                var res$10654 = 1;
                for (var i$10655 = 0; i$10655 < arguments.length; i$10655++) {
                    res$10654 *= arguments[i$10655];
                }
                return res$10654;
            },
            div: function () {
                var res$10656 = arguments[0];
                for (var i$10657 = 1; i$10657 < arguments.length; i$10657++) {
                    res$10656 /= arguments[i$10657];
                }
                return res$10656;
            },
            mod: function (a$10658, b$10659) {
                return a$10658 % b$10659;
            },
            lt: function () {
                var res$10660 = true;
                for (var i$10661 = 0; i$10661 < arguments.length - 1; i$10661++) {
                    res$10660 = res$10660 && arguments[i$10661] < arguments[i$10661 + 1];
                    if (!res$10660)
                        break;
                }
                return res$10660;
            },
            gt: function () {
                var res$10662 = true;
                for (var i$10663 = 0; i$10663 < arguments.length - 1; i$10663++) {
                    res$10662 = res$10662 && arguments[i$10663] > arguments[i$10663 + 1];
                    if (!res$10662)
                        break;
                }
                return res$10662;
            },
            leq: function () {
                var res$10664 = true;
                for (var i$10665 = 0; i$10665 < arguments.length - 1; i$10665++) {
                    res$10664 = res$10664 && arguments[i$10665] <= arguments[i$10665 + 1];
                    if (!res$10664)
                        break;
                }
                return res$10664;
            },
            geq: function () {
                var res$10666 = true;
                for (var i$10667 = 0; i$10667 < arguments.length - 1; i$10667++) {
                    res$10666 = res$10666 && arguments[i$10667] >= arguments[i$10667 + 1];
                }
                return res$10666;
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
            } catch (e$10668) {
                try {
                    return require('mori');
                } catch (e$10669) {
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
            _ki_ns_ctx['edenize'] = function (data$10987) {
                return toClj(data$10987);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$10996) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$10996));
                    } catch (e$11000) {
                        console.error('Exception: string isn\'t edn - ' + e$11000);
                        console.error(data$10996);
                        return data$10996;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$11003) {
                return merge(base, edenize(opts$11003), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$11030 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$11042) {
                        return function () {
                            return function (v$11047) {
                                var o$11049 = v$11047;
                                return assoc(o$11049, 'uri', str(get(o$11049, 'uri'), get(o$11049, 'url')), 'headers', hashMap('Accept', get(o$11049, 'accept'), 'Content-Type', get(o$11049, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$11042, 'pre'))) {
                                    return opts$11042;
                                }
                                return merge(base, edenize(opts$11042));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$11031 = 0;
                for (var a$11032 in fnmap$11030) {
                    max_arity$11031 = a$11032 > max_arity$11031 ? a$11032 : max_arity$11031;
                }
                fnmap$11030[null] = fnmap$11030[max_arity$11031];
                return function () {
                    var f$11147 = fnmap$11030[arguments.length] || fnmap$11030[null];
                    return f$11147.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$11149, o$11150) {
                return function () {
                    if (truthy(o$11150.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$11150.format))) {
                                return {
                                    'code': res$11149.statusCode,
                                    'body': o$11150.accept == 'application/edn' ? jsonize(res$11149.body) : res$11149.body
                                };
                            }
                            return hashMap(keyword('code'), res$11149.statusCode, keyword('body'), res$11149.body);
                        }.call(this);
                    }
                    return res$11149;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$11197, cb$11198) {
                return function () {
                    return function (v$11212) {
                        var o$11214 = v$11212;
                        return request(o$11214, function (err$11225, res$11226) {
                            return cb$11198(err$11225, response(res$11226, o$11214));
                        });
                    }.call(this, toJs(opts(o$11197)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$11245 = {
                    1: function (cb$11254) {
                        return aliases(hashMap(), cb$11254);
                    },
                    2: function (o$11282, cb$11283) {
                        return req(merge(edenize(o$11282), hashMap('url', '/data/')), cb$11283);
                    }
                };
                var max_arity$11246 = 0;
                for (var a$11247 in fnmap$11245) {
                    max_arity$11246 = a$11247 > max_arity$11246 ? a$11247 : max_arity$11246;
                }
                fnmap$11245[null] = fnmap$11245[max_arity$11246];
                return function () {
                    var f$11313 = fnmap$11245[arguments.length] || fnmap$11245[null];
                    return f$11313.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$11315 = {
                    1: function (cb$11327) {
                        return cdb(get(base, 'db'), hashMap(), cb$11327);
                    },
                    2: function (name$11385, cb$11386) {
                        return cdb(name$11385, hashMap(), cb$11386);
                    },
                    3: function (name$11423, o$11424, cb$11425) {
                        return function () {
                            return function (v$11435) {
                                var o$11437 = v$11435;
                                return req(merge(o$11437, hashMap('url', str('/data/', get(o$11437, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$11423, '"}'))), cb$11425);
                            }.call(this, preopts(o$11424));
                        }.call(this);
                    }
                };
                var max_arity$11316 = 0;
                for (var a$11317 in fnmap$11315) {
                    max_arity$11316 = a$11317 > max_arity$11316 ? a$11317 : max_arity$11316;
                }
                fnmap$11315[null] = fnmap$11315[max_arity$11316];
                return function () {
                    var f$11503 = fnmap$11315[arguments.length] || fnmap$11315[null];
                    return f$11503.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$11505) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$11510) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$11515) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$11520) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$11525) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$11530 = {
                    2: function (query$11539, cb$11540) {
                        return q(query$11539, hashMap(), cb$11540);
                    },
                    3: function (query$11577, o$11578, cb$11579) {
                        return function () {
                            return function (v$11589) {
                                var o$11591 = v$11589;
                                return function (v$11602) {
                                    var data$11604 = v$11602;
                                    return function (v$11607) {
                                        var limit$11609 = v$11607;
                                        return function (v$11612) {
                                            var offset$11614 = v$11612;
                                            return req(merge(edenize(o$11591), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$11577, limit$11609, offset$11614, ' :args [{:db/alias "', get(o$11591, 'alias'), '/', get(o$11591, 'db'), '"}]}'))), cb$11579);
                                        }.call(this, function () {
                                            if (truthy(get(data$11604, 'offset'))) {
                                                return str(' :offset ', get(data$11604, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$11604, 'limit'))) {
                                            return str(' :limit ', get(data$11604, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$11591, 'data'));
                            }.call(this, preopts(o$11578));
                        }.call(this);
                    }
                };
                var max_arity$11531 = 0;
                for (var a$11532 in fnmap$11530) {
                    max_arity$11531 = a$11532 > max_arity$11531 ? a$11532 : max_arity$11531;
                }
                fnmap$11530[null] = fnmap$11530[max_arity$11531];
                return function () {
                    var f$11761 = fnmap$11530[arguments.length] || fnmap$11530[null];
                    return f$11761.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$11763) {
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