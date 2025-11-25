import { JID_PAIR } from ".";
import {
	BROADCAST_JID_SUFFIX,
	GROUP_JID_SUFFIX,
	USER_JID_SUFFIX,
	// @ts-ignore
} from "./constants";

export const SERVER_JID = Object.freeze(new JID_PAIR({
	user: "",
	server: USER_JID_SUFFIX,
}));

export const STATUS_JID = Object.freeze(new JID_PAIR({
	user: "status",
	server: BROADCAST_JID_SUFFIX,
}));

export const GROUP_JID = Object.freeze(new JID_PAIR({
	user: "",
	server: GROUP_JID_SUFFIX,
}));