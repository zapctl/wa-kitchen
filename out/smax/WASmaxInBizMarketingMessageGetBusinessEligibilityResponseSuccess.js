function(t, n, r, o, a, i, l){
  function e(e){
    var t = o("WASmaxParseUtils").assertTag(e, "meta_verified");
    if (!t.success) return t;
    var n = o("WASmaxParseUtils").attrStringEnum(e, "status", o("WASmaxInBizMarketingMessageEnums").ENUM_FAIL_SUCCESS);
    if (!n.success) return n;
    var r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "should_show_privacy_interstitial_to_new_users", o("WASmaxInBizMarketingMessageEnums").ENUM_FALSE_TRUE);
    if (!r.success) return r;
    var a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "additional_params");
    return a.success ? o("WAResultOrError").makeResult({
          status: n.value, shouldShowPrivacyInterstitialToNewUsers: r.value, additionalParams: a.value
        })
    : a
}
function s(e){
  var t = o("WASmaxParseUtils").assertTag(e, "marketing_messages");
  if (!t.success) return t;
  var n = o("WASmaxParseUtils").attrStringEnum(e, "status", o("WASmaxInBizMarketingMessageEnums").ENUM_FAIL_PAUSED_SUCCESS_WARNING);
  if (!n.success) return n;
  var r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "expiration",0, void 0);
  return r.success ? o("WAResultOrError").makeResult({
        status: n.value, expiration: r.value
      })
  : r
}
function u(t, n){
  var r = o("WASmaxParseUtils").assertTag(t, "iq");
  if (!r.success) return r;
  var a = o("WASmaxParseUtils").optionalChildWithTag(t, "meta_verified", e);
  if (!a.success) return a;
  var i = o("WASmaxParseUtils").optionalChildWithTag(t, "marketing_messages", s);
  if (!i.success) return i;
  var l = o("WASmaxInBizMarketingMessageHackBaseIQResultResponseMixin").parseHackBaseIQResultResponseMixin(t, n);
  return l.success ? o("WAResultOrError").makeResult(babelHelpers.extends({},
        l.value,
        {
          metaVerified: a.value, marketingMessages: i.value
        }))
  : l
}
l.parseGetBusinessEligibilityResponseSuccessMetaVerified = e, l.parseGetBusinessEligibilityResponseSuccessMarketingMessages = s, l.parseGetBusinessEligibilityResponseSuccess = u
}