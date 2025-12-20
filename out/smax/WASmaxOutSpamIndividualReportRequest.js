// Dependencies: WASmaxAttrs, WASmaxChildren, WASmaxJsx, WASmaxMixins, WASmaxOutSpamBaseIQSetRequestMixin, WASmaxOutSpamBaseReportMixin, WASmaxOutSpamBizOptOutMixin, WASmaxOutSpamBizReportMixin, WASmaxOutSpamCallReportMixin, WASmaxOutSpamFRXMixin, WASmaxOutSpamMessageMixin, WASmaxOutSpamMessageSenderOrRecipientMixinGroup, WASmaxOutSpamTCTokenMixin, WASmaxOutSpamUIStateSetMixin, WASmaxOutSpamUserInitiatedExtensionMixin, WAWap
function(t, n, r, o, a, i, l) {
    function e(e) {
        var t = e.messageSenderOrRecipientMixinGroupArgs,
            n = o("WASmaxOutSpamMessageSenderOrRecipientMixinGroup").mergeMessageSenderOrRecipientMixinGroup(o("WASmaxOutSpamMessageMixin").mergeMessageMixin(o("WASmaxJsx").smax("message", null), e), t);
        return n
    }

    function s(e) {
        var t = o("WASmaxOutSpamCallReportMixin").mergeCallReportMixin(o("WASmaxJsx").smax("call", null), e);
        return t
    }

    function u(e) {
        var t = o("WASmaxOutSpamUserInitiatedExtensionMixin").mergeUserInitiatedExtensionMixin(o("WASmaxJsx").smax("user_initiated_extension", null), e);
        return t
    }

    function c(t) {
        var n, r = t.messageArgs,
            a = t.callArgs,
            i = t.userInitiatedExtensionArgs,
            l = t.fRXMixinArgs,
            c = t.spamListJid,
            d = t.bizOptOutMixinArgs,
            m = t.uIStateSetMixinArgs,
            p = t.bizReportMixinArgs,
            _ = t.tCTokenMixinArgs,
            f = (n = o("WASmaxMixins")).optionalMerge(o("WASmaxOutSpamFRXMixin").mergeFRXMixin, o("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(o("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", null, n.optionalMerge(o("WASmaxOutSpamTCTokenMixin").mergeTCTokenMixin, n.optionalMerge(o("WASmaxOutSpamBizReportMixin").mergeBizReportMixin, n.optionalMerge(o("WASmaxOutSpamUIStateSetMixin").mergeUIStateSetMixin, n.optionalMerge(o("WASmaxOutSpamBizOptOutMixin").mergeBizOptOutMixin, o("WASmaxJsx").smax("spam_list", {
                jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, c)
            }, [].concat(o("WASmaxChildren").REPEATED_CHILD(e, r, 0, 210), o("WASmaxChildren").REPEATED_CHILD(s, a, 0, 5), o("WASmaxChildren").REPEATED_CHILD(u, i, 0, 5))), d), m), p), _))), t), l);
        return f
    }
    l.makeIndividualReportRequestSpamListMessage = e, l.makeIndividualReportRequestSpamListCall = s, l.makeIndividualReportRequestSpamListUserInitiatedExtension = u, l.makeIndividualReportRequest = c
}