import type { ChangelogEntities, EntityChange } from './schema';
import { decodeEntityName, entityNameAliases } from '@deadlog/utils';

export interface TocEntry {
	level: number;
	title: string;
	id: string;
}

const ENTITY_HEADING_RE = /<EntityHeading\b([^>]*)\/?\s*>/;

function parseEntityHeading(source: string): Omit<EntityChange, 'count'> | null {
	const tag = source.match(ENTITY_HEADING_RE);
	if (!tag) return null;

	const nameMatch = tag[1].match(/\bname\s*=\s*(?:"([^"]*)"|'([^']*)')/);
	const typeMatch = tag[1].match(/\btype\s*=\s*(?:"(hero|item)"|'(hero|item)')/);
	const name = nameMatch?.[1] ?? nameMatch?.[2];
	const type = typeMatch?.[1] ?? typeMatch?.[2];

	if (!name || (type !== 'hero' && type !== 'item')) return null;
	return { name: decodeEntityName(name), type };
}

export function extractEntityChanges(content: string): EntityChange[] {
	const changes = new Map<string, EntityChange>();
	let currentKey: string | null = null;

	for (const rawLine of content.split('\n')) {
		const line = rawLine.trim();

		if (/^\*\s+/.test(line)) {
			currentKey = null;
			continue;
		}

		if (line.includes('<EntityHeading')) {
			const heading = parseEntityHeading(line);
			currentKey = null;
			if (!heading) continue;

			const key = `${heading.type}:${entityNameAliases(heading.name).at(-1)}`;
			const existing = changes.get(key);
			if (!existing) changes.set(key, { ...heading, count: 0 });
			currentKey = key;
			continue;
		}

		if (currentKey && /^-\s+\S/.test(line)) {
			const current = changes.get(currentKey);
			if (current) current.count++;
		}
	}

	return [...changes.values()];
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
