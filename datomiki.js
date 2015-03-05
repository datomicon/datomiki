//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
_ki = {
    init: function (self$41169, ns_name$41170) {
        if (_ki.namespaces[ns_name$41170] === undefined) {
            _ki.namespaces[ns_name$41170] = { vars: {} };
        }
        self$41169._ki_ns_name = ns_name$41170;
        self$41169._ki_ns_ctx = self$41169;
        _ki.intern.bind(self$41169)(_ki.modules.core);
        _ki.intern.bind(self$41169)(_ki.modules.mori);
        _ki.intern.bind(self$41169)(_ki.modules);
        _ki.intern.bind(self$41169)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$41171) {
        for (var e$41172 in obj$41171) {
            this[e$41172] = obj$41171[e$41172];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$41173) {
                return x$41173 === false || x$41173 == null ? false : true;
            },
            falsey: function (x$41174) {
                return !truthy(x$41174);
            },
            not: function (x$41175) {
                return !truthy(x$41175);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$41176 = 0;
                for (var i$41177 = 0; i$41177 < arguments.length; i$41177++) {
                    res$41176 += arguments[i$41177];
                }
                return res$41176;
            },
            sub: function () {
                var res$41178 = arguments[0];
                for (var i$41179 = 1; i$41179 < arguments.length; i$41179++) {
                    res$41178 -= arguments[i$41179];
                }
                return res$41178;
            },
            mul: function () {
                var res$41180 = 1;
                for (var i$41181 = 0; i$41181 < arguments.length; i$41181++) {
                    res$41180 *= arguments[i$41181];
                }
                return res$41180;
            },
            div: function () {
                var res$41182 = arguments[0];
                for (var i$41183 = 1; i$41183 < arguments.length; i$41183++) {
                    res$41182 /= arguments[i$41183];
                }
                return res$41182;
            },
            mod: function (a$41184, b$41185) {
                return a$41184 % b$41185;
            },
            lt: function () {
                var res$41186 = true;
                for (var i$41187 = 0; i$41187 < arguments.length - 1; i$41187++) {
                    res$41186 = res$41186 && arguments[i$41187] < arguments[i$41187 + 1];
                    if (!res$41186)
                        break;
                }
                return res$41186;
            },
            gt: function () {
                var res$41188 = true;
                for (var i$41189 = 0; i$41189 < arguments.length - 1; i$41189++) {
                    res$41188 = res$41188 && arguments[i$41189] > arguments[i$41189 + 1];
                    if (!res$41188)
                        break;
                }
                return res$41188;
            },
            leq: function () {
                var res$41190 = true;
                for (var i$41191 = 0; i$41191 < arguments.length - 1; i$41191++) {
                    res$41190 = res$41190 && arguments[i$41191] <= arguments[i$41191 + 1];
                    if (!res$41190)
                        break;
                }
                return res$41190;
            },
            geq: function () {
                var res$41192 = true;
                for (var i$41193 = 0; i$41193 < arguments.length - 1; i$41193++) {
                    res$41192 = res$41192 && arguments[i$41193] >= arguments[i$41193 + 1];
                }
                return res$41192;
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
            } catch (e$41194) {
                try {
                    return require('mori');
                } catch (e$41195) {
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
            _ki_ns_ctx['transform'] = function (body$41305, response$41306) {
                return function () {
                    return function (v$41311) {
                        var o$41313 = v$41311;
                        return function () {
                            if (o$41313.format === 'json' && response$41306.headers['content-type'] === o$41313.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$41306.body = edn.toJS(edn.parse(body$41305));
                                } catch (e$41321) {
                                    console.error('Exception: string isn\'t edn - ' + e$41321);
                                    console.error(body$41305);
                                }
                            }
                            ;
                            return function () {
                                if (truthy(o$41313.resmod)) {
                                    return {
                                        'code': response$41306.statusCode,
                                        'body': response$41306.body
                                    };
                                }
                                return response$41306;
                            }.call(this);
                        }.call(this);
                    }.call(this, response$41306.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$41553) {
                return toClj(data$41553);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$41562) {
                return merge(base, edenize(opts$41562), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$41589 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$41601) {
                        return function () {
                            return function (v$41606) {
                                var o$41608 = v$41606;
                                return assoc(o$41608, 'uri', str(get(o$41608, 'uri'), get(o$41608, 'url')), 'headers', hashMap('Accept', get(o$41608, 'accept'), 'Content-Type', get(o$41608, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$41601, 'pre'))) {
                                    return opts$41601;
                                }
                                return merge(base, edenize(opts$41601));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$41590 = 0;
                for (var a$41591 in fnmap$41589) {
                    max_arity$41590 = a$41591 > max_arity$41590 ? a$41591 : max_arity$41590;
                }
                fnmap$41589[null] = fnmap$41589[max_arity$41590];
                return function () {
                    var f$41706 = fnmap$41589[arguments.length] || fnmap$41589[null];
                    return f$41706.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$41708, cb$41709) {
                return function () {
                    return function (v$41723) {
                        var o$41725 = v$41723;
                        return function () {
                            if (truthy(falsey(cb$41709))) {
                                return request(o$41725);
                            }
                            return request(o$41725, function (err$41753, res$41754) {
                                return function () {
                                    if (truthy(res$41754.statusCode == 200 || res$41754.statusCode == 201)) {
                                        return cb$41709(err$41753, transform(res$41754.body, res$41754));
                                    }
                                    return cb$41709(err$41753, res$41754);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$41708)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$41787 = {
                    1: function (cb$41796) {
                        return aliases(hashMap(), cb$41796);
                    },
                    2: function (o$41824, cb$41825) {
                        return req(merge(edenize(o$41824), hashMap('url', '/data/')), cb$41825);
                    }
                };
                var max_arity$41788 = 0;
                for (var a$41789 in fnmap$41787) {
                    max_arity$41788 = a$41789 > max_arity$41788 ? a$41789 : max_arity$41788;
                }
                fnmap$41787[null] = fnmap$41787[max_arity$41788];
                return function () {
                    var f$41855 = fnmap$41787[arguments.length] || fnmap$41787[null];
                    return f$41855.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$41857 = {
                    1: function (cb$41869) {
                        return cdb(get(base, 'db'), hashMap(), cb$41869);
                    },
                    2: function (name$41927, cb$41928) {
                        return cdb(name$41927, hashMap(), cb$41928);
                    },
                    3: function (name$41965, o$41966, cb$41967) {
                        return function () {
                            return function (v$41977) {
                                var o$41979 = v$41977;
                                return req(merge(o$41979, hashMap('url', str('/data/', get(o$41979, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$41965, '"}'))), cb$41967);
                            }.call(this, preopts(o$41966));
                        }.call(this);
                    }
                };
                var max_arity$41858 = 0;
                for (var a$41859 in fnmap$41857) {
                    max_arity$41858 = a$41859 > max_arity$41858 ? a$41859 : max_arity$41858;
                }
                fnmap$41857[null] = fnmap$41857[max_arity$41858];
                return function () {
                    var f$42045 = fnmap$41857[arguments.length] || fnmap$41857[null];
                    return f$42045.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$42047) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$42052) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$42057) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$42062) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$42067) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$42072 = {
                    2: function (query$42081, cb$42082) {
                        return q(query$42081, hashMap(), cb$42082);
                    },
                    3: function (query$42119, o$42120, cb$42121) {
                        return function () {
                            return function (v$42131) {
                                var o$42133 = v$42131;
                                return function (v$42144) {
                                    var data$42146 = v$42144;
                                    return function (v$42149) {
                                        var limit$42151 = v$42149;
                                        return function (v$42154) {
                                            var offset$42156 = v$42154;
                                            return req(merge(edenize(o$42133), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$42119, limit$42151, offset$42156, ' :args [{:db/alias "', get(o$42133, 'alias'), '/', get(o$42133, 'db'), '"}]}'))), cb$42121);
                                        }.call(this, function () {
                                            if (truthy(get(data$42146, 'offset'))) {
                                                return str(' :offset ', get(data$42146, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$42146, 'limit'))) {
                                            return str(' :limit ', get(data$42146, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$42133, 'data'));
                            }.call(this, preopts(o$42120));
                        }.call(this);
                    }
                };
                var max_arity$42073 = 0;
                for (var a$42074 in fnmap$42072) {
                    max_arity$42073 = a$42074 > max_arity$42073 ? a$42074 : max_arity$42073;
                }
                fnmap$42072[null] = fnmap$42072[max_arity$42073];
                return function () {
                    var f$42303 = fnmap$42072[arguments.length] || fnmap$42072[null];
                    return f$42303.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$42305) {
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