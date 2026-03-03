// @ts-nocheck
export enum StatusPrivacy {
	Contacts = "contacts",
	ContactWhiteList = "contact_whitelist",
	ContactBlackList = "contact_blacklist",
}

export const LastPrivacy: VisibilityWithError = VisibilityWithError;
export const OnlinePrivacy: OnlineVisibilityWithError = OnlineVisibilityWithError;
export const ProfilePrivacy: VisibilityWithError = VisibilityWithError;
export const AboutPrivacy: VisibilityWithError = VisibilityWithError;
export const ReadReceiptsPrivacy: AllNoneWithError = AllNoneWithError;
export const MessagesPrivacy: AllContacts = AllContacts;
export const GroupAddPrivacy: VisibilityWithError = VisibilityWithError;
export const CallAddPrivacy: CallAddWithError = CallAddWithError;
export const PixPrivacy: Visibility = Visibility;
export const LinkedProfilesPrivacy: Visibility = Visibility;
export const StickersPrivacy: Visibility = Visibility;
export const DefensePrivacy: DefenseModeState = DefenseModeState;