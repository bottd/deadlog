import { d as spread_props } from './server2.js';
import { t as Icon } from './Icon.js';
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/external-link.svelte
function External_link($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'external-link',
					size: 24,
					node: [
						['path', { d: 'M15 3h6v6' }],
						['path', { d: 'M10 14 21 3' }],
						['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }]
					]
				}
			}
		])
	);
}
//#endregion
export { External_link as t };
