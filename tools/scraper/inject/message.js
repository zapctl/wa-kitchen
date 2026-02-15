const backendJobs = require("WAWebBackendJobs.flow");
const enumEditType = require("WAWebWamEnumEditType");
const msgCommon = require("WAWebHandleMsgCommon");
const sendReceipt = require("WAWebSendReceiptJobCommon");

const specs = {
    enums: {
        STANZA_MSG_TYPES: makeEnumerable(msgCommon.STANZA_MSG_TYPES),
        EDIT_MSG_TYPE: enumEditType.EDIT_TYPE,
        ENC_MSG_MEDIA_TYPE: makeEnumerable(backendJobs.EncMediaType),
        MessageReceiptType: sendReceipt.RECEIPT_TYPE
    },
}

console.log("MessageSpecs", specs);

return specs;