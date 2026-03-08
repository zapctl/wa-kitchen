const map = { id: "WASmaxOutBlocklistsGetBlockListRequest" };
const exports = module.exports = {};
const dependencies = {"WASmaxChildren": require("./WASmaxChildren.js"),"WASmaxJsx": require("./WASmaxJsx.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.itemDhash,n=o("WASmaxJsx").smax("item",{dhash:o("WAWap").CUSTOM_STRING(t)});return n}function s(t){var n=t.itemArgs,r=o("WASmaxJsx").smax("iq",{to:o("WAWap").S_WHATSAPP_NET,xmlns:"blocklist",type:"get",id:o("WAWap").generateId()},o("WASmaxChildren").OPTIONAL_CHILD(e,n));return r}l.makeGetBlockListRequestItem=e,l.makeGetBlockListRequest=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);