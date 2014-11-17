_ki = {
    init: function (self$2117, ns_name$2118) {
        if (_ki.namespaces[ns_name$2118] === undefined) {
            _ki.namespaces[ns_name$2118] = { vars: {} };
        }
        self$2117._ki_ns_name = ns_name$2118;
        self$2117._ki_ns_ctx = self$2117;
        _ki.intern.bind(self$2117)(_ki.modules.core);
        _ki.intern.bind(self$2117)(_ki.modules.mori);
        _ki.intern.bind(self$2117)(_ki.modules);
        _ki.intern.bind(self$2117)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$2119) {
        for (var e$2120 in obj$2119) {
            this[e$2120] = obj$2119[e$2120];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$2121) {
                return x$2121 === false || x$2121 == null ? false : true;
            },
            falsey: function (x$2122) {
                return !truthy(x$2122);
            },
            not: function (x$2123) {
                return !truthy(x$2123);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$2124 = 0;
                for (var i$2125 = 0; i$2125 < arguments.length; i$2125++) {
                    res$2124 += arguments[i$2125];
                }
                return res$2124;
            },
            sub: function () {
                var res$2126 = arguments[0];
                for (var i$2127 = 1; i$2127 < arguments.length; i$2127++) {
                    res$2126 -= arguments[i$2127];
                }
                return res$2126;
            },
            mul: function () {
                var res$2128 = 1;
                for (var i$2129 = 0; i$2129 < arguments.length; i$2129++) {
                    res$2128 *= arguments[i$2129];
                }
                return res$2128;
            },
            div: function () {
                var res$2130 = arguments[0];
                for (var i$2131 = 1; i$2131 < arguments.length; i$2131++) {
                    res$2130 /= arguments[i$2131];
                }
                return res$2130;
            },
            mod: function (a$2132, b$2133) {
                return a$2132 % b$2133;
            },
            lt: function () {
                var res$2134 = true;
                for (var i$2135 = 0; i$2135 < arguments.length - 1; i$2135++) {
                    res$2134 = res$2134 && arguments[i$2135] < arguments[i$2135 + 1];
                    if (!res$2134)
                        break;
                }
                return res$2134;
            },
            gt: function () {
                var res$2136 = true;
                for (var i$2137 = 0; i$2137 < arguments.length - 1; i$2137++) {
                    res$2136 = res$2136 && arguments[i$2137] > arguments[i$2137 + 1];
                    if (!res$2136)
                        break;
                }
                return res$2136;
            },
            leq: function () {
                var res$2138 = true;
                for (var i$2139 = 0; i$2139 < arguments.length - 1; i$2139++) {
                    res$2138 = res$2138 && arguments[i$2139] <= arguments[i$2139 + 1];
                    if (!res$2138)
                        break;
                }
                return res$2138;
            },
            geq: function () {
                var res$2140 = true;
                for (var i$2141 = 0; i$2141 < arguments.length - 1; i$2141++) {
                    res$2140 = res$2140 && arguments[i$2141] >= arguments[i$2141 + 1];
                }
                return res$2140;
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
            } catch (e$2142) {
                try {
                    return require('mori');
                } catch (e$2143) {
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
            _ki_ns_ctx['conn'] = function (opts$2154) {
                return opts$2154.uri;
            };
            _ki.namespaces[_ki_ns_name].vars.conn = _ki_ns_ctx['conn'];
            return _ki_ns_ctx['conn'];
        }());
        return exports.conn = conn;
    }();
}());