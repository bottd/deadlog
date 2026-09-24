import { a as derived } from '../../../../chunks/server2.js';
import { t as EntityChangelogPage } from '../../../../chunks/EntityChangelogPage.js';
//#region src/routes/hero/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const hero = derived(() => data.hero);
		const accent = derived(() =>
			hero().heroType ? `var(--type-${hero().heroType})` : 'var(--signal)'
		);
		const entity = derived(() => ({
			type: 'hero',
			name: hero().name,
			image: hero().image
		}));
		EntityChangelogPage($$renderer, {
			entity: entity(),
			accent: accent(),
			changelogs: data.changelogs,
			abilities: data.abilities,
			contexts: data.contexts,
			label: hero().heroType ? `${hero().heroType} hero` : 'Hero profile',
			seo: {
				path: `/hero/${hero().slug}`,
				title: data.title,
				description: data.description,
				image: data.image,
				indexable: hero().isReleased
			}
		});
	});
}
//#endregion
export { _page as default };
