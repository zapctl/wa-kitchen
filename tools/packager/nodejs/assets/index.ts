export const WEBSOCKET_URL = "wss://web.whatsapp.com/ws/chat";

export enum EphemeralExpiration {
	Disabled = 0,
	OneDay = 24 * 60 * 60,
	SevenDays = 7 * 24 * 60 * 60,
	NinetyDays = 90 * 24 * 60 * 60,
}