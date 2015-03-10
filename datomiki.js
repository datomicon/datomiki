//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
/* jshint ignore:start */
_ki = {
    init: function (self$17596, ns_name$17597) {
        if (_ki.namespaces[ns_name$17597] === undefined) {
            _ki.namespaces[ns_name$17597] = { vars: {} };
        }
        self$17596._ki_ns_name = ns_name$17597;
        self$17596._ki_ns_ctx = self$17596;
        _ki.intern.bind(self$17596)(_ki.modules.core);
        _ki.intern.bind(self$17596)(_ki.modules.mori);
        _ki.intern.bind(self$17596)(_ki.modules);
        _ki.intern.bind(self$17596)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$17598) {
        for (var e$17599 in obj$17598) {
            this[e$17599] = obj$17598[e$17599];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$17600) {
                return x$17600 === false || x$17600 == null ? false : true;
            },
            falsey: function (x$17601) {
                return !truthy(x$17601);
            },
            not: function (x$17602) {
                return !truthy(x$17602);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$17603 = 0;
                for (var i$17604 = 0; i$17604 < arguments.length; i$17604++) {
                    res$17603 += arguments[i$17604];
                }
                return res$17603;
            },
            sub: function () {
                var res$17605 = arguments[0];
                for (var i$17606 = 1; i$17606 < arguments.length; i$17606++) {
                    res$17605 -= arguments[i$17606];
                }
                return res$17605;
            },
            mul: function () {
                var res$17607 = 1;
                for (var i$17608 = 0; i$17608 < arguments.length; i$17608++) {
                    res$17607 *= arguments[i$17608];
                }
                return res$17607;
            },
            div: function () {
                var res$17609 = arguments[0];
                for (var i$17610 = 1; i$17610 < arguments.length; i$17610++) {
                    res$17609 /= arguments[i$17610];
                }
                return res$17609;
            },
            mod: function (a$17611, b$17612) {
                return a$17611 % b$17612;
            },
            lt: function () {
                var res$17613 = true;
                for (var i$17614 = 0; i$17614 < arguments.length - 1; i$17614++) {
                    res$17613 = res$17613 && arguments[i$17614] < arguments[i$17614 + 1];
                    if (!res$17613)
                        break;
                }
                return res$17613;
            },
            gt: function () {
                var res$17615 = true;
                for (var i$17616 = 0; i$17616 < arguments.length - 1; i$17616++) {
                    res$17615 = res$17615 && arguments[i$17616] > arguments[i$17616 + 1];
                    if (!res$17615)
                        break;
                }
                return res$17615;
            },
            leq: function () {
                var res$17617 = true;
                for (var i$17618 = 0; i$17618 < arguments.length - 1; i$17618++) {
                    res$17617 = res$17617 && arguments[i$17618] <= arguments[i$17618 + 1];
                    if (!res$17617)
                        break;
                }
                return res$17617;
            },
            geq: function () {
                var res$17619 = true;
                for (var i$17620 = 0; i$17620 < arguments.length - 1; i$17620++) {
                    res$17619 = res$17619 && arguments[i$17620] >= arguments[i$17620 + 1];
                }
                return res$17619;
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
            } catch (e$17621) {
                try {
                    return require('mori');
                } catch (e$17622) {
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
            _ki_ns_ctx['isArray'] = require('lodash').isArray;
            _ki.namespaces[_ki_ns_name].vars.isArray = _ki_ns_ctx['isArray'];
            return _ki_ns_ctx['isArray'];
        }());
        (function () {
            _ki_ns_ctx['isObject'] = require('lodash').isObject;
            _ki.namespaces[_ki_ns_name].vars.isObject = _ki_ns_ctx['isObject'];
            return _ki_ns_ctx['isObject'];
        }());
        (function () {
            _ki_ns_ctx['isString'] = require('lodash').isString;
            _ki.namespaces[_ki_ns_name].vars.isString = _ki_ns_ctx['isString'];
            return _ki_ns_ctx['isString'];
        }());
        (function () {
            _ki_ns_ctx['isFunction'] = require('lodash').isFunction;
            _ki.namespaces[_ki_ns_name].vars.isFunction = _ki_ns_ctx['isFunction'];
            return _ki_ns_ctx['isFunction'];
        }());
        (function () {
            _ki_ns_ctx['pick'] = function (from$17752, keys$17753) {
                return function () {
                    return function (v$17758) {
                        var res$17760 = v$17758;
                        return function () {
                            var res$17764 = {};
                            do {
                                res$17764 = function () {
                                    return function (v$17790) {
                                        var key$17792 = v$17790;
                                        return function () {
                                            if (truthy(key$17792 == undefined)) {
                                                return res$17760;
                                            }
                                            return function () {
                                                res$17760[key$17792] = from$17752[key$17792];
                                                return {
                                                    _ki_recur: true,
                                                    _ki_vals: [keys$17753.pop()]
                                                };
                                            }.call(this);
                                        }.call(this);
                                    }(res$17764._ki_vals === undefined ? keys$17753.pop() : res$17764._ki_vals[0]);
                                    ;
                                }();
                            } while ((res$17764 || 0)._ki_recur);
                            return res$17764;
                        }.call(this);
                    }.call(this, {});
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.pick = _ki_ns_ctx['pick'];
            return _ki_ns_ctx['pick'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$17831, response$17832) {
                return function () {
                    return function (v$17837) {
                        var o$17839 = v$17837;
                        return function () {
                            if (o$17839.format === 'json' && response$17832.headers['content-type'] === o$17839.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$17832.body = edn.toJS(edn.parse(body$17831));
                                } catch (e$17847) {
                                    console.error('Exception: string isn\'t edn - ' + e$17847);
                                    console.error(body$17831);
                                }
                            }
                            ;
                            return function () {
                                return function (v$17850) {
                                    var partial$17852 = v$17850;
                                    return function () {
                                        if (truthy(isArray(partial$17852))) {
                                            return pick(response$17832, partial$17852);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$17852))) {
                                                return response$17832[partial$17852];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$17832;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$17839.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$17832.request._rp_options);
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.transform = _ki_ns_ctx['transform'];
            return _ki_ns_ctx['transform'];
        }());
        (function () {
            // the default db
            _ki_ns_ctx['base'] = hashMap('uri', d.cfg.rest.uri, // the url will be appended to it
            'alias', d.cfg.rest.alias, // the storage alias
            'db', d.cfg.rest.alias, 'url', '/', 'basis', '-', // the basis-t
            'method', 'get', 'data', hashMap(), 'content-type', 'application/edn', // could be application/x-www-form-urlencoded
            'accept', 'application/edn', 'expect', 'application/edn;charset=UTF-8', 'format', 'json', // if response body content-type is as "expect"-ed
            'transform', transform, // a request-promise option
            'pre', false, // true if preopt was called, usually true
            'partial', vector('statusCode', 'body'), 'simple', // false to resolveWithFullResponse; or "body"
            false);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$18132) {
                return toClj(data$18132);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$18141) {
                return merge(base, edenize(opts$18141), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$18168 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$18180) {
                        return function () {
                            return function (v$18185) {
                                var o$18187 = v$18185;
                                return assoc(o$18187, 'uri', str(get(o$18187, 'uri'), get(o$18187, 'url')), 'headers', hashMap('Accept', get(o$18187, 'accept'), 'Content-Type', get(o$18187, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$18180, 'pre'))) {
                                    return opts$18180;
                                }
                                return merge(base, edenize(opts$18180));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$18169 = 0;
                for (var a$18170 in fnmap$18168) {
                    max_arity$18169 = a$18170 > max_arity$18169 ? a$18170 : max_arity$18169;
                }
                fnmap$18168[null] = fnmap$18168[max_arity$18169];
                return function () {
                    var f$18285 = fnmap$18168[arguments.length] || fnmap$18168[null];
                    return f$18285.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$18287, cb$18288) {
                return function () {
                    return function (v$18302) {
                        var o$18304 = v$18302;
                        return function () {
                            if (truthy(falsey(cb$18288))) {
                                return request(o$18304);
                            }
                            return request(o$18304, function (err$18332, res$18333) {
                                return function () {
                                    if (truthy(res$18333.statusCode == 200 || res$18333.statusCode == 201)) {
                                        return cb$18288(err$18332, transform(res$18333.body, res$18333));
                                    }
                                    return cb$18288(err$18332, res$18333);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$18287)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$18366 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$18405) {
                        return function () {
                            if (truthy(isFunction(a$18405))) {
                                return aliases(hashMap(), a$18405);
                            }
                            return function () {
                                if (truthy(isObject(a$18405))) {
                                    return aliases(a$18405, false);
                                }
                                return function () {
                                    if (truthy(keyword('else'))) {
                                        return function () {
                                            throw 'aliases called with an argument of unexpected type';
                                        }.call(this);
                                    }
                                    return undefined;
                                }.call(this);
                            }.call(this);
                        }.call(this);
                    },
                    2: function (o$18479, cb$18480) {
                        return req(merge(edenize(o$18479), hashMap('url', '/data/')), cb$18480);
                    }
                };
                var max_arity$18367 = 0;
                for (var a$18368 in fnmap$18366) {
                    max_arity$18367 = a$18368 > max_arity$18367 ? a$18368 : max_arity$18367;
                }
                fnmap$18366[null] = fnmap$18366[max_arity$18367];
                return function () {
                    var f$18510 = fnmap$18366[arguments.length] || fnmap$18366[null];
                    return f$18510.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$18512 = {
                    1: function (cb$18524) {
                        return cdb(get(base, 'db'), hashMap(), cb$18524);
                    },
                    2: function (name$18582, cb$18583) {
                        return cdb(name$18582, hashMap(), cb$18583);
                    },
                    3: function (name$18620, o$18621, cb$18622) {
                        return function () {
                            return function (v$18632) {
                                var o$18634 = v$18632;
                                return req(merge(o$18634, hashMap('url', str('/data/', get(o$18634, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$18620, '"}'))), cb$18622);
                            }.call(this, preopts(o$18621));
                        }.call(this);
                    }
                };
                var max_arity$18513 = 0;
                for (var a$18514 in fnmap$18512) {
                    max_arity$18513 = a$18514 > max_arity$18513 ? a$18514 : max_arity$18513;
                }
                fnmap$18512[null] = fnmap$18512[max_arity$18513];
                return function () {
                    var f$18700 = fnmap$18512[arguments.length] || fnmap$18512[null];
                    return f$18700.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$18702) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$18707) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$18712) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$18717) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$18722) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$18727 = {
                    2: function (query$18736, cb$18737) {
                        return q(query$18736, hashMap(), cb$18737);
                    },
                    3: function (query$18774, o$18775, cb$18776) {
                        return function () {
                            return function (v$18786) {
                                var o$18788 = v$18786;
                                return function (v$18799) {
                                    var data$18801 = v$18799;
                                    return function (v$18804) {
                                        var limit$18806 = v$18804;
                                        return function (v$18809) {
                                            var offset$18811 = v$18809;
                                            return req(merge(edenize(o$18788), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$18774, limit$18806, offset$18811, ' :args [{:db/alias "', get(o$18788, 'alias'), '/', get(o$18788, 'db'), '"}]}'))), cb$18776);
                                        }.call(this, function () {
                                            if (truthy(get(data$18801, 'offset'))) {
                                                return str(' :offset ', get(data$18801, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$18801, 'limit'))) {
                                            return str(' :limit ', get(data$18801, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$18788, 'data'));
                            }.call(this, preopts(o$18775));
                        }.call(this);
                    }
                };
                var max_arity$18728 = 0;
                for (var a$18729 in fnmap$18727) {
                    max_arity$18728 = a$18729 > max_arity$18728 ? a$18729 : max_arity$18728;
                }
                fnmap$18727[null] = fnmap$18727[max_arity$18728];
                return function () {
                    var f$18958 = fnmap$18727[arguments.length] || fnmap$18727[null];
                    return f$18958.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$18960) {
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