_ki = {
    init: function (self$1529, ns_name$1530) {
        if (_ki.namespaces[ns_name$1530] === undefined) {
            _ki.namespaces[ns_name$1530] = { vars: {} };
        }
        self$1529._ki_ns_name = ns_name$1530;
        self$1529._ki_ns_ctx = self$1529;
        _ki.intern.bind(self$1529)(_ki.modules.core);
        _ki.intern.bind(self$1529)(_ki.modules.mori);
        _ki.intern.bind(self$1529)(_ki.modules);
        _ki.intern.bind(self$1529)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$1531) {
        for (var e$1532 in obj$1531) {
            this[e$1532] = obj$1531[e$1532];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (x$1533) {
                return x$1533 === false || x$1533 == null ? false : true;
            },
            falsey: function (x$1534) {
                return !truthy(x$1534);
            },
            not: function (x$1535) {
                return !truthy(x$1535);
            },
            eq: function () {
                return equals.apply(null, arguments);
            },
            neq: function () {
                return !equals.apply(null, arguments);
            },
            add: function () {
                var res$1536 = 0;
                for (var i$1537 = 0; i$1537 < arguments.length; i$1537++) {
                    res$1536 += arguments[i$1537];
                }
                return res$1536;
            },
            sub: function () {
                var res$1538 = arguments[0];
                for (var i$1539 = 1; i$1539 < arguments.length; i$1539++) {
                    res$1538 -= arguments[i$1539];
                }
                return res$1538;
            },
            mul: function () {
                var res$1540 = 1;
                for (var i$1541 = 0; i$1541 < arguments.length; i$1541++) {
                    res$1540 *= arguments[i$1541];
                }
                return res$1540;
            },
            div: function () {
                var res$1542 = arguments[0];
                for (var i$1543 = 1; i$1543 < arguments.length; i$1543++) {
                    res$1542 /= arguments[i$1543];
                }
                return res$1542;
            },
            mod: function (a$1544, b$1545) {
                return a$1544 % b$1545;
            },
            lt: function () {
                var res$1546 = true;
                for (var i$1547 = 0; i$1547 < arguments.length - 1; i$1547++) {
                    res$1546 = res$1546 && arguments[i$1547] < arguments[i$1547 + 1];
                    if (!res$1546)
                        break;
                }
                return res$1546;
            },
            gt: function () {
                var res$1548 = true;
                for (var i$1549 = 0; i$1549 < arguments.length - 1; i$1549++) {
                    res$1548 = res$1548 && arguments[i$1549] > arguments[i$1549 + 1];
                    if (!res$1548)
                        break;
                }
                return res$1548;
            },
            leq: function () {
                var res$1550 = true;
                for (var i$1551 = 0; i$1551 < arguments.length - 1; i$1551++) {
                    res$1550 = res$1550 && arguments[i$1551] <= arguments[i$1551 + 1];
                    if (!res$1550)
                        break;
                }
                return res$1550;
            },
            geq: function () {
                var res$1552 = true;
                for (var i$1553 = 0; i$1553 < arguments.length - 1; i$1553++) {
                    res$1552 = res$1552 && arguments[i$1553] >= arguments[i$1553 + 1];
                }
                return res$1552;
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
            } catch (e$1554) {
                try {
                    return require('mori');
                } catch (e$1555) {
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
            _ki_ns_ctx['conn'] = function (opts$1566) {
                return opts$1566.uri;
            };
            _ki.namespaces[_ki_ns_name].vars.conn = _ki_ns_ctx['conn'];
            return _ki_ns_ctx['conn'];
        }());
        return exports.conn = conn;
    }();
}());