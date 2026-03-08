const map = { id: "WASmaxOutVoipLinkCreateRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxAttrs": require("./WASmaxAttrs.js"),"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.eventStartTime,n=o("WASmaxJsx").smax("event",{start_time:o("WAWap").INT(t)});return n}function s(t){var n,r,a=t.eventArgs,i=t.callTo,l=t.linkCreateMedia,s=t.linkCreateCallCreator,u=t.linkCreateCallId,c=t.linkCreateLinkCreatorUsername,d=t.hasLinkCreateWaitingRoomEnabled1,m=o("WASmaxJsx").smax("call",{id:(n=o("WAWap")).generateId(),to:n.JID(i)},o("WASmaxJsx").smax("link_create",{media:(r=o("WASmaxAttrs")).OPTIONAL(n.CUSTOM_STRING,l),"call-creator":r.OPTIONAL(n.DEVICE_JID,s),"call-id":r.OPTIONAL(n.CALL_ID,u),link_creator_username:r.OPTIONAL(n.CUSTOM_STRING,c),waiting_room_enabled:r.OPTIONAL_LITERAL("1",d)},o("WASmaxChildren").OPTIONAL_CHILD(e,a)));return m}l.makeLinkCreateRequestLinkCreateEvent=e,l.makeLinkCreateRequest=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);