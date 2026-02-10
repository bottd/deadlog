import type { EnrichedHero, EnrichedItem } from '@deadlog/scraper';

export function getHeroImage(hero: EnrichedHero): string {
	return Object.values(hero.images)[0] as string;
}

export function getItemImage(item: EnrichedItem): string {
	return item.shopImage || item.image;
}
