function(t, n, r, o, a, i, l){
  function e(e){
    var t = o("WASmaxParseUtils").assertTag(e, "reason");
    if (!t.success) return t;
    var n = o("WASmaxParseUtils").contentString(e);
    return n.success ? o("WAResultOrError").makeResult({
          elementValue: n.value
        })
    : n
}
function s(t){
  var n = o("WASmaxParseUtils").assertTag(t, "Result");
  if (!n.success) return n;
  var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "status");
  if (!r.success) return r;
  var a = o("WASmaxParseUtils").optionalChildWithTag(t, "reason", e);
  if (!a.success) return a;
  var i = o("WASmaxParseUtils").contentStringEnum(r.value, o("WASmaxInBizCtwaAdAccountEnums").ENUM_FAIL_SUCCESS);
  return i.success ? o("WAResultOrError").makeResult({
        statusElementValue: i.value, reason: a.value
      })
  : i
}
l.parseAccountRecoveryCleanupResponseReason = e, l.parseAccountRecoveryCleanupResponseMixin = s
}