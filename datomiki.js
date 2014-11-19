_ki = {
    init: function (self$4766, ns_name$4767) {
        if (_ki.namespaces[ns_name$4767] === undefined) {
            _ki.namespaces[ns_name$4767] = { vars: {} };
        }
        self$4766._ki_ns_name = ns_name$4767;
        self$4766._ki_ns_ctx = self$4766;
        _ki.intern.bind(self$4766)(_ki.modules.core);
        _ki.intern.bind(self$4766)(_ki.modules.mori);
        _ki.intern.bind(self$4766)(_ki.modules);
        _ki.intern.bind(self$4766)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$4768) {
        for (var e$4769 in obj$4768) {
            this[e$4769] = obj$4768[e$4769];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$4770) {
                return x$4770 === false || x$4770 == null ? false : true;
            },
            falsey: function (x$4771) {
                return !truthy(x$4771);
            },
            not: function (x$4772) {
                return !truthy(x$4772);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$4773 = 0;
                for (var i$4774 = 0; i$4774 < arguments.length; i$4774++) {
                    res$4773 += arguments[i$4774];
                }
                return res$4773;
            },
            sub: function () {
                var res$4775 = arguments[0];
                for (var i$4776 = 1; i$4776 < arguments.length; i$4776++) {
                    res$4775 -= arguments[i$4776];
                }
                return res$4775;
            },
            mul: function () {
                var res$4777 = 1;
                for (var i$4778 = 0; i$4778 < arguments.length; i$4778++) {
                    res$4777 *= arguments[i$4778];
                }
                return res$4777;
            },
            div: function () {
                var res$4779 = arguments[0];
                for (var i$4780 = 1; i$4780 < arguments.length; i$4780++) {
                    res$4779 /= arguments[i$4780];
                }
                return res$4779;
            },
            mod: function (a$4781, b$4782) {
                return a$4781 % b$4782;
            },
            lt: function () {
                var res$4783 = true;
                for (var i$4784 = 0; i$4784 < arguments.length - 1; i$4784++) {
                    res$4783 = res$4783 && arguments[i$4784] < arguments[i$4784 + 1];
                    if (!res$4783)
                        break;
                }
                return res$4783;
            },
            gt: function () {
                var res$4785 = true;
                for (var i$4786 = 0; i$4786 < arguments.length - 1; i$4786++) {
                    res$4785 = res$4785 && arguments[i$4786] > arguments[i$4786 + 1];
                    if (!res$4785)
                        break;
                }
                return res$4785;
            },
            leq: function () {
                var res$4787 = true;
                for (var i$4788 = 0; i$4788 < arguments.length - 1; i$4788++) {
                    res$4787 = res$4787 && arguments[i$4788] <= arguments[i$4788 + 1];
                    if (!res$4787)
                        break;
                }
                return res$4787;
            },
            geq: function () {
                var res$4789 = true;
                for (var i$4790 = 0; i$4790 < arguments.length - 1; i$4790++) {
                    res$4789 = res$4789 && arguments[i$4790] >= arguments[i$4790 + 1];
                }
                return res$4789;
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
            } catch (e$4791) {
                try {
                    return require('mori');
                } catch (e$4792) {
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
            _ki_ns_ctx['base'] = hash_map('uri', 'http://localhost:8888', 'alias', 'free', 'named', 'test', 'db', '', 'url', '/', 'basis', '-', 'method', 'get', 'data', hash_map(), 'format', 'edn', 'accept', 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                var fnmap$5068 = {
                        0: function () {
                            return base;
                        },
                        1: function (opts$5080) {
                            return function () {
                                return function (v$5097) {
                                    var m$5099 = v$5097;
                                    return assoc(m$5099, 'db', str(get(m$5099, 'alias'), '/', get(m$5099, 'named')), 'uri', str(get(m$5099, 'uri'), get(m$5099, 'url')), 'headers', hash_map('accept', get(m$5099, 'accept')));
                                }.call(this, merge(base, js_to_clj(opts$5080)));
                            }.call(this);
                        }
                    };
                var max_arity$5069 = 0;
                for (var a$5070 in fnmap$5068) {
                    max_arity$5069 = a$5070 > max_arity$5069 ? a$5070 : max_arity$5069;
                }
                fnmap$5068[null] = fnmap$5068[max_arity$5069];
                return function () {
                    var f$5186 = fnmap$5068[arguments.length] || fnmap$5068[null];
                    return f$5186.apply(this, arguments);
                };
            }.call(this);
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['req'] = function (opts$5188) {
                'options for calling request with';
                return function () {
                    return function (v$5201) {
                        var o$5203 = v$5201;
                        return o$5203;
                    }.call(this, conn(opts$5188));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.req = _ki_ns_ctx['req'];
            return _ki_ns_ctx['req'];
        }());
        (function () {
            _ki_ns_ctx['aliases'] = function (opts$5209) {
                return 'list aliases';
            };
            _ki.namespaces[_ki_ns_name].vars.aliases = _ki_ns_ctx['aliases'];
            return _ki_ns_ctx['aliases'];
        }());
        (function () {
            _ki_ns_ctx['cdb'] = function (opts$5214) {
                return 'create database';
            };
            _ki.namespaces[_ki_ns_name].vars.cdb = _ki_ns_ctx['cdb'];
            return _ki_ns_ctx['cdb'];
        }());
        (function () {
            _ki_ns_ctx['dbs'] = function (opts$5219) {
                return 'list databases';
            };
            _ki.namespaces[_ki_ns_name].vars.dbs = _ki_ns_ctx['dbs'];
            return _ki_ns_ctx['dbs'];
        }());
        (function () {
            _ki_ns_ctx['info'] = function (opts$5224) {
                return 'retrieve database info';
            };
            _ki.namespaces[_ki_ns_name].vars.info = _ki_ns_ctx['info'];
            return _ki_ns_ctx['info'];
        }());
        (function () {
            _ki_ns_ctx['transact'] = function (opts$5229) {
                return 'process transaction';
            };
            _ki.namespaces[_ki_ns_name].vars.transact = _ki_ns_ctx['transact'];
            return _ki_ns_ctx['transact'];
        }());
        (function () {
            _ki_ns_ctx['datoms'] = function (opts$5234) {
                return 'retrieve datoms';
            };
            _ki.namespaces[_ki_ns_name].vars.datoms = _ki_ns_ctx['datoms'];
            return _ki_ns_ctx['datoms'];
        }());
        (function () {
            _ki_ns_ctx['entity'] = function (opts$5239) {
                return 'retrieve entity';
            };
            _ki.namespaces[_ki_ns_name].vars.entity = _ki_ns_ctx['entity'];
            return _ki_ns_ctx['entity'];
        }());
        (function () {
            _ki_ns_ctx['q'] = function (opts$5244) {
                return 'query';
            };
            _ki.namespaces[_ki_ns_name].vars.q = _ki_ns_ctx['q'];
            return _ki_ns_ctx['q'];
        }());
        (function () {
            _ki_ns_ctx['events'] = function (opts$5249) {
                return 'subscribe to events';
            };
            _ki.namespaces[_ki_ns_name].vars.events = _ki_ns_ctx['events'];
            return _ki_ns_ctx['events'];
        }());
        return exports.opts = opts;
    }();
}());
//# sourceMappingURL=datomiki.js.map