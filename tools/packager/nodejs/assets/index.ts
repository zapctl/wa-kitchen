export const WEBSOCKET_URL = "wss://web.whatsapp.com/ws/chat";

export const EDGE_ROUTING_HEADER = new Uint8Array([69, 68, 0, 1]);

export enum EphemeralExpiration {
	Disabled = 0,
	OneDay = 24 * 60 * 60,
	SevenDays = 7 * 24 * 60 * 60,
	NinetyDays = 90 * 24 * 60 * 60,
}

export enum ClientPresence {
	Available = "available",
	Unavailable = "unavailable",
}