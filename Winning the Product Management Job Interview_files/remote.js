(function (g) {
    var window = this;
    var bqa = function (a, b) {
        return g.Ub(a, b)
    }, K5 = function () {
    }, cqa = function (a) {
        if (a.Ac && "function" == typeof a.Ac) return a.Ac();
        if (g.Da(a)) return a.split("");
        if (g.La(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return g.Qb(a)
    }, dqa = function (a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (g.La(a) || g.Da(a)) (0, g.y)(a, b, void 0); else {
            if (a.Od && "function" == typeof a.Od) var c = a.Od(); else if (a.Ac && "function" == typeof a.Ac) c = void 0; else if (g.La(a) || g.Da(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else c = g.Rb(a);
            d = cqa(a);
            e = d.length;
            for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    }, L5 = function (a) {
        g.kn(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, g.D)()).toString(36));
        return a
    }, M5 = function (a, b, c) {
        g.Ka(c) || (c = [String(c)]);
        g.pn(a.l, b, c)
    }, N5 = function (a) {
        return (a = g.Io(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }, O5 = function (a, b) {
        return b + " [" + a.Y + " " + a.D + " " + a.getStatus() + "]"
    }, eqa = function (a) {
        return "content-type" == a.toLowerCase()
    }, P5 = function (a) {
        a.g && a.I && (a.g.ontimeout = null);
        a.F && (g.u.clearTimeout(a.F), a.F = null)
    }, fqa = function (a) {
        return g.Ld && g.nd(9) && g.Fa(a.timeout) && g.Ca(a.ontimeout)
    }, Q5 = function (a) {
        a.R || (a.R = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    }, R5 = function (a, b) {
        if (a.g) {
            P5(a);
            var c = a.g, d = a.P[0] ? g.Ha : null;
            a.g = null;
            a.P = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
            }
        }
    }, S5 = function (a, b) {
        a.i = !1;
        a.g && (a.o = !0, a.g.abort(), a.o = !1);
        a.l = b;
        a.u = 5;
        Q5(a);
        R5(a)
    }, T5 = function (a) {
        return a.g ? a.g.readyState : 0
    }, U5 = function (a) {
        if (a.i && "undefined" != typeof g.JY) if (a.P[1] && 4 == T5(a) && 2 == a.getStatus()) O5(a, "Local request error detected and ignored");
        else if (a.C && 4 == T5(a)) g.Gg(a.lw, 0, a); else if (a.dispatchEvent("readystatechange"), 4 == T5(a)) {
            O5(a, "Request complete");
            a.i = !1;
            try {
                var b = a.getStatus();
                a:switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = g.Sg(1, String(a.D));
                        if (!f && g.u.self && g.u.self.location) {
                            var k = g.u.self.location.protocol;
                            f = k.substr(0, k.length - 1)
                        }
                        e = !gqa.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    a.u = 6;
                    try {
                        var l = 2 < T5(a) ? a.g.statusText : ""
                    } catch (m) {
                        l = ""
                    }
                    a.l = l + " [" + a.getStatus() + "]";
                    Q5(a)
                }
            } finally {
                R5(a)
            }
        }
    }, V5 = function (a) {
        g.Sf.call(this);
        this.headers = new g.Zm;
        this.M = a || null;
        this.i = !1;
        this.P = this.g = null;
        this.Y = this.D = "";
        this.u = 0;
        this.l = "";
        this.o = this.aa = this.C = this.R = !1;
        this.A = 0;
        this.F = null;
        this.X = "";
        this.I = this.T = !1
    }, W5 = function (a) {
        try {
            return a.g ? a.g.responseText : ""
        } catch (b) {
            return ""
        }
    }, hqa = function (a, b) {
        var c = [];
        g.Ok(b, function (d) {
            try {
                var e = g.Xo.prototype.i.call(this, d, !0)
            } catch (f) {
                if ("Storage: Invalid value was encountered" == f) return;
                throw f;
            }
            g.Ca(e) ? g.Wo(e) && c.push(d) : c.push(d)
        }, a);
        return c
    }, iqa = function (a, b) {
        var c = hqa(a, b);
        (0, g.y)(c, function (d) {
            g.Xo.prototype.remove.call(this, d)
        }, a)
    }, X5 = function (a) {
        if (a.fd) {
            if (a.fd.locationOverrideToken) return {locationOverrideToken: a.fd.locationOverrideToken};
            if (null != a.fd.latitudeE7 && null != a.fd.longitudeE7) return {
                latitudeE7: a.fd.latitudeE7,
                longitudeE7: a.fd.longitudeE7
            }
        }
        return null
    }, jqa = function (a, b) {
        g.$a(a, b) || a.push(b)
    }, Y5 = function (a) {
        var b = 0, c;
        for (c in a) b++;
        return b
    }, Z5 = function (a, b) {
        var c = b instanceof g.xc ? b : g.Dc(b, /^data:image\//i.test(b));
        a.src = g.yc(c)
    }, kqa = function (a) {
        try {
            return g.u.JSON.parse(a)
        } catch (b) {
        }
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {
        }
        throw Error("Invalid JSON string: " + a);
    }, lqa = function (a, b, c, d) {
        var e = new g.bn(null, void 0);
        a && g.cn(e, a);
        b && g.dn(e, b);
        c && g.en(e, c);
        d && (e.i = d);
        return e
    }, $5 = function (a) {
        if (g.u.JSON) try {
            return g.u.JSON.parse(a)
        } catch (b) {
        }
        return kqa(a)
    }, a6 = function () {
        this.g = [];
        this.i = []
    }, b6 = function (a, b) {
        g.bq[a] = !0;
        var c = g.$p();
        c && c.publish.apply(c, arguments);
        g.bq[a] = !1
    }, c6 = function (a) {
        this.app = this.name = this.id = "";
        this.type = "REMOTE_CONTROL";
        this.obfuscatedGaiaId = this.avatar = this.username = "";
        this.l = !1;
        this.capabilities = new Set;
        this.experiments = new Set;
        this.theme = "u";
        new g.Zm;
        this.g = this.i = "";
        a && (this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", mqa(this, a.capabilities || ""), nqa(this, a.experiments || ""), this.i = a.remoteControllerUrl || "", this.g = a.localChannelEncryptionKey ||
            "")
    }, mqa = function (a, b) {
        a.capabilities.clear();
        (0, g.Xd)(b.split(","), g.Qa(bqa, oqa)).forEach(function (c) {
            a.capabilities.add(c)
        })
    }, nqa = function (a, b) {
        a.experiments.clear();
        b.split(",").forEach(function (c) {
            a.experiments.add(c)
        })
    }, d6 = function (a) {
        a = a || {};
        this.name = a.name || "";
        this.id = a.id || a.screenId || "";
        this.token = a.token || a.loungeToken || "";
        this.uuid = a.uuid || a.dialId || ""
    }, e6 = function (a, b) {
        return !!b && (a.id == b || a.uuid == b)
    }, f6 = function (a) {
        return {
            name: a.name,
            screenId: a.id, loungeToken: a.token, dialId: a.uuid
        }
    }, pqa = function (a) {
        return new d6(a)
    }, g6 = function (a) {
        return g.Ka(a) ? (0, g.ge)(a, pqa) : []
    }, h6 = function (a) {
        return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + (a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + "}" : "null"
    }, i6 = function (a) {
        return g.Ka(a) ? "[" + (0, g.ge)(a, h6).join(",") + "]" : "null"
    }, j6 = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    }, qqa = function (a) {
        return (0, g.ge)(a, function (b) {
            return {
                key: b.id,
                name: b.name
            }
        })
    }, k6 = function (a, b) {
        return g.Xa(a, function (c) {
            return c || b ? !c != !b ? !1 : c.id == b.id : !0
        })
    }, l6 = function (a, b) {
        return g.Xa(a, function (c) {
            return e6(c, b)
        })
    }, m6 = function (a) {
        try {
            var b = (0, g.wt)(), c = (0, g.vt)();
            b && b.remove(a);
            c && c.remove(a)
        } catch (d) {
        }
    }, rqa = function () {
        var a = (0, g.vt)();
        a && iqa(a, a.g.mf(!0))
    }, n6 = function () {
        var a = g.zt("yt-remote-connected-devices") || [];
        g.qb(a);
        return a
    }, sqa = function (a) {
        if (0 == a.length) return [];
        var b = a[0].indexOf("#"), c = -1 == b ? a[0] : a[0].substring(0, b);
        return (0, g.ge)(a, function (d, e) {
            return 0 == e ? d : d.substring(c.length)
        })
    }, o6 = function (a) {
        g.xt("yt-remote-connected-devices", a, 86400)
    }, q6 = function () {
        if (p6) return p6;
        var a = g.zt("yt-remote-device-id");
        a || (a = j6(), g.xt("yt-remote-device-id", a, 31536E3));
        for (var b = n6(), c = 1, d = a; g.$a(b, d);) c++, d = a + "#" + c;
        return p6 = d
    }, r6 = function () {
        var a = n6(), b = q6();
        g.$a(a, b);
        g.At() && g.sb(a, b);
        a = sqa(a);
        if (0 == a.length) try {
            g.ys("remote_sid")
        } catch (c) {
        } else try {
            g.xs("remote_sid", a.join(","), -1)
        } catch (c) {
        }
    }, s6 = function () {
        return g.zt("yt-remote-session-browser-channel")
    }, t6 = function () {
        return g.zt("yt-remote-local-screens") || []
    }, u6 = function () {
        g.xt("yt-remote-lounge-token-expiration", !0, 86400)
    }, tqa = function (a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = (0, g.ge)(t6(), function (d) {
            return d.loungeToken
        }), c = (0, g.ge)(a, function (d) {
            return d.loungeToken
        });
        (0, g.lj)(c, function (d) {
            return !g.$a(b, d)
        }) && u6();
        g.xt("yt-remote-local-screens", a, 31536E3)
    }, uqa = function (a, b) {
        g.xt("yt-remote-session-browser-channel", a);
        g.xt("yt-remote-session-screen-id", b);
        var c = n6(), d = q6();
        g.$a(c, d) || c.push(d);
        o6(c);
        r6()
    }, v6 = function (a) {
        a || (m6("yt-remote-session-screen-id"), m6("yt-remote-session-video-id"));
        r6();
        a = n6();
        g.db(a, q6());
        o6(a)
    }, x6 = function () {
        if (!w6) {
            var a = g.gp();
            a && (w6 = new g.Ro(a))
        }
        return w6 ? !!w6.get("yt-remote-use-staging-server") : !1
    }, y6 = function (a) {
        return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
    }, z6 = function () {
        return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
    }, B6 = function (a) {
        a.length ? A6(a.shift(), function () {
            B6(a)
        }) : C6()
    }, vqa = function (a) {
        return "chrome-extension://" + a + "/cast_sender.js"
    }, A6 = function (a, b, c) {
        var d = document.createElement("script");
        d.onerror = b;
        c && (d.onload = c);
        d.src = a;
        (document.head || document.documentElement).appendChild(d)
    }, C6 = function () {
        var a = z6();
        a && a(!1, "No cast extension found")
    }, D6 = function () {
        if (wqa) {
            var a = 2, b = z6(), c = function () {
                a--;
                0 == a && b && b(!0)
            };
            window.__onGCastApiAvailable = c;
            A6("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", C6, c)
        }
    }, xqa = function () {
        D6();
        var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
        B6(["//www.gstatic.com/eureka/clank/" + (a ? parseInt(a[1], 10) : 0) + "/cast_sender.js", "//www.gstatic.com/eureka/clank/cast_sender.js"])
    }, E6 = function (a, b, c) {
        g.A.call(this);
        this.A = null != c ? (0, g.x)(a, c) : a;
        this.Yc = b;
        this.u = (0, g.x)(this.tD, this);
        this.g = !1;
        this.i = 0;
        this.l = this.Aa = null;
        this.o = []
    }, F6 = function () {
    }, G6 = function (a, b, c, d) {
        this.g = a;
        this.l = b;
        this.C = c;
        this.A = d || 1;
        this.o = 45E3;
        this.ca = new g.qn(this);
        this.i = new g.Fg;
        this.i.setInterval(250)
    }, I6 = function (a, b, c) {
        a.Yh = 1;
        a.Yf = L5(b.clone());
        a.sh = c;
        a.u = !0;
        H6(a, null)
    }, J6 = function (a, b, c, d, e) {
        a.Yh = 1;
        a.Yf = L5(b.clone());
        a.sh = null;
        a.u = c;
        e && (a.dA = !1);
        H6(a, d)
    }, H6 = function (a, b) {
        a.Ii = (0, g.D)();
        K6(a);
        a.Eg = a.Yf.clone();
        M5(a.Eg, "t", a.A);
        a.nl = 0;
        a.uc = a.g.Gp(a.g.Vk() ? b : null);
        0 < a.kq && (a.Xn = new g.Gl((0, g.x)(a.jB, a, a.uc), a.kq));
        a.ca.da(a.uc, "readystatechange", a.jM);
        var c = a.Zg ? g.bc(a.Zg) : {};
        a.sh ? (a.Eo = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.uc.send(a.Eg, a.Eo, a.sh, c)) : (a.Eo = "GET", a.dA && !g.Nd && (c.Connection = "close"), a.uc.send(a.Eg, a.Eo, null, c));
        a.g.Ae(1)
    }, R6 = function (a, b, c) {
        for (var d = !0; !a.Og && a.nl < c.length;) {
            var e = yqa(a, c);
            if (e == L6) {
                4 == b && (a.qg = 4, M6(15), d = !1);
                break
            } else if (e == N6) {
                a.qg = 4;
                M6(16);
                d = !1;
                break
            } else O6(a, e)
        }
        4 == b && 0 == c.length && (a.qg = 1, M6(17), d = !1);
        a.De = a.De && d;
        d || (P6(a), Q6(a))
    }, yqa = function (a, b) {
        var c = a.nl, d = b.indexOf("\n", c);
        if (-1 == d) return L6;
        c = Number(b.substring(c, d));
        if (isNaN(c)) return N6;
        d += 1;
        if (d + c > b.length) return L6;
        var e = b.substr(d, c);
        a.nl = d + c;
        return e
    }, U6 = function (a, b) {
        a.Ii = (0, g.D)();
        K6(a);
        var c = b ? window.location.hostname : "";
        a.Eg = a.Yf.clone();
        g.kn(a.Eg, "DOMAIN", c);
        g.kn(a.Eg, "t", a.A);
        try {
            a.He = new ActiveXObject("htmlfile")
        } catch (n) {
            P6(a);
            a.qg = 7;
            M6(22);
            Q6(a);
            return
        }
        var d = "<html><body>";
        if (b) {
            for (var e = "", f = 0; f < c.length; f++) {
                var k = c.charAt(f);
                if ("<" == k) e += "\\x3c"; else if (">" == k) e += "\\x3e"; else {
                    var l = k;
                    if (l in S6) k = S6[l]; else if (l in T6) k = S6[l] = T6[l]; else {
                        var m = l.charCodeAt(0);
                        if (31 < m && 127 > m) k = l; else {
                            if (256 > m) {
                                if (k = "\\x", 16 > m || 256 < m) k += "0"
                            } else k = "\\u", 4096 > m && (k += "0");
                            k += m.toString(16).toUpperCase()
                        }
                        k =
                            S6[l] = k
                    }
                    e += k
                }
            }
            d += '<script>document.domain="' + e + '"\x3c/script>'
        }
        c = g.Rc(g.qc("b/12014412"), d + "</body></html>");
        a.He.open();
        a.He.write(g.Mc(c));
        a.He.close();
        a.He.parentWindow.m = (0, g.x)(a.zL, a);
        a.He.parentWindow.d = (0, g.x)(a.jz, a, !0);
        a.He.parentWindow.rpcClose = (0, g.x)(a.jz, a, !1);
        c = a.He.createElement("DIV");
        a.He.parentWindow.document.body.appendChild(c);
        d = g.Cc(a.Eg.toString());
        d = g.Yc(g.zc(d));
        d = g.Rc(g.qc("b/12014412"), '<iframe src="' + d + '"></iframe>');
        g.Sc(c, d);
        a.g.Ae(1)
    }, K6 = function (a) {
        a.ot = (0, g.D)() + a.o;
        V6(a, a.o)
    }, V6 = function (a, b) {
        if (null != a.Yi) throw Error("WatchDog timer not null");
        a.Yi = W6((0, g.x)(a.JL, a), b)
    }, X6 = function (a) {
        a.Yi && (g.u.clearTimeout(a.Yi), a.Yi = null)
    }, Q6 = function (a) {
        a.g.jw() || a.Og || a.g.Kn(a)
    }, P6 = function (a) {
        X6(a);
        g.qf(a.Xn);
        a.Xn = null;
        a.i.stop();
        g.sn(a.ca);
        if (a.uc) {
            var b = a.uc;
            a.uc = null;
            b.abort();
            b.dispose()
        }
        a.He && (a.He = null)
    }, O6 = function (a, b) {
        try {
            a.g.dz(a, b), a.g.Ae(4)
        } catch (c) {
        }
    }, Z6 = function (a, b, c, d, e) {
        if (0 == d) c(!1);
        else {
            var f = e || 0;
            d--;
            Y6(a, b, function (k) {
                k ? c(!0) : g.u.setTimeout(function () {
                    Z6(a, b, c, d, f)
                }, f)
            })
        }
    }, Y6 = function (a, b, c) {
        var d = new Image;
        d.onload = function () {
            try {
                $6(d), c(!0)
            } catch (e) {
            }
        };
        d.onerror = function () {
            try {
                $6(d), c(!1)
            } catch (e) {
            }
        };
        d.onabort = function () {
            try {
                $6(d), c(!1)
            } catch (e) {
            }
        };
        d.ontimeout = function () {
            try {
                $6(d), c(!1)
            } catch (e) {
            }
        };
        g.u.setTimeout(function () {
            if (d.ontimeout) d.ontimeout()
        }, b);
        Z5(d, a)
    }, $6 = function (a) {
        a.onload = null;
        a.onerror = null;
        a.onabort = null;
        a.ontimeout = null
    }, a7 = function (a) {
        this.g = a;
        this.i = new F6
    }, c7 = function (a) {
        var b = b7(a.g, a.lj, "/mail/images/cleardot.gif");
        L5(b);
        Z6(b.toString(), 5E3, (0, g.x)(a.AC, a), 3, 2E3);
        a.Ae(1)
    }, e7 = function (a) {
        var b = a.g.F;
        if (null != b) M6(5), b ? (M6(11), d7(a.g, a, !1)) : (M6(12), d7(a.g, a, !0)); else if (a.Gd = new G6(a, void 0, void 0, void 0), a.Gd.Zg = a.iq, b = a.g, b = b7(b, b.Vk() ? a.Tj : null, a.jq), M6(5), !g.Ld || g.od(10)) M5(b, "TYPE", "xmlhttp"), J6(a.Gd, b, !1, a.Tj, !1); else {
            M5(b, "TYPE", "html");
            var c = a.Gd;
            a = !!a.Tj;
            c.Yh = 3;
            c.Yf = L5(b.clone());
            U6(c, a)
        }
    }, f7 = function (a, b, c) {
        this.g = 1;
        this.i = [];
        this.o = [];
        this.u = new F6;
        this.D = a || null;
        this.F = null != b ? b : null;
        this.A = c || !1
    }, zqa = function (a, b) {
        this.g = a;
        this.map = b;
        this.context = null
    }, g7 = function (a) {
        g.sf.call(this, "statevent", a)
    }, h7 = function (a, b) {
        g.sf.call(this, "timingevent", a);
        this.size = b
    }, i7 = function (a) {
        g.sf.call(this, "serverreachability", a)
    }, m7 = function (a) {
        j7(a);
        if (3 == a.g) {
            var b = a.zk++, c = a.om.clone();
            g.kn(c, "SID", a.l);
            g.kn(c, "RID", b);
            g.kn(c, "TYPE", "terminate");
            k7(a, c);
            b = new G6(a, a.l, b, void 0);
            b.Yh = 2;
            b.Yf = L5(c.clone());
            Z5(new Image, b.Yf.toString());
            b.Ii = (0, g.D)();
            K6(b)
        }
        l7(a)
    }, o7 = function (a) {
        a.SC(1, 0);
        a.om = b7(a, null, a.hq);
        n7(a)
    }, j7 = function (a) {
        a.gg && (a.gg.abort(), a.gg = null);
        a.Vb && (a.Vb.cancel(), a.Vb = null);
        a.qf && (g.u.clearTimeout(a.qf), a.qf = null);
        p7(a);
        a.Dd && (a.Dd.cancel(), a.Dd = null);
        a.ng && (g.u.clearTimeout(a.ng), a.ng = null)
    }, q7 = function (a, b) {
        if (0 == a.g) throw Error("Invalid operation: sending map when state is closed");
        a.i.push(new zqa(a.PH++, b));
        2 != a.g && 3 != a.g || n7(a)
    }, n7 = function (a) {
        a.Dd || a.ng || (a.ng = W6((0, g.x)(a.iz, a), 0), a.Rh = 0)
    }, t7 = function (a, b) {
        if (1 == a.g) {
            if (!b) {
                a.zk = Math.floor(1E5 * Math.random());
                var c = a.zk++, d = new G6(a, "", c, void 0);
                d.Zg = null;
                var e = r7(a), f = a.om.clone();
                g.kn(f, "RID", c);
                g.kn(f, "CVER", "1");
                k7(a, f);
                I6(d, f, e);
                a.Dd = d;
                a.g = 2
            }
        } else 3 == a.g && (b ? s7(a, b) : 0 == a.i.length || a.Dd || s7(a))
    }, s7 = function (a, b) {
        if (b) if (6 < a.Pg) {
            a.i = a.o.concat(a.i);
            a.o.length = 0;
            var c = a.zk - 1;
            var d = r7(a)
        } else c = b.C, d = b.sh; else c = a.zk++, d = r7(a);
        var e = a.om.clone();
        g.kn(e, "SID", a.l);
        g.kn(e, "RID", c);
        g.kn(e, "AID", a.li);
        k7(a, e);
        c = new G6(a, a.l, c, a.Rh + 1);
        c.Zg = null;
        c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
        a.Dd = c;
        I6(c, e, d)
    }, k7 = function (a, b) {
        if (a.Vc) {
            var c = a.Vc.Kv();
            c && g.Kb(c, function (d, e) {
                g.kn(b, e, d)
            })
        }
    }, r7 = function (a) {
        var b = Math.min(a.i.length, 1E3), c = ["count=" + b];
        if (6 < a.Pg && 0 < b) {
            var d = a.i[0].g;
            c.push("ofs=" + d)
        } else d = 0;
        for (var e = 0; e < b; e++) {
            var f = a.i[e].g, k = a.i[e].map;
            f = 6 >= a.Pg ? e : f - d;
            try {
                g.Kb(k, function (l, m) {
                    c.push("req" + f + "_" + m + "=" + encodeURIComponent(l))
                })
            } catch (l) {
                c.push("req" + f + "_type=" + encodeURIComponent("_badmap"))
            }
        }
        a.o = a.o.concat(a.i.splice(0, b));
        return c.join("&")
    }, u7 = function (a) {
        a.Vb || a.qf || (a.C = 1, a.qf = W6((0, g.x)(a.hz, a), 0), a.Kh = 0)
    }, w7 = function (a) {
        if (a.Vb || a.qf || 3 <= a.Kh) return !1;
        a.C++;
        a.qf = W6((0, g.x)(a.hz, a), v7(a, a.Kh));
        a.Kh++;
        return !0
    }, d7 = function (a, b, c) {
        a.Co = c;
        a.Me = b.Af;
        a.A || o7(a)
    }, p7 = function (a) {
        null != a.Tg && (g.u.clearTimeout(a.Tg), a.Tg = null)
    }, v7 = function (a, b) {
        var c = 5E3 + Math.floor(1E4 * Math.random());
        a.isActive() || (c *= 2);
        return c * b
    }, y7 = function (a, b) {
        if (2 == b || 9 == b) {
            var c = null;
            a.Vc && (c = null);
            var d = (0, g.x)(a.PM, a);
            c || (c = new g.bn("//www.google.com/images/cleardot.gif"), L5(c));
            Y6(c.toString(), 1E4, d)
        } else M6(2);
        x7(a, b)
    }, x7 = function (a, b) {
        a.g = 0;
        a.Vc && a.Vc.Mu(b);
        l7(a);
        j7(a)
    }, l7 = function (a) {
        a.g = 0;
        a.Me = -1;
        if (a.Vc) if (0 == a.o.length && 0 == a.i.length) a.Vc.tp(); else {
            g.gb(a.o);
            var b = g.gb(a.i);
            a.o.length = 0;
            a.i.length = 0;
            a.Vc.tp(b)
        }
    }, b7 = function (a, b, c) {
        var d = g.ln(c);
        if ("" != d.g) b && g.dn(d, b + "." + d.g), g.en(d, d.u); else {
            var e = window.location;
            d = lqa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
        }
        a.Bj && g.Kb(a.Bj, function (f, k) {
            g.kn(d, k, f)
        });
        g.kn(d, "VER", a.Pg);
        k7(a, d);
        return d
    }, W6 = function (a, b) {
        if (!g.Ma(a)) throw Error("Fn must not be null and must be a function");
        return g.u.setTimeout(function () {
            a()
        }, b)
    }, M6 = function (a) {
        z7.dispatchEvent(new g7(z7, a))
    }, A7 = function () {
    }, Aqa = function (a, b) {
        this.action = a;
        this.params = b || {}
    }, B7 = function (a, b) {
        g.A.call(this);
        this.g = new g.J(this.rL, 0, this);
        g.C(this, this.g);
        this.Yc = 5E3;
        this.i = 0;
        if (g.Ma(a)) b && (a = (0, g.x)(a, b)); else if (a && g.Ma(a.handleEvent)) a = (0, g.x)(a.handleEvent, a); else throw Error("Invalid listener argument");
        this.l = a
    }, C7 = function (a, b, c) {
        this.H = a;
        this.A = b;
        this.l = new g.Qo;
        this.i = new B7(this.tM, this);
        this.g = null;
        this.ib = !1;
        this.u = null;
        this.F = "";
        this.D = this.o = 0;
        this.C = [];
        this.I = c || !1
    }, Bqa = function (a) {
        return {
            firstTestResults: [""],
            secondTestResults: !a.g.Co, sessionId: a.g.l, arrayId: a.g.li
        }
    }, D7 = function (a, b) {
        a.D = b || 0;
        a.i.stop();
        a.g && (3 == a.g.g && t7(a.g), m7(a.g));
        a.D = 0
    }, E7 = function (a) {
        return !!a.g && 3 == a.g.g
    }, Cqa = function (a, b) {
        (a.A.loungeIdToken = b) || a.i.stop()
    }, F7 = function (a) {
        this.port = this.domain = "";
        this.g = "/api/lounge";
        this.i = !0;
        a = a || document.location.href;
        var b = Number(g.Sg(4, a)) || "";
        b && (this.port = ":" + b);
        this.domain = g.Tg(a) || "";
        a = g.Ib;
        0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Hb(a, "10.0") && (this.i = !1))
    }, G7 = function (a, b) {
        var c = a.g;
        if (g.Ca(void 0) ? 0 : a.i) c = "https://" + a.domain + a.port + a.g;
        return g.bh(c + b, {})
    }, H7 = function (a, b, c, d, e) {
        a = {
            format: "JSON",
            method: "POST",
            context: a,
            timeout: 5E3,
            withCredentials: !1,
            onSuccess: g.Qa(a.o, d, !0),
            onError: g.Qa(a.l, e),
            ne: g.Qa(a.u, e)
        };
        c && (a.vb = c, a.headers = {"Content-Type": "application/x-www-form-urlencoded"});
        return g.Uq(b, a)
    }, Dqa = function () {
        var a = I7;
        J7();
        K7.push(a);
        L7(K7)
    }, M7 = function (a, b) {
        J7();
        var c = K7, d = Eqa(a, String(b));
        0 == c.length ? Fqa(d) : (L7(c), (0, g.y)(c, function (e) {
            e(d)
        }))
    }, J7 = function () {
        K7 || (K7 = g.w("yt.mdx.remote.debug.handlers_") || [], g.Ga("yt.mdx.remote.debug.handlers_", K7, void 0))
    }, Fqa = function (a) {
        var b = (N7 + 1) % 50;
        N7 = b;
        O7[b] = a;
        P7 || (P7 = 49 == b)
    }, L7 = function (a) {
        var b = O7;
        if (b[0]) {
            var c = N7, d = P7 ? c : -1;
            do {
                d = (d + 1) % 50;
                var e = b[d];
                (0, g.y)(a, function (f) {
                    f(e)
                })
            } while (d != c);
            O7 = Array(50);
            N7 = -1;
            P7 = !1
        }
    }, Eqa = function (a, b) {
        var c = ((0, g.D)() - Gqa) / 1E3;
        c.toFixed && (c = c.toFixed(3));
        var d = [];
        d.push("[", c + "s", "] ");
        d.push("[", "yt.mdx.remote", "] ");
        d.push(a + ": " + b, "\n");
        return d.join("")
    }, Q7 = function (a) {
        g.N.call(this);
        this.C = a;
        this.g = []
    }, R7 = function (a, b) {
        var c = a.get(b.uuid) || a.get(b.id);
        if (c) {
            var d = c.name;
            c.id = b.id || c.id;
            c.name = b.name;
            c.token = b.token;
            c.uuid = b.uuid || c.uuid;
            return c.name != d
        }
        a.g.push(b);
        return !0
    }, Hqa = function (a, b) {
        var c = a.g.length != b.length;
        a.g = (0, g.Xd)(a.g, function (f) {
            return !!k6(b, f)
        });
        for (var d = 0, e = b.length; d < e; d++) c = R7(a, b[d]) || c;
        return c
    }, Iqa = function (a, b) {
        var c = a.g.length;
        a.g = (0, g.Xd)(a.g, function (d) {
            return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
        });
        return a.g.length < c
    }, S7 = function (a, b, c, d) {
        g.N.call(this);
        this.A = a;
        this.u = b;
        this.l = c;
        this.o = d;
        this.i = 0;
        this.g = null;
        this.Aa = NaN
    }, U7 = function (a) {
        Q7.call(this, "LocalScreenService");
        this.l = a;
        this.i = NaN;
        T7(this);
        this.info("Initializing with " + i6(this.g))
    }, V7 = function (a) {
        if (a.g.length) {
            var b = (0, g.ge)(a.g, function (d) {
                return d.id
            }), c = G7(a.l, "/pairing/get_lounge_token_batch");
            H7(a.l, c, {screen_ids: b.join(",")}, (0, g.x)(a.DD, a), (0, g.x)(a.CD, a))
        }
    }, T7 = function (a) {
        var b = g6(t6());
        b = (0, g.Xd)(b, function (c) {
            return !c.uuid
        });
        return Hqa(a, b)
    }, W7 = function (a, b) {
        tqa((0, g.ge)(a.g, f6));
        b && u6()
    }, Y7 = function (a, b) {
        g.N.call(this);
        this.A = b;
        var c = g.zt("yt-remote-online-screen-ids") || "";
        c = c ? c.split(",") : [];
        for (var d = {}, e = this.A(), f = 0, k = e.length; f < k; ++f) {
            var l = e[f].id;
            d[l] = g.$a(c, l)
        }
        this.g = d;
        this.u = a;
        this.l = this.o = NaN;
        this.i = null;
        X7("Initialized with " + g.Kg(this.g))
    }, Jqa = function (a, b, c) {
        var d = G7(a.u, "/pairing/get_screen_availability");
        H7(a.u, d, {lounge_token: b.token}, (0, g.x)(function (e) {
            e = e.screens || [];
            for (var f = 0, k = e.length; f < k; ++f) if (e[f].loungeToken == b.token) {
                c("online" == e[f].status);
                return
            }
            c(!1)
        }, a), (0, g.x)(function () {
            c(!1)
        }, a))
    }, Z7 = function (a, b) {
        a:if (Y5(b) != Y5(a.g)) var c = !1;
        else {
            c = g.Rb(b);
            for (var d = 0, e = c.length; d < e; ++d) if (!a.g[c[d]]) {
                c = !1;
                break a
            }
            c = !0
        }
        c || (X7("Updated online screens: " + g.Kg(a.g)), a.g = b, a.N("screenChange"));
        Kqa(a)
    }, $7 = function (a) {
        isNaN(a.l) || g.Zp(a.l);
        a.l = g.Xp((0, g.x)(a.ys, a), 0 < a.o && a.o < (0, g.D)() ? 2E4 : 1E4)
    }, X7 = function (a) {
        M7("OnlineScreenService", a)
    }, Lqa = function (a) {
        var b = {};
        (0, g.y)(a.A(), function (c) {
            c.token ? b[c.token] = c.id : this.Hb("Requesting availability of screen w/o lounge token.")
        });
        return b
    }, Kqa = function (a) {
        a = g.Rb(g.Lb(a.g, function (b) {
            return b
        }));
        g.qb(a);
        a.length ? g.xt("yt-remote-online-screen-ids", a.join(","), 60) : m6("yt-remote-online-screen-ids")
    }, a8 = function (a) {
        Q7.call(this, "ScreenService");
        this.A = a;
        this.i = this.l = null;
        this.o = [];
        this.u = {};
        Mqa(this)
    }, Oqa = function (a, b, c, d, e, f) {
        a.info("getAutomaticScreenByIds " + c + " / " + b);
        c || (c = a.u[b]);
        var k = a.Qd();
        if (k = (c ? l6(k, c) : null) || l6(k, b)) {
            k.uuid = b;
            var l = b8(a, k);
            Jqa(a.i, l, function (m) {
                e(m ? l : null)
            })
        } else c ? Nqa(a, c, (0, g.x)(function (m) {
            var n = b8(this, new d6({
                name: d,
                screenId: c, loungeToken: m, dialId: b || ""
            }));
            Jqa(this.i, n, function (p) {
                e(p ? n : null)
            })
        }, a), f) : e(null)
    }, Pqa = function (a, b) {
        for (var c = 0, d = a.g.length; c < d; ++c) if (a.g[c].name == b) return a.g[c];
        return null
    }, Nqa = function (a, b, c, d) {
        a.info("requestLoungeToken_ for " + b);
        var e = {
            vb: {screen_ids: b}, method: "POST", context: a, onSuccess: function (f, k) {
                var l = k && k.screens || [];
                l[0] && l[0].screenId == b ? c(l[0].loungeToken) : d(Error("Missing lounge token in token response"))
            },
            onError: function () {
                d(Error("Request screen lounge token failed"))
            }
        };
        g.Uq(G7(a.A, "/pairing/get_lounge_token_batch"), e)
    }, Qqa = function (a) {
        a.g = a.l.Qd();
        var b = a.u, c = {}, d;
        for (d in b) c[b[d]] = d;
        b = 0;
        for (d = a.g.length; b < d; ++b) {
            var e = a.g[b];
            e.uuid = c[e.id] || ""
        }
        a.info("Updated manual screens: " + i6(a.g))
    }, Mqa = function (a) {
        c8(a);
        a.l = new U7(a.A);
        a.l.subscribe("screenChange", (0, g.x)(a.LD, a));
        Qqa(a);
        a.o = g6(g.zt("yt-remote-automatic-screen-cache") || []);
        c8(a);
        a.info("Initializing automatic screens: " + i6(a.o));
        a.i = new Y7(a.A, (0, g.x)(a.Qd, a, !0));
        a.i.subscribe("screenChange", (0, g.x)(function () {
            this.N("onlineScreenChange")
        }, a))
    }, b8 = function (a, b) {
        var c = a.get(b.id);
        c ? (c.uuid = b.uuid, b = c) : ((c = l6(a.o, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.o.push(b), g.xt("yt-remote-automatic-screen-cache", (0, g.ge)(a.o, f6)));
        c8(a);
        a.u[b.uuid] = b.id;
        g.xt("yt-remote-device-id-map", a.u, 31536E3);
        return b
    }, c8 = function (a) {
        a.u = g.zt("yt-remote-device-id-map") || {}
    }, d8 = function (a, b, c) {
        g.N.call(this);
        this.P = c;
        this.F = a;
        this.i = b;
        this.l = null
    }, e8 = function (a, b) {
        M7(a.P, b)
    }, f8 = function (a, b) {
        d8.call(this, a, b, "CastSession");
        this.g = null;
        this.o = 0;
        this.A = (0, g.x)(this.uN, this);
        this.u = (0, g.x)(this.UL, this);
        this.o = g.Xp((0, g.x)(function () {
            Rqa(this, null)
        }, this), 12E4)
    }, Sqa = function (a) {
        a.info("sendYoutubeMessage_: getMdxSessionStatus " + g.Kg(void 0));
        var b = {type: "getMdxSessionStatus"};
        a.g ? a.g.sendMessage("urn:x-cast:com.google.youtube.mdx", b, g.Ha, (0, g.x)(function () {
            e8(this, "Failed to send message: getMdxSessionStatus.")
        }, a)) : e8(a, "Sending yt message without session: " + g.Kg(b))
    }, Rqa = function (a, b) {
        g.Zp(a.o);
        if (b) {
            if (a.info("onConnectedScreenId_: Received screenId: " + b), !a.l || a.l.id != b) {
                var c = (0, g.x)(a.Mn, a), d = (0, g.x)(a.Td, a);
                a.Zv(b, c, d, 5)
            }
        } else a.Td(Error("Waiting for session status timed out."))
    }, g8 = function (a, b, c) {
        d8.call(this, a, b, "DialSession");
        this.o = this.D = null;
        this.H = "";
        this.M = c;
        this.u = null;
        this.C = g.Ha;
        this.A = NaN;
        this.I = (0, g.x)(this.xN, this);
        this.g = g.Ha
    }, Tqa = function (a) {
        a.g = a.F.oB(a.H, a.i.label, a.i.friendlyName, (0, g.x)(function (b) {
            this.g = g.Ha;
            this.Mn(b)
        }, a), (0, g.x)(function (b) {
            this.g = g.Ha;
            this.Td(b)
        }, a))
    }, Uqa = function (a) {
        var b = {};
        b.pairingCode = a.H;
        b.theme = a.M;
        if (a.u) {
            var c = a.u.currentTime || 0;
            b.v = a.u.videoId;
            b.t = c
        }
        x6() && (b.env_useStageMdx = 1);
        return g.$g(b)
    }, h8 = function (a, b) {
        d8.call(this, a, b, "ManualSession");
        this.g = g.Xp((0, g.x)(this.ni, this, null), 150)
    }, i8 = function (a, b, c, d) {
        g.N.call(this);
        this.i = a;
        this.C = b || "233637DE";
        this.A = c || "cl";
        this.D = d || !1;
        this.g = null;
        this.u = !1;
        this.l = [];
        this.o = (0, g.x)(this.AK, this)
    }, Vqa = function (a, b) {
        return b ? g.Xa(a.l, function (c) {
            return e6(b, c.label)
        }, a) : null
    }, j8 = function (a) {
        M7("Controller", a)
    }, I7 = function (a) {
        window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
    }, k8 = function (a) {
        return a.u || !!a.l.length || !!a.g
    }, l8 = function (a, b, c) {
        b != a.g && (g.qf(a.g), (a.g = b) ? (c ? a.N("yt-remote-cast2-receiver-resumed", b.i) : a.N("yt-remote-cast2-receiver-selected",
            b.i), b.subscribe("sessionScreen", (0, g.x)(a.gz, a, b)), b.l ? a.N("yt-remote-cast2-session-change", b.l) : c && a.g.ni(null)) : a.N("yt-remote-cast2-session-change", null))
    }, Wqa = function (a) {
        var b = a.i.nB(), c = a.g && a.g.i;
        a = (0, g.ge)(b, function (d) {
            c && e6(d, c.label) && (c = null);
            var e = d.uuid ? d.uuid : d.id, f = Vqa(this, d);
            f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
            return f
        }, a);
        c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
        return a
    }, bra = function (a, b, c, d, e, f, k) {
        Xqa() ? Yqa(b, e, f, k) && (n8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Zqa(a, c) : (window.__onGCastApiAvailable = function (l, m) {
            l ? Zqa(a, c) : (o8("Failed to load cast API: " + m), p8(!1), n8(!1), m6("yt-remote-cast-available"), m6("yt-remote-cast-receiver"), $qa(), c(!1))
        }, d ? g.jq("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") :
            0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? xqa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? C6() : (D6(), B6(ara.map(vqa))))) : m8("Cannot initialize because not running Chrome")
    }, $qa = function () {
        m8("dispose");
        var a = q8();
        a && a.dispose();
        g.Ga("yt.mdx.remote.cloudview.instance_", null, void 0);
        cra(!1);
        g.eq(r8);
        r8.length = 0
    }, s8 = function () {
        return !!g.zt("yt-remote-cast-installed")
    }, dra = function () {
        var a = g.zt("yt-remote-cast-receiver");
        return a ? a.friendlyName : null
    }, era = function () {
        m8("clearCurrentReceiver");
        m6("yt-remote-cast-receiver")
    }, fra = function () {
        return s8() ? q8() ? q8().getCastSession() : (o8("getCastSelector: Cast is not initialized."), null) : (o8("getCastSelector: Cast API is not installed!"), null)
    }, u8 = function () {
        s8() ? q8() ? t8() ? (m8("Requesting cast selector."), q8().requestSession()) : (m8("Wait for cast API to be ready to request the session."), r8.push(g.dq("yt-remote-cast2-api-ready", u8))) : o8("requestCastSelector: Cast is not initialized.") : o8("requestCastSelector: Cast API is not installed!")
    }, v8 =
        function (a, b) {
            t8() ? q8().setConnectedScreenStatus(a, b) : o8("setConnectedScreenStatus called before ready.")
        }, Xqa = function () {
        var a = 0 <= g.Ib.search(/ (CrMo|Chrome|CriOS)\//);
        return g.gx || a
    }, gra = function (a, b) {
        q8().init(a, b)
    }, Yqa = function (a, b, c, d) {
        var e = !1;
        q8() || (a = new i8(a, b, c, d), a.subscribe("yt-remote-cast2-availability-change", function (f) {
            g.xt("yt-remote-cast-available", f);
            b6("yt-remote-cast2-availability-change", f)
        }), a.subscribe("yt-remote-cast2-receiver-selected", function (f) {
            m8("onReceiverSelected: " + f.friendlyName);
            g.xt("yt-remote-cast-receiver", f);
            b6("yt-remote-cast2-receiver-selected", f)
        }), a.subscribe("yt-remote-cast2-receiver-resumed", function (f) {
            m8("onReceiverResumed: " + f.friendlyName);
            g.xt("yt-remote-cast-receiver", f)
        }), a.subscribe("yt-remote-cast2-session-change", function (f) {
            m8("onSessionChange: " + h6(f));
            f || m6("yt-remote-cast-receiver");
            b6("yt-remote-cast2-session-change", f)
        }), g.Ga("yt.mdx.remote.cloudview.instance_", a, void 0), e = !0);
        m8("cloudview.createSingleton_: " + e);
        return e
    }, q8 = function () {
        return g.w("yt.mdx.remote.cloudview.instance_")
    }, Zqa = function (a, b) {
        p8(!0);
        n8(!1);
        gra(a, function (c) {
            c ? (cra(!0), g.gq("yt-remote-cast2-api-ready")) : (o8("Failed to initialize cast API."), p8(!1), m6("yt-remote-cast-available"), m6("yt-remote-cast-receiver"), $qa());
            b(c)
        })
    }, m8 = function (a) {
        M7("cloudview", a)
    }, o8 = function (a) {
        M7("cloudview", a)
    }, p8 = function (a) {
        m8("setCastInstalled_ " + a);
        g.xt("yt-remote-cast-installed", a)
    }, t8 = function () {
        return !!g.w("yt.mdx.remote.cloudview.apiReady_")
    }, cra = function (a) {
        m8("setApiReady_ " + a);
        g.Ga("yt.mdx.remote.cloudview.apiReady_", a, void 0)
    }, n8 = function (a) {
        g.Ga("yt.mdx.remote.cloudview.initializing_", a, void 0)
    }, w8 = function (a) {
        this.index = -1;
        this.videoId = this.listId = "";
        this.volume = this.playerState = -1;
        this.muted = !1;
        this.audioTrackId = null;
        this.A = this.C = 0;
        this.g = null;
        this.hasNext = this.Ne = !1;
        this.F = this.D = this.i = this.o = 0;
        this.l = NaN;
        this.u = !1;
        this.reset(a)
    }, x8 = function (a) {
        a.audioTrackId = null;
        a.g = null;
        a.playerState = -1;
        a.Ne = !1;
        a.hasNext = !1;
        a.C = 0;
        a.A = (0, g.D)();
        a.o = 0;
        a.i = 0;
        a.D = 0;
        a.F = 0;
        a.l = NaN;
        a.u = !1
    }, y8 = function (a) {
        return 1 == a.playerState ? ((0, g.D)() - a.A) / 1E3 : 0
    }, z8 = function (a, b) {
        a.C = b;
        a.A = (0, g.D)()
    }, A8 = function (a) {
        switch (a.playerState) {
            case 1:
            case 1081:
                return ((0, g.D)() - a.A) / 1E3 + a.C;
            case -1E3:
                return 0
        }
        return a.C
    }, B8 = function (a, b, c) {
        var d = a.videoId;
        a.videoId = b;
        a.index = c;
        b != d && x8(a)
    }, C8 = function (a) {
        var b = {};
        b.index = a.index;
        b.listId = a.listId;
        b.videoId = a.videoId;
        b.playerState = a.playerState;
        b.volume = a.volume;
        b.muted = a.muted;
        b.audioTrackId = a.audioTrackId;
        b.trackData = g.cc(a.g);
        b.hasPrevious = a.Ne;
        b.hasNext = a.hasNext;
        b.playerTime = a.C;
        b.playerTimeAt = a.A;
        b.seekableStart = a.o;
        b.seekableEnd = a.i;
        b.duration = a.D;
        b.loadedTime = a.F;
        b.liveIngestionTime = a.l;
        return b
    }, E8 = function (a, b) {
        g.N.call(this);
        this.g = 0;
        this.o = a;
        this.A = [];
        this.u = new a6;
        this.l = this.i = null;
        this.F = (0, g.x)(this.xI, this);
        this.C = (0, g.x)(this.Ck, this);
        this.D = (0, g.x)(this.wI, this);
        this.H = (0, g.x)(this.LI, this);
        var c = 0;
        a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.wt, this), hra(this))) : c = 3;
        0 != c && (b ? this.wt(c) : g.Xp((0, g.x)(function () {
            this.wt(c)
        }, this), 0));
        var d = fra();
        d && D8(this, d);
        this.subscribe("yt-remote-cast2-session-change", this.H)
    }, F8 = function (a) {
        return new w8(a.o.getPlayerContextData())
    }, hra = function (a) {
        (0, g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "), function (b) {
            this.A.push(this.o.subscribe(b, g.Qa(this.xK, b), this))
        }, a)
    }, ira = function (a) {
        (0, g.y)(a.A, function (b) {
            this.o.unsubscribeByKey(b)
        }, a);
        a.A.length = 0
    }, G8 = function (a, b) {
        var c = a.u;
        50 > c.g.length + c.i.length && a.u.i.push(b)
    }, I8 = function (a, b, c) {
        var d = F8(a);
        z8(d, c);
        -1E3 != d.playerState && (d.playerState = b);
        H8(a, d)
    }, J8 = function (a, b, c) {
        a.o.sendMessage(b, c)
    }, H8 = function (a, b) {
        ira(a);
        a.o.setPlayerContextData(C8(b));
        hra(a)
    }, D8 = function (a, b) {
        a.l && (a.l.removeUpdateListener(a.F), a.l.removeMediaListener(a.C), a.Ck(null));
        a.l = b;
        a.l && (M7("CP", "Setting cast session: " + a.l.sessionId), a.l.addUpdateListener(a.F), a.l.addMediaListener(a.C), a.l.media.length && a.Ck(a.l.media[0]))
    }, jra = function (a) {
        var b = a.i.media, c = a.i.customData;
        if (b && c) {
            var d = F8(a);
            b.contentId != d.videoId && M7("CP", "Cast changing video to: " + b.contentId);
            d.videoId = b.contentId;
            d.playerState = c.playerState;
            z8(d, a.i.getEstimatedTime());
            H8(a, d)
        } else M7("CP", "No cast media video. Ignoring state update.")
    }, K8 = function (a, b, c) {
        return (0, g.x)(function (d) {
            this.Hb("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
            d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Hb("Retrying " + b + " using MDx browser channel."), J8(this, b, c))
        }, a)
    }, L8 = function (a, b, c) {
        g.N.call(this);
        this.u = NaN;
        this.I = !1;
        this.D = this.C = this.F = this.H = NaN;
        this.P = [];
        this.o = this.A = this.l = this.Oa = this.g = null;
        this.R = a;
        this.P.push(g.bs(window, "beforeunload", (0, g.x)(this.wD, this)));
        this.i = [];
        this.Oa = new w8;
        this.M = b.id;
        this.g = kra(this, c);
        this.g.subscribe("handlerOpened", this.BI, this);
        this.g.subscribe("handlerClosed", this.yI, this);
        this.g.subscribe("handlerError", this.zI, this);
        this.g.subscribe("handlerMessage", this.AI, this);
        Cqa(this.g, b.token);
        this.subscribe("remoteQueueChange", function () {
            var d = this.Oa.videoId;
            g.At() && g.xt("yt-remote-session-video-id", d)
        }, this)
    }, M8 = function (a) {
        M7("conn", a)
    }, kra = function (a, b) {
        return new C7(G7(a.R, "/bc"), b)
    }, N8 = function (a, b) {
        a.N("proxyStateChange", b)
    }, lra = function (a) {
        a.u = g.Xp((0, g.x)(function () {
            M8("Connecting timeout");
            this.Oh(1)
        }, a), 2E4)
    }, O8 = function (a) {
        g.Zp(a.u);
        a.u = NaN
    }, P8 = function (a) {
        g.Zp(a.H);
        a.H = NaN
    }, mra = function (a) {
        Q8(a);
        a.F = g.Xp((0, g.x)(function () {
            R8(this, "getNowPlaying")
        }, a), 2E4)
    }, Q8 = function (a) {
        g.Zp(a.F);
        a.F = NaN
    }, ora = function (a, b) {
        b && (O8(a), P8(a));
        b == (E7(a.g) && isNaN(a.u)) ? b && (N8(a, 1), R8(a, "getSubtitlesTrack")) : b ? (a.Xv() && a.Oa.reset(), N8(a, 1), R8(a, "getNowPlaying"), nra(a)) : a.Oh(1)
    }, pra = function (a, b) {
        var c = b.params.videoId;
        delete b.params.videoId;
        c == a.Oa.videoId && (g.Xb(b.params) ? a.Oa.g = null : a.Oa.g = b.params, a.N("remotePlayerChange"))
    }, qra = function (a, b) {
        var c = b.params.videoId || b.params.video_id, d = parseInt(b.params.currentIndex, 10);
        a.Oa.listId = b.params.listId || a.Oa.listId;
        B8(a.Oa, c, d);
        a.N("remoteQueueChange")
    }, sra = function (a, b) {
        b.params = b.params || {};
        qra(a, b);
        rra(a, b);
        a.N("autoplayDismissed")
    }, rra = function (a, b) {
        var c = parseInt(b.params.currentTime || b.params.current_time, 10);
        z8(a.Oa, isNaN(c) ? 0 : c);
        c = parseInt(b.params.state, 10);
        c = isNaN(c) ? -1 : c;
        -1 == c && -1E3 == a.Oa.playerState && (c = -1E3);
        a.Oa.playerState = c;
        c = Number(b.params.loadedTime);
        a.Oa.F = isNaN(c) ? 0 : c;
        c = Number(b.params.duration);
        a.Oa.D = isNaN(c) ? 0 : c;
        c = a.Oa;
        var d = Number(b.params.liveIngestionTime);
        c.l = d;
        c.u = isNaN(d) ? !1 : !0;
        c = a.Oa;
        d = Number(b.params.seekableStartTime);
        var e = Number(b.params.seekableEndTime);
        c.o = isNaN(d) ? 0 : d;
        c.i = isNaN(e) ? 0 : e;
        1 == a.Oa.playerState ? mra(a) : Q8(a);
        a.N("remotePlayerChange")
    }, tra = function (a, b) {
        if (-1E3 !=
            a.Oa.playerState) {
            var c = 1085;
            switch (parseInt(b.params.adState, 10)) {
                case 1:
                    c = 1081;
                    break;
                case 2:
                    c = 1084;
                    break;
                case 0:
                    c = 1083
            }
            a.Oa.playerState = c;
            c = parseInt(b.params.currentTime, 10);
            z8(a.Oa, isNaN(c) ? 0 : c);
            a.N("remotePlayerChange")
        }
    }, ura = function (a, b) {
        var c = "true" == b.params.muted;
        a.Oa.volume = parseInt(b.params.volume, 10);
        a.Oa.muted = c;
        a.N("remotePlayerChange")
    }, vra = function (a, b) {
        a.A = b.params.videoId;
        a.N("nowAutoplaying", parseInt(b.params.timeout, 10))
    }, wra = function (a, b) {
        var c = "true" == b.params.hasNext;
        a.Oa.Ne = "true" == b.params.hasPrevious;
        a.Oa.hasNext = c;
        a.N("previousNextChange")
    }, nra = function (a) {
        g.Zp(a.D);
        a.D = g.Xp((0, g.x)(a.Oh, a, 1), 864E5)
    }, R8 = function (a, b, c) {
        c ? M8("Sending: action=" + b + ", params=" + g.Kg(c)) : M8("Sending: action=" + b);
        a.g.sendMessage(b, c)
    }, S8 = function (a) {
        Q7.call(this, "ScreenServiceProxy");
        this.Xc = a;
        this.i = [];
        this.i.push(this.Xc.$_s("screenChange", (0, g.x)(this.sN, this)));
        this.i.push(this.Xc.$_s("onlineScreenChange", (0, g.x)(this.cK, this)))
    }, Bra = function (a) {
        var b = {
            device: "Desktop",
            app: "youtube-desktop"
        };
        b = g.Pp("MDX_CONFIG") || b;
        rqa();
        r6();
        T8 || (T8 = new F7(b ? b.loungeApiHost : void 0), x6() && (T8.g = "/api/loungedev"));
        U8 || (U8 = g.w("yt.mdx.remote.deferredProxies_") || [], g.Ga("yt.mdx.remote.deferredProxies_", U8, void 0));
        xra();
        var c = V8();
        if (!c) {
            var d = new a8(T8);
            g.Ga("yt.mdx.remote.screenService_", d, void 0);
            c = V8();
            var e = !1, f = void 0, k = void 0, l = !1;
            b && (e = !!b.loadCastApiSetupScript, f = b.appId, k = b.theme, l = !!b.disableDial);
            bra(a, d, function (m) {
                m ? W8() && v8(W8(), "YouTube TV") : d.subscribe("onlineScreenChange",
                    function () {
                        b6("yt-remote-receiver-availability-change")
                    })
            }, e, f, k, l)
        }
        b && !g.w("yt.mdx.remote.initialized_") && (g.Ga("yt.mdx.remote.initialized_", !0, void 0), X8("Initializing: " + g.Kg(b)), Y8.push(g.dq("yt-remote-cast2-availability-change", function () {
            b6("yt-remote-receiver-availability-change")
        })), Y8.push(g.dq("yt-remote-cast2-receiver-selected", function () {
            Z8(null);
            b6("yt-remote-auto-connect", "cast-selector-receiver")
        })), Y8.push(g.dq("yt-remote-cast2-receiver-resumed", function () {
            b6("yt-remote-receiver-resumed", "cast-selector-receiver")
        })), Y8.push(g.dq("yt-remote-cast2-session-change", yra)), Y8.push(g.dq("yt-remote-connection-change", function (m) {
            m ? v8(W8(), "YouTube TV") : $8() || (v8(null, null), era())
        })), a = a9(), b.isAuto && (a.id += "#dial"), g.Lq("desktop_enable_autoplay") && (a.capabilities = ["atp"]), a.name = b.device, a.app = b.app, (k = b.theme) && (a.theme = k), X8(" -- with channel params: " +
            g.Kg(a)), zra(a), c.start(), W8() || Ara())
    }, Dra = function () {
        var a = Cra();
        s8() && g.zt("yt-remote-cast-available") && a.push({key: "cast-selector-receiver", name: "Cast..."});
        return a
    }, Cra = function () {
        var a = V8().Xc.$_gos();
        var b = b9();
        b && c9() && (k6(a, b) || a.push(b));
        return qqa(a)
    }, d9 = function () {
        var a = Era();
        !a && s8() && dra() && (a = {key: "cast-selector-receiver", name: dra()});
        return a
    }, Era = function () {
        var a = Cra(), b = b9();
        b || (b = $8());
        return g.Xa(a, function (c) {
            return b && e6(b, c.key) ? !0 : !1
        })
    }, b9 = function () {
        var a = W8();
        if (!a) return null;
        var b = V8().Qd();
        return l6(b, a)
    }, yra = function (a) {
        X8("remote.onCastSessionChange_: " + h6(a));
        if (a) {
            var b = b9();
            b && b.id == a.id ? v8(b.id, "YouTube TV") : (b && e9(), f9(a, 1))
        } else c9() && e9()
    }, e9 = function () {
        t8() ? q8().stopSession() : o8("stopSession called before API ready.");
        var a = c9();
        a && (a.disconnect(1), g9(null))
    }, h9 = function () {
        var a = c9();
        return !!a && 3 != a.getProxyState()
    }, X8 = function (a) {
        M7("remote", a)
    }, V8 = function () {
        if (!i9) {
            var a = g.w("yt.mdx.remote.screenService_");
            i9 = a ? new S8(a) : null
        }
        return i9
    }, W8 = function () {
        return g.w("yt.mdx.remote.currentScreenId_")
    }, Fra = function (a) {
        g.Ga("yt.mdx.remote.currentScreenId_", a, void 0)
    }, Gra = function () {
        return g.w("yt.mdx.remote.connectData_")
    }, Z8 = function (a) {
        g.Ga("yt.mdx.remote.connectData_", a, void 0)
    }, c9 = function () {
        return g.w("yt.mdx.remote.connection_")
    }, g9 = function (a) {
        var b = c9();
        Z8(null);
        a || Fra("");
        g.Ga("yt.mdx.remote.connection_", a, void 0);
        U8 && ((0, g.y)(U8, function (c) {
            c(a)
        }), U8.length = 0);
        b && !a ? b6("yt-remote-connection-change", !1) : !b && a && b6("yt-remote-connection-change", !0)
    }, $8 = function () {
        var a = g.At();
        if (!a) return null;
        var b = V8().Qd();
        return l6(b, a)
    }, f9 = function (a, b) {
        b9() && b9();
        if (j9) k9 = a; else {
            Fra(a.id);
            var c = new L8(T8, a, a9());
            c.connect(b, Gra());
            c.subscribe("beforeDisconnect", function (d) {
                b6("yt-remote-before-disconnect", d)
            });
            c.subscribe("beforeDispose", function () {
                c9() && g9(null)
            });
            g9(c)
        }
    }, Ara = function () {
        var a = $8();
        a ? (X8("Resume connection to: " + h6(a)), f9(a, 0)) : (v6(), era(), X8("Skipping connecting because no session screen found."))
    }, xra = function () {
        var a = a9();
        if (g.Xb(a)) {
            a = q6();
            var b = g.zt("yt-remote-session-name") || "", c = g.zt("yt-remote-session-app") || "";
            a = {device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3};
            g.Ga("yt.mdx.remote.channelParams_", a, void 0)
        }
    }, a9 = function () {
        return g.w("yt.mdx.remote.channelParams_") || {}
    }, zra = function (a) {
        a ? (g.xt("yt-remote-session-app", a.app), g.xt("yt-remote-session-name", a.name)) : (m6("yt-remote-session-app"), m6("yt-remote-session-name"));
        g.Ga("yt.mdx.remote.channelParams_", a, void 0)
    }, l9 = function (a, b, c) {
        g.A.call(this);
        this.u = a;
        this.i = b;
        this.l = new g.Ls(this);
        g.C(this, this.l);
        this.l.K(b, "onCaptionsTrackListChanged", this.wJ);
        this.l.K(b, "captionschanged", this.vI);
        this.l.K(b, "captionssettingschanged", this.BA);
        this.l.K(b, "videoplayerreset", this.Nn);
        this.l.K(b, "mdxautoplaycancel", this.zC);
        this.R = this.l.K(b, "onVolumeChange", this.Ry);
        this.D = !1;
        this.g = c;
        c.subscribe("proxyStateChange", this.cz, this);
        c.subscribe("remotePlayerChange", this.Ek, this);
        c.subscribe("remoteQueueChange", this.Nn, this);
        c.subscribe("autoplayUpNext", this.Gy,
            this);
        c.subscribe("previousNextChange", this.Zy, this);
        c.subscribe("nowAutoplaying", this.Vy, this);
        c.subscribe("autoplayDismissed", this.Fy, this);
        this.suggestion = null;
        this.F = new g.EC(64);
        this.o = new g.J(this.zA, 500, this);
        g.C(this, this.o);
        this.A = new g.J(this.AA, 1E3, this);
        g.C(this, this.A);
        this.I = new E6(this.YM, 0, this);
        g.C(this, this.I);
        this.C = {};
        this.P = new g.J(this.bB, 1E3, this);
        g.C(this, this.P);
        this.H = new g.Gl(this.SF, 1E3, this);
        g.C(this, this.H);
        this.M = g.Ha;
        this.BA();
        this.Nn();
        this.Ek()
    }, m9 = function (a, b) {
        a.u.Mc(b,
            a.i.getVideoData().lengthSeconds)
    }, Hra = function (a) {
        m9(a, 0);
        a.o.stop();
        n9(a, new g.EC(64))
    }, p9 = function (a, b) {
        if (o9(a) && !a.D) {
            var c = null;
            b && (c = {style: a.i.getSubtitlesUserSettings()}, g.ec(c, b));
            a.g.qA(a.i.getVideoData(1).videoId, c);
            a.C = F8(a.g).g
        }
    }, q9 = function (a, b) {
        var c = a.i.getPlaylist();
        if (c) {
            var d = c.Sa;
            var e = c.listId.toString()
        }
        c = a.i.getVideoData(1);
        a.g.playVideo(c.videoId, b, d, e, c.playerParams, c.Ef, X5(c));
        n9(a, new g.EC(1))
    }, Ira = function (a, b) {
        if (b) {
            var c = a.i.getOption("captions", "tracklist", {XQ: 1});
            c && c.length ? (a.i.setOption("captions", "track", b), a.D = !1) : (a.i.loadModule("captions"), a.D = !0)
        } else a.i.setOption("captions", "track", {})
    }, o9 = function (a) {
        return F8(a.g).videoId == a.i.getVideoData(1).videoId
    }, n9 = function (a, b) {
        a.A.stop();
        var c = a.F;
        if (!g.KC(c, b)) {
            var d = g.T(b, 2);
            d != g.T(a.F, 2) && g.BK(a.i, d);
            a.F = b;
            Jra(a.u, c, b)
        }
    }, r9 = function () {
        g.W.call(this, {
            B: "div",
            G: "ytp-mdx-popup-dialog", L: {role: "dialog"}, J: [{
                B: "div",
                G: "ytp-mdx-popup-dialog-inner-content",
                J: [{B: "div", G: "ytp-mdx-popup-title", V: "You're signed out"}, {
                    B: "div",
                    G: "ytp-mdx-popup-description",
                    V: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                }, {
                    B: "div",
                    G: "ytp-mdx-privacy-popup-buttons",
                    J: [{B: "button", W: ["ytp-button", "ytp-mdx-privacy-popup-cancel"], V: "Cancel"}, {
                        B: "button", W: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                        V: "Confirm"
                    }]
                }]
            }]
        });
        this.l = new g.tQ(this, 250);
        g.C(this, this.l);
        this.C = this.i["ytp-mdx-privacy-popup-cancel"];
        this.K(this.C, "click", this.o);
        this.u = this.i["ytp-mdx-privacy-popup-confirm"];
        this.K(this.u, "click", this.A)
    }, s9 = function (a) {
        g.W.call(this, {
            B: "div",
            G: "ytp-remote",
            J: [{
                B: "div",
                G: "ytp-remote-display-status",
                J: [{B: "div", G: "ytp-remote-display-status-icon", J: [g.IP()]}, {
                    B: "div",
                    G: "ytp-remote-display-status-text",
                    V: "{{statustext}}"
                }]
            }]
        });
        this.l = new g.tQ(this, 250);
        g.C(this, this.l);
        this.o = a;
        this.K(a, "presentingplayerstatechange", this.u);
        Kra(this, g.xK(a))
    }, Kra = function (a, b) {
        if (3 == a.o.getPresentingPlayerType()) {
            var c = {RECEIVER_NAME: a.o.getOption("remote", "currentReceiver").name};
            c = g.T(b, 128) ? g.HN("Error on $RECEIVER_NAME", c) : g.LC(b) || g.T(b, 4) ? g.HN("Playing on $RECEIVER_NAME", c) : g.HN("Connected to $RECEIVER_NAME", c);
            a.updateValue("statustext", c);
            a.l.show()
        } else a.l.hide()
    }, t9 = function (a, b) {
        g.eU.call(this, "Play on", 0, a, b);
        this.l = a;
        this.F = {};
        this.K(a, "onMdxReceiversChange", this.I);
        this.K(a, "presentingplayerstatechange", this.I);
        this.I()
    }, u9 = function (a) {
        g.$K.call(this, a);
        this.i = {key: j6(), name: "This computer"};
        this.u = null;
        this.o = [];
        this.F = this.g = null;
        this.C = [this.i];
        this.l = this.i;
        this.mk = new g.EC(64);
        this.I = 0;
        this.Tm = -1;
        if (!g.dz(g.X(this.player))) {
            a = this.player;
            var b = g.yD(a);
            b && (b = b.wn()) && (b = new t9(a, b), g.C(this, b));
            b = new s9(a);
            g.C(this, b);
            g.MK(a, b.element, 4);
            this.H = new r9;
            g.C(this, this.H);
            g.MK(a, this.H.element, 4);
            this.D = !!$8()
        }
        this.A = null
    }, v9 = function (a) {
        a.A && (a.player.removeEventListener("presentingplayerstatechange", a.A), a.A = null)
    }, Jra = function (a, b, c) {
        a.mk = c;
        a.player.N("presentingplayerstatechange", new g.PD(c, b))
    }, w9 = function (a, b) {
        if (b.key != a.l.key) if (b.key == a.i.key) e9();
        else {
            var c;
            if (c = g.O(g.X(a.player).experiments, "mdx_enable_privacy_disclosure_ui")) c = g.Pp("PLAYER_CONFIG"), c = !(c && c.args && void 0 !== c.args.authuser || g.Pp("SESSION_INDEX") || g.Pp("LOGGED_IN"));
            c && !a.D && (g.LC(g.xK(a.player)) || (a.A = (0, g.x)(a.aM, a), a.player.addEventListener("presentingplayerstatechange", a.A)), a.player.pauseVideo(), a.H.l.show(), c9() || (j9 = !0));
            a.l = b;
            var d = a.player.getPlaylistId();
            c = a.player.getVideoData(1);
            var e = c.videoId;
            if (d || e) {
                var f = a.player.getPlaylist();
                if (f) {
                    var k = [];
                    for (var l = 0; l <
                    f.getLength(); l++) k[l] = f.sa(l).videoId
                } else k = [e];
                f = a.player.getCurrentTime(1);
                d = {
                    videoIds: k,
                    listId: d,
                    videoId: e,
                    playerParams: c.playerParams,
                    clickTrackingParams: c.Ef,
                    index: Math.max(a.player.getPlaylistIndex(), 0),
                    currentTime: 0 == f ? void 0 : f
                };
                (c = X5(c)) && (d.locationInfo = c);
                c = d
            } else c = null;
            X8("Connecting to: " + g.Kg(b));
            "cast-selector-receiver" == b.key ? (Z8(c || null), t8() ? q8().setLaunchParams(c || null) : o8("setLaunchParams called before ready.")) : !c && h9() && W8() == b.key ? b6("yt-remote-connection-change", !0) : (e9(),
                Z8(c || null), c = V8().Qd(), (c = l6(c, b.key)) && f9(c, 1))
        }
    }, gqa = /^https?$/i, Lra = ["POST",
        "PUT"];
    g.Sa(V5, g.Sf);
    g.h = V5.prototype;
    g.h.send = function (a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.D = a;
        this.l = "";
        this.u = 0;
        this.Y = b;
        this.R = !1;
        this.i = !0;
        this.g = this.M ? N5(this.M) : N5(g.gZ);
        this.P = this.M ? this.M.getOptions() : g.gZ.getOptions();
        this.g.onreadystatechange = (0, g.x)(this.lw, this);
        try {
            K5(O5(this, "Opening Xhr")), this.aa = !0, this.g.open(b, String(a), !0), this.aa = !1
        } catch (f) {
            K5(O5(this, "Error opening Xhr: " + f.message));
            S5(this, f);
            return
        }
        a =
            c || "";
        var e = this.headers.clone();
        d && dqa(d, function (f, k) {
            e.set(k, f)
        });
        d = g.Xa(e.Od(), eqa);
        c = g.u.FormData && a instanceof g.u.FormData;
        !g.$a(Lra, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (f, k) {
            this.g.setRequestHeader(k, f)
        }, this);
        this.X && (this.g.responseType = this.X);
        "withCredentials" in this.g && this.g.withCredentials !== this.T && (this.g.withCredentials = this.T);
        try {
            P5(this), 0 < this.A && (this.I = fqa(this.g), K5(O5(this, "Will abort after " + this.A + "ms if incomplete, xhr2 " + this.I)), this.I ? (this.g.timeout = this.A, this.g.ontimeout = (0, g.x)(this.mw, this)) : this.F = g.Gg(this.mw, this.A, this)), K5(O5(this, "Sending request")), this.C = !0, this.g.send(a), this.C = !1
        } catch (f) {
            K5(O5(this, "Send error: " + f.message)), S5(this, f)
        }
    };
    g.h.mw = function () {
        "undefined" != typeof g.JY && this.g && (this.l = "Timed out after " + this.A + "ms, aborting", this.u = 8, O5(this, this.l), this.dispatchEvent("timeout"), this.abort(8))
    };
    g.h.abort = function (a) {
        this.g && this.i && (O5(this, "Aborting"), this.i = !1, this.o = !0, this.g.abort(), this.o = !1, this.u = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), R5(this))
    };
    g.h.U = function () {
        this.g && (this.i && (this.i = !1, this.o = !0, this.g.abort(), this.o = !1), R5(this, !0));
        V5.bb.U.call(this)
    };
    g.h.lw = function () {
        this.fa() || (this.aa || this.C || this.o ? U5(this) : this.zK())
    };
    g.h.zK = function () {
        U5(this)
    };
    g.h.isActive = function () {
        return !!this.g
    };
    g.h.getStatus = function () {
        try {
            return 2 < T5(this) ? this.g.status : -1
        } catch (a) {
            return -1
        }
    };
    g.h.getLastError = function () {
        return g.Da(this.l) ? this.l : String(this.l)
    };
    var T6 = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "\\u003C"
    }, S6 = {"'": "\\'"}, Mra = {};
    g.h = a6.prototype;
    g.h.isEmpty = function () {
        return 0 == this.g.length && 0 == this.i.length
    };
    g.h.clear = function () {
        this.g = [];
        this.i = []
    };
    g.h.contains = function (a) {
        return g.$a(this.g, a) || g.$a(this.i, a)
    };
    g.h.remove = function (a) {
        var b = this.g;
        var c = (0, g.Oma)(b, a);
        0 <= c ? (g.bb(b, c), b = !0) : b = !1;
        return b || g.db(this.i, a)
    };
    g.h.Ac = function () {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.i.length;
        for (b = 0; b < c; ++b) a.push(this.i[b]);
        return a
    };
    var oqa = {RN: "atp", iQ: "ska", XP: "que", wP: "mus", hQ: "sus", NO: "dsp", eQ: "seq"};
    c6.prototype.hg = function () {
        var a = new c6({
            id: this.id,
            name: this.name,
            app: this.app,
            type: this.type,
            user: this.username,
            userAvatarUri: this.avatar,
            obfuscatedGaiaId: this.obfuscatedGaiaId,
            theme: this.theme,
            capabilities: Array.from(this.capabilities.values()).join(","),
            experiments: Array.from(this.experiments.values()).join(",")
        });
        a.l = this.l;
        a.i = this.i;
        a.g = this.g
    };
    var w6, p6 = "", wqa = y6("loadCastFramework") || y6("loadCastApplicationFramework"),
        ara = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.Sa(E6, g.A);
    g.h = E6.prototype;
    g.h.sD = function (a) {
        this.o = arguments;
        this.g = !1;
        this.Aa ? this.l = (0, g.D)() + this.Yc : this.Aa = g.Gg(this.u, this.Yc)
    };
    g.h.stop = function () {
        this.Aa && (g.u.clearTimeout(this.Aa), this.Aa = null);
        this.l = null;
        this.g = !1;
        this.o = []
    };
    g.h.pause = function () {
        ++this.i
    };
    g.h.resume = function () {
        this.i && (--this.i, !this.i && this.g && (this.g = !1, this.A.apply(null, this.o)))
    };
    g.h.U = function () {
        this.stop();
        E6.bb.U.call(this)
    };
    g.h.tD = function () {
        this.l ? (this.Aa = g.Gg(this.u, this.l - (0, g.D)()), this.l = null) : (this.Aa = null, this.i ? this.g = !0 : (this.g = !1, this.A.apply(null, this.o)))
    };
    F6.prototype.stringify = function (a) {
        return g.u.JSON.stringify(a, void 0)
    };
    F6.prototype.parse = function (a) {
        return g.u.JSON.parse(a, void 0)
    };
    g.h = G6.prototype;
    g.h.Zg = null;
    g.h.De = !1;
    g.h.Yi = null;
    g.h.ot = null;
    g.h.Ii = null;
    g.h.Yh = null;
    g.h.Yf = null;
    g.h.Eg = null;
    g.h.sh = null;
    g.h.uc = null;
    g.h.nl = 0;
    g.h.He = null;
    g.h.Eo = null;
    g.h.qg = null;
    g.h.Uj = -1;
    g.h.dA = !0;
    g.h.Og = !1;
    g.h.kq = 0;
    g.h.Xn = null;
    var N6 = {}, L6 = {};
    g.h = G6.prototype;
    g.h.setTimeout = function (a) {
        this.o = a
    };
    g.h.jM = function (a) {
        a = a.target;
        var b = this.Xn;
        b && 3 == T5(a) ? b.Qj() : this.jB(a)
    };
    g.h.jB = function (a) {
        try {
            if (a == this.uc) a:{
                var b = T5(this.uc), c = this.uc.u, d = this.uc.getStatus();
                if (g.Ld && !g.od(10) || g.Nd && !g.nd("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Ch && !W5(this.uc)) break a;
                this.Og || 4 != b || 7 == c || (8 == c || 0 >= d ? this.g.Ae(3) : this.g.Ae(2));
                X6(this);
                var e = this.uc.getStatus();
                this.Uj = e;
                var f = W5(this.uc);
                (this.De = 200 == e) ? (4 == b && P6(this), this.u ? (R6(this, b, f), g.Ch && this.De && 3 == b && (this.ca.da(this.i, "tick", this.dM), this.i.start())) : O6(this, f), this.De && !this.Og && (4 == b ? this.g.Kn(this) : (this.De =
                    !1, K6(this)))) : (400 == e && 0 < f.indexOf("Unknown SID") ? (this.qg = 3, M6(13)) : (this.qg = 0, M6(14)), P6(this), Q6(this))
            }
        } catch (k) {
            this.uc && W5(this.uc)
        } finally {
        }
    };
    g.h.dM = function () {
        var a = T5(this.uc), b = W5(this.uc);
        this.nl < b.length && (X6(this), R6(this, a, b), this.De && 4 != a && K6(this))
    };
    g.h.zL = function (a) {
        W6((0, g.x)(this.yL, this, a), 0)
    };
    g.h.yL = function (a) {
        this.Og || (X6(this), O6(this, a), K6(this))
    };
    g.h.jz = function (a) {
        W6((0, g.x)(this.xL, this, a), 0)
    };
    g.h.xL = function (a) {
        this.Og || (P6(this), this.De = a, this.g.Kn(this), this.g.Ae(4))
    };
    g.h.cancel = function () {
        this.Og = !0;
        P6(this)
    };
    g.h.JL = function () {
        this.Yi = null;
        var a = (0, g.D)();
        0 <= a - this.ot ? (2 != this.Yh && this.g.Ae(3), P6(this), this.qg = 2, M6(18), Q6(this)) : V6(this, this.ot - a)
    };
    g.h.getLastError = function () {
        return this.qg
    };
    g.h = a7.prototype;
    g.h.iq = null;
    g.h.Gd = null;
    g.h.Yn = !1;
    g.h.kw = null;
    g.h.lm = null;
    g.h.Sq = null;
    g.h.jq = null;
    g.h.he = null;
    g.h.Af = -1;
    g.h.Tj = null;
    g.h.lj = null;
    g.h.connect = function (a) {
        this.jq = a;
        a = b7(this.g, null, this.jq);
        M6(3);
        this.kw = (0, g.D)();
        var b = this.g.D;
        null != b ? (this.Tj = b[0], (this.lj = b[1]) ? (this.he = 1, c7(this)) : (this.he = 2, e7(this))) : (M5(a, "MODE", "init"), this.Gd = new G6(this, void 0, void 0, void 0), this.Gd.Zg = this.iq, J6(this.Gd, a, !1, null, !0), this.he = 0)
    };
    g.h.AC = function (a) {
        if (a) this.he = 2, e7(this); else {
            M6(4);
            var b = this.g;
            b.Me = b.gg.Af;
            y7(b, 9)
        }
        a && this.Ae(2)
    };
    g.h.Gp = function (a) {
        return this.g.Gp(a)
    };
    g.h.abort = function () {
        this.Gd && (this.Gd.cancel(), this.Gd = null);
        this.Af = -1
    };
    g.h.jw = function () {
        return !1
    };
    g.h.dz = function (a, b) {
        this.Af = a.Uj;
        if (0 == this.he) if (b) {
            try {
                var c = this.i.parse(b)
            } catch (d) {
                c = this.g;
                c.Me = this.Af;
                y7(c, 2);
                return
            }
            this.Tj = c[0];
            this.lj = c[1]
        } else c = this.g, c.Me = this.Af, y7(c, 2); else if (2 == this.he) if (this.Yn) M6(7), this.Sq = (0, g.D)(); else if ("11111" == b) {
            if (M6(6), this.Yn = !0, this.lm = (0, g.D)(), c = this.lm - this.kw, !g.Ld || g.od(10) || 500 > c) this.Af = 200, this.Gd.cancel(), M6(12), d7(this.g, this, !0)
        } else M6(8), this.lm = this.Sq = (0, g.D)(), this.Yn = !1
    };
    g.h.Kn = function () {
        this.Af = this.Gd.Uj;
        if (this.Gd.De) 0 == this.he ? this.lj ? (this.he = 1, c7(this)) : (this.he = 2, e7(this)) : 2 == this.he && ((!g.Ld || g.od(10) ? !this.Yn : 200 > this.Sq - this.lm) ? (M6(11), d7(this.g, this, !1)) : (M6(12), d7(this.g, this, !0))); else {
            0 == this.he ? M6(9) : 2 == this.he && M6(10);
            var a = this.g;
            this.Gd.getLastError();
            a.Me = this.Af;
            y7(a, 2)
        }
    };
    g.h.Vk = function () {
        return this.g.Vk()
    };
    g.h.isActive = function () {
        return this.g.isActive()
    };
    g.h.Ae = function (a) {
        this.g.Ae(a)
    };
    g.h = f7.prototype;
    g.h.Bj = null;
    g.h.Dd = null;
    g.h.Vb = null;
    g.h.hq = null;
    g.h.om = null;
    g.h.Bu = null;
    g.h.Cm = null;
    g.h.zk = 0;
    g.h.PH = 0;
    g.h.Vc = null;
    g.h.ng = null;
    g.h.qf = null;
    g.h.Tg = null;
    g.h.gg = null;
    g.h.Co = null;
    g.h.li = -1;
    g.h.Tw = -1;
    g.h.Me = -1;
    g.h.Rh = 0;
    g.h.Kh = 0;
    g.h.Pg = 8;
    var z7 = new g.Sf;
    g.Sa(g7, g.sf);
    g.Sa(h7, g.sf);
    g.Sa(i7, g.sf);
    g.h = f7.prototype;
    g.h.connect = function (a, b, c, d, e) {
        M6(0);
        this.hq = b;
        this.Bj = c || {};
        d && g.Ca(e) && (this.Bj.OSID = d, this.Bj.OAID = e);
        this.A ? (W6((0, g.x)(this.Uu, this, a), 100), o7(this)) : this.Uu(a)
    };
    g.h.Uu = function (a) {
        this.gg = new a7(this);
        this.gg.iq = null;
        this.gg.i = this.u;
        this.gg.connect(a)
    };
    g.h.jw = function () {
        return 0 == this.g
    };
    g.h.iz = function (a) {
        this.ng = null;
        t7(this, a)
    };
    g.h.hz = function () {
        this.qf = null;
        this.Vb = new G6(this, this.l, "rpc", this.C);
        this.Vb.Zg = null;
        this.Vb.kq = 0;
        var a = this.Bu.clone();
        g.kn(a, "RID", "rpc");
        g.kn(a, "SID", this.l);
        g.kn(a, "CI", this.Co ? "0" : "1");
        g.kn(a, "AID", this.li);
        k7(this, a);
        if (!g.Ld || g.od(10)) g.kn(a, "TYPE", "xmlhttp"), J6(this.Vb, a, !0, this.Cm, !1); else {
            g.kn(a, "TYPE", "html");
            var b = this.Vb, c = !!this.Cm;
            b.Yh = 3;
            b.Yf = L5(a.clone());
            U6(b, c)
        }
    };
    g.h.dz = function (a, b) {
        if (0 != this.g && (this.Vb == a || this.Dd == a)) if (this.Me = a.Uj, this.Dd == a && 3 == this.g) if (7 < this.Pg) {
            try {
                var c = this.u.parse(b)
            } catch (f) {
                c = null
            }
            if (g.Ka(c) && 3 == c.length) if (0 == c[0]) a:{
                if (!this.qf) {
                    if (this.Vb) if (this.Vb.Ii + 3E3 < this.Dd.Ii) p7(this), this.Vb.cancel(), this.Vb = null; else break a;
                    w7(this);
                    M6(19)
                }
            } else this.Tw = c[1], 0 < this.Tw - this.li && 37500 > c[2] && this.Co && 0 == this.Kh && !this.Tg && (this.Tg = W6((0, g.x)(this.rI, this), 6E3)); else y7(this, 11)
        } else b != Mra.oO.g && y7(this, 11); else if (this.Vb == a &&
        p7(this), !g.wb(b)) {
            c = this.u.parse(b);
            g.Ka(c);
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                this.li = e[0];
                e = e[1];
                2 == this.g ? "c" == e[0] ? (this.l = e[1], this.Cm = e[2], e = e[3], null != e ? this.Pg = e : this.Pg = 6, this.g = 3, this.Vc && this.Vc.Ou(), this.Bu = b7(this, this.Vk() ? this.Cm : null, this.hq), u7(this)) : "stop" == e[0] && y7(this, 7) : 3 == this.g && ("stop" == e[0] ? y7(this, 7) : "noop" != e[0] && this.Vc && this.Vc.Nu(e), this.Kh = 0)
            }
        }
    };
    g.h.rI = function () {
        null != this.Tg && (this.Tg = null, this.Vb.cancel(), this.Vb = null, w7(this), M6(20))
    };
    g.h.Kn = function (a) {
        if (this.Vb == a) {
            p7(this);
            this.Vb = null;
            var b = 2
        } else if (this.Dd == a) this.Dd = null, b = 1; else return;
        this.Me = a.Uj;
        if (0 != this.g) if (a.De) 1 == b ? (b = (0, g.D)() - a.Ii, z7.dispatchEvent(new h7(z7, a.sh ? a.sh.length : 0, b, this.Rh)), n7(this), this.o.length = 0) : u7(this); else {
            var c = a.getLastError(), d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Me)) {
                if (d = 1 == b) this.Dd || this.ng || 1 == this.g || 2 <= this.Rh ? d = !1 : (this.ng = W6((0, g.x)(this.iz, this, a), v7(this, this.Rh)), this.Rh++, d = !0);
                d = !(d || 2 == b && w7(this))
            }
            if (d) switch (c) {
                case 1:
                    y7(this,
                        5);
                    break;
                case 4:
                    y7(this, 10);
                    break;
                case 3:
                    y7(this, 6);
                    break;
                case 7:
                    y7(this, 12);
                    break;
                default:
                    y7(this, 2)
            }
        }
    };
    g.h.SC = function (a) {
        if (!g.$a(arguments, this.g)) throw Error("Unexpected channel state: " + this.g);
    };
    g.h.PM = function (a) {
        a ? M6(2) : (M6(1), x7(this, 8))
    };
    g.h.Gp = function (a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new V5;
        a.T = !1;
        return a
    };
    g.h.isActive = function () {
        return !!this.Vc && this.Vc.isActive(this)
    };
    g.h.Ae = function (a) {
        z7.dispatchEvent(new i7(z7, a))
    };
    g.h.Vk = function () {
        return !(!g.Ld || g.od(10))
    };
    g.h = A7.prototype;
    g.h.Ou = function () {
    };
    g.h.Nu = function () {
    };
    g.h.Mu = function () {
    };
    g.h.tp = function () {
    };
    g.h.Kv = function () {
        return {}
    };
    g.h.isActive = function () {
        return !0
    };
    g.Sa(B7, g.A);
    g.h = B7.prototype;
    g.h.rL = function () {
        this.Yc = Math.min(3E5, 2 * this.Yc);
        this.l();
        this.i && this.start()
    };
    g.h.start = function () {
        var a = this.Yc + 15E3 * Math.random();
        g.vo(this.g, a);
        this.i = (0, g.D)() + a
    };
    g.h.stop = function () {
        this.g.stop();
        this.i = 0
    };
    g.h.isActive = function () {
        return this.g.isActive()
    };
    g.h.reset = function () {
        this.g.stop();
        this.Yc = 5E3
    };
    g.Sa(C7, A7);
    g.h = C7.prototype;
    g.h.subscribe = function (a, b, c) {
        return this.l.subscribe(a, b, c)
    };
    g.h.unsubscribe = function (a, b, c) {
        return this.l.unsubscribe(a, b, c)
    };
    g.h.Kf = function (a) {
        return this.l.ah(a)
    };
    g.h.N = function (a, b) {
        return this.l.N.apply(this.l, arguments)
    };
    g.h.dispose = function () {
        this.ib || (this.ib = !0, g.qf(this.l), D7(this), g.qf(this.i), this.i = null)
    };
    g.h.fa = function () {
        return this.ib
    };
    g.h.connect = function (a, b, c) {
        if (!this.g || 2 != this.g.g) {
            this.F = "";
            this.i.stop();
            this.u = a || null;
            this.o = b || 0;
            a = this.H + "/test";
            b = this.H + "/bind";
            var d = new f7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.I), e = this.g;
            e && (e.Vc = null);
            d.Vc = this;
            this.g = d;
            e ? this.g.connect(a, b, this.A, e.l, e.li) : c ? this.g.connect(a, b, this.A, c.sessionId, c.arrayId) : this.g.connect(a, b, this.A)
        }
    };
    g.h.sendMessage = function (a, b) {
        var c = {_sc: a};
        b && g.ec(c, b);
        this.i.isActive() || 2 == (this.g ? this.g.g : 0) ? this.C.push(c) : E7(this) && q7(this.g, c)
    };
    g.h.Ou = function () {
        this.i.reset();
        this.u = null;
        this.o = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) q7(this.g, a[b])
        }
        this.N("handlerOpened")
    };
    g.h.Mu = function (a) {
        var b = 2 == a && 401 == this.g.Me;
        4 == a || b || this.i.start();
        this.N("handlerError", a)
    };
    g.h.tp = function (a) {
        if (!this.i.isActive()) this.N("handlerClosed"); else if (a) for (var b = 0, c = a.length; b < c; ++b) {
            var d = a[b].map;
            d && this.C.push(d)
        }
    };
    g.h.Kv = function () {
        var a = {v: 2};
        this.F && (a.gsessionid = this.F);
        0 != this.o && (a.ui = "" + this.o);
        0 != this.D && (a.ui = "" + this.D);
        this.u && g.ec(a, this.u);
        return a
    };
    g.h.Nu = function (a) {
        "S" == a[0] ? this.F = a[1] : "gracefulReconnect" == a[0] ? (this.i.start(), m7(this.g)) : this.N("handlerMessage", new Aqa(a[0], a[1]))
    };
    g.h.tM = function () {
        this.i.isActive();
        var a = this.g, b = 0;
        a.Vb && b++;
        a.Dd && b++;
        0 == b && this.connect(this.u, this.o)
    };
    F7.prototype.o = function (a, b, c, d) {
        b ? a(d) : a({text: c.responseText})
    };
    F7.prototype.l = function (a, b) {
        a(Error("Request error: " + b.status))
    };
    F7.prototype.u = function (a) {
        a(Error("request timed out"))
    };
    var Gqa = (0, g.D)(), K7 = null, O7 = Array(50), N7 = -1, P7 = !1;
    g.Sa(Q7, g.N);
    Q7.prototype.Qd = function () {
        return this.g
    };
    Q7.prototype.contains = function (a) {
        return !!k6(this.g, a)
    };
    Q7.prototype.get = function (a) {
        return a ? l6(this.g, a) : null
    };
    Q7.prototype.info = function (a) {
        M7(this.C, a)
    };
    g.t(S7, g.N);
    g.h = S7.prototype;
    g.h.start = function () {
        !this.g && isNaN(this.Aa) && this.mB()
    };
    g.h.stop = function () {
        this.g && (this.g.abort(), this.g = null);
        isNaN(this.Aa) || (g.Zp(this.Aa), this.Aa = NaN)
    };
    g.h.U = function () {
        this.stop();
        g.N.prototype.U.call(this)
    };
    g.h.mB = function () {
        this.Aa = NaN;
        this.g = g.Uq(G7(this.A, "/pairing/get_screen"), {
            method: "POST",
            vb: {pairing_code: this.u},
            timeout: 5E3,
            onSuccess: (0, g.x)(this.qN, this),
            onError: (0, g.x)(this.pN, this),
            ne: (0, g.x)(this.rN, this)
        })
    };
    g.h.qN = function (a, b) {
        this.g = null;
        var c = b.screen || {};
        c.dialId = this.l;
        c.name = this.o;
        this.N("pairingComplete", new d6(c))
    };
    g.h.pN = function (a) {
        this.g = null;
        a.status && 404 == a.status ? this.i >= Nra.length ? this.N("pairingFailed", Error("DIAL polling timed out")) : (a = Nra[this.i], this.Aa = g.Xp((0, g.x)(this.mB, this), a), this.i++) : this.N("pairingFailed", Error("Server error " + a.status))
    };
    g.h.rN = function () {
        this.g = null;
        this.N("pairingFailed", Error("Server not responding"))
    };
    var Nra = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Sa(U7, Q7);
    g.h = U7.prototype;
    g.h.start = function () {
        T7(this) && this.N("screenChange");
        !g.zt("yt-remote-lounge-token-expiration") && V7(this);
        g.Zp(this.i);
        this.i = g.Xp((0, g.x)(this.start, this), 1E4)
    };
    g.h.add = function (a, b) {
        T7(this);
        R7(this, a);
        W7(this, !1);
        this.N("screenChange");
        b(a);
        a.token || V7(this)
    };
    g.h.remove = function (a, b) {
        var c = T7(this);
        Iqa(this, a) && (W7(this, !1), c = !0);
        b(a);
        c && this.N("screenChange")
    };
    g.h.yo = function (a, b, c, d) {
        var e = T7(this), f = this.get(a.id);
        f ? (f.name != b && (f.name = b, W7(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.N("screenChange")
    };
    g.h.U = function () {
        g.Zp(this.i);
        U7.bb.U.call(this)
    };
    g.h.DD = function (a) {
        T7(this);
        var b = this.g.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c], f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        W7(this, !b);
        b && M7(this.C, "Missed " + b + " lounge tokens.")
    };
    g.h.CD = function (a) {
        M7(this.C, "Requesting lounge tokens failed: " + a)
    };
    g.t(Y7, g.N);
    g.h = Y7.prototype;
    g.h.start = function () {
        var a = parseInt(g.zt("yt-remote-fast-check-period") || "0", 10);
        (this.o = (0, g.D)() - 144E5 < a ? 0 : a) ? $7(this) : (this.o = (0, g.D)() + 3E5, g.xt("yt-remote-fast-check-period", this.o), this.ys())
    };
    g.h.isEmpty = function () {
        return g.Xb(this.g)
    };
    g.h.update = function () {
        X7("Updating availability on schedule.");
        var a = this.A(), b = g.Lb(this.g, function (c, d) {
            return c && !!l6(a, d)
        }, this);
        Z7(this, b)
    };
    g.h.U = function () {
        g.Zp(this.l);
        this.l = NaN;
        this.i && (this.i.abort(), this.i = null);
        g.N.prototype.U.call(this)
    };
    g.h.ys = function () {
        g.Zp(this.l);
        this.l = NaN;
        this.i && this.i.abort();
        var a = Lqa(this);
        if (Y5(a)) {
            var b = G7(this.u, "/pairing/get_screen_availability");
            this.i = H7(this.u, b, {lounge_token: g.Rb(a).join(",")}, (0, g.x)(this.VK, this, a), (0, g.x)(this.UK, this))
        } else Z7(this, {}), $7(this)
    };
    g.h.VK = function (a, b) {
        this.i = null;
        var c = g.Rb(Lqa(this));
        if (g.rb(c, g.Rb(a))) {
            c = b.screens || [];
            for (var d = {}, e = 0, f = c.length; e < f; ++e) d[a[c[e].loungeToken]] = "online" == c[e].status;
            Z7(this, d);
            $7(this)
        } else this.Hb("Changing Screen set during request."), this.ys()
    };
    g.h.UK = function (a) {
        this.Hb("Screen availability failed: " + a);
        this.i = null;
        $7(this)
    };
    g.h.Hb = function (a) {
        M7("OnlineScreenService", a)
    };
    g.Sa(a8, Q7);
    g.h = a8.prototype;
    g.h.start = function () {
        this.l.start();
        this.i.start();
        this.g.length && (this.N("screenChange"), this.i.isEmpty() || this.N("onlineScreenChange"))
    };
    g.h.add = function (a, b, c) {
        this.l.add(a, b, c)
    };
    g.h.remove = function (a, b, c) {
        this.l.remove(a, b, c);
        this.i.update()
    };
    g.h.yo = function (a, b, c, d) {
        this.l.contains(a) ? this.l.yo(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, M7(this.C, a), d(Error(a)))
    };
    g.h.Qd = function (a) {
        return a ? this.g : g.fb(this.g, (0, g.Xd)(this.o, function (b) {
            return !this.contains(b)
        }, this))
    };
    g.h.nB = function () {
        return (0, g.Xd)(this.Qd(!0), function (a) {
            return !!this.i.g[a.id]
        }, this)
    };
    g.h.oB = function (a, b, c, d, e) {
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var f = new S7(this.A, a, b, c);
        f.subscribe("pairingComplete", (0, g.x)(function (k) {
            g.qf(f);
            d(b8(this, k))
        }, this));
        f.subscribe("pairingFailed", function (k) {
            g.qf(f);
            e(k)
        });
        f.start();
        return (0, g.x)(f.stop, f)
    };
    g.h.tN = function (a, b, c, d) {
        g.Uq(G7(this.A, "/pairing/get_screen"), {
            method: "POST", vb: {pairing_code: a}, timeout: 5E3, onSuccess: (0, g.x)(function (e, f) {
                var k = new d6(f.screen || {});
                if (!k.name || Pqa(this, k.name)) {
                    a:{
                        var l = k.name;
                        for (var m = 2, n = b(l, m); Pqa(this, n);) {
                            m++;
                            if (20 < m) break a;
                            n = b(l, m)
                        }
                        l = n
                    }
                    k.name = l
                }
                c(b8(this, k))
            }, this),
            onError: (0, g.x)(function (e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            ne: (0, g.x)(function () {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.h.U = function () {
        g.qf(this.l);
        g.qf(this.i);
        a8.bb.U.call(this)
    };
    g.h.LD = function () {
        Qqa(this);
        this.N("screenChange");
        this.i.update()
    };
    a8.prototype.dispose = a8.prototype.dispose;
    g.Sa(d8, g.N);
    g.h = d8.prototype;
    g.h.Mn = function (a) {
        this.l = a;
        this.N("sessionScreen", this.l)
    };
    g.h.Td = function (a) {
        this.fa() || (a && e8(this, "" + a), this.l = null, this.N("sessionScreen", null))
    };
    g.h.info = function (a) {
        M7(this.P, a)
    };
    g.h.qB = function () {
        return null
    };
    g.h.Hs = function (a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.x)(function () {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.x)(function () {
            e8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.h.U = function () {
        this.Hs("");
        d8.bb.U.call(this)
    };
    g.Sa(f8, d8);
    g.h = f8.prototype;
    g.h.Gs = function (a) {
        if (this.g) {
            if (this.g == a) return;
            e8(this, "Overriding cast sesison with new session object");
            this.g.removeUpdateListener(this.A);
            this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.u)
        }
        this.g = a;
        this.g.addUpdateListener(this.A);
        this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.u);
        Sqa(this)
    };
    g.h.ni = function (a) {
        this.info("launchWithParams no-op for Cast: " + g.Kg(a))
    };
    g.h.stop = function () {
        this.g ? this.g.stop((0, g.x)(function () {
            this.Td()
        }, this), (0, g.x)(function () {
            this.Td(Error("Failed to stop receiver app."))
        }, this)) : this.Td(Error("Stopping cast device witout session."))
    };
    g.h.Hs = g.Ha;
    g.h.U = function () {
        this.info("disposeInternal");
        g.Zp(this.o);
        this.o = 0;
        this.g && (this.g.removeUpdateListener(this.A), this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.u));
        this.g = null;
        f8.bb.U.call(this)
    };
    g.h.UL = function (a, b) {
        if (!this.fa()) if (b) {
            var c = $5(b);
            if (g.Na(c)) {
                var d = "" + c.type;
                c = c.data || {};
                this.info("onYoutubeMessage_: " + d + " " + g.Kg(c));
                switch (d) {
                    case "mdxSessionStatus":
                        Rqa(this, c.screenId);
                        break;
                    default:
                        e8(this, "Unknown youtube message: " + d)
                }
            } else e8(this, "Unable to parse message.")
        } else e8(this, "No data in message.")
    };
    g.h.Zv = function (a, b, c, d) {
        Oqa(this.F, this.i.label, a, this.i.friendlyName, (0, g.x)(function (e) {
            e ? b(e) : 0 <= d ? (e8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), g.Xp((0, g.x)(this.Zv, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.h.qB = function () {
        return this.g
    };
    g.h.uN = function (a) {
        this.fa() || a || (e8(this, "Cast session died."), this.Td())
    };
    g.Sa(g8, d8);
    g.h = g8.prototype;
    g.h.Gs = function (a) {
        this.o = a;
        this.o.addUpdateListener(this.I)
    };
    g.h.ni = function (a) {
        this.u = a;
        this.C()
    };
    g.h.stop = function () {
        this.g();
        this.g = g.Ha;
        g.Zp(this.A);
        this.o ? this.o.stop((0, g.x)(this.Td, this, null), (0, g.x)(this.Td, this, "Failed to stop DIAL device.")) : this.Td()
    };
    g.h.U = function () {
        this.g();
        this.g = g.Ha;
        g.Zp(this.A);
        this.o && this.o.removeUpdateListener(this.I);
        this.o = null;
        g8.bb.U.call(this)
    };
    g.h.xN = function (a) {
        this.fa() || a || (e8(this, "DIAL session died."), this.g(), this.g = g.Ha, this.Td())
    };
    g.h.zq = function (a) {
        this.H = j6();
        if (this.u) {
            var b = new chrome.cast.DialLaunchResponse(!0, Uqa(this));
            a(b);
            Tqa(this)
        } else this.C = (0, g.x)(function () {
            g.Zp(this.A);
            this.C = g.Ha;
            this.A = NaN;
            var c = new chrome.cast.DialLaunchResponse(!0, Uqa(this));
            a(c);
            Tqa(this)
        }, this), this.A = g.Xp((0, g.x)(function () {
            this.C()
        }, this), 100)
    };
    g.h.gE = function (a, b, c) {
        Oqa(this.F, this.D.receiver.label, a, this.i.friendlyName, (0, g.x)(function (d) {
            d && d.token ? (this.Mn(d), b(new chrome.cast.DialLaunchResponse(!1))) : this.zq(b, c)
        }, this), (0, g.x)(function (d) {
            e8(this, "Failed to get DIAL screen: " + d);
            this.zq(b, c)
        }, this))
    };
    g.Sa(h8, d8);
    h8.prototype.stop = function () {
        this.Td()
    };
    h8.prototype.Gs = g.Ha;
    h8.prototype.ni = function () {
        g.Zp(this.g);
        this.g = NaN;
        var a = l6(this.F.Qd(), this.i.label);
        a ? this.Mn(a) : this.Td(Error("No such screen"))
    };
    h8.prototype.U = function () {
        g.Zp(this.g);
        this.g = NaN;
        h8.bb.U.call(this)
    };
    g.Sa(i8, g.N);
    g.h = i8.prototype;
    g.h.init = function (a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.C);
        this.D || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
            e = a ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION,
            f = (0, g.x)(this.EK, this);
        c = new chrome.cast.ApiConfig(c, (0, g.x)(this.fz, this), f, d, e);
        c.customDialLaunchCallback = (0, g.x)(this.TI, this);
        chrome.cast.initialize(c, (0, g.x)(function () {
            this.fa() ||
            (chrome.cast.addReceiverActionListener(this.o), Dqa(), this.i.subscribe("onlineScreenChange", (0, g.x)(this.pB, this)), this.l = Wqa(this), chrome.cast.setCustomReceivers(this.l, g.Ha, (0, g.x)(function (k) {
                this.Hb("Failed to set initial custom receivers: " + g.Kg(k))
            }, this)), this.N("yt-remote-cast2-availability-change", k8(this)), b(!0))
        }, this), (0, g.x)(function (k) {
            this.Hb("Failed to initialize API: " + g.Kg(k));
            b(!1)
        }, this))
    };
    g.h.CM = function (a, b) {
        j8("Setting connected screen ID: " + a + " -> " + b);
        if (this.g) {
            var c = this.g.l;
            if (!a || c && c.id != a) j8("Unsetting old screen status: " + this.g.i.friendlyName), l8(this, null)
        }
        if (a && b) {
            if (!this.g) {
                c = l6(this.i.Qd(), a);
                if (!c) {
                    j8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                var d = Vqa(this, c);
                d || (j8("setConnectedScreenStatus: Connected receiver not custom..."), d = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name), d.receiverType = chrome.cast.ReceiverType.CUSTOM, this.l.push(d), chrome.cast.setCustomReceivers(this.l,
                    g.Ha, (0, g.x)(function (e) {
                        this.Hb("Failed to set initial custom receivers: " + g.Kg(e))
                    }, this)));
                j8("setConnectedScreenStatus: new active receiver: " + d.friendlyName);
                l8(this, new h8(this.i, d), !0)
            }
            this.g.Hs(b)
        } else j8("setConnectedScreenStatus: no screen.")
    };
    g.h.DM = function (a) {
        this.fa() ? this.Hb("Setting connection data on disposed cast v2") : this.g ? this.g.ni(a) : this.Hb("Setting connection data without a session")
    };
    g.h.wN = function () {
        this.fa() ? this.Hb("Stopping session on disposed cast v2") : this.g ? (this.g.stop(), l8(this, null)) : j8("Stopping non-existing session")
    };
    g.h.requestSession = function () {
        chrome.cast.requestSession((0, g.x)(this.fz, this), (0, g.x)(this.aL, this))
    };
    g.h.U = function () {
        this.i.unsubscribe("onlineScreenChange", (0, g.x)(this.pB, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.o);
        g.db(g.w("yt.mdx.remote.debug.handlers_") || [], I7);
        g.qf(this.g);
        i8.bb.U.call(this)
    };
    g.h.Hb = function (a) {
        M7("Controller", a)
    };
    g.h.gz = function (a, b) {
        this.g == a && (b || l8(this, null), this.N("yt-remote-cast2-session-change", b))
    };
    g.h.AK = function (a, b) {
        if (!this.fa()) if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), j8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
            case chrome.cast.ReceiverAction.CAST:
                if (this.g) if (this.g.i.label != a.label) j8("onReceiverAction_: Stopping active receiver: " + this.g.i.friendlyName), this.g.stop(); else {
                    j8("onReceiverAction_: Casting to active receiver.");
                    this.g.l && this.N("yt-remote-cast2-session-change", this.g.l);
                    break
                }
                switch (a.receiverType) {
                    case chrome.cast.ReceiverType.CUSTOM:
                        l8(this,
                            new h8(this.i, a));
                        break;
                    case chrome.cast.ReceiverType.DIAL:
                        l8(this, new g8(this.i, a, this.A));
                        break;
                    case chrome.cast.ReceiverType.CAST:
                        l8(this, new f8(this.i, a));
                        break;
                    default:
                        this.Hb("Unknown receiver type: " + a.receiverType)
                }
                break;
            case chrome.cast.ReceiverAction.STOP:
                this.g && this.g.i.label == a.label ? this.g.stop() : this.Hb("Stopping receiver w/o session: " + a.friendlyName)
        } else this.Hb("onReceiverAction_ called without receiver.")
    };
    g.h.TI = function (a) {
        if (this.fa()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Hb("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.g ? this.g.i : null;
        if (!c || c.label != b.label) return this.Hb("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.g.l) return j8("Reselecting dial screen."),
                this.N("yt-remote-cast2-session-change", this.g.l), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Hb('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            l8(this, new g8(this.i, b, this.A))
        }
        b = this.g;
        b.D = a;
        return b.D.appState == chrome.cast.DialAppState.RUNNING ? new Promise((0, g.x)(b.gE, b, (b.D.extraData || {}).screenId || null)) : new Promise((0, g.x)(b.zq, b))
    };
    g.h.fz = function (a) {
        if (!this.fa()) {
            j8("New cast session ID: " + a.sessionId);
            var b = a.receiver;
            if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.g) if (b.receiverType == chrome.cast.ReceiverType.CAST) j8("Got resumed cast session before resumed mdx connection."), b.friendlyName = chrome.cast.unescape(b.friendlyName), l8(this, new f8(this.i, b), !0); else {
                    this.Hb("Got non-cast session without previous mdx receiver event, or mdx resume.");
                    return
                }
                var c = this.g.i, d = l6(this.i.Qd(), c.label);
                d && e6(d, b.label) &&
                c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType == chrome.cast.ReceiverType.CAST && (j8("onSessionEstablished_: manual to cast session change " + b.friendlyName), g.qf(this.g), this.g = new f8(this.i, b), this.g.subscribe("sessionScreen", (0, g.x)(this.gz, this, this.g)), this.g.ni(null));
                this.g.Gs(a)
            }
        }
    };
    g.h.vN = function () {
        return this.g ? this.g.qB() : null
    };
    g.h.aL = function (a) {
        this.fa() || (this.Hb("Failed to estabilish a session: " + g.Kg(a)), a.code != chrome.cast.ErrorCode.CANCEL && l8(this, null))
    };
    g.h.EK = function (a) {
        j8("Receiver availability updated: " + a);
        if (!this.fa()) {
            var b = k8(this);
            this.u = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            k8(this) != b && this.N("yt-remote-cast2-availability-change", k8(this))
        }
    };
    g.h.pB = function () {
        this.fa() || (this.l = Wqa(this), j8("Updating custom receivers: " + g.Kg(this.l)), chrome.cast.setCustomReceivers(this.l, g.Ha, (0, g.x)(function () {
            this.Hb("Failed to set custom receivers.")
        }, this)), this.N("yt-remote-cast2-availability-change", k8(this)))
    };
    i8.prototype.setLaunchParams = i8.prototype.DM;
    i8.prototype.setConnectedScreenStatus = i8.prototype.CM;
    i8.prototype.stopSession = i8.prototype.wN;
    i8.prototype.getCastSession = i8.prototype.vN;
    i8.prototype.requestSession = i8.prototype.requestSession;
    i8.prototype.init = i8.prototype.init;
    i8.prototype.dispose = i8.prototype.dispose;
    var r8 = [];
    w8.prototype.reset = function (a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        x8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.g = a.trackData, this.Ne = a.hasPrevious, this.hasNext = a.hasNext, this.C = a.playerTime, this.A = a.playerTimeAt, this.o = a.seekableStart, this.i = a.seekableEnd, this.D = a.duration, this.F = a.loadedTime, this.l = a.liveIngestionTime, this.u =
            !isNaN(this.l))
    };
    w8.prototype.isAdPlaying = function () {
        return 1081 == this.playerState
    };
    w8.prototype.getDuration = function () {
        return this.u ? this.D + y8(this) : this.D
    };
    w8.prototype.clone = function () {
        return new w8(C8(this))
    };
    g.t(E8, g.N);
    g.h = E8.prototype;
    g.h.play = function () {
        1 == this.g ? (this.i ? this.i.play(null, g.Ha, K8(this, "play")) : J8(this, "play"), I8(this, 1, A8(F8(this))), this.N("remotePlayerChange")) : G8(this, this.play)
    };
    g.h.pause = function () {
        1 == this.g ? (this.i ? this.i.pause(null, g.Ha, K8(this, "pause")) : J8(this, "pause"), I8(this, 2, A8(F8(this))), this.N("remotePlayerChange")) : G8(this, this.pause)
    };
    g.h.seekTo = function (a) {
        if (1 == this.g) {
            if (this.i) {
                var b = F8(this), c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                c.resumeState = 1 == b.playerState || 3 == b.playerState ? chrome.cast.media.ResumeState.PLAYBACK_START : chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ha, K8(this, "seekTo", {newTime: a}))
            } else J8(this, "seekTo", {newTime: a});
            I8(this, 3, a);
            this.N("remotePlayerChange")
        } else G8(this, g.Qa(this.seekTo, a))
    };
    g.h.stop = function () {
        if (1 == this.g) {
            this.i ? this.i.stop(null, g.Ha, K8(this, "stopVideo")) : J8(this, "stopVideo");
            var a = F8(this);
            a.index = -1;
            a.videoId = "";
            x8(a);
            H8(this, a);
            this.N("remotePlayerChange")
        } else G8(this, this.stop)
    };
    g.h.setVolume = function (a, b) {
        if (1 == this.g) {
            var c = F8(this);
            if (this.l) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.l.setReceiverVolumeLevel(d, (0, g.x)(function () {
                        M7("CP", "set receiver volume: " + d)
                    }, this), (0, g.x)(function () {
                        this.Hb("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.l.setReceiverMuted(b, (0, g.x)(function () {
                    M7("CP", "set receiver muted: " + b)
                }, this), (0, g.x)(function () {
                    this.Hb("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                -1 != c.volume && (e.delta = a - c.volume);
                J8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            H8(this, c)
        } else G8(this, g.Qa(this.setVolume, a, b))
    };
    g.h.qA = function (a, b) {
        if (1 == this.g) {
            var c = F8(this), d = {videoId: a};
            b && (c.g = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, d.style = g.Kg(b.style), g.ec(d, c.g));
            J8(this, "setSubtitlesTrack", d);
            H8(this, c)
        } else G8(this, g.Qa(this.qA, a, b))
    };
    g.h.setAudioTrack = function (a, b) {
        if (1 == this.g) {
            var c = b.getLanguageInfo().getId();
            J8(this, "setAudioTrack", {videoId: a, audioTrackId: c});
            var d = F8(this);
            d.audioTrackId = c;
            H8(this, d)
        } else G8(this, g.Qa(this.setAudioTrack, a, b))
    };
    g.h.playVideo = function (a, b, c, d, e, f, k) {
        var l = F8(this);
        c = c || 0;
        var m = {videoId: a, currentIndex: c};
        B8(l, a, c);
        g.Ca(b) && (z8(l, b), m.currentTime = b);
        g.Ca(d) && (m.listId = d);
        null != e && (m.playerParams = e);
        null != f && (m.clickTrackingParams = f);
        null != k && (m.locationInfo = g.Kg(k));
        J8(this, "setPlaylist", m);
        d || H8(this, l)
    };
    g.h.Sn = function (a, b) {
        if (1 == this.g) {
            if (a && b) {
                var c = F8(this);
                B8(c, a, b);
                H8(this, c)
            }
            J8(this, "previous")
        } else G8(this, g.Qa(this.Sn, a, b))
    };
    g.h.nextVideo = function (a, b) {
        if (1 == this.g) {
            if (a && b) {
                var c = F8(this);
                B8(c, a, b);
                H8(this, c)
            }
            J8(this, "next")
        } else G8(this, g.Qa(this.nextVideo, a, b))
    };
    g.h.ov = function () {
        1 == this.g ? J8(this, "dismissAutoplay") : G8(this, this.ov)
    };
    g.h.dispose = function () {
        if (3 != this.g) {
            var a = this.g;
            this.g = 3;
            this.N("proxyStateChange", a, this.g)
        }
        g.N.prototype.dispose.call(this)
    };
    g.h.U = function () {
        ira(this);
        this.o = null;
        this.u.clear();
        D8(this, null);
        g.N.prototype.U.call(this)
    };
    g.h.wt = function (a) {
        if ((a != this.g || 2 == a) && 3 != this.g && 0 != a) {
            var b = this.g;
            this.g = a;
            this.N("proxyStateChange", b, a);
            if (1 == a) for (; !this.u.isEmpty();) b = a = this.u, 0 == b.g.length && (b.g = b.i, b.g.reverse(), b.i = []), a.g.pop().apply(this); else 3 == a && this.dispose()
        }
    };
    g.h.xK = function (a, b) {
        this.N(a, b)
    };
    g.h.xI = function (a) {
        if (!a) this.Ck(null), D8(this, null); else if (this.l.receiver.volume) {
            a = this.l.receiver.volume;
            var b = F8(this), c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) M7("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, H8(this, b)
        }
    };
    g.h.Ck = function (a) {
        M7("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.D);
        if (this.i = a) this.i.addUpdateListener(this.D), jra(this), this.N("remotePlayerChange")
    };
    g.h.wI = function (a) {
        a ? (jra(this), this.N("remotePlayerChange")) : this.Ck(null)
    };
    g.h.Xs = function () {
        J8(this, "sendDebugCommand", {debugCommand: "stats4nerds "})
    };
    g.h.LI = function () {
        var a = fra();
        a && D8(this, a)
    };
    g.h.Hb = function (a) {
        M7("CP", a)
    };
    g.t(L8, g.N);
    g.h = L8.prototype;
    g.h.connect = function (a, b) {
        if (b) {
            var c = b.listId, d = b.videoId, e = b.playerParams, f = b.clickTrackingParams, k = b.index,
                l = {videoId: d}, m = b.currentTime, n = b.locationInfo;
            g.Ca(m) && (l.currentTime = 5 >= m ? 0 : m);
            e && (l.playerParams = e);
            n && (l.locationInfo = n);
            f && (l.clickTrackingParams = f);
            c && (l.listId = c);
            g.Ca(k) && (l.currentIndex = k);
            c && (this.Oa.listId = c);
            this.Oa.videoId = d;
            this.Oa.index = k || 0;
            this.Oa.state = 3;
            z8(this.Oa, m);
            this.o = "UNSUPPORTED";
            M8("Connecting with setPlaylist and params: " + g.Kg(l));
            this.g.connect({
                method: "setPlaylist",
                params: g.Kg(l)
            }, a, s6())
        } else M8("Connecting without params"), this.g.connect({}, a, s6());
        lra(this)
    };
    g.h.dispose = function () {
        this.fa() || (this.N("beforeDispose"), N8(this, 3));
        g.N.prototype.dispose.call(this)
    };
    g.h.U = function () {
        O8(this);
        Q8(this);
        P8(this);
        g.Zp(this.C);
        this.C = NaN;
        g.Zp(this.D);
        this.D = NaN;
        this.l = null;
        g.cs(this.P);
        this.P.length = 0;
        this.g.dispose();
        g.N.prototype.U.call(this);
        this.o = this.A = this.i = this.Oa = this.g = null
    };
    g.h.wD = function () {
        this.Oh(2)
    };
    g.h.BI = function () {
        M8("Channel opened");
        this.I && (this.I = !1, P8(this), this.H = g.Xp((0, g.x)(function () {
            M8("Timing out waiting for a screen.");
            this.Oh(1)
        }, this), 15E3));
        uqa(Bqa(this.g), this.M)
    };
    g.h.yI = function () {
        M8("Channel closed");
        isNaN(this.u) ? v6(!0) : v6();
        this.dispose()
    };
    g.h.zI = function (a) {
        v6();
        isNaN(this.Jj()) ? (M8("Channel error: " + a + " without reconnection"), this.dispose()) : (this.I = !0, M8("Channel error: " + a + " with reconnection in " + this.Jj() + " ms"), N8(this, 2))
    };
    g.h.AI = function (a) {
        a.params ? M8("Received: action=" + a.action + ", params=" + g.Kg(a.params)) : M8("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = $5(a.params.devices);
                this.i = (0, g.ge)(a, function (c) {
                    return new c6(c)
                });
                a = !!g.Xa(this.i, function (c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                ora(this, a);
                break;
            case "loungeScreenDisconnected":
                g.eb(this.i, function (c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                ora(this, !1);
                break;
            case "remoteConnected":
                var b = new c6($5(a.params.device));
                g.Xa(this.i, function (c) {
                    return b ? c.id == b.id : !1
                }) || jqa(this.i, b);
                break;
            case "remoteDisconnected":
                b = new c6($5(a.params.device));
                g.eb(this.i, function (c) {
                    return b ? c.id == b.id : !1
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                qra(this, a);
                break;
            case "nowPlaying":
                sra(this, a);
                break;
            case "onStateChange":
                rra(this, a);
                break;
            case "onAdStateChange":
                tra(this, a);
                break;
            case "onVolumeChanged":
                ura(this, a);
                break;
            case "onSubtitlesTrackChanged":
                pra(this, a);
                break;
            case "nowAutoplaying":
                vra(this, a);
                break;
            case "autoplayDismissed":
                this.N("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.A = a.params.videoId || null;
                this.N("autoplayUpNext", this.A);
                break;
            case "onAutoplayModeChanged":
                this.o =
                    a.params.autoplayMode;
                this.N("autoplayModeChange", this.o);
                "DISABLED" == this.o && this.N("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                wra(this, a);
                break;
            case "requestAssistedSignIn":
                this.N("assistedSignInRequested", a.params.authCode);
                break;
            default:
                M8("Unrecognized action: " + a.action)
        }
    };
    g.h.qM = function () {
        if (this.l) {
            var a = this.l;
            this.l = null;
            this.Oa.videoId != a && R8(this, "getNowPlaying")
        }
    };
    g.h.mD = function () {
        var a = 3;
        this.fa() || (a = 0, isNaN(this.Jj()) ? E7(this.g) && isNaN(this.u) && (a = 1) : a = 2);
        return a
    };
    g.h.Oh = function (a) {
        M8("Disconnecting with " + a);
        O8(this);
        this.N("beforeDisconnect", a);
        1 == a && v6();
        D7(this.g, a);
        this.dispose()
    };
    g.h.lD = function () {
        var a = this.Oa;
        this.l && (a = this.Oa.clone(), B8(a, this.l, a.index));
        return C8(a)
    };
    g.h.EM = function (a) {
        var b = new w8(a);
        b.videoId && b.videoId != this.Oa.videoId && (this.l = b.videoId, g.Zp(this.C), this.C = g.Xp((0, g.x)(this.qM, this), 5E3));
        var c = [];
        this.Oa.listId == b.listId && this.Oa.videoId == b.videoId && this.Oa.index == b.index || c.push("remoteQueueChange");
        this.Oa.playerState == b.playerState && this.Oa.volume == b.volume && this.Oa.muted == b.muted && A8(this.Oa) == A8(b) && g.Kg(this.Oa.g) == g.Kg(b.g) || c.push("remotePlayerChange");
        this.Oa.reset(a);
        (0, g.y)(c, function (d) {
            this.N(d)
        }, this)
    };
    g.h.Xv = function () {
        var a = this.g.A.id, b = g.Xa(this.i, function (c) {
            return "REMOTE_CONTROL" == c.type && c.id != a
        });
        return b ? b.id : ""
    };
    g.h.Jj = function () {
        var a = this.g;
        return a.i.isActive() ? a.i.i - (0, g.D)() : NaN
    };
    g.h.eD = function () {
        return this.o || "UNSUPPORTED"
    };
    g.h.fD = function () {
        return this.A || ""
    };
    g.h.oN = function () {
        if (!isNaN(this.Jj())) {
            var a = this.g.i;
            g.wo(a.g);
            a.start()
        }
    };
    g.h.xM = function (a, b) {
        R8(this, a, b);
        nra(this)
    };
    L8.prototype.subscribe = L8.prototype.subscribe;
    L8.prototype.unsubscribeByKey = L8.prototype.Kf;
    L8.prototype.getProxyState = L8.prototype.mD;
    L8.prototype.disconnect = L8.prototype.Oh;
    L8.prototype.getPlayerContextData = L8.prototype.lD;
    L8.prototype.setPlayerContextData = L8.prototype.EM;
    L8.prototype.getOtherConnectedRemoteId = L8.prototype.Xv;
    L8.prototype.getReconnectTimeout = L8.prototype.Jj;
    L8.prototype.getAutoplayMode = L8.prototype.eD;
    L8.prototype.getAutoplayVideoId = L8.prototype.fD;
    L8.prototype.reconnect = L8.prototype.oN;
    L8.prototype.sendMessage = L8.prototype.xM;
    g.t(S8, Q7);
    g.h = S8.prototype;
    g.h.Qd = function (a) {
        return this.Xc.$_gs(a)
    };
    g.h.contains = function (a) {
        return !!this.Xc.$_c(a)
    };
    g.h.get = function (a) {
        return this.Xc.$_g(a)
    };
    g.h.start = function () {
        this.Xc.$_st()
    };
    g.h.add = function (a, b, c) {
        this.Xc.$_a(a, b, c)
    };
    g.h.remove = function (a, b, c) {
        this.Xc.$_r(a, b, c)
    };
    g.h.yo = function (a, b, c, d) {
        this.Xc.$_un(a, b, c, d)
    };
    g.h.U = function () {
        for (var a = 0, b = this.i.length; a < b; ++a) this.Xc.$_ubk(this.i[a]);
        this.i.length = 0;
        this.Xc = null;
        Q7.prototype.U.call(this)
    };
    g.h.sN = function () {
        this.N("screenChange")
    };
    g.h.cK = function () {
        this.N("onlineScreenChange")
    };
    a8.prototype.$_st = a8.prototype.start;
    a8.prototype.$_gspc = a8.prototype.tN;
    a8.prototype.$_gsppc = a8.prototype.oB;
    a8.prototype.$_c = a8.prototype.contains;
    a8.prototype.$_g = a8.prototype.get;
    a8.prototype.$_a = a8.prototype.add;
    a8.prototype.$_un = a8.prototype.yo;
    a8.prototype.$_r = a8.prototype.remove;
    a8.prototype.$_gs = a8.prototype.Qd;
    a8.prototype.$_gos = a8.prototype.nB;
    a8.prototype.$_s = a8.prototype.subscribe;
    a8.prototype.$_ubk = a8.prototype.Kf;
    var k9 = null, j9 = !1, T8 = null, U8 = null, i9 = null, Y8 = [];
    g.t(l9, g.A);
    g.h = l9.prototype;
    g.h.U = function () {
        g.A.prototype.U.call(this);
        this.o.stop();
        this.A.stop();
        this.I.stop();
        this.M();
        this.g.unsubscribe("proxyStateChange", this.cz, this);
        this.g.unsubscribe("remotePlayerChange", this.Ek, this);
        this.g.unsubscribe("remoteQueueChange", this.Nn, this);
        this.g.unsubscribe("autoplayUpNext", this.Gy, this);
        this.g.unsubscribe("previousNextChange", this.Zy, this);
        this.g.unsubscribe("nowAutoplaying", this.Vy, this);
        this.g.unsubscribe("autoplayDismissed", this.Fy, this);
        this.g = this.u = null
    };
    g.h.Cx = function (a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (2 != this.g.g) if (o9(this)) {
            if (!F8(this.g).isAdPlaying() || "control_seek" != a) switch (a) {
                case "control_toggle_play_pause":
                    1 == F8(this.g).playerState ? this.g.pause() : this.g.play();
                    break;
                case "control_play":
                    this.g.play();
                    break;
                case "control_pause":
                    this.g.pause();
                    break;
                case "control_seek":
                    this.H.Qj(c[0], c[1]);
                    break;
                case "control_subtitles_set_track":
                    p9(this, c[0]);
                    break;
                case "control_set_audio_track":
                    c = c[0], o9(this) && this.g.setAudioTrack(this.i.getVideoData(1).videoId,
                        c)
            }
        } else switch (a) {
            case "control_toggle_play_pause":
            case "control_play":
            case "control_pause":
                c = this.i.getCurrentTime();
                q9(this, 0 == c ? void 0 : c);
                break;
            case "control_seek":
                q9(this, c[0]);
                break;
            case "control_subtitles_set_track":
                p9(this, c[0]);
                break;
            case "control_set_audio_track":
                c = c[0], o9(this) && this.g.setAudioTrack(this.i.getVideoData(1).videoId, c)
        }
    };
    g.h.vI = function (a) {
        this.I.sD(a)
    };
    g.h.YM = function (a) {
        this.Cx("control_subtitles_set_track", g.Xb(a) ? null : a)
    };
    g.h.BA = function () {
        var a = this.i.getOption("captions", "track");
        g.Xb(a) || p9(this, a)
    };
    g.h.Ry = function (a) {
        if (o9(this)) {
            this.g.unsubscribe("remotePlayerChange", this.Ek, this);
            var b = Math.round(a.volume);
            a = !!a.muted;
            var c = F8(this.g);
            if (b != c.volume || a != c.muted) this.g.setVolume(b, a), this.P.start();
            this.g.subscribe("remotePlayerChange", this.Ek, this)
        }
    };
    g.h.wJ = function () {
        g.Xb(this.C) || Ira(this, this.C);
        this.D = !1
    };
    g.h.cz = function (a, b) {
        this.A.stop();
        2 == b && this.AA()
    };
    g.h.Ek = function () {
        if (o9(this)) {
            this.o.stop();
            var a = F8(this.g);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.Tm = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.Tm = 0;
                    break;
                default:
                    this.u.Tm = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    n9(this, new g.EC(8));
                    this.zA();
                    break;
                case 1085:
                case 3:
                    n9(this, new g.EC(9));
                    break;
                case 1083:
                case 0:
                    n9(this, new g.EC(2));
                    this.H.stop();
                    m9(this, this.i.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    n9(this, new g.EC(4));
                    break;
                case 2:
                    n9(this, new g.EC(4));
                    m9(this, A8(a));
                    break;
                case -1:
                    n9(this, new g.EC(64));
                    break;
                case -1E3:
                    n9(this, new g.EC(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback."
                    }))
            }
            a = F8(this.g).g;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, Ira(this, a));
            a = F8(this.g);
            -1 == a.volume || Math.round(this.i.getVolume()) == a.volume && this.i.isMuted() == a.muted || this.P.isActive() || this.bB()
        } else Hra(this)
    };
    g.h.Zy = function () {
        this.i.N("mdxpreviousnextchange")
    };
    g.h.Nn = function () {
        o9(this) || Hra(this)
    };
    g.h.zC = function () {
        this.g.ov()
    };
    g.h.Gy = function (a) {
        a && (a = g.Uq("/watch_queue_ajax", {
            method: "GET",
            td: {action_get_watch_queue_item: 1, video_id: a},
            onSuccess: (0, g.x)(this.CL, this)
        })) && (this.M = (0, g.x)(a.abort, a))
    };
    g.h.CL = function (a, b) {
        var c = new g.oB(g.X(this.i), {videoId: b.videoId, title: b.title, author: b.author, murlmq_webp: b.url});
        this.suggestion = c;
        this.i.N("mdxautoplayupnext", c)
    };
    g.h.Vy = function (a) {
        isNaN(a) || this.i.N("mdxnowautoplaying", a)
    };
    g.h.Fy = function () {
        this.i.N("mdxautoplaycanceled")
    };
    g.h.SF = function (a, b) {
        -1 == F8(this.g).playerState ? q9(this, a) : b && this.g.seekTo(a)
    };
    g.h.bB = function () {
        if (o9(this)) {
            var a = F8(this.g);
            this.l.La(this.R);
            a.muted ? this.i.mute() : this.i.unMute();
            this.i.setVolume(a.volume);
            this.R = this.l.K(this.i, "onVolumeChange", this.Ry)
        }
    };
    g.h.zA = function () {
        this.o.stop();
        if (!this.g.fa()) {
            var a = F8(this.g);
            1 == a.playerState && n9(this, new g.EC(8));
            m9(this, A8(a));
            this.o.start()
        }
    };
    g.h.AA = function () {
        this.A.stop();
        this.o.stop();
        var a = this.g.o.getReconnectTimeout();
        2 == this.g.g && !isNaN(a) && this.A.start()
    };
    g.t(r9, g.W);
    r9.prototype.o = function () {
        b6("mdx-privacy-popup-cancel");
        this.l.hide()
    };
    r9.prototype.A = function () {
        b6("mdx-privacy-popup-confirm");
        this.l.hide()
    };
    g.t(s9, g.W);
    s9.prototype.u = function (a) {
        Kra(this, a.state)
    };
    g.t(t9, g.eU);
    t9.prototype.I = function () {
        var a = this.l.getOption("remote", "receivers");
        a && 1 < a.length && !this.l.getOption("remote", "quickCast") ? (this.F = g.tb(a, this.A, this), g.fU(this, (0, g.ge)(a, this.A)), a = this.l.getOption("remote", "currentReceiver"), this.ze(this.A(a)), this.enable(!0)) : this.enable(!1)
    };
    t9.prototype.A = function (a) {
        return a.key
    };
    t9.prototype.ye = function (a) {
        return "cast-selector-receiver" == a ? "Cast..." : this.F[a].name
    };
    t9.prototype.Kc = function (a) {
        g.eU.prototype.Kc.call(this, a);
        this.l.setOption("remote", "currentReceiver", this.F[a]);
        this.o.kb()
    };
    g.t(u9, g.$K);
    g.h = u9.prototype;
    g.h.create = function () {
        Bra(g.Vy(g.X(this.player)));
        this.o.push(g.dq("yt-remote-before-disconnect", this.sI, this));
        this.o.push(g.dq("yt-remote-connection-change", this.FK, this));
        this.o.push(g.dq("yt-remote-receiver-availability-change", this.az, this));
        this.o.push(g.dq("yt-remote-auto-connect", this.DK, this));
        this.o.push(g.dq("yt-remote-receiver-resumed", this.CK, this));
        this.o.push(g.dq("mdx-privacy-popup-confirm", this.gM, this));
        this.o.push(g.dq("mdx-privacy-popup-cancel", this.fM, this));
        this.az()
    };
    g.h.load = function () {
        this.player.cancelPlayback();
        g.$K.prototype.load.call(this);
        this.u = new l9(this, this.player, this.g);
        var a = (a = Gra()) ? a.currentTime : 0;
        var b = h9() ? new E8(c9(), void 0) : null;
        0 == a && b && (a = A8(F8(b)));
        0 != a && this.Mc(a);
        Jra(this, this.mk, this.mk);
        g.eY(this.player.app, 6)
    };
    g.h.unload = function () {
        this.player.N("mdxautoplaycanceled");
        this.l = this.i;
        g.rf(this.u, this.g);
        this.g = this.u = null;
        g.$K.prototype.unload.call(this);
        g.eY(this.player.app, 5);
        v9(this)
    };
    g.h.U = function () {
        g.eq(this.o);
        g.$K.prototype.U.call(this)
    };
    g.h.af = function (a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.loaded && this.u.Cx.apply(this.u, [a].concat(g.ea(c)))
    };
    g.h.getAdState = function () {
        return this.Tm
    };
    g.h.oD = function () {
        return this.loaded ? this.u.suggestion : null
    };
    g.h.Ne = function () {
        return this.g ? F8(this.g).Ne : !1
    };
    g.h.hasNext = function () {
        return this.g ? F8(this.g).hasNext : !1
    };
    g.h.Mc = function (a, b) {
        this.I = a || 0;
        this.player.N("progresssync", a, b)
    };
    g.h.getCurrentTime = function () {
        return this.I
    };
    g.h.getProgressState = function () {
        var a = F8(this.g), b = this.player.getVideoData();
        return {
            allowSeeking: g.O(g.X(this.player).experiments, "web_player_mdx_allow_seeking_change_killswitch") ? this.player.fc() : !a.isAdPlaying() && this.player.fc(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.l + y8(a) : a.l,
            isAtLiveHead: 1 >= (a.u ? a.i + y8(a) : a.i) - this.getCurrentTime(),
            loaded: a.F,
            seekableEnd: a.u ? a.i + y8(a) : a.i,
            seekableStart: 0 < a.o ? a.o +
                y8(a) : a.o
        }
    };
    g.h.nextVideo = function () {
        this.g && this.g.nextVideo()
    };
    g.h.Sn = function () {
        this.g && this.g.Sn()
    };
    g.h.sI = function (a) {
        1 == a && (this.F = this.g ? F8(this.g) : null)
    };
    g.h.FK = function () {
        var a = h9() ? new E8(c9(), void 0) : null;
        if (a) {
            var b = this.l;
            this.loaded && this.unload();
            this.g = a;
            this.F = null;
            b.key != this.i.key && (this.l = b, this.load())
        } else g.qf(this.g), this.g = null, this.loaded && (this.unload(), (a = this.F) && a.videoId == this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, A8(a)));
        this.player.N("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.h.az = function () {
        this.C = [this.i].concat(Dra());
        var a = d9() || this.i;
        w9(this, a);
        this.player.la("onMdxReceiversChange")
    };
    g.h.aM = function (a) {
        !this.D && g.RD(a, 8) && (this.player.pauseVideo(), v9(this))
    };
    g.h.DK = function () {
        var a = d9();
        w9(this, a)
    };
    g.h.CK = function () {
        this.l = d9()
    };
    g.h.gM = function () {
        this.D = !0;
        v9(this);
        j9 = !1;
        k9 && f9(k9, 1);
        k9 = null
    };
    g.h.fM = function () {
        this.D = !1;
        v9(this);
        w9(this, this.i);
        this.l = this.i;
        j9 = !1;
        k9 = null;
        this.player.playVideo()
    };
    g.h.yc = function (a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.C;
            case "currentReceiver":
                return b && ("cast-selector-receiver" == b.key ? u8() : w9(this, b)), this.loaded ? this.l : this.i;
            case "quickCast":
                return 2 == this.C.length && "cast-selector-receiver" == this.C[1].key ? (b && u8(), !0) : !1
        }
    };
    g.h.Xs = function () {
        this.g.Xs()
    };
    g.h.Ob = function () {
        return !1
    };
    g.h.getOptions = function () {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.uV.remote = u9;
})(_yt_player);
