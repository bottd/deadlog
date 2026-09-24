import { a as derived } from '../../../chunks/server2.js';
import { r as getItemImage } from '../../../chunks/entityImages2.js';
import {
	n as releasedByName,
	t as EntityDirectory
} from '../../../chunks/EntityDirectory.js';
//#region src/routes/items/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const entries = derived(() =>
			releasedByName(data.items ?? []).map((item) => ({
				id: item.id,
				name: item.name,
				href: `/item/${item.slug}`,
				image: getItemImage(item),
				subtitle: item.category,
				category: item.category
			}))
		);
		EntityDirectory($$renderer, {
			kind: 'item',
			heading: 'Items',
			lede: 'Find an item to trace its balance changes across the patch archive.',
			entries: entries(),
			seo: {
				title: 'Deadlock Items: Balance Change History | Deadlog',
				description:
					'Browse every released Deadlock item and open a complete history of buffs, nerfs, and balance changes from official patch notes.'
			}
		});
	});
}
//#endregion
export { _page as default };
