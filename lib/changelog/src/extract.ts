/**
 * Entity extraction from changelog TOC structure
 *
 * The TOC (table of contents) from vite-plugin-norg gives us heading hierarchy:
 * - Level 1 (*) headings are sections: "Hero Changes", "Item Changes", etc.
 * - Level 2 (**) headings under those are entity names: "Haze", "Mystic Burst", etc.
 *
 * This module extracts hero and item names by walking the TOC structure.
 */

import type { ChangelogEntities } from './schema';

/**
 * TOC entry from vite-plugin-norg parser
 * Matches the TocEntry type from the plugin
 */
export interface TocEntry {
	level: number;
	title: string;
	id: string;
}

/**
 * Extract hero and item names from a changelog's table of contents
 *
 * Looks for level-1 headings containing "hero" or "item" (case-insensitive),
 * then collects all level-2 subheadings as entity names.
 *
 * @example
 * Given TOC:
 * [
 *   { level: 1, title: "General Changes", id: "general-changes" },
 *   { level: 1, title: "Hero Changes", id: "hero-changes" },
 *   { level: 2, title: "Haze", id: "haze" },
 *   { level: 2, title: "Infernus", id: "infernus" },
 *   { level: 1, title: "Item Changes", id: "item-changes" },
 *   { level: 2, title: "Mystic Burst", id: "mystic-burst" },
 * ]
 *
 * Returns:
 * { heroes: ["Haze", "Infernus"], items: ["Mystic Burst"] }
 */
export function extractEntities(toc: TocEntry[]): ChangelogEntities {
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
			// Skip "Raw Content" or "Reply" headings from scaffold
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

	return { heroes, items };
}

/**
 * Normalize an entity name for matching against database records
 *
 * @example
 * normalizeEntityName("Mo & Krill") // "mo & krill"
 * normalizeEntityName("Mystic Burst") // "mystic burst"
 */
export function normalizeEntityName(name: string): string {
	return name.toLowerCase().trim();
}
