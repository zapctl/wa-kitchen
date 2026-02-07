function(t, n, r, o, a, i, l){
  function e(e, t){
    var n = o("WASmaxParseUtils").assertTag(e, "ack");
    if (!n.success) return n;
    var r = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "call");
    if (!r.success) return r;
    var a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "waiting_room_toggle");
    if (!a.success) return a;
    var i = o("WASmaxInVoipCallAckBaseMixin").parseCallAckBaseMixin(e, t);
    return i.success ? o("WAResultOrError").makeResult(babelHelpers.extends({
            from: r.value, type: a.value
          }, i.value))
    : i
}
l.parseWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck = e
}