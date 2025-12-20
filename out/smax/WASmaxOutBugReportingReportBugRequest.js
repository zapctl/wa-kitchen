// Dependencies: WASmaxAttrs, WASmaxChildren, WASmaxJsx, WASmaxOutBugReportingHackBaseIQSetRequestMixin, WAWap
function(t, n, r, o, a, i, l) {
    function e(e) {
        var t = e.deviceLogHandleElementValue,
            n = o("WASmaxJsx").smax("device_log_handle", null, t);
        return n
    }

    function s(e) {
        var t = e.mediaIv,
            n = e.mediaCipherKey,
            r = e.mediaType,
            a = e.mediaElementValue,
            i = o("WASmaxJsx").smax("media", {
                iv: o("WAWap").CUSTOM_STRING(t),
                cipherKey: o("WAWap").CUSTOM_STRING(n),
                type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r)
            }, a);
        return i
    }

    function u(e) {
        var t = e.titleElementValue,
            n = o("WASmaxJsx").smax("title", null, t);
        return n
    }

    function c(e) {
        var t = e.categoryElementValue,
            n = o("WASmaxJsx").smax("category", null, t);
        return n
    }

    function d(t) {
        var n, r = t.deviceLogHandleArgs,
            a = t.mediaArgs,
            i = t.titleArgs,
            l = t.categoryArgs,
            d = t.descriptionElementValue,
            m = t.debugInformationJsonElementValue,
            p = o("WASmaxOutBugReportingHackBaseIQSetRequestMixin").mergeHackBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", {
                xmlns: "fb:thrift_iq",
                smax_id: o("WAWap").INT(105)
            }, [o("WASmaxJsx").smax("description", null, d), o("WASmaxJsx").smax("debug_information_json", null, m), (n = o("WASmaxChildren")).OPTIONAL_CHILD(e, r)].concat(n.REPEATED_CHILD(s, a, 0, 10), [n.OPTIONAL_CHILD(u, i), n.OPTIONAL_CHILD(c, l)])), t);
        return p
    }
    l.makeReportBugRequestDeviceLogHandle = e, l.makeReportBugRequestMedia = s, l.makeReportBugRequestTitle = u, l.makeReportBugRequestCategory = c, l.makeReportBugRequest = d
}