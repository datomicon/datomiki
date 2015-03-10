//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
/* jshint ignore:start */
_ki = {
    init: function (self$3823, ns_name$3824) {
        if (_ki.namespaces[ns_name$3824] === undefined) {
            _ki.namespaces[ns_name$3824] = { vars: {} };
        }
        self$3823._ki_ns_name = ns_name$3824;
        self$3823._ki_ns_ctx = self$3823;
        _ki.intern.bind(self$3823)(_ki.modules.core);
        _ki.intern.bind(self$3823)(_ki.modules.mori);
        _ki.intern.bind(self$3823)(_ki.modules);
        _ki.intern.bind(self$3823)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$3825) {
        for (var e$3826 in obj$3825) {
            this[e$3826] = obj$3825[e$3826];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$3827) {
                return x$3827 === false || x$3827 == null ? false : true;
            },
            falsey: function (x$3828) {
                return !truthy(x$3828);
            },
            not: function (x$3829) {
                return !truthy(x$3829);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$3830 = 0;
                for (var i$3831 = 0; i$3831 < arguments.length; i$3831++) {
                    res$3830 += arguments[i$3831];
                }
                return res$3830;
            },
            sub: function () {
                var res$3832 = arguments[0];
                for (var i$3833 = 1; i$3833 < arguments.length; i$3833++) {
                    res$3832 -= arguments[i$3833];
                }
                return res$3832;
            },
            mul: function () {
                var res$3834 = 1;
                for (var i$3835 = 0; i$3835 < arguments.length; i$3835++) {
                    res$3834 *= arguments[i$3835];
                }
                return res$3834;
            },
            div: function () {
                var res$3836 = arguments[0];
                for (var i$3837 = 1; i$3837 < arguments.length; i$3837++) {
                    res$3836 /= arguments[i$3837];
                }
                return res$3836;
            },
            mod: function (a$3838, b$3839) {
                return a$3838 % b$3839;
            },
            lt: function () {
                var res$3840 = true;
                for (var i$3841 = 0; i$3841 < arguments.length - 1; i$3841++) {
                    res$3840 = res$3840 && arguments[i$3841] < arguments[i$3841 + 1];
                    if (!res$3840)
                        break;
                }
                return res$3840;
            },
            gt: function () {
                var res$3842 = true;
                for (var i$3843 = 0; i$3843 < arguments.length - 1; i$3843++) {
                    res$3842 = res$3842 && arguments[i$3843] > arguments[i$3843 + 1];
                    if (!res$3842)
                        break;
                }
                return res$3842;
            },
            leq: function () {
                var res$3844 = true;
                for (var i$3845 = 0; i$3845 < arguments.length - 1; i$3845++) {
                    res$3844 = res$3844 && arguments[i$3845] <= arguments[i$3845 + 1];
                    if (!res$3844)
                        break;
                }
                return res$3844;
            },
            geq: function () {
                var res$3846 = true;
                for (var i$3847 = 0; i$3847 < arguments.length - 1; i$3847++) {
                    res$3846 = res$3846 && arguments[i$3847] >= arguments[i$3847 + 1];
                }
                return res$3846;
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
            } catch (e$3848) {
                try {
                    return require('mori');
                } catch (e$3849) {
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
            _ki_ns_ctx['pick'] = function (from$3979, keys$3980) {
                return function () {
                    return function (v$3985) {
                        var res$3987 = v$3985;
                        return function () {
                            var res$3991 = {};
                            do {
                                res$3991 = function () {
                                    return function (v$4017) {
                                        var key$4019 = v$4017;
                                        return function () {
                                            if (truthy(key$4019 == undefined)) {
                                                return res$3987;
                                            }
                                            return function () {
                                                res$3987[key$4019] = from$3979[key$4019];
                                                return {
                                                    _ki_recur: true,
                                                    _ki_vals: [keys$3980.pop()]
                                                };
                                            }.call(this);
                                        }.call(this);
                                    }(res$3991._ki_vals === undefined ? keys$3980.pop() : res$3991._ki_vals[0]);
                                    ;
                                }();
                            } while ((res$3991 || 0)._ki_recur);
                            return res$3991;
                        }.call(this);
                    }.call(this, {});
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.pick = _ki_ns_ctx['pick'];
            return _ki_ns_ctx['pick'];
        }());
        (function () {
            _ki_ns_ctx['transform'] = function (body$4058, response$4059) {
                return function () {
                    return function (v$4064) {
                        var o$4066 = v$4064;
                        return function () {
                            if (o$4066.format === 'json' && response$4059.headers['content-type'] === o$4066.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$4059.body = edn.toJS(edn.parse(body$4058));
                                } catch (e$4074) {
                                    console.error('Exception: string isn\'t edn - ' + e$4074);
                                    console.error(body$4058);
                                }
                            }
                            ;
                            return function () {
                                return function (v$4077) {
                                    var partial$4079 = v$4077;
                                    return function () {
                                        if (truthy(isArray(partial$4079))) {
                                            return pick(response$4059, partial$4079);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$4079))) {
                                                return response$4059[partial$4079];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$4059;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$4066.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$4059.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$4359) {
                return toClj(data$4359);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$4368) {
                return merge(base, edenize(opts$4368), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$4395 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$4407) {
                        return function () {
                            return function (v$4412) {
                                var o$4414 = v$4412;
                                return assoc(o$4414, 'uri', str(get(o$4414, 'uri'), get(o$4414, 'url')), 'headers', hashMap('Accept', get(o$4414, 'accept'), 'Content-Type', get(o$4414, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$4407, 'pre'))) {
                                    return opts$4407;
                                }
                                return merge(base, edenize(opts$4407));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$4396 = 0;
                for (var a$4397 in fnmap$4395) {
                    max_arity$4396 = a$4397 > max_arity$4396 ? a$4397 : max_arity$4396;
                }
                fnmap$4395[null] = fnmap$4395[max_arity$4396];
                return function () {
                    var f$4512 = fnmap$4395[arguments.length] || fnmap$4395[null];
                    return f$4512.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$4514, cb$4515) {
                return function () {
                    return function (v$4529) {
                        var o$4531 = v$4529;
                        return function () {
                            if (truthy(falsey(cb$4515))) {
                                return request(o$4531);
                            }
                            return request(o$4531, function (err$4559, res$4560) {
                                return function () {
                                    if (truthy(res$4560.statusCode == 200 || res$4560.statusCode == 201)) {
                                        return cb$4515(err$4559, transform(res$4560.body, res$4560));
                                    }
                                    return cb$4515(err$4559, res$4560);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$4514)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$4593 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$4632) {
                        return function () {
                            if (truthy(isFunction(a$4632))) {
                                return aliases(hashMap(), a$4632);
                            }
                            return function () {
                                if (truthy(isObject(a$4632))) {
                                    return aliases(a$4632, false);
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
                    2: function (o$4706, cb$4707) {
                        return req(merge(edenize(o$4706), hashMap('url', '/data/')), cb$4707);
                    }
                };
                var max_arity$4594 = 0;
                for (var a$4595 in fnmap$4593) {
                    max_arity$4594 = a$4595 > max_arity$4594 ? a$4595 : max_arity$4594;
                }
                fnmap$4593[null] = fnmap$4593[max_arity$4594];
                return function () {
                    var f$4737 = fnmap$4593[arguments.length] || fnmap$4593[null];
                    return f$4737.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$4739 = {
                    1: function (cb$4751) {
                        return cdb(get(base, 'db'), hashMap(), cb$4751);
                    },
                    2: function (name$4809, cb$4810) {
                        return cdb(name$4809, hashMap(), cb$4810);
                    },
                    3: function (name$4847, o$4848, cb$4849) {
                        return function () {
                            return function (v$4859) {
                                var o$4861 = v$4859;
                                return req(merge(o$4861, hashMap('url', str('/data/', get(o$4861, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$4847, '"}'))), cb$4849);
                            }.call(this, preopts(o$4848));
                        }.call(this);
                    }
                };
                var max_arity$4740 = 0;
                for (var a$4741 in fnmap$4739) {
                    max_arity$4740 = a$4741 > max_arity$4740 ? a$4741 : max_arity$4740;
                }
                fnmap$4739[null] = fnmap$4739[max_arity$4740];
                return function () {
                    var f$4927 = fnmap$4739[arguments.length] || fnmap$4739[null];
                    return f$4927.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$4929) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$4934) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$4939) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$4944) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$4949) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$4954 = {
                    2: function (query$4963, cb$4964) {
                        return q(query$4963, hashMap(), cb$4964);
                    },
                    3: function (query$5001, o$5002, cb$5003) {
                        return function () {
                            return function (v$5013) {
                                var o$5015 = v$5013;
                                return function (v$5026) {
                                    var data$5028 = v$5026;
                                    return function (v$5031) {
                                        var limit$5033 = v$5031;
                                        return function (v$5036) {
                                            var offset$5038 = v$5036;
                                            return req(merge(edenize(o$5015), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$5001, limit$5033, offset$5038, ' :args [{:db/alias "', get(o$5015, 'alias'), '/', get(o$5015, 'db'), '"}]}'))), cb$5003);
                                        }.call(this, function () {
                                            if (truthy(get(data$5028, 'offset'))) {
                                                return str(' :offset ', get(data$5028, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$5028, 'limit'))) {
                                            return str(' :limit ', get(data$5028, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$5015, 'data'));
                            }.call(this, preopts(o$5002));
                        }.call(this);
                    }
                };
                var max_arity$4955 = 0;
                for (var a$4956 in fnmap$4954) {
                    max_arity$4955 = a$4956 > max_arity$4955 ? a$4956 : max_arity$4955;
                }
                fnmap$4954[null] = fnmap$4954[max_arity$4955];
                return function () {
                    var f$5185 = fnmap$4954[arguments.length] || fnmap$4954[null];
                    return f$5185.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$5187) {
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