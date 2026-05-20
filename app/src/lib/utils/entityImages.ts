import type { EnrichedHero, EnrichedItem } from '@deadlog/scraper';

const HERO_CARD_KEYS = [
	'icon_hero_card_webp',
	'icon_hero_card',
	'icon_image_small_webp',
	'icon_image_small'
] as const;

export function getHeroImage(hero: EnrichedHero): string {
	return Object.values(hero.images)[0] as string;
}

export function getHeroCardImage(hero: EnrichedHero): string {
	for (const key of HERO_CARD_KEYS) {
		const url = hero.images[key];
		if (url) return url;
	}
	return Object.values(hero.images)[0] ?? '';
}

export function getItemImage(item: EnrichedItem): string {
	return item.shopImage ?? item.image;
}
