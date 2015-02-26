_ki = {
    init: function (self$3817, ns_name$3818) {
        if (_ki.namespaces[ns_name$3818] === undefined) {
            _ki.namespaces[ns_name$3818] = { vars: {} };
        }
        self$3817._ki_ns_name = ns_name$3818;
        self$3817._ki_ns_ctx = self$3817;
        _ki.intern.bind(self$3817)(_ki.modules.core);
        _ki.intern.bind(self$3817)(_ki.modules.mori);
        _ki.intern.bind(self$3817)(_ki.modules);
        _ki.intern.bind(self$3817)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$3819) {
        for (var e$3820 in obj$3819) {
            this[e$3820] = obj$3819[e$3820];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$3821) {
                return x$3821 === false || x$3821 == null ? false : true;
            },
            falsey: function (x$3822) {
                return !truthy(x$3822);
            },
            not: function (x$3823) {
                return !truthy(x$3823);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$3824 = 0;
                for (var i$3825 = 0; i$3825 < arguments.length; i$3825++) {
                    res$3824 += arguments[i$3825];
                }
                return res$3824;
            },
            sub: function () {
                var res$3826 = arguments[0];
                for (var i$3827 = 1; i$3827 < arguments.length; i$3827++) {
                    res$3826 -= arguments[i$3827];
                }
                return res$3826;
            },
            mul: function () {
                var res$3828 = 1;
                for (var i$3829 = 0; i$3829 < arguments.length; i$3829++) {
                    res$3828 *= arguments[i$3829];
                }
                return res$3828;
            },
            div: function () {
                var res$3830 = arguments[0];
                for (var i$3831 = 1; i$3831 < arguments.length; i$3831++) {
                    res$3830 /= arguments[i$3831];
                }
                return res$3830;
            },
            mod: function (a$3832, b$3833) {
                return a$3832 % b$3833;
            },
            lt: function () {
                var res$3834 = true;
                for (var i$3835 = 0; i$3835 < arguments.length - 1; i$3835++) {
                    res$3834 = res$3834 && arguments[i$3835] < arguments[i$3835 + 1];
                    if (!res$3834)
                        break;
                }
                return res$3834;
            },
            gt: function () {
                var res$3836 = true;
                for (var i$3837 = 0; i$3837 < arguments.length - 1; i$3837++) {
                    res$3836 = res$3836 && arguments[i$3837] > arguments[i$3837 + 1];
                    if (!res$3836)
                        break;
                }
                return res$3836;
            },
            leq: function () {
                var res$3838 = true;
                for (var i$3839 = 0; i$3839 < arguments.length - 1; i$3839++) {
                    res$3838 = res$3838 && arguments[i$3839] <= arguments[i$3839 + 1];
                    if (!res$3838)
                        break;
                }
                return res$3838;
            },
            geq: function () {
                var res$3840 = true;
                for (var i$3841 = 0; i$3841 < arguments.length - 1; i$3841++) {
                    res$3840 = res$3840 && arguments[i$3841] >= arguments[i$3841 + 1];
                }
                return res$3840;
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
            } catch (e$3842) {
                try {
                    return require('mori');
                } catch (e$3843) {
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
            'db', 'test', // the name of the db
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
            _ki_ns_ctx['edenize'] = function (data$4165) {
                return toClj(data$4165);
            };
            _ki.namespaces[_ki_ns_name].vars.edenize = _ki_ns_ctx['edenize'];
            return _ki_ns_ctx['edenize'];
        }());
        (function () {
            _ki_ns_ctx['jsonize'] = function (data$4174) {
                return function () {
                    try {
                        return edn.toJS(edn.parse(data$4174));
                    } catch (e$4178) {
                        console.error('Exception: string isn\'t edn - ' + e$4178);
                        console.error(data$4174);
                        return data$4174;
                    }
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.jsonize = _ki_ns_ctx['jsonize'];
            return _ki_ns_ctx['jsonize'];
        }());
        (function () {
            _ki_ns_ctx['preopts'] = function (opts$4181) {
                return merge(base, edenize(opts$4181), hashMap('pre', true));
            };
            _ki.namespaces[_ki_ns_name].vars.preopts = _ki_ns_ctx['preopts'];
            return _ki_ns_ctx['preopts'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$4208 = {
                    0: function () {
                        return base;
                    },
                    1: function (opts$4220) {
                        return function () {
                            return function (v$4225) {
                                var o$4227 = v$4225;
                                return assoc(o$4227, 'uri', str(get(o$4227, 'uri'), get(o$4227, 'url')), 'headers', hashMap('Accept', get(o$4227, 'accept'), 'Content-Type', get(o$4227, 'content-type')));
                            }.call(this, function () {
                                if (truthy(get(opts$4220, 'pre'))) {
                                    return opts$4220;
                                }
                                return merge(base, edenize(opts$4220));
                            }.call(this));
                        }.call(this);
                    }
                };
                var max_arity$4209 = 0;
                for (var a$4210 in fnmap$4208) {
                    max_arity$4209 = a$4210 > max_arity$4209 ? a$4210 : max_arity$4209;
                }
                fnmap$4208[null] = fnmap$4208[max_arity$4209];
                return function () {
                    var f$4325 = fnmap$4208[arguments.length] || fnmap$4208[null];
                    return f$4325.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['response'] = // perhaps for debugging -- request's json, though the body format is edn
            function (res$4327, o$4328) {
                return function () {
                    if (truthy(o$4328.resmod)) {
                        return function () {
                            if (truthy(equals('json', o$4328.format))) {
                                return {
                                    'code': res$4327.statusCode,
                                    'body': o$4328.accept == 'application/edn' ? jsonize(res$4327.body) : res$4327.body
                                };
                            }
                            return hashMap(keyword('code'), res$4327.statusCode, keyword('body'), res$4327.body);
                        }.call(this);
                    }
                    return res$4327;
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.response = _ki_ns_ctx['response'];
            return _ki_ns_ctx['response'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (o$4375, cb$4376) {
                return function () {
                    return function (v$4390) {
                        var o$4392 = v$4390;
                        return request(o$4392, function (err$4403, res$4404) {
                            return cb$4376(err$4403, response(res$4404, o$4392));
                        });
                    }.call(this, toJs(opts(o$4375)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function () {
                var fnmap$4423 = {
                    1: function (cb$4432) {
                        return aliases(hashMap(), cb$4432);
                    },
                    2: function (o$4460, cb$4461) {
                        return req(merge(edenize(o$4460), hashMap('url', '/data/')), cb$4461);
                    }
                };
                var max_arity$4424 = 0;
                for (var a$4425 in fnmap$4423) {
                    max_arity$4424 = a$4425 > max_arity$4424 ? a$4425 : max_arity$4424;
                }
                fnmap$4423[null] = fnmap$4423[max_arity$4424];
                return function () {
                    var f$4491 = fnmap$4423[arguments.length] || fnmap$4423[null];
                    return f$4491.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function () {
                var fnmap$4493 = {
                    1: function (cb$4505) {
                        return cdb(get(base, 'db'), hashMap(), cb$4505);
                    },
                    2: function (name$4563, cb$4564) {
                        return cdb(name$4563, hashMap(), cb$4564);
                    },
                    3: function (name$4601, o$4602, cb$4603) {
                        return function () {
                            return function (v$4613) {
                                var o$4615 = v$4613;
                                return req(merge(o$4615, hashMap('url', str('/data/', get(base, 'alias'), '/'), 'method', 'post', 'body', str('{:db-name "', name$4601, '"}'))), cb$4603);
                            }.call(this, preopts(o$4602));
                        }.call(this);
                    }
                };
                var max_arity$4494 = 0;
                for (var a$4495 in fnmap$4493) {
                    max_arity$4494 = a$4495 > max_arity$4494 ? a$4495 : max_arity$4494;
                }
                fnmap$4493[null] = fnmap$4493[max_arity$4494];
                return function () {
                    var f$4681 = fnmap$4493[arguments.length] || fnmap$4493[null];
                    return f$4681.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$4683) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$4688) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$4693) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$4698) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$4703) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function () {
                var fnmap$4708 = {
                    2: function (query$4717, cb$4718) {
                        return q(query$4717, hashMap(), cb$4718);
                    },
                    3: function (query$4755, o$4756, cb$4757) {
                        return function () {
                            return function (v$4767) {
                                var o$4769 = v$4767;
                                return function (v$4780) {
                                    var data$4782 = v$4780;
                                    return function (v$4785) {
                                        var limit$4787 = v$4785;
                                        return function (v$4790) {
                                            var offset$4792 = v$4790;
                                            return req(merge(edenize(o$4769), hashMap('url', '/api/query', 'method', 'post', 'body', str('{:q ', query$4755, limit$4787, offset$4792, ' :args [{:db/alias "', get(o$4769, 'alias'), '/', get(o$4769, 'db'), '"}]}'))), cb$4757);
                                        }.call(this, function () {
                                            if (truthy(get(data$4782, 'offset'))) {
                                                return str(' :offset ', get(data$4782, 'offset'));
                                            }
                                            return '';
                                        }.call(this));
                                    }.call(this, function () {
                                        if (truthy(get(data$4782, 'limit'))) {
                                            return str(' :limit ', get(data$4782, 'limit'));
                                        }
                                        return '';
                                    }.call(this));
                                }.call(this, get(o$4769, 'data'));
                            }.call(this, preopts(o$4756));
                        }.call(this);
                    }
                };
                var max_arity$4709 = 0;
                for (var a$4710 in fnmap$4708) {
                    max_arity$4709 = a$4710 > max_arity$4709 ? a$4710 : max_arity$4709;
                }
                fnmap$4708[null] = fnmap$4708[max_arity$4709];
                return function () {
                    var f$4939 = fnmap$4708[arguments.length] || fnmap$4708[null];
                    return f$4939.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$4941) {
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