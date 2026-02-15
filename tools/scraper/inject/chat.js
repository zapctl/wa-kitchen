const chatState = require("WAChatState");

const specs = {
    enums: {
        ChatState: {
            ...makeEnumerable(chatState.ACTIVE_CHAT_STATE_TYPE),
            ...makeEnumerable(chatState.IDLE_CHAT_STATE_TYPE),
        },
    },
}

console.log("ChatSpecs", specs);

return specs;