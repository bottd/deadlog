import { createHash } from 'node:crypto';
import { toSlug } from '@deadlog/utils';

export { PROPERTY_EXTRACTION_VERSION } from '@deadlog/utils';

export const LINKED_PROPERTIES = ['cooldown', 'radius', 'damage'] as const;
export type LinkedProperty = (typeof LINKED_PROPERTIES)[number];

export interface PropertyValue {
	amount: number;
	unit: string;
	text: string;
}

export interface PropertyEvent {
	property: LinkedProperty;
	qualifier: string;
	old: PropertyValue;
	new: PropertyValue;
}

export type BulletReading =
	| { kind: 'event'; event: PropertyEvent }
	| { kind: 'barrier'; properties: LinkedProperty[] | 'all' }
	| { kind: 'unrelated' };

const VERBS =
	'(?:increased|reduced|decreased|lowered|raised|changed|adjusted|improved|nerfed|buffed)';
const VALUE = '([+-]?\\d+(?:\\.\\d+)?)(s|m|%)?';
const EVENT_RE = new RegExp(
	`^(?:(T[123]) )?(base )?(cooldown|radius|damage) (?:has been |was |is )?${VERBS} from ${VALUE} to ${VALUE}$`,
	'i'
);
const REWORK_RE =
	/\b(?:rework(?:ed)?|redesigned|replaced|renamed|removed|new ability|now a (?:passive|active)|no longer)\b/i;

function value(amount: string, unit: string | undefined, other: string | undefined) {
	return {
		amount: Number(amount),
		unit: unit ?? other ?? '',
		text: `${amount}${unit ?? ''}`
	};
}

export function readBullet(bullet: string, scopeName: string | null): BulletReading {
	let text = bullet.trim().replace(/\.$/, '');
	if (scopeName) {
		if (!text.toLowerCase().startsWith(`${scopeName.toLowerCase()} `)) {
			return mentions(text);
		}
		text = text.slice(scopeName.length + 1);
	}

	const match = EVENT_RE.exec(text);
	if (!match) return mentions(text);

	const [, tier, base, property, oldAmount, oldUnit, newAmount, newUnit] = match;
	if (oldUnit && newUnit && oldUnit !== newUnit) return mentions(text);
	return {
		kind: 'event',
		event: {
			property: property.toLowerCase() as LinkedProperty,
			qualifier: [tier?.toUpperCase(), base ? 'base' : null].filter(Boolean).join(' '),
			old: value(oldAmount, oldUnit, newUnit),
			new: value(newAmount, newUnit, oldUnit)
		}
	};
}

function mentions(text: string): BulletReading {
	if (REWORK_RE.test(text)) return { kind: 'barrier', properties: 'all' };
	const properties = LINKED_PROPERTIES.filter((property) =>
		new RegExp(`\\b${property}\\b`, 'i').test(text)
	);
	return properties.length > 0 ? { kind: 'barrier', properties } : { kind: 'unrelated' };
}

export interface ScopedBullet {
	patchId: string;
	publishedAt: string;
	entityType: 'hero' | 'item';
	entityId: number;
	ability: string | null;
	abilitySlug: string | null;
	groupIndex: number;
	bulletIndex: number;
	text: string;
}

export interface LinkedEvent extends PropertyEvent {
	patchId: string;
	entityType: 'hero' | 'item';
	entityId: number;
	abilitySlug: string | null;
	groupIndex: number;
	bulletIndex: number;
	digest: string;
	previous: { patchId: string; old: string; new: string } | null;
	unlinked: 'first' | 'barrier' | 'ambiguous-order' | 'value-mismatch' | null;
}

const digest = (text: string): string =>
	createHash('sha256').update(text).digest('hex').slice(0, 16);

interface Scope {
	key: string;
	name: string | null;
	trusted: boolean;
}

function scopeOf(bullet: ScopedBullet): Scope | null {
	if (bullet.entityType === 'item') {
		return {
			key: `item:${bullet.entityId}`,
			name: bullet.ability,
			trusted: !bullet.ability
		};
	}
	if (!bullet.ability || !bullet.abilitySlug) return null;
	return {
		key: `hero:${bullet.entityId}:${bullet.abilitySlug}`,
		name: bullet.ability,
		trusted: toSlug(bullet.ability) === bullet.abilitySlug
	};
}

