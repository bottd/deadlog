import { o as e, s as t } from './CSrylp8p.js';
import './Cips59vp.js';
import './xihTtKlq.js';
import { t as n } from './CfafoLPj.js';
import './bGGqeocG.js';
var r = new Set([`$$slots`, `$$events`, `$$legacy`]);
function i(i, a) {
	let o = e(a, r),
		s = {
			name: `search`,
			size: 24,
			node: [
				[`path`, { d: `m21 21-4.34-4.34` }],
				[`circle`, { cx: `11`, cy: `11`, r: `8` }]
			]
		};
	n(
		i,
		t(() => o, {
			get icon() {
				return s;
			}
		})
	);
}
var a = {
	card: [
		`icon_hero_card_webp`,
		`icon_hero_card`,
		`icon_image_small_webp`,
		`icon_image_small`
	],
	icon: [`icon_image_small_webp`, `icon_image_small`]
};
function o(e, t = `card`) {
	return a[t].map((t) => e[t]).find(Boolean) ?? Object.values(e).find(Boolean) ?? ``;
}
function s(e) {
	return o(e.images);
}
function c(e) {
	return e.image;
}
function l(e) {
	return `images` in e ? s(e) : c(e);
}
export { i, s as n, c as r, l as t };
