import type { EnrichedHero, EnrichedItem } from '@deadlog/scraper';

/**
 * The hero image keys this module reads, in preference order. The database stores 15
 * per hero (minimap, backgrounds, gloat cards…); the rest are dead weight on the wire.
 */
const HERO_CARD_KEYS = [
	'icon_hero_card_webp',
	'icon_hero_card',
	'icon_image_small_webp',
	'icon_image_small'
] as const;

/** Order is preserved so getHeroCardImage's first-value pick still lands on card art. */
export function pickHeroImages(images: Record<string, string>): Record<string, string> {
	const picked = HERO_CARD_KEYS.filter((key) => images[key]).map(
		(key) => [key, images[key]] as const
	);
	// A hero with none of the expected keys still needs something to render.
	return Object.fromEntries(picked.length ? picked : Object.entries(images).slice(0, 1));
}

/**
 * Idempotent, so it is also correct for the already-narrowed heroes the layout load
 * sends to the client — insertion order survives Object.fromEntries.
 */
export function getHeroCardImage(hero: EnrichedHero): string {
	return Object.values(pickHeroImages(hero.images))[0] ?? '';
}

export function getItemImage(item: EnrichedItem): string {
	return item.image;
}
