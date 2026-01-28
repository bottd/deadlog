import type { EnrichedHero, EnrichedItem } from '@deadlog/scraper';

export function getHeroImage(hero: EnrichedHero): string {
	return Object.values(hero.images)[0] as string;
}

export function getItemImage(item: EnrichedItem): string {
	return item.shopImage || item.image;
}

export function getHeroImageFromMap(
	heroId: number | undefined,
	heroMap: Record<number, { name: string; images: Record<string, string> }>
): string | undefined {
	if (!heroId || !heroMap[heroId]) return undefined;
	const images = heroMap[heroId].images;
	return (
		images.icon_image_small_webp || images.icon_image_small || Object.values(images)[0]
	);
}

export function getItemImageFromMap(
	itemId: number | undefined,
	itemMap: Record<number, { name: string; image: string }>
): string | undefined {
	if (!itemId || !itemMap[itemId]) return undefined;
	return itemMap[itemId].image;
}
