import { createHash } from "node:crypto";
import { JID_PAIR } from "../jid";
// @ts-ignore
import { BROADCAST_JID_SUFFIX, CONTACT_JID_SUFFIX, GROUP_JID_SUFFIX, USER_JID_SUFFIX } from "../jid/constants";
import { BytesConcat, IntToBytes, RandomBytes } from "../utils";

export async function NewMessageID(jid: JID_PAIR) {
  const bytes = BytesConcat([
    IntToBytes(Math.floor(Date.now() / 1000), 8),
    `${jid.user}@${CONTACT_JID_SUFFIX}`,
    RandomBytes(16),
  ]);

  const hash = createHash("sha256")
    .update(bytes)
    .digest("hex")
    .slice(0, 9)
    .toUpperCase();

  return `3EB0${hash}`;
}

export interface MessageIDOptions {
  id: string;
  fromMe: boolean;
  recipientJid: JID_PAIR;
  participantJid?: JID_PAIR;
}

export class MessageID {
  fromMe: boolean;
  recipientJid: JID_PAIR;
  id: string;
  participantJid?: JID_PAIR;

  constructor(input: string | MessageIDOptions) {
    try {
      if (typeof input === "string") {
        const parts = input.split("_");
        if (parts.length < 3) throw new Error("invalid parts length");

        this.fromMe = parts[0] === "true";
        this.recipientJid = new JID_PAIR(parts[1]);
        this.id = parts[2];
        this.participantJid = parts[3] ? new JID_PAIR(parts[3]) : undefined;
      } else {
        this.fromMe = input.fromMe;
        this.recipientJid = input.recipientJid;
        this.id = input.id;
        this.participantJid = input.participantJid;
      }

      if (this.recipientJid.server === CONTACT_JID_SUFFIX) {
        this.recipientJid.server = USER_JID_SUFFIX;
      }
    } catch (error) {
      throw new Error("invalid message id", { cause: error });
    }
  }

  toString() {
    const recipientJid = new JID_PAIR(this.recipientJid);

    if (recipientJid.server === USER_JID_SUFFIX) {
      recipientJid.server = CONTACT_JID_SUFFIX;
    }

    const isGroupRecipient = [
      GROUP_JID_SUFFIX,
      BROADCAST_JID_SUFFIX,
    ].includes(recipientJid.server);

    return [
      this.fromMe ? "true" : "false",
      recipientJid.toString(),
      this.id,
      isGroupRecipient && this.participantJid?.toString(),
    ].filter(Boolean).join("_");
  }
}