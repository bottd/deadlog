export function toSlug(name: string): string {
	return name
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}

import { entityNameAliases } from './entityNames';

export {
	decodeEntityName,
	entityNameAliases,
	entityNamesMatch,
	normalizeEntityName
} from './entityNames';

/** Shared so the generator hands out collision-free ids while every heading it
 * leaves alone keeps the one it already has. */
export function abilityFragmentId(name: string): string {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/** {@link abilityFragmentId} over the article-stripped alias, so "The Doorman" and
 * "Doorman" land on the same id. */
export function entityFragmentId(name: string): string {
	return abilityFragmentId(entityNameAliases(name).at(-1) ?? '');
}

function singularizeSlug(slug: string): string {
	return slug
		.split('-')
		.map((part) => (part.length > 3 && part.endsWith('s') ? part.slice(0, -1) : part))
		.join('-');
}

function matchesAbilitySlug(heading: string, ability: string): boolean {
	const compact = ability.replaceAll('-', '');
	return (
		heading === ability ||
		heading.startsWith(`${ability}-`) ||
		heading === compact ||
		heading.startsWith(`${compact}-`) ||
		heading.replaceAll('-', '') === compact
	);
}

export function resolveAbilitySlug(
	name: string,
	abilities: readonly { slug: string }[]
): string | null {
	const headingSlug = toSlug(name);
	const headings = [headingSlug, singularizeSlug(headingSlug)];
	let best: string | null = null;

	for (const { slug } of abilities) {
		const matches = headings.some((heading) =>
			[slug, singularizeSlug(slug)].some((candidate) =>
				matchesAbilitySlug(heading, candidate)
			)
		);
		if (matches && (!best || slug.length > best.length)) best = slug;
	}

	return best;
}

const HERO_ABILITY_ALIASES: Readonly<Record<string, string>> = {
	'should-charge': 'shoulder-charge',
	siphon: 'siphon-life',
	hook: 'grapple-arm',
	uppercut: 'exploding-uppercut',
	'charge-shot': 'charged-shot',
	'immobilizing-trap': 'spirit-snare',
	'rain-of-fire': 'rain-of-arrows',
	catalyst: 'napalm',
	'kudzu-bomb': 'entangling-thorns',
	'watchers-covenant': 'kudzu-connection',
	'true-form': 'stone-form',
	'blood-bomb': 'essence-bomb',
	'ground-slam': 'ground-strike',
	ghouls: 'borrowed-decree',
	turret: 'mini-turret',
	'medicinal-spectre': 'medicinal-specter',
	'rocket-barrage': 'heavy-barrage',
	tornado: 'dust-devil',
	bookworm: 'bookwyrm',
	'conjure-dragon': 'bookwyrm',
	bararge: 'barrage',
	'tail-whack': 'boot-kick',
	'mauling-leap': 'entangling-bola',
	'go-for-the-throat': 'lycan-curse',
	assistant: 'spectral-assistant',
	crow: 'crow-familiar',
	'royal-flush': 'card-trick',
	'card-toss': 'card-trick',
	'flying-strike': 'flying-slash',
	'shadow-explosion': 'shadow-transformation'
};

const heroAbilityAliases = Object.keys(HERO_ABILITY_ALIASES).map((slug) => ({ slug }));

export function resolveHeroAbilitySlug(
	name: string,
	abilities: readonly { slug: string }[]
): string | null {
	const current = resolveAbilitySlug(name, abilities);
	if (current) return current;

	const alias = resolveAbilitySlug(name, heroAbilityAliases);
	const slug = alias ? HERO_ABILITY_ALIASES[alias] : null;
	return slug && abilities.some((ability) => ability.slug === slug) ? slug : null;
}

/** Mog's inline link: `[[target]]((label))`. Written once — the three uses below had
 * already drifted on whether an empty target counts. */
const MOG_LINK_SOURCE = String.raw`\[\[([^\[\]]*)\]\]\(\(([^()]*)\)\)`;
const MOG_LINK_RE = new RegExp(MOG_LINK_SOURCE, 'g');
const MOG_LINK_ONLY_RE = new RegExp(`^${MOG_LINK_SOURCE}$`);

/** Mog's media transclusion, `[[!:<url>]]((alt))`. Images stay a distinct note kind from
 * links: they render as media, and their alt text is chrome rather than patch content. */
export const MOG_IMAGE_PREFIX = '[[!:';
/** Anchored at line start, since an image is always a note of its own. */
export const MOG_IMAGE_RE = /^\[\[!:([^[\]]+)\]\]/;

/** Encoders for the grammar above, so no caller has to spell the delimiters again. */
export function mogLink(target: string, label: string): string {
	return `[[${target}]]((${label}))`;
}

export function mogImage(url: string, alt: string): string {
	return `${MOG_IMAGE_PREFIX}${url}]]${alt ? `((${alt}))` : ''}`;
}

/** Every paired delimiter Mog reads as markup, so prose that happens to contain one
 * can be handed back to the author untouched. */
const MOG_DELIMITERS = String.raw`\*\*|__|~~|\$\$|\[\[|\]\]|\(\(|\)\)|\{\{|\}\}|\|\|`;
const MOG_LOOSE_DELIMITER_RE = new RegExp(
	`${MOG_LINK_SOURCE}|(?<!\\\\)(${MOG_DELIMITERS})`,
	'g'
);
const MOG_ESCAPED_DELIMITER_RE = new RegExp(String.raw`\\(${MOG_DELIMITERS})`, 'g');

/**
 * Splits a note that is nothing but a link — an attachment or a source, not prose.
 * The one place the link grammar is decoded, so callers never re-encode it.
 */
export function parseMogLink(text: string): { target: string; label: string } | null {
	const match = text.trim().match(MOG_LINK_ONLY_RE);
	// An image is the same grammar with a `!:` target, but it is a different kind of
	// note — reporting it as a link makes every caller's prefix check load-bearing.
	if (!match || match[1].startsWith('!:')) return null;
	return { target: match[1], label: match[2] };
}

/** Reduces a mog link to the text a reader sees — for plaintext (search, meta, summaries). */
export function stripMogLinks(text: string): string {
	return text.replace(MOG_LINK_RE, '$2');
}

/** Inverse of {@link escapeMogDelimiters} — lives beside it so the pair cannot drift. */
export function unescapeMogDelimiters(text: string): string {
	return text.replace(MOG_ESCAPED_DELIMITER_RE, '$1');
}

/**
 * Escapes Mog's paired delimiters so prose reads as punctuation rather than markup,
 * while leaving real `[[target]]((label))` links intact. Every occurrence has to be
 * escaped, not just the opening one — an escaped `~~` still leaves its partner free
 * to pair with whatever comes next and swallow the rest of the block.
 */
export function escapeMogDelimiters(text: string): string {
	// Link branch first, so the brackets inside [[target]]((label)) are returned
	// untouched. The link alternative captures target/label, so the loose delimiter is
	// the third group.
	return text.replace(MOG_LOOSE_DELIMITER_RE, (match, _target, _label, delimiter) =>
		delimiter ? `\\${delimiter}` : match
	);
}

// ponytail: crude teaser, not a curated summary — just clamp at a word boundary.
// An LLM `summary` column would do better.
export function makeSummary(text: string | null | undefined, max = 140): string {
	if (!text) return '';
	const clean = text.replace(/\s+/g, ' ').trim();
	if (clean.length <= max) return clean;
	const cut = clean.slice(0, max);
	const lastSpace = cut.lastIndexOf(' ');
	return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

/**
 * Streaks over the newest-first main-changelog sequence: `current` counts members
 * from index 0 (0 when the entity missed the newest patch), `longest` is the best
 * consecutive run anywhere in the sequence.
 */
export function computeStreaks(
	orderedIds: readonly string[],
	memberIds: ReadonlySet<string>
): { current: number; longest: number } {
	let current = 0;
	let longest = 0;
	let run = 0;
	for (const [i, id] of orderedIds.entries()) {
		run = memberIds.has(id) ? run + 1 : 0;
		if (run > longest) longest = run;
		if (run === i + 1) current = run;
	}
	return { current, longest };
}

function toDate(date: Date | string): Date {
	return date instanceof Date ? date : new Date(date);
}

function getOrdinalSuffix(day: number): string {
	if (day >= 11 && day <= 13) return 'th';
	return ['th', 'st', 'nd', 'rd'][day % 10] ?? 'th';
}

/** Word only, so callers keep control of the count's own markup. */
export function plural(count: number, one: string, many = `${one}s`): string {
	return count === 1 ? one : many;
}

export const DISPLAY_TIME_ZONE = 'America/Los_Angeles';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: DISPLAY_TIME_ZONE,
	month: 'long',
	day: 'numeric',
	year: 'numeric'
});

export function formatDate(date: Date | string): string {
	const parts = dateFormatter.formatToParts(toDate(date));
	const value = (type: Intl.DateTimeFormatPartTypes) =>
		parts.find((part) => part.type === type)?.value ?? '';
	const day = Number(value('day'));
	return `${value('month')} ${day}${getOrdinalSuffix(day)}, ${value('year')}`;
}

const timeFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: DISPLAY_TIME_ZONE,
	hour: 'numeric',
	minute: '2-digit',
	hour12: true
});

export function formatTime(date: Date | string): string {
	return timeFormatter.format(toDate(date));
}
