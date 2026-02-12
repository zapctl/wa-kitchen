const privacyEnums = require("WASmaxInPrivacyEnums");
const privacySettings = require("WAWebPrivacySettings");

const settingsKey = Object.keys(privacyEnums)
    .sort((a, b) => b.length - a.length)
    .find(key => key.includes("ONLINE") && key.includes("READRECEIPTS"));

const specs = {
    enums: {
        PrivacySetting: privacyEnums[settingsKey],
        ...privacySettings
    },
}

console.log("PrivacySpecs", specs);

return specs;