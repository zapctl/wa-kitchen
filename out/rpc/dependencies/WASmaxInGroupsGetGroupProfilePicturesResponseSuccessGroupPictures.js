const map = { id: "WASmaxInGroupsGetGroupProfilePicturesResponseSuccessGroupPictures" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsGetGroupProfilePicturesProfilePicturesResponseMixin": require("./WASmaxInGroupsGetGroupProfilePicturesProfilePicturesResponseMixin.js"),"WASmaxInGroupsIQResultResponseMixin": require("./WASmaxInGroupsIQResultResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e,t){var n=o("WASmaxParseUtils").assertTag(e,"iq");if(!n.success)return n;var r=o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(e,t);if(!r.success)return r;var a=o("WASmaxInGroupsGetGroupProfilePicturesProfilePicturesResponseMixin").parseGetGroupProfilePicturesProfilePicturesResponseMixin(e);return a.success?o("WAResultOrError").makeResult(babelHelpers.extends({},r.value,a.value)):a}l.parseGetGroupProfilePicturesResponseSuccessGroupPictures=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);