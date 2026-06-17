import type { ChangelogEntities, EntityChange } from './schema';

export interface TocEntry {
	level: number;
	title: string;
	id: string;
}

const ENTITY_HEADING_RE = /<EntityHeading\s+name="([^"]+)"\s+type="(hero|item)"\s*\/>/;

function unescapeEntityName(name: string): string {
	return name.replace(/&amp;/g, '&').replace(/&quot;/g, '"');
}

/**
 * Counts the change bullets belonging to each entity section. Bullets (`- …`)
 * after an `<EntityHeading>` belong to that entity until the next entity heading
 * or top-level (`*`) section. `<AbilityHeading>`/`<SectionPreview>` embeds do not
 * reset the current entity. Repeated sections for the same entity are summed.
 */
export function extractEntityChanges(content: string): EntityChange[] {
	const merged = new Map<string, EntityChange>();
	let current: EntityChange | null = null;

	for (const raw of content.split('\n')) {
		const line = raw.trim();

		// A top-level section heading (e.g. "* General Changes") ends the current entity.
		if (/^\*\s+/.test(line)) {
			current = null;
			continue;
		}

		const heading = line.match(ENTITY_HEADING_RE);
		if (heading) {
			const name = unescapeEntityName(heading[1]);
			const type = heading[2] as 'hero' | 'item';
			const key = `${type}:${name.toLowerCase().trim()}`;
			current = merged.get(key) ?? { name, type, count: 0 };
			merged.set(key, current);
			continue;
		}

		if (current && /^-\s+/.test(line)) {
			current.count++;
		}
	}

	return [...merged.values()];
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
		const re = /<EntityHeading\s+name="([^"]+)"\s+type="(hero|item)"\s*\/>/g;
		let match;
		while ((match = re.exec(content)) !== null) {
			const name = match[1].replace(/&amp;/g, '&').replace(/&quot;/g, '"');
			(match[2] === 'hero' ? heroSet : itemSet).add(name);
		}
	}

	return { heroes: [...heroSet], items: [...itemSet] };
}

export function normalizeEntityName(name: string): string {
	return name.toLowerCase().trim();
}

const ARTICLE_RE = /^(the|a|an)\s+/;

export function entityNameAliases(name: string): string[] {
	const normalized = normalizeEntityName(name);
	const withoutArticle = normalized.replace(ARTICLE_RE, '');
	return withoutArticle !== normalized ? [normalized, withoutArticle] : [normalized];
}
