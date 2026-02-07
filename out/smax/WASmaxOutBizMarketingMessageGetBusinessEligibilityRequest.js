function(t, n, r, o, a, i, l){
  function e(e){
    var t = e.featuresMetaVerified, n = e.featuresMarketingMessages, r = o("WASmaxOutBizMarketingMessageHackBaseIQGetRequestMixin").mergeHackBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq",
        {
          xmlns: "w: biz", smax_id: o("WAWap").INT(139)
        }, o("WASmaxJsx").smax("features",
        {
          meta_verified: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t), marketing_messages: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n)
        })), e);
return r
}
l.makeGetBusinessEligibilityRequest = e
}