//# sourceMappingURL=datomiki.js.map
require('source-map-support').install();
/* jshint ignore:start */
_ki = {
    init: function (self$4664, ns_name$4665) {
        if (_ki.namespaces[ns_name$4665] === undefined) {
            _ki.namespaces[ns_name$4665] = { vars: {} };
        }
        self$4664._ki_ns_name = ns_name$4665;
        self$4664._ki_ns_ctx = self$4664;
        _ki.intern.bind(self$4664)(_ki.modules.core);
        _ki.intern.bind(self$4664)(_ki.modules.mori);
        _ki.intern.bind(self$4664)(_ki.modules);
        _ki.intern.bind(self$4664)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$4666) {
        for (var e$4667 in obj$4666) {
            this[e$4667] = obj$4666[e$4667];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$4668) {
                return x$4668 === false || x$4668 == null ? false : true;
            },
            falsey: function (x$4669) {
                return !truthy(x$4669);
            },
            not: function (x$4670) {
                return !truthy(x$4670);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$4671 = 0;
                for (var i$4672 = 0; i$4672 < arguments.length; i$4672++) {
                    res$4671 += arguments[i$4672];
                }
                return res$4671;
            },
            sub: function () {
                var res$4673 = arguments[0];
                for (var i$4674 = 1; i$4674 < arguments.length; i$4674++) {
                    res$4673 -= arguments[i$4674];
                }
                return res$4673;
            },
            mul: function () {
                var res$4675 = 1;
                for (var i$4676 = 0; i$4676 < arguments.length; i$4676++) {
                    res$4675 *= arguments[i$4676];
                }
                return res$4675;
            },
            div: function () {
                var res$4677 = arguments[0];
                for (var i$4678 = 1; i$4678 < arguments.length; i$4678++) {
                    res$4677 /= arguments[i$4678];
                }
                return res$4677;
            },
            mod: function (a$4679, b$4680) {
                return a$4679 % b$4680;
            },
            lt: function () {
                var res$4681 = true;
                for (var i$4682 = 0; i$4682 < arguments.length - 1; i$4682++) {
                    res$4681 = res$4681 && arguments[i$4682] < arguments[i$4682 + 1];
                    if (!res$4681)
                        break;
                }
                return res$4681;
            },
            gt: function () {
                var res$4683 = true;
                for (var i$4684 = 0; i$4684 < arguments.length - 1; i$4684++) {
                    res$4683 = res$4683 && arguments[i$4684] > arguments[i$4684 + 1];
                    if (!res$4683)
                        break;
                }
                return res$4683;
            },
            leq: function () {
                var res$4685 = true;
                for (var i$4686 = 0; i$4686 < arguments.length - 1; i$4686++) {
                    res$4685 = res$4685 && arguments[i$4686] <= arguments[i$4686 + 1];
                    if (!res$4685)
                        break;
                }
                return res$4685;
            },
            geq: function () {
                var res$4687 = true;
                for (var i$4688 = 0; i$4688 < arguments.length - 1; i$4688++) {
                    res$4687 = res$4687 && arguments[i$4688] >= arguments[i$4688 + 1];
                }
                return res$4687;
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
            } catch (e$4689) {
                try {
                    return require('mori');
                } catch (e$4690) {
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
            _ki_ns_ctx['transform'] = function (body$4820, response$4821) {
                return function () {
                    return function (v$4826) {
                        var o$4828 = v$4826;
                        return function () {
                            if (o$4828.format === 'json' && response$4821.headers['content-type'] === o$4828.expect) {
                                try {
                                    // it should mutate the body - making it json
                                    response$4821.body = edn.toJS(edn.parse(body$4820));
                                } catch (e$4836) {
                                    console.error('Exception: string isn\'t edn - ' + e$4836);
                                    console.error(body$4820);
                                }
                            }
                            ;
                            return function () {
                                return function (v$4839) {
                                    var partial$4841 = v$4839;
                                    return function () {
                                        if (truthy(isArray(partial$4841))) {
                                            return apply(pick, response$4821, partial$4841);
                                        }
                                        return function () {
                                            if (truthy(isString(partial$4841))) {
                                                return response$4821[partial$4841];
                                            }
                                            return function () {
                                                if (truthy(keyword('else'))) {
                                                    return response$4821;
                                                }
                                                return undefined;
                                            }.call(this);
                                        }.call(this);
                                    }.call(this);
                                }.call(this, o$4828.partial);
                            }.call(this);
                        }.call(this);
                    }.call(this, response$4821.request._rp_options);
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
            _ki_ns_ctx['edenize'] = function (data$5124) {
                return toClj(data$5124);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$5133) {
                return merge(base, edenize(opts$5133), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$5160 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$5172) {
                        return function () {
                            return function (v$5177) {
                                var o$5179 = v$5177;
                                return assoc(o$5179, 'uri', str(get(o$5179, 'uri'), get(o$5179, 'url')), 'headers', hashMap('Accept', get(o$5179, 'accept'), 'Content-Type', get(o$5179, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$5172, 'pre'))) {
                                    return opts$5172;
                                }
                                return merge(base, edenize(opts$5172));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$5161 = 0;
                for (var a$5162 in fnmap$5160) {
                    max_arity$5161 = a$5162 > max_arity$5161 ? a$5162 : max_arity$5161;
                }
                fnmap$5160[null] = fnmap$5160[max_arity$5161];
                return function () {
                    var f$5277 = fnmap$5160[arguments.length] || fnmap$5160[null];
                    return f$5277.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$5279, cb$5280) {
                return function () {
                    return function (v$5294) {
                        var o$5296 = v$5294;
                        return function () {
                            if (truthy(falsey(cb$5280))) {
                                return request(o$5296);
                            }
                            return request(o$5296, function (err$5324, res$5325) {
                                return function () {
                                    if (truthy(res$5325.statusCode == 200 || res$5325.statusCode == 201)) {
                                        return cb$5280(err$5324, transform(res$5325.body, res$5325));
                                    }
                                    return cb$5280(err$5324, res$5325);
                                }.call(this);
                            });
                        }.call(this);
                    }.call(this, toJs(opts(o$5279)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$5358 = {
                    0: function () {
                        return aliases(hashMap(), false);
                    },
                    1: function (a$5397) {
                        return function () {
                            if (truthy(isFunction(a$5397))) {
                                return aliases(hashMap(), a$5397);
                            }
                            return function () {
                                if (truthy(isObject(a$5397))) {
                                    return aliases(a$5397, false);
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
                    2: function (o$5471, cb$5472) {
                        return req(merge(edenize(o$5471), hashMap('url', '/data/')), cb$5472);
                    }
                };
                var max_arity$5359 = 0;
                for (var a$5360 in fnmap$5358) {
                    max_arity$5359 = a$5360 > max_arity$5359 ? a$5360 : max_arity$5359;
                }
                fnmap$5358[null] = fnmap$5358[max_arity$5359];
                return function () {
                    var f$5502 = fnmap$5358[arguments.length] || fnmap$5358[null];
                    return f$5502.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$5504 = {
                    1: function (cb$5516) {
                        return cdb(get(base, 'db'), hashMap(), cb$5516);
                    },
                    2: function (name$5574, cb$5575) {
                        return cdb(name$5574, hashMap(), cb$5575);
                    },
                    3: function (name$5612, o$5613, cb$5614) {
                        return function () {
                            return function (v$5624) {
                                var o$5626 = v$5624;
                                return req(merge(o$5626, hashMap('url', str('/data/', get(o$5626, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$5612, '"}'))), cb$5614);
                            }.call(this, preopts(o$5613));
                        }.call(this);
                    }
                };
                var max_arity$5505 = 0;
                for (var a$5506 in fnmap$5504) {
                    max_arity$5505 = a$5506 > max_arity$5505 ? a$5506 : max_arity$5505;
                }
                fnmap$5504[null] = fnmap$5504[max_arity$5505];
                return function () {
                    var f$5692 = fnmap$5504[arguments.length] || fnmap$5504[null];
                    return f$5692.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$5694) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$5699) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$5704) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$5709) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$5714) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$5719 = {
                    2: function (query$5728, cb$5729) {
                        return q(query$5728, hashMap(), cb$5729);
                    },
                    3: function (query$5766, o$5767, cb$5768) {
                        return function () {
                            return function (v$5778) {
                                var o$5780 = v$5778;
                                return function (v$5791) {
                                    var data$5793 = v$5791;
                                    return function (v$5796) {
                                        var limit$5798 = v$5796;
                                        return function (v$5801) {
                                            var offset$5803 = v$5801;
                                            return req(merge(edenize(o$5780), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$5766, limit$5798, offset$5803, ' :args [{:db/alias "', get(o$5780, 'alias'), '/', get(o$5780, 'db'), '"}]}'))), cb$5768);
                                        }.call(this, function () {
                                            if (truthy(get(data$5793, 'offset'))) {
                                                return str(' :offset ', get(data$5793, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$5793, 'limit'))) {
                                            return str(' :limit ', get(data$5793, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$5780, 'data'));
                            }.call(this, preopts(o$5767));
                        }.call(this);
                    }
                };
                var max_arity$5720 = 0;
                for (var a$5721 in fnmap$5719) {
                    max_arity$5720 = a$5721 > max_arity$5720 ? a$5721 : max_arity$5720;
                }
                fnmap$5719[null] = fnmap$5719[max_arity$5720];
                return function () {
                    var f$5950 = fnmap$5719[arguments.length] || fnmap$5719[null];
                    return f$5950.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$5952) {
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