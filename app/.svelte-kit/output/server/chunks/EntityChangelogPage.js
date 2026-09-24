import {
	E as clsx,
	O as escape_html,
	T as attr,
	a as derived,
	d as spread_props,
	f as stringify,
	n as attr_style,
	s as ensure_array_like,
	t as attr_class
} from './server2.js';
import {
	a as formatDate,
	c as formatYear,
	f as plural,
	m as toSlug,
	r as countBullets
} from './src2.js';
import { t as RecentPatches } from './changelog.js';
import {
	c as absoluteUrl,
	f as entityCollectionSchema,
	p as pageMeta,
	r as ENTITY_LISTING
} from './seo.js';
import { N as changeCountLabel, P as entityPatchHref } from './context.js';
import { t as Arrow_right } from './arrow-right.js';
import { t as CornerAccents } from './CornerAccents.js';
import { n as MetaTags, t as JsonLd } from './dist.js';
import {
	a as Chevron_right,
	i as EntityContext,
	n as BuyTimeBlock,
	o as PreviousChangeLink,
	r as ShareBlock,
	t as StatsBand
} from './StatsBand.js';
import { t as Arrow_left } from './arrow-left.js';
import { t as MethodNote } from './MethodNote.js';
import { t as shallowParams } from './shallowParams.svelte.js';
//#region src/lib/components/entity/EntityHistoryToc.svelte
function EntityHistoryToc($$renderer, $$props) {
	let { years, onnavigate } = $$props;
	$$renderer.push(
		`<nav class="toc-panel clip-corner-sm" aria-label="Change history contents"><div bg="signal/50" m="b-4" h="px" w="8" aria-hidden="true"></div> <p text="muted-foreground" m="b-4" font="bold" class="kicker-xs tracking-[0.2em]">History</p> <div class="space-y-1"><!--[-->`
	);
	const each_array = ensure_array_like(years);
	for (
		let $$index_1 = 0, $$length = each_array.length;
		$$index_1 < $$length;
		$$index_1++
	) {
		let [year, patches] = each_array[$$index_1];
		$$renderer.push(
			`<div class="toc-group"><a${attr('href', `#year-${stringify(year)}`)} class="toc-section font-mono"><span class="toc-marker" aria-hidden="true"></span> ${escape_html(year)} <span class="toc-count">${escape_html(patches.length)}</span></a> <ul class="mt-0.5 list-none space-y-px"><!--[-->`
		);
		const each_array_1 = ensure_array_like(patches);
		for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
			let patch = each_array_1[$$index];
			$$renderer.push(
				`<li><a${attr('href', `#history-${stringify(patch.id)}`)} class="toc-entry toc-link svelte-665ne9"><span truncate="">${escape_html(patch.label)}</span> `
			);
			if (patch.changeCount !== null)
				$$renderer.push(
					`<!--[0--><span class="toc-entry-count svelte-665ne9">${escape_html(patch.changeCount)}</span>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--></a></li>`);
		}
		$$renderer.push(`<!--]--></ul></div>`);
	}
	$$renderer.push(`<!--]--></div></nav>`);
}
//#endregion
//#region src/lib/components/entity/RelatedItemChanges.svelte
function RelatedItemChanges($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { related, heroName, windows } = $$props;
		$$renderer.push(`<div data-related-items="">`);
		ShareBlock($$renderer, {
			kind: 'related',
			subject: heroName,
			rows: related.items,
			windows,
			children: ($$renderer) => {
				$$renderer.push(
					`<details class="mt-1 text-sm svelte-j8sh2x" data-related-notes=""><summary class="ui-focus-ring text-muted-foreground flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-sm svelte-j8sh2x">`
				);
				Chevron_right($$renderer, {
					'aria-hidden': 'true',
					class: 'details-marker size-3.5 shrink-0'
				});
				$$renderer.push(
					`<!----> ${escape_html(`Their notes · ${related.items.length} ${plural(related.items.length, 'item')}`)}</summary> <div class="space-y-3 pb-2 pl-5.5"><!--[-->`
				);
				const each_array = ensure_array_like(related.items);
				for (
					let $$index_2 = 0, $$length = each_array.length;
					$$index_2 < $$length;
					$$index_2++
				) {
					let item = each_array[$$index_2];
					$$renderer.push(
						`<div><h6 class="text-foreground flex items-center gap-2 text-sm font-semibold"><img${attr('src', item.image)} alt="" width="20" height="20" loading="lazy" decoding="async" class="size-5 shrink-0 object-contain"/>${escape_html(item.name)}</h6> <!--[-->`
					);
					const each_array_1 = ensure_array_like(item.groups);
					for (
						let groupIndex = 0, $$length = each_array_1.length;
						groupIndex < $$length;
						groupIndex++
					) {
						let group = each_array_1[groupIndex];
						$$renderer.push(
							`<ul class="marker:text-muted-foreground mt-1 ml-4 list-disc space-y-1.5 leading-relaxed"><!--[-->`
						);
						const each_array_2 = ensure_array_like(group.bullets);
						for (
							let index = 0, $$length = each_array_2.length;
							index < $$length;
							index++
						) {
							let bullet = each_array_2[index];
							$$renderer.push(`<li class="pl-1">${escape_html(bullet)}</li>`);
						}
						$$renderer.push(`<!--]--></ul>`);
					}
					$$renderer.push(`<!--]--></div>`);
				}
				$$renderer.push(`<!--]--></div></details>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
//#region src/lib/components/entity/EntityChangelogPage.svelte
function EntityChangelogPage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			entity,
			parent,
			accent,
			label,
			changelogs,
			abilities = [],
			contexts = {},
			about,
			currentAbilitySlug,
			labelSuffix,
			seo
		} = $$props;
		const abilityLinkMode = derived(() => entity.type === 'ability');
		function groupContext(group) {
			if (!group.ability || !group.abilitySlug) return null;
			if (toSlug(group.ability) !== group.abilitySlug) return null;
			return contexts[group.abilitySlug] ?? null;
		}
		const hasContexts = derived(() => Object.keys(contexts).length > 0);
		const contextVersion = derived(
			() => about?.clientVersion ?? Object.values(contexts)[0]?.clientVersion ?? null
		);
		const railChip =
			'ui-focus-ring border-subtle bg-card text-foreground flex min-h-11 items-center gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors idle-hover:border-signal/60 selected:border-signal selected:bg-signal/10 selected:text-signal';
		const params = shallowParams({ ability: 0 });
		const selectedAbility = derived(
			() => abilities.find((ability) => ability.slug === params.ability) ?? null
		);
		const visibleChangelogs = derived(() => {
			if (!selectedAbility()) return changelogs;
			return changelogs.flatMap((patch) => {
				const changeGroups =
					patch.changeGroups?.filter(
						(group) => group.abilitySlug === selectedAbility().slug
					) ?? [];
				return changeGroups.length
					? [
							{
								...patch,
								changeGroups,
								changeCount: countBullets(changeGroups)
							}
						]
					: [];
			});
		});
		const readings = derived(() => ({
			related: changelogs.some((patch) => patch.related),
			maxedFirst: changelogs.some((patch) => patch.maxedFirst?.length),
			boughtBy: changelogs.some((patch) => patch.boughtBy?.length),
			buyTime: changelogs.some((patch) => patch.buyTime)
		}));
		const hasPrevious = derived(() =>
			changelogs.some((patch) =>
				patch.changeGroups?.some((group) => group.previous?.some(Boolean))
			)
		);
		const latestStats = derived(
			() => changelogs.find((patch) => patch.stats)?.stats ?? null
		);
		const historyYears = derived(() => [
			...visibleChangelogs().reduce((groups, patch) => {
				const year = formatYear(patch.date);
				const group = groups.get(year);
				if (group) group.push(patch);
				else groups.set(year, [patch]);
				return groups;
			}, /* @__PURE__ */ new Map())
		]);
		const showToc = derived(() => visibleChangelogs().length >= 6);
		const tocYears = derived(() =>
			historyYears().map(([year, patches]) => [
				year,
				patches.map((patch) => ({
					id: patch.id,
					label: formatDate(patch.date),
					changeCount: patch.changeCount
				}))
			])
		);
		const listing = derived(() => ENTITY_LISTING[entity.type]);
		const latest = derived(() => changelogs[0]);
		const oldest = derived(() => changelogs.at(-1));
		const changes = derived(() => {
			const counted = changelogs.filter((patch) => patch.changeCount !== null);
			const total = counted.reduce((sum, patch) => sum + (patch.changeCount ?? 0), 0);
			const unknown = changelogs.length - counted.length;
			return {
				unknown,
				value: unknown === 0 ? String(total) : counted.length ? `${total}+` : null
			};
		});
		MetaTags(
			$$renderer,
			spread_props([
				pageMeta({
					title: seo.title,
					description: seo.description,
					canonical: absoluteUrl(seo.path),
					image: seo.image,
					indexable: seo.indexable
				})
			])
		);
		$$renderer.push(`<!----> `);
		if (seo.indexable) {
			$$renderer.push('<!--[0-->');
			JsonLd($$renderer, {
				schema: entityCollectionSchema({
					entity,
					parent: parent
						? {
								name: parent.name,
								path: `/hero/${parent.slug}`
							}
						: void 0,
					path: seo.path,
					title: seo.title,
					description: seo.description,
					image: seo.image,
					changelogs
				})
			});
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--> <main class="container mx-auto mt-6 mb-24 max-w-4xl px-4 sm:mt-8 xl:max-w-6xl"><div class="xl:flex xl:gap-8"><div class="min-w-0 xl:flex-1"><a${attr('href', listing().path)} class="ui-focus-ring text-muted-foreground hover:text-signal mb-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm">`
		);
		Arrow_left($$renderer, { class: 'size-4' });
		$$renderer.push(
			`<!----> Back to ${escape_html(listing().label.toLowerCase())}</a> <header class="border-subtle mb-6 border-b pb-5"><div class="flex items-start gap-4">`
		);
		if (entity.image)
			$$renderer.push(
				`<!--[0--><img${attr('src', entity.image)} alt="" width="80" height="80" decoding="async" fetchpriority="high"${attr_class(`clip-corner-sm bg-card size-16 shrink-0 border sm:size-20 ${entity.type === 'item' ? 'object-contain p-2' : 'object-cover'}`)}${attr_style('', { 'border-color': accent })}/>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> <div class="min-w-0">`);
		if (parent)
			$$renderer.push(
				`<!--[0--><p class="mb-1 font-mono text-xs"><a${attr('href', `/hero/${stringify(parent.slug)}`)} class="ui-focus-ring text-muted-foreground hover:text-foreground rounded-sm underline-offset-4 hover:underline">${escape_html(parent.name)}</a></p>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--> <h1 class="font-display text-foreground text-4xl leading-tight font-medium tracking-wide break-words sm:text-5xl">${escape_html(entity.name)}</h1> <p class="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs capitalize"${attr_style('', { color: accent })}><span>${escape_html(label)}</span> `
		);
		labelSuffix?.($$renderer);
		$$renderer.push(`<!----></p> `);
		if (latest())
			$$renderer.push(
				`<!--[0--><p class="text-muted-foreground mt-3 text-sm">${escape_html(latest().changeCount === null ? 'Last mentioned' : 'Last changed')} <a${attr('href', entityPatchHref(latest(), entity))} class="text-foreground underline-offset-4 hover:underline"><time${attr('datetime', latest().date.toISOString())}>${escape_html(formatDate(latest().date))}</time></a></p>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--></div></div> `);
		if (about) {
			$$renderer.push(`<!--[0--><div class="mt-3">`);
			EntityContext($$renderer, {
				context: about,
				name: entity.name,
				variant: 'header'
			});
			$$renderer.push(`<!----></div>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--> <details${attr_class(clsx(about ? '' : 'mt-3'))}><summary class="ui-focus-ring text-muted-foreground w-fit cursor-pointer rounded-sm py-3 text-sm">${escape_html(`${changelogs.length} ${plural(changelogs.length, 'patch', 'patches')}${changes().value === null ? '' : ` · ${changes().value} changes`}`)} <span class="ml-2 text-xs">Archive details</span></summary> <div class="space-y-4 pt-2">`
		);
		if (oldest())
			$$renderer.push(
				`<!--[0--><p class="text-muted-foreground text-sm">First recorded: <time${attr('datetime', oldest().date.toISOString())}>${escape_html(formatDate(oldest().date))}</time>.</p>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> `);
		if (changes().unknown > 0)
			$$renderer.push(`<!--[0--><p class="text-muted-foreground text-sm">${escape_html(changes().unknown)}
								${escape_html(plural(changes().unknown, 'patch', 'patches'))} mention ${escape_html(entity.name)} without
								a separate change count.</p>`);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> `);
		RecentPatches($$renderer, {
			patches: changelogs,
			entity
		});
		$$renderer.push(`<!----> `);
		if (abilities.some((ability) => ability.description)) {
			$$renderer.push(
				`<!--[0--><div><h2 class="mb-3 text-sm font-semibold">Ability descriptions</h2> <dl class="max-w-[72ch] space-y-3 text-sm leading-relaxed"><!--[-->`
			);
			const each_array = ensure_array_like(abilities);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let ability = each_array[$$index];
				if (ability.description)
					$$renderer.push(
						`<!--[0--><div><dt class="font-semibold">${escape_html(ability.name)}</dt> <dd class="text-muted-foreground mt-1">${escape_html(ability.description)}</dd></div>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></dl></div>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--></div></details></header> `);
		if (abilities.length) {
			$$renderer.push('<!--[0-->');
			function railEntry($$renderer, ability) {
				$$renderer.push(
					`<img${attr('src', ability.image)} alt="" width="24" height="24" loading="lazy" decoding="async" class="size-6 rounded object-cover"/> ${escape_html(ability.name)}`
				);
			}
			$$renderer.push(
				`<section aria-label="Abilities"${attr_class(`mb-6 ${abilityLinkMode() ? '' : 'js-only'}`)}><p class="text-muted-foreground mb-2 text-sm">${escape_html(abilityLinkMode() ? 'Other abilities' : 'Filter by ability')}</p> <div class="flex flex-wrap gap-2"><!--[-->`
			);
			const each_array_1 = ensure_array_like(abilities);
			for (
				let $$index_1 = 0, $$length = each_array_1.length;
				$$index_1 < $$length;
				$$index_1++
			) {
				let ability = each_array_1[$$index_1];
				if (abilityLinkMode()) {
					$$renderer.push(
						`<!--[0--><a${attr('href', `/ability/${stringify(ability.slug)}`)}${attr('aria-current', ability.slug === currentAbilitySlug ? 'page' : void 0)}${attr_class(clsx(railChip))}>`
					);
					railEntry($$renderer, ability);
					$$renderer.push(`<!----></a>`);
				} else {
					$$renderer.push(
						`<!--[-1--><button type="button"${attr('aria-pressed', selectedAbility()?.slug === ability.slug)}${attr_class(clsx(railChip))}>`
					);
					railEntry($$renderer, ability);
					$$renderer.push(`<!----></button>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></div> `);
			if (selectedAbility() && !abilityLinkMode())
				$$renderer.push(
					`<!--[0--><p class="mt-2 text-sm"><a${attr('href', `/ability/${stringify(selectedAbility().slug)}`)} class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline">${escape_html(selectedAbility().name)} full history</a></p>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--></section>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> <section aria-labelledby="history-heading"><div class="mb-2 flex flex-wrap items-baseline justify-between gap-3"><h2 id="history-heading" class="font-display text-foreground text-2xl font-medium tracking-wide">Change History</h2> <span class="text-muted-foreground font-mono text-xs">${escape_html(visibleChangelogs().length)}
						${escape_html(plural(visibleChangelogs().length, 'patch', 'patches'))}</span></div> `);
		if (selectedAbility())
			$$renderer.push(
				`<!--[0--><div class="text-muted-foreground mb-4 flex flex-wrap items-center justify-between gap-2 text-sm" role="status"><span>Showing <strong class="text-foreground font-medium">${escape_html(selectedAbility().name)}</strong> changes</span> <button type="button" class="ui-focus-ring text-signal min-h-11 rounded-sm px-1 text-sm underline-offset-4 hover:underline">Show all changes</button></div>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> `);
		if (visibleChangelogs().length) {
			$$renderer.push(`<!--[0--><!--[-->`);
			const each_array_2 = ensure_array_like(historyYears());
			for (
				let $$index_5 = 0, $$length = each_array_2.length;
				$$index_5 < $$length;
				$$index_5++
			) {
				let [year, patches] = each_array_2[$$index_5];
				$$renderer.push(`<section${attr('aria-labelledby', `year-${stringify(year)}`)}><h3${attr('id', `year-${stringify(year)}`)} class="bg-background/95 border-subtle text-signal sticky top-[7rem] z-10 -mx-1 mb-1 flex items-baseline gap-3 border-b px-1 pt-5 pb-2 font-mono text-lg backdrop-blur-sm">${escape_html(year)} <span class="text-muted-foreground ml-auto text-xs">${escape_html(patches.length)}
									${escape_html(plural(patches.length, 'patch', 'patches'))}</span></h3> <ol class="divide-border divide-y"><!--[-->`);
				const each_array_3 = ensure_array_like(patches);
				for (
					let $$index_4 = 0, $$length = each_array_3.length;
					$$index_4 < $$length;
					$$index_4++
				) {
					let patch = each_array_3[$$index_4];
					$$renderer.push(
						`<li class="scroll-mt-44 py-5"${attr('id', `history-${stringify(patch.id)}`)} data-entity-patch=""><div class="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1"><h4 class="text-foreground text-base font-semibold"><a${attr('href', entityPatchHref(patch, entity))} class="ui-focus-ring hover:text-signal -my-3.5 inline-block rounded-sm py-3.5 underline-offset-4 hover:underline"><time${attr('datetime', patch.date.toISOString())}>${escape_html(formatDate(patch.date))}</time></a></h4> <span class="text-muted-foreground text-xs">${escape_html(changeCountLabel(patch.changeCount))}</span></div> `
					);
					if (patch.changeGroups?.length) {
						$$renderer.push(
							`<!--[0--><div${attr_class(`max-w-[72ch] ${hasContexts() ? 'space-y-5' : 'space-y-4'}`)}><!--[-->`
						);
						const each_array_4 = ensure_array_like(patch.changeGroups);
						for (
							let groupIndex = 0, $$length = each_array_4.length;
							groupIndex < $$length;
							groupIndex++
						) {
							let group = each_array_4[groupIndex];
							const context = groupContext(group);
							$$renderer.push(`<div>`);
							if (group.ability) {
								$$renderer.push(`<!--[0--><div class="mb-2 flex items-center gap-2">`);
								if (group.icon)
									$$renderer.push(
										`<!--[0--><img${attr('src', group.icon)} alt="" width="24" height="24" loading="lazy" decoding="async" class="size-6 rounded object-cover"/>`
									);
								else $$renderer.push('<!--[-1-->');
								$$renderer.push(
									`<!--]--> <h5 class="text-foreground text-sm font-semibold">${escape_html(group.ability)}</h5></div>`
								);
							} else $$renderer.push('<!--[-1-->');
							$$renderer.push(
								`<!--]--> <ul class="marker:text-primary/60 ml-4 list-disc space-y-2 text-base leading-relaxed"><!--[-->`
							);
							const each_array_5 = ensure_array_like(group.bullets);
							for (
								let index = 0, $$length = each_array_5.length;
								index < $$length;
								index++
							) {
								let bullet = each_array_5[index];
								$$renderer.push(`<li class="pl-1">${escape_html(bullet)} `);
								if (group.previous?.[index]) {
									$$renderer.push('<!--[0-->');
									const previous = group.previous[index];
									PreviousChangeLink($$renderer, { previous });
								} else $$renderer.push('<!--[-1-->');
								$$renderer.push(`<!--]--></li>`);
							}
							$$renderer.push(`<!--]--></ul> `);
							if (context && group.ability) {
								$$renderer.push(`<!--[0--><div class="mt-1 ml-5">`);
								EntityContext($$renderer, {
									context,
									name: group.ability,
									variant: 'group',
									historyHref: `/ability/${stringify(group.abilitySlug)}`
								});
								$$renderer.push(`<!----></div>`);
							} else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]--></div>`);
						}
						$$renderer.push(`<!--]--></div>`);
					} else
						$$renderer.push(
							`<!--[-1--><p class="text-muted-foreground max-w-[72ch] text-sm leading-relaxed">${escape_html(entity.name)} was mentioned in this patch. See the full notes for context.</p>`
						);
					$$renderer.push(`<!--]--> `);
					if (
						patch.stats &&
						(patch.maxedFirst?.length ||
							patch.related ||
							patch.boughtBy?.length ||
							patch.buyTime)
					) {
						$$renderer.push('<!--[0-->');
						const windows = {
							stats: patch.stats,
							entryYear: patch.date.getUTCFullYear(),
							open: patch.impact?.closed === false
						};
						StatsBand($$renderer, {
							children: ($$renderer) => {
								if (patch.maxedFirst?.length) {
									$$renderer.push('<!--[0-->');
									ShareBlock($$renderer, {
										kind: 'maxed-first',
										subject: entity.name,
										rows: patch.maxedFirst,
										windows
									});
								} else $$renderer.push('<!--[-1-->');
								$$renderer.push(`<!--]--> `);
								if (patch.related) {
									$$renderer.push('<!--[0-->');
									RelatedItemChanges($$renderer, {
										related: patch.related,
										heroName: entity.name,
										windows
									});
								} else $$renderer.push('<!--[-1-->');
								$$renderer.push(`<!--]--> `);
								if (patch.boughtBy?.length) {
									$$renderer.push('<!--[0-->');
									ShareBlock($$renderer, {
										kind: 'bought-by',
										subject: entity.name,
										rows: patch.boughtBy,
										windows
									});
								} else $$renderer.push('<!--[-1-->');
								$$renderer.push(`<!--]--> `);
								if (patch.buyTime) {
									$$renderer.push('<!--[0-->');
									BuyTimeBlock($$renderer, {
										item: entity.name,
										time: patch.buyTime,
										windows
									});
								} else $$renderer.push('<!--[-1-->');
								$$renderer.push(`<!--]-->`);
							},
							$$slots: { default: true }
						});
					} else $$renderer.push('<!--[-1-->');
					$$renderer.push(
						`<!--]--> <div class="mt-2 flex flex-wrap gap-x-6"><a${attr('href', entityPatchHref(patch, entity))} class="ui-focus-ring text-signal inline-flex min-h-11 items-center gap-1.5 rounded-sm text-xs underline-offset-4 hover:underline">Full patch `
					);
					Arrow_right($$renderer, { class: 'size-3.5' });
					$$renderer.push(`<!----></a></div></li>`);
				}
				$$renderer.push(`<!--]--></ol></section>`);
			}
			$$renderer.push(`<!--]--> `);
			MethodNote($$renderer, {
				stats: latestStats(),
				shipped: 'a patch',
				contextVersions: contextVersion() === null ? [] : [contextVersion()],
				has: {
					...readings(),
					details: contextVersion() !== null,
					previous: hasPrevious()
				}
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(
				`<!--[-1--><div border="border/50 2" bg="card" relative="" p="x-6 y-10" text="center" class="clip-corner my-4 overflow-hidden" role="status">`
			);
			CornerAccents($$renderer, {
				tlSize: '1.5rem',
				brSize: '1.25rem',
				tlColor: 'bg-muted-foreground/30',
				brColor: 'bg-muted-foreground/20',
				thickness: '2px'
			});
			$$renderer.push(
				`<!----> <h3 font="display medium" text="foreground xl" m="b-2" class="tracking-wide">Nothing recorded for ${escape_html(selectedAbility()?.name ?? entity.name)}</h3> <p text="muted-foreground sm" m="x-auto b-6" class="max-w-md leading-relaxed">`
			);
			if (selectedAbility())
				$$renderer.push(
					`<!--[0-->${escape_html(entity.name)} has changes in the archive, but none of them touch this ability.`
				);
			else
				$$renderer.push(`<!--[-1-->${escape_html(entity.name)} has not appeared in any patch notes yet. It shows up here the
								first time it is changed.`);
			$$renderer.push(`<!--]--></p> `);
			if (selectedAbility())
				$$renderer.push(
					`<!--[0--><button type="button" class="pill-signal inline-flex">Show all ${escape_html(entity.name)} changes</button>`
				);
			else {
				$$renderer.push(
					`<!--[-1--><a${attr('href', listing().path)} class="pill-signal inline-flex gap-1.5">Browse all ${escape_html(listing().label.toLowerCase())} `
				);
				Arrow_right($$renderer, { class: 'size-3.5' });
				$$renderer.push(`<!----></a>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></section></div> `);
		if (showToc()) {
			$$renderer.push(
				`<!--[0--><aside class="hidden xl:block xl:w-52 xl:shrink-0" aria-label="Change history index"><div class="sticky top-[8rem] max-h-[calc(100dvh-9rem)] overflow-y-auto overscroll-contain pr-1" style="scrollbar-gutter: stable">`
			);
			EntityHistoryToc($$renderer, { years: tocYears() });
			$$renderer.push(`<!----></div></aside>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--></div></main>`);
	});
}
//#endregion
export { EntityChangelogPage as t };
