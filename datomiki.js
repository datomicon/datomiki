//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$7181, ns_name$7182) {
        if (_ki.namespaces[ns_name$7182] === undefined) {
            _ki.namespaces[ns_name$7182] = { vars: {} };
        }
        self$7181._ki_ns_name = ns_name$7182;
        self$7181._ki_ns_ctx = self$7181;
        _ki.intern.bind(self$7181)(_ki.modules.core);
        _ki.intern.bind(self$7181)(_ki.modules.mori);
        _ki.intern.bind(self$7181)(_ki.modules);
        _ki.intern.bind(self$7181)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$7183) {
        for (var e$7184 in obj$7183) {
            this[e$7184] = obj$7183[e$7184];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$7185) {
                return x$7185 === false || x$7185 == null ? false : true;
            },
            falsey: function (x$7186) {
                return !truthy(x$7186);
            },
            not: function (x$7187) {
                return !truthy(x$7187);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$7188 = 0;
                for (var i$7189 = 0; i$7189 < arguments.length; i$7189++) {
                    res$7188 += arguments[i$7189];
                }
                return res$7188;
            },
            sub: function () {
                var res$7190 = arguments[0];
                for (var i$7191 = 1; i$7191 < arguments.length; i$7191++) {
                    res$7190 -= arguments[i$7191];
                }
                return res$7190;
            },
            mul: function () {
                var res$7192 = 1;
                for (var i$7193 = 0; i$7193 < arguments.length; i$7193++) {
                    res$7192 *= arguments[i$7193];
                }
                return res$7192;
            },
            div: function () {
                var res$7194 = arguments[0];
                for (var i$7195 = 1; i$7195 < arguments.length; i$7195++) {
                    res$7194 /= arguments[i$7195];
                }
                return res$7194;
            },
            mod: function (a$7196, b$7197) {
                return a$7196 % b$7197;
            },
            lt: function () {
                var res$7198 = true;
                for (var i$7199 = 0; i$7199 < arguments.length - 1; i$7199++) {
                    res$7198 = res$7198 && arguments[i$7199] < arguments[i$7199 + 1];
                    if (!res$7198)
                        break;
                }
                return res$7198;
            },
            gt: function () {
                var res$7200 = true;
                for (var i$7201 = 0; i$7201 < arguments.length - 1; i$7201++) {
                    res$7200 = res$7200 && arguments[i$7201] > arguments[i$7201 + 1];
                    if (!res$7200)
                        break;
                }
                return res$7200;
            },
            leq: function () {
                var res$7202 = true;
                for (var i$7203 = 0; i$7203 < arguments.length - 1; i$7203++) {
                    res$7202 = res$7202 && arguments[i$7203] <= arguments[i$7203 + 1];
                    if (!res$7202)
                        break;
                }
                return res$7202;
            },
            geq: function () {
                var res$7204 = true;
                for (var i$7205 = 0; i$7205 < arguments.length - 1; i$7205++) {
                    res$7204 = res$7204 && arguments[i$7205] >= arguments[i$7205 + 1];
                }
                return res$7204;
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
            } catch (e$7206) {
                try {
                    return require('mori');
                } catch (e$7207) {
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
            _ki_ns_ctx['transform'] = function (body$7317, response$7318) {
                return function () {
                    if (response$7318.request._rp_options.format === 'json' && response$7318.headers['content-type'] === response$7318.request._rp_options.expect) {
                        try {
                            response$7318.body = edn.toJS(edn.parse(body$7317));
                        } catch (e$7325) {
                            console.error('Exception: string isn\'t edn - ' + e$7325);
                            console.error(body$7317);
                        }
                    }
                    ;
                    return function () {
                        if (truthy(response$7318.request._rp_options.resmod)) {
                            return {
                                'code': response$7318.statusCode,
                                'body': response$7318.body
                            };
                        }
                        return response$7318;
                    }.call(this);
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
            'resmod', true);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$7551) {
                return toClj(data$7551);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$7560) {
                return merge(base, edenize(opts$7560), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$7587 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$7599) {
                        return function () {
                            return function (v$7604) {
                                var o$7606 = v$7604;
                                return assoc(o$7606, 'uri', str(get(o$7606, 'uri'), get(o$7606, 'url')), 'headers', hashMap('Accept', get(o$7606, 'accept'), 'Content-Type', get(o$7606, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$7599, 'pre'))) {
                                    return opts$7599;
                                }
                                return merge(base, edenize(opts$7599));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$7588 = 0;
                for (var a$7589 in fnmap$7587) {
                    max_arity$7588 = a$7589 > max_arity$7588 ? a$7589 : max_arity$7588;
                }
                fnmap$7587[null] = fnmap$7587[max_arity$7588];
                return function () {
                    var f$7704 = fnmap$7587[arguments.length] || fnmap$7587[null];
                    return f$7704.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$7706, cb$7707) {
                return function () {
                    return function (v$7721) {
                        var o$7723 = v$7721;
                        return function () {
                            if (truthy(falsey(cb$7707))) {
                                return request(o$7723);
                            }
                            return request(o$7723, function (err$7751, res$7752) {
                                return cb$7707(err$7751, res$7752);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$7706)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$7764 = {
                    1: function (cb$7773) {
                        return aliases(hashMap(), cb$7773);
                    },
                    2: function (o$7801, cb$7802) {
                        return req(merge(edenize(o$7801), hashMap('url', '/data/')), cb$7802);
                    }
                };
                var max_arity$7765 = 0;
                for (var a$7766 in fnmap$7764) {
                    max_arity$7765 = a$7766 > max_arity$7765 ? a$7766 : max_arity$7765;
                }
                fnmap$7764[null] = fnmap$7764[max_arity$7765];
                return function () {
                    var f$7832 = fnmap$7764[arguments.length] || fnmap$7764[null];
                    return f$7832.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$7834 = {
                    1: function (cb$7846) {
                        return cdb(get(base, 'db'), hashMap(), cb$7846);
                    },
                    2: function (name$7904, cb$7905) {
                        return cdb(name$7904, hashMap(), cb$7905);
                    },
                    3: function (name$7942, o$7943, cb$7944) {
                        return function () {
                            return function (v$7954) {
                                var o$7956 = v$7954;
                                return req(merge(o$7956, hashMap('url', str('/data/', get(o$7956, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$7942, '"}'))), cb$7944);
                            }.call(this, preopts(o$7943));
                        }.call(this);
                    }
                };
                var max_arity$7835 = 0;
                for (var a$7836 in fnmap$7834) {
                    max_arity$7835 = a$7836 > max_arity$7835 ? a$7836 : max_arity$7835;
                }
                fnmap$7834[null] = fnmap$7834[max_arity$7835];
                return function () {
                    var f$8022 = fnmap$7834[arguments.length] || fnmap$7834[null];
                    return f$8022.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$8024) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$8029) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$8034) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$8039) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$8044) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$8049 = {
                    2: function (query$8058, cb$8059) {
                        return q(query$8058, hashMap(), cb$8059);
                    },
                    3: function (query$8096, o$8097, cb$8098) {
                        return function () {
                            return function (v$8108) {
                                var o$8110 = v$8108;
                                return function (v$8121) {
                                    var data$8123 = v$8121;
                                    return function (v$8126) {
                                        var limit$8128 = v$8126;
                                        return function (v$8131) {
                                            var offset$8133 = v$8131;
                                            return req(merge(edenize(o$8110), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$8096, limit$8128, offset$8133, ' :args [{:db/alias "', get(o$8110, 'alias'), '/', get(o$8110, 'db'), '"}]}'))), cb$8098);
                                        }.call(this, function () {
                                            if (truthy(get(data$8123, 'offset'))) {
                                                return str(' :offset ', get(data$8123, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$8123, 'limit'))) {
                                            return str(' :limit ', get(data$8123, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$8110, 'data'));
                            }.call(this, preopts(o$8097));
                        }.call(this);
                    }
                };
                var max_arity$8050 = 0;
                for (var a$8051 in fnmap$8049) {
                    max_arity$8050 = a$8051 > max_arity$8050 ? a$8051 : max_arity$8050;
                }
                fnmap$8049[null] = fnmap$8049[max_arity$8050];
                return function () {
                    var f$8280 = fnmap$8049[arguments.length] || fnmap$8049[null];
                    return f$8280.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$8282) {
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