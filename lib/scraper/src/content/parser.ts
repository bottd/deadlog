import { Window } from 'happy-dom';

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

	// Strip <a> tags — keep href only if it's a real URL, otherwise just unwrap
	for (const a of [...bbWrapper.querySelectorAll('a')]) {
		const href = a.getAttribute('href') || '';
		a.replaceWith(href.startsWith('http') ? href : a.textContent || '');
	}

	// textContent handles entity decoding natively
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

		if (!trimmed || !trimmed.startsWith('-')) continue;

		const stripped = trimmed.replace(/^[-•]+\s*/, '').trim();
		if (!stripped) continue;

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

	return result;
}

export function deduplicateLines(text: string): string {
	const seen = new Set<string>();
	const lines = text.split('\n');
	const result: string[] = [];

	for (const line of lines) {
		const trimmed = line.trim();
		if (trimmed.startsWith('-')) {
			if (seen.has(trimmed)) continue;
			seen.add(trimmed);
		}
		result.push(line);
	}

	return result.join('\n');
}
