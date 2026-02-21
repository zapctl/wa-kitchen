const mmsMediaTypes = require("WAWebMmsMediaTypes");
const mimeTypes = require("WAWebMimeTypes");
const cryptoCreateMediaKeys = require("WAWebCryptoCreateMediaKeys");
const cryptoHkdf = require("WACryptoHkdf");

const specs = {
    unions: {
        IMAGE_MIMES: mimeTypes.IMAGE_MIMES.split(","),
        AUDIO_MIMES: mimeTypes.AUDIO_MIMES.split(","),
        VIDEO_MIMES: mimeTypes.VIDEO_MIMES.split(","),
        DOC_MIMES: mimeTypes.DOC_MIMES.split(","),
    },
    enums: {
        MEDIA_TYPE: mmsMediaTypes.MEDIA_TYPES,
        ENC_MEDIA_INFO: {},
    },
    constants: {
        EXT_TO_MIME: mimeTypes.EXT_TO_MIME
    },
}

Object.values(specs.enums.MEDIA_TYPE).forEach((mediaType) => {
    cryptoHkdf.extractAndExpand = (_, info) => {
        specs.enums.ENC_MEDIA_INFO[mediaType] = info;
    };

    cryptoCreateMediaKeys(mediaType, "a");
});

console.log("MessageSpecs", specs);

return specs;