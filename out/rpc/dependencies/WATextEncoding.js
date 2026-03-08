const map = { id: "WATextEncoding" };
const exports = module.exports = {};
const dependencies = {};
const requireModule = (name) => dependencies[name];
const requireModuleDefault = (name) => dependencies[name].default;

(function(t,n,r,o,a,i){"use strict";var e=TextEncoder,l=TextDecoder,s=e,u=l;function c(){return new s}function d(){return new u}function m(e){s=e}function p(e){u=e}i.newTextEncoder=c,i.newTextDecoder=d,i.setTextEncoderClass=m,i.setTextDecoderClass=p})
(window, requireModule, requireModuleDefault, requireModule, undefined, map, exports);