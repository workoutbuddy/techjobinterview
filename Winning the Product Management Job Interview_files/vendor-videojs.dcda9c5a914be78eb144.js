(window.webpackJsonp = window.webpackJsonp || []).push([["vendor-videojs"], {
    "./node_modules/video.js/dist/video.cjs.js": function (e, t, i) {
        function r(e) {
            return e && "object" == typeof e && "default" in e ? e.default : e
        }

        var n, o, a, s, f = r(i("./node_modules/global/window.js")), p = r(i("./node_modules/global/document.js")),
            h = r(i("./node_modules/tsml/tsml.js")), m = r(i("./node_modules/safe-json-parse/tuple.js")),
            v = r(i("./node_modules/xhr/index.js")), u = r(i("./node_modules/videojs-vtt.js/lib/browser-index.js")),
            y = "6.12.1", l = f.navigator && f.navigator.userAgent || "", c = /AppleWebKit\/([\d.]+)/i.exec(l),
            d = c ? parseFloat(c.pop()) : null, _ = /iPad/i.test(l), g = /iPhone/i.test(l) && !_, b = /iPod/i.test(l),
            T = g || _ || b, S = (n = l.match(/OS (\d+)_/i)) && n[1] ? n[1] : null, w = /Android/i.test(l),
            k = function () {
                var e = l.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                if (!e) return null;
                var t = e[1] && parseFloat(e[1]), i = e[2] && parseFloat(e[2]);
                return t && i ? parseFloat(e[1] + "." + e[2]) : t || null
            }(), E = w && /webkit/i.test(l) && k < 2.3, C = w && k < 5 && d < 537, x = /Firefox/i.test(l),
            j = /Edge/i.test(l), O = !j && (/Chrome/i.test(l) || /CriOS/i.test(l)),
            P = (o = l.match(/(Chrome|CriOS)\/(\d+)/)) && o[2] ? parseFloat(o[2]) : null, A = /MSIE\s8\.0/.test(l),
            L = (a = /MSIE\s(\d+)\.\d/.exec(l), !(s = a && parseFloat(a[1])) && /Trident\/7.0/i.test(l) && /rv:11.0/.test(l) && (s = 11), s),
            M = /Safari/i.test(l) && !O && !w && !j, I = (M || T) && !O,
            D = ne() && ("ontouchstart" in f || f.navigator.maxTouchPoints || f.DocumentTouch && f.document instanceof f.DocumentTouch),
            R = ne() && "backgroundSize" in f.document.createElement("video").style, N = (Object.freeze || Object)({
                IS_IPAD: _,
                IS_IPHONE: g,
                IS_IPOD: b,
                IS_IOS: T,
                IOS_VERSION: S,
                IS_ANDROID: w,
                ANDROID_VERSION: k,
                IS_OLD_ANDROID: E,
                IS_NATIVE_ANDROID: C,
                IS_FIREFOX: x,
                IS_EDGE: j,
                IS_CHROME: O,
                CHROME_VERSION: P,
                IS_IE8: A,
                IE_VERSION: L,
                IS_SAFARI: M,
                IS_ANY_SAFARI: I,
                TOUCH_ENABLED: D,
                BACKGROUND_SIZE_SUPPORTED: R
            }), B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, F = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }, U = function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }, H = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }, q = function (e, t) {
                return e.raw = t, e
            }, V = Object.prototype.toString, W = function (e) {
                return X(e) ? Object.keys(e) : []
            };

        function G(t, i) {
            W(t).forEach(function (e) {
                return i(t[e], e)
            })
        }

        function z(i) {
            for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            return Object.assign ? Object.assign.apply(Object, [i].concat(t)) : (t.forEach(function (e) {
                e && G(e, function (e, t) {
                    i[t] = e
                })
            }), i)
        }

        function X(e) {
            return !!e && "object" === (void 0 === e ? "undefined" : B(e))
        }

        function $(e) {
            return X(e) && "[object Object]" === V.call(e) && e.constructor === Object
        }

        var K = void 0, Y = "info", J = [], Q = function (e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !!L && L < 11, r = K.levels[Y],
                n = new RegExp("^(" + r + ")$");
            if ("log" !== e && t.unshift(e.toUpperCase() + ":"), J && J.push([].concat(t)), t.unshift("VIDEOJS:"), f.console) {
                var o = f.console[e];
                o || "debug" !== e || (o = f.console.info || f.console.log), o && r && n.test(e) && (i && (t = t.map(function (t) {
                    if (X(t) || Array.isArray(t)) try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return String(t)
                    }
                    return String(t)
                }).join(" ")), o.apply ? o[Array.isArray(t) ? "apply" : "call"](f.console, t) : o(t))
            }
        };
        (K = function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            Q("log", t)
        }).levels = {
            all: "debug|log|warn|error",
            off: "",
            debug: "debug|log|warn|error",
            info: "log|warn|error",
            warn: "warn|error",
            error: "error",
            DEFAULT: Y
        }, K.level = function (e) {
            if ("string" == typeof e) {
                if (!K.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
                Y = e
            }
            return Y
        }, K.history = function () {
            return J ? [].concat(J) : []
        }, K.history.clear = function () {
            J && (J.length = 0)
        }, K.history.disable = function () {
            null !== J && (J.length = 0, J = null)
        }, K.history.enable = function () {
            null === J && (J = [])
        }, K.error = function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return Q("error", t)
        }, K.warn = function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return Q("warn", t)
        }, K.debug = function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return Q("debug", t)
        };
        var Z = K;

        function ee(e, t) {
            if (!e || !t) return "";
            if ("function" != typeof f.getComputedStyle) return e.currentStyle[t] || "";
            var i = f.getComputedStyle(e);
            return i ? i[t] : ""
        }

        var te = q(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);

        function ie(e) {
            return "string" == typeof e && /\S/.test(e)
        }

        function re(e) {
            if (/\s/.test(e)) throw new Error("class has illegal whitespace characters")
        }

        function ne() {
            return p === f.document && void 0 !== p.createElement
        }

        function oe(e) {
            return X(e) && 1 === e.nodeType
        }

        function ae() {
            try {
                return f.parent !== f.self
            } catch (e) {
                return !0
            }
        }

        function se(r) {
            return function (e, t) {
                if (!ie(e)) return p[r](null);
                ie(t) && (t = p.querySelector(t));
                var i = oe(t) ? t : p;
                return i[r] && i[r](e)
            }
        }

        function ue() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "div",
                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments[3],
                n = p.createElement(e);
            return Object.getOwnPropertyNames(i).forEach(function (e) {
                var t = i[e];
                -1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (Z.warn(h(te, e, t)), n.setAttribute(e, t)) : "textContent" === e ? le(n, t) : n[e] = t
            }), Object.getOwnPropertyNames(t).forEach(function (e) {
                n.setAttribute(e, t[e])
            }), r && je(n, r), n
        }

        function le(e, t) {
            return void 0 === e.textContent ? e.innerText = t : e.textContent = t, e
        }

        function ce(e, t) {
            t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
        }

        function de(e, t) {
            return re(t), e.classList ? e.classList.contains(t) : (i = t, new RegExp("(^|\\s)" + i + "($|\\s)")).test(e.className);
            var i
        }

        function he(e, t) {
            return e.classList ? e.classList.add(t) : de(e, t) || (e.className = (e.className + " " + t).trim()), e
        }

        function fe(e, t) {
            return e.classList ? e.classList.remove(t) : (re(t), e.className = e.className.split(/\s+/).filter(function (e) {
                return e !== t
            }).join(" ")), e
        }

        function pe(e, t, i) {
            var r = de(e, t);
            if ("function" == typeof i && (i = i(e, t)), "boolean" != typeof i && (i = !r), i !== r) return i ? he(e, t) : fe(e, t), e
        }

        function me(i, r) {
            Object.getOwnPropertyNames(r).forEach(function (e) {
                var t = r[e];
                null == t || !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
            })
        }

        function ve(e) {
            var t = {}, i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
            if (e && e.attributes && 0 < e.attributes.length) for (var r = e.attributes, n = r.length - 1; 0 <= n; n--) {
                var o = r[n].name, a = r[n].value;
                "boolean" != typeof e[o] && -1 === i.indexOf("," + o + ",") || (a = null !== a), t[o] = a
            }
            return t
        }

        function ye(e, t) {
            return e.getAttribute(t)
        }

        function _e(e, t, i) {
            e.setAttribute(t, i)
        }

        function ge(e, t) {
            e.removeAttribute(t)
        }

        function be() {
            p.body.focus(), p.onselectstart = function () {
                return !1
            }
        }

        function Te() {
            p.onselectstart = function () {
                return !0
            }
        }

        function Se(e) {
            if (e && e.getBoundingClientRect && e.parentNode) {
                var t = e.getBoundingClientRect(), i = {};
                return ["bottom", "height", "left", "right", "top", "width"].forEach(function (e) {
                    void 0 !== t[e] && (i[e] = t[e])
                }), i.height || (i.height = parseFloat(ee(e, "height"))), i.width || (i.width = parseFloat(ee(e, "width"))), i
            }
        }

        function we(e) {
            var t = void 0;
            if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return {
                left: 0,
                top: 0
            };
            var i = p.documentElement, r = p.body, n = i.clientLeft || r.clientLeft || 0,
                o = f.pageXOffset || r.scrollLeft, a = t.left + o - n, s = i.clientTop || r.clientTop || 0,
                u = f.pageYOffset || r.scrollTop, l = t.top + u - s;
            return {left: Math.round(a), top: Math.round(l)}
        }

        function ke(e, t) {
            var i = {}, r = we(e), n = e.offsetWidth, o = e.offsetHeight, a = r.top, s = r.left, u = t.pageY,
                l = t.pageX;
            return t.changedTouches && (l = t.changedTouches[0].pageX, u = t.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (a - u + o) / o)), i.x = Math.max(0, Math.min(1, (l - s) / n)), i
        }

        function Ee(e) {
            return X(e) && 3 === e.nodeType
        }

        function Ce(e) {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            return e
        }

        function xe(e) {
            return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function (e) {
                return "function" == typeof e && (e = e()), oe(e) || Ee(e) ? e : "string" == typeof e && /\S/.test(e) ? p.createTextNode(e) : void 0
            }).filter(function (e) {
                return e
            })
        }

        function je(t, e) {
            return xe(e).forEach(function (e) {
                return t.appendChild(e)
            }), t
        }

        function Oe(e, t) {
            return je(Ce(e), t)
        }

        function Pe(e) {
            return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || (9 === L || 0 === e.button && 1 === e.buttons))
        }

        var Ae = se("querySelector"), Le = se("querySelectorAll"), Me = (Object.freeze || Object)({
            isReal: ne,
            isEl: oe,
            isInFrame: ae,
            createEl: ue,
            textContent: le,
            prependTo: ce,
            hasClass: de,
            addClass: he,
            removeClass: fe,
            toggleClass: pe,
            setAttributes: me,
            getAttributes: ve,
            getAttribute: ye,
            setAttribute: _e,
            removeAttribute: ge,
            blockTextSelection: be,
            unblockTextSelection: Te,
            getBoundingClientRect: Se,
            findPosition: we,
            getPointerPosition: ke,
            isTextNode: Ee,
            emptyEl: Ce,
            normalizeContent: xe,
            appendContent: je,
            insertContent: Oe,
            isSingleLeftClick: Pe,
            $: Ae,
            $$: Le
        }), Ie = 1;

        function De() {
            return Ie++
        }

        var Re = {}, Ne = "vdata" + (new Date).getTime();

        function Be(e) {
            var t = e[Ne];
            return t || (t = e[Ne] = De()), Re[t] || (Re[t] = {}), Re[t]
        }

        function Fe(e) {
            var t = e[Ne];
            return !!t && !!Object.getOwnPropertyNames(Re[t]).length
        }

        function Ue(t) {
            var e = t[Ne];
            if (e) {
                delete Re[e];
                try {
                    delete t[Ne]
                } catch (e) {
                    t.removeAttribute ? t.removeAttribute(Ne) : t[Ne] = null
                }
            }
        }

        function He(e, t) {
            var i = Be(e);
            0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && Ue(e)
        }

        function qe(t, i, e, r) {
            e.forEach(function (e) {
                t(i, e, r)
            })
        }

        function Ve(e) {
            function t() {
                return !0
            }

            function i() {
                return !1
            }

            if (!e || !e.isPropagationStopped) {
                var r = e || f.event;
                for (var n in e = {}, r) "layerX" !== n && "layerY" !== n && "keyLocation" !== n && "webkitMovementX" !== n && "webkitMovementY" !== n && ("returnValue" === n && r.preventDefault || (e[n] = r[n]));
                if (e.target || (e.target = e.srcElement || p), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function () {
                    r.preventDefault && r.preventDefault(), e.returnValue = !1, r.returnValue = !1, e.defaultPrevented = !0
                }, e.defaultPrevented = !1, e.stopPropagation = function () {
                    r.stopPropagation && r.stopPropagation(), e.cancelBubble = !0, r.cancelBubble = !0, e.isPropagationStopped = t
                }, e.isPropagationStopped = i, e.stopImmediatePropagation = function () {
                    r.stopImmediatePropagation && r.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                }, e.isImmediatePropagationStopped = i, null !== e.clientX && void 0 !== e.clientX) {
                    var o = p.documentElement, a = p.body;
                    e.pageX = e.clientX + (o && o.scrollLeft || a && a.scrollLeft || 0) - (o && o.clientLeft || a && a.clientLeft || 0), e.pageY = e.clientY + (o && o.scrollTop || a && a.scrollTop || 0) - (o && o.clientTop || a && a.clientTop || 0)
                }
                e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
            }
            return e
        }

        var We = !1;
        !function () {
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function () {
                        We = !0
                    }
                });
                f.addEventListener("test", null, e), f.removeEventListener("test", null, e)
            } catch (e) {
            }
        }();
        var Ge = ["touchstart", "touchmove"];

        function ze(a, e, t) {
            if (Array.isArray(e)) return qe(ze, a, e, t);
            var s = Be(a);
            if (s.handlers || (s.handlers = {}), s.handlers[e] || (s.handlers[e] = []), t.guid || (t.guid = De()), s.handlers[e].push(t), s.dispatcher || (s.disabled = !1, s.dispatcher = function (e, t) {
                if (!s.disabled) {
                    e = Ve(e);
                    var i = s.handlers[e.type];
                    if (i) for (var r = i.slice(0), n = 0, o = r.length; n < o && !e.isImmediatePropagationStopped(); n++) try {
                        r[n].call(a, e, t)
                    } catch (e) {
                        Z.error(e)
                    }
                }
            }), 1 === s.handlers[e].length) if (a.addEventListener) {
                var i = !1;
                We && -1 < Ge.indexOf(e) && (i = {passive: !0}), a.addEventListener(e, s.dispatcher, i)
            } else a.attachEvent && a.attachEvent("on" + e, s.dispatcher)
        }

        function Xe(e, t, i) {
            if (Fe(e)) {
                var r = Be(e);
                if (r.handlers) {
                    if (Array.isArray(t)) return qe(Xe, e, t, i);
                    var n = function (e, t) {
                        r.handlers[t] = [], He(e, t)
                    };
                    if (void 0 !== t) {
                        var o = r.handlers[t];
                        if (o) if (i) {
                            if (i.guid) for (var a = 0; a < o.length; a++) o[a].guid === i.guid && o.splice(a--, 1);
                            He(e, t)
                        } else n(e, t)
                    } else for (var s in r.handlers) Object.prototype.hasOwnProperty.call(r.handlers || {}, s) && n(e, s)
                }
            }
        }

        function $e(e, t, i) {
            var r = Fe(e) ? Be(e) : {}, n = e.parentNode || e.ownerDocument;
            if ("string" == typeof t ? t = {
                type: t,
                target: e
            } : t.target || (t.target = e), t = Ve(t), r.dispatcher && r.dispatcher.call(e, t, i), n && !t.isPropagationStopped() && !0 === t.bubbles) $e.call(null, n, t, i); else if (!n && !t.defaultPrevented) {
                var o = Be(t.target);
                t.target[t.type] && (o.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), o.disabled = !1)
            }
            return !t.defaultPrevented
        }

        function Ke(t, i, r) {
            if (Array.isArray(i)) return qe(Ke, t, i, r);
            var e = function e() {
                Xe(t, i, e), r.apply(this, arguments)
            };
            e.guid = r.guid = r.guid || De(), ze(t, i, e)
        }

        var Ye = (Object.freeze || Object)({fixEvent: Ve, on: ze, off: Xe, trigger: $e, one: Ke}), Je = !1, Qe = void 0,
            Ze = function () {
                if (ne() && !1 !== Qe.options.autoSetup) {
                    var e = p.getElementsByTagName("video"), t = p.getElementsByTagName("audio"),
                        i = p.getElementsByTagName("video-js"), r = [];
                    if (e && 0 < e.length) for (var n = 0, o = e.length; n < o; n++) r.push(e[n]);
                    if (t && 0 < t.length) for (var a = 0, s = t.length; a < s; a++) r.push(t[a]);
                    if (i && 0 < i.length) for (var u = 0, l = i.length; u < l; u++) r.push(i[u]);
                    if (r && 0 < r.length) for (var c = 0, d = r.length; c < d; c++) {
                        var h = r[c];
                        if (!h || !h.getAttribute) {
                            et(1);
                            break
                        }
                        void 0 === h.player && null !== h.getAttribute("data-setup") && Qe(h)
                    } else Je || et(1)
                }
            };

        function et(e, t) {
            t && (Qe = t), f.setTimeout(Ze, e)
        }

        ne() && "complete" === p.readyState ? Je = !0 : Ke(f, "load", function () {
            Je = !0
        });
        var tt = function (e) {
            var t = p.createElement("style");
            return t.className = e, t
        }, it = function (e, t) {
            e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
        }, rt = function (e, t, i) {
            t.guid || (t.guid = De());
            var r = function () {
                return t.apply(e, arguments)
            };
            return r.guid = i ? i + "_" + t.guid : t.guid, r
        }, nt = function (t, i) {
            var r = Date.now();
            return function () {
                var e = Date.now();
                i <= e - r && (t.apply(void 0, arguments), r = e)
            }
        }, ot = function () {
        };
        ot.prototype.allowedEvents_ = {}, ot.prototype.addEventListener = ot.prototype.on = function (e, t) {
            var i = this.addEventListener;
            this.addEventListener = function () {
            }, ze(this, e, t), this.addEventListener = i
        }, ot.prototype.removeEventListener = ot.prototype.off = function (e, t) {
            Xe(this, e, t)
        }, ot.prototype.one = function (e, t) {
            var i = this.addEventListener;
            this.addEventListener = function () {
            }, Ke(this, e, t), this.addEventListener = i
        }, ot.prototype.dispatchEvent = ot.prototype.trigger = function (e) {
            var t = e.type || e;
            "string" == typeof e && (e = {type: t}), e = Ve(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), $e(this, e)
        };
        var at = function (t) {
            return t instanceof ot || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function (e) {
                return "function" == typeof t[e]
            })
        }, st = function (e) {
            return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
        }, ut = function (e) {
            if (!e.nodeName && !at(e)) throw new Error("Invalid target; must be a DOM node or evented object.")
        }, lt = function (e) {
            if (!st(e)) throw new Error("Invalid event type; must be a non-empty string or array.")
        }, ct = function (e) {
            if ("function" != typeof e) throw new Error("Invalid listener; must be a function.")
        }, dt = function (e, t) {
            var i = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_, r = void 0, n = void 0, o = void 0;
            return o = i ? (r = e.eventBusEl_, 3 <= t.length && t.shift(), n = t[0], t[1]) : (r = t[0], n = t[1], t[2]), ut(r), lt(n), ct(o), {
                isTargetingSelf: i,
                target: r,
                type: n,
                listener: o = rt(e, o)
            }
        }, ht = function (e, t, i, r) {
            ut(e), e.nodeName ? Ye[t](e, i, r) : e[t](i, r)
        }, ft = {
            on: function () {
                for (var e = this, t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                var n = dt(this, i), o = n.isTargetingSelf, a = n.target, s = n.type, u = n.listener;
                if (ht(a, "on", s, u), !o) {
                    var l = function () {
                        return e.off(a, s, u)
                    };
                    l.guid = u.guid;
                    var c = function () {
                        return e.off("dispose", l)
                    };
                    c.guid = u.guid, ht(this, "on", "dispose", l), ht(a, "on", "dispose", c)
                }
            }, one: function () {
                for (var n = this, e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = dt(this, t), o = r.isTargetingSelf, a = r.target, s = r.type, u = r.listener;
                if (o) ht(a, "one", s, u); else {
                    var l = function e() {
                        for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                        n.off(a, s, e), u.apply(null, i)
                    };
                    l.guid = u.guid, ht(a, "one", s, l)
                }
            }, off: function (e, t, i) {
                if (!e || st(e)) Xe(this.eventBusEl_, e, t); else {
                    var r = e, n = t;
                    ut(r), lt(n), ct(i), i = rt(this, i), this.off("dispose", i), r.nodeName ? (Xe(r, n, i), Xe(r, "dispose", i)) : at(r) && (r.off(n, i), r.off("dispose", i))
                }
            }, trigger: function (e, t) {
                return $e(this.eventBusEl_, e, t)
            }
        };

        function pt(e) {
            var t = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).eventBusKey;
            if (t) {
                if (!e[t].nodeName) throw new Error('The eventBusKey "' + t + '" does not refer to an element.');
                e.eventBusEl_ = e[t]
            } else e.eventBusEl_ = ue("span", {className: "vjs-event-bus"});
            return z(e, ft), e.on("dispose", function () {
                e.off(), f.setTimeout(function () {
                    e.eventBusEl_ = null
                }, 0)
            }), e
        }

        var mt = {
            state: {}, setState: function (e) {
                var i = this;
                "function" == typeof e && (e = e());
                var r = void 0;
                return G(e, function (e, t) {
                    i.state[t] !== e && ((r = r || {})[t] = {from: i.state[t], to: e}), i.state[t] = e
                }), r && at(this) && this.trigger({changes: r, type: "statechanged"}), r
            }
        };

        function vt(e, t) {
            return z(e, mt), e.state = z({}, e.state, t), "function" == typeof e.handleStateChanged && at(e) && e.on("statechanged", e.handleStateChanged), e
        }

        function yt(e) {
            return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
        }

        function _t() {
            for (var i = {}, e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return t.forEach(function (e) {
                e && G(e, function (e, t) {
                    $(e) ? ($(i[t]) || (i[t] = {}), i[t] = _t(i[t], e)) : i[t] = e
                })
            }), i
        }

        var gt = function () {
            function l(e, t, i) {
                if (F(this, l), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = _t({}, this.options_), t = this.options_ = _t(this.options_, t), this.id_ = t.id || t.el && t.el.id, !this.id_) {
                    var r = e && e.id && e.id() || "no_player";
                    this.id_ = r + "_component_" + De()
                }
                this.name_ = t.name || null, t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()), !1 !== t.evented && pt(this, {eventBusKey: this.el_ ? "el_" : null}), vt(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, !(this.childNameIndex_ = {}) !== t.initChildren && this.initChildren(), this.ready(i), !1 !== t.reportTouchActivity && this.enableTouchActivity()
            }

            return l.prototype.dispose = function () {
                if (this.trigger({
                    type: "dispose",
                    bubbles: !1
                }), this.children_) for (var e = this.children_.length - 1; 0 <= e; e--) this.children_[e].dispose && this.children_[e].dispose();
                this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), Ue(this.el_), this.el_ = null), this.player_ = null
            }, l.prototype.player = function () {
                return this.player_
            }, l.prototype.options = function (e) {
                return Z.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), e && (this.options_ = _t(this.options_, e)), this.options_
            }, l.prototype.el = function () {
                return this.el_
            }, l.prototype.createEl = function (e, t, i) {
                return ue(e, t, i)
            }, l.prototype.localize = function (e, n) {
                var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : e,
                    i = this.player_.language && this.player_.language(),
                    r = this.player_.languages && this.player_.languages(), o = r && r[i], a = i && i.split("-")[0],
                    s = r && r[a], u = t;
                return o && o[e] ? u = o[e] : s && s[e] && (u = s[e]), n && (u = u.replace(/\{(\d+)\}/g, function (e, t) {
                    var i = n[t - 1], r = i;
                    return void 0 === i && (r = e), r
                })), u
            }, l.prototype.contentEl = function () {
                return this.contentEl_ || this.el_
            }, l.prototype.id = function () {
                return this.id_
            }, l.prototype.name = function () {
                return this.name_
            }, l.prototype.children = function () {
                return this.children_
            }, l.prototype.getChildById = function (e) {
                return this.childIndex_[e]
            }, l.prototype.getChild = function (e) {
                if (e) return e = yt(e), this.childNameIndex_[e]
            }, l.prototype.addChild = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                    r = void 0, n = void 0;
                if ("string" == typeof e) {
                    n = yt(e);
                    var o = t.componentClass || n;
                    t.name = n;
                    var a = l.getComponent(o);
                    if (!a) throw new Error("Component " + o + " does not exist");
                    if ("function" != typeof a) return null;
                    r = new a(this.player_ || this, t)
                } else r = e;
                if (this.children_.splice(i, 0, r), "function" == typeof r.id && (this.childIndex_[r.id()] = r), (n = n || r.name && yt(r.name())) && (this.childNameIndex_[n] = r), "function" == typeof r.el && r.el()) {
                    var s = this.contentEl().children[i] || null;
                    this.contentEl().insertBefore(r.el(), s)
                }
                return r
            }, l.prototype.removeChild = function (e) {
                if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
                    for (var t = !1, i = this.children_.length - 1; 0 <= i; i--) if (this.children_[i] === e) {
                        t = !0, this.children_.splice(i, 1);
                        break
                    }
                    if (t) {
                        this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null;
                        var r = e.el();
                        r && r.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                    }
                }
            }, l.prototype.initChildren = function () {
                var n = this, r = this.options_.children;
                if (r) {
                    var o = this.options_, e = void 0, i = l.getComponent("Tech");
                    (e = Array.isArray(r) ? r : Object.keys(r)).concat(Object.keys(this.options_).filter(function (t) {
                        return !e.some(function (e) {
                            return "string" == typeof e ? t === e : t === e.name
                        })
                    })).map(function (e) {
                        var t = void 0, i = void 0;
                        return i = "string" == typeof e ? r[t = e] || n.options_[t] || {} : (t = e.name, e), {
                            name: t,
                            opts: i
                        }
                    }).filter(function (e) {
                        var t = l.getComponent(e.opts.componentClass || yt(e.name));
                        return t && !i.isTech(t)
                    }).forEach(function (e) {
                        var t = e.name, i = e.opts;
                        if (void 0 !== o[t] && (i = o[t]), !1 !== i) {
                            !0 === i && (i = {}), i.playerOptions = n.options_.playerOptions;
                            var r = n.addChild(t, i);
                            r && (n[t] = r)
                        }
                    })
                }
            }, l.prototype.buildCSSClass = function () {
                return ""
            }, l.prototype.ready = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                if (e) return this.isReady_ ? void (t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e))
            }, l.prototype.triggerReady = function () {
                this.isReady_ = !0, this.setTimeout(function () {
                    var e = this.readyQueue_;
                    this.readyQueue_ = [], e && 0 < e.length && e.forEach(function (e) {
                        e.call(this)
                    }, this), this.trigger("ready")
                }, 1)
            }, l.prototype.$ = function (e, t) {
                return Ae(e, t || this.contentEl())
            }, l.prototype.$$ = function (e, t) {
                return Le(e, t || this.contentEl())
            }, l.prototype.hasClass = function (e) {
                return de(this.el_, e)
            }, l.prototype.addClass = function (e) {
                he(this.el_, e)
            }, l.prototype.removeClass = function (e) {
                fe(this.el_, e)
            }, l.prototype.toggleClass = function (e, t) {
                pe(this.el_, e, t)
            }, l.prototype.show = function () {
                this.removeClass("vjs-hidden")
            }, l.prototype.hide = function () {
                this.addClass("vjs-hidden")
            }, l.prototype.lockShowing = function () {
                this.addClass("vjs-lock-showing")
            }, l.prototype.unlockShowing = function () {
                this.removeClass("vjs-lock-showing")
            }, l.prototype.getAttribute = function (e) {
                return ye(this.el_, e)
            }, l.prototype.setAttribute = function (e, t) {
                _e(this.el_, e, t)
            }, l.prototype.removeAttribute = function (e) {
                ge(this.el_, e)
            }, l.prototype.width = function (e, t) {
                return this.dimension("width", e, t)
            }, l.prototype.height = function (e, t) {
                return this.dimension("height", e, t)
            }, l.prototype.dimensions = function (e, t) {
                this.width(e, !0), this.height(t)
            }, l.prototype.dimension = function (e, t, i) {
                if (void 0 !== t) return null !== t && t == t || (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", void (i || this.trigger("componentresize"));
                if (!this.el_) return 0;
                var r = this.el_.style[e], n = r.indexOf("px");
                return -1 !== n ? parseInt(r.slice(0, n), 10) : parseInt(this.el_["offset" + yt(e)], 10)
            }, l.prototype.currentDimension = function (e) {
                var t = 0;
                if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
                if ("function" == typeof f.getComputedStyle) {
                    var i = f.getComputedStyle(this.el_);
                    t = i.getPropertyValue(e) || i[e]
                }
                if (0 === (t = parseFloat(t))) {
                    var r = "offset" + yt(e);
                    t = this.el_[r]
                }
                return t
            }, l.prototype.currentDimensions = function () {
                return {width: this.currentDimension("width"), height: this.currentDimension("height")}
            }, l.prototype.currentWidth = function () {
                return this.currentDimension("width")
            }, l.prototype.currentHeight = function () {
                return this.currentDimension("height")
            }, l.prototype.focus = function () {
                this.el_.focus()
            }, l.prototype.blur = function () {
                this.el_.blur()
            }, l.prototype.emitTapEvents = function () {
                var t = 0, r = null, n = void 0;
                this.on("touchstart", function (e) {
                    1 === e.touches.length && (r = {
                        pageX: e.touches[0].pageX,
                        pageY: e.touches[0].pageY
                    }, t = (new Date).getTime(), n = !0)
                }), this.on("touchmove", function (e) {
                    if (1 < e.touches.length) n = !1; else if (r) {
                        var t = e.touches[0].pageX - r.pageX, i = e.touches[0].pageY - r.pageY;
                        10 < Math.sqrt(t * t + i * i) && (n = !1)
                    }
                });
                var e = function () {
                    n = !1
                };
                this.on("touchleave", e), this.on("touchcancel", e), this.on("touchend", function (e) {
                    !(r = null) === n && ((new Date).getTime() - t < 200 && (e.preventDefault(), this.trigger("tap")))
                })
            }, l.prototype.enableTouchActivity = function () {
                if (this.player() && this.player().reportUserActivity) {
                    var t = rt(this.player(), this.player().reportUserActivity), i = void 0;
                    this.on("touchstart", function () {
                        t(), this.clearInterval(i), i = this.setInterval(t, 250)
                    });
                    var e = function (e) {
                        t(), this.clearInterval(i)
                    };
                    this.on("touchmove", t), this.on("touchend", e), this.on("touchcancel", e)
                }
            }, l.prototype.setTimeout = function (e, t) {
                var i, r, n = this;
                return e = rt(this, e), i = f.setTimeout(function () {
                    n.off("dispose", r), e()
                }, t), (r = function () {
                    return n.clearTimeout(i)
                }).guid = "vjs-timeout-" + i, this.on("dispose", r), i
            }, l.prototype.clearTimeout = function (e) {
                f.clearTimeout(e);
                var t = function () {
                };
                return t.guid = "vjs-timeout-" + e, this.off("dispose", t), e
            }, l.prototype.setInterval = function (e, t) {
                var i = this;
                e = rt(this, e);
                var r = f.setInterval(e, t), n = function () {
                    return i.clearInterval(r)
                };
                return n.guid = "vjs-interval-" + r, this.on("dispose", n), r
            }, l.prototype.clearInterval = function (e) {
                f.clearInterval(e);
                var t = function () {
                };
                return t.guid = "vjs-interval-" + e, this.off("dispose", t), e
            }, l.prototype.requestAnimationFrame = function (e) {
                var t, i, r = this;
                return this.supportsRaf_ ? (e = rt(this, e), t = f.requestAnimationFrame(function () {
                    r.off("dispose", i), e()
                }), (i = function () {
                    return r.cancelAnimationFrame(t)
                }).guid = "vjs-raf-" + t, this.on("dispose", i), t) : this.setTimeout(e, 1e3 / 60)
            }, l.prototype.cancelAnimationFrame = function (e) {
                if (this.supportsRaf_) {
                    f.cancelAnimationFrame(e);
                    var t = function () {
                    };
                    return t.guid = "vjs-raf-" + e, this.off("dispose", t), e
                }
                return this.clearTimeout(e)
            }, l.registerComponent = function (e, t) {
                if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
                var i = l.getComponent("Tech"), r = i && i.isTech(t),
                    n = l === t || l.prototype.isPrototypeOf(t.prototype);
                if (r || !n) {
                    var o = void 0;
                    throw o = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + o + ".")
                }
                e = yt(e), l.components_ || (l.components_ = {});
                var a = l.getComponent("Player");
                if ("Player" === e && a && a.players) {
                    var s = a.players, u = Object.keys(s);
                    if (s && 0 < u.length && u.map(function (e) {
                        return s[e]
                    }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
                }
                return l.components_[e] = t
            }, l.getComponent = function (e) {
                if (e) return e = yt(e), l.components_ && l.components_[e] ? l.components_[e] : void 0
            }, l
        }();

        function bt(e, t, i, r) {
            return function (e, t, i) {
                if ("number" != typeof t || t < 0 || i < t) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").")
            }(e, r, i.length - 1), i[r][t]
        }

        function Tt(e) {
            return void 0 === e || 0 === e.length ? {
                length: 0, start: function () {
                    throw new Error("This TimeRanges object is empty")
                }, end: function () {
                    throw new Error("This TimeRanges object is empty")
                }
            } : {length: e.length, start: bt.bind(null, "start", 0, e), end: bt.bind(null, "end", 1, e)}
        }

        function St(e, t) {
            return Array.isArray(e) ? Tt(e) : void 0 === e || void 0 === t ? Tt() : Tt([[e, t]])
        }

        function wt(e, t) {
            var i = 0, r = void 0, n = void 0;
            if (!t) return 0;
            e && e.length || (e = St(0, 0));
            for (var o = 0; o < e.length; o++) r = e.start(o), t < (n = e.end(o)) && (n = t), i += n - r;
            return i / t
        }

        gt.prototype.supportsRaf_ = "function" == typeof f.requestAnimationFrame && "function" == typeof f.cancelAnimationFrame, gt.registerComponent("Component", gt);
        for (var kt = {}, Et = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], Ct = Et[0], xt = void 0, jt = 0; jt < Et.length; jt++) if (Et[jt][1] in p) {
            xt = Et[jt];
            break
        }
        if (xt) for (var Ot = 0; Ot < xt.length; Ot++) kt[Ct[Ot]] = xt[Ot];

        function Pt(e) {
            if (e instanceof Pt) return e;
            "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : X(e) && ("number" == typeof e.code && (this.code = e.code), z(this, e)), this.message || (this.message = Pt.defaultMessages[this.code] || "")
        }

        Pt.prototype.code = 0, Pt.prototype.message = "", Pt.prototype.status = null, Pt.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Pt.defaultMessages = {
            1: "You aborted the media playback",
            2: "A network error caused the media download to fail part-way.",
            3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
            4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
            5: "The media is encrypted and we do not have the keys to decrypt it."
        };
        for (var At = 0; At < Pt.errorTypes.length; At++) Pt[Pt.errorTypes[At]] = At, Pt.prototype[Pt.errorTypes[At]] = At;

        function Lt(e) {
            return null != e && "function" == typeof e.then
        }

        function Mt(e) {
            Lt(e) && e.then(null, function (e) {
            })
        }

        var It = function (r) {
            return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (e, t, i) {
                return r[t] && (e[t] = r[t]), e
            }, {
                cues: r.cues && Array.prototype.map.call(r.cues, function (e) {
                    return {startTime: e.startTime, endTime: e.endTime, text: e.text, id: e.id}
                })
            })
        }, Dt = function (e) {
            var t = e.$$("track"), i = Array.prototype.map.call(t, function (e) {
                return e.track
            });
            return Array.prototype.map.call(t, function (e) {
                var t = It(e.track);
                return e.src && (t.src = e.src), t
            }).concat(Array.prototype.filter.call(e.textTracks(), function (e) {
                return -1 === i.indexOf(e)
            }).map(It))
        }, Rt = function (e, i) {
            return e.forEach(function (e) {
                var t = i.addRemoteTextTrack(e).track;
                !e.src && e.cues && e.cues.forEach(function (e) {
                    return t.addCue(e)
                })
            }), i.textTracks()
        }, Nt = "vjs-modal-dialog", Bt = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.opened_ = i.hasBeenOpened_ = i.hasBeenFilled_ = !1, i.closeable(!i.options_.uncloseable), i.content(i.options_.content), i.contentEl_ = ue("div", {className: Nt + "-content"}, {role: "document"}), i.descEl_ = ue("p", {
                    className: Nt + "-description vjs-control-text",
                    id: i.el().getAttribute("aria-describedby")
                }), le(i.descEl_, i.description()), i.el_.appendChild(i.descEl_), i.el_.appendChild(i.contentEl_), i
            }

            return U(n, r), n.prototype.createEl = function () {
                return r.prototype.createEl.call(this, "div", {
                    className: this.buildCSSClass(),
                    tabIndex: -1
                }, {
                    "aria-describedby": this.id() + "_description",
                    "aria-hidden": "true",
                    "aria-label": this.label(),
                    role: "dialog"
                })
            }, n.prototype.dispose = function () {
                this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, r.prototype.dispose.call(this)
            }, n.prototype.buildCSSClass = function () {
                return Nt + " vjs-hidden " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.handleKeyPress = function (e) {
                27 === e.which && this.closeable() && this.close()
            }, n.prototype.label = function () {
                return this.localize(this.options_.label || "Modal Window")
            }, n.prototype.description = function () {
                var e = this.options_.description || this.localize("This is a modal window.");
                return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
            }, n.prototype.open = function () {
                if (!this.opened_) {
                    var e = this.player();
                    this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", rt(this, this.handleKeyPress)), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                }
            }, n.prototype.opened = function (e) {
                return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_
            }, n.prototype.close = function () {
                if (this.opened_) {
                    var e = this.player();
                    this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", rt(this, this.handleKeyPress)), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                }
            }, n.prototype.closeable = function (e) {
                if ("boolean" == typeof e) {
                    var t = this.closeable_ = !!e, i = this.getChild("closeButton");
                    if (t && !i) {
                        var r = this.contentEl_;
                        this.contentEl_ = this.el_, i = this.addChild("closeButton", {controlText: "Close Modal Dialog"}), this.contentEl_ = r, this.on(i, "close", this.close)
                    }
                    !t && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
                }
                return this.closeable_
            }, n.prototype.fill = function () {
                this.fillWith(this.content())
            }, n.prototype.fillWith = function (e) {
                var t = this.contentEl(), i = t.parentNode, r = t.nextSibling;
                this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(t), this.empty(), Oe(t, e), this.trigger("modalfill"), r ? i.insertBefore(t, r) : i.appendChild(t);
                var n = this.getChild("closeButton");
                n && i.appendChild(n.el_)
            }, n.prototype.empty = function () {
                this.trigger("beforemodalempty"), Ce(this.contentEl()), this.trigger("modalempty")
            }, n.prototype.content = function (e) {
                return void 0 !== e && (this.content_ = e), this.content_
            }, n.prototype.conditionalFocus_ = function () {
                var e = p.activeElement, t = this.player_.el_;
                this.previouslyActiveEl_ = null, (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus(), this.on(p, "keydown", this.handleKeyDown))
            }, n.prototype.conditionalBlur_ = function () {
                this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(p, "keydown", this.handleKeyDown)
            }, n.prototype.handleKeyDown = function (e) {
                if (9 === e.which) {
                    for (var t = this.focusableEls_(), i = this.el_.querySelector(":focus"), r = void 0, n = 0; n < t.length; n++) if (i === t[n]) {
                        r = n;
                        break
                    }
                    p.activeElement === this.el_ && (r = 0), e.shiftKey && 0 === r ? (t[t.length - 1].focus(), e.preventDefault()) : e.shiftKey || r !== t.length - 1 || (t[0].focus(), e.preventDefault())
                }
            }, n.prototype.focusableEls_ = function () {
                var e = this.el_.querySelectorAll("*");
                return Array.prototype.filter.call(e, function (e) {
                    return (e instanceof f.HTMLAnchorElement || e instanceof f.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof f.HTMLInputElement || e instanceof f.HTMLSelectElement || e instanceof f.HTMLTextAreaElement || e instanceof f.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof f.HTMLIFrameElement || e instanceof f.HTMLObjectElement || e instanceof f.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable")
                })
            }, n
        }(gt);
        Bt.prototype.options_ = {pauseOnOpen: !0, temporary: !0}, gt.registerComponent("ModalDialog", Bt);
        var Ft = function (o) {
            function a() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                F(this, a);
                var i = H(this, o.call(this));
                if (!t && (t = i, A)) for (var r in t = p.createElement("custom"), a.prototype) "constructor" !== r && (t[r] = a.prototype[r]);
                t.tracks_ = [], Object.defineProperty(t, "length", {
                    get: function () {
                        return this.tracks_.length
                    }
                });
                for (var n = 0; n < e.length; n++) t.addTrack(e[n]);
                return H(i, t)
            }

            return U(a, o), a.prototype.addTrack = function (e) {
                var t = this.tracks_.length;
                "" + t in this || Object.defineProperty(this, t, {
                    get: function () {
                        return this.tracks_[t]
                    }
                }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({track: e, type: "addtrack"}))
            }, a.prototype.removeTrack = function (e) {
                for (var t = void 0, i = 0, r = this.length; i < r; i++) if (this[i] === e) {
                    (t = this[i]).off && t.off(), this.tracks_.splice(i, 1);
                    break
                }
                t && this.trigger({track: t, type: "removetrack"})
            }, a.prototype.getTrackById = function (e) {
                for (var t = null, i = 0, r = this.length; i < r; i++) {
                    var n = this[i];
                    if (n.id === e) {
                        t = n;
                        break
                    }
                }
                return t
            }, a
        }(ot);
        for (var Ut in Ft.prototype.allowedEvents_ = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack"
        }, Ft.prototype.allowedEvents_) Ft.prototype["on" + Ut] = null;
        var Ht = function (e, t) {
                for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
            }, qt = function (a) {
                function s() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                    F(this, s);
                    for (var i = void 0, r = t.length - 1; 0 <= r; r--) if (t[r].enabled) {
                        Ht(t, t[r]);
                        break
                    }
                    if (A) {
                        for (var n in i = p.createElement("custom"), Ft.prototype) "constructor" !== n && (i[n] = Ft.prototype[n]);
                        for (var o in s.prototype) "constructor" !== o && (i[o] = s.prototype[o])
                    }
                    return (i = e = H(this, a.call(this, t, i))).changing_ = !1, H(e, i)
                }

                return U(s, a), s.prototype.addTrack = function (e) {
                    var t = this;
                    e.enabled && Ht(this, e), a.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("enabledchange", function () {
                        t.changing_ || (t.changing_ = !0, Ht(t, e), t.changing_ = !1, t.trigger("change"))
                    })
                }, s
            }(Ft), Vt = function (e, t) {
                for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
            }, Wt = function (a) {
                function s() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                    F(this, s);
                    for (var i = void 0, r = t.length - 1; 0 <= r; r--) if (t[r].selected) {
                        Vt(t, t[r]);
                        break
                    }
                    if (A) {
                        for (var n in i = p.createElement("custom"), Ft.prototype) "constructor" !== n && (i[n] = Ft.prototype[n]);
                        for (var o in s.prototype) "constructor" !== o && (i[o] = s.prototype[o])
                    }
                    return (i = e = H(this, a.call(this, t, i))).changing_ = !1, Object.defineProperty(i, "selectedIndex", {
                        get: function () {
                            for (var e = 0; e < this.length; e++) if (this[e].selected) return e;
                            return -1
                        }, set: function () {
                        }
                    }), H(e, i)
                }

                return U(s, a), s.prototype.addTrack = function (e) {
                    var t = this;
                    e.selected && Vt(this, e), a.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("selectedchange", function () {
                        t.changing_ || (t.changing_ = !0, Vt(t, e), t.changing_ = !1, t.trigger("change"))
                    })
                }, s
            }(Ft), Gt = function (o) {
                function a() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                    F(this, a);
                    var i = void 0;
                    if (A) {
                        for (var r in i = p.createElement("custom"), Ft.prototype) "constructor" !== r && (i[r] = Ft.prototype[r]);
                        for (var n in a.prototype) "constructor" !== n && (i[n] = a.prototype[n])
                    }
                    return e = H(this, o.call(this, t, i)), H(i = e, i)
                }

                return U(a, o), a.prototype.addTrack = function (e) {
                    o.prototype.addTrack.call(this, e), e.addEventListener("modechange", rt(this, function () {
                        this.trigger("change")
                    }));
                    -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", rt(this, function () {
                        this.trigger("selectedlanguagechange")
                    }))
                }, a
            }(Ft), zt = function () {
                function o() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                    F(this, o);
                    var t = this;
                    if (A) for (var i in t = p.createElement("custom"), o.prototype) "constructor" !== i && (t[i] = o.prototype[i]);
                    t.trackElements_ = [], Object.defineProperty(t, "length", {
                        get: function () {
                            return this.trackElements_.length
                        }
                    });
                    for (var r = 0, n = e.length; r < n; r++) t.addTrackElement_(e[r]);
                    if (A) return t
                }

                return o.prototype.addTrackElement_ = function (e) {
                    var t = this.trackElements_.length;
                    "" + t in this || Object.defineProperty(this, t, {
                        get: function () {
                            return this.trackElements_[t]
                        }
                    }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
                }, o.prototype.getTrackElementByTrack_ = function (e) {
                    for (var t = void 0, i = 0, r = this.trackElements_.length; i < r; i++) if (e === this.trackElements_[i].track) {
                        t = this.trackElements_[i];
                        break
                    }
                    return t
                }, o.prototype.removeTrackElement_ = function (e) {
                    for (var t = 0, i = this.trackElements_.length; t < i; t++) if (e === this.trackElements_[t]) {
                        this.trackElements_.splice(t, 1);
                        break
                    }
                }, o
            }(), Xt = function () {
                function r(e) {
                    F(this, r);
                    var t = this;
                    if (A) for (var i in t = p.createElement("custom"), r.prototype) "constructor" !== i && (t[i] = r.prototype[i]);
                    if (r.prototype.setCues_.call(t, e), Object.defineProperty(t, "length", {
                        get: function () {
                            return this.length_
                        }
                    }), A) return t
                }

                return r.prototype.setCues_ = function (e) {
                    var t = this.length || 0, i = 0, r = e.length;
                    this.cues_ = e, this.length_ = e.length;
                    var n = function (e) {
                        "" + e in this || Object.defineProperty(this, "" + e, {
                            get: function () {
                                return this.cues_[e]
                            }
                        })
                    };
                    if (t < r) for (i = t; i < r; i++) n.call(this, i)
                }, r.prototype.getCueById = function (e) {
                    for (var t = null, i = 0, r = this.length; i < r; i++) {
                        var n = this[i];
                        if (n.id === e) {
                            t = n;
                            break
                        }
                    }
                    return t
                }, r
            }(), $t = {
                alternative: "alternative",
                captions: "captions",
                main: "main",
                sign: "sign",
                subtitles: "subtitles",
                commentary: "commentary"
            }, Kt = {
                alternative: "alternative",
                descriptions: "descriptions",
                main: "main",
                "main-desc": "main-desc",
                translation: "translation",
                commentary: "commentary"
            }, Yt = {
                subtitles: "subtitles",
                captions: "captions",
                descriptions: "descriptions",
                chapters: "chapters",
                metadata: "metadata"
            }, Jt = {disabled: "disabled", hidden: "hidden", showing: "showing"}, Qt = function (s) {
                function u() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    F(this, u);
                    var t = H(this, s.call(this)), i = t;
                    if (A) for (var r in i = p.createElement("custom"), u.prototype) "constructor" !== r && (i[r] = u.prototype[r]);
                    var n = {
                        id: e.id || "vjs_track_" + De(),
                        kind: e.kind || "",
                        label: e.label || "",
                        language: e.language || ""
                    }, o = function (e) {
                        Object.defineProperty(i, e, {
                            get: function () {
                                return n[e]
                            }, set: function () {
                            }
                        })
                    };
                    for (var a in n) o(a);
                    return H(t, i)
                }

                return U(u, s), u
            }(ot), Zt = function (e) {
                var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], i = p.createElement("a");
                i.href = e;
                var r = "" === i.host && "file:" !== i.protocol, n = void 0;
                r && ((n = p.createElement("div")).innerHTML = '<a href="' + e + '"></a>', i = n.firstChild, n.setAttribute("style", "display:none; position:absolute;"), p.body.appendChild(n));
                for (var o = {}, a = 0; a < t.length; a++) o[t[a]] = i[t[a]];
                return "http:" === o.protocol && (o.host = o.host.replace(/:80$/, "")), "https:" === o.protocol && (o.host = o.host.replace(/:443$/, "")), o.protocol || (o.protocol = f.location.protocol), r && p.body.removeChild(n), o
            }, ei = function (e) {
                if (!e.match(/^https?:\/\//)) {
                    var t = p.createElement("div");
                    t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href
                }
                return e
            }, ti = function (e) {
                if ("string" == typeof e) {
                    var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(e);
                    if (t) return t.pop().toLowerCase()
                }
                return ""
            }, ii = function (e) {
                var t = f.location, i = Zt(e);
                return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host
            }, ri = (Object.freeze || Object)({parseUrl: Zt, getAbsoluteURL: ei, getFileExtension: ti, isCrossOrigin: ii}),
            ni = function (e, t) {
                var i = new f.WebVTT.Parser(f, f.vttjs, f.WebVTT.StringDecoder()), r = [];
                i.oncue = function (e) {
                    t.addCue(e)
                }, i.onparsingerror = function (e) {
                    r.push(e)
                }, i.onflush = function () {
                    t.trigger({type: "loadeddata", target: t})
                }, i.parse(e), 0 < r.length && (f.console && f.console.groupCollapsed && f.console.groupCollapsed("Text Track parsing errors for " + t.src), r.forEach(function (e) {
                    return Z.error(e)
                }), f.console && f.console.groupEnd && f.console.groupEnd()), i.flush()
            }, oi = function (d) {
                function h() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    if (F(this, h), !t.tech) throw new Error("A tech was not provided.");
                    var i = _t(t, {kind: Yt[t.kind] || "subtitles", language: t.language || t.srclang || ""}),
                        r = Jt[i.mode] || "disabled", n = i.default;
                    "metadata" !== i.kind && "chapters" !== i.kind || (r = "hidden");
                    var o = e = H(this, d.call(this, i));
                    if (o.tech_ = i.tech, A) for (var a in h.prototype) "constructor" !== a && (o[a] = h.prototype[a]);
                    o.cues_ = [], o.activeCues_ = [];
                    var s = new Xt(o.cues_), u = new Xt(o.activeCues_), l = !1, c = rt(o, function () {
                        this.activeCues = this.activeCues, l && (this.trigger("cuechange"), l = !1)
                    });
                    return "disabled" !== r && o.tech_.ready(function () {
                        o.tech_.on("timeupdate", c)
                    }, !0), Object.defineProperty(o, "default", {
                        get: function () {
                            return n
                        }, set: function () {
                        }
                    }), Object.defineProperty(o, "mode", {
                        get: function () {
                            return r
                        }, set: function (e) {
                            var t = this;
                            Jt[e] && ("showing" === (r = e) && this.tech_.ready(function () {
                                t.tech_.on("timeupdate", c)
                            }, !0), this.trigger("modechange"))
                        }
                    }), Object.defineProperty(o, "cues", {
                        get: function () {
                            return this.loaded_ ? s : null
                        }, set: function () {
                        }
                    }), Object.defineProperty(o, "activeCues", {
                        get: function () {
                            if (!this.loaded_) return null;
                            if (0 === this.cues.length) return u;
                            for (var e = this.tech_.currentTime(), t = [], i = 0, r = this.cues.length; i < r; i++) {
                                var n = this.cues[i];
                                n.startTime <= e && n.endTime >= e ? t.push(n) : n.startTime === n.endTime && n.startTime <= e && n.startTime + .5 >= e && t.push(n)
                            }
                            if (l = !1, t.length !== this.activeCues_.length) l = !0; else for (var o = 0; o < t.length; o++) -1 === this.activeCues_.indexOf(t[o]) && (l = !0);
                            return this.activeCues_ = t, u.setCues_(this.activeCues_), u
                        }, set: function () {
                        }
                    }), i.src ? (o.src = i.src, function (e, n) {
                        var t = {uri: e}, i = ii(e);
                        i && (t.cors = i), v(t, rt(this, function (e, t, i) {
                            if (e) return Z.error(e, t);
                            if (n.loaded_ = !0, "function" != typeof f.WebVTT) {
                                if (n.tech_) {
                                    var r = function () {
                                        return ni(i, n)
                                    };
                                    n.tech_.on("vttjsloaded", r), n.tech_.on("vttjserror", function () {
                                        Z.error("vttjs failed to load, stopping trying to process " + n.src), n.tech_.off("vttjsloaded", r)
                                    })
                                }
                            } else ni(i, n)
                        }))
                    }(i.src, o)) : o.loaded_ = !0, H(e, o)
                }

                return U(h, d), h.prototype.addCue = function (e) {
                    var t = e;
                    if (f.vttjs && !(e instanceof f.vttjs.VTTCue)) {
                        for (var i in t = new f.vttjs.VTTCue(e.startTime, e.endTime, e.text), e) i in t || (t[i] = e[i]);
                        t.id = e.id, t.originalCue_ = e
                    }
                    for (var r = this.tech_.textTracks(), n = 0; n < r.length; n++) r[n] !== this && r[n].removeCue(t);
                    this.cues_.push(t), this.cues.setCues_(this.cues_)
                }, h.prototype.removeCue = function (e) {
                    for (var t = this.cues_.length; t--;) {
                        var i = this.cues_[t];
                        if (i === e || i.originalCue_ && i.originalCue_ === e) {
                            this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
                            break
                        }
                    }
                }, h
            }(Qt);
        oi.prototype.allowedEvents_ = {cuechange: "cuechange"};
        var ai = function (a) {
            function s() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                F(this, s);
                var i = _t(t, {kind: Kt[t.kind] || ""}), r = e = H(this, a.call(this, i)), n = !1;
                if (A) for (var o in s.prototype) "constructor" !== o && (r[o] = s.prototype[o]);
                return Object.defineProperty(r, "enabled", {
                    get: function () {
                        return n
                    }, set: function (e) {
                        "boolean" == typeof e && e !== n && (n = e, this.trigger("enabledchange"))
                    }
                }), i.enabled && (r.enabled = i.enabled), r.loaded_ = !0, H(e, r)
            }

            return U(s, a), s
        }(Qt), si = function (a) {
            function s() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                F(this, s);
                var i = _t(t, {kind: $t[t.kind] || ""}), r = e = H(this, a.call(this, i)), n = !1;
                if (A) for (var o in s.prototype) "constructor" !== o && (r[o] = s.prototype[o]);
                return Object.defineProperty(r, "selected", {
                    get: function () {
                        return n
                    }, set: function (e) {
                        "boolean" == typeof e && e !== n && (n = e, this.trigger("selectedchange"))
                    }
                }), i.selected && (r.selected = i.selected), H(e, r)
            }

            return U(s, a), s
        }(Qt), ui = function (a) {
            function s() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                F(this, s);
                var t = H(this, a.call(this)), i = void 0, r = t;
                if (A) for (var n in r = p.createElement("custom"), s.prototype) "constructor" !== n && (r[n] = s.prototype[n]);
                var o = new oi(e);
                return r.kind = o.kind, r.src = o.src, r.srclang = o.language, r.label = o.label, r.default = o.default, Object.defineProperty(r, "readyState", {
                    get: function () {
                        return i
                    }
                }), Object.defineProperty(r, "track", {
                    get: function () {
                        return o
                    }
                }), i = 0, o.addEventListener("loadeddata", function () {
                    i = 2, r.trigger({type: "load", target: r})
                }), A ? H(t, r) : t
            }

            return U(s, a), s
        }(ot);
        ui.prototype.allowedEvents_ = {load: "load"}, ui.NONE = 0, ui.LOADING = 1, ui.LOADED = 2, ui.ERROR = 3;
        var li = {
            audio: {ListClass: qt, TrackClass: ai, capitalName: "Audio"},
            video: {ListClass: Wt, TrackClass: si, capitalName: "Video"},
            text: {ListClass: Gt, TrackClass: oi, capitalName: "Text"}
        };
        Object.keys(li).forEach(function (e) {
            li[e].getterName = e + "Tracks", li[e].privateName = e + "Tracks_"
        });
        var ci = {
            remoteText: {
                ListClass: Gt,
                TrackClass: oi,
                capitalName: "RemoteText",
                getterName: "remoteTextTracks",
                privateName: "remoteTextTracks_"
            },
            remoteTextEl: {
                ListClass: zt,
                TrackClass: ui,
                capitalName: "RemoteTextTrackEls",
                getterName: "remoteTextTrackEls",
                privateName: "remoteTextTrackEls_"
            }
        }, di = _t(li, ci);
        ci.names = Object.keys(ci), li.names = Object.keys(li), di.names = [].concat(ci.names).concat(li.names);
        var hi = function (t) {
            function n() {
                var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function () {
                    };
                F(this, n), i.reportTouchActivity = !1;
                var r = H(this, t.call(this, null, i, e));
                return r.hasStarted_ = !1, r.on("playing", function () {
                    this.hasStarted_ = !0
                }), r.on("loadstart", function () {
                    this.hasStarted_ = !1
                }), di.names.forEach(function (e) {
                    var t = di[e];
                    i && i[t.getterName] && (r[t.privateName] = i[t.getterName])
                }), r.featuresProgressEvents || r.manualProgressOn(), r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (e) {
                    !1 === i["native" + e + "Tracks"] && (r["featuresNative" + e + "Tracks"] = !1)
                }), !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? r.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (r.featuresNativeTextTracks = !0), r.featuresNativeTextTracks || r.emulateTextTracks(), r.autoRemoteTextTracks_ = new di.text.ListClass, r.initTrackListeners(), i.nativeControlsForTouch || r.emitTapEvents(), r.constructor && (r.name_ = r.constructor.name || "Unknown Tech"), r
            }

            return U(n, t), n.prototype.triggerSourceset = function (e) {
                var t = this;
                this.isReady_ || this.one("ready", function () {
                    return t.setTimeout(function () {
                        return t.triggerSourceset(e)
                    }, 1)
                }), this.trigger({src: e, type: "sourceset"})
            }, n.prototype.manualProgressOn = function () {
                this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
            }, n.prototype.manualProgressOff = function () {
                this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
            }, n.prototype.trackProgress = function (e) {
                this.stopTrackingProgress(), this.progressInterval = this.setInterval(rt(this, function () {
                    var e = this.bufferedPercent();
                    this.bufferedPercent_ !== e && this.trigger("progress"), 1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress()
                }), 500)
            }, n.prototype.onDurationChange = function (e) {
                this.duration_ = this.duration()
            }, n.prototype.buffered = function () {
                return St(0, 0)
            }, n.prototype.bufferedPercent = function () {
                return wt(this.buffered(), this.duration_)
            }, n.prototype.stopTrackingProgress = function () {
                this.clearInterval(this.progressInterval)
            }, n.prototype.manualTimeUpdatesOn = function () {
                this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
            }, n.prototype.manualTimeUpdatesOff = function () {
                this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
            }, n.prototype.trackCurrentTime = function () {
                this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                    this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
                }, 250)
            }, n.prototype.stopTrackingCurrentTime = function () {
                this.clearInterval(this.currentTimeInterval), this.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                })
            }, n.prototype.dispose = function () {
                this.clearTracks(li.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
            }, n.prototype.clearTracks = function (e) {
                var n = this;
                (e = [].concat(e)).forEach(function (e) {
                    for (var t = n[e + "Tracks"]() || [], i = t.length; i--;) {
                        var r = t[i];
                        "text" === e && n.removeRemoteTextTrack(r), t.removeTrack(r)
                    }
                })
            }, n.prototype.cleanupAutoTextTracks = function () {
                for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) {
                    var i = e[t];
                    this.removeRemoteTextTrack(i)
                }
            }, n.prototype.reset = function () {
            }, n.prototype.error = function (e) {
                return void 0 !== e && (this.error_ = new Pt(e), this.trigger("error")), this.error_
            }, n.prototype.played = function () {
                return this.hasStarted_ ? St(0, 0) : St()
            }, n.prototype.setCurrentTime = function () {
                this.manualTimeUpdates && this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
            }, n.prototype.initTrackListeners = function () {
                var n = this;
                li.names.forEach(function (e) {
                    var t = li[e], i = function () {
                        n.trigger(e + "trackchange")
                    }, r = n[t.getterName]();
                    r.addEventListener("removetrack", i), r.addEventListener("addtrack", i), n.on("dispose", function () {
                        r.removeEventListener("removetrack", i), r.removeEventListener("addtrack", i)
                    })
                })
            }, n.prototype.addWebVttScript_ = function () {
                var e = this;
                if (!f.WebVTT) if (p.body.contains(this.el())) {
                    if (!this.options_["vtt.js"] && $(u) && 0 < Object.keys(u).length) return void this.trigger("vttjsloaded");
                    var t = p.createElement("script");
                    t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js", t.onload = function () {
                        e.trigger("vttjsloaded")
                    }, t.onerror = function () {
                        e.trigger("vttjserror")
                    }, this.on("dispose", function () {
                        t.onload = null, t.onerror = null
                    }), f.WebVTT = !0, this.el().parentNode.appendChild(t)
                } else this.ready(this.addWebVttScript_)
            }, n.prototype.emulateTextTracks = function () {
                var e = this, i = this.textTracks(), t = this.remoteTextTracks(), r = function (e) {
                    return i.addTrack(e.track)
                }, n = function (e) {
                    return i.removeTrack(e.track)
                };
                t.on("addtrack", r), t.on("removetrack", n), this.addWebVttScript_();
                var o = function () {
                    return e.trigger("texttrackchange")
                }, a = function () {
                    o();
                    for (var e = 0; e < i.length; e++) {
                        var t = i[e];
                        t.removeEventListener("cuechange", o), "showing" === t.mode && t.addEventListener("cuechange", o)
                    }
                };
                a(), i.addEventListener("change", a), i.addEventListener("addtrack", a), i.addEventListener("removetrack", a), this.on("dispose", function () {
                    t.off("addtrack", r), t.off("removetrack", n), i.removeEventListener("change", a), i.removeEventListener("addtrack", a), i.removeEventListener("removetrack", a);
                    for (var e = 0; e < i.length; e++) {
                        i[e].removeEventListener("cuechange", o)
                    }
                })
            }, n.prototype.addTextTrack = function (e, t, i) {
                if (!e) throw new Error("TextTrack kind is required but was not provided");
                return function (e, t, i, r) {
                    var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, o = e.textTracks();
                    n.kind = t, i && (n.label = i), r && (n.language = r), n.tech = e;
                    var a = new di.text.TrackClass(n);
                    return o.addTrack(a), a
                }(this, e, t, i)
            }, n.prototype.createRemoteTextTrack = function (e) {
                var t = _t(e, {tech: this});
                return new ci.remoteTextEl.TrackClass(t)
            }, n.prototype.addRemoteTextTrack = function () {
                var e = this, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments[1],
                    r = this.createRemoteTextTrack(t);
                return !0 !== i && !1 !== i && (Z.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), i = !0), this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack(r.track), !0 !== i && this.ready(function () {
                    return e.autoRemoteTextTracks_.addTrack(r.track)
                }), r
            }, n.prototype.removeRemoteTextTrack = function (e) {
                var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
                this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e)
            }, n.prototype.getVideoPlaybackQuality = function () {
                return {}
            }, n.prototype.setPoster = function () {
            }, n.prototype.playsinline = function () {
            }, n.prototype.setPlaysinline = function () {
            }, n.prototype.canPlayType = function () {
                return ""
            }, n.canPlayType = function () {
                return ""
            }, n.canPlaySource = function (e, t) {
                return n.canPlayType(e.type)
            }, n.isTech = function (e) {
                return e.prototype instanceof n || e instanceof n || e === n
            }, n.registerTech = function (e, t) {
                if (n.techs_ || (n.techs_ = {}), !n.isTech(t)) throw new Error("Tech " + e + " must be a Tech");
                if (!n.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
                if (!n.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
                return e = yt(e), n.techs_[e] = t, "Tech" !== e && n.defaultTechOrder_.push(e), t
            }, n.getTech = function (e) {
                if (e) return e = yt(e), n.techs_ && n.techs_[e] ? n.techs_[e] : f && f.videojs && f.videojs[e] ? (Z.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), f.videojs[e]) : void 0
            }, n
        }(gt);
        di.names.forEach(function (e) {
            var t = di[e];
            hi.prototype[t.getterName] = function () {
                return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]
            }
        }), hi.prototype.featuresVolumeControl = !0, hi.prototype.featuresMuteControl = !0, hi.prototype.featuresFullscreenResize = !1, hi.prototype.featuresPlaybackRate = !1, hi.prototype.featuresProgressEvents = !1, hi.prototype.featuresSourceset = !1, hi.prototype.featuresTimeupdateEvents = !1, hi.prototype.featuresNativeTextTracks = !1, hi.withSourceHandlers = function (n) {
            n.registerSourceHandler = function (e, t) {
                var i = n.sourceHandlers;
                i || (i = n.sourceHandlers = []), void 0 === t && (t = i.length), i.splice(t, 0, e)
            }, n.canPlayType = function (e) {
                for (var t = n.sourceHandlers || [], i = void 0, r = 0; r < t.length; r++) if (i = t[r].canPlayType(e)) return i;
                return ""
            }, n.selectSourceHandler = function (e, t) {
                for (var i = n.sourceHandlers || [], r = 0; r < i.length; r++) if (i[r].canHandleSource(e, t)) return i[r];
                return null
            }, n.canPlaySource = function (e, t) {
                var i = n.selectSourceHandler(e, t);
                return i ? i.canHandleSource(e, t) : ""
            };
            ["seekable", "seeking", "duration"].forEach(function (e) {
                var t = this[e];
                "function" == typeof t && (this[e] = function () {
                    return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
                })
            }, n.prototype), n.prototype.setSource = function (e) {
                var t = n.selectSourceHandler(e, this.options_);
                t || (n.nativeSourceHandler ? t = n.nativeSourceHandler : Z.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), t !== n.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = t.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler)
            }, n.prototype.disposeSourceHandler = function () {
                this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
            }
        }, gt.registerComponent("Tech", hi), hi.registerTech("Tech", hi), hi.defaultTechOrder_ = [];
        var fi = {}, pi = {}, mi = {};

        function vi(e, t, i) {
            e.setTimeout(function () {
                return function i() {
                    var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                    var n = arguments[2];
                    var o = arguments[3];
                    var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [];
                    var s = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                    var t = e[0], u = e.slice(1);
                    if ("string" == typeof t) i(r, fi[t], n, o, a, s); else if (t) {
                        var l = Si(o, t);
                        if (!l.setSource) return a.push(l), i(r, u, n, o, a, s);
                        l.setSource(z({}, r), function (e, t) {
                            if (e) return i(r, u, n, o, a, s);
                            a.push(l), i(t, r.type === t.type ? u : fi[t.type], n, o, a, s)
                        })
                    } else u.length ? i(r, u, n, o, a, s) : s ? n(r, a) : i(r, fi["*"], n, o, a, !0)
                }(t, fi[t.type], i, e)
            }, 1)
        }

        function yi(e, t, i) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, n = "call" + yt(i),
                o = e.reduce(Ti(n), r), a = o === mi, s = a ? null : t[i](o);
            return function (e, t, i, r) {
                for (var n = e.length - 1; 0 <= n; n--) {
                    var o = e[n];
                    o[t] && o[t](r, i)
                }
            }(e, i, s, a), s
        }

        var _i = {buffered: 1, currentTime: 1, duration: 1, seekable: 1, played: 1, paused: 1},
            gi = {setCurrentTime: 1}, bi = {play: 1, pause: 1};

        function Ti(i) {
            return function (e, t) {
                return e === mi ? mi : t[i] ? t[i](e) : e
            }
        }

        function Si(e, t) {
            var i = pi[e.id()], r = null;
            if (null == i) return r = t(e), pi[e.id()] = [[t, r]], r;
            for (var n = 0; n < i.length; n++) {
                var o = i[n], a = o[0], s = o[1];
                a === t && (r = s)
            }
            return null === r && (r = t(e), i.push([t, r])), r
        }

        var wi = {
            opus: "video/ogg",
            ogv: "video/ogg",
            mp4: "video/mp4",
            mov: "video/mp4",
            m4v: "video/mp4",
            mkv: "video/x-matroska",
            mp3: "audio/mpeg",
            aac: "audio/aac",
            oga: "audio/ogg",
            m3u8: "application/x-mpegURL"
        }, ki = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = ti(e);
            return wi[t.toLowerCase()] || ""
        };

        function Ei(e) {
            var t = ki(e.src);
            return !e.type && t && (e.type = t), e
        }

        var Ci = function (l) {
            function c(e, t, i) {
                F(this, c);
                var r = _t({createEl: !1}, t), n = H(this, l.call(this, e, r, i));
                if (t.playerOptions.sources && 0 !== t.playerOptions.sources.length) e.src(t.playerOptions.sources); else for (var o = 0, a = t.playerOptions.techOrder; o < a.length; o++) {
                    var s = yt(a[o]), u = hi.getTech(s);
                    if (s || (u = gt.getComponent(s)), u && u.isSupported()) {
                        e.loadTech_(s);
                        break
                    }
                }
                return n
            }

            return U(c, l), c
        }(gt);
        gt.registerComponent("MediaLoader", Ci);
        var xi = function (n) {
            function r(e, t) {
                F(this, r);
                var i = H(this, n.call(this, e, t));
                return i.emitTapEvents(), i.enable(), i
            }

            return U(r, n), r.prototype.createEl = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "div",
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                t = z({
                    innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                    className: this.buildCSSClass(),
                    tabIndex: 0
                }, t), "button" === e && Z.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), i = z({role: "button"}, i), this.tabIndex_ = t.tabIndex;
                var r = n.prototype.createEl.call(this, e, t, i);
                return this.createControlTextEl(r), r
            }, r.prototype.dispose = function () {
                this.controlTextEl_ = null, n.prototype.dispose.call(this)
            }, r.prototype.createControlTextEl = function (e) {
                return this.controlTextEl_ = ue("span", {className: "vjs-control-text"}, {"aria-live": "polite"}), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
            }, r.prototype.controlText = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.el();
                if (void 0 === e) return this.controlText_ || "Need Text";
                var i = this.localize(e);
                this.controlText_ = e, le(this.controlTextEl_, i), this.nonIconControl || t.setAttribute("title", i)
            }, r.prototype.buildCSSClass = function () {
                return "vjs-control vjs-button " + n.prototype.buildCSSClass.call(this)
            }, r.prototype.enable = function () {
                this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
            }, r.prototype.disable = function () {
                this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
            }, r.prototype.handleClick = function (e) {
            }, r.prototype.handleFocus = function (e) {
                ze(p, "keydown", rt(this, this.handleKeyPress))
            }, r.prototype.handleKeyPress = function (e) {
                32 === e.which || 13 === e.which ? (e.preventDefault(), this.trigger("click")) : n.prototype.handleKeyPress && n.prototype.handleKeyPress.call(this, e)
            }, r.prototype.handleBlur = function (e) {
                Xe(p, "keydown", rt(this, this.handleKeyPress))
            }, r
        }(gt);
        gt.registerComponent("ClickableComponent", xi);
        var ji = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.update(), e.on("posterchange", rt(i, i.update)), i
            }

            return U(n, r), n.prototype.dispose = function () {
                this.player().off("posterchange", this.update), r.prototype.dispose.call(this)
            }, n.prototype.createEl = function () {
                var e = ue("div", {className: "vjs-poster", tabIndex: -1});
                return R || (this.fallbackImg_ = ue("img"), e.appendChild(this.fallbackImg_)), e
            }, n.prototype.update = function (e) {
                var t = this.player().poster();
                this.setSrc(t), t ? this.show() : this.hide()
            }, n.prototype.setSrc = function (e) {
                if (this.fallbackImg_) this.fallbackImg_.src = e; else {
                    var t = "";
                    e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t
                }
            }, n.prototype.handleClick = function (e) {
                this.player_.controls() && (this.player_.paused() ? Mt(this.player_.play()) : this.player_.pause())
            }, n
        }(xi);
        gt.registerComponent("PosterImage", ji);
        var Oi = "#222", Pi = {
            monospace: "monospace",
            sansSerif: "sans-serif",
            serif: "serif",
            monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
            monospaceSerif: '"Courier New", monospace',
            proportionalSansSerif: "sans-serif",
            proportionalSerif: "serif",
            casual: '"Comic Sans MS", Impact, fantasy',
            script: '"Monotype Corsiva", cursive',
            smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
        };

        function Ai(e, t) {
            var i = void 0;
            if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]; else {
                if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
                i = e.slice(1)
            }
            return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
        }

        function Li(e, t, i) {
            try {
                e.style[t] = i
            } catch (e) {
                return
            }
        }

        var Mi = function (n) {
            function o(i, e, t) {
                F(this, o);
                var r = H(this, n.call(this, i, e, t));
                return i.on("loadstart", rt(r, r.toggleDisplay)), i.on("texttrackchange", rt(r, r.updateDisplay)), i.on("loadstart", rt(r, r.preselectTrack)), i.ready(rt(r, function () {
                    if (i.tech_ && i.tech_.featuresNativeTextTracks) this.hide(); else {
                        i.on("fullscreenchange", rt(this, this.updateDisplay));
                        for (var e = this.options_.playerOptions.tracks || [], t = 0; t < e.length; t++) this.player_.addRemoteTextTrack(e[t], !0);
                        this.preselectTrack()
                    }
                })), r
            }

            return U(o, n), o.prototype.preselectTrack = function () {
                for (var e = {
                    captions: 1,
                    subtitles: 1
                }, t = this.player_.textTracks(), i = this.player_.cache_.selectedLanguage, r = void 0, n = void 0, o = void 0, a = 0; a < t.length; a++) {
                    var s = t[a];
                    i && i.enabled && i.language === s.language ? s.kind === i.kind ? o = s : o || (o = s) : i && !i.enabled ? n = r = o = null : s.default && ("descriptions" !== s.kind || r ? s.kind in e && !n && (n = s) : r = s)
                }
                o ? o.mode = "showing" : n ? n.mode = "showing" : r && (r.mode = "showing")
            }, o.prototype.toggleDisplay = function () {
                this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
            }, o.prototype.createEl = function () {
                return n.prototype.createEl.call(this, "div", {className: "vjs-text-track-display"}, {
                    "aria-live": "off",
                    "aria-atomic": "true"
                })
            }, o.prototype.clearDisplay = function () {
                "function" == typeof f.WebVTT && f.WebVTT.processCues(f, [], this.el_)
            }, o.prototype.updateDisplay = function () {
                var e = this.player_.textTracks();
                this.clearDisplay();
                for (var t = null, i = null, r = e.length; r--;) {
                    var n = e[r];
                    "showing" === n.mode && ("descriptions" === n.kind ? t = n : i = n)
                }
                i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(i)) : t && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(t))
            }, o.prototype.updateForTrack = function (e) {
                if ("function" == typeof f.WebVTT && e.activeCues) {
                    for (var t = [], i = 0; i < e.activeCues.length; i++) t.push(e.activeCues[i]);
                    if (f.WebVTT.processCues(f, t, this.el_), this.player_.textTrackSettings) for (var r = this.player_.textTrackSettings.getValues(), n = t.length; n--;) {
                        var o = t[n];
                        if (o) {
                            var a = o.displayState;
                            if (r.color && (a.firstChild.style.color = r.color), r.textOpacity && Li(a.firstChild, "color", Ai(r.color || "#fff", r.textOpacity)), r.backgroundColor && (a.firstChild.style.backgroundColor = r.backgroundColor), r.backgroundOpacity && Li(a.firstChild, "backgroundColor", Ai(r.backgroundColor || "#000", r.backgroundOpacity)), r.windowColor && (r.windowOpacity ? Li(a, "backgroundColor", Ai(r.windowColor, r.windowOpacity)) : a.style.backgroundColor = r.windowColor), r.edgeStyle && ("dropshadow" === r.edgeStyle ? a.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px " + Oi : "raised" === r.edgeStyle ? a.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px " + Oi : "depressed" === r.edgeStyle ? a.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px " + Oi : "uniform" === r.edgeStyle && (a.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px " + Oi)), r.fontPercent && 1 !== r.fontPercent) {
                                var s = f.parseFloat(a.style.fontSize);
                                a.style.fontSize = s * r.fontPercent + "px", a.style.height = "auto", a.style.top = "auto", a.style.bottom = "2px"
                            }
                            r.fontFamily && "default" !== r.fontFamily && ("small-caps" === r.fontFamily ? a.firstChild.style.fontVariant = "small-caps" : a.firstChild.style.fontFamily = Pi[r.fontFamily])
                        }
                    }
                }
            }, o
        }(gt);
        gt.registerComponent("TextTrackDisplay", Mi);
        var Ii = function (n) {
            function e() {
                return F(this, e), H(this, n.apply(this, arguments))
            }

            return U(e, n), e.prototype.createEl = function () {
                var e = this.player_.isAudio(), t = this.localize(e ? "Audio Player" : "Video Player"),
                    i = ue("span", {className: "vjs-control-text", innerHTML: this.localize("{1} is loading.", [t])}),
                    r = n.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner", dir: "ltr"});
                return r.appendChild(i), r
            }, e
        }(gt);
        gt.registerComponent("LoadingSpinner", Ii);
        var Di = function (t) {
            function e() {
                return F(this, e), H(this, t.apply(this, arguments))
            }

            return U(e, t), e.prototype.createEl = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                e = "button", t = z({
                    innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                    className: this.buildCSSClass()
                }, t), i = z({type: "button"}, i);
                var r = gt.prototype.createEl.call(this, "button", t, i);
                return this.createControlTextEl(r), r
            }, e.prototype.addChild = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = this.constructor.name;
                return Z.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), gt.prototype.addChild.call(this, e, t)
            }, e.prototype.enable = function () {
                t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
            }, e.prototype.disable = function () {
                t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
            }, e.prototype.handleKeyPress = function (e) {
                32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
            }, e
        }(xi);
        gt.registerComponent("Button", Di);
        var Ri = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.mouseused_ = !1, i.on("mousedown", i.handleMouseDown), i
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-big-play-button"
            }, n.prototype.handleClick = function (e) {
                var t = this.player_.play();
                if (this.mouseused_ && e.clientX && e.clientY) Mt(t); else {
                    var i = this.player_.getChild("controlBar"), r = i && i.getChild("playToggle");
                    if (r) {
                        var n = function () {
                            return r.focus()
                        };
                        Lt(t) ? t.then(n, function () {
                        }) : this.setTimeout(n, 1)
                    } else this.player_.focus()
                }
            }, n.prototype.handleKeyPress = function (e) {
                this.mouseused_ = !1, r.prototype.handleKeyPress.call(this, e)
            }, n.prototype.handleMouseDown = function (e) {
                this.mouseused_ = !0
            }, n
        }(Di);
        Ri.prototype.controlText_ = "Play Video", gt.registerComponent("BigPlayButton", Ri);
        var Ni = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.controlText(t && t.controlText || i.localize("Close")), i
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-close-button " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.handleClick = function (e) {
                this.trigger({type: "close", bubbles: !1})
            }, n
        }(Di);
        gt.registerComponent("CloseButton", Ni);
        var Bi = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.on(e, "play", i.handlePlay), i.on(e, "pause", i.handlePause), i.on(e, "ended", i.handleEnded), i
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-play-control " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.handleClick = function (e) {
                this.player_.paused() ? this.player_.play() : this.player_.pause()
            }, n.prototype.handleSeeked = function (e) {
                this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
            }, n.prototype.handlePlay = function (e) {
                this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
            }, n.prototype.handlePause = function (e) {
                this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
            }, n.prototype.handleEnded = function (e) {
                this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
            }, n
        }(Di);
        Bi.prototype.controlText_ = "Play", gt.registerComponent("PlayToggle", Bi);
        var Fi = function (e, t) {
            e = e < 0 ? 0 : e;
            var i = Math.floor(e % 60), r = Math.floor(e / 60 % 60), n = Math.floor(e / 3600),
                o = Math.floor(t / 60 % 60), a = Math.floor(t / 3600);
            return (isNaN(e) || e === 1 / 0) && (n = r = i = "-"), (n = 0 < n || 0 < a ? n + ":" : "") + (r = ((n || 10 <= o) && r < 10 ? "0" + r : r) + ":") + (i = i < 10 ? "0" + i : i)
        }, Ui = Fi;
        var Hi = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e;
            return Ui(e, t)
        }, qi = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.throttledUpdateContent = nt(rt(i, i.updateContent), 25), i.on(e, "timeupdate", i.throttledUpdateContent), i
            }

            return U(n, r), n.prototype.createEl = function (e) {
                var t = this.buildCSSClass(), i = r.prototype.createEl.call(this, "div", {
                    className: t + " vjs-time-control vjs-control",
                    innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + " </span>"
                });
                return this.contentEl_ = ue("span", {className: t + "-display"}, {"aria-live": "off"}), this.updateTextNode_(), i.appendChild(this.contentEl_), i
            }, n.prototype.dispose = function () {
                this.contentEl_ = null, this.textNode_ = null, r.prototype.dispose.call(this)
            }, n.prototype.updateTextNode_ = function () {
                if (this.contentEl_) {
                    for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
                    this.textNode_ = p.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
                }
            }, n.prototype.formatTime_ = function (e) {
                return Hi(e)
            }, n.prototype.updateFormattedTime_ = function (e) {
                var t = this.formatTime_(e);
                t !== this.formattedTime_ && (this.formattedTime_ = t, this.requestAnimationFrame(this.updateTextNode_))
            }, n.prototype.updateContent = function (e) {
            }, n
        }(gt);
        qi.prototype.labelText_ = "Time", qi.prototype.controlText_ = "Time", gt.registerComponent("TimeDisplay", qi);
        var Vi = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.on(e, "ended", i.handleEnded), i
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-current-time"
            }, n.prototype.updateContent = function (e) {
                var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                this.updateFormattedTime_(t)
            }, n.prototype.handleEnded = function (e) {
                this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
            }, n
        }(qi);
        Vi.prototype.labelText_ = "Current Time", Vi.prototype.controlText_ = "Current Time", gt.registerComponent("CurrentTimeDisplay", Vi);
        var Wi = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.on(e, "durationchange", i.updateContent), i.on(e, "loadedmetadata", i.throttledUpdateContent), i
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-duration"
            }, n.prototype.updateContent = function (e) {
                var t = this.player_.duration();
                t && this.duration_ !== t && (this.duration_ = t, this.updateFormattedTime_(t))
            }, n
        }(qi);
        Wi.prototype.labelText_ = "Duration", Wi.prototype.controlText_ = "Duration", gt.registerComponent("DurationDisplay", Wi);
        var Gi = function (e) {
            function t() {
                return F(this, t), H(this, e.apply(this, arguments))
            }

            return U(t, e), t.prototype.createEl = function () {
                return e.prototype.createEl.call(this, "div", {
                    className: "vjs-time-control vjs-time-divider",
                    innerHTML: "<div><span>/</span></div>"
                })
            }, t
        }(gt);
        gt.registerComponent("TimeDivider", Gi);
        var zi = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.on(e, "durationchange", i.throttledUpdateContent), i.on(e, "ended", i.handleEnded), i
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-remaining-time"
            }, n.prototype.formatTime_ = function (e) {
                return "-" + r.prototype.formatTime_.call(this, e)
            }, n.prototype.updateContent = function (e) {
                this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
            }, n.prototype.handleEnded = function (e) {
                this.player_.duration() && this.updateFormattedTime_(0)
            }, n
        }(qi);
        zi.prototype.labelText_ = "Remaining Time", zi.prototype.controlText_ = "Remaining Time", gt.registerComponent("RemainingTimeDisplay", zi);
        var Xi = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.updateShowing(), i.on(i.player(), "durationchange", i.updateShowing), i
            }

            return U(n, r), n.prototype.createEl = function () {
                var e = r.prototype.createEl.call(this, "div", {className: "vjs-live-control vjs-control"});
                return this.contentEl_ = ue("div", {
                    className: "vjs-live-display",
                    innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
                }, {"aria-live": "off"}), e.appendChild(this.contentEl_), e
            }, n.prototype.dispose = function () {
                this.contentEl_ = null, r.prototype.dispose.call(this)
            }, n.prototype.updateShowing = function (e) {
                this.player().duration() === 1 / 0 ? this.show() : this.hide()
            }, n
        }(gt);
        gt.registerComponent("LiveDisplay", Xi);
        var $i = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.bar = i.getChild(i.options_.barName), i.vertical(!!i.options_.vertical), i.enable(), i
            }

            return U(n, r), n.prototype.enabled = function () {
                return this.enabled_
            }, n.prototype.enable = function () {
                this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
            }, n.prototype.disable = function () {
                if (this.enabled()) {
                    var e = this.bar.el_.ownerDocument;
                    this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
                }
            }, n.prototype.createEl = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                return t.className = t.className + " vjs-slider", t = z({tabIndex: 0}, t), i = z({
                    role: "slider",
                    "aria-valuenow": 0,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    tabIndex: 0
                }, i), r.prototype.createEl.call(this, e, t, i)
            }, n.prototype.handleMouseDown = function (e) {
                var t = this.bar.el_.ownerDocument;
                "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || O || e.preventDefault(), be(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e)
            }, n.prototype.handleMouseMove = function (e) {
            }, n.prototype.handleMouseUp = function () {
                var e = this.bar.el_.ownerDocument;
                Te(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update()
            }, n.prototype.update = function () {
                if (this.el_) {
                    var e = this.getPercent(), t = this.bar;
                    if (t) {
                        ("number" != typeof e || e != e || e < 0 || e === 1 / 0) && (e = 0);
                        var i = (100 * e).toFixed(2) + "%", r = t.el().style;
                        return this.vertical() ? r.height = i : r.width = i, e
                    }
                }
            }, n.prototype.calculateDistance = function (e) {
                var t = ke(this.el_, e);
                return this.vertical() ? t.y : t.x
            }, n.prototype.handleFocus = function () {
                this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
            }, n.prototype.handleKeyPress = function (e) {
                37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepBack()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepForward())
            }, n.prototype.handleBlur = function () {
                this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
            }, n.prototype.handleClick = function (e) {
                e.stopImmediatePropagation(), e.preventDefault()
            }, n.prototype.vertical = function (e) {
                if (void 0 === e) return this.vertical_ || !1;
                this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
            }, n
        }(gt);
        gt.registerComponent("Slider", $i);
        var Ki = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.partEls_ = [], i.on(e, "progress", i.update), i
            }

            return U(n, r), n.prototype.createEl = function () {
                return r.prototype.createEl.call(this, "div", {
                    className: "vjs-load-progress",
                    innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                })
            }, n.prototype.dispose = function () {
                this.partEls_ = null, r.prototype.dispose.call(this)
            }, n.prototype.update = function (e) {
                var t = this.player_.buffered(), i = this.player_.duration(), r = this.player_.bufferedEnd(),
                    n = this.partEls_, o = function (e, t) {
                        var i = e / t || 0;
                        return 100 * (1 <= i ? 1 : i) + "%"
                    };
                this.el_.style.width = o(r, i);
                for (var a = 0; a < t.length; a++) {
                    var s = t.start(a), u = t.end(a), l = n[a];
                    l || (l = this.el_.appendChild(ue()), n[a] = l), l.style.left = o(s, r), l.style.width = o(u - s, r)
                }
                for (var c = n.length; c > t.length; c--) this.el_.removeChild(n[c - 1]);
                n.length = t.length
            }, n
        }(gt);
        gt.registerComponent("LoadProgressBar", Ki);
        var Yi = function (e) {
            function t() {
                return F(this, t), H(this, e.apply(this, arguments))
            }

            return U(t, e), t.prototype.createEl = function () {
                return e.prototype.createEl.call(this, "div", {className: "vjs-time-tooltip"})
            }, t.prototype.update = function (e, t, i) {
                var r = Se(this.el_), n = Se(this.player_.el()), o = e.width * t;
                if (n && r) {
                    var a = e.left - n.left + o, s = e.width - o + (n.right - e.right), u = r.width / 2;
                    a < u ? u += u - a : s < u && (u = s), u < 0 ? u = 0 : u > r.width && (u = r.width), this.el_.style.right = "-" + u + "px", le(this.el_, i)
                }
            }, t
        }(gt);
        gt.registerComponent("TimeTooltip", Yi);
        var Ji = function (e) {
            function t() {
                return F(this, t), H(this, e.apply(this, arguments))
            }

            return U(t, e), t.prototype.createEl = function () {
                return e.prototype.createEl.call(this, "div", {
                    className: "vjs-play-progress vjs-slider-bar",
                    innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                })
            }, t.prototype.update = function (r, n) {
                var o = this;
                this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                    var e = o.player_.scrubbing() ? o.player_.getCache().currentTime : o.player_.currentTime(),
                        t = Hi(e, o.player_.duration()), i = o.getChild("timeTooltip");
                    i && i.update(r, n, t)
                })
            }, t
        }(gt);
        Ji.prototype.options_ = {children: []}, L && !(8 < L) || T || w || Ji.prototype.options_.children.push("timeTooltip"), gt.registerComponent("PlayProgressBar", Ji);
        var Qi = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.update = nt(rt(i, i.update), 25), i
            }

            return U(n, r), n.prototype.createEl = function () {
                return r.prototype.createEl.call(this, "div", {className: "vjs-mouse-display"})
            }, n.prototype.update = function (i, r) {
                var n = this;
                this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                    var e = n.player_.duration(), t = Hi(r * e, e);
                    n.el_.style.left = i.width * r + "px", n.getChild("timeTooltip").update(i, r, t)
                })
            }, n
        }(gt);
        Qi.prototype.options_ = {children: ["timeTooltip"]}, gt.registerComponent("MouseTimeDisplay", Qi);
        var Zi = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.setEventHandlers_(), i
            }

            return U(n, r), n.prototype.setEventHandlers_ = function () {
                var e = this;
                this.update = nt(rt(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.updateInterval = null, this.on(this.player_, ["playing"], function () {
                    e.clearInterval(e.updateInterval), e.updateInterval = e.setInterval(function () {
                        e.requestAnimationFrame(function () {
                            e.update()
                        })
                    }, 30)
                }), this.on(this.player_, ["ended", "pause", "waiting"], function () {
                    e.clearInterval(e.updateInterval)
                }), this.on(this.player_, ["timeupdate", "ended"], this.update)
            }, n.prototype.createEl = function () {
                return r.prototype.createEl.call(this, "div", {className: "vjs-progress-holder"}, {"aria-label": this.localize("Progress Bar")})
            }, n.prototype.update_ = function (e, t) {
                var i = this.player_.duration();
                this.el_.setAttribute("aria-valuenow", (100 * t).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Hi(e, i), Hi(i, i)], "{1} of {2}")), this.bar.update(Se(this.el_), t)
            }, n.prototype.update = function (e) {
                var t = r.prototype.update.call(this);
                return this.update_(this.getCurrentTime_(), t), t
            }, n.prototype.getCurrentTime_ = function () {
                return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
            }, n.prototype.handleEnded = function (e) {
                this.update_(this.player_.duration(), 1)
            }, n.prototype.getPercent = function () {
                var e = this.getCurrentTime_() / this.player_.duration();
                return 1 <= e ? 1 : e
            }, n.prototype.handleMouseDown = function (e) {
                Pe(e) && (e.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), r.prototype.handleMouseDown.call(this, e))
            }, n.prototype.handleMouseMove = function (e) {
                if (Pe(e)) {
                    var t = this.calculateDistance(e) * this.player_.duration();
                    t === this.player_.duration() && (t -= .1), this.player_.currentTime(t)
                }
            }, n.prototype.enable = function () {
                r.prototype.enable.call(this);
                var e = this.getChild("mouseTimeDisplay");
                e && e.show()
            }, n.prototype.disable = function () {
                r.prototype.disable.call(this);
                var e = this.getChild("mouseTimeDisplay");
                e && e.hide()
            }, n.prototype.handleMouseUp = function (e) {
                r.prototype.handleMouseUp.call(this, e), e && e.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                }), this.videoWasPlaying && Mt(this.player_.play())
            }, n.prototype.stepForward = function () {
                this.player_.currentTime(this.player_.currentTime() + 5)
            }, n.prototype.stepBack = function () {
                this.player_.currentTime(this.player_.currentTime() - 5)
            }, n.prototype.handleAction = function (e) {
                this.player_.paused() ? this.player_.play() : this.player_.pause()
            }, n.prototype.handleKeyPress = function (e) {
                32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleAction(e)) : r.prototype.handleKeyPress && r.prototype.handleKeyPress.call(this, e)
            }, n
        }($i);
        Zi.prototype.options_ = {
            children: ["loadProgressBar", "playProgressBar"],
            barName: "playProgressBar"
        }, L && !(8 < L) || T || w || Zi.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), Zi.prototype.playerEvent = "timeupdate", gt.registerComponent("SeekBar", Zi);
        var er = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.handleMouseMove = nt(rt(i, i.handleMouseMove), 25), i.throttledHandleMouseSeek = nt(rt(i, i.handleMouseSeek), 25), i.enable(), i
            }

            return U(n, r), n.prototype.createEl = function () {
                return r.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
            }, n.prototype.handleMouseMove = function (e) {
                var t = this.getChild("seekBar");
                if (t) {
                    var i = t.getChild("mouseTimeDisplay"), r = t.el(), n = Se(r), o = ke(r, e).x;
                    1 < o ? o = 1 : o < 0 && (o = 0), i && i.update(n, o)
                }
            }, n.prototype.handleMouseSeek = function (e) {
                var t = this.getChild("seekBar");
                t && t.handleMouseMove(e)
            }, n.prototype.enabled = function () {
                return this.enabled_
            }, n.prototype.disable = function () {
                this.children().forEach(function (e) {
                    return e.disable && e.disable()
                }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
            }, n.prototype.enable = function () {
                this.children().forEach(function (e) {
                    return e.enable && e.enable()
                }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
            }, n.prototype.handleMouseDown = function (e) {
                var t = this.el_.ownerDocument, i = this.getChild("seekBar");
                i && i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
            }, n.prototype.handleMouseUp = function (e) {
                var t = this.el_.ownerDocument, i = this.getChild("seekBar");
                i && i.handleMouseUp(e), this.off(t, "mousemove", this.throttledHandleMouseSeek), this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
            }, n
        }(gt);
        er.prototype.options_ = {children: ["seekBar"]}, gt.registerComponent("ProgressControl", er);
        var tr = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.on(e, "fullscreenchange", i.handleFullscreenChange), !1 === p[kt.fullscreenEnabled] && i.disable(), i
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-fullscreen-control " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.handleFullscreenChange = function (e) {
                this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
            }, n.prototype.handleClick = function (e) {
                this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
            }, n
        }(Di);
        tr.prototype.controlText_ = "Fullscreen", gt.registerComponent("FullscreenToggle", tr);
        var ir = function (e) {
            function t() {
                return F(this, t), H(this, e.apply(this, arguments))
            }

            return U(t, e), t.prototype.createEl = function () {
                return e.prototype.createEl.call(this, "div", {
                    className: "vjs-volume-level",
                    innerHTML: '<span class="vjs-control-text"></span>'
                })
            }, t
        }(gt);
        gt.registerComponent("VolumeLevel", ir);
        var rr = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.on("slideractive", i.updateLastVolume_), i.on(e, "volumechange", i.updateARIAAttributes), e.ready(function () {
                    return i.updateARIAAttributes()
                }), i
            }

            return U(n, r), n.prototype.createEl = function () {
                return r.prototype.createEl.call(this, "div", {className: "vjs-volume-bar vjs-slider-bar"}, {
                    "aria-label": this.localize("Volume Level"),
                    "aria-live": "polite"
                })
            }, n.prototype.handleMouseDown = function (e) {
                Pe(e) && r.prototype.handleMouseDown.call(this, e)
            }, n.prototype.handleMouseMove = function (e) {
                Pe(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
            }, n.prototype.checkMuted = function () {
                this.player_.muted() && this.player_.muted(!1)
            }, n.prototype.getPercent = function () {
                return this.player_.muted() ? 0 : this.player_.volume()
            }, n.prototype.stepForward = function () {
                this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
            }, n.prototype.stepBack = function () {
                this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
            }, n.prototype.updateARIAAttributes = function (e) {
                var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
                this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
            }, n.prototype.volumeAsPercentage_ = function () {
                return Math.round(100 * this.player_.volume())
            }, n.prototype.updateLastVolume_ = function () {
                var e = this, t = this.player_.volume();
                this.one("sliderinactive", function () {
                    0 === e.player_.volume() && e.player_.lastVolume_(t)
                })
            }, n
        }($i);
        rr.prototype.options_ = {
            children: ["volumeLevel"],
            barName: "volumeLevel"
        }, rr.prototype.playerEvent = "volumechange", gt.registerComponent("VolumeBar", rr);
        var nr = function (o) {
            function a(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                F(this, a), t.vertical = t.vertical || !1, (void 0 === t.volumeBar || $(t.volumeBar)) && (t.volumeBar = t.volumeBar || {}, t.volumeBar.vertical = t.vertical);
                var i, r, n = H(this, o.call(this, e, t));
                return i = n, (r = e).tech_ && !r.tech_.featuresVolumeControl && i.addClass("vjs-hidden"), i.on(r, "loadstart", function () {
                    r.tech_.featuresVolumeControl ? i.removeClass("vjs-hidden") : i.addClass("vjs-hidden")
                }), n.throttledHandleMouseMove = nt(rt(n, n.handleMouseMove), 25), n.on("mousedown", n.handleMouseDown), n.on("touchstart", n.handleMouseDown), n.on(n.volumeBar, ["focus", "slideractive"], function () {
                    n.volumeBar.addClass("vjs-slider-active"), n.addClass("vjs-slider-active"), n.trigger("slideractive")
                }), n.on(n.volumeBar, ["blur", "sliderinactive"], function () {
                    n.volumeBar.removeClass("vjs-slider-active"), n.removeClass("vjs-slider-active"), n.trigger("sliderinactive")
                }), n
            }

            return U(a, o), a.prototype.createEl = function () {
                var e = "vjs-volume-horizontal";
                return this.options_.vertical && (e = "vjs-volume-vertical"), o.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control " + e})
            }, a.prototype.handleMouseDown = function (e) {
                var t = this.el_.ownerDocument;
                this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
            }, a.prototype.handleMouseUp = function (e) {
                var t = this.el_.ownerDocument;
                this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
            }, a.prototype.handleMouseMove = function (e) {
                this.volumeBar.handleMouseMove(e)
            }, a
        }(gt);
        nr.prototype.options_ = {children: ["volumeBar"]}, gt.registerComponent("VolumeControl", nr);
        var or = function (o) {
            function a(e, t) {
                F(this, a);
                var i, r, n = H(this, o.call(this, e, t));
                return i = n, (r = e).tech_ && !r.tech_.featuresMuteControl && i.addClass("vjs-hidden"), i.on(r, "loadstart", function () {
                    r.tech_.featuresMuteControl ? i.removeClass("vjs-hidden") : i.addClass("vjs-hidden")
                }), n.on(e, ["loadstart", "volumechange"], n.update), n
            }

            return U(a, o), a.prototype.buildCSSClass = function () {
                return "vjs-mute-control " + o.prototype.buildCSSClass.call(this)
            }, a.prototype.handleClick = function (e) {
                var t = this.player_.volume(), i = this.player_.lastVolume_();
                if (0 === t) {
                    var r = i < .1 ? .1 : i;
                    this.player_.volume(r), this.player_.muted(!1)
                } else this.player_.muted(!this.player_.muted())
            }, a.prototype.update = function (e) {
                this.updateIcon_(), this.updateControlText_()
            }, a.prototype.updateIcon_ = function () {
                var e = this.player_.volume(), t = 3;
                T && this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
                for (var i = 0; i < 4; i++) fe(this.el_, "vjs-vol-" + i);
                he(this.el_, "vjs-vol-" + t)
            }, a.prototype.updateControlText_ = function () {
                var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
                this.controlText() !== e && this.controlText(e)
            }, a
        }(Di);
        or.prototype.controlText_ = "Mute", gt.registerComponent("MuteToggle", or);
        var ar = function (r) {
            function n(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                F(this, n), void 0 !== t.inline ? t.inline = t.inline : t.inline = !0, (void 0 === t.volumeControl || $(t.volumeControl)) && (t.volumeControl = t.volumeControl || {}, t.volumeControl.vertical = !t.inline);
                var i = H(this, r.call(this, e, t));
                return i.on(e, ["loadstart"], i.volumePanelState_), i.on(i.volumeControl, ["slideractive"], i.sliderActive_), i.on(i.volumeControl, ["sliderinactive"], i.sliderInactive_), i
            }

            return U(n, r), n.prototype.sliderActive_ = function () {
                this.addClass("vjs-slider-active")
            }, n.prototype.sliderInactive_ = function () {
                this.removeClass("vjs-slider-active")
            }, n.prototype.volumePanelState_ = function () {
                this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
            }, n.prototype.createEl = function () {
                var e = "vjs-volume-panel-horizontal";
                return this.options_.inline || (e = "vjs-volume-panel-vertical"), r.prototype.createEl.call(this, "div", {className: "vjs-volume-panel vjs-control " + e})
            }, n
        }(gt);
        ar.prototype.options_ = {children: ["muteToggle", "volumeControl"]}, gt.registerComponent("VolumePanel", ar);
        var sr = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return t && (i.menuButton_ = t.menuButton), i.focusedChild_ = -1, i.on("keydown", i.handleKeyPress), i
            }

            return U(n, r), n.prototype.addItem = function (t) {
                this.addChild(t), t.on("click", rt(this, function (e) {
                    this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus())
                }))
            }, n.prototype.createEl = function () {
                var e = this.options_.contentElType || "ul";
                this.contentEl_ = ue(e, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu");
                var t = r.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
                return t.appendChild(this.contentEl_), ze(t, "click", function (e) {
                    e.preventDefault(), e.stopImmediatePropagation()
                }), t
            }, n.prototype.dispose = function () {
                this.contentEl_ = null, r.prototype.dispose.call(this)
            }, n.prototype.handleKeyPress = function (e) {
                37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepForward()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepBack())
            }, n.prototype.stepForward = function () {
                var e = 0;
                void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
            }, n.prototype.stepBack = function () {
                var e = 0;
                void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
            }, n.prototype.focus = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, t = this.children().slice();
                t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(), 0 < t.length && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), t[this.focusedChild_ = e].el_.focus())
            }, n
        }(gt);
        gt.registerComponent("Menu", sr);
        var ur = function (n) {
            function o(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                F(this, o);
                var i = H(this, n.call(this, e, t));
                i.menuButton_ = new Di(e, t), i.menuButton_.controlText(i.controlText_), i.menuButton_.el_.setAttribute("aria-haspopup", "true");
                var r = Di.prototype.buildCSSClass();
                return i.menuButton_.el_.className = i.buildCSSClass() + " " + r, i.menuButton_.removeClass("vjs-control"), i.addChild(i.menuButton_), i.update(), i.enabled_ = !0, i.on(i.menuButton_, "tap", i.handleClick), i.on(i.menuButton_, "click", i.handleClick), i.on(i.menuButton_, "focus", i.handleFocus), i.on(i.menuButton_, "blur", i.handleBlur), i.on("keydown", i.handleSubmenuKeyPress), i
            }

            return U(o, n), o.prototype.update = function () {
                var e = this.createMenu();
                this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
            }, o.prototype.createMenu = function () {
                var e = new sr(this.player_, {menuButton: this});
                if (this.hideThreshold_ = 0, this.options_.title) {
                    var t = ue("li", {className: "vjs-menu-title", innerHTML: yt(this.options_.title), tabIndex: -1});
                    this.hideThreshold_ += 1, e.children_.unshift(t), ce(t, e.contentEl())
                }
                if (this.items = this.createItems(), this.items) for (var i = 0; i < this.items.length; i++) e.addItem(this.items[i]);
                return e
            }, o.prototype.createItems = function () {
            }, o.prototype.createEl = function () {
                return n.prototype.createEl.call(this, "div", {className: this.buildWrapperCSSClass()}, {})
            }, o.prototype.buildWrapperCSSClass = function () {
                var e = "vjs-menu-button";
                return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + Di.prototype.buildCSSClass() + " " + n.prototype.buildCSSClass.call(this)
            }, o.prototype.buildCSSClass = function () {
                var e = "vjs-menu-button";
                return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + n.prototype.buildCSSClass.call(this)
            }, o.prototype.controlText = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
                return this.menuButton_.controlText(e, t)
            }, o.prototype.handleClick = function (e) {
                this.one(this.menu.contentEl(), "mouseleave", rt(this, function (e) {
                    this.unpressButton(), this.el_.blur()
                })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
            }, o.prototype.focus = function () {
                this.menuButton_.focus()
            }, o.prototype.blur = function () {
                this.menuButton_.blur()
            }, o.prototype.handleFocus = function () {
                ze(p, "keydown", rt(this, this.handleKeyPress))
            }, o.prototype.handleBlur = function () {
                Xe(p, "keydown", rt(this, this.handleKeyPress))
            }, o.prototype.handleKeyPress = function (e) {
                27 === e.which || 9 === e.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus())) : 38 !== e.which && 40 !== e.which || this.buttonPressed_ || (this.pressButton(), e.preventDefault())
            }, o.prototype.handleSubmenuKeyPress = function (e) {
                27 !== e.which && 9 !== e.which || (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus()))
            }, o.prototype.pressButton = function () {
                if (this.enabled_) {
                    if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), T && ae()) return;
                    this.menu.focus()
                }
            }, o.prototype.unpressButton = function () {
                this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
            }, o.prototype.disable = function () {
                this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
            }, o.prototype.enable = function () {
                this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
            }, o
        }(gt);
        gt.registerComponent("MenuButton", ur);
        var lr = function (o) {
            function a(e, t) {
                F(this, a);
                var i = t.tracks, r = H(this, o.call(this, e, t));
                if (r.items.length <= 1 && r.hide(), !i) return H(r);
                var n = rt(r, r.update);
                return i.addEventListener("removetrack", n), i.addEventListener("addtrack", n), r.player_.on("ready", n), r.player_.on("dispose", function () {
                    i.removeEventListener("removetrack", n), i.removeEventListener("addtrack", n)
                }), r
            }

            return U(a, o), a
        }(ur);
        gt.registerComponent("TrackButton", lr);
        var cr = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.selectable = t.selectable, i.isSelected_ = t.selected || !1, i.multiSelectable = t.multiSelectable, i.selected(i.isSelected_), i.selectable ? i.multiSelectable ? i.el_.setAttribute("role", "menuitemcheckbox") : i.el_.setAttribute("role", "menuitemradio") : i.el_.setAttribute("role", "menuitem"), i
            }

            return U(n, r), n.prototype.createEl = function (e, t, i) {
                return this.nonIconControl = !0, r.prototype.createEl.call(this, "li", z({
                    className: "vjs-menu-item",
                    innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                    tabIndex: -1
                }, t), i)
            }, n.prototype.handleClick = function (e) {
                this.selected(!0)
            }, n.prototype.selected = function (e) {
                this.selectable && (this.isSelected_ = e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), !1))
            }, n
        }(xi);
        gt.registerComponent("MenuItem", cr);
        var dr = function (u) {
            function l(e, t) {
                F(this, l);
                var i = t.track, r = e.textTracks();
                t.label = i.label || i.language || "Unknown", t.selected = "showing" === i.mode;
                var n = H(this, u.call(this, e, t));
                n.track = i;
                var o = function () {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    n.handleTracksChange.apply(n, t)
                }, a = function () {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    n.handleSelectedLanguageChange.apply(n, t)
                };
                if (e.on(["loadstart", "texttrackchange"], o), r.addEventListener("change", o), r.addEventListener("selectedlanguagechange", a), n.on("dispose", function () {
                    e.off(["loadstart", "texttrackchange"], o), r.removeEventListener("change", o), r.removeEventListener("selectedlanguagechange", a)
                }), void 0 === r.onchange) {
                    var s = void 0;
                    n.on(["tap", "click"], function () {
                        if ("object" !== B(f.Event)) try {
                            s = new f.Event("change")
                        } catch (e) {
                        }
                        s || (s = p.createEvent("Event")).initEvent("change", !0, !0), r.dispatchEvent(s)
                    })
                }
                return n.handleTracksChange(), n
            }

            return U(l, u), l.prototype.handleClick = function (e) {
                var t = this.track.kind, i = this.track.kinds, r = this.player_.textTracks();
                if (i || (i = [t]), u.prototype.handleClick.call(this, e), r) for (var n = 0; n < r.length; n++) {
                    var o = r[n];
                    o === this.track && -1 < i.indexOf(o.kind) ? "showing" !== o.mode && (o.mode = "showing") : "disabled" !== o.mode && (o.mode = "disabled")
                }
            }, l.prototype.handleTracksChange = function (e) {
                var t = "showing" === this.track.mode;
                t !== this.isSelected_ && this.selected(t)
            }, l.prototype.handleSelectedLanguageChange = function (e) {
                if ("showing" === this.track.mode) {
                    var t = this.player_.cache_.selectedLanguage;
                    if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
                    this.player_.cache_.selectedLanguage = {
                        enabled: !0,
                        language: this.track.language,
                        kind: this.track.kind
                    }
                }
            }, l.prototype.dispose = function () {
                this.track = null, u.prototype.dispose.call(this)
            }, l
        }(cr);
        gt.registerComponent("TextTrackMenuItem", dr);
        var hr = function (i) {
            function r(e, t) {
                return F(this, r), t.track = {
                    player: e,
                    kind: t.kind,
                    kinds: t.kinds,
                    default: !1,
                    mode: "disabled"
                }, t.kinds || (t.kinds = [t.kind]), t.label ? t.track.label = t.label : t.track.label = t.kinds.join(" and ") + " off", t.selectable = !0, t.multiSelectable = !1, H(this, i.call(this, e, t))
            }

            return U(r, i), r.prototype.handleTracksChange = function (e) {
                for (var t = this.player().textTracks(), i = !0, r = 0, n = t.length; r < n; r++) {
                    var o = t[r];
                    if (-1 < this.options_.kinds.indexOf(o.kind) && "showing" === o.mode) {
                        i = !1;
                        break
                    }
                }
                i !== this.isSelected_ && this.selected(i)
            }, r.prototype.handleSelectedLanguageChange = function (e) {
                for (var t = this.player().textTracks(), i = !0, r = 0, n = t.length; r < n; r++) {
                    var o = t[r];
                    if (-1 < ["captions", "descriptions", "subtitles"].indexOf(o.kind) && "showing" === o.mode) {
                        i = !1;
                        break
                    }
                }
                i && (this.player_.cache_.selectedLanguage = {enabled: !1})
            }, r
        }(dr);
        gt.registerComponent("OffTextTrackMenuItem", hr);
        var fr = function (i) {
            function r(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return F(this, r), t.tracks = e.textTracks(), H(this, i.call(this, e, t))
            }

            return U(r, i), r.prototype.createItems = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : dr, i = void 0;
                this.label_ && (i = this.label_ + " off"), e.push(new hr(this.player_, {
                    kinds: this.kinds_,
                    kind: this.kind_,
                    label: i
                })), this.hideThreshold_ += 1;
                var r = this.player_.textTracks();
                Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
                for (var n = 0; n < r.length; n++) {
                    var o = r[n];
                    if (-1 < this.kinds_.indexOf(o.kind)) {
                        var a = new t(this.player_, {track: o, selectable: !0, multiSelectable: !1});
                        a.addClass("vjs-" + o.kind + "-menu-item"), e.push(a)
                    }
                }
                return e
            }, r
        }(lr);
        gt.registerComponent("TextTrackButton", fr);
        var pr = function (a) {
            function s(e, t) {
                F(this, s);
                var i = t.track, r = t.cue, n = e.currentTime();
                t.selectable = !0, t.multiSelectable = !1, t.label = r.text, t.selected = r.startTime <= n && n < r.endTime;
                var o = H(this, a.call(this, e, t));
                return o.track = i, o.cue = r, i.addEventListener("cuechange", rt(o, o.update)), o
            }

            return U(s, a), s.prototype.handleClick = function (e) {
                a.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
            }, s.prototype.update = function (e) {
                var t = this.cue, i = this.player_.currentTime();
                this.selected(t.startTime <= i && i < t.endTime)
            }, s
        }(cr);
        gt.registerComponent("ChaptersTrackMenuItem", pr);
        var mr = function (r) {
            function n(e, t, i) {
                return F(this, n), H(this, r.call(this, e, t, i))
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-chapters-button " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.buildWrapperCSSClass = function () {
                return "vjs-chapters-button " + r.prototype.buildWrapperCSSClass.call(this)
            }, n.prototype.update = function (e) {
                this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), r.prototype.update.call(this)
            }, n.prototype.setTrack = function (e) {
                if (this.track_ !== e) {
                    if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                        var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                        t && t.removeEventListener("load", this.updateHandler_), this.track_ = null
                    }
                    if (this.track_ = e, this.track_) {
                        this.track_.mode = "hidden";
                        var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                        i && i.addEventListener("load", this.updateHandler_)
                    }
                }
            }, n.prototype.findChaptersTrack = function () {
                for (var e = this.player_.textTracks() || [], t = e.length - 1; 0 <= t; t--) {
                    var i = e[t];
                    if (i.kind === this.kind_) return i
                }
            }, n.prototype.getMenuCaption = function () {
                return this.track_ && this.track_.label ? this.track_.label : this.localize(yt(this.kind_))
            }, n.prototype.createMenu = function () {
                return this.options_.title = this.getMenuCaption(), r.prototype.createMenu.call(this)
            }, n.prototype.createItems = function () {
                var e = [];
                if (!this.track_) return e;
                var t = this.track_.cues;
                if (!t) return e;
                for (var i = 0, r = t.length; i < r; i++) {
                    var n = t[i], o = new pr(this.player_, {track: this.track_, cue: n});
                    e.push(o)
                }
                return e
            }, n
        }(fr);
        mr.prototype.kind_ = "chapters", mr.prototype.controlText_ = "Chapters", gt.registerComponent("ChaptersButton", mr);
        var vr = function (a) {
            function s(e, t, i) {
                F(this, s);
                var r = H(this, a.call(this, e, t, i)), n = e.textTracks(), o = rt(r, r.handleTracksChange);
                return n.addEventListener("change", o), r.on("dispose", function () {
                    n.removeEventListener("change", o)
                }), r
            }

            return U(s, a), s.prototype.handleTracksChange = function (e) {
                for (var t = this.player().textTracks(), i = !1, r = 0, n = t.length; r < n; r++) {
                    var o = t[r];
                    if (o.kind !== this.kind_ && "showing" === o.mode) {
                        i = !0;
                        break
                    }
                }
                i ? this.disable() : this.enable()
            }, s.prototype.buildCSSClass = function () {
                return "vjs-descriptions-button " + a.prototype.buildCSSClass.call(this)
            }, s.prototype.buildWrapperCSSClass = function () {
                return "vjs-descriptions-button " + a.prototype.buildWrapperCSSClass.call(this)
            }, s
        }(fr);
        vr.prototype.kind_ = "descriptions", vr.prototype.controlText_ = "Descriptions", gt.registerComponent("DescriptionsButton", vr);
        var yr = function (r) {
            function n(e, t, i) {
                return F(this, n), H(this, r.call(this, e, t, i))
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-subtitles-button " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.buildWrapperCSSClass = function () {
                return "vjs-subtitles-button " + r.prototype.buildWrapperCSSClass.call(this)
            }, n
        }(fr);
        yr.prototype.kind_ = "subtitles", yr.prototype.controlText_ = "Subtitles", gt.registerComponent("SubtitlesButton", yr);
        var _r = function (r) {
            function n(e, t) {
                F(this, n), t.track = {
                    player: e,
                    kind: t.kind,
                    label: t.kind + " settings",
                    selectable: !1,
                    default: !1,
                    mode: "disabled"
                }, t.selectable = !1, t.name = "CaptionSettingsMenuItem";
                var i = H(this, r.call(this, e, t));
                return i.addClass("vjs-texttrack-settings"), i.controlText(", opens " + t.kind + " settings dialog"), i
            }

            return U(n, r), n.prototype.handleClick = function (e) {
                this.player().getChild("textTrackSettings").open()
            }, n
        }(dr);
        gt.registerComponent("CaptionSettingsMenuItem", _r);
        var gr = function (r) {
            function n(e, t, i) {
                return F(this, n), H(this, r.call(this, e, t, i))
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-captions-button " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.buildWrapperCSSClass = function () {
                return "vjs-captions-button " + r.prototype.buildWrapperCSSClass.call(this)
            }, n.prototype.createItems = function () {
                var e = [];
                return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new _r(this.player_, {kind: this.kind_})), this.hideThreshold_ += 1), r.prototype.createItems.call(this, e)
            }, n
        }(fr);
        gr.prototype.kind_ = "captions", gr.prototype.controlText_ = "Captions", gt.registerComponent("CaptionsButton", gr);
        var br = function (n) {
            function e() {
                return F(this, e), H(this, n.apply(this, arguments))
            }

            return U(e, n), e.prototype.createEl = function (e, t, i) {
                var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                return "captions" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), r += "</span>", n.prototype.createEl.call(this, e, z({innerHTML: r}, t), i)
            }, e
        }(dr);
        gt.registerComponent("SubsCapsMenuItem", br);
        var Tr = function (r) {
            function n(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.label_ = "subtitles", -1 < ["en", "en-us", "en-ca", "fr-ca"].indexOf(i.player_.language_) && (i.label_ = "captions"), i.menuButton_.controlText(yt(i.label_)), i
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-subs-caps-button " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.buildWrapperCSSClass = function () {
                return "vjs-subs-caps-button " + r.prototype.buildWrapperCSSClass.call(this)
            }, n.prototype.createItems = function () {
                var e = [];
                return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new _r(this.player_, {kind: this.label_})), this.hideThreshold_ += 1), e = r.prototype.createItems.call(this, e, br)
            }, n
        }(fr);
        Tr.prototype.kinds_ = ["captions", "subtitles"], Tr.prototype.controlText_ = "Subtitles", gt.registerComponent("SubsCapsButton", Tr);
        var Sr = function (a) {
            function s(e, t) {
                F(this, s);
                var i = t.track, r = e.audioTracks();
                t.label = i.label || i.language || "Unknown", t.selected = i.enabled;
                var n = H(this, a.call(this, e, t));
                n.track = i, n.addClass("vjs-" + i.kind + "-menu-item");
                var o = function () {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    n.handleTracksChange.apply(n, t)
                };
                return r.addEventListener("change", o), n.on("dispose", function () {
                    r.removeEventListener("change", o)
                }), n
            }

            return U(s, a), s.prototype.createEl = function (e, t, i) {
                var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                return "main-desc" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), r += "</span>", a.prototype.createEl.call(this, e, z({innerHTML: r}, t), i)
            }, s.prototype.handleClick = function (e) {
                var t = this.player_.audioTracks();
                a.prototype.handleClick.call(this, e);
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enabled = r === this.track
                }
            }, s.prototype.handleTracksChange = function (e) {
                this.selected(this.track.enabled)
            }, s
        }(cr);
        gt.registerComponent("AudioTrackMenuItem", Sr);
        var wr = function (i) {
            function r(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return F(this, r), t.tracks = e.audioTracks(), H(this, i.call(this, e, t))
            }

            return U(r, i), r.prototype.buildCSSClass = function () {
                return "vjs-audio-button " + i.prototype.buildCSSClass.call(this)
            }, r.prototype.buildWrapperCSSClass = function () {
                return "vjs-audio-button " + i.prototype.buildWrapperCSSClass.call(this)
            }, r.prototype.createItems = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                this.hideThreshold_ = 1;
                for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
                    var r = t[i];
                    e.push(new Sr(this.player_, {track: r, selectable: !0, multiSelectable: !1}))
                }
                return e
            }, r
        }(lr);
        wr.prototype.controlText_ = "Audio Track", gt.registerComponent("AudioTrackButton", wr);
        var kr = function (o) {
            function a(e, t) {
                F(this, a);
                var i = t.rate, r = parseFloat(i, 10);
                t.label = i, t.selected = 1 === r, t.selectable = !0, t.multiSelectable = !1;
                var n = H(this, o.call(this, e, t));
                return n.label = i, n.rate = r, n.on(e, "ratechange", n.update), n
            }

            return U(a, o), a.prototype.handleClick = function (e) {
                o.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
            }, a.prototype.update = function (e) {
                this.selected(this.player().playbackRate() === this.rate)
            }, a
        }(cr);
        kr.prototype.contentElType = "button", gt.registerComponent("PlaybackRateMenuItem", kr);
        var Er = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.updateVisibility(), i.updateLabel(), i.on(e, "loadstart", i.updateVisibility), i.on(e, "ratechange", i.updateLabel), i
            }

            return U(n, r), n.prototype.createEl = function () {
                var e = r.prototype.createEl.call(this);
                return this.labelEl_ = ue("div", {
                    className: "vjs-playback-rate-value",
                    innerHTML: "1x"
                }), e.appendChild(this.labelEl_), e
            }, n.prototype.dispose = function () {
                this.labelEl_ = null, r.prototype.dispose.call(this)
            }, n.prototype.buildCSSClass = function () {
                return "vjs-playback-rate " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.buildWrapperCSSClass = function () {
                return "vjs-playback-rate " + r.prototype.buildWrapperCSSClass.call(this)
            }, n.prototype.createMenu = function () {
                var e = new sr(this.player()), t = this.playbackRates();
                if (t) for (var i = t.length - 1; 0 <= i; i--) e.addChild(new kr(this.player(), {rate: t[i] + "x"}));
                return e
            }, n.prototype.updateARIAAttributes = function () {
                this.el().setAttribute("aria-valuenow", this.player().playbackRate())
            }, n.prototype.handleClick = function (e) {
                for (var t = this.player().playbackRate(), i = this.playbackRates(), r = i[0], n = 0; n < i.length; n++) if (i[n] > t) {
                    r = i[n];
                    break
                }
                this.player().playbackRate(r)
            }, n.prototype.playbackRates = function () {
                return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
            }, n.prototype.playbackRateSupported = function () {
                return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length
            }, n.prototype.updateVisibility = function (e) {
                this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
            }, n.prototype.updateLabel = function (e) {
                this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
            }, n
        }(ur);
        Er.prototype.controlText_ = "Playback Rate", gt.registerComponent("PlaybackRateMenuButton", Er);
        var Cr = function (e) {
            function t() {
                return F(this, t), H(this, e.apply(this, arguments))
            }

            return U(t, e), t.prototype.buildCSSClass = function () {
                return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
            }, t.prototype.createEl = function () {
                return e.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
            }, t
        }(gt);
        gt.registerComponent("Spacer", Cr);
        var xr = function (t) {
            function e() {
                return F(this, e), H(this, t.apply(this, arguments))
            }

            return U(e, t), e.prototype.buildCSSClass = function () {
                return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.createEl = function () {
                var e = t.prototype.createEl.call(this, {className: this.buildCSSClass()});
                return e.innerHTML = " ", e
            }, e
        }(Cr);
        gt.registerComponent("CustomControlSpacer", xr);
        var jr = function (e) {
            function t() {
                return F(this, t), H(this, e.apply(this, arguments))
            }

            return U(t, e), t.prototype.createEl = function () {
                return e.prototype.createEl.call(this, "div", {className: "vjs-control-bar", dir: "ltr"})
            }, t
        }(gt);
        jr.prototype.options_ = {children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]}, gt.registerComponent("ControlBar", jr);
        var Or = function (r) {
            function n(e, t) {
                F(this, n);
                var i = H(this, r.call(this, e, t));
                return i.on(e, "error", i.open), i
            }

            return U(n, r), n.prototype.buildCSSClass = function () {
                return "vjs-error-display " + r.prototype.buildCSSClass.call(this)
            }, n.prototype.content = function () {
                var e = this.player().error();
                return e ? this.localize(e.message) : ""
            }, n
        }(Bt);
        Or.prototype.options_ = _t(Bt.prototype.options_, {
            pauseOnOpen: !1,
            fillAlways: !0,
            temporary: !1,
            uncloseable: !0
        }), gt.registerComponent("ErrorDisplay", Or);
        var Pr = "vjs-text-track-settings", Ar = ["#000", "Black"], Lr = ["#00F", "Blue"], Mr = ["#0FF", "Cyan"],
            Ir = ["#0F0", "Green"], Dr = ["#F0F", "Magenta"], Rr = ["#F00", "Red"], Nr = ["#FFF", "White"],
            Br = ["#FF0", "Yellow"], Fr = ["1", "Opaque"], Ur = ["0.5", "Semi-Transparent"], Hr = ["0", "Transparent"],
            qr = {
                backgroundColor: {
                    selector: ".vjs-bg-color > select",
                    id: "captions-background-color-%s",
                    label: "Color",
                    options: [Ar, Nr, Rr, Ir, Lr, Br, Dr, Mr]
                },
                backgroundOpacity: {
                    selector: ".vjs-bg-opacity > select",
                    id: "captions-background-opacity-%s",
                    label: "Transparency",
                    options: [Fr, Ur, Hr]
                },
                color: {
                    selector: ".vjs-fg-color > select",
                    id: "captions-foreground-color-%s",
                    label: "Color",
                    options: [Nr, Ar, Rr, Ir, Lr, Br, Dr, Mr]
                },
                edgeStyle: {
                    selector: ".vjs-edge-style > select",
                    id: "%s",
                    label: "Text Edge Style",
                    options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
                },
                fontFamily: {
                    selector: ".vjs-font-family > select",
                    id: "captions-font-family-%s",
                    label: "Font Family",
                    options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
                },
                fontPercent: {
                    selector: ".vjs-font-percent > select",
                    id: "captions-font-size-%s",
                    label: "Font Size",
                    options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
                    default: 2,
                    parser: function (e) {
                        return "1.00" === e ? null : Number(e)
                    }
                },
                textOpacity: {
                    selector: ".vjs-text-opacity > select",
                    id: "captions-foreground-opacity-%s",
                    label: "Transparency",
                    options: [Fr, Ur]
                },
                windowColor: {selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color"},
                windowOpacity: {
                    selector: ".vjs-window-opacity > select",
                    id: "captions-window-opacity-%s",
                    label: "Transparency",
                    options: [Hr, Ur, Fr]
                }
            };

        function Vr(e, t) {
            if (t && (e = t(e)), e && "none" !== e) return e
        }

        qr.windowColor.options = qr.backgroundColor.options;
        var Wr = function (r) {
            function n(e, t) {
                F(this, n), t.temporary = !1;
                var i = H(this, r.call(this, e, t));
                return i.updateDisplay = rt(i, i.updateDisplay), i.fill(), i.hasBeenOpened_ = i.hasBeenFilled_ = !0, i.endDialog = ue("p", {
                    className: "vjs-control-text",
                    textContent: i.localize("End of dialog window.")
                }), i.el().appendChild(i.endDialog), i.setDefaults(), void 0 === t.persistTextTrackSettings && (i.options_.persistTextTrackSettings = i.options_.playerOptions.persistTextTrackSettings), i.on(i.$(".vjs-done-button"), "click", function () {
                    i.saveSettings(), i.close()
                }), i.on(i.$(".vjs-default-button"), "click", function () {
                    i.setDefaults(), i.updateDisplay()
                }), G(qr, function (e) {
                    i.on(i.$(e.selector), "change", i.updateDisplay)
                }), i.options_.persistTextTrackSettings && i.restoreSettings(), i
            }

            return U(n, r), n.prototype.dispose = function () {
                this.endDialog = null, r.prototype.dispose.call(this)
            }, n.prototype.createElSelect_ = function (e) {
                var i = this, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "label", n = qr[e],
                    o = n.id.replace("%s", this.id_), a = [t, o].join(" ").trim();
                return ["<" + r + ' id="' + o + '" class="' + ("label" === r ? "vjs-label" : "") + '">', this.localize(n.label), "</" + r + ">", '<select aria-labelledby="' + a + '">'].concat(n.options.map(function (e) {
                    var t = o + "-" + e[1].replace(/\W+/g, "");
                    return ['<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + a + " " + t + '">', i.localize(e[1]), "</option>"].join("")
                })).concat("</select>").join("")
            }, n.prototype.createElFgColor_ = function () {
                var e = "captions-text-legend-" + this.id_;
                return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
            }, n.prototype.createElBgColor_ = function () {
                var e = "captions-background-" + this.id_;
                return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
            }, n.prototype.createElWinColor_ = function () {
                var e = "captions-window-" + this.id_;
                return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
            }, n.prototype.createElColors_ = function () {
                return ue("div", {
                    className: "vjs-track-settings-colors",
                    innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
                })
            }, n.prototype.createElFont_ = function () {
                return ue("div", {
                    className: "vjs-track-settings-font",
                    innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
                })
            }, n.prototype.createElControls_ = function () {
                var e = this.localize("restore all settings to the default values");
                return ue("div", {
                    className: "vjs-track-settings-controls",
                    innerHTML: ['<button class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
                })
            }, n.prototype.content = function () {
                return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
            }, n.prototype.label = function () {
                return this.localize("Caption Settings Dialog")
            }, n.prototype.description = function () {
                return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
            }, n.prototype.buildCSSClass = function () {
                return r.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
            }, n.prototype.getValues = function () {
                var a = this;
                return function (i, r) {
                    var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                    return W(i).reduce(function (e, t) {
                        return r(e, i[t], t)
                    }, e)
                }(qr, function (e, t, i) {
                    var r, n, o = (r = a.$(t.selector), n = t.parser, Vr(r.options[r.options.selectedIndex].value, n));
                    return void 0 !== o && (e[i] = o), e
                }, {})
            }, n.prototype.setValues = function (i) {
                var r = this;
                G(qr, function (e, t) {
                    !function (e, t, i) {
                        if (t) for (var r = 0; r < e.options.length; r++) if (Vr(e.options[r].value, i) === t) {
                            e.selectedIndex = r;
                            break
                        }
                    }(r.$(e.selector), i[t], e.parser)
                })
            }, n.prototype.setDefaults = function () {
                var i = this;
                G(qr, function (e) {
                    var t = e.hasOwnProperty("default") ? e.default : 0;
                    i.$(e.selector).selectedIndex = t
                })
            }, n.prototype.restoreSettings = function () {
                var e = void 0;
                try {
                    e = JSON.parse(f.localStorage.getItem(Pr))
                } catch (e) {
                    Z.warn(e)
                }
                e && this.setValues(e)
            }, n.prototype.saveSettings = function () {
                if (this.options_.persistTextTrackSettings) {
                    var e = this.getValues();
                    try {
                        Object.keys(e).length ? f.localStorage.setItem(Pr, JSON.stringify(e)) : f.localStorage.removeItem(Pr)
                    } catch (e) {
                        Z.warn(e)
                    }
                }
            }, n.prototype.updateDisplay = function () {
                var e = this.player_.getChild("textTrackDisplay");
                e && e.updateDisplay()
            }, n.prototype.conditionalBlur_ = function () {
                this.previouslyActiveEl_ = null, this.off(p, "keydown", this.handleKeyDown);
                var e = this.player_.controlBar, t = e && e.subsCapsButton, i = e && e.captionsButton;
                t ? t.focus() : i && i.focus()
            }, n
        }(Bt);
        gt.registerComponent("TextTrackSettings", Wr);
        var Gr = function (o) {
            function a(e, t) {
                F(this, a);
                var i = t.ResizeObserver || f.ResizeObserver;
                null === t.ResizeObserver && (i = !1);
                var r = _t({createEl: !i}, t), n = H(this, o.call(this, e, r));
                return n.ResizeObserver = t.ResizeObserver || f.ResizeObserver, n.loadListener_ = null, n.resizeObserver_ = null, n.debouncedHandler_ = function (r, n, o) {
                    var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : f, s = void 0;
                    return function () {
                        var e = this, t = arguments, i = function () {
                            i = s = null, o || r.apply(e, t)
                        };
                        !s && o && r.apply(e, t), a.clearTimeout(s), s = a.setTimeout(i, n)
                    }
                }(function () {
                    n.resizeHandler()
                }, 100, !1, e), i ? (n.resizeObserver_ = new n.ResizeObserver(n.debouncedHandler_), n.resizeObserver_.observe(e.el())) : (n.loadListener_ = function () {
                    n.el_.contentWindow && ze(n.el_.contentWindow, "resize", n.debouncedHandler_), n.off("load", n.loadListener_)
                }, n.on("load", n.loadListener_)), n
            }

            return U(a, o), a.prototype.createEl = function () {
                return o.prototype.createEl.call(this, "iframe", {className: "vjs-resize-manager"})
            }, a.prototype.resizeHandler = function () {
                this.player_.trigger("playerresize")
            }, a.prototype.dispose = function () {
                this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.el_ && this.el_.contentWindow && Xe(this.el_.contentWindow, "resize", this.debouncedHandler_), this.loadListener_ && this.off("load", this.loadListener_), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null
            }, a
        }(gt);
        gt.registerComponent("ResizeManager", Gr);
        var zr = function (e) {
            var t = e.el();
            if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0;
            var i = e.$$("source"), r = [], n = "";
            if (!i.length) return !1;
            for (var o = 0; o < i.length; o++) {
                var a = i[o].src;
                a && -1 === r.indexOf(a) && r.push(a)
            }
            return !!r.length && (1 === r.length && (n = r[0]), e.triggerSourceset(n), !0)
        }, Xr = {};
        A || (Xr = Object.defineProperty({}, "innerHTML", {
            get: function () {
                return this.cloneNode(!0).innerHTML
            }, set: function (e) {
                var t = p.createElement(this.nodeName.toLowerCase());
                t.innerHTML = e;
                for (var i = p.createDocumentFragment(); t.childNodes.length;) i.appendChild(t.childNodes[0]);
                return this.innerText = "", f.Element.prototype.appendChild.call(this, i), this.innerHTML
            }
        }));
        var $r = function (e, t) {
            for (var i = {}, r = 0; r < e.length && !((i = Object.getOwnPropertyDescriptor(e[r], t)) && i.set && i.get); r++) ;
            return i.enumerable = !0, i.configurable = !0, i
        }, Kr = function (o) {
            var a = o.el();
            if (!a.resetSourceWatch_) {
                var t = {}, e = $r([o.el(), f.HTMLMediaElement.prototype, f.Element.prototype, Xr], "innerHTML"),
                    i = function (n) {
                        return function () {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            var r = n.apply(a, t);
                            return zr(o), r
                        }
                    };
                ["append", "appendChild", "insertAdjacentHTML"].forEach(function (e) {
                    a[e] && (t[e] = a[e], a[e] = i(t[e]))
                }), Object.defineProperty(a, "innerHTML", _t(e, {set: i(e.set)})), a.resetSourceWatch_ = function () {
                    a.resetSourceWatch_ = null, Object.keys(t).forEach(function (e) {
                        a[e] = t[e]
                    }), Object.defineProperty(a, "innerHTML", e)
                }, o.one("sourceset", a.resetSourceWatch_)
            }
        }, Yr = {};
        A || (Yr = Object.defineProperty({}, "src", {
            get: function () {
                return this.hasAttribute("src") ? ei(f.Element.prototype.getAttribute.call(this, "src")) : ""
            }, set: function (e) {
                return f.Element.prototype.setAttribute.call(this, "src", e), e
            }
        }));
        var Jr = function (r) {
                if (r.featuresSourceset) {
                    var n = r.el();
                    if (!n.resetSourceset_) {
                        var i = $r([r.el(), f.HTMLMediaElement.prototype, Yr], "src"), o = n.setAttribute, t = n.load;
                        Object.defineProperty(n, "src", _t(i, {
                            set: function (e) {
                                var t = i.set.call(n, e);
                                return r.triggerSourceset(n.src), t
                            }
                        })), n.setAttribute = function (e, t) {
                            var i = o.call(n, e, t);
                            return /src/i.test(e) && r.triggerSourceset(n.src), i
                        }, n.load = function () {
                            var e = t.call(n);
                            return zr(r) || (r.triggerSourceset(""), Kr(r)), e
                        }, n.currentSrc ? r.triggerSourceset(n.currentSrc) : zr(r) || Kr(r), n.resetSourceset_ = function () {
                            n.resetSourceset_ = null, n.load = t, n.setAttribute = o, Object.defineProperty(n, "src", i), n.resetSourceWatch_ && n.resetSourceWatch_()
                        }
                    }
                }
            },
            Qr = q(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
            Zr = function (c) {
                function d(e, t) {
                    F(this, d);
                    var i = H(this, c.call(this, e, t)), r = e.source, n = !1;
                    if (r && (i.el_.currentSrc !== r.src || e.tag && 3 === e.tag.initNetworkState_) ? i.setSource(r) : i.handleLateInit_(i.el_), e.enableSourceset && i.setupSourcesetHandling_(), i.el_.hasChildNodes()) {
                        for (var o = i.el_.childNodes, a = o.length, s = []; a--;) {
                            var u = o[a];
                            "track" === u.nodeName.toLowerCase() && (i.featuresNativeTextTracks ? (i.remoteTextTrackEls().addTrackElement_(u), i.remoteTextTracks().addTrack(u.track), i.textTracks().addTrack(u.track), n || i.el_.hasAttribute("crossorigin") || !ii(u.src) || (n = !0)) : s.push(u))
                        }
                        for (var l = 0; l < s.length; l++) i.el_.removeChild(s[l])
                    }
                    return i.proxyNativeTracks_(), i.featuresNativeTextTracks && n && Z.warn(h(Qr)), i.restoreMetadataTracksInIOSNativePlayer_(), (D || g || C) && !0 === e.nativeControlsForTouch && i.setControls(!0), i.proxyWebkitFullscreen_(), i.triggerReady(), i
                }

                return U(d, c), d.prototype.dispose = function () {
                    this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), d.disposeMediaElement(this.el_), this.options_ = null, c.prototype.dispose.call(this)
                }, d.prototype.setupSourcesetHandling_ = function () {
                    Jr(this)
                }, d.prototype.restoreMetadataTracksInIOSNativePlayer_ = function () {
                    var r = this.textTracks(), n = void 0, e = function () {
                        n = [];
                        for (var e = 0; e < r.length; e++) {
                            var t = r[e];
                            "metadata" === t.kind && n.push({track: t, storedMode: t.mode})
                        }
                    };
                    e(), r.addEventListener("change", e), this.on("dispose", function () {
                        return r.removeEventListener("change", e)
                    });
                    var t = function e() {
                        for (var t = 0; t < n.length; t++) {
                            var i = n[t];
                            "disabled" === i.track.mode && i.track.mode !== i.storedMode && (i.track.mode = i.storedMode)
                        }
                        r.removeEventListener("change", e)
                    };
                    this.on("webkitbeginfullscreen", function () {
                        r.removeEventListener("change", e), r.removeEventListener("change", t), r.addEventListener("change", t)
                    }), this.on("webkitendfullscreen", function () {
                        r.removeEventListener("change", e), r.addEventListener("change", e), r.removeEventListener("change", t)
                    })
                }, d.prototype.proxyNativeTracks_ = function () {
                    var a = this;
                    li.names.forEach(function (e) {
                        var t = li[e], n = a.el()[t.getterName], o = a[t.getterName]();
                        if (a["featuresNative" + t.capitalName + "Tracks"] && n && n.addEventListener) {
                            var r = {
                                change: function (e) {
                                    o.trigger({type: "change", target: o, currentTarget: o, srcElement: o})
                                }, addtrack: function (e) {
                                    o.addTrack(e.track)
                                }, removetrack: function (e) {
                                    o.removeTrack(e.track)
                                }
                            }, i = function () {
                                for (var e = [], t = 0; t < o.length; t++) {
                                    for (var i = !1, r = 0; r < n.length; r++) if (n[r] === o[t]) {
                                        i = !0;
                                        break
                                    }
                                    i || e.push(o[t])
                                }
                                for (; e.length;) o.removeTrack(e.shift())
                            };
                            Object.keys(r).forEach(function (t) {
                                var i = r[t];
                                n.addEventListener(t, i), a.on("dispose", function (e) {
                                    return n.removeEventListener(t, i)
                                })
                            }), a.on("loadstart", i), a.on("dispose", function (e) {
                                return a.off("loadstart", i)
                            })
                        }
                    })
                }, d.prototype.createEl = function () {
                    var e = this.options_.tag;
                    if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                        if (e) {
                            var t = e.cloneNode(!0);
                            e.parentNode && e.parentNode.insertBefore(t, e), d.disposeMediaElement(e), e = t
                        } else {
                            e = p.createElement("video");
                            var i = _t({}, this.options_.tag && ve(this.options_.tag));
                            D && !0 === this.options_.nativeControlsForTouch || delete i.controls, me(e, z(i, {
                                id: this.options_.techId,
                                class: "vjs-tech"
                            }))
                        }
                        e.playerId = this.options_.playerId
                    }
                    void 0 !== this.options_.preload && _e(e, "preload", this.options_.preload);
                    for (var r = ["loop", "muted", "playsinline", "autoplay"], n = 0; n < r.length; n++) {
                        var o = r[n], a = this.options_[o];
                        void 0 !== a && (a ? _e(e, o, o) : ge(e, o), e[o] = a)
                    }
                    return e
                }, d.prototype.handleLateInit_ = function (e) {
                    if (0 !== e.networkState && 3 !== e.networkState) {
                        if (0 === e.readyState) {
                            var t = !1, i = function () {
                                t = !0
                            };
                            this.on("loadstart", i);
                            var r = function () {
                                t || this.trigger("loadstart")
                            };
                            return this.on("loadedmetadata", r), void this.ready(function () {
                                this.off("loadstart", i), this.off("loadedmetadata", r), t || this.trigger("loadstart")
                            })
                        }
                        var n = ["loadstart"];
                        n.push("loadedmetadata"), 2 <= e.readyState && n.push("loadeddata"), 3 <= e.readyState && n.push("canplay"), 4 <= e.readyState && n.push("canplaythrough"), this.ready(function () {
                            n.forEach(function (e) {
                                this.trigger(e)
                            }, this)
                        })
                    }
                }, d.prototype.setCurrentTime = function (e) {
                    try {
                        this.el_.currentTime = e
                    } catch (e) {
                        Z(e, "Video is not ready. (Video.js)")
                    }
                }, d.prototype.duration = function () {
                    var t = this;
                    if (this.el_.duration === 1 / 0 && w && O && 0 === this.el_.currentTime) {
                        return this.on("timeupdate", function e() {
                            0 < t.el_.currentTime && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
                        }), NaN
                    }
                    return this.el_.duration || NaN
                }, d.prototype.width = function () {
                    return this.el_.offsetWidth
                }, d.prototype.height = function () {
                    return this.el_.offsetHeight
                }, d.prototype.proxyWebkitFullscreen_ = function () {
                    var e = this;
                    if ("webkitDisplayingFullscreen" in this.el_) {
                        var t = function () {
                            this.trigger("fullscreenchange", {isFullscreen: !1})
                        }, i = function () {
                            "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {isFullscreen: !0}))
                        };
                        this.on("webkitbeginfullscreen", i), this.on("dispose", function () {
                            e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t)
                        })
                    }
                }, d.prototype.supportsFullScreen = function () {
                    if ("function" == typeof this.el_.webkitEnterFullScreen) {
                        var e = f.navigator && f.navigator.userAgent || "";
                        if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0
                    }
                    return !1
                }, d.prototype.enterFullScreen = function () {
                    var e = this.el_;
                    e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                        e.pause(), e.webkitEnterFullScreen()
                    }, 0)) : e.webkitEnterFullScreen()
                }, d.prototype.exitFullScreen = function () {
                    this.el_.webkitExitFullScreen()
                }, d.prototype.src = function (e) {
                    if (void 0 === e) return this.el_.src;
                    this.setSrc(e)
                }, d.prototype.reset = function () {
                    d.resetMediaElement(this.el_)
                }, d.prototype.currentSrc = function () {
                    return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                }, d.prototype.setControls = function (e) {
                    this.el_.controls = !!e
                }, d.prototype.addTextTrack = function (e, t, i) {
                    return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, i) : c.prototype.addTextTrack.call(this, e, t, i)
                }, d.prototype.createRemoteTextTrack = function (e) {
                    if (!this.featuresNativeTextTracks) return c.prototype.createRemoteTextTrack.call(this, e);
                    var t = p.createElement("track");
                    return e.kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.default && (t.default = e.default), e.id && (t.id = e.id), e.src && (t.src = e.src), t
                }, d.prototype.addRemoteTextTrack = function (e, t) {
                    var i = c.prototype.addRemoteTextTrack.call(this, e, t);
                    return this.featuresNativeTextTracks && this.el().appendChild(i), i
                }, d.prototype.removeRemoteTextTrack = function (e) {
                    if (c.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) for (var t = this.$$("track"), i = t.length; i--;) e !== t[i] && e !== t[i].track || this.el().removeChild(t[i])
                }, d.prototype.getVideoPlaybackQuality = function () {
                    if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                    var e = {};
                    return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), f.performance && "function" == typeof f.performance.now ? e.creationTime = f.performance.now() : f.performance && f.performance.timing && "number" == typeof f.performance.timing.navigationStart && (e.creationTime = f.Date.now() - f.performance.timing.navigationStart), e
                }, d
            }(hi);
        if (ne()) {
            Zr.TEST_VID = p.createElement("video");
            var en = p.createElement("track");
            en.kind = "captions", en.srclang = "en", en.label = "English", Zr.TEST_VID.appendChild(en)
        }
        Zr.isSupported = function () {
            try {
                Zr.TEST_VID.volume = .5
            } catch (e) {
                return !1
            }
            return !(!Zr.TEST_VID || !Zr.TEST_VID.canPlayType)
        }, Zr.canPlayType = function (e) {
            return Zr.TEST_VID.canPlayType(e)
        }, Zr.canPlaySource = function (e, t) {
            return Zr.canPlayType(e.type)
        }, Zr.canControlVolume = function () {
            try {
                var e = Zr.TEST_VID.volume;
                return Zr.TEST_VID.volume = e / 2 + .1, e !== Zr.TEST_VID.volume
            } catch (e) {
                return !1
            }
        }, Zr.canMuteVolume = function () {
            try {
                var e = Zr.TEST_VID.muted;
                return Zr.TEST_VID.muted = !e, Zr.TEST_VID.muted ? _e(Zr.TEST_VID, "muted", "muted") : ge(Zr.TEST_VID, "muted"), e !== Zr.TEST_VID.muted
            } catch (e) {
                return !1
            }
        }, Zr.canControlPlaybackRate = function () {
            if (w && O && P < 58) return !1;
            try {
                var e = Zr.TEST_VID.playbackRate;
                return Zr.TEST_VID.playbackRate = e / 2 + .1, e !== Zr.TEST_VID.playbackRate
            } catch (e) {
                return !1
            }
        }, Zr.canOverrideAttributes = function () {
            if (A) return !1;
            try {
                var e = function () {
                };
                Object.defineProperty(p.createElement("video"), "src", {
                    get: e,
                    set: e
                }), Object.defineProperty(p.createElement("audio"), "src", {
                    get: e,
                    set: e
                }), Object.defineProperty(p.createElement("video"), "innerHTML", {
                    get: e,
                    set: e
                }), Object.defineProperty(p.createElement("audio"), "innerHTML", {get: e, set: e})
            } catch (e) {
                return !1
            }
            return !0
        }, Zr.supportsNativeTextTracks = function () {
            return I || T && O
        }, Zr.supportsNativeVideoTracks = function () {
            return !(!Zr.TEST_VID || !Zr.TEST_VID.videoTracks)
        }, Zr.supportsNativeAudioTracks = function () {
            return !(!Zr.TEST_VID || !Zr.TEST_VID.audioTracks)
        }, Zr.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], Zr.prototype.featuresVolumeControl = Zr.canControlVolume(), Zr.prototype.featuresMuteControl = Zr.canMuteVolume(), Zr.prototype.featuresPlaybackRate = Zr.canControlPlaybackRate(), Zr.prototype.featuresSourceset = Zr.canOverrideAttributes(), Zr.prototype.movingMediaElementInDOM = !T, Zr.prototype.featuresFullscreenResize = !0, Zr.prototype.featuresProgressEvents = !0, Zr.prototype.featuresTimeupdateEvents = !0, Zr.prototype.featuresNativeTextTracks = Zr.supportsNativeTextTracks(), Zr.prototype.featuresNativeVideoTracks = Zr.supportsNativeVideoTracks(), Zr.prototype.featuresNativeAudioTracks = Zr.supportsNativeAudioTracks();
        var tn = Zr.TEST_VID && Zr.TEST_VID.constructor.prototype.canPlayType,
            rn = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, nn = /^video\/mp4/i;
        Zr.patchCanPlayType = function () {
            4 <= k && !x && !O ? Zr.TEST_VID.constructor.prototype.canPlayType = function (e) {
                return e && rn.test(e) ? "maybe" : tn.call(this, e)
            } : E && (Zr.TEST_VID.constructor.prototype.canPlayType = function (e) {
                return e && nn.test(e) ? "maybe" : tn.call(this, e)
            })
        }, Zr.unpatchCanPlayType = function () {
            var e = Zr.TEST_VID.constructor.prototype.canPlayType;
            return Zr.TEST_VID.constructor.prototype.canPlayType = tn, e
        }, Zr.patchCanPlayType(), Zr.disposeMediaElement = function (e) {
            if (e) {
                for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
                e.removeAttribute("src"), "function" == typeof e.load && function () {
                    try {
                        e.load()
                    } catch (e) {
                    }
                }()
            }
        }, Zr.resetMediaElement = function (e) {
            if (e) {
                for (var t = e.querySelectorAll("source"), i = t.length; i--;) e.removeChild(t[i]);
                e.removeAttribute("src"), "function" == typeof e.load && function () {
                    try {
                        e.load()
                    } catch (e) {
                    }
                }()
            }
        }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (e) {
            Zr.prototype[e] = function () {
                return this.el_[e] || this.el_.hasAttribute(e)
            }
        }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (t) {
            Zr.prototype["set" + yt(t)] = function (e) {
                (this.el_[t] = e) ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
            }
        }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (e) {
            Zr.prototype[e] = function () {
                return this.el_[e]
            }
        }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function (t) {
            Zr.prototype["set" + yt(t)] = function (e) {
                this.el_[t] = e
            }
        }), ["pause", "load", "play"].forEach(function (e) {
            Zr.prototype[e] = function () {
                return this.el_[e]()
            }
        }), hi.withSourceHandlers(Zr), Zr.nativeSourceHandler = {}, Zr.nativeSourceHandler.canPlayType = function (e) {
            try {
                return Zr.TEST_VID.canPlayType(e)
            } catch (e) {
                return ""
            }
        }, Zr.nativeSourceHandler.canHandleSource = function (e, t) {
            if (e.type) return Zr.nativeSourceHandler.canPlayType(e.type);
            if (e.src) {
                var i = ti(e.src);
                return Zr.nativeSourceHandler.canPlayType("video/" + i)
            }
            return ""
        }, Zr.nativeSourceHandler.handleSource = function (e, t, i) {
            t.setSrc(e.src)
        }, Zr.nativeSourceHandler.dispose = function () {
        }, Zr.registerSourceHandler(Zr.nativeSourceHandler), hi.registerTech("Html5", Zr);
        var on = q(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
            an = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
            sn = {canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked"},
            un = function (c) {
                function d(e, t, i) {
                    if (F(this, d), e.id = e.id || t.id || "vjs_video_" + De(), (t = z(d.getTagSettings(e), t)).initChildren = !1, t.createEl = !1, t.evented = !1, t.reportTouchActivity = !1, !t.language) if ("function" == typeof e.closest) {
                        var r = e.closest("[lang]");
                        r && r.getAttribute && (t.language = r.getAttribute("lang"))
                    } else for (var n = e; n && 1 === n.nodeType;) {
                        if (ve(n).hasOwnProperty("lang")) {
                            t.language = n.getAttribute("lang");
                            break
                        }
                        n = n.parentNode
                    }
                    var o = H(this, c.call(this, null, t, i));
                    if (o.isPosterFromTech_ = !1, o.queuedCallbacks_ = [], o.isReady_ = !1, o.hasStarted_ = !1, o.userActive_ = !1, !o.options_ || !o.options_.techOrder || !o.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                    if (o.tag = e, o.tagAttributes = e && ve(e), o.language(o.options_.language), t.languages) {
                        var a = {};
                        Object.getOwnPropertyNames(t.languages).forEach(function (e) {
                            a[e.toLowerCase()] = t.languages[e]
                        }), o.languages_ = a
                    } else o.languages_ = d.prototype.options_.languages;
                    o.cache_ = {}, o.poster_ = t.poster || "", o.controls_ = !!t.controls, o.cache_.lastVolume = 1, e.controls = !1, e.removeAttribute("controls"), e.hasAttribute("autoplay") ? o.options_.autoplay = !0 : o.autoplay(o.options_.autoplay), o.scrubbing_ = !1, o.el_ = o.createEl(), o.cache_.lastPlaybackRate = o.defaultPlaybackRate(), pt(o, {eventBusKey: "el_"});
                    var s = _t(o.options_);
                    if (t.plugins) {
                        var u = t.plugins;
                        Object.keys(u).forEach(function (e) {
                            if ("function" != typeof this[e]) throw new Error('plugin "' + e + '" does not exist');
                            this[e](u[e])
                        }, o)
                    }
                    o.options_.playerOptions = s, o.middleware_ = [], o.initChildren(), o.isAudio("audio" === e.nodeName.toLowerCase()), o.controls() ? o.addClass("vjs-controls-enabled") : o.addClass("vjs-controls-disabled"), o.el_.setAttribute("role", "region"), o.isAudio() ? o.el_.setAttribute("aria-label", o.localize("Audio Player")) : o.el_.setAttribute("aria-label", o.localize("Video Player")), o.isAudio() && o.addClass("vjs-audio"), o.flexNotSupported_() && o.addClass("vjs-no-flex"), T || o.addClass("vjs-workinghover"), d.players[o.id_] = o;
                    var l = y.split(".")[0];
                    return o.addClass("vjs-v" + l), o.userActive(!0), o.reportUserActivity(), o.one("play", o.listenForUserActivity_), o.on("fullscreenchange", o.handleFullscreenChange_), o.on("stageclick", o.handleStageClick_), o.changingSrc_ = !1, o.playWaitingForReady_ = !1, o.playOnLoadstart_ = null, o
                }

                return U(d, c), d.prototype.dispose = function () {
                    this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), d.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), pi[this.id()] = null, c.prototype.dispose.call(this)
                }, d.prototype.createEl = function () {
                    var t = this.tag, i = void 0,
                        e = this.playerElIngest_ = t.parentNode && t.parentNode.hasAttribute && t.parentNode.hasAttribute("data-vjs-player"),
                        r = "video-js" === this.tag.tagName.toLowerCase();
                    e ? i = this.el_ = t.parentNode : r || (i = this.el_ = c.prototype.createEl.call(this, "div"));
                    var n = ve(t);
                    if (r) {
                        for (i = this.el_ = t, t = this.tag = p.createElement("video"); i.children.length;) t.appendChild(i.firstChild);
                        de(i, "video-js") || he(i, "video-js"), i.appendChild(t), e = this.playerElIngest_ = i, ["autoplay", "controls", "crossOrigin", "defaultMuted", "defaultPlaybackRate", "loop", "muted", "playbackRate", "src", "volume"].forEach(function (e) {
                            void 0 !== i[e] && (t[e] = i[e])
                        })
                    }
                    if (t.setAttribute("tabindex", "-1"), L && t.setAttribute("role", "application"), t.removeAttribute("width"), t.removeAttribute("height"), Object.getOwnPropertyNames(n).forEach(function (e) {
                        "class" === e ? (i.className += " " + n[e], r && (t.className += " " + n[e])) : (i.setAttribute(e, n[e]), r && t.setAttribute(e, n[e]))
                    }), t.playerId = t.id, t.id += "_html5_api", t.className = "vjs-tech", t.player = i.player = this, this.addClass("vjs-paused"), !0 !== f.VIDEOJS_NO_DYNAMIC_STYLE) {
                        this.styleEl_ = tt("vjs-styles-dimensions");
                        var o = Ae(".vjs-styles-defaults"), a = Ae("head");
                        a.insertBefore(this.styleEl_, o ? o.nextSibling : a.firstChild)
                    }
                    this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                    for (var s = t.getElementsByTagName("a"), u = 0; u < s.length; u++) {
                        var l = s.item(u);
                        he(l, "vjs-hidden"), l.setAttribute("hidden", "hidden")
                    }
                    return t.initNetworkState_ = t.networkState, t.parentNode && !e && t.parentNode.insertBefore(i, t), ce(t, i), this.children_.unshift(t), this.el_.setAttribute("lang", this.language_), this.el_ = i
                }, d.prototype.width = function (e) {
                    return this.dimension("width", e)
                }, d.prototype.height = function (e) {
                    return this.dimension("height", e)
                }, d.prototype.dimension = function (e, t) {
                    var i = e + "_";
                    if (void 0 === t) return this[i] || 0;
                    if ("" === t) return this[i] = void 0, void this.updateStyleEl_();
                    var r = parseFloat(t);
                    isNaN(r) ? Z.error('Improper value "' + t + '" supplied for for ' + e) : (this[i] = r, this.updateStyleEl_())
                }, d.prototype.fluid = function (e) {
                    if (void 0 === e) return !!this.fluid_;
                    this.fluid_ = !!e, e ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_()
                }, d.prototype.aspectRatio = function (e) {
                    if (void 0 === e) return this.aspectRatio_;
                    if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                    this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
                }, d.prototype.updateStyleEl_ = function () {
                    if (!0 !== f.VIDEOJS_NO_DYNAMIC_STYLE) {
                        var e = void 0, t = void 0, i = void 0,
                            r = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                            n = r[1] / r[0];
                        e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / n : this.videoWidth() || 300, t = void 0 !== this.height_ ? this.height_ : e * n, i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(i), it(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * n + "%;\n      }\n    ")
                    } else {
                        var o = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                            a = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                            s = this.tech_ && this.tech_.el();
                        s && (0 <= o && (s.width = o), 0 <= a && (s.height = a))
                    }
                }, d.prototype.loadTech_ = function (e, t) {
                    var i = this;
                    this.tech_ && this.unloadTech_();
                    var r = yt(e), n = e.charAt(0).toLowerCase() + e.slice(1);
                    "Html5" !== r && this.tag && (hi.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = r, this.isReady_ = !1;
                    var o = {
                        source: t,
                        autoplay: "string" != typeof this.autoplay() && this.autoplay(),
                        nativeControlsForTouch: this.options_.nativeControlsForTouch,
                        playerId: this.id(),
                        techId: this.id() + "_" + r + "_api",
                        playsinline: this.options_.playsinline,
                        preload: this.options_.preload,
                        loop: this.options_.loop,
                        muted: this.options_.muted,
                        poster: this.poster(),
                        language: this.language(),
                        playerElIngest: this.playerElIngest_ || !1,
                        "vtt.js": this.options_["vtt.js"],
                        canOverridePoster: !!this.options_.techCanOverridePoster,
                        enableSourceset: this.options_.enableSourceset
                    };
                    di.names.forEach(function (e) {
                        var t = di[e];
                        o[t.getterName] = i[t.privateName]
                    }), z(o, this.options_[r]), z(o, this.options_[n]), z(o, this.options_[e.toLowerCase()]), this.tag && (o.tag = this.tag), t && t.src === this.cache_.src && 0 < this.cache_.currentTime && (o.startTime = this.cache_.currentTime);
                    var a = hi.getTech(e);
                    if (!a) throw new Error("No Tech named '" + r + "' exists! '" + r + "' should be registered using videojs.registerTech()'");
                    this.tech_ = new a(o), this.tech_.ready(rt(this, this.handleTechReady_), !0), Rt(this.textTracksJson_ || [], this.tech_), an.forEach(function (e) {
                        i.on(i.tech_, e, i["handleTech" + yt(e) + "_"])
                    }), Object.keys(sn).forEach(function (t) {
                        i.on(i.tech_, t, function (e) {
                            0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
                                callback: i["handleTech" + sn[t] + "_"].bind(i),
                                event: e
                            }) : i["handleTech" + sn[t] + "_"](e)
                        })
                    }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === r && this.tag || ce(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                }, d.prototype.unloadTech_ = function () {
                    var i = this;
                    di.names.forEach(function (e) {
                        var t = di[e];
                        i[t.privateName] = i[t.getterName]()
                    }), this.textTracksJson_ = Dt(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
                }, d.prototype.tech = function (e) {
                    return void 0 === e && Z.warn(h(on)), this.tech_
                }, d.prototype.addTechControlsListeners_ = function () {
                    this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                }, d.prototype.removeTechControlsListeners_ = function () {
                    this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                }, d.prototype.handleTechReady_ = function () {
                    if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
                        delete this.tag.poster
                    } catch (e) {
                        Z("deleting tag.poster throws in some browsers", e)
                    }
                }, d.prototype.handleTechLoadStart_ = function () {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
                }, d.prototype.manualAutoplay_ = function (t) {
                    var i = this;
                    if (this.tech_ && "string" == typeof t) {
                        var e = function () {
                            var t = i.muted();
                            i.muted(!0);
                            var e = i.play();
                            if (e && e.then && e.catch) return e.catch(function (e) {
                                i.muted(t)
                            })
                        }, r = void 0;
                        if ("any" === t ? (r = this.play()) && r.then && r.catch && r.catch(function () {
                            return e()
                        }) : r = "muted" === t ? e() : this.play(), r && r.then && r.catch) return r.then(function () {
                            i.trigger({type: "autoplay-success", autoplay: t})
                        }).catch(function (e) {
                            i.trigger({type: "autoplay-failure", autoplay: t})
                        })
                    }
                }, d.prototype.updateSourceCaches_ = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = e, i = "";
                    if ("string" != typeof t && (t = e.src, i = e.type), !/^blob:/.test(t)) {
                        this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !i && (i = function (e, t) {
                            if (!t) return "";
                            if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
                            var i = e.cache_.sources.filter(function (e) {
                                return e.src === t
                            });
                            if (i.length) return i[0].type;
                            for (var r = e.$$("source"), n = 0; n < r.length; n++) {
                                var o = r[n];
                                if (o.type && o.src && o.src === t) return o.type
                            }
                            return ki(t)
                        }(this, t)), this.cache_.source = _t({}, e, {src: t, type: i});
                        for (var r = this.cache_.sources.filter(function (e) {
                            return e.src && e.src === t
                        }), n = [], o = this.$$("source"), a = [], s = 0; s < o.length; s++) {
                            var u = ve(o[s]);
                            n.push(u), u.src && u.src === t && a.push(u.src)
                        }
                        a.length && !r.length ? this.cache_.sources = n : r.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t
                    }
                }, d.prototype.handleTechSourceset_ = function (e) {
                    var i = this;
                    if (!this.changingSrc_ && (this.updateSourceCaches_(e.src), !e.src)) {
                        this.tech_.one(["sourceset", "loadstart"], function e(t) {
                            "sourceset" !== t.type && i.updateSourceCaches_(i.techGet_("currentSrc")), i.tech_.off(["sourceset", "loadstart"], e)
                        })
                    }
                    this.trigger({src: e.src, type: "sourceset"})
                }, d.prototype.hasStarted = function (e) {
                    if (void 0 === e) return this.hasStarted_;
                    e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
                }, d.prototype.handleTechPlay_ = function () {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                }, d.prototype.handleTechRateChange_ = function () {
                    0 < this.tech_.playbackRate() && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function (e) {
                        return e.callback(e.event)
                    }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
                }, d.prototype.handleTechWaiting_ = function () {
                    var e = this;
                    this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
                        return e.removeClass("vjs-waiting")
                    })
                }, d.prototype.handleTechCanPlay_ = function () {
                    this.removeClass("vjs-waiting"), this.trigger("canplay")
                }, d.prototype.handleTechCanPlayThrough_ = function () {
                    this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                }, d.prototype.handleTechPlaying_ = function () {
                    this.removeClass("vjs-waiting"), this.trigger("playing")
                }, d.prototype.handleTechSeeking_ = function () {
                    this.addClass("vjs-seeking"), this.trigger("seeking")
                }, d.prototype.handleTechSeeked_ = function () {
                    this.removeClass("vjs-seeking"), this.trigger("seeked")
                }, d.prototype.handleTechFirstPlay_ = function () {
                    this.options_.starttime && (Z.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
                }, d.prototype.handleTechPause_ = function () {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                }, d.prototype.handleTechEnded_ = function () {
                    this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                }, d.prototype.handleTechDurationChange_ = function () {
                    this.duration(this.techGet_("duration"))
                }, d.prototype.handleTechClick_ = function (e) {
                    Pe(e) && this.controls_ && (this.paused() ? Mt(this.play()) : this.pause())
                }, d.prototype.handleTechTap_ = function () {
                    this.userActive(!this.userActive())
                }, d.prototype.handleTechTouchStart_ = function () {
                    this.userWasActive = this.userActive()
                }, d.prototype.handleTechTouchMove_ = function () {
                    this.userWasActive && this.reportUserActivity()
                }, d.prototype.handleTechTouchEnd_ = function (e) {
                    e.preventDefault()
                }, d.prototype.handleFullscreenChange_ = function () {
                    this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                }, d.prototype.handleStageClick_ = function () {
                    this.reportUserActivity()
                }, d.prototype.handleTechFullscreenChange_ = function (e, t) {
                    t && this.isFullscreen(t.isFullscreen), this.trigger("fullscreenchange")
                }, d.prototype.handleTechError_ = function () {
                    var e = this.tech_.error();
                    this.error(e)
                }, d.prototype.handleTechTextData_ = function () {
                    var e = null;
                    1 < arguments.length && (e = arguments[1]), this.trigger("textdata", e)
                }, d.prototype.getCache = function () {
                    return this.cache_
                }, d.prototype.techCall_ = function (n, o) {
                    this.ready(function () {
                        if (n in gi) return e = this.middleware_, t = this.tech_, r = o, t[i = n](e.reduce(Ti(i), r));
                        if (n in bi) return yi(this.middleware_, this.tech_, n, o);
                        var e, t, i, r;
                        try {
                            this.tech_ && this.tech_[n](o)
                        } catch (e) {
                            throw Z(e), e
                        }
                    }, !0)
                }, d.prototype.techGet_ = function (t) {
                    if (this.tech_ && this.tech_.isReady_) {
                        if (t in _i) return e = this.middleware_, i = this.tech_, r = t, e.reduceRight(Ti(r), i[r]());
                        if (t in bi) return yi(this.middleware_, this.tech_, t);
                        var e, i, r;
                        try {
                            return this.tech_[t]()
                        } catch (e) {
                            if (void 0 === this.tech_[t]) throw Z("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e;
                            if ("TypeError" === e.name) throw Z("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e;
                            throw Z(e), e
                        }
                    }
                }, d.prototype.play = function () {
                    var t = this, e = this.options_.Promise || f.Promise;
                    return e ? new e(function (e) {
                        t.play_(e)
                    }) : this.play_()
                }, d.prototype.play_ = function () {
                    var e = this, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Mt;
                    if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
                        if (!this.changingSrc_ && (this.src() || this.currentSrc())) return void t(this.techGet_("play"));
                        this.playOnLoadstart_ = function () {
                            e.playOnLoadstart_ = null, t(e.play())
                        }, this.one("loadstart", this.playOnLoadstart_)
                    } else {
                        if (this.playWaitingForReady_) return;
                        this.playWaitingForReady_ = !0, this.ready(function () {
                            e.playWaitingForReady_ = !1, t(e.play())
                        })
                    }
                }, d.prototype.pause = function () {
                    this.techCall_("pause")
                }, d.prototype.paused = function () {
                    return !1 !== this.techGet_("paused")
                }, d.prototype.played = function () {
                    return this.techGet_("played") || St(0, 0)
                }, d.prototype.scrubbing = function (e) {
                    if (void 0 === e) return this.scrubbing_;
                    this.scrubbing_ = !!e, e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
                }, d.prototype.currentTime = function (e) {
                    return void 0 !== e ? (e < 0 && (e = 0), void this.techCall_("setCurrentTime", e)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                }, d.prototype.duration = function (e) {
                    if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                    (e = parseFloat(e)) < 0 && (e = 1 / 0), e !== this.cache_.duration && ((this.cache_.duration = e) === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
                }, d.prototype.remainingTime = function () {
                    return this.duration() - this.currentTime()
                }, d.prototype.remainingTimeDisplay = function () {
                    return Math.floor(this.duration()) - Math.floor(this.currentTime())
                }, d.prototype.buffered = function () {
                    var e = this.techGet_("buffered");
                    return e && e.length || (e = St(0, 0)), e
                }, d.prototype.bufferedPercent = function () {
                    return wt(this.buffered(), this.duration())
                }, d.prototype.bufferedEnd = function () {
                    var e = this.buffered(), t = this.duration(), i = e.end(e.length - 1);
                    return t < i && (i = t), i
                }, d.prototype.volume = function (e) {
                    var t = void 0;
                    return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), void (0 < t && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
                }, d.prototype.muted = function (e) {
                    if (void 0 === e) return this.techGet_("muted") || !1;
                    this.techCall_("setMuted", e)
                }, d.prototype.defaultMuted = function (e) {
                    return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
                }, d.prototype.lastVolume_ = function (e) {
                    if (void 0 === e || 0 === e) return this.cache_.lastVolume;
                    this.cache_.lastVolume = e
                }, d.prototype.supportsFullScreen = function () {
                    return this.techGet_("supportsFullScreen") || !1
                }, d.prototype.isFullscreen = function (e) {
                    if (void 0 === e) return !!this.isFullscreen_;
                    this.isFullscreen_ = !!e
                }, d.prototype.requestFullscreen = function () {
                    var i = kt;
                    this.isFullscreen(!0), i.requestFullscreen ? (ze(p, i.fullscreenchange, rt(this, function e(t) {
                        this.isFullscreen(p[i.fullscreenElement]), !1 === this.isFullscreen() && Xe(p, i.fullscreenchange, e), this.trigger("fullscreenchange")
                    })), this.el_[i.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
                }, d.prototype.exitFullscreen = function () {
                    var e = kt;
                    this.isFullscreen(!1), e.requestFullscreen ? p[e.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
                }, d.prototype.enterFullWindow = function () {
                    this.isFullWindow = !0, this.docOrigOverflow = p.documentElement.style.overflow, ze(p, "keydown", rt(this, this.fullWindowOnEscKey)), p.documentElement.style.overflow = "hidden", he(p.body, "vjs-full-window"), this.trigger("enterFullWindow")
                }, d.prototype.fullWindowOnEscKey = function (e) {
                    27 === e.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
                }, d.prototype.exitFullWindow = function () {
                    this.isFullWindow = !1, Xe(p, "keydown", this.fullWindowOnEscKey), p.documentElement.style.overflow = this.docOrigOverflow, fe(p.body, "vjs-full-window"), this.trigger("exitFullWindow")
                }, d.prototype.canPlayType = function (e) {
                    for (var t = void 0, i = 0, r = this.options_.techOrder; i < r.length; i++) {
                        var n = r[i], o = hi.getTech(n);
                        if (o || (o = gt.getComponent(n)), o) {
                            if (o.isSupported() && (t = o.canPlayType(e))) return t
                        } else Z.error('The "' + n + '" tech is undefined. Skipped browser support check for that tech.')
                    }
                    return ""
                }, d.prototype.selectSource = function (e) {
                    var i, r = this, t = this.options_.techOrder.map(function (e) {
                        return [e, hi.getTech(e)]
                    }).filter(function (e) {
                        var t = e[0], i = e[1];
                        return i ? i.isSupported() : (Z.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                    }), n = function (e, i, r) {
                        var n = void 0;
                        return e.some(function (t) {
                            return i.some(function (e) {
                                if (n = r(t, e)) return !0
                            })
                        }), n
                    }, o = function (e, t) {
                        var i = e[0];
                        if (e[1].canPlaySource(t, r.options_[i.toLowerCase()])) return {source: t, tech: i}
                    };
                    return (this.options_.sourceOrder ? n(e, t, (i = o, function (e, t) {
                        return i(t, e)
                    })) : n(t, e, o)) || !1
                }, d.prototype.src = function (e) {
                    var n = this;
                    if (void 0 === e) return this.cache_.src || "";
                    var o = function t(e) {
                        if (Array.isArray(e)) {
                            var i = [];
                            e.forEach(function (e) {
                                e = t(e), Array.isArray(e) ? i = i.concat(e) : X(e) && i.push(e)
                            }), e = i
                        } else e = "string" == typeof e && e.trim() ? [Ei({src: e})] : X(e) && "string" == typeof e.src && e.src && e.src.trim() ? [Ei(e)] : [];
                        return e
                    }(e);
                    o.length ? (this.changingSrc_ = !0, this.cache_.sources = o, this.updateSourceCaches_(o[0]), vi(this, o[0], function (e, t) {
                        var i, r;
                        if (n.middleware_ = t, n.cache_.sources = o, n.updateSourceCaches_(e), n.src_(e)) return 1 < o.length ? n.src(o.slice(1)) : (n.changingSrc_ = !1, n.setTimeout(function () {
                            this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                        }, 0), void n.triggerReady());
                        i = t, r = n.tech_, i.forEach(function (e) {
                            return e.setTech && e.setTech(r)
                        })
                    })) : this.setTimeout(function () {
                        this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                    }, 0)
                }, d.prototype.src_ = function (e) {
                    var t, i, r = this, n = this.selectSource([e]);
                    return !n || (t = n.tech, i = this.techName_, yt(t) !== yt(i) ? (this.changingSrc_ = !0, this.loadTech_(n.tech, n.source), this.tech_.ready(function () {
                        r.changingSrc_ = !1
                    })) : this.ready(function () {
                        this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = !1
                    }, !0), !1)
                }, d.prototype.load = function () {
                    this.techCall_("load")
                }, d.prototype.reset = function () {
                    this.tech_ && this.tech_.clearTracks("text"), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
                }, d.prototype.currentSources = function () {
                    var e = this.currentSource(), t = [];
                    return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
                }, d.prototype.currentSource = function () {
                    return this.cache_.source || {}
                }, d.prototype.currentSrc = function () {
                    return this.currentSource() && this.currentSource().src || ""
                }, d.prototype.currentType = function () {
                    return this.currentSource() && this.currentSource().type || ""
                }, d.prototype.preload = function (e) {
                    return void 0 !== e ? (this.techCall_("setPreload", e), void (this.options_.preload = e)) : this.techGet_("preload")
                }, d.prototype.autoplay = function (e) {
                    if (void 0 === e) return this.options_.autoplay || !1;
                    var t = void 0;
                    "string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e, this.manualAutoplay_(e), t = !1) : this.options_.autoplay = !!e, t = t || this.options_.autoplay, this.tech_ && this.techCall_("setAutoplay", t)
                }, d.prototype.playsinline = function (e) {
                    return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline")
                }, d.prototype.loop = function (e) {
                    return void 0 !== e ? (this.techCall_("setLoop", e), void (this.options_.loop = e)) : this.techGet_("loop")
                }, d.prototype.poster = function (e) {
                    if (void 0 === e) return this.poster_;
                    e || (e = ""), e !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
                }, d.prototype.handleTechPosterChange_ = function () {
                    if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                        var e = this.tech_.poster() || "";
                        e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                    }
                }, d.prototype.controls = function (e) {
                    if (void 0 === e) return !!this.controls_;
                    e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
                }, d.prototype.usingNativeControls = function (e) {
                    if (void 0 === e) return !!this.usingNativeControls_;
                    e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
                }, d.prototype.error = function (e) {
                    return void 0 === e ? this.error_ || null : null === e ? (this.error_ = e, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new Pt(e), this.addClass("vjs-error"), Z.error("(CODE:" + this.error_.code + " " + Pt.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
                }, d.prototype.reportUserActivity = function (e) {
                    this.userActivity_ = !0
                }, d.prototype.userActive = function (e) {
                    if (void 0 === e) return this.userActive_;
                    if ((e = !!e) !== this.userActive_) {
                        if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                        this.tech_ && this.tech_.one("mousemove", function (e) {
                            e.stopPropagation(), e.preventDefault()
                        }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                    }
                }, d.prototype.listenForUserActivity_ = function () {
                    var t = void 0, i = void 0, r = void 0, n = rt(this, this.reportUserActivity);
                    this.on("mousedown", function () {
                        n(), this.clearInterval(t), t = this.setInterval(n, 250)
                    }), this.on("mousemove", function (e) {
                        e.screenX === i && e.screenY === r || (i = e.screenX, r = e.screenY, n())
                    }), this.on("mouseup", function (e) {
                        n(), this.clearInterval(t)
                    }), this.on("keydown", n), this.on("keyup", n);
                    var o = void 0;
                    this.setInterval(function () {
                        if (this.userActivity_) {
                            this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(o);
                            var e = this.options_.inactivityTimeout;
                            e <= 0 || (o = this.setTimeout(function () {
                                this.userActivity_ || this.userActive(!1)
                            }, e))
                        }
                    }, 250)
                }, d.prototype.playbackRate = function (e) {
                    if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
                    this.techCall_("setPlaybackRate", e)
                }, d.prototype.defaultPlaybackRate = function (e) {
                    return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
                }, d.prototype.isAudio = function (e) {
                    if (void 0 === e) return !!this.isAudio_;
                    this.isAudio_ = !!e
                }, d.prototype.addTextTrack = function (e, t, i) {
                    if (this.tech_) return this.tech_.addTextTrack(e, t, i)
                }, d.prototype.addRemoteTextTrack = function (e, t) {
                    if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
                }, d.prototype.removeRemoteTextTrack = function () {
                    var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).track,
                        t = void 0 === e ? arguments[0] : e;
                    if (this.tech_) return this.tech_.removeRemoteTextTrack(t)
                }, d.prototype.getVideoPlaybackQuality = function () {
                    return this.techGet_("getVideoPlaybackQuality")
                }, d.prototype.videoWidth = function () {
                    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                }, d.prototype.videoHeight = function () {
                    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                }, d.prototype.language = function (e) {
                    if (void 0 === e) return this.language_;
                    this.language_ = String(e).toLowerCase()
                },d.prototype.languages = function () {
                    return _t(d.prototype.options_.languages, this.languages_)
                },d.prototype.toJSON = function () {
                    var e = _t(this.options_), t = e.tracks;
                    e.tracks = [];
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        (r = _t(r)).player = void 0, e.tracks[i] = r
                    }
                    return e
                },d.prototype.createModal = function (e, t) {
                    var i = this;
                    (t = t || {}).content = e || "";
                    var r = new Bt(this, t);
                    return this.addChild(r), r.on("dispose", function () {
                        i.removeChild(r)
                    }), r.open(), r
                },d.getTagSettings = function (e) {
                    var t = {sources: [], tracks: []}, i = ve(e), r = i["data-setup"];
                    if (de(e, "vjs-fluid") && (i.fluid = !0), null !== r) {
                        var n = m(r || "{}"), o = n[0], a = n[1];
                        o && Z.error(o), z(i, a)
                    }
                    if (z(t, i), e.hasChildNodes()) for (var s = e.childNodes, u = 0, l = s.length; u < l; u++) {
                        var c = s[u], d = c.nodeName.toLowerCase();
                        "source" === d ? t.sources.push(ve(c)) : "track" === d && t.tracks.push(ve(c))
                    }
                    return t
                },d.prototype.flexNotSupported_ = function () {
                    var e = p.createElement("i");
                    return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style)
                },d
            }(gt);
        di.names.forEach(function (e) {
            var t = di[e];
            un.prototype[t.getterName] = function () {
                return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
            }
        }), un.players = {};
        var ln = f.navigator;
        un.prototype.options_ = {
            techOrder: hi.defaultTechOrder_,
            html5: {},
            flash: {},
            inactivityTimeout: 2e3,
            playbackRates: [],
            children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
            language: ln && (ln.languages && ln.languages[0] || ln.userLanguage || ln.language) || "en",
            languages: {},
            notSupportedMessage: "No compatible source was found for this media."
        }, A || un.prototype.options_.children.push("resizeManager"), ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (e) {
            un.prototype[e] = function () {
                return this.techGet_(e)
            }
        }), an.forEach(function (e) {
            un.prototype["handleTech" + yt(e) + "_"] = function () {
                return this.trigger(e)
            }
        }), gt.registerComponent("Player", un);
        var cn = "plugin", dn = "activePlugins_", hn = {}, fn = function (e) {
            return hn.hasOwnProperty(e)
        }, pn = function (e) {
            return fn(e) ? hn[e] : void 0
        }, mn = function (e, t) {
            e[dn] = e[dn] || {}, e[dn][t] = !0
        }, vn = function (e, t, i) {
            var r = (i ? "before" : "") + "pluginsetup";
            e.trigger(r, t), e.trigger(r + ":" + t.name, t)
        }, yn = function (n, o) {
            return o.prototype.name = n, function () {
                vn(this, {name: n, plugin: o, instance: null}, !0);
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = new (Function.prototype.bind.apply(o, [null].concat([this].concat(t))));
                return this[n] = function () {
                    return r
                }, vn(this, r.getEventHash()), r
            }
        }, _n = function () {
            function o(e) {
                if (F(this, o), this.constructor === o) throw new Error("Plugin must be sub-classed; not directly instantiated.");
                this.player = e, pt(this), delete this.trigger, vt(this, this.constructor.defaultState), mn(e, this.name), this.dispose = rt(this, this.dispose), e.on("dispose", this.dispose)
            }

            return o.prototype.version = function () {
                return this.constructor.VERSION
            }, o.prototype.getEventHash = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return e.name = this.name, e.plugin = this.constructor, e.instance = this, e
            }, o.prototype.trigger = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return $e(this.eventBusEl_, e, this.getEventHash(t))
            }, o.prototype.handleStateChanged = function (e) {
            }, o.prototype.dispose = function () {
                var e = this.name, t = this.player;
                this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t[dn][e] = !1, this.player = this.state = null, t[e] = yn(e, hn[e])
            }, o.isBasic = function (e) {
                var t = "string" == typeof e ? pn(e) : e;
                return "function" == typeof t && !o.prototype.isPrototypeOf(t.prototype)
            }, o.registerPlugin = function (e, t) {
                if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + (void 0 === e ? "undefined" : B(e)) + ".");
                if (fn(e)) Z.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!'); else if (un.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
                if ("function" != typeof t) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + (void 0 === t ? "undefined" : B(t)) + ".");
                var i, r, n;
                return hn[e] = t, e !== cn && (o.isBasic(t) ? un.prototype[e] = (i = e, r = t, n = function () {
                    vn(this, {name: i, plugin: r, instance: null}, !0);
                    var e = r.apply(this, arguments);
                    return mn(this, i), vn(this, {name: i, plugin: r, instance: e}), e
                }, Object.keys(r).forEach(function (e) {
                    n[e] = r[e]
                }), n) : un.prototype[e] = yn(e, t)), t
            }, o.deregisterPlugin = function (e) {
                if (e === cn) throw new Error("Cannot de-register base plugin.");
                fn(e) && (delete hn[e], delete un.prototype[e])
            }, o.getPlugins = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Object.keys(hn), i = void 0;
                return e.forEach(function (e) {
                    var t = pn(e);
                    t && ((i = i || {})[e] = t)
                }), i
            }, o.getPluginVersion = function (e) {
                var t = pn(e);
                return t && t.VERSION || ""
            }, o
        }();
        _n.getPlugin = pn, _n.BASE_PLUGIN_NAME = cn, _n.registerPlugin(cn, _n), un.prototype.usingPlugin = function (e) {
            return !!this[dn] && !0 === this[dn][e]
        }, un.prototype.hasPlugin = function (e) {
            return !!fn(e)
        };
        "undefined" == typeof HTMLVideoElement && ne() && (p.createElement("video"), p.createElement("audio"), p.createElement("track"), p.createElement("video-js"));
        var gn = function (e) {
            return 0 === e.indexOf("#") ? e.slice(1) : e
        };

        function bn(e, i, t) {
            var r = bn.getPlayer(e);
            if (r) return i && Z.warn('Player "' + e + '" is already initialised. Options will not be applied.'), t && r.ready(t), r;
            var n = "string" == typeof e ? Ae("#" + gn(e)) : e;
            if (!oe(n)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
            p.body.contains(n) || Z.warn("The element supplied is not included in the DOM"), i = i || {}, bn.hooks("beforesetup").forEach(function (e) {
                var t = e(n, _t(i));
                X(t) && !Array.isArray(t) ? i = _t(i, t) : Z.error("please return an object in beforesetup hooks")
            });
            var o = gt.getComponent("Player");
            return r = new o(n, i, t), bn.hooks("setup").forEach(function (e) {
                return e(r)
            }), r
        }

        if (bn.hooks_ = {}, bn.hooks = function (e, t) {
            return bn.hooks_[e] = bn.hooks_[e] || [], t && (bn.hooks_[e] = bn.hooks_[e].concat(t)), bn.hooks_[e]
        }, bn.hook = function (e, t) {
            bn.hooks(e, t)
        }, bn.hookOnce = function (i, e) {
            bn.hooks(i, [].concat(e).map(function (t) {
                return function e() {
                    return bn.removeHook(i, e), t.apply(void 0, arguments)
                }
            }))
        }, bn.removeHook = function (e, t) {
            var i = bn.hooks(e).indexOf(t);
            return !(i <= -1) && (bn.hooks_[e] = bn.hooks_[e].slice(), bn.hooks_[e].splice(i, 1), !0)
        }, !0 !== f.VIDEOJS_NO_DYNAMIC_STYLE && ne()) {
            var Tn = Ae(".vjs-styles-defaults");
            if (!Tn) {
                Tn = tt("vjs-styles-defaults");
                var Sn = Ae("head");
                Sn && Sn.insertBefore(Tn, Sn.firstChild), it(Tn, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
            }
        }
        et(1, bn), bn.VERSION = y, bn.options = un.prototype.options_, bn.getPlayers = function () {
            return un.players
        }, bn.getPlayer = function (e) {
            var t = un.players, i = void 0;
            if ("string" == typeof e) {
                var r = gn(e), n = t[r];
                if (n) return n;
                i = Ae("#" + r)
            } else i = e;
            if (oe(i)) {
                var o = i, a = o.player, s = o.playerId;
                if (a || t[s]) return a || t[s]
            }
        }, bn.getAllPlayers = function () {
            return Object.keys(un.players).map(function (e) {
                return un.players[e]
            }).filter(Boolean)
        }, bn.players = un.players, bn.getComponent = gt.getComponent, bn.registerComponent = function (e, t) {
            hi.isTech(t) && Z.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), gt.registerComponent.call(gt, e, t)
        }, bn.getTech = hi.getTech, bn.registerTech = hi.registerTech, bn.use = function (e, t) {
            fi[e] = fi[e] || [], fi[e].push(t)
        }, !A && Object.defineProperty ? (Object.defineProperty(bn, "middleware", {
            value: {},
            writeable: !1,
            enumerable: !0
        }), Object.defineProperty(bn.middleware, "TERMINATOR", {
            value: mi,
            writeable: !1,
            enumerable: !0
        })) : bn.middleware = {TERMINATOR: mi}, bn.browser = N, bn.TOUCH_ENABLED = D, bn.extend = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = function () {
                e.apply(this, arguments)
            }, r = {};
            for (var n in"object" === (void 0 === t ? "undefined" : B(t)) ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), r = t) : "function" == typeof t && (i = t), function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : B(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (e.super_ = t)
            }(i, e), r) r.hasOwnProperty(n) && (i.prototype[n] = r[n]);
            return i
        }, bn.mergeOptions = _t, bn.bind = rt, bn.registerPlugin = _n.registerPlugin, bn.deregisterPlugin = _n.deregisterPlugin, bn.plugin = function (e, t) {
            return Z.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), _n.registerPlugin(e, t)
        }, bn.getPlugins = _n.getPlugins, bn.getPlugin = _n.getPlugin, bn.getPluginVersion = _n.getPluginVersion, bn.addLanguage = function (e, t) {
            var i;
            return e = ("" + e).toLowerCase(), bn.options.languages = _t(bn.options.languages, ((i = {})[e] = t, i)), bn.options.languages[e]
        }, bn.log = Z, bn.createTimeRange = bn.createTimeRanges = St, bn.formatTime = Hi, bn.setFormatTime = function (e) {
            Ui = e
        }, bn.resetFormatTime = function () {
            Ui = Fi
        }, bn.parseUrl = Zt, bn.isCrossOrigin = ii, bn.EventTarget = ot, bn.on = ze, bn.one = Ke, bn.off = Xe, bn.trigger = $e, bn.xhr = v, bn.TextTrack = oi, bn.AudioTrack = ai, bn.VideoTrack = si, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function (e) {
            bn[e] = function () {
                return Z.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), Me[e].apply(null, arguments)
            }
        }), bn.computedStyle = ee, bn.dom = Me, bn.url = ri, e.exports = bn
    }, "./node_modules/videojs-contrib-hls/es5/ad-cue-tags.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var d = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function (e, t) {
                var i = [], r = !0, n = !1, o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return i
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
        var r, n = i("./node_modules/global/window.js"), h = (r = n) && r.__esModule ? r : {default: r},
            f = function (e, t) {
                for (var i = e.cues, r = 0; r < i.length; r++) {
                    var n = i[r];
                    if (t >= n.adStartTime && t <= n.adEndTime) return n
                }
                return null
            };
        t.default = {
            updateAdCues: function (e, t) {
                var i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
                if (e.segments) for (var r = i, n = void 0, o = 0; o < e.segments.length; o++) {
                    var a = e.segments[o];
                    if (n || (n = f(t, r + a.duration / 2)), n) {
                        if ("cueIn" in a) {
                            n.endTime = r, n.adEndTime = r, r += a.duration, n = null;
                            continue
                        }
                        if (r < n.endTime) {
                            r += a.duration;
                            continue
                        }
                        n.endTime += a.duration
                    } else if ("cueOut" in a && ((n = new h.default.VTTCue(r, r + a.duration, a.cueOut)).adStartTime = r, n.adEndTime = r + parseFloat(a.cueOut), t.addCue(n)), "cueOutCont" in a) {
                        var s, u, l = a.cueOutCont.split("/").map(parseFloat), c = d(l, 2);
                        s = c[0], u = c[1], (n = new h.default.VTTCue(r, r + a.duration, "")).adStartTime = r - s, n.adEndTime = n.adStartTime + u, t.addCue(n)
                    }
                    r += a.duration
                }
            }, findAdCue: f
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/bin-utils.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (e, t) {
            var i = e.toString(16);
            return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " : "")
        }, o = function (e) {
            return 32 <= e && e < 126 ? String.fromCharCode(e) : "."
        }, r = {
            hexDump: function (e) {
                for (var t = Array.prototype.slice.call(e), i = "", r = 0; r < t.length / 16; r++) i += t.slice(16 * r, 16 * r + 16).map(n).join("") + " " + t.slice(16 * r, 16 * r + 16).map(o).join("") + "\n";
                return i
            }, tagDump: function (e) {
                return r.hexDump(e.bytes)
            }, textRanges: function (e) {
                var t, i, r = "", n = void 0;
                for (n = 0; n < e.length; n++) r += (i = n, (t = e).start(i) + "-" + t.end(i) + " ");
                return r
            }, createTransferableMessage: function (i) {
                var r = {};
                return Object.keys(i).forEach(function (e) {
                    var t = i[e];
                    ArrayBuffer.isView(t) ? r[e] = {
                        bytes: t.buffer,
                        byteOffset: t.byteOffset,
                        byteLength: t.byteLength
                    } : r[e] = t
                }), r
            }, initSegmentId: function (e) {
                var t = e.byterange || {length: 1 / 0, offset: 0};
                return [t.length, t.offset, e.resolvedUri].join(",")
            }
        };
        t.default = r, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/config.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            GOAL_BUFFER_LENGTH: 30,
            MAX_GOAL_BUFFER_LENGTH: 60,
            GOAL_BUFFER_LENGTH_RATE: 1,
            BANDWIDTH_VARIANCE: 1.2,
            BUFFER_LOW_WATER_LINE: 0,
            MAX_BUFFER_LOW_WATER_LINE: 30,
            BUFFER_LOW_WATER_LINE_RATE: 1
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/decrypter-worker.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, n = i("./node_modules/global/window.js"), o = (r = n) && r.__esModule ? r : {default: r},
            a = i("./node_modules/aes-decrypter/es5/index.js"),
            s = i("./node_modules/videojs-contrib-hls/es5/bin-utils.js"), u = function (e) {
                e.onmessage = function (e) {
                    var i = e.data, t = new Uint8Array(i.encrypted.bytes, i.encrypted.byteOffset, i.encrypted.byteLength),
                        r = new Uint32Array(i.key.bytes, i.key.byteOffset, i.key.byteLength / 4),
                        n = new Uint32Array(i.iv.bytes, i.iv.byteOffset, i.iv.byteLength / 4);
                    new a.Decrypter(t, r, n, function (e, t) {
                        o.default.postMessage((0, s.createTransferableMessage)({
                            source: i.source,
                            decrypted: t
                        }), [t.buffer])
                    })
                }
            };
        t.default = function (e) {
            return new u(e)
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/master-playlist-controller.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var p = n(i("./node_modules/videojs-contrib-hls/es5/playlist-loader.js")),
            o = i("./node_modules/videojs-contrib-hls/es5/playlist.js"),
            m = n(i("./node_modules/videojs-contrib-hls/es5/segment-loader.js")),
            v = n(i("./node_modules/videojs-contrib-hls/es5/vtt-segment-loader.js")),
            a = n(i("./node_modules/videojs-contrib-hls/es5/ranges.js")),
            y = n(i("./node_modules/video.js/dist/video.cjs.js")),
            s = n(i("./node_modules/videojs-contrib-hls/es5/ad-cue-tags.js")),
            _ = n(i("./node_modules/videojs-contrib-hls/es5/sync-controller.js")),
            u = i("./node_modules/videojs-contrib-media-sources/es5/codec-utils.js"),
            g = n(i("./node_modules/webwackify/index.js")),
            b = n(i("./node_modules/videojs-contrib-hls/es5/decrypter-worker.js")),
            l = n(i("./node_modules/videojs-contrib-hls/es5/config.js")),
            T = i("./node_modules/videojs-contrib-hls/es5/util/codecs.js"),
            S = i("./node_modules/videojs-contrib-hls/es5/media-groups.js"), w = void 0,
            k = {videoCodec: "avc1", videoObjectTypeIndicator: ".4d400d", audioProfile: "2"},
            E = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
            c = function (e) {
                return e.replace(/avc1\.(\d+)\.(\d+)/i, function (e) {
                    return (0, u.translateLegacyCodecs)([e])[0]
                })
            };
        t.mapLegacyAvcCodecs_ = c;
        var C = function (e, t, i) {
            return e + "/" + t + '; codecs="' + i.filter(function (e) {
                return !!e
            }).join(", ") + '"'
        }, d = function (e, t) {
            var i, r, n = (i = t).segments && i.segments.length && i.segments[0].map ? "mp4" : "mp2t",
                o = (r = t.attributes || {}).CODECS ? (0, T.parseCodecs)(r.CODECS) : k, a = t.attributes || {}, s = !0,
                u = !1;
            if (!t) return [];
            if (e.mediaGroups.AUDIO && a.AUDIO) {
                var l = e.mediaGroups.AUDIO[a.AUDIO];
                if (l) for (var c in s = !(u = !0), l) if (!l[c].uri) {
                    s = !0;
                    break
                }
            }
            u && !o.audioProfile && (y.default.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"), o.audioProfile = k.audioProfile);
            var d = {};
            o.videoCodec && (d.video = "" + o.videoCodec + o.videoObjectTypeIndicator), o.audioProfile && (d.audio = "mp4a.40." + o.audioProfile);
            var h = C("audio", n, [d.audio]), f = C("video", n, [d.video]), p = C("video", n, [d.video, d.audio]);
            return u ? !s && d.video ? [f, h] : [p, h] : d.video ? [p] : [h]
        };
        t.mimeTypesForPlaylist_ = d;
        var h = function (e) {
            function f(e) {
                var t = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, f), function (e, t, i) {
                    for (var r = !0; r;) {
                        var n = e, o = t, a = i;
                        r = !1, null === n && (n = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(n, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var u = s.get;
                            if (void 0 === u) return;
                            return u.call(a)
                        }
                        var l = Object.getPrototypeOf(n);
                        if (null === l) return;
                        e = l, t = o, i = a, r = !0, s = l = void 0
                    }
                }(Object.getPrototypeOf(f.prototype), "constructor", this).call(this);
                var i = e.url, r = e.handleManifestRedirects, n = e.withCredentials, o = e.mode, a = e.tech,
                    s = e.bandwidth, u = e.externHls, l = e.useCueTags, c = e.blacklistDuration,
                    d = e.enableLowInitialPlaylist;
                if (!i) throw new Error("A non-empty playlist URL is required");
                w = u, this.tech_ = a, this.hls_ = a.hls, this.mode_ = o, this.useCueTags_ = l, this.blacklistDuration = c, this.enableLowInitialPlaylist = d, this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues"), this.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), this.requestOptions_ = {
                    withCredentials: n,
                    handleManifestRedirects: r,
                    timeout: null
                }, this.mediaTypes_ = (0, S.createMediaTypes)(), this.mediaSource = new y.default.MediaSource({mode: o}), this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_.bind(this)), this.seekable_ = y.default.createTimeRanges(), this.hasPlayed_ = function () {
                    return !1
                }, this.syncController_ = new _.default(e), this.segmentMetadataTrack_ = a.addRemoteTextTrack({
                    kind: "metadata",
                    label: "segment-metadata"
                }, !1).track, this.decrypter_ = (0, g.default)(b.default, function () {
                    var e = void 0;
                    try {
                        e = "./node_modules/videojs-contrib-hls/es5/decrypter-worker.js"
                    } catch (e) {
                    }
                    return e
                }());
                var h = {
                    hls: this.hls_,
                    mediaSource: this.mediaSource,
                    currentTime: this.tech_.currentTime.bind(this.tech_),
                    seekable: function () {
                        return t.seekable()
                    },
                    seeking: function () {
                        return t.tech_.seeking()
                    },
                    duration: function () {
                        return t.mediaSource.duration
                    },
                    hasPlayed: function () {
                        return t.hasPlayed_()
                    },
                    goalBufferLength: function () {
                        return t.goalBufferLength()
                    },
                    bandwidth: s,
                    syncController: this.syncController_,
                    decrypter: this.decrypter_
                };
                this.masterPlaylistLoader_ = new p.default(i, this.hls_, this.requestOptions_), this.setupMasterPlaylistLoaderListeners_(), this.mainSegmentLoader_ = new m.default(y.default.mergeOptions(h, {
                    segmentMetadataTrack: this.segmentMetadataTrack_,
                    loaderType: "main"
                }), e), this.audioSegmentLoader_ = new m.default(y.default.mergeOptions(h, {loaderType: "audio"}), e), this.subtitleSegmentLoader_ = new v.default(y.default.mergeOptions(h, {loaderType: "vtt"}), e), this.setupSegmentLoaderListeners_(), E.forEach(function (e) {
                    t[e + "_"] = function (e) {
                        return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
                    }.bind(t, e)
                }), this.masterPlaylistLoader_.load()
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(f, y["default"].EventTarget), r(f, [{
                key: "setupMasterPlaylistLoaderListeners_", value: function () {
                    var r = this;
                    this.masterPlaylistLoader_.on("loadedmetadata", function () {
                        var e = r.masterPlaylistLoader_.media(), t = 1.5 * r.masterPlaylistLoader_.targetDuration * 1e3;
                        (0, o.isLowestEnabledRendition)(r.masterPlaylistLoader_.master, r.masterPlaylistLoader_.media()) ? r.requestOptions_.timeout = 0 : r.requestOptions_.timeout = t, e.endList && "none" !== r.tech_.preload() && (r.mainSegmentLoader_.playlist(e, r.requestOptions_), r.mainSegmentLoader_.load()), (0, S.setupMediaGroups)({
                            segmentLoaders: {
                                AUDIO: r.audioSegmentLoader_,
                                SUBTITLES: r.subtitleSegmentLoader_,
                                main: r.mainSegmentLoader_
                            },
                            tech: r.tech_,
                            requestOptions: r.requestOptions_,
                            masterPlaylistLoader: r.masterPlaylistLoader_,
                            mode: r.mode_,
                            hls: r.hls_,
                            master: r.master(),
                            mediaTypes: r.mediaTypes_,
                            blacklistCurrentPlaylist: r.blacklistCurrentPlaylist.bind(r)
                        }), r.triggerPresenceUsage_(r.master(), e);
                        try {
                            r.setupSourceBuffers_()
                        } catch (e) {
                            return y.default.log.warn("Failed to create SourceBuffers", e), r.mediaSource.endOfStream("decode")
                        }
                        r.setupFirstPlay(), r.trigger("selectedinitialmedia")
                    }), this.masterPlaylistLoader_.on("loadedplaylist", function () {
                        var t, e = r.masterPlaylistLoader_.media();
                        if (!e) {
                            var i = void 0;
                            return r.enableLowInitialPlaylist && (i = r.selectInitialPlaylist()), i || (i = r.selectPlaylist()), r.initialMedia_ = i, void r.masterPlaylistLoader_.media(r.initialMedia_)
                        }
                        r.useCueTags_ && r.updateAdCues_(e), r.mainSegmentLoader_.playlist(e, r.requestOptions_), r.updateDuration(), r.tech_.paused() || r.mainSegmentLoader_.load(), e.endList || (t = function () {
                            var e = r.seekable();
                            0 !== e.length && r.mediaSource.addSeekableRange_(e.start(0), e.end(0))
                        }, r.duration() !== 1 / 0 ? r.tech_.one("durationchange", function e() {
                            r.duration() === 1 / 0 ? t() : r.tech_.one("durationchange", e)
                        }) : t())
                    }), this.masterPlaylistLoader_.on("error", function () {
                        r.blacklistCurrentPlaylist(r.masterPlaylistLoader_.error)
                    }), this.masterPlaylistLoader_.on("mediachanging", function () {
                        r.mainSegmentLoader_.abort(), r.mainSegmentLoader_.pause()
                    }), this.masterPlaylistLoader_.on("mediachange", function () {
                        var e = r.masterPlaylistLoader_.media(), t = 1.5 * r.masterPlaylistLoader_.targetDuration * 1e3;
                        (0, o.isLowestEnabledRendition)(r.masterPlaylistLoader_.master, r.masterPlaylistLoader_.media()) ? r.requestOptions_.timeout = 0 : r.requestOptions_.timeout = t, r.mainSegmentLoader_.playlist(e, r.requestOptions_), r.mainSegmentLoader_.load(), r.tech_.trigger({
                            type: "mediachange",
                            bubbles: !0
                        })
                    }), this.masterPlaylistLoader_.on("playlistunchanged", function () {
                        var e = r.masterPlaylistLoader_.media();
                        r.stuckAtPlaylistEnd_(e) && (r.blacklistCurrentPlaylist({message: "Playlist no longer updating."}), r.tech_.trigger("playliststuck"))
                    }), this.masterPlaylistLoader_.on("renditiondisabled", function () {
                        r.tech_.trigger({type: "usage", name: "hls-rendition-disabled"})
                    }), this.masterPlaylistLoader_.on("renditionenabled", function () {
                        r.tech_.trigger({type: "usage", name: "hls-rendition-enabled"})
                    })
                }
            }, {
                key: "triggerPresenceUsage_", value: function (e, t) {
                    var i = e.mediaGroups || {}, r = !0, n = Object.keys(i.AUDIO);
                    for (var o in i.AUDIO) for (var a in i.AUDIO[o]) {
                        i.AUDIO[o][a].uri || (r = !1)
                    }
                    r && this.tech_.trigger({
                        type: "usage",
                        name: "hls-demuxed"
                    }), Object.keys(i.SUBTITLES).length && this.tech_.trigger({
                        type: "usage",
                        name: "hls-webvtt"
                    }), w.Playlist.isAes(t) && this.tech_.trigger({
                        type: "usage",
                        name: "hls-aes"
                    }), w.Playlist.isFmp4(t) && this.tech_.trigger({
                        type: "usage",
                        name: "hls-fmp4"
                    }), n.length && 1 < Object.keys(i.AUDIO[n[0]]).length && this.tech_.trigger({
                        type: "usage",
                        name: "hls-alternate-audio"
                    }), this.useCueTags_ && this.tech_.trigger({type: "usage", name: "hls-playlist-cue-tags"})
                }
            }, {
                key: "setupSegmentLoaderListeners_", value: function () {
                    var o = this;
                    this.mainSegmentLoader_.on("bandwidthupdate", function () {
                        var e = o.selectPlaylist(), t = o.masterPlaylistLoader_.media(), i = o.tech_.buffered(),
                            r = i.length ? i.end(i.length - 1) - o.tech_.currentTime() : 0, n = o.bufferLowWaterLine();
                        (!t.endList || o.duration() < l.default.MAX_BUFFER_LOW_WATER_LINE || e.attributes.BANDWIDTH < t.attributes.BANDWIDTH || n <= r) && o.masterPlaylistLoader_.media(e), o.tech_.trigger("bandwidthupdate")
                    }), this.mainSegmentLoader_.on("progress", function () {
                        o.trigger("progress")
                    }), this.mainSegmentLoader_.on("error", function () {
                        o.blacklistCurrentPlaylist(o.mainSegmentLoader_.error())
                    }), this.mainSegmentLoader_.on("syncinfoupdate", function () {
                        o.onSyncInfoUpdate_()
                    }), this.mainSegmentLoader_.on("timestampoffset", function () {
                        o.tech_.trigger({type: "usage", name: "hls-timestamp-offset"})
                    }), this.audioSegmentLoader_.on("syncinfoupdate", function () {
                        o.onSyncInfoUpdate_()
                    }), this.mainSegmentLoader_.on("ended", function () {
                        o.onEndOfStream()
                    }), this.mainSegmentLoader_.on("earlyabort", function () {
                        o.blacklistCurrentPlaylist({message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."}, 120)
                    }), this.mainSegmentLoader_.on("reseteverything", function () {
                        o.tech_.trigger("hls-reset")
                    }), this.mainSegmentLoader_.on("segmenttimemapping", function (e) {
                        o.tech_.trigger({type: "hls-segment-time-mapping", mapping: e.mapping})
                    }), this.audioSegmentLoader_.on("ended", function () {
                        o.onEndOfStream()
                    })
                }
            }, {
                key: "mediaSecondsLoaded_", value: function () {
                    return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
                }
            }, {
                key: "load", value: function () {
                    this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
                }
            }, {
                key: "fastQualityChange_", value: function () {
                    var e = this.selectPlaylist();
                    e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetLoader())
                }
            }, {
                key: "play", value: function () {
                    if (!this.setupFirstPlay()) {
                        this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_() && this.load();
                        var e = this.tech_.seekable();
                        return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.tech_.setCurrentTime(e.end(e.length - 1)) : void 0
                    }
                }
            }, {
                key: "setupFirstPlay", value: function () {
                    var e, t = this, i = this.masterPlaylistLoader_.media();
                    if (!i || this.tech_.paused() || this.hasPlayed_()) return !1;
                    if (!i.endList) {
                        var r = (e = t.seekable()).length ? y.default.browser.IE_VERSION && "html5" === t.mode_ && 0 === t.tech_.readyState() ? (t.tech_.one("loadedmetadata", function () {
                            t.trigger("firstplay"), t.tech_.setCurrentTime(e.end(0)), t.hasPlayed_ = function () {
                                return !0
                            }
                        }), {v: !1}) : (t.trigger("firstplay"), void t.tech_.setCurrentTime(e.end(0))) : {v: !1};
                        if ("object" == typeof r) return r.v
                    }
                    return this.hasPlayed_ = function () {
                        return !0
                    }, this.load(), !0
                }
            }, {
                key: "handleSourceOpen_", value: function () {
                    try {
                        this.setupSourceBuffers_()
                    } catch (e) {
                        return y.default.log.warn("Failed to create Source Buffers", e), this.mediaSource.endOfStream("decode")
                    }
                    if (this.tech_.autoplay()) {
                        var e = this.tech_.play();
                        void 0 !== e && "function" == typeof e.then && e.then(null, function (e) {
                        })
                    }
                    this.trigger("sourceopen")
                }
            }, {
                key: "onEndOfStream", value: function () {
                    var e = this.mainSegmentLoader_.ended_;
                    this.mediaTypes_.AUDIO.activePlaylistLoader && (e = e && this.audioSegmentLoader_.ended_), e && this.mediaSource.endOfStream()
                }
            }, {
                key: "stuckAtPlaylistEnd_", value: function (e) {
                    if (!this.seekable().length) return !1;
                    var t = this.syncController_.getExpiredTime(e, this.mediaSource.duration);
                    if (null === t) return !1;
                    var i = w.Playlist.playlistEnd(e, t), r = this.tech_.currentTime(), n = this.tech_.buffered();
                    if (!n.length) return i - r <= a.default.SAFE_TIME_DELTA;
                    var o = n.end(n.length - 1);
                    return o - r <= a.default.SAFE_TIME_DELTA && i - o <= a.default.SAFE_TIME_DELTA
                }
            }, {
                key: "blacklistCurrentPlaylist", value: function (e, t) {
                    void 0 === e && (e = {});
                    var i, r = void 0;
                    if (r = e.playlist || this.masterPlaylistLoader_.media(), t = t || e.blacklistDuration || this.blacklistDuration, !r) {
                        this.error = e;
                        try {
                            return this.mediaSource.endOfStream("network")
                        } catch (e) {
                            return this.trigger("error")
                        }
                    }
                    var n = 1 === this.masterPlaylistLoader_.master.playlists.filter(o.isEnabled).length;
                    return n ? (y.default.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(n)) : (r.excludeUntil = Date.now() + 1e3 * t, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({
                        type: "usage",
                        name: "hls-rendition-blacklisted"
                    }), i = this.selectPlaylist(), y.default.log.warn("Problem encountered with the current HLS playlist." + (e.message ? " " + e.message : "") + " Switching to another playlist."), this.masterPlaylistLoader_.media(i))
                }
            }, {
                key: "pauseLoading", value: function () {
                    this.mainSegmentLoader_.pause(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
                }
            }, {
                key: "setCurrentTime", value: function (e) {
                    var t = a.default.findRange(this.tech_.buffered(), e);
                    return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length && "flash" !== this.mode_ ? e : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()) : 0
                }
            }, {
                key: "duration", value: function () {
                    return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : w.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
                }
            }, {
                key: "seekable", value: function () {
                    return this.seekable_
                }
            }, {
                key: "onSyncInfoUpdate_", value: function () {
                    var e = void 0, t = void 0;
                    if (this.masterPlaylistLoader_) {
                        var i = this.masterPlaylistLoader_.media();
                        if (i) {
                            var r = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
                            if (null !== r && 0 !== (e = w.Playlist.seekable(i, r)).length) {
                                if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                    if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (r = this.syncController_.getExpiredTime(i, this.mediaSource.duration))) return;
                                    if (0 === (t = w.Playlist.seekable(i, r)).length) return
                                }
                                t ? t.start(0) > e.end(0) || e.start(0) > t.end(0) ? this.seekable_ = e : this.seekable_ = y.default.createTimeRanges([[t.start(0) > e.start(0) ? t.start(0) : e.start(0), t.end(0) < e.end(0) ? t.end(0) : e.end(0)]]) : this.seekable_ = e, this.tech_.trigger("seekablechanged")
                            }
                        }
                    }
                }
            }, {
                key: "updateDuration", value: function () {
                    var t = this, e = this.mediaSource.duration,
                        i = w.Playlist.duration(this.masterPlaylistLoader_.media()), r = this.tech_.buffered(),
                        n = function e() {
                            t.mediaSource.duration = i, t.tech_.trigger("durationchange"), t.mediaSource.removeEventListener("sourceopen", e)
                        };
                    0 < r.length && (i = Math.max(i, r.end(r.length - 1))), e !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", n) : n())
                }
            }, {
                key: "dispose", value: function () {
                    var r = this;
                    this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), ["AUDIO", "SUBTITLES"].forEach(function (e) {
                        var t = r.mediaTypes_[e].groups;
                        for (var i in t) t[i].forEach(function (e) {
                            e.playlistLoader && e.playlistLoader.dispose()
                        })
                    }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose()
                }
            }, {
                key: "master", value: function () {
                    return this.masterPlaylistLoader_.master
                }
            }, {
                key: "media", value: function () {
                    return this.masterPlaylistLoader_.media() || this.initialMedia_
                }
            }, {
                key: "setupSourceBuffers_", value: function () {
                    var e, t = this.masterPlaylistLoader_.media();
                    if (t && "open" === this.mediaSource.readyState) {
                        if ((e = d(this.masterPlaylistLoader_.master, t)).length < 1) return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri, this.mediaSource.endOfStream("decode");
                        this.mainSegmentLoader_.mimeType(e[0]), e[1] && this.audioSegmentLoader_.mimeType(e[1]), this.excludeIncompatibleVariants_(t)
                    }
                }
            }, {
                key: "excludeIncompatibleVariants_", value: function (e) {
                    var t = this.masterPlaylistLoader_.master, r = 2, n = null, i = void 0;
                    e.attributes.CODECS && (i = (0, T.parseCodecs)(e.attributes.CODECS), n = i.videoCodec, r = i.codecCount), t.playlists.forEach(function (e) {
                        var t = {codecCount: 2, videoCodec: null};
                        if (e.attributes.CODECS) {
                            var i = e.attributes.CODECS;
                            t = (0, T.parseCodecs)(i), window.MediaSource && window.MediaSource.isTypeSupported && !window.MediaSource.isTypeSupported('video/mp4; codecs="' + c(i) + '"') && (e.excludeUntil = 1 / 0)
                        }
                        t.codecCount !== r && (e.excludeUntil = 1 / 0), t.videoCodec !== n && (e.excludeUntil = 1 / 0)
                    })
                }
            }, {
                key: "updateAdCues_", value: function (e) {
                    var t = 0, i = this.seekable();
                    i.length && (t = i.start(0)), s.default.updateAdCues(e, this.cueTagsTrack_, t)
                }
            }, {
                key: "goalBufferLength", value: function () {
                    var e = this.tech_.currentTime(), t = l.default.GOAL_BUFFER_LENGTH,
                        i = l.default.GOAL_BUFFER_LENGTH_RATE, r = Math.max(t, l.default.MAX_GOAL_BUFFER_LENGTH);
                    return Math.min(t + e * i, r)
                }
            }, {
                key: "bufferLowWaterLine", value: function () {
                    var e = this.tech_.currentTime(), t = l.default.BUFFER_LOW_WATER_LINE,
                        i = l.default.BUFFER_LOW_WATER_LINE_RATE, r = Math.max(t, l.default.MAX_BUFFER_LOW_WATER_LINE);
                    return Math.min(t + e * i, r)
                }
            }]), f
        }();
        t.MasterPlaylistController = h
    }, "./node_modules/videojs-contrib-hls/es5/media-groups.js": function (e, t, i) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var y = r(i("./node_modules/video.js/dist/video.cjs.js")),
            _ = r(i("./node_modules/videojs-contrib-hls/es5/playlist-loader.js")), n = function () {
            }, c = function (e, t) {
                e.abort(), e.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null)
            };
        t.stopLoaders = c;
        var l = function (e, t) {
            (t.activePlaylistLoader = e).load()
        };
        t.startLoaders = l;
        var d = function (s, u) {
            return function () {
                var e = u.segmentLoaders, t = e[s], i = e.main, r = u.mediaTypes[s], n = r.activeTrack(),
                    o = r.activeGroup(n), a = r.activePlaylistLoader;
                c(t, r), o && (o.playlistLoader ? (t.resyncLoader(), l(o.playlistLoader, r)) : a && i.resetEverything())
            }
        };
        t.onGroupChanged = d;
        var h = function (s, u) {
            return function () {
                var e = u.segmentLoaders, t = e[s], i = e.main, r = u.mediaTypes[s], n = r.activeTrack(),
                    o = r.activeGroup(n), a = r.activePlaylistLoader;
                c(t, r), o && (o.playlistLoader ? (a !== o.playlistLoader && (t.track && t.track(n), t.resetEverything()), l(o.playlistLoader, r)) : i.resetEverything())
            }
        };
        t.onTrackChanged = h;
        var g = {
            AUDIO: function (u, l) {
                return function () {
                    var e = l.segmentLoaders[u], t = l.mediaTypes[u], i = l.blacklistCurrentPlaylist;
                    c(e, t);
                    var r = t.activeTrack(), n = t.activeGroup(), o = (n.filter(function (e) {
                        return e.default
                    })[0] || n[0]).id, a = t.tracks[o];
                    if (r !== a) {
                        for (var s in y.default.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), t.tracks) t.tracks[s].enabled = t.tracks[s] === a;
                        t.onTrackChanged()
                    } else i({message: "Problem encountered loading the default audio track."})
                }
            }, SUBTITLES: function (r, n) {
                return function () {
                    var e = n.segmentLoaders[r], t = n.mediaTypes[r];
                    y.default.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), c(e, t);
                    var i = t.activeTrack();
                    i && (i.mode = "disabled"), t.onTrackChanged()
                }
            }
        };
        t.onError = g;
        var b = {
            AUDIO: function (e, t, i) {
                if (t) {
                    var r = i.tech, n = i.requestOptions, o = i.segmentLoaders[e];
                    t.on("loadedmetadata", function () {
                        var e = t.media();
                        o.playlist(e, n), (!r.paused() || e.endList && "none" !== r.preload()) && o.load()
                    }), t.on("loadedplaylist", function () {
                        o.playlist(t.media(), n), r.paused() || o.load()
                    }), t.on("error", g[e](e, i))
                }
            }, SUBTITLES: function (e, t, i) {
                var r = i.tech, n = i.requestOptions, o = i.segmentLoaders[e], a = i.mediaTypes[e];
                t.on("loadedmetadata", function () {
                    var e = t.media();
                    o.playlist(e, n), o.track(a.activeTrack()), (!r.paused() || e.endList && "none" !== r.preload()) && o.load()
                }), t.on("loadedplaylist", function () {
                    o.playlist(t.media(), n), r.paused() || o.load()
                }), t.on("error", g[e](e, i))
            }
        };
        t.setupListeners = b;
        var f = {
            AUDIO: function (e, t) {
                var i, r, n = t.mode, o = t.hls, a = t.segmentLoaders[e], s = t.requestOptions,
                    u = t.master.mediaGroups, l = t.mediaTypes[e], c = l.groups, d = l.tracks;
                for (var h in u[e] && 0 !== Object.keys(u[e]).length && "html5" === n || (u[e] = {main: {default: {default: !0}}}), u[e]) for (var f in c[h] || (c[h] = []), u[e][h]) {
                    var p = u[e][h][f], m = void 0;
                    if (m = p.resolvedUri ? new _.default(p.resolvedUri, o, s) : null, p = y.default.mergeOptions({
                        id: f,
                        playlistLoader: m
                    }, p), b[e](e, p.playlistLoader, t), c[h].push(p), void 0 === d[f]) {
                        var v = new y.default.AudioTrack({
                            id: f,
                            kind: (i = p, r = void 0, r = i.default ? "main" : "alternative", i.characteristics && 0 <= i.characteristics.indexOf("public.accessibility.describes-video") && (r = "main-desc"), r),
                            enabled: !1,
                            language: p.language,
                            default: p.default,
                            label: f
                        });
                        d[f] = v
                    }
                }
                a.on("error", g[e](e, t))
            }, SUBTITLES: function (e, t) {
                var i = t.tech, r = t.hls, n = t.segmentLoaders[e], o = t.requestOptions, a = t.master.mediaGroups,
                    s = t.mediaTypes[e], u = s.groups, l = s.tracks;
                for (var c in a[e]) for (var d in u[c] || (u[c] = []), a[e][c]) if (!a[e][c][d].forced) {
                    var h = a[e][c][d];
                    if (h = y.default.mergeOptions({
                        id: d,
                        playlistLoader: new _.default(h.resolvedUri, r, o)
                    }, h), b[e](e, h.playlistLoader, t), u[c].push(h), void 0 === l[d]) {
                        var f = i.addRemoteTextTrack({
                            id: d,
                            kind: "subtitles",
                            enabled: !1,
                            language: h.language,
                            label: d
                        }, !1).track;
                        l[d] = f
                    }
                }
                n.on("error", g[e](e, t))
            }, "CLOSED-CAPTIONS": function (e, t) {
                var i = t.tech, r = t.master.mediaGroups, n = t.mediaTypes[e], o = n.groups, a = n.tracks;
                for (var s in r[e]) for (var u in o[s] || (o[s] = []), r[e][s]) {
                    var l = r[e][s][u];
                    if (l.instreamId.match(/CC\d/) && (o[s].push(y.default.mergeOptions({id: u}, l)), void 0 === a[u])) {
                        var c = i.addRemoteTextTrack({
                            id: l.instreamId,
                            kind: "captions",
                            enabled: !1,
                            language: l.language,
                            label: u
                        }, !1).track;
                        a[u] = c
                    }
                }
            }
        };
        t.initialize = f;
        var p = function (o, a) {
            return function (t) {
                var e = a.masterPlaylistLoader, i = a.mediaTypes[o].groups, r = e.media();
                if (!r) return null;
                var n = null;
                return r.attributes[o] && (n = i[r.attributes[o]]), n = n || i.main, void 0 === t ? n : null === t ? null : n.filter(function (e) {
                    return e.id === t.id
                })[0] || null
            }
        };
        t.activeGroup = p;
        var m = {
            AUDIO: function (i, r) {
                return function () {
                    var e = r.mediaTypes[i].tracks;
                    for (var t in e) if (e[t].enabled) return e[t];
                    return null
                }
            }, SUBTITLES: function (i, r) {
                return function () {
                    var e = r.mediaTypes[i].tracks;
                    for (var t in e) if ("showing" === e[t].mode) return e[t];
                    return null
                }
            }
        };
        t.activeTrack = m;
        t.setupMediaGroups = function (t) {
            ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (e) {
                f[e](e, t)
            });
            var i = t.mediaTypes, e = t.masterPlaylistLoader, r = t.tech, n = t.hls;
            ["AUDIO", "SUBTITLES"].forEach(function (e) {
                i[e].activeGroup = p(e, t), i[e].activeTrack = m[e](e, t), i[e].onGroupChanged = d(e, t), i[e].onTrackChanged = h(e, t)
            });
            var o = i.AUDIO.activeGroup(), a = (o.filter(function (e) {
                return e.default
            })[0] || o[0]).id;
            i.AUDIO.tracks[a].enabled = !0, i.AUDIO.onTrackChanged(), e.on("mediachange", function () {
                ["AUDIO", "SUBTITLES"].forEach(function (e) {
                    return i[e].onGroupChanged()
                })
            });
            var s = function () {
                i.AUDIO.onTrackChanged(), r.trigger({type: "usage", name: "hls-audio-change"})
            };
            for (var u in r.audioTracks().addEventListener("change", s), r.remoteTextTracks().addEventListener("change", i.SUBTITLES.onTrackChanged), n.on("dispose", function () {
                r.audioTracks().removeEventListener("change", s), r.remoteTextTracks().removeEventListener("change", i.SUBTITLES.onTrackChanged)
            }), r.clearTracks("audio"), i.AUDIO.tracks) r.audioTracks().addTrack(i.AUDIO.tracks[u])
        };
        t.createMediaTypes = function () {
            var t = {};
            return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (e) {
                t[e] = {
                    groups: {},
                    tracks: {},
                    activePlaylistLoader: null,
                    activeGroup: n,
                    activeTrack: n,
                    onGroupChanged: n,
                    onTrackChanged: n
                }
            }), t
        }
    }, "./node_modules/videojs-contrib-hls/es5/media-segment-request.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, n = i("./node_modules/video.js/dist/video.cjs.js"), y = (r = n) && r.__esModule ? r : {default: r},
            d = i("./node_modules/videojs-contrib-hls/es5/bin-utils.js"),
            _ = {FAILURE: 2, TIMEOUT: -101, ABORTED: -102};
        t.REQUEST_ERRORS = _;
        var g = function (e) {
            var t, i, r = {};
            return e.byterange && (r.Range = (t = e.byterange, i = t.offset + t.length - 1, "bytes=" + t.offset + "-" + i)), r
        }, b = function (e) {
            e.forEach(function (e) {
                e.abort()
            })
        }, T = function (e, t) {
            return t.timedout ? {
                status: t.status,
                message: "HLS request timed-out at URL: " + t.uri,
                code: _.TIMEOUT,
                xhr: t
            } : t.aborted ? {
                status: t.status,
                message: "HLS request aborted at URL: " + t.uri,
                code: _.ABORTED,
                xhr: t
            } : e ? {status: t.status, message: "HLS request errored at URL: " + t.uri, code: _.FAILURE, xhr: t} : null
        }, S = function (a, s, u) {
            var l = [], c = 0;
            return function (e, t) {
                if (e && (b(a), l.push(e)), (c += 1) === a.length) {
                    if (t.endOfAllRequests = Date.now(), 0 < l.length) {
                        var i = l.reduce(function (e, t) {
                            return t.code > e.code ? t : e
                        });
                        return u(i, t)
                    }
                    return t.encryptedBytes ? (n = t, o = u, (r = s).addEventListener("message", function e(t) {
                        if (t.data.source === n.requestId) {
                            r.removeEventListener("message", e);
                            var i = t.data.decrypted;
                            return n.bytes = new Uint8Array(i.bytes, i.byteOffset, i.byteLength), o(null, n)
                        }
                    }), void r.postMessage((0, d.createTransferableMessage)({
                        source: n.requestId,
                        encrypted: n.encryptedBytes,
                        key: n.key.bytes,
                        iv: n.key.iv
                    }), [n.encryptedBytes.buffer, n.key.bytes.buffer])) : u(null, t)
                }
                var r, n, o
            }
        }, w = function (n, o) {
            return function (e) {
                var t, i, r;
                return n.stats = y.default.mergeOptions(n.stats, (i = (t = e).target, (r = {
                    bandwidth: 1 / 0,
                    bytesReceived: 0,
                    roundTripTime: Date.now() - i.requestTime || 0
                }).bytesReceived = t.loaded, r.bandwidth = Math.floor(r.bytesReceived / r.roundTripTime * 8 * 1e3), r)), !n.stats.firstBytesReceivedAt && n.stats.bytesReceived && (n.stats.firstBytesReceivedAt = Date.now()), o(e, n)
            }
        };
        t.mediaSegmentRequest = function (e, t, i, r, n, o) {
            var a, s, u, l, c = [], d = S(c, i, o);
            if (r.key) {
                var h = e(y.default.mergeOptions(t, {
                    uri: r.key.resolvedUri,
                    responseType: "arraybuffer"
                }), (a = r, s = d, function (e, t) {
                    var i = t.response, r = T(e, t);
                    if (r) return s(r, a);
                    if (16 !== i.byteLength) return s({
                        status: t.status,
                        message: "Invalid HLS key at URL: " + t.uri,
                        code: _.FAILURE,
                        xhr: t
                    }, a);
                    var n = new DataView(i);
                    return a.key.bytes = new Uint32Array([n.getUint32(0), n.getUint32(4), n.getUint32(8), n.getUint32(12)]), s(null, a)
                }));
                c.push(h)
            }
            if (r.map && !r.map.bytes) {
                var f = e(y.default.mergeOptions(t, {
                    uri: r.map.resolvedUri,
                    responseType: "arraybuffer",
                    headers: g(r.map)
                }), (u = r, l = d, function (e, t) {
                    var i = t.response, r = T(e, t);
                    return r ? l(r, u) : 0 === i.byteLength ? l({
                        status: t.status,
                        message: "Empty HLS segment content at URL: " + t.uri,
                        code: _.FAILURE,
                        xhr: t
                    }, u) : (u.map.bytes = new Uint8Array(t.response), l(null, u))
                }));
                c.push(f)
            }
            var p, m, v = e(y.default.mergeOptions(t, {
                uri: r.resolvedUri,
                responseType: "arraybuffer",
                headers: g(r)
            }), (p = r, m = d, function (e, t) {
                var i, r = t.response, n = T(e, t);
                return n ? m(n, p) : 0 === r.byteLength ? m({
                    status: t.status,
                    message: "Empty HLS segment content at URL: " + t.uri,
                    code: _.FAILURE,
                    xhr: t
                }, p) : (p.stats = {
                    bandwidth: (i = t).bandwidth,
                    bytesReceived: i.bytesReceived || 0,
                    roundTripTime: i.roundTripTime || 0
                }, p.key ? p.encryptedBytes = new Uint8Array(t.response) : p.bytes = new Uint8Array(t.response), m(null, p))
            }));
            return v.addEventListener("progress", w(r, n)), c.push(v), function () {
                return b(c)
            }
        }
    }, "./node_modules/videojs-contrib-hls/es5/playback-watcher.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = n(i("./node_modules/global/window.js")), u = n(i("./node_modules/videojs-contrib-hls/es5/ranges.js")),
            l = n(i("./node_modules/video.js/dist/video.cjs.js")),
            c = ["seeking", "seeked", "pause", "playing", "error"], o = function () {
                function a(e) {
                    var t = this;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), this.tech_ = e.tech, this.seekable = e.seekable, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, e.debug && (this.logger_ = l.default.log.bind(l.default, "playback-watcher ->")), this.logger_("initialize");
                    var i = function () {
                        return t.monitorCurrentTime_()
                    }, r = function () {
                        return t.techWaiting_()
                    }, n = function () {
                        return t.cancelTimer_()
                    }, o = function () {
                        return t.fixesBadSeeks_()
                    };
                    this.tech_.on("seekablechanged", o), this.tech_.on("waiting", r), this.tech_.on(c, n), this.tech_.on("canplay", i), this.dispose = function () {
                        t.logger_("dispose"), t.tech_.off("seekablechanged", o), t.tech_.off("waiting", r), t.tech_.off(c, n), t.tech_.off("canplay", i), t.checkCurrentTimeTimeout_ && s.default.clearTimeout(t.checkCurrentTimeTimeout_), t.cancelTimer_()
                    }
                }

                return r(a, [{
                    key: "monitorCurrentTime_", value: function () {
                        this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && s.default.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = s.default.setTimeout(this.monitorCurrentTime_.bind(this), 250)
                    }
                }, {
                    key: "checkCurrentTime_", value: function () {
                        if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, void (this.lastRecordedTime = this.tech_.currentTime());
                        if (!this.tech_.paused() && !this.tech_.seeking()) {
                            var e = this.tech_.currentTime(), t = this.tech_.buffered();
                            if (this.lastRecordedTime === e && (!t.length || e + u.default.SAFE_TIME_DELTA >= t.end(t.length - 1))) return this.techWaiting_();
                            5 <= this.consecutiveUpdates && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = e)
                        }
                    }
                }, {
                    key: "cancelTimer_", value: function () {
                        this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null
                    }
                }, {
                    key: "fixesBadSeeks_", value: function () {
                        var e = this.tech_.seeking(), t = this.seekable(), i = this.tech_.currentTime(), r = void 0;
                        e && this.afterSeekableWindow_(t, i) && (r = t.end(t.length - 1));
                        e && this.beforeSeekableWindow_(t, i) && (r = t.start(0) + u.default.SAFE_TIME_DELTA);
                        return void 0 !== r && (this.logger_("Trying to seek outside of seekable at time " + i + " with seekable range " + u.default.printableRange(t) + ". Seeking to " + r + "."), this.tech_.setCurrentTime(r), !0)
                    }
                }, {
                    key: "waiting_", value: function () {
                        if (!this.techWaiting_()) {
                            var e = this.tech_.currentTime(), t = this.tech_.buffered(), i = u.default.findRange(t, e);
                            return i.length && e + 3 <= i.end(0) ? (this.cancelTimer_(), this.tech_.setCurrentTime(e), this.logger_("Stopped at " + e + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), void this.tech_.trigger({
                                type: "usage",
                                name: "hls-unknown-waiting"
                            })) : void 0
                        }
                    }
                }, {
                    key: "techWaiting_", value: function () {
                        var e = this.seekable(), t = this.tech_.currentTime();
                        if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
                        if (this.tech_.seeking() || null !== this.timer_) return !0;
                        if (this.beforeSeekableWindow_(e, t)) {
                            var i = e.end(e.length - 1);
                            return this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i), this.cancelTimer_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
                                type: "usage",
                                name: "hls-live-resync"
                            }), !0
                        }
                        var r = this.tech_.buffered(), n = u.default.findNextRange(r, t);
                        if (this.videoUnderflow_(n, r, t)) return this.cancelTimer_(), this.tech_.setCurrentTime(t), this.tech_.trigger({
                            type: "usage",
                            name: "hls-video-underflow"
                        }), !0;
                        if (0 < n.length) {
                            var o = n.start(0) - t;
                            return this.logger_("Stopped at " + t + ", setting timer for " + o + ", seeking to " + n.start(0)), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * o, t), !0
                        }
                        return !1
                    }
                }, {
                    key: "afterSeekableWindow_", value: function (e, t) {
                        return !!e.length && t > e.end(e.length - 1) + u.default.SAFE_TIME_DELTA
                    }
                }, {
                    key: "beforeSeekableWindow_", value: function (e, t) {
                        return !!(e.length && 0 < e.start(0) && t < e.start(0) - u.default.SAFE_TIME_DELTA)
                    }
                }, {
                    key: "videoUnderflow_", value: function (e, t, i) {
                        if (0 === e.length) {
                            var r = this.gapFromVideoUnderflow_(t, i);
                            if (r) return this.logger_("Encountered a gap in video from " + r.start + " to " + r.end + ". Seeking to current time " + i), !0
                        }
                        return !1
                    }
                }, {
                    key: "skipTheGap_", value: function (e) {
                        var t = this.tech_.buffered(), i = this.tech_.currentTime(), r = u.default.findNextRange(t, i);
                        this.cancelTimer_(), 0 !== r.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", r.start(0)), this.tech_.setCurrentTime(r.start(0) + u.default.TIME_FUDGE_FACTOR), this.tech_.trigger({
                            type: "usage",
                            name: "hls-gap-skip"
                        }))
                    }
                }, {
                    key: "gapFromVideoUnderflow_", value: function (e, t) {
                        for (var i = u.default.findGaps(e), r = 0; r < i.length; r++) {
                            var n = i.start(r), o = i.end(r);
                            if (t - n < 4 && 2 < t - n) return {start: n, end: o}
                        }
                        return null
                    }
                }, {
                    key: "logger_", value: function () {
                    }
                }]), a
            }();
        t.default = o, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/playlist-loader.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = n(i("./node_modules/videojs-contrib-hls/es5/resolve-url.js")),
            a = i("./node_modules/video.js/dist/video.cjs.js"), s = n(i("./node_modules/m3u8-parser/es5/index.js")),
            u = n(i("./node_modules/global/window.js")), l = function (e, t, i) {
                var r = t.slice();
                i = i || 0;
                for (var n = Math.min(e.length, t.length + i), o = i; o < n; o++) r[o - i] = (0, a.mergeOptions)(e[o], r[o - i]);
                return r
            };
        t.updateSegments = l;
        var c = function (e, t) {
            e.resolvedUri || (e.resolvedUri = (0, o.default)(t, e.uri)), e.key && !e.key.resolvedUri && (e.key.resolvedUri = (0, o.default)(t, e.key.uri)), e.map && !e.map.resolvedUri && (e.map.resolvedUri = (0, o.default)(t, e.map.uri))
        };
        t.resolveSegmentUris = c;
        var d = function (e, t) {
            var i = (0, a.mergeOptions)(e, {}), r = i.playlists.filter(function (e) {
                return e.uri === t.uri
            })[0];
            if (!r) return null;
            if (r.segments && t.segments && r.segments.length === t.segments.length && r.mediaSequence === t.mediaSequence) return null;
            var n = (0, a.mergeOptions)(r, t);
            r.segments && (n.segments = l(r.segments, t.segments, t.mediaSequence - r.mediaSequence)), n.segments.forEach(function (e) {
                c(e, n.resolvedUri)
            });
            for (var o = 0; o < i.playlists.length; o++) i.playlists[o].uri === t.uri && (i.playlists[o] = n);
            return i.playlists[t.uri] = n, i
        };
        t.updateMaster = d;
        var h = function (e) {
            for (var t = e.playlists.length; t--;) {
                var i = e.playlists[t];
                (e.playlists[i.uri] = i).resolvedUri = (0, o.default)(e.uri, i.uri), i.attributes || (i.attributes = {}, a.log.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
            }
        };
        t.setupMediaPlaylists = h;
        var f = function (n) {
            ["AUDIO", "SUBTITLES"].forEach(function (e) {
                for (var t in n.mediaGroups[e]) for (var i in n.mediaGroups[e][t]) {
                    var r = n.mediaGroups[e][t][i];
                    r.uri && (r.resolvedUri = (0, o.default)(n.uri, r.uri))
                }
            })
        };
        t.resolveMediaGroupUris = f;
        var p = function (e, t) {
            var i = e.segments[e.segments.length - 1];
            return t && i && i.duration ? 1e3 * i.duration : 500 * (e.targetDuration || 10)
        };
        t.refreshDelay = p;
        var m = function (e) {
            function n(e, t, i) {
                var r = this;
                if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), function (e, t, i) {
                    for (var r = !0; r;) {
                        var n = e, o = t, a = i;
                        r = !1, null === n && (n = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(n, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var u = s.get;
                            if (void 0 === u) return;
                            return u.call(a)
                        }
                        var l = Object.getPrototypeOf(n);
                        if (null === l) return;
                        e = l, t = o, i = a, r = !0, s = l = void 0
                    }
                }(Object.getPrototypeOf(n.prototype), "constructor", this).call(this), i = i || {}, this.srcUrl = e, this.hls_ = t, this.withCredentials = !!i.withCredentials, this.handleManifestRedirects = !!i.handleManifestRedirects, !this.srcUrl) throw new Error("A non-empty playlist URL is required");
                this.state = "HAVE_NOTHING", this.on("mediaupdatetimeout", function () {
                    "HAVE_METADATA" === r.state && (r.state = "HAVE_CURRENT_METADATA", r.request = r.hls_.xhr({
                        uri: (0, o.default)(r.master.uri, r.media().uri),
                        withCredentials: r.withCredentials
                    }, function (e, t) {
                        if (r.request) return e ? r.playlistRequestError(r.request, r.media().uri, "HAVE_METADATA") : void r.haveMetadata(r.request, r.media().uri)
                    }))
                })
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, a.EventTarget), r(n, [{
                key: "playlistRequestError", value: function (e, t, i) {
                    this.request = null, i && (this.state = i), this.error = {
                        playlist: this.master.playlists[t],
                        status: e.status,
                        message: "HLS playlist request error at URL: " + t,
                        responseText: e.responseText,
                        code: 500 <= e.status ? 4 : 2
                    }, this.trigger("error")
                }
            }, {
                key: "haveMetadata", value: function (e, t) {
                    var i = this;
                    this.request = null, this.state = "HAVE_METADATA";
                    var r = new s.default.Parser;
                    r.push(e.responseText), r.end(), r.manifest.uri = t, r.manifest.attributes = r.manifest.attributes || {};
                    var n = d(this.master, r.manifest);
                    this.targetDuration = r.manifest.targetDuration, n ? (this.master = n, this.media_ = this.master.playlists[r.manifest.uri]) : this.trigger("playlistunchanged"), this.media().endList || (u.default.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = u.default.setTimeout(function () {
                        i.trigger("mediaupdatetimeout")
                    }, p(this.media(), !!n))), this.trigger("loadedplaylist")
                }
            }, {
                key: "dispose", value: function () {
                    this.stopRequest(), u.default.clearTimeout(this.mediaUpdateTimeout)
                }
            }, {
                key: "stopRequest", value: function () {
                    if (this.request) {
                        var e = this.request;
                        this.request = null, e.onreadystatechange = null, e.abort()
                    }
                }
            }, {
                key: "media", value: function (i) {
                    var r = this;
                    if (!i) return this.media_;
                    if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                    var n = this.state;
                    if ("string" == typeof i) {
                        if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " + i);
                        i = this.master.playlists[i]
                    }
                    var e = !this.media_ || i.uri !== this.media_.uri;
                    if (this.master.playlists[i.uri].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = i, void (e && (this.trigger("mediachanging"), this.trigger("mediachange")));
                    if (e) {
                        if (this.state = "SWITCHING_MEDIA", this.request) {
                            if (i.resolvedUri === this.request.url) return;
                            this.request.onreadystatechange = null, this.request.abort(), this.request = null
                        }
                        this.media_ && this.trigger("mediachanging"), this.request = this.hls_.xhr({
                            uri: i.resolvedUri,
                            withCredentials: this.withCredentials
                        }, function (e, t) {
                            if (r.request) {
                                if (i.resolvedUri = r.resolveManifestRedirect(i.resolvedUri, t), e) return r.playlistRequestError(r.request, i.uri, n);
                                r.haveMetadata(t, i.uri), "HAVE_MASTER" === n ? r.trigger("loadedmetadata") : r.trigger("mediachange")
                            }
                        })
                    }
                }
            }, {
                key: "resolveManifestRedirect", value: function (e, t) {
                    return this.handleManifestRedirects && t.responseURL && e !== t.responseURL ? t.responseURL : e
                }
            }, {
                key: "pause", value: function () {
                    this.stopRequest(), u.default.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
                }
            }, {
                key: "load", value: function (e) {
                    var t = this;
                    u.default.clearTimeout(this.mediaUpdateTimeout);
                    var i = this.media();
                    if (e) {
                        var r = i ? i.targetDuration / 2 * 1e3 : 5e3;
                        this.mediaUpdateTimeout = u.default.setTimeout(function () {
                            return t.load()
                        }, r)
                    } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
                }
            }, {
                key: "start", value: function () {
                    var r = this;
                    this.started = !0, this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, function (e, t) {
                        if (r.request) {
                            if (r.request = null, e) return r.error = {
                                status: t.status,
                                message: "HLS playlist request error at URL: " + r.srcUrl,
                                responseText: t.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === r.state && (r.started = !1), r.trigger("error");
                            var i = new s.default.Parser;
                            return i.push(t.responseText), i.end(), r.state = "HAVE_MASTER", r.srcUrl = r.resolveManifestRedirect(r.srcUrl, t), i.manifest.uri = r.srcUrl, i.manifest.playlists ? (r.master = i.manifest, h(r.master), f(r.master), r.trigger("loadedplaylist"), void (r.request || r.media(i.manifest.playlists[0]))) : (r.master = {
                                mediaGroups: {
                                    AUDIO: {},
                                    VIDEO: {},
                                    "CLOSED-CAPTIONS": {},
                                    SUBTITLES: {}
                                },
                                uri: u.default.location.href,
                                playlists: [{uri: r.srcUrl, resolvedUri: r.srcUrl, attributes: {}}]
                            }, r.master.playlists[r.srcUrl] = r.master.playlists[0], r.haveMetadata(t, r.srcUrl), r.trigger("loadedmetadata"))
                        }
                    })
                }
            }]), n
        }();
        t.default = m
    }, "./node_modules/videojs-contrib-hls/es5/playlist-selectors.js": function (e, t, i) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var v = r(i("./node_modules/videojs-contrib-hls/es5/config.js")),
            y = r(i("./node_modules/videojs-contrib-hls/es5/playlist.js")),
            n = i("./node_modules/videojs-contrib-hls/es5/util/codecs.js"), o = function (e, t) {
                var i;
                return e && (i = window.getComputedStyle(e)) ? i[t] : ""
            }, _ = function (e, r) {
                var n = e.slice();
                e.sort(function (e, t) {
                    var i = r(e, t);
                    return 0 === i ? n.indexOf(e) - n.indexOf(t) : i
                })
            }, f = function (e, t) {
                var i = void 0, r = void 0;
                return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH), i = i || window.Number.MAX_VALUE, t.attributes.BANDWIDTH && (r = t.attributes.BANDWIDTH), i - (r = r || window.Number.MAX_VALUE)
            };
        t.comparePlaylistBandwidth = f;
        t.comparePlaylistResolution = function (e, t) {
            var i = void 0, r = void 0;
            return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width), i = i || window.Number.MAX_VALUE, t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (r = t.attributes.RESOLUTION.width), i === (r = r || window.Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - r
        };
        var a = function (e, t, i, r) {
            var n = e.playlists.map(function (e) {
                var t, i;
                return t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width, i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height, {
                    bandwidth: e.attributes.BANDWIDTH || window.Number.MAX_VALUE,
                    width: t,
                    height: i,
                    playlist: e
                }
            });
            _(n, function (e, t) {
                return e.bandwidth - t.bandwidth
            });
            var o = (n = n.filter(function (e) {
                return !y.default.isIncompatible(e.playlist)
            })).filter(function (e) {
                return y.default.isEnabled(e.playlist)
            });
            o.length || (o = n.filter(function (e) {
                return !y.default.isDisabled(e.playlist)
            }));
            var a = o.filter(function (e) {
                return e.bandwidth * v.default.BANDWIDTH_VARIANCE < t
            }), s = a[a.length - 1], u = a.filter(function (e) {
                return e.bandwidth === s.bandwidth
            })[0], l = a.filter(function (e) {
                return e.width && e.height
            });
            _(l, function (e, t) {
                return e.width - t.width
            });
            var c = l.filter(function (e) {
                return e.width === i && e.height === r
            });
            s = c[c.length - 1];
            var d = c.filter(function (e) {
                return e.bandwidth === s.bandwidth
            })[0], h = void 0, f = void 0, p = void 0;
            d || (f = (h = l.filter(function (e) {
                return e.width > i || e.height > r
            })).filter(function (e) {
                return e.width === h[0].width && e.height === h[0].height
            }), s = f[f.length - 1], p = f.filter(function (e) {
                return e.bandwidth === s.bandwidth
            })[0]);
            var m = p || d || u || o[0] || n[0];
            return m ? m.playlist : null
        };
        t.simpleSelector = a;
        t.lastBandwidthSelector = function () {
            return a(this.playlists.master, this.systemBandwidth, parseInt(o(this.tech_.el(), "width"), 10), parseInt(o(this.tech_.el(), "height"), 10))
        };
        t.movingAverageBandwidthSelector = function (e) {
            var t = -1;
            if (e < 0 || 1 < e) throw new Error("Moving average bandwidth decay must be between 0 and 1.");
            return function () {
                return t < 0 && (t = this.systemBandwidth), t = e * this.systemBandwidth + (1 - e) * t, a(this.playlists.master, t, parseInt(o(this.tech_.el(), "width"), 10), parseInt(o(this.tech_.el(), "height"), 10))
            }
        };
        t.minRebufferMaxBandwidthSelector = function (e) {
            var t = e.master, i = e.currentTime, r = e.bandwidth, n = e.duration, o = e.segmentDuration,
                a = e.timeUntilRebuffer, s = e.currentTimeline, u = e.syncController,
                l = t.playlists.filter(function (e) {
                    return !y.default.isIncompatible(e)
                }), c = l.filter(y.default.isEnabled);
            c.length || (c = l.filter(function (e) {
                return !y.default.isDisabled(e)
            }));
            var d = c.filter(y.default.hasAttribute.bind(null, "BANDWIDTH")).map(function (e) {
                var t = u.getSyncPoint(e, n, s, i) ? 1 : 2;
                return {playlist: e, rebufferingImpact: y.default.estimateSegmentRequestTime(o, r, e) * t - a}
            }), h = d.filter(function (e) {
                return e.rebufferingImpact <= 0
            });
            return _(h, function (e, t) {
                return f(t.playlist, e.playlist)
            }), h.length ? h[0] : (_(d, function (e, t) {
                return e.rebufferingImpact - t.rebufferingImpact
            }), d[0] || null)
        };
        t.lowestBitrateCompatibleVariantSelector = function () {
            var e = this.playlists.master.playlists.filter(y.default.isEnabled);
            return _(e, function (e, t) {
                return f(e, t)
            }), e.filter(function (e) {
                return (0, n.parseCodecs)(e.attributes.CODECS).videoCodec
            })[0] || null
        }
    }, "./node_modules/videojs-contrib-hls/es5/playlist.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, n = i("./node_modules/video.js/dist/video.cjs.js"), o = i("./node_modules/global/window.js"),
            a = (r = o) && r.__esModule ? r : {default: r}, s = function (e, t, i) {
                var r, n;
                return void 0 === t && (t = e.mediaSequence + e.segments.length), t < e.mediaSequence ? 0 : (r = function (e, t) {
                    var i = 0, r = t - e.mediaSequence, n = e.segments[r];
                    if (n) {
                        if (void 0 !== n.start) return {result: n.start, precise: !0};
                        if (void 0 !== n.end) return {result: n.end - n.duration, precise: !0}
                    }
                    for (; r--;) {
                        if (void 0 !== (n = e.segments[r]).end) return {result: i + n.end, precise: !0};
                        if (i += n.duration, void 0 !== n.start) return {result: i + n.start, precise: !0}
                    }
                    return {result: i, precise: !1}
                }(e, t)).precise ? r.result : (n = function (e, t) {
                    for (var i = 0, r = void 0, n = t - e.mediaSequence; n < e.segments.length; n++) {
                        if (void 0 !== (r = e.segments[n]).start) return {result: r.start - i, precise: !0};
                        if (i += r.duration, void 0 !== r.end) return {result: r.end - i, precise: !0}
                    }
                    return {result: -1, precise: !1}
                }(e, t)).precise ? n.result : r.result + i
            }, u = function (e, t, i) {
                if (!e) return 0;
                if ("number" != typeof i && (i = 0), void 0 === t) {
                    if (e.totalDuration) return e.totalDuration;
                    if (!e.endList) return a.default.Infinity
                }
                return s(e, t, i)
            };
        t.duration = u;
        var l = function (e, t, i) {
            var r = 0;
            if (i < t) {
                var n = [i, t];
                t = n[0], i = n[1]
            }
            if (t < 0) {
                for (var o = t; o < Math.min(0, i); o++) r += e.targetDuration;
                t = 0
            }
            for (o = t; o < i; o++) r += e.segments[o].duration;
            return r
        };
        t.sumDurations = l;
        var c = function (e) {
            if (!e.segments.length) return 0;
            for (var t = e.segments.length - 1, i = e.segments[t].duration || e.targetDuration, r = i + 2 * e.targetDuration; t-- && !(r <= (i += e.segments[t].duration));) ;
            return Math.max(0, t)
        };
        t.safeLiveIndex = c;
        var d = function (e, t, i) {
            if (!e || !e.segments) return null;
            if (e.endList) return u(e);
            if (null === t) return null;
            t = t || 0;
            var r = i ? c(e) : e.segments.length;
            return s(e, e.mediaSequence + r, t)
        };
        t.playlistEnd = d;
        var h = function (e, t) {
            var i = t || 0, r = d(e, t, !0);
            return null === r ? (0, n.createTimeRange)() : (0, n.createTimeRange)(i, r)
        };
        t.seekable = h;
        var f = function (e) {
            return e - Math.floor(e) == 0
        }, p = function (e, t) {
            if (f(t)) return t + .1 * e;
            for (var i = t.toString().split(".")[1].length, r = 1; r <= i; r++) {
                var n = Math.pow(10, r), o = t * n;
                if (f(o) || r === i) return (o + e) / n
            }
        }, m = p.bind(null, 1), v = p.bind(null, -1), y = function (e, t, i, r) {
            var n = void 0, o = void 0, a = e.segments.length, s = t - r;
            if (s < 0) {
                if (0 < i) for (n = i - 1; 0 <= n; n--) if (o = e.segments[n], 0 < (s += v(o.duration))) return {
                    mediaIndex: n,
                    startTime: r - l(e, i, n)
                };
                return {mediaIndex: 0, startTime: t}
            }
            if (i < 0) {
                for (n = i; n < 0; n++) if ((s -= e.targetDuration) < 0) return {mediaIndex: 0, startTime: t};
                i = 0
            }
            for (n = i; n < a; n++) if (o = e.segments[n], (s -= m(o.duration)) < 0) return {
                mediaIndex: n,
                startTime: r + l(e, i, n)
            };
            return {mediaIndex: a - 1, startTime: t}
        };
        t.getMediaInfoForTime = y;
        var _ = function (e) {
            return e.excludeUntil && e.excludeUntil > Date.now()
        };
        t.isBlacklisted = _;
        var g = function (e) {
            return e.excludeUntil && e.excludeUntil === 1 / 0
        };
        t.isIncompatible = g;
        var b = function (e) {
            var t = _(e);
            return !e.disabled && !t
        };
        t.isEnabled = b;
        var T = function (e) {
            return e.disabled
        };
        t.isDisabled = T;
        var S = function (e) {
            for (var t = 0; t < e.segments.length; t++) if (e.segments[t].key) return !0;
            return !1
        };
        t.isAes = S;
        var w = function (e) {
            for (var t = 0; t < e.segments.length; t++) if (e.segments[t].map) return !0;
            return !1
        };
        t.isFmp4 = w;
        var k = function (e, t) {
            return t.attributes && t.attributes[e]
        };
        t.hasAttribute = k;
        var E = function (e, t, i) {
            var r = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
            return k("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * r) / t : NaN
        };
        t.estimateSegmentRequestTime = E;
        var C = function (e, t) {
            if (1 === e.playlists.length) return !0;
            var i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
            return 0 === e.playlists.filter(function (e) {
                return !!b(e) && (e.attributes.BANDWIDTH || 0) < i
            }).length
        };
        t.isLowestEnabledRendition = C, t.default = {
            duration: u,
            seekable: h,
            safeLiveIndex: c,
            getMediaInfoForTime: y,
            isEnabled: b,
            isDisabled: T,
            isBlacklisted: _,
            isIncompatible: g,
            playlistEnd: d,
            isAes: S,
            isFmp4: w,
            hasAttribute: k,
            estimateSegmentRequestTime: E,
            isLowestEnabledRendition: C
        }
    }, "./node_modules/videojs-contrib-hls/es5/ranges.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var f = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function (e, t) {
                var i = [], r = !0, n = !1, o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return i
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
        var r, n = i("./node_modules/video.js/dist/video.cjs.js"), p = (r = n) && r.__esModule ? r : {default: r},
            o = function (e, t) {
                var i = [], r = void 0;
                if (e && e.length) for (r = 0; r < e.length; r++) t(e.start(r), e.end(r)) && i.push([e.start(r), e.end(r)]);
                return p.default.createTimeRanges(i)
            }, m = function (e, t) {
                var i = null, r = null, n = 0, o = [], a = [];
                if (!(e && e.length && t && t.length)) return p.default.createTimeRange();
                for (var s = e.length; s--;) o.push({time: e.start(s), type: "start"}), o.push({
                    time: e.end(s),
                    type: "end"
                });
                for (s = t.length; s--;) o.push({time: t.start(s), type: "start"}), o.push({time: t.end(s), type: "end"});
                for (o.sort(function (e, t) {
                    return e.time - t.time
                }), s = 0; s < o.length; s++) "start" === o[s].type ? 2 === ++n && (i = o[s].time) : "end" === o[s].type && 1 === --n && (r = o[s].time), null !== i && null !== r && (a.push([i, r]), r = i = null);
                return p.default.createTimeRanges(a)
            };
        t.default = {
            findRange: function (e, i) {
                return o(e, function (e, t) {
                    return e - 1 / 30 <= i && i <= t + 1 / 30
                })
            }, findNextRange: function (e, t) {
                return o(e, function (e) {
                    return t <= e - 1 / 30
                })
            }, findGaps: function (e) {
                if (e.length < 2) return p.default.createTimeRanges();
                for (var t = [], i = 1; i < e.length; i++) {
                    var r = e.end(i - 1), n = e.start(i);
                    t.push([r, n])
                }
                return p.default.createTimeRanges(t)
            }, findSoleUncommonTimeRangesEnd: function (e, t) {
                var i = void 0, r = void 0, n = void 0, o = [], a = [], s = function (e) {
                    return e[0] <= n && e[1] >= n
                };
                if (e) for (i = 0; i < e.length; i++) r = e.start(i), n = e.end(i), a.push([r, n]);
                if (t) for (i = 0; i < t.length; i++) r = t.start(i), n = t.end(i), a.some(s) || o.push(n);
                return 1 !== o.length ? null : o[0]
            }, getSegmentBufferedPercent: function (e, t, i, r) {
                var n, o, a, s, u, l = e + t, c = p.default.createTimeRanges([[e, l]]),
                    d = p.default.createTimeRanges([[(n = e, o = [i, l], a = f(o, 2), s = a[0], u = a[1], Math.min(Math.max(s, n), u)), l]]);
                if (d.start(0) === d.end(0)) return 0;
                var h = function (e, t, i, r) {
                    for (var n = t.end(0) - t.start(0), o = n - (e.end(0) - e.start(0)), a = m(e, r), s = m(t, r), u = 0, l = 0, c = a.length; c--;) u += a.end(c) - a.start(c), a.start(c) === i && (u += o);
                    for (c = s.length; c--;) l += s.end(c) - s.start(c);
                    return Math.max(u, l) / n * 100
                }(d, c, i, r);
                return isNaN(h) || h === 1 / 0 || h === -1 / 0 ? 0 : h
            }, TIME_FUDGE_FACTOR: 1 / 30, SAFE_TIME_DELTA: .1, printableRange: function (e) {
                var t = [];
                if (!e || !e.length) return "";
                for (var i = 0; i < e.length; i++) t.push(e.start(i) + " => " + e.end(i));
                return t.join(", ")
            }, timeUntilRebuffer: function (e, t) {
                var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
                return ((e.length ? e.end(e.length - 1) : 0) - t) / i
            }
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/reload-source-on-error.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, n = i("./node_modules/video.js/dist/video.cjs.js"), c = (r = n) && r.__esModule ? r : {default: r}, d = {
            errorInterval: 30, getSource: function (e) {
                return e(this.tech({IWillNotUseThisInPlugins: !0}).currentSource_)
            }
        };
        t.default = function (e) {
            !function t(i, e) {
                var r = 0, n = 0, o = c.default.mergeOptions(d, e);
                i.ready(function () {
                    i.trigger({type: "usage", name: "hls-error-reload-initialized"})
                });
                var a = function () {
                    n && i.currentTime(n)
                }, s = function (e) {
                    null != e && (n = i.duration() !== 1 / 0 && i.currentTime() || 0, i.one("loadedmetadata", a), i.src(e), i.trigger({
                        type: "usage",
                        name: "hls-error-reload"
                    }), i.play())
                }, u = function () {
                    if (Date.now() - r < 1e3 * o.errorInterval) i.trigger({
                        type: "usage",
                        name: "hls-error-reload-canceled"
                    }); else {
                        if (o.getSource && "function" == typeof o.getSource) return r = Date.now(), o.getSource.call(i, s);
                        c.default.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
                    }
                }, l = function e() {
                    i.off("loadedmetadata", a), i.off("error", u), i.off("dispose", e)
                };
                i.on("error", u), i.on("dispose", l), i.reloadSourceOnError = function (e) {
                    l(), t(i, e)
                }
            }(this, e)
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/rendition-mixin.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var l = i("./node_modules/videojs-contrib-hls/es5/playlist.js"), r = function e(t, i, r) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n, o, a, s = t.masterPlaylistController_.fastQualityChange_.bind(t.masterPlaylistController_);
            if (i.attributes.RESOLUTION) {
                var u = i.attributes.RESOLUTION;
                this.width = u.width, this.height = u.height
            }
            this.bandwidth = i.attributes.BANDWIDTH, this.id = r, this.enabled = (n = t.playlists, o = i.uri, a = s, function (e) {
                var t = n.master.playlists[o], i = (0, l.isIncompatible)(t), r = (0, l.isEnabled)(t);
                return void 0 === e ? r : (e ? delete t.disabled : t.disabled = !0, e === r || i || (a(), e ? n.trigger("renditionenabled") : n.trigger("renditiondisabled")), e)
            })
        };
        t.default = function (i) {
            var e = i.playlists;
            i.representations = function () {
                return e.master.playlists.filter(function (e) {
                    return !(0, l.isIncompatible)(e)
                }).map(function (e, t) {
                    return new r(i, e, e.uri)
                })
            }
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/resolve-url.js": function (e, t, i) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(i("./node_modules/url-toolkit/src/url-toolkit.js")), o = r(i("./node_modules/global/window.js"));
        t.default = function (e, t) {
            return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = n.default.buildAbsoluteURL(o.default.location.href, e)), n.default.buildAbsoluteURL(e, t))
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/segment-loader.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var d = r(i("./node_modules/videojs-contrib-hls/es5/playlist.js")),
            o = r(i("./node_modules/video.js/dist/video.cjs.js")),
            a = r(i("./node_modules/videojs-contrib-hls/es5/source-updater.js")),
            l = r(i("./node_modules/videojs-contrib-hls/es5/config.js")), s = r(i("./node_modules/global/window.js")),
            u = r(i("./node_modules/videojs-contrib-media-sources/es5/remove-cues-from-track.js")),
            c = i("./node_modules/videojs-contrib-hls/es5/bin-utils.js"),
            h = i("./node_modules/videojs-contrib-hls/es5/media-segment-request.js"),
            f = i("./node_modules/videojs-contrib-hls/es5/ranges.js"),
            p = i("./node_modules/videojs-contrib-hls/es5/playlist-selectors.js"), m = function (e, t, i) {
                if (!e || !t) return !1;
                var r = i === e.segments.length;
                return e.endList && "open" === t.readyState && r
            }, v = function (e) {
                return "number" == typeof e && isFinite(e)
            }, y = function (e, t, i) {
                return "main" === e && t && i ? i.containsAudio || i.containsVideo ? t.containsVideo && !i.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !t.containsVideo && i.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null
            };
        t.illegalMediaSwitch = y;
        var _ = function (e, t, i) {
            var r = void 0;
            return r = e.length && 0 < e.start(0) && e.start(0) < t ? e.start(0) : t - 30, Math.min(r, t - i)
        };
        t.safeBackBufferTrimTime = _;
        var g = function (e) {
            function r(e) {
                var t = this, i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r), function (e, t, i) {
                    for (var r = !0; r;) {
                        var n = e, o = t, a = i;
                        r = !1, null === n && (n = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(n, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var u = s.get;
                            if (void 0 === u) return;
                            return u.call(a)
                        }
                        var l = Object.getPrototypeOf(n);
                        if (null === l) return;
                        e = l, t = o, i = a, r = !0, s = l = void 0
                    }
                }(Object.getPrototypeOf(r.prototype), "constructor", this).call(this), !e) throw new TypeError("Initialization settings are required");
                if ("function" != typeof e.currentTime) throw new TypeError("No currentTime getter specified");
                if (!e.mediaSource) throw new TypeError("No MediaSource specified");
                this.state = "INIT", this.bandwidth = e.bandwidth, this.throughput = {
                    rate: 0,
                    count: 0
                }, this.roundTrip = NaN, this.resetStats_(), this.mediaIndex = null, this.hasPlayed_ = e.hasPlayed, this.currentTime_ = e.currentTime, this.seekable_ = e.seekable, this.seeking_ = e.seeking, this.duration_ = e.duration, this.mediaSource_ = e.mediaSource, this.hls_ = e.hls, this.loaderType_ = e.loaderType, this.startingMedia_ = void 0, this.segmentMetadataTrack_ = e.segmentMetadataTrack, this.goalBufferLength_ = e.goalBufferLength, this.checkBufferTimeout_ = null, this.error_ = void 0, this.currentTimeline_ = -1, this.pendingSegment_ = null, this.mimeType_ = null, this.sourceUpdater_ = null, this.xhrOptions_ = null, this.activeInitSegmentId_ = null, this.initSegments_ = {}, this.decrypter_ = e.decrypter, this.syncController_ = e.syncController, this.syncPoint_ = {
                    segmentIndex: 0,
                    time: 0
                }, this.syncController_.on("syncinfoupdate", function () {
                    return t.trigger("syncinfoupdate")
                }), this.mediaSource_.addEventListener("sourceopen", function () {
                    return t.ended_ = !1
                }), this.fetchAtBuffer_ = !1, i.debug && (this.logger_ = o.default.log.bind(o.default, "segment-loader", this.loaderType_, "->"))
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, o["default"].EventTarget), n(r, [{
                key: "resetStats_", value: function () {
                    this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0
                }
            }, {
                key: "dispose", value: function () {
                    this.state = "DISPOSED", this.pause(), this.abort_(), this.sourceUpdater_ && this.sourceUpdater_.dispose(), this.resetStats_()
                }
            }, {
                key: "abort", value: function () {
                    "WAITING" === this.state ? (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null)
                }
            }, {
                key: "abort_", value: function () {
                    this.pendingSegment_ && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null
                }
            }, {
                key: "error", value: function (e) {
                    return void 0 !== e && (this.error_ = e), this.pendingSegment_ = null, this.error_
                }
            }, {
                key: "endOfStream", value: function () {
                    this.ended_ = !0, this.pause(), this.trigger("ended")
                }
            }, {
                key: "buffered_", value: function () {
                    return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : o.default.createTimeRanges()
                }
            }, {
                key: "initSegment", value: function (e) {
                    var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                    if (!e) return null;
                    var i = (0, c.initSegmentId)(e), r = this.initSegments_[i];
                    return t && !r && e.bytes && (this.initSegments_[i] = r = {
                        resolvedUri: e.resolvedUri,
                        byterange: e.byterange,
                        bytes: e.bytes
                    }), r || e
                }
            }, {
                key: "couldBeginLoading_", value: function () {
                    return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
                }
            }, {
                key: "load", value: function () {
                    if (this.monitorBuffer_(), this.playlist_) {
                        if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                        !this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
                    }
                }
            }, {
                key: "init_", value: function () {
                    return this.state = "READY", this.sourceUpdater_ = new a.default(this.mediaSource_, this.mimeType_), this.resetEverything(), this.monitorBuffer_()
                }
            }, {
                key: "playlist", value: function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if (e) {
                        var i = this.playlist_, r = this.pendingSegment_;
                        if (this.playlist_ = e, this.xhrOptions_ = t, this.hasPlayed_() || (e.syncInfo = {
                            mediaSequence: e.mediaSequence,
                            time: 0
                        }), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                        if (i && i.uri === e.uri) {
                            var n = e.mediaSequence - i.mediaSequence;
                            this.logger_("mediaSequenceDiff", n), null !== this.mediaIndex && (this.mediaIndex -= n), r && (r.mediaIndex -= n, 0 <= r.mediaIndex && (r.segment = e.segments[r.mediaIndex])), this.syncController_.saveExpiredSegmentInfo(i, e)
                        } else null !== this.mediaIndex && this.resyncLoader()
                    }
                }
            }, {
                key: "pause", value: function () {
                    this.checkBufferTimeout_ && (s.default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
                }
            }, {
                key: "paused", value: function () {
                    return null === this.checkBufferTimeout_
                }
            }, {
                key: "mimeType", value: function (e) {
                    this.mimeType_ || (this.mimeType_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_())
                }
            }, {
                key: "resetEverything", value: function () {
                    this.ended_ = !1, this.resetLoader(), this.remove(0, this.duration_()), this.trigger("reseteverything")
                }
            }, {
                key: "resetLoader", value: function () {
                    this.fetchAtBuffer_ = !1, this.resyncLoader()
                }
            }, {
                key: "resyncLoader", value: function () {
                    this.mediaIndex = null, this.syncPoint_ = null, this.abort()
                }
            }, {
                key: "remove", value: function (e, t) {
                    this.sourceUpdater_ && this.sourceUpdater_.remove(e, t), (0, u.default)(e, t, this.segmentMetadataTrack_)
                }
            }, {
                key: "monitorBuffer_", value: function () {
                    this.checkBufferTimeout_ && s.default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = s.default.setTimeout(this.monitorBufferTick_.bind(this), 1)
                }
            }, {
                key: "monitorBufferTick_", value: function () {
                    "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && s.default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = s.default.setTimeout(this.monitorBufferTick_.bind(this), 500)
                }
            }, {
                key: "fillBuffer_", value: function () {
                    if (!this.sourceUpdater_.updating()) {
                        this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                        var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                        if (e) m(this.playlist_, this.mediaSource_, e.mediaIndex) ? this.endOfStream() : (e.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && ((e.timeline !== this.currentTimeline_ || null !== e.startOfSegment && e.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(), e.timestampOffset = e.startOfSegment), this.loadSegment_(e))
                    }
                }
            }, {
                key: "checkBuffer_", value: function (e, t, i, r, n, o) {
                    var a = 0, s = void 0;
                    e.length && (a = e.end(e.length - 1));
                    var u, l = Math.max(0, a - n);
                    if (!t.segments.length) return null;
                    if (l >= this.goalBufferLength_()) return null;
                    if (!r && 1 <= l) return null;
                    if (this.logger_("checkBuffer_", "mediaIndex:", i, "hasPlayed:", r, "currentTime:", n, "syncPoint:", o, "fetchAtBuffer:", this.fetchAtBuffer_, "bufferedTime:", l), null === o) return i = this.getSyncSegmentCandidate_(t), this.logger_("getSync", "mediaIndex:", i), this.generateSegmentInfo_(t, i, null, !0);
                    if (null !== i) {
                        this.logger_("walkForward", "mediaIndex:", i + 1);
                        var c = t.segments[i];
                        return s = c && c.end ? c.end : a, this.generateSegmentInfo_(t, i + 1, s, !1)
                    }
                    this.fetchAtBuffer_ ? (i = (u = d.default.getMediaInfoForTime(t, a, o.segmentIndex, o.time)).mediaIndex, s = u.startTime) : (i = (u = d.default.getMediaInfoForTime(t, n, o.segmentIndex, o.time)).mediaIndex, s = u.startTime);
                    return this.logger_("getMediaIndexForTime", "mediaIndex:", i, "startOfSegment:", s), this.generateSegmentInfo_(t, i, s, !1)
                }
            }, {
                key: "getSyncSegmentCandidate_", value: function (e) {
                    var t = this;
                    if (-1 === this.currentTimeline_) return 0;
                    var i = e.segments.map(function (e, t) {
                        return {timeline: e.timeline, segmentIndex: t}
                    }).filter(function (e) {
                        return e.timeline === t.currentTimeline_
                    });
                    return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(e.segments.length - 1, 0)
                }
            }, {
                key: "generateSegmentInfo_", value: function (e, t, i, r) {
                    if (t < 0 || t >= e.segments.length) return null;
                    var n = e.segments[t];
                    return {
                        requestId: "segment-loader-" + Math.random(),
                        uri: n.resolvedUri,
                        mediaIndex: t,
                        isSyncRequest: r,
                        startOfSegment: i,
                        playlist: e,
                        bytes: null,
                        encryptedBytes: null,
                        timestampOffset: null,
                        timeline: n.timeline,
                        duration: n.duration,
                        segment: n
                    }
                }
            }, {
                key: "abortRequestEarly_", value: function (e) {
                    if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
                    if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3) return !1;
                    var t = this.currentTime_(), i = e.bandwidth, r = this.pendingSegment_.duration,
                        n = d.default.estimateSegmentRequestTime(r, i, this.playlist_, e.bytesReceived),
                        o = (0, f.timeUntilRebuffer)(this.buffered_(), t, this.hls_.tech_.playbackRate()) - 1;
                    if (n <= o) return !1;
                    var a = (0, p.minRebufferMaxBandwidthSelector)({
                        master: this.hls_.playlists.master,
                        currentTime: t,
                        bandwidth: i,
                        duration: this.duration_(),
                        segmentDuration: r,
                        timeUntilRebuffer: o,
                        currentTimeline: this.currentTimeline_,
                        syncController: this.syncController_
                    });
                    if (a) {
                        var s = n - o - a.rebufferingImpact, u = .5;
                        return o <= f.TIME_FUDGE_FACTOR && (u = 1), !a.playlist || a.playlist.uri === this.playlist_.uri || s < u ? !1 : (this.bandwidth = a.playlist.attributes.BANDWIDTH * l.default.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
                    }
                }
            }, {
                key: "handleProgress_", value: function (e, t) {
                    this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(t.stats) && this.trigger("progress")
                }
            }, {
                key: "loadSegment_", value: function (e) {
                    this.state = "WAITING", this.pendingSegment_ = e, this.trimBackBuffer_(e), e.abortRequests = (0, h.mediaSegmentRequest)(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.createSimplifiedSegmentObj_(e), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
                }
            }, {
                key: "trimBackBuffer_", value: function (e) {
                    var t = _(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
                    0 < t && this.remove(0, t)
                }
            }, {
                key: "createSimplifiedSegmentObj_", value: function (e) {
                    var t = e.segment, i = {resolvedUri: t.resolvedUri, byterange: t.byterange, requestId: e.requestId};
                    if (t.key) {
                        var r = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
                        i.key = {resolvedUri: t.key.resolvedUri, iv: r}
                    }
                    return t.map && (i.map = this.initSegment(t.map)), i
                }
            }, {
                key: "segmentRequestFinished_", value: function (e, t) {
                    if (this.mediaRequests += 1, t.stats && (this.mediaBytesTransferred += t.stats.bytesReceived, this.mediaTransferDuration += t.stats.roundTripTime), this.pendingSegment_) {
                        if (t.requestId === this.pendingSegment_.requestId) {
                            if (e) return this.pendingSegment_ = null, this.state = "READY", e.code === h.REQUEST_ERRORS.ABORTED ? void (this.mediaRequestsAborted += 1) : (this.pause(), e.code === h.REQUEST_ERRORS.TIMEOUT ? (this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1, this.error(e), void this.trigger("error")));
                            this.bandwidth = t.stats.bandwidth, this.roundTrip = t.stats.roundTripTime, t.map && (t.map = this.initSegment(t.map, !0)), this.processSegmentResponse_(t)
                        }
                    } else this.mediaRequestsAborted += 1
                }
            }, {
                key: "processSegmentResponse_", value: function (e) {
                    var t = this.pendingSegment_;
                    t.bytes = e.bytes, e.map && (t.segment.map.bytes = e.map.bytes), t.endOfAllRequests = e.endOfAllRequests, this.handleSegment_()
                }
            }, {
                key: "handleSegment_", value: function () {
                    var i = this;
                    if (this.pendingSegment_) {
                        var e = this.pendingSegment_, r = e.segment, t = this.syncController_.probeSegmentInfo(e);
                        void 0 === this.startingMedia_ && t && (t.containsAudio || t.containsVideo) && (this.startingMedia_ = {
                            containsAudio: t.containsAudio,
                            containsVideo: t.containsVideo
                        });
                        var n = y(this.loaderType_, this.startingMedia_, t);
                        if (n) return this.error({message: n, blacklistDuration: 1 / 0}), void this.trigger("error");
                        if (e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void (this.state = "READY");
                        null !== e.timestampOffset && e.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(e.timestampOffset), this.trigger("timestampoffset"));
                        var o = this.syncController_.mappingForTimeline(e.timeline);
                        null !== o && this.trigger({
                            type: "segmenttimemapping",
                            mapping: o
                        }), this.state = "APPENDING", r.map && function () {
                            var e = (0, c.initSegmentId)(r.map);
                            if (!i.activeInitSegmentId_ || i.activeInitSegmentId_ !== e) {
                                var t = i.initSegment(r.map);
                                i.sourceUpdater_.appendBuffer(t.bytes, function () {
                                    i.activeInitSegmentId_ = e
                                })
                            }
                        }(), e.byteLength = e.bytes.byteLength, "number" == typeof r.start && "number" == typeof r.end ? this.mediaSecondsLoaded += r.end - r.start : this.mediaSecondsLoaded += r.duration, this.sourceUpdater_.appendBuffer(e.bytes, this.handleUpdateEnd_.bind(this))
                    } else this.state = "READY"
                }
            }, {
                key: "handleUpdateEnd_", value: function () {
                    if (this.logger_("handleUpdateEnd_", "segmentInfo:", this.pendingSegment_), !this.pendingSegment_) return this.state = "READY", void (this.paused() || this.monitorBuffer_());
                    var e = this.pendingSegment_, t = e.segment, i = null !== this.mediaIndex;
                    (this.pendingSegment_ = null, this.recordThroughput_(e), this.addSegmentMetadataCue_(e), this.state = "READY", this.mediaIndex = e.mediaIndex, this.fetchAtBuffer_ = !0, this.currentTimeline_ = e.timeline, this.trigger("syncinfoupdate"), t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration) ? this.resetEverything() : (i && this.trigger("bandwidthupdate"), this.trigger("progress"), m(e.playlist, this.mediaSource_, e.mediaIndex + 1) && this.endOfStream(), this.paused() || this.monitorBuffer_())
                }
            }, {
                key: "recordThroughput_", value: function (e) {
                    var t = this.throughput.rate, i = Date.now() - e.endOfAllRequests + 1,
                        r = Math.floor(e.byteLength / i * 8 * 1e3);
                    this.throughput.rate += (r - t) / ++this.throughput.count
                }
            }, {
                key: "logger_", value: function () {
                }
            }, {
                key: "addSegmentMetadataCue_", value: function (e) {
                    if (this.segmentMetadataTrack_) {
                        var t = e.segment, i = t.start, r = t.end;
                        if (v(i) && v(r)) {
                            (0, u.default)(i, r, this.segmentMetadataTrack_);
                            var n = s.default.WebKitDataCue || s.default.VTTCue, o = {
                                bandwidth: e.playlist.attributes.BANDWIDTH,
                                resolution: e.playlist.attributes.RESOLUTION,
                                codecs: e.playlist.attributes.CODECS,
                                byteLength: e.byteLength,
                                uri: e.uri,
                                timeline: e.timeline,
                                playlist: e.playlist.uri,
                                start: i,
                                end: r
                            }, a = new n(i, r, JSON.stringify(o));
                            a.value = o, this.segmentMetadataTrack_.addCue(a)
                        }
                    }
                }
            }]), r
        }();
        t.default = g
    }, "./node_modules/videojs-contrib-hls/es5/source-updater.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();
        var n, o = i("./node_modules/video.js/dist/video.cjs.js"), a = (n = o) && n.__esModule ? n : {default: n},
            s = function () {
            }, u = function () {
                function n(e, t) {
                    var i = this;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r = function () {
                        i.sourceBuffer_ = e.addSourceBuffer(t), i.onUpdateendCallback_ = function () {
                            var e = i.pendingCallback_;
                            i.pendingCallback_ = null, e && e(), i.runCallback_()
                        }, i.sourceBuffer_.addEventListener("updateend", i.onUpdateendCallback_), i.runCallback_()
                    };
                    this.callbacks_ = [], this.pendingCallback_ = null, this.timestampOffset_ = 0, this.mediaSource = e, this.processedAppend_ = !1, "closed" === e.readyState ? e.addEventListener("sourceopen", r) : r()
                }

                return r(n, [{
                    key: "abort", value: function (e) {
                        var t = this;
                        this.processedAppend_ && this.queueCallback_(function () {
                            t.sourceBuffer_.abort()
                        }, e)
                    }
                }, {
                    key: "appendBuffer", value: function (e, t) {
                        var i = this;
                        this.processedAppend_ = !0, this.queueCallback_(function () {
                            i.sourceBuffer_.appendBuffer(e)
                        }, t)
                    }
                }, {
                    key: "buffered", value: function () {
                        return this.sourceBuffer_ ? this.sourceBuffer_.buffered : a.default.createTimeRanges()
                    }
                }, {
                    key: "remove", value: function (e, t) {
                        var i = this;
                        this.processedAppend_ && this.queueCallback_(function () {
                            i.sourceBuffer_.remove(e, t)
                        }, s)
                    }
                }, {
                    key: "updating", value: function () {
                        return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_
                    }
                }, {
                    key: "timestampOffset", value: function (e) {
                        var t = this;
                        return void 0 !== e && (this.queueCallback_(function () {
                            t.sourceBuffer_.timestampOffset = e
                        }), this.timestampOffset_ = e), this.timestampOffset_
                    }
                }, {
                    key: "queueCallback_", value: function (e, t) {
                        this.callbacks_.push([e.bind(this), t]), this.runCallback_()
                    }
                }, {
                    key: "runCallback_", value: function () {
                        var e = void 0;
                        !this.updating() && this.callbacks_.length && (e = this.callbacks_.shift(), this.pendingCallback_ = e[1], e[0]())
                    }
                }, {
                    key: "dispose", value: function () {
                        this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_), this.sourceBuffer_ && "open" === this.mediaSource.readyState && this.sourceBuffer_.abort()
                    }
                }]), n
            }();
        t.default = u, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/sync-controller.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = n(i("./node_modules/mux.js/lib/mp4/probe.js")),
            a = i("./node_modules/mux.js/lib/tools/ts-inspector.js"),
            l = i("./node_modules/videojs-contrib-hls/es5/playlist.js"),
            s = n(i("./node_modules/video.js/dist/video.cjs.js")), u = [{
                name: "VOD", run: function (e, t, i, r, n) {
                    if (i === 1 / 0) return null;
                    return {time: 0, segmentIndex: 0}
                }
            }, {
                name: "ProgramDateTime", run: function (e, t, i, r, n) {
                    return e.datetimeToDisplayTime && t.dateTimeObject ? {
                        time: t.dateTimeObject.getTime() / 1e3 + e.datetimeToDisplayTime,
                        segmentIndex: 0
                    } : null
                }
            }, {
                name: "Segment", run: function (e, t, i, r, n) {
                    var o = t.segments || [], a = null, s = null;
                    n = n || 0;
                    for (var u = 0; u < o.length; u++) {
                        var l = o[u];
                        if (l.timeline === r && void 0 !== l.start) {
                            var c = Math.abs(n - l.start);
                            if (null !== s && s < c) break;
                            (!a || null === s || c <= s) && (s = c, a = {time: l.start, segmentIndex: u})
                        }
                    }
                    return a
                }
            }, {
                name: "Discontinuity", run: function (e, t, i, r, n) {
                    var o = null;
                    if (n = n || 0, t.discontinuityStarts && t.discontinuityStarts.length) for (var a = null, s = 0; s < t.discontinuityStarts.length; s++) {
                        var u = t.discontinuityStarts[s], l = t.discontinuitySequence + s + 1, c = e.discontinuities[l];
                        if (c) {
                            var d = Math.abs(n - c.time);
                            if (null !== a && a < d) break;
                            (!o || null === a || d <= a) && (a = d, o = {time: c.time, segmentIndex: u})
                        }
                    }
                    return o
                }
            }, {
                name: "Playlist", run: function (e, t, i, r, n) {
                    return t.syncInfo ? {
                        time: t.syncInfo.time,
                        segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence
                    } : null
                }
            }];
        t.syncPointStrategies = u;
        var c = function (e) {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), function (e, t, i) {
                    for (var r = !0; r;) {
                        var n = e, o = t, a = i;
                        r = !1, null === n && (n = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(n, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var u = s.get;
                            if (void 0 === u) return;
                            return u.call(a)
                        }
                        var l = Object.getPrototypeOf(n);
                        if (null === l) return;
                        e = l, t = o, i = a, r = !0, s = l = void 0
                    }
                }(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.inspectCache_ = void 0, this.timelines = [], this.discontinuities = [], this.datetimeToDisplayTime = null, e.debug && (this.logger_ = s.default.log.bind(s.default, "sync-controller ->"))
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, s["default"].EventTarget), r(t, [{
                key: "getSyncPoint", value: function (e, t, i, r) {
                    var n = this.runStrategies_(e, t, i, r);
                    return n.length ? this.selectSyncPoint_(n, {key: "time", value: r}) : null
                }
            }, {
                key: "getExpiredTime", value: function (e, t) {
                    if (!e || !e.segments) return null;
                    var i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
                    if (!i.length) return null;
                    var r = this.selectSyncPoint_(i, {key: "segmentIndex", value: 0});
                    return 0 < r.segmentIndex && (r.time *= -1), Math.abs(r.time + (0, l.sumDurations)(e, r.segmentIndex, 0))
                }
            }, {
                key: "runStrategies_", value: function (e, t, i, r) {
                    for (var n = [], o = 0; o < u.length; o++) {
                        var a = u[o], s = a.run(this, e, t, i, r);
                        s && (s.strategy = a.name, n.push({
                            strategy: a.name,
                            syncPoint: s
                        }), this.logger_("syncPoint found via <" + a.name + ">:", s))
                    }
                    return n
                }
            }, {
                key: "selectSyncPoint_", value: function (e, t) {
                    for (var i = e[0].syncPoint, r = Math.abs(e[0].syncPoint[t.key] - t.value), n = e[0].strategy, o = 1; o < e.length; o++) {
                        var a = Math.abs(e[o].syncPoint[t.key] - t.value);
                        a < r && (r = a, i = e[o].syncPoint, n = e[o].strategy)
                    }
                    return this.logger_("syncPoint with strategy <" + n + "> chosen: ", i), i
                }
            }, {
                key: "saveExpiredSegmentInfo", value: function (e, t) {
                    for (var i = t.mediaSequence - e.mediaSequence - 1; 0 <= i; i--) {
                        var r = e.segments[i];
                        if (r && void 0 !== r.start) {
                            t.syncInfo = {
                                mediaSequence: e.mediaSequence + i,
                                time: r.start
                            }, this.logger_("playlist sync:", t.syncInfo), this.trigger("syncinfoupdate");
                            break
                        }
                    }
                }
            }, {
                key: "setDateTimeMapping", value: function (e) {
                    if (!this.datetimeToDisplayTime && e.dateTimeObject) {
                        var t = e.dateTimeObject.getTime() / 1e3;
                        this.datetimeToDisplayTime = -t
                    }
                }
            }, {
                key: "reset", value: function () {
                    this.inspectCache_ = void 0
                }
            }, {
                key: "probeSegmentInfo", value: function (e) {
                    var t = e.segment, i = e.playlist, r = void 0;
                    return (r = t.map ? this.probeMp4Segment_(e) : this.probeTsSegment_(e)) && this.calculateSegmentTimeMapping_(e, r) && (this.saveDiscontinuitySyncInfo_(e), i.syncInfo || (i.syncInfo = {
                        mediaSequence: i.mediaSequence + e.mediaIndex,
                        time: t.start
                    })), r
                }
            }, {
                key: "probeMp4Segment_", value: function (e) {
                    var t = e.segment, i = o.default.timescale(t.map.bytes), r = o.default.startTime(i, e.bytes);
                    return null !== e.timestampOffset && (e.timestampOffset -= r), {start: r, end: r + t.duration}
                }
            }, {
                key: "probeTsSegment_", value: function (e) {
                    var t = (0, a.inspect)(e.bytes, this.inspectCache_), i = void 0, r = void 0;
                    return t ? (t.video && 2 === t.video.length ? (this.inspectCache_ = t.video[1].dts, i = t.video[0].dtsTime, r = t.video[1].dtsTime) : t.audio && 2 === t.audio.length && (this.inspectCache_ = t.audio[1].dts, i = t.audio[0].dtsTime, r = t.audio[1].dtsTime), {
                        start: i,
                        end: r,
                        containsVideo: t.video && 2 === t.video.length,
                        containsAudio: t.audio && 2 === t.audio.length
                    }) : null
                }
            }, {
                key: "timestampOffsetForTimeline", value: function (e) {
                    return void 0 === this.timelines[e] ? null : this.timelines[e].time
                }
            }, {
                key: "mappingForTimeline", value: function (e) {
                    return void 0 === this.timelines[e] ? null : this.timelines[e].mapping
                }
            }, {
                key: "calculateSegmentTimeMapping_", value: function (e, t) {
                    var i = e.segment, r = this.timelines[e.timeline];
                    if (null !== e.timestampOffset) this.logger_("tsO:", e.timestampOffset), r = {
                        time: e.startOfSegment,
                        mapping: e.startOfSegment - t.start
                    }, this.timelines[e.timeline] = r, this.trigger("timestampoffset"), i.start = e.startOfSegment, i.end = t.end + r.mapping; else {
                        if (!r) return !1;
                        i.start = t.start + r.mapping, i.end = t.end + r.mapping
                    }
                    return !0
                }
            }, {
                key: "saveDiscontinuitySyncInfo_", value: function (e) {
                    var t = e.playlist, i = e.segment;
                    if (i.discontinuity) this.discontinuities[i.timeline] = {
                        time: i.start,
                        accuracy: 0
                    }; else if (t.discontinuityStarts.length) for (var r = 0; r < t.discontinuityStarts.length; r++) {
                        var n = t.discontinuityStarts[r], o = t.discontinuitySequence + r + 1, a = n - e.mediaIndex,
                            s = Math.abs(a);
                        if (!this.discontinuities[o] || this.discontinuities[o].accuracy > s) {
                            var u = void 0;
                            u = a < 0 ? i.start - (0, l.sumDurations)(t, e.mediaIndex, n) : i.end + (0, l.sumDurations)(t, e.mediaIndex + 1, n), this.discontinuities[o] = {
                                time: u,
                                accuracy: s
                            }
                        }
                    }
                }
            }, {
                key: "logger_", value: function () {
                }
            }]), t
        }();
        t.default = c
    }, "./node_modules/videojs-contrib-hls/es5/util/codecs.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.parseCodecs = function () {
            var e, t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], i = {codecCount: 0};
            return i.codecCount = t.split(",").length, i.codecCount = i.codecCount || 2, (e = /(^|\s|,)+(avc1)([^ ,]*)/i.exec(t)) && (i.videoCodec = e[2], i.videoObjectTypeIndicator = e[3]), i.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(t), i.audioProfile = i.audioProfile && i.audioProfile[2], i
        }
    }, "./node_modules/videojs-contrib-hls/es5/videojs-contrib-hls.js": function (e, t, i) {
        "use strict";
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }(), a = function (e, t, i) {
            for (var r = !0; r;) {
                var n = e, o = t, a = i;
                r = !1, null === n && (n = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(n, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var u = s.get;
                    if (void 0 === u) return;
                    return u.call(a)
                }
                var l = Object.getPrototypeOf(n);
                if (null === l) return;
                e = l, t = o, i = a, r = !0, s = l = void 0
            }
        };

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = n(i("./node_modules/global/document.js")),
            o = n(i("./node_modules/videojs-contrib-hls/es5/playlist-loader.js")),
            u = n(i("./node_modules/videojs-contrib-hls/es5/playlist.js")),
            l = n(i("./node_modules/videojs-contrib-hls/es5/xhr.js")),
            c = i("./node_modules/aes-decrypter/es5/index.js"),
            d = n(i("./node_modules/videojs-contrib-hls/es5/bin-utils.js")),
            h = i("./node_modules/videojs-contrib-media-sources/es5/videojs-contrib-media-sources.js"),
            f = n(i("./node_modules/m3u8-parser/es5/index.js")), p = n(i("./node_modules/video.js/dist/video.cjs.js")),
            m = i("./node_modules/videojs-contrib-hls/es5/master-playlist-controller.js"),
            v = n(i("./node_modules/videojs-contrib-hls/es5/config.js")),
            y = n(i("./node_modules/videojs-contrib-hls/es5/rendition-mixin.js")),
            _ = n(i("./node_modules/global/window.js")),
            g = n(i("./node_modules/videojs-contrib-hls/es5/playback-watcher.js")),
            b = n(i("./node_modules/videojs-contrib-hls/es5/reload-source-on-error.js")),
            T = i("./node_modules/videojs-contrib-hls/es5/playlist-selectors.js"), S = {
                PlaylistLoader: o.default,
                Playlist: u.default,
                Decrypter: c.Decrypter,
                AsyncStream: c.AsyncStream,
                decrypt: c.decrypt,
                utils: d.default,
                STANDARD_PLAYLIST_SELECTOR: T.lastBandwidthSelector,
                INITIAL_PLAYLIST_SELECTOR: T.lowestBitrateCompatibleVariantSelector,
                comparePlaylistBandwidth: T.comparePlaylistBandwidth,
                comparePlaylistResolution: T.comparePlaylistResolution,
                xhr: (0, l.default)()
            };
        ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function (t) {
            Object.defineProperty(S, t, {
                get: function () {
                    return p.default.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), v.default[t]
                }, set: function (e) {
                    p.default.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), "number" != typeof e || e < 0 ? p.default.log.warn("value of Hls." + t + " must be greater than or equal to 0") : v.default[t] = e
                }
            })
        });
        var w = function (e, t) {
            for (var i = t.media(), r = -1, n = 0; n < e.length; n++) if (e[n].id === i.uri) {
                r = n;
                break
            }
            e.selectedIndex_ = r, e.trigger({selectedIndex: r, type: "change"})
        };
        S.canPlaySource = function () {
            return p.default.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
        }, S.supportsNativeHls = function () {
            var t = s.default.createElement("video");
            if (!p.default.getTech("Html5").isSupported()) return !1;
            return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function (e) {
                return /maybe|probably/i.test(t.canPlayType(e))
            })
        }(), S.isSupported = function () {
            return p.default.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
        };
        var k = p.default.getComponent("Component"), E = function (e) {
            function o(e, t, i) {
                var r = this;
                if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), a(Object.getPrototypeOf(o.prototype), "constructor", this).call(this, t, i.hls), t.options_ && t.options_.playerId) {
                    var n = (0, p.default)(t.options_.playerId);
                    n.hasOwnProperty("hls") || Object.defineProperty(n, "hls", {
                        get: function () {
                            return p.default.log.warn("player.hls is deprecated. Use player.tech_.hls instead."), t.trigger({
                                type: "usage",
                                name: "hls-player-access"
                            }), r
                        }
                    })
                }
                if (this.tech_ = t, this.source_ = e, this.stats = {}, this.ignoreNextSeekingEvent_ = !1, this.setOptions_(), this.options_.overrideNative && (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
                this.on(s.default, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function (e) {
                    var t = s.default.fullscreenElement || s.default.webkitFullscreenElement || s.default.mozFullScreenElement || s.default.msFullscreenElement;
                    t && t.contains(r.tech_.el()) && r.masterPlaylistController_.fastQualityChange_()
                }), this.on(this.tech_, "seeking", function () {
                    this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = !1 : this.setCurrentTime(this.tech_.currentTime())
                }), this.on(this.tech_, "error", function () {
                    this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
                }), this.on(this.tech_, "play", this.play)
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(o, k), r(o, [{
                key: "setOptions_", value: function () {
                    var t = this;
                    this.options_.withCredentials = this.options_.withCredentials || !1, "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = 4194304), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && 4194304 === this.options_.bandwidth, ["withCredentials", "bandwidth", "handleManifestRedirects"].forEach(function (e) {
                        void 0 !== t.source_[e] && (t.options_[e] = t.source_[e])
                    }), this.bandwidth = this.options_.bandwidth
                }
            }, {
                key: "src", value: function (e) {
                    var t = this;
                    e && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = S, this.masterPlaylistController_ = new m.MasterPlaylistController(this.options_), this.playbackWatcher_ = new g.default(p.default.mergeOptions(this.options_, {
                        seekable: function () {
                            return t.seekable()
                        }
                    })), this.masterPlaylistController_.on("error", function () {
                        p.default.players[t.tech_.options_.playerId].error(t.masterPlaylistController_.error)
                    }), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : S.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = S.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
                        selectPlaylist: {
                            get: function () {
                                return this.masterPlaylistController_.selectPlaylist
                            }, set: function (e) {
                                this.masterPlaylistController_.selectPlaylist = e.bind(this)
                            }
                        }, throughput: {
                            get: function () {
                                return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                            }, set: function (e) {
                                this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
                            }
                        }, bandwidth: {
                            get: function () {
                                return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                            }, set: function (e) {
                                this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e, this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                                    rate: 0,
                                    count: 0
                                }
                            }
                        }, systemBandwidth: {
                            get: function () {
                                var e = 1 / (this.bandwidth || 1), t = void 0;
                                return t = 0 < this.throughput ? 1 / this.throughput : 0, Math.floor(1 / (e + t))
                            }, set: function () {
                                p.default.log.error('The "systemBandwidth" property is read-only')
                            }
                        }
                    }), Object.defineProperties(this.stats, {
                        bandwidth: {
                            get: function () {
                                return t.bandwidth || 0
                            }, enumerable: !0
                        }, mediaRequests: {
                            get: function () {
                                return t.masterPlaylistController_.mediaRequests_() || 0
                            }, enumerable: !0
                        }, mediaRequestsAborted: {
                            get: function () {
                                return t.masterPlaylistController_.mediaRequestsAborted_() || 0
                            }, enumerable: !0
                        }, mediaRequestsTimedout: {
                            get: function () {
                                return t.masterPlaylistController_.mediaRequestsTimedout_() || 0
                            }, enumerable: !0
                        }, mediaRequestsErrored: {
                            get: function () {
                                return t.masterPlaylistController_.mediaRequestsErrored_() || 0
                            }, enumerable: !0
                        }, mediaTransferDuration: {
                            get: function () {
                                return t.masterPlaylistController_.mediaTransferDuration_() || 0
                            }, enumerable: !0
                        }, mediaBytesTransferred: {
                            get: function () {
                                return t.masterPlaylistController_.mediaBytesTransferred_() || 0
                            }, enumerable: !0
                        }, mediaSecondsLoaded: {
                            get: function () {
                                return t.masterPlaylistController_.mediaSecondsLoaded_() || 0
                            }, enumerable: !0
                        }
                    }), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.masterPlaylistController_.on("selectedinitialmedia", function () {
                        (0, y.default)(t)
                    }), this.on(this.masterPlaylistController_, "progress", function () {
                        this.tech_.trigger("progress")
                    }), this.on(this.masterPlaylistController_, "firstplay", function () {
                        this.ignoreNextSeekingEvent_ = !0
                    }), this.tech_.ready(function () {
                        return t.setupQualityLevels_()
                    }), this.tech_.el() && this.tech_.src(p.default.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
                }
            }, {
                key: "setupQualityLevels_", value: function () {
                    var i = this, e = p.default.players[this.tech_.options_.playerId];
                    e && e.qualityLevels && (this.qualityLevels_ = e.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", function () {
                        var t, e;
                        t = i.qualityLevels_, (e = i).representations().forEach(function (e) {
                            t.addQualityLevel(e)
                        }), w(t, e.playlists)
                    }), this.playlists.on("mediachange", function () {
                        w(i.qualityLevels_, i.playlists)
                    }))
                }
            }, {
                key: "play", value: function () {
                    this.masterPlaylistController_.play()
                }
            }, {
                key: "setCurrentTime", value: function (e) {
                    this.masterPlaylistController_.setCurrentTime(e)
                }
            }, {
                key: "duration", value: function () {
                    return this.masterPlaylistController_.duration()
                }
            }, {
                key: "seekable", value: function () {
                    return this.masterPlaylistController_.seekable()
                }
            }, {
                key: "dispose", value: function () {
                    this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), a(Object.getPrototypeOf(o.prototype), "dispose", this).call(this)
                }
            }]), o
        }(), C = function r(n) {
            return {
                canHandleSource: function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        i = p.default.mergeOptions(p.default.options, t);
                    return (!i.hls || !i.hls.mode || i.hls.mode === n) && r.canPlayType(e.type, i)
                }, handleSource: function (e, t) {
                    var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        r = p.default.mergeOptions(p.default.options, i, {hls: {mode: n}});
                    return "flash" === n && t.setTimeout(function () {
                        t.trigger("loadstart")
                    }, 1), t.hls = new E(e, t, r), t.hls.xhr = (0, l.default)(), t.hls.src(e.src), t.hls
                }, canPlayType: function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        i = p.default.mergeOptions(p.default.options, t);
                    return r.canPlayType(e, i) ? "maybe" : ""
                }
            }
        };
        C.canPlayType = function (e, t) {
            if (p.default.browser.IE_VERSION && p.default.browser.IE_VERSION <= 10) return !1;
            return !(!t.hls.overrideNative && S.supportsNativeHls) && /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(e)
        }, void 0 !== p.default.MediaSource && void 0 !== p.default.URL || (p.default.MediaSource = h.MediaSource, p.default.URL = h.URL);
        var x = p.default.getTech("Flash");
        h.MediaSource.supportsNativeMediaSources() && p.default.getTech("Html5").registerSourceHandler(C("html5"), 0), _.default.Uint8Array && x && x.registerSourceHandler(C("flash")), p.default.HlsHandler = E, p.default.HlsSourceHandler = C, p.default.Hls = S, p.default.use || p.default.registerComponent("Hls", S), p.default.m3u8 = f.default, p.default.options.hls = p.default.options.hls || {}, p.default.registerPlugin ? p.default.registerPlugin("reloadSourceOnError", b.default) : p.default.plugin("reloadSourceOnError", b.default), e.exports = {
            Hls: S,
            HlsHandler: E,
            HlsSourceHandler: C
        }
    }, "./node_modules/videojs-contrib-hls/es5/vtt-segment-loader.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = n(i("./node_modules/videojs-contrib-hls/es5/segment-loader.js")),
            a = n(i("./node_modules/video.js/dist/video.cjs.js")), s = n(i("./node_modules/global/window.js")),
            u = n(i("./node_modules/videojs-contrib-media-sources/es5/remove-cues-from-track.js")),
            l = i("./node_modules/videojs-contrib-hls/es5/bin-utils.js"),
            c = new Uint8Array("\n\n".split("").map(function (e) {
                return e.charCodeAt(0)
            })), d = function (e) {
                return String.fromCharCode.apply(null, e)
            }, h = function (e) {
                function i(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), function (e, t, i) {
                        for (var r = !0; r;) {
                            var n = e, o = t, a = i;
                            r = !1, null === n && (n = Function.prototype);
                            var s = Object.getOwnPropertyDescriptor(n, o);
                            if (void 0 !== s) {
                                if ("value" in s) return s.value;
                                var u = s.get;
                                if (void 0 === u) return;
                                return u.call(a)
                            }
                            var l = Object.getPrototypeOf(n);
                            if (null === l) return;
                            e = l, t = o, i = a, r = !0, s = l = void 0
                        }
                    }(Object.getPrototypeOf(i.prototype), "constructor", this).call(this, e, t), this.mediaSource_ = null, this.subtitlesTrack_ = null
                }

                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(i, o["default"]), r(i, [{
                    key: "buffered_", value: function () {
                        if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return a.default.createTimeRanges();
                        var e = this.subtitlesTrack_.cues, t = e[0].startTime, i = e[e.length - 1].startTime;
                        return a.default.createTimeRanges([[t, i]])
                    }
                }, {
                    key: "initSegment", value: function (e) {
                        var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                        if (!e) return null;
                        var i = (0, l.initSegmentId)(e), r = this.initSegments_[i];
                        if (t && !r && e.bytes) {
                            var n = c.byteLength + e.bytes.byteLength, o = new Uint8Array(n);
                            o.set(e.bytes), o.set(c, e.bytes.byteLength), this.initSegments_[i] = r = {
                                resolvedUri: e.resolvedUri,
                                byterange: e.byterange,
                                bytes: o
                            }
                        }
                        return r || e
                    }
                }, {
                    key: "couldBeginLoading_", value: function () {
                        return this.playlist_ && this.subtitlesTrack_ && !this.paused()
                    }
                }, {
                    key: "init_", value: function () {
                        return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
                    }
                }, {
                    key: "track", value: function (e) {
                        return void 0 === e || (this.subtitlesTrack_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_
                    }
                }, {
                    key: "remove", value: function (e, t) {
                        (0, u.default)(e, t, this.subtitlesTrack_)
                    }
                }, {
                    key: "fillBuffer_", value: function () {
                        var e = this;
                        this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                        var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                        if (t = this.skipEmptySegments_(t)) {
                            if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
                                return this.syncController_.one("timestampoffset", function () {
                                    e.state = "READY", e.paused() || e.monitorBuffer_()
                                }), void (this.state = "WAITING_ON_TIMELINE")
                            }
                            this.loadSegment_(t)
                        }
                    }
                }, {
                    key: "skipEmptySegments_", value: function (e) {
                        for (; e && e.segment.empty;) e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
                        return e
                    }
                }, {
                    key: "handleSegment_", value: function () {
                        var t = this;
                        if (this.pendingSegment_ && this.subtitlesTrack_) {
                            this.state = "APPENDING";
                            var e, i = this.pendingSegment_, r = i.segment;
                            if ("function" != typeof s.default.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
                                var n = (e = function () {
                                    t.handleSegment_()
                                }, t.state = "WAITING_ON_VTTJS", t.subtitlesTrack_.tech_.one("vttjsloaded", e), t.subtitlesTrack_.tech_.one("vttjserror", function () {
                                    t.subtitlesTrack_.tech_.off("vttjsloaded", e), t.error({message: "Error loading vtt.js"}), t.state = "READY", t.pause(), t.trigger("error")
                                }), {v: void 0});
                                if ("object" == typeof n) return n.v
                            }
                            r.requested = !0;
                            try {
                                this.parseVTTCues_(i)
                            } catch (e) {
                                return this.error({message: e.message}), this.state = "READY", this.pause(), this.trigger("error")
                            }
                            if (this.updateTimeMapping_(i, this.syncController_.timelines[i.timeline], this.playlist_), i.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void (this.state = "READY");
                            i.byteLength = i.bytes.byteLength, this.mediaSecondsLoaded += r.duration, i.cues.length && this.remove(i.cues[0].endTime, i.cues[i.cues.length - 1].endTime), i.cues.forEach(function (e) {
                                t.subtitlesTrack_.addCue(e)
                            }), this.handleUpdateEnd_()
                        } else this.state = "READY"
                    }
                }, {
                    key: "parseVTTCues_", value: function (t) {
                        var e = void 0, i = !1;
                        "function" == typeof s.default.TextDecoder ? e = new s.default.TextDecoder("utf8") : (e = s.default.WebVTT.StringDecoder(), i = !0);
                        var r = new s.default.WebVTT.Parser(s.default, s.default.vttjs, e);
                        if (t.cues = [], t.timestampmap = {
                            MPEGTS: 0,
                            LOCAL: 0
                        }, r.oncue = t.cues.push.bind(t.cues), r.ontimestampmap = function (e) {
                            return t.timestampmap = e
                        }, r.onparsingerror = function (e) {
                            a.default.log.warn("Error encountered when parsing cues: " + e.message)
                        }, t.segment.map) {
                            var n = t.segment.map.bytes;
                            i && (n = d(n)), r.parse(n)
                        }
                        var o = t.bytes;
                        i && (o = d(o)), r.parse(o), r.flush()
                    }
                }, {
                    key: "updateTimeMapping_", value: function (e, t, i) {
                        var r = e.segment;
                        if (t) if (e.cues.length) {
                            var n = e.timestampmap, o = n.MPEGTS / 9e4 - n.LOCAL + t.mapping;
                            if (e.cues.forEach(function (e) {
                                e.startTime += o, e.endTime += o
                            }), !i.syncInfo) {
                                var a = e.cues[0].startTime, s = e.cues[e.cues.length - 1].startTime;
                                i.syncInfo = {
                                    mediaSequence: i.mediaSequence + e.mediaIndex,
                                    time: Math.min(a, s - r.duration)
                                }
                            }
                        } else r.empty = !0
                    }
                }]), i
            }();
        t.default = h, e.exports = t.default
    }, "./node_modules/videojs-contrib-hls/es5/xhr.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, s = i("./node_modules/video.js/dist/video.cjs.js"), u = (r = s) && r.__esModule ? r : {default: r};
        t.default = function () {
            return function e(t, r) {
                t = (0, s.mergeOptions)({timeout: 45e3}, t);
                var i = e.beforeRequest || u.default.Hls.xhr.beforeRequest;
                if (i && "function" == typeof i) {
                    var n = i(t);
                    n && (t = n)
                }
                var o = (0, s.xhr)(t, function (e, t) {
                    var i = o.response;
                    !e && i && (o.responseTime = Date.now(), o.roundTripTime = o.responseTime - o.requestTime, o.bytesReceived = i.byteLength || i.length, o.bandwidth || (o.bandwidth = Math.floor(o.bytesReceived / o.roundTripTime * 8 * 1e3))), e && "ETIMEDOUT" === e.code && (o.timedout = !0), e || o.aborted || 200 === t.statusCode || 206 === t.statusCode || 0 === t.statusCode || (e = new Error("XHR Failed with a response of: " + (o && (i || o.responseText)))), r(e, o)
                }), a = o.abort;
                return o.abort = function () {
                    return o.aborted = !0, a.apply(o, arguments)
                }, o.uri = t.uri, o.requestTime = Date.now(), o
            }
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/add-text-track-data.js": function (e, t, i) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = r(i("./node_modules/global/window.js")), s = r(i("./node_modules/video.js/dist/video.cjs.js")),
            u = function (e) {
                return isNaN(e) || Math.abs(e) === 1 / 0 ? Number.MAX_VALUE : e
            };
        t.default = {
            addTextTrackData: function (r, e, t) {
                var a, n = o.default.WebKitDataCue || o.default.VTTCue;
                e && e.forEach(function (e) {
                    var t = e.stream;
                    this.inbandTextTracks_[t].addCue(new n(e.startTime + this.timestampOffset, e.endTime + this.timestampOffset, e.text))
                }, r), t && (a = u(r.mediaSource_.duration), t.forEach(function (e) {
                    var r = e.cueTime + this.timestampOffset;
                    e.frames.forEach(function (e) {
                        var t, i = new n(r, r, e.value || e.url || e.data || "");
                        i.frame = e, i.value = e, t = i, Object.defineProperties(t.frame, {
                            id: {
                                get: function () {
                                    return s.default.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), t.value.key
                                }
                            }, value: {
                                get: function () {
                                    return s.default.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), t.value.data
                                }
                            }, privateData: {
                                get: function () {
                                    return s.default.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), t.value.data
                                }
                            }
                        }), this.metadataTrack_.addCue(i)
                    }, this)
                }, r), r.metadataTrack_ && r.metadataTrack_.cues && r.metadataTrack_.cues.length && function () {
                    for (var e = r.metadataTrack_.cues, t = [], i = 0; i < e.length; i++) e[i] && t.push(e[i]);
                    var n = t.reduce(function (e, t) {
                        var i = e[t.startTime] || [];
                        return i.push(t), e[t.startTime] = i, e
                    }, {}), o = Object.keys(n).sort(function (e, t) {
                        return Number(e) - Number(t)
                    });
                    o.forEach(function (e, t) {
                        var i = n[e], r = Number(o[t + 1]) || a;
                        i.forEach(function (e) {
                            e.endTime = r
                        })
                    })
                }())
            }, durationOfVideo: u
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/codec-utils.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.default = {
            isAudioCodec: function (e) {
                return /mp4a\.\d+.\d+/i.test(e)
            }, parseContentType: function (e) {
                var n = {type: "", parameters: {}}, t = e.trim().split(";");
                return n.type = t.shift().trim(), t.forEach(function (e) {
                    var t = e.trim().split("=");
                    if (1 < t.length) {
                        var i = t[0].replace(/"/g, "").trim(), r = t[1].replace(/"/g, "").trim();
                        n.parameters[i] = r
                    }
                }), n
            }, isVideoCodec: function (e) {
                return /avc1\.[\da-f]+/i.test(e)
            }, translateLegacyCodecs: function (e) {
                return e.map(function (e) {
                    return e.replace(/avc1\.(\d+)\.(\d+)/i, function (e, t, i) {
                        return "avc1." + ("00" + Number(t).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
                    })
                })
            }
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/create-text-tracks-if-necessary.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.default = function (e, t, i) {
            var r = t.player_;
            if (i.captions && i.captions.length) for (var n in e.inbandTextTracks_ || (e.inbandTextTracks_ = {}), i.captionStreams) if (!e.inbandTextTracks_[n]) {
                r.tech_.trigger({type: "usage", name: "hls-608"});
                var o = r.textTracks().getTrackById(n);
                e.inbandTextTracks_[n] = o || r.addRemoteTextTrack({kind: "captions", id: n, label: n}, !1).track
            }
            i.metadata && i.metadata.length && !e.metadataTrack_ && (e.metadataTrack_ = r.addRemoteTextTrack({
                kind: "metadata",
                label: "Timed Metadata"
            }, !1).track, e.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/flash-constants.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.default = {TIME_BETWEEN_CHUNKS: 1, BYTES_PER_CHUNK: 32768}, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/flash-media-source.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = n(i("./node_modules/global/document.js")), a = n(i("./node_modules/video.js/dist/video.cjs.js")),
            s = n(i("./node_modules/videojs-contrib-media-sources/es5/flash-source-buffer.js")),
            u = n(i("./node_modules/videojs-contrib-media-sources/es5/flash-constants.js")),
            l = i("./node_modules/videojs-contrib-media-sources/es5/codec-utils.js"), c = function (e) {
                function i() {
                    var t = this;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), function (e, t, i) {
                        for (var r = !0; r;) {
                            var n = e, o = t, a = i;
                            r = !1, null === n && (n = Function.prototype);
                            var s = Object.getOwnPropertyDescriptor(n, o);
                            if (void 0 !== s) {
                                if ("value" in s) return s.value;
                                var u = s.get;
                                if (void 0 === u) return;
                                return u.call(a)
                            }
                            var l = Object.getPrototypeOf(n);
                            if (null === l) return;
                            e = l, t = o, i = a, r = !0, s = l = void 0
                        }
                    }(Object.getPrototypeOf(i.prototype), "constructor", this).call(this), this.sourceBuffers = [], this.readyState = "closed", this.on(["sourceopen", "webkitsourceopen"], function (e) {
                        t.swfObj = o.default.getElementById(e.swfId), t.player_ = (0, a.default)(t.swfObj.parentNode), t.tech_ = t.swfObj.tech, t.readyState = "open", t.tech_.on("seeking", function () {
                            for (var e = t.sourceBuffers.length; e--;) t.sourceBuffers[e].abort()
                        }), t.swfObj && t.swfObj.vjs_load()
                    })
                }

                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(i, a["default"].EventTarget), r(i, [{
                    key: "addSeekableRange_", value: function () {
                    }
                }, {
                    key: "addSourceBuffer", value: function (e) {
                        var t = (0, l.parseContentType)(e), i = void 0;
                        if ("video/mp2t" !== t.type && "audio/mp2t" !== t.type) throw new Error("NotSupportedError (Video.js)");
                        return i = new s.default(this), this.sourceBuffers.push(i), i
                    }
                }, {
                    key: "endOfStream", value: function (e) {
                        "network" === e ? this.tech_.error(2) : "decode" === e && this.tech_.error(3), "ended" !== this.readyState && (this.readyState = "ended", this.swfObj.vjs_endOfStream())
                    }
                }]), i
            }();
        t.default = c;
        try {
            Object.defineProperty(c.prototype, "duration", {
                get: function () {
                    return this.swfObj ? this.swfObj.vjs_getProperty("duration") : NaN
                }, set: function (e) {
                    var t = void 0, i = this.swfObj.vjs_getProperty("duration");
                    if (this.swfObj.vjs_setProperty("duration", e), e < i) for (t = 0; t < this.sourceBuffers.length; t++) this.sourceBuffers[t].remove(e, i);
                    return e
                }
            })
        } catch (e) {
            c.prototype.duration = NaN
        }
        for (var d in u.default) c[d] = u.default[d];
        e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/flash-source-buffer.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = n(i("./node_modules/global/window.js")), a = n(i("./node_modules/video.js/dist/video.cjs.js")),
            u = n(i("./node_modules/mux.js/lib/flv/index.js")),
            l = n(i("./node_modules/videojs-contrib-media-sources/es5/remove-cues-from-track.js")),
            c = n(i("./node_modules/videojs-contrib-media-sources/es5/create-text-tracks-if-necessary.js")),
            d = i("./node_modules/videojs-contrib-media-sources/es5/add-text-track-data.js"),
            h = n(i("./node_modules/videojs-contrib-media-sources/es5/flash-transmuxer-worker.js")),
            f = n(i("./node_modules/webwackify/index.js")),
            p = n(i("./node_modules/videojs-contrib-media-sources/es5/flash-constants.js")), m = function (e) {
                s.default.setTimeout(e, p.default.TIME_BETWEEN_CHUNKS)
            }, v = function () {
                return Math.random().toString(36).slice(2, 8)
            }, y = function (e, t) {
                ("number" != typeof t || t < 0) && (t = 0);
                var i = Math.pow(10, t);
                return Math.round(e * i) / i
            }, o = function (e) {
                function o(e) {
                    var t = this;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), function (e, t, i) {
                        for (var r = !0; r;) {
                            var n = e, o = t, a = i;
                            r = !1, null === n && (n = Function.prototype);
                            var s = Object.getOwnPropertyDescriptor(n, o);
                            if (void 0 !== s) {
                                if ("value" in s) return s.value;
                                var u = s.get;
                                if (void 0 === u) return;
                                return u.call(a)
                            }
                            var l = Object.getPrototypeOf(n);
                            if (null === l) return;
                            e = l, t = o, i = a, r = !0, s = l = void 0
                        }
                    }(Object.getPrototypeOf(o.prototype), "constructor", this).call(this);
                    var i;
                    this.chunkSize_ = p.default.BYTES_PER_CHUNK, this.buffer_ = [], this.bufferSize_ = 0, this.basePtsOffset_ = NaN, this.mediaSource_ = e, this.audioBufferEnd_ = NaN, this.videoBufferEnd_ = NaN, this.updating = !1, this.timestampOffset_ = 0, i = s.default.btoa(String.fromCharCode.apply(null, Array.prototype.slice.call(u.default.getFlvHeader())));
                    var r = this.mediaSource_.player_.id().replace(/[^a-zA-Z0-9]/g, "_");
                    this.flashEncodedHeaderName_ = "vjs_flashEncodedHeader_" + r + v(), this.flashEncodedDataName_ = "vjs_flashEncodedData_" + r + v(), s.default[this.flashEncodedHeaderName_] = function () {
                        return delete s.default[t.flashEncodedHeaderName_], i
                    }, this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedHeaderName_), this.transmuxer_ = (0, f.default)(h.default, function () {
                        var e = void 0;
                        try {
                            e = "./node_modules/videojs-contrib-media-sources/es5/flash-transmuxer-worker.js"
                        } catch (e) {
                        }
                        return e
                    }()), this.transmuxer_.postMessage({
                        action: "init",
                        options: {}
                    }), this.transmuxer_.onmessage = function (e) {
                        "data" === e.data.action && t.receiveBuffer_(e.data.segment)
                    }, this.one("updateend", function () {
                        t.mediaSource_.tech_.trigger("loadedmetadata")
                    }), Object.defineProperty(this, "timestampOffset", {
                        get: function () {
                            return this.timestampOffset_
                        }, set: function (e) {
                            "number" == typeof e && 0 <= e && (this.timestampOffset_ = e, this.mediaSource_.swfObj.vjs_discontinuity(), this.basePtsOffset_ = NaN, this.audioBufferEnd_ = NaN, this.videoBufferEnd_ = NaN, this.transmuxer_.postMessage({action: "reset"}))
                        }
                    }), Object.defineProperty(this, "buffered", {
                        get: function () {
                            if (!(this.mediaSource_ && this.mediaSource_.swfObj && "vjs_getProperty" in this.mediaSource_.swfObj)) return a.default.createTimeRange();
                            var e = this.mediaSource_.swfObj.vjs_getProperty("buffered");
                            return e && e.length && (e[0][0] = y(e[0][0], 3), e[0][1] = y(e[0][1], 3)), a.default.createTimeRanges(e)
                        }
                    }), this.mediaSource_.player_.on("seeked", function () {
                        if ((0, l.default)(0, 1 / 0, t.metadataTrack_), t.inbandTextTracks_) for (var e in t.inbandTextTracks_) (0, l.default)(0, 1 / 0, t.inbandTextTracks_[e])
                    });
                    var n = this.onHlsReset_.bind(this);
                    this.mediaSource_.player_.tech_.on("hls-reset", n), this.mediaSource_.player_.tech_.hls.on("dispose", function () {
                        t.transmuxer_.terminate(), t.mediaSource_.player_.tech_.off("hls-reset", n)
                    })
                }

                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(o, a["default"].EventTarget), r(o, [{
                    key: "appendBuffer", value: function (e) {
                        var t = void 0;
                        if (this.updating) throw(t = new Error("SourceBuffer.append() cannot be called while an update is in progress")).name = "InvalidStateError", t.code = 11, t;
                        this.updating = !0, this.mediaSource_.readyState = "open", this.trigger({type: "update"}), this.transmuxer_.postMessage({
                            action: "push",
                            data: e.buffer,
                            byteOffset: e.byteOffset,
                            byteLength: e.byteLength
                        }, [e.buffer]), this.transmuxer_.postMessage({action: "flush"})
                    }
                }, {
                    key: "abort", value: function () {
                        this.buffer_ = [], this.bufferSize_ = 0, this.mediaSource_.swfObj.vjs_abort(), this.updating && (this.updating = !1, this.trigger({type: "updateend"}))
                    }
                }, {
                    key: "remove", value: function (e, t) {
                        if ((0, l.default)(e, t, this.metadataTrack_), this.inbandTextTracks_) for (var i in this.inbandTextTracks_) (0, l.default)(e, t, this.inbandTextTracks_[i]);
                        this.trigger({type: "update"}), this.trigger({type: "updateend"})
                    }
                }, {
                    key: "receiveBuffer_", value: function (t) {
                        var i = this;
                        (0, c.default)(this, this.mediaSource_, t), (0, d.addTextTrackData)(this, t.captions, t.metadata), m(function () {
                            var e = i.convertTagsToData_(t);
                            0 === i.buffer_.length && m(i.processBuffer_.bind(i)), e && (i.buffer_.push(e), i.bufferSize_ += e.byteLength)
                        })
                    }
                }, {
                    key: "processBuffer_", value: function () {
                        var e = this, t = p.default.BYTES_PER_CHUNK;
                        if (this.buffer_.length) {
                            var i = this.buffer_[0].subarray(0, t);
                            i.byteLength < t || this.buffer_[0].byteLength === t ? this.buffer_.shift() : this.buffer_[0] = this.buffer_[0].subarray(t), this.bufferSize_ -= i.byteLength;
                            for (var r = [], n = i.byteLength, o = 0; o < n; o++) r.push(String.fromCharCode(i[o]));
                            var a = s.default.btoa(r.join(""));
                            s.default[this.flashEncodedDataName_] = function () {
                                return m(e.processBuffer_.bind(e)), delete s.default[e.flashEncodedDataName_], a
                            }, this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedDataName_)
                        } else !1 !== this.updating && (this.updating = !1, this.trigger({type: "updateend"}))
                    }
                }, {
                    key: "convertTagsToData_", value: function (e) {
                        var t = 0, i = this.mediaSource_.tech_, r = 0, n = void 0, o = e.tags.videoTags,
                            a = e.tags.audioTags;
                        if (isNaN(this.basePtsOffset_) && (o.length || a.length)) {
                            var s = o[0] || {pts: 1 / 0}, u = a[0] || {pts: 1 / 0};
                            this.basePtsOffset_ = Math.min(u.pts, s.pts)
                        }
                        i.seeking() && (this.videoBufferEnd_ = NaN, this.audioBufferEnd_ = NaN), isNaN(this.videoBufferEnd_) ? (i.buffered().length && (r = i.buffered().end(0) - this.timestampOffset), i.seeking() && (r = Math.max(r, i.currentTime() - this.timestampOffset)), r *= 1e3, r += this.basePtsOffset_) : r = this.videoBufferEnd_ + .1;
                        var l = o.length;
                        if (l && o[l - 1].pts >= r) {
                            for (; --l;) {
                                var c = o[l];
                                if (!(c.pts > r) && (c.keyFrame || c.metaDataTag)) break
                            }
                            for (; l;) {
                                if (!o[l - 1].metaDataTag) break;
                                l--
                            }
                        }
                        var d = o.slice(l), h = void 0;
                        for (h = isNaN(this.audioBufferEnd_) ? r : this.audioBufferEnd_ + .1, d.length && (h = Math.min(h, d[0].pts)), l = 0; l < a.length && !(a[l].pts >= h);) l++;
                        var f = a.slice(l);
                        f.length && (this.audioBufferEnd_ = f[f.length - 1].pts), d.length && (this.videoBufferEnd_ = d[d.length - 1].pts);
                        var p = this.getOrderedTags_(d, f);
                        if (0 !== p.length) {
                            if (p[0].pts < r && i.seeking()) {
                                var m = i.currentTime() - (r - p[0].pts) / 1e3;
                                m < 1 / 30 && (m = 0);
                                try {
                                    this.mediaSource_.swfObj.vjs_adjustCurrentTime(m)
                                } catch (e) {
                                }
                            }
                            for (var v = 0; v < p.length; v++) t += p[v].bytes.byteLength;
                            n = new Uint8Array(t);
                            v = 0;
                            for (var y = 0; v < p.length; v++) n.set(p[v].bytes, y), y += p[v].bytes.byteLength;
                            return n
                        }
                    }
                }, {
                    key: "getOrderedTags_", value: function (e, t) {
                        for (var i = void 0, r = []; e.length || t.length;) i = e.length ? t.length && t[0].dts < e[0].dts ? t.shift() : e.shift() : t.shift(), r.push(i);
                        return r
                    }
                }, {
                    key: "onHlsReset_", value: function () {
                        this.transmuxer_.postMessage({action: "resetCaptions"})
                    }
                }]), o
            }();
        t.default = o, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/flash-transmuxer-worker.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = n(i("./node_modules/global/window.js")), a = n(i("./node_modules/mux.js/lib/flv/index.js")),
            s = function () {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.options = e || {}, this.init()
                }

                return r(t, [{
                    key: "init", value: function () {
                        var e;
                        this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new a.default.Transmuxer(this.options), (e = this.transmuxer).on("data", function (e) {
                            o.default.postMessage({action: "data", segment: e})
                        }), e.on("done", function (e) {
                            o.default.postMessage({action: "done"})
                        })
                    }
                }, {
                    key: "push", value: function (e) {
                        var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
                        this.transmuxer.push(t)
                    }
                }, {
                    key: "reset", value: function () {
                        this.init()
                    }
                }, {
                    key: "flush", value: function () {
                        this.transmuxer.flush()
                    }
                }, {
                    key: "resetCaptions", value: function () {
                        this.transmuxer.resetCaptions()
                    }
                }]), t
            }(), u = function (e) {
                e.onmessage = function (e) {
                    "init" === e.data.action && e.data.options ? this.messageHandlers = new s(e.data.options) : (this.messageHandlers || (this.messageHandlers = new s), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data))
                }
            };
        t.default = function (e) {
            return new u(e)
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/html-media-source.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = n(i("./node_modules/global/window.js")), s = n(i("./node_modules/global/document.js")),
            u = n(i("./node_modules/video.js/dist/video.cjs.js")),
            o = n(i("./node_modules/videojs-contrib-media-sources/es5/virtual-source-buffer.js")),
            l = i("./node_modules/videojs-contrib-media-sources/es5/add-text-track-data.js"),
            c = i("./node_modules/videojs-contrib-media-sources/es5/codec-utils.js"), d = function (e) {
                function t() {
                    var o = this;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), function (e, t, i) {
                        for (var r = !0; r;) {
                            var n = e, o = t, a = i;
                            r = !1, null === n && (n = Function.prototype);
                            var s = Object.getOwnPropertyDescriptor(n, o);
                            if (void 0 !== s) {
                                if ("value" in s) return s.value;
                                var u = s.get;
                                if (void 0 === u) return;
                                return u.call(a)
                            }
                            var l = Object.getPrototypeOf(n);
                            if (null === l) return;
                            e = l, t = o, i = a, r = !0, s = l = void 0
                        }
                    }(Object.getPrototypeOf(t.prototype), "constructor", this).call(this);
                    var e = void 0;
                    for (e in this.nativeMediaSource_ = new a.default.MediaSource, this.nativeMediaSource_) e in t.prototype || "function" != typeof this.nativeMediaSource_[e] || (this[e] = this.nativeMediaSource_[e].bind(this.nativeMediaSource_));
                    this.duration_ = NaN, Object.defineProperty(this, "duration", {
                        get: function () {
                            return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
                        }, set: function (e) {
                            (this.duration_ = e) === 1 / 0 || (this.nativeMediaSource_.duration = e)
                        }
                    }), Object.defineProperty(this, "seekable", {
                        get: function () {
                            return this.duration_ === 1 / 0 ? u.default.createTimeRanges([[0, this.nativeMediaSource_.duration]]) : this.nativeMediaSource_.seekable
                        }
                    }), Object.defineProperty(this, "readyState", {
                        get: function () {
                            return this.nativeMediaSource_.readyState
                        }
                    }), Object.defineProperty(this, "activeSourceBuffers", {
                        get: function () {
                            return this.activeSourceBuffers_
                        }
                    }), this.sourceBuffers = [], this.activeSourceBuffers_ = [], this.updateActiveSourceBuffers_ = function () {
                        if (o.activeSourceBuffers_.length = 0, 1 === o.sourceBuffers.length) {
                            var e = o.sourceBuffers[0];
                            return e.appendAudioInitSegment_ = !0, e.audioDisabled_ = !e.audioCodec_, void o.activeSourceBuffers_.push(e)
                        }
                        for (var t = !1, i = !0, r = 0; r < o.player_.audioTracks().length; r++) {
                            var n = o.player_.audioTracks()[r];
                            if (n.enabled && "main" !== n.kind) {
                                i = !(t = !0);
                                break
                            }
                        }
                        o.sourceBuffers.forEach(function (e) {
                            if (e.appendAudioInitSegment_ = !0, e.videoCodec_ && e.audioCodec_) e.audioDisabled_ = t; else if (e.videoCodec_ && !e.audioCodec_) e.audioDisabled_ = !0, i = !1; else if (!e.videoCodec_ && e.audioCodec_ && (e.audioDisabled_ = i)) return;
                            o.activeSourceBuffers_.push(e)
                        })
                    }, this.onPlayerMediachange_ = function () {
                        o.sourceBuffers.forEach(function (e) {
                            e.appendAudioInitSegment_ = !0
                        })
                    }, this.onHlsReset_ = function () {
                        o.sourceBuffers.forEach(function (e) {
                            e.transmuxer_ && e.transmuxer_.postMessage({action: "resetCaptions"})
                        })
                    }, this.onHlsSegmentTimeMapping_ = function (t) {
                        o.sourceBuffers.forEach(function (e) {
                            return e.timeMapping_ = t.mapping
                        })
                    }, ["sourceopen", "sourceclose", "sourceended"].forEach(function (e) {
                        this.nativeMediaSource_.addEventListener(e, this.trigger.bind(this))
                    }, this), this.on("sourceopen", function (e) {
                        var t = s.default.querySelector('[src="' + o.url_ + '"]');
                        t && (o.player_ = (0, u.default)(t.parentNode), o.player_.tech_.on("hls-reset", o.onHlsReset_), o.player_.tech_.on("hls-segment-time-mapping", o.onHlsSegmentTimeMapping_), o.player_.audioTracks && o.player_.audioTracks() && (o.player_.audioTracks().on("change", o.updateActiveSourceBuffers_), o.player_.audioTracks().on("addtrack", o.updateActiveSourceBuffers_), o.player_.audioTracks().on("removetrack", o.updateActiveSourceBuffers_)), o.player_.on("mediachange", o.onPlayerMediachange_))
                    }), this.on("sourceended", function (e) {
                        for (var t = (0, l.durationOfVideo)(o.duration), i = 0; i < o.sourceBuffers.length; i++) {
                            var r = o.sourceBuffers[i], n = r.metadataTrack_ && r.metadataTrack_.cues;
                            n && n.length && (n[n.length - 1].endTime = t)
                        }
                    }), this.on("sourceclose", function (e) {
                        this.sourceBuffers.forEach(function (e) {
                            e.transmuxer_ && e.transmuxer_.terminate()
                        }), this.sourceBuffers.length = 0, this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)), this.player_.el_ && (this.player_.off("mediachange", this.onPlayerMediachange_), this.player_.tech_.off("hls-reset", this.onHlsReset_), this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
                    })
                }

                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, u["default"].EventTarget), r(t, [{
                    key: "addSeekableRange_", value: function (e, t) {
                        var i = void 0;
                        if (this.duration !== 1 / 0) throw(i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name = "InvalidStateError", i.code = 11, i;
                        (t > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = t)
                    }
                }, {
                    key: "addSourceBuffer", value: function (e) {
                        var t = void 0, i = (0, c.parseContentType)(e);
                        if (/^(video|audio)\/mp2t$/i.test(i.type)) {
                            var r = [];
                            i.parameters && i.parameters.codecs && (r = i.parameters.codecs.split(","), r = (r = (0, c.translateLegacyCodecs)(r)).filter(function (e) {
                                return (0, c.isAudioCodec)(e) || (0, c.isVideoCodec)(e)
                            })), 0 === r.length && (r = ["avc1.4d400d", "mp4a.40.2"]), t = new o.default(this, r), 0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), t.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
                        } else t = this.nativeMediaSource_.addSourceBuffer(e);
                        return this.sourceBuffers.push(t), t
                    }
                }]), t
            }();
        t.default = d, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/remove-cues-from-track.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.default = function (e, t, i) {
            var r = void 0, n = void 0;
            if (i && i.cues) for (r = i.cues.length; r--;) (n = i.cues[r]).startTime <= t && n.endTime >= e && i.removeCue(n)
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/transmuxer-worker.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = n(i("./node_modules/global/window.js")), a = n(i("./node_modules/mux.js/lib/mp4/index.js")),
            s = function () {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.options = e || {}, this.init()
                }

                return r(t, [{
                    key: "init", value: function () {
                        var e;
                        this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new a.default.Transmuxer(this.options), (e = this.transmuxer).on("data", function (e) {
                            var t = e.initSegment;
                            e.initSegment = {data: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength};
                            var i = e.data;
                            e.data = i.buffer, o.default.postMessage({
                                action: "data",
                                segment: e,
                                byteOffset: i.byteOffset,
                                byteLength: i.byteLength
                            }, [e.data])
                        }), e.captionStream && e.captionStream.on("data", function (e) {
                            o.default.postMessage({action: "caption", data: e})
                        }), e.on("done", function (e) {
                            o.default.postMessage({action: "done"})
                        }), e.on("gopInfo", function (e) {
                            o.default.postMessage({action: "gopInfo", gopInfo: e})
                        })
                    }
                }, {
                    key: "push", value: function (e) {
                        var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
                        this.transmuxer.push(t)
                    }
                }, {
                    key: "reset", value: function () {
                        this.init()
                    }
                }, {
                    key: "setTimestampOffset", value: function (e) {
                        var t = e.timestampOffset || 0;
                        this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * t))
                    }
                }, {
                    key: "setAudioAppendStart", value: function (e) {
                        this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * e.appendStart))
                    }
                }, {
                    key: "flush", value: function (e) {
                        this.transmuxer.flush()
                    }
                }, {
                    key: "resetCaptions", value: function () {
                        this.transmuxer.resetCaptions()
                    }
                }, {
                    key: "alignGopsWith", value: function (e) {
                        this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
                    }
                }]), t
            }(), u = function (e) {
                e.onmessage = function (e) {
                    "init" === e.data.action && e.data.options ? this.messageHandlers = new s(e.data.options) : (this.messageHandlers || (this.messageHandlers = new s), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data))
                }
            };
        t.default = function (e) {
            return new u(e)
        }, e.exports = t.default
    }, "./node_modules/videojs-contrib-media-sources/es5/videojs-contrib-media-sources.js": function (e, t, i) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = r(i("./node_modules/global/window.js")),
            o = r(i("./node_modules/videojs-contrib-media-sources/es5/flash-media-source.js")),
            a = r(i("./node_modules/videojs-contrib-media-sources/es5/html-media-source.js")),
            s = r(i("./node_modules/video.js/dist/video.cjs.js")), u = 0, l = {mode: "auto"};
        s.default.mediaSources = {};
        var c = function (e, t) {
            var i = s.default.mediaSources[e];
            if (!i) throw new Error("Media Source not found (Video.js)");
            i.trigger({type: "sourceopen", swfId: t})
        }, d = function () {
            return !!n.default.MediaSource && !!n.default.MediaSource.isTypeSupported && n.default.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
        }, h = function (e) {
            var t = s.default.mergeOptions(l, e);
            if (this.MediaSource = {
                open: c,
                supportsNativeMediaSources: d
            }, "html5" === t.mode || "auto" === t.mode && d()) return new a.default;
            if (s.default.getTech("Flash")) return new o.default;
            throw new Error("Cannot use Flash or Html5 to create a MediaSource for this video")
        };
        (t.MediaSource = h).open = c, h.supportsNativeMediaSources = d;
        var f = {
            createObjectURL: function (e) {
                var t = void 0;
                return e instanceof a.default ? (t = n.default.URL.createObjectURL(e.nativeMediaSource_), e.url_ = t) : e instanceof o.default ? (t = "blob:vjs-media-source/" + u, u++, s.default.mediaSources[t] = e, t) : (t = n.default.URL.createObjectURL(e), e.url_ = t)
            }
        };
        t.URL = f, s.default.MediaSource = h, s.default.URL = f
    }, "./node_modules/videojs-contrib-media-sources/es5/virtual-source-buffer.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var u = n(i("./node_modules/video.js/dist/video.cjs.js")),
            o = n(i("./node_modules/videojs-contrib-media-sources/es5/create-text-tracks-if-necessary.js")),
            a = n(i("./node_modules/videojs-contrib-media-sources/es5/remove-cues-from-track.js")),
            s = i("./node_modules/videojs-contrib-media-sources/es5/add-text-track-data.js"),
            l = n(i("./node_modules/webwackify/index.js")),
            c = n(i("./node_modules/videojs-contrib-media-sources/es5/transmuxer-worker.js")),
            d = i("./node_modules/videojs-contrib-media-sources/es5/codec-utils.js"), h = function (e, t, i) {
                if (!t || !e.length) return [];
                var r = Math.ceil(9e4 * (t.currentTime() - i + 3)), n = void 0;
                for (n = 0; n < e.length && !(e[n].pts > r); n++) ;
                return e.slice(n)
            };
        t.gopsSafeToAlignWith = h;
        var f = function (e, t, i) {
            if (!t.length) return e;
            if (i) return t.slice();
            for (var r = t[0].pts, n = 0; n < e.length && !(e[n].pts >= r); n++) ;
            return e.slice(0, n).concat(t)
        };
        t.updateGopBuffer = f;
        var p = function (e, t, i, r) {
            for (var n = Math.ceil(9e4 * (t - r)), o = Math.ceil(9e4 * (i - r)), a = e.slice(), s = e.length; s-- && !(e[s].pts <= o);) ;
            if (-1 === s) return a;
            for (var u = s + 1; u-- && !(e[u].pts <= n);) ;
            return u = Math.max(u, 0), a.splice(u, s - u + 1), a
        };
        t.removeGopBuffer = p;
        var m = function (e) {
            function n(e, t) {
                var i = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), function (e, t, i) {
                    for (var r = !0; r;) {
                        var n = e, o = t, a = i;
                        r = !1, null === n && (n = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(n, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var u = s.get;
                            if (void 0 === u) return;
                            return u.call(a)
                        }
                        var l = Object.getPrototypeOf(n);
                        if (null === l) return;
                        e = l, t = o, i = a, r = !0, s = l = void 0
                    }
                }(Object.getPrototypeOf(n.prototype), "constructor", this).call(this, u.default.EventTarget), this.timestampOffset_ = 0, this.pendingBuffers_ = [], this.bufferUpdating_ = !1, this.mediaSource_ = e, this.codecs_ = t, this.audioCodec_ = null, this.videoCodec_ = null, this.audioDisabled_ = !1, this.appendAudioInitSegment_ = !0, this.gopBuffer_ = [], this.timeMapping_ = 0, this.safeAppend_ = 11 <= u.default.browser.IE_VERSION;
                var r = {remux: !1, alignGopsAtEnd: this.safeAppend_};
                this.codecs_.forEach(function (e) {
                    (0, d.isAudioCodec)(e) ? i.audioCodec_ = e : (0, d.isVideoCodec)(e) && (i.videoCodec_ = e)
                }), this.transmuxer_ = (0, l.default)(c.default, function () {
                    var e = void 0;
                    try {
                        e = "./node_modules/videojs-contrib-media-sources/es5/transmuxer-worker.js"
                    } catch (e) {
                    }
                    return e
                }()), this.transmuxer_.postMessage({
                    action: "init",
                    options: r
                }), this.transmuxer_.onmessage = function (e) {
                    return "data" === e.data.action ? i.data_(e) : "done" === e.data.action ? i.done_(e) : "gopInfo" === e.data.action ? i.appendGopInfo_(e) : void 0
                }, Object.defineProperty(this, "timestampOffset", {
                    get: function () {
                        return this.timestampOffset_
                    }, set: function (e) {
                        "number" == typeof e && 0 <= e && (this.timestampOffset_ = e, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
                            action: "setTimestampOffset",
                            timestampOffset: e
                        }))
                    }
                }), Object.defineProperty(this, "appendWindowStart", {
                    get: function () {
                        return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
                    }, set: function (e) {
                        this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = e), this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = e)
                    }
                }), Object.defineProperty(this, "updating", {
                    get: function () {
                        return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
                    }
                }), Object.defineProperty(this, "buffered", {
                    get: function () {
                        var e = null, t = null, i = 0, r = [], n = [];
                        if (!this.videoBuffer_ && !this.audioBuffer_) return u.default.createTimeRange();
                        if (!this.videoBuffer_) return this.audioBuffer_.buffered;
                        if (!this.audioBuffer_) return this.videoBuffer_.buffered;
                        if (this.audioDisabled_) return this.videoBuffer_.buffered;
                        if (0 === this.videoBuffer_.buffered.length && 0 === this.audioBuffer_.buffered.length) return u.default.createTimeRange();
                        for (var o = this.videoBuffer_.buffered, a = this.audioBuffer_.buffered, s = o.length; s--;) r.push({
                            time: o.start(s),
                            type: "start"
                        }), r.push({time: o.end(s), type: "end"});
                        for (s = a.length; s--;) r.push({time: a.start(s), type: "start"}), r.push({
                            time: a.end(s),
                            type: "end"
                        });
                        for (r.sort(function (e, t) {
                            return e.time - t.time
                        }), s = 0; s < r.length; s++) "start" === r[s].type ? 2 === ++i && (e = r[s].time) : "end" === r[s].type && 1 === --i && (t = r[s].time), null !== e && null !== t && (n.push([e, t]), t = e = null);
                        return u.default.createTimeRanges(n)
                    }
                })
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, u["default"].EventTarget), r(n, [{
                key: "data_", value: function (e) {
                    var t = e.data.segment;
                    t.data = new Uint8Array(t.data, e.data.byteOffset, e.data.byteLength), t.initSegment = new Uint8Array(t.initSegment.data, t.initSegment.byteOffset, t.initSegment.byteLength), (0, o.default)(this, this.mediaSource_, t), this.pendingBuffers_.push(t)
                }
            }, {
                key: "done_", value: function (e) {
                    "closed" !== this.mediaSource_.readyState ? this.processPendingSegments_() : this.pendingBuffers_.length = 0
                }
            }, {
                key: "createRealSourceBuffers_", value: function () {
                    var r = this, n = ["audio", "video"];
                    n.forEach(function (t) {
                        if (r[t + "Codec_"] && !r[t + "Buffer_"]) {
                            var i = null;
                            if (r.mediaSource_[t + "Buffer_"]) (i = r.mediaSource_[t + "Buffer_"]).updating = !1; else {
                                var e = t + '/mp4;codecs="' + r[t + "Codec_"] + '"';
                                i = function (e, t) {
                                    var i = e.addSourceBuffer(t), r = Object.create(null);
                                    r.updating = !1, r.realBuffer_ = i;
                                    var n = function (t) {
                                        "function" == typeof i[t] ? r[t] = function () {
                                            return i[t].apply(i, arguments)
                                        } : void 0 === r[t] && Object.defineProperty(r, t, {
                                            get: function () {
                                                return i[t]
                                            }, set: function (e) {
                                                return i[t] = e
                                            }
                                        })
                                    };
                                    for (var o in i) n(o);
                                    return r
                                }(r.mediaSource_.nativeMediaSource_, e), r.mediaSource_[t + "Buffer_"] = i
                            }
                            r[t + "Buffer_"] = i, ["update", "updatestart", "updateend"].forEach(function (e) {
                                i.addEventListener(e, function () {
                                    if ("audio" !== t || !r.audioDisabled_) return "updateend" === e && (r[t + "Buffer_"].updating = !1), n.every(function (e) {
                                        return !("audio" !== e || !r.audioDisabled_) || (t === e || !r[e + "Buffer_"] || !r[e + "Buffer_"].updating)
                                    }) ? r.trigger(e) : void 0
                                })
                            })
                        }
                    })
                }
            }, {
                key: "appendBuffer", value: function (e) {
                    if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) {
                        var t = this.audioBuffer_.buffered;
                        this.transmuxer_.postMessage({action: "setAudioAppendStart", appendStart: t.end(t.length - 1)})
                    }
                    this.videoBuffer_ && this.transmuxer_.postMessage({
                        action: "alignGopsWith",
                        gopsToAlignWith: h(this.gopBuffer_, this.mediaSource_.player_, this.timeMapping_)
                    }), this.transmuxer_.postMessage({
                        action: "push",
                        data: e.buffer,
                        byteOffset: e.byteOffset,
                        byteLength: e.byteLength
                    }, [e.buffer]), this.transmuxer_.postMessage({action: "flush"})
                }
            }, {
                key: "appendGopInfo_", value: function (e) {
                    this.gopBuffer_ = f(this.gopBuffer_, e.data.gopInfo, this.safeAppend_)
                }
            }, {
                key: "remove", value: function (e, t) {
                    if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(e, t), this.gopBuffer_ = p(this.gopBuffer_, e, t, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(e, t)), (0, a.default)(e, t, this.metadataTrack_), this.inbandTextTracks_) for (var i in this.inbandTextTracks_) (0, a.default)(e, t, this.inbandTextTracks_[i])
                }
            }, {
                key: "processPendingSegments_", value: function () {
                    var e = {
                        video: {segments: [], bytes: 0},
                        audio: {segments: [], bytes: 0},
                        captions: [],
                        metadata: []
                    };
                    e = this.pendingBuffers_.reduce(function (e, t) {
                        var i = t.type, r = t.data, n = t.initSegment;
                        return e[i].segments.push(r), e[i].bytes += r.byteLength, e[i].initSegment = n, t.captions && (e.captions = e.captions.concat(t.captions)), t.info && (e[i].info = t.info), t.metadata && (e.metadata = e.metadata.concat(t.metadata)), e
                    }, e), this.videoBuffer_ || this.audioBuffer_ || (0 === e.video.bytes && (this.videoCodec_ = null), 0 === e.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()), e.audio.info && this.mediaSource_.trigger({
                        type: "audioinfo",
                        info: e.audio.info
                    }), e.video.info && this.mediaSource_.trigger({
                        type: "videoinfo",
                        info: e.video.info
                    }), this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (e.audio.segments.unshift(e.audio.initSegment), e.audio.bytes += e.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1);
                    var t = !1;
                    this.videoBuffer_ && e.video.bytes ? (e.video.segments.unshift(e.video.initSegment), e.video.bytes += e.video.initSegment.byteLength, this.concatAndAppendSegments_(e.video, this.videoBuffer_), (0, s.addTextTrackData)(this, e.captions, e.metadata)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (t = !0), !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(e.audio, this.audioBuffer_), this.pendingBuffers_.length = 0, t && this.trigger("updateend"), this.bufferUpdating_ = !1
                }
            }, {
                key: "concatAndAppendSegments_", value: function (e, t) {
                    var i = 0, r = void 0;
                    if (e.bytes) {
                        r = new Uint8Array(e.bytes), e.segments.forEach(function (e) {
                            r.set(e, i), i += e.byteLength
                        });
                        try {
                            t.updating = !0, t.appendBuffer(r)
                        } catch (e) {
                            this.mediaSource_.player_ && this.mediaSource_.player_.error({
                                code: -3,
                                type: "APPEND_BUFFER_ERR",
                                message: e.message,
                                originalError: e
                            })
                        }
                    }
                }
            }, {
                key: "abort", value: function () {
                    this.videoBuffer_ && this.videoBuffer_.abort(), !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(), this.transmuxer_ && this.transmuxer_.postMessage({action: "reset"}), this.pendingBuffers_.length = 0, this.bufferUpdating_ = !1
                }
            }]), n
        }();
        t.default = m
    }, "./node_modules/videojs-flash/dist/videojs-flash.es.js": function (e, t, i) {
        "use strict";
        var r = i("./node_modules/video.js/dist/video.cjs.js"), n = i.n(r),
            a = i("./node_modules/videojs-swf/package.json"), o = i("./node_modules/global/window.js"), s = i.n(o);
        var u, l = n.a.getComponent("Tech"), c = n.a.dom, d = n.a.url, h = n.a.createTimeRange, f = n.a.mergeOptions,
            p = s.a && s.a.navigator || {}, m = function (r) {
                function o(e, t) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var i = function (e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, r.call(this, e, t));
                    return e.source && i.ready(function () {
                        this.setSource(e.source)
                    }, !0), e.startTime && i.ready(function () {
                        this.load(), this.play(), this.currentTime(e.startTime)
                    }, !0), s.a.videojs = s.a.videojs || {}, s.a.videojs.Flash = s.a.videojs.Flash || {}, s.a.videojs.Flash.onReady = o.onReady, s.a.videojs.Flash.onEvent = o.onEvent, s.a.videojs.Flash.onError = o.onError, i.on("seeked", function () {
                        this.lastSeekTarget_ = void 0
                    }), i
                }

                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(o, r), o.prototype.createEl = function () {
                    var e = this.options_;
                    e.swf || (e.swf = "https://vjs.zencdn.net/swf/" + a.a + "/video-js.swf");
                    var t = e.techId, i = f({
                            readyFunction: "videojs.Flash.onReady",
                            eventProxyFunction: "videojs.Flash.onEvent",
                            errorEventProxyFunction: "videojs.Flash.onError",
                            autoplay: e.autoplay,
                            preload: e.preload,
                            loop: e.loop,
                            muted: e.muted
                        }, e.flashVars), r = f({wmode: "opaque", bgcolor: "#000000"}, e.params),
                        n = f({id: t, name: t, class: "vjs-tech"}, e.attributes);
                    return this.el_ = o.embed(e.swf, i, r, n), (this.el_.tech = this).el_
                }, o.prototype.play = function () {
                    this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
                }, o.prototype.pause = function () {
                    this.el_.vjs_pause()
                }, o.prototype.src = function (e) {
                    return void 0 === e ? this.currentSrc() : this.setSrc(e)
                }, o.prototype.setSrc = function (e) {
                    var t = this;
                    e = d.getAbsoluteURL(e), this.el_.vjs_src(e), this.autoplay() && this.setTimeout(function () {
                        return t.play()
                    }, 0)
                }, o.prototype.seeking = function () {
                    return void 0 !== this.lastSeekTarget_
                }, o.prototype.setCurrentTime = function (e) {
                    var t = this.seekable();
                    t.length && (e = (e = e > t.start(0) ? e : t.start(0)) < t.end(t.length - 1) ? e : t.end(t.length - 1), this.lastSeekTarget_ = e, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", e), r.prototype.setCurrentTime.call(this))
                }, o.prototype.currentTime = function () {
                    return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
                }, o.prototype.currentSrc = function () {
                    return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
                }, o.prototype.duration = function () {
                    if (0 === this.readyState()) return NaN;
                    var e = this.el_.vjs_getProperty("duration");
                    return 0 <= e ? e : 1 / 0
                }, o.prototype.load = function () {
                    this.el_.vjs_load()
                }, o.prototype.poster = function () {
                    this.el_.vjs_getProperty("poster")
                }, o.prototype.setPoster = function () {
                }, o.prototype.seekable = function () {
                    var e = this.duration();
                    return 0 === e ? h() : h(0, e)
                }, o.prototype.buffered = function () {
                    var e = this.el_.vjs_getProperty("buffered");
                    return 0 === e.length ? h() : h(e[0][0], e[0][1])
                }, o.prototype.supportsFullScreen = function () {
                    return !1
                }, o.prototype.enterFullScreen = function () {
                    return !1
                }, o.prototype.getVideoPlaybackQuality = function () {
                    var e = this.el_.vjs_getProperty("getVideoPlaybackQuality");
                    return s.a.performance && "function" == typeof s.a.performance.now ? e.creationTime = s.a.performance.now() : s.a.performance && s.a.performance.timing && "number" == typeof s.a.performance.timing.navigationStart && (e.creationTime = s.a.Date.now() - s.a.performance.timing.navigationStart), e
                }, o
            }(l),
            v = ["rtmpConnection", "rtmpStream", "preload", "defaultPlaybackRate", "playbackRate", "autoplay", "loop", "controls", "volume", "muted", "defaultMuted"],
            y = ["networkState", "readyState", "initialTime", "startOffsetTime", "paused", "ended", "videoWidth", "videoHeight"],
            _ = m.prototype;

        function g(t) {
            var e = t.charAt(0).toUpperCase() + t.slice(1);
            _["set" + e] = function (e) {
                return this.el_.vjs_setProperty(t, e)
            }
        }

        function b(e) {
            _[e] = function () {
                return this.el_.vjs_getProperty(e)
            }
        }

        for (var T = 0; T < v.length; T++) b(v[T]), g(v[T]);
        for (var S = 0; S < y.length; S++) b(y[S]);
        m.isSupported = function () {
            return !!(n.a.browser.IS_CHROME && !n.a.browser.IS_ANDROID || n.a.browser.IS_SAFARI && !n.a.browser.IS_IOS || n.a.browser.IS_EDGE) || 10 <= m.version()[0]
        }, l.withSourceHandlers(m), m.nativeSourceHandler = {}, m.nativeSourceHandler.canPlayType = function (e) {
            return e in m.formats ? "maybe" : ""
        }, m.nativeSourceHandler.canHandleSource = function (e, t) {
            var i, r, n = void 0;
            return n = e.type ? e.type.replace(/;.*/, "").toLowerCase() : (i = e.src, (r = d.getFileExtension(i)) ? "video/" + r : ""), m.nativeSourceHandler.canPlayType(n)
        }, m.nativeSourceHandler.handleSource = function (e, t, i) {
            t.setSrc(e.src)
        }, m.nativeSourceHandler.dispose = function () {
        }, m.registerSourceHandler(m.nativeSourceHandler), m.formats = {
            "video/flv": "FLV",
            "video/x-flv": "FLV",
            "video/mp4": "MP4",
            "video/m4v": "MP4"
        }, m.onReady = function (e) {
            var t = c.$("#" + e), i = t && t.tech;
            i && i.el() && m.checkReady(i)
        }, m.checkReady = function (e) {
            e.el() && (e.el().vjs_getProperty ? e.triggerReady() : this.setTimeout(function () {
                m.checkReady(e)
            }, 50))
        }, m.onEvent = function (e, t) {
            var i = c.$("#" + e).tech, r = Array.prototype.slice.call(arguments, 2);
            i.setTimeout(function () {
                i.trigger(t, r)
            }, 1)
        }, m.onError = function (e, t) {
            var i = c.$("#" + e).tech;
            if ("srcnotfound" === t) return i.error(4);
            "string" == typeof t ? i.error("FLASH: " + t) : (t.origin = "flash", i.error(t))
        }, m.version = function () {
            var t = "0,0,0";
            try {
                t = new s.a.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
            } catch (e) {
                try {
                    p.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (p.plugins["Shockwave Flash 2.0"] || p.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                } catch (e) {
                }
            }
            return t.split(",")
        }, m.embed = function (e, t, i, r) {
            var n = m.getEmbedCode(e, t, i, r);
            return c.createEl("div", {innerHTML: n}).childNodes[0]
        }, m.getEmbedCode = function (e, t, i, r) {
            var n = "", o = "", a = "";
            return t && Object.getOwnPropertyNames(t).forEach(function (e) {
                n += e + "=" + t[e] + "&amp;"
            }), i = f({
                movie: e,
                flashvars: n,
                allowScriptAccess: "always",
                allowNetworking: "all"
            }, i), Object.getOwnPropertyNames(i).forEach(function (e) {
                o += '<param name="' + e + '" value="' + i[e] + '" />'
            }), r = f({data: e, width: "100%", height: "100%"}, r), Object.getOwnPropertyNames(r).forEach(function (e) {
                a += e + '="' + r[e] + '" '
            }), '<object type="application/x-shockwave-flash" ' + a + ">" + o + "</object>"
        }, (u = m).streamingFormats = {"rtmp/mp4": "MP4", "rtmp/flv": "FLV"}, u.streamFromParts = function (e, t) {
            return e + "&" + t
        }, u.streamToParts = function (e) {
            var t = {connection: "", stream: ""};
            if (!e) return t;
            var i = e.search(/&(?![\w-]+=)/), r = void 0;
            return -1 !== i ? r = i + 1 : 0 === (i = r = e.lastIndexOf("/") + 1) && (i = r = e.length), t.connection = e.substring(0, i), t.stream = e.substring(r, e.length), t
        }, u.isStreamingType = function (e) {
            return e in u.streamingFormats
        }, u.RTMP_RE = /^rtmp[set]?:\/\//i, u.isStreamingSrc = function (e) {
            return u.RTMP_RE.test(e)
        }, u.rtmpSourceHandler = {}, u.rtmpSourceHandler.canPlayType = function (e) {
            return u.isStreamingType(e) ? "maybe" : ""
        }, u.rtmpSourceHandler.canHandleSource = function (e, t) {
            var i = u.rtmpSourceHandler.canPlayType(e.type);
            return i || (u.isStreamingSrc(e.src) ? "maybe" : "")
        }, u.rtmpSourceHandler.handleSource = function (e, t, i) {
            var r = u.streamToParts(e.src);
            t.setRtmpConnection(r.connection), t.setRtmpStream(r.stream)
        }, u.registerSourceHandler(u.rtmpSourceHandler), l.getTech("Flash") ? (n.a.log.warn("Not using videojs-flash as it appears to already be registered"), n.a.log.warn("videojs-flash should only be used with video.js@6 and above")) : n.a.registerTech("Flash", m), m.VERSION = "2.2.0"
    }, "./node_modules/videojs-mux/dist/videojs-mux.js": function (KNa, LNa, MNa) {
        var TNa, NNa = NNa || {};
        NNa.js = MNa("./node_modules/video.js/dist/video.cjs.js"), KNa.exports = (TNa = MNa("./node_modules/video.js/dist/video.cjs.js"), function (i) {
            function r(e) {
                if (n[e]) return n[e].exports;
                var t = n[e] = {i: e, l: !1, exports: {}};
                return i[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
            }

            var n = {};
            return r.m = i, r.c = n, r.d = function (e, t, i) {
                r.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: i})
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = 2)
        }([function (eOa, fOa, gOa) {
            eOa.exports = function (i) {
                function r(e) {
                    if (n[e]) return n[e].exports;
                    var t = n[e] = {i: e, l: !1, exports: {}};
                    return i[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
                }

                var n = {};
                return r.m = i, r.c = n, r.d = function (e, t, i) {
                    r.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: i})
                }, r.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 16)
            }([function (e, t) {
                function o(e, t, i) {
                    switch (i.length) {
                        case 0:
                            return e.call(t);
                        case 1:
                            return e.call(t, i[0]);
                        case 2:
                            return e.call(t, i[0], i[1]);
                        case 3:
                            return e.call(t, i[0], i[1], i[2])
                    }
                    return e.apply(t, i)
                }

                function i(e, t) {
                    var i, r, n,
                        o = j(e) || (n = r = i = e) && "object" == typeof n && c(r) && S.call(i, "callee") && (!k.call(i, "callee") || w.call(i) == y) ? function (e, t) {
                            for (var i = -1, r = Array(e); ++i < e;) r[i] = t(i);
                            return r
                        }(e.length, String) : [], a = o.length, s = !!a;
                    for (var u in e) !t && !S.call(e, u) || s && ("length" == u || l(u, a)) || o.push(u);
                    return o
                }

                function u(e, t, i) {
                    var r = e[t];
                    S.call(e, t) && s(r, i) && (void 0 !== i || t in e) || (e[t] = i)
                }

                function l(e, t) {
                    return !!(t = null == t ? v : t) && ("number" == typeof e || b.test(e)) && -1 < e && e % 1 == 0 && e < t
                }

                function r(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || T)
                }

                function s(e, t) {
                    return e === t || e != e && t != t
                }

                function c(e) {
                    return null != e && "number" == typeof (r = e.length) && -1 < r && r % 1 == 0 && r <= v && !((i = d(t = e) ? w.call(t) : "") == _ || i == g);
                    var t, i, r
                }

                function d(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function n(e) {
                    return c(e) ? i(e) : function (e) {
                        if (!r(e)) return E(e);
                        var t = [];
                        for (var i in Object(e)) S.call(e, i) && "constructor" != i && t.push(i);
                        return t
                    }(e)
                }

                var h, a, f, p, m, v = 9007199254740991, y = "[object Arguments]", _ = "[object Function]",
                    g = "[object GeneratorFunction]", b = /^(?:0|[1-9]\d*)$/, T = Object.prototype,
                    S = T.hasOwnProperty, w = T.toString, k = T.propertyIsEnumerable,
                    E = (p = Object.keys, m = Object, function (e) {
                        return p(m(e))
                    }), C = Math.max, x = !k.call({valueOf: 1}, "valueOf"), j = Array.isArray,
                    O = (h = function (e, t) {
                        if (x || r(t) || c(t)) !function (e, t, i, r) {
                            i || (i = {});
                            for (var n = -1, o = t.length; ++n < o;) {
                                var a = t[n], s = r ? r(i[a], e[a], a, i, e) : void 0;
                                u(i, a, void 0 === s ? e[a] : s)
                            }
                        }(t, n(t), e); else for (var i in t) S.call(t, i) && u(e, i, t[i])
                    }, a = function (e, t) {
                        var i = -1, r = t.length, n = 1 < r ? t[r - 1] : void 0, o = 2 < r ? t[2] : void 0;
                        for (n = 3 < h.length && "function" == typeof n ? (r--, n) : void 0, o && function (e, t, i) {
                            if (!d(i)) return !1;
                            var r = typeof t;
                            return !!("number" == r ? c(i) && l(t, i.length) : "string" == r && t in i) && s(i[t], e)
                        }(t[0], t[1], o) && (n = r < 3 ? void 0 : n, r = 1), e = Object(e); ++i < r;) {
                            var a = t[i];
                            a && h(e, a)
                        }
                        return e
                    }, f = C(void 0 === f ? a.length - 1 : f, 0), function () {
                        for (var e = arguments, t = -1, i = C(e.length - f, 0), r = Array(i); ++t < i;) r[t] = e[f + t];
                        t = -1;
                        for (var n = Array(f + 1); ++t < f;) n[t] = e[t];
                        return n[f] = r, o(a, this, n)
                    });
                e.exports = O
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, i) {
                    i = void 0 === i ? 1 : i, e[t] = e[t] || 0, e[t] += i
                }
            }, function (i, e, t) {
                (function (e) {
                    var t;
                    t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, i.exports = t
                }).call(e, t(5))
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var r, n = i(18), o = (r = n) && r.__esModule ? r : {default: r}, a = o.default.methodFactory;
                o.default.methodFactory = function (e, t, i) {
                    var r = a(e, t, i);
                    return function () {
                        for (var e = ["[mux]"], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                        r.apply(void 0, e)
                    }
                }, o.default.setLevel(o.default.getLevel()), t.default = o.default
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.extractHostnameAndDomain = void 0;
                var r, n = i(7), o = (r = n) && r.__esModule ? r : {default: r};
                t.extractHostnameAndDomain = function (e) {
                    var t = o.default.createElement("a");
                    t.href = e;
                    var i = t.hostname, r = i.match(/[^\.]+\.[^\.]+$/), n = void 0;
                    return r && r.length && (n = r[0]), [i, n]
                }
            }, function (aRa, bRa) {
                var cRa;
                cRa = function () {
                    return this
                }();
                try {
                    cRa = cRa || Function("return this")() || eval("this")
                } catch (aRa) {
                    "object" == typeof window && (cRa = window)
                }
                aRa.exports = cRa
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.generateUUID = function () {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    })
                }, t.generateShortID = function () {
                    return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6)
                }
            }, function (n, e, o) {
                (function (e) {
                    var t, i = void 0 !== e ? e : "undefined" != typeof window ? window : {}, r = o(20);
                    "undefined" != typeof document ? t = document : (t = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (t = i["__GLOBAL_DOCUMENT_CACHE@4"] = r), n.exports = t
                }).call(e, o(5))
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                    e = (e = e || "").match(/[^\r\n]+/g) || [];
                    for (var t = {}, i = 0; i < e.length; i++) {
                        var r = e[i].split(/\s*:\s*(.+)/);
                        3 === r.length && (t[r[0]] = r[1])
                    }
                    return t
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.findMediaElement = t.getMuxPlayerId = void 0;
                var r = i(6), n = function (e) {
                    return e && void 0 !== e.nodeName ? (e.muxId || (e.muxId = e.id || (0, r.generateShortID)()), e.muxId) : e
                };
                t.getMuxPlayerId = n, t.findMediaElement = function (e) {
                    var t = void 0;
                    return e && void 0 !== e.nodeName ? e = n(t = e) : t = document.querySelector(e), [t, e, t && t.nodeName ? t.nodeName.toLowerCase() : ""]
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
                    return "1" === (o.default.doNotTrack || o.default.navigator.doNotTrack || o.default.navigator.msDoNotTrack)
                };
                var r, n = i(2), o = (r = n) && r.__esModule ? r : {default: r}
            }, function (e, t) {
                e.exports = function (e) {
                    return e.webpackPolyfill || (e.deprecate = function () {
                    }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l
                        }
                    }), Object.defineProperty(e, "id", {
                        enumerable: !0, get: function () {
                            return e.i
                        }
                    }), e.webpackPolyfill = 1), e
                }
            }, function (e, t, i) {
                "use strict";
                var r = i(40), n = i(41), o = i(14);
                e.exports = {formats: o, parse: n, stringify: r}
            }, function (e, o, t) {
                "use strict";
                var a = Object.prototype.hasOwnProperty, s = function () {
                    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                    return e
                }();
                o.arrayToObject = function (e, t) {
                    for (var i = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (i[r] = e[r]);
                    return i
                }, o.merge = function (i, r, n) {
                    if (!r) return i;
                    if ("object" != typeof r) {
                        if (Array.isArray(i)) i.push(r); else {
                            if ("object" != typeof i) return [i, r];
                            (n.plainObjects || n.allowPrototypes || !a.call(Object.prototype, r)) && (i[r] = !0)
                        }
                        return i
                    }
                    if ("object" != typeof i) return [i].concat(r);
                    var e = i;
                    return Array.isArray(i) && !Array.isArray(r) && (e = o.arrayToObject(i, n)), Array.isArray(i) && Array.isArray(r) ? (r.forEach(function (e, t) {
                        a.call(i, t) ? i[t] && "object" == typeof i[t] ? i[t] = o.merge(i[t], e, n) : i.push(e) : i[t] = e
                    }), i) : Object.keys(r).reduce(function (e, t) {
                        var i = r[t];
                        return a.call(e, t) ? e[t] = o.merge(e[t], i, n) : e[t] = i, e
                    }, e)
                }, o.assign = function (e, i) {
                    return Object.keys(i).reduce(function (e, t) {
                        return e[t] = i[t], e
                    }, e)
                }, o.decode = function (t) {
                    try {
                        return decodeURIComponent(t.replace(/\+/g, " "))
                    } catch (e) {
                        return t
                    }
                }, o.encode = function (e) {
                    if (0 === e.length) return e;
                    for (var t = "string" == typeof e ? e : String(e), i = "", r = 0; r < t.length; ++r) {
                        var n = t.charCodeAt(r);
                        45 === n || 46 === n || 95 === n || 126 === n || 48 <= n && n <= 57 || 65 <= n && n <= 90 || 97 <= n && n <= 122 ? i += t.charAt(r) : n < 128 ? i += s[n] : n < 2048 ? i += s[192 | n >> 6] + s[128 | 63 & n] : n < 55296 || 57344 <= n ? i += s[224 | n >> 12] + s[128 | n >> 6 & 63] + s[128 | 63 & n] : (r += 1, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(r)), i += s[240 | n >> 18] + s[128 | n >> 12 & 63] + s[128 | n >> 6 & 63] + s[128 | 63 & n])
                    }
                    return i
                }, o.compact = function (e) {
                    for (var t = [{
                        obj: {o: e},
                        prop: "o"
                    }], i = [], r = 0; r < t.length; ++r) for (var n = t[r], o = n.obj[n.prop], a = Object.keys(o), s = 0; s < a.length; ++s) {
                        var u = a[s], l = o[u];
                        "object" == typeof l && null !== l && -1 === i.indexOf(l) && (t.push({
                            obj: o,
                            prop: u
                        }), i.push(l))
                    }
                    return function (e) {
                        for (var t; e.length;) {
                            var i = e.pop();
                            if (t = i.obj[i.prop], Array.isArray(t)) {
                                for (var r = [], n = 0; n < t.length; ++n) void 0 !== t[n] && r.push(t[n]);
                                i.obj[i.prop] = r
                            }
                        }
                        return t
                    }(t)
                }, o.isRegExp = function (e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                }, o.isBuffer = function (e) {
                    return null != e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                }
            }, function (e, t, i) {
                "use strict";
                var r = String.prototype.replace, n = /%20/g;
                e.exports = {
                    default: "RFC3986", formatters: {
                        RFC1738: function (e) {
                            return r.call(e, n, "+")
                        }, RFC3986: function (e) {
                            return e
                        }
                    }, RFC1738: "RFC1738", RFC3986: "RFC3986"
                }
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                function n(e) {
                    var t = {};
                    for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
                    return t
                }

                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (o) {
                    var a = {}, s = {};
                    return Object.keys(o).forEach(function (t) {
                        var i = !1;
                        if (o.hasOwnProperty(t) && void 0 !== o[t]) {
                            var e = t.split("_"), r = e[0], n = c[r];
                            n || (u.default.info("Data key word `" + e[0] + "` not expected in " + t), n = r + "_"), e.splice(1).forEach(function (e) {
                                "url" === e && (i = !0), d[e] ? n += d[e] : (u.default.info("Data key word `" + e + "` not expected in " + t), n += "_" + e + "_")
                            }), i ? s[n] = o[t] : a[n] = o[t]
                        }
                    }), (0, l.default)(a, s)
                };
                var o = i(3), u = r(o), a = i(0), l = r(a), c = n({
                    a: "env",
                    b: "beacon",
                    d: "ad",
                    e: "event",
                    f: "experiment",
                    m: "mux",
                    n: "response",
                    p: "player",
                    q: "request",
                    r: "retry",
                    s: "session",
                    t: "timestamp",
                    u: "viewer",
                    v: "video",
                    w: "page",
                    x: "view",
                    y: "sub"
                }), d = n({
                    ad: "ad",
                    ag: "aggregate",
                    ap: "api",
                    al: "application",
                    ar: "architecture",
                    as: "asset",
                    au: "autoplay",
                    av: "average",
                    bi: "bitrate",
                    br: "break",
                    bw: "browser",
                    by: "bytes",
                    ca: "cached",
                    cb: "cancel",
                    cd: "code",
                    cg: "category",
                    cn: "config",
                    co: "count",
                    ce: "counter",
                    cp: "complete",
                    ct: "content",
                    cu: "current",
                    dg: "downscaling",
                    dm: "domain",
                    dn: "cdn",
                    do: "downscale",
                    du: "duration",
                    dv: "device",
                    ec: "encoding",
                    en: "end",
                    eg: "engine",
                    em: "embed",
                    er: "error",
                    es: "errorcode",
                    et: "errortext",
                    ee: "event",
                    ev: "events",
                    ex: "expires",
                    fi: "first",
                    fm: "family",
                    ft: "format",
                    fq: "frequency",
                    fr: "frame",
                    fs: "fullscreen",
                    he: "headers",
                    ho: "host",
                    hn: "hostname",
                    ht: "height",
                    id: "id",
                    ii: "init",
                    in: "instance",
                    ip: "ip",
                    is: "is",
                    ke: "key",
                    la: "language",
                    lb: "labeled",
                    le: "level",
                    li: "live",
                    ld: "loaded",
                    lo: "load",
                    ls: "lists",
                    lt: "latency",
                    ma: "max",
                    md: "media",
                    me: "message",
                    mi: "mime",
                    ml: "midroll",
                    mm: "min",
                    mn: "manufacturer",
                    mx: "mux",
                    nm: "name",
                    no: "number",
                    on: "on",
                    os: "os",
                    pa: "paused",
                    pb: "playback",
                    pd: "producer",
                    pe: "percentage",
                    pf: "played",
                    ph: "playhead",
                    pi: "plugin",
                    pl: "preroll",
                    po: "poster",
                    pr: "preload",
                    py: "property",
                    ra: "rate",
                    rd: "requested",
                    re: "rebuffer",
                    rf: "rendition",
                    ro: "ratio",
                    rp: "response",
                    rq: "request",
                    rs: "requests",
                    sa: "sample",
                    se: "session",
                    sk: "seek",
                    sm: "stream",
                    so: "source",
                    sq: "sequence",
                    sr: "series",
                    st: "start",
                    su: "startup",
                    sv: "server",
                    sw: "software",
                    ta: "tag",
                    tc: "tech",
                    te: "text",
                    th: "throughput",
                    ti: "time",
                    tl: "total",
                    to: "to",
                    tt: "title",
                    ty: "type",
                    ug: "upscaling",
                    up: "upscale",
                    ur: "url",
                    us: "user",
                    va: "variant",
                    vd: "viewed",
                    vi: "video",
                    ve: "version",
                    vw: "view",
                    vr: "viewer",
                    wd: "width",
                    wa: "watch",
                    wt: "waiting"
                })
            }, function (e, t, i) {
                "use strict";
                e.exports = i(17).default
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var n = function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function (e, t) {
                            var i = [], r = !0, n = !1, o = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                            } catch (e) {
                                n = !0, o = e
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (n) throw o
                                }
                            }
                            return i
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }, o = i(2), a = r(o), s = i(9), u = i(3), l = r(u), c = i(10), d = r(c), h = i(19), f = r(h),
                    p = i(48), m = r(p), v = i(49), y = r(v), _ = {}, g = function e(t) {
                        var i = arguments;
                        "string" == typeof t ? e.hasOwnProperty(t) ? a.default.setTimeout(function () {
                            i = Array.prototype.splice.call(i, 1), e[t].apply(null, i)
                        }, 0) : l.default.warn("`" + t + "` is an unknown task") : "function" == typeof t ? a.default.setTimeout(function () {
                            t(e)
                        }, 0) : l.default.warn("`" + t + "` is invalid.")
                    };
                g.loaded = Date.now(), g.VERSION = "2.5.0", g.API_VERSION = "2.0", g.PLAYER_TRACKED = !1, g.monitor = function (e, t) {
                    return (0, m.default)(g, e, t)
                }, g.destroyMonitor = function (e) {
                    var t = (0, s.findMediaElement)(e), i = n(t, 1), r = i[0];
                    r && r.mux && "function" == typeof r.mux.destroy ? r.mux.destroy() : l.default.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.")
                }, g.addHLSJS = function (e, t) {
                    var i = (0, s.getMuxPlayerId)(e);
                    _[i] ? _[i].addHLSJS(t) : l.default.error("A monitor for `" + i + "` has not been initialized.")
                }, g.addDashJS = function (e, t) {
                    var i = (0, s.getMuxPlayerId)(e);
                    _[i] ? _[i].addDashJS(t) : l.default.error("A monitor for `" + i + "` has not been initialized.")
                }, g.removeHLSJS = function (e) {
                    var t = (0, s.getMuxPlayerId)(e);
                    _[t] ? _[t].removeHLSJS() : l.default.error("A monitor for `" + t + "` has not been initialized.")
                }, g.removeDashJS = function (e, t) {
                    var i = (0, s.getMuxPlayerId)(e);
                    _[i] ? _[i].removeDashJS(t) : l.default.error("A monitor for `" + i + "` has not been initialized.")
                }, g.init = function (e, t) {
                    var i = (0, s.getMuxPlayerId)(e);
                    _[i] = new f.default(g, i, t)
                }, g.emit = function (e, t, i) {
                    var r = (0, s.getMuxPlayerId)(e);
                    _[r] ? (_[r].emit(t, i), "destroy" === t && delete _[r]) : l.default.error("A monitor for `" + r + "` has not been initialized.")
                }, (0, d.default)() && l.default.info("The browser's Do Not Track flag is enabled - Mux beaconing may be disabled."), a.default.addEventListener("unload", function () {
                    g.WINDOW_UNLOADING = !0
                }, !1), g.checkDoNotTrack = d.default, g.log = l.default, g.utils = y.default, t.default = g
            }, function (i, r, n) {
                var o, a;
                !function (e, t) {
                    "use strict";
                    void 0 !== (a = "function" == typeof (o = function () {
                        function n(e, t) {
                            var i = e[t];
                            if ("function" == typeof i.bind) return i.bind(e);
                            try {
                                return Function.prototype.bind.call(i, e)
                            } catch (t) {
                                return function () {
                                    return Function.prototype.apply.apply(i, [e, arguments])
                                }
                            }
                        }

                        function u(e, t) {
                            for (var i = 0; i < d.length; i++) {
                                var r = d[i];
                                this[r] = i < e ? o : this.methodFactory(r, e, t)
                            }
                            this.log = this.debug
                        }

                        function l(e, t, i) {
                            return "debug" === (r = e) && (r = "log"), typeof console !== c && (void 0 !== console[r] ? n(console, r) : void 0 !== console.log ? n(console, "log") : o) || function (e, t, i) {
                                return function () {
                                    typeof console !== c && (u.call(this, t, i), this[e].apply(this, arguments))
                                }
                            }.apply(this, arguments);
                            var r
                        }

                        function i(i, e, t) {
                            function r() {
                                var e;
                                if (typeof window !== c) {
                                    try {
                                        e = window.localStorage[a]
                                    } catch (e) {
                                    }
                                    if (typeof e === c) try {
                                        var t = window.document.cookie, i = t.indexOf(encodeURIComponent(a) + "=");
                                        i && (e = /^([^;]+)/.exec(t.slice(i))[1])
                                    } catch (e) {
                                    }
                                    return void 0 === o.levels[e] && (e = void 0), e
                                }
                            }

                            var n, o = this, a = "loglevel";
                            i && (a += ":" + i), o.levels = {
                                TRACE: 0,
                                DEBUG: 1,
                                INFO: 2,
                                WARN: 3,
                                ERROR: 4,
                                SILENT: 5
                            }, o.methodFactory = t || l, o.getLevel = function () {
                                return n
                            }, o.setLevel = function (e, t) {
                                if ("string" == typeof e && void 0 !== o.levels[e.toUpperCase()] && (e = o.levels[e.toUpperCase()]), !("number" == typeof e && 0 <= e && e <= o.levels.SILENT)) throw"log.setLevel() called with invalid level: " + e;
                                if (n = e, !1 !== t && function (e) {
                                    var t = (d[e] || "silent").toUpperCase();
                                    if (typeof window !== c) {
                                        try {
                                            return window.localStorage[a] = t
                                        } catch (e) {
                                        }
                                        try {
                                            window.document.cookie = encodeURIComponent(a) + "=" + t + ";"
                                        } catch (e) {
                                        }
                                    }
                                }(e), u.call(o, e, i), typeof console === c && e < o.levels.SILENT) return "No console available for logging"
                            }, o.setDefaultLevel = function (e) {
                                r() || o.setLevel(e, !1)
                            }, o.enableAll = function (e) {
                                o.setLevel(o.levels.TRACE, e)
                            }, o.disableAll = function (e) {
                                o.setLevel(o.levels.SILENT, e)
                            };
                            var s = r();
                            null == s && (s = null == e ? "WARN" : e), o.setLevel(s, !1)
                        }

                        var o = function () {
                        }, c = "undefined", d = ["trace", "debug", "info", "warn", "error"], r = new i, a = {};
                        r.getLogger = function (e) {
                            if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                            var t = a[e];
                            return t || (t = a[e] = new i(e, r.getLevel(), r.methodFactory)), t
                        };
                        var e = typeof window !== c ? window.log : void 0;
                        return r.noConflict = function () {
                            return typeof window !== c && window.log === r && (window.log = e), r
                        }, r
                    }) ? o.call(r, n, r, i) : o) && (i.exports = a)
                }()
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function (e, t) {
                            var i = [], r = !0, n = !1, o = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                            } catch (e) {
                                n = !0, o = e
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (n) throw o
                                }
                            }
                            return i
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }, n = i(3), o = r(n), s = i(0), u = r(s), l = i(6), c = i(4), d = i(2), h = r(d), f = i(1), p = r(f),
                    m = i(21), v = r(m), y = i(23), _ = i(24), g = i(25), b = r(g), T = i(26), S = r(T), w = i(27),
                    k = r(w), E = i(28), C = r(E), x = i(29), j = r(x), O = i(30), P = r(O), A = i(31), L = r(A),
                    M = i(32), I = r(M), D = i(33), R = r(D), N = i(34), B = r(N), F = i(35), U = r(F), H = i(36),
                    q = r(H), V = i(37), W = r(V), G = i(38), z = r(G), X = i(47), $ = r(X),
                    K = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled"],
                    Y = function (e, t, i) {
                        var r = this;
                        this.DOM_CONTENT_LOADED_EVENT_END = h.default.performance && h.default.performance.timing.domContentLoadedEventEnd, this.NAVIGATION_START = h.default.performance && h.default.performance.timing.navigationStart, this.mux = e, this.id = t, (i = (0, u.default)({
                            debug: !1,
                            minimumRebufferDuration: 250,
                            sustainedRebufferThreshold: 1e3,
                            playbackHeartbeatTime: 25,
                            sampleRate: 1,
                            beaconDomain: "litix.io",
                            disableCookies: !1,
                            respectDoNotTrack: !0
                        }, i)).data = i.data || {}, i.data.property_key && (i.data.env_key = i.data.property_key, delete i.data.property_key), o.default.setLevel(i.debug ? "debug" : "warn"), this.getPlayheadTime = i.getPlayheadTime, this.getStateData = i.getStateData || function () {
                        }, this.getAdData = i.getAdData || function () {
                        }, this.minimumRebufferDuration = i.minimumRebufferDuration, this.sustainedRebufferThreshold = i.sustainedRebufferThreshold, this.playbackHeartbeatTime = i.playbackHeartbeatTime, this.playbackEventDispatcher = new z.default(e, i.data.env_key, i), this.data = {
                            player_instance_id: (0, l.generateShortID)(),
                            mux_sample_rate: i.sampleRate,
                            beacon_domain: i.beaconDomain
                        }, this.data.view_sequence_number = 1, this.data.player_sequence_number = 1, this.oldEmit = this.emit, this.emit = function (e, t) {
                            t = (0, u.default)({viewer_time: Date.now()}, t), this.oldEmit(e, t)
                        }, this.on("viewinit", function (e, t) {
                            this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), (0, u.default)(this.data, t), this._initializeViewData();
                            var i = function () {
                                void 0 === this.data.view_start && (this.data.view_start = Date.now(), this.emit("viewstart"))
                            }.bind(this);
                            this.one("play", i), this.one("adbreakstart", i)
                        }), this.on("videochange", function (e, t) {
                            this.emit("viewend"), this.send("viewend"), this.emit("viewinit", t)
                        }), this.on("destroy", this.destroy);
                        var n = this.destroy.bind(this);
                        h.default.addEventListener("unload", n, !1), this.on("destroy", function () {
                            h.default.removeEventListener("unload", n)
                        }), this.on("playerready", function (e, t) {
                            (0, u.default)(this.data, t)
                        }), K.forEach(function (i) {
                            r.on(i, function (e, t) {
                                0 !== i.indexOf("ad") && this._updateStateData(), (0, u.default)(this.data, t), this._sanitizeData()
                            }), r.on("after" + i, function () {
                                this.send(i)
                            })
                        }), this.on("viewend", function (e, t) {
                            (0, u.default)(r.data, t)
                        }), this.one("playerready", function (e) {
                            var t = Date.now();
                            this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time
                        }), k.default.apply(this), W.default.apply(this), B.default.apply(this), P.default.apply(this), S.default.apply(this), R.default.apply(this), C.default.apply(this), j.default.apply(this), U.default.apply(this), L.default.apply(this), I.default.apply(this), q.default.apply(this), $.default.apply(this), i.hlsjs && this.addHLSJS(i), i.dashjs && this.addDashJS(i), this.emit("viewinit", i.data)
                    };
                (0, u.default)(Y.prototype, b.default.prototype), (0, u.default)(Y.prototype, P.default.prototype), (0, u.default)(Y.prototype, B.default.prototype), (0, u.default)(Y.prototype, S.default.prototype), (0, u.default)(Y.prototype, C.default.prototype), (0, u.default)(Y.prototype, j.default.prototype), (0, u.default)(Y.prototype, U.default.prototype), (0, u.default)(Y.prototype, L.default.prototype), (0, u.default)(Y.prototype, I.default.prototype), Y.prototype.destroy = function () {
                    this._destroyed || (this._destroyed = !0, void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), h.default.clearTimeout(this._heartBeatTimeout))
                }, Y.prototype.send = function (e) {
                    var t = (0, u.default)({}, this.data);
                    if (1 === t.player_error_code && (delete t.player_error_code, delete t.player_error_message), t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0 ? t.video_source_is_live = !0 : (0 < t.player_source_duration || 0 < t.video_source_duration) && (t.video_source_is_live = !1), t.video_source_url = t.video_source_url || t.player_source_url, t.video_source_url) {
                        var i = (0, c.extractHostnameAndDomain)(t.video_source_url), r = a(i, 2), n = r[0], o = r[1];
                        t.video_source_domain = o, t.video_source_hostname = n
                    }
                    delete t.ad_request_id, this.playbackEventDispatcher.send(e, t), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat()
                }, Y.prototype._updateStateData = function () {
                    (0, u.default)(this.data, this.getStateData()), this.getPlayheadTime && (this.data.player_playhead_time = this.getPlayheadTime()), this._sanitizeData()
                }, Y.prototype._sanitizeData = function () {
                    var i = this;
                    ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time"].forEach(function (e) {
                        var t = parseInt(i.data[e], 10);
                        i.data[e] = isNaN(t) ? void 0 : t
                    })
                }, Y.prototype._resetVideoData = function (e, t) {
                    var i = this;
                    Object.keys(this.data).forEach(function (e) {
                        0 === e.indexOf("video_") && delete i.data[e]
                    })
                }, Y.prototype._resetViewData = function () {
                    var t = this;
                    Object.keys(this.data).forEach(function (e) {
                        0 === e.indexOf("view_") && delete t.data[e]
                    }), this.data.view_sequence_number = 1
                }, Y.prototype._resetErrorData = function (e, t) {
                    delete this.data.player_error_code, delete this.data.player_error_message
                }, Y.prototype._initializeViewData = function () {
                    var e = this, t = this.data.view_id = (0, l.generateUUID)();
                    this.data.video_id || (this.data.video_id = (0, v.default)(this.data.player_source_url));
                    var i = function () {
                        t === e.data.view_id && (0, p.default)(e.data, "player_view_count", 1)
                    };
                    this.data.player_is_paused ? this.one("play", i) : i()
                }, Y.prototype._restartHeartBeat = function () {
                    var e = this;
                    h.default.clearTimeout(this._heartBeatTimeout), this.viewErrored || (this._heartBeatTimeout = h.default.setTimeout(function () {
                        e.data.player_is_paused || e.emit("hb")
                    }, 1e4))
                }, Y.prototype.addHLSJS = function (e) {
                    return e.hlsjs ? this.hlsjs ? void this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e.hlsjs, void (0, y.monitorHLSJS)(this.mux, this.id, e.hlsjs, {}, e.Hls || h.default.Hls)) : void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")
                }, Y.prototype.removeHLSJS = function () {
                    this.hlsjs && ((0, y.stopMonitoringHLSJS)(this.id, this.hlsjs), this.hlsjs = void 0)
                }, Y.prototype.addDashJS = function (e) {
                    return e.dashjs ? this.dashjs ? void this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e.dashjs, void (0, _.monitorDashJS)(this.mux, this.id, e.dashjs)) : void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")
                }, Y.prototype.removeDashJS = function () {
                    this.dashjs && ((0, _.stopMonitoringDashJS)(this.id, this.dashjs), this.dashjs = void 0)
                }, t.default = Y
            }, function (e, t) {
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                    var t = o.default.createElement("a");
                    t.href = e;
                    var i = t.pathname.replace(/\.[^\/.]+$/, "");
                    return s.default.encode(t.host + i).split("=")[0]
                };
                var n = i(7), o = r(n), a = i(22), s = r(a)
            }, function (e, o, a) {
                (function (r, e) {
                    var n;
                    !function (e) {
                        var t = ("object" == typeof r && r && r.exports, function (e) {
                            this.message = e
                        });
                        t.prototype = new Error, t.prototype.name = "InvalidCharacterError";
                        var l = function (e) {
                                throw new t(e)
                            }, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = /[\t\n\f\r ]/g,
                            i = {
                                encode: function (e) {
                                    e = String(e), /[^\0-\xFF]/.test(e) && l("The string to be encoded contains characters outside of the Latin1 range.");
                                    for (var t, i, r, n, o = e.length % 3, a = "", s = -1, u = e.length - o; ++s < u;) t = e.charCodeAt(s) << 16, i = e.charCodeAt(++s) << 8, r = e.charCodeAt(++s), a += c.charAt((n = t + i + r) >> 18 & 63) + c.charAt(n >> 12 & 63) + c.charAt(n >> 6 & 63) + c.charAt(63 & n);
                                    return 2 == o ? (t = e.charCodeAt(s) << 8, i = e.charCodeAt(++s), a += c.charAt((n = t + i) >> 10) + c.charAt(n >> 4 & 63) + c.charAt(n << 2 & 63) + "=") : 1 == o && (n = e.charCodeAt(s), a += c.charAt(n >> 2) + c.charAt(n << 4 & 63) + "=="), a
                                }, decode: function (e) {
                                    var t = (e = String(e).replace(s, "")).length;
                                    t % 4 == 0 && (e = e.replace(/==?$/, ""), t = e.length), (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) && l("Invalid character: the string to be decoded is not correctly encoded.");
                                    for (var i, r, n = 0, o = "", a = -1; ++a < t;) r = c.indexOf(e.charAt(a)), i = n % 4 ? 64 * i + r : r, n++ % 4 && (o += String.fromCharCode(255 & i >> (-2 * n & 6)));
                                    return o
                                }, version: "0.1.0"
                            };
                        void 0 !== (n = function () {
                            return i
                        }.call(o, a, o, r)) && (r.exports = n)
                    }()
                }).call(o, a(11)(e), a(5))
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0}), t.stopMonitoringHLSJS = t.monitorHLSJS = void 0;
                var j = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function (e, t) {
                        var i = [], r = !0, n = !1, o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                        } catch (e) {
                            n = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                        return i
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }, n = i(2), O = r(n), o = i(8), P = r(o), A = i(4);
                t.monitorHLSJS = function (y, _, g) {
                    function e(e, t) {
                        try {
                            var i = void 0, r = void 0, n = void 0, o = void 0, a = void 0, s = void 0, u = void 0,
                                l = void 0, c = void 0, d = void 0, h = void 0, f = void 0, p = null, m = void 0;
                            if (e !== b.Events.FRAG_BUFFERED && t.networkDetails && t.networkDetails.getAllResponseHeaders) {
                                E = t.networkDetails.getAllResponseHeaders(), c = t.networkDetails.responseURL;
                                var v = (0, A.extractHostnameAndDomain)(c);
                                f = j(v, 1)[0]
                            } else e === b.Events.FRAG_BUFFERED && (E = C[t.frag.loadIdx][0], f = C[t.frag.loadIdx][1], delete C[t.frag.loadIdx]);
                            if (e === b.Events.FRAG_LOADED) return void (C[t.frag.loadIdx] = [E, f]);
                            S = g.currentLevel, u = g.levels, h = e === b.Events.MANIFEST_LOADED || e === b.Events.LEVEL_LOADED ? (d = "manifest", a = 0, -1) : (d = "media", a = t.frag.duration, t.frag.startPTS), 0 <= S && (l = u[S], w = void 0 !== l.width ? l.width : 0, k = void 0 !== l.height ? l.height : 0), e === b.Events.MANIFEST_LOADED && (p = {}, u.forEach(function (e, t) {
                                p[t] = {}, p[t].width = void 0 !== e.width ? e.width : 0, p[t].height = void 0 !== e.height ? e.height : 0, p[t].bitrate = e.bitrate, p[t].attrs = e.attrs
                            }), x.media = p), s = O.default.performance.timing.navigationStart, o = t.stats.total, i = s + t.stats.trequest, r = s + t.stats.tfirst, n = s + t.stats.tload, m = {
                                request_event_type: e,
                                request_start: i,
                                request_response_start: r,
                                request_response_end: n,
                                request_bytes_loaded: o,
                                request_type: d,
                                request_response_headers: (0, P.default)(E),
                                request_hostname: f
                            }, "audio" !== d && "video" !== d && "media" !== d || (m.request_media_duration = a), -1 !== S && (m.request_current_level = S), -1 !== h && (m.request_media_start_time = h), "video" !== d && "media" !== d || (m.request_video_width = w, m.request_video_height = k), null !== p && (m.request_rendition_lists = x), y.emit(_, "requestcompleted", m)
                        } catch (e) {
                            T.warn("hlsjs-monitor.js onHLSRequestLoaded() Exception", e)
                        }
                    }

                    function t(e, t) {
                        var i = t.details;
                        if (i === b.ErrorDetails.MANIFEST_LOAD_ERROR || i === b.ErrorDetails.MANIFEST_LOAD_TIMEOUT || i === b.ErrorDetails.FRAG_LOAD_ERROR || i === b.ErrorDetails.FRAG_LOAD_TIMEOUT || i === b.ErrorDetails.LEVEL_LOAD_ERROR || i === b.ErrorDetails.LEVEL_LOAD_TIMEOUT) try {
                            var r = void 0, n = void 0, o = "", a = 0, s = "";
                            switch (i) {
                                case b.ErrorDetails.MANIFEST_LOAD_ERROR:
                                    a = t.response.code, s = t.response.text, o = t.context.url;
                                    break;
                                case b.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
                                    o = t.context.url;
                                    break;
                                case b.ErrorDetails.LEVEL_LOAD_ERROR:
                                    a = t.response.code, s = t.response.text, o = t.context.url;
                                    break;
                                case b.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                    o = t.context.url;
                                    break;
                                case b.ErrorDetails.FRAG_LOAD_ERROR:
                                    a = t.response.code, s = t.response.text, o = t.frag.url;
                                    break;
                                case b.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                    o = t.frag.url
                            }
                            r = o.match(/^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/), n = r && r[3], y.emit(_, "requestfailed", {
                                request_error: i,
                                request_url: o,
                                request_hostname: n,
                                request_type: "media",
                                request_error_code: a,
                                request_error_text: s
                            })
                        } catch (e) {
                            T.warn("hlsjs-monitor.js onHLSRequestError() Exception", e)
                        }
                    }

                    function i(e, t) {
                        try {
                            var i = void 0, r = void 0, n = t.frag._url;
                            i = n.match(/^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/), r = i && i[3], y.emit(_, "requestcanceled", {
                                request_cancel: e,
                                request_url: n,
                                request_hostname: r,
                                request_type: "media"
                            })
                        } catch (e) {
                            T.warn("hlsjs-monitor.js onHLSRequestCancel() Exception", e)
                        }
                    }

                    var b = (3 < arguments.length && void 0 !== arguments[3] && arguments[3], arguments[4]), T = y.log;
                    if (O.default.performance && O.default.performance.timing) {
                        var S = -1, w = 0, k = 0, E = "", C = {}, x = {video: {}, audio: {}, media: {}};
                        g._muxPluginData = g._muxPluginData || {}, g._muxPluginData[_] = {}, g.on(b.Events.FRAG_LOADED, e), g.on(b.Events.FRAG_BUFFERED, e), g.on(b.Events.MANIFEST_LOADED, e), g.on(b.Events.LEVEL_LOADED, e), g.on(b.Events.ERROR, t), g.on(b.Events.FRAG_LOAD_EMERGENCY_ABORTED, i), g._muxPluginData[_].stopMonitoring = function () {
                            g.off(b.Events.FRAG_LOADED, e), g.off(b.Events.FRAG_BUFFERED, e), g.off(b.Events.MANIFEST_LOADED, e), g.off(b.Events.LEVEL_LOADED, e), g.off(b.Events.ERROR, t), g.off(b.Events.FRAG_LOAD_EMERGENCY_ABORTED, i)
                        }
                    } else T.warn("window.performance.timing not supported. Not tracking HLS.js.")
                }, t.stopMonitoringHLSJS = function (e, t) {
                    t && t._muxPluginData && t._muxPluginData[e] && t._muxPluginData[e].stopMonitoring()
                }
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0}), t.stopMonitoringDashJS = t.monitorDashJS = void 0;
                var M = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function (e, t) {
                        var i = [], r = !0, n = !1, o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                        } catch (e) {
                            n = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                        return i
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }, n = i(2), l = r(n), o = i(8), I = r(o), D = i(4);
                t.monitorDashJS = function (T, S, w) {
                    function e(e) {
                        try {
                            var t = void 0, i = void 0, r = void 0, n = void 0, o = void 0, a = void 0, s = void 0,
                                u = void 0, l = void 0, c = void 0, d = void 0, h = void 0, f = void 0, p = void 0,
                                m = void 0, v = void 0, y = void 0, _ = void 0, g = null;
                            _ = e.type, m = "manifestLoaded" === _ ? (g = {}, y = "", NaN) : (g = e.chunk.mediaInfo.bitrateList, y = e.chunk.mediaInfo.type, e.chunk.start), E = "video" === y ? w.getQualityFor("video") : w.getQualityFor("audio"), "manifestLoaded" === _ || L && A || (O = {}, g.forEach(function (e, t) {
                                O[t] = {}, O[t].width = void 0 !== e.width ? e.width : 0, O[t].height = void 0 !== e.height ? e.height : 0, O[t].bitrate = e.bandwidth, O[t].attrs = {}
                            }), "video" === y ? (P.video = O, L = !0) : (P.audio = O, A = !0)), "initFragmentLoaded" === _ ? f = "video" === y ? (p = "video_init", g[E]) : "audio" === y ? (p = "audio_init", g[0]) : (p = "media", g[E]) : "mediaFragmentLoaded" === _ ? f = "video" === y ? (p = "video", g[E]) : "audio" === y ? (p = "audio", g[0]) : (p = "media", g[E]) : "manifestLoaded" === _ && (p = "manifest", f = {}), C = f.width, x = f.height, j = f.bandwidth, d = "manifestLoaded" === _ ? (s = e.data.url, u = r = i = t = n = 0, "") : (o = e.fragmentModel.getRequests({state: "executed"}), a = o[o.length - 1], s = a.url, l = a.mediaType, n = a.bytesLoaded, t = new Date(a.requestStartDate).getTime(), i = new Date(a.firstByteDate).getTime(), r = new Date(a.requestEndDate).getTime(), u = Number.isNaN(a.duration) ? 0 : a.duration, (c = w.getMetricsFor(l).HttpList)[c.length - 1]._responseHeaders);
                            var b = (0, D.extractHostnameAndDomain)(s);
                            v = M(b, 1)[0], "manifestLoaded" !== _ && "initFragmentLoaded" !== _ || (n = -1), h = {
                                request_event_type: _,
                                request_start: t,
                                request_response_start: i,
                                request_response_end: r,
                                request_bytes_loaded: n,
                                request_type: p,
                                request_response_headers: (0, I.default)(d),
                                request_hostname: v
                            }, "audio" !== p && "video" !== p && "media" !== p || (h.request_media_duration = u), isNaN(m) || (h.request_media_start_time = m), void 0 !== j && (h.request_labeled_bitrate = j), -1 !== E && (h.request_current_level = E), "video" !== p && "media" !== p || (h.request_video_width = C, h.request_video_height = x), null !== O && (h.request_rendition_lists = P), T.emit(S, "requestcompleted", h)
                        } catch (e) {
                            k.warn("dashjs-monitor.js onDASHRequestLoaded() Exception: ", e)
                        }
                    }

                    function t(e) {
                        var t = l.default.event;
                        try {
                            var i = void 0, r = void 0, n = e.error + "_" + e.event.id + "_" + e.event.request.type,
                                o = e.event.url, a = e.event.request.mediaType, s = t.currentTarget.status,
                                u = t.currentTarget.statusText;
                            i = o.match(/^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/), r = i && i[3], T.emit(S, "requestfailed", {
                                request_error: n,
                                request_url: o,
                                request_hostname: r,
                                request_type: a,
                                request_error_code: s,
                                request_error_text: u
                            })
                        } catch (e) {
                            k.warn("dashjs-monitor.js onDASHRequestError() Exception: ", e)
                        }
                    }

                    var k = (3 < arguments.length && void 0 !== arguments[3] && arguments[3], T.log);
                    if (w && w.on) {
                        var E = -1, C = 0, x = 0, j = 0, O = null, P = {video: {}, audio: {}, media: {}}, A = !1,
                            L = !1;
                        w._muxPluginData = w._muxPluginData || {}, w._muxPluginData[S] = {}, w.on("mediaFragmentLoaded", e), w.on("initFragmentLoaded", e), w.on("manifestLoaded", e), w.on("error", t), w._muxPluginData[S].stopMonitoring = function () {
                            w.off("mediaFragmentLoaded", e), w.off("initFragmentLoaded", e), w.off("manifestLoaded", e), w.off("error", t)
                        }
                    } else k.warn("Invalid dash.js player reference. Monitoring blocked.")
                }, t.stopMonitoringDashJS = function (e, t) {
                    t && t._muxPluginData && t._muxPluginData[e] && t._muxPluginData[e].stopMonitoring()
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = function () {
                }, o = 0;
                r.prototype.on = function (e, t, i) {
                    return t._eventEmitterGuid = t._eventEmitterGuid || ++o, this._listeners = this._listeners || {}, this._listeners[e] = this._listeners[e] || [], i && (t = t.bind(i)), this._listeners[e].push(t), t
                }, r.prototype.off = function (e, i) {
                    var r = this._listeners && this._listeners[e];
                    r && r.forEach(function (e, t) {
                        e._eventEmitterGuid === i._eventEmitterGuid && r.splice(t, 1)
                    })
                }, r.prototype.one = function (t, i, r) {
                    var n = this;
                    i._eventEmitterGuid = i._eventEmitterGuid || ++o;
                    var e = function e() {
                        n.off(t, e), i.apply(r || this, arguments)
                    };
                    e._eventEmitterGuid = i._eventEmitterGuid, this.on(t, e)
                }, r.prototype.emit = function (i, e) {
                    var r = this;
                    if (this._listeners) {
                        e = e || {};
                        var t = this._listeners["before*"] || [], n = this._listeners[i] || [],
                            o = this._listeners["after" + i] || [], a = function (e, t) {
                                (e = e.slice()).forEach(function (e) {
                                    e.call(r, {type: i}, t)
                                })
                            };
                        a(t, e), a(n, e), a(o, e)
                    }
                }, t.default = r
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var r, n = i(2), o = (r = n) && r.__esModule ? r : {default: r}, a = function () {
                    this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, this.on("playing", function () {
                        this._playheadShouldBeProgressing = !0
                    }), this.on("play", this._startPlaybackHeartbeatInterval), this.on("adbreakstart", this._startPlaybackHeartbeatInterval), this.on("adplay", this._startPlaybackHeartbeatInterval), this.on("seeking", this._startPlaybackHeartbeatInterval), this.on("devicewake", this._startPlaybackHeartbeatInterval), this.on("pause", this._stopPlaybackHeartbeatInterval), this.on("ended", this._stopPlaybackHeartbeatInterval), this.on("viewend", this._stopPlaybackHeartbeatInterval), this.on("error", this._stopPlaybackHeartbeatInterval), this.on("adpause", this._stopPlaybackHeartbeatInterval), this.on("adbreakend", this._stopPlaybackHeartbeatInterval), this.on("seeked", function () {
                        this.data.player_is_paused && this._stopPlaybackHeartbeatInterval()
                    }), this.on("timeupdate", function () {
                        null !== this._playbackHeartbeatInterval && this.emit("playbackheartbeat")
                    }), this.on("devicesleep", function (e, t) {
                        null !== this._playbackHeartbeatInterval && (o.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend", {viewer_time: t.viewer_time}), this._playbackHeartbeatInterval = null)
                    })
                };
                a.prototype._startPlaybackHeartbeatInterval = function () {
                    var e = this;
                    null === this._playbackHeartbeatInterval && (this.emit("playbackheartbeat"), this._playbackHeartbeatInterval = o.default.setInterval(function () {
                        e.emit("playbackheartbeat")
                    }, this.playbackHeartbeatTime))
                }, a.prototype._stopPlaybackHeartbeatInterval = function () {
                    this._playheadShouldBeProgressing = !1, null !== this._playbackHeartbeatInterval && (o.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null)
                }, t.default = a
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
                    var e = this;
                    this.on("viewinit", function () {
                        e.viewErrored = !1
                    }), this.on("error", function () {
                        e.viewErrored = !0
                    })
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var r, n = i(1), o = (r = n) && r.__esModule ? r : {default: r}, a = function () {
                    this._watchTimeTrackerLastCheckedTime = null, this.on("playbackheartbeat", this._updateWatchTime), this.on("playbackheartbeatend", this._clearWatchTimeState)
                };
                a.prototype._updateWatchTime = function (e, t) {
                    var i = t.viewer_time;
                    null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = i), (0, o.default)(this.data, "view_watch_time", i - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = i
                }, a.prototype._clearWatchTimeState = function (e, t) {
                    this._updateWatchTime(e, t), this._watchTimeTrackerLastCheckedTime = null
                }, t.default = a
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var r, n = i(1), o = (r = n) && r.__esModule ? r : {default: r}, a = function () {
                    this._playbackTimeTrackerLastPlayheadPosition = -1, this.on("playbackheartbeat", this._updatePlaybackTime), this.on("playbackheartbeatend", this._clearPlaybackTimeState), this.on("seeking", this._clearPlaybackTimeState)
                };
                a.prototype._updatePlaybackTime = function () {
                    var e = this.data.player_playhead_time;
                    if (0 <= this._playbackTimeTrackerLastPlayheadPosition && e > this._playbackTimeTrackerLastPlayheadPosition) {
                        var t = e - this._playbackTimeTrackerLastPlayheadPosition;
                        t <= 1e3 && (0, o.default)(this.data, "view_content_playback_time", t)
                    }
                    this._playbackTimeTrackerLastPlayheadPosition = e
                }, a.prototype._clearPlaybackTimeState = function () {
                    this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1
                }, t.default = a
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = function () {
                    this.on("playbackheartbeat", this._updatePlayheadTime), this.on("playbackheartbeatend", this._updatePlayheadTime), this.on("timeupdate", this._updatePlayheadTime), this.on("destroy", function () {
                        this.off("timeupdate", this._updatePlayheadTime)
                    })
                };
                r.prototype._updatePlayheadTime = function (e, t) {
                    if (t.player_playhead_time) this.data.player_playhead_time = t.player_playhead_time; else if (this.getPlayheadTime) {
                        var i = this.getPlayheadTime();
                        void 0 !== i && (this.data.player_playhead_time = i)
                    }
                }, t.default = r
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var r, n = i(1), o = (r = n) && r.__esModule ? r : {default: r}, a = function () {
                    this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, this.on("playbackheartbeat", this._checkIfRebuffering), this.on("playbackheartbeatend", this._cleanupRebufferTracker), this.on("seeking", function () {
                        this._cleanupRebufferTracker(null, {viewer_time: Date.now()})
                    })
                };
                a.prototype._checkIfRebuffering = function (e, t) {
                    if (this.isSeeking || this.isAdBreak || !this._playheadShouldBeProgressing) this._cleanupRebufferTracker(e, t); else {
                        if (null === this._lastCheckedTime) return this._prepareRebufferTrackerState(t.viewer_time), void this._updateRebufferMetrics();
                        if (this._lastPlayheadTime === this.data.player_playhead_time) {
                            var i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                            i >= this.sustainedRebufferThreshold && (this._rebuffering ? this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime) : (this._rebuffering = !0, (0, o.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(i), this.emit("rebufferstart"))), this._lastCheckedTime = t.viewer_time
                        } else this._cleanupRebufferTracker(e, t, !0)
                    }
                }, a.prototype._clearRebufferTrackerState = function () {
                    this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null
                }, a.prototype._prepareRebufferTrackerState = function (e) {
                    this._lastCheckedTime = e, this._lastPlayheadTime = this.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e
                }, a.prototype._cleanupRebufferTracker = function (e, t) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    if (this._rebuffering) this._rebuffering = !1, this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime), this.emit("rebufferend", {viewer_time: t.viewer_time}); else {
                        if (null === this._lastCheckedTime) return void this._updateRebufferMetrics();
                        var r = this.data.player_playhead_time - this._lastPlayheadTime,
                            n = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                        0 < r && n - r > this.minimumRebufferDuration ? ((0, o.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(n - r), this.emit("rebufferstart", {viewer_time: this._lastPlayheadTimeUpdatedTime}), this.emit("rebufferend", {viewer_time: this._lastPlayheadTimeUpdatedTime + n - r})) : this._updateRebufferMetrics()
                    }
                    i ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState()
                }, a.prototype._updateRebufferMetrics = function (e) {
                    0 < e && (0, o.default)(this.data, "view_rebuffer_duration", e), 0 <= this.data.view_watch_time && 0 < this.data.view_rebuffer_count && (this.data.view_rebuffer_frequency = this.data.view_rebuffer_count / this.data.view_watch_time, this.data.view_rebuffer_percentage = this.data.view_rebuffer_duration / this.data.view_watch_time)
                }, t.default = a
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = function () {
                    this.on("viewinit", function () {
                        var e = this.data, r = e.view_id, t = function (e, t) {
                            var i = t.viewer_time;
                            "playing" === e.type && void 0 === this.data.view_time_to_first_frame ? this.calculateTimeToFirstFrame(i || Date.now(), r) : "adplaying" !== e.type || void 0 !== this.data.view_time_to_first_frame && !this.inPrerollPosition() || this.calculateTimeToFirstFrame(i || Date.now(), r)
                        };
                        this.one("playing", t), this.one("adplaying", t), this.one("viewend", function () {
                            this.off("playing", t), this.off("adplaying", t)
                        })
                    })
                };
                r.prototype.calculateTimeToFirstFrame = function (e, t) {
                    t === this.data.view_id && (this._updateWatchTime(null, {viewer_time: e}), this.data.view_time_to_first_frame = this.data.view_watch_time, (this.data.player_autoplay_on || this.data.video_is_autoplay) && this.NAVIGATION_START && (this.data.view_aggregate_startup_time = this.data.view_start + this.data.view_watch_time - this.NAVIGATION_START))
                }, t.default = r
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
                    var t = this;
                    this.on("viewinit", function () {
                        this._lastPlayheadPosition = -1
                    });
                    var e = ["playing", "hb"];
                    ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"].forEach(function (e) {
                        t.on(e, function () {
                            if (0 <= this._lastPlayheadPosition && 0 <= this.data.player_playhead_time && 0 <= this._lastPlayerWidth && 0 < this._lastSourceWidth && 0 <= this._lastPlayerHeight && 0 < this._lastSourceHeight) {
                                var e = this.data.player_playhead_time - this._lastPlayheadPosition;
                                if (e < 0) return void (this._lastPlayheadPosition = -1);
                                var t = Math.min(this._lastPlayerWidth / this._lastSourceWidth, this._lastPlayerHeight / this._lastSourceHeight),
                                    i = Math.max(0, t - 1), r = Math.max(0, 1 - t);
                                this.data.view_max_upscale_percentage = Math.max(this.data.view_max_upscale_percentage || 0, i), this.data.view_max_downscale_percentage = Math.max(this.data.view_max_downscale_percentage || 0, r), (0, o.default)(this.data, "view_total_content_playback_time", e), (0, o.default)(this.data, "view_total_upscaling", i * e), (0, o.default)(this.data, "view_total_downscaling", r * e)
                            }
                            this._lastPlayheadPosition = -1
                        })
                    }), e.forEach(function (e) {
                        t.on(e, function () {
                            this._lastPlayheadPosition = this.data.player_playhead_time, this._lastPlayerWidth = this.data.player_width, this._lastPlayerHeight = this.data.player_height, this._lastSourceWidth = this.data.video_source_width, this._lastSourceHeight = this.data.video_source_height
                        })
                    })
                };
                var r, n = i(1), o = (r = n) && r.__esModule ? r : {default: r}
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
                    this.isSeeking = !1, this.on("seeking", function (e, t) {
                        (0, s.default)(this.data, t), this._lastSeekingTime = Date.now(), !1 === this.isSeeking && (this.isSeeking = !0, this.send("seeking"))
                    }), this.on("seeked", function () {
                        this.isSeeking = !1;
                        var e = this._lastSeekingTime || Date.now(), t = Date.now() - e;
                        (0, o.default)(this.data, "view_seek_count", 1), (0, o.default)(this.data, "view_seek_duration", t);
                        var i = this.data.view_max_seek_time || 0;
                        this.data.view_max_seek_time = Math.max(i, t)
                    }), this.on("viewend", function () {
                        this.isSeeking = !1
                    })
                };
                var n = i(1), o = r(n), a = i(0), s = r(a)
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var c = function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function (e, t) {
                            var i = [], r = !0, n = !1, o = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                            } catch (e) {
                                n = !0, o = e
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (n) throw o
                                }
                            }
                            return i
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }, n = i(1), o = r(n), d = i(4), a = i(0), s = r(a), u = function (e, t) {
                        e.push(t), e.sort(function (e, t) {
                            return e.viewer_time - t.viewer_time
                        })
                    },
                    l = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror"],
                    h = function () {
                        var t = this;
                        this.on("viewinit", function () {
                            this.isAdBreak = !1, this._currentAdRequestNumber = 0, this._currentAdResponseNumber = 0, this._adRequests = [], this._adResponses = [], this._adHasPlayed = !1, this._wouldBeNewAdPlay = !0, this._prerollPlayTime = void 0
                        }), l.forEach(function (e) {
                            return t.on(e, t._updateAdData)
                        });
                        var e = function () {
                            t.isAdBreak = !1
                        };
                        this.on("adbreakstart", function () {
                            this.isAdBreak = !0
                        }), this.on("play", e), this.on("playing", e), this.on("viewend", e), this.on("adrequest", function (e, t) {
                            t = (0, s.default)({ad_request_id: "generatedAdRequestId" + this._currentAdRequestNumber++}, t), u(this._adRequests, t), (0, o.default)(this.data, "view_ad_request_count"), this.inPrerollPosition() && (this.data.view_preroll_requested = !0, this._adHasPlayed || (0, o.default)(this.data, "view_preroll_request_count"))
                        }), this.on("adresponse", function (e, t) {
                            t = (0, s.default)({ad_request_id: "generatedAdRequestId" + this._currentAdResponseNumber++}, t), u(this._adResponses, t);
                            var i = this.findAdRequest(t.ad_request_id);
                            i && (0, o.default)(this.data, "view_ad_request_time", Math.max(0, t.viewer_time - i.viewer_time))
                        }), this.on("adplay", function (e, t) {
                            this._adHasPlayed = !0, this._wouldBeNewAdPlay && (this._wouldBeNewAdPlay = !1, (0, o.default)(this.data, "view_ad_played_count")), this.inPrerollPosition() && !this.data.view_preroll_played && (this.data.view_preroll_played = !0, 0 < this._adRequests.length && (this.data.view_preroll_request_time = Math.max(0, t.viewer_time - this._adRequests[0].viewer_time)), this.data.view_start && (this.data.view_startup_preroll_request_time = Math.max(0, t.viewer_time - this.data.view_start)), this._prerollPlayTime = t.viewer_time)
                        }), this.on("adplaying", function (e, t) {
                            this.inPrerollPosition() && void 0 === this.data.view_preroll_load_time && void 0 !== this._prerollPlayTime && (this.data.view_preroll_load_time = t.viewer_time - this._prerollPlayTime, this.data.view_startup_preroll_load_time = t.viewer_time - this._prerollPlayTime)
                        }), this.on("adended", function () {
                            this._wouldBeNewAdPlay = !0
                        }), this.on("aderror", function () {
                            this._wouldBeNewAdPlay = !0
                        })
                    };
                h.prototype.inPrerollPosition = function () {
                    return void 0 === this.data.view_content_playback_time || this.data.view_content_playback_time <= 1e3
                }, h.prototype.findAdRequest = function (e) {
                    for (var t = 0; t < this._adRequests.length; t++) if (this._adRequests[t].ad_request_id === e) return this._adRequests[t]
                }, h.prototype._updateAdData = function (e, t) {
                    if (this.inPrerollPosition()) {
                        if (!this.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
                            var i = (0, d.extractHostnameAndDomain)(t.ad_tag_url), r = c(i, 2), n = r[0], o = r[1];
                            this.data.view_preroll_ad_tag_domain = o, this.data.view_preroll_ad_tag_hostname = n
                        }
                        if (!this.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                            var a = (0, d.extractHostnameAndDomain)(t.ad_asset_url), s = c(a, 2), u = s[0], l = s[1];
                            this.data.view_preroll_ad_asset_domain = l, this.data.view_preroll_ad_asset_hostname = u
                        }
                    }
                }, t.default = h
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
                    var t = this, i = void 0, e = void 0, r = function () {
                        i && ((0, a.default)(t.data, "view_waiting_rebuffer_duration", Date.now() - i), i = !1, window.clearInterval(e))
                    }, n = !1, o = function () {
                        n = !1, r()
                    };
                    this.on("waiting", function () {
                        n && ((0, a.default)(t.data, "view_waiting_rebuffer_count", 1), i = Date.now(), e = window.setInterval(function () {
                            if (i) {
                                var e = Date.now();
                                (0, a.default)(t.data, "view_waiting_rebuffer_duration", e - i), i = e
                            }
                        }, 250))
                    }), this.on("playing", function () {
                        r(), n = !0
                    }), this.on("pause", o), this.on("seeking", o)
                };
                var r, n = i(1), a = (r = n) && r.__esModule ? r : {default: r}
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
                    var e = this;
                    this.one("playbackheartbeat", a), this.on("playbackheartbeatend", function () {
                        e.off("before*", s), e.one("playbackheartbeat", a)
                    })
                };
                var r, n = i(0), o = (r = n) && r.__esModule ? r : {default: r}, a = function () {
                    this.lastWallClockTime = Date.now(), this.on("before*", s)
                }, s = function (e) {
                    var t = Date.now(), i = this.lastWallClockTime;
                    3e4 < (this.lastWallClockTime = t) - i && (this.emit("devicesleep", {viewer_time: i}), (0, o.default)(this.data, {viewer_time: i}), this.send("devicesleep"), this.emit("devicewake", {viewer_time: t}), (0, o.default)(this.data, {viewer_time: t}), this.send("devicewake"))
                }
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, s = i(39), n = i(3), u = r(n), o = i(43), a = r(o), l = i(10), d = r(l), h = i(15), f = r(h),
                    p = i(44), m = r(p), v = i(46), y = r(v), _ = i(0), g = r(_),
                    b = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id"],
                    T = ["viewstart", "error", "ended", "viewend"], S = function (e, t) {
                        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        this.mux = e, this.envKey = t, this.eventQueue = new m.default((0, a.default)(t, i.beaconDomain)), this.previousBeaconData = null, this.lastEventTime = null, this.sampleRate = i.sampleRate, this.disableCookies = i.disableCookies, this.respectDoNotTrack = i.respectDoNotTrack, this.pageLevelData = {
                            mux_api_version: this.mux.API_VERSION,
                            mux_embed_version: this.mux.VERSION,
                            page_url: window.location.href,
                            viewer_application_name: y.default.name,
                            viewer_application_version: y.default.version,
                            viewer_application_engine: y.default.layout,
                            viewer_device_name: y.default.product,
                            viewer_device_category: "",
                            viewer_device_manufacturer: y.default.manufacturer,
                            viewer_os_family: y.default.os && y.default.os.family,
                            viewer_os_architecture: y.default.os && y.default.os.architecture,
                            viewer_os_version: y.default.os && y.default.os.version
                        }, this.viewerData = this.disableCookies ? {} : (0, s.getAndUpdateViewerData)()
                    };
                S.prototype.send = function (e, t) {
                    if (e) {
                        if (this.respectDoNotTrack && (0, d.default)()) return u.default.info("Not sending `" + e + "` because Do Not Track is enabled in your browser");
                        if (!t || "object" !== (void 0 === t ? "undefined" : c(t))) return u.default.error("A data object was expected in send() but was not provided");
                        var i = this.disableCookies ? {} : (0, s.getAndUpdateSessionData)(), r = {};
                        (0, g.default)(r, this.pageLevelData), (0, g.default)(r, t), (0, g.default)(r, i), (0, g.default)(r, this.viewerData), r.event = e, r.env_key = this.envKey, r.user_id && (r.viewer_user_id = r.user_id, delete r.user_id);
                        var n = r.mux_sample_number >= this.sampleRate, o = this._deduplicateBeaconData(e, r),
                            a = (0, f.default)(o);
                        if (this.lastEventTime = Date.now(), n) return u.default.info("Not sending event due to sample rate restriction", e, r, a);
                        if (!this.envKey) return u.default.info("Not sending event due to missing environment key", e, r, a);
                        if (!this.rateLimited) if (u.default.info("Sending event", e, r, a), this.rateLimited = !this.eventQueue.queueEvent(e, a), this.mux.WINDOW_UNLOADING && "viewend" === e) this.eventQueue.destroy(!0); else if (0 <= T.indexOf(e) && this.eventQueue.flushEvents(), this.rateLimited) return r.event = "eventrateexceeded", a = (0, f.default)(r), this.eventQueue.queueEvent(r.event, a), u.default.error("Beaconing disabled due to rate limit.")
                    }
                }, S.prototype.destroy = function () {
                    this.eventQueue.destroy(!1)
                }, S.prototype._deduplicateBeaconData = function (e, a) {
                    var s = this, u = {}, t = a.view_id;
                    if (!t || "viewstart" === e || "viewend" === e || !this.previousBeaconData || 6e5 <= Date.now() - this.lastEventTime) u = (0, g.default)({}, a), t && (this.previousBeaconData = u), t && "viewend" === e && (this.previousBeaconData = null); else {
                        var l = 0 === e.indexOf("request");
                        Object.keys(a).forEach(function (e) {
                            var t, i, r, n, o = a[e];
                            (o !== s.previousBeaconData[e] || -1 < b.indexOf(e) || (t = l, i = e, r = o, n = s.previousBeaconData[e], t && 0 === i.indexOf("request_") && ("request_response_headers" === i || "object" !== (void 0 === r ? "undefined" : c(r)) || "object" !== (void 0 === n ? "undefined" : c(n)) || Object.keys(r || {}).length !== Object.keys(n || {}).length))) && (u[e] = o, s.previousBeaconData[e] = o)
                        })
                    }
                    return u
                }, t.default = S
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0}), t.getAndUpdateSessionData = t.getAndUpdateViewerData = void 0;
                var n = i(12), o = r(n), a = i(42), s = r(a), u = i(6), l = function () {
                    var t = void 0;
                    try {
                        t = o.default.parse(s.default.get("muxData") || "")
                    } catch (e) {
                        t = {}
                    }
                    return t
                }, c = function (e) {
                    s.default.set("muxData", o.default.stringify(e), {expires: 7300})
                };
                t.getAndUpdateViewerData = function () {
                    var e = l();
                    return e.mux_viewer_id = e.mux_viewer_id || (0, u.generateUUID)(), e.msn = e.msn || Math.random(), c(e), {
                        mux_viewer_id: e.mux_viewer_id,
                        mux_sample_number: e.msn
                    }
                }, t.getAndUpdateSessionData = function () {
                    var e = l(), t = Date.now();
                    return e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < t) && (e.sid = (0, u.generateUUID)(), e.sst = t), e.sex = t + 15e5, c(e), {
                        session_id: e.sid,
                        session_start: e.sst,
                        session_expires: e.sex
                    }
                }
            }, function (e, t, i) {
                "use strict";
                var w = i(13), k = i(14), E = {
                    brackets: function (e) {
                        return e + "[]"
                    }, indices: function (e, t) {
                        return e + "[" + t + "]"
                    }, repeat: function (e) {
                        return e
                    }
                }, r = Date.prototype.toISOString, C = {
                    delimiter: "&",
                    encode: !0,
                    encoder: w.encode,
                    encodeValuesOnly: !1,
                    serializeDate: function (e) {
                        return r.call(e)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                }, x = function e(t, i, r, n, o, a, s, u, l, c, d, h) {
                    var f = t;
                    if ("function" == typeof s) f = s(i, f); else if (f instanceof Date) f = c(f); else if (null === f) {
                        if (n) return a && !h ? a(i, C.encoder) : i;
                        f = ""
                    }
                    if ("string" == typeof f || "number" == typeof f || "boolean" == typeof f || w.isBuffer(f)) return a ? [d(h ? i : a(i, C.encoder)) + "=" + d(a(f, C.encoder))] : [d(i) + "=" + d(String(f))];
                    var p, m = [];
                    if (void 0 === f) return m;
                    if (Array.isArray(s)) p = s; else {
                        var v = Object.keys(f);
                        p = u ? v.sort(u) : v
                    }
                    for (var y = 0; y < p.length; ++y) {
                        var _ = p[y];
                        o && null === f[_] || (m = Array.isArray(f) ? m.concat(e(f[_], r(i, _), r, n, o, a, s, u, l, c, d, h)) : m.concat(e(f[_], i + (l ? "." + _ : "[" + _ + "]"), r, n, o, a, s, u, l, c, d, h)))
                    }
                    return m
                };
                e.exports = function (e, t) {
                    var i = e, r = t ? w.assign({}, t) : {};
                    if (null !== r.encoder && void 0 !== r.encoder && "function" != typeof r.encoder) throw new TypeError("Encoder has to be a function.");
                    var n = void 0 === r.delimiter ? C.delimiter : r.delimiter,
                        o = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : C.strictNullHandling,
                        a = "boolean" == typeof r.skipNulls ? r.skipNulls : C.skipNulls,
                        s = "boolean" == typeof r.encode ? r.encode : C.encode,
                        u = "function" == typeof r.encoder ? r.encoder : C.encoder,
                        l = "function" == typeof r.sort ? r.sort : null, c = void 0 !== r.allowDots && r.allowDots,
                        d = "function" == typeof r.serializeDate ? r.serializeDate : C.serializeDate,
                        h = "boolean" == typeof r.encodeValuesOnly ? r.encodeValuesOnly : C.encodeValuesOnly;
                    if (void 0 === r.format) r.format = k.default; else if (!Object.prototype.hasOwnProperty.call(k.formatters, r.format)) throw new TypeError("Unknown format option provided.");
                    var f, p, m = k.formatters[r.format];
                    "function" == typeof r.filter ? (p = r.filter, i = p("", i)) : Array.isArray(r.filter) && (p = r.filter, f = p);
                    var v, y = [];
                    if ("object" != typeof i || null === i) return "";
                    v = r.arrayFormat in E ? r.arrayFormat : "indices" in r ? r.indices ? "indices" : "repeat" : "indices";
                    var _ = E[v];
                    f || (f = Object.keys(i)), l && f.sort(l);
                    for (var g = 0; g < f.length; ++g) {
                        var b = f[g];
                        a && null === i[b] || (y = y.concat(x(i[b], b, _, o, a, s ? u : null, p, l, c, d, m, h)))
                    }
                    var T = y.join(n), S = !0 === r.addQueryPrefix ? "?" : "";
                    return 0 < T.length ? S + T : ""
                }
            }, function (e, t, i) {
                "use strict";
                var l = i(13), h = Object.prototype.hasOwnProperty, f = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    arrayLimit: 20,
                    decoder: l.decode,
                    delimiter: "&",
                    depth: 5,
                    parameterLimit: 1e3,
                    plainObjects: !1,
                    strictNullHandling: !1
                }, c = function (e, t, i) {
                    if (e) {
                        var r = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, n = /(\[[^[\]]*])/g,
                            o = /(\[[^[\]]*])/.exec(r), a = o ? r.slice(0, o.index) : r, s = [];
                        if (a) {
                            if (!i.plainObjects && h.call(Object.prototype, a) && !i.allowPrototypes) return;
                            s.push(a)
                        }
                        for (var u = 0; null !== (o = n.exec(r)) && u < i.depth;) {
                            if (u += 1, !i.plainObjects && h.call(Object.prototype, o[1].slice(1, -1)) && !i.allowPrototypes) return;
                            s.push(o[1])
                        }
                        return o && s.push("[" + r.slice(o.index) + "]"), function (e, t, i) {
                            for (var r = t, n = e.length - 1; 0 <= n; --n) {
                                var o, a = e[n];
                                if ("[]" === a) o = (o = []).concat(r); else {
                                    o = i.plainObjects ? Object.create(null) : {};
                                    var s = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                        u = parseInt(s, 10);
                                    !isNaN(u) && a !== s && String(u) === s && 0 <= u && i.parseArrays && u <= i.arrayLimit ? (o = [])[u] = r : o[s] = r
                                }
                                r = o
                            }
                            return r
                        }(s, t, i)
                    }
                };
                e.exports = function (e, t) {
                    var i = t ? l.assign({}, t) : {};
                    if (null !== i.decoder && void 0 !== i.decoder && "function" != typeof i.decoder) throw new TypeError("Decoder has to be a function.");
                    if (i.ignoreQueryPrefix = !0 === i.ignoreQueryPrefix, i.delimiter = "string" == typeof i.delimiter || l.isRegExp(i.delimiter) ? i.delimiter : f.delimiter, i.depth = "number" == typeof i.depth ? i.depth : f.depth, i.arrayLimit = "number" == typeof i.arrayLimit ? i.arrayLimit : f.arrayLimit, i.parseArrays = !1 !== i.parseArrays, i.decoder = "function" == typeof i.decoder ? i.decoder : f.decoder, i.allowDots = "boolean" == typeof i.allowDots ? i.allowDots : f.allowDots, i.plainObjects = "boolean" == typeof i.plainObjects ? i.plainObjects : f.plainObjects, i.allowPrototypes = "boolean" == typeof i.allowPrototypes ? i.allowPrototypes : f.allowPrototypes, i.parameterLimit = "number" == typeof i.parameterLimit ? i.parameterLimit : f.parameterLimit, i.strictNullHandling = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : f.strictNullHandling, "" === e || null == e) return i.plainObjects ? Object.create(null) : {};
                    for (var r = "string" == typeof e ? function (e, t) {
                        for (var i = {}, r = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, n = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, o = r.split(t.delimiter, n), a = 0; a < o.length; ++a) {
                            var s, u, l = o[a], c = l.indexOf("]="), d = -1 === c ? l.indexOf("=") : c + 1;
                            u = -1 === d ? (s = t.decoder(l, f.decoder), t.strictNullHandling ? null : "") : (s = t.decoder(l.slice(0, d), f.decoder), t.decoder(l.slice(d + 1), f.decoder)), h.call(i, s) ? i[s] = [].concat(i[s]).concat(u) : i[s] = u
                        }
                        return i
                    }(e, i) : e, n = i.plainObjects ? Object.create(null) : {}, o = Object.keys(r), a = 0; a < o.length; ++a) {
                        var s = o[a], u = c(s, r[s], i);
                        n = l.merge(n, u, i)
                    }
                    return l.compact(n)
                }
            }, function (n, o, a) {
                "use strict";
                var s, u, l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                !function (e) {
                    var t = !1;
                    if (void 0 !== (u = "function" == typeof (s = e) ? s.call(o, a, o, n) : s) && (n.exports = u), t = !0, "object" === l(o) && (n.exports = e(), t = !0), !t) {
                        var i = window.Cookies, r = window.Cookies = e();
                        r.noConflict = function () {
                            return window.Cookies = i, r
                        }
                    }
                }(function () {
                    var f = function () {
                        for (var e = 0, t = {}; e < arguments.length; e++) {
                            var i = arguments[e];
                            for (var r in i) t[r] = i[r]
                        }
                        return t
                    };
                    return function e(d) {
                        function h(e, t, i) {
                            var r;
                            if ("undefined" != typeof document) {
                                if (1 < arguments.length) {
                                    if ("number" == typeof (i = f({path: "/"}, h.defaults, i)).expires) {
                                        var n = new Date;
                                        n.setMilliseconds(n.getMilliseconds() + 864e5 * i.expires), i.expires = n
                                    }
                                    try {
                                        r = JSON.stringify(t), /^[\{\[]/.test(r) && (t = r)
                                    } catch (e) {
                                    }
                                    return t = d.write ? d.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [e, "=", t, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                                }
                                e || (r = {});
                                for (var o = document.cookie ? document.cookie.split("; ") : [], a = /(%[0-9A-Z]{2})+/g, s = 0; s < o.length; s++) {
                                    var u = o[s].split("="), l = u.slice(1).join("=");
                                    '"' === l.charAt(0) && (l = l.slice(1, -1));
                                    try {
                                        var c = u[0].replace(a, decodeURIComponent);
                                        if (l = d.read ? d.read(l, c) : d(l, c) || l.replace(a, decodeURIComponent), this.json) try {
                                            l = JSON.parse(l)
                                        } catch (e) {
                                        }
                                        if (e === c) {
                                            r = l;
                                            break
                                        }
                                        e || (r[c] = l)
                                    } catch (e) {
                                    }
                                }
                                return r
                            }
                        }

                        return (h.set = h).get = function (e) {
                            return h.call(h, e)
                        }, h.getJSON = function () {
                            return h.apply({json: !0}, [].slice.call(arguments))
                        }, h.defaults = {}, h.remove = function (e, t) {
                            h(e, "", f(t, {expires: -1}))
                        }, h.withConverter = e, h
                    }(function () {
                    })
                })
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
                    return t = t || "litix.io", (e = e || "").match(/^[a-z0-9]+$/) ? "https://" + e + "." + t : "https://img.litix.io/a.gif"
                }
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(2), o = r(n), a = i(3), s = r(a), u = i(45), l = r(u), c = i(0), d = r(c), h = i(15),
                    f = r(h), p = !!o.default.XMLHttpRequest && "withCredentials" in new o.default.XMLHttpRequest,
                    m = {maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 5e3}, v = function (e, t) {
                        this._beaconUrl = e || "https://img.litix.io", this._eventQueue = [], this._postInFlight = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = (0, d.default)({}, m, t)
                    };
                v.prototype.queueEvent = function (e, t) {
                    var i = (0, d.default)({}, t);
                    return p ? (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) && (this._eventQueue.push(i), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : (l.default.send(this._beaconUrl, i), !0)
                }, v.prototype.flushEvents = function () {
                    p && (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending())
                }, v.prototype.destroy = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    this.destroyed = !0, e ? this._clearBeaconQueue() : this.flushEvents(), o.default.clearTimeout(this._sendTimeout)
                }, v.prototype._clearBeaconQueue = function () {
                    var e = o.default.navigator,
                        t = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0,
                        i = this._eventQueue.slice(t);
                    if (0 < t && (0, d.default)(i[i.length - 1], (0, f.default)({mux_view_message: "event queue truncated"})), e.sendBeacon) e.sendBeacon(this._beaconUrl, JSON.stringify({events: i})); else if (o.default.XMLHttpRequest) {
                        var r = new o.default.XMLHttpRequest;
                        r.open("POST", this._beaconUrl), r.setRequestHeader("Content-Type", "application/json"), r.send(JSON.stringify({events: i}))
                    } else l.default.send(this._beaconUrl, i[i.length - 1])
                }, v.prototype._sendBeaconQueue = function () {
                    var e = this;
                    if (o.default.XMLHttpRequest && !this._postInFlight) {
                        var t = new o.default.XMLHttpRequest,
                            i = this._eventQueue.slice(0, this._options.maxBeaconSize);
                        this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0, t.onreadystatechange = function () {
                            4 === t.readyState && (200 !== t.status ? (e._eventQueue = i.concat(e._eventQueue), e._failureCount += 1, s.default.info("Error sending beacon: " + t.status), s.default.info(t.responseText)) : e._failureCount = 0, e._postInFlight = !1)
                        }, t.open("POST", this._beaconUrl), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify({events: i}))
                    }
                }, v.prototype._getNextBeaconTime = function () {
                    if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
                    var e = Math.pow(2, this._failureCount - 1);
                    return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons
                }, v.prototype._startBeaconSending = function () {
                    var e = this;
                    o.default.clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = o.default.setTimeout(function () {
                        e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending()
                    }, this._getNextBeaconTime()))
                }, t.default = v
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(12), a = r(n), o = i(2), s = r(o), u = {
                    send: function (e, t) {
                        function i() {
                            r.src = o + (n ? "&rc=" + n : "")
                        }

                        var r = new Image, n = 0, o = e + "?" + a.default.stringify(t);
                        return r.addEventListener("error", function () {
                            3 < n || s.default.setTimeout(function () {
                                n++, i()
                            }, 5e3 * n)
                        }), i(), r
                    }
                };
                t.default = u
            }, function (e, h, f) {
                (function (l, c) {
                    var d;
                    (function () {
                        "use strict";

                        function t(e) {
                            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
                        }

                        function D(e) {
                            return e = H(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : t(e)
                        }

                        function R(e, t) {
                            for (var i in e) s.call(e, i) && t(e[i], i, e)
                        }

                        function N(e) {
                            return null == e ? t(e) : z.call(e).slice(8, -1)
                        }

                        function B(e, t) {
                            var i = null != e ? typeof e[t] : "number";
                            return !(/^(?:boolean|number|string|undefined)$/.test(i) || "object" == i && !e[t])
                        }

                        function F(e) {
                            return String(e).replace(/([ -])(?!$)/g, "$1?")
                        }

                        function U(i, r) {
                            var n = null;
                            return function (e, t) {
                                var i = -1, r = e ? e.length : 0;
                                if ("number" == typeof r && -1 < r && r <= o) for (; ++i < r;) t(e[i], i, e); else R(e, t)
                            }(i, function (e, t) {
                                n = r(n, e, t, i)
                            }), n
                        }

                        function H(e) {
                            return String(e).replace(/^ +| +$/g, "")
                        }

                        var e = {function: !0, object: !0}, q = e[typeof window] && window || this, V = q,
                            i = e[typeof h] && h, r = e[typeof l] && l && !l.nodeType && l,
                            n = i && r && "object" == typeof c && c;
                        !n || n.global !== n && n.window !== n && n.self !== n || (q = n);
                        var o = Math.pow(2, 53) - 1, W = /\bOpera/, G = this, a = Object.prototype,
                            s = a.hasOwnProperty, z = a.toString, u = function e(s) {
                                function t(e) {
                                    return U(e, function (e, t) {
                                        var i = t.pattern || F(t);
                                        return !e && (e = RegExp("\\b" + i + " *\\d+[.\\w_]*", "i").exec(s) || RegExp("\\b" + i + " *\\w+-[\\w]*", "i").exec(s) || RegExp("\\b" + i + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(s)) && ((e = String(t.label && !RegExp(i, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), t = t.label || t, e = D(e[0].replace(RegExp(i, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
                                    })
                                }

                                function i() {
                                    return this.description || ""
                                }

                                var r = q, n = s && "object" == typeof s && "String" != N(s);
                                n && (r = s, s = null);
                                var o = r.navigator || {}, a = o.userAgent || "";
                                s || (s = a);
                                var u, l, c, d = n || G == V,
                                    h = n ? !!o.likeChrome : /\bChrome\b/.test(s) && !/internal|\n/i.test(z.toString()),
                                    f = n ? "Object" : "ScriptBridgingProxyObject", p = n ? "Object" : "Environment",
                                    m = n && r.java ? "JavaPackage" : N(r.java), v = n ? "Object" : "RuntimeObject",
                                    y = /\bJava/.test(m) && r.java, _ = y && N(r.environment) == p, g = y ? "a" : "α",
                                    b = y ? "b" : "β", T = r.document || {}, S = r.operamini || r.opera,
                                    w = W.test(w = n && S ? S["[[Class]]"] : N(S)) ? w : S = null, k = s, E = [], C = null,
                                    x = s == a, j = x && S && "function" == typeof S.version && S.version(),
                                    O = U([{label: "EdgeHTML", pattern: "Edge"}, "Trident", {
                                        label: "WebKit",
                                        pattern: "AppleWebKit"
                                    }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function (e, t) {
                                        return e || RegExp("\\b" + (t.pattern || F(t)) + "\\b", "i").exec(s) && (t.label || t)
                                    }),
                                    P = U(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                                        label: "Microsoft Edge",
                                        pattern: "Edge"
                                    }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                                        label: "Samsung Internet",
                                        pattern: "SamsungBrowser"
                                    }, "SeaMonkey", {
                                        label: "Silk",
                                        pattern: "(?:Cloud9|Silk-Accelerated)"
                                    }, "Sleipnir", "SlimBrowser", {
                                        label: "SRWare Iron",
                                        pattern: "Iron"
                                    }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                                        label: "Opera Mini",
                                        pattern: "OPiOS"
                                    }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
                                        label: "Chrome Mobile",
                                        pattern: "(?:CriOS|CrMo)"
                                    }, {label: "Firefox", pattern: "(?:Firefox|Minefield)"}, {
                                        label: "Firefox for iOS",
                                        pattern: "FxiOS"
                                    }, {label: "IE", pattern: "IEMobile"}, {
                                        label: "IE",
                                        pattern: "MSIE"
                                    }, "Safari"], function (e, t) {
                                        return e || RegExp("\\b" + (t.pattern || F(t)) + "\\b", "i").exec(s) && (t.label || t)
                                    }), A = t([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
                                        label: "Galaxy S",
                                        pattern: "GT-I9000"
                                    }, {label: "Galaxy S2", pattern: "GT-I9100"}, {
                                        label: "Galaxy S3",
                                        pattern: "GT-I9300"
                                    }, {label: "Galaxy S4", pattern: "GT-I9500"}, {
                                        label: "Galaxy S5",
                                        pattern: "SM-G900"
                                    }, {label: "Galaxy S6", pattern: "SM-G920"}, {
                                        label: "Galaxy S6 Edge",
                                        pattern: "SM-G925"
                                    }, {label: "Galaxy S7", pattern: "SM-G930"}, {
                                        label: "Galaxy S7 Edge",
                                        pattern: "SM-G935"
                                    }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                                        label: "Kindle Fire",
                                        pattern: "(?:Cloud9|Silk-Accelerated)"
                                    }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                                        label: "Wii U",
                                        pattern: "WiiU"
                                    }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]), L = U({
                                        Apple: {iPad: 1, iPhone: 1, iPod: 1},
                                        Archos: {},
                                        Amazon: {Kindle: 1, "Kindle Fire": 1},
                                        Asus: {Transformer: 1},
                                        "Barnes & Noble": {Nook: 1},
                                        BlackBerry: {PlayBook: 1},
                                        Google: {"Google TV": 1, Nexus: 1},
                                        HP: {TouchPad: 1},
                                        HTC: {},
                                        LG: {},
                                        Microsoft: {Xbox: 1, "Xbox One": 1},
                                        Motorola: {Xoom: 1},
                                        Nintendo: {"Wii U": 1, Wii: 1},
                                        Nokia: {Lumia: 1},
                                        Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
                                        Sony: {PlayStation: 1, "PlayStation Vita": 1}
                                    }, function (e, t, i) {
                                        return e || (t[A] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(A)] || RegExp("\\b" + F(i) + "(?:\\b|\\w*\\d)", "i").exec(s)) && i
                                    }), M = U(["Windows Phone", "Android", "CentOS", {
                                        label: "Chrome OS",
                                        pattern: "CrOS"
                                    }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "], function (e, t) {
                                        var i, r, n, o, a = t.pattern || F(t);
                                        return !e && (e = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(s)) && (i = e, r = a, n = t.label || t, o = {
                                            "10.0": "10",
                                            6.4: "10 Technical Preview",
                                            6.3: "8.1",
                                            6.2: "8",
                                            6.1: "Server 2008 R2 / 7",
                                            "6.0": "Server 2008 / Vista",
                                            5.2: "Server 2003 / XP 64-bit",
                                            5.1: "XP",
                                            5.01: "2000 SP1",
                                            "5.0": "2000",
                                            "4.0": "NT",
                                            "4.90": "ME"
                                        }, r && n && /^Win/i.test(i) && !/^Windows Phone /i.test(i) && (o = o[/[\d.]+$/.exec(i)]) && (i = "Windows " + o), i = String(i), r && n && (i = i.replace(RegExp(r, "i"), n)), e = i = D(i.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])), e
                                    });
                                if (O && (O = [O]), L && !A && (A = t([L])), (u = /\bGoogle TV\b/.exec(A)) && (A = u[0]), /\bSimulator\b/i.test(s) && (A = (A ? A + " " : "") + "Simulator"), "Opera Mini" == P && /\bOPiOS\b/.test(s) && E.push("running in Turbo/Uncompressed mode"), "IE" == P && /\blike iPhone OS\b/.test(s) ? (u = e(s.replace(/like iPhone OS/, "")), L = u.manufacturer, A = u.product) : /^iP/.test(A) ? (P || (P = "Safari"), M = "iOS" + ((u = / OS ([\d_]+)/i.exec(s)) ? " " + u[1].replace(/_/g, ".") : "")) : "Konqueror" != P || /buntu/i.test(M) ? L && "Google" != L && (/Chrome/.test(P) && !/\bMobile Safari\b/i.test(s) || /\bVita\b/.test(A)) || /\bAndroid\b/.test(M) && /^Chrome/.test(P) && /\bVersion\//i.test(s) ? (P = "Android Browser", M = /\bAndroid\b/.test(M) ? M : "Android") : "Silk" == P ? (/\bMobi/i.test(s) || (M = "Android", E.unshift("desktop mode")), /Accelerated *= *true/i.test(s) && E.unshift("accelerated")) : "PaleMoon" == P && (u = /\bFirefox\/([\d.]+)\b/.exec(s)) ? E.push("identifying as Firefox " + u[1]) : "Firefox" == P && (u = /\b(Mobile|Tablet|TV)\b/i.exec(s)) ? (M || (M = "Firefox OS"), A || (A = u[1])) : !P || (u = !/\bMinefield\b/i.test(s) && /\b(?:Firefox|Safari)\b/.exec(P)) ? (P && !A && /[\/,]|^[^(]+?\)/.test(s.slice(s.indexOf(u + "/") + 8)) && (P = null), (u = A || L || M) && (A || L || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(M)) && (P = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(M) ? M : u) + " Browser")) : "Electron" == P && (u = (/\bChrome\/([\d.]+)\b/.exec(s) || 0)[1]) && E.push("Chromium " + u) : M = "Kubuntu", j || (c = ["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", F(P), "(?:Firefox|Minefield|NetFront)"], j = U(c, function (e, t) {
                                    return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(s) || 0)[1] || null
                                })), (u = ("iCab" == O && 3 < parseFloat(j) ? "WebKit" : /\bOpera\b/.test(P) && (/\bOPR\b/.test(s) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(s) && !/^(?:Trident|EdgeHTML)$/.test(O) && "WebKit" || !O && /\bMSIE\b/i.test(s) && ("Mac OS" == M ? "Tasman" : "Trident") || "WebKit" == O && /\bPlayStation\b(?! Vita\b)/i.test(P) && "NetFront") && (O = [u]), "IE" == P && (u = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(s) || 0)[1]) ? (P += " Mobile", M = "Windows Phone " + (/\+$/.test(u) ? u : u + ".x"), E.unshift("desktop mode")) : /\bWPDesktop\b/i.test(s) ? (P = "IE Mobile", M = "Windows Phone 8.x", E.unshift("desktop mode"), j || (j = (/\brv:([\d.]+)/.exec(s) || 0)[1])) : "IE" != P && "Trident" == O && (u = /\brv:([\d.]+)/.exec(s)) && (P && E.push("identifying as " + P + (j ? " " + j : "")), P = "IE", j = u[1]), x) {
                                    if (B(r, "global")) if (y && (u = y.lang.System, k = u.getProperty("os.arch"), M = M || u.getProperty("os.name") + " " + u.getProperty("os.version")), d && B(r, "system") && (u = [r.system])[0]) {
                                        M || (M = u[0].os || null);
                                        try {
                                            u[1] = r.require("ringo/engine").version, j = u[1].join("."), P = "RingoJS"
                                        } catch (s) {
                                            u[0].global.system == r.system && (P = "Narwhal")
                                        }
                                    } else "object" == typeof r.process && !r.process.browser && (u = r.process) ? "object" == typeof u.versions ? "string" == typeof u.versions.electron ? (E.push("Node " + u.versions.node), P = "Electron", j = u.versions.electron) : "string" == typeof u.versions.nw && (E.push("Chromium " + j, "Node " + u.versions.node), P = "NW.js", j = u.versions.nw) : (P = "Node.js", k = u.arch, M = u.platform, j = (j = /[\d.]+/.exec(u.version)) ? j[0] : "unknown") : _ && (P = "Rhino"); else N(u = r.runtime) == f ? (P = "Adobe AIR", M = u.flash.system.Capabilities.os) : N(u = r.phantom) == v ? (P = "PhantomJS", j = (u = u.version || null) && u.major + "." + u.minor + "." + u.patch) : "number" == typeof T.documentMode && (u = /\bTrident\/(\d+)/i.exec(s)) ? (j = [j, T.documentMode], (u = +u[1] + 4) != j[1] && (E.push("IE " + j[1] + " mode"), O && (O[1] = ""), j[1] = u), j = "IE" == P ? String(j[1].toFixed(1)) : j[0]) : "number" == typeof T.documentMode && /^(?:Chrome|Firefox)\b/.test(P) && (E.push("masking as " + P + " " + j), P = "IE", j = "11.0", O = ["Trident"], M = "Windows");
                                    M = M && D(M)
                                }
                                if (j && (u = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(j) || /(?:alpha|beta)(?: ?\d)?/i.exec(s + ";" + (x && o.appMinorVersion)) || /\bMinefield\b/i.test(s) && "a") && (C = /b/i.test(u) ? "beta" : "alpha", j = j.replace(RegExp(u + "\\+?$"), "") + ("beta" == C ? b : g) + (/\d+\+?/.exec(u) || "")), "Fennec" == P || "Firefox" == P && /\b(?:Android|Firefox OS)\b/.test(M)) P = "Firefox Mobile"; else if ("Maxthon" == P && j) j = j.replace(/\.[\d.]+/, ".x"); else if (/\bXbox\b/i.test(A)) "Xbox 360" == A && (M = null), "Xbox 360" == A && /\bIEMobile\b/.test(s) && E.unshift("mobile mode"); else if (!/^(?:Chrome|IE|Opera)$/.test(P) && (!P || A || /Browser|Mobi/.test(P)) || "Windows CE" != M && !/Mobi/i.test(s)) if ("IE" == P && x) try {
                                    null === r.external && E.unshift("platform preview")
                                } catch (s) {
                                    E.unshift("embedded")
                                } else (/\bBlackBerry\b/.test(A) || /\bBB10\b/.test(s)) && (u = (RegExp(A.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(s) || 0)[1] || j) ? (u = [u, /BB10/.test(s)], M = (u[1] ? (A = null, L = "BlackBerry") : "Device Software") + " " + u[0], j = null) : this != R && "Wii" != A && (x && S || /Opera/.test(P) && /\b(?:MSIE|Firefox)\b/i.test(s) || "Firefox" == P && /\bOS X (?:\d+\.){2,}/.test(M) || "IE" == P && (M && !/^Win/.test(M) && 5.5 < j || /\bWindows XP\b/.test(M) && 8 < j || 8 == j && !/\bTrident\b/.test(s))) && !W.test(u = e.call(R, s.replace(W, "") + ";")) && u.name && (u = "ing as " + u.name + ((u = u.version) ? " " + u : ""), W.test(P) ? (/\bIE\b/.test(u) && "Mac OS" == M && (M = null), u = "identify" + u) : (u = "mask" + u, P = w ? D(w.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(u) && (M = null), x || (j = null)), O = ["Presto"], E.push(u)); else P += " Mobile";
                                (u = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(s) || 0)[1]) && (u = [parseFloat(u.replace(/\.(\d)$/, ".0$1")), u], "Safari" == P && "+" == u[1].slice(-1) ? (P = "WebKit Nightly", C = "alpha", j = u[1].slice(0, -1)) : j != u[1] && j != (u[2] = (/\bSafari\/([\d.]+\+?)/i.exec(s) || 0)[1]) || (j = null), u[1] = (/\bChrome\/([\d.]+)/i.exec(s) || 0)[1], 537.36 == u[0] && 537.36 == u[2] && 28 <= parseFloat(u[1]) && "WebKit" == O && (O = ["Blink"]), u = x && (h || u[1]) ? (O && (O[1] = "like Chrome"), u[1] || ((u = u[0]) < 530 ? 1 : u < 532 ? 2 : u < 532.05 ? 3 : u < 533 ? 4 : u < 534.03 ? 5 : u < 534.07 ? 6 : u < 534.1 ? 7 : u < 534.13 ? 8 : u < 534.16 ? 9 : u < 534.24 ? 10 : u < 534.3 ? 11 : u < 535.01 ? 12 : u < 535.02 ? "13+" : u < 535.07 ? 15 : u < 535.11 ? 16 : u < 535.19 ? 17 : u < 536.05 ? 18 : u < 536.1 ? 19 : u < 537.01 ? 20 : u < 537.11 ? "21+" : u < 537.13 ? 23 : u < 537.18 ? 24 : u < 537.24 ? 25 : u < 537.36 ? 26 : "Blink" != O ? "27" : "28")) : (O && (O[1] = "like Safari"), (u = u[0]) < 400 ? 1 : u < 500 ? 2 : u < 526 ? 3 : u < 533 ? 4 : u < 534 ? "4+" : u < 535 ? 5 : u < 537 ? 6 : u < 538 ? 7 : u < 601 ? 8 : "8"), O && (O[1] += " " + (u += "number" == typeof u ? ".x" : /[.+]/.test(u) ? "" : "+")), "Safari" == P && (!j || 45 < parseInt(j)) && (j = u)), "Opera" == P && (u = /\bzbov|zvav$/.exec(M)) ? (P += " ", E.unshift("desktop mode"), "zvav" == u ? (P += "Mini", j = null) : P += "Mobile", M = M.replace(RegExp(" *" + u + "$"), "")) : "Safari" == P && /\bChrome\b/.exec(O && O[1]) && (E.unshift("desktop mode"), P = "Chrome Mobile", j = null, M = /\bOS X\b/.test(M) ? (L = "Apple", "iOS 4.3+") : null), j && 0 == j.indexOf(u = /[\d.]+$/.exec(M)) && -1 < s.indexOf("/" + u + "-") && (M = H(M.replace(u, ""))), O && !/\b(?:Avant|Nook)\b/.test(P) && (/Browser|Lunascape|Maxthon/.test(P) || "Safari" != P && /^iOS/.test(M) && /\bSafari\b/.test(O[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(P) && O[1]) && (u = O[O.length - 1]) && E.push(u), E.length && (E = ["(" + E.join("; ") + ")"]), L && A && A.indexOf(L) < 0 && E.push("on " + L), A && E.push((/^on /.test(E[E.length - 1]) ? "" : "on ") + A), M && (u = / ([\d.+]+)$/.exec(M), l = u && "/" == M.charAt(M.length - u[0].length - 1), M = {
                                    architecture: 32,
                                    family: u && !l ? M.replace(u[0], "") : M,
                                    version: u ? u[1] : null,
                                    toString: function () {
                                        var e = this.version;
                                        return this.family + (e && !l ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                                    }
                                }), (u = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(k)) && !/\bi686\b/i.test(k) ? (M && (M.architecture = 64, M.family = M.family.replace(RegExp(" *" + u), "")), P && (/\bWOW64\b/i.test(s) || x && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(s)) && E.unshift("32-bit")) : M && /^OS X/.test(M.family) && "Chrome" == P && 39 <= parseFloat(j) && (M.architecture = 64), s || (s = null);
                                var I = {};
                                return I.description = s, I.layout = O && O[0], I.manufacturer = L, I.name = P, I.prerelease = C, I.product = A, I.ua = s, I.version = P && j, I.os = M || {
                                    architecture: null,
                                    family: null,
                                    version: null,
                                    toString: function () {
                                        return "null"
                                    }
                                }, I.parse = e, I.toString = i, I.version && E.unshift(j), I.name && E.unshift(P), M && P && (M != String(M).split(" ")[0] || M != P.split(" ")[0] && !A) && E.push(A ? "(" + M + ")" : "on " + M), E.length && (I.description = E.join(" ")), I
                            }();
                        q.platform = u, void 0 !== (d = function () {
                            return u
                        }.call(h, f, h, l)) && (l.exports = d)
                    }).call(this)
                }).call(h, f(11)(e), f(5))
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
                    function e(e, t) {
                        var i = t.request_start, r = t.request_response_start, n = t.request_response_end,
                            o = t.request_bytes_loaded, a = r - i, s = n - r;
                        if (0 < a && 0 < s && 0 < o) {
                            var u = o / s * 8e3;
                            h++, l += a, c += o, d += s, this.data.view_min_request_throughput = Math.min(this.data.view_min_request_throughput || 1 / 0, u), this.data.view_average_request_throughput = c / d * 8e3, this.data.view_max_request_latency = Math.max(this.data.view_max_request_latency || 0, a), this.data.view_average_request_latency = l / h
                        }
                    }

                    function t(e, t) {
                    }

                    function i(e, t) {
                    }

                    var l = 0, c = 0, d = 0, h = 0;
                    this.on("requestcompleted", e), this.on("requestfailed", t), this.on("requestcanceled", i)
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var d = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function (e, t) {
                        var i = [], r = !0, n = !1, o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                        } catch (e) {
                            n = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                        return i
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                };
                t.default = function (a, e, t) {
                    var i = (0, f.findMediaElement)(e), r = d(i, 3), s = r[0], n = r[1], o = r[2], u = a.log,
                        l = a.utils.getComputedStyle, c = a.utils.secondsToMs;
                    return s ? "video" !== o && "audio" !== o ? u.error("The element of `" + n + "` was not a media element.") : ((t = t || {}).data = (0, h.default)({
                        player_software: "HTML5 Video Element",
                        player_software_version: "No Versions",
                        player_mux_plugin_name: "VideoElementMonitor",
                        player_mux_plugin_version: "2.5.0"
                    }, t.data), t.getPlayheadTime = function () {
                        return c(s.currentTime)
                    }, t.getStateData = function () {
                        return {
                            player_is_paused: s.paused,
                            player_playhead_time: c(s.currentTime),
                            player_width: parseInt(l(s, "width")),
                            player_height: parseInt(l(s, "height")),
                            player_autoplay_on: s.autoplay,
                            player_preload_on: s.preload,
                            video_poster_url: s.poster,
                            video_source_url: s.currentSrc,
                            video_source_duration: c(s.duration),
                            video_source_height: s.videoHeight,
                            video_source_width: s.videoWidth
                        }
                    }, s.mux = s.mux || {}, s.mux.destroy = function () {
                        Object.keys(s.mux.listeners).forEach(function (e) {
                            s.removeEventListener(e, s.mux.listeners[e], !1)
                        }), delete s.mux.listeners, a.emit(n, "destroy")
                    }, s.mux.swapElement = function (e) {
                        var t = (0, f.findMediaElement)(e), i = d(t, 3), r = i[0], n = i[1], o = i[2];
                        return r ? "video" !== o && "audio" !== o ? a.log.error("The element of `" + n + "` was not a media element.") : (r.muxId = s.muxId, delete s.muxId, r.mux = r.mux || {}, r.mux.listeners = (0, h.default)({}, s.mux.listeners), delete s.mux.listeners, Object.keys(r.mux.listeners).forEach(function (e) {
                            s.removeEventListener(e, r.mux.listeners[e], !1), r.addEventListener(e, r.mux.listeners[e], !1)
                        }), r.mux.swapElement = s.mux.swapElement, r.mux.destroy = s.mux.destroy, delete s.mux, void (s = r)) : a.log.error("No element was found with the `" + n + "` query selector.")
                    }, s.mux.addHLSJS = function (e) {
                        a.addHLSJS(n, e)
                    }, s.mux.addDashJS = function (e) {
                        a.addDashJS(n, e)
                    }, s.mux.removeHLSJS = function () {
                        a.removeHLSJS(n)
                    }, s.mux.removeDashJS = function () {
                        a.removeDashJS(n)
                    }, a.init(n, t), a.emit(n, "playerready"), s.paused || (a.emit(n, "play"), 2 < s.readyState && a.emit(n, "playing")), s.mux.listeners = {}, void p.forEach(function (t) {
                        s.mux.listeners[t] = function () {
                            var e = {};
                            "error" === t && (e.player_error_code = s.error && s.error.code, e.player_error_message = s.error && m[s.error.code]), a.emit(n, t, e)
                        }, s.addEventListener(t, s.mux.listeners[t], !1)
                    })) : u.error("No element was found with the `" + n + "` query selector.")
                };
                var r, n = i(0), h = (r = n) && r.__esModule ? r : {default: r}, f = i(9),
                    p = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"],
                    m = {
                        1: "MEDIA_ERR_ABORTED",
                        2: "MEDIA_ERR_NETWORK",
                        3: "MEDIA_ERR_DECODE",
                        4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
                    }
            }, function (e, t, i) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(50), o = r(n), a = i(1), s = r(a), u = i(51), l = r(u), c = i(52), d = r(c), h = i(0),
                    f = r(h), p = i(8), m = r(p), v = i(4), y = {};
                y.safeCall = o.default, y.safeIncrement = s.default, y.getComputedStyle = l.default, y.secondsToMs = d.default, y.assign = f.default, y.headersStringToObject = m.default, y.extractHostnameAndDomain = v.extractHostnameAndDomain, t.default = y
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, i, r) {
                    var n = r;
                    if (e && "function" == typeof e[t]) try {
                        n = e[t].apply(e, i)
                    } catch (e) {
                        o.default.info("safeCall error", e)
                    }
                    return n
                };
                var r, n = i(3), o = (r = n) && r.__esModule ? r : {default: r}
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
                    if (o.default.defaultView && o.default.defaultView.getComputedStyle) return o.default.defaultView.getComputedStyle(e, null).getPropertyValue(t)
                };
                var r, n = i(7), o = (r = n) && r.__esModule ? r : {default: r}
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                    return Math.floor(1e3 * e)
                }
            }])
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (o, a) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                    e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [],
                    s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : function () {
                        return {}
                    }, u = !1;
                o.on("adstart", function () {
                    u = !0
                }), o.on("adend", function () {
                    u = !1
                }), o.on("adserror", function () {
                    u = !1
                });
                var t = function () {
                    var n = l(a.currentTime()), e = function e() {
                        var t = Date.now(), i = l(a.currentTime());
                        if (u) {
                            if (n < i) {
                                var r = s();
                                r.viewer_time = t - Math.max(0, i - n), a.off("timeupdate", e), o.mux.emit("adplaying", r)
                            }
                        } else a.off("timeupdate", e)
                    };
                    a.on("timeupdate", e);
                    var t = function t() {
                        a.off("timeupdate", e), i.forEach(function (e) {
                            a.off(e, t)
                        })
                    };
                    i.forEach(function (e) {
                        a.on(e, t)
                    })
                };
                e.forEach(function (e) {
                    a.on(e, t)
                })
            };
            var r, n = i(0), o = (r = n) && r.__esModule ? r : {default: r}, l = o.default.utils.secondsToMs
        }, function (e, t, i) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {default: e}
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var n = i(3), s = r(n), o = i(0), u = r(o), a = i(4), l = r(a), c = i(6), d = r(c), h = i(7), f = r(h),
                p = i(8), m = r(p), v = i(9), y = r(v), _ = i(10), g = r(_), b = u.default.log,
                T = u.default.utils.assign, S = u.default.utils.safeCall, w = u.default.utils.getComputedStyle,
                k = u.default.utils.secondsToMs,
                E = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"];
            (s.default.registerPlugin || s.default.plugin || function () {
                u.default.log.error("No valid method to register videojs plugin available.")
            })("mux", function (e) {
                if (s.default.IS_IE8) return !1;
                var r = this, i = r.id();
                (e = e || {}).data = T({
                    player_software_name: "Video.js",
                    player_software_version: s.default.VERSION || "< 4.11",
                    player_mux_plugin_name: "videojs-mux",
                    player_mux_plugin_version: "2.4.2"
                }, e.data), e.getPlayheadTime = function () {
                    return k(r.currentTime())
                }, e.getStateData = function () {
                    var e = S(r, "videoHeight"), t = S(r, "videoWidth");
                    if (void 0 === t || void 0 === e) {
                        var i = r.el().firstChild;
                        i && "VIDEO" === i.nodeName.toUpperCase() && (e = i.videoHeight, t = i.videoWidth)
                    }
                    return {
                        player_is_paused: S(r, "paused"),
                        player_is_fullscreen: S(r, "isFullscreen"),
                        player_autoplay_on: !!S(r, "autoplay"),
                        player_preload_on: S(r, "preload"),
                        player_width: w(r.el(), "width"),
                        player_height: w(r.el(), "height"),
                        player_language_code: S(r, "language"),
                        video_poster_url: S(r, "poster"),
                        video_source_url: S(r, "currentSrc"),
                        video_source_mime_type: S(r, "currentType"),
                        video_source_duration: k(S(r, "duration") || 0),
                        video_source_height: e,
                        video_source_width: t
                    }
                }, r.mux = function () {
                    b.error("[videojs-mux] The plugin was initialized more than once.")
                }, r.mux.emit = function (e, t) {
                    u.default.emit(i, e, t)
                }, r.mux.log = b, r.mux.utils = u.default.utils, u.default.init(i, e);
                var t = !1, n = function () {
                    t || r.mux.emit("playerready"), t = !0
                };
                r.ready(function () {
                    r.addClass("vjs-mux"), l.default.setTimeout(n, 0)
                });
                var o = !1;
                r.one("play", n), E.forEach(function (i) {
                    r.on(i, function () {
                        if (!o) {
                            var e = {};
                            if ("error" === i) {
                                var t = S(r, "error");
                                e.player_error_code = t && t.code, e.player_error_message = t && t.message
                            }
                            r.mux.emit(i, e)
                        }
                    })
                });
                var a = !1;
                r.on("play", function () {
                    a = !0
                }), r.on("pause", function () {
                    a = !1
                }), r.on("adstart", function () {
                    o = !0, a && r.mux.emit("pause"), r.mux.emit("adbreakstart")
                }), r.on("adend", function () {
                    r.mux.emit("adbreakend"), o = !1, S(r, "paused") || (r.mux.emit("play"), a = !0, r.onceux && r.mux.emit("playing"))
                }), r.ima && (0, d.default)(r), r.onceux && (0, y.default)(r), r.ima3 && "function" == typeof r.ima3.ready && (0, f.default)(r), r.FreeWheelPlugin && r.FreeWheelPlugin.VERSION && (0, m.default)(r), r.on("dispose", function () {
                    r.mux.emit("destroy")
                })
            }), (0, g.default)(s.default), t.default = {}
        }, function (e, t) {
            e.exports = TNa
        }, function (i, e, t) {
            (function (e) {
                var t;
                t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, i.exports = t
            }).call(e, t(5))
        }, function (Mdb, Ndb) {
            var Odb;
            Odb = function () {
                return this
            }();
            try {
                Odb = Odb || Function("return this")() || eval("this")
            } catch (Mdb) {
                "object" == typeof window && (Odb = window)
            }
            Mdb.exports = Odb
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (a) {
                var i = function (e) {
                    var t = "function" == typeof (e = e || {}).getAdData ? e.getAdData() : {},
                        i = "function" == typeof e.getAd ? e.getAd() : {},
                        r = "function" == typeof i.getMediaUrl ? i.getMediaUrl() : t.mediaUrl, n = a.ima.settings || {},
                        o = {};
                    return r && (o.ad_asset_url = r), n.adTagUrl && (o.ad_tag_url = n.adTagUrl), o
                }, t = void 0, r = void 0, n = void 0, o = void 0, s = void 0, u = void 0;
                try {
                    var e = window.google.ima.AdEvent.Type;
                    t = e.LOADED, r = e.STARTED, n = e.COMPLETE, o = e.PAUSED, s = e.RESUMED, u = e.SKIPPED
                } catch (a) {
                    t = "loaded", r = "start", n = "complete", o = "pause", s = "resume", u = "skip"
                }
                var l = 0;
                a.mux.triggerAdRequest = function () {
                    l++, a.mux.emit("adrequest", i())
                }, a.on("adsready", function () {
                    var e = a.ima.addEventListener || function () {
                    };
                    e(t, function (e) {
                        var t = i(e);
                        0 < l && (l--, a.mux.emit("adresponse", t)), a.mux.emit("adplay", t)
                    }), e(r, function (e) {
                        var t = i(e);
                        a.mux.emit("adplaying", t)
                    }), e(s, function (e) {
                        var t = i(e);
                        a.mux.emit("adplay", t), a.mux.emit("adplaying", t)
                    }), e(o, function (e) {
                        var t = i(e);
                        a.mux.emit("adpause", t)
                    }), e(n, function (e) {
                        var t = i(e);
                        a.mux.emit("adended", t)
                    }), e(u, function (e) {
                        var t = i(e);
                        a.mux.emit("adended", t)
                    }), a.on("adserror", function () {
                        0 < l && (l--, a.mux.emit("adresponse")), a.mux.emit("aderror")
                    })
                })
            }
        }, function (e, t, i) {
            "use strict";

            function n(e) {
                if ("string" != typeof e) return !1;
                var t = e.split(".").map(function (e) {
                    return parseInt(e)
                }), i = t[0], r = t[1];
                return 2 < i || 2 === i && 3 <= r
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.brightcoveImaAdsEventsSupported = n, t.default = function (r) {
                var i = function () {
                    var e = r.ima3.currentAd, t = r.ima3.settings, i = {};
                    return e && (i.ad_asset_url = e.mediaUrl), t && (i.ad_tag_url = t.serverUrl), i
                };
                if (n(r.ima3.version)) {
                    var e = 0, t = function () {
                        0 < e && (e--, r.mux.emit("adresponse", i()))
                    };
                    r.on("ads-request", function () {
                        e++, r.mux.emit("adrequest", i())
                    }), r.on("ads-load", function () {
                        t(), r.mux.emit("adplay", i())
                    }), r.on("adserror", function () {
                        t(), r.mux.emit("aderror")
                    }), r.on("ads-play", function () {
                        r.mux.emit("adplay", i())
                    }), r.on("ads-pause", function () {
                        r.mux.emit("adpause", i())
                    }), r.on("ads-ad-ended", function () {
                        r.mux.emit("adended", i())
                    })
                }
                r.ima3.ready(function () {
                    if (r.ima3.adPlayer) {
                        n(r.ima3.version) || (r.ima3.adPlayer.on("play", function () {
                            r.mux.emit("adplay")
                        }), r.ima3.adPlayer.on("pause", function () {
                            r.mux.emit("adpause")
                        }), r.ima3.adPlayer.on("ended", function () {
                            r.mux.emit("adended")
                        }));
                        var e = ["pause", "ended", "adserror"], t = ["play"];
                        (0, a.default)(r, r.ima3.adPlayer, e, t, i)
                    } else r.mux.log("Legacy IMA3 plugin found, ad events may not track correctly."), r.on("ads-ad-started", function () {
                        r.mux.emit("adplaying", i())
                    }), r.on("ads-play", function () {
                        r.mux.emit("adplaying", i())
                    })
                })
            };
            var r, o = i(1), a = (r = o) && r.__esModule ? r : {default: r}
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (r) {
                var e = function (e) {
                    var t = r.FreeWheelPlugin, i = {};
                    switch (e) {
                        case"adplay":
                        case"adplaying":
                        case"adpause":
                            i.ad_asset_url = r.currentSrc()
                    }
                    return t && (i.ad_tag_url = "html5" === t.tech.toLowerCase() ? t.settings.Html5.serverUrl : t.settings.Flash.serverUrl), i
                };
                r.on("ads-request", function () {
                    r.mux.emit("adrequest", e("adrequest"))
                }), r.on("ads-load", function () {
                    r.mux.emit("adresponse", e("adresponse"))
                }), r.on("adserror", function () {
                    r.mux.emit("aderror")
                }), r.on("ads-ad-started", function () {
                    r.mux.emit("adplay", e("adplay")), r.mux.emit("adplaying", e("adplaying"))
                }), r.on("ads-play", function () {
                    r.mux.emit("adplay", e("adplay")), r.mux.emit("adplaying", e("adplaying"))
                }), r.on("ads-pause", function () {
                    r.mux.emit("adpause", e("adpause"))
                }), r.on("ads-ad-ended", function () {
                    r.mux.emit("adended", e("adended"))
                }), r.on("adend", function () {
                    r.mux.emit("play")
                })
            }
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (t) {
                var e = ["onceux-linearad-pause", "onceux-linearad-skipped", "onceux-linearad-complete", "adserror"],
                    i = ["adstart", "onceux-linearad-resume"];
                (0, o.default)(t, t, e, i), t.on("adstart", function () {
                    t.mux.emit("adplay")
                }), t.on("onceux-linearad-start", function (e) {
                    e.linearAd && 0 < e.linearAd.index && (t.mux.emit("adplay"), t.mux.emit("adplaying"))
                }), t.on("onceux-linearad-resume", function () {
                    t.mux.emit("adplay")
                }), t.on("onceux-linearad-pause", function () {
                    t.mux.emit("adpause")
                }), t.on("onceux-linearad-complete", function () {
                    t.mux.emit("adended")
                }), t.on("onceux-linearad-skipped", function () {
                    t.mux.emit("adended")
                })
            };
            var r, n = i(1), o = (r = n) && r.__esModule ? r : {default: r}
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (o) {
                if (!s && "function" == typeof o.getTech) {
                    for (var e = o.getTech("Html5") || {}, i = e.sourceHandlers, t = 0; t < i.length; t++) !function (e) {
                        var t = i[e], n = t.handleSource;
                        t.handleSource = function (e, t) {
                            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r = n(e, t, i);
                            if (r && "function" == typeof r.xhr) try {
                                (0, a.default)(o(r.player_.el_.parentNode.id), r.xhr)
                            } catch (e) {
                            }
                            return r
                        }
                    }(t);
                    s = !0
                }
            };
            var r, n = i(11), a = (r = n) && r.__esModule ? r : {default: r}, s = !1
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (s, e) {
                var i, r = function (a) {
                    return function (e) {
                        var t, i, r, n, o = Date.now();
                        try {
                            a(e)
                        } catch (e) {
                        }
                        try {
                            e.onreadystatechange = (i = o, r = (t = e).onreadystatechange || function () {
                            }, n = (0, u.default)(s, t, i), function () {
                                try {
                                    n()
                                } catch (e) {
                                }
                                try {
                                    r()
                                } catch (e) {
                                }
                            })
                        } catch (e) {
                        }
                    }
                };
                e.beforeRequest = (i = e.beforeRequest || function (e) {
                    return e
                }, function (e) {
                    var t = i(e);
                    return t.beforeSend = r(t.beforeSend || function () {
                    }), t
                })
            };
            var r, n = i(12), u = (r = n) && r.__esModule ? r : {default: r}
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var v = function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function (e, t) {
                    var i = [], r = !0, n = !1, o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return i
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            };
            t.default = function (c, d, h) {
                var f = c.mux.utils.extractHostnameAndDomain, p = c.mux.utils.headersStringToObject, m = 0;
                return function () {
                    var e, t = d.readyState;
                    if (2 <= t) {
                        if (m = m || Date.now(), 4 !== t) return;
                        if (200 <= d.status && d.status < 300) {
                            var i = Date.now(),
                                r = "arraybuffer" === d.responseType ? d.response.byteLength : d.responseText.length,
                                n = f(d.responseURL), o = v(n, 1), a = o[0],
                                s = p(d.getAllResponseHeaders ? d.getAllResponseHeaders() : ""),
                                u = (e = s["content-type"]) ? e.match(/^audio\/mpegurl/i) ? "manifest" : e.match(/^audio.*/i) ? "audio" : e.match(/^video.*/) ? "video" : e.match(/^application\/x-mpegurl/i) ? "manifest" : e.match(/^application\/vnd.apple.mpegurl/i) ? "manifest" : e.match(/^application\/dash+xml/i) ? "manifest" : "unknown" : "unknown",
                                l = {
                                    request_start: h,
                                    request_response_start: m,
                                    request_response_end: i,
                                    request_bytes_loaded: r,
                                    request_hostname: a,
                                    request_response_headers: s,
                                    request_type: u
                                };
                            c.mux.emit("requestcompleted", l)
                        } else c.mux.emit("requestfailed")
                    }
                }
            }
        }]))
    }, "./node_modules/videojs-sneakpeek/dist/videojs-sneakpeek.min.js": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }, k = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function (e, t) {
                var i = [], r = !0, n = !1, o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0) ;
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return i
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
        t.enablePlugin = function (e, t) {
            (n.default.registerPlugin || n.default.plugin)(e, t)
        }, t.default = function (e) {
            a.basePath = e.basePath || a.basePath;
            var T = r({}, a, e), S = this, o = [], w = void 0;

            function t() {
                if (!w) {
                    for (var e = 0; e < o.length; e++) if ("metadata" === o[e].kind && "sneakpeek" === o[e].label) {
                        (w = o[e]).mode = "hidden";
                        break
                    }
                    if (w) {
                        if (-1 !== navigator.userAgent.toLowerCase().indexOf("android")) {
                            var t = S.controlBar.progressControl, i = function () {
                                t.removeClass("fake-active")
                            };
                            t.on("touchstart", function () {
                                t.addClass("fake-active")
                            }), t.on("touchend", i), t.on("touchcancel", i)
                        }
                        var y = document.createElement("div");
                        y.className = "vjs-sneakpeek-holder";
                        var _ = document.createElement("img");
                        y.appendChild(_), _.className = "vjs-sneakpeek";
                        var g = S.duration();
                        S.on("durationchange", function () {
                            g = S.duration()
                        }), S.on("loadedmetadata", function () {
                            g = S.duration()
                        });
                        var b = S.controlBar.progressControl;
                        b.el().appendChild(y), b.on("mousemove", r), b.on("touchmove", r), b.on("mouseout", n), b.on("touchcancel", n), b.on("touchend", n), S.on("userinactive", n)
                    }
                }

                function r(e) {
                    var t = function () {
                        if (E.default.pageXOffset) return {x: E.default.pageXOffset, y: E.default.pageYOffset};
                        return {x: document.documentElement.scrollLeft, y: document.documentElement.scrollTop}
                    }().x, i = C(b.el()).getBoundingClientRect(), r = e.pageX;
                    e.changedTouches && (r = e.changedTouches[0].pageX);
                    var n = (i.width || i.right) + t,
                        o = r || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    o -= C(b.el()).getBoundingClientRect().left + t;
                    for (var a = Math.floor(o / b.width() * g), s = w && w.cues.length, u = 0, l = void 0; u < s;) {
                        var c = w.cues[u];
                        if (c.startTime <= a && c.endTime >= a) {
                            l = x(c.text);
                            break
                        }
                        u++
                    }
                    if (void 0 !== l) {
                        if (l.src && _.src !== l.src) {
                            var d = "";
                            "/" === l.src[0] && (d = (d = S.currentSrc()).substring(0, d.lastIndexOf("/"))), _.src = d + l.src + (h = T.urlParams, "" === (f = Object.entries(h).map(function (e) {
                                var t = k(e, 2), i = t[0], r = t[1];
                                return i + "=" + r
                            }).join("&")) ? "" : "?" + f)
                        }
                        var h, f;
                        l.w = l.w || T.width, l.h = l.h || T.height, y.style.width === l.w && y.style.height === l.h || (y.style.width = l.w + "px", y.style.height = l.h + "px"), _.style.left = -l.x + "px", _.style.top = -l.y + "px";
                        var p = [l.y, l.w + l.x, l.y + l.h, l.x];
                        _.style.clip = "rect(" + p.join("px,") + "px)";
                        var m = l.w, v = m / 2;
                        n < o + v ? o = n - m : o < v ? o = 0 : o -= v, y.style.left = o + "px"
                    }
                }

                function n() {
                    y.style.left = "-1000px"
                }
            }

            S.ready(function () {
                o = S.remoteTextTracks(), t(), w || o.addEventListener("addtrack", t)
            })
        };
        var n = o(i("./node_modules/video.js/dist/video.cjs.js")), E = o(i("./node_modules/global/window.js"));

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = {width: 0, height: 0, basePath: "", urlParams: {}};

        function C(e) {
            return "HTML" !== e.nodeName && "static" === (i = e, t = "position", E.default.getComputedStyle ? E.default.getComputedStyle(i, r)[t] : i.currentStyle[t]) ? C(e.offsetParent) : e;
            var t, i, r
        }

        function x(e) {
            var t = e.indexOf("#");
            if (-1 === t) return {src: e, x: 0, y: 0, w: 0, h: 0};
            var i = e.substring(0, t), r = e.substring(t + 1);
            if ("xywh=" !== r.substring(0, 5)) return {src: a.basePath + i, x: 0, y: 0, w: 0, h: 0};
            var n = r.substring(5).split(",");
            return {src: a.basePath + i, x: +n[0], y: +n[1], w: +n[2], h: +n[3]}
        }
    }, "./node_modules/videojs-swf/package.json": function (e) {
        e.exports = {a: "5.4.2"}
    }, "./node_modules/videojs-vtt.js/lib/browser-index.js": function (e, t, i) {
        var r = i("./node_modules/global/window.js"), n = e.exports = {
            WebVTT: i("./node_modules/videojs-vtt.js/lib/vtt.js"),
            VTTCue: i("./node_modules/videojs-vtt.js/lib/vttcue.js"),
            VTTRegion: i("./node_modules/videojs-vtt.js/lib/vttregion.js")
        };
        r.vttjs = n, r.WebVTT = n.WebVTT;
        var o = n.VTTCue, a = n.VTTRegion, s = r.VTTCue, u = r.VTTRegion;
        n.shim = function () {
            r.VTTCue = o, r.VTTRegion = a
        }, n.restore = function () {
            r.VTTCue = s, r.VTTRegion = u
        }, r.VTTCue || n.shim()
    }, "./node_modules/videojs-vtt.js/lib/vtt.js": function (e, t) {
        var i = Object.create || function () {
            function t() {
            }

            return function (e) {
                if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                return t.prototype = e, new t
            }
        }();

        function l(e, t) {
            this.name = "ParsingError", this.code = e.code, this.message = t || e.message
        }

        function m(e) {
            function t(e, t, i, r) {
                return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | r) / 1e3
            }

            var i = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : 59 < i[1] ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
        }

        function c() {
            this.values = i(null)
        }

        function d(e, t, i, r) {
            var n = r ? e.split(r) : [e];
            for (var o in n) if ("string" == typeof n[o]) {
                var a = n[o].split(i);
                if (2 === a.length) t(a[0], a[1])
            }
        }

        function u(t, e, o) {
            var i, r, a, n = t;

            function s() {
                var e = m(t);
                if (null === e) throw new l(l.Errors.BadTimeStamp, "Malformed timestamp: " + n);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
            }

            function u() {
                t = t.replace(/^\s+/, "")
            }

            if (u(), e.startTime = s(), u(), "--\x3e" !== t.substr(0, 3)) throw new l(l.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
            t = t.substr(3), u(), e.endTime = s(), u(), i = t, r = e, a = new c, d(i, function (e, t) {
                switch (e) {
                    case"region":
                        for (var i = o.length - 1; 0 <= i; i--) if (o[i].id === t) {
                            a.set(e, o[i].region);
                            break
                        }
                        break;
                    case"vertical":
                        a.alt(e, t, ["rl", "lr"]);
                        break;
                    case"line":
                        var r = t.split(","), n = r[0];
                        a.integer(e, n), a.percent(e, n) && a.set("snapToLines", !1), a.alt(e, n, ["auto"]), 2 === r.length && a.alt("lineAlign", r[1], ["start", "middle", "end"]);
                        break;
                    case"position":
                        r = t.split(","), a.percent(e, r[0]), 2 === r.length && a.alt("positionAlign", r[1], ["start", "middle", "end"]);
                        break;
                    case"size":
                        a.percent(e, t);
                        break;
                    case"align":
                        a.alt(e, t, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), r.region = a.get("region", null), r.vertical = a.get("vertical", ""), r.line = a.get("line", "auto"), r.lineAlign = a.get("lineAlign", "start"), r.snapToLines = a.get("snapToLines", !0), r.size = a.get("size", 100), r.align = a.get("align", "middle"), r.position = a.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, r.align), r.positionAlign = a.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, r.align)
        }

        ((l.prototype = i(Error.prototype)).constructor = l).Errors = {
            BadSignature: {
                code: 0,
                message: "Malformed WebVTT signature."
            }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
        }, c.prototype = {
            set: function (e, t) {
                this.get(e) || "" === t || (this.values[e] = t)
            }, get: function (e, t, i) {
                return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
            }, has: function (e) {
                return e in this.values
            }, alt: function (e, t, i) {
                for (var r = 0; r < i.length; ++r) if (t === i[r]) {
                    this.set(e, t);
                    break
                }
            }, integer: function (e, t) {
                /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
            }, percent: function (e, t) {
                return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (t = parseFloat(t)) && t <= 100) && (this.set(e, t), !0)
            }
        };
        var v = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " "},
            y = {c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span"},
            _ = {v: "title", lang: "lang"}, g = {rt: "ruby"};

        function h(o, i) {
            function e() {
                if (!i) return null;
                var e, t = i.match(/^([^<]*)(<[^>]*>?)?/);
                return e = t[1] ? t[1] : t[2], i = i.substr(e.length), e
            }

            function t(e) {
                return v[e]
            }

            function r(e) {
                for (; p = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) e = e.replace(p[0], t);
                return e
            }

            function n(e, t) {
                var i = y[e];
                if (!i) return null;
                var r = o.document.createElement(i);
                r.localName = i;
                var n = _[e];
                return n && t && (r[n] = t.trim()), r
            }

            for (var a, s, u, l = o.document.createElement("div"), c = l, d = []; null !== (a = e());) if ("<" !== a[0]) c.appendChild(o.document.createTextNode(r(a))); else {
                if ("/" === a[1]) {
                    d.length && d[d.length - 1] === a.substr(2).replace(">", "") && (d.pop(), c = c.parentNode);
                    continue
                }
                var h, f = m(a.substr(1, a.length - 2));
                if (f) {
                    h = o.document.createProcessingInstruction("timestamp", f), c.appendChild(h);
                    continue
                }
                var p = a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!p) continue;
                if (!(h = n(p[1], p[3]))) continue;
                if (s = c, g[(u = h).localName] && g[u.localName] !== s.localName) continue;
                p[2] && (h.className = p[2].substr(1).replace(".", " ")), d.push(p[1]), c.appendChild(h), c = h
            }
            return l
        }

        var r = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];

        function f(e) {
            for (var t = 0; t < r.length; t++) {
                var i = r[t];
                if (e >= i[0] && e <= i[1]) return !0
            }
            return !1
        }

        function p() {
        }

        function b(e, t, i) {
            var r = /MSIE\s8\.0/.test(navigator.userAgent), n = "rgba(255, 255, 255, 1)", o = "rgba(0, 0, 0, 0.8)";
            r && (n = "rgb(255, 255, 255)", o = "rgb(0, 0, 0)"), p.call(this), this.cue = t, this.cueDiv = h(e, t.text);
            var a = {
                color: n,
                backgroundColor: o,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "inline"
            };
            r || (a.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl", a.unicodeBidi = "plaintext"), this.applyStyles(a, this.cueDiv), this.div = e.document.createElement("div"), a = {
                textAlign: "middle" === t.align ? "center" : t.align,
                font: i.font,
                whiteSpace: "pre-line",
                position: "absolute"
            }, r || (a.direction = function (e) {
                var t = [], i = "";
                if (!e || !e.childNodes) return "ltr";

                function n(e, t) {
                    for (var i = t.childNodes.length - 1; 0 <= i; i--) e.push(t.childNodes[i])
                }

                function o(e) {
                    if (!e || !e.length) return null;
                    var t = e.pop(), i = t.textContent || t.innerText;
                    if (i) {
                        var r = i.match(/^.*(\n|\r)/);
                        return r ? r[e.length = 0] : i
                    }
                    return "ruby" === t.tagName ? o(e) : t.childNodes ? (n(e, t), o(e)) : void 0
                }

                for (n(t, e); i = o(t);) for (var r = 0; r < i.length; r++) if (f(i.charCodeAt(r))) return "rtl";
                return "ltr"
            }(this.cueDiv), a.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(a), this.div.appendChild(this.cueDiv);
            var s = 0;
            switch (t.positionAlign) {
                case"start":
                    s = t.position;
                    break;
                case"middle":
                    s = t.position - t.size / 2;
                    break;
                case"end":
                    s = t.position - t.size
            }
            "" === t.vertical ? this.applyStyles({
                left: this.formatStyle(s, "%"),
                width: this.formatStyle(t.size, "%")
            }) : this.applyStyles({
                top: this.formatStyle(s, "%"),
                height: this.formatStyle(t.size, "%")
            }), this.move = function (e) {
                this.applyStyles({
                    top: this.formatStyle(e.top, "px"),
                    bottom: this.formatStyle(e.bottom, "px"),
                    left: this.formatStyle(e.left, "px"),
                    right: this.formatStyle(e.right, "px"),
                    height: this.formatStyle(e.height, "px"),
                    width: this.formatStyle(e.width, "px")
                })
            }
        }

        function T(e) {
            var t, i, r, n, o = /MSIE\s8\.0/.test(navigator.userAgent);
            if (e.div) {
                i = e.div.offsetHeight, r = e.div.offsetWidth, n = e.div.offsetTop;
                var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
                e = e.div.getBoundingClientRect(), t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) : 0
            }
            this.left = e.left, this.right = e.right, this.top = e.top || n, this.height = e.height || i, this.bottom = e.bottom || n + (e.height || i), this.width = e.width || r, this.lineHeight = void 0 !== t ? t : e.lineHeight, o && !this.lineHeight && (this.lineHeight = 13)
        }

        function S(e, t, s, u) {
            var i = new T(t), r = t.cue, n = function (e) {
                if ("number" == typeof e.line && (e.snapToLines || 0 <= e.line && e.line <= 100)) return e.line;
                if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
                for (var t = e.track, i = t.textTrackList, r = 0, n = 0; n < i.length && i[n] !== t; n++) "showing" === i[n].mode && r++;
                return -1 * ++r
            }(r), o = [];
            if (r.snapToLines) {
                var a;
                switch (r.vertical) {
                    case"":
                        o = ["+y", "-y"], a = "height";
                        break;
                    case"rl":
                        o = ["+x", "-x"], a = "width";
                        break;
                    case"lr":
                        o = ["-x", "+x"], a = "width"
                }
                var l = i.lineHeight, c = l * Math.round(n), d = s[a] + l, h = o[0];
                Math.abs(c) > d && (c = c < 0 ? -1 : 1, c *= Math.ceil(d / l) * l), n < 0 && (c += "" === r.vertical ? s.height : s.width, o = o.reverse()), i.move(h, c)
            } else {
                var f = i.lineHeight / s.height * 100;
                switch (r.lineAlign) {
                    case"middle":
                        n -= f / 2;
                        break;
                    case"end":
                        n -= f
                }
                switch (r.vertical) {
                    case"":
                        t.applyStyles({top: t.formatStyle(n, "%")});
                        break;
                    case"rl":
                        t.applyStyles({left: t.formatStyle(n, "%")});
                        break;
                    case"lr":
                        t.applyStyles({right: t.formatStyle(n, "%")})
                }
                o = ["+y", "-x", "+x", "-y"], i = new T(t)
            }
            var p = function (e, t) {
                for (var i, r = new T(e), n = 1, o = 0; o < t.length; o++) {
                    for (; e.overlapsOppositeAxis(s, t[o]) || e.within(s) && e.overlapsAny(u);) e.move(t[o]);
                    if (e.within(s)) return e;
                    var a = e.intersectPercentage(s);
                    a < n && (i = new T(e), n = a), e = new T(r)
                }
                return i || r
            }(i, o);
            t.move(p.toCSSCompatValues(s))
        }

        function n() {
        }

        p.prototype.applyStyles = function (e, t) {
            for (var i in t = t || this.div, e) e.hasOwnProperty(i) && (t.style[i] = e[i])
        }, p.prototype.formatStyle = function (e, t) {
            return 0 === e ? 0 : e + t
        }, (b.prototype = i(p.prototype)).constructor = b, T.prototype.move = function (e, t) {
            switch (t = void 0 !== t ? t : this.lineHeight, e) {
                case"+x":
                    this.left += t, this.right += t;
                    break;
                case"-x":
                    this.left -= t, this.right -= t;
                    break;
                case"+y":
                    this.top += t, this.bottom += t;
                    break;
                case"-y":
                    this.top -= t, this.bottom -= t
            }
        }, T.prototype.overlaps = function (e) {
            return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
        }, T.prototype.overlapsAny = function (e) {
            for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return !0;
            return !1
        }, T.prototype.within = function (e) {
            return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
        }, T.prototype.overlapsOppositeAxis = function (e, t) {
            switch (t) {
                case"+x":
                    return this.left < e.left;
                case"-x":
                    return this.right > e.right;
                case"+y":
                    return this.top < e.top;
                case"-y":
                    return this.bottom > e.bottom
            }
        }, T.prototype.intersectPercentage = function (e) {
            return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
        }, T.prototype.toCSSCompatValues = function (e) {
            return {
                top: this.top - e.top,
                bottom: e.bottom - this.bottom,
                left: this.left - e.left,
                right: e.right - this.right,
                height: this.height,
                width: this.width
            }
        }, T.getSimpleBoxPosition = function (e) {
            var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
                i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
                r = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
            return {
                left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
                right: e.right,
                top: e.top || r,
                height: e.height || t,
                bottom: e.bottom || r + (e.height || t),
                width: e.width || i
            }
        }, n.StringDecoder = function () {
            return {
                decode: function (e) {
                    if (!e) return "";
                    if ("string" != typeof e) throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(e))
                }
            }
        }, n.convertCueToDOMTree = function (e, t) {
            return e && t ? h(e, t) : null
        };
        n.processCues = function (r, n, e) {
            if (!r || !n || !e) return null;
            for (; e.firstChild;) e.removeChild(e.firstChild);
            var o = r.document.createElement("div");
            if (o.style.position = "absolute", o.style.left = "0", o.style.right = "0", o.style.top = "0", o.style.bottom = "0", o.style.margin = "1.5%", e.appendChild(o), function (e) {
                for (var t = 0; t < e.length; t++) if (e[t].hasBeenReset || !e[t].displayState) return !0;
                return !1
            }(n)) {
                var a = [], s = T.getSimpleBoxPosition(o),
                    u = {font: Math.round(.05 * s.height * 100) / 100 + "px sans-serif"};
                !function () {
                    for (var e, t, i = 0; i < n.length; i++) t = n[i], e = new b(r, t, u), o.appendChild(e.div), S(0, e, s, a), t.displayState = e.div, a.push(T.getSimpleBoxPosition(e))
                }()
            } else for (var t = 0; t < n.length; t++) o.appendChild(n[t].displayState)
        }, (n.Parser = function (e, t, i) {
            i || (i = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
        }).prototype = {
            reportOrThrowError: function (e) {
                if (!(e instanceof l)) throw e;
                this.onparsingerror && this.onparsingerror(e)
            }, parse: function (e) {
                var o = this;

                function t() {
                    for (var e = o.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t;
                    var i = e.substr(0, t);
                    return "\r" === e[t] && ++t, "\n" === e[t] && ++t, o.buffer = e.substr(t), i
                }

                function i(e) {
                    e.match(/X-TIMESTAMP-MAP/) ? d(e, function (e, t) {
                        switch (e) {
                            case"X-TIMESTAMP-MAP":
                                i = t, r = new c, d(i, function (e, t) {
                                    switch (e) {
                                        case"MPEGT":
                                            r.integer(e + "S", t);
                                            break;
                                        case"LOCA":
                                            r.set(e + "L", m(t))
                                    }
                                }, /[^\d]:/, /,/), o.ontimestampmap && o.ontimestampmap({
                                    MPEGTS: r.get("MPEGTS"),
                                    LOCAL: r.get("LOCAL")
                                })
                        }
                        var i, r
                    }, /=/) : d(e, function (e, t) {
                        switch (e) {
                            case"Region":
                                !function (e) {
                                    var n = new c;
                                    if (d(e, function (e, t) {
                                        switch (e) {
                                            case"id":
                                                n.set(e, t);
                                                break;
                                            case"width":
                                                n.percent(e, t);
                                                break;
                                            case"lines":
                                                n.integer(e, t);
                                                break;
                                            case"regionanchor":
                                            case"viewportanchor":
                                                var i = t.split(",");
                                                if (2 !== i.length) break;
                                                var r = new c;
                                                if (r.percent("x", i[0]), r.percent("y", i[1]), !r.has("x") || !r.has("y")) break;
                                                n.set(e + "X", r.get("x")), n.set(e + "Y", r.get("y"));
                                                break;
                                            case"scroll":
                                                n.alt(e, t, ["up"])
                                        }
                                    }, /=/, /\s/), n.has("id")) {
                                        var t = new (o.vttjs.VTTRegion || o.window.VTTRegion);
                                        t.width = n.get("width", 100), t.lines = n.get("lines", 3), t.regionAnchorX = n.get("regionanchorX", 0), t.regionAnchorY = n.get("regionanchorY", 100), t.viewportAnchorX = n.get("viewportanchorX", 0), t.viewportAnchorY = n.get("viewportanchorY", 100), t.scroll = n.get("scroll", ""), o.onregion && o.onregion(t), o.regionList.push({
                                            id: n.get("id"),
                                            region: t
                                        })
                                    }
                                }(t)
                        }
                    }, /:/)
                }

                e && (o.buffer += o.decoder.decode(e, {stream: !0}));
                try {
                    var r;
                    if ("INITIAL" === o.state) {
                        if (!/\r\n|\n/.test(o.buffer)) return this;
                        var n = (r = t()).match(/^WEBVTT([ \t].*)?$/);
                        if (!n || !n[0]) throw new l(l.Errors.BadSignature);
                        o.state = "HEADER"
                    }
                    for (var a = !1; o.buffer;) {
                        if (!/\r\n|\n/.test(o.buffer)) return this;
                        switch (a ? a = !1 : r = t(), o.state) {
                            case"HEADER":
                                /:/.test(r) ? i(r) : r || (o.state = "ID");
                                continue;
                            case"NOTE":
                                r || (o.state = "ID");
                                continue;
                            case"ID":
                                if (/^NOTE($|[ \t])/.test(r)) {
                                    o.state = "NOTE";
                                    break
                                }
                                if (!r) continue;
                                if (o.cue = new (o.vttjs.VTTCue || o.window.VTTCue)(0, 0, ""), o.state = "CUE", -1 === r.indexOf("--\x3e")) {
                                    o.cue.id = r;
                                    continue
                                }
                            case"CUE":
                                try {
                                    u(r, o.cue, o.regionList)
                                } catch (e) {
                                    o.reportOrThrowError(e), o.cue = null, o.state = "BADCUE";
                                    continue
                                }
                                o.state = "CUETEXT";
                                continue;
                            case"CUETEXT":
                                var s = -1 !== r.indexOf("--\x3e");
                                if (!r || s && (a = !0)) {
                                    o.oncue && o.oncue(o.cue), o.cue = null, o.state = "ID";
                                    continue
                                }
                                o.cue.text && (o.cue.text += "\n"), o.cue.text += r;
                                continue;
                            case"BADCUE":
                                r || (o.state = "ID");
                                continue
                        }
                    }
                } catch (e) {
                    o.reportOrThrowError(e), "CUETEXT" === o.state && o.cue && o.oncue && o.oncue(o.cue), o.cue = null, o.state = "INITIAL" === o.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            }, flush: function () {
                var t = this;
                try {
                    if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new l(l.Errors.BadSignature)
                } catch (e) {
                    t.reportOrThrowError(e)
                }
                return t.onflush && t.onflush(), this
            }
        }, e.exports = n
    }, "./node_modules/videojs-vtt.js/lib/vttcue.js": function (e, t) {
        var b = {"": !0, lr: !0, rl: !0}, i = {start: !0, middle: !0, end: !0, left: !0, right: !0};

        function T(e) {
            return "string" == typeof e && (!!i[e.toLowerCase()] && e.toLowerCase())
        }

        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i) e[r] = i[r]
            }
            return e
        }

        function r(e, t, i) {
            var r = this, n = /MSIE\s8\.0/.test(navigator.userAgent), o = {};
            n ? r = document.createElement("custom") : o.enumerable = !0, r.hasBeenReset = !1;
            var a = "", s = !1, u = e, l = t, c = i, d = null, h = "", f = !0, p = "auto", m = "start", v = 50,
                y = "middle", _ = 50, g = "middle";
            if (Object.defineProperty(r, "id", S({}, o, {
                get: function () {
                    return a
                }, set: function (e) {
                    a = "" + e
                }
            })), Object.defineProperty(r, "pauseOnExit", S({}, o, {
                get: function () {
                    return s
                }, set: function (e) {
                    s = !!e
                }
            })), Object.defineProperty(r, "startTime", S({}, o, {
                get: function () {
                    return u
                }, set: function (e) {
                    if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                    u = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "endTime", S({}, o, {
                get: function () {
                    return l
                }, set: function (e) {
                    if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                    l = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "text", S({}, o, {
                get: function () {
                    return c
                }, set: function (e) {
                    c = "" + e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "region", S({}, o, {
                get: function () {
                    return d
                }, set: function (e) {
                    d = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "vertical", S({}, o, {
                get: function () {
                    return h
                }, set: function (e) {
                    var t, i = "string" == typeof (t = e) && !!b[t.toLowerCase()] && t.toLowerCase();
                    if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                    h = i, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "snapToLines", S({}, o, {
                get: function () {
                    return f
                }, set: function (e) {
                    f = !!e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "line", S({}, o, {
                get: function () {
                    return p
                }, set: function (e) {
                    if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
                    p = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "lineAlign", S({}, o, {
                get: function () {
                    return m
                }, set: function (e) {
                    var t = T(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    m = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "position", S({}, o, {
                get: function () {
                    return v
                }, set: function (e) {
                    if (e < 0 || 100 < e) throw new Error("Position must be between 0 and 100.");
                    v = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "positionAlign", S({}, o, {
                get: function () {
                    return y
                }, set: function (e) {
                    var t = T(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    y = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "size", S({}, o, {
                get: function () {
                    return _
                }, set: function (e) {
                    if (e < 0 || 100 < e) throw new Error("Size must be between 0 and 100.");
                    _ = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(r, "align", S({}, o, {
                get: function () {
                    return g
                }, set: function (e) {
                    var t = T(e);
                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                    g = t, this.hasBeenReset = !0
                }
            })), r.displayState = void 0, n) return r
        }

        r.prototype.getCueAsHTML = function () {
            return WebVTT.convertCueToDOMTree(window, this.text)
        }, e.exports = r
    }, "./node_modules/videojs-vtt.js/lib/vttregion.js": function (e, t) {
        var u = {"": !0, up: !0};

        function l(e) {
            return "number" == typeof e && 0 <= e && e <= 100
        }

        e.exports = function () {
            var t = 100, i = 3, r = 0, n = 100, o = 0, a = 100, s = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0, get: function () {
                        return t
                    }, set: function (e) {
                        if (!l(e)) throw new Error("Width must be between 0 and 100.");
                        t = e
                    }
                }, lines: {
                    enumerable: !0, get: function () {
                        return i
                    }, set: function (e) {
                        if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
                        i = e
                    }
                }, regionAnchorY: {
                    enumerable: !0, get: function () {
                        return n
                    }, set: function (e) {
                        if (!l(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                        n = e
                    }
                }, regionAnchorX: {
                    enumerable: !0, get: function () {
                        return r
                    }, set: function (e) {
                        if (!l(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
                        r = e
                    }
                }, viewportAnchorY: {
                    enumerable: !0, get: function () {
                        return a
                    }, set: function (e) {
                        if (!l(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                        a = e
                    }
                }, viewportAnchorX: {
                    enumerable: !0, get: function () {
                        return o
                    }, set: function (e) {
                        if (!l(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                        o = e
                    }
                }, scroll: {
                    enumerable: !0, get: function () {
                        return s
                    }, set: function (e) {
                        var t, i = "string" == typeof (t = e) && !!u[t.toLowerCase()] && t.toLowerCase();
                        if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                        s = i
                    }
                }
            })
        }
    }
}]);