export const HERO_IMAGE_KEYS = {
	card: [
		'icon_hero_card_webp',
		'icon_hero_card',
		'icon_image_small_webp',
		'icon_image_small'
	],
	icon: ['icon_image_small_webp', 'icon_image_small']
} as const;

export function heroImage(
	images: Record<string, string>,
	kind: keyof typeof HERO_IMAGE_KEYS = 'card'
): string {
	return (
		HERO_IMAGE_KEYS[kind].map((key) => images[key]).find(Boolean) ??
		Object.values(images).find(Boolean) ??
		''
	);
}
