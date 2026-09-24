import './src2.js';
import { n as heroImage } from './entityImages.js';
//#region src/lib/utils/entityImages.ts
/** The global search needs one image per hero, not the upstream image catalogue. */
function pickHeroImages(images) {
	return { card: heroImage(images) };
}
function getHeroCardImage(hero) {
	return heroImage(hero.images);
}
function getItemImage(item) {
	return item.image;
}
function entityImage(entity) {
	return 'images' in entity ? getHeroCardImage(entity) : getItemImage(entity);
}
//#endregion
export {
	pickHeroImages as i,
	getHeroCardImage as n,
	getItemImage as r,
	entityImage as t
};
