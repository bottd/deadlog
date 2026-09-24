//#region ../lib/utils/src/entityImages.ts
var HERO_IMAGE_KEYS = {
	card: [
		'icon_hero_card_webp',
		'icon_hero_card',
		'icon_image_small_webp',
		'icon_image_small'
	],
	icon: ['icon_image_small_webp', 'icon_image_small']
};
function heroImage(images, kind = 'card') {
	return (
		HERO_IMAGE_KEYS[kind].map((key) => images[key]).find(Boolean) ??
		Object.values(images).find(Boolean) ??
		''
	);
}
//#endregion
export { heroImage as n, HERO_IMAGE_KEYS as t };
