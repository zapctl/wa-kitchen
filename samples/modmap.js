(function(t) {
    if (t.require != null)
        return;
    var e = null
      , n = null
      , r = []
      , o = {}
      , a = {}
      , i = 0
      , l = 0
      , s = 0
      , u = 0
      , c = 0
      , d = 1
      , m = 2
      , p = 4
      , _ = 8
      , f = 16
      , g = 32
      , h = 64
      , y = 128
      , C = 256
      , b = {}
      , v = {}
      , S = Object.prototype.hasOwnProperty
      , R = Object.prototype.toString;
    function L(e) {
        for (var t = Array.prototype.slice.call(e), n = {}, r, a, i, l; t.length; )
            if (a = t.shift(),
            !n[a] && (n[a] = !0,
            i = o[a],
            !(!i || pe(i)) && i.dependencies))
                for (r = 0; r < i.dependencies.length; r++)
                    l = i.dependencies[r],
                    pe(l) || t.push(l.id);
        for (a in n)
            S.call(n, a) && t.push(a);
        var s = [];
        for (r = 0; r < t.length; r++) {
            a = t[r];
            var u = a;
            i = o[a];
            var c = i ? i.dependencies : null;
            if (!i || !c)
                u += " is not defined";
            else if (pe(i))
                u += " is ready";
            else {
                for (var d = [], m = 0; m < c.length; m++)
                    l = c[m],
                    pe(l) || d.push(l.id);
                u += " is waiting for " + d.join(", ")
            }
            s.push(u)
        }
        return s.join("\n")
    }
    function E(e) {
        var t = new Error(e);
        t.name = "ModuleError",
        t.messageFormat = e;
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
            r[o - 1] = arguments[o];
        return t.messageParams = r.map(function(e) {
            return String(e)
        }),
        t.taalOpcodes = [2, 2],
        t
    }
    var k = t.Env || {}, I = !!k.gk_require_when_ready_in_order, T = !!k.clear_js_factory_after_used, D = !!k.profile_require_factories, x = t.performance || {}, $;
    if (x.now && x.timing && x.timing.navigationStart) {
        var P = x.timing.navigationStart;
        $ = function() {
            return x.now() + P
        }
    } else
        $ = function() {
            return Date.now()
        }
        ;
    var N = 0;
    function M(e) {
        N++;
        var t = o[e];
        return (!t || t.exports == null && !t.factoryFinished) && (W(e),
        t = o[e]),
        t && t.refcount-- === 1 && (o[e] = null),
        t
    }
    function w(e) {
        return e.defaultExport !== v ? e.defaultExport : e.exports
    }
    function A(e) {
        var t = M(e);
        if (t)
            return w(t)
    }
    function F(e) {
        var t = M(e);
        if (t)
            return t.defaultExport !== v ? t.defaultExport : null
    }
    function O(e) {
        var t = M(e);
        if (t)
            return t.exports
    }
    function B(e) {
        return e.factoryLength === -1 && (e.factoryLength = e.factory.length),
        e.factoryLength
    }
    function W(r) {
        var i = t.ErrorGuard;
        if (i && !i.inGuard())
            return i.applyWithGuard(W, null, [r]);
        var l = o[r];
        if (!l) {
            var s = 'Requiring unknown module "%s"';
            throw E(s, r)
        }
        t.__onBeforeModuleFactory == null || t.__onBeforeModuleFactory(l);
        var u, c;
        if (l.hasError) {
            if (l.error == null)
                throw E('Requiring module "%s" which threw an exception', r);
            var d = q(l.error);
            throw U(d, {
                messageFormat: 'Requiring module "%s" which threw an exception',
                messageParams: [r]
            }),
            d
        }
        if (!pe(l))
            throw E('Requiring module "%s" with unresolved dependencies: %s', r, L([r]));
        z(l);
        var p = l.exports = {}
          , f = l.factory
          , y = l.dependencies;
        if (R.call(f) === "[object Function]" && y != null) {
            var C = y.length, v, k;
            try {
                try {
                    be(l)
                } catch (e) {
                    V(e, r)
                }
                var I = []
                  , x = C;
                if (l.special & _) {
                    var P = l.special & g ? n : e;
                    I = P.slice(0),
                    I[P.length - 2] = l,
                    I[P.length - 1] = p,
                    x += I.length
                }
                if (l.special & m) {
                    var N = B(l);
                    x = Math.min(C + I.length, N)
                }
                for (var M = 0; M < C; M++) {
                    var w = y[M];
                    I.length < x && I.push(A.call(null, w.id))
                }
                var F;
                D && (F = $()),
                a[l.id].factoryRun = !0;
                try {
                    var O = l.context != null ? l.context : t;
                    v = f.apply(O, I)
                } catch (e) {
                    V(e, r)
                } finally {
                    if (D) {
                        var H = $()
                          , G = a[l.id];
                        G.factoryTime = H - (F || 0),
                        G.factoryEnd = H,
                        G.factoryStart = F
                    }
                }
            } catch (e) {
                throw l.hasError = !0,
                l.error = e,
                l.exports = null,
                e
            } finally {}
            v != null && (typeof v == "object" || typeof v == "function") && (l.exports = v);
            var j;
            if (l.special & h ? l.exports != null && S.call(l.exports, "default") && (l.defaultExport = j = l.exports.default) : l.defaultExport = j = l.exports,
            typeof j == "function") {
                var K = j.__superConstructor__;
                if (j.displayName == null || K && K.displayName === j.displayName)
                    try {
                        j.displayName = (j.name || "(anonymous)") + " [from " + r + "]"
                    } catch (e) {}
            }
            l.factoryFinished = !0,
            T && (l.factory = null,
            f = void 0)
        } else
            l.exports = f;
        var Q = "__isRequired__" + r
          , X = o[Q];
        X && !pe(X) && oe(Q, b),
        t.__onAfterModuleFactory == null || t.__onAfterModuleFactory(l)
    }
    function q(e) {
        return t.getErrorSafe != null ? t.getErrorSafe(e) : e != null && typeof e == "object" && typeof e.message == "string" ? e : E("Non-error thrown: %s", String(e))
    }
    function U(e, n) {
        var r = t.ErrorSerializer;
        r && r.aggregateError(e, n)
    }
    function V(e, t) {
        var n = q(e);
        throw U(n, {
            messageFormat: 'Module "%s"',
            messageParams: [t],
            forcedKey: t.startsWith("__") ? null : t
        }),
        n
    }
    function H() {
        return N
    }
    function G() {
        var e = {};
        for (var t in a)
            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
        return e
    }
    function z(e) {
        e.nonJSDeps || (e.nonJSDeps = !0,
        e.dependencies && e.dependencies.forEach(z))
    }
    var j = t != null && t.document != null && "createElement"in t.document
      , K = typeof WorkerGlobalScope == "function"
      , Q = j || K
      , X = k.use_fbt_virtual_modules === !0 && Q
      , Y = "$fbt_virtual"
      , J = {}
      , Z = null
      , ee = 6e4;
    function te(e) {
        !(e in o) && !(e in J) && (J[e] = $()),
        Z || (Z = setTimeout(Te()(ne, "_checkFbtVirtualModuleTimeout"), ee))
    }
    function ne() {
        Z = null;
        var e = $()
          , t = Object.keys(J).filter(function(t) {
            var n = e - J[t] > ee;
            return n && delete J[t],
            n
        });
        Object.keys(J).length > 0 && (Z = setTimeout(Te()(ne, "_checkFbtVirtualModuleTimeout"), ee)),
        t.length > 0 && se.apply(null, [["FBLogger"], function(e) {
            e("binary_transparency", "vmod_timeout").warn("The following virtual modules are taking over %sms to be defined: %s...", ee, t.join(",").slice(0, 300))
        }
        ])
    }
    function re(e, t, n) {
        if (X && n != null && n & y) {
            var r = e + Y;
            t.push(r),
            te(r)
        }
    }
    function oe(e, n, o, i, l, s, d) {
        n === void 0 ? (n = [],
        o = e,
        e = ue()) : o === void 0 && (o = n,
        R.call(e) === "[object Array]" ? (n = e,
        e = ue(n.join(","))) : n = []);
        var m = {
            cancel: le.bind(this, e)
        }
          , p = ae(e);
        if (!n && !o && s != null && s !== 0)
            return p.refcount += s,
            m;
        if (X && (e in J && delete J[e],
        Array.isArray(n) && re(e, n, i)),
        a[e] = {
            id: e,
            dependencies: n,
            meta: d,
            category: i,
            defined: D ? $() : null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        },
        p.dependencies && p.reload !== !0)
            return e.indexOf(":") !== -1 ? c++ : u++,
            m;
        s != null && s !== 0 && (p.refcount += s);
        var _ = n.map(ae);
        if (p.factory = o,
        p.dependencies = _,
        p.context = l,
        p.special = i,
        (p.nonJSDeps || he(p)) && (p.nonJSDeps = !1,
        z(p)),
        Ce(p),
        r.length > 0) {
            var f = r;
            r = [];
            var g = !ye(p) && t.ScheduleJSWork ? t.ScheduleJSWork : Ie;
            g(function() {
                if (I) {
                    for (var e = 0; e < f.length; e++)
                        A.call(null, f[e].id);
                    f.length = 0
                } else
                    for (; f.length > 0; )
                        A.call(null, f.pop().id)
            })()
        }
        return m
    }
    function ae(e) {
        var t = o[e];
        return t || (t = new ie(e,0),
        o[e] = t,
        t)
    }
    function ie(e, t, n) {
        this.id = e,
        this.refcount = t,
        this.exports = n != null ? n : null,
        this.defaultExport = n != null ? n : v,
        this.factory = void 0,
        this.factoryLength = -1,
        this.factoryFinished = !1,
        this.dependencies = void 0,
        this.depPosition = 0,
        this.context = void 0,
        this.special = 0,
        this.hasError = !1,
        this.error = null,
        this.ranRecursiveSideEffects = !1,
        this.sideEffectDependencyException = null,
        this.nextDepWaitingHead = null,
        this.nextDepWaitingNext = null,
        this.tarjanGeneration = -1,
        this.tarjanLow = 0,
        this.tarjanIndex = 0,
        this.tarjanOnStack = !1,
        this.nonJSDeps = !1
    }
    function le(e) {
        if (o[e]) {
            var t = o[e];
            if (o[e] = null,
            t.dependencies)
                for (var n = 0; n < t.dependencies.length; n++) {
                    var r = t.dependencies[n];
                    r.refcount-- === 1 && le(r.id)
                }
        }
    }
    function se(e, t, n, r) {
        n === void 0 && (n = null),
        r === void 0 && (r = 0);
        var o = "__requireLazy__x__" + i++;
        return oe("__requireLazy__" + o, e, Te()(t, "requireLazy", {
            propagationType: 0
        }), r | d | f, n, 1)
    }
    function ue(e) {
        return "__mod__" + (e != null ? e + "__" : "") + i++
    }
    function ce(e, t, n) {
        if (n.tarjanGeneration != l && (n.tarjanGeneration = l,
        n.tarjanLow = n.tarjanIndex = s++,
        n.tarjanOnStack = !0,
        t.push(n)),
        n.dependencies != null)
            for (var r = n.depPosition; r < n.dependencies.length; r++) {
                var o = n.dependencies[r];
                o.tarjanGeneration != l ? (ce(e, t, o),
                n.tarjanLow = Math.min(n.tarjanLow, o.tarjanLow)) : o.tarjanOnStack && (n.tarjanLow = Math.min(n.tarjanLow, o.tarjanIndex))
            }
        if (n.tarjanLow == n.tarjanIndex) {
            var a = [], i;
            do
                if (i = t.pop(),
                i.tarjanOnStack = !1,
                a.push(i),
                n == t[0] && i != n && i.dependencies != null)
                    for (var u = i.depPosition; u < i.dependencies.length; u++) {
                        var c = i.dependencies[u];
                        !pe(c) && e.indexOf(c) === -1 && t.indexOf(c) === -1 && a.indexOf(c) === -1 && e.push(c)
                    }
            while (i != n)
        }
    }
    function de(e) {
        var t = e.dependencies;
        if (!t)
            throw E("Called _replaceCycleLinkWithSCCDeps on an undefined module");
        l++,
        ce(t, [], e),
        e.depPosition++,
        Ce(e)
    }
    function me(e, t) {
        for (var n = t; n.dependencies && n.depPosition != n.dependencies.length; ) {
            n = n.dependencies[n.depPosition];
            if (n == e) {
                de(e);
                return
            }
        }
        e.nextDepWaitingNext = t.nextDepWaitingHead,
        t.nextDepWaitingHead = e
    }
    function pe(e) {
        return e.dependencies != null && e.depPosition >= e.dependencies.length
    }
    function _e(e) {
        e.depPosition++,
        Ce(e)
    }
    function fe(e) {
        var t = e.nextDepWaitingHead;
        for (e.nextDepWaitingHead = null; t != null; ) {
            var n = t;
            n.nonJSDeps && z(e),
            t = n.nextDepWaitingNext,
            n.nextDepWaitingNext = null;
            var r = !o[n.id];
            r || _e(n)
        }
    }
    function ge(e) {
        return e.special & d
    }
    function he(e) {
        return e.special & f
    }
    function ye(e) {
        return e.special & C
    }
    function Ce(e) {
        for (; e.dependencies != null && e.depPosition < e.dependencies.length; ) {
            var t = e.dependencies[e.depPosition]
              , n = pe(t);
            if (!n && e != t) {
                me(e, t);
                return
            }
            e.depPosition++
        }
        ge(e) && r.push(e),
        e.nextDepWaitingHead !== null && fe(e)
    }
    function be(e) {
        if (e.sideEffectDependencyException != null)
            throw e.sideEffectDependencyException;
        if (!e.ranRecursiveSideEffects) {
            e.ranRecursiveSideEffects = !0;
            var t = e.dependencies;
            if (t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    try {
                        be(r)
                    } catch (t) {
                        throw e.sideEffectDependencyException = t,
                        t
                    }
                    if (r.special & p)
                        try {
                            A.call(null, r.id)
                        } catch (t) {
                            throw e.sideEffectDependencyException = t,
                            t
                        }
                }
        }
    }
    function ve(e, t) {
        o[e] = new ie(e,0,t),
        a[e] = {
            id: e,
            dependencies: [],
            category: 0,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        }
    }
    ve("module", 0),
    ve("exports", 0),
    ve("define", oe),
    ve("global", t),
    ve("require", A),
    ve("requireInterop", A),
    ve("importDefault", F),
    ve("importNamespace", O),
    ve("requireDynamic", Se),
    ve("requireLazy", se),
    ve("requireWeak", Re),
    ve("ifRequired", Le),
    ve("ifRequireable", Ee),
    e = [A.call(null, "global"), A.call(null, "require"), A.call(null, "requireDynamic"), A.call(null, "requireLazy"), A.call(null, "requireInterop"), null],
    n = [A.call(null, "global"), A.call(null, "require"), A.call(null, "importDefault"), A.call(null, "importNamespace"), A.call(null, "requireLazy"), A.call(null, "requireInterop"), null],
    oe.amd = {},
    t.define = oe,
    t.require = A,
    t.requireInterop = A,
    t.importDefault = F,
    t.importNamespace = O,
    t.requireDynamic = Se,
    t.requireLazy = se,
    t.__onBeforeModuleFactory = null,
    t.__onAfterModuleFactory = null;
    function Se(e, t) {
        throw new ReferenceError("requireDynamic is not defined")
    }
    function Re(e, t) {
        Le.call(null, e, function(e) {
            t(e)
        }, function() {
            oe("__requireWeak__" + e + "__" + i++, ["__isRequired__" + e], Te()(function() {
                return t(w(o[e]))
            }, "requireWeak"), d, null, 1)
        })
    }
    function Le(e, t, n) {
        var r = o[e];
        if (r && r.factoryFinished) {
            if (typeof t == "function")
                return t(w(r))
        } else if (typeof n == "function")
            return n()
    }
    function Ee(e, t, n) {
        var r = o[e];
        if (r && r.nonJSDeps && pe(r)) {
            if (typeof t == "function")
                return t(A.call(null, e))
        } else if (typeof n == "function")
            return n()
    }
    var ke = {
        getDupCount: function() {
            return [u, c]
        },
        getModules: function() {
            var e = {};
            for (var t in o)
                o[t] && Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
            return e
        },
        modulesMap: o,
        debugUnresolvedDependencies: L
    };
    function Ie(e) {
        return e
    }
    function Te() {
        var e = t.TimeSlice && t.TimeSlice.guard ? t.TimeSlice.guard : Ie;
        return function() {
            return e.apply(void 0, arguments)
        }
    }
    ve("__getTotalRequireCalls", H),
    ve("__getModuleTimeDetails", G),
    ve("__debug", ke),
    t.__d = function(e, t, n, r) {
        Te()(function() {
            oe(e, t, n, (r != null ? r : m) | _, null, null, null)
        }, "define " + e, {
            root: !0
        })()
    }
    ;
    function De(e, t) {
        return !0
    }
    if (t.__d_stub) {
        for (var xe = 0; xe < t.__d_stub.length; xe++)
            t.__d.apply(null, t.__d_stub[xe]);
        delete t.__d_stub
    }
    if (t.__rl_stub) {
        for (var $e = 0; $e < t.__rl_stub.length; $e++)
            se.apply(null, t.__rl_stub[$e]);
        delete t.__rl_stub
    }
    var Pe = function() {};
    t.$RefreshReg$ = Pe,
    t.$RefreshSig$ = function() {
        return function(e) {
            return e
        }
    }
}
)(typeof this != "undefined" ? this : typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : {});
