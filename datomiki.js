//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
/* jshint ignore:start */
_ki = {
    init: function (self$22603, ns_name$22604) {
        if (_ki.namespaces[ns_name$22604] === undefined) {
            _ki.namespaces[ns_name$22604] = { vars: {} };
        }
        self$22603._ki_ns_name = ns_name$22604;
        self$22603._ki_ns_ctx = self$22603;
        _ki.intern.bind(self$22603)(_ki.modules.core);
        _ki.intern.bind(self$22603)(_ki.modules.mori);
        _ki.intern.bind(self$22603)(_ki.modules);
        _ki.intern.bind(self$22603)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$22605) {
        for (var e$22606 in obj$22605) {
            this[e$22606] = obj$22605[e$22606];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$22607) {
                return x$22607 === false || x$22607 == null ? false : true;
            },
            falsey: function (x$22608) {
                return !truthy(x$22608);
            },
            not: function (x$22609) {
                return !truthy(x$22609);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$22610 = 0;
                for (var i$22611 = 0; i$22611 < arguments.length; i$22611++) {
                    res$22610 += arguments[i$22611];
                }
                return res$22610;
            },
            sub: function () {
                var res$22612 = arguments[0];
                for (var i$22613 = 1; i$22613 < arguments.length; i$22613++) {
                    res$22612 -= arguments[i$22613];
                }
                return res$22612;
            },
            mul: function () {
                var res$22614 = 1;
                for (var i$22615 = 0; i$22615 < arguments.length; i$22615++) {
                    res$22614 *= arguments[i$22615];
                }
                return res$22614;
            },
            div: function () {
                var res$22616 = arguments[0];
                for (var i$22617 = 1; i$22617 < arguments.length; i$22617++) {
                    res$22616 /= arguments[i$22617];
                }
                return res$22616;
            },
            mod: function (a$22618, b$22619) {
                return a$22618 % b$22619;
            },
            lt: function () {
                var res$22620 = true;
                for (var i$22621 = 0; i$22621 < arguments.length - 1; i$22621++) {
                    res$22620 = res$22620 && arguments[i$22621] < arguments[i$22621 + 1];
                    if (!res$22620)
                        break;
                }
                return res$22620;
            },
            gt: function () {
                var res$22622 = true;
                for (var i$22623 = 0; i$22623 < arguments.length - 1; i$22623++) {
                    res$22622 = res$22622 && arguments[i$22623] > arguments[i$22623 + 1];
                    if (!res$22622)
                        break;
                }
                return res$22622;
            },
            leq: function () {
                var res$22624 = true;
                for (var i$22625 = 0; i$22625 < arguments.length - 1; i$22625++) {
                    res$22624 = res$22624 && arguments[i$22625] <= arguments[i$22625 + 1];
                    if (!res$22624)
                        break;
                }
                return res$22624;
            },
            geq: function () {
                var res$22626 = true;
                for (var i$22627 = 0; i$22627 < arguments.length - 1; i$22627++) {
                    res$22626 = res$22626 && arguments[i$22627] >= arguments[i$22627 + 1];
                }
                return res$22626;
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
            } catch (e$22628) {
                try {
                    return require('mori');
                } catch (e$22629) {
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
            _ki_ns_ctx['pick'] = require('lodash').pick;
            _ki.namespaces[_ki_ns_name].vars.pick = _ki_ns_ctx['pick'];
            return _ki_ns_ctx['pick'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$22759, response$22760) {
                return function () {
                    return function (v$22765) {
                        var o$22767 = v$22765;
                        return function () {
                            if (o$22767.format === 'json' && response$22760.headers['content-type'] === o$22767.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$22760.body = edn.toJS(edn.parse(body$22759));
                                } catch (e$22775) {
                                    console.error('Exception: string isn\'t edn - ' + e$22775);
                                    console.error(body$22759);
                                }
                            }
                            ;
                            return function () {
                                return function (v$22778) {
                                    var partial$22780 = v$22778;
                                    return function () {
                                        if (truthy(isArray(partial$22780))) {
                                            return apply(pick, response$22760, partial$22780);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$22780))) {
                                                return response$22760[partial$22780];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$22760;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$22767.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$22760.request._rp_options);
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
            'partial', vector('statusCode', 'body'), 'simple', // false to resolveWithFullResponse; or "body"
            false);
            // default options
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['edenize'] = function (data$23063) {
                return toClj(data$23063);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$23072) {
                return merge(base, edenize(opts$23072), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$23099 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$23111) {
                        return function () {
                            return function (v$23116) {
                                var o$23118 = v$23116;
                                return assoc(o$23118, 'uri', str(get(o$23118, 'uri'), get(o$23118, 'url')), 'headers', hashMap('Accept', get(o$23118, 'accept'), 'Content-Type', get(o$23118, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$23111, 'pre'))) {
                                    return opts$23111;
                                }
                                return merge(base, edenize(opts$23111));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$23100 = 0;
                for (var a$23101 in fnmap$23099) {
                    max_arity$23100 = a$23101 > max_arity$23100 ? a$23101 : max_arity$23100;
                }
                fnmap$23099[null] = fnmap$23099[max_arity$23100];
                return function () {
                    var f$23216 = fnmap$23099[arguments.length] || fnmap$23099[null];
                    return f$23216.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$23218, cb$23219) {
                return function () {
                    return function (v$23233) {
                        var o$23235 = v$23233;
                        return function () {
                            if (truthy(falsey(cb$23219))) {
                                return request(o$23235);
                            }
                            return request(o$23235, function (err$23263, res$23264) {
                                return function () {
                                    if (truthy(res$23264.statusCode == 200 || res$23264.statusCode == 201)) {
                                        return cb$23219(err$23263, transform(res$23264.body, res$23264));
                                    }
                                    return cb$23219(err$23263, res$23264);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$23218)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$23297 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$23336) {
                        return function () {
                            if (truthy(isFunction(a$23336))) {
                                return aliases(hashMap(), a$23336);
                            }
                            return function () {
                                if (truthy(isObject(a$23336))) {
                                    return aliases(a$23336, false);
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
                    2: function (o$23410, cb$23411) {
                        return req(merge(edenize(o$23410), hashMap('url', '/data/')), cb$23411);
                    }
                };
                var max_arity$23298 = 0;
                for (var a$23299 in fnmap$23297) {
                    max_arity$23298 = a$23299 > max_arity$23298 ? a$23299 : max_arity$23298;
                }
                fnmap$23297[null] = fnmap$23297[max_arity$23298];
                return function () {
                    var f$23441 = fnmap$23297[arguments.length] || fnmap$23297[null];
                    return f$23441.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$23443 = {
                    1: function (cb$23455) {
                        return cdb(get(base, 'db'), hashMap(), cb$23455);
                    },
                    2: function (name$23513, cb$23514) {
                        return cdb(name$23513, hashMap(), cb$23514);
                    },
                    3: function (name$23551, o$23552, cb$23553) {
                        return function () {
                            return function (v$23563) {
                                var o$23565 = v$23563;
                                return req(merge(o$23565, hashMap('url', str('/data/', get(o$23565, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$23551, '"}'))), cb$23553);
                            }.call(this, preopts(o$23552));
                        }.call(this);
                    }
                };
                var max_arity$23444 = 0;
                for (var a$23445 in fnmap$23443) {
                    max_arity$23444 = a$23445 > max_arity$23444 ? a$23445 : max_arity$23444;
                }
                fnmap$23443[null] = fnmap$23443[max_arity$23444];
                return function () {
                    var f$23631 = fnmap$23443[arguments.length] || fnmap$23443[null];
                    return f$23631.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$23633) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$23638) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$23643) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$23648) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$23653) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$23658 = {
                    2: function (query$23667, cb$23668) {
                        return q(query$23667, hashMap(), cb$23668);
                    },
                    3: function (query$23705, o$23706, cb$23707) {
                        return function () {
                            return function (v$23717) {
                                var o$23719 = v$23717;
                                return function (v$23730) {
                                    var data$23732 = v$23730;
                                    return function (v$23735) {
                                        var limit$23737 = v$23735;
                                        return function (v$23740) {
                                            var offset$23742 = v$23740;
                                            return req(merge(edenize(o$23719), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$23705, limit$23737, offset$23742, ' :args [{:db/alias "', get(o$23719, 'alias'), '/', get(o$23719, 'db'), '"}]}'))), cb$23707);
                                        }.call(this, function () {
                                            if (truthy(get(data$23732, 'offset'))) {
                                                return str(' :offset ', get(data$23732, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$23732, 'limit'))) {
                                            return str(' :limit ', get(data$23732, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$23719, 'data'));
                            }.call(this, preopts(o$23706));
                        }.call(this);
                    }
                };
                var max_arity$23659 = 0;
                for (var a$23660 in fnmap$23658) {
                    max_arity$23659 = a$23660 > max_arity$23659 ? a$23660 : max_arity$23659;
                }
                fnmap$23658[null] = fnmap$23658[max_arity$23659];
                return function () {
                    var f$23889 = fnmap$23658[arguments.length] || fnmap$23658[null];
                    return f$23889.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$23891) {
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