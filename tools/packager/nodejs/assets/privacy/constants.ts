// @ts-nocheck
export enum StatusPrivacy {
	Contacts = "contacts",
	ContactWhiteList = "contact_whitelist",
	ContactBlackList = "contact_blacklist",
}
export type LastPrivacy = VisibilityWithError;
export type OnlinePrivacy = OnlineVisibilityWithError;
export type ProfilePrivacy = VisibilityWithError;
export type AboutPrivacy = VisibilityWithError;
export type ReadReceiptsPrivacy = AllNoneWithError;
export type MessagesPrivacy = AllContacts;
export type GroupAddPrivacy = VisibilityWithError;
export type CallAddPrivacy = CallAddWithError;
export type PixPrivacy = Visibility;
export type LinkedProfilesPrivacy = Visibility;
export type StickersPrivacy = Visibility;
export type DefensePrivacy = DefenseModeState;