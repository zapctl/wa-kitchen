function(t, n, r, o, a, i, l){
  function e(e){
    var t, n = e.itemJid, r = e.itemCategory, a = e.itemAction, i = e.itemDhash, l = e.itemReason, s = e.itemEntryPoint, u = o("WASmaxJsx").smax("iq",
      {
        to: (t = o("WAWap")).S_WHATSAPP_NET, xmlns: "optoutlist", type: "set", id: t.generateId()
      }, o("WASmaxJsx").smax("item",
      {
        jid: t.USER_JID(n), category: t.CUSTOM_STRING(r), action: t.CUSTOM_STRING(a), dhash: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i), reason: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, l), entry_point: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, s)
      }));
return u
}
l.makeUpdateOptOutListRequest = e
}