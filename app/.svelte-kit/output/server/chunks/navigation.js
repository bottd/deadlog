import { d as spread_props } from './server2.js';
import { t as Icon } from './Icon.js';
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/search.svelte
function Search($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'search',
					size: 24,
					node: [
						['path', { d: 'm21 21-4.34-4.34' }],
						[
							'circle',
							{
								cx: '11',
								cy: '11',
								r: '8'
							}
						]
					]
				}
			}
		])
	);
}
//#endregion
export { Search as t };
