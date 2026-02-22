import { JID_PAIR } from ".";
import {
	GROUP_JID_SUFFIX,
	USER_JID_SUFFIX,
	STATUS_JID_PREFIX,
	BROADCAST_JID_SUFFIX,
	// @ts-ignore
} from "./constants";

export const SERVER_JID = Object.freeze(new JID_PAIR({
	user: "",
	server: USER_JID_SUFFIX,
}));

export const GROUP_JID = Object.freeze(new JID_PAIR({
	user: "",
	server: GROUP_JID_SUFFIX,
}));

export const STATUS_JID = Object.freeze(new JID_PAIR({
	user: STATUS_JID_PREFIX,
	server: BROADCAST_JID_SUFFIX,
}));