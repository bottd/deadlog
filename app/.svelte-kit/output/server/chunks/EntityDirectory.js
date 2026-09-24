import {
	O as escape_html,
	T as attr,
	a as derived,
	d as spread_props,
	f as stringify,
	s as ensure_array_like,
	t as attr_class
} from './server2.js';
import { l as isItemCategory, t as ITEM_CATEGORIES } from './src2.js';
import {
	a as SITE_NAME,
	c as absoluteUrl,
	d as collectionPageSchema,
	n as DEFAULT_SOCIAL_IMAGE,
	p as pageMeta,
	r as ENTITY_LISTING,
	t as DEADLOCK_GAME
} from './seo.js';
import { t as Search } from './navigation.js';
import { n as MetaTags, t as JsonLd } from './dist.js';
import { t as shallowParams } from './shallowParams.svelte.js';
//#region src/lib/components/entity/EntityDirectory.svelte
function releasedByName(entities) {
	return entities
		.filter((entity) => entity.isReleased)
		.sort((a, b) => a.name.localeCompare(b.name));
}
function EntityDirectory($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { kind, heading, lede, entries, seo } = $$props;
		const listing = derived(() => ENTITY_LISTING[kind]);
		const canonical = derived(() => absoluteUrl(listing().path));
		const params = shallowParams({
			name: 250,
			category: 0
		});
		const category = derived(() =>
			kind === 'item' && isItemCategory(params.category) ? params.category : ''
		);
		const needle = derived(() => params.name.trim().toLowerCase());
		const searchable = derived(() =>
			entries.map((entry) => ({
				...entry,
				haystack: entry.name.toLowerCase()
			}))
		);
		const filtered = derived(() =>
			searchable().filter(
				(entry) =>
					entry.haystack.includes(needle()) &&
					(!category() || entry.category === category())
			)
		);
		MetaTags(
			$$renderer,
			spread_props([
				pageMeta({
					title: seo.title,
					description: seo.description,
					canonical: canonical()
				})
			])
		);
		$$renderer.push(`<!----> `);
		JsonLd($$renderer, {
			schema: collectionPageSchema({
				canonical: canonical(),
				title: seo.title,
				description: seo.description,
				image: DEFAULT_SOCIAL_IMAGE,
				about: [DEADLOCK_GAME],
				items: entries.map((entry) => ({
					name: entry.name,
					url: absoluteUrl(entry.href)
				})),
				breadcrumbs: [
					{
						name: SITE_NAME,
						path: '/'
					},
					{
						name: listing().label,
						path: listing().path
					}
				]
			})
		});
		$$renderer.push(`<!----> <main class="container mx-auto mt-8 mb-24 max-w-6xl px-4"><header class="mb-6"><div class="flex items-baseline gap-3"><h1 class="font-display text-foreground text-4xl font-medium tracking-wide sm:text-5xl">${escape_html(heading)}</h1> <span${attr('id', `${stringify(kind)}-directory-count`)} class="text-muted-foreground font-mono text-xs" role="status">${escape_html(filtered().length)}${escape_html(params.name || category() ? ` / ${entries.length}` : '')}
				${escape_html(listing().label.toLowerCase())}</span></div> <p class="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">${escape_html(lede)}</p> <div class="js-only mt-5 flex flex-wrap items-center gap-3"><div class="border-border bg-card focus-within:border-signal relative w-full max-w-md rounded-md border"><label${attr('for', `${stringify(kind)}-directory-search`)} class="sr-only">Filter ${escape_html(listing().label.toLowerCase())} by name</label> `);
		Search($$renderer, {
			class:
				'text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2'
		});
		$$renderer.push(
			`<!----> <input${attr('id', `${stringify(kind)}-directory-search`)} type="search"${attr('value', params.name)}${attr('aria-describedby', `${stringify(kind)}-directory-count`)}${attr('placeholder', `Find ${kind === 'hero' ? 'a hero' : 'an item'}…`)} class="placeholder:text-muted-foreground min-h-11 w-full bg-transparent py-2 pr-3 pl-10 text-base outline-none"/></div> `
		);
		if (kind === 'item') {
			$$renderer.push(
				`<!--[0--><div class="flex flex-wrap gap-1" role="group" aria-label="Item category"><!--[-->`
			);
			const each_array = ensure_array_like(['', ...ITEM_CATEGORIES]);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let value = each_array[$$index];
				$$renderer.push(
					`<button type="button"${attr('aria-pressed', category() === value)} class="ui-focus-ring text-muted-foreground min-h-11 rounded-md px-3 text-sm capitalize idle-hover:text-foreground selected:bg-signal/10 selected:text-signal">${escape_html(value || 'All')}</button>`
				);
			}
			$$renderer.push(`<!--]--></div>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--></div></header> <section${attr('aria-label', `${stringify(listing().label)} directory`)}>`
		);
		if (filtered().length) {
			$$renderer.push(
				`<!--[0--><ul class="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"><!--[-->`
			);
			const each_array_1 = ensure_array_like(filtered());
			for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
				let entry = each_array_1[index];
				$$renderer.push(
					`<li><a${attr('href', entry.href)} class="clip-corner-sm border-subtle bg-card hover:border-signal/60 flex h-full min-h-24 flex-col items-start gap-3 border p-3 transition-colors sm:flex-row sm:items-center"><img${attr('src', entry.image)} alt="" width="48" height="48"${attr('loading', index < 10 ? 'eager' : 'lazy')} decoding="async"${attr_class(`bg-background size-12 shrink-0 rounded-md ${kind === 'item' ? 'object-contain p-1' : 'object-cover'}`)}/> <div class="min-w-0"><h2 class="text-foreground text-sm leading-snug font-semibold break-words">${escape_html(entry.name)}</h2> `
				);
				if (entry.subtitle)
					$$renderer.push(
						`<!--[0--><p class="text-muted-foreground mt-1 font-mono text-xs capitalize">${escape_html(entry.subtitle)}</p>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--></div></a></li>`);
			}
			$$renderer.push(`<!--]--></ul>`);
		} else
			$$renderer.push(
				`<!--[-1--><div class="border-subtle border-t py-8" role="status"><p class="text-muted-foreground text-sm">No ${escape_html(listing().label.toLowerCase())} match ${escape_html(params.name ? `“${params.name}”` : 'this category')}${escape_html(params.name && category() ? ` in ${category()}` : '')}.</p> <button type="button" class="ui-focus-ring text-signal mt-2 min-h-11 rounded-sm text-sm hover:underline">Clear directory filters</button></div>`
			);
		$$renderer.push(`<!--]--></section></main>`);
	});
}
//#endregion
export { releasedByName as n, EntityDirectory as t };
