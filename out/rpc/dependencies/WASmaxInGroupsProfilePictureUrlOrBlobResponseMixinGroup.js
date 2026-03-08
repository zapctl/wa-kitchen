const map = { id: "WASmaxInGroupsProfilePictureUrlOrBlobResponseMixinGroup" };
const exports = module.exports = {};
const dependencies = {"WAResultOrError": require("./WAResultOrError.js"),"WASmaxInGroupsProfilePictureBlobResponseMixin": require("./WASmaxInGroupsProfilePictureBlobResponseMixin.js"),"WASmaxInGroupsProfilePictureUrlResponseMixin": require("./WASmaxInGroupsProfilePictureUrlResponseMixin.js"),"WASmaxParseUtils": require("./WASmaxParseUtils.js")};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i,l){function e(e){var t=o("WASmaxInGroupsProfilePictureUrlResponseMixin").parseProfilePictureUrlResponseMixin(e);if(t.success)return o("WAResultOrError").makeResult({name:"ProfilePictureUrlResponse",value:t.value});var n=o("WASmaxInGroupsProfilePictureBlobResponseMixin").parseProfilePictureBlobResponseMixin(e);return n.success?o("WAResultOrError").makeResult({name:"ProfilePictureBlobResponse",value:n.value}):o("WASmaxParseUtils").errorMixinDisjunction(e,["ProfilePictureUrlResponse","ProfilePictureBlobResponse"],[t,n])}l.parseProfilePictureUrlOrBlobResponseMixinGroup=e})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);