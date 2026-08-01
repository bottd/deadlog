import type { EntityBulletGroup } from '@deadlog/changelog';
import { resolveHeroAbilitySlug, toSlug } from '@deadlog/utils';
import { detectAbilityPrefix } from './content/parser';
import type { HeroesApiResponse, ItemsApiResponse } from './types/deadlockApi';

export interface AbilitySlot {
	heroId: number;
	position: number;
	name: string;
	slug: string;
	image: string;
	description: string | null;
}

const isReleased = (hero: HeroesApiResponse[number]) =>
	hero.player_selectable === true &&
	hero.disabled !== true &&
	hero.in_development !== true;

export function descriptionText(html: string | null | undefined): string | null {
	if (!html) return null;
	return (
		html
			.replace(/<br\s*\/?>/gi, ' ')
			.replace(/<[^>]*>/g, '')
			.replace(/\s+/g, ' ')
			.trim() || null
	);
}

const signatures = ['signature1', 'signature2', 'signature3', 'signature4'] as const;

export function resolveAbilitySlots(
	heroes: HeroesApiResponse,
	items: ItemsApiResponse
): Map<number, AbilitySlot[]> {
	const itemsByClass = new Map(items.map((item) => [item.class_name, item]));
	const slotsByHero = new Map<number, AbilitySlot[]>();
	const errors: string[] = [];

	for (const hero of heroes) {
		const slots: AbilitySlot[] = [];
		for (const [index, signature] of signatures.entries()) {
			const position = index + 1;
			const className = hero.items?.[signature];
			const ability = className ? itemsByClass.get(className) : undefined;
			const image =
				ability?.image_webp ||
				ability?.image ||
				ability?.shop_image_webp ||
				ability?.shop_image ||
				'';

			if (!ability || ability.type !== 'ability' || !image) {
				if (isReleased(hero)) {
					errors.push(`${hero.name} signature${position} (${className ?? 'missing'})`);
				}
				continue;
			}

			slots.push({
				heroId: hero.id,
				position,
				name: ability.name,
				slug: toSlug(ability.name),
				image,
				description: descriptionText(ability.description?.desc)
			});
		}

		if (slots.length > 0) slotsByHero.set(hero.id, slots);
	}

	if (errors.length > 0) {
		throw new Error(`Could not resolve released hero abilities: ${errors.join(', ')}`);
	}

	return slotsByHero;
}

const ABILITY_TERMS: Readonly<Record<string, RegExp>> = {
	'air-drop': /\bwhen flying while disarmed\b/i,
	assassinate: /\blow hp indication\b/i,
	'enchanters-satchel': /\benchanted satchel\b/i,
	flight: /\b(?:shooting|stamina) while flying\b/i,
	'flying-cloak': /\bcloak\b/i,
	'flying-slash': /\bgrapple post cast\b/i,
	'grapple-arm': /\bhooking\b/i,
	gutshot: /\bgut shot\b/i,
	'ice-path': /\bice pathing\b/i,
	'jar-of-dead': /\bdeadheads?\b/i,
	'last-stand': /\bult channel\b/i,
	'petrifying-bola': /\bpetrify\b/i,
	'rabbit-hex': /\brabbit can\b/i,
	'rejuvenating-aurora': /\bdynamo heal\b/i,
	'sleep-dagger': /\bsleep state\b/i,
	'spirit-lasso': /\blasso\b/i
};

function mentionedAbility(
	note: string,
	abilities: readonly Pick<AbilitySlot, 'name' | 'slug'>[]
) {
	const normalized = toSlug(note);
	const words = normalized.split('-');
	let mention: { ability: (typeof abilities)[number]; index: number } | undefined;
	let offset = 0;
	for (let index = 0; index < words.length; index++) {
		const slug = resolveHeroAbilitySlug(words.slice(index).join('-'), abilities);
		const ability = abilities.find((candidate) => candidate.slug === slug);
		if (ability) {
			mention = { ability, index: offset };
			break;
		}
		offset += words[index].length + 1;
	}

	for (const ability of abilities) {
		const term = ABILITY_TERMS[ability.slug];
		if (!term) continue;
		const match = note.match(term);
		if (!match) continue;
		const index = normalized.indexOf(toSlug(match[0]));
		if (index >= 0 && (!mention || index < mention.index)) mention = { ability, index };
	}

	return mention?.ability;
}

const BASE_CHANGE_RE =
	/^(?:(?:fixed|increas(?:e|ed)|reduc(?:e|ed)|restor(?:e|ed)|revert(?:ed)?)\s+(?:(?:her|his|recent|their)\s+)?|(?:no longer|now)\s+has\s+(?:[+-]?\d+(?:\.\d+)?%\s+)?)?(?:air control|alt fire|ammo|base|bullet|crit|falloff|fire rate|float time|gravity|gun|headshot|health|hp|lifesteal|light melee|max (?:falloff|health)|melee|move(?:ment|speed| speed)?|rage|regen|reload|sliding|spirit|sprint|stamina|starting|weapon)\b/i;

export function regroupAbilityChanges(
	groups: readonly EntityBulletGroup[],
	abilities: readonly Pick<AbilitySlot, 'name' | 'slug'>[]
): EntityBulletGroup[] {
	const namesBySlug = new Map(abilities.map((ability) => [ability.slug, ability.name]));
	const result: EntityBulletGroup[] = [];

	for (const group of groups) {
		let name = group.ability;
		let slug = name ? resolveHeroAbilitySlug(name, abilities) : null;

		for (const bullet of group.bullets) {
			const mention = mentionedAbility(bullet, abilities);
			const prefix = mention ? null : detectAbilityPrefix(bullet);
			const detected =
				mention?.slug ?? (prefix ? resolveHeroAbilitySlug(prefix, abilities) : null);
			if (detected && detected !== slug) {
				name = namesBySlug.get(detected) ?? prefix ?? name;
				slug = detected;
			} else if (!detected && BASE_CHANGE_RE.test(bullet)) {
				name = null;
				slug = null;
			}

			const current = result.at(-1);
			if (current?.ability === name) current.bullets.push(bullet);
			else result.push({ ability: name, bullets: [bullet] });
		}
	}

	return result;
}
