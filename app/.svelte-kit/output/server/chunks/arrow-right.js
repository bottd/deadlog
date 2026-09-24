import { d as spread_props } from './server2.js';
import { t as Icon } from './Icon.js';
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/arrow-right.svelte
function Arrow_right($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'arrow-right',
					size: 24,
					node: [
						['path', { d: 'M5 12h14' }],
						['path', { d: 'm12 5 7 7-7 7' }]
					]
				}
			}
		])
	);
}
//#endregion
export { Arrow_right as t };
