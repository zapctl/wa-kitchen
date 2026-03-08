const map = { id: "WASmaxOutVoipWaitingRoomToggleCallLinkRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t,n=e.waitingRoomToggleEnabled,r=e.waitingRoomToggleLinkToken,a=e.waitingRoomToggleMedia,i=o("WASmaxJsx").smax("call",{id:(t=o("WAWap")).generateId(),to:t.JID("call")},o("WASmaxJsx").smax("waiting_room_toggle",{enabled:t.CUSTOM_STRING(n),"link-token":t.CUSTOM_STRING(r),media:t.CUSTOM_STRING(a)}));return i}l.makeWaitingRoomToggleCallLinkRequest=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);