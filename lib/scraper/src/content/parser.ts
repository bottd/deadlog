import { Window } from 'happy-dom';
import { isNorgLinkOnly } from '@deadlog/utils';

export interface EntityLists {
	heroes: Set<string>;
	items: Set<string>;
}

interface ParsedNote {
	entityName: string | null;
	entityType: 'hero' | 'item' | 'general';
	text: string;
}

export interface GroupedContent {
	general: string[];
	heroes: Map<string, string[]>;
	items: Map<string, string[]>;
}

const STAT_PREFIX_BLOCKLIST = new Set([
	'base',
	'bullet',
	'gun',
	'health',
	'regen',
	'dps',
	'movespeed',
	'move',
	'stamina',
	'weapon',
	'melee',
	'fire',
	'is',
	'fixed',
	'starting',
	'spirit',
	'max',
	'min',
	'bonus'
]);

const STAT_PHRASE_BLOCKLIST = new Set([
	'base health',
	'base bullet',
	'base regen',
	'base sprint',
	'base spirit',
	'base spirit resist',
	'base bullet resist',
	'base bullet damage',
	'base movement',
	'bullet velocity',
	'bullet resist',
	'bullet damage',
	'fire rate',
	'fire rate spirit power',
	'health regen',
	'gun falloff',
	'gun damage',
	'move speed',
	'starting health',
	'last stand resistance',
	'killing blow rage damage bonus'
]);

export function detectAbilityPrefix(
	note: string,
	knownAbilities?: Set<string>
): string | null {
	const match = note.match(
		/^([A-Z][a-zA-Z']*(?:\s+[A-Z][a-zA-Z']*)*)\s+(?:T[1-3]\b|[a-z])/
	);
	if (!match) return null;

	const candidate = match[1];
	const candidateLower = candidate.toLowerCase();

	if (knownAbilities && knownAbilities.size > 0) {
		return knownAbilities.has(candidateLower) ? candidate : null;
	}

	const firstWord = candidate.split(/\s+/)[0].toLowerCase();
	if (STAT_PREFIX_BLOCKLIST.has(firstWord)) return null;
	if (STAT_PHRASE_BLOCKLIST.has(candidateLower)) return null;

	const rest = note.slice(candidate.length).trimStart().toLowerCase();
	const keywords = [
		'cooldown',
		'damage',
		'duration',
		'radius',
		'range',
		'speed',
		'heal',
		'health',
		'stun',
		'slow',
		'silence',
		'lifesteal',
		'dps',
		'now ',
		'no longer',
		'is now',
		'bonus',
		'max ',
		'min ',
		'fire rate',
		'movement',
		'spirit',
		'bullet',
		'proc',
		'channel',
		'delay',
		'change',
		'projectile',
		'width',
		'height',
		'scaling',
		'reduced',
		'increased',
		'reworked',
		't1 ',
		't1:',
		't2 ',
		't2:',
		't3 ',
		't3:'
	];

	return keywords.some((kw) => rest.startsWith(kw)) ? candidate : null;
}

export function groupNotesByAbility(
	notes: string[],
	knownAbilities?: Set<string>
): { abilityName: string | null; notes: string[] }[] {
	const groups: { abilityName: string | null; notes: string[] }[] = [];
	let currentAbility: string | null = null;
	let currentNotes: string[] = [];

	for (const note of notes) {
		const ability = detectAbilityPrefix(note, knownAbilities);

		if (ability && ability !== currentAbility) {
			if (currentNotes.length > 0) {
				groups.push({ abilityName: currentAbility, notes: currentNotes });
			}
			currentAbility = ability;
			currentNotes = [note];
		} else if (ability && ability === currentAbility) {
			currentNotes.push(note);
		} else {
			if (currentAbility !== null && currentNotes.length > 0) {
				groups.push({ abilityName: currentAbility, notes: currentNotes });
				currentAbility = null;
				currentNotes = [];
			}
			if (groups.length > 0 && groups[groups.length - 1].abilityName === null) {
				groups[groups.length - 1].notes.push(note);
			} else {
				groups.push({ abilityName: null, notes: [note] });
			}
		}
	}

	if (currentNotes.length > 0) {
		groups.push({ abilityName: currentAbility, notes: currentNotes });
	}

	return groups;
}

/** Norg link targets and labels are brace/bracket delimited, so neither may contain them. */
const SAFE_HREF_RE = /^https?:\/\/[^\s{}[\]]+$/i;

// The forum names a video attachment "<name>-mp4.<id>"; a plain ".mp4" covers anywhere
// else a clip is linked directly.
const VIDEO_HREF_RE = /(?:-|\.)(?:mp4|webm|m4v)(?:\.|$|\/)/i;
const LINK_PARTS_RE = /^\{([^{}]+)\}\[([^\]]*)\]$/;

/**
 * Marks a clip so it renders as a labelled link rather than a bare URL. The forum serves
 * no embeddable video, so this stays a link out — no poster, no player chrome that
 * cannot actually play.
 */
function videoBlock(src: string, label: string): string {
	return ['@video', `src ${src}`, `label ${label}`, '@end'].join('\n');
}

function linkMarkup(href: string, text: string): string {
	const label = text.replace(/[{}[\]]/g, '').trim();
	if (!SAFE_HREF_RE.test(href)) return label;
	return `{${href}}[${label || href}]`;
}

export function extractContent(html: string): string {
	const window = new Window();
	window.document.write(html);

	const bbWrapper = window.document.querySelector('.bbWrapper');
	if (!bbWrapper) {
		window.close();
		return html;
	}

	// Convert <br> to newlines before extracting text
	for (const br of [...bbWrapper.querySelectorAll('br')]) {
		br.replaceWith('\n');
	}

	// Convert <img> to @image blocks, replacing parent <a> if wrapped in a link
	for (const img of [...bbWrapper.querySelectorAll('img')]) {
		const src = img.getAttribute('src') || '';
		const alt = img.getAttribute('alt') || '';
		const proxyMatch = src.match(/\/proxy\.php\?image=([^&]+)/);
		const url = proxyMatch ? decodeURIComponent(proxyMatch[1]) : src;
		const label = alt.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
		const imageBlock = `\n@image ${url}\n${label}\n@end\n`;
		const parent = img.parentElement;
		if (parent?.tagName === 'A') {
			parent.replaceWith(imageBlock);
		} else {
			img.replaceWith(imageBlock);
		}
	}

	// Anchors become real Norg links. This is scraped from a user-editable forum, so
	// only http(s) is passed through — the renderer drops unsafe schemes as well, but
	// the allowlist is ours to own rather than the plugin's.
	for (const a of [...bbWrapper.querySelectorAll('a')]) {
		a.replaceWith(linkMarkup(a.getAttribute('href') || '', a.textContent || ''));
	}

	// textContent handles entity decoding natively.
	// Zero-width characters are deliberately left alone: the forum uses them as the
	// only separator between bullets crammed onto one line (see 2025/12-16), so
	// stripping them runs "0.75" straight into the next "- Backstabber:".
	const text = (bbWrapper.textContent || '').replace(/\n{2,}/g, '\n');
	window.close();
	return text.trim();
}

function parseChangelogLine(text: string, entities: EntityLists): ParsedNote {
	const colonMatch = text.match(/^([^:]+):\s*(.+)$/);
	if (colonMatch) {
		const entity = colonMatch[1].trim();
		const noteText = colonMatch[2].trim();

		if (entities.heroes.has(entity.toLowerCase())) {
			return { entityName: entity, entityType: 'hero', text: noteText };
		}

		if (entities.items.has(entity.toLowerCase())) {
			return { entityName: entity, entityType: 'item', text: noteText };
		}
	}

	return { entityName: null, entityType: 'general', text };
}

// Valve's forum posts mix markers: most patches use "-", but plenty use "*" or "•".
// Accepting only "-" silently discards a whole patch (see 10-02-2025, 194 bullets).
// "-"/"•" keep their original space-optional form ("-20% Reload Time" is a bullet);
// "*" requires a space so emphasis and stray asterisks aren't swallowed.
const BULLET_MARKER_RE = /^(?:[-•]|\*\s)/;
const BULLET_PREFIX_RE = /^[-*•]+\s*/;

export function parseAndGroupContent(
	rawContent: string,
	entities: EntityLists
): GroupedContent {
	const result: GroupedContent = {
		general: [],
		heroes: new Map(),
		items: new Map()
	};

	const lines = rawContent.split('\n');
	const prose: string[] = [];
	let sawBullet = false;

	for (let i = 0; i < lines.length; i++) {
		const trimmed = lines[i].trim();

		if (trimmed.startsWith('@image ')) {
			const blockLines = [trimmed];
			while (i + 1 < lines.length && lines[i + 1].trim() !== '@end') {
				i++;
				blockLines.push(lines[i]);
			}
			if (i + 1 < lines.length) {
				i++;
				blockLines.push(lines[i]);
			}
			result.general.push(blockLines.join('\n'));
			continue;
		}

		if (!trimmed) continue;

		if (!BULLET_MARKER_RE.test(trimmed)) {
			// Valve posts demo clips on their own line beside the screenshots. Such a line
			// carries no bullet marker, so without this it lands in `prose` and is dropped
			// from every post that also has bullets — which is all of them.
			const link = isNorgLinkOnly(trimmed) ? trimmed.match(LINK_PARTS_RE) : null;
			if (link && VIDEO_HREF_RE.test(link[1])) {
				result.general.push(videoBlock(link[1], link[2]));
			} else if (link) {
				result.general.push(trimmed);
			} else {
				prose.push(trimmed);
			}
			continue;
		}

		const stripped = trimmed.replace(BULLET_PREFIX_RE, '').trim();
		if (!stripped) continue;

		sawBullet = true;
		const parsed = parseChangelogLine(stripped, entities);

		if (parsed.entityType === 'hero' && parsed.entityName) {
			const existing = result.heroes.get(parsed.entityName) ?? [];
			existing.push(parsed.text);
			result.heroes.set(parsed.entityName, existing);
		} else if (parsed.entityType === 'item' && parsed.entityName) {
			const existing = result.items.get(parsed.entityName) ?? [];
			existing.push(parsed.text);
			result.items.set(parsed.entityName, existing);
		} else {
			result.general.push(parsed.text);
		}
	}

	// Some "updates" are prose announcements with no bullets at all. Keeping their
	// text beats emitting an empty changelog, but never let prose outrank real bullets.
	if (!sawBullet) result.general.push(...prose);

	return result;
}

export function deduplicateLines(text: string): string {
	const seen = new Set<string>();
	const lines = text.split('\n');
	const result: string[] = [];

	for (const line of lines) {
		const trimmed = line.trim();
		// Deliberately "-" only: "*" lines repeat legitimately (the same stat tweak
		// listed under two items), and deduping them drops real changes.
		if (trimmed.startsWith('-')) {
			if (seen.has(trimmed)) continue;
			seen.add(trimmed);
		}
		result.push(line);
	}

	return result.join('\n');
}
