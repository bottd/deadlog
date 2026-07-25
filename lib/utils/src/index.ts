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

/** Norg's inline link: `{target}[label]`. */
const NORG_LINK_RE = /\{([^{}]*)\}\[([^\]]*)\]/g;
const NORG_LINK_ONLY_RE = /^\{[^{}]+\}\[[^\]]*\]$/;

/** A note that is nothing but a link — an attachment or source, not prose. */
export function isNorgLinkOnly(text: string): boolean {
	return NORG_LINK_ONLY_RE.test(text.trim());
}

/** Reduces a norg link to the text a reader sees — for plaintext (search, meta, summaries). */
export function stripNorgLinks(text: string): string {
	return text.replace(NORG_LINK_RE, '$2');
}

/**
 * Escapes braces so Norg reads them as punctuation rather than opening a link, while
 * leaving real `{target}[label]` links intact. Prose like "{ Standard | Gyro }" would
 * otherwise render as <a href=" Standard | Gyro ">.
 */
export function escapeNorgBraces(text: string): string {
	const escape = (s: string) => s.replace(/(?<!\\)([{}])/g, '\\$1');
	let out = '';
	let last = 0;
	for (const match of text.matchAll(NORG_LINK_RE)) {
		out += escape(text.slice(last, match.index)) + match[0];
		last = match.index + match[0].length;
	}
	return out + escape(text.slice(last));
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
