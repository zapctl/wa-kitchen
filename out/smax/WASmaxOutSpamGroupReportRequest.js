// Dependencies: WASmaxAttrs, WASmaxChildren, WASmaxJsx, WASmaxMixins, WASmaxOutSpamBaseIQSetRequestMixin, WASmaxOutSpamBaseReportMixin, WASmaxOutSpamCallReportMixin, WASmaxOutSpamEntitySubjectMixin, WASmaxOutSpamFRXMixin, WASmaxOutSpamMessageMixin, WAWap
function(t, n, r, o, a, i, l) {
  function makeGroupReportRequestSpamListMessage(messageArgs) {
    const messageFrom = messageArgs.messageFrom;
    const messagePhash = messageArgs.messagePhash;

    return require("WASmaxOutSpamMessageMixin").mergeMessageMixin(
      require("WASmaxJsx").smax("message", {
        from: require("WAWap").GROUP_JID(messageFrom),
        phash: require("WASmaxAttrs").OPTIONAL(require("WAWap").CUSTOM_STRING, messagePhash)
      }),
      messageArgs
    );
  }

  function makeGroupReportRequestSpamListCall(callArgs) {
    return require("WASmaxOutSpamCallReportMixin").mergeCallReportMixin(
      require("WASmaxJsx").smax("call", null),
      callArgs
    );
  }

  function makeGroupReportRequest(t) {
    const messageArgs = t.messageArgs;
    const callArgs = t.callArgs;
    const fRXMixinArgs = t.fRXMixinArgs;
    const spamListJid = t.spamListJid;
    const spamListSource = t.spamListSource;

    return require("WASmaxOutSpamEntitySubjectMixin").mergeEntitySubjectMixin(
      require("WASmaxMixins").optionalMerge(
        require("WASmaxOutSpamFRXMixin").mergeFRXMixin,
        require("WASmaxOutSpamBaseReportMixin").mergeBaseReportMixin(
          require("WASmaxOutSpamBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
            require("WASmaxJsx").smax("iq", null, require("WASmaxJsx").smax("spam_list", {
              jid: require("WAWap").GROUP_JID(spamListJid),
              source: require("WASmaxAttrs").OPTIONAL(require("WAWap").USER_JID, spamListSource)
            }, [
              ...require("WASmaxChildren").REPEATED_CHILD(makeGroupReportRequestSpamListMessage, messageArgs, 0, 210),
              ...require("WASmaxChildren").REPEATED_CHILD(makeGroupReportRequestSpamListCall, callArgs, 0, 5)
            ]))
          ),
          t
        ),
        fRXMixinArgs
      ),
      t
    );
  }

  l.makeGroupReportRequestSpamListMessage = makeGroupReportRequestSpamListMessage;
  l.makeGroupReportRequestSpamListCall = makeGroupReportRequestSpamListCall;
  l.makeGroupReportRequest = makeGroupReportRequest;
}