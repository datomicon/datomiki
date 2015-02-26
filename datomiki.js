_ki = {
    init: function (self$6638, ns_name$6639) {
        if (_ki.namespaces[ns_name$6639] === undefined) {
            _ki.namespaces[ns_name$6639] = { vars: {} };
        }
        self$6638._ki_ns_name = ns_name$6639;
        self$6638._ki_ns_ctx = self$6638;
        _ki.intern.bind(self$6638)(_ki.modules.core);
        _ki.intern.bind(self$6638)(_ki.modules.mori);
        _ki.intern.bind(self$6638)(_ki.modules);
        _ki.intern.bind(self$6638)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$6640) {
        for (var e$6641 in obj$6640) {
            this[e$6641] = obj$6640[e$6641];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$6642) {
                return x$6642 === false || x$6642 == null ? false : true;
            },
            falsey: function (x$6643) {
                return !truthy(x$6643);
            },
            not: function (x$6644) {
                return !truthy(x$6644);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$6645 = 0;
                for (var i$6646 = 0; i$6646 < arguments.length; i$6646++) {
                    res$6645 += arguments[i$6646];
                }
                return res$6645;
            },
            sub: function () {
                var res$6647 = arguments[0];
                for (var i$6648 = 1; i$6648 < arguments.length; i$6648++) {
                    res$6647 -= arguments[i$6648];
                }
                return res$6647;
            },
            mul: function () {
                var res$6649 = 1;
                for (var i$6650 = 0; i$6650 < arguments.length; i$6650++) {
                    res$6649 *= arguments[i$6650];
                }
                return res$6649;
            },
            div: function () {
                var res$6651 = arguments[0];
                for (var i$6652 = 1; i$6652 < arguments.length; i$6652++) {
                    res$6651 /= arguments[i$6652];
                }
                return res$6651;
            },
            mod: function (a$6653, b$6654) {
                return a$6653 % b$6654;
            },
            lt: function () {
                var res$6655 = true;
                for (var i$6656 = 0; i$6656 < arguments.length - 1; i$6656++) {
                    res$6655 = res$6655 && arguments[i$6656] < arguments[i$6656 + 1];
                    if (!res$6655)
                        break;
                }
                return res$6655;
            },
            gt: function () {
                var res$6657 = true;
                for (var i$6658 = 0; i$6658 < arguments.length - 1; i$6658++) {
                    res$6657 = res$6657 && arguments[i$6658] > arguments[i$6658 + 1];
                    if (!res$6657)
                        break;
                }
                return res$6657;
            },
            leq: function () {
                var res$6659 = true;
                for (var i$6660 = 0; i$6660 < arguments.length - 1; i$6660++) {
                    res$6659 = res$6659 && arguments[i$6660] <= arguments[i$6660 + 1];
                    if (!res$6659)
                        break;
                }
                return res$6659;
            },
            geq: function () {
                var res$6661 = true;
                for (var i$6662 = 0; i$6662 < arguments.length - 1; i$6662++) {
                    res$6661 = res$6661 && arguments[i$6662] >= arguments[i$6662 + 1];
                }
                return res$6661;
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
            } catch (e$6663) {
                try {
                    return require('mori');
                } catch (e$6664) {
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
            'accept', 'application/edn', 'format', 'json', // anything else (e.g. "text", "edn") is left as is
            'resmod', true);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$7000) {
                return toClj(data$7000);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$7009) {
                return edn.toJS(edn.parse(data$7009));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$7020 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$7032) {
                        return function () {
                            return function (v$7049) {
                                var o$7051 = v$7049;
                                return assoc(o$7051, 'db', str(get(o$7051, 'alias'), '/', get(o$7051, 'named')), 'uri', str(get(o$7051, 'uri'), get(o$7051, 'url')), 'headers', hashMap('Accept', get(o$7051, 'accept'), 'Content-Type', get(o$7051, 'content-type')));
                            }.call(this, merge(base, edenize(opts$7032)));
                        }.call(this);
                    }
                };
                var max_arity$7021 = 0;
                for (var a$7022 in fnmap$7020) {
                    max_arity$7021 = a$7022 > max_arity$7021 ? a$7022 : max_arity$7021;
                }
                fnmap$7020[null] = fnmap$7020[max_arity$7021];
                return function () {
                    var f$7151 = fnmap$7020[arguments.length] || fnmap$7020[null];
                    return f$7151.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$7153, o$7154) {
                return function () {
                    if (truthy(o$7154.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$7154.format))) {
                                return {
                                    'code': res$7153.statusCode,
                                    'body': o$7154.accept == 'application/edn' ? jsonize(res$7153.body) : res$7153.body
                                };
                            }
                            return hashMap(keyword('code'), res$7153.statusCode, keyword('body'), res$7153.body);
                        }.call(this);
                    }
                    return res$7153;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$7201, cb$7202) {
                return function () {
                    return function (v$7216) {
                        var o$7218 = v$7216;
                        return request(o$7218, function (err$7229, res$7230) {
                            return cb$7202(err$7229, response(res$7230, o$7218));
                        });
                    }.call(this, toJs(opts(o$7201)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$7249 = {
                    1: function (cb$7258) {
                        return aliases(hashMap(), cb$7258);
                    },
                    2: function (o$7286, cb$7287) {
                        return req(merge(edenize(o$7286), hashMap('url', '/data/')), cb$7287);
                    }
                };
                var max_arity$7250 = 0;
                for (var a$7251 in fnmap$7249) {
                    max_arity$7250 = a$7251 > max_arity$7250 ? a$7251 : max_arity$7250;
                }
                fnmap$7249[null] = fnmap$7249[max_arity$7250];
                return function () {
                    var f$7317 = fnmap$7249[arguments.length] || fnmap$7249[null];
                    return f$7317.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$7319 = {
                    1: function (cb$7331) {
                        return cdb(get(base, 'named'), hashMap(), cb$7331);
                    },
                    2: function (name$7389, cb$7390) {
                        return cdb(name$7389, hashMap(), cb$7390);
                    },
                    3: function (name$7427, o$7428, cb$7429) {
                        return req(merge(edenize(o$7428), hashMap('url', str('/data/', get(base, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$7427, '"}'))), cb$7429);
                    }
                };
                var max_arity$7320 = 0;
                for (var a$7321 in fnmap$7319) {
                    max_arity$7320 = a$7321 > max_arity$7320 ? a$7321 : max_arity$7320;
                }
                fnmap$7319[null] = fnmap$7319[max_arity$7320];
                return function () {
                    var f$7498 = fnmap$7319[arguments.length] || fnmap$7319[null];
                    return f$7498.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$7500) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$7505) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$7510) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$7515) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$7520) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$7525 = {
                    2: function (query$7534, cb$7535) {
                        return q(query$7534, hashMap(), cb$7535);
                    },
                    3: function (query$7572, o$7573, cb$7574) {
                        return req(merge(edenize(o$7573), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$7572, ' :args [{:db/alias "', get(base, 'alias'), '/', get(base, 'named'), '"}]}'))), cb$7574);
                    }
                };
                var max_arity$7526 = 0;
                for (var a$7527 in fnmap$7525) {
                    max_arity$7526 = a$7527 > max_arity$7526 ? a$7527 : max_arity$7526;
                }
                fnmap$7525[null] = fnmap$7525[max_arity$7526];
                return function () {
                    var f$7652 = fnmap$7525[arguments.length] || fnmap$7525[null];
                    return f$7652.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$7654) {
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