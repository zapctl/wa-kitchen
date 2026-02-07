function(t, n, r, o, a, i, l){
  function e(e){
    var t = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "action");
    if (!t.success) return t;
    var n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "category");
    if (!n.success) return n;
    var r = o("WASmaxInBlocklistsBizOptOutIds").parseBizOptOutIds(e);
    return r.success ? o("WAResultOrError").makeResult({
          action: t.value, category: n.value, bizOptOutIds: r.value
        })
    : r
}
l.parseBizOptOutResponseMixin = e
}