(window.webpackJsonp = window.webpackJsonp || []).push([["vendors~course-manage-practice-app~course-manage-v2-app~course-preview-app~lecture-landing-page-app~~6dacdd63"], {
    "./node_modules/aes-decrypter/es5/aes.js": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }
        }();
        var p = null, s = function () {
            function l(t) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, l), p || (p = function () {
                    var t = [[[], [], [], [], []], [[], [], [], [], []]], e = t[0], i = t[1], n = e[4], s = i[4],
                        a = void 0, r = void 0, o = void 0, u = [], d = [], l = void 0, p = void 0, c = void 0,
                        h = void 0, f = void 0;
                    for (a = 0; a < 256; a++) d[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
                    for (r = o = 0; !n[r]; r ^= l || 1, o = d[o] || 1) for (c = (c = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & c ^ 99, f = 16843009 * u[p = u[l = u[s[n[r] = c] = r]]] ^ 65537 * p ^ 257 * l ^ 16843008 * r, h = 257 * u[c] ^ 16843008 * c, a = 0; a < 4; a++) e[a][r] = h = h << 24 ^ h >>> 8, i[a][c] = f = f << 24 ^ f >>> 8;
                    for (a = 0; a < 5; a++) e[a] = e[a].slice(0), i[a] = i[a].slice(0);
                    return t
                }()), this._tables = [[p[0][0].slice(), p[0][1].slice(), p[0][2].slice(), p[0][3].slice(), p[0][4].slice()], [p[1][0].slice(), p[1][1].slice(), p[1][2].slice(), p[1][3].slice(), p[1][4].slice()]];
                var e = void 0, i = void 0, n = void 0, s = void 0, a = void 0, r = this._tables[0][4],
                    o = this._tables[1], u = t.length, d = 1;
                if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size");
                for (s = t.slice(0), a = [], this._key = [s, a], e = u; e < 4 * u + 28; e++) n = s[e - 1], (e % u == 0 || 8 === u && e % u == 4) && (n = r[n >>> 24] << 24 ^ r[n >> 16 & 255] << 16 ^ r[n >> 8 & 255] << 8 ^ r[255 & n], e % u == 0 && (n = n << 8 ^ n >>> 24 ^ d << 24, d = d << 1 ^ 283 * (d >> 7))), s[e] = s[e - u] ^ n;
                for (i = 0; e; i++, e--) n = s[3 & i ? e : e - 4], a[i] = e <= 4 || i < 4 ? n : o[0][r[n >>> 24]] ^ o[1][r[n >> 16 & 255]] ^ o[2][r[n >> 8 & 255]] ^ o[3][r[255 & n]]
            }

            return n(l, [{
                key: "decrypt", value: function (t, e, i, n, s, a) {
                    var r = this._key[1], o = t ^ r[0], u = n ^ r[1], d = i ^ r[2], l = e ^ r[3], p = void 0,
                        c = void 0, h = void 0, f = r.length / 4 - 2, m = void 0, g = 4, y = this._tables[1], b = y[0],
                        v = y[1], _ = y[2], T = y[3], S = y[4];
                    for (m = 0; m < f; m++) p = b[o >>> 24] ^ v[u >> 16 & 255] ^ _[d >> 8 & 255] ^ T[255 & l] ^ r[g], c = b[u >>> 24] ^ v[d >> 16 & 255] ^ _[l >> 8 & 255] ^ T[255 & o] ^ r[g + 1], h = b[d >>> 24] ^ v[l >> 16 & 255] ^ _[o >> 8 & 255] ^ T[255 & u] ^ r[g + 2], l = b[l >>> 24] ^ v[o >> 16 & 255] ^ _[u >> 8 & 255] ^ T[255 & d] ^ r[g + 3], g += 4, o = p, u = c, d = h;
                    for (m = 0; m < 4; m++) s[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[d >> 8 & 255] << 8 ^ S[255 & l] ^ r[g++], p = o, o = u, u = d, d = l, l = p
                }
            }]), l
        }();
        e.default = s, t.exports = e.default
    }, "./node_modules/aes-decrypter/es5/async-stream.js": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }
        }();
        var s, a = i("./node_modules/aes-decrypter/es5/stream.js"), r = (s = a) && s.__esModule ? s : {default: s},
            o = function (t) {
                function e() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), function (t, e, i) {
                        for (var n = !0; n;) {
                            var s = t, a = e, r = i;
                            n = !1, null === s && (s = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(s, a);
                            if (void 0 !== o) {
                                if ("value" in o) return o.value;
                                var u = o.get;
                                if (void 0 === u) return;
                                return u.call(r)
                            }
                            var d = Object.getPrototypeOf(s);
                            if (null === d) return;
                            t = d, e = a, i = r, n = !0, o = d = void 0
                        }
                    }(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, r.default), this.jobs = [], this.delay = 1, this.timeout_ = null
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, r["default"]), n(e, [{
                    key: "processJob_", value: function () {
                        this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
                    }
                }, {
                    key: "push", value: function (t) {
                        this.jobs.push(t), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                    }
                }]), e
            }();
        e.default = o, t.exports = e.default
    }, "./node_modules/aes-decrypter/es5/decrypter.js": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }
        }();

        function s(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var g = s(i("./node_modules/aes-decrypter/es5/aes.js")),
            d = s(i("./node_modules/aes-decrypter/es5/async-stream.js")), l = i("./node_modules/pkcs7/lib/pkcs7.js"),
            y = function (t) {
                return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
            }, a = function (t, e, i) {
                var n = new Int32Array(t.buffer, t.byteOffset, t.byteLength >> 2),
                    s = new g.default(Array.prototype.slice.call(e)), a = new Uint8Array(t.byteLength),
                    r = new Int32Array(a.buffer), o = void 0, u = void 0, d = void 0, l = void 0, p = void 0, c = void 0,
                    h = void 0, f = void 0, m = void 0;
                for (o = i[0], u = i[1], d = i[2], l = i[3], m = 0; m < n.length; m += 4) p = y(n[m]), c = y(n[m + 1]), h = y(n[m + 2]), f = y(n[m + 3]), s.decrypt(p, c, h, f, r, m), r[m] = y(r[m] ^ o), r[m + 1] = y(r[m + 1] ^ u), r[m + 2] = y(r[m + 2] ^ d), r[m + 3] = y(r[m + 3] ^ l), o = p, u = c, d = h, l = f;
                return a
            };
        e.decrypt = a;
        var r = function () {
            function u(t, e, i, n) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, u);
                var s = u.STEP, a = new Int32Array(t.buffer), r = new Uint8Array(t.byteLength), o = 0;
                for (this.asyncStream_ = new d.default, this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + s), e, i, r)), o = s; o < a.length; o += s) i = new Uint32Array([y(a[o - 4]), y(a[o - 3]), y(a[o - 2]), y(a[o - 1])]), this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + s), e, i, r));
                this.asyncStream_.push(function () {
                    n(null, (0, l.unpad)(r))
                })
            }

            return n(u, [{
                key: "decryptChunk_", value: function (e, i, n, s) {
                    return function () {
                        var t = a(e, i, n);
                        s.set(t, e.byteOffset)
                    }
                }
            }], [{
                key: "STEP", get: function () {
                    return 32e3
                }
            }]), u
        }();
        e.Decrypter = r, e.default = {Decrypter: r, decrypt: a}
    }, "./node_modules/aes-decrypter/es5/index.js": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n, s = i("./node_modules/aes-decrypter/es5/decrypter.js"),
            a = i("./node_modules/aes-decrypter/es5/async-stream.js"), r = (n = a) && n.__esModule ? n : {default: n};
        e.default = {decrypt: s.decrypt, Decrypter: s.Decrypter, AsyncStream: r.default}, t.exports = e.default
    }, "./node_modules/aes-decrypter/es5/stream.js": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }
        }();
        var s = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.listeners = {}
            }

            return n(t, [{
                key: "on", value: function (t, e) {
                    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
                }
            }, {
                key: "off", value: function (t, e) {
                    var i;
                    return !!this.listeners[t] && (i = this.listeners[t].indexOf(e), this.listeners[t].splice(i, 1), -1 < i)
                }
            }, {
                key: "trigger", value: function (t) {
                    var e = void 0, i = void 0, n = void 0, s = void 0;
                    if (e = this.listeners[t]) if (2 === arguments.length) for (n = e.length, i = 0; i < n; ++i) e[i].call(this, arguments[1]); else for (s = Array.prototype.slice.call(arguments, 1), n = e.length, i = 0; i < n; ++i) e[i].apply(this, s)
                }
            }, {
                key: "dispose", value: function () {
                    this.listeners = {}
                }
            }, {
                key: "pipe", value: function (e) {
                    this.on("data", function (t) {
                        e.push(t)
                    })
                }
            }]), t
        }();
        e.default = s, t.exports = e.default
    }, "./node_modules/for-each/index.js": function (t, e, i) {
        var n = i("./node_modules/is-function/index.js");
        t.exports = function (t, e, i) {
            if (!n(e)) throw new TypeError("iterator must be a function");
            arguments.length < 3 && (i = this);
            "[object Array]" === s.call(t) ? function (t, e, i) {
                for (var n = 0, s = t.length; n < s; n++) a.call(t, n) && e.call(i, t[n], n, t)
            }(t, e, i) : "string" == typeof t ? function (t, e, i) {
                for (var n = 0, s = t.length; n < s; n++) e.call(i, t.charAt(n), n, t)
            }(t, e, i) : function (t, e, i) {
                for (var n in t) a.call(t, n) && e.call(i, t[n], n, t)
            }(t, e, i)
        };
        var s = Object.prototype.toString, a = Object.prototype.hasOwnProperty
    }, "./node_modules/global/document.js": function (s, t, a) {
        (function (t) {
            var e, i = void 0 !== t ? t : "undefined" != typeof window ? window : {}, n = a(21);
            "undefined" != typeof document ? e = document : (e = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (e = i["__GLOBAL_DOCUMENT_CACHE@4"] = n), s.exports = e
        }).call(this, a("./node_modules/webpack/buildin/global.js"))
    }, "./node_modules/global/window.js": function (i, t, e) {
        (function (t) {
            var e;
            e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, i.exports = e
        }).call(this, e("./node_modules/webpack/buildin/global.js"))
    }, "./node_modules/is-function/index.js": function (t, e) {
        t.exports = function (t) {
            var e = i.call(t);
            return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
        };
        var i = Object.prototype.toString
    }, "./node_modules/lodash-es/clamp.js": function (t, e, i) {
        "use strict";
        var n = function (t, e, i) {
            return t == t && (void 0 !== i && (t = t <= i ? t : i), void 0 !== e && (t = e <= t ? t : e)), t
        }, s = i("./node_modules/lodash-es/toNumber.js");
        e.a = function (t, e, i) {
            return void 0 === i && (i = e, e = void 0), void 0 !== i && (i = (i = Object(s.a)(i)) == i ? i : 0), void 0 !== e && (e = (e = Object(s.a)(e)) == e ? e : 0), n(Object(s.a)(t), e, i)
        }
    }, "./node_modules/lodash-es/isBoolean.js": function (t, e, i) {
        "use strict";
        var n = i("./node_modules/lodash-es/_baseGetTag.js"), s = i("./node_modules/lodash-es/isObjectLike.js");
        e.a = function (t) {
            return !0 === t || !1 === t || Object(s.a)(t) && "[object Boolean]" == Object(n.a)(t)
        }
    }, "./node_modules/lodash-es/isFinite.js": function (t, e, i) {
        "use strict";
        var n = i("./node_modules/lodash-es/_root.js").a.isFinite;
        e.a = function (t) {
            return "number" == typeof t && n(t)
        }
    }, "./node_modules/lodash-es/omit.js": function (t, e, i) {
        "use strict";
        var a = i("./node_modules/lodash-es/_arrayMap.js"), r = i("./node_modules/lodash-es/_baseClone.js"),
            o = i("./node_modules/lodash-es/_castPath.js");
        var n = function (t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : void 0
        }, s = i("./node_modules/lodash-es/_baseGet.js"), u = i("./node_modules/lodash-es/_baseSlice.js");
        var d = function (t, e) {
            return e.length < 2 ? t : Object(s.a)(t, Object(u.a)(e, 0, -1))
        }, l = i("./node_modules/lodash-es/_toKey.js");
        var p = function (t, e) {
            return e = Object(o.a)(e, t), null == (t = d(t, e)) || delete t[Object(l.a)(n(e))]
        }, c = i("./node_modules/lodash-es/_copyObject.js"), h = i("./node_modules/lodash-es/isPlainObject.js");
        var f = function (t) {
                return Object(h.a)(t) ? void 0 : t
            }, m = i("./node_modules/lodash-es/_flatRest.js"), g = i("./node_modules/lodash-es/_getAllKeysIn.js"),
            y = Object(m.a)(function (e, t) {
                var i = {};
                if (null == e) return i;
                var n = !1;
                t = Object(a.a)(t, function (t) {
                    return t = Object(o.a)(t, e), n || (n = 1 < t.length), t
                }), Object(c.a)(e, Object(g.a)(e), i), n && (i = Object(r.a)(i, 7, f));
                for (var s = t.length; s--;) p(i, t[s]);
                return i
            });
        e.a = y
    }, "./node_modules/lodash-es/unescape.js": function (t, e, i) {
        "use strict";
        var n = i("./node_modules/lodash-es/toString.js"), s = i("./node_modules/lodash-es/_basePropertyOf.js"),
            a = Object(s.a)({"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"}),
            r = /&(?:amp|lt|gt|quot|#39);/g, o = RegExp(r.source);
        e.a = function (t) {
            return (t = Object(n.a)(t)) && o.test(t) ? t.replace(r, a) : t
        }
    }, "./node_modules/m3u8-parser/es5/index.js": function (t, e, i) {
        "use strict";
        var n = r(i("./node_modules/m3u8-parser/es5/line-stream.js")),
            s = r(i("./node_modules/m3u8-parser/es5/parse-stream.js")),
            a = r(i("./node_modules/m3u8-parser/es5/parser.js"));

        function r(t) {
            return t && t.__esModule ? t : {default: t}
        }

        t.exports = {LineStream: n.default, ParseStream: s.default, Parser: a.default}
    }, "./node_modules/m3u8-parser/es5/line-stream.js": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n, s = function () {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }
        }(), a = i("./node_modules/m3u8-parser/es5/stream.js"), r = (n = a) && n.__esModule ? n : {default: n};
        var o = function (t) {
            function e() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var t = function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.buffer = "", t
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, r["default"]), s(e, [{
                key: "push", value: function (t) {
                    var e = void 0;
                    for (this.buffer += t, e = this.buffer.indexOf("\n"); -1 < e; e = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1)
                }
            }]), e
        }();
        e.default = o
    }, "./node_modules/m3u8-parser/es5/parse-stream.js": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n, l = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var i = [], n = !0, s = !1, a = void 0;
                try {
                    for (var r, o = t[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0) ;
                } catch (t) {
                    s = !0, a = t
                } finally {
                    try {
                        !n && o.return && o.return()
                    } finally {
                        if (s) throw a
                    }
                }
                return i
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }, s = function () {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }
        }(), a = i("./node_modules/m3u8-parser/es5/stream.js"), r = (n = a) && n.__esModule ? n : {default: n};
        var p = function (t) {
            for (var e = t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), i = {}, n = e.length, s = void 0; n--;) "" !== e[n] && ((s = /([^=]*)=(.*)/.exec(e[n]).slice(1))[0] = s[0].replace(/^\s+|\s+$/g, ""), s[1] = s[1].replace(/^\s+|\s+$/g, ""), s[1] = s[1].replace(/^['"](.*)['"]$/g, "$1"), i[s[0]] = s[1]);
            return i
        }, o = function (t) {
            function e() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, r["default"]), s(e, [{
                key: "push", value: function (t) {
                    var e = void 0, i = void 0;
                    if (0 !== (t = t.replace(/^[\u0000\s]+|[\u0000\s]+$/g, "")).length) if ("#" === t[0]) if (0 === t.indexOf("#EXT")) if (t = t.replace("\r", ""), e = /^#EXTM3U/.exec(t)) this.trigger("data", {
                        type: "tag",
                        tagType: "m3u"
                    }); else {
                        if (e = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t)) return i = {
                            type: "tag",
                            tagType: "inf"
                        }, e[1] && (i.duration = parseFloat(e[1])), e[2] && (i.title = e[2]), void this.trigger("data", i);
                        if (e = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t)) return i = {
                            type: "tag",
                            tagType: "targetduration"
                        }, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
                        if (e = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t)) return i = {
                            type: "tag",
                            tagType: "totalduration"
                        }, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
                        if (e = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(t)) return i = {
                            type: "tag",
                            tagType: "version"
                        }, e[1] && (i.version = parseInt(e[1], 10)), void this.trigger("data", i);
                        if (e = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
                            type: "tag",
                            tagType: "media-sequence"
                        }, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
                        if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
                            type: "tag",
                            tagType: "discontinuity-sequence"
                        }, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
                        if (e = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t)) return i = {
                            type: "tag",
                            tagType: "playlist-type"
                        }, e[1] && (i.playlistType = e[1]), void this.trigger("data", i);
                        if (e = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t)) return i = {
                            type: "tag",
                            tagType: "byterange"
                        }, e[1] && (i.length = parseInt(e[1], 10)), e[2] && (i.offset = parseInt(e[2], 10)), void this.trigger("data", i);
                        if (e = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t)) return i = {
                            type: "tag",
                            tagType: "allow-cache"
                        }, e[1] && (i.allowed = !/NO/.test(e[1])), void this.trigger("data", i);
                        if (e = /^#EXT-X-MAP:?(.*)$/.exec(t)) {
                            if (i = {type: "tag", tagType: "map"}, e[1]) {
                                var n = p(e[1]);
                                if (n.URI && (i.uri = n.URI), n.BYTERANGE) {
                                    var s = n.BYTERANGE.split("@"), a = l(s, 2), r = a[0], o = a[1];
                                    i.byterange = {}, r && (i.byterange.length = parseInt(r, 10)), o && (i.byterange.offset = parseInt(o, 10))
                                }
                            }
                            this.trigger("data", i)
                        } else if (e = /^#EXT-X-STREAM-INF:?(.*)$/.exec(t)) {
                            if (i = {type: "tag", tagType: "stream-inf"}, e[1]) {
                                if (i.attributes = p(e[1]), i.attributes.RESOLUTION) {
                                    var u = i.attributes.RESOLUTION.split("x"), d = {};
                                    u[0] && (d.width = parseInt(u[0], 10)), u[1] && (d.height = parseInt(u[1], 10)), i.attributes.RESOLUTION = d
                                }
                                i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)), i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
                            }
                            this.trigger("data", i)
                        } else {
                            if (e = /^#EXT-X-MEDIA:?(.*)$/.exec(t)) return i = {
                                type: "tag",
                                tagType: "media"
                            }, e[1] && (i.attributes = p(e[1])), void this.trigger("data", i);
                            if (e = /^#EXT-X-ENDLIST/.exec(t)) this.trigger("data", {
                                type: "tag",
                                tagType: "endlist"
                            }); else if (e = /^#EXT-X-DISCONTINUITY/.exec(t)) this.trigger("data", {
                                type: "tag",
                                tagType: "discontinuity"
                            }); else {
                                if (e = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "program-date-time"
                                }, e[1] && (i.dateTimeString = e[1], i.dateTimeObject = new Date(e[1])), void this.trigger("data", i);
                                if (e = /^#EXT-X-KEY:?(.*)$/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "key"
                                }, e[1] && (i.attributes = p(e[1]), i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)), i.attributes.IV = i.attributes.IV.match(/.{8}/g), i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16), i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16), i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16), i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16), i.attributes.IV = new Uint32Array(i.attributes.IV))), void this.trigger("data", i);
                                if (e = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "cue-out-cont"
                                }, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
                                if (e = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "cue-out"
                                }, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
                                if (e = /^#EXT-X-CUE-IN:?(.*)?$/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "cue-in"
                                }, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
                                this.trigger("data", {type: "tag", data: t.slice(4)})
                            }
                        }
                    } else this.trigger("data", {
                        type: "comment",
                        text: t.slice(1)
                    }); else this.trigger("data", {type: "uri", uri: t})
                }
            }]), e
        }();
        e.default = o
    }, "./node_modules/m3u8-parser/es5/parser.js": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var p = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }, n = function () {
                function n(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, i) {
                    return e && n(t.prototype, e), i && n(t, i), t
                }
            }(), s = a(i("./node_modules/m3u8-parser/es5/stream.js")),
            c = a(i("./node_modules/m3u8-parser/es5/line-stream.js")),
            h = a(i("./node_modules/m3u8-parser/es5/parse-stream.js"));

        function a(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var r = function (t) {
            function e() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var t = function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                t.lineStream = new c.default, t.parseStream = new h.default, t.lineStream.pipe(t.parseStream);
                var s = t, a = [], r = {}, o = void 0, u = void 0,
                    d = {AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {}}, l = 0;
                return t.manifest = {
                    allowCache: !0,
                    discontinuityStarts: [],
                    segments: []
                }, t.parseStream.on("data", function (e) {
                    var i = void 0, n = void 0;
                    ({
                        tag: function () {
                            ({
                                "allow-cache": function () {
                                    this.manifest.allowCache = e.allowed, "allowed" in e || (this.trigger("info", {message: "defaulting allowCache to YES"}), this.manifest.allowCache = !0)
                                }, byterange: function () {
                                    var t = {};
                                    "length" in e && ((r.byterange = t).length = e.length, "offset" in e || (this.trigger("info", {message: "defaulting offset to zero"}), e.offset = 0)), "offset" in e && ((r.byterange = t).offset = e.offset)
                                }, endlist: function () {
                                    this.manifest.endList = !0
                                }, inf: function () {
                                    "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {message: "defaulting media sequence to zero"})), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {message: "defaulting discontinuity sequence to zero"})), 0 < e.duration && (r.duration = e.duration), 0 === e.duration && (r.duration = .01, this.trigger("info", {message: "updating zero segment duration to a small value"})), this.manifest.segments = a
                                }, key: function () {
                                    e.attributes ? "NONE" !== e.attributes.METHOD ? e.attributes.URI ? (e.attributes.METHOD || this.trigger("warn", {message: "defaulting key method to AES-128"}), u = {
                                        method: e.attributes.METHOD || "AES-128",
                                        uri: e.attributes.URI
                                    }, void 0 !== e.attributes.IV && (u.iv = e.attributes.IV)) : this.trigger("warn", {message: "ignoring key declaration without URI"}) : u = null : this.trigger("warn", {message: "ignoring key declaration without attribute list"})
                                }, "media-sequence": function () {
                                    isFinite(e.number) ? this.manifest.mediaSequence = e.number : this.trigger("warn", {message: "ignoring invalid media sequence: " + e.number})
                                }, "discontinuity-sequence": function () {
                                    isFinite(e.number) ? (this.manifest.discontinuitySequence = e.number, l = e.number) : this.trigger("warn", {message: "ignoring invalid discontinuity sequence: " + e.number})
                                }, "playlist-type": function () {
                                    /VOD|EVENT/.test(e.playlistType) ? this.manifest.playlistType = e.playlistType : this.trigger("warn", {message: "ignoring unknown playlist type: " + e.playlist})
                                }, map: function () {
                                    o = {}, e.uri && (o.uri = e.uri), e.byterange && (o.byterange = e.byterange)
                                }, "stream-inf": function () {
                                    this.manifest.playlists = a, this.manifest.mediaGroups = this.manifest.mediaGroups || d, e.attributes ? (r.attributes || (r.attributes = {}), p(r.attributes, e.attributes)) : this.trigger("warn", {message: "ignoring empty stream-inf attributes"})
                                }, media: function () {
                                    if (this.manifest.mediaGroups = this.manifest.mediaGroups || d, e.attributes && e.attributes.TYPE && e.attributes["GROUP-ID"] && e.attributes.NAME) {
                                        var t = this.manifest.mediaGroups[e.attributes.TYPE];
                                        t[e.attributes["GROUP-ID"]] = t[e.attributes["GROUP-ID"]] || {}, i = t[e.attributes["GROUP-ID"]], (n = {default: /yes/i.test(e.attributes.DEFAULT)}).default ? n.autoselect = !0 : n.autoselect = /yes/i.test(e.attributes.AUTOSELECT), e.attributes.LANGUAGE && (n.language = e.attributes.LANGUAGE), e.attributes.URI && (n.uri = e.attributes.URI), e.attributes["INSTREAM-ID"] && (n.instreamId = e.attributes["INSTREAM-ID"]), e.attributes.CHARACTERISTICS && (n.characteristics = e.attributes.CHARACTERISTICS), e.attributes.FORCED && (n.forced = /yes/i.test(e.attributes.FORCED)), i[e.attributes.NAME] = n
                                    } else this.trigger("warn", {message: "ignoring incomplete or missing media group"})
                                }, discontinuity: function () {
                                    l += 1, r.discontinuity = !0, this.manifest.discontinuityStarts.push(a.length)
                                }, "program-date-time": function () {
                                    this.manifest.dateTimeString = e.dateTimeString, this.manifest.dateTimeObject = e.dateTimeObject
                                }, targetduration: function () {
                                    !isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {message: "ignoring invalid target duration: " + e.duration}) : this.manifest.targetDuration = e.duration
                                }, totalduration: function () {
                                    !isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {message: "ignoring invalid total duration: " + e.duration}) : this.manifest.totalDuration = e.duration
                                }, "cue-out": function () {
                                    r.cueOut = e.data
                                }, "cue-out-cont": function () {
                                    r.cueOutCont = e.data
                                }, "cue-in": function () {
                                    r.cueIn = e.data
                                }
                            }[e.tagType] || function () {
                            }).call(s)
                        }, uri: function () {
                            r.uri = e.uri, a.push(r), !this.manifest.targetDuration || "duration" in r || (this.trigger("warn", {message: "defaulting segment duration to the target duration"}), r.duration = this.manifest.targetDuration), u && (r.key = u), r.timeline = l, o && (r.map = o), r = {}
                        }, comment: function () {
                        }
                    })[e.type].call(s)
                }), t
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, s["default"]), n(e, [{
                key: "push", value: function (t) {
                    this.lineStream.push(t)
                }
            }, {
                key: "end", value: function () {
                    this.lineStream.push("\n")
                }
            }]), e
        }();
        e.default = r
    }, "./node_modules/m3u8-parser/es5/stream.js": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }
        }();
        var s = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.listeners = {}
            }

            return n(t, [{
                key: "on", value: function (t, e) {
                    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
                }
            }, {
                key: "off", value: function (t, e) {
                    if (!this.listeners[t]) return !1;
                    var i = this.listeners[t].indexOf(e);
                    return this.listeners[t].splice(i, 1), -1 < i
                }
            }, {
                key: "trigger", value: function (t) {
                    var e = this.listeners[t], i = void 0, n = void 0, s = void 0;
                    if (e) if (2 === arguments.length) for (n = e.length, i = 0; i < n; ++i) e[i].call(this, arguments[1]); else for (s = Array.prototype.slice.call(arguments, 1), n = e.length, i = 0; i < n; ++i) e[i].apply(this, s)
                }
            }, {
                key: "dispose", value: function () {
                    this.listeners = {}
                }
            }, {
                key: "pipe", value: function (e) {
                    this.on("data", function (t) {
                        e.push(t)
                    })
                }
            }]), t
        }();
        e.default = s
    }, "./node_modules/mux.js/lib/aac/index.js": function (t, e, i) {
        "use strict";
        var n, s = i("./node_modules/mux.js/lib/utils/stream.js");
        (n = function () {
            var o = new Uint8Array, u = 0;
            n.prototype.init.call(this), this.setTimestamp = function (t) {
                u = t
            }, this.parseId3TagSize = function (t, e) {
                var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
            }, this.parseAdtsSize = function (t, e) {
                var i = (224 & t[e + 5]) >> 5, n = t[e + 4] << 3;
                return 6144 & t[e + 3] | n | i
            }, this.push = function (t) {
                var e, i, n, s, a = 0, r = 0;
                for (o.length ? (s = o.length, (o = new Uint8Array(t.byteLength + s)).set(o.subarray(0, s)), o.set(t, s)) : o = t; 3 <= o.length - r;) if (o[r] !== "I".charCodeAt(0) || o[r + 1] !== "D".charCodeAt(0) || o[r + 2] !== "3".charCodeAt(0)) if (!0 & o[r] && 240 == (240 & o[r + 1])) {
                    if (o.length - r < 7) break;
                    if ((a = this.parseAdtsSize(o, r)) > o.length) break;
                    n = {type: "audio", data: o.subarray(r, r + a), pts: u, dts: u}, this.trigger("data", n), r += a
                } else r++; else {
                    if (o.length - r < 10) break;
                    if ((a = this.parseId3TagSize(o, r)) > o.length) break;
                    i = {type: "timed-metadata", data: o.subarray(r, r + a)}, this.trigger("data", i), r += a
                }
                e = o.length - r, o = 0 < e ? o.subarray(r) : new Uint8Array
            }
        }).prototype = new s, t.exports = n
    }, "./node_modules/mux.js/lib/aac/probe.js": function (t, e, i) {
        "use strict";
        var n = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], o = function (t) {
            return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
        };
        t.exports = {
            parseId3TagSize: function (t, e) {
                var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
            }, parseAdtsSize: function (t, e) {
                var i = (224 & t[e + 5]) >> 5, n = t[e + 4] << 3;
                return 6144 & t[e + 3] | n | i
            }, parseType: function (t, e) {
                return t[e] === "I".charCodeAt(0) && t[e + 1] === "D".charCodeAt(0) && t[e + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & t[e] && 240 == (240 & t[e + 1]) ? "audio" : null
            }, parseSampleRate: function (t) {
                for (var e = 0; e + 5 < t.length;) {
                    if (255 === t[e] && 240 == (246 & t[e + 1])) return n[(60 & t[e + 2]) >>> 2];
                    e++
                }
                return null
            }, parseAacTimestamp: function (t) {
                var e, i, n;
                e = 10, 64 & t[5] && (e += 4, e += o(t.subarray(10, 14)));
                do {
                    if ((i = o(t.subarray(e + 4, e + 8))) < 1) return null;
                    if ("PRIV" === String.fromCharCode(t[e], t[e + 1], t[e + 2], t[e + 3])) {
                        n = t.subarray(e + 10, e + i + 10);
                        for (var s = 0; s < n.byteLength; s++) if (0 === n[s]) {
                            if ("com.apple.streaming.transportStreamTimestamp" !== unescape(function (t, e, i) {
                                var n, s = "";
                                for (n = e; n < i; n++) s += "%" + ("00" + t[n].toString(16)).slice(-2);
                                return s
                            }(n, 0, s))) break;
                            var a = n.subarray(s + 1),
                                r = (1 & a[3]) << 30 | a[4] << 22 | a[5] << 14 | a[6] << 6 | a[7] >>> 2;
                            return r *= 4, r += 3 & a[7]
                        }
                    }
                    e += 10, e += i
                } while (e < t.byteLength);
                return null
            }
        }
    }, "./node_modules/mux.js/lib/codecs/adts.js": function (t, e, i) {
        "use strict";
        var n, s = i("./node_modules/mux.js/lib/utils/stream.js"),
            l = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
        (n = function () {
            var d;
            n.prototype.init.call(this), this.push = function (t) {
                var e, i, n, s, a, r, o = 0, u = 0;
                if ("audio" === t.type) for (d ? (s = d, (d = new Uint8Array(s.byteLength + t.data.byteLength)).set(s), d.set(t.data, s.byteLength)) : d = t.data; o + 5 < d.length;) if (255 === d[o] && 240 == (246 & d[o + 1])) {
                    if (i = 2 * (1 & ~d[o + 1]), e = (3 & d[o + 3]) << 11 | d[o + 4] << 3 | (224 & d[o + 5]) >> 5, r = 9e4 * (a = 1024 * (1 + (3 & d[o + 6]))) / l[(60 & d[o + 2]) >>> 2], n = o + e, d.byteLength < n) return;
                    if (this.trigger("data", {
                        pts: t.pts + u * r,
                        dts: t.dts + u * r,
                        sampleCount: a,
                        audioobjecttype: 1 + (d[o + 2] >>> 6 & 3),
                        channelcount: (1 & d[o + 2]) << 2 | (192 & d[o + 3]) >>> 6,
                        samplerate: l[(60 & d[o + 2]) >>> 2],
                        samplingfrequencyindex: (60 & d[o + 2]) >>> 2,
                        samplesize: 16,
                        data: d.subarray(o + 7 + i, n)
                    }), d.byteLength === n) return void (d = void 0);
                    u++, d = d.subarray(n)
                } else o++
            }, this.flush = function () {
                this.trigger("done")
            }
        }).prototype = new s, t.exports = n
    }, "./node_modules/mux.js/lib/codecs/h264.js": function (t, e, i) {
        "use strict";
        var u, d, _, n = i("./node_modules/mux.js/lib/utils/stream.js"),
            T = i("./node_modules/mux.js/lib/utils/exp-golomb.js");
        (d = function () {
            var i, n, s = 0;
            d.prototype.init.call(this), this.push = function (t) {
                var e;
                for (n = n ? ((e = new Uint8Array(n.byteLength + t.data.byteLength)).set(n), e.set(t.data, n.byteLength), e) : t.data; s < n.byteLength - 3; s++) if (1 === n[s + 2]) {
                    i = s + 5;
                    break
                }
                for (; i < n.byteLength;) switch (n[i]) {
                    case 0:
                        if (0 !== n[i - 1]) {
                            i += 2;
                            break
                        }
                        if (0 !== n[i - 2]) {
                            i++;
                            break
                        }
                        for (s + 3 !== i - 2 && this.trigger("data", n.subarray(s + 3, i - 2)); 1 !== n[++i] && i < n.length;) ;
                        s = i - 2, i += 3;
                        break;
                    case 1:
                        if (0 !== n[i - 1] || 0 !== n[i - 2]) {
                            i += 3;
                            break
                        }
                        this.trigger("data", n.subarray(s + 3, i - 2)), s = i - 2, i += 3;
                        break;
                    default:
                        i += 3
                }
                n = n.subarray(s), i -= s, s = 0
            }, this.flush = function () {
                n && 3 < n.byteLength && this.trigger("data", n.subarray(s + 3)), n = null, s = 0, this.trigger("done")
            }
        }).prototype = new n, _ = {
            100: !0,
            110: !0,
            122: !0,
            244: !0,
            44: !0,
            83: !0,
            86: !0,
            118: !0,
            128: !0,
            138: !0,
            139: !0,
            134: !0
        }, (u = function () {
            var i, n, s, a, r, o, v, e = new d;
            u.prototype.init.call(this), (i = this).push = function (t) {
                "video" === t.type && (n = t.trackId, s = t.pts, a = t.dts, e.push(t))
            }, e.on("data", function (t) {
                var e = {trackId: n, pts: s, dts: a, data: t};
                switch (31 & t[0]) {
                    case 5:
                        e.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                        break;
                    case 6:
                        e.nalUnitType = "sei_rbsp", e.escapedRBSP = r(t.subarray(1));
                        break;
                    case 7:
                        e.nalUnitType = "seq_parameter_set_rbsp", e.escapedRBSP = r(t.subarray(1)), e.config = o(e.escapedRBSP);
                        break;
                    case 8:
                        e.nalUnitType = "pic_parameter_set_rbsp";
                        break;
                    case 9:
                        e.nalUnitType = "access_unit_delimiter_rbsp"
                }
                i.trigger("data", e)
            }), e.on("done", function () {
                i.trigger("done")
            }), this.flush = function () {
                e.flush()
            }, v = function (t, e) {
                var i, n = 8, s = 8;
                for (i = 0; i < t; i++) 0 !== s && (s = (n + e.readExpGolomb() + 256) % 256), n = 0 === s ? n : s
            }, r = function (t) {
                for (var e, i, n = t.byteLength, s = [], a = 1; a < n - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (s.push(a + 2), a += 2) : a++;
                if (0 === s.length) return t;
                e = n - s.length, i = new Uint8Array(e);
                var r = 0;
                for (a = 0; a < e; r++, a++) r === s[0] && (r++, s.shift()), i[a] = t[r];
                return i
            }, o = function (t) {
                var e, i, n, s, a, r, o, u, d, l, p, c, h, f = 0, m = 0, g = 0, y = 0, b = 1;
                if (i = (e = new T(t)).readUnsignedByte(), s = e.readUnsignedByte(), n = e.readUnsignedByte(), e.skipUnsignedExpGolomb(), _[i] && (3 === (a = e.readUnsignedExpGolomb()) && e.skipBits(1), e.skipUnsignedExpGolomb(), e.skipUnsignedExpGolomb(), e.skipBits(1), e.readBoolean())) for (p = 3 !== a ? 8 : 12, h = 0; h < p; h++) e.readBoolean() && v(h < 6 ? 16 : 64, e);
                if (e.skipUnsignedExpGolomb(), 0 === (r = e.readUnsignedExpGolomb())) e.readUnsignedExpGolomb(); else if (1 === r) for (e.skipBits(1), e.skipExpGolomb(), e.skipExpGolomb(), o = e.readUnsignedExpGolomb(), h = 0; h < o; h++) e.skipExpGolomb();
                if (e.skipUnsignedExpGolomb(), e.skipBits(1), u = e.readUnsignedExpGolomb(), d = e.readUnsignedExpGolomb(), 0 === (l = e.readBits(1)) && e.skipBits(1), e.skipBits(1), e.readBoolean() && (f = e.readUnsignedExpGolomb(), m = e.readUnsignedExpGolomb(), g = e.readUnsignedExpGolomb(), y = e.readUnsignedExpGolomb()), e.readBoolean() && e.readBoolean()) {
                    switch (e.readUnsignedByte()) {
                        case 1:
                            c = [1, 1];
                            break;
                        case 2:
                            c = [12, 11];
                            break;
                        case 3:
                            c = [10, 11];
                            break;
                        case 4:
                            c = [16, 11];
                            break;
                        case 5:
                            c = [40, 33];
                            break;
                        case 6:
                            c = [24, 11];
                            break;
                        case 7:
                            c = [20, 11];
                            break;
                        case 8:
                            c = [32, 11];
                            break;
                        case 9:
                            c = [80, 33];
                            break;
                        case 10:
                            c = [18, 11];
                            break;
                        case 11:
                            c = [15, 11];
                            break;
                        case 12:
                            c = [64, 33];
                            break;
                        case 13:
                            c = [160, 99];
                            break;
                        case 14:
                            c = [4, 3];
                            break;
                        case 15:
                            c = [3, 2];
                            break;
                        case 16:
                            c = [2, 1];
                            break;
                        case 255:
                            c = [e.readUnsignedByte() << 8 | e.readUnsignedByte(), e.readUnsignedByte() << 8 | e.readUnsignedByte()]
                    }
                    c && (b = c[0] / c[1])
                }
                return {
                    profileIdc: i,
                    levelIdc: n,
                    profileCompatibility: s,
                    width: Math.ceil((16 * (u + 1) - 2 * f - 2 * m) * b),
                    height: (2 - l) * (d + 1) * 16 - 2 * g - 2 * y
                }
            }
        }).prototype = new n, t.exports = {H264Stream: u, NalByteStream: d}
    }, "./node_modules/mux.js/lib/data/silence.js": function (t, e) {
        var i, n = [33, 16, 5, 32, 164, 27], s = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
            a = function (t) {
                for (var e = []; t--;) e.push(0);
                return e
            }, r = {
                96e3: [n, [227, 64], a(154), [56]],
                88200: [n, [231], a(170), [56]],
                64e3: [n, [248, 192], a(240), [56]],
                48e3: [n, [255, 192], a(268), [55, 148, 128], a(54), [112]],
                44100: [n, [255, 192], a(268), [55, 163, 128], a(84), [112]],
                32e3: [n, [255, 192], a(268), [55, 234], a(226), [112]],
                24e3: [n, [255, 192], a(268), [55, 255, 128], a(268), [111, 112], a(126), [224]],
                16e3: [n, [255, 192], a(268), [55, 255, 128], a(268), [111, 255], a(269), [223, 108], a(195), [1, 192]],
                12e3: [s, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 253, 128], a(259), [56]],
                11025: [s, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 255, 192], a(268), [55, 175, 128], a(108), [112]],
                8e3: [s, a(268), [3, 121, 16], a(47), [7]]
            };
        t.exports = (i = r, Object.keys(i).reduce(function (t, e) {
            return t[e] = new Uint8Array(i[e].reduce(function (t, e) {
                return t.concat(e)
            }, [])), t
        }, {}))
    }, "./node_modules/mux.js/lib/flv/coalesce-stream.js": function (t, e, i) {
        "use strict";
        var n = i("./node_modules/mux.js/lib/utils/stream.js"), s = function (t) {
            this.numberOfTracks = 0, this.metadataStream = t.metadataStream, this.videoTags = [], this.audioTags = [], this.videoTrack = null, this.audioTrack = null, this.pendingCaptions = [], this.pendingMetadata = [], this.pendingTracks = 0, this.processedTracks = 0, s.prototype.init.call(this), this.push = function (t) {
                return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : ("video" === t.track.type && (this.videoTrack = t.track, this.videoTags = t.tags, this.pendingTracks++), void ("audio" === t.track.type && (this.audioTrack = t.track, this.audioTags = t.tags, this.pendingTracks++)))
            }
        };
        s.prototype = new n, s.prototype.flush = function (t) {
            var e, i, n, s, a = {tags: {}, captions: [], captionStreams: {}, metadata: []};
            if (this.pendingTracks < this.numberOfTracks) {
                if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t) return;
                if (0 === this.pendingTracks && (this.processedTracks++, this.processedTracks < this.numberOfTracks)) return
            }
            if (this.processedTracks += this.pendingTracks, this.pendingTracks = 0, !(this.processedTracks < this.numberOfTracks)) {
                for (this.videoTrack ? s = this.videoTrack.timelineStartInfo.pts : this.audioTrack && (s = this.audioTrack.timelineStartInfo.pts), a.tags.videoTags = this.videoTags, a.tags.audioTags = this.audioTags, n = 0; n < this.pendingCaptions.length; n++) (i = this.pendingCaptions[n]).startTime = i.startPts - s, i.startTime /= 9e4, i.endTime = i.endPts - s, i.endTime /= 9e4, a.captionStreams[i.stream] = !0, a.captions.push(i);
                for (n = 0; n < this.pendingMetadata.length; n++) (e = this.pendingMetadata[n]).cueTime = e.pts - s, e.cueTime /= 9e4, a.metadata.push(e);
                a.metadata.dispatchType = this.metadataStream.dispatchType, this.videoTrack = null, this.audioTrack = null, this.videoTags = [], this.audioTags = [], this.pendingCaptions.length = 0, this.pendingMetadata.length = 0, this.pendingTracks = 0, this.processedTracks = 0, this.trigger("data", a), this.trigger("done")
            }
        }, t.exports = s
    }, "./node_modules/mux.js/lib/flv/flv-header.js": function (t, e, i) {
        "use strict";
        var u = i("./node_modules/mux.js/lib/flv/flv-tag.js");
        t.exports = function (t, e, i) {
            var n, s, a, r = new Uint8Array(9), o = new DataView(r.buffer);
            return t = t || 0, e = void 0 === e || e, i = void 0 === i || i, o.setUint8(0, 70), o.setUint8(1, 76), o.setUint8(2, 86), o.setUint8(3, 1), o.setUint8(4, (e ? 4 : 0) | (i ? 1 : 0)), o.setUint32(5, r.byteLength), t <= 0 ? ((s = new Uint8Array(r.byteLength + 4)).set(r), s.set([0, 0, 0, 0], r.byteLength)) : ((n = new u(u.METADATA_TAG)).pts = n.dts = 0, n.writeMetaDataDouble("duration", t), a = n.finalize().length, (s = new Uint8Array(r.byteLength + a)).set(r), s.set(o.byteLength, a)), s
        }
    }, "./node_modules/mux.js/lib/flv/flv-tag.js": function (t, e, i) {
        "use strict";
        var d;
        (d = function (t, i) {
            var e, n = 0, s = 16384, a = function (t, e) {
                    var i, n = t.position + e;
                    n < t.bytes.byteLength || ((i = new Uint8Array(2 * n)).set(t.bytes.subarray(0, t.position), 0), t.bytes = i, t.view = new DataView(t.bytes.buffer))
                }, r = d.widthBytes || new Uint8Array("width".length), o = d.heightBytes || new Uint8Array("height".length),
                u = d.videocodecidBytes || new Uint8Array("videocodecid".length);
            if (!d.widthBytes) {
                for (e = 0; e < "width".length; e++) r[e] = "width".charCodeAt(e);
                for (e = 0; e < "height".length; e++) o[e] = "height".charCodeAt(e);
                for (e = 0; e < "videocodecid".length; e++) u[e] = "videocodecid".charCodeAt(e);
                d.widthBytes = r, d.heightBytes = o, d.videocodecidBytes = u
            }
            switch (this.keyFrame = !1, t) {
                case d.VIDEO_TAG:
                    this.length = 16, s *= 6;
                    break;
                case d.AUDIO_TAG:
                    this.length = 13, this.keyFrame = !0;
                    break;
                case d.METADATA_TAG:
                    this.length = 29, this.keyFrame = !0;
                    break;
                default:
                    throw new Error("Unknown FLV tag type")
            }
            this.bytes = new Uint8Array(s), this.view = new DataView(this.bytes.buffer), this.bytes[0] = t, this.position = this.length, this.keyFrame = i, this.pts = 0, this.dts = 0, this.writeBytes = function (t, e, i) {
                var n, s = e || 0;
                n = s + (i = i || t.byteLength), a(this, i), this.bytes.set(t.subarray(s, n), this.position), this.position += i, this.length = Math.max(this.length, this.position)
            }, this.writeByte = function (t) {
                a(this, 1), this.bytes[this.position] = t, this.position++, this.length = Math.max(this.length, this.position)
            }, this.writeShort = function (t) {
                a(this, 2), this.view.setUint16(this.position, t), this.position += 2, this.length = Math.max(this.length, this.position)
            }, this.negIndex = function (t) {
                return this.bytes[this.length - t]
            }, this.nalUnitSize = function () {
                return 0 === n ? 0 : this.length - (n + 4)
            }, this.startNalUnit = function () {
                if (0 < n) throw new Error("Attempted to create new NAL wihout closing the old one");
                n = this.length, this.length += 4, this.position = this.length
            }, this.endNalUnit = function (t) {
                var e, i;
                this.length === n + 4 ? this.length -= 4 : 0 < n && (e = n + 4, i = this.length - e, this.position = n, this.view.setUint32(this.position, i), this.position = this.length, t && t.push(this.bytes.subarray(e, e + i))), n = 0
            }, this.writeMetaDataDouble = function (t, e) {
                var i;
                if (a(this, 2 + t.length + 9), this.view.setUint16(this.position, t.length), this.position += 2, "width" === t) this.bytes.set(r, this.position), this.position += 5; else if ("height" === t) this.bytes.set(o, this.position), this.position += 6; else if ("videocodecid" === t) this.bytes.set(u, this.position), this.position += 12; else for (i = 0; i < t.length; i++) this.bytes[this.position] = t.charCodeAt(i), this.position++;
                this.position++, this.view.setFloat64(this.position, e), this.position += 8, this.length = Math.max(this.length, this.position), ++n
            }, this.writeMetaDataBoolean = function (t, e) {
                var i;
                for (a(this, 2), this.view.setUint16(this.position, t.length), this.position += 2, i = 0; i < t.length; i++) a(this, 1), this.bytes[this.position] = t.charCodeAt(i), this.position++;
                a(this, 2), this.view.setUint8(this.position, 1), this.position++, this.view.setUint8(this.position, e ? 1 : 0), this.position++, this.length = Math.max(this.length, this.position), ++n
            }, this.finalize = function () {
                var t, e;
                switch (this.bytes[0]) {
                    case d.VIDEO_TAG:
                        this.bytes[11] = 7 | (this.keyFrame || i ? 16 : 32), this.bytes[12] = i ? 0 : 1, t = this.pts - this.dts, this.bytes[13] = (16711680 & t) >>> 16, this.bytes[14] = (65280 & t) >>> 8, this.bytes[15] = (255 & t) >>> 0;
                        break;
                    case d.AUDIO_TAG:
                        this.bytes[11] = 175, this.bytes[12] = i ? 0 : 1;
                        break;
                    case d.METADATA_TAG:
                        this.position = 11, this.view.setUint8(this.position, 2), this.position++, this.view.setUint16(this.position, 10), this.position += 2, this.bytes.set([111, 110, 77, 101, 116, 97, 68, 97, 116, 97], this.position), this.position += 10, this.bytes[this.position] = 8, this.position++, this.view.setUint32(this.position, n), this.position = this.length, this.bytes.set([0, 0, 9], this.position), this.position += 3, this.length = this.position
                }
                return e = this.length - 11, this.bytes[1] = (16711680 & e) >>> 16, this.bytes[2] = (65280 & e) >>> 8, this.bytes[3] = (255 & e) >>> 0, this.bytes[4] = (16711680 & this.dts) >>> 16, this.bytes[5] = (65280 & this.dts) >>> 8, this.bytes[6] = (255 & this.dts) >>> 0, this.bytes[7] = (4278190080 & this.dts) >>> 24, this.bytes[8] = 0, this.bytes[9] = 0, this.bytes[10] = 0, a(this, 4), this.view.setUint32(this.length, this.length), this.length += 4, this.position += 4, this.bytes = this.bytes.subarray(0, this.length), this.frameTime = d.frameTime(this.bytes), this
            }
        }).AUDIO_TAG = 8, d.VIDEO_TAG = 9, d.METADATA_TAG = 18, d.isAudioFrame = function (t) {
            return d.AUDIO_TAG === t[0]
        }, d.isVideoFrame = function (t) {
            return d.VIDEO_TAG === t[0]
        }, d.isMetaData = function (t) {
            return d.METADATA_TAG === t[0]
        }, d.isKeyFrame = function (t) {
            return d.isVideoFrame(t) ? 23 === t[11] : !!d.isAudioFrame(t) || !!d.isMetaData(t)
        }, d.frameTime = function (t) {
            var e = t[4] << 16;
            return e |= t[5] << 8, e |= t[6] << 0, e |= t[7] << 24
        }, t.exports = d
    }, "./node_modules/mux.js/lib/flv/index.js": function (t, e, i) {
        t.exports = {
            tag: i("./node_modules/mux.js/lib/flv/flv-tag.js"),
            Transmuxer: i("./node_modules/mux.js/lib/flv/transmuxer.js"),
            getFlvHeader: i("./node_modules/mux.js/lib/flv/flv-header.js")
        }
    }, "./node_modules/mux.js/lib/flv/tag-list.js": function (t, e, i) {
        "use strict";
        t.exports = function () {
            var t = this;
            this.list = [], this.push = function (t) {
                this.list.push({
                    bytes: t.bytes,
                    dts: t.dts,
                    pts: t.pts,
                    keyFrame: t.keyFrame,
                    metaDataTag: t.metaDataTag
                })
            }, Object.defineProperty(this, "length", {
                get: function () {
                    return t.list.length
                }
            })
        }
    }, "./node_modules/mux.js/lib/flv/transmuxer.js": function (t, e, i) {
        "use strict";
        var f, m, g, n, o, u, s = i("./node_modules/mux.js/lib/utils/stream.js"),
            d = i("./node_modules/mux.js/lib/flv/flv-tag.js"), y = i("./node_modules/mux.js/lib/m2ts/m2ts.js"),
            b = i("./node_modules/mux.js/lib/codecs/adts.js"),
            v = i("./node_modules/mux.js/lib/codecs/h264.js").H264Stream,
            _ = i("./node_modules/mux.js/lib/flv/coalesce-stream.js"),
            l = i("./node_modules/mux.js/lib/flv/tag-list.js");
        n = function (t, e) {
            "number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts ? t.timelineStartInfo.pts = e.pts : t.timelineStartInfo.pts = Math.min(t.timelineStartInfo.pts, e.pts)), "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts ? t.timelineStartInfo.dts = e.dts : t.timelineStartInfo.dts = Math.min(t.timelineStartInfo.dts, e.dts))
        }, o = function (t, e) {
            var i = new d(d.METADATA_TAG);
            return i.dts = e, i.pts = e, i.writeMetaDataDouble("videocodecid", 7), i.writeMetaDataDouble("width", t.width), i.writeMetaDataDouble("height", t.height), i
        }, u = function (t, e) {
            var i, n = new d(d.VIDEO_TAG, !0);
            for (n.dts = e, n.pts = e, n.writeByte(1), n.writeByte(t.profileIdc), n.writeByte(t.profileCompatibility), n.writeByte(t.levelIdc), n.writeByte(255), n.writeByte(225), n.writeShort(t.sps[0].length), n.writeBytes(t.sps[0]), n.writeByte(t.pps.length), i = 0; i < t.pps.length; ++i) n.writeShort(t.pps[i].length), n.writeBytes(t.pps[i]);
            return n
        }, (g = function (s) {
            var a, r = [], o = [];
            g.prototype.init.call(this), this.push = function (t) {
                n(s, t), s && (s.audioobjecttype = t.audioobjecttype, s.channelcount = t.channelcount, s.samplerate = t.samplerate, s.samplingfrequencyindex = t.samplingfrequencyindex, s.samplesize = t.samplesize, s.extraData = s.audioobjecttype << 11 | s.samplingfrequencyindex << 7 | s.channelcount << 3), t.pts = Math.round(t.pts / 90), t.dts = Math.round(t.dts / 90), r.push(t)
            }, this.flush = function () {
                var t, e, i, n = new l;
                if (0 !== r.length) {
                    for (i = -1 / 0; r.length;) t = r.shift(), o.length && t.pts >= o[0] && (i = o.shift(), this.writeMetaDataTags(n, i)), (s.extraData !== a || 1e3 <= t.pts - i) && (this.writeMetaDataTags(n, t.pts), a = s.extraData, i = t.pts), (e = new d(d.AUDIO_TAG)).pts = t.pts, e.dts = t.dts, e.writeBytes(t.data), n.push(e.finalize());
                    o.length = 0, a = null, this.trigger("data", {
                        track: s,
                        tags: n.list
                    }), this.trigger("done", "AudioSegmentStream")
                } else this.trigger("done", "AudioSegmentStream")
            }, this.writeMetaDataTags = function (t, e) {
                var i;
                (i = new d(d.METADATA_TAG)).pts = e, i.dts = e, i.writeMetaDataDouble("audiocodecid", 10), i.writeMetaDataBoolean("stereo", 2 === s.channelcount), i.writeMetaDataDouble("audiosamplerate", s.samplerate), i.writeMetaDataDouble("audiosamplesize", 16), t.push(i.finalize()), (i = new d(d.AUDIO_TAG, !0)).pts = e, i.dts = e, i.view.setUint16(i.position, s.extraData), i.position += 2, i.length = Math.max(i.length, i.position), t.push(i.finalize())
            }, this.onVideoKeyFrame = function (t) {
                o.push(t)
            }
        }).prototype = new s, (m = function (s) {
            var a, r, i = [];
            m.prototype.init.call(this), this.finishFrame = function (t, e) {
                if (e) {
                    if (a && s && s.newMetadata && (e.keyFrame || 0 === t.length)) {
                        var i = o(a, e.dts).finalize(), n = u(s, e.dts).finalize();
                        i.metaDataTag = n.metaDataTag = !0, t.push(i), t.push(n), s.newMetadata = !1, this.trigger("keyframe", e.dts)
                    }
                    e.endNalUnit(), t.push(e.finalize()), r = null
                }
            }, this.push = function (t) {
                n(s, t), t.pts = Math.round(t.pts / 90), t.dts = Math.round(t.dts / 90), i.push(t)
            }, this.flush = function () {
                for (var t, e = new l; i.length && "access_unit_delimiter_rbsp" !== i[0].nalUnitType;) i.shift();
                if (0 !== i.length) {
                    for (; i.length;) "seq_parameter_set_rbsp" === (t = i.shift()).nalUnitType ? (s.newMetadata = !0, a = t.config, s.width = a.width, s.height = a.height, s.sps = [t.data], s.profileIdc = a.profileIdc, s.levelIdc = a.levelIdc, s.profileCompatibility = a.profileCompatibility, r.endNalUnit()) : "pic_parameter_set_rbsp" === t.nalUnitType ? (s.newMetadata = !0, s.pps = [t.data], r.endNalUnit()) : "access_unit_delimiter_rbsp" === t.nalUnitType ? (r && this.finishFrame(e, r), (r = new d(d.VIDEO_TAG)).pts = t.pts, r.dts = t.dts) : ("slice_layer_without_partitioning_rbsp_idr" === t.nalUnitType && (r.keyFrame = !0), r.endNalUnit()), r.startNalUnit(), r.writeBytes(t.data);
                    r && this.finishFrame(e, r), this.trigger("data", {
                        track: s,
                        tags: e.list
                    }), this.trigger("done", "VideoSegmentStream")
                } else this.trigger("done", "VideoSegmentStream")
            }
        }).prototype = new s, (f = function (t) {
            var e, i, n, s, a, r, o, u, d, l, p, c, h = this;
            f.prototype.init.call(this), t = t || {}, this.metadataStream = new y.MetadataStream, t.metadataStream = this.metadataStream, e = new y.TransportPacketStream, i = new y.TransportParseStream, n = new y.ElementaryStream, s = new y.TimestampRolloverStream("video"), a = new y.TimestampRolloverStream("audio"), r = new y.TimestampRolloverStream("timed-metadata"), o = new b, u = new v, c = new _(t), e.pipe(i).pipe(n), n.pipe(s).pipe(u), n.pipe(a).pipe(o), n.pipe(r).pipe(this.metadataStream).pipe(c), p = new y.CaptionStream, u.pipe(p).pipe(c), n.on("data", function (t) {
                var e, i, n;
                if ("metadata" === t.type) {
                    for (e = t.tracks.length; e--;) "video" === t.tracks[e].type ? i = t.tracks[e] : "audio" === t.tracks[e].type && (n = t.tracks[e]);
                    i && !d && (c.numberOfTracks++, d = new m(i), u.pipe(d).pipe(c)), n && !l && (c.numberOfTracks++, l = new g(n), o.pipe(l).pipe(c), d && d.on("keyframe", l.onVideoKeyFrame))
                }
            }), this.push = function (t) {
                e.push(t)
            }, this.flush = function () {
                e.flush()
            }, this.resetCaptions = function () {
                p.reset()
            }, c.on("data", function (t) {
                h.trigger("data", t)
            }), c.on("done", function () {
                h.trigger("done")
            })
        }).prototype = new s, t.exports = f
    }, "./node_modules/mux.js/lib/m2ts/caption-stream.js": function (t, e, i) {
        "use strict";
        var n = i("./node_modules/mux.js/lib/utils/stream.js"), s = function () {
            s.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new r(0, 0), new r(0, 1), new r(1, 0), new r(1, 1)], this.reset(), this.ccStreams_.forEach(function (t) {
                t.on("data", this.trigger.bind(this, "data")), t.on("done", this.trigger.bind(this, "done"))
            }, this)
        };
        s.prototype = new n, s.prototype.push = function (t) {
            var e, i, n;
            "sei_rbsp" === t.nalUnitType && (4 === (e = function (t) {
                for (var e = 0, i = {
                    payloadType: -1,
                    payloadSize: 0
                }, n = 0, s = 0; e < t.byteLength && 128 !== t[e];) {
                    for (; 255 === t[e];) n += 255, e++;
                    for (n += t[e++]; 255 === t[e];) s += 255, e++;
                    if (s += t[e++], !i.payload && 4 === n) {
                        i.payloadType = n, i.payloadSize = s, i.payload = t.subarray(e, e + s);
                        break
                    }
                    e += s, s = n = 0
                }
                return i
            }(t.escapedRBSP)).payloadType && (i = 181 !== (n = e).payload[0] ? null : 49 != (n.payload[1] << 8 | n.payload[2]) ? null : "GA94" !== String.fromCharCode(n.payload[3], n.payload[4], n.payload[5], n.payload[6]) ? null : 3 !== n.payload[7] ? null : n.payload.subarray(8, n.payload.length - 1)) && (t.dts < this.latestDts_ ? this.ignoreNextEqualDts_ = !0 : t.dts === this.latestDts_ && this.ignoreNextEqualDts_ ? this.ignoreNextEqualDts_ = !1 : (this.captionPackets_ = this.captionPackets_.concat(function (t, e) {
                var i, n, s, a, r = [];
                if (!(64 & e[0])) return r;
                for (n = 31 & e[0], i = 0; i < n; i++) a = {
                    type: 3 & e[2 + (s = 3 * i)],
                    pts: t
                }, 4 & e[s + 2] && (a.ccData = e[s + 3] << 8 | e[s + 4], r.push(a));
                return r
            }(t.pts, i)), this.latestDts_ = t.dts)))
        }, s.prototype.flush = function () {
            this.captionPackets_.length ? (this.captionPackets_.forEach(function (t, e) {
                t.presortIndex = e
            }), this.captionPackets_.sort(function (t, e) {
                return t.pts === e.pts ? t.presortIndex - e.presortIndex : t.pts - e.pts
            }), this.captionPackets_.forEach(function (t) {
                t.type < 2 && this.dispatchCea608Packet(t)
            }, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function (t) {
                t.flush()
            }, this)) : this.ccStreams_.forEach(function (t) {
                t.flush()
            }, this)
        }, s.prototype.reset = function () {
            this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function (t) {
                t.reset()
            })
        }, s.prototype.dispatchCea608Packet = function (t) {
            this.setsChannel1Active(t) ? this.activeCea608Channel_[t.type] = 0 : this.setsChannel2Active(t) && (this.activeCea608Channel_[t.type] = 1), null !== this.activeCea608Channel_[t.type] && this.ccStreams_[(t.type << 1) + this.activeCea608Channel_[t.type]].push(t)
        }, s.prototype.setsChannel1Active = function (t) {
            return 4096 == (30720 & t.ccData)
        }, s.prototype.setsChannel2Active = function (t) {
            return 6144 == (30720 & t.ccData)
        };
        var a = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                304: 174,
                305: 176,
                306: 189,
                307: 191,
                308: 8482,
                309: 162,
                310: 163,
                311: 9834,
                312: 224,
                313: 160,
                314: 232,
                315: 226,
                316: 234,
                317: 238,
                318: 244,
                319: 251,
                544: 193,
                545: 201,
                546: 211,
                547: 218,
                548: 220,
                549: 252,
                550: 8216,
                551: 161,
                552: 42,
                553: 39,
                554: 8212,
                555: 169,
                556: 8480,
                557: 8226,
                558: 8220,
                559: 8221,
                560: 192,
                561: 194,
                562: 199,
                563: 200,
                564: 202,
                565: 203,
                566: 235,
                567: 206,
                568: 207,
                569: 239,
                570: 212,
                571: 217,
                572: 249,
                573: 219,
                574: 171,
                575: 187,
                800: 195,
                801: 227,
                802: 205,
                803: 204,
                804: 236,
                805: 210,
                806: 242,
                807: 213,
                808: 245,
                809: 123,
                810: 125,
                811: 92,
                812: 94,
                813: 95,
                814: 124,
                815: 126,
                816: 196,
                817: 228,
                818: 214,
                819: 246,
                820: 223,
                821: 165,
                822: 164,
                823: 9474,
                824: 197,
                825: 229,
                826: 216,
                827: 248,
                828: 9484,
                829: 9488,
                830: 9492,
                831: 9496
            }, o = function (t) {
                return null === t ? "" : (t = a[t] || t, String.fromCharCode(t))
            }, u = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
            d = function () {
                for (var t = [], e = 15; e--;) t.push("");
                return t
            }, r = function (t, e) {
                r.prototype.init.call(this), this.field_ = t || 0, this.dataChannel_ = e || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function (t) {
                    var e, i, n, s, a;
                    if ((e = 32639 & t.ccData) !== this.lastControlCode_) {
                        if (4096 == (61440 & e) ? this.lastControlCode_ = e : e !== this.PADDING_ && (this.lastControlCode_ = null), n = e >>> 8, s = 255 & e, e !== this.PADDING_) if (e === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn"; else if (e === this.END_OF_CAPTION_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = t.pts; else if (e === this.ROLL_UP_2_ROWS_) this.topRow_ = 13, this.mode_ = "rollUp"; else if (e === this.ROLL_UP_3_ROWS_) this.topRow_ = 12, this.mode_ = "rollUp"; else if (e === this.ROLL_UP_4_ROWS_) this.topRow_ = 11, this.mode_ = "rollUp"; else if (e === this.CARRIAGE_RETURN_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), this.shiftRowsUp_(), this.startPts_ = t.pts; else if (e === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[14] = this.nonDisplayed_[14].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1); else if (e === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(t.pts), this.displayed_ = d(); else if (e === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = d(); else if (e === this.RESUME_DIRECT_CAPTIONING_) this.mode_ = "paintOn"; else if (this.isSpecialCharacter(n, s)) a = o((n = (3 & n) << 8) | s), this[this.mode_](t.pts, a), this.column_++; else if (this.isExtCharacter(n, s)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1), a = o((n = (3 & n) << 8) | s), this[this.mode_](t.pts, a), this.column_++; else if (this.isMidRowCode(n, s)) this.clearFormatting(t.pts), this[this.mode_](t.pts, " "), this.column_++, 14 == (14 & s) && this.addFormatting(t.pts, ["i"]), 1 == (1 & s) && this.addFormatting(t.pts, ["u"]); else if (this.isOffsetControlCode(n, s)) this.column_ += 3 & s; else if (this.isPAC(n, s)) {
                            var r = u.indexOf(7968 & e);
                            r !== this.row_ && (this.clearFormatting(t.pts), this.row_ = r), 1 & s && -1 === this.formatting_.indexOf("u") && this.addFormatting(t.pts, ["u"]), 16 == (16 & e) && (this.column_ = 4 * ((14 & e) >> 1)), this.isColorPAC(s) && 14 == (14 & s) && this.addFormatting(t.pts, ["i"])
                        } else this.isNormalChar(n) && (0 === s && (s = null), a = o(n), a += o(s), this[this.mode_](t.pts, a), this.column_ += a.length)
                    } else this.lastControlCode_ = null
                }
            };
        r.prototype = new n, r.prototype.flushDisplayed = function (t) {
            var e = this.displayed_.map(function (t) {
                return t.trim()
            }).join("\n").replace(/^\n+|\n+$/g, "");
            e.length && this.trigger("data", {startPts: this.startPts_, endPts: t, text: e, stream: this.name_})
        }, r.prototype.reset = function () {
            this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = d(), this.nonDisplayed_ = d(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.formatting_ = []
        }, r.prototype.setConstants = function () {
            0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
        }, r.prototype.isSpecialCharacter = function (t, e) {
            return t === this.EXT_ && 48 <= e && e <= 63
        }, r.prototype.isExtCharacter = function (t, e) {
            return (t === this.EXT_ + 1 || t === this.EXT_ + 2) && 32 <= e && e <= 63
        }, r.prototype.isMidRowCode = function (t, e) {
            return t === this.EXT_ && 32 <= e && e <= 47
        }, r.prototype.isOffsetControlCode = function (t, e) {
            return t === this.OFFSET_ && 33 <= e && e <= 35
        }, r.prototype.isPAC = function (t, e) {
            return t >= this.BASE_ && t < this.BASE_ + 8 && 64 <= e && e <= 127
        }, r.prototype.isColorPAC = function (t) {
            return 64 <= t && t <= 79 || 96 <= t && t <= 127
        }, r.prototype.isNormalChar = function (t) {
            return 32 <= t && t <= 127
        }, r.prototype.addFormatting = function (t, e) {
            this.formatting_ = this.formatting_.concat(e);
            var i = e.reduce(function (t, e) {
                return t + "<" + e + ">"
            }, "");
            this[this.mode_](t, i)
        }, r.prototype.clearFormatting = function (t) {
            if (this.formatting_.length) {
                var e = this.formatting_.reverse().reduce(function (t, e) {
                    return t + "</" + e + ">"
                }, "");
                this.formatting_ = [], this[this.mode_](t, e)
            }
        }, r.prototype.popOn = function (t, e) {
            var i = this.nonDisplayed_[this.row_];
            i += e, this.nonDisplayed_[this.row_] = i
        }, r.prototype.rollUp = function (t, e) {
            var i = this.displayed_[14];
            i += e, this.displayed_[14] = i
        }, r.prototype.shiftRowsUp_ = function () {
            var t;
            for (t = 0; t < this.topRow_; t++) this.displayed_[t] = "";
            for (t = this.topRow_; t < 14; t++) this.displayed_[t] = this.displayed_[t + 1];
            this.displayed_[14] = ""
        }, r.prototype.paintOn = function () {
        }, t.exports = {CaptionStream: s, Cea608Stream: r}
    }, "./node_modules/mux.js/lib/m2ts/m2ts.js": function (t, e, i) {
        "use strict";
        var n, o, u, s = i("./node_modules/mux.js/lib/utils/stream.js"),
            a = i("./node_modules/mux.js/lib/m2ts/caption-stream.js"),
            d = i("./node_modules/mux.js/lib/m2ts/stream-types.js"),
            r = i("./node_modules/mux.js/lib/m2ts/timestamp-rollover-stream.js").TimestampRolloverStream,
            l = i("./node_modules/mux.js/lib/m2ts/stream-types.js");
        (n = function () {
            var s = new Uint8Array(188), a = 0;
            n.prototype.init.call(this), this.push = function (t) {
                var e, i = 0, n = 188;
                for (a ? ((e = new Uint8Array(t.byteLength + a)).set(s.subarray(0, a)), e.set(t, a), a = 0) : e = t; n < e.byteLength;) 71 !== e[i] || 71 !== e[n] ? (i++, n++) : (this.trigger("data", e.subarray(i, n)), i += 188, n += 188);
                i < e.byteLength && (s.set(e.subarray(i), 0), a = e.byteLength - i)
            }, this.flush = function () {
                188 === a && 71 === s[0] && (this.trigger("data", s), a = 0), this.trigger("done")
            }
        }).prototype = new s, (o = function () {
            var n, s, a, r;
            o.prototype.init.call(this), (r = this).packetsWaitingForPmt = [], this.programMapTable = void 0, n = function (t, e) {
                var i = 0;
                e.payloadUnitStartIndicator && (i += t[i] + 1), "pat" === e.type ? s(t.subarray(i), e) : a(t.subarray(i), e)
            }, s = function (t, e) {
                e.section_number = t[7], e.last_section_number = t[8], r.pmtPid = (31 & t[10]) << 8 | t[11], e.pmtPid = r.pmtPid
            }, a = function (t, e) {
                var i, n;
                if (1 & t[5]) {
                    for (r.programMapTable = {
                        video: null,
                        audio: null,
                        "timed-metadata": {}
                    }, i = 3 + ((15 & t[1]) << 8 | t[2]) - 4, n = 12 + ((15 & t[10]) << 8 | t[11]); n < i;) {
                        var s = t[n], a = (31 & t[n + 1]) << 8 | t[n + 2];
                        s === d.H264_STREAM_TYPE && null === r.programMapTable.video ? r.programMapTable.video = a : s === d.ADTS_STREAM_TYPE && null === r.programMapTable.audio ? r.programMapTable.audio = a : s === d.METADATA_STREAM_TYPE && (r.programMapTable["timed-metadata"][a] = s), n += 5 + ((15 & t[n + 3]) << 8 | t[n + 4])
                    }
                    e.programMapTable = r.programMapTable
                }
            }, this.push = function (t) {
                var e = {}, i = 4;
                if (e.payloadUnitStartIndicator = !!(64 & t[1]), e.pid = 31 & t[1], e.pid <<= 8, e.pid |= t[2], 1 < (48 & t[3]) >>> 4 && (i += t[i] + 1), 0 === e.pid) e.type = "pat", n(t.subarray(i), e), this.trigger("data", e); else if (e.pid === this.pmtPid) for (e.type = "pmt", n(t.subarray(i), e), this.trigger("data", e); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift()); else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, i, e]) : this.processPes_(t, i, e)
            }, this.processPes_ = function (t, e, i) {
                i.pid === this.programMapTable.video ? i.streamType = d.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = d.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = t.subarray(e), this.trigger("data", i)
            }
        }).prototype = new s, o.STREAM_TYPES = {h264: 27, adts: 15}, (u = function () {
            var c = this, n = {data: [], size: 0}, s = {data: [], size: 0}, a = {data: [], size: 0},
                r = function (t, e, i) {
                    var n, s, a = new Uint8Array(t.size), r = {type: e}, o = 0, u = 0;
                    if (t.data.length && !(t.size < 9)) {
                        for (r.trackId = t.data[0].pid, o = 0; o < t.data.length; o++) s = t.data[o], a.set(s.data, u), u += s.data.byteLength;
                        var d, l, p;
                        d = a, (l = r).packetLength = 6 + (d[4] << 8 | d[5]), l.dataAlignmentIndicator = 0 != (4 & d[6]), 192 & (p = d[7]) && (l.pts = (14 & d[9]) << 27 | (255 & d[10]) << 20 | (254 & d[11]) << 12 | (255 & d[12]) << 5 | (254 & d[13]) >>> 3, l.pts *= 4, l.pts += (6 & d[13]) >>> 1, l.dts = l.pts, 64 & p && (l.dts = (14 & d[14]) << 27 | (255 & d[15]) << 20 | (254 & d[16]) << 12 | (255 & d[17]) << 5 | (254 & d[18]) >>> 3, l.dts *= 4, l.dts += (6 & d[18]) >>> 1)), l.data = d.subarray(9 + d[8]), n = "video" === e || r.packetLength <= t.size, (i || n) && (t.size = 0, t.data.length = 0), n && c.trigger("data", r)
                    }
                };
            u.prototype.init.call(this), this.push = function (i) {
                ({
                    pat: function () {
                    }, pes: function () {
                        var t, e;
                        switch (i.streamType) {
                            case d.H264_STREAM_TYPE:
                            case l.H264_STREAM_TYPE:
                                t = n, e = "video";
                                break;
                            case d.ADTS_STREAM_TYPE:
                                t = s, e = "audio";
                                break;
                            case d.METADATA_STREAM_TYPE:
                                t = a, e = "timed-metadata";
                                break;
                            default:
                                return
                        }
                        i.payloadUnitStartIndicator && r(t, e, !0), t.data.push(i), t.size += i.data.byteLength
                    }, pmt: function () {
                        var t = {type: "metadata", tracks: []}, e = i.programMapTable;
                        null !== e.video && t.tracks.push({
                            timelineStartInfo: {baseMediaDecodeTime: 0},
                            id: +e.video,
                            codec: "avc",
                            type: "video"
                        }), null !== e.audio && t.tracks.push({
                            timelineStartInfo: {baseMediaDecodeTime: 0},
                            id: +e.audio,
                            codec: "adts",
                            type: "audio"
                        }), c.trigger("data", t)
                    }
                })[i.type]()
            }, this.flush = function () {
                r(n, "video"), r(s, "audio"), r(a, "timed-metadata"), this.trigger("done")
            }
        }).prototype = new s;
        var p = {
            PAT_PID: 0,
            MP2T_PACKET_LENGTH: 188,
            TransportPacketStream: n,
            TransportParseStream: o,
            ElementaryStream: u,
            TimestampRolloverStream: r,
            CaptionStream: a.CaptionStream,
            Cea608Stream: a.Cea608Stream,
            MetadataStream: i("./node_modules/mux.js/lib/m2ts/metadata-stream.js")
        };
        for (var c in d) d.hasOwnProperty(c) && (p[c] = d[c]);
        t.exports = p
    }, "./node_modules/mux.js/lib/m2ts/metadata-stream.js": function (t, e, i) {
        "use strict";
        var n, s = i("./node_modules/mux.js/lib/utils/stream.js"),
            a = i("./node_modules/mux.js/lib/m2ts/stream-types.js"), r = function (t, e, i) {
                var n, s = "";
                for (n = e; n < i; n++) s += "%" + ("00" + t[n].toString(16)).slice(-2);
                return s
            }, o = function (t, e, i) {
                return decodeURIComponent(r(t, e, i))
            }, c = function (t) {
                return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
            }, h = {
                TXXX: function (t) {
                    var e;
                    if (3 === t.data[0]) {
                        for (e = 1; e < t.data.length; e++) if (0 === t.data[e]) {
                            t.description = o(t.data, 1, e), t.value = o(t.data, e + 1, t.data.length).replace(/\0*$/, "");
                            break
                        }
                        t.data = t.value
                    }
                }, WXXX: function (t) {
                    var e;
                    if (3 === t.data[0]) for (e = 1; e < t.data.length; e++) if (0 === t.data[e]) {
                        t.description = o(t.data, 1, e), t.url = o(t.data, e + 1, t.data.length);
                        break
                    }
                }, PRIV: function (t) {
                    var e, i;
                    for (e = 0; e < t.data.length; e++) if (0 === t.data[e]) {
                        t.owner = (i = t.data, unescape(r(i, 0, e)));
                        break
                    }
                    t.privateData = t.data.subarray(e + 1), t.data = t.privateData
                }
            };
        (n = function (t) {
            var e, u = {debug: !(!t || !t.debug), descriptor: t && t.descriptor}, d = 0, l = [], p = 0;
            if (n.prototype.init.call(this), this.dispatchType = a.METADATA_STREAM_TYPE.toString(16), u.descriptor) for (e = 0; e < u.descriptor.length; e++) this.dispatchType += ("00" + u.descriptor[e].toString(16)).slice(-2);
            this.push = function (t) {
                var e, i, n, s, a;
                if ("timed-metadata" === t.type) if (t.dataAlignmentIndicator && (p = 0, l.length = 0), 0 === l.length && (t.data.length < 10 || t.data[0] !== "I".charCodeAt(0) || t.data[1] !== "D".charCodeAt(0) || t.data[2] !== "3".charCodeAt(0))) u.debug && console.log("Skipping unrecognized metadata packet"); else if (l.push(t), p += t.data.byteLength, 1 === l.length && (d = c(t.data.subarray(6, 10)), d += 10), !(p < d)) {
                    for (e = {
                        data: new Uint8Array(d),
                        frames: [],
                        pts: l[0].pts,
                        dts: l[0].dts
                    }, a = 0; a < d;) e.data.set(l[0].data.subarray(0, d - a), a), a += l[0].data.byteLength, p -= l[0].data.byteLength, l.shift();
                    i = 10, 64 & e.data[5] && (i += 4, i += c(e.data.subarray(10, 14)), d -= c(e.data.subarray(16, 20)));
                    do {
                        if ((n = c(e.data.subarray(i + 4, i + 8))) < 1) return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
                        if ((s = {
                            id: String.fromCharCode(e.data[i], e.data[i + 1], e.data[i + 2], e.data[i + 3]),
                            data: e.data.subarray(i + 10, i + n + 10)
                        }).key = s.id, h[s.id] && (h[s.id](s), "com.apple.streaming.transportStreamTimestamp" === s.owner)) {
                            var r = s.data, o = (1 & r[3]) << 30 | r[4] << 22 | r[5] << 14 | r[6] << 6 | r[7] >>> 2;
                            o *= 4, o += 3 & r[7], s.timeStamp = o, void 0 === e.pts && void 0 === e.dts && (e.pts = s.timeStamp, e.dts = s.timeStamp), this.trigger("timestamp", s)
                        }
                        e.frames.push(s), i += 10, i += n
                    } while (i < d);
                    this.trigger("data", e)
                }
            }
        }).prototype = new s, t.exports = n
    }, "./node_modules/mux.js/lib/m2ts/probe.js": function (t, e, i) {
        "use strict";
        var n = i("./node_modules/mux.js/lib/m2ts/stream-types.js"), s = function (t) {
            var e = 31 & t[1];
            return e <<= 8, e |= t[2]
        }, o = function (t) {
            return !!(64 & t[1])
        }, u = function (t) {
            var e = 0;
            return 1 < (48 & t[3]) >>> 4 && (e += t[4] + 1), e
        }, r = function (t) {
            switch (t) {
                case 5:
                    return "slice_layer_without_partitioning_rbsp_idr";
                case 6:
                    return "sei_rbsp";
                case 7:
                    return "seq_parameter_set_rbsp";
                case 8:
                    return "pic_parameter_set_rbsp";
                case 9:
                    return "access_unit_delimiter_rbsp";
                default:
                    return null
            }
        };
        t.exports = {
            parseType: function (t, e) {
                var i = s(t);
                return 0 === i ? "pat" : i === e ? "pmt" : e ? "pes" : null
            }, parsePat: function (t) {
                var e = o(t), i = 4 + u(t);
                return e && (i += t[i] + 1), (31 & t[i + 10]) << 8 | t[i + 11]
            }, parsePmt: function (t) {
                var e = {}, i = o(t), n = 4 + u(t);
                if (i && (n += t[n] + 1), 1 & t[n + 5]) {
                    var s;
                    s = 3 + ((15 & t[n + 1]) << 8 | t[n + 2]) - 4;
                    for (var a = 12 + ((15 & t[n + 10]) << 8 | t[n + 11]); a < s;) {
                        var r = n + a;
                        e[(31 & t[r + 1]) << 8 | t[r + 2]] = t[r], a += 5 + ((15 & t[r + 3]) << 8 | t[r + 4])
                    }
                    return e
                }
            }, parsePayloadUnitStartIndicator: o, parsePesType: function (t, e) {
                switch (e[s(t)]) {
                    case n.H264_STREAM_TYPE:
                        return "video";
                    case n.ADTS_STREAM_TYPE:
                        return "audio";
                    case n.METADATA_STREAM_TYPE:
                        return "timed-metadata";
                    default:
                        return null
                }
            }, parsePesTime: function (t) {
                if (!o(t)) return null;
                var e = 4 + u(t);
                if (e >= t.byteLength) return null;
                var i, n = null;
                return 192 & (i = t[e + 7]) && ((n = {}).pts = (14 & t[e + 9]) << 27 | (255 & t[e + 10]) << 20 | (254 & t[e + 11]) << 12 | (255 & t[e + 12]) << 5 | (254 & t[e + 13]) >>> 3, n.pts *= 4, n.pts += (6 & t[e + 13]) >>> 1, n.dts = n.pts, 64 & i && (n.dts = (14 & t[e + 14]) << 27 | (255 & t[e + 15]) << 20 | (254 & t[e + 16]) << 12 | (255 & t[e + 17]) << 5 | (254 & t[e + 18]) >>> 3, n.dts *= 4, n.dts += (6 & t[e + 18]) >>> 1)), n
            }, videoPacketContainsKeyFrame: function (t) {
                for (var e = 4 + u(t), i = t.subarray(e), n = 0, s = 0, a = !1; s < i.byteLength - 3; s++) if (1 === i[s + 2]) {
                    n = s + 5;
                    break
                }
                for (; n < i.byteLength;) switch (i[n]) {
                    case 0:
                        if (0 !== i[n - 1]) {
                            n += 2;
                            break
                        }
                        if (0 !== i[n - 2]) {
                            n++;
                            break
                        }
                        for (s + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === r(31 & i[s + 3]) && (a = !0); 1 !== i[++n] && n < i.length;) ;
                        s = n - 2, n += 3;
                        break;
                    case 1:
                        if (0 !== i[n - 1] || 0 !== i[n - 2]) {
                            n += 3;
                            break
                        }
                        "slice_layer_without_partitioning_rbsp_idr" === r(31 & i[s + 3]) && (a = !0), s = n - 2, n += 3;
                        break;
                    default:
                        n += 3
                }
                return i = i.subarray(s), n -= s, s = 0, i && 3 < i.byteLength && "slice_layer_without_partitioning_rbsp_idr" === r(31 & i[s + 3]) && (a = !0), a
            }
        }
    }, "./node_modules/mux.js/lib/m2ts/stream-types.js": function (t, e, i) {
        "use strict";
        t.exports = {H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21}
    }, "./node_modules/mux.js/lib/m2ts/timestamp-rollover-stream.js": function (t, e, i) {
        "use strict";
        var n = i("./node_modules/mux.js/lib/utils/stream.js"), s = function (t, e) {
            var i = 1;
            for (e < t && (i = -1); 4294967296 < Math.abs(e - t);) t += 8589934592 * i;
            return t
        }, a = function (t) {
            var e, i;
            a.prototype.init.call(this), this.type_ = t, this.push = function (t) {
                t.type === this.type_ && (void 0 === i && (i = t.dts), t.dts = s(t.dts, i), t.pts = s(t.pts, i), e = t.dts, this.trigger("data", t))
            }, this.flush = function () {
                i = e, this.trigger("done")
            }, this.discontinuity = function () {
                e = i = void 0
            }
        };
        a.prototype = new n, t.exports = {TimestampRolloverStream: a, handleRollover: s}
    }, "./node_modules/mux.js/lib/mp4/index.js": function (t, e, i) {
        t.exports = {
            generator: i("./node_modules/mux.js/lib/mp4/mp4-generator.js"),
            Transmuxer: i("./node_modules/mux.js/lib/mp4/transmuxer.js").Transmuxer,
            AudioSegmentStream: i("./node_modules/mux.js/lib/mp4/transmuxer.js").AudioSegmentStream,
            VideoSegmentStream: i("./node_modules/mux.js/lib/mp4/transmuxer.js").VideoSegmentStream
        }
    }, "./node_modules/mux.js/lib/mp4/mp4-generator.js": function (t, e, i) {
        "use strict";
        var o, n, s, a, r, u, d, l, p, c, h, f, m, g, y, b, v, _, T, S, w, j, A, x, k, E, O, C, D, I, M, U, P, L, R, N,
            F, G, B, z, X, q = Math.pow(2, 32) - 1;
        !function () {
            var t;
            if (A = {
                avc1: [],
                avcC: [],
                btrt: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                mvex: [],
                mvhd: [],
                sdtp: [],
                smhd: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                styp: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: []
            }, "undefined" != typeof Uint8Array) {
                for (t in A) A.hasOwnProperty(t) && (A[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                x = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), E = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), k = new Uint8Array([0, 0, 0, 1]), O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), C = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), D = {
                    video: O,
                    audio: C
                }, U = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), M = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), L = P, R = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), N = P, I = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
            }
        }(), o = function (t) {
            var e, i, n = [], s = 0;
            for (e = 1; e < arguments.length; e++) n.push(arguments[e]);
            for (e = n.length; e--;) s += n[e].byteLength;
            for (i = new Uint8Array(s + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(t, 4), e = 0, s = 8; e < n.length; e++) i.set(n[e], s), s += n[e].byteLength;
            return i
        }, n = function () {
            return o(A.dinf, o(A.dref, U))
        }, s = function (t) {
            return o(A.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, t.audioobjecttype << 3 | t.samplingfrequencyindex >>> 1, t.samplingfrequencyindex << 7 | t.channelcount << 3, 6, 1, 2]))
        }, a = function () {
            return o(A.ftyp, x, k, x, E)
        }, b = function (t) {
            return o(A.hdlr, D[t])
        }, r = function (t) {
            return o(A.mdat, t)
        }, y = function (t) {
            var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, t.duration >>> 24 & 255, t.duration >>> 16 & 255, t.duration >>> 8 & 255, 255 & t.duration, 85, 196, 0, 0]);
            return t.samplerate && (e[12] = t.samplerate >>> 24 & 255, e[13] = t.samplerate >>> 16 & 255, e[14] = t.samplerate >>> 8 & 255, e[15] = 255 & t.samplerate), o(A.mdhd, e)
        }, g = function (t) {
            return o(A.mdia, y(t), b(t.type), d(t))
        }, u = function (t) {
            return o(A.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]))
        }, d = function (t) {
            return o(A.minf, "video" === t.type ? o(A.vmhd, I) : o(A.smhd, M), n(), _(t))
        }, l = function (t, e) {
            for (var i = [], n = e.length; n--;) i[n] = S(e[n]);
            return o.apply(null, [A.moof, u(t)].concat(i))
        }, p = function (t) {
            for (var e = t.length, i = []; e--;) i[e] = f(t[e]);
            return o.apply(null, [A.moov, h(4294967295)].concat(i).concat(c(t)))
        }, c = function (t) {
            for (var e = t.length, i = []; e--;) i[e] = w(t[e]);
            return o.apply(null, [A.mvex].concat(i))
        }, h = function (t) {
            var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return o(A.mvhd, e)
        }, v = function (t) {
            var e, i, n = t.samples || [], s = new Uint8Array(4 + n.length);
            for (i = 0; i < n.length; i++) e = n[i].flags, s[i + 4] = e.dependsOn << 4 | e.isDependedOn << 2 | e.hasRedundancy;
            return o(A.sdtp, s)
        }, _ = function (t) {
            return o(A.stbl, T(t), o(A.stts, N), o(A.stsc, L), o(A.stsz, R), o(A.stco, P))
        }, T = function (t) {
            return o(A.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === t.type ? F(t) : G(t))
        }, F = function (t) {
            var e, i = t.sps || [], n = t.pps || [], s = [], a = [];
            for (e = 0; e < i.length; e++) s.push((65280 & i[e].byteLength) >>> 8), s.push(255 & i[e].byteLength), s = s.concat(Array.prototype.slice.call(i[e]));
            for (e = 0; e < n.length; e++) a.push((65280 & n[e].byteLength) >>> 8), a.push(255 & n[e].byteLength), a = a.concat(Array.prototype.slice.call(n[e]));
            return o(A.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, (65280 & t.height) >> 8, 255 & t.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o(A.avcC, new Uint8Array([1, t.profileIdc, t.profileCompatibility, t.levelIdc, 255].concat([i.length]).concat(s).concat([n.length]).concat(a))), o(A.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
        }, G = function (t) {
            return o(A.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.channelcount) >> 8, 255 & t.channelcount, (65280 & t.samplesize) >> 8, 255 & t.samplesize, 0, 0, 0, 0, (65280 & t.samplerate) >> 8, 255 & t.samplerate, 0, 0]), s(t))
        }, m = function (t) {
            var e = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 0, (4278190080 & t.duration) >> 24, (16711680 & t.duration) >> 16, (65280 & t.duration) >> 8, 255 & t.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, 0, 0, (65280 & t.height) >> 8, 255 & t.height, 0, 0]);
            return o(A.tkhd, e)
        }, S = function (t) {
            var e, i, n, s, a, r;
            return e = o(A.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), a = Math.floor(t.baseMediaDecodeTime / (q + 1)), r = Math.floor(t.baseMediaDecodeTime % (q + 1)), i = o(A.tfdt, new Uint8Array([1, 0, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r])), 92, "audio" === t.type ? (n = j(t, 92), o(A.traf, e, i, n)) : (s = v(t), n = j(t, s.length + 92), o(A.traf, e, i, n, s))
        }, f = function (t) {
            return t.duration = t.duration || 4294967295, o(A.trak, m(t), g(t))
        }, w = function (t) {
            var e = new Uint8Array([0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
            return "video" !== t.type && (e[e.length - 1] = 0), o(A.trex, e)
        }, X = function (t, e) {
            var i = 0, n = 0, s = 0, a = 0;
            return t.length && (void 0 !== t[0].duration && (i = 1), void 0 !== t[0].size && (n = 2), void 0 !== t[0].flags && (s = 4), void 0 !== t[0].compositionTimeOffset && (a = 8)), [0, 0, i | n | s | a, 1, (4278190080 & t.length) >>> 24, (16711680 & t.length) >>> 16, (65280 & t.length) >>> 8, 255 & t.length, (4278190080 & e) >>> 24, (16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e]
        }, z = function (t, e) {
            var i, n, s, a;
            for (e += 20 + 16 * (n = t.samples || []).length, i = X(n, e), a = 0; a < n.length; a++) s = n[a], i = i.concat([(4278190080 & s.duration) >>> 24, (16711680 & s.duration) >>> 16, (65280 & s.duration) >>> 8, 255 & s.duration, (4278190080 & s.size) >>> 24, (16711680 & s.size) >>> 16, (65280 & s.size) >>> 8, 255 & s.size, s.flags.isLeading << 2 | s.flags.dependsOn, s.flags.isDependedOn << 6 | s.flags.hasRedundancy << 4 | s.flags.paddingValue << 1 | s.flags.isNonSyncSample, 61440 & s.flags.degradationPriority, 15 & s.flags.degradationPriority, (4278190080 & s.compositionTimeOffset) >>> 24, (16711680 & s.compositionTimeOffset) >>> 16, (65280 & s.compositionTimeOffset) >>> 8, 255 & s.compositionTimeOffset]);
            return o(A.trun, new Uint8Array(i))
        }, B = function (t, e) {
            var i, n, s, a;
            for (e += 20 + 8 * (n = t.samples || []).length, i = X(n, e), a = 0; a < n.length; a++) s = n[a], i = i.concat([(4278190080 & s.duration) >>> 24, (16711680 & s.duration) >>> 16, (65280 & s.duration) >>> 8, 255 & s.duration, (4278190080 & s.size) >>> 24, (16711680 & s.size) >>> 16, (65280 & s.size) >>> 8, 255 & s.size]);
            return o(A.trun, new Uint8Array(i))
        }, j = function (t, e) {
            return "audio" === t.type ? B(t, e) : z(t, e)
        }, t.exports = {
            ftyp: a, mdat: r, moof: l, moov: p, initSegment: function (t) {
                var e, i = a(), n = p(t);
                return (e = new Uint8Array(i.byteLength + n.byteLength)).set(i), e.set(n, i.byteLength), e
            }
        }
    }, "./node_modules/mux.js/lib/mp4/probe.js": function (t, e, i) {
        "use strict";
        var u, d, n, s;
        u = function (t, e) {
            var i, n, s, a, r, o = [];
            if (!e.length) return null;
            for (i = 0; i < t.byteLength;) n = t[i] << 24, n |= t[i + 1] << 16, n |= t[i + 2] << 8, n |= t[i + 3], s = d(t.subarray(i + 4, i + 8)), a = 1 < n ? i + n : t.byteLength, s === e[0] && (1 === e.length ? o.push(t.subarray(i + 8, a)) : (r = u(t.subarray(i + 8, a), e.slice(1))).length && (o = o.concat(r))), i = a;
            return o
        }, d = function (t) {
            var e = "";
            return e += String.fromCharCode(t[0]), e += String.fromCharCode(t[1]), e += String.fromCharCode(t[2]), e += String.fromCharCode(t[3])
        }, n = function (t) {
            return u(t, ["moov", "trak"]).reduce(function (t, e) {
                var i, n, s, a;
                return (i = u(e, ["tkhd"])[0]) ? (s = i[n = 0 === i[0] ? 12 : 20] << 24 | i[n + 1] << 16 | i[n + 2] << 8 | i[n + 3], (a = u(e, ["mdia", "mdhd"])[0]) ? (n = 0 === a[0] ? 12 : 20, t[s] = a[n] << 24 | a[n + 1] << 16 | a[n + 2] << 8 | a[n + 3], t) : null) : null
            }, {})
        }, s = function (s, t) {
            var e, i, n;
            return e = u(t, ["moof", "traf"]), i = [].concat.apply([], e.map(function (n) {
                return u(n, ["tfhd"]).map(function (t) {
                    var e, i;
                    return e = t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], i = s[e] || 9e4, (u(n, ["tfdt"]).map(function (t) {
                        var e, i;
                        return e = t[0], i = t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], 1 === e && (i *= Math.pow(2, 32), i += t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11]), i
                    })[0] || 1 / 0) / i
                })
            })), n = Math.min.apply(null, i), isFinite(n) ? n : 0
        }, t.exports = {parseType: d, timescale: n, startTime: s}
    }, "./node_modules/mux.js/lib/mp4/transmuxer.js": function (t, e, i) {
        "use strict";
        var c, o, u, d, l, h, f, m, g, p, n = i("./node_modules/mux.js/lib/utils/stream.js"),
            y = i("./node_modules/mux.js/lib/mp4/mp4-generator.js"), b = i("./node_modules/mux.js/lib/m2ts/m2ts.js"),
            v = i("./node_modules/mux.js/lib/codecs/adts.js"),
            _ = i("./node_modules/mux.js/lib/codecs/h264.js").H264Stream,
            T = i("./node_modules/mux.js/lib/aac/index.js"), S = i("./node_modules/mux.js/lib/data/silence.js"),
            w = i("./node_modules/mux.js/lib/utils/clock.js"),
            j = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
            A = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"];
        l = function (t) {
            return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
        }, g = function (t, e) {
            var i;
            if (t.length !== e.length) return !1;
            for (i = 0; i < t.length; i++) if (t[i] !== e[i]) return !1;
            return !0
        }, p = function (t) {
            var e, i = 0;
            for (e = 0; e < t.length; e++) i += t[e].data.byteLength;
            return i
        }, (o = function (s) {
            var a = [], r = 0, e = 0, d = 0, l = 1 / 0;
            o.prototype.init.call(this), this.push = function (e) {
                h(s, e), s && j.forEach(function (t) {
                    s[t] = e[t]
                }), a.push(e)
            }, this.setEarliestDts = function (t) {
                e = t - s.timelineStartInfo.baseMediaDecodeTime
            }, this.setVideoBaseMediaDecodeTime = function (t) {
                l = t
            }, this.setAudioAppendStart = function (t) {
                d = t
            }, this.flush = function () {
                var t, e, i, n;
                0 !== a.length && (t = this.trimAdtsFramesByEarliestDts_(a), s.baseMediaDecodeTime = m(s), this.prefixWithSilence_(s, t), s.samples = this.generateSampleTable_(t), i = y.mdat(this.concatenateFrameData_(t)), a = [], e = y.moof(r, [s]), n = new Uint8Array(e.byteLength + i.byteLength), r++, n.set(e), n.set(i, e.byteLength), f(s), this.trigger("data", {
                    track: s,
                    boxes: n
                })), this.trigger("done", "AudioSegmentStream")
            }, this.prefixWithSilence_ = function (t, e) {
                var i, n, s, a, r = 0, o = 0, u = 0;
                if (e.length && (i = w.audioTsToVideoTs(t.baseMediaDecodeTime, t.samplerate), n = Math.ceil(9e4 / (t.samplerate / 1024)), d && l && (r = i - Math.max(d, l), u = (o = Math.floor(r / n)) * n), !(o < 1 || 45e3 < u))) {
                    for ((s = S[t.samplerate]) || (s = e[0].data), a = 0; a < o; a++) e.splice(a, 0, {data: s});
                    t.baseMediaDecodeTime -= Math.floor(w.videoTsToAudioTs(u, t.samplerate))
                }
            }, this.trimAdtsFramesByEarliestDts_ = function (t) {
                return s.minSegmentDts >= e ? t : (s.minSegmentDts = 1 / 0, t.filter(function (t) {
                    return t.dts >= e && (s.minSegmentDts = Math.min(s.minSegmentDts, t.dts), s.minSegmentPts = s.minSegmentDts, !0)
                }))
            }, this.generateSampleTable_ = function (t) {
                var e, i, n = [];
                for (e = 0; e < t.length; e++) i = t[e], n.push({size: i.data.byteLength, duration: 1024});
                return n
            }, this.concatenateFrameData_ = function (t) {
                var e, i, n = 0, s = new Uint8Array(p(t));
                for (e = 0; e < t.length; e++) i = t[e], s.set(i.data, n), n += i.data.byteLength;
                return s
            }
        }).prototype = new n, (c = function (o, u) {
            var e, i, d = 0, l = [], p = [];
            u = u || {}, c.prototype.init.call(this), delete o.minPTS, this.gopCache_ = [], this.push = function (t) {
                h(o, t), "seq_parameter_set_rbsp" !== t.nalUnitType || e || (e = t.config, o.sps = [t.data], A.forEach(function (t) {
                    o[t] = e[t]
                }, this)), "pic_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.data, o.pps = [t.data]), l.push(t)
            }, this.flush = function () {
                for (var t, e, i, n, s, a; l.length && "access_unit_delimiter_rbsp" !== l[0].nalUnitType;) l.shift();
                if (0 === l.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                if (t = this.groupNalsIntoFrames_(l), (i = this.groupFramesIntoGops_(t))[0][0].keyFrame || ((e = this.getGopForFusion_(l[0], o)) ? (i.unshift(e), i.byteLength += e.byteLength, i.nalCount += e.nalCount, i.pts = e.pts, i.dts = e.dts, i.duration += e.duration) : i = this.extendFirstKeyFrame_(i)), p.length) {
                    var r;
                    if (!(r = u.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i))) return this.gopCache_.unshift({
                        gop: i.pop(),
                        pps: o.pps,
                        sps: o.sps
                    }), this.gopCache_.length = Math.min(6, this.gopCache_.length), l = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                    f(o), i = r
                }
                h(o, i), o.samples = this.generateSampleTable_(i), s = y.mdat(this.concatenateNalData_(i)), o.baseMediaDecodeTime = m(o), this.trigger("processedGopsInfo", i.map(function (t) {
                    return {pts: t.pts, dts: t.dts, byteLength: t.byteLength}
                })), this.gopCache_.unshift({
                    gop: i.pop(),
                    pps: o.pps,
                    sps: o.sps
                }), this.gopCache_.length = Math.min(6, this.gopCache_.length), l = [], this.trigger("baseMediaDecodeTime", o.baseMediaDecodeTime), this.trigger("timelineStartInfo", o.timelineStartInfo), n = y.moof(d, [o]), a = new Uint8Array(n.byteLength + s.byteLength), d++, a.set(n), a.set(s, n.byteLength), this.trigger("data", {
                    track: o,
                    boxes: a
                }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
            }, this.resetStream_ = function () {
                f(o), i = e = void 0
            }, this.getGopForFusion_ = function (t) {
                var e, i, n, s, a, r = 1 / 0;
                for (a = 0; a < this.gopCache_.length; a++) n = (s = this.gopCache_[a]).gop, o.pps && g(o.pps[0], s.pps[0]) && o.sps && g(o.sps[0], s.sps[0]) && (n.dts < o.timelineStartInfo.dts || -1e4 <= (e = t.dts - n.dts - n.duration) && e <= 45e3 && (!i || e < r) && (i = s, r = e));
                return i ? i.gop : null
            }, this.extendFirstKeyFrame_ = function (t) {
                var e;
                return !t[0][0].keyFrame && 1 < t.length && (e = t.shift(), t.byteLength -= e.byteLength, t.nalCount -= e.nalCount, t[0][0].dts = e.dts, t[0][0].pts = e.pts, t[0][0].duration += e.duration), t
            }, this.groupNalsIntoFrames_ = function (t) {
                var e, i, n = [], s = [];
                for (e = n.byteLength = 0; e < t.length; e++) "access_unit_delimiter_rbsp" === (i = t[e]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts, s.push(n)), (n = [i]).byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), n.duration = i.dts - n.dts, n.byteLength += i.data.byteLength, n.push(i));
                return s.length && (!n.duration || n.duration <= 0) && (n.duration = s[s.length - 1].duration), s.push(n), s
            }, this.groupFramesIntoGops_ = function (t) {
                var e, i, n = [], s = [];
                for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = t[0].pts, n.dts = t[0].dts, s.byteLength = 0, s.nalCount = 0, s.duration = 0, s.pts = t[0].pts, s.dts = t[0].dts, e = 0; e < t.length; e++) (i = t[e]).keyFrame ? (n.length && (s.push(n), s.byteLength += n.byteLength, s.nalCount += n.nalCount, s.duration += n.duration), (n = [i]).nalCount = i.length, n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) : (n.duration += i.duration, n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i));
                return s.length && n.duration <= 0 && (n.duration = s[s.length - 1].duration), s.byteLength += n.byteLength, s.nalCount += n.nalCount, s.duration += n.duration, s.push(n), s
            }, this.generateSampleTable_ = function (t, e) {
                var i, n, s, a, r, o = e || 0, u = [];
                for (i = 0; i < t.length; i++) for (a = t[i], n = 0; n < a.length; n++) r = a[n], (s = {
                    size: 0,
                    flags: {isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0, degradationPriority: 0}
                }).dataOffset = o, s.compositionTimeOffset = r.pts - r.dts, s.duration = r.duration, s.size = 4 * r.length, s.size += r.byteLength, r.keyFrame && (s.flags.dependsOn = 2), o += s.size, u.push(s);
                return u
            }, this.concatenateNalData_ = function (t) {
                var e, i, n, s, a, r, o = 0, u = t.byteLength, d = t.nalCount, l = new Uint8Array(u + 4 * d),
                    p = new DataView(l.buffer);
                for (e = 0; e < t.length; e++) for (s = t[e], i = 0; i < s.length; i++) for (a = s[i], n = 0; n < a.length; n++) r = a[n], p.setUint32(o, r.data.byteLength), o += 4, l.set(r.data, o), o += r.data.byteLength;
                return l
            }, this.alignGopsAtStart_ = function (t) {
                var e, i, n, s, a, r, o, u;
                for (a = t.byteLength, r = t.nalCount, o = t.duration, e = i = 0; e < p.length && i < t.length && (n = p[e], s = t[i], n.pts !== s.pts);) s.pts > n.pts ? e++ : (i++, a -= s.byteLength, r -= s.nalCount, o -= s.duration);
                return 0 === i ? t : i === t.length ? null : ((u = t.slice(i)).byteLength = a, u.duration = o, u.nalCount = r, u.pts = u[0].pts, u.dts = u[0].dts, u)
            }, this.alignGopsAtEnd_ = function (t) {
                var e, i, n, s, a, r, o;
                for (e = p.length - 1, i = t.length - 1, a = null, r = !1; 0 <= e && 0 <= i;) {
                    if (n = p[e], s = t[i], n.pts === s.pts) {
                        r = !0;
                        break
                    }
                    n.pts > s.pts ? e-- : (e === p.length - 1 && (a = i), i--)
                }
                if (!r && null === a) return null;
                if (0 === (o = r ? i : a)) return t;
                var u = t.slice(o), d = u.reduce(function (t, e) {
                    return t.byteLength += e.byteLength, t.duration += e.duration, t.nalCount += e.nalCount, t
                }, {byteLength: 0, duration: 0, nalCount: 0});
                return u.byteLength = d.byteLength, u.duration = d.duration, u.nalCount = d.nalCount, u.pts = u[0].pts, u.dts = u[0].dts, u
            }, this.alignGopsWith = function (t) {
                p = t
            }
        }).prototype = new n, h = function (t, e) {
            "number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts && (t.timelineStartInfo.pts = e.pts), void 0 === t.minSegmentPts ? t.minSegmentPts = e.pts : t.minSegmentPts = Math.min(t.minSegmentPts, e.pts), void 0 === t.maxSegmentPts ? t.maxSegmentPts = e.pts : t.maxSegmentPts = Math.max(t.maxSegmentPts, e.pts)), "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts && (t.timelineStartInfo.dts = e.dts), void 0 === t.minSegmentDts ? t.minSegmentDts = e.dts : t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), void 0 === t.maxSegmentDts ? t.maxSegmentDts = e.dts : t.maxSegmentDts = Math.max(t.maxSegmentDts, e.dts))
        }, f = function (t) {
            delete t.minSegmentDts, delete t.maxSegmentDts, delete t.minSegmentPts, delete t.maxSegmentPts
        }, m = function (t) {
            var e, i = t.minSegmentDts - t.timelineStartInfo.dts;
            return e = t.timelineStartInfo.baseMediaDecodeTime, e += i, e = Math.max(0, e), "audio" === t.type && (e *= t.samplerate / 9e4, e = Math.floor(e)), e
        }, (d = function (t, e) {
            this.numberOfTracks = 0, this.metadataStream = e, void 0 !== t.remux ? this.remuxTracks = !!t.remux : this.remuxTracks = !0, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, d.prototype.init.call(this), this.push = function (t) {
                return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : (this.pendingTracks.push(t.track), this.pendingBoxes.push(t.boxes), this.pendingBytes += t.boxes.byteLength, "video" === t.track.type && (this.videoTrack = t.track), void ("audio" === t.track.type && (this.audioTrack = t.track)))
            }
        }).prototype = new n, d.prototype.flush = function (t) {
            var e, i, n, s, a = 0, r = {captions: [], captionStreams: {}, metadata: [], info: {}}, o = 0;
            if (this.pendingTracks.length < this.numberOfTracks) {
                if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t) return;
                if (this.remuxTracks) return;
                if (0 === this.pendingTracks.length) return this.emittedTracks++, void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
            }
            for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, A.forEach(function (t) {
                r.info[t] = this.videoTrack[t]
            }, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, j.forEach(function (t) {
                r.info[t] = this.audioTrack[t]
            }, this)), 1 === this.pendingTracks.length ? r.type = this.pendingTracks[0].type : r.type = "combined", this.emittedTracks += this.pendingTracks.length, n = y.initSegment(this.pendingTracks), r.initSegment = new Uint8Array(n.byteLength), r.initSegment.set(n), r.data = new Uint8Array(this.pendingBytes), s = 0; s < this.pendingBoxes.length; s++) r.data.set(this.pendingBoxes[s], a), a += this.pendingBoxes[s].byteLength;
            for (s = 0; s < this.pendingCaptions.length; s++) (e = this.pendingCaptions[s]).startTime = e.startPts - o, e.startTime /= 9e4, e.endTime = e.endPts - o, e.endTime /= 9e4, r.captionStreams[e.stream] = !0, r.captions.push(e);
            for (s = 0; s < this.pendingMetadata.length; s++) (i = this.pendingMetadata[s]).cueTime = i.pts - o, i.cueTime /= 9e4, r.metadata.push(i);
            r.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", r), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
        }, (u = function (n) {
            var s, a, r = this, i = !0;
            u.prototype.init.call(this), n = n || {}, this.baseMediaDecodeTime = n.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function () {
                var e = {};
                (this.transmuxPipeline_ = e).type = "aac", e.metadataStream = new b.MetadataStream, e.aacStream = new T, e.audioTimestampRolloverStream = new b.TimestampRolloverStream("audio"), e.timedMetadataTimestampRolloverStream = new b.TimestampRolloverStream("timed-metadata"), e.adtsStream = new v, e.coalesceStream = new d(n, e.metadataStream), e.headOfPipeline = e.aacStream, e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream), e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream), e.metadataStream.on("timestamp", function (t) {
                    e.aacStream.setTimestamp(t.timeStamp)
                }), e.aacStream.on("data", function (t) {
                    "timed-metadata" !== t.type || e.audioSegmentStream || (a = a || {
                        timelineStartInfo: {baseMediaDecodeTime: r.baseMediaDecodeTime},
                        codec: "adts",
                        type: "audio"
                    }, e.coalesceStream.numberOfTracks++, e.audioSegmentStream = new o(a), e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))
                }), e.coalesceStream.on("data", this.trigger.bind(this, "data")), e.coalesceStream.on("done", this.trigger.bind(this, "done"))
            }, this.setupTsPipeline = function () {
                var i = {};
                (this.transmuxPipeline_ = i).type = "ts", i.metadataStream = new b.MetadataStream, i.packetStream = new b.TransportPacketStream, i.parseStream = new b.TransportParseStream, i.elementaryStream = new b.ElementaryStream, i.videoTimestampRolloverStream = new b.TimestampRolloverStream("video"), i.audioTimestampRolloverStream = new b.TimestampRolloverStream("audio"), i.timedMetadataTimestampRolloverStream = new b.TimestampRolloverStream("timed-metadata"), i.adtsStream = new v, i.h264Stream = new _, i.captionStream = new b.CaptionStream, i.coalesceStream = new d(n, i.metadataStream), i.headOfPipeline = i.packetStream, i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream), i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream), i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream), i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream), i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream), i.elementaryStream.on("data", function (t) {
                    var e;
                    if ("metadata" === t.type) {
                        for (e = t.tracks.length; e--;) s || "video" !== t.tracks[e].type ? a || "audio" !== t.tracks[e].type || ((a = t.tracks[e]).timelineStartInfo.baseMediaDecodeTime = r.baseMediaDecodeTime) : (s = t.tracks[e]).timelineStartInfo.baseMediaDecodeTime = r.baseMediaDecodeTime;
                        s && !i.videoSegmentStream && (i.coalesceStream.numberOfTracks++, i.videoSegmentStream = new c(s, n), i.videoSegmentStream.on("timelineStartInfo", function (t) {
                            a && (a.timelineStartInfo = t, i.audioSegmentStream.setEarliestDts(t.dts))
                        }), i.videoSegmentStream.on("processedGopsInfo", r.trigger.bind(r, "gopInfo")), i.videoSegmentStream.on("baseMediaDecodeTime", function (t) {
                            a && i.audioSegmentStream.setVideoBaseMediaDecodeTime(t)
                        }), i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)), a && !i.audioSegmentStream && (i.coalesceStream.numberOfTracks++, i.audioSegmentStream = new o(a), i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))
                    }
                }), i.coalesceStream.on("data", this.trigger.bind(this, "data")), i.coalesceStream.on("done", this.trigger.bind(this, "done"))
            }, this.setBaseMediaDecodeTime = function (t) {
                var e = this.transmuxPipeline_;
                this.baseMediaDecodeTime = t, a && (a.timelineStartInfo.dts = void 0, a.timelineStartInfo.pts = void 0, f(a), a.timelineStartInfo.baseMediaDecodeTime = t, e.audioTimestampRolloverStream && e.audioTimestampRolloverStream.discontinuity()), s && (e.videoSegmentStream && (e.videoSegmentStream.gopCache_ = [], e.videoTimestampRolloverStream.discontinuity()), s.timelineStartInfo.dts = void 0, s.timelineStartInfo.pts = void 0, f(s), e.captionStream.reset(), s.timelineStartInfo.baseMediaDecodeTime = t), e.timedMetadataTimestampRolloverStream && e.timedMetadataTimestampRolloverStream.discontinuity()
            }, this.setAudioAppendStart = function (t) {
                a && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)
            }, this.alignGopsWith = function (t) {
                s && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)
            }, this.push = function (t) {
                if (i) {
                    var e = l(t);
                    e && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : e || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), i = !1
                }
                this.transmuxPipeline_.headOfPipeline.push(t)
            }, this.flush = function () {
                i = !0, this.transmuxPipeline_.headOfPipeline.flush()
            }, this.resetCaptions = function () {
                this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
            }
        }).prototype = new n, t.exports = {
            Transmuxer: u,
            VideoSegmentStream: c,
            AudioSegmentStream: o,
            AUDIO_PROPERTIES: j,
            VIDEO_PROPERTIES: A
        }
    }, "./node_modules/mux.js/lib/tools/ts-inspector.js": function (t, e, i) {
        "use strict";
        var s = i("./node_modules/mux.js/lib/m2ts/stream-types.js"),
            a = i("./node_modules/mux.js/lib/m2ts/timestamp-rollover-stream.js").handleRollover, f = {};
        f.ts = i("./node_modules/mux.js/lib/m2ts/probe.js"), f.aac = i("./node_modules/mux.js/lib/aac/probe.js");
        var m = 188, r = function (t, e, i) {
            for (var n, s, a, r, o = 0, u = m, d = !1; u < t.byteLength;) if (71 !== t[o] || 71 !== t[u]) o++, u++; else {
                switch (n = t.subarray(o, u), f.ts.parseType(n, e.pid)) {
                    case"pes":
                        s = f.ts.parsePesType(n, e.table), a = f.ts.parsePayloadUnitStartIndicator(n), "audio" === s && a && (r = f.ts.parsePesTime(n)) && (r.type = "audio", i.audio.push(r), d = !0)
                }
                if (d) break;
                o += m, u += m
            }
            for (o = (u = t.byteLength) - m, d = !1; 0 <= o;) if (71 !== t[o] || 71 !== t[u]) o--, u--; else {
                switch (n = t.subarray(o, u), f.ts.parseType(n, e.pid)) {
                    case"pes":
                        s = f.ts.parsePesType(n, e.table), a = f.ts.parsePayloadUnitStartIndicator(n), "audio" === s && a && (r = f.ts.parsePesTime(n)) && (r.type = "audio", i.audio.push(r), d = !0)
                }
                if (d) break;
                o -= m, u -= m
            }
        }, o = function (t, e, i) {
            for (var n, s, a, r, o, u, d, l = 0, p = m, c = !1, h = {
                data: [],
                size: 0
            }; p < t.byteLength;) if (71 !== t[l] || 71 !== t[p]) l++, p++; else {
                switch (n = t.subarray(l, p), f.ts.parseType(n, e.pid)) {
                    case"pes":
                        if (s = f.ts.parsePesType(n, e.table), a = f.ts.parsePayloadUnitStartIndicator(n), "video" === s && (a && !c && (r = f.ts.parsePesTime(n)) && (r.type = "video", i.video.push(r), c = !0), !i.firstKeyFrame)) {
                            if (a && 0 !== h.size) {
                                for (o = new Uint8Array(h.size), u = 0; h.data.length;) d = h.data.shift(), o.set(d, u), u += d.byteLength;
                                f.ts.videoPacketContainsKeyFrame(o) && (i.firstKeyFrame = f.ts.parsePesTime(o), i.firstKeyFrame.type = "video"), h.size = 0
                            }
                            h.data.push(n), h.size += n.byteLength
                        }
                }
                if (c && i.firstKeyFrame) break;
                l += m, p += m
            }
            for (l = (p = t.byteLength) - m, c = !1; 0 <= l;) if (71 !== t[l] || 71 !== t[p]) l--, p--; else {
                switch (n = t.subarray(l, p), f.ts.parseType(n, e.pid)) {
                    case"pes":
                        s = f.ts.parsePesType(n, e.table), a = f.ts.parsePayloadUnitStartIndicator(n), "video" === s && a && (r = f.ts.parsePesTime(n)) && (r.type = "video", i.video.push(r), c = !0)
                }
                if (c) break;
                l -= m, p -= m
            }
        }, u = function (t) {
            var e = {pid: null, table: null}, i = {};
            for (var n in function (t, e) {
                for (var i, n = 0, s = m; s < t.byteLength;) if (71 !== t[n] || 71 !== t[s]) n++, s++; else {
                    switch (i = t.subarray(n, s), f.ts.parseType(i, e.pid)) {
                        case"pat":
                            e.pid || (e.pid = f.ts.parsePat(i));
                            break;
                        case"pmt":
                            e.table || (e.table = f.ts.parsePmt(i))
                    }
                    if (e.pid && e.table) return;
                    n += m, s += m
                }
            }(t, e), e.table) {
                if (e.table.hasOwnProperty(n)) switch (e.table[n]) {
                    case s.H264_STREAM_TYPE:
                        i.video = [], o(t, e, i), 0 === i.video.length && delete i.video;
                        break;
                    case s.ADTS_STREAM_TYPE:
                        i.audio = [], r(t, e, i), 0 === i.audio.length && delete i.audio
                }
            }
            return i
        };
        t.exports = {
            inspect: function (t, e) {
                var i, n;
                return (n = (i = t)[0] === "I".charCodeAt(0) && i[1] === "D".charCodeAt(0) && i[2] === "3".charCodeAt(0) ? function (t) {
                    for (var e, i = !1, n = 0, s = null, a = null, r = 0, o = 0; 3 <= t.length - o;) {
                        switch (f.aac.parseType(t, o)) {
                            case"timed-metadata":
                                if (t.length - o < 10) {
                                    i = !0;
                                    break
                                }
                                if ((r = f.aac.parseId3TagSize(t, o)) > t.length) {
                                    i = !0;
                                    break
                                }
                                null === a && (e = t.subarray(o, o + r), a = f.aac.parseAacTimestamp(e)), o += r;
                                break;
                            case"audio":
                                if (t.length - o < 7) {
                                    i = !0;
                                    break
                                }
                                if ((r = f.aac.parseAdtsSize(t, o)) > t.length) {
                                    i = !0;
                                    break
                                }
                                null === s && (e = t.subarray(o, o + r), s = f.aac.parseSampleRate(e)), n++, o += r;
                                break;
                            default:
                                o++
                        }
                        if (i) return null
                    }
                    if (null === s || null === a) return null;
                    var u = 9e4 / s;
                    return {
                        audio: [{type: "audio", dts: a, pts: a}, {
                            type: "audio",
                            dts: a + 1024 * n * u,
                            pts: a + 1024 * n * u
                        }]
                    }
                }(t) : u(t)) && (n.audio || n.video) ? (function (t, e) {
                    if (t.audio && t.audio.length) {
                        var i = e;
                        void 0 === i && (i = t.audio[0].dts), t.audio.forEach(function (t) {
                            t.dts = a(t.dts, i), t.pts = a(t.pts, i), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
                        })
                    }
                    if (t.video && t.video.length) {
                        var n = e;
                        if (void 0 === n && (n = t.video[0].dts), t.video.forEach(function (t) {
                            t.dts = a(t.dts, n), t.pts = a(t.pts, n), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
                        }), t.firstKeyFrame) {
                            var s = t.firstKeyFrame;
                            s.dts = a(s.dts, n), s.pts = a(s.pts, n), s.dtsTime = s.dts / 9e4, s.ptsTime = s.dts / 9e4
                        }
                    }
                }(n, e), n) : null
            }
        }
    }, "./node_modules/mux.js/lib/utils/clock.js": function (t, e) {
        var i, n, s, a, r, o;
        i = function (t) {
            return 9e4 * t
        }, n = function (t, e) {
            return t * e
        }, s = function (t) {
            return t / 9e4
        }, a = function (t, e) {
            return t / e
        }, r = function (t, e) {
            return i(a(t, e))
        }, o = function (t, e) {
            return n(s(t), e)
        }, t.exports = {
            secondsToVideoTs: i,
            secondsToAudioTs: n,
            videoTsToSeconds: s,
            audioTsToSeconds: a,
            audioTsToVideoTs: r,
            videoTsToAudioTs: o
        }
    }, "./node_modules/mux.js/lib/utils/exp-golomb.js": function (t, e, i) {
        "use strict";
        var n;
        n = function (n) {
            var s = n.byteLength, a = 0, r = 0;
            this.length = function () {
                return 8 * s
            }, this.bitsAvailable = function () {
                return 8 * s + r
            }, this.loadWord = function () {
                var t = n.byteLength - s, e = new Uint8Array(4), i = Math.min(4, s);
                if (0 === i) throw new Error("no bytes available");
                e.set(n.subarray(t, t + i)), a = new DataView(e.buffer).getUint32(0), r = 8 * i, s -= i
            }, this.skipBits = function (t) {
                var e;
                t < r || (t -= r, t -= 8 * (e = Math.floor(t / 8)), s -= e, this.loadWord()), a <<= t, r -= t
            }, this.readBits = function (t) {
                var e = Math.min(r, t), i = a >>> 32 - e;
                return 0 < (r -= e) ? a <<= e : 0 < s && this.loadWord(), 0 < (e = t - e) ? i << e | this.readBits(e) : i
            }, this.skipLeadingZeros = function () {
                var t;
                for (t = 0; t < r; ++t) if (0 != (a & 2147483648 >>> t)) return a <<= t, r -= t, t;
                return this.loadWord(), t + this.skipLeadingZeros()
            }, this.skipUnsignedExpGolomb = function () {
                this.skipBits(1 + this.skipLeadingZeros())
            }, this.skipExpGolomb = function () {
                this.skipBits(1 + this.skipLeadingZeros())
            }, this.readUnsignedExpGolomb = function () {
                var t = this.skipLeadingZeros();
                return this.readBits(t + 1) - 1
            }, this.readExpGolomb = function () {
                var t = this.readUnsignedExpGolomb();
                return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
            }, this.readBoolean = function () {
                return 1 === this.readBits(1)
            }, this.readUnsignedByte = function () {
                return this.readBits(8)
            }, this.loadWord()
        }, t.exports = n
    }, "./node_modules/mux.js/lib/utils/stream.js": function (t, e, i) {
        "use strict";
        var n = function () {
            this.init = function () {
                var a = {};
                this.on = function (t, e) {
                    a[t] || (a[t] = []), a[t] = a[t].concat(e)
                }, this.off = function (t, e) {
                    var i;
                    return !!a[t] && (i = a[t].indexOf(e), a[t] = a[t].slice(), a[t].splice(i, 1), -1 < i)
                }, this.trigger = function (t) {
                    var e, i, n, s;
                    if (e = a[t]) if (2 === arguments.length) for (n = e.length, i = 0; i < n; ++i) e[i].call(this, arguments[1]); else {
                        for (s = [], i = arguments.length, i = 1; i < arguments.length; ++i) s.push(arguments[i]);
                        for (n = e.length, i = 0; i < n; ++i) e[i].apply(this, s)
                    }
                }, this.dispose = function () {
                    a = {}
                }
            }
        };
        n.prototype.pipe = function (e) {
            return this.on("data", function (t) {
                e.push(t)
            }), this.on("done", function (t) {
                e.flush(t)
            }), e
        }, n.prototype.push = function (t) {
            this.trigger("data", t)
        }, n.prototype.flush = function (t) {
            this.trigger("done", t)
        }, t.exports = n
    }, "./node_modules/parse-headers/parse-headers.js": function (t, e, i) {
        var r = i("./node_modules/trim/index.js"), n = i("./node_modules/for-each/index.js");
        t.exports = function (t) {
            if (!t) return {};
            var a = {};
            return n(r(t).split("\n"), function (t) {
                var e, i = t.indexOf(":"), n = r(t.slice(0, i)).toLowerCase(), s = r(t.slice(i + 1));
                void 0 === a[n] ? a[n] = s : (e = a[n], "[object Array]" === Object.prototype.toString.call(e) ? a[n].push(s) : a[n] = [a[n], s])
            }), a
        }
    }, "./node_modules/pkcs7/lib/pad.js": function (t, e, i) {
        "use strict";
        var n;
        t.exports = function (t) {
            var e = n[t.byteLength % 16 || 0], i = new Uint8Array(t.byteLength + e.length);
            return i.set(t), i.set(e, t.byteLength), i
        }, n = [[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14], [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13], [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [9, 9, 9, 9, 9, 9, 9, 9, 9], [8, 8, 8, 8, 8, 8, 8, 8], [7, 7, 7, 7, 7, 7, 7], [6, 6, 6, 6, 6, 6], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
    }, "./node_modules/pkcs7/lib/pkcs7.js": function (t, e, i) {
        "use strict";
        e.pad = i("./node_modules/pkcs7/lib/pad.js"), e.unpad = i("./node_modules/pkcs7/lib/unpad.js")
    }, "./node_modules/pkcs7/lib/unpad.js": function (t, e, i) {
        "use strict";
        t.exports = function (t) {
            return t.subarray(0, t.byteLength - t[t.byteLength - 1])
        }
    }, "./node_modules/safe-json-parse/tuple.js": function (t, e) {
        t.exports = function (t, e) {
            var i, n = null;
            try {
                i = JSON.parse(t, e)
            } catch (t) {
                n = t
            }
            return [n, i]
        }
    }, "./node_modules/store/dist/store.legacy.js": function (t, e, i) {
        var n = i("./node_modules/store/src/store-engine.js"), s = i("./node_modules/store/storages/all.js"),
            a = [i("./node_modules/store/plugins/json2.js")];
        t.exports = n.createStore(s, a)
    }, "./node_modules/store/plugins/json2.js": function (t, e, i) {
        t.exports = function () {
            return i("./node_modules/store/plugins/lib/json2.js"), {}
        }
    }, "./node_modules/store/plugins/lib/json2.js": function (module, exports) {
        "object" != typeof JSON && (JSON = {}), function () {
            "use strict";
            var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                rx_four = /(?:^|:|,)(?:\s*\[)+/g,
                rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta, rep;

            function f(t) {
                return t < 10 ? "0" + t : t
            }

            function this_value() {
                return this.valueOf()
            }

            function quote(t) {
                return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) {
                    var e = meta[t];
                    return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + t + '"'
            }

            function str(t, e) {
                var i, n, s, a, r, o = gap, u = e[t];
                switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(t)), "function" == typeof rep && (u = rep.call(e, t, u)), typeof u) {
                    case"string":
                        return quote(u);
                    case"number":
                        return isFinite(u) ? String(u) : "null";
                    case"boolean":
                    case"null":
                        return String(u);
                    case"object":
                        if (!u) return "null";
                        if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                            for (a = u.length, i = 0; i < a; i += 1) r[i] = str(i, u) || "null";
                            return s = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + o + "]" : "[" + r.join(",") + "]", gap = o, s
                        }
                        if (rep && "object" == typeof rep) for (a = rep.length, i = 0; i < a; i += 1) "string" == typeof rep[i] && (s = str(n = rep[i], u)) && r.push(quote(n) + (gap ? ": " : ":") + s); else for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (s = str(n, u)) && r.push(quote(n) + (gap ? ": " : ":") + s);
                        return s = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + o + "}" : "{" + r.join(",") + "}", gap = o, s
                }
            }

            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, JSON.stringify = function (t, e, i) {
                var n;
                if (indent = gap = "", "number" == typeof i) for (n = 0; n < i; n += 1) indent += " "; else "string" == typeof i && (indent = i);
                if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                return str("", {"": t})
            }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                var j;

                function walk(t, e) {
                    var i, n, s = t[e];
                    if (s && "object" == typeof s) for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (void 0 !== (n = walk(s, i)) ? s[i] = n : delete s[i]);
                    return reviver.call(t, e, s)
                }

                if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }()
    }, "./node_modules/store/storages/all.js": function (t, e, i) {
        t.exports = {
            localStorage: i("./node_modules/store/storages/localStorage.js"),
            "oldFF-globalStorage": i("./node_modules/store/storages/oldFF-globalStorage.js"),
            "oldIE-userDataStorage": i("./node_modules/store/storages/oldIE-userDataStorage.js"),
            cookieStorage: i("./node_modules/store/storages/cookieStorage.js"),
            sessionStorage: i("./node_modules/store/storages/sessionStorage.js"),
            memoryStorage: i("./node_modules/store/storages/memoryStorage.js")
        }
    }, "./node_modules/store/storages/cookieStorage.js": function (t, e, i) {
        var n = i("./node_modules/store/src/util.js"), s = n.Global, a = n.trim;
        t.exports = {
            name: "cookieStorage", read: function (t) {
                if (!t || !d(t)) return null;
                var e = "(?:^|.*;\\s*)" + escape(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
                return unescape(r.cookie.replace(new RegExp(e), "$1"))
            }, write: function (t, e) {
                if (!t) return;
                r.cookie = escape(t) + "=" + escape(e) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"
            }, each: o, remove: u, clearAll: function () {
                o(function (t, e) {
                    u(e)
                })
            }
        };
        var r = s.document;

        function o(t) {
            for (var e = r.cookie.split(/; ?/g), i = e.length - 1; 0 <= i; i--) if (a(e[i])) {
                var n = e[i].split("="), s = unescape(n[0]);
                t(unescape(n[1]), s)
            }
        }

        function u(t) {
            t && d(t) && (r.cookie = escape(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
        }

        function d(t) {
            return new RegExp("(?:^|;\\s*)" + escape(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(r.cookie)
        }
    }, "./node_modules/store/storages/oldFF-globalStorage.js": function (t, e, i) {
        var n = i("./node_modules/store/src/util.js").Global;
        t.exports = {
            name: "oldFF-globalStorage", read: function (t) {
                return s[t]
            }, write: function (t, e) {
                s[t] = e
            }, each: a, remove: function (t) {
                return s.removeItem(t)
            }, clearAll: function () {
                a(function (t, e) {
                    delete s[t]
                })
            }
        };
        var s = n.globalStorage;

        function a(t) {
            for (var e = s.length - 1; 0 <= e; e--) {
                var i = s.key(e);
                t(s[i], i)
            }
        }
    }, "./node_modules/store/storages/oldIE-userDataStorage.js": function (t, e, i) {
        var n = i("./node_modules/store/src/util.js").Global;
        t.exports = {
            name: "oldIE-userDataStorage", write: function (t, e) {
                if (o) return;
                var i = d(t);
                r(function (t) {
                    t.setAttribute(i, e), t.save(s)
                })
            }, read: function (t) {
                if (o) return;
                var e = d(t), i = null;
                return r(function (t) {
                    i = t.getAttribute(e)
                }), i
            }, each: function (s) {
                r(function (t) {
                    for (var e = t.XMLDocument.documentElement.attributes, i = e.length - 1; 0 <= i; i--) {
                        var n = e[i];
                        s(t.getAttribute(n.name), n.name)
                    }
                })
            }, remove: function (t) {
                var e = d(t);
                r(function (t) {
                    t.removeAttribute(e), t.save(s)
                })
            }, clearAll: function () {
                r(function (t) {
                    var e = t.XMLDocument.documentElement.attributes;
                    t.load(s);
                    for (var i = e.length - 1; 0 <= i; i--) t.removeAttribute(e[i].name);
                    t.save(s)
                })
            }
        };
        var s = "storejs", a = n.document, r = function () {
            if (!a || !a.documentElement || !a.documentElement.addBehavior) return null;
            var i, t, n;
            try {
                (t = new ActiveXObject("htmlfile")).open(), t.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>'), t.close(), i = t.w.frames[0].document, n = i.createElement("div")
            } catch (t) {
                n = a.createElement("div"), i = a.body
            }
            return function (t) {
                var e = [].slice.call(arguments, 0);
                e.unshift(n), i.appendChild(n), n.addBehavior("#default#userData"), n.load(s), t.apply(this, e), i.removeChild(n)
            }
        }(), o = (n.navigator ? n.navigator.userAgent : "").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);
        var u = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");

        function d(t) {
            return t.replace(/^\d/, "___$&").replace(u, "___")
        }
    }, "./node_modules/store/storages/sessionStorage.js": function (t, e, i) {
        var n = i("./node_modules/store/src/util.js").Global;

        function s() {
            return n.sessionStorage
        }

        function a(t) {
            return s().getItem(t)
        }

        t.exports = {
            name: "sessionStorage", read: a, write: function (t, e) {
                return s().setItem(t, e)
            }, each: function (t) {
                for (var e = s().length - 1; 0 <= e; e--) {
                    var i = s().key(e);
                    t(a(i), i)
                }
            }, remove: function (t) {
                return s().removeItem(t)
            }, clearAll: function () {
                return s().clear()
            }
        }
    }, "./node_modules/trim/index.js": function (t, e) {
        (e = t.exports = function (t) {
            return t.replace(/^\s*|\s*$/g, "")
        }).left = function (t) {
            return t.replace(/^\s*/, "")
        }, e.right = function (t) {
            return t.replace(/\s*$/, "")
        }
    }, "./node_modules/tsml/tsml.js": function (t, e) {
        t.exports = function (t) {
            for (var e = "", i = 0; i < arguments.length; i++) e += t[i].replace(/\n\r?\s*/g, "") + (arguments[i + 1] || "");
            return e
        }
    }, "./node_modules/url-toolkit/src/url-toolkit.js": function (t, e, i) {
        var n, l, s, a, p;
        n = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, l = /^([^\/?#]*)(.*)$/, s = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, p = {
            buildAbsoluteURL: function (t, e, i) {
                if (i = i || {}, t = t.trim(), !(e = e.trim())) {
                    if (!i.alwaysNormalize) return t;
                    var n = p.parseURL(t);
                    if (!n) throw new Error("Error trying to parse base URL.");
                    return n.path = p.normalizePath(n.path), p.buildURLFromParts(n)
                }
                var s = p.parseURL(e);
                if (!s) throw new Error("Error trying to parse relative URL.");
                if (s.scheme) return i.alwaysNormalize ? (s.path = p.normalizePath(s.path), p.buildURLFromParts(s)) : e;
                var a = p.parseURL(t);
                if (!a) throw new Error("Error trying to parse base URL.");
                if (!a.netLoc && a.path && "/" !== a.path[0]) {
                    var r = l.exec(a.path);
                    a.netLoc = r[1], a.path = r[2]
                }
                a.netLoc && !a.path && (a.path = "/");
                var o = {
                    scheme: a.scheme,
                    netLoc: s.netLoc,
                    path: null,
                    params: s.params,
                    query: s.query,
                    fragment: s.fragment
                };
                if (!s.netLoc && (o.netLoc = a.netLoc, "/" !== s.path[0])) if (s.path) {
                    var u = a.path, d = u.substring(0, u.lastIndexOf("/") + 1) + s.path;
                    o.path = p.normalizePath(d)
                } else o.path = a.path, s.params || (o.params = a.params, s.query || (o.query = a.query));
                return null === o.path && (o.path = i.alwaysNormalize ? p.normalizePath(s.path) : s.path), p.buildURLFromParts(o)
            }, parseURL: function (t) {
                var e = n.exec(t);
                return e ? {
                    scheme: e[1] || "",
                    netLoc: e[2] || "",
                    path: e[3] || "",
                    params: e[4] || "",
                    query: e[5] || "",
                    fragment: e[6] || ""
                } : null
            }, normalizePath: function (t) {
                for (t = t.split("").reverse().join("").replace(s, ""); t.length !== (t = t.replace(a, "")).length;) ;
                return t.split("").reverse().join("")
            }, buildURLFromParts: function (t) {
                return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
            }
        }, t.exports = p
    }, "./node_modules/webwackify/index.js": function (t, e, o) {
        var d = arguments[3], l = arguments[4], p = arguments[5], c = JSON.stringify, r = !1;
        void 0 === d && (r = !0, d = function (i) {
            var n = {};

            function s(t) {
                if (n[t]) return n[t].exports;
                var e = n[t] = {i: t, l: !1, exports: {}};
                return i[t].call(e.exports, e, e.exports, s), e.l = !0, e.exports
            }

            return s.m = i, s.c = n, s.d = function (t, e, i) {
                s.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: i})
            }, s.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return s.d(e, "a", e), e
            }, s.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, s.p = "", s(s.s = entryModule)
        }, l = o.m);
        t.exports = function (t, e) {
            var i;
            i = r ? function (t, e) {
                var i, n = "string" == typeof e;
                i = n ? {} : [], Object.keys(l).forEach(function (t) {
                    l[t] && (i[t] = l[t].toString())
                });
                var s, a = o(e);
                if (!a || a !== t && a.default !== t) {
                    var r = i[e];
                    i[e] = r.substring(0, r.length - 1) + "\n" + t.name + "();\n}"
                }
                s = n ? (e = c(e), "{" + Object.keys(i).map(function (t) {
                    return c(t) + ":" + i[t]
                }).join(",") + "}") : "[" + i.join(",") + "]";
                return "var fn = (" + d.toString().replace("entryModule", e) + ")(" + s + ');\n(typeof fn === "function") && fn(self);'
            }(t, e) : function (t) {
                for (var e, i = Object.keys(p), n = 0; n < i.length; n++) {
                    var s = i[n], a = p[s].exports;
                    if (a === t || a && a.default === t) {
                        e = s;
                        break
                    }
                }
                if (!e) {
                    e = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                    var r = {};
                    for (n = 0; n < i.length; n++) r[s = i[n]] = s;
                    l[e] = ["function(require,module,exports){" + t + "(self); }", r]
                }
                var o = Math.floor(Math.pow(16, 8) * Math.random()).toString(16), u = {};
                return u[e] = e, l[o] = ["function(require,module,exports){var f = require(" + c(e) + ");(f.default ? f.default : f)(self);}", u], "(" + d + ")({" + Object.keys(l).map(function (t) {
                    return c(t) + ":[" + l[t][0] + "," + c(l[t][1]) + "]"
                }).join(",") + "},{},[" + c(o) + "])"
            }(t);
            var n = new Blob([i], {type: "text/javascript"}),
                s = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(n),
                a = new Worker(s);
            return a.objectURL = s, a
        }
    }, "./node_modules/xhr/index.js": function (t, e, i) {
        "use strict";
        var n = i("./node_modules/global/window.js"), s = i("./node_modules/is-function/index.js"),
            g = i("./node_modules/parse-headers/parse-headers.js"), a = i("./node_modules/xtend/immutable.js");

        function r(t, e, i) {
            var n = t;
            return s(e) ? (i = e, "string" == typeof t && (n = {uri: t})) : n = a(e, {uri: t}), n.callback = i, n
        }

        function y(t, e, i) {
            return o(e = r(t, e, i))
        }

        function o(n) {
            if (void 0 === n.callback) throw new Error("callback argument missing");
            var s = !1, a = function (t, e, i) {
                s || (s = !0, n.callback(t, e, i))
            };

            function e(t) {
                return clearTimeout(u), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, a(t, m)
            }

            function t() {
                if (!r) {
                    var t;
                    clearTimeout(u), t = n.useXDR && void 0 === o.status ? 200 : 1223 === o.status ? 204 : o.status;
                    var e = m, i = null;
                    return 0 !== t ? (e = {
                        body: function () {
                            var t = void 0;
                            if (t = o.response ? o.response : o.responseText || function (t) {
                                if ("document" === t.responseType) return t.responseXML;
                                var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
                                return "" !== t.responseType || e ? null : t.responseXML
                            }(o), f) try {
                                t = JSON.parse(t)
                            } catch (t) {
                            }
                            return t
                        }(), statusCode: t, method: l, headers: {}, url: d, rawRequest: o
                    }, o.getAllResponseHeaders && (e.headers = g(o.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), a(i, e, e.body)
                }
            }

            var i, r, o = n.xhr || null;
            o || (o = n.cors || n.useXDR ? new y.XDomainRequest : new y.XMLHttpRequest);
            var u, d = o.url = n.uri || n.url, l = o.method = n.method || "GET", p = n.body || n.data,
                c = o.headers = n.headers || {}, h = !!n.sync, f = !1,
                m = {body: void 0, headers: {}, statusCode: 0, method: l, url: d, rawRequest: o};
            if ("json" in n && !1 !== n.json && (f = !0, c.accept || c.Accept || (c.Accept = "application/json"), "GET" !== l && "HEAD" !== l && (c["content-type"] || c["Content-Type"] || (c["Content-Type"] = "application/json"), p = JSON.stringify(!0 === n.json ? p : n.json))), o.onreadystatechange = function () {
                4 === o.readyState && setTimeout(t, 0)
            }, o.onload = t, o.onerror = e, o.onprogress = function () {
            }, o.onabort = function () {
                r = !0
            }, o.ontimeout = e, o.open(l, d, !h, n.username, n.password), h || (o.withCredentials = !!n.withCredentials), !h && 0 < n.timeout && (u = setTimeout(function () {
                if (!r) {
                    r = !0, o.abort("timeout");
                    var t = new Error("XMLHttpRequest timeout");
                    t.code = "ETIMEDOUT", e(t)
                }
            }, n.timeout)), o.setRequestHeader) for (i in c) c.hasOwnProperty(i) && o.setRequestHeader(i, c[i]); else if (n.headers && !function (t) {
                for (var e in t) if (t.hasOwnProperty(e)) return !1;
                return !0
            }(n.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType" in n && (o.responseType = n.responseType), "beforeSend" in n && "function" == typeof n.beforeSend && n.beforeSend(o), o.send(p || null), o
        }

        (t.exports = y).XMLHttpRequest = n.XMLHttpRequest || function () {
        }, y.XDomainRequest = "withCredentials" in new y.XMLHttpRequest ? y.XMLHttpRequest : n.XDomainRequest, function (t, e) {
            for (var i = 0; i < t.length; i++) e(t[i])
        }(["get", "put", "post", "patch", "head", "delete"], function (n) {
            y["delete" === n ? "del" : n] = function (t, e, i) {
                return (e = r(t, e, i)).method = n.toUpperCase(), o(e)
            }
        })
    }, "./node_modules/xtend/immutable.js": function (t, e) {
        t.exports = function () {
            for (var t = {}, e = 0; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) s.call(i, n) && (t[n] = i[n])
            }
            return t
        };
        var s = Object.prototype.hasOwnProperty
    }
}]);