const map = { id: "WASmaxOutNewslettersGetNewsletterMessageUpdatesRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutNewslettersMessageUpdatesBeforeOrAfterMixinMixinGroup": require("./WASmaxOutNewslettersMessageUpdatesBeforeOrAfterMixinMixinGroup.js"),"WASmaxOutNewslettersNewsletterIQGetRequestMixin": require("./WASmaxOutNewslettersNewsletterIQGetRequestMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.messageUpdatesCount,n=e.messageUpdatesSince,r=e.messageUpdatesBeforeOrAfterMixinMixinGroupArgs,a=o("WASmaxOutNewslettersNewsletterIQGetRequestMixin").mergeNewsletterIQGetRequestMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxOutNewslettersMessageUpdatesBeforeOrAfterMixinMixinGroup").mergeMessageUpdatesBeforeOrAfterMixinMixinGroup(o("WASmaxJsx").smax("message_updates",{count:o("WAWap").INT(t),since:o("WASmaxAttrs").OPTIONAL(o("WAWap").INT,n)}),r)),e);return a}l.makeGetNewsletterMessageUpdatesRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);