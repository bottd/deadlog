import { z } from 'zod';
import {
	ENTITY_TYPES,
	type HeroId,
	type ItemId,
	type EnrichedHero,
	type EnrichedItem,
	type EntityType
} from './types/assets';
import type { ChangelogContentJson, ScalingPattern, Note } from '@deadlog/db';
import { changelogContentJsonSchema } from '@deadlog/db';
import { escapeRegex } from './regex';

/**
 * Extracts scaling patterns from text and returns text with pattern metadata.
 * Patterns include:
 * - Numeric sequences like "1/2/3/4" or "10/20/30/40"
 * - Value changes like "X → Y" or "X -> Y" or "X to Y"
 */
function extractScalingPatterns(text: string): Note {
	const patterns: ScalingPattern[] = [];

	// Pattern 1: Numeric sequences like "1/2/3/4" or "1.5/2/2.5/3"
	const sequenceRegex = /(\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)+(?:\/\d+(?:\.\d+)?)*)/g;

	// Pattern 2: Value changes like "10 → 15" or "10% -> 15%" or "10 to 15"
	const changeRegex = /([\d.]+%?\s*(?:→|->|to)\s*[\d.]+%?)/gi;

	let match;
	while ((match = sequenceRegex.exec(text)) !== null) {
		patterns.push({
			text: match[1],
			start: match.index,
			end: match.index + match[1].length
		});
	}

	// Find all change patterns (that don't overlap with sequences)
	while ((match = changeRegex.exec(text)) !== null) {
		const start = match.index;
		const end = start + match[1].length;

		const overlaps = patterns.some(
			(p) => (start >= p.start && start < p.end) || (end > p.start && end <= p.end)
		);

		if (!overlaps) {
			patterns.push({
				text: match[1],
				start,
				end
			});
		}
	}

	patterns.sort((a, b) => a.start - b.start);

	return {
		text,
		patterns
	};
}

/**
 * Helper to get a DOM document from HTML content.
 * Works in both browser and Node.js environments.
 */
async function getDocument(htmlContent: string): Promise<Document> {
	if (typeof DOMParser !== 'undefined') {
		// Browser environment
		const parser = new DOMParser();
		return parser.parseFromString(htmlContent, 'text/html');
	} else {
		// Node.js environment
		const { Window } = await import('happy-dom');
		const window = new Window();
		window.document.write(htmlContent);
		return window.document as unknown as Document;
	}
}

const changeIconSchema = z.discriminatedUnion('type', [
	z.object({
		src: z.string().url(),
		alt: z.string(),
		type: z.literal(ENTITY_TYPES.HERO),
		id: z.number(),
		heroType: z.string().nullable().optional(),
		itemCategory: z.enum(['weapon', 'ability', 'upgrade']).optional()
	}),
	z.object({
		src: z.string().url(),
		alt: z.string(),
		type: z.literal(ENTITY_TYPES.ITEM),
		id: z.number(),
		heroType: z.string().nullable().optional(),
		itemCategory: z.enum(['weapon', 'ability', 'upgrade']).optional()
	})
]);

export type ChangeIcon = z.infer<typeof changeIconSchema>;

// Structured changelog line types
export type ChangelogLineType =
	| 'heading'
	| 'hero_section'
	| 'item_section'
	| 'bullet'
	| 'text'
	| 'list_item';

export interface ChangelogLine {
	type: ChangelogLineType;
	content: string;
	rawHtml?: string;
	heroName?: string;
	itemName?: string;
	level?: number; // for headings (1-6)
}

export interface StructuredChangelog {
	lines: ChangelogLine[];
}

interface ExtractIconsOptions {
	heroes: readonly EnrichedHero[];
	items: readonly EnrichedItem[];
}

interface ExtractIconsResult {
	heroes: ChangeIcon[];
	items: ChangeIcon[];
}

/**
 * Generic icon extractor that works for both heroes and items
 */
function extractIconsForEntity<T extends EnrichedHero | EnrichedItem>(
	textContent: string,
	entities: readonly T[],
	type: EntityType,
	getImage: (entity: T) => string | undefined
): ChangeIcon[] {
	const icons: ChangeIcon[] = [];

	for (const entity of entities) {
		const regex = new RegExp(`\\b${escapeRegex(entity.name.toLowerCase())}\\b`, 'gi');

		if (regex.test(textContent)) {
			const image = getImage(entity);
			if (image) {
				const iconData: {
					src: string;
					alt: string;
					type: EntityType;
					id: number;
					heroType?: string | null;
					itemCategory?: 'weapon' | 'ability' | 'upgrade';
				} = {
					src: image,
					alt: entity.name,
					type,
					id: entity.id
				};

				// Add heroType for heroes
				if ('heroType' in entity) {
					iconData.heroType = entity.heroType;
				}

				// Add itemCategory for items
				if ('type' in entity && entity.type) {
					iconData.itemCategory = entity.type;
				}

				const result = changeIconSchema.safeParse(iconData);

				if (result.success) {
					icons.push(result.data);
				}
			}
		}
	}

	return [...new Map(icons.map((icon) => [icon.id, icon])).values()];
}

