import type { ChangelogEntities, EntityChange } from './schema';
import { decodeEntityName, entityNameAliases, makeSummary } from '@deadlog/utils';

export interface TocEntry {
	level: number;
	title: string;
	id: string;
}

const ENTITY_HEADING_RE = /<EntityHeading\b([^>]*)\/?\s*>/;
const ABILITY_HEADING_RE = /<AbilityHeading\b([^>]*)\/?\s*>/;
const NAME_ATTR_RE = /\bname\s*=\s*(?:"([^"]*)"|'([^']*)')/;

/** Roughly two card lines — see PatchPreviewCard's line-clamp-2. */
const SUMMARY_MAX = 160;

function parseEntityHeading(
	source: string
): Omit<EntityChange, 'count' | 'summary'> | null {
	const tag = source.match(ENTITY_HEADING_RE);
	if (!tag) return null;

	const nameMatch = tag[1].match(NAME_ATTR_RE);
	const typeMatch = tag[1].match(/\btype\s*=\s*(?:"(hero|item)"|'(hero|item)')/);
	const name = nameMatch?.[1] ?? nameMatch?.[2];
	const type = typeMatch?.[1] ?? typeMatch?.[2];

	if (!name || (type !== 'hero' && type !== 'item')) return null;
	return { name: decodeEntityName(name), type };
}

function parseAbilityName(source: string): string | null {
	const tag = source.match(ABILITY_HEADING_RE);
	if (!tag) return null;
	const nameMatch = tag[1].match(NAME_ATTR_RE);
	const name = nameMatch?.[1] ?? nameMatch?.[2];
	return name ? decodeEntityName(name) : null;
}

export function extractEntityChanges(content: string): EntityChange[] {
	const changes = new Map<string, EntityChange & { bullets: string[] }>();
	let currentKey: string | null = null;
	let currentAbility: string | null = null;

	for (const rawLine of content.split('\n')) {
		const line = rawLine.trim();

		if (/^\*\s+/.test(line)) {
			currentKey = null;
			currentAbility = null;
			continue;
		}

		if (line.includes('<EntityHeading')) {
			const heading = parseEntityHeading(line);
			currentKey = null;
			currentAbility = null;
			if (!heading) continue;

			const key = `${heading.type}:${entityNameAliases(heading.name).at(-1)}`;
			if (!changes.get(key)) {
				changes.set(key, { ...heading, count: 0, summary: '', bullets: [] });
			}
			currentKey = key;
			continue;
		}

		// Ability bullets still belong to the hero, but a bare "Cooldown reduced to 32s"
		// is meaningless without knowing which ability it came from.
		if (line.includes('<AbilityHeading')) {
			currentAbility = parseAbilityName(line);
			continue;
		}

		if (currentKey && /^-\s+\S/.test(line)) {
			const current = changes.get(currentKey);
			if (!current) continue;
			current.count++;
			const text = decodeEntityName(line.replace(/^-\s+/, '').trim());
			// Most bullets already lead with the ability name; only prefix the ones that don't.
			const needsPrefix =
				currentAbility !== null &&
				!text.toLowerCase().startsWith(currentAbility.toLowerCase());
			current.bullets.push(needsPrefix ? `${currentAbility}: ${text}` : text);
		}
	}

	return [...changes.values()].map(({ bullets, ...change }) => ({
		...change,
		summary: makeSummary(bullets.join(' · '), SUMMARY_MAX)
	}));
}

export function extractEntities(toc: TocEntry[], content?: string): ChangelogEntities {
	const heroSet = new Set<string>();
	const itemSet = new Set<string>();

	let currentSection: 'heroes' | 'items' | null = null;

	for (const entry of toc) {
		if (entry.level === 1) {
			const title = entry.title.toLowerCase();
			if (title.includes('hero')) {
				currentSection = 'heroes';
			} else if (title.includes('item')) {
				currentSection = 'items';
			} else {
				currentSection = null;
			}
		} else if (entry.level === 2 && currentSection) {
			if (entry.title === 'Raw Content' || entry.title.startsWith('Reply ')) {
				continue;
			}
			(currentSection === 'heroes' ? heroSet : itemSet).add(entry.title);
		}
	}

	if (content) {
		const re = /<EntityHeading\b[^>]*\/?\s*>/g;
		let match;
		while ((match = re.exec(content)) !== null) {
			const heading = parseEntityHeading(match[0]);
			if (heading) {
				(heading.type === 'hero' ? heroSet : itemSet).add(heading.name);
			}
		}
	}

	return { heroes: [...heroSet], items: [...itemSet] };
}

export { entityNameAliases, entityNamesMatch, normalizeEntityName } from '@deadlog/utils';