export function linkPropertyChanges(bullets: ScopedBullet[]): LinkedEvent[] {
	const ordered = [...bullets].sort(
		(a, b) =>
			a.publishedAt.localeCompare(b.publishedAt) ||
			a.patchId.localeCompare(b.patchId) ||
			a.groupIndex - b.groupIndex ||
			a.bulletIndex - b.bulletIndex
	);
	const tiedTimes = new Set<string>();
	const seenTimes = new Map<string, string>();
	for (const bullet of ordered) {
		const owner = seenTimes.get(bullet.publishedAt);
		if (owner && owner !== bullet.patchId) tiedTimes.add(bullet.publishedAt);
		seenTimes.set(bullet.publishedAt, bullet.patchId);
	}

	interface Step {
		patchId: string;
		tied: boolean;
		events: LinkedEvent[];
		barrier: boolean;
	}
	const chains = new Map<string, Step[]>();
	const stepFor = (chain: string, bullet: ScopedBullet): Step => {
		const steps = chains.get(chain) ?? [];
		chains.set(chain, steps);
		let step = steps.at(-1);
		if (!step || step.patchId !== bullet.patchId) {
			step = {
				patchId: bullet.patchId,
				tied: tiedTimes.has(bullet.publishedAt),
				events: [],
				barrier: false
			};
			steps.push(step);
		}
		return step;
	};

	const events: LinkedEvent[] = [];
	const chainsByScope = new Map<string, Set<string>>();
	for (const bullet of ordered) {
		const scope = scopeOf(bullet);
		if (!scope) continue;
		const read = readBullet(bullet.text, scope.name);
		const reading: BulletReading =
			read.kind === 'event' && !scope.trusted
				? { kind: 'barrier', properties: [read.event.property] }
				: read;
		if (reading.kind === 'unrelated') continue;

		const known = chainsByScope.get(scope.key) ?? new Set<string>();
		chainsByScope.set(scope.key, known);

		if (reading.kind === 'barrier') {
			for (const chain of known) {
				const [, property] = chain.split('|');
				if (
					reading.properties === 'all' ||
					reading.properties.includes(property as LinkedProperty)
				) {
					stepFor(chain, bullet).barrier = true;
				}
			}
			continue;
		}

		const chain = `${scope.key}|${reading.event.property}|${reading.event.qualifier}`;
		known.add(chain);
		const event: LinkedEvent = {
			...reading.event,
			patchId: bullet.patchId,
			entityType: bullet.entityType,
			entityId: bullet.entityId,
			abilitySlug: bullet.abilitySlug,
			groupIndex: bullet.groupIndex,
			bulletIndex: bullet.bulletIndex,
			digest: digest(bullet.text),
			previous: null,
			unlinked: 'first'
		};
		stepFor(chain, bullet).events.push(event);
		events.push(event);
	}

	for (const steps of chains.values()) {
		let last: Step | null = null;
		let blocked = false;
		for (const step of steps) {
			const ordered = !step.tied && step.events.length === 1;
			for (const event of step.events) {
				if (!last) event.unlinked = 'first';
				else if (blocked || step.barrier) event.unlinked = 'barrier';
				else if (!ordered || last.tied || last.events.length !== 1) {
					event.unlinked = 'ambiguous-order';
				} else {
					const [before] = last.events;
					const sameUnit =
						event.old.unit === before.new.unit || !event.old.unit || !before.new.unit;
					if (event.old.amount !== before.new.amount || !sameUnit) {
						event.unlinked = 'value-mismatch';
					} else {
						event.unlinked = null;
						event.previous = {
							patchId: before.patchId,
							old: before.old.text,
							new: before.new.text
						};
					}
				}
			}
			if (step.events.length > 0) {
				last = step;
				blocked = step.barrier;
			} else if (step.barrier) blocked = true;
		}
	}
	return events;
}