export function extractIcons(
	htmlContent: string,
	options: ExtractIconsOptions
): ExtractIconsResult {
	const { heroes: heroesDb, items: itemsDb } = options;
	const textContent = htmlContent.replace(/<[^>]*>/g, ' ');

	return {
		heroes: extractIconsForEntity(
			textContent,
			heroesDb,
			ENTITY_TYPES.HERO,
			(hero) => hero.images.icon_image_small_webp
		) as { id: HeroId; src: string; alt: string; type: 'hero' }[],
		items: extractIconsForEntity(
			textContent,
			itemsDb,
			ENTITY_TYPES.ITEM,
			(item) => item.shopImage
		) as { id: ItemId; src: string; alt: string; type: 'item' }[]
	};
}

interface ParseHtmlToJsonOptions {
	heroes: readonly EnrichedHero[];
	items: readonly EnrichedItem[];
	abilities: readonly { name: string; image?: string; image_webp?: string }[];
}

function extractLines(text: string): string[] {
	return text
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line.length > 0);
}

export async function parseHtmlToJson(
	htmlContent: string,
	options: ParseHtmlToJsonOptions
): Promise<ChangelogContentJson> {
	const { heroes, items, abilities } = options;
	const result: ChangelogContentJson = {
		notes: [],
		heroes: {},
		items: {},
		abilities: {}
	};

	const doc = await getDocument(htmlContent);

	function processText(text: string) {
		if (!text || !text.trim() || /^\s*\[.*\]\s*$/.test(text)) return;

		const hasBullet = /^\s*[-•*]\s+/.test(text);
		const startsWithText = /^\s*[a-zA-Z0-9]/.test(text);
		if (!hasBullet && !startsWithText) return;

		const cleanedText = text.replace(/^\s*[-•*]\s+/, '').trim();

		if (!cleanedText.includes(':')) {
			result.notes.push(extractScalingPatterns(cleanedText));
			return;
		}

		const colonIndex = cleanedText.indexOf(':');
		const beforeColon = cleanedText.substring(0, colonIndex).trim();
		const afterColon = cleanedText.substring(colonIndex + 1).trim();

		const heroMatch = heroes.find(
			(h) => h.name.toLowerCase() === beforeColon.toLowerCase()
		);
		if (heroMatch) {
			if (!result.heroes[heroMatch.name]) {
				result.heroes[heroMatch.name] = { id: heroMatch.id, notes: [], abilities: [] };
			}
			result.heroes[heroMatch.name].notes.push(extractScalingPatterns(afterColon));
			return;
		}

		const itemMatch = items.find(
			(i) => i.name.toLowerCase() === beforeColon.toLowerCase()
		);
		if (itemMatch) {
			if (!result.items[itemMatch.name]) {
				result.items[itemMatch.name] = { id: itemMatch.id, notes: [] };
			}
			result.items[itemMatch.name].notes.push(extractScalingPatterns(afterColon));
			return;
		}

		if (!result.abilities[beforeColon]) {
			result.abilities[beforeColon] = { notes: [] };
		}
		result.abilities[beforeColon].notes.push(extractScalingPatterns(afterColon));
	}

	function processNode(node: Element) {
		const tagName = node.tagName.toLowerCase();

		if (tagName === 'ul' || tagName === 'ol') {
			const listItems = node.querySelectorAll('li');

			for (const li of listItems) {
				const text = li.textContent?.trim();
				if (text) {
					extractLines(text).forEach(processText);
				}
			}
			return;
		}

		const text = node.textContent?.trim();
		if (text) {
			extractLines(text).forEach(processText);
		}
	}

	const elements = doc.body.children;
	for (const element of [...elements]) {
		processNode(element);
	}

	for (const heroData of Object.values(result.heroes)) {
		const abilityChanges = new Map<
			string,
			{ name: string; image: string; notes: Note[] }
		>();
		const remainingNotes: Note[] = [];

		for (const note of heroData.notes) {
			let abilityFound = false;

			for (const ability of abilities) {
				if (!ability.name) continue;
				const abilityImage = ability.image_webp || ability.image;
				if (!abilityImage) continue;

				const abilityNamePattern = new RegExp(`^${escapeRegex(ability.name)}\\b`, 'i');
				if (abilityNamePattern.test(note.text)) {
					let trimmedText = note.text.replace(abilityNamePattern, '').trim();

					if (trimmedText.length > 0) {
						trimmedText = trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1);
					}

					if (!abilityChanges.has(ability.name)) {
						abilityChanges.set(ability.name, {
							name: ability.name,
							image: abilityImage,
							notes: []
						});
					}
					const abilityData = abilityChanges.get(ability.name);
					if (abilityData) {
						abilityData.notes.push({
							text: trimmedText,
							patterns: note.patterns
						});
					}

					abilityFound = true;
					break;
				}
			}

			if (!abilityFound) {
				remainingNotes.push(note);
			}
		}

		heroData.notes = remainingNotes;
		heroData.abilities = Array.from(abilityChanges.values(), (abilityData) => ({
			abilityName: abilityData.name,
			abilityImage: abilityData.image,
			notes: abilityData.notes
		}));
	}

	return changelogContentJsonSchema.parse(result);
}
