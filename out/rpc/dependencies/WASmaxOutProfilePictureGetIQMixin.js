const map = { id: "WASmaxOutProfilePictureGetIQMixin" };
const exports = module.exports = {};
const dependencies = {"WASmaxJsx": require("./WASmaxJsx.js"),"WASmaxMixins": require("./WASmaxMixins.js"),"WASmaxOutProfilePictureServerDomainIQMixin": require("./WASmaxOutProfilePictureServerDomainIQMixin.js"),"WAWap": require("./WAWap.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=e.iqTarget,n=o("WASmaxOutProfilePictureServerDomainIQMixin").mergeServerDomainIQMixin(o("WASmaxJsx").smax("iq",{target:o("WAWap").JID(t)}));return n}function s(t,n){var r=e(n);return o("WASmaxMixins").mergeStanzas(t,r)}l.mergeGetIQMixin=s})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);