// @ts-nocheck
export enum StatusPrivacy {
	Contacts = "contacts",
	ContactWhiteList = "contact_whitelist",
	ContactBlackList = "contact_blacklist",
}

export const LastPrivacy = VisibilityWithError;
export const OnlinePrivacy = OnlineVisibilityWithError;
export const ProfilePrivacy = VisibilityWithError;
export const AboutPrivacy = VisibilityWithError;
export const ReadReceiptsPrivacy = AllNoneWithError;
export const MessagesPrivacy = AllContacts;
export const GroupAddPrivacy = VisibilityWithError;
export const CallAddPrivacy = CallAddWithError;
export const PixPrivacy = Visibility;
export const LinkedProfilesPrivacy = Visibility;
export const StickersPrivacy = Visibility;
export const DefensePrivacy = DefenseModeState;