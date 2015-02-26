_ki = {
    init: function (self$51894, ns_name$51895) {
        if (_ki.namespaces[ns_name$51895] === undefined) {
            _ki.namespaces[ns_name$51895] = { vars: {} };
        }
        self$51894._ki_ns_name = ns_name$51895;
        self$51894._ki_ns_ctx = self$51894;
        _ki.intern.bind(self$51894)(_ki.modules.core);
        _ki.intern.bind(self$51894)(_ki.modules.mori);
        _ki.intern.bind(self$51894)(_ki.modules);
        _ki.intern.bind(self$51894)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$51896) {
        for (var e$51897 in obj$51896) {
            this[e$51897] = obj$51896[e$51897];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$51898) {
                return x$51898 === false || x$51898 == null ? false : true;
            },
            falsey: function (x$51899) {
                return !truthy(x$51899);
            },
            not: function (x$51900) {
                return !truthy(x$51900);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$51901 = 0;
                for (var i$51902 = 0; i$51902 < arguments.length; i$51902++) {
                    res$51901 += arguments[i$51902];
                }
                return res$51901;
            },
            sub: function () {
                var res$51903 = arguments[0];
                for (var i$51904 = 1; i$51904 < arguments.length; i$51904++) {
                    res$51903 -= arguments[i$51904];
                }
                return res$51903;
            },
            mul: function () {
                var res$51905 = 1;
                for (var i$51906 = 0; i$51906 < arguments.length; i$51906++) {
                    res$51905 *= arguments[i$51906];
                }
                return res$51905;
            },
            div: function () {
                var res$51907 = arguments[0];
                for (var i$51908 = 1; i$51908 < arguments.length; i$51908++) {
                    res$51907 /= arguments[i$51908];
                }
                return res$51907;
            },
            mod: function (a$51909, b$51910) {
                return a$51909 % b$51910;
            },
            lt: function () {
                var res$51911 = true;
                for (var i$51912 = 0; i$51912 < arguments.length - 1; i$51912++) {
                    res$51911 = res$51911 && arguments[i$51912] < arguments[i$51912 + 1];
                    if (!res$51911)
                        break;
                }
                return res$51911;
            },
            gt: function () {
                var res$51913 = true;
                for (var i$51914 = 0; i$51914 < arguments.length - 1; i$51914++) {
                    res$51913 = res$51913 && arguments[i$51914] > arguments[i$51914 + 1];
                    if (!res$51913)
                        break;
                }
                return res$51913;
            },
            leq: function () {
                var res$51915 = true;
                for (var i$51916 = 0; i$51916 < arguments.length - 1; i$51916++) {
                    res$51915 = res$51915 && arguments[i$51916] <= arguments[i$51916 + 1];
                    if (!res$51915)
                        break;
                }
                return res$51915;
            },
            geq: function () {
                var res$51917 = true;
                for (var i$51918 = 0; i$51918 < arguments.length - 1; i$51918++) {
                    res$51917 = res$51917 && arguments[i$51918] >= arguments[i$51918 + 1];
                }
                return res$51917;
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
            } catch (e$51919) {
                try {
                    return require('mori');
                } catch (e$51920) {
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
            _ki_ns_ctx['edenize'] = function (data$52266) {
                return toClj(data$52266);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$52275) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$52275));
                    } catch (e$52279) {
                        console.error('Exception: string isn\'t edn - ' + e$52279);
                        console.error(data$52275);
                        return data$52275;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$52282) {
                return merge(base, edenize(opts$52282), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$52309 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$52321) {
                        return function () {
                            return function (v$52326) {
                                var o$52328 = v$52326;
                                return assoc(o$52328, 'db', str(get(o$52328, 'alias'), '/', get(o$52328, 'named')), 'uri', str(get(o$52328, 'uri'), get(o$52328, 'url')), 'headers', hashMap('Accept', get(o$52328, 'accept'), 'Content-Type', get(o$52328, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$52321, 'pre'))) {
                                    return opts$52321;
                                }
                                return merge(base, edenize(opts$52321));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$52310 = 0;
                for (var a$52311 in fnmap$52309) {
                    max_arity$52310 = a$52311 > max_arity$52310 ? a$52311 : max_arity$52310;
                }
                fnmap$52309[null] = fnmap$52309[max_arity$52310];
                return function () {
                    var f$52456 = fnmap$52309[arguments.length] || fnmap$52309[null];
                    return f$52456.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$52458, o$52459) {
                return function () {
                    if (truthy(o$52459.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$52459.format))) {
                                return {
                                    'code': res$52458.statusCode,
                                    'body': o$52459.accept == 'application/edn' ? jsonize(res$52458.body) : res$52458.body
                                };
                            }
                            return hashMap(keyword('code'), res$52458.statusCode, keyword('body'), res$52458.body);
                        }.call(this);
                    }
                    return res$52458;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$52506, cb$52507) {
                return function () {
                    return function (v$52521) {
                        var o$52523 = v$52521;
                        return request(o$52523, function (err$52534, res$52535) {
                            return cb$52507(err$52534, response(res$52535, o$52523));
                        });
                    }.call(this, toJs(opts(o$52506)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$52554 = {
                    1: function (cb$52563) {
                        return aliases(hashMap(), cb$52563);
                    },
                    2: function (o$52591, cb$52592) {
                        return req(merge(edenize(o$52591), hashMap('url', '/data/')), cb$52592);
                    }
                };
                var max_arity$52555 = 0;
                for (var a$52556 in fnmap$52554) {
                    max_arity$52555 = a$52556 > max_arity$52555 ? a$52556 : max_arity$52555;
                }
                fnmap$52554[null] = fnmap$52554[max_arity$52555];
                return function () {
                    var f$52622 = fnmap$52554[arguments.length] || fnmap$52554[null];
                    return f$52622.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$52624 = {
                    1: function (cb$52636) {
                        return cdb(get(base, 'named'), hashMap(), cb$52636);
                    },
                    2: function (name$52694, cb$52695) {
                        return cdb(name$52694, hashMap(), cb$52695);
                    },
                    3: function (name$52732, o$52733, cb$52734) {
                        return function () {
                            return function (v$52744) {
                                var o$52746 = v$52744;
                                return req(merge(o$52746, hashMap('url', str('/data/', get(base, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$52732, '"}'))), cb$52734);
                            }.call(this, preopts(o$52733));
                        }.call(this);
                    }
                };
                var max_arity$52625 = 0;
                for (var a$52626 in fnmap$52624) {
                    max_arity$52625 = a$52626 > max_arity$52625 ? a$52626 : max_arity$52625;
                }
                fnmap$52624[null] = fnmap$52624[max_arity$52625];
                return function () {
                    var f$52812 = fnmap$52624[arguments.length] || fnmap$52624[null];
                    return f$52812.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$52814) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$52819) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$52824) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$52829) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$52834) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$52839 = {
                    2: function (query$52848, cb$52849) {
                        return q(query$52848, hashMap(), cb$52849);
                    },
                    3: function (query$52886, o$52887, cb$52888) {
                        return function () {
                            return function (v$52898) {
                                var o$52900 = v$52898;
                                return req(merge(edenize(o$52900), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$52886, ' :args [{:db/alias "', get(o$52900, 'alias'), '/', get(o$52900, 'named'), '"}]}'))), cb$52888);
                            }.call(this, preopts(o$52887));
                        }.call(this);
                    }
                };
                var max_arity$52840 = 0;
                for (var a$52841 in fnmap$52839) {
                    max_arity$52840 = a$52841 > max_arity$52840 ? a$52841 : max_arity$52840;
                }
                fnmap$52839[null] = fnmap$52839[max_arity$52840];
                return function () {
                    var f$52979 = fnmap$52839[arguments.length] || fnmap$52839[null];
                    return f$52979.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$52981) {
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