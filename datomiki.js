_ki = {
    init: function (self$77858, ns_name$77859) {
        if (_ki.namespaces[ns_name$77859] === undefined) {
            _ki.namespaces[ns_name$77859] = { vars: {} };
        }
        self$77858._ki_ns_name = ns_name$77859;
        self$77858._ki_ns_ctx = self$77858;
        _ki.intern.bind(self$77858)(_ki.modules.core);
        _ki.intern.bind(self$77858)(_ki.modules.mori);
        _ki.intern.bind(self$77858)(_ki.modules);
        _ki.intern.bind(self$77858)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$77860) {
        for (var e$77861 in obj$77860) {
            this[e$77861] = obj$77860[e$77861];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$77862) {
                return x$77862 === false || x$77862 == null ? false : true;
            },
            falsey: function (x$77863) {
                return !truthy(x$77863);
            },
            not: function (x$77864) {
                return !truthy(x$77864);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$77865 = 0;
                for (var i$77866 = 0; i$77866 < arguments.length; i$77866++) {
                    res$77865 += arguments[i$77866];
                }
                return res$77865;
            },
            sub: function () {
                var res$77867 = arguments[0];
                for (var i$77868 = 1; i$77868 < arguments.length; i$77868++) {
                    res$77867 -= arguments[i$77868];
                }
                return res$77867;
            },
            mul: function () {
                var res$77869 = 1;
                for (var i$77870 = 0; i$77870 < arguments.length; i$77870++) {
                    res$77869 *= arguments[i$77870];
                }
                return res$77869;
            },
            div: function () {
                var res$77871 = arguments[0];
                for (var i$77872 = 1; i$77872 < arguments.length; i$77872++) {
                    res$77871 /= arguments[i$77872];
                }
                return res$77871;
            },
            mod: function (a$77873, b$77874) {
                return a$77873 % b$77874;
            },
            lt: function () {
                var res$77875 = true;
                for (var i$77876 = 0; i$77876 < arguments.length - 1; i$77876++) {
                    res$77875 = res$77875 && arguments[i$77876] < arguments[i$77876 + 1];
                    if (!res$77875)
                        break;
                }
                return res$77875;
            },
            gt: function () {
                var res$77877 = true;
                for (var i$77878 = 0; i$77878 < arguments.length - 1; i$77878++) {
                    res$77877 = res$77877 && arguments[i$77878] > arguments[i$77878 + 1];
                    if (!res$77877)
                        break;
                }
                return res$77877;
            },
            leq: function () {
                var res$77879 = true;
                for (var i$77880 = 0; i$77880 < arguments.length - 1; i$77880++) {
                    res$77879 = res$77879 && arguments[i$77880] <= arguments[i$77880 + 1];
                    if (!res$77879)
                        break;
                }
                return res$77879;
            },
            geq: function () {
                var res$77881 = true;
                for (var i$77882 = 0; i$77882 < arguments.length - 1; i$77882++) {
                    res$77881 = res$77881 && arguments[i$77882] >= arguments[i$77882 + 1];
                }
                return res$77881;
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
            } catch (e$77883) {
                try {
                    return require('mori');
                } catch (e$77884) {
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
            'db', '', // becomes :db/alias
            'url', '/', 'basis', '-', // the basis-t
            'method', 'get', 'data', hashMap(), 'content-type', 'application/edn', // could be application/x-www-form-urlencoded
            'accept', 'application/edn', 'format', 'json', // anything else (e.g. "text", "edn") is left as is
            'resmod', true);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$78220) {
                return toClj(data$78220);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$78229) {
                return edn.toJS(edn.parse(data$78229));
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$78240 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$78252) {
                        return function () {
                            return function (v$78269) {
                                var o$78271 = v$78269;
                                return assoc(o$78271, 'db', str(get(o$78271, 'alias'), '/', get(o$78271, 'named')), 'uri', str(get(o$78271, 'uri'), get(o$78271, 'url')), 'headers', hashMap('Accept', get(o$78271, 'accept'), 'Content-Type', get(o$78271, 'content-type')));
                            }.call(this, merge(base, edenize(opts$78252)));
                        }.call(this);
                    }
                };
                var max_arity$78241 = 0;
                for (var a$78242 in fnmap$78240) {
                    max_arity$78241 = a$78242 > max_arity$78241 ? a$78242 : max_arity$78241;
                }
                fnmap$78240[null] = fnmap$78240[max_arity$78241];
                return function () {
                    var f$78371 = fnmap$78240[arguments.length] || fnmap$78240[null];
                    return f$78371.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$78373, o$78374) {
                return function () {
                    if (truthy(o$78374.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$78374.format))) {
                                return {
                                    'code': res$78373.statusCode,
                                    'body': o$78374.accept == 'application/edn' ? jsonize(res$78373.body) : res$78373.body
                                };
                            }
                            return hashMap(keyword('code'), res$78373.statusCode, keyword('body'), res$78373.body);
                        }.call(this);
                    }
                    return res$78373;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$78421, cb$78422) {
                return function () {
                    return function (v$78436) {
                        var o$78438 = v$78436;
                        return request(o$78438, function (err$78449, res$78450) {
                            return cb$78422(err$78449, response(res$78450, o$78438));
                        });
                    }.call(this, toJs(opts(o$78421)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$78469 = {
                    1: function (cb$78478) {
                        return aliases(hashMap(), cb$78478);
                    },
                    2: function (o$78506, cb$78507) {
                        return req(merge(edenize(o$78506), hashMap('url', '/data/')), cb$78507);
                    }
                };
                var max_arity$78470 = 0;
                for (var a$78471 in fnmap$78469) {
                    max_arity$78470 = a$78471 > max_arity$78470 ? a$78471 : max_arity$78470;
                }
                fnmap$78469[null] = fnmap$78469[max_arity$78470];
                return function () {
                    var f$78537 = fnmap$78469[arguments.length] || fnmap$78469[null];
                    return f$78537.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$78539 = {
                    1: function (cb$78551) {
                        return cdb(get(base, 'named'), hashMap(), cb$78551);
                    },
                    2: function (name$78609, cb$78610) {
                        return cdb(name$78609, hashMap(), cb$78610);
                    },
                    3: function (name$78647, o$78648, cb$78649) {
                        return req(merge(edenize(o$78648), hashMap('url', str('/data/', get(base, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$78647, '"}'))), cb$78649);
                    }
                };
                var max_arity$78540 = 0;
                for (var a$78541 in fnmap$78539) {
                    max_arity$78540 = a$78541 > max_arity$78540 ? a$78541 : max_arity$78540;
                }
                fnmap$78539[null] = fnmap$78539[max_arity$78540];
                return function () {
                    var f$78718 = fnmap$78539[arguments.length] || fnmap$78539[null];
                    return f$78718.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$78720) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$78725) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$78730) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$78735) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$78740) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$78745 = {
                    2: function (query$78754, cb$78755) {
                        return q(query$78754, hashMap(), cb$78755);
                    },
                    3: function (query$78792, o$78793, cb$78794) {
                        return req(merge(edenize(o$78793), hashMap('url', '/api/query', 'method', 'post', 'body', query$78792)), cb$78794);
                    }
                };
                var max_arity$78746 = 0;
                for (var a$78747 in fnmap$78745) {
                    max_arity$78746 = a$78747 > max_arity$78746 ? a$78747 : max_arity$78746;
                }
                fnmap$78745[null] = fnmap$78745[max_arity$78746];
                return function () {
                    var f$78836 = fnmap$78745[arguments.length] || fnmap$78745[null];
                    return f$78836.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$78838) {
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