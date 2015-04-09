// Copyright 2013 mb@w69b.com

function singleEncodeURI(x)
{
    if (decodeURIComponent(x) == x)
    {
        return encodeURI(x);
    }
    else
    {
        return x;
    }
}

function singleEncodeURIComponent(x)
{
	if (decodeURIComponent(x) == x)
	{
		return encodeURI(x);
	}
	else
	{
		return x;
	}
}

(function () {
    var j = void 0
        , k = !0
        , l = null
        , n = !1
        , r, s = this;

    function aa() {}

    function ba(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function t(a) {
        return "array" == ba(a)
    }

    function ca(a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function u(a) {
        return "string" == typeof a
    }

    function da(a) {
        return "function" == ba(a)
    }

    function v(a) {
        var b = typeof a;
        return "object" == b && a != l || "function" == b
    }

    function w(a) {
        return a[ea] || (a[ea] = ++fa)
    }
    var ea = "closure_uid_" + Math.floor(2147483648 * Math.random())
        .toString(36)
        , fa = 0;

    function ga(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ha(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function ia(a, b, c) {
        ia = Function.prototype.bind && -1 != Function.prototype.bind.toString()
            .indexOf("native code") ? ga : ha;
        return ia.apply(l, arguments)
    }

    function ja(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    }
    var ka = Date.now || function () {
        return +new Date
    };

    function x(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ha = b.prototype;
        a.prototype = new c
    };

    function y() {
        0 != la && (this.na = Error()
            .stack, w(this))
    }
    var la = 0;

    function z(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, z) : this.stack = Error()
            .stack || "";
        a && (this.message = String(a))
    }
    x(z, Error);
    z.prototype.name = "CustomError";

    function ma(a, b) {
        var c = String(a)
            .toLowerCase()
            , d = String(b)
            .toLowerCase();
        return c < d ? -1 : c == d ? 0 : 1
    }

    function na(a) {
        if (!oa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(pa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));
        return a
    }
    var pa = /&/g
        , qa = /</g
        , ra = />/g
        , sa = /\"/g
        , oa = /[&<>\"]/;

    function ta(a) {
        if (-1 != a.indexOf("&"))
            if ("document" in s) var b = {
                    "&amp;": "&"
                    , "&lt;": "<"
                    , "&gt;": ">"
                    , "&quot;": '"'
                }
                , c = document.createElement("div")
                , a = a.replace(ua, function (a, g) {
                    var e = b[a];
                    if (e) return e;
                    if ("#" == g.charAt(0)) {
                        var f = Number("0" + g.substr(1));
                        isNaN(f) || (e = String.fromCharCode(f))
                    }
                    e || (c.innerHTML = a + " ", e = c.firstChild.nodeValue.slice(0, -1));
                    return b[a] = e
                });
            else a = a.replace(/&([^;]+);/g, function (a, b) {
                switch (b) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    if ("#" ==
                        b.charAt(0)) {
                        var c = Number("0" + b.substr(1));
                        if (!isNaN(c)) return String.fromCharCode(c)
                    }
                    return a
                }
            });
        return a
    }
    var ua = /&([^;\s<&]+);?/g;
    var B = Array.prototype
        , va = B.indexOf ? function (a, b, c) {
            return B.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (u(a)) return !u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }
        , wa = B.forEach ? function (a, b, c) {
            B.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, g = u(a) ? a.split("") : a, e = 0; e < d; e++) e in g && b.call(c, g[e], e, a)
        }
        , xa = B.filter ? function (a, b, c) {
            return B.filter.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, g = [], e = 0, f = u(a) ?
                    a.split("") : a, h = 0; h < d; h++)
                if (h in f) {
                    var i = f[h];
                    b.call(c, i, h, a) && (g[e++] = i)
                }
            return g
        }
        , ya = B.map ? function (a, b, c) {
            return B.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, g = Array(d), e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && (g[f] = b.call(c, e[f], f, a));
            return g
        }
        , za = B.every ? function (a, b, c) {
            return B.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, g = u(a) ? a.split("") : a, e = 0; e < d; e++)
                if (e in g && !b.call(c, g[e], e, a)) return n;
            return k
        };

    function Aa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ba(a, b, c) {
        return 2 >= arguments.length ? B.slice.call(a, b) : B.slice.call(a, b, c)
    }

    function Ca(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            t(d) ? b.push.apply(b, Ca.apply(l, d)) : b.push(d)
        }
        return b
    };
    var C, Da, Ea, Fa;

    function Ga() {
        return s.navigator ? s.navigator.userAgent : l
    }
    Fa = Ea = Da = C = n;
    var Ha;
    if (Ha = Ga()) {
        var Ia = s.navigator;
        C = 0 == Ha.indexOf("Opera");
        Da = !C && -1 != Ha.indexOf("MSIE");
        Ea = !C && -1 != Ha.indexOf("WebKit");
        Fa = !C && !Ea && "Gecko" == Ia.product
    }
    var Ja = C
        , D = Da
        , E = Fa
        , F = Ea
        , Ka = s.navigator
        , La = -1 != (Ka && Ka.platform || "")
        .indexOf("Mac");

    function Ma() {
        var a = s.document;
        return a ? a.documentMode : j
    }
    var Na;
    a: {
        var Oa = ""
            , Pa;
        if (Ja && s.opera) var Qa = s.opera.version
            , Oa = "function" == typeof Qa ? Qa() : Qa;
        else if (E ? Pa = /rv\:([^\);]+)(\)|;)/ : D ? Pa = /MSIE\s+([^\);]+)(\)|;)/ : F && (Pa = /WebKit\/(\S+)/), Pa) var Ra = Pa.exec(Ga())
            , Oa = Ra ? Ra[1] : "";
        if (D) {
            var Sa = Ma();
            if (Sa > parseFloat(Oa)) {
                Na = String(Sa);
                break a
            }
        }
        Na = Oa
    }
    var Ta = {};

    function G(a) {
        var b;
        if (!(b = Ta[a])) {
            b = 0;
            for (var c = String(Na)
                    .replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    .split("."), d = String(a)
                    .replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    .split("."), g = Math.max(c.length, d.length), e = 0; 0 == b && e < g; e++) {
                var f = c[e] || ""
                    , h = d[e] || ""
                    , i = RegExp("(\\d*)(\\D*)", "g")
                    , m = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var p = i.exec(f) || ["", "", ""]
                        , q = m.exec(h) || ["", "", ""];
                    if (0 == p[0].length && 0 == q[0].length) break;
                    b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1]
                        , 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == q[2].length) ? -1 : (0 == p[2].length) > (0 == q[2].length) ? 1 : 0) || (p[2] < q[2] ? -1 : p[2] > q[2] ? 1 : 0)
                } while (0 == b)
            }
            b = Ta[a] = 0 <= b
        }
        return b
    }
    var Ua = s.document
        , Va = !Ua || !D ? j : Ma() || ("CSS1Compat" == Ua.compatMode ? parseInt(Na, 10) : 5);
    var Wa = !D || D && 9 <= Va
        , Xa = D && !G("9");
    !F || G("528");
    E && G("1.9b") || D && G("8") || Ja && G("9.5") || F && G("528");
    E && !G("8") || D && G("9");

    function H(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    }
    H.prototype.j = n;
    H.prototype.defaultPrevented = n;
    H.prototype.r = k;
    H.prototype.preventDefault = function () {
        this.defaultPrevented = k;
        this.r = n
    };

    function Ya(a) {
        Ya[" "](a);
        return a
    }
    Ya[" "] = aa;

    function Za(a, b) {
        a && this.o(a, b)
    }
    x(Za, H);
    r = Za.prototype;
    r.target = l;
    r.relatedTarget = l;
    r.offsetX = 0;
    r.offsetY = 0;
    r.clientX = 0;
    r.clientY = 0;
    r.screenX = 0;
    r.screenY = 0;
    r.button = 0;
    r.keyCode = 0;
    r.charCode = 0;
    r.ctrlKey = n;
    r.altKey = n;
    r.shiftKey = n;
    r.metaKey = n;
    r.ca = n;
    r.M = l;
    r.o = function (a, b) {
        var c = this.type = a.type;
        H.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (E) {
                var g;
                a: {
                    try {
                        Ya(d.nodeName);
                        g = k;
                        break a
                    } catch (e) {}
                    g = n
                }
                g || (d = l)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = F || a.offsetX !== j ? a.offsetX : a.layerX;
        this.offsetY = F || a.offsetY !== j ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== j ? a.clientX : a.pageX;
        this.clientY = a.clientY !== j ? a.clientY : a.pageY;
        this.screenX = a.screenX ||
            0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.ca = La ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.M = a;
        a.defaultPrevented && this.preventDefault();
        delete this.j
    };
    r.preventDefault = function () {
        Za.ha.preventDefault.call(this);
        var a = this.M;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = n, Xa) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };

    function $a() {}
    var ab = 0;
    r = $a.prototype;
    r.key = 0;
    r.k = n;
    r.H = n;
    r.o = function (a, b, c, d, g, e) {
        if (da(a)) this.O = k;
        else if (a && a.handleEvent && da(a.handleEvent)) this.O = n;
        else throw Error("Invalid listener argument");
        this.n = a;
        this.S = b;
        this.src = c;
        this.type = d;
        this.capture = !!g;
        this.B = e;
        this.H = n;
        this.key = ++ab;
        this.k = n
    };
    r.handleEvent = function (a) {
        return this.O ? this.n.call(this.B || this.src, a) : this.n.handleEvent.call(this.n, a)
    };

    function bb(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function cb(a) {
        var b = 0
            , c;
        for (c in a) b++;
        return b
    }

    function db(a) {
        var b = []
            , c = 0
            , d;
        for (d in a) b[c++] = a[d];
        return b
    }
    var eb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function fb(a, b) {
        for (var c, d, g = 1; g < arguments.length; g++) {
            d = arguments[g];
            for (c in d) a[c] = d[c];
            for (var e = 0; e < eb.length; e++) c = eb[e], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var I = {}
        , J = {}
        , K = {}
        , L = {};

    function gb(a, b, c, d, g) {
        if (b) {
            if (t(b)) {
                for (var e = 0; e < b.length; e++) gb(a, b[e], c, d, g);
                return l
            }
            var d = !!d
                , f = J;
            b in f || (f[b] = {
                b: 0
                , d: 0
            });
            f = f[b];
            d in f || (f[d] = {
                b: 0
                , d: 0
            }, f.b++);
            var f = f[d]
                , h = w(a)
                , i;
            f.d++;
            if (f[h]) {
                i = f[h];
                for (e = 0; e < i.length; e++)
                    if (f = i[e], f.n == c && f.B == g) {
                        if (f.k) break;
                        return i[e].key
                    }
            } else i = f[h] = [], f.b++;
            var m = hb
                , p = Wa ? function (a) {
                    return m.call(p.src, p.key, a)
                } : function (a) {
                    a = m.call(p.src, p.key, a);
                    if (!a) return a
                }
                , e = p;
            e.src = a;
            f = new $a;
            f.o(c, e, a, b, d, g);
            c = f.key;
            e.key = c;
            i.push(f);
            I[c] = f;
            K[h] || (K[h] = []);
            K[h].push(f);
            a.addEventListener ? (a == s || !a.J) && a.addEventListener(b, e, d) : a.attachEvent(b in L ? L[b] : L[b] = "on" + b, e);
            return c
        }
        throw Error("Invalid event type");
    }

    function ib(a, b, c, d, g) {
        if (t(b))
            for (var e = 0; e < b.length; e++) ib(a, b[e], c, d, g);
        else {
            d = !!d;
            a: {
                e = J;
                if (b in e && (e = e[b], d in e && (e = e[d], a = w(a), e[a]))) {
                    a = e[a];
                    break a
                }
                a = l
            }
            if (a)
                for (e = 0; e < a.length; e++)
                    if (a[e].n == c && a[e].capture == d && a[e].B == g) {
                        jb(a[e].key);
                        break
                    }
        }
    }

    function jb(a) {
        if (I[a]) {
            var b = I[a];
            if (!b.k) {
                var c = b.src
                    , d = b.type
                    , g = b.S
                    , e = b.capture;
                c.removeEventListener ? (c == s || !c.J) && c.removeEventListener(d, g, e) : c.detachEvent && c.detachEvent(d in L ? L[d] : L[d] = "on" + d, g);
                c = w(c);
                if (K[c]) {
                    var g = K[c]
                        , f = va(g, b);
                    0 <= f && B.splice.call(g, f, 1);
                    0 == g.length && delete K[c]
                }
                b.k = k;
                if (b = J[d][e][c]) b.P = k, kb(d, e, c, b);
                delete I[a]
            }
        }
    }

    function kb(a, b, c, d) {
        if (!d.q && d.P) {
            for (var g = 0, e = 0; g < d.length; g++) d[g].k ? d[g].S.src = l : (g != e && (d[e] = d[g]), e++);
            d.length = e;
            d.P = n;
            0 == e && (delete J[a][b][c], J[a][b].b--, 0 == J[a][b].b && (delete J[a][b], J[a].b--), 0 == J[a].b && delete J[a])
        }
    }

    function lb(a, b, c, d, g) {
        var e = 1
            , b = w(b);
        if (a[b]) {
            a.d--;
            a = a[b];
            a.q ? a.q++ : a.q = 1;
            try {
                for (var f = a.length, h = 0; h < f; h++) {
                    var i = a[h];
                    i && !i.k && (e &= mb(i, g) !== n)
                }
            } finally {
                a.q--, kb(c, d, b, a)
            }
        }
        return Boolean(e)
    }

    function mb(a, b) {
        a.H && jb(a.key);
        return a.handleEvent(b)
    }

    function hb(a, b) {
        if (!I[a]) return k;
        var c = I[a]
            , d = c.type
            , g = J;
        if (!(d in g)) return k;
        var g = g[d]
            , e, f;
        if (!Wa) {
            var h;
            if (!(h = b)) a: {
                h = ["window", "event"];
                for (var i = s; e = h.shift();)
                    if (i[e] != l) i = i[e];
                    else {
                        h = l;
                        break a
                    }
                h = i
            }
            e = h;
            h = k in g;
            i = n in g;
            if (h) {
                if (0 > e.keyCode || e.returnValue != j) return k;
                a: {
                    var m = n;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (p) {
                        m = k
                    }
                    if (m || e.returnValue == j) e.returnValue = k
                }
            }
            m = new Za;
            m.o(e, this);
            e = k;
            try {
                if (h) {
                    for (var q = [], V = m.currentTarget; V; V = V.parentNode) q.push(V);
                    f = g[k];
                    f.d = f.b;
                    for (var A =
                            q.length - 1; !m.j && 0 <= A && f.d; A--) m.currentTarget = q[A], e &= lb(f, q[A], d, k, m);
                    if (i) {
                        f = g[n];
                        f.d = f.b;
                        for (A = 0; !m.j && A < q.length && f.d; A++) m.currentTarget = q[A], e &= lb(f, q[A], d, n, m)
                    }
                } else e = mb(c, m)
            } finally {
                q && (q.length = 0)
            }
            return e
        }
        d = new Za(b, this);
        return e = mb(c, d)
    };

    function nb(a) {
        y.call(this);
        this.m = a;
        this.a = []
    }
    x(nb, y);
    var ob = [];

    function pb(a, b, c, d) {
        t(c) || (ob[0] = c, c = ob);
        for (var g = 0; g < c.length; g++) {
            var e = gb(b, c[g], d || a, n, a.m || a);
            a.a.push(e)
        }
    }
    nb.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var M = "pending";

    function N() {
        this.c = M;
        this.e = []
    }

    function qb() {
        z.call(this, "Multiple attempts to set the state of this Result")
    }
    x(qb, z);
    N.prototype.getError = function () {
        return this.X
    };

    function O(a, b) {
        if (a.c == M) {
            a.h = b;
            for (a.c = "success"; a.e.length;) a.e.shift()(a)
        } else throw new qb;
    }

    function P(a, b) {
        if (a.c == M) {
            a.X = b;
            for (a.c = "error"; a.e.length;) a.e.shift()(a)
        } else throw new qb;
    };

    function Q(a, b, c) {
        b = c ? ia(b, c) : b;
        a.c == M ? a.e.push(b) : b(a)
    }

    function rb(a, b, c) {
        Q(a, function (a) {
            "success" == a.c && b.call(this, a.h, a)
        }, c)
    }

    function sb(a, b, c) {
        Q(a, function (a) {
            "error" == a.c && b.call(this, a)
        }, c)
    }

    function R(a, b) {
        var c = new N;
        Q(a, function (a) {
            "success" == a.c ? O(c, b(a.h)) : P(c, a.getError())
        });
        return c
    }

    function tb(a) {
        function b() {
            za(d, c) && O(g, d)
        }

        function c(a) {
            return a.c != M
        }
        var d = Aa(arguments)
            , g = new N;
        wa(d, function (a) {
            Q(a, b)
        });
        return g
    };

    function ub(a) {
        if ("function" == typeof a.l) return a.l();
        if (u(a)) return a.split("");
        if (ca(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return db(a)
    };

    function vb(a, b) {
        this.f = {};
        this.a = [];
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.t(a)
    }
    r = vb.prototype;
    r.b = 0;
    r.ka = 0;
    r.l = function () {
        wb(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.f[this.a[b]]);
        return a
    };

    function wb(a) {
        if (a.b != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Object.prototype.hasOwnProperty.call(a.f, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.b != a.a.length) {
            for (var g = {}, c = b = 0; b < a.a.length;) d = a.a[b], Object.prototype.hasOwnProperty.call(g, d) || (a.a[c++] = d, g[d] = 1), b++;
            a.a.length = c
        }
    }
    r.set = function (a, b) {
        Object.prototype.hasOwnProperty.call(this.f, a) || (this.b++, this.a.push(a), this.ka++);
        this.f[a] = b
    };
    r.t = function (a) {
        var b;
        if (a instanceof vb) wb(a), b = a.a.concat(), a = a.l();
        else {
            b = [];
            var c = 0
                , d;
            for (d in a) b[c++] = d;
            a = db(a)
        }
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    };

    function xb(a) {
        this.f = new vb;
        a && this.t(a)
    }

    function yb(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + w(a) : b.substr(0, 1) + a
    }
    xb.prototype.add = function (a) {
        this.f.set(yb(a), a)
    };
    xb.prototype.t = function (a) {
        for (var a = ub(a), b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    xb.prototype.contains = function (a) {
        a = yb(a);
        return Object.prototype.hasOwnProperty.call(this.f.f, a)
    };
    xb.prototype.l = function () {
        return this.f.l()
    };

    function zb() {
        y.call(this)
    }
    x(zb, y);
    r = zb.prototype;
    r.J = k;
    r.R = l;
    r.addEventListener = function (a, b, c, d) {
        gb(this, a, b, c, d)
    };
    r.removeEventListener = function (a, b, c, d) {
        ib(this, a, b, c, d)
    };
    r.dispatchEvent = function (a) {
        var b = a.type || a
            , c = J;
        if (b in c) {
            if (u(a)) a = new H(a, this);
            else if (a instanceof H) a.target = a.target || this;
            else {
                var d = a
                    , a = new H(b, this);
                fb(a, d)
            }
            var d = 1
                , g, c = c[b]
                , b = k in c
                , e;
            if (b) {
                g = [];
                for (e = this; e; e = e.R) g.push(e);
                e = c[k];
                e.d = e.b;
                for (var f = g.length - 1; !a.j && 0 <= f && e.d; f--) a.currentTarget = g[f], d &= lb(e, g[f], a.type, k, a) && a.r != n
            }
            if (n in c)
                if (e = c[n], e.d = e.b, b)
                    for (f = 0; !a.j && f < g.length && e.d; f++) a.currentTarget = g[f], d &= lb(e, g[f], a.type, n, a) && a.r != n;
                else
                    for (g = this; !a.j && g && e.d; g = g.R) a.currentTarget =
                        g, d &= lb(e, g, a.type, n, a) && a.r != n;
            a = Boolean(d)
        } else a = k;
        return a
    };

    function S(a, b) {
        y.call(this);
        this.p = a || 1;
        this.G = b || Ab;
        this.u = ia(this.ia, this);
        this.C = ka()
    }
    x(S, zb);
    S.prototype.enabled = n;
    var Ab = s.window;
    S.prototype.g = l;
    S.prototype.ia = function () {
        if (this.enabled) {
            var a = ka() - this.C;
            0 < a && a < 0.8 * this.p ? this.g = this.G.setTimeout(this.u, this.p - a) : (this.dispatchEvent(Bb), this.enabled && (this.g = this.G.setTimeout(this.u, this.p), this.C = ka()))
        }
    };
    S.prototype.start = function () {
        this.enabled = k;
        this.g || (this.g = this.G.setTimeout(this.u, this.p), this.C = ka())
    };
    var Bb = "tick";
    var Cb = !D || D && 9 <= Va;
    !E && !D || D && D && 9 <= Va || E && G("1.9.1");
    D && G("9");

    function Db(a, b) {
        var c;
        c = a.className;
        c = u(c) && c.match(/\S+/g) || [];
        for (var d = Ba(arguments, 1), g = c.length + d.length, e = c, f = 0; f < d.length; f++) 0 <= va(e, d[f]) || e.push(d[f]);
        a.className = c.join(" ");
        return c.length == g
    };

    function T(a, b) {
        this.width = a;
        this.height = b
    }
    T.prototype.toString = function () {
        return "(" + this.width + " x " + this.height + ")"
    };
    T.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    T.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Eb = {
        cellpadding: "cellPadding"
        , cellspacing: "cellSpacing"
        , colspan: "colSpan"
        , frameborder: "frameBorder"
        , height: "height"
        , maxlength: "maxLength"
        , role: "role"
        , rowspan: "rowSpan"
        , type: "type"
        , usemap: "useMap"
        , valign: "vAlign"
        , width: "width"
    };

    function Fb(a, b, c) {
        var d = arguments
            , g = document
            , e = d[0]
            , f = d[1];
        if (!Cb && f && (f.name || f.type)) {
            e = ["<", e];
            f.name && e.push(' name="', na(f.name), '"');
            if (f.type) {
                e.push(' type="', na(f.type), '"');
                var h = {};
                fb(h, f);
                delete h.type;
                f = h
            }
            e.push(">");
            e = e.join("")
        }
        e = g.createElement(e);
        if (f)
            if (u(f)) e.className = f;
            else if (t(f)) Db.apply(l, [e].concat(f));
        else {
            var i = e;
            bb(f, function (a, b) {
                "style" == b ? i.style.cssText = a : "class" == b ? i.className = a : "for" == b ? i.htmlFor = a : b in Eb ? i.setAttribute(Eb[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 ==
                    b.lastIndexOf("data-", 0) ? i.setAttribute(b, a) : i[b] = a
            })
        }
        if (2 < d.length)
            for (var m = g, p = e, g = function (a) {
                    a && p.appendChild(u(a) ? m.createTextNode(a) : a)
                }, f = 2; f < d.length; f++)
                if (h = d[f], ca(h) && !(v(h) && 0 < h.nodeType)) {
                    var q;
                    a: {
                        if (h && "number" == typeof h.length) {
                            if (v(h)) {
                                q = "function" == typeof h.item || "string" == typeof h.item;
                                break a
                            }
                            if (da(h)) {
                                q = "function" == typeof h.item;
                                break a
                            }
                        }
                        q = n
                    }
                    wa(q ? Aa(h) : h, g)
                } else g(h);
        return e
    };
    var Gb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function Hb(a, b, c) {
        if (t(b))
            for (var d = 0; d < b.length; d++) Hb(a, String(b[d]), c);
        else b != l && c.push("&", a, "" === b ? "" : "=", singleEncodeURIComponent(String(b)))
    }

    function Ib(a, b, c) {
        for (c = c || 0; c < b.length; c += 2) Hb(b[c], b[c + 1], a);
        return a
    }

    function W(a, b) {
        var c = 2 == arguments.length ? Ib([a], arguments[1], 0) : Ib([a], arguments, 1);
        if (c[1]) {
            var d = c[0]
                , g = d.indexOf("#");
            0 <= g && (c.push(d.substr(g)), c[0] = d = d.substr(0, g));
            g = d.indexOf("?");
            0 > g ? c[1] = "?" : g == d.length - 1 && (c[1] = j)
        }
        return c.join("")
    };

    function Jb(a) {
        var b = Kb(a)
            , c;
        try {
            c = JSON.parse(a)
        } catch (d) {
            c = l
        }
        return (b ? cb(b) : 0) > (c ? cb(c) : 0) ? b : c
    }

    function Lb(a) {
        var b = [];
        a.src && a.src != document.baseURI && b.push({
            url: singleEncodeURI(a.src)
        });
        wa(a.getElementsByTagName("source"), function (a) {
            a.src && b.push({
                url: singleEncodeURI(a.src)
            })
        });
        return b
    }

    function Mb(a, b) {
        var c = [];
        Nb(c, b, a);
        c = Ca(c);
        return c = c.filter(function (a) {
            return u(a) || "number" == typeof a
        })
    }

    function Ob(a) {
        if (!u(a)) return [];
        a = a.replace(/\\\//g, "/");
        a = a.match(/(https?:\/\/[^\s"<>\]\[]+)/g);
        return t(a) && (a = a.filter(Pb), a.length) ? a : []
    }

    function Nb(a, b, c) {
        t(c) ? c.forEach(ja(Nb, a, b)) : v(c) && bb(c, function (c, g) {
            g.toLowerCase() == b.toLowerCase() ? a.push(c) : Nb(a, b, c)
        })
    }

    function Kb(a) {
        var b = {};
        a.split("&")
            .forEach(function (a) {
                var d = a.indexOf("=");
                if (0 < d) {
                    var g = a.slice(0, d)
                        , a = a.slice(d + 1);
                    try {
                        g = decodeURIComponent(g.replace(/\+/g, " "))
                    } catch (e) {}
                    try {
                        a = decodeURIComponent(a.replace(/\+/g, " "))
                    } catch (f) {}
                    if (0 == a.lastIndexOf("[[JSON]]", 0)) {
                        var d = RegExp
                            , h;
                        h = "[[JSON]]".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
                            .replace(/\x08/g, "\\x08");
                        d = d(h, "");
                        a = a.replace(d, "")
                    }
                    X(a) || (d = Jb(a)) && (a = d);
                    b[g] = a
                }
            });
        return 0 < cb(b) ? b : l
    }

    function Pb(a) {
        if (!X(a)) return n;
        var b, c = a.toLowerCase()
            .match(Gb)[5] || l;
        b = c && decodeURIComponent(c);
        return !b ? n : ".avi .divx .flv .mp4 .mpeg .mpg".split(" ")
            .some(function (a) {
                return -1 != b.indexOf(a)
            }) && Qb(a)
    }

    function Qb(a) {
        if (!X(a)) return n;
        var b;
        b = (a = a.toLowerCase()
            .match(Gb)[5] || l) && decodeURIComponent(a);
        return !b ? n : !".swf .html .jpg .jpeg .png .gif".split(" ")
            .some(function (a) {
                return -1 != b.indexOf(a)
            })
    }

    function X(a) {
        return u(a) && (0 == ma("http://", a.substr(0, 7)) || 0 == ma("https://", a.substr(0, 8)))
    };

    function Rb(a, b) {
        this.z = [];
        this.T = n;
        this.g = l;
        this.m = new nb(this);
        window.MutationObserver ? this.Q = new window.MutationObserver(this.D.bind(this)) : (this.g = new S(Sb), pb(this.m, this.g, Bb, this.D));
        this.$ = {
            attributes: k
            , ma: k
        };
        this.Y = b ? a.bind(b) : a;
        "undefined" === typeof window.U && (window.U = function (a, b) {
            var g = document.createEvent("Event");
            g.initEvent(a, b.bubbles, b.cancelable, b.detail);
            return g
        })
    }
    var Sb = 1E3;
    x(Rb, y);
    Rb.prototype.D = function () {
        for (var a = [], b = 0; b < this.z.length; ++b) {
            var c = this.z[b]
                , d = Lb(c.L)
                , g = Tb(c.s, d);
            c.s = c.s.concat(d);
            g.length && (a.push(b), this.Y(c.L, c.s))
        }
    };

    function Tb(a, b) {
        var c = [];
        b.forEach(function (b) {
            a.some(function (a) {
                return a.url === b.url
            }) || c.push(b)
        });
        return c
    };

    function Ub(a, b) {
        var c;
        if (b instanceof T) c = b.height, b = b.width;
        else throw Error("missing height argument");
        a.style.width = Vb(b);
        a.style.height = Vb(c)
    }

    function Vb(a) {
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    }

    function Wb(a) {
        var b = a.offsetWidth
            , c = a.offsetHeight
            , d = F && !b && !c;
        return (b === j || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), D && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new T(b.right - b.left, b.bottom - b.top)) : new T(b, c)
    };

    function Xb() {};
    var Yb;

    function Zb() {}
    x(Zb, Xb);
    Yb = new Zb;

    function $b(a) {
        var b = new N;
        sb(b, function () {});
        a: {
            var c = {}
                , d = function (a) {
                    O(b, a)
                } || aa
                , g = function (a) {
                    P(b, a)
                } || aa
                , e, f, h;
            b: {
                if (!Yb.N && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                    for (var i = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], m = 0; m < i.length; m++) {
                        var p = i[m];
                        try {
                            new ActiveXObject(p);
                            h = Yb.N = p;
                            break b
                        } catch (q) {}
                    }
                    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
                }
                h = Yb.N
            }
            f = h ? new ActiveXObject(h) :
                new XMLHttpRequest;
            try {
                f.open("GET", a, k)
            } catch (V) {
                g(new Y("Error opening XHR: " + V.message, a, f));
                break a
            }
            f.onreadystatechange = function () {
                if (4 == f.readyState) {
                    window.clearTimeout(e);
                    var b;
                    a: switch (f.status) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        b = k;
                        break a;
                    default:
                        b = n
                    }
                    if (!b && (b = 0 === f.status)) b = a.match(Gb)[1] || l, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = b ? b.toLowerCase() : "", b = !("http" == b || "https" == b || "" == b);
                    b ? d(f) : g(new ac(f.status, a, f))
                }
            };
            if (c.headers)
                for (var A in c.headers) f.setRequestHeader(A
                    , c.headers[A]);
            c.withCredentials && (f.withCredentials = c.withCredentials);
            c.Z && f.overrideMimeType(c.Z);
            0 < c.ja && (e = window.setTimeout(function () {
                f.onreadystatechange = aa;
                f.abort();
                g(new bc(a, f))
            }, c.ja));
            try {
                f.send(l)
            } catch (mc) {
                g(new Y("Error sending XHR: " + mc.message, a, f))
            }
        }
        return R(b, cc)
    }

    function cc(a) {
        return a.responseText
    }

    function Y(a, b, c) {
        z.call(this, a + ", url=" + b);
        this.url = b;
        this.oa = c
    }
    x(Y, z);
    Y.prototype.name = "XhrError";

    function ac(a, b, c) {
        Y.call(this, "Request Failed, status=" + a, b, c);
        this.status = a
    }
    x(ac, Y);
    ac.prototype.name = "XhrHttpError";

    function bc(a, b) {
        Y.call(this, "Request timed out", a, b)
    }
    x(bc, Y);
    bc.prototype.name = "XhrTimeoutError";
    window.console.log.bind(window.console);

    function dc(a) {
        this.i = a;
        this.e = [this.da, this.ea, this.fa]
    }
    r = dc.prototype;
    r.F = function () {
        var a = [];
        this.e.forEach(function (b) {
            (b = b.call(this)) && a.push(b)
        }, this);
        return ec(a)
    };

    function ec(a) {
        var b = new N;
        0 < a.length ? (a = tb.apply(tb, a), Q(a, function (a) {
            var d = [];
            a.h.forEach(function (a) {
                "success" == a.c && a.h && d.push.apply(d, a.h)
            });
            0 < d.length ? O(b, d) : P(b, l)
        })) : P(b, l);
        return b
    }
    r.da = function () {
        var a;
        ["domain", "file", "filekey"].every(function (a) {
            return u(this.i[a])
        }, this) ? (a = this.i, a = W(a.domain + "/api/player.api.php", "file", a.file, "key", a.filekey), a = fc(a)) : a = l;
        return a
    };
    r.fa = function () {
        var a, b = this.i
            , c = [];
        ["playlist", "feedurl", "xmlurl", "configuration", "config"].forEach(function (a) {
            c = c.concat(Mb(b, a))
        });
        a = c;
        var d = a.filter(Pb)
            , g = new N;
        if (0 < d.length) return O(g, d), g;
        a = a.filter(function (a) {
            return X(a) || u(a) && 0 == a.lastIndexOf("/", 0)
        });
        return 0 < a.length ? ec(a.map(this.ga, this)) : l
    };
    r.ga = function (a) {
        var b = $b(a)
            , a = R(b, Ob);
        return R(a, function (a) {
            var d = l
                , g = []
                , e = Jb(b.h);
            if (e) try {
                d = e.plugins.lighttpd.params
            } catch (f) {}
            d && t(d) && d.forEach(function (a) {
                a.name && a.value && g.push(a.name, a.value)
            });
            return a.map(ta)
                .map(function (a) {
                    return W.apply(W, [a].concat(g))
                })
        }.bind(this))
    };
    r.ea = function () {
        var a = this.i["premium.token"];
        if (!u(a)) return l;
        a = W("/player_api/info", "token", a);
        return fc(a)
    };

    function fc(a) {
        a = $b(a);
        a = R(a, Kb);
        return R(a, function (a) {
            return a && X(a.url) ? [a.url] : l
        })
    };

    function gc(a) {
        function b(a) {
            for (var g = 0, h = 0, i = a; i < c.length; ++i)
                if (a = c[i], 0 == g)
                    if ('"' == a[0]) d.push(a), g++;
                    else {
                        if ("}" == a) {
                            for (;
                                "," == d.slice(-1);) d.pop();
                            d.push(a);
                            return i
                        }
                    } else if (1 == g) ":" == a && (d.push(a), g++);
            else if (2 == g)
                if ("{" == a) d.push(a), i = b(i + 1), g++;
                else if ("[" == a) {
                d.push(a);
                a: {
                    a = 0;
                    for (i += 1; i < c.length; ++i) {
                        var m = c[i];
                        if (0 == a)
                            if ('"' == m[0]) d.push(m), a++;
                            else {
                                if ("]" == m) {
                                    d.push(m);
                                    break a
                                }
                                "{" == m && (d.push(m), i = b(i + 1), a++)
                            } else if (1 == a)
                            if ("," == m) d.push(m), a = 0;
                            else if ("]" == m) {
                            d.push(m);
                            break a
                        }
                    }
                    i =
                        c.length - 1
                }
                g++
            } else '"' == a[0] && (d.push(a), g++);
            else if (3 == g)
                if ("," == a) d.push(a), g = 0;
                else if ("}" == a)
                if (0 < h) h--;
                else return d.push(a), i;
            else "{" == a && h++;
            return c.length - 1
        }
        if ("{" != a[0]) return l;
        var c = [];
        a.forEach(function (a) {
            '"' == a[0] || "'" == a[0] ? c.push('"' + a.substr(1, a.length - 2) + '"') : 0 <= ":{}[],".split("")
                .indexOf(a) ? c.push(a) : /\s+/.test(a) || c.push('"' + a + '"')
        });
        var d = [];
        d.push(c[0]);
        b(1);
        a = d.join(" ");
        try {
            return JSON.parse(a)
        } catch (g) {
            return l
        }
    };
    var Z = {
            string1: /"(?:(?:\\\n|\\"|[^"\n]))*?"/
            , string2: /'(?:(?:\\\n|\\'|[^'\n]))*?'/
            , comment1: /\/\*[\s\S]*?\*\//
            , comment2: /\/\/.*?\n/
            , whitespace: /\s+/
            , keyword: RegExp("/\\b(?:var|let|for|if|else|in|class|function|return|with|case|break|switch|export|new|while|do|throw|catch)\\b")
            , regexp: /\/(?:(?:\\\/|[^\/]))*?\//
            , name: /[a-zA-Z_\$][a-zA-Z_\$0-9]*/
            , number: /\d+(?:\.\d+)?(?:e[+-]?\d+)?/
            , parens: /[\(\)]/
            , curly: /[{}]/
            , square: /[\[\]]/
            , punct: /[;.:\?\^%<>=!&|+\-,]/
        }
        , hc = function (a) {
            var b = Ba(arguments, 0);
            return RegExp("(" +
                b.map(function (a) {
                    a = a.toString();
                    return "(?:" + a.substring(1, a.length - 1) + ")"
                })
                .join("|") + ")")
        }(Z.string1, Z.string2, Z.comment1, Z.comment2, Z.regexp, Z.whitespace, Z.name, Z.number, Z.parens, Z.curly, Z.square, Z.punct);

    function ic(a) {
        return a.split(hc)
            .filter(function (a, c) {
                if (c % 2) return k;
                if ("" !== a) throw Error("invalid token:" + JSON.stringify(a));
                return n
            })
    }
    for (var jc in Z);

    function kc(a) {
        function b(a) {
            if (!(a.source !== d.contentWindow || "null" !== a.origin)) {
                var b = a.data.type
                    , a = a.data.data;
                "setup" === b ? O(g, a) : "done" === b && c()
            }
        }

        function c() {
            e || (e = k, window.removeEventListener("message", b, n), d && d.parentNode && d.parentNode.removeChild(d), f && Ab.clearTimeout(f), g.c == M && P(g, l))
        }
        var d = Fb("iframe", {
                sandbox: "allow-scripts"
                , srcdoc: "<script>" + ('window.jwplayer = function(id) {  return {     setup: function(cfg) {       console.log(arguments);      window.parent.postMessage({type: "setup",         data: {id: id, cfg: cfg}}, "*");    }  };};\ntry {\n' +
                    a + '\n} catch(e) {console.warn(e)}; \n window.parent.postMessage({type: "done"}, "*");') + "<\/script>"
            })
            , g = new N
            , e = n
            , f;
        window.addEventListener("message", b, n);
        document.body.appendChild(d);
        a = c;
        if (!da(a))
            if (a && "function" == typeof a.handleEvent) a = ia(a.handleEvent, a);
            else throw Error("Invalid listener argument");
        f = Ab.setTimeout(a, 500);
        return g
    }

    function lc(a) {
        for (var b = 0, c = 0; c < a.length; ++c) {
            var d = a[c];
            "(" == d ? b++ : ")" == d && b--;
            if (0 == b) return c
        }
        return -1
    };

    function nc() {
        this.e = [this.la, this.W, this.V]
    }
    r = nc.prototype;
    r.F = function (a) {
        var b;
        var c = function (a) {
                d ? d["call_" + g] = a : d = a;
                g++
            }
            , d = l
            , g = 0
            , e = new N
            , f = a.id || a.name;
        if (f) {
            var h = /jwplayer\s*\(\s*["']([^"']+?)["']\s*\)\s*.\s*setup/gm
                , i = [];
            b = document.querySelectorAll("script:not([src])");
            ya(b, function (a) {
                    return a.innerHTML
                })
                .forEach(function (a) {
                    1E4 > a.length && i.push(kc(a));
                    for (var b;
                        (b = h.exec(a)) !== l;)
                        if (b[1] == f) {
                            b = ic(a.substr(h.lastIndex));
                            if ("(" != b[0]) throw Error();
                            b = b.slice(1, lc(b));
                            (b = gc(b)) && c(b)
                        }
                });
            rb(tb.apply(tb, i), function (a) {
                a.forEach(function (a) {
                    "success" ==
                    a.c && (a = a.h, a.id == f && a.cfg && c(a.cfg))
                });
                O(e, d)
            })
        } else O(e, l);
        b = R(e, function (b) {
            var c = {};
            b && fb(c, b);
            if (b = oc(a, "flashvars"))(b = Jb(b)) && fb(c, b);
            (b = oc(a, "movie")) || (b = oc(a, "src"));
            if (b && (b = b.match(Gb)[6] || l))(b = Jb(b)) && b && fb(c, b);
            return c
        }.bind(this));
        var m = function (b) {
                b = b.h;
                window.console.log(JSON.stringify(b));
                var c, d = []
                    , d = [];
                this.i = b;
                this.e.forEach(function (a) {
                    a = a.call(this);
                    t(a) ? d.push.apply(d, a) : u(a) && d.push(a)
                }, this);
                var e = {}
                    , d = d.filter(function (a) {
                        var b = a.url
                            , c = e.hasOwnProperty(b);
                        c && (!e[b].label &&
                            a.label) && (e[b].label = a.label);
                        e[b] = a;
                        return !c
                    })
                    , g = Mb(b, "key");
                0 < g.length && (d = d.map(function (a) {
                    a.url = W(a.url, "key", g[0]);
                    return a
                }));
                c = d;
                if (0 < c.length) return b = new N, O(b, c), b;
                c = b["proxy.link"];
                if (!c || !X(c)) c = n;
                else {
                    var f;
                    c: {
                        f = 9 == a.nodeType ? a : a.ownerDocument || a.document;
                        if (f.defaultView && f.defaultView.getComputedStyle && (f = f.defaultView.getComputedStyle(a, l))) {
                            f = f.display || f.getPropertyValue("display") || "";
                            break c
                        }
                        f = ""
                    }
                    f || (f = (a.currentStyle ? a.currentStyle.display : l) || a.style && a.style.display);
                    if ("none" !=
                        f) f = Wb(a);
                    else {
                        f = a.style;
                        var h = f.display
                            , i = f.visibility
                            , m = f.position;
                        f.visibility = "hidden";
                        f.position = "absolute";
                        f.display = "inline";
                        var p = Wb(a);
                        f.display = h;
                        f.position = m;
                        f.visibility = i;
                        f = p
                    }
                    h = Fb("div", "mb-videoget-framed", [Fb("a", {
                        href: c
                        , target: "_blank"
                    }, "Maximize in new Tab (" + c + ")")]);
                    f.width = Math.min(window.innerWidth, Math.max(f.width, 600));
                    f.height = Math.min(window.innerHeight, Math.max(f.height, 800));
                    c = Fb("iframe", {
                        src: c
                    });
                    Ub(h, f);
                    f.height -= 30;
                    Ub(c, f);
                    c.style.overflow = "scroll";
                    h.appendChild(c);
                    a.parentNode &&
                        a.parentNode.insertBefore(h, a);
                    a && a.parentNode && a.parentNode.removeChild(a);
                    c = k
                }
                return c ? l : (new dc(b))
                    .F()
            }.bind(this)
            , p = new N;
        Q(b, function (a) {
            "success" == a.c ? (a = m(a), Q(a, function (a) {
                "success" == a.c ? O(p, a.h) : P(p, a.getError())
            })) : P(p, a.getError())
        });
        return p
    };
    r.la = function () {
        var a = this.i
            , b = a.clip_id
            , a = a.js_getConfig;
        if (b && u(a)) {
            a = a.match(/\d+_\d+/);
            if (!a) return l;
            var a = "clip" + a[0]
                , c = window[a];
            if (!v(c)) return l;
            a = Mb(c, "signature");
            if (1 > a.length) return l;
            var a = a[0]
                , d = Mb(c, "timestamp");
            if (1 > d.length) return l;
            d = d[0];
            c = Mb(c, "hd");
            c = 0 < c.length && c[0];
            return {
                url: W("http://player.vimeo.com/play_redirect", "clip_id", b, "sig", a, "time", d, "quality", c ? "hd" : "sd", "codecs", "H264,VP8,VP6")
            }
        }
        return l
    };
    r.W = function () {
        var a = [];
        this.w(a, this.i);
        return a
    };
    r.V = function () {
        var a = [];
        this.v(a, this.i);
        return a
    };
    r.w = function (a, b) {
        Pb(b) ? a.push({
            url: b
        }) : t(b) ? b.forEach(ja(this.w, a), this) : v(b) && this.w(a, db(b))
    };
    r.v = function (a, b) {
        t(b) ? b.forEach(ja(this.v, a), this) : v(b) && bb(b, function (c, d) {
            if (("url" == d || "file" == d) && Qb(c)) {
                var g = {
                    url: c
                };
                u(b.label) && (g.label = b.label);
                a.push(g)
            } else this.v(a, c)
        }, this)
    };

    function oc(a, b) {
        var c = a.tagName.toLowerCase()
            , d = l;
        "object" == c ? (c = xa(Aa(a.getElementsByTagName("param")), function (a) {
            return a.name.toLowerCase() == b
        }), 0 < c.length && (d = c[0].value)) : "embed" == c && (d = a.getAttribute(b));
        return d
    };

    function pc() {
        y.call(this);
        this.A = l;
        this.m = new nb(this);
        this.I = j;
        this.K = new xb
    }
    x(pc, y);
    pc.prototype.aa = function (a) {
        var b = a.target
            , a = w(b);
        if (!this.K.contains(a))
            if (this.K.add(a), a = b.tagName.toLowerCase(), window.console.log("detected " + a), "video" == a) Lb(b), this.A || (this.A = new Rb(this.ba, this)), a = this.A, a.z.push({
                L: b
                , s: []
            }), a.Q && a.Q.observe(b, a.$), !a.T && a.g && (a.g.start(), a.T = k), a.D();
            else if ("object" == a || "embed" == a) b.querySelector("video") || b.querySelector('embed[type^="video/"]') ? window.console.log("ignoring non-flash object") : ("embed" == b.tagName.toLowerCase() && u(b.type) && 0 == ma("video/"
            , b.type.substr(0, 6)) && X(b.src) ? (qc(this, b, {
            sources: [{
                url: singleEncodeURI(b.src)
            }]
            , referer: window.location.href
        }), a = k) : a = n, a || (a = (new nc)
            .F(b), a !== l && (rb(a, function (a) {
                a = {
                    sources: a.map(function (a) {
                        if (u(a)) return {
                            url: singleEncodeURI(a)
                        };
                        a.url = singleEncodeURI(a.url);
                        return a
                    })
                };
                qc(this, b, a)
            }, this), sb(a, function () {
                qc(this, b, l)
            }, this))))
    };
    pc.prototype.ba = function (a, b) {
        qc(this, a, {
            sources: b
            , referer: window.location.href
        })
    };

    function qc(a, b, c) {
        c && (c.origin = window.location.href);
        a.I(b, c)
    };

    function rc(a) {
        var b = new pc;
        b.I = a;
        pb(b.m, document, "webkitAnimationStart", b.aa)
    }
    var sc = ["libvget", "detect"]
        , $ = s;
    !(sc[0] in $) && $.execScript && $.execScript("var " + sc[0]);
    for (var tc; sc.length && (tc = sc.shift());) !sc.length && rc !== j ? $[tc] = rc : $ = $[tc] ? $[tc] : $[tc] = {};
})();
