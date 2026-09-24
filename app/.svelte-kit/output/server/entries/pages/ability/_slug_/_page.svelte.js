import { a as derived } from '../../../../chunks/server2.js';
import { t as EntityChangelogPage } from '../../../../chunks/EntityChangelogPage.js';
//#region src/routes/ability/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const ability = derived(() => data.ability);
		const hero = derived(() => data.hero);
		const accent = derived(() =>
			hero().heroType ? `var(--type-${hero().heroType})` : 'var(--signal)'
		);
		const entity = derived(() => ({
			type: 'ability',
			name: ability().name,
			image: ability().image
		}));
		EntityChangelogPage($$renderer, {
			entity: entity(),
			accent: accent(),
			parent: {
				name: hero().name,
				slug: hero().slug,
				image: hero().image
			},
			changelogs: data.changelogs,
			abilities: data.abilities,
			about: data.about,
			currentAbilitySlug: ability().slug,
			label: `${hero().name} ability`,
			seo: {
				path: `/ability/${ability().slug}`,
				title: data.title,
				description: data.description,
				image: data.image,
				indexable: true
			}
		});
	});
}
//#endregion
export { _page as default };
