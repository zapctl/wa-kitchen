const usync = require("WAWebUsync");
const logoutReason = require("WAWebLogoutReasonConstants");

const specs = {
    enums: {
        AddressingMode: usync.USYNC_ADDRESSING_MODE,
        LogoutReason: makeEnumerable(logoutReason.LogoutReason),
    },
}

console.log("MainSpecs", specs);

return specs;