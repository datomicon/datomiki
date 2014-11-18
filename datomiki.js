_ki = {
    init: function (self$9329, ns_name$9330) {
        if (_ki.namespaces[ns_name$9330] === undefined) {
            _ki.namespaces[ns_name$9330] = { vars: {} };
        }
        self$9329._ki_ns_name = ns_name$9330;
        self$9329._ki_ns_ctx = self$9329;
        _ki.intern.bind(self$9329)(_ki.modules.core);
        _ki.intern.bind(self$9329)(_ki.modules.mori);
        _ki.intern.bind(self$9329)(_ki.modules);
        _ki.intern.bind(self$9329)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$9331) {
        for (var e$9332 in obj$9331) {
            this[e$9332] = obj$9331[e$9332];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$9333) {
                return x$9333 === false || x$9333 == null ? false : true;
            },
            falsey: function (x$9334) {
                return !truthy(x$9334);
            },
            not: function (x$9335) {
                return !truthy(x$9335);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$9336 = 0;
                for (var i$9337 = 0; i$9337 < arguments.length; i$9337++) {
                    res$9336 += arguments[i$9337];
                }
                return res$9336;
            },
            sub: function () {
                var res$9338 = arguments[0];
                for (var i$9339 = 1; i$9339 < arguments.length; i$9339++) {
                    res$9338 -= arguments[i$9339];
                }
                return res$9338;
            },
            mul: function () {
                var res$9340 = 1;
                for (var i$9341 = 0; i$9341 < arguments.length; i$9341++) {
                    res$9340 *= arguments[i$9341];
                }
                return res$9340;
            },
            div: function () {
                var res$9342 = arguments[0];
                for (var i$9343 = 1; i$9343 < arguments.length; i$9343++) {
                    res$9342 /= arguments[i$9343];
                }
                return res$9342;
            },
            mod: function (a$9344, b$9345) {
                return a$9344 % b$9345;
            },
            lt: function () {
                var res$9346 = true;
                for (var i$9347 = 0; i$9347 < arguments.length - 1; i$9347++) {
                    res$9346 = res$9346 && arguments[i$9347] < arguments[i$9347 + 1];
                    if (!res$9346)
                        break;
                }
                return res$9346;
            },
            gt: function () {
                var res$9348 = true;
                for (var i$9349 = 0; i$9349 < arguments.length - 1; i$9349++) {
                    res$9348 = res$9348 && arguments[i$9349] > arguments[i$9349 + 1];
                    if (!res$9348)
                        break;
                }
                return res$9348;
            },
            leq: function () {
                var res$9350 = true;
                for (var i$9351 = 0; i$9351 < arguments.length - 1; i$9351++) {
                    res$9350 = res$9350 && arguments[i$9351] <= arguments[i$9351 + 1];
                    if (!res$9350)
                        break;
                }
                return res$9350;
            },
            geq: function () {
                var res$9352 = true;
                for (var i$9353 = 0; i$9353 < arguments.length - 1; i$9353++) {
                    res$9352 = res$9352 && arguments[i$9353] >= arguments[i$9353 + 1];
                }
                return res$9352;
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
            } catch (e$9354) {
                try {
                    return require('mori');
                } catch (e$9355) {
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
            _ki_ns_ctx['base'] = hash_map(keyword('uri'), 'http://localhost:8888', keyword('alias'), 'mem', keyword('name'), 'test', keyword('db'), '', keyword('url'), '/', keyword('basis'), '-', keyword('method'), 'get', keyword('data'), hash_map(), keyword('format'), 'edn', keyword('accept'), 'application/edn');
            _ki.namespaces[_ki_ns_name].vars.base = _ki_ns_ctx['base'];
            return _ki_ns_ctx['base'];
        }());
        (function () {
            _ki_ns_ctx['opts'] = function () {
                return base;
            };
            _ki.namespaces[_ki_ns_name].vars.opts = _ki_ns_ctx['opts'];
            return _ki_ns_ctx['opts'];
        }());
        (function () {
            _ki_ns_ctx['conn'] = function (opts$9738) {
                return function () {
                    return function (v$9755) {
                        var m$9757 = v$9755;
                        return assoc(m$9757, keyword('db'), str(get(m$9757, keyword('alias')), '/', get(m$9757, keyword('name'))), keyword('url'), str(get(m$9757, keyword('uri')), get(m$9757, keyword('url'))));
                    }.call(this, merge(base, js_to_clj(opts$9738)));
                }.call(this);
            };
            _ki.namespaces[_ki_ns_name].vars.conn = _ki_ns_ctx['conn'];
            return _ki_ns_ctx['conn'];
        }());
        exports.opts = opts;
        return exports.conn = conn;
    }();
}());
//# sourceMappingURL=datomiki.js.map