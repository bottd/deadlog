import { a as derived } from '../../../chunks/server2.js';
import { n as getHeroCardImage } from '../../../chunks/entityImages2.js';
import {
	n as releasedByName,
	t as EntityDirectory
} from '../../../chunks/EntityDirectory.js';
//#region src/routes/heroes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const entries = derived(() =>
			releasedByName(data.heroes ?? []).map((hero) => ({
				id: hero.id,
				name: hero.name,
				href: `/hero/${hero.slug}`,
				image: getHeroCardImage(hero),
				subtitle: hero.heroType
			}))
		);
		EntityDirectory($$renderer, {
			kind: 'hero',
			heading: 'Heroes',
			lede: 'Find a hero to read every recorded buff, nerf, and balance change.',
			entries: entries(),
			seo: {
				title: 'Deadlock Heroes: Balance Change History | Deadlog',
				description:
					'Browse every released Deadlock hero and open a complete history of buffs, nerfs, and balance changes from official patch notes.'
			}
		});
	});
}
//#endregion
export { _page as default };
