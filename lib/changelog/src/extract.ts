import type { ChangelogEntities } from './schema';

export interface TocEntry {
	level: number;
	title: string;
	id: string;
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
