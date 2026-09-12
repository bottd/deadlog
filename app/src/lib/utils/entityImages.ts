import type { EnrichedHero, EnrichedItem } from '@deadlog/db';
import { heroImage } from '@deadlog/utils';

/** The global search needs one image per hero, not the upstream image catalogue. */
export function pickHeroImages(images: Record<string, string>): Record<string, string> {
	return { card: heroImage(images) };
}

export function getHeroCardImage(hero: EnrichedHero): string {
	return heroImage(hero.images);
}

export function getItemImage(item: EnrichedItem): string {
	return item.image;
}

export function entityImage(entity: EnrichedHero | EnrichedItem): string {
	return 'images' in entity ? getHeroCardImage(entity) : getItemImage(entity);
}
