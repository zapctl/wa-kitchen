const map = { id: "WASmaxOutBotBotListRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxOutBotBotListIQMixin": require("./WASmaxOutBotBotListIQMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.botJid,n=o("WASmaxJsx").smax("bot",{jid:o("WAWap").JID(t)});return n}function s(t){var n=t.botArgs,r=t.botV,a=t.botBhash,i=o("WASmaxOutBotBotListIQMixin").mergeBotListIQMixin(o("WASmaxJsx").smax("iq",null,o("WASmaxJsx").smax("bot",{v:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,r),bhash:o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING,a)},o("WASmaxChildren").REPEATED_CHILD(e,n,0,1/0))));return i}l.makeBotListRequestBotBot=e,l.makeBotListRequest=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);