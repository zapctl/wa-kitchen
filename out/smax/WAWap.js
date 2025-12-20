__d("WAWap", ["WAAssertUnreachable", "WABinary", "WACryptoDependencies", "WAJids", "WALogger", "WALongInt", "WATextEncoding", "WAWapDict", "WAWapJid", "WAXmlFormatter", "WAXmlNode", "err"], (function (t, n, r, o, a, i, l) {
  "use strict";
  var e, s, u, c, d, m = (c = o("WAJids")).MSGR_USER_DOMAIN.replace("@", ""), p = c.WA_USER_DOMAIN.replace("@", ""), _ = c.LID_DOMAIN.replace("@", ""), f = c.INTEROP_DOMAIN.replace("@", ""), g = c.HOSTED_DOMAIN.replace("@", ""), h = 2, y = 128, C = 0, b = 236, v = 237, S = 238, R = 239, L = [b, v, S, R], E = 245, k = 246, I = 247, T = 248, D = 249, x = 250, $ = 251, P = 252, N = 253, M = 254, w = 255, A = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", ".", "\uFFFD", "\uFFFD", "\uFFFD", "\uFFFD"], F = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], O = "", B = 1, W = {
    sentinel: "DROP_ATTR"
  }, q = (d = o("WAWapJid")).WapJid.create(null, "g.us"), U = d.WapJid.create(null, c.WA_SERVER_JID_SUFFIX), V = d.WapJid.create("status", "broadcast"), H = d.WapJid.create(null, "newsletter"), G = d.WapJid.create(null, "hosted"), z = d.WapJid.create(null, "hosted.lid"), j = d.WapJid.create(null, "call"), K = {}, Q = !1;
  function X() {
    Q = !0
  }
  var Y = o("WATextEncoding").newTextEncoder()
    , J = (function () {
      function e(e, t, n) {
        t === void 0 && (t = K),
          n === void 0 && (n = null),
          this.tag = e,
          this.attrs = t,
          this.content = n
      }
      var t = e.prototype;
      return t.toString = function () {
        var e = "<" + this.tag;
        e += o("WAXmlNode").attrsToString(this.attrs);
        var t = this.content;
        return Array.isArray(t) ? e += ">" + t.map(String).join("") + "</" + this.tag + ">" : t ? e += ">" + o("WAXmlNode").uint8ArrayToDebugString(t) + "</" + this.tag + ">" : e += " />",
          Q && (e = r("WAXmlFormatter")(e)),
          e
      }
        ,
        e
    }
    )();
  function Z(e, t, n) {
    var a = null;
    if (t && t.children != null)
      throw r("err")('Children should not be passed via props (see eslint check "react/no-children-props")');
    if (Array.isArray(n))
      a = n.filter(Boolean);
    else if (typeof n == "string")
      a = o("WABinary").Binary.build(n).readByteArrayView();
    else if (n instanceof ArrayBuffer)
      a = new Uint8Array(n);
    else if (n instanceof Uint8Array)
      a = n;
    else {
      for (var i = [], l = 2; l < arguments.length; l++) {
        var s = arguments[l];
        s && i.push(s)
      }
      a = i
    }
    Array.isArray(a) && a.length === 0 && (a = null);
    var u = {};
    if (t) {
      var c = t;
      Object.keys(c).forEach(function (t) {
        if (!["__self", "__source"].includes(t)) {
          var n = c[t];
          if (n == null)
            throw r("err")("Attr " + t + " in <" + e + "> is null");
          n !== W && (u[t] = n)
        }
      })
    }
    return new J(e, u, a)
  }
  var ee = Z;
  function te(e) {
    return e instanceof o("WAWapJid").WapJid ? e.toString() : e
  }
  function ne(e) {
    var t = e.content;
    return Array.isArray(t) ? t = t.map(ne) : typeof t == "string" && (t = o("WABinary").Binary.build(t).readByteArrayView()),
      new J(e.tag, e.attrs || K, t)
  }
  function re(e) {
    var t = e instanceof J ? e : ne(e)
      , n = new (o("WABinary")).Binary;
    oe(t, n);
    var r = 0
      , a = n.readByteArrayView()
      , i = new Uint8Array(1 + a.length);
    return i[0] = r,
      i.set(a, 1),
      i
  }
  function oe(e, t) {
    if (e == null)
      t.writeUint8(C);
    else if (e instanceof J)
      ie(e, t);
    else if (e instanceof o("WAWapJid").WapJid)
      ae(e, t);
    else if (typeof e == "string")
      ce(e, t);
    else if (e instanceof Uint8Array)
      me(e, t);
    else {
      var n = typeof e;
      throw r("err")("Invalid payload type " + n)
    }
  }
  function ae(e, t) {
    var n = e.getInnerJid();
    if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_U) {
      var r = n.user
        , a = n.device
        , i = n.domainType;
      t.writeUint8(I),
        t.writeUint8(i),
        t.writeUint8(a),
        oe(r, t)
    } else if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_FB) {
      var l = n.user
        , s = n.device;
      t.writeUint8(k),
        oe(l, t),
        t.writeUint16(s),
        oe(m, t)
    } else if (n.type === o("WAWapJid").WAP_JID_SUBTYPE.JID_INTEROP) {
      var u = n.user
        , c = n.device
        , d = n.integrator;
      t.writeUint8(E),
        oe(u, t),
        t.writeUint16(c),
        t.writeUint16(d)
    } else {
      var p = n.user
        , _ = n.server;
      t.writeUint8(x),
        p != null ? oe(p, t) : t.writeUint8(C),
        oe(_, t)
    }
  }
  function ie(e, t) {
    if (e.tag === void 0) {
      t.writeUint8(T),
        t.writeUint8(C);
      return
    }
    var n = 1;
    e.attrs && (n += Object.keys(e.attrs).length * 2),
      e.content && n++,
      n < 256 ? (t.writeUint8(T),
        t.writeUint8(n)) : n < 65536 && (t.writeUint8(D),
          t.writeUint16(n)),
      oe(e.tag, t),
      e.attrs && Object.keys(e.attrs).forEach(function (n) {
        ce(n, t),
          oe(e.attrs[n], t)
      });
    var r = e.content;
    if (Array.isArray(r)) {
      r.length < 256 ? (t.writeUint8(T),
        t.writeUint8(r.length)) : r.length < 65536 && (t.writeUint8(D),
          t.writeUint16(r.length));
      for (var o = 0; o < r.length; o++)
        ie(r[o], t)
    } else
      r && oe(r, t)
  }
  var le, se;
  function ue(e) {
    for (var t = new Map, n = 0; n < e.length; n++)
      t.set(e[n], n);
    return t
  }
  function ce(e, t) {
    if (e === "") {
      t.writeUint8(P),
        t.writeUint8(0);
      return
    }
    le == null && (le = ue(o("WAWapDict").SINGLE_BYTE_TOKEN));
    var n = le.get(e);
    if (n != null) {
      t.writeUint8(n + 1);
      return
    }
    if (se == null) {
      se = [];
      for (var r = 0; r < o("WAWapDict").DICTIONARIES.length; ++r)
        se.push(ue(o("WAWapDict").DICTIONARIES[r]))
    }
    for (var a = 0; a < se.length; ++a) {
      var i = se[a].get(e);
      if (i != null) {
        t.writeUint8(L[a]),
          t.writeUint8(i);
        return
      }
    }
    var l = o("WABinary").numUtf8Bytes(e);
    if (l < 128) {
      var s = /[^0-9.-]+?/
        , u = /[^0-9A-F]+?/;
      if (s.exec(e)) {
        if (!u.exec(e)) {
          de(e, $, t);
          return
        }
      } else {
        de(e, w, t);
        return
      }
    }
    pe(l, t),
      t.writeString(e)
  }
  function de(e, t, n) {
    var o = e.length % 2 === 1;
    n.writeUint8(t);
    var a = Math.ceil(e.length / 2);
    o && (a |= y),
      n.writeUint8(a);
    for (var i = 0, l = 0; l < e.length; l++) {
      var s = e.charCodeAt(l)
        , u = null;
      if (48 <= s && s <= 57 ? u = s - 48 : t === w ? s === 45 ? u = 10 : s === 46 && (u = 11) : t === $ && 65 <= s && s <= 70 && (u = s - 55),
        u == null)
        throw r("err")("Cannot nibble encode " + s);
      l % 2 === 0 ? (i = u << 4,
        l === e.length - 1 && (i |= 15,
          n.writeUint8(i))) : (i |= u,
            n.writeUint8(i))
    }
  }
  function me(e, t) {
    pe(e.length, t),
      t.writeByteArray(e)
  }
  function pe(e, t) {
    if (e < 256)
      t.writeUint8(P),
        t.writeUint8(e);
    else if (e < 1048576)
      t.writeUint8(N),
        t.writeUint8(e >>> 16 & 255),
        t.writeUint8(e >>> 8 & 255),
        t.writeUint8(e & 255);
    else if (e < 4294967296)
      t.writeUint8(M),
        t.writeUint32(e);
    else
      throw r("err")("Binary with length " + e + " is too big for WAP protocol")
  }
  function _e(t, n) {
    var r = new (o("WABinary")).Binary(t)
      , a = r.readUint8()
      , i = a & h;
    return i ? (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Decoding compressed stanza"]))),
      n(r.readByteArrayView()).then(function (e) {
        return ye(new (o("WABinary")).Binary(e))
      })) : Promise.resolve(ye(r))
  }
  function fe(e) {
    var t = new (o("WABinary")).Binary(e)
      , n = t.readUint8()
      , a = n & h;
    if (a)
      throw r("err")("Cannot pass compressed stanza to decodeStanzaDebug");
    return ye(t)
  }
  function ge(e, t) {
    var n = e.readUint8();
    if (n === C)
      return null;
    if (n === T)
      return he(e, e.readUint8());
    if (n === D)
      return he(e, e.readUint16());
    if (n === P) {
      var a = e.readUint8();
      return Ee(e, a, t)
    }
    if (n === N) {
      var i = e.readUint8()
        , l = e.readUint8()
        , s = e.readUint8()
        , u = ((i & 15) << 16) + (l << 8) + s;
      return Ee(e, u, t)
    }
    if (n === M) {
      var c = e.readUint32();
      return Ee(e, c, t)
    }
    if (n === x)
      return ve(e);
    if (n === k)
      return Se(e);
    if (n === E)
      return Re(e);
    if (n === I)
      return Le(e);
    if (n === w) {
      var d = e.readUint8()
        , m = d >>> 7
        , p = d & 127;
      return ke(e, A, m, p)
    }
    if (n === $) {
      var _ = e.readUint8()
        , f = _ >>> 7
        , g = _ & 127;
      return ke(e, F, f, g)
    }
    if (n <= 0 || n >= 240)
      throw r("err")("Unable to decode WAP buffer");
    if (n >= b && n <= R) {
      var h = n - b
        , y = o("WAWapDict").DICTIONARIES[h];
      if (y === void 0)
        throw r("err")("Missing WAP dictionary " + h);
      var v = e.readUint8()
        , S = y[v];
      if (S === void 0)
        throw r("err")("Invalid value index " + v + " in dict " + h);
      return S
    }
    var L = o("WAWapDict").SINGLE_BYTE_TOKEN[n - 1];
    if (L === void 0)
      throw r("err")("Undefined token with index " + n);
    return L
  }
  function he(e, t) {
    for (var n = [], r = 0; r < t; r++)
      n.push(ye(e));
    return n
  }
  function ye(e) {
    var t = e.readUint8(), n;
    if (t === T)
      n = e.readUint8();
    else if (t === D)
      n = e.readUint16();
    else
      throw r("err")("Failed to decode node since type byte " + String(t) + " is invalid");
    var a = void 0
      , i = null;
    if (n === 0)
      throw r("err")("Failed to decode node, list cannot be empty");
    var l = Ce(e);
    for (n -= 1; n > 1;) {
      a || (a = {});
      var s = Ce(e)
        , u = ge(e, !0);
      a[s] = u,
        n -= 2
    }
    return n === 1 && (i = ge(e, !1),
      i instanceof o("WAWapJid").WapJid && (i = String(i)),
      typeof i == "string" && (i = Y.encode(i))),
      new J(l, a, i)
  }
  function Ce(e) {
    var t = ge(e, !0);
    if (typeof t != "string")
      throw o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["decodeString got invalid value: ", ", string expected"])), String(t)),
      r("err")("WAWap:decodeString got invalid value, string expected");
    return t
  }
  function be(e) {
    var t = ge(e, !0);
    if (t != null && typeof t != "string")
      throw o("WALogger").DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["decodeNullableString got invalid value: ", ", string expected"])), String(t)),
      r("err")("WAWap:decodeNullableString got invalid value, string expected");
    return t
  }
  function ve(e) {
    var t = be(e)
      , n = Ce(e);
    return o("WAWapJid").WapJid.create(t, n)
  }
  function Se(e) {
    var t = Ce(e)
      , n = e.readUint16();
    return Ce(e),
      o("WAWapJid").WapJid.createFbJid(t, n)
  }
  function Re(e) {
    var t = Ce(e)
      , n = e.readUint16()
      , r = e.readUint16();
    return Ce(e),
      o("WAWapJid").WapJid.createInteropJid(t, n, r)
  }
  function Le(e) {
    var t = null
      , n = e.readUint8();
    if (n === 0)
      t = o("WAWapJid").DomainType.WHATSAPP;
    else if (n === 1)
      t = o("WAWapJid").DomainType.LID;
    else if ((1 & n) === 0 && (128 & n) !== 0)
      t = o("WAWapJid").DomainType.HOSTED;
    else if (n === 129)
      t = o("WAWapJid").DomainType.HOSTED_LID;
    else
      throw r("err")("decodeJidU - Invalid domain type encoding " + n);
    var a = e.readUint8()
      , i = Ce(e);
    return o("WAWapJid").WapJid.createJidU(i, t, a)
  }
  function Ee(e, t, n) {
    return n === void 0 && (n = !1),
      n ? e.readString(t) : e.readByteArrayView(t)
  }
  function ke(e, t, n, r) {
    for (var o = new Array(r * 2 - n), a = 0; a < o.length - 1; a += 2) {
      var i = e.readUint8();
      o[a] = t[i >>> 4],
        o[a + 1] = t[i & 15]
    }
    if (n) {
      var l = e.readUint8();
      o[o.length - 1] = t[l >>> 4]
    }
    return o.join("")
  }
  function Ie() {
    if (!O) {
      var e = new Uint16Array(2);
      o("WACryptoDependencies").getCrypto().getRandomValues(e),
        O = String(e[0]) + "." + String(e[1]) + "-"
    }
    return "" + O + B++
  }
  function Te(e) {
    switch (e.type) {
      case "group":
        return e.groupJid;
      case "status":
        return o("WAJids").STATUS_JID;
      case "device":
        return e.deviceJid;
      case "newsletter":
        return e.newsletterJid;
      case "hosted":
        return e.hostedDeviceJid;
      case "hostedLid":
        return e.hostedLidDeviceJid;
      default:
        return e.type,
          e.broadcastJid
    }
  }
  function De(e) {
    switch (e.type) {
      case "group":
        return e.author;
      case "status":
        return e.author;
      case "broadcast":
        return e.author;
      default:
        return e.type,
          null
    }
  }
  function xe(e) {
    return e.type === "status" || e.type === "group" || e.type === "broadcast" ? Pe(e.author) : W
  }
  function $e(e) {
    return Pe(Te(e))
  }
  function Pe(e) {
    var t = o("WAJids").validateDomainJid(e);
    if (t != null)
      return Ne(t);
    var n = e.split("@")
      , a = n[0]
      , i = n[1]
      , l = null
      , s = null;
    if ((i === p || i === m || i === f || i === _ || i === g || i === o("WAJids").HOSTED_LID_SUFFIX) && a.indexOf(":") !== -1) {
      var u = a.split(":");
      a = u[0],
        l = u[1],
        s = parseInt(l, 10)
    }
    if (i === f) {
      var c = a.split("-")
        , d = c[0]
        , h = c[1];
      return o("WAWapJid").WapJid.createInteropJid(h, s, parseInt(d, 10))
    } else if (i === m)
      return o("WAWapJid").WapJid.createFbJid(a, s);
    var y = null;
    if (i === _)
      y = o("WAWapJid").DomainType.LID;
    else if (i === g) {
      if (s !== 99)
        throw r("err")("wid unexpected deviceId");
      y = o("WAWapJid").DomainType.HOSTED
    } else if (i === o("WAJids").HOSTED_LID_SUFFIX) {
      if (s !== 99)
        throw r("err")("lid invalid deviceId");
      y = o("WAWapJid").DomainType.HOSTED_LID
    } else
      y = o("WAWapJid").DomainType.WHATSAPP;
    return s != null && s !== 0 ? o("WAWapJid").WapJid.createJidU(a, y, s) : o("WAWapJid").WapJid.create(a, i)
  }
  function Ne(e) {
    return e === "s.whatsapp.net" ? U : e === "g.us" ? q : e === "newsletter" ? H : e === "call" ? j : r("WAAssertUnreachable")(e)
  }
  function Me(e) {
    return Pe(e)
  }
  function we(e) {
    return Pe(e)
  }
  function Ae(e) {
    return Pe(e)
  }
  function Fe(e) {
    return Pe(e)
  }
  function Oe(e) {
    return Pe(e)
  }
  function Be(e) {
    return Pe(e)
  }
  function We(e) {
    return e.jidType === "phoneDevice" || e.jidType === "msgrDevice" || e.jidType === "lidDevice" ? Pe(e.deviceJid) : e.jidType === "phoneUser" || e.jidType === "msgrUser" || e.jidType === "lidUser" ? Pe(e.userJid) : e.jidType === "group" ? Pe(e.groupJid) : e.jidType === "status" ? Pe(e.statusJid) : e.jidType === "call" ? Pe(e.callJid) : e.jidType === "interopDevice" ? Pe(e.deviceJid) : e.jidType === "interopUser" ? Pe(e.userJid) : e.jidType === "newsletter" ? Pe(e.newsletterJid) : e.jidType === "hosted" ? Pe(e.hostedDeviceJid) : e.jidType === "hostedLid" ? Pe(e.hostedLidDeviceJid) : e.jidType === "bot" ? Pe(e.botJid) : (e.jidType,
      Pe(e.broadcastJid))
  }
  function qe(e) {
    return e
  }
  function Ue(e) {
    return e.toString()
  }
  function Ve(e) {
    return e
  }
  function He(e) {
    return e
  }
  function Ge(e) {
    return e == null ? W : e
  }
  function ze(e) {
    return e.toString()
  }
  function je(e) {
    return o("WALongInt").longIntToDecimalString(e)
  }
  function Ke(e, t) {
    t === void 0 && (t = 4);
    for (var n = e, r = new Uint8Array(t), o = t - 1; o >= 0; o--)
      r[o] = n & 255,
        n >>>= 8;
    return r
  }
  l.DROP_ATTR = W,
    l.G_US = q,
    l.S_WHATSAPP_NET = U,
    l.STATUS_BROADCAST = V,
    l.NEWSLETTER = H,
    l.HOSTED = G,
    l.HOSTED_LID = z,
    l.CALL = j,
    l.enableXMLFormat = X,
    l.WapNode = J,
    l.makeWapNode = Z,
    l.wap = ee,
    l.decodeAsString = te,
    l.makeStanza = ne,
    l.encodeStanza = re,
    l.decodeStanza = _e,
    l.decodeStanzaDebug = fe,
    l.generateId = Ie,
    l.extractToJid = Te,
    l.extractParticipantJid = De,
    l.PARTICIPANT_JID = xe,
    l.TO_JID = $e,
    l.JID = Pe,
    l.DOMAIN_JID = Ne,
    l.USER_JID = Me,
    l.DEVICE_JID = we,
    l.GROUP_JID = Ae,
    l.BROADCAST_JID = Fe,
    l.CALL_JID = Oe,
    l.NEWSLETTER_JID = Be,
    l.TO_WAP_JID = We,
    l.STANZA_ID = qe,
    l.SMAX_ID = Ue,
    l.CUSTOM_STRING = Ve,
    l.CALL_ID = He,
    l.MAYBE_CUSTOM_STRING = Ge,
    l.INT = ze,
    l.LONG_INT = je,
    l.BIG_ENDIAN_CONTENT = Ke
}
), 98);