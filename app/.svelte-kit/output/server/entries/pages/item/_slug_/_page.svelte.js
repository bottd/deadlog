import { O as escape_html, a as derived } from '../../../../chunks/server2.js';
import { t as EntityChangelogPage } from '../../../../chunks/EntityChangelogPage.js';
//#region src/routes/item/[slug]/+page.svelte
var ITEM_CATEGORY_META = {
	weapon: {
		label: 'Weapon item',
		accent: 'var(--item-weapon)'
	},
	vitality: {
		label: 'Vitality item',
		accent: 'var(--item-vitality)'
	},
	spirit: {
		label: 'Spirit item',
		accent: 'var(--item-spirit)'
	}
};
var UNCLASSIFIED_ITEM_META = {
	label: 'Item',
	accent: 'var(--signal)'
};
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const item = derived(() => data.item);
		const categoryMeta = derived(() =>
			item().category ? ITEM_CATEGORY_META[item().category] : UNCLASSIFIED_ITEM_META
		);
		const entity = derived(() => ({
			type: 'item',
			name: item().name,
			image: item().image
		}));
		{
			function labelSuffix($$renderer) {
				if (item().tier)
					$$renderer.push(
						`<!--[0--><span text="muted-foreground" kicker-xs="">/ Tier ${escape_html(item().tier)}</span>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]-->`);
			}
			EntityChangelogPage($$renderer, {
				entity: entity(),
				changelogs: data.changelogs,
				about: data.about,
				accent: categoryMeta().accent,
				label: item().isReleased
					? categoryMeta().label
					: `Historical ${categoryMeta().label.toLowerCase()}`,
				seo: {
					path: `/item/${item().slug}`,
					title: data.title,
					description: data.description,
					image: data.image,
					indexable: item().isReleased
				},
				labelSuffix,
				$$slots: { labelSuffix: true }
			});
		}
	});
}
//#endregion
export { _page as default };
