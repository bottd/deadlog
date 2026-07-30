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

/**
 * Anchor id for an ability heading. Shared so the generator can hand out collision-free
 * ids while every heading it leaves alone keeps the id it already has.
 */
export function abilityFragmentId(name: string): string {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/**
 * Anchor id for a hero or item heading. Same slug rule as {@link abilityFragmentId},
 * applied to the article-stripped alias so "The Doorman" and "Doorman" land together.
 */
export function entityFragmentId(name: string): string {
	return abilityFragmentId(entityNameAliases(name).at(-1) ?? '');
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

function toDate(date: Date | string): Date {
	return date instanceof Date ? date : new Date(date);
}

function getOrdinalSuffix(day: number): string {
	if (day >= 11 && day <= 13) return 'th';
	switch (day % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
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
