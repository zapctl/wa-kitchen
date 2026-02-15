import {
	HOSTED_LID_SUFFIX,
	HOSTED_SUFFIX,
	INTEROP_USER_JID_SUFFIX,
	LID_SUFFIX,
	MSGR_USER_JID_SUFFIX,
	USER_JID_SUFFIX,
	JidDomain,
	// @ts-ignore
} from "./constants";

export const JID_REGEX = Object.freeze(/^(?:(?:(\d+)-)?([0-9a-zA-Z]+)?(?::(\d+))?@)?([a-z.\-_]+)$/);

export interface JidOptions<
	TUser extends string = string,
	TDevice extends number = number,
	TIntegrator extends number = number,
	TServer extends string = string,
> {
	user?: TUser;
	device?: TDevice;
	integrator?: TIntegrator;
	server?: TServer | JidDomain;
}

export class JID<
	TUser extends string = string,
	TDevice extends number = number,
	TIntegrator extends number = number,
	TServer extends string = string,
> {
	user = "" as TUser;
	device = 0 as TDevice;
	integrator = 0 as TIntegrator;
	server = "" as TServer;

	constructor(jid: string | JidOptions<TUser, TDevice, TIntegrator, TServer>) {
		if (typeof jid === "string") {
			const matches = jid.match(JID_REGEX);
			if (!matches) throw new Error("invalid jid string");

			this.user = (matches[2] || "") as TUser;
			this.device = (parseInt(matches[3]) || 0) as TDevice;
			this.integrator = (parseInt(matches[1]) || 0) as TIntegrator;
			this.server = (matches[4] || "") as TServer;
		} else if (typeof jid === "object") {
			this.user = (jid.user || "") as TUser;
			this.device = (jid.device || 0) as TDevice;
			this.integrator = (jid.integrator || 0) as TIntegrator;
			if (typeof jid.server === "string") this.server = (jid.server || "") as TServer;
			else this.domain = jid.server;
		} else {
			throw new Error("invalid jid constructor");
		}
	}

	get domain(): JidDomain | undefined {
		return {
			[USER_JID_SUFFIX]: JidDomain.WhatsApp,
			[LID_SUFFIX]: JidDomain.Lid,
			[HOSTED_SUFFIX]: JidDomain.Hosted,
			[HOSTED_LID_SUFFIX]: JidDomain.HostedLid,
		}[this.server as string];
	}

	set domain(domain: JidDomain | undefined) {
		if (!domain) {
			this.server = "" as TServer;
			return;
		}

		this.server = ({
			[JidDomain.WhatsApp]: USER_JID_SUFFIX,
			[JidDomain.Lid]: LID_SUFFIX,
			[JidDomain.Hosted]: HOSTED_SUFFIX,
			[JidDomain.HostedLid]: HOSTED_LID_SUFFIX,
		}[domain] ?? "") as TServer;
	}

	equals(jid: JID) {
		return this.user === jid.user &&
			this.device === jid.device &&
			this.integrator === jid.integrator &&
			this.server === jid.server;
	}

	toString() {
		const integrator = this.integrator > 0 ? `${this.integrator}-` : "";
		const device = this.device > 0 ? `:${this.device}` : "";
		const hasLeft = this.integrator > 0 || !!this.user || this.device > 0;
		const left = hasLeft ? `${integrator}${this.user}${device}@` : "";

		return `${left}${this.server}`;
	}

	toJSON() {
		return this.toString();
	}
}

export interface JidPairOptions<
	TUser extends string = string,
	TServer extends string = string,
> {
	user?: TUser;
	server?: TServer;
}

export class JID_PAIR<
	TUser extends string = string,
	TServer extends string = string,
> extends JID<TUser, 0, 0, TServer> {
	constructor(jid: JidPairOptions<TUser, TServer> | string) {
		super(typeof jid === "object" ? {
			user: jid.user,
			server: jid.server,
		} : jid);

		if (!this.server) this.server = USER_JID_SUFFIX as TServer;
	}

	equals(jid: JID) {
		return this.user === jid.user &&
			this.server === jid.server;
	}
}

export interface JidAdOptions<
	TUser extends string = string,
	TDevice extends number = number,
	TServer extends string = string,
> {
	user?: TUser;
	device?: TDevice;
	server?: TServer | JidDomain;
}

export class JID_AD<
	TUser extends string = string,
	TDevice extends number = number,
	TServer extends string = string,
> extends JID<TUser, TDevice, 0, TServer> {
	constructor(jid: JidAdOptions<TUser, TDevice, TServer> | string) {
		super(typeof jid === "object" ? {
			user: jid.user,
			server: jid.server,
			device: jid.device,
		} : jid);

		if (!this.server) this.server = USER_JID_SUFFIX as TServer;
	}

	equals(jid: JID) {
		return this.user === jid.user &&
			this.device === jid.device &&
			this.server === jid.server;
	}
}

export interface JidFBOptions<
	TUser extends string = string,
	TDevice extends number = number,
	TServer extends string = string,
> {
	user?: TUser;
	device?: TDevice;
	server?: TServer | JidDomain;
}

export class JID_FB<
	TUser extends string = string,
	TDevice extends number = number,
	TServer extends string = string,
> extends JID<TUser, TDevice, 0, TServer> {
	constructor(jid: JidFBOptions<TUser, TDevice, TServer> | string) {
		super(jid);
		if (!this.server) this.server = MSGR_USER_JID_SUFFIX as TServer;
	}

	equals(jid: JID) {
		return this.user === jid.user &&
			this.device === jid.device &&
			this.server === jid.server;
	}
}

export interface JidInteropOptions<
	TUser extends string = string,
	TDevice extends number = number,
	TIntegrator extends number = number,
	TServer extends string = string,
> {
	user?: TUser;
	device?: TDevice;
	integrator?: TIntegrator;
	server?: TServer | JidDomain;
}

export class JID_INTEROP<
	TUser extends string = string,
	TDevice extends number = number,
	TIntegrator extends number = number,
	TServer extends string = string,
> extends JID<TUser, TDevice, TIntegrator, TServer> {
	constructor(
		jid: JidInteropOptions<TUser, TDevice, TIntegrator, TServer> | string
	) {
		super(jid);
		if (!this.server) this.server = INTEROP_USER_JID_SUFFIX as TServer;
	}

	equals(jid: JID) {
		return this.user === jid.user &&
			this.device === jid.device &&
			this.integrator === jid.integrator &&
			this.server === jid.server;
	}
}

export class JIDSet<T extends JID = JID> extends Set<T> {
	constructor(jids?: T[] | JIDSet<T>) {
		super();

		for (const jid of jids || []) {
			this.add(jid);
		}
	}

	private findEquivalent(jid: T): JID | undefined {
		for (const item of this) {
			if (item.equals(jid)) {
				return item;
			}
		}
	}

	has(jid: T): boolean {
		return !!this.findEquivalent(jid);
	}

	add(...jids: T[]): this {
		for (const jid of jids) {
			const existing = this.findEquivalent(jid);

			if (!existing) super.add(jid);
		}

		return this;
	}

	delete(...jids: T[]): boolean {
		let someDeleted = false;

		for (const jid of jids) {
			for (const item of this) {
				if (item.equals(jid) && super.delete(item)) {
					someDeleted = true;
				}
			}
		}

		return someDeleted;
	}
}