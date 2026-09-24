import {
	O as escape_html,
	T as attr,
	a as derived,
	d as spread_props,
	f as stringify,
	s as ensure_array_like
} from '../../../chunks/server2.js';
import { a as formatDate, c as formatYear } from '../../../chunks/src2.js';
import {
	a as SITE_NAME,
	c as absoluteUrl,
	d as collectionPageSchema,
	n as DEFAULT_SOCIAL_IMAGE,
	p as pageMeta,
	t as DEADLOCK_GAME
} from '../../../chunks/seo.js';
import { n as MetaTags, t as JsonLd } from '../../../chunks/dist.js';
//#region src/routes/archive/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const title = 'Deadlock Patch Archive | Deadlog';
		const description = 'Browse every recorded Deadlock patch in chronological order.';
		const canonical = absoluteUrl('/archive');
		const years = derived(() => [
			...data.patches.reduce((groups, patch) => {
				const year = formatYear(patch.pubDate);
				const group = groups.get(year);
				if (group) group.push(patch);
				else groups.set(year, [patch]);
				return groups;
			}, /* @__PURE__ */ new Map())
		]);
		MetaTags(
			$$renderer,
			spread_props([
				pageMeta({
					title,
					description,
					canonical
				})
			])
		);
		$$renderer.push(`<!----> `);
		JsonLd($$renderer, {
			schema: collectionPageSchema({
				canonical,
				title,
				description,
				image: DEFAULT_SOCIAL_IMAGE,
				dateModified: data.patches[0]?.pubDate,
				about: [DEADLOCK_GAME],
				items: data.patches.map((patch) => ({
					name: patch.title,
					url: absoluteUrl(`/change/${patch.slug}`)
				})),
				breadcrumbs: [
					{
						name: SITE_NAME,
						path: '/'
					},
					{
						name: 'Patch archive',
						path: '/archive'
					}
				]
			})
		});
		$$renderer.push(
			`<!----> <main class="container mx-auto mt-8 mb-24 max-w-3xl px-4"><header class="mb-8"><h1 class="font-display text-foreground text-4xl font-medium tracking-wide">Patch archive</h1> <p class="text-muted-foreground mt-2 text-sm">Every recorded patch, newest first. ${escape_html(data.patches.length)} patches.</p></header> <!--[-->`
		);
		const each_array = ensure_array_like(years());
		for (
			let $$index_1 = 0, $$length = each_array.length;
			$$index_1 < $$length;
			$$index_1++
		) {
			let [year, patches] = each_array[$$index_1];
			$$renderer.push(
				`<section${attr('aria-labelledby', `year-${stringify(year)}`)} class="mb-10"><h2${attr('id', `year-${stringify(year)}`)} class="text-signal mb-3 font-mono text-lg">${escape_html(year)}</h2> <ul class="divide-subtle divide-y"><!--[-->`
			);
			const each_array_1 = ensure_array_like(patches);
			for (
				let $$index = 0, $$length = each_array_1.length;
				$$index < $$length;
				$$index++
			) {
				let patch = each_array_1[$$index];
				$$renderer.push(
					`<li><a${attr('href', `/change/${stringify(patch.slug)}`)} class="ui-focus-ring hover:text-primary flex min-h-11 flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-sm py-3 text-sm"><span>${escape_html(patch.title)}</span> <time${attr('datetime', patch.pubDate)} class="text-muted-foreground text-xs">${escape_html(formatDate(patch.pubDate))}</time></a></li>`
				);
			}
			$$renderer.push(`<!--]--></ul></section>`);
		}
		$$renderer.push(`<!--]--></main>`);
	});
}
//#endregion
export { _page as default };
