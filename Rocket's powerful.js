
(function(p, ba) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = p.document ? ba(p, !0) : function(p) {
        if (!p.document)
            throw Error("jQuery requires a window with a document");
        return ba(p)
    }
    : ba(p)
}
)("undefined" !== typeof window ? window : this, function(p, ba) {
    function da(a) {
        var b = !!a && "length"in a && a.length
          , d = c.type(a);
        return "function" === d || c.isWindow(a) ? !1 : "array" === d || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
    }
    function ua(a, b, d) {
        if (c.isFunction(b))
            return c.grep(a, function(a, c) {
                return !!b.call(a, c, a) !== d
            });
        if (b.nodeType)
            return c.grep(a, function(a) {
                return a === b !== d
            });
        if ("string" === typeof b) {
            if (fc.test(b))
                return c.filter(b, a, d);
            b = c.filter(b, a)
        }
        return c.grep(a, function(a) {
            return -1 < c.inArray(a, b) !== d
        })
    }
    function G(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    function Ka(a) {
        var b = {};
        c.each(a.match(J) || [], function(a, c) {
            b[c] = !0
        });
        return b
    }
    function ib() {
        n.addEventListener ? (n.removeEventListener("DOMContentLoaded", C),
        p.removeEventListener("load", C)) : (n.detachEvent("onreadystatechange", C),
        p.detachEvent("onload", C))
    }
    function C() {
        if (n.addEventListener || "load" === p.event.type || "complete" === n.readyState)
            ib(),
            c.ready()
    }
    function jb(a, b, d) {
        if (void 0 === d && 1 === a.nodeType)
            if (d = "data-" + b.replace(gc, "-$1").toLowerCase(),
            d = a.getAttribute(d),
            "string" === typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : hc.test(d) ? c.parseJSON(d) : d
                } catch (e) {}
                c.data(a, b, d)
            } else
                d = void 0;
        return d
    }
    function La(a) {
        for (var b in a)
            if (("data" !== b || !c.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function kb(a, b, d, e) {
        if (pa(a)) {
            var f = c.expando
              , g = a.nodeType
              , h = g ? c.cache : a
              , l = g ? a[f] : a[f] && f;
            if (l && h[l] && (e || h[l].data) || void 0 !== d || "string" !== typeof b) {
                l || (l = g ? a[f] = R.pop() || c.guid++ : f);
                h[l] || (h[l] = g ? {} : {
                    toJSON: c.noop
                });
                if ("object" === typeof b || "function" === typeof b)
                    e ? h[l] = c.extend(h[l], b) : h[l].data = c.extend(h[l].data, b);
                a = h[l];
                e || (a.data || (a.data = {}),
                a = a.data);
                void 0 !== d && (a[c.camelCase(b)] = d);
                "string" === typeof b ? (d = a[b],
                null == d && (d = a[c.camelCase(b)])) : d = a;
                return d
            }
        }
    }
    function lb(a, b, d) {
        if (pa(a)) {
            var e, f, g = a.nodeType, h = g ? c.cache : a, l = g ? a[c.expando] : c.expando;
            if (h[l]) {
                if (b && (e = d ? h[l] : h[l].data)) {
                    c.isArray(b) ? b = b.concat(c.map(b, c.camelCase)) : b in e ? b = [b] : (b = c.camelCase(b),
                    b = b in e ? [b] : b.split(" "));
                    for (f = b.length; f--; )
                        delete e[b[f]];
                    if (d ? !La(e) : !c.isEmptyObject(e))
                        return
                }
                if (!d && (delete h[l].data,
                !La(h[l])))
                    return;
                g ? c.cleanData([a], !0) : q.deleteExpando || h != h.window ? delete h[l] : h[l] = void 0
            }
        }
    }
    function mb(a, b, d, e) {
        var f = 1
          , g = 20
          , h = e ? function() {
            return e.cur()
        }
        : function() {
            return c.css(a, b, "")
        }
          , l = h()
          , k = d && d[3] || (c.cssNumber[b] ? "" : "px")
          , m = (c.cssNumber[b] || "px" !== k && +l) && Ma.exec(c.css(a, b));
        if (m && m[3] !== k) {
            k = k || m[3];
            d = d || [];
            m = +l || 1;
            do
                f = f || ".5",
                m /= f,
                c.style(a, b, m + k);
            while (f !== (f = h() / l) && 1 !== f && --g)
        }
        if (d) {
            m = +m || +l || 0;
            var r = d[1] ? m + (d[1] + 1) * d[2] : +d[2];
            e && (e.unit = k,
            e.start = m,
            e.end = r)
        }
        return r
    }
    function nb(a) {
        var b = "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video".split(" ");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; b.length; )
                a.createElement(b.pop());
        return a
    }
    function y(a, b) {
        var d, e, f = 0, g = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!g)
            for (g = [],
            d = a.childNodes || a; null != (e = d[f]); f++)
                !b || c.nodeName(e, b) ? g.push(e) : c.merge(g, y(e, b));
        return void 0 === b || b && c.nodeName(a, b) ? c.merge([a], g) : g
    }
    function Na(a, b) {
        for (var d, e = 0; null != (d = a[e]); e++)
            c._data(d, "globalEval", !b || c._data(b[e], "globalEval"))
    }
    function ic(a) {
        Oa.test(a.type) && (a.defaultChecked = a.checked)
    }
    function ob(a, b, d, e, f) {
        for (var g, h, l, k, m, r, t = a.length, I = nb(b), p = [], n = 0; n < t; n++)
            if ((h = a[n]) || 0 === h)
                if ("object" === c.type(h))
                    c.merge(p, h.nodeType ? [h] : h);
                else if (jc.test(h)) {
                    l = l || I.appendChild(b.createElement("div"));
                    k = (pb.exec(h) || ["", ""])[1].toLowerCase();
                    r = H[k] || H._default;
                    l.innerHTML = r[1] + c.htmlPrefilter(h) + r[2];
                    for (g = r[0]; g--; )
                        l = l.lastChild;
                    !q.leadingWhitespace && Pa.test(h) && p.push(b.createTextNode(Pa.exec(h)[0]));
                    if (!q.tbody)
                        for (g = (h = "table" !== k || qb.test(h) ? "\x3ctable\x3e" !== r[1] || qb.test(h) ? 0 : l : l.firstChild) && h.childNodes.length; g--; )
                            c.nodeName(m = h.childNodes[g], "tbody") && !m.childNodes.length && h.removeChild(m);
                    c.merge(p, l.childNodes);
                    for (l.textContent = ""; l.firstChild; )
                        l.removeChild(l.firstChild);
                    l = I.lastChild
                } else
                    p.push(b.createTextNode(h));
        l && I.removeChild(l);
        q.appendChecked || c.grep(y(p, "input"), ic);
        for (n = 0; h = p[n++]; )
            if (e && -1 < c.inArray(h, e))
                f && f.push(h);
            else if (a = c.contains(h.ownerDocument, h),
            l = y(I.appendChild(h), "script"),
            a && Na(l),
            d)
                for (g = 0; h = l[g++]; )
                    rb.test(h.type || "") && d.push(h);
        return I
    }
    function va() {
        return !0
    }
    function qa() {
        return !1
    }
    function sb() {
        try {
            return n.activeElement
        } catch (a) {}
    }
    function Qa(a, b, d, e, f, g) {
        var h;
        if ("object" === typeof b) {
            "string" !== typeof d && (e = e || d,
            d = void 0);
            for (h in b)
                Qa(a, h, d, e, b[h], g);
            return a
        }
        null == e && null == f ? (f = d,
        e = d = void 0) : null == f && ("string" === typeof d ? (f = e,
        e = void 0) : (f = e,
        e = d,
        d = void 0));
        if (!1 === f)
            f = qa;
        else if (!f)
            return a;
        if (1 === g) {
            var l = f;
            f = function(a) {
                c().off(a);
                return l.apply(this, arguments)
            }
            ;
            f.guid = l.guid || (l.guid = c.guid++)
        }
        return a.each(function() {
            c.event.add(this, b, f, e, d)
        })
    }
    function tb(a, b) {
        return c.nodeName(a, "table") && c.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function ub(a) {
        a.type = (null !== c.find.attr(a, "type")) + "/" + a.type;
        return a
    }
    function vb(a) {
        var b = kc.exec(a.type);
        b ? a.type = b[1] : a.removeAttribute("type");
        return a
    }
    function wb(a, b) {
        if (1 === b.nodeType && c.hasData(a)) {
            var d, e;
            var f = c._data(a);
            a = c._data(b, f);
            var g = f.events;
            if (g)
                for (d in delete a.handle,
                a.events = {},
                g)
                    for (f = 0,
                    e = g[d].length; f < e; f++)
                        c.event.add(b, d, g[d][f]);
            a.data && (a.data = c.extend({}, a.data))
        }
    }
    function ea(a, b, d, e) {
        b = xb.apply([], b);
        var f, g = 0, h = a.length, l = h - 1, k = b[0], m = c.isFunction(k);
        if (m || 1 < h && "string" === typeof k && !q.checkClone && lc.test(k))
            return a.each(function(c) {
                var f = a.eq(c);
                m && (b[0] = k.call(this, c, f.html()));
                ea(f, b, d, e)
            });
        if (h) {
            var r = ob(b, a[0].ownerDocument, !1, a, e);
            var t = r.firstChild;
            1 === r.childNodes.length && (r = t);
            if (t || e) {
                var p = c.map(y(r, "script"), ub);
                for (f = p.length; g < h; g++)
                    t = r,
                    g !== l && (t = c.clone(t, !0, !0),
                    f && c.merge(p, y(t, "script"))),
                    d.call(a[g], t, g);
                if (f)
                    for (r = p[p.length - 1].ownerDocument,
                    c.map(p, vb),
                    g = 0; g < f; g++)
                        t = p[g],
                        rb.test(t.type || "") && !c._data(t, "globalEval") && c.contains(r, t) && (t.src ? c._evalUrl && c._evalUrl(t.src) : c.globalEval((t.text || t.textContent || t.innerHTML || "").replace(mc, "")));
                r = t = null
            }
        }
        return a
    }
    function yb(a, b, d) {
        for (var e = b ? c.filter(b, a) : a, f = 0; null != (b = e[f]); f++)
            d || 1 !== b.nodeType || c.cleanData(y(b)),
            b.parentNode && (d && c.contains(b.ownerDocument, b) && Na(y(b, "script")),
            b.parentNode.removeChild(b));
        return a
    }
    function zb(a, b) {
        a = c(b.createElement(a)).appendTo(b.body);
        b = c.css(a[0], "display");
        a.detach();
        return b
    }
    function za(a) {
        var b = n
          , d = Ab[a];
        d || (d = zb(a, b),
        "none" !== d && d || (wa = (wa || c("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e")).appendTo(b.documentElement),
        b = (wa[0].contentWindow || wa[0].contentDocument).document,
        b.write(),
        b.close(),
        d = zb(a, b),
        wa.detach()),
        Ab[a] = d);
        return d
    }
    function Ra(a, b) {
        return {
            get: function() {
                if (a())
                    delete this.get;
                else
                    return (this.get = b).apply(this, arguments)
            }
        }
    }
    function Bb(a) {
        if (a in Cb)
            return a;
        for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = Db.length; c--; )
            if (a = Db[c] + b,
            a in Cb)
                return a
    }
    function Eb(a, b) {
        for (var d, e, f, g = [], h = 0, l = a.length; h < l; h++)
            e = a[h],
            e.style && (g[h] = c._data(e, "olddisplay"),
            d = e.style.display,
            b ? (g[h] || "none" !== d || (e.style.display = ""),
            "" === e.style.display && fa(e) && (g[h] = c._data(e, "olddisplay", za(e.nodeName)))) : (f = fa(e),
            (d && "none" !== d || !f) && c._data(e, "olddisplay", f ? d : c.css(e, "display"))));
        for (h = 0; h < l; h++)
            e = a[h],
            !e.style || b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? g[h] || "" : "none");
        return a
    }
    function Fb(a, b, c) {
        return (a = nc.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }
    function Gb(a, b, d, e, f) {
        b = d === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var g = 0; 4 > b; b += 2)
            "margin" === d && (g += c.css(a, d + T[b], !0, f)),
            e ? ("content" === d && (g -= c.css(a, "padding" + T[b], !0, f)),
            "margin" !== d && (g -= c.css(a, "border" + T[b] + "Width", !0, f))) : (g += c.css(a, "padding" + T[b], !0, f),
            "padding" !== d && (g += c.css(a, "border" + T[b] + "Width", !0, f)));
        return g
    }
    function Hb(a, b, d) {
        var e = !0
          , f = "width" === b ? a.offsetWidth : a.offsetHeight
          , g = ha(a)
          , h = q.boxSizing && "border-box" === c.css(a, "boxSizing", !1, g);
        if (0 >= f || null == f) {
            f = ia(a, b, g);
            if (0 > f || null == f)
                f = a.style[b];
            if (Ba.test(f))
                return f;
            e = h && (q.boxSizingReliable() || f === a.style[b]);
            f = parseFloat(f) || 0
        }
        return f + Gb(a, b, d || (h ? "border" : "content"), e, g) + "px"
    }
    function D(a, b, c, e, f) {
        return new D.prototype.init(a,b,c,e,f)
    }
    function Ib() {
        p.setTimeout(function() {
            W = void 0
        });
        return W = c.now()
    }
    function Ca(a, b) {
        var c = {
            height: a
        }
          , e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            var f = T[e];
            c["margin" + f] = c["padding" + f] = a
        }
        b && (c.opacity = c.width = a);
        return c
    }
    function Jb(a, b, c) {
        for (var d, f = (S.tweeners[b] || []).concat(S.tweeners["*"]), g = 0, h = f.length; g < h; g++)
            if (d = f[g].call(c, b, a))
                return d
    }
    function oc(a, b) {
        var d, e;
        for (d in a) {
            var f = c.camelCase(d);
            var g = b[f];
            var h = a[d];
            c.isArray(h) && (g = h[1],
            h = a[d] = h[0]);
            d !== f && (a[f] = h,
            delete a[d]);
            if ((e = c.cssHooks[f]) && "expand"in e)
                for (d in h = e.expand(h),
                delete a[f],
                h)
                    d in a || (a[d] = h[d],
                    b[d] = g);
            else
                b[f] = g
        }
    }
    function S(a, b, d) {
        var e, f = 0, g = S.prefilters.length, h = c.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (e)
                return !1;
            var b = W || Ib();
            b = Math.max(0, k.startTime + k.duration - b);
            for (var c = 1 - (b / k.duration || 0), d = 0, f = k.tweens.length; d < f; d++)
                k.tweens[d].run(c);
            h.notifyWith(a, [k, c, b]);
            if (1 > c && f)
                return b;
            h.resolveWith(a, [k]);
            return !1
        }, k = h.promise({
            elem: a,
            props: c.extend({}, b),
            opts: c.extend(!0, {
                specialEasing: {},
                easing: c.easing._default
            }, d),
            originalProperties: b,
            originalOptions: d,
            startTime: W || Ib(),
            duration: d.duration,
            tweens: [],
            createTween: function(b, d) {
                b = c.Tween(a, k.opts, b, d, k.opts.specialEasing[b] || k.opts.easing);
                k.tweens.push(b);
                return b
            },
            stop: function(b) {
                var c = 0
                  , d = b ? k.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; c < d; c++)
                    k.tweens[c].run(1);
                b ? (h.notifyWith(a, [k, 1, 0]),
                h.resolveWith(a, [k, b])) : h.rejectWith(a, [k, b]);
                return this
            }
        });
        d = k.props;
        for (oc(d, k.opts.specialEasing); f < g; f++)
            if (b = S.prefilters[f].call(k, a, d, k.opts))
                return c.isFunction(b.stop) && (c._queueHooks(k.elem, k.opts.queue).stop = c.proxy(b.stop, b)),
                b;
        c.map(d, Jb, k);
        c.isFunction(k.opts.start) && k.opts.start.call(a, k);
        c.fx.timer(c.extend(l, {
            elem: a,
            anim: k,
            queue: k.opts.queue
        }));
        return k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }
    function ja(a) {
        return c.attr(a, "class") || ""
    }
    function Kb(a) {
        return function(b, d) {
            "string" !== typeof b && (d = b,
            b = "*");
            var e = 0
              , f = b.toLowerCase().match(J) || [];
            if (c.isFunction(d))
                for (; b = f[e++]; )
                    "+" === b.charAt(0) ? (b = b.slice(1) || "*",
                    (a[b] = a[b] || []).unshift(d)) : (a[b] = a[b] || []).push(d)
        }
    }
    function Lb(a, b, d, e) {
        function f(l) {
            var k;
            g[l] = !0;
            c.each(a[l] || [], function(a, c) {
                a = c(b, d, e);
                if ("string" === typeof a && !h && !g[a])
                    return b.dataTypes.unshift(a),
                    f(a),
                    !1;
                if (h)
                    return !(k = a)
            });
            return k
        }
        var g = {}
          , h = a === Sa;
        return f(b.dataTypes[0]) || !g["*"] && f("*")
    }
    function Ta(a, b) {
        var d, e, f = c.ajaxSettings.flatOptions || {};
        for (e in b)
            void 0 !== b[e] && ((f[e] ? a : d || (d = {}))[e] = b[e]);
        d && c.extend(!0, a, d);
        return a
    }
    function pc(a) {
        if (!c.contains(a.ownerDocument || n, a))
            return !0;
        for (; a && 1 === a.nodeType; ) {
            if ("none" === (a.style && a.style.display || c.css(a, "display")) || "hidden" === a.type)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    function Ua(a, b, d, e) {
        var f;
        if (c.isArray(b))
            c.each(b, function(b, c) {
                d || qc.test(a) ? e(a, c) : Ua(a + "[" + ("object" === typeof c && null != c ? b : "") + "]", c, d, e)
            });
        else if (d || "object" !== c.type(b))
            e(a, b);
        else
            for (f in b)
                Ua(a + "[" + f + "]", b[f], d, e)
    }
    function Va() {
        try {
            return new p.XMLHttpRequest
        } catch (a) {}
    }
    function Mb() {
        try {
            return new p.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    }
    function Nb(a) {
        return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var R = []
      , n = p.document
      , X = R.slice
      , xb = R.concat
      , Wa = R.push
      , Ob = R.indexOf
      , Da = {}
      , rc = Da.toString
      , ra = Da.hasOwnProperty
      , q = {}
      , c = function(a, b) {
        return new c.fn.init(a,b)
    }
      , sc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , tc = /^-ms-/
      , uc = /-([\da-z])/gi
      , vc = function(a, b) {
        return b.toUpperCase()
    };
    c.fn = c.prototype = {
        jquery: "1.12.4-aem",
        constructor: c,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
        },
        pushStack: function(a) {
            a = c.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function(a) {
            return c.each(this, a)
        },
        map: function(a) {
            return this.pushStack(c.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Wa,
        sort: R.sort,
        splice: R.splice
    };
    c.extend = c.fn.extend = function() {
        var a, b, d, e = arguments[0] || {}, f = 1, g = arguments.length, h = !1;
        "boolean" === typeof e && (h = e,
        e = arguments[f] || {},
        f++);
        "object" === typeof e || c.isFunction(e) || (e = {});
        f === g && (e = this,
        f--);
        for (; f < g; f++)
            if (null != (d = arguments[f]))
                for (b in d) {
                    var l = e[b];
                    var k = d[b];
                    "__proto__" !== b && e !== k && (h && k && (c.isPlainObject(k) || (a = c.isArray(k))) ? (a ? (a = !1,
                    l = l && c.isArray(l) ? l : []) : l = l && c.isPlainObject(l) ? l : {},
                    e[b] = c.extend(h, l, k)) : void 0 !== k && (e[b] = k))
                }
        return e
    }
    ;
    c.extend({
        expando: "jQuery" + ("1.12.4-aem" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === c.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === c.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !c.isArray(a) && 0 <= b - parseFloat(b) + 1
        },
        isEmptyObject: function(a) {
            for (var b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a))
                return !1;
            try {
                if (a.constructor && !ra.call(a, "constructor") && !ra.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (d) {
                return !1
            }
            if (!q.ownFirst)
                for (b in a)
                    return ra.call(a, b);
            for (b in a)
                ;
            return void 0 === b || ra.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? Da[rc.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            a && c.trim(a) && (p.execScript || function(a) {
                p.eval.call(p, a)
            }
            )(a)
        },
        camelCase: function(a) {
            return a.replace(tc, "ms-").replace(uc, vc)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, e = 0;
            if (da(a))
                for (c = a.length; e < c && !1 !== b.call(a[e], e, a[e]); e++)
                    ;
            else
                for (e in a)
                    if (!1 === b.call(a[e], e, a[e]))
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(sc, "")
        },
        makeArray: function(a, b) {
            b = b || [];
            null != a && (da(Object(a)) ? c.merge(b, "string" === typeof a ? [a] : a) : Wa.call(b, a));
            return b
        },
        inArray: function(a, b, c) {
            if (b) {
                if (Ob)
                    return Ob.call(b, a, c);
                var d = b.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, e = 0, f = a.length; e < c; )
                a[f++] = b[e++];
            if (c !== c)
                for (; void 0 !== b[e]; )
                    a[f++] = b[e++];
            a.length = f;
            return a
        },
        grep: function(a, b, c) {
            for (var d = [], f = 0, g = a.length, h = !c; f < g; f++)
                c = !b(a[f], f),
                c !== h && d.push(a[f]);
            return d
        },
        map: function(a, b, c) {
            var d, f = 0, g = [];
            if (da(a))
                for (d = a.length; f < d; f++) {
                    var h = b(a[f], f, c);
                    null != h && g.push(h)
                }
            else
                for (f in a)
                    h = b(a[f], f, c),
                    null != h && g.push(h);
            return xb.apply([], g)
        },
        guid: 1,
        proxy: function(a, b) {
            if ("string" === typeof b) {
                var d = a[b];
                b = a;
                a = d
            }
            if (c.isFunction(a)) {
                var e = X.call(arguments, 2);
                d = function() {
                    return a.apply(b || this, e.concat(X.call(arguments)))
                }
                ;
                d.guid = a.guid = a.guid || c.guid++;
                return d
            }
        },
        now: function() {
            return +new Date
        },
        support: q
    });
    "function" === typeof Symbol && (c.fn[Symbol.iterator] = R[Symbol.iterator]);
    c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        Da["[object " + b + "]"] = b.toLowerCase()
    });
    var sa = function(a) {
        function b(a, b, c, d) {
            var e, f, g, u, h = b && b.ownerDocument, v = b ? b.nodeType : 9;
            c = c || [];
            if ("string" !== typeof a || !a || 1 !== v && 9 !== v && 11 !== v)
                return c;
            if (!d && ((b ? b.ownerDocument || b : A) !== w && xa(b),
            b = b || w,
            Y)) {
                if (11 !== v && (u = ta.exec(a)))
                    if (e = u[1])
                        if (9 === v)
                            if (f = b.getElementById(e)) {
                                if (f.id === e)
                                    return c.push(f),
                                    c
                            } else
                                return c;
                        else {
                            if (h && (f = h.getElementById(e)) && Aa(b, f) && f.id === e)
                                return c.push(f),
                                c
                        }
                    else {
                        if (u[2])
                            return C.apply(c, b.getElementsByTagName(a)),
                            c;
                        if ((e = u[3]) && F.getElementsByClassName && b.getElementsByClassName)
                            return C.apply(c, b.getElementsByClassName(e)),
                            c
                    }
                if (!(!F.qsa || M[a + " "] || O && O.test(a))) {
                    if (1 !== v) {
                        h = b;
                        var l = a
                    } else if ("object" !== b.nodeName.toLowerCase()) {
                        (g = b.getAttribute("id")) ? g = g.replace(ua, "\\$\x26") : b.setAttribute("id", g = z);
                        u = ca(a);
                        e = u.length;
                        for (f = ha.test(g) ? "#" + g : "[id\x3d'" + g + "']"; e--; )
                            u[e] = f + " " + p(u[e]);
                        l = u.join(",");
                        h = da.test(a) && r(b.parentNode) || b
                    }
                    if (l)
                        try {
                            return C.apply(c, h.querySelectorAll(l)),
                            c
                        } catch (ad) {} finally {
                            g === z && b.removeAttribute("id")
                        }
                }
            }
            return za(a.replace(T, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                b.push(c + " ") > B.cacheLength && delete a[b.shift()];
                return a[c + " "] = d
            }
            var b = [];
            return a
        }
        function e(a) {
            a[z] = !0;
            return a
        }
        function f(a) {
            var b = w.createElement("div");
            try {
                return !!a(b)
            } catch (v) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }
        function g(a, b) {
            a = a.split("|");
            for (var c = a.length; c--; )
                B.attrHandle[a[c]] = b
        }
        function h(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function l(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }
        function k(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function m(a) {
            return e(function(b) {
                b = +b;
                return e(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function r(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }
        function t() {}
        function p(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++)
                d += a[b].value;
            return d
        }
        function q(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = S++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, u = [ka, f];
                if (g)
                    for (; b = b[d]; ) {
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                    }
                else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            var v = b[z] || (b[z] = {});
                            v = v[b.uniqueID] || (v[b.uniqueID] = {});
                            if ((h = v[d]) && h[0] === ka && h[1] === f)
                                return u[2] = h[2];
                            v[d] = u;
                            if (u[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function n(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function y(a, b, c, d, e) {
            for (var f, g = [], h = 0, u = a.length, v = null != b; h < u; h++)
                if (f = a[h])
                    if (!c || c(f, d, e))
                        g.push(f),
                        v && b.push(h);
            return g
        }
        function D(a, c, d, f, g, h) {
            f && !f[z] && (f = D(f));
            g && !g[z] && (g = D(g, h));
            return e(function(e, h, u, v) {
                var l, k = [], m = [], U = h.length, L;
                if (!(L = e)) {
                    L = c || "*";
                    for (var r = u.nodeType ? [u] : u, t = [], p = 0, q = r.length; p < q; p++)
                        b(L, r[p], t);
                    L = t
                }
                L = !a || !e && c ? L : y(L, k, a, u, v);
                r = d ? g || (e ? a : U || f) ? [] : h : L;
                d && d(L, r, u, v);
                if (f) {
                    var n = y(r, m);
                    f(n, [], u, v);
                    for (u = n.length; u--; )
                        if (l = n[u])
                            r[m[u]] = !(L[m[u]] = l)
                }
                if (e) {
                    if (g || a) {
                        if (g) {
                            n = [];
                            for (u = r.length; u--; )
                                (l = r[u]) && n.push(L[u] = l);
                            g(null, r = [], n, v)
                        }
                        for (u = r.length; u--; )
                            (l = r[u]) && -1 < (n = g ? E(e, l) : k[u]) && (e[n] = !(h[n] = l))
                    }
                } else
                    r = y(r === h ? r.splice(U, r.length) : r),
                    g ? g(null, h, r, v) : C.apply(h, r)
            })
        }
        function P(a) {
            var b, c, d = a.length, e = B.relative[a[0].type];
            var f = e || B.relative[" "];
            for (var g = e ? 1 : 0, h = q(function(a) {
                return a === b
            }, f, !0), u = q(function(a) {
                return -1 < E(b, a)
            }, f, !0), l = [function(a, c, d) {
                a = !e && (d || c !== N) || ((b = c).nodeType ? h(a, c, d) : u(a, c, d));
                b = null;
                return a
            }
            ]; g < d; g++)
                if (f = B.relative[a[g].type])
                    l = [q(n(l), f)];
                else {
                    f = B.filter[a[g].type].apply(null, a[g].matches);
                    if (f[z]) {
                        for (c = ++g; c < d && !B.relative[a[c].type]; c++)
                            ;
                        return D(1 < g && n(l), 1 < g && p(a.slice(0, g - 1).concat({
                            value: " " === a[g - 2].type ? "*" : ""
                        })).replace(T, "$1"), f, g < c && P(a.slice(g, c)), c < d && P(a = a.slice(c)), c < d && p(a))
                    }
                    l.push(f)
                }
            return n(l)
        }
        function H(a, c) {
            var d = 0 < c.length
              , f = 0 < a.length
              , g = function(e, g, h, u, l) {
                var v, k, m = 0, U = "0", L = e && [], r = [], t = N, p = e || f && B.find.TAG("*", l), n = ka += null == t ? 1 : Math.random() || .1, q = p.length;
                for (l && (N = g === w || g || l); U !== q && null != (v = p[U]); U++) {
                    if (f && v) {
                        var Xa = 0;
                        g || v.ownerDocument === w || (xa(v),
                        h = !Y);
                        for (; k = a[Xa++]; )
                            if (k(v, g || w, h)) {
                                u.push(v);
                                break
                            }
                        l && (ka = n)
                    }
                    d && ((v = !k && v) && m--,
                    e && L.push(v))
                }
                m += U;
                if (d && U !== m) {
                    for (Xa = 0; k = c[Xa++]; )
                        k(L, r, g, h);
                    if (e) {
                        if (0 < m)
                            for (; U--; )
                                L[U] || r[U] || (r[U] = ba.call(u));
                        r = y(r)
                    }
                    C.apply(u, r);
                    l && !e && 0 < r.length && 1 < m + c.length && b.uniqueSort(u)
                }
                l && (ka = n,
                N = t);
                return L
            };
            return d ? e(g) : g
        }
        var x, N, K, Q, w, Z, Y, O, ya, Ea, Aa, z = "sizzle" + 1 * new Date, A = a.document, ka = 0, S = 0, G = c(), J = c(), M = c(), R = function(a, b) {
            a === b && (Q = !0);
            return 0
        }, aa = {}.hasOwnProperty, la = [], ba = la.pop, Ka = la.push, C = la.push, X = la.slice, E = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, ea = /[\x20\t\r\n\f]+/g, T = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, ia = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ja = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, oa = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, qa = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, ha = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, W = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
            PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
        }, ra = /^(?:input|select|textarea|button)$/i, sa = /^h\d$/i, V = /^[^{]+\{\s*\[native \w/, ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, da = /[+~]/, ua = /'|\\/g, ma = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, na = function(a, b, c) {
            a = "0x" + b - 65536;
            return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
        }, pa = function() {
            xa()
        };
        try {
            C.apply(la = X.call(A.childNodes), A.childNodes),
            la[A.childNodes.length].nodeType
        } catch (u) {
            C = {
                apply: la.length ? function(a, b) {
                    Ka.apply(a, X.call(b))
                }
                : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }
            }
        }
        var F = b.support = {};
        var wa = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        }
        ;
        var xa = b.setDocument = function(a) {
            var b;
            a = a ? a.ownerDocument || a : A;
            if (a === w || 9 !== a.nodeType || !a.documentElement)
                return w;
            w = a;
            Z = w.documentElement;
            Y = !wa(w);
            (b = w.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", pa, !1) : b.attachEvent && b.attachEvent("onunload", pa));
            F.attributes = f(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            F.getElementsByTagName = f(function(a) {
                a.appendChild(w.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            F.getElementsByClassName = V.test(w.getElementsByClassName);
            F.getById = f(function(a) {
                Z.appendChild(a).id = z;
                return !w.getElementsByName || !w.getElementsByName(z).length
            });
            F.getById ? (B.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && Y)
                    return (a = b.getElementById(a)) ? [a] : []
            }
            ,
            B.filter.ID = function(a) {
                var b = a.replace(ma, na);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete B.find.ID,
            B.filter.ID = function(a) {
                var b = a.replace(ma, na);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            }
            );
            B.find.TAG = F.getElementsByTagName ? function(a, b) {
                if ("undefined" !== typeof b.getElementsByTagName)
                    return b.getElementsByTagName(a);
                if (F.qsa)
                    return b.querySelectorAll(a)
            }
            : function(a, b) {
                var c = []
                  , d = 0;
                b = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; a = b[d++]; )
                        1 === a.nodeType && c.push(a);
                    return c
                }
                return b
            }
            ;
            B.find.CLASS = F.getElementsByClassName && function(a, b) {
                if ("undefined" !== typeof b.getElementsByClassName && Y)
                    return b.getElementsByClassName(a)
            }
            ;
            ya = [];
            O = [];
            if (F.qsa = V.test(w.querySelectorAll))
                f(function(a) {
                    Z.appendChild(a).innerHTML = "\x3ca id\x3d'" + z + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + z + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
                    a.querySelectorAll("[msallowcapture^\x3d'']").length && O.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    a.querySelectorAll("[selected]").length || O.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    a.querySelectorAll("[id~\x3d" + z + "-]").length || O.push("~\x3d");
                    a.querySelectorAll(":checked").length || O.push(":checked");
                    a.querySelectorAll("a#" + z + "+*").length || O.push(".#.+[+~]")
                }),
                f(function(a) {
                    var b = w.createElement("input");
                    b.setAttribute("type", "hidden");
                    a.appendChild(b).setAttribute("name", "D");
                    a.querySelectorAll("[name\x3dd]").length && O.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
                    a.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled");
                    a.querySelectorAll("*,:x");
                    O.push(",.*:")
                });
            (F.matchesSelector = V.test(Ea = Z.matches || Z.webkitMatchesSelector || Z.mozMatchesSelector || Z.oMatchesSelector || Z.msMatchesSelector)) && f(function(a) {
                F.disconnectedMatch = Ea.call(a, "div");
                Ea.call(a, "[s!\x3d'']:x");
                ya.push("!\x3d", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            });
            O = O.length && new RegExp(O.join("|"));
            ya = ya.length && new RegExp(ya.join("|"));
            Aa = (b = V.test(Z.compareDocumentPosition)) || V.test(Z.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a;
                b = b && b.parentNode;
                return a === b || !!(b && 1 === b.nodeType && (c.contains ? c.contains(b) : a.compareDocumentPosition && a.compareDocumentPosition(b) & 16))
            }
            : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }
            ;
            R = b ? function(a, b) {
                if (a === b)
                    return Q = !0,
                    0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (c)
                    return c;
                c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                return c & 1 || !F.sortDetached && b.compareDocumentPosition(a) === c ? a === w || a.ownerDocument === A && Aa(A, a) ? -1 : b === w || b.ownerDocument === A && Aa(A, b) ? 1 : K ? E(K, a) - E(K, b) : 0 : c & 4 ? -1 : 1
            }
            : function(a, b) {
                if (a === b)
                    return Q = !0,
                    0;
                var c = 0
                  , d = a.parentNode
                  , e = b.parentNode
                  , f = [a]
                  , g = [b];
                if (!d || !e)
                    return a === w ? -1 : b === w ? 1 : d ? -1 : e ? 1 : K ? E(K, a) - E(K, b) : 0;
                if (d === e)
                    return h(a, b);
                for (; a = a.parentNode; )
                    f.unshift(a);
                for (a = b; a = a.parentNode; )
                    g.unshift(a);
                for (; f[c] === g[c]; )
                    c++;
                return c ? h(f[c], g[c]) : f[c] === A ? -1 : g[c] === A ? 1 : 0
            }
            ;
            return w
        }
        ;
        b.matches = function(a, c) {
            return b(a, null, null, c)
        }
        ;
        b.matchesSelector = function(a, c) {
            (a.ownerDocument || a) !== w && xa(a);
            c = c.replace(oa, "\x3d'$1']");
            if (!(!F.matchesSelector || !Y || M[c + " "] || ya && ya.test(c) || O && O.test(c)))
                try {
                    var d = Ea.call(a, c);
                    if (d || F.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (L) {}
            return 0 < b(c, w, null, [a]).length
        }
        ;
        b.contains = function(a, b) {
            (a.ownerDocument || a) !== w && xa(a);
            return Aa(a, b)
        }
        ;
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== w && xa(a);
            var c = B.attrHandle[b.toLowerCase()];
            c = c && aa.call(B.attrHandle, b.toLowerCase()) ? c(a, b, !Y) : void 0;
            return void 0 !== c ? c : F.attributes || !Y ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        }
        ;
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        }
        ;
        b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            Q = !F.detectDuplicates;
            K = !F.sortStable && a.slice(0);
            a.sort(R);
            if (Q) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            K = null;
            return a
        }
        ;
        var fa = b.getText = function(a) {
            var b = ""
              , c = 0;
            var d = a.nodeType;
            if (!d)
                for (; d = a[c++]; )
                    b += fa(d);
            else if (1 === d || 9 === d || 11 === d) {
                if ("string" === typeof a.textContent)
                    return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)
                    b += fa(a)
            } else if (3 === d || 4 === d)
                return a.nodeValue;
            return b
        }
        ;
        var B = b.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                "\x3e": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(ma, na);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ma, na);
                    "~\x3d" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    if (W.CHILD.test(a[0]))
                        return null;
                    a[3] ? a[2] = a[4] || a[5] || "" : c && qa.test(c) && (b = ca(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ma, na).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = G[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"),
                    G(a, function(a) {
                        return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    }))
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        e = b.attr(e, a);
                        if (null == e)
                            return "!\x3d" === c;
                        if (!c)
                            return !0;
                        e += "";
                        return "\x3d" === c ? e === d : "!\x3d" === c ? e !== d : "^\x3d" === c ? d && 0 === e.indexOf(d) : "*\x3d" === c ? d && -1 < e.indexOf(d) : "$\x3d" === c ? d && e.slice(-d.length) === d : "~\x3d" === c ? -1 < (" " + e.replace(ea, " ") + " ").indexOf(d) : "|\x3d" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : !1
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, l) {
                        var k, m;
                        c = f !== g ? "nextSibling" : "previousSibling";
                        var u = b.parentNode
                          , r = h && b.nodeName.toLowerCase();
                        l = !l && !h;
                        var t = !1;
                        if (u) {
                            if (f) {
                                for (; c; ) {
                                    for (k = b; k = k[c]; )
                                        if (h ? k.nodeName.toLowerCase() === r : 1 === k.nodeType)
                                            return !1;
                                    var p = c = "only" === a && !p && "nextSibling"
                                }
                                return !0
                            }
                            p = [g ? u.firstChild : u.lastChild];
                            if (g && l) {
                                k = u;
                                var v = k[z] || (k[z] = {});
                                v = v[k.uniqueID] || (v[k.uniqueID] = {});
                                t = v[a] || [];
                                t = (m = t[0] === ka && t[1]) && t[2];
                                for (k = m && u.childNodes[m]; k = ++m && k && k[c] || (t = m = 0) || p.pop(); )
                                    if (1 === k.nodeType && ++t && k === b) {
                                        v[a] = [ka, m, t];
                                        break
                                    }
                            } else if (l && (k = b,
                            v = k[z] || (k[z] = {}),
                            v = v[k.uniqueID] || (v[k.uniqueID] = {}),
                            t = v[a] || [],
                            t = m = t[0] === ka && t[1]),
                            !1 === t)
                                for (; (k = ++m && k && k[c] || (t = m = 0) || p.pop()) && ((h ? k.nodeName.toLowerCase() !== r : 1 !== k.nodeType) || !++t || (l && (v = k[z] || (k[z] = {}),
                                v = v[k.uniqueID] || (v[k.uniqueID] = {}),
                                v[a] = [ka, t]),
                                k !== b)); )
                                    ;
                            t -= e;
                            return t === d || 0 === t % d && 0 <= t / d
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var d = B.pseudos[a] || B.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    if (d[z])
                        return d(c);
                    if (1 < d.length) {
                        var f = [a, a, "", c];
                        return B.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, b) {
                            for (var e, f = d(a, c), g = f.length; g--; )
                                e = E(a, f[g]),
                                a[e] = !(b[e] = f[g])
                        }) : function(a) {
                            return d(a, 0, f)
                        }
                    }
                    return d
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = []
                      , c = []
                      , d = va(a.replace(T, "$1"));
                    return d[z] ? e(function(a, b, c, e) {
                        e = d(a, null, e, []);
                        for (var f = a.length; f--; )
                            if (c = e[f])
                                a[f] = !(b[f] = c)
                    }) : function(a, e, f) {
                        b[0] = a;
                        d(b, null, f, c);
                        b[0] = null;
                        return !c.pop()
                    }
                }),
                has: e(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: e(function(a) {
                    a = a.replace(ma, na);
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || fa(b)).indexOf(a)
                    }
                }),
                lang: e(function(a) {
                    ha.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(ma, na).toLowerCase();
                    return function(b) {
                        var c;
                        do
                            if (c = Y ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === Z
                },
                focus: function(a) {
                    return a === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !B.pseudos.empty(a)
                },
                header: function(a) {
                    return sa.test(a.nodeName)
                },
                input: function(a) {
                    return ra.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: m(function() {
                    return [0]
                }),
                last: m(function(a, b) {
                    return [b - 1]
                }),
                eq: m(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: m(function(a, b) {
                    for (var c = 0; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                odd: m(function(a, b) {
                    for (var c = 1; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                lt: m(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b; )
                        a.push(b);
                    return a
                }),
                gt: m(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b; )
                        a.push(c);
                    return a
                })
            }
        };
        B.pseudos.nth = B.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            B.pseudos[x] = l(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            B.pseudos[x] = k(x);
        t.prototype = B.filters = B.pseudos;
        B.setFilters = new t;
        var ca = b.tokenize = function(a, c) {
            var d, e, f, g, h;
            if (g = J[a + " "])
                return c ? 0 : g.slice(0);
            g = a;
            var l = [];
            for (h = B.preFilter; g; ) {
                if (!k || (d = ia.exec(g)))
                    d && (g = g.slice(d[0].length) || g),
                    l.push(e = []);
                var k = !1;
                if (d = ja.exec(g))
                    k = d.shift(),
                    e.push({
                        value: k,
                        type: d[0].replace(T, " ")
                    }),
                    g = g.slice(k.length);
                for (f in B.filter)
                    !(d = W[f].exec(g)) || h[f] && !(d = h[f](d)) || (k = d.shift(),
                    e.push({
                        value: k,
                        type: f,
                        matches: d
                    }),
                    g = g.slice(k.length));
                if (!k)
                    break
            }
            return c ? g.length : g ? b.error(a) : J(a, l).slice(0)
        }
        ;
        var va = b.compile = function(a, b) {
            var c, d = [], e = [], f = M[a + " "];
            if (!f) {
                b || (b = ca(a));
                for (c = b.length; c--; )
                    f = P(b[c]),
                    f[z] ? d.push(f) : e.push(f);
                f = M(a, H(e, d));
                f.selector = a
            }
            return f
        }
        ;
        var za = b.select = function(a, b, c, d) {
            var e, f, g, h = "function" === typeof a && a, l = !d && ca(a = h.selector || a);
            c = c || [];
            if (1 === l.length) {
                var k = l[0] = l[0].slice(0);
                if (2 < k.length && "ID" === (f = k[0]).type && F.getById && 9 === b.nodeType && Y && B.relative[k[1].type]) {
                    b = (B.find.ID(f.matches[0].replace(ma, na), b) || [])[0];
                    if (!b)
                        return c;
                    h && (b = b.parentNode);
                    a = a.slice(k.shift().value.length)
                }
                for (e = W.needsContext.test(a) ? 0 : k.length; e--; ) {
                    f = k[e];
                    if (B.relative[g = f.type])
                        break;
                    if (g = B.find[g])
                        if (d = g(f.matches[0].replace(ma, na), da.test(k[0].type) && r(b.parentNode) || b)) {
                            k.splice(e, 1);
                            a = d.length && p(k);
                            if (!a)
                                return C.apply(c, d),
                                c;
                            break
                        }
                }
            }
            (h || va(a, l))(d, b, !Y, c, !b || da.test(a) && r(b.parentNode) || b);
            return c
        }
        ;
        F.sortStable = z.split("").sort(R).join("") === z;
        F.detectDuplicates = !!Q;
        xa();
        F.sortDetached = f(function(a) {
            return a.compareDocumentPosition(w.createElement("div")) & 1
        });
        f(function(a) {
            a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
            return "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function(a, b, c) {
            if (!c)
                return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        });
        F.attributes && f(function(a) {
            a.innerHTML = "\x3cinput/\x3e";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || g("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())
                return a.defaultValue
        });
        f(function(a) {
            return null == a.getAttribute("disabled")
        }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
            var d;
            if (!c)
                return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        });
        return b
    }(p);
    c.find = sa;
    c.expr = sa.selectors;
    c.expr[":"] = c.expr.pseudos;
    c.uniqueSort = c.unique = sa.uniqueSort;
    c.text = sa.getText;
    c.isXMLDoc = sa.isXML;
    c.contains = sa.contains;
    var V = function(a, b, d) {
        for (var e = [], f = void 0 !== d; (a = a[b]) && 9 !== a.nodeType; )
            if (1 === a.nodeType) {
                if (f && c(a).is(d))
                    break;
                e.push(a)
            }
        return e
    }
      , Pb = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , Qb = c.expr.match.needsContext
      , Rb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , fc = /^.[^:#\[\.,]*$/;
    c.filter = function(a, b, d) {
        var e = b[0];
        d && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === e.nodeType ? c.find.matchesSelector(e, a) ? [e] : [] : c.find.matches(a, c.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ;
    c.fn.extend({
        find: function(a) {
            var b, d = [], e = this, f = e.length;
            if ("string" !== typeof a)
                return this.pushStack(c(a).filter(function() {
                    for (b = 0; b < f; b++)
                        if (c.contains(e[b], this))
                            return !0
                }));
            for (b = 0; b < f; b++)
                c.find(a, e[b], d);
            d = this.pushStack(1 < f ? c.unique(d) : d);
            d.selector = this.selector ? this.selector + " " + a : a;
            return d
        },
        filter: function(a) {
            return this.pushStack(ua(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(ua(this, a || [], !0))
        },
        is: function(a) {
            return !!ua(this, "string" === typeof a && Qb.test(a) ? c(a) : a || [], !1).length
        }
    });
    var wc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (c.fn.init = function(a, b, d) {
        if (!a)
            return this;
        d = d || Sb;
        if ("string" === typeof a) {
            var e = "\x3c" === a.charAt(0) && "\x3e" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : wc.exec(a);
            if (!e || !e[1] && b)
                return !b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof c ? b[0] : b,
                c.merge(this, c.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : n, !0)),
                Rb.test(e[1]) && c.isPlainObject(b))
                    for (e in b)
                        if (c.isFunction(this[e]))
                            this[e](b[e]);
                        else
                            this.attr(e, b[e])
            } else {
                if ((b = n.getElementById(e[2])) && b.parentNode) {
                    if (b.id !== e[2])
                        return Sb.find(a);
                    this.length = 1;
                    this[0] = b
                }
                this.context = n;
                this.selector = a
            }
            return this
        }
        if (a.nodeType)
            return this.context = this[0] = a,
            this.length = 1,
            this;
        if (c.isFunction(a))
            return "undefined" !== typeof d.ready ? d.ready(a) : a(c);
        void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context);
        return c.makeArray(a, this)
    }
    ).prototype = c.fn;
    var Sb = c(n);
    var xc = /^(?:parents|prev(?:Until|All))/
      , yc = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    c.fn.extend({
        has: function(a) {
            var b, d = c(a, this), e = d.length;
            return this.filter(function() {
                for (b = 0; b < e; b++)
                    if (c.contains(this, d[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var d, e = 0, f = this.length, g = [], h = Qb.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0; e < f; e++)
                for (d = this[e]; d && d !== b; d = d.parentNode)
                    if (11 > d.nodeType && (h ? -1 < h.index(d) : 1 === d.nodeType && c.find.matchesSelector(d, a))) {
                        g.push(d);
                        break
                    }
            return this.pushStack(1 < g.length ? c.uniqueSort(g) : g)
        },
        index: function(a) {
            return a ? "string" === typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(c.uniqueSort(c.merge(this.get(), c(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return V(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return V(a, "parentNode", c)
        },
        next: function(a) {
            return G(a, "nextSibling")
        },
        prev: function(a) {
            return G(a, "previousSibling")
        },
        nextAll: function(a) {
            return V(a, "nextSibling")
        },
        prevAll: function(a) {
            return V(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return V(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return V(a, "previousSibling", c)
        },
        siblings: function(a) {
            return Pb((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return Pb(a.firstChild)
        },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.merge([], a.childNodes)
        }
    }, function(a, b) {
        c.fn[a] = function(d, e) {
            var f = c.map(this, b, d);
            "Until" !== a.slice(-5) && (e = d);
            e && "string" === typeof e && (f = c.filter(e, f));
            1 < this.length && (yc[a] || (f = c.uniqueSort(f)),
            xc.test(a) && (f = f.reverse()));
            return this.pushStack(f)
        }
    });
    var J = /\S+/g;
    c.Callbacks = function(a) {
        a = "string" === typeof a ? Ka(a) : c.extend({}, a);
        var b, d, e, f, g = [], h = [], l = -1, k = function() {
            f = a.once;
            for (e = b = !0; h.length; l = -1)
                for (d = h.shift(); ++l < g.length; )
                    !1 === g[l].apply(d[0], d[1]) && a.stopOnFalse && (l = g.length,
                    d = !1);
            a.memory || (d = !1);
            b = !1;
            f && (g = d ? [] : "")
        }, m = {
            add: function() {
                g && (d && !b && (l = g.length - 1,
                h.push(d)),
                function I(b) {
                    c.each(b, function(b, d) {
                        c.isFunction(d) ? a.unique && m.has(d) || g.push(d) : d && d.length && "string" !== c.type(d) && I(d)
                    })
                }(arguments),
                d && !b && k());
                return this
            },
            remove: function() {
                c.each(arguments, function(a, b) {
                    for (var d; -1 < (d = c.inArray(b, g, d)); )
                        g.splice(d, 1),
                        d <= l && l--
                });
                return this
            },
            has: function(a) {
                return a ? -1 < c.inArray(a, g) : 0 < g.length
            },
            empty: function() {
                g && (g = []);
                return this
            },
            disable: function() {
                f = h = [];
                g = d = "";
                return this
            },
            disabled: function() {
                return !g
            },
            lock: function() {
                f = !0;
                d || m.disable();
                return this
            },
            locked: function() {
                return !!f
            },
            fireWith: function(a, c) {
                f || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                h.push(c),
                b || k());
                return this
            },
            fire: function() {
                m.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!e
            }
        };
        return m
    }
    ;
    c.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", c.Callbacks("once memory"), "resolved"], ["reject", "fail", c.Callbacks("once memory"), "rejected"], ["notify", "progress", c.Callbacks("memory")]]
              , d = "pending"
              , e = {
                state: function() {
                    return d
                },
                always: function() {
                    f.done(arguments).fail(arguments);
                    return this
                },
                then: function() {
                    var a = arguments;
                    return c.Deferred(function(d) {
                        c.each(b, function(b, g) {
                            var h = c.isFunction(a[b]) && a[b];
                            f[g[1]](function() {
                                var a = h && h.apply(this, arguments);
                                if (a && c.isFunction(a.promise))
                                    a.promise().progress(d.notify).done(d.resolve).fail(d.reject);
                                else
                                    d[g[0] + "With"](this === e ? d.promise() : this, h ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? c.extend(a, e) : e
                }
            }
              , f = {};
            e.pipe = e.then;
            c.each(b, function(a, c) {
                var g = c[2]
                  , h = c[3];
                e[c[1]] = g.add;
                h && g.add(function() {
                    d = h
                }, b[a ^ 1][2].disable, b[2][2].lock);
                f[c[0]] = function() {
                    f[c[0] + "With"](this === f ? e : this, arguments);
                    return this
                }
                ;
                f[c[0] + "With"] = g.fireWith
            });
            e.promise(f);
            a && a.call(f, f);
            return f
        },
        when: function(a) {
            var b = 0, d = X.call(arguments), e = d.length, f = 1 !== e || a && c.isFunction(a.promise) ? e : 0, g = 1 === f ? a : c.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this;
                    c[a] = 1 < arguments.length ? X.call(arguments) : d;
                    c === k ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, l;
            if (1 < e) {
                var k = Array(e);
                var m = Array(e);
                for (l = Array(e); b < e; b++)
                    d[b] && c.isFunction(d[b].promise) ? d[b].promise().progress(h(b, m, k)).done(h(b, l, d)).fail(g.reject) : --f
            }
            f || g.resolveWith(l, d);
            return g.promise()
        }
    });
    var Fa;
    c.fn.ready = function(a) {
        c.ready.promise().done(a);
        return this
    }
    ;
    c.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? c.readyWait++ : c.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --c.readyWait : c.isReady) || (c.isReady = !0,
            !0 !== a && 0 < --c.readyWait || (Fa.resolveWith(n, [c]),
            c.fn.triggerHandler && (c(n).triggerHandler("ready"),
            c(n).off("ready"))))
        }
    });
    c.ready.promise = function(a) {
        if (!Fa)
            if (Fa = c.Deferred(),
            "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll)
                p.setTimeout(c.ready);
            else if (n.addEventListener)
                n.addEventListener("DOMContentLoaded", C),
                p.addEventListener("load", C);
            else {
                n.attachEvent("onreadystatechange", C);
                p.attachEvent("onload", C);
                var b = !1;
                try {
                    b = null == p.frameElement && n.documentElement
                } catch (d) {}
                b && b.doScroll && function e() {
                    if (!c.isReady) {
                        try {
                            b.doScroll("left")
                        } catch (f) {
                            return p.setTimeout(e, 50)
                        }
                        ib();
                        c.ready()
                    }
                }()
            }
        return Fa.promise(a)
    }
    ;
    c.ready.promise();
    for (var zc in c(q))
        break;
    q.ownFirst = "0" === zc;
    q.inlineBlockNeedsLayout = !1;
    c(function() {
        var a;
        if ((a = n.getElementsByTagName("body")[0]) && a.style) {
            var b = n.createElement("div");
            var c = n.createElement("div");
            c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            a.appendChild(c).appendChild(b);
            "undefined" !== typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
            q.inlineBlockNeedsLayout = b = 3 === b.offsetWidth) && (a.style.zoom = 1);
            a.removeChild(c)
        }
    });
    (function() {
        var a = n.createElement("div");
        q.deleteExpando = !0;
        try {
            delete a.test
        } catch (b) {
            q.deleteExpando = !1
        }
    }
    )();
    var pa = function(a) {
        var b = c.noData[(a.nodeName + " ").toLowerCase()]
          , d = +a.nodeType || 1;
        return 1 !== d && 9 !== d ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    }
      , hc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , gc = /([A-Z])/g;
    c.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
            return !!a && !La(a)
        },
        data: function(a, b, c) {
            return kb(a, b, c)
        },
        removeData: function(a, b) {
            return lb(a, b)
        },
        _data: function(a, b, c) {
            return kb(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return lb(a, b, !0)
        }
    });
    c.fn.extend({
        data: function(a, b) {
            var d, e = this[0], f = e && e.attributes;
            if (void 0 === a) {
                if (this.length) {
                    var g = c.data(e);
                    if (1 === e.nodeType && !c._data(e, "parsedAttrs")) {
                        for (d = f.length; d--; )
                            if (f[d]) {
                                var h = f[d].name;
                                0 === h.indexOf("data-") && (h = c.camelCase(h.slice(5)),
                                jb(e, h, g[h]))
                            }
                        c._data(e, "parsedAttrs", !0)
                    }
                }
                return g
            }
            return "object" === typeof a ? this.each(function() {
                c.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                c.data(this, a, b)
            }) : e ? jb(e, a, c.data(e, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function(a, b, d) {
            if (a) {
                b = (b || "fx") + "queue";
                var e = c._data(a, b);
                d && (!e || c.isArray(d) ? e = c._data(a, b, c.makeArray(d)) : e.push(d));
                return e || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var d = c.queue(a, b)
              , e = d.length
              , f = d.shift()
              , g = c._queueHooks(a, b)
              , h = function() {
                c.dequeue(a, b)
            };
            "inprogress" === f && (f = d.shift(),
            e--);
            f && ("fx" === b && d.unshift("inprogress"),
            delete g.stop,
            f.call(a, h, g));
            !e && g && g.empty.fire()
        },
        _queueHooks: function(a, b) {
            var d = b + "queueHooks";
            return c._data(a, d) || c._data(a, d, {
                empty: c.Callbacks("once memory").add(function() {
                    c._removeData(a, b + "queue");
                    c._removeData(a, d)
                })
            })
        }
    });
    c.fn.extend({
        queue: function(a, b) {
            var d = 2;
            "string" !== typeof a && (b = a,
            a = "fx",
            d--);
            return arguments.length < d ? c.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var d = c.queue(this, a, b);
                c._queueHooks(this, a);
                "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var d, e = 1, f = c.Deferred(), g = this, h = this.length, l = function() {
                --e || f.resolveWith(g, [g])
            };
            "string" !== typeof a && (b = a,
            a = void 0);
            for (a = a || "fx"; h--; )
                (d = c._data(g[h], a + "queueHooks")) && d.empty && (e++,
                d.empty.add(l));
            l();
            return f.promise(b)
        }
    });
    (function() {
        var a;
        q.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b;
            if ((b = n.getElementsByTagName("body")[0]) && b.style) {
                var c = n.createElement("div");
                var e = n.createElement("div");
                e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                b.appendChild(e).appendChild(c);
                "undefined" !== typeof c.style.zoom && (c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                c.appendChild(n.createElement("div")).style.width = "5px",
                a = 3 !== c.offsetWidth);
                b.removeChild(e);
                return a
            }
        }
    }
    )();
    var Ya = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ma = new RegExp("^(?:([+-])\x3d|)(" + Ya + ")([a-z%]*)$","i")
      , T = ["Top", "Right", "Bottom", "Left"]
      , fa = function(a, b) {
        a = b || a;
        return "none" === c.css(a, "display") || !c.contains(a.ownerDocument, a)
    }
      , E = function(a, b, d, e, f, g, h) {
        var l = 0
          , k = a.length
          , m = null == d;
        if ("object" === c.type(d))
            for (l in f = !0,
            d)
                E(a, b, l, d[l], !0, g, h);
        else if (void 0 !== e && (f = !0,
        c.isFunction(e) || (h = !0),
        m && (h ? (b.call(a, e),
        b = null) : (m = b,
        b = function(a, b, d) {
            return m.call(c(a), d)
        }
        )),
        b))
            for (; l < k; l++)
                b(a[l], d, h ? e : e.call(a[l], l, b(a[l], d)));
        return f ? a : m ? b.call(a) : k ? b(a[0], d) : g
    }
      , Oa = /^(?:checkbox|radio)$/i
      , pb = /<([\w:-]+)/
      , rb = /^$|\/(?:java|ecma)script/i
      , Pa = /^\s+/;
    (function() {
        var a = n.createElement("div")
          , b = n.createDocumentFragment()
          , d = n.createElement("input");
        a.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        q.leadingWhitespace = 3 === a.firstChild.nodeType;
        q.tbody = !a.getElementsByTagName("tbody").length;
        q.htmlSerialize = !!a.getElementsByTagName("link").length;
        q.html5Clone = "\x3c:nav\x3e\x3c/:nav\x3e" !== n.createElement("nav").cloneNode(!0).outerHTML;
        d.type = "checkbox";
        d.checked = !0;
        b.appendChild(d);
        q.appendChecked = d.checked;
        a.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
        q.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
        a.innerHTML = "\x3coption\x3e\x3c/option\x3e";
        q.option = !!a.lastChild;
        b.appendChild(a);
        d = n.createElement("input");
        d.setAttribute("type", "radio");
        d.setAttribute("checked", "checked");
        d.setAttribute("name", "t");
        a.appendChild(d);
        q.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        q.noCloneEvent = !!a.addEventListener;
        a[c.expando] = 1;
        q.attributes = !a.getAttribute(c.expando)
    }
    )();
    var H = {
        legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
        area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
        param: [1, "\x3cobject\x3e", "\x3c/object\x3e"],
        thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
        tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
        col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
        td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
        _default: q.htmlSerialize ? [0, "", ""] : [1, "X\x3cdiv\x3e", "\x3c/div\x3e"]
    };
    H.tbody = H.tfoot = H.colgroup = H.caption = H.thead;
    H.th = H.td;
    q.option || (H.optgroup = H.option = [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"]);
    var jc = /<|&#?\w+;/
      , qb = /<tbody/i;
    (function() {
        var a, b = n.createElement("div");
        for (a in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            var c = "on" + a;
            (q[a] = c in p) || (b.setAttribute(c, "t"),
            q[a] = !1 === b.attributes[c].expando)
        }
    }
    )();
    var Za = /^(?:input|select|textarea)$/i
      , Ac = /^key/
      , Bc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Tb = /^(?:focusinfocus|focusoutblur)$/
      , Ub = /^([^.]*)(?:\.(.+)|)/;
    c.event = {
        global: {},
        add: function(a, b, d, e, f) {
            var g, h, l, k, m;
            if (h = c._data(a)) {
                if (d.handler) {
                    var r = d;
                    d = r.handler;
                    f = r.selector
                }
                d.guid || (d.guid = c.guid++);
                (g = h.events) || (g = h.events = {});
                (l = h.handle) || (l = h.handle = function(a) {
                    return "undefined" === typeof c || a && c.event.triggered === a.type ? void 0 : c.event.dispatch.apply(l.elem, arguments)
                }
                ,
                l.elem = a);
                b = (b || "").match(J) || [""];
                for (h = b.length; h--; ) {
                    var p = Ub.exec(b[h]) || [];
                    var n = k = p[1];
                    var q = (p[2] || "").split(".").sort();
                    n && (p = c.event.special[n] || {},
                    n = (f ? p.delegateType : p.bindType) || n,
                    p = c.event.special[n] || {},
                    k = c.extend({
                        type: n,
                        origType: k,
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && c.expr.match.needsContext.test(f),
                        namespace: q.join(".")
                    }, r),
                    (m = g[n]) || (m = g[n] = [],
                    m.delegateCount = 0,
                    p.setup && !1 !== p.setup.call(a, e, q, l) || (a.addEventListener ? a.addEventListener(n, l, !1) : a.attachEvent && a.attachEvent("on" + n, l))),
                    p.add && (p.add.call(a, k),
                    k.handler.guid || (k.handler.guid = d.guid)),
                    f ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    c.event.global[n] = !0)
                }
                a = null
            }
        },
        remove: function(a, b, d, e, f) {
            var g, h, l, k, m, r = c.hasData(a) && c._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(J) || [""];
                for (l = b.length; l--; ) {
                    var p = Ub.exec(b[l]) || [];
                    var n = m = p[1];
                    var q = (p[2] || "").split(".").sort();
                    if (n) {
                        var y = c.event.special[n] || {};
                        n = (e ? y.delegateType : y.bindType) || n;
                        var D = k[n] || [];
                        p = p[2] && new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (h = g = D.length; g--; ) {
                            var C = D[g];
                            !f && m !== C.origType || d && d.guid !== C.guid || p && !p.test(C.namespace) || e && e !== C.selector && ("**" !== e || !C.selector) || (D.splice(g, 1),
                            C.selector && D.delegateCount--,
                            y.remove && y.remove.call(a, C))
                        }
                        h && !D.length && (y.teardown && !1 !== y.teardown.call(a, q, r.handle) || c.removeEvent(a, n, r.handle),
                        delete k[n])
                    } else
                        for (n in k)
                            c.event.remove(a, n + b[l], d, e, !0)
                }
                c.isEmptyObject(k) && (delete r.handle,
                c._removeData(a, "events"))
            }
        },
        trigger: function(a, b, d, e) {
            var f, g, h = [d || n], l = ra.call(a, "type") ? a.type : a;
            var k = ra.call(a, "namespace") ? a.namespace.split(".") : [];
            var m = f = d = d || n;
            if (3 !== d.nodeType && 8 !== d.nodeType && !Tb.test(l + c.event.triggered)) {
                -1 < l.indexOf(".") && (k = l.split("."),
                l = k.shift(),
                k.sort());
                var r = 0 > l.indexOf(":") && "on" + l;
                a = a[c.expando] ? a : new c.Event(l,"object" === typeof a && a);
                a.isTrigger = e ? 2 : 3;
                a.namespace = k.join(".");
                a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                a.result = void 0;
                a.target || (a.target = d);
                b = null == b ? [a] : c.makeArray(b, [a]);
                k = c.event.special[l] || {};
                if (e || !k.trigger || !1 !== k.trigger.apply(d, b)) {
                    if (!e && !k.noBubble && !c.isWindow(d)) {
                        var q = k.delegateType || l;
                        Tb.test(q + l) || (m = m.parentNode);
                        for (; m; m = m.parentNode)
                            h.push(m),
                            f = m;
                        f === (d.ownerDocument || n) && h.push(f.defaultView || f.parentWindow || p)
                    }
                    for (g = 0; (m = h[g++]) && !a.isPropagationStopped(); )
                        a.type = 1 < g ? q : k.bindType || l,
                        (f = (c._data(m, "events") || {})[a.type] && c._data(m, "handle")) && f.apply(m, b),
                        (f = r && m[r]) && f.apply && pa(m) && (a.result = f.apply(m, b),
                        !1 === a.result && a.preventDefault());
                    a.type = l;
                    if (!(e || a.isDefaultPrevented() || k._default && !1 !== k._default.apply(h.pop(), b)) && pa(d) && r && d[l] && !c.isWindow(d)) {
                        (f = d[r]) && (d[r] = null);
                        c.event.triggered = l;
                        try {
                            d[l]()
                        } catch (I) {}
                        c.event.triggered = void 0;
                        f && (d[r] = f)
                    }
                    return a.result
                }
            }
        },
        dispatch: function(a) {
            a = c.event.fix(a);
            var b, d, e, f = X.call(arguments);
            var g = (c._data(this, "events") || {})[a.type] || [];
            var h = c.event.special[a.type] || {};
            f[0] = a;
            a.delegateTarget = this;
            if (!h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                var l = c.event.handlers.call(this, a, g);
                for (g = 0; (e = l[g++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem,
                    b = 0; (d = e.handlers[b++]) && !a.isImmediatePropagationStopped(); )
                        if (!a.rnamespace || a.rnamespace.test(d.namespace))
                            a.handleObj = d,
                            a.data = d.data,
                            d = ((c.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, f),
                            void 0 !== d && !1 === (a.result = d) && (a.preventDefault(),
                            a.stopPropagation());
                h.postDispatch && h.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, b) {
            var d, e = [], f = b.delegateCount, g = a.target;
            if (f && g.nodeType && ("click" !== a.type || isNaN(a.button) || 1 > a.button))
                for (; g != this; g = g.parentNode || this)
                    if (1 === g.nodeType && (!0 !== g.disabled || "click" !== a.type)) {
                        var h = [];
                        for (d = 0; d < f; d++) {
                            var l = b[d];
                            var k = l.selector + " ";
                            void 0 === h[k] && (h[k] = l.needsContext ? -1 < c(k, this).index(g) : c.find(k, this, null, [g]).length);
                            h[k] && h.push(l)
                        }
                        h.length && e.push({
                            elem: g,
                            handlers: h
                        })
                    }
            f < b.length && e.push({
                elem: this,
                handlers: b.slice(f)
            });
            return e
        },
        fix: function(a) {
            if (a[c.expando])
                return a;
            var b = a.type;
            var d = a
              , e = this.fixHooks[b];
            e || (this.fixHooks[b] = e = Bc.test(b) ? this.mouseHooks : Ac.test(b) ? this.keyHooks : {});
            var f = e.props ? this.props.concat(e.props) : this.props;
            a = new c.Event(d);
            for (b = f.length; b--; ) {
                var g = f[b];
                a[g] = d[g]
            }
            a.target || (a.target = d.srcElement || n);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            a.metaKey = !!a.metaKey;
            return e.filter ? e.filter(a, d) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c = b.button
                  , e = b.fromElement;
                if (null == a.pageX && null != b.clientX) {
                    var f = a.target.ownerDocument || n;
                    var g = f.documentElement;
                    f = f.body;
                    a.pageX = b.clientX + (g && g.scrollLeft || f && f.scrollLeft || 0) - (g && g.clientLeft || f && f.clientLeft || 0);
                    a.pageY = b.clientY + (g && g.scrollTop || f && f.scrollTop || 0) - (g && g.clientTop || f && f.clientTop || 0)
                }
                !a.relatedTarget && e && (a.relatedTarget = e === a.target ? b.toElement : e);
                a.which || void 0 === c || (a.which = c & 1 ? 1 : c & 2 ? 3 : c & 4 ? 2 : 0);
                return a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== sb() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === sb() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (c.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(a) {
                    return c.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, d) {
            a = c.extend(new c.Event, d, {
                type: a,
                isSimulated: !0
            });
            c.event.trigger(a, null, b);
            a.isDefaultPrevented() && d.preventDefault()
        }
    };
    c.removeEvent = n.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    : function(a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null),
        a.detachEvent(b, c))
    }
    ;
    c.Event = function(a, b) {
        if (!(this instanceof c.Event))
            return new c.Event(a,b);
        a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? va : qa) : this.type = a;
        b && c.extend(this, b);
        this.timeStamp = a && a.timeStamp || c.now();
        this[c.expando] = !0
    }
    ;
    c.Event.prototype = {
        constructor: c.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va;
            a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        c.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var d = a.relatedTarget
                  , f = a.handleObj;
                if (!d || d !== this && !c.contains(this, d)) {
                    a.type = f.origType;
                    var g = f.handler.apply(this, arguments);
                    a.type = b
                }
                return g
            }
        }
    });
    q.submit || (c.event.special.submit = {
        setup: function() {
            if (c.nodeName(this, "form"))
                return !1;
            c.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = c.nodeName(a, "input") || c.nodeName(a, "button") ? c.prop(a, "form") : void 0) && !c._data(a, "submit") && (c.event.add(a, "submit._submit", function(a) {
                    a._submitBubble = !0
                }),
                c._data(a, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble,
            this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            if (c.nodeName(this, "form"))
                return !1;
            c.event.remove(this, "._submit")
        }
    });
    q.change || (c.event.special.change = {
        setup: function() {
            if (Za.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type)
                    c.event.add(this, "propertychange._change", function(a) {
                        "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                    }),
                    c.event.add(this, "click._change", function(a) {
                        this._justChanged && !a.isTrigger && (this._justChanged = !1);
                        c.event.simulate("change", this, a)
                    });
                return !1
            }
            c.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                Za.test(a.nodeName) && !c._data(a, "change") && (c.event.add(a, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || c.event.simulate("change", this.parentNode, a)
                }),
                c._data(a, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type)
                return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            c.event.remove(this, "._change");
            return !Za.test(this.nodeName)
        }
    });
    q.focusin || c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var d = function(a) {
            c.event.simulate(b, a.target, c.event.fix(a))
        };
        c.event.special[b] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , f = c._data(e, b);
                f || e.addEventListener(a, d, !0);
                c._data(e, b, (f || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , f = c._data(e, b) - 1;
                f ? c._data(e, b, f) : (e.removeEventListener(a, d, !0),
                c._removeData(e, b))
            }
        }
    });
    c.fn.extend({
        on: function(a, b, c, e) {
            return Qa(this, a, b, c, e)
        },
        one: function(a, b, c, e) {
            return Qa(this, a, b, c, e, 1)
        },
        off: function(a, b, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                c(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if ("object" === typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            if (!1 === b || "function" === typeof b)
                d = b,
                b = void 0;
            !1 === d && (d = qa);
            return this.each(function() {
                c.event.remove(this, a, d, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var d = this[0];
            if (d)
                return c.event.trigger(a, b, d, !0)
        }
    });
    var Cc = / jQuery\d+="(?:null|\d+)"/g
      , Vb = /<(?:abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video)[\s/>]/i
      , Dc = /<script|<style|<link/i
      , lc = /checked\s*(?:[^=]|=\s*.checked.)/i
      , kc = /^true\/(.*)/
      , mc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , $a = nb(n).appendChild(n.createElement("div"));
    c.extend({
        htmlPrefilter: function(a) {
            return a
        },
        clone: function(a, b, d) {
            var e, f, g = c.contains(a.ownerDocument, a);
            if (q.html5Clone || c.isXMLDoc(a) || !Vb.test("\x3c" + a.nodeName + "\x3e"))
                var h = a.cloneNode(!0);
            else
                $a.innerHTML = a.outerHTML,
                $a.removeChild(h = $a.firstChild);
            if (!(q.noCloneEvent && q.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a))) {
                var l = y(h);
                var k = y(a);
                for (f = 0; null != (e = k[f]); ++f)
                    if (l[f]) {
                        var m = void 0
                          , p = e
                          , n = l[f];
                        if (1 === n.nodeType) {
                            var I = n.nodeName.toLowerCase();
                            if (!q.noCloneEvent && n[c.expando]) {
                                e = c._data(n);
                                for (m in e.events)
                                    c.removeEvent(n, m, e.handle);
                                n.removeAttribute(c.expando)
                            }
                            if ("script" === I && n.text !== p.text)
                                ub(n).text = p.text,
                                vb(n);
                            else if ("object" === I)
                                n.parentNode && (n.outerHTML = p.outerHTML),
                                q.html5Clone && p.innerHTML && !c.trim(n.innerHTML) && (n.innerHTML = p.innerHTML);
                            else if ("input" === I && Oa.test(p.type))
                                n.defaultChecked = n.checked = p.checked,
                                n.value !== p.value && (n.value = p.value);
                            else if ("option" === I)
                                n.defaultSelected = n.selected = p.defaultSelected;
                            else if ("input" === I || "textarea" === I)
                                n.defaultValue = p.defaultValue
                        }
                    }
            }
            if (b)
                if (d)
                    for (k = k || y(a),
                    l = l || y(h),
                    f = 0; null != (e = k[f]); f++)
                        wb(e, l[f]);
                else
                    wb(a, h);
            l = y(h, "script");
            0 < l.length && Na(l, !g && y(a, "script"));
            return h
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, l = c.expando, k = c.cache, m = q.attributes, p = c.event.special; null != (d = a[h]); h++)
                if (b || pa(d))
                    if (g = (f = d[l]) && k[f]) {
                        if (g.events)
                            for (e in g.events)
                                p[e] ? c.event.remove(d, e) : c.removeEvent(d, e, g.handle);
                        k[f] && (delete k[f],
                        m || "undefined" === typeof d.removeAttribute ? d[l] = void 0 : d.removeAttribute(l),
                        R.push(f))
                    }
        }
    });
    c.fn.extend({
        domManip: ea,
        detach: function(a) {
            return yb(this, a, !0)
        },
        remove: function(a) {
            return yb(this, a)
        },
        text: function(a) {
            return E(this, function(a) {
                return void 0 === a ? c.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return ea(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || tb(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return ea(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = tb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ea(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ea(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && c.cleanData(y(a, !1)); a.firstChild; )
                    a.removeChild(a.firstChild);
                a.options && c.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return c.clone(this, a, b)
            })
        },
        html: function(a) {
            return E(this, function(a) {
                var b = this[0] || {}
                  , e = 0
                  , f = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(Cc, "") : void 0;
                if (!("string" !== typeof a || Dc.test(a) || !q.htmlSerialize && Vb.test(a) || !q.leadingWhitespace && Pa.test(a) || H[(pb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = c.htmlPrefilter(a);
                    try {
                        for (; e < f; e++)
                            b = this[e] || {},
                            1 === b.nodeType && (c.cleanData(y(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (g) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ea(this, arguments, function(b) {
                var d = this.parentNode;
                0 > c.inArray(this, a) && (c.cleanData(y(this)),
                d && d.replaceChild(b, this))
            }, a)
        }
    });
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        c.fn[a] = function(a) {
            for (var d = 0, f = [], g = c(a), h = g.length - 1; d <= h; d++)
                a = d === h ? this : this.clone(!0),
                c(g[d])[b](a),
                Wa.apply(f, a.get());
            return this.pushStack(f)
        }
    });
    var wa, Ab = {
        HTML: "block",
        BODY: "block"
    }, Wb = /^margin/, Ba = new RegExp("^(" + Ya + ")(?!px)[a-z%]+$","i"), ab = function(a, b, c, e) {
        var d, g = {};
        for (d in b)
            g[d] = a.style[d],
            a.style[d] = b[d];
        c = c.apply(a, e || []);
        for (d in b)
            a.style[d] = g[d];
        return c
    }, Xb = n.documentElement;
    (function() {
        function a() {
            var a = n.documentElement;
            a.appendChild(l);
            k.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            b = e = h = !1;
            d = g = !0;
            if (p.getComputedStyle) {
                var c = p.getComputedStyle(k);
                b = "1%" !== (c || {}).top;
                h = "2px" === (c || {}).marginLeft;
                e = "4px" === (c || {
                    width: "4px"
                }).width;
                k.style.marginRight = "50%";
                d = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight;
                c = k.appendChild(n.createElement("div"));
                c.style.cssText = k.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                c.style.marginRight = c.style.width = "0";
                k.style.width = "1px";
                g = !parseFloat((p.getComputedStyle(c) || {}).marginRight);
                k.removeChild(c)
            }
            k.style.display = "none";
            if (f = 0 === k.getClientRects().length)
                if (k.style.display = "",
                k.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
                k.childNodes[0].style.borderCollapse = "separate",
                c = k.getElementsByTagName("td"),
                c[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                f = 0 === c[0].offsetHeight)
                    c[0].style.display = "",
                    c[1].style.display = "none",
                    f = 0 === c[0].offsetHeight;
            a.removeChild(l)
        }
        var b, d, e, f, g, h, l = n.createElement("div"), k = n.createElement("div");
        k.style && (k.style.cssText = "float:left;opacity:.5",
        q.opacity = "0.5" === k.style.opacity,
        q.cssFloat = !!k.style.cssFloat,
        k.style.backgroundClip = "content-box",
        k.cloneNode(!0).style.backgroundClip = "",
        q.clearCloneStyle = "content-box" === k.style.backgroundClip,
        l = n.createElement("div"),
        l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        k.innerHTML = "",
        l.appendChild(k),
        q.boxSizing = "" === k.style.boxSizing || "" === k.style.MozBoxSizing || "" === k.style.WebkitBoxSizing,
        c.extend(q, {
            reliableHiddenOffsets: function() {
                null == b && a();
                return f
            },
            boxSizingReliable: function() {
                null == b && a();
                return e
            },
            pixelMarginRight: function() {
                null == b && a();
                return d
            },
            pixelPosition: function() {
                null == b && a();
                return b
            },
            reliableMarginRight: function() {
                null == b && a();
                return g
            },
            reliableMarginLeft: function() {
                null == b && a();
                return h
            }
        }))
    }
    )();
    var Ec = /^(top|right|bottom|left)$/;
    if (p.getComputedStyle) {
        var ha = function(a) {
            var b = a.ownerDocument.defaultView;
            b && b.opener || (b = p);
            return b.getComputedStyle(a)
        };
        var ia = function(a, b, d) {
            var e = a.style;
            var f = (d = d || ha(a)) ? d.getPropertyValue(b) || d[b] : void 0;
            "" !== f && void 0 !== f || c.contains(a.ownerDocument, a) || (f = c.style(a, b));
            if (d && !q.pixelMarginRight() && Ba.test(f) && Wb.test(b)) {
                a = e.width;
                b = e.minWidth;
                var g = e.maxWidth;
                e.minWidth = e.maxWidth = e.width = f;
                f = d.width;
                e.width = a;
                e.minWidth = b;
                e.maxWidth = g
            }
            return void 0 === f ? f : f + ""
        }
    } else
        Xb.currentStyle && (ha = function(a) {
            return a.currentStyle
        }
        ,
        ia = function(a, b, c) {
            var d, f, g = a.style;
            var h = (c = c || ha(a)) ? c[b] : void 0;
            null == h && g && g[b] && (h = g[b]);
            if (Ba.test(h) && !Ec.test(b)) {
                c = g.left;
                if (f = (d = a.runtimeStyle) && d.left)
                    d.left = a.currentStyle.left;
                g.left = "fontSize" === b ? "1em" : h;
                h = g.pixelLeft + "px";
                g.left = c;
                f && (d.left = f)
            }
            return void 0 === h ? h : h + "" || "auto"
        }
        );
    var bb = /alpha\([^)]*\)/i
      , Fc = /opacity\s*=\s*([^)]*)/i
      , Gc = /^(none|table(?!-c[ea]).+)/
      , nc = new RegExp("^(" + Ya + ")(.*)$","i")
      , Hc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Yb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Db = ["Webkit", "O", "Moz", "ms"]
      , Cb = n.createElement("div").style;
    c.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b)
                        return a = ia(a, "opacity"),
                        "" === a ? "1" : a
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": q.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g = c.camelCase(b), h = a.style;
                b = c.cssProps[g] || (c.cssProps[g] = Bb(g) || g);
                var l = c.cssHooks[b] || c.cssHooks[g];
                if (void 0 !== d) {
                    var k = typeof d;
                    "string" === k && (f = Ma.exec(d)) && f[1] && (d = mb(a, b, f),
                    k = "number");
                    if (null != d && d === d && ("number" === k && (d += f && f[3] || (c.cssNumber[g] ? "" : "px")),
                    q.clearCloneStyle || "" !== d || 0 !== b.indexOf("background") || (h[b] = "inherit"),
                    !(l && "set"in l) || void 0 !== (d = l.set(a, d, e))))
                        try {
                            h[b] = d
                        } catch (m) {}
                } else
                    return l && "get"in l && void 0 !== (f = l.get(a, !1, e)) ? f : h[b]
            }
        },
        css: function(a, b, d, e) {
            var f;
            var g = c.camelCase(b);
            b = c.cssProps[g] || (c.cssProps[g] = Bb(g) || g);
            (g = c.cssHooks[b] || c.cssHooks[g]) && "get"in g && (f = g.get(a, !0, d));
            void 0 === f && (f = ia(a, b, e));
            "normal" === f && b in Yb && (f = Yb[b]);
            return "" === d || d ? (a = parseFloat(f),
            !0 === d || isFinite(a) ? a || 0 : f) : f
        }
    });
    c.each(["height", "width"], function(a, b) {
        c.cssHooks[b] = {
            get: function(a, e, f) {
                if (e)
                    return Gc.test(c.css(a, "display")) && 0 === a.offsetWidth ? ab(a, Hc, function() {
                        return Hb(a, b, f)
                    }) : Hb(a, b, f)
            },
            set: function(a, e, f) {
                var d = f && ha(a);
                return Fb(a, e, f ? Gb(a, b, f, q.boxSizing && "border-box" === c.css(a, "boxSizing", !1, d), d) : 0)
            }
        }
    });
    q.opacity || (c.cssHooks.opacity = {
        get: function(a, b) {
            return Fc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var d = a.style;
            a = a.currentStyle;
            var e = c.isNumeric(b) ? "alpha(opacity\x3d" + 100 * b + ")" : ""
              , f = a && a.filter || d.filter || "";
            d.zoom = 1;
            if ((1 <= b || "" === b) && "" === c.trim(f.replace(bb, "")) && d.removeAttribute && (d.removeAttribute("filter"),
            "" === b || a && !a.filter))
                return;
            d.filter = bb.test(f) ? f.replace(bb, e) : f + " " + e
        }
    });
    c.cssHooks.marginRight = Ra(q.reliableMarginRight, function(a, b) {
        if (b)
            return ab(a, {
                display: "inline-block"
            }, ia, [a, "marginRight"])
    });
    c.cssHooks.marginLeft = Ra(q.reliableMarginLeft, function(a, b) {
        if (b)
            return (parseFloat(ia(a, "marginLeft")) || (c.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - ab(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            }) : 0)) + "px"
    });
    c.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        c.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0
                  , f = {};
                for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    f[a + T[d] + b] = c[d] || c[d - 2] || c[0];
                return f
            }
        };
        Wb.test(a) || (c.cssHooks[a + b].set = Fb)
    });
    c.fn.extend({
        css: function(a, b) {
            return E(this, function(a, b, f) {
                var d, e = {}, l = 0;
                if (c.isArray(b)) {
                    f = ha(a);
                    for (d = b.length; l < d; l++)
                        e[b[l]] = c.css(a, b[l], !1, f);
                    return e
                }
                return void 0 !== f ? c.style(a, b, f) : c.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return Eb(this, !0)
        },
        hide: function() {
            return Eb(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                fa(this) ? c(this).show() : c(this).hide()
            })
        }
    });
    c.Tween = D;
    D.prototype = {
        constructor: D,
        init: function(a, b, d, e, f, g) {
            this.elem = a;
            this.prop = d;
            this.easing = f || c.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (c.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var a = D.propHooks[this.prop];
            return a && a.get ? a.get(this) : D.propHooks._default.get(this)
        },
        run: function(a) {
            var b, d = D.propHooks[this.prop];
            this.pos = this.options.duration ? b = c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            d && d.set ? d.set(this) : D.propHooks._default.set(this);
            return this
        }
    };
    D.prototype.init.prototype = D.prototype;
    D.propHooks = {
        _default: {
            get: function(a) {
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (a = c.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0
            },
            set: function(a) {
                if (c.fx.step[a.prop])
                    c.fx.step[a.prop](a);
                else
                    1 !== a.elem.nodeType || null == a.elem.style[c.cssProps[a.prop]] && !c.cssHooks[a.prop] ? a.elem[a.prop] = a.now : c.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    c.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    c.fx = D.prototype.init;
    c.fx.step = {};
    var W, Ga, Ic = /^(?:toggle|show|hide)$/, Jc = /queueHooks$/;
    c.Animation = c.extend(S, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                mb(c.elem, a, Ma.exec(b), c);
                return c
            }
            ]
        },
        tweener: function(a, b) {
            c.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(J);
            for (var d, e = 0, f = a.length; e < f; e++)
                d = a[e],
                S.tweeners[d] = S.tweeners[d] || [],
                S.tweeners[d].unshift(b)
        },
        prefilters: [function(a, b, d) {
            var e, f = this, g = {}, h = a.style, l = a.nodeType && fa(a), k = c._data(a, "fxshow");
            if (!d.queue) {
                var m = c._queueHooks(a, "fx");
                if (null == m.unqueued) {
                    m.unqueued = 0;
                    var p = m.empty.fire;
                    m.empty.fire = function() {
                        m.unqueued || p()
                    }
                }
                m.unqueued++;
                f.always(function() {
                    f.always(function() {
                        m.unqueued--;
                        c.queue(a, "fx").length || m.empty.fire()
                    })
                })
            }
            if (1 === a.nodeType && ("height"in b || "width"in b)) {
                d.overflow = [h.overflow, h.overflowX, h.overflowY];
                var n = c.css(a, "display");
                var y = "none" === n ? c._data(a, "olddisplay") || za(a.nodeName) : n;
                "inline" === y && "none" === c.css(a, "float") && (q.inlineBlockNeedsLayout && "inline" !== za(a.nodeName) ? h.zoom = 1 : h.display = "inline-block")
            }
            d.overflow && (h.overflow = "hidden",
            q.shrinkWrapBlocks() || f.always(function() {
                h.overflow = d.overflow[0];
                h.overflowX = d.overflow[1];
                h.overflowY = d.overflow[2]
            }));
            for (e in b)
                if (y = b[e],
                Ic.exec(y)) {
                    delete b[e];
                    var C = C || "toggle" === y;
                    if (y === (l ? "hide" : "show"))
                        if ("show" === y && k && void 0 !== k[e])
                            l = !0;
                        else
                            continue;
                    g[e] = k && k[e] || c.style(a, e)
                } else
                    n = void 0;
            if (c.isEmptyObject(g))
                "inline" === ("none" === n ? za(a.nodeName) : n) && (h.display = n);
            else
                for (e in k ? "hidden"in k && (l = k.hidden) : k = c._data(a, "fxshow", {}),
                C && (k.hidden = !l),
                l ? c(a).show() : f.done(function() {
                    c(a).hide()
                }),
                f.done(function() {
                    var b;
                    c._removeData(a, "fxshow");
                    for (b in g)
                        c.style(a, b, g[b])
                }),
                g)
                    b = Jb(l ? k[e] : 0, e, f),
                    e in k || (k[e] = b.start,
                    l && (b.end = b.start,
                    b.start = "width" === e || "height" === e ? 1 : 0))
        }
        ],
        prefilter: function(a, b) {
            b ? S.prefilters.unshift(a) : S.prefilters.push(a)
        }
    });
    c.speed = function(a, b, d) {
        var e = a && "object" === typeof a ? c.extend({}, a) : {
            complete: d || !d && b || c.isFunction(a) && a,
            duration: a,
            easing: d && b || b && !c.isFunction(b) && b
        };
        e.duration = c.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
        if (null == e.queue || !0 === e.queue)
            e.queue = "fx";
        e.old = e.complete;
        e.complete = function() {
            c.isFunction(e.old) && e.old.call(this);
            e.queue && c.dequeue(this, e.queue)
        }
        ;
        return e
    }
    ;
    c.fn.extend({
        fadeTo: function(a, b, c, e) {
            return this.filter(fa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, e)
        },
        animate: function(a, b, d, e) {
            var f = c.isEmptyObject(a)
              , g = c.speed(b, d, e);
            b = function() {
                var b = S(this, c.extend({}, a), g);
                (f || c._data(this, "finish")) && b.stop(!0)
            }
            ;
            b.finish = b;
            return f || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        },
        stop: function(a, b, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(d)
            };
            "string" !== typeof a && (d = b,
            b = a,
            a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b = !0
                  , g = null != a && a + "queueHooks"
                  , h = c.timers
                  , l = c._data(this);
                if (g)
                    l[g] && l[g].stop && e(l[g]);
                else
                    for (g in l)
                        l[g] && l[g].stop && Jc.test(g) && e(l[g]);
                for (g = h.length; g--; )
                    h[g].elem !== this || null != a && h[g].queue !== a || (h[g].anim.stop(d),
                    b = !1,
                    h.splice(g, 1));
                !b && d || c.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a = a || "fx");
            return this.each(function() {
                var b = c._data(this)
                  , d = b[a + "queue"];
                var e = b[a + "queueHooks"];
                var f = c.timers
                  , g = d ? d.length : 0;
                b.finish = !0;
                c.queue(this, a, []);
                e && e.stop && e.stop.call(this, !0);
                for (e = f.length; e--; )
                    f[e].elem === this && f[e].queue === a && (f[e].anim.stop(!0),
                    f.splice(e, 1));
                for (e = 0; e < g; e++)
                    d[e] && d[e].finish && d[e].finish.call(this);
                delete b.finish
            })
        }
    });
    c.each(["toggle", "show", "hide"], function(a, b) {
        var d = c.fn[b];
        c.fn[b] = function(a, c, g) {
            return null == a || "boolean" === typeof a ? d.apply(this, arguments) : this.animate(Ca(b, !0), a, c, g)
        }
    });
    c.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        c.fn[a] = function(a, c, f) {
            return this.animate(b, a, c, f)
        }
    });
    c.timers = [];
    c.fx.tick = function() {
        var a = c.timers
          , b = 0;
        for (W = c.now(); b < a.length; b++) {
            var d = a[b];
            d() || a[b] !== d || a.splice(b--, 1)
        }
        a.length || c.fx.stop();
        W = void 0
    }
    ;
    c.fx.timer = function(a) {
        c.timers.push(a);
        a() ? c.fx.start() : c.timers.pop()
    }
    ;
    c.fx.interval = 13;
    c.fx.start = function() {
        Ga || (Ga = p.setInterval(c.fx.tick, c.fx.interval))
    }
    ;
    c.fx.stop = function() {
        p.clearInterval(Ga);
        Ga = null
    }
    ;
    c.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    c.fn.delay = function(a, b) {
        a = c.fx ? c.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function(b, c) {
            var d = p.setTimeout(b, a);
            c.stop = function() {
                p.clearTimeout(d)
            }
        })
    }
    ;
    (function() {
        var a = n.createElement("input");
        n.createElement("div");
        var b = n.createElement("select")
          , c = b.appendChild(n.createElement("option"));
        var e = n.createElement("div");
        e.setAttribute("className", "t");
        e.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        e.getElementsByTagName("a");
        a.setAttribute("type", "checkbox");
        e.appendChild(a);
        var f = e.getElementsByTagName("a")[0];
        f.style.cssText = "top:1px";
        q.getSetAttribute = "t" !== e.className;
        q.style = /top/.test(f.getAttribute("style"));
        q.hrefNormalized = "/a" === f.getAttribute("href");
        q.checkOn = !!a.value;
        q.optSelected = c.selected;
        q.enctype = !!n.createElement("form").enctype;
        b.disabled = !0;
        q.optDisabled = !c.disabled;
        a = n.createElement("input");
        a.setAttribute("value", "");
        q.input = "" === a.getAttribute("value");
        a.value = "t";
        a.setAttribute("type", "radio");
        q.radioValue = "t" === a.value
    }
    )();
    var Kc = /\r/g
      , Lc = /[\x20\t\r\n\f]+/g;
    c.fn.extend({
        val: function(a) {
            var b, d, e = this[0];
            if (arguments.length) {
                var f = c.isFunction(a);
                return this.each(function(d) {
                    1 === this.nodeType && (d = f ? a.call(this, d, c(this).val()) : a,
                    null == d ? d = "" : "number" === typeof d ? d += "" : c.isArray(d) && (d = c.map(d, function(a) {
                        return null == a ? "" : a + ""
                    })),
                    b = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()],
                    b && "set"in b && void 0 !== b.set(this, d, "value") || (this.value = d))
                })
            }
            if (e) {
                if ((b = c.valHooks[e.type] || c.valHooks[e.nodeName.toLowerCase()]) && "get"in b && void 0 !== (d = b.get(e, "value")))
                    return d;
                d = e.value;
                return "string" === typeof d ? d.replace(Kc, "") : null == d ? "" : d
            }
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = c.find.attr(a, "value");
                    return null != b ? b : c.trim(c.text(a)).replace(Lc, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, d = a.options, e = a.selectedIndex, f = (a = "select-one" === a.type || 0 > e) ? null : [], g = a ? e + 1 : d.length, h = 0 > e ? g : a ? e : 0; h < g; h++)
                        if (b = d[h],
                        !(!b.selected && h !== e || (q.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && c.nodeName(b.parentNode, "optgroup"))) {
                            b = c(b).val();
                            if (a)
                                return b;
                            f.push(b)
                        }
                    return f
                },
                set: function(a, b) {
                    for (var d, e = a.options, f = c.makeArray(b), g = e.length; g--; )
                        if (b = e[g],
                        -1 < c.inArray(c.valHooks.option.get(b), f))
                            try {
                                b.selected = d = !0
                            } catch (h) {
                                b.scrollHeight
                            }
                        else
                            b.selected = !1;
                    d || (a.selectedIndex = -1);
                    return e
                }
            }
        }
    });
    c.each(["radio", "checkbox"], function() {
        c.valHooks[this] = {
            set: function(a, b) {
                if (c.isArray(b))
                    return a.checked = -1 < c.inArray(c(a).val(), b)
            }
        };
        q.checkOn || (c.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var aa = c.expr.attrHandle
      , cb = /^(?:checked|selected)$/i
      , oa = q.getSetAttribute
      , Ha = q.input;
    c.fn.extend({
        attr: function(a, b) {
            return E(this, c.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.removeAttr(this, a)
            })
        }
    });
    c.extend({
        attr: function(a, b, d) {
            var e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                if ("undefined" === typeof a.getAttribute)
                    return c.prop(a, b, d);
                if (1 !== f || !c.isXMLDoc(a)) {
                    b = b.toLowerCase();
                    var g = c.attrHooks[b] || (c.expr.match.bool.test(b) ? Mc : ca)
                }
                if (void 0 !== d) {
                    if (null === d) {
                        c.removeAttr(a, b);
                        return
                    }
                    if (g && "set"in g && void 0 !== (e = g.set(a, d, b)))
                        return e;
                    a.setAttribute(b, d + "");
                    return d
                }
                if (g && "get"in g && null !== (e = g.get(a, b)))
                    return e;
                e = c.find.attr(a, b);
                return null == e ? void 0 : e
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!q.radioValue && "radio" === b && c.nodeName(a, "input")) {
                        var d = a.value;
                        a.setAttribute("type", b);
                        d && (a.value = d);
                        return b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var d = 0
              , e = b && b.match(J);
            if (e && 1 === a.nodeType)
                for (; b = e[d++]; ) {
                    var f = c.propFix[b] || b;
                    c.expr.match.bool.test(b) ? Ha && oa || !cb.test(b) ? a[f] = !1 : a[c.camelCase("default-" + b)] = a[f] = !1 : c.attr(a, b, "");
                    a.removeAttribute(oa ? b : f)
                }
        }
    });
    var Mc = {
        set: function(a, b, d) {
            !1 === b ? c.removeAttr(a, d) : Ha && oa || !cb.test(d) ? a.setAttribute(!oa && c.propFix[d] || d, d) : a[c.camelCase("default-" + d)] = a[d] = !0;
            return d
        }
    };
    c.each(c.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var d = aa[b] || c.find.attr;
        Ha && oa || !cb.test(b) ? aa[b] = function(a, b, c) {
            if (!c) {
                var e = aa[b];
                aa[b] = f;
                var f = null != d(a, b, c) ? b.toLowerCase() : null;
                aa[b] = e
            }
            return f
        }
        : aa[b] = function(a, b, d) {
            if (!d)
                return a[c.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Ha && oa || (c.attrHooks.value = {
        set: function(a, b, d) {
            if (c.nodeName(a, "input"))
                a.defaultValue = b;
            else
                return ca && ca.set(a, b, d)
        }
    });
    if (!oa) {
        var ca = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c));
                d.value = b += "";
                if ("value" === c || b === a.getAttribute(c))
                    return b
            }
        };
        aa.id = aa.name = aa.coords = function(a, b, c) {
            var d;
            if (!c)
                return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }
        ;
        c.valHooks.button = {
            get: function(a, b) {
                if ((a = a.getAttributeNode(b)) && a.specified)
                    return a.value
            },
            set: ca.set
        };
        c.attrHooks.contenteditable = {
            set: function(a, b, c) {
                ca.set(a, "" === b ? !1 : b, c)
            }
        };
        c.each(["width", "height"], function(a, b) {
            c.attrHooks[b] = {
                set: function(a, c) {
                    if ("" === c)
                        return a.setAttribute(b, "auto"),
                        c
                }
            }
        })
    }
    q.style || (c.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Nc = /^(?:input|select|textarea|button|object)$/i
      , Oc = /^(?:a|area)$/i;
    c.fn.extend({
        prop: function(a, b) {
            return E(this, c.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            a = c.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    });
    c.extend({
        prop: function(a, b, d) {
            var e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                if (1 !== f || !c.isXMLDoc(a)) {
                    b = c.propFix[b] || b;
                    var g = c.propHooks[b]
                }
                return void 0 !== d ? g && "set"in g && void 0 !== (e = g.set(a, d, b)) ? e : a[b] = d : g && "get"in g && null !== (e = g.get(a, b)) ? e : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = c.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Nc.test(a.nodeName) || Oc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    q.hrefNormalized || c.each(["href", "src"], function(a, b) {
        c.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    q.optSelected || (c.propHooks.selected = {
        get: function(a) {
            if (a = a.parentNode)
                a.selectedIndex,
                a.parentNode && a.parentNode.selectedIndex;
            return null
        },
        set: function(a) {
            if (a = a.parentNode)
                a.selectedIndex,
                a.parentNode && a.parentNode.selectedIndex
        }
    });
    c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        c.propFix[this.toLowerCase()] = this
    });
    q.enctype || (c.propFix.enctype = "encoding");
    var db = /[\t\r\n\f]/g;
    c.fn.extend({
        addClass: function(a) {
            var b, d, e, f, g, h = 0;
            if (c.isFunction(a))
                return this.each(function(b) {
                    c(this).addClass(a.call(this, b, ja(this)))
                });
            if ("string" === typeof a && a)
                for (b = a.match(J) || []; d = this[h++]; ) {
                    var l = ja(d);
                    if (e = 1 === d.nodeType && (" " + l + " ").replace(db, " ")) {
                        for (g = 0; f = b[g++]; )
                            0 > e.indexOf(" " + f + " ") && (e += f + " ");
                        e = c.trim(e);
                        l !== e && c.attr(d, "class", e)
                    }
                }
            return this
        },
        removeClass: function(a) {
            var b, d, e, f, g, h = 0;
            if (c.isFunction(a))
                return this.each(function(b) {
                    c(this).removeClass(a.call(this, b, ja(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" === typeof a && a)
                for (b = a.match(J) || []; d = this[h++]; ) {
                    var l = ja(d);
                    if (e = 1 === d.nodeType && (" " + l + " ").replace(db, " ")) {
                        for (g = 0; f = b[g++]; )
                            for (; -1 < e.indexOf(" " + f + " "); )
                                e = e.replace(" " + f + " ", " ");
                        e = c.trim(e);
                        l !== e && c.attr(d, "class", e)
                    }
                }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a;
            return "boolean" === typeof b && "string" === d ? b ? this.addClass(a) : this.removeClass(a) : c.isFunction(a) ? this.each(function(d) {
                c(this).toggleClass(a.call(this, d, ja(this), b), b)
            }) : this.each(function() {
                var b, f;
                if ("string" === d) {
                    var g = 0;
                    var h = c(this);
                    for (f = a.match(J) || []; b = f[g++]; )
                        h.hasClass(b) ? h.removeClass(b) : h.addClass(b)
                } else if (void 0 === a || "boolean" === d)
                    (b = ja(this)) && c._data(this, "__className__", b),
                    c.attr(this, "class", b || !1 === a ? "" : c._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            var b, c = 0;
            for (a = " " + a + " "; b = this[c++]; )
                if (1 === b.nodeType && -1 < (" " + ja(b) + " ").replace(db, " ").indexOf(a))
                    return !0;
            return !1
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        c.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    c.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Pc = p.location
      , eb = c.now()
      , fb = /\?/
      , Qc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    c.parseJSON = function(a) {
        if (p.JSON && p.JSON.parse)
            return p.JSON.parse(a + "");
        var b, d = null, e = c.trim(a + "");
        return e && !c.trim(e.replace(Qc, function(a, c, e, l) {
            b && c && (d = 0);
            if (0 === d)
                return a;
            b = e || c;
            d += !l - !e;
            return ""
        })) ? Function("return " + e)() : c.error("Invalid JSON: " + a)
    }
    ;
    c.parseXML = function(a) {
        if (!a || "string" !== typeof a)
            return null;
        try {
            if (p.DOMParser) {
                var b = new p.DOMParser;
                var d = b.parseFromString(a, "text/xml")
            } else
                d = new p.ActiveXObject("Microsoft.XMLDOM"),
                d.async = "false",
                d.loadXML(a)
        } catch (e) {
            d = void 0
        }
        d && d.documentElement && !d.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + a);
        return d
    }
    ;
    var Rc = /#.*$/
      , Zb = /([?&])_=[^&]*/
      , Sc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg
      , Tc = /^(?:GET|HEAD)$/
      , Uc = /^\/\//
      , $b = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , ac = {}
      , Sa = {}
      , bc = "*/".concat("*")
      , gb = Pc.href
      , ta = $b.exec(gb.toLowerCase()) || [];
    c.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gb,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ta[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
            accepts: {
                "*": bc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ta(Ta(a, c.ajaxSettings), b) : Ta(c.ajaxSettings, a)
        },
        ajaxPrefilter: Kb(ac),
        ajaxTransport: Kb(Sa),
        ajax: function(a, b) {
            function d(a, b, d, e) {
                var k = b;
                if (2 !== P) {
                    P = 2;
                    g && p.clearTimeout(g);
                    l = void 0;
                    f = e || "";
                    x.readyState = 0 < a ? 4 : 0;
                    e = 200 <= a && 300 > a || 304 === a;
                    if (d) {
                        var r = m;
                        for (var t = x, w, K, z, A, Q = r.contents, E = r.dataTypes; "*" === E[0]; )
                            E.shift(),
                            void 0 === K && (K = r.mimeType || t.getResponseHeader("Content-Type"));
                        if (K)
                            for (A in Q)
                                if (Q[A] && Q[A].test(K)) {
                                    E.unshift(A);
                                    break
                                }
                        if (E[0]in d)
                            z = E[0];
                        else {
                            for (A in d) {
                                if (!E[0] || r.converters[A + " " + E[0]]) {
                                    z = A;
                                    break
                                }
                                w || (w = A)
                            }
                            z = z || w
                        }
                        z ? (z !== E[0] && E.unshift(z),
                        r = d[z]) : r = void 0
                    }
                    a: {
                        d = m;
                        w = r;
                        K = x;
                        z = e;
                        var H;
                        t = {};
                        Q = d.dataTypes.slice();
                        if (Q[1])
                            for (M in d.converters)
                                t[M.toLowerCase()] = d.converters[M];
                        for (A = Q.shift(); A; ) {
                            d.responseFields[A] && (K[d.responseFields[A]] = w);
                            !G && z && d.dataFilter && (w = d.dataFilter(w, d.dataType));
                            var G = A;
                            if (A = Q.shift())
                                if ("*" === A)
                                    A = G;
                                else if ("*" !== G && G !== A) {
                                    var M = t[G + " " + A] || t["* " + A];
                                    if (!M)
                                        for (H in t)
                                            if (r = H.split(" "),
                                            r[1] === A && (M = t[G + " " + r[0]] || t["* " + r[0]])) {
                                                !0 === M ? M = t[H] : !0 !== t[H] && (A = r[0],
                                                Q.unshift(r[1]));
                                                break
                                            }
                                    if (!0 !== M)
                                        if (M && d["throws"])
                                            w = M(w);
                                        else
                                            try {
                                                w = M(w)
                                            } catch (la) {
                                                r = {
                                                    state: "parsererror",
                                                    error: M ? la : "No conversion from " + G + " to " + A
                                                };
                                                break a
                                            }
                                }
                        }
                        r = {
                            state: "success",
                            data: w
                        }
                    }
                    if (e)
                        if (m.ifModified && ((k = x.getResponseHeader("Last-Modified")) && (c.lastModified[N] = k),
                        (k = x.getResponseHeader("etag")) && (c.etag[N] = k)),
                        204 === a || "HEAD" === m.type)
                            k = "nocontent";
                        else if (304 === a)
                            k = "notmodified";
                        else {
                            k = r.state;
                            var I = r.data;
                            var J = r.error;
                            e = !J
                        }
                    else if (J = k,
                    a || !k)
                        k = "error",
                        0 > a && (a = 0);
                    x.status = a;
                    x.statusText = (b || k) + "";
                    e ? y.resolveWith(n, [I, k, x]) : y.rejectWith(n, [x, k, J]);
                    x.statusCode(D);
                    D = void 0;
                    h && q.trigger(e ? "ajaxSuccess" : "ajaxError", [x, m, e ? I : J]);
                    C.fireWith(n, [x, k]);
                    h && (q.trigger("ajaxComplete", [x, m]),
                    --c.active || c.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (b = a,
            a = void 0);
            b = b || {};
            var e, f, g, h, l, k, m = c.ajaxSetup({}, b), n = m.context || m, q = m.context && (n.nodeType || n.jquery) ? c(n) : c.event, y = c.Deferred(), C = c.Callbacks("once memory"), D = m.statusCode || {}, E = {}, H = {}, P = 0, G = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === P) {
                        if (!k)
                            for (k = {}; b = Sc.exec(f); )
                                k[b[1].toLowerCase()] = b[2];
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === P ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    P || (a = H[c] = H[c] || a,
                    E[a] = b);
                    return this
                },
                overrideMimeType: function(a) {
                    P || (m.mimeType = a);
                    return this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > P)
                            for (b in a)
                                D[b] = [D[b], a[b]];
                        else
                            x.always(a[x.status]);
                    return this
                },
                abort: function(a) {
                    a = a || G;
                    l && l.abort(a);
                    d(0, a);
                    return this
                }
            };
            y.promise(x).complete = C.add;
            x.success = x.done;
            x.error = x.fail;
            m.url = ((a || m.url || gb) + "").replace(Rc, "").replace(Uc, ta[1] + "//");
            m.type = b.method || b.type || m.method || m.type;
            m.dataTypes = c.trim(m.dataType || "*").toLowerCase().match(J) || [""];
            null == m.crossDomain && (a = $b.exec(m.url.toLowerCase()),
            m.crossDomain = !(!a || a[1] === ta[1] && a[2] === ta[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (ta[3] || ("http:" === ta[1] ? "80" : "443"))));
            m.data && m.processData && "string" !== typeof m.data && (m.data = c.param(m.data, m.traditional));
            Lb(ac, m, b, x);
            if (2 === P)
                return x;
            (h = c.event && m.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
            m.type = m.type.toUpperCase();
            m.hasContent = !Tc.test(m.type);
            var N = m.url;
            m.hasContent || (m.data && (N = m.url += (fb.test(N) ? "\x26" : "?") + m.data,
            delete m.data),
            !1 === m.cache && (m.url = Zb.test(N) ? N.replace(Zb, "$1_\x3d" + eb++) : N + (fb.test(N) ? "\x26" : "?") + "_\x3d" + eb++));
            m.ifModified && (c.lastModified[N] && x.setRequestHeader("If-Modified-Since", c.lastModified[N]),
            c.etag[N] && x.setRequestHeader("If-None-Match", c.etag[N]));
            (m.data && m.hasContent && !1 !== m.contentType || b.contentType) && x.setRequestHeader("Content-Type", m.contentType);
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + bc + "; q\x3d0.01" : "") : m.accepts["*"]);
            for (e in m.headers)
                x.setRequestHeader(e, m.headers[e]);
            if (m.beforeSend && (!1 === m.beforeSend.call(n, x, m) || 2 === P))
                return x.abort();
            G = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[e](m[e]);
            if (l = Lb(Sa, m, b, x)) {
                x.readyState = 1;
                h && q.trigger("ajaxSend", [x, m]);
                if (2 === P)
                    return x;
                m.async && 0 < m.timeout && (g = p.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    P = 1,
                    l.send(E, d)
                } catch (K) {
                    if (2 > P)
                        d(-1, K);
                    else
                        throw K;
                }
            } else
                d(-1, "No Transport");
            return x
        },
        getJSON: function(a, b, d) {
            return c.get(a, b, d, "json")
        },
        getScript: function(a, b) {
            return c.get(a, void 0, b, "script")
        }
    });
    c.each(["get", "post"], function(a, b) {
        c[b] = function(a, e, f, g) {
            c.isFunction(e) && (g = g || f,
            f = e,
            e = void 0);
            return c.ajax(c.extend({
                url: a,
                type: b,
                dataType: g,
                data: e,
                success: f
            }, c.isPlainObject(a) && a))
        }
    });
    c._evalUrl = function(a) {
        return c.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ;
    c.fn.extend({
        wrapAll: function(a) {
            if (c.isFunction(a))
                return this.each(function(b) {
                    c(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return c.isFunction(a) ? this.each(function(b) {
                c(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = c(this)
                  , d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = c.isFunction(a);
            return this.each(function(d) {
                c(this).wrapAll(b ? a.call(this, d) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    c.expr.filters.hidden = function(a) {
        return q.reliableHiddenOffsets() ? 0 >= a.offsetWidth && 0 >= a.offsetHeight && !a.getClientRects().length : pc(a)
    }
    ;
    c.expr.filters.visible = function(a) {
        return !c.expr.filters.hidden(a)
    }
    ;
    var Vc = /%20/g
      , qc = /\[\]$/
      , cc = /\r?\n/g
      , Wc = /^(?:submit|button|image|reset|file)$/i
      , Xc = /^(?:input|select|textarea|keygen)/i;
    c.param = function(a, b) {
        var d, e = [], f = function(a, b) {
            b = c.isFunction(b) ? b() : null == b ? "" : b;
            e[e.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
        };
        void 0 === b && (b = c.ajaxSettings && c.ajaxSettings.traditional);
        if (c.isArray(a) || a.jquery && !c.isPlainObject(a))
            c.each(a, function() {
                f(this.name, this.value)
            });
        else
            for (d in a)
                Ua(d, a[d], b, f);
        return e.join("\x26").replace(Vc, "+")
    }
    ;
    c.fn.extend({
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = c.prop(this, "elements");
                return a ? c.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !c(this).is(":disabled") && Xc.test(this.nodeName) && !Wc.test(a) && (this.checked || !Oa.test(a))
            }).map(function(a, b) {
                a = c(this).val();
                return null == a ? null : c.isArray(a) ? c.map(a, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(cc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: a.replace(cc, "\r\n")
                }
            }).get()
        }
    });
    c.ajaxSettings.xhr = void 0 !== p.ActiveXObject ? function() {
        return this.isLocal ? Mb() : 8 < n.documentMode ? Va() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Va() || Mb()
    }
    : Va;
    var Yc = 0
      , Ia = {}
      , Ja = c.ajaxSettings.xhr();
    p.attachEvent && p.attachEvent("onunload", function() {
        for (var a in Ia)
            Ia[a](void 0, !0)
    });
    q.cors = !!Ja && "withCredentials"in Ja;
    (Ja = q.ajax = !!Ja) && c.ajaxTransport(function(a) {
        if (!a.crossDomain || q.cors) {
            var b;
            return {
                send: function(d, e) {
                    var f, g = a.xhr(), h = ++Yc;
                    g.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields)
                        for (f in a.xhrFields)
                            g[f] = a.xhrFields[f];
                    a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType);
                    a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d)
                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(a.hasContent && a.data || null);
                    b = function(d, f) {
                        if (b && (f || 4 === g.readyState))
                            if (delete Ia[h],
                            b = void 0,
                            g.onreadystatechange = c.noop,
                            f)
                                4 !== g.readyState && g.abort();
                            else {
                                var k = {};
                                var l = g.status;
                                "string" === typeof g.responseText && (k.text = g.responseText);
                                try {
                                    var n = g.statusText
                                } catch (I) {
                                    n = ""
                                }
                                l || !a.isLocal || a.crossDomain ? 1223 === l && (l = 204) : l = k.text ? 200 : 404
                            }
                        k && e(l, n, k, g.getAllResponseHeaders())
                    }
                    ;
                    a.async ? 4 === g.readyState ? p.setTimeout(b) : g.onreadystatechange = Ia[h] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    c.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                c.globalEval(a);
                return a
            }
        }
    });
    c.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    });
    c.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, d = n.head || c("head")[0] || n.documentElement;
            return {
                send: function(c, f) {
                    b = n.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, c) {
                        if (c || !b.readyState || /loaded|complete/.test(b.readyState))
                            b.onload = b.onreadystatechange = null,
                            b.parentNode && b.parentNode.removeChild(b),
                            b = null,
                            c || f(200, "success")
                    }
                    ;
                    d.insertBefore(b, d.firstChild)
                },
                abort: function() {
                    if (b)
                        b.onload(void 0, !0)
                }
            }
        }
    });
    var dc = []
      , hb = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = dc.pop() || c.expando + "_" + eb++;
            this[a] = !0;
            return a
        }
    });
    c.ajaxPrefilter("json jsonp", function(a, b, d) {
        var e, f = !1 !== a.jsonp && (hb.test(a.url) ? "url" : "string" === typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && hb.test(a.data) && "data");
        if (f || "jsonp" === a.dataTypes[0]) {
            var g = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback;
            f ? a[f] = a[f].replace(hb, "$1" + g) : !1 !== a.jsonp && (a.url += (fb.test(a.url) ? "\x26" : "?") + a.jsonp + "\x3d" + g);
            a.converters["script json"] = function() {
                e || c.error(g + " was not called");
                return e[0]
            }
            ;
            a.dataTypes[0] = "json";
            var h = p[g];
            p[g] = function() {
                e = arguments
            }
            ;
            d.always(function() {
                void 0 === h ? c(p).removeProp(g) : p[g] = h;
                a[g] && (a.jsonpCallback = b.jsonpCallback,
                dc.push(g));
                e && c.isFunction(h) && h(e[0]);
                e = h = void 0
            });
            return "script"
        }
    });
    c.parseHTML = function(a, b, d) {
        if (!a || "string" !== typeof a)
            return null;
        "boolean" === typeof b && (d = b,
        b = !1);
        b = b || n;
        var e = Rb.exec(a);
        d = !d && [];
        if (e)
            return [b.createElement(e[1])];
        e = ob([a], b, d);
        d && d.length && c(d).remove();
        return c.merge([], e.childNodes)
    }
    ;
    var ec = c.fn.load;
    c.fn.load = function(a, b, d) {
        if ("string" !== typeof a && ec)
            return ec.apply(this, arguments);
        var e, f, g = this, h = a.indexOf(" ");
        if (-1 < h) {
            var l = c.trim(a.slice(h, a.length));
            a = a.slice(0, h)
        }
        c.isFunction(b) ? (d = b,
        b = void 0) : b && "object" === typeof b && (e = "POST");
        0 < g.length && c.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            g.html(l ? c("\x3cdiv\x3e").append(c.parseHTML(a)).find(l) : a)
        }).always(d && function(a, b) {
            g.each(function() {
                d.apply(this, f || [a.responseText, b, a])
            })
        }
        );
        return this
    }
    ;
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        c.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    c.expr.filters.animated = function(a) {
        return c.grep(c.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    c.offset = {
        setOffset: function(a, b, d) {
            var e = c.css(a, "position")
              , f = c(a)
              , g = {};
            "static" === e && (a.style.position = "relative");
            var h = f.offset();
            var l = c.css(a, "top");
            var k = c.css(a, "left");
            ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [l, k]) ? (k = f.position(),
            l = k.top,
            k = k.left) : (l = parseFloat(l) || 0,
            k = parseFloat(k) || 0);
            c.isFunction(b) && (b = b.call(a, d, c.extend({}, h)));
            null != b.top && (g.top = b.top - h.top + l);
            null != b.left && (g.left = b.left - h.left + k);
            "using"in b ? b.using.call(a, g) : f.css(g)
        }
    };
    c.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    c.offset.setOffset(this, a, b)
                });
            var b, d = {
                top: 0,
                left: 0
            }, e = (b = this[0]) && b.ownerDocument;
            if (e) {
                var f = e.documentElement;
                if (!c.contains(f, b))
                    return d;
                "undefined" !== typeof b.getBoundingClientRect && (d = b.getBoundingClientRect());
                b = Nb(e);
                return {
                    top: d.top + (b.pageYOffset || f.scrollTop) - (f.clientTop || 0),
                    left: d.left + (b.pageXOffset || f.scrollLeft) - (f.clientLeft || 0)
                }
            }
        },
        position: function() {
            if (this[0]) {
                var a = {
                    top: 0,
                    left: 0
                }
                  , b = this[0];
                if ("fixed" === c.css(b, "position"))
                    var d = b.getBoundingClientRect();
                else {
                    var e = this.offsetParent();
                    d = this.offset();
                    c.nodeName(e[0], "html") || (a = e.offset());
                    a.top += c.css(e[0], "borderTopWidth", !0);
                    a.left += c.css(e[0], "borderLeftWidth", !0)
                }
                return {
                    top: d.top - a.top - c.css(b, "marginTop", !0),
                    left: d.left - a.left - c.css(b, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && !c.nodeName(a, "html") && "static" === c.css(a, "position"); )
                    a = a.offsetParent;
                return a || Xb
            })
        }
    });
    c.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var d = /Y/.test(b);
        c.fn[a] = function(e) {
            return E(this, function(a, e, h) {
                var f = Nb(a);
                if (void 0 === h)
                    return f ? b in f ? f[b] : f.document.documentElement[e] : a[e];
                f ? f.scrollTo(d ? c(f).scrollLeft() : h, d ? h : c(f).scrollTop()) : a[e] = h
            }, a, e, arguments.length, null)
        }
    });
    c.each(["top", "left"], function(a, b) {
        c.cssHooks[b] = Ra(q.pixelPosition, function(a, e) {
            if (e)
                return e = ia(a, b),
                Ba.test(e) ? c(a).position()[b] + "px" : e
        })
    });
    c.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        c.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(d, e) {
            c.fn[e] = function(e, g) {
                var f = arguments.length && (d || "boolean" !== typeof e)
                  , l = d || (!0 === e || !0 === g ? "margin" : "border");
                return E(this, function(b, d, e) {
                    return c.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (d = b.documentElement,
                    Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" + a], d["offset" + a], d["client" + a])) : void 0 === e ? c.css(b, d, l) : c.style(b, d, e, l)
                }, b, f ? e : void 0, f, null)
            }
        })
    });
    c.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, e) {
            return this.on(b, a, c, e)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    c.fn.size = function() {
        return this.length
    }
    ;
    c.fn.andSelf = c.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return c
    });
    var Zc = p.jQuery
      , $c = p.$;
    c.noConflict = function(a) {
        p.$ === c && (p.$ = $c);
        a && p.jQuery === c && (p.jQuery = Zc);
        return c
    }
    ;
    ba || (p.jQuery = p.$ = c);
    return c
});
jQuery.uaMatch = function(p) {
    p = p.toLowerCase();
    p = /(chrome)[ \/]([\w.]+)/.exec(p) || /(webkit)[ \/]([\w.]+)/.exec(p) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(p) || /(msie) ([\w.]+)/.exec(p) || 0 > p.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(p) || [];
    return {
        browser: p[1] || "",
        version: p[2] || "0"
    }
}
;
jQuery.browser || (matched = jQuery.uaMatch(navigator.userAgent),
browser = {},
matched.browser && (browser[matched.browser] = !0,
browser.version = matched.version),
browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0),
jQuery.browser = browser);
(function(p) {
    function ba(p) {
        var G = window.document.implementation.createHTMLDocument("");
        G.body.innerHTML = p;
        return G.body && G.body.innerHTML
    }
    var da = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , ua = p.htmlPrefilter;
    p.htmlPrefilter = function(p) {
        var G = p.replace(da, "\x3c$1\x3e\x3c/$2\x3e");
        G !== p && ba(p) !== ba(G) && console.error("HTML tags must be properly nested and closed: " + p);
        return ua(p)
    }
}
)(window.jQuery);

$(document).ready(function() {
    $(document).click(function(a) {
        a.stopPropagation();
        0 === $(".dropdownlist").has(a.target).length && ($(".dropdownlist-target").removeClass("dropdownlist-open"),
        $(".dropdownlist-target").removeClass("dropdownlist-enabled"),
        $(".dropdownlist").removeClass("dropdownlist-open"),
        $(".dropdownlist").removeClass("dropdownlist-enabled"),
        $(".btn-view-comic").show())
    });
    $(".dropdownlist-target").click(function(a) {
        a.stopPropagation();
        $(this).hasClass("dropdownlist-open") && $(this).hasClass("dropdownlist-open") ? ($(this).removeClass("dropdownlist-open"),
        $(this).removeClass("dropdownlist-enabled"),
        $(".dropdownlist").removeClass("dropdownlist-open"),
        $(".dropdownlist").removeClass("dropdownlist-enabled"),
        $(".btn-view-comic").show()) : ($(this).addClass("dropdownlist-open"),
        $(this).addClass("dropdownlist-enabled"),
        $(".dropdownlist").addClass("dropdownlist-open"),
        $(".dropdownlist").addClass("dropdownlist-enabled"),
        $(".btn-view-comic").hide())
    });
    $(".dropdownlist-option").click(function() {
        $(".dropdownlist-option").each(function(a, b) {
            $(b).removeClass("dropdownlist-option-selected");
            $(b).removeClass("dropdownlist-option-highlight")
        });
        $(this).addClass("dropdownlist-option-selected");
        $(this).addClass("dropdownlist-option-highlight");
        "" != $(this).attr("data-value") ? $(".btn-view-comic .comic-link-1").attr("href", $(this).attr("data-value")) : $(".btn-view-comic .comic-link-1").removeAttr("href");
        $(".dropdownlist-target").html($(this).text() + "\x3cb\x3e\x3c/b\x3e");
        $(".dropdownlist-target").removeClass("dropdownlist-open");
        $(".dropdownlist-target").removeClass("dropdownlist-enabled");
        $(".dropdownlist").removeClass("dropdownlist-open");
        $(".dropdownlist").removeClass("dropdownlist-enabled");
        $(".btn-view-comic").show()
    })
});
