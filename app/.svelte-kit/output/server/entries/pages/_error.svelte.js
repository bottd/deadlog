import {
	O as escape_html,
	a as derived,
	d as spread_props
} from '../../chunks/server2.js';
import { p as pageMeta, s as SITE_URL } from '../../chunks/seo.js';
import { n as page, t as Icon } from '../../chunks/Icon.js';
import { t as Arrow_right } from '../../chunks/arrow-right.js';
import { t as CornerAccents } from '../../chunks/CornerAccents.js';
import { n as MetaTags } from '../../chunks/dist.js';
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/search-x.svelte
function Search_x($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'search-x',
					size: 24,
					node: [
						['path', { d: 'm13.5 8.5-5 5' }],
						['path', { d: 'm8.5 8.5 5 5' }],
						[
							'circle',
							{
								cx: '11',
								cy: '11',
								r: '8'
							}
						],
						['path', { d: 'm21 21-4.3-4.3' }]
					]
				}
			}
		])
	);
}
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/triangle-alert.svelte
function Triangle_alert($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'triangle-alert',
					size: 24,
					node: [
						[
							'path',
							{
								d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'
							}
						],
						['path', { d: 'M12 9v4' }],
						['path', { d: 'M12 17h.01' }]
					],
					aliases: ['alert-triangle']
				}
			}
		])
	);
}
//#endregion
//#region src/routes/+error.svelte
function _error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const isMissing = derived(() => page.status === 404);
		const heroCount = derived(() => page.data?.heroes?.length ?? 0);
		const itemCount = derived(() => page.data?.items?.length ?? 0);
		MetaTags(
			$$renderer,
			spread_props([
				pageMeta({
					title: 'Not found | Deadlog',
					description: 'That page is not in the Deadlog archive.',
					canonical: `${SITE_URL}${page.url.pathname}`,
					indexable: false
				})
			])
		);
		$$renderer.push(
			`<!----> <main class="container mx-auto px-4"><div class="mx-auto mt-8 mb-24 max-w-2xl"><div border="border/50 2" bg="card" relative="" p="x-6 y-12 sm:x-12" text="center" class="clip-corner overflow-hidden" role="alert">`
		);
		CornerAccents($$renderer, {
			tlSize: '2rem',
			brSize: '1.5rem',
			tlColor: 'bg-muted-foreground/30',
			brColor: 'bg-muted-foreground/20',
			thickness: '2px'
		});
		$$renderer.push(
			`<!----> <div flex="~" border="border ~" bg="muted/30" m="x-auto b-6" items="center" justify="center" class="clip-corner-sm size-20">`
		);
		if (isMissing()) {
			$$renderer.push('<!--[0-->');
			Search_x($$renderer, { class: 'text-muted-foreground size-10' });
		} else {
			$$renderer.push('<!--[-1-->');
			Triangle_alert($$renderer, { class: 'text-destructive size-10' });
		}
		$$renderer.push(
			`<!--]--></div> <h1 font="display medium" text="foreground 2xl sm:3xl" m="b-3" class="tracking-wide">${escape_html(isMissing() ? 'Not in the log' : 'That request failed')}</h1> <p text="muted-foreground" m="x-auto b-2" class="max-w-md leading-relaxed">`
		);
		if (isMissing())
			$$renderer.push(`<!--[0-->Nothing is recorded at <span text="foreground" font="mono" class="break-all">${escape_html(page.url.pathname)}</span>. Heroes and items are renamed between patches, so an older link can point at a
					name the archive no longer uses.`);
		else
			$$renderer.push(`<!--[-1-->${escape_html(page.error?.message ?? 'The page could not be loaded.')} Reloading may be enough;
					if not, the archive is still reachable below.`);
		$$renderer.push(
			`<!--]--></p> <p text="muted-foreground xs" font="mono" m="b-8" class="tracking-wide">Status ${escape_html(page.status)}</p> <nav aria-label="Recover"><ul flex="~ col sm:row" gap="2" justify="center" class="items-stretch sm:items-center"><li><a href="/heroes" class="pill-signal flex justify-center gap-1.5">Browse heroes `
		);
		if (heroCount())
			$$renderer.push(
				`<!--[0--><span text="muted-foreground xs" font="mono">${escape_html(heroCount())}</span>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--></a></li> <li><a href="/items" class="pill-signal flex justify-center gap-1.5">Browse items `
		);
		if (itemCount())
			$$renderer.push(
				`<!--[0--><span text="muted-foreground xs" font="mono">${escape_html(itemCount())}</span>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--></a></li> <li><a href="/archive" class="pill-signal flex justify-center gap-1.5">Complete archive `
		);
		Arrow_right($$renderer, { class: 'size-3.5' });
		$$renderer.push(
			`<!----></a></li></ul></nav> <p text="muted-foreground sm" m="t-8">Or search for a hero or item from the bar above.</p></div></div></main>`
		);
	});
}
//#endregion
export { _error as default };
