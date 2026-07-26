export function toSlug(name: string): string {
	return name
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}

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

/** Norg's inline link: `{target}[label]`. Written once — the three uses below had
 * already drifted on whether an empty target counts. */
const NORG_LINK_SOURCE = String.raw`\{([^{}]*)\}\[([^\]]*)\]`;
const NORG_LINK_RE = new RegExp(NORG_LINK_SOURCE, 'g');
const NORG_LINK_ONLY_RE = new RegExp(`^${NORG_LINK_SOURCE}$`);
const NORG_LOOSE_BRACE_RE = new RegExp(`${NORG_LINK_SOURCE}|(?<!\\\\)([{}])`, 'g');

/**
 * Splits a note that is nothing but a link — an attachment or a source, not prose.
 * The one place the link grammar is decoded, so callers never re-encode it.
 */
export function parseNorgLink(text: string): { target: string; label: string } | null {
	const match = text.trim().match(NORG_LINK_ONLY_RE);
	return match ? { target: match[1], label: match[2] } : null;
}

/** Reduces a norg link to the text a reader sees — for plaintext (search, meta, summaries). */
export function stripNorgLinks(text: string): string {
	return text.replace(NORG_LINK_RE, '$2');
}

/** Inverse of {@link escapeNorgBraces} — lives beside it so the pair cannot drift. */
export function unescapeNorgBraces(text: string): string {
	return text.replace(/\\([{}])/g, '$1');
}

/**
 * Escapes braces so Norg reads them as punctuation rather than opening a link, while
 * leaving real `{target}[label]` links intact. Prose like "{ Standard | Gyro }" would
 * otherwise render as <a href=" Standard | Gyro ">.
 */
export function escapeNorgBraces(text: string): string {
	// Link branch first, so a brace inside {target}[label] is returned untouched. The
	// link alternative captures target/label, so the loose brace is the third group.
	return text.replace(NORG_LOOSE_BRACE_RE, (match, _target, _label, brace) =>
		brace ? `\\${brace}` : match
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
