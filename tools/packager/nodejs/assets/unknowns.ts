
export enum NewsletterReactions {
	All = "all",
	Basic = "basic",
	None = "none",
}

export enum NewsletterSubscriberRole {
	Owner = "owner",
	Admin = "admin",
	Subscriber = "subscriber",
	Guest = "guest",
}





export enum ClientPresence {
	Available = "available",
	Unavailable = "unavailable",
}

export enum ChatState {
	Typing = "typing",
	RecordingAudio = "recording_audio",
	Idle = "idle",
}





export enum MessageType {
	PlainText = "plaintext",
	Signal = "msg",
	PreKeySignal = "pkmsg",
	SenderKey = "skmsg",
}

// const status = {
// 	"": MessageStatus.Delivered,
// 	"read": MessageStatus.Read,
// 	"read-self": MessageStatus.Read,
// 	"played": MessageStatus.Read,
// 	"played-self": MessageStatus.Read,
// 	"server-error": MessageStatus.Error,
// 	"inactive": MessageStatus.Error,
// }[type];


export enum SettingName {
	StatusMessage = "status",
	ProfilePicture = "profile",
	Online = "online",
	LastSeen = "last",
	GroupAdd = "groupadd",
	CallAdd = "calladd",
	SendMessage = "messages",
	ReadMessage = "readreceipts",
	ProfileLinks = "linked_profiles",
	Pix = "pix",
}

export enum LastSeenPrivacy {
	All = "all",
	None = "none",
	Contacts = "contacts",
	ContactBlackList = "contact_blacklist",
}

export enum OnlinePrivacy {
	All = "all",
	SameLastSeenAt = "match_last_seen",
}

export enum ProfilePicturePrivacy {
	All = "all",
	None = "none",
	Contacts = "contacts",
	ContactBlackList = "contact_blacklist",
}

export enum StatusPrivacy {
	Contacts = "contacts",
	ContactWhiteList = "contact_whitelist",
	ContactBlackList = "contact_blacklist",
}

export enum StatusMessagePrivacy {
	All = "all",
	None = "none",
	Contacts = "contacts",
	ContactBlackList = "contact_blacklist",
}

export enum ReadMessagePrivacy {
	All = "all",
	None = "none",
}

export enum SendMessagePrivacy {
	All = "all",
	Contacts = "contacts",
}

export enum GroupAddPrivacy {
	All = "all",
	Contacts = "contacts",
	ContactBlackList = "contact_blacklist",
}

export enum CallAddPrivacy {
	All = "all",
	Known = "known",
}

export enum ProfileLinksPrivacy {
	All = "all",
	None = "none",
	Contacts = "contacts",
	ContactBlackList = "contact_blacklist",
}

export enum PixPrivacy {
	All = "all",
	None = "none",
	Contacts = "contacts",
	ContactBlackList = "contact_blacklist",
}







export enum GroupParticipantAction {
	Add = "add",
	Remove = "remove",
	Promote = "promote",
	Demote = "demote",
	Revoke = "revoke",
}

export enum GroupAddressingMode {
	LID = "lid",
	PHONE_NUMBER = "pn",
}






// require("WASmaxGroupsCreateRPC").sendCreateRPC
// require("WASmaxOutGroupsCreateRequest").makeCreateRequest
// WASmaxOutSpamGroupReportRequest.js

// function R(t) {
//   var n, r = t.participantArgs, a = t.descriptionArgs, i = t.hasLocked, l = t.hasAnnouncement, R = t.parentArgs, L = t.hasNoFrequentlyForwarded, E = t.ephemeralArgs, k = t.membershipApprovalModeArgs, I = t.hasBreakout, T = t.hasCreatedAsLid, D = t.addressingModeOverrideArgs, x = t.linkedParentArgs, $ = t.hasHiddenGroup, P = t.hasAllowNonAdminSubGroupCreation, N = t.hasCreateGeneralChat, M = t.hasCapi, w = t.dedupAttrsMixinArgs, A = t.groupMemberAddModeMixinArgs, F = t.groupMemberLinkModeMixinArgs, O = t.namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs, B = o("WASmaxOutGroupsBaseSetServerMixin").mergeBaseSetServerMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxOutGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup").mergeNamedSubjectOrUnnamedSubjectFallbackMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsGroupMemberLinkModeMixin").mergeGroupMemberLinkModeMixin, o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsGroupMemberAddModeMixin").mergeGroupMemberAddModeMixin, o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsDedupAttrsMixin").mergeDedupAttrsMixin, o("WASmaxJsx").smax("create", null, [].concat((n = o("WASmaxChildren")).REPEATED_CHILD(e, r, 0, 19999), [n.OPTIONAL_CHILD(s, a), n.HAS_OPTIONAL_CHILD(u, i), n.HAS_OPTIONAL_CHILD(c, l), n.OPTIONAL_CHILD(d, R), n.HAS_OPTIONAL_CHILD(m, L), n.OPTIONAL_CHILD(p, E), n.OPTIONAL_CHILD(_, k), n.HAS_OPTIONAL_CHILD(f, I), n.HAS_OPTIONAL_CHILD(g, T), n.OPTIONAL_CHILD(h, D), n.OPTIONAL_CHILD(y, x), n.HAS_OPTIONAL_CHILD(C, $), n.HAS_OPTIONAL_CHILD(b, P), n.HAS_OPTIONAL_CHILD(v, N), n.HAS_OPTIONAL_CHILD(S, M)])), w), A), F), O)));
//   return B
// }