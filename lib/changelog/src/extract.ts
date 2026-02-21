import type { ChangelogEntities } from './schema';

export interface TocEntry {
	level: number;
	title: string;
	id: string;
}

export function extractEntities(toc: TocEntry[], content?: string): ChangelogEntities {
	const heroes: string[] = [];
	const items: string[] = [];

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
			if (currentSection === 'heroes') {
				heroes.push(entry.title);
			} else {
				items.push(entry.title);
			}
		}
	}

	if (content) {
		const re = /<EntityHeading\s+name="([^"]+)"\s+type="(hero|item)"\s*\/>/g;
		let match;
		while ((match = re.exec(content)) !== null) {
			const name = match[1].replace(/&amp;/g, '&').replace(/&quot;/g, '"');
			const type = match[2];
			if (type === 'hero' && !heroes.includes(name)) {
				heroes.push(name);
			} else if (type === 'item' && !items.includes(name)) {
				items.push(name);
			}
		}
	}

	return { heroes, items };
}

export function normalizeEntityName(name: string): string {
	return name.toLowerCase().trim();
}
