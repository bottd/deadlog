import {
	O as escape_html,
	T as attr,
	a as derived,
	d as spread_props,
	f as stringify,
	s as ensure_array_like
} from './server2.js';
import { i as entityFragmentId } from './src2.js';
import { r as getPatchStats } from './changelog.js';
import { t as Icon } from './Icon.js';
import { F as getEntityIcons, I as resolveEntity } from './context.js';
import {
	n as getReadingContext,
	r as previousKey,
	t as detailKey
} from './readingContext.js';
import {
	i as EntityContext,
	n as BuyTimeBlock,
	o as PreviousChangeLink,
	r as ShareBlock,
	t as StatsBand
} from './StatsBand.js';
import { t as External_link } from './external-link.js';
//#region src/lib/components/changelog/MogEntityContext.svelte
function MogEntityContext($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { kind, name, ability = null } = $$props;
		const icons = getEntityIcons();
		const reading = getReadingContext();
		const entity = derived(() => resolveEntity(icons, kind, name));
		const details = derived(() =>
			entity() ? reading.details[detailKey(kind, entity().id, ability)] : void 0
		);
		if (details()) {
			$$renderer.push(`<!--[0--><div class="mog-enrichment -mt-1 min-w-0">`);
			EntityContext($$renderer, {
				context: details().context,
				name: details().name,
				variant: 'group',
				historyHref: details().historyHref
			});
			$$renderer.push(`<!----></div>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/changelog/MogPreviousChange.svelte
function MogPreviousChange($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { kind, name, groupIndex, bulletIndex, text } = $$props;
		const icons = getEntityIcons();
		const reading = getReadingContext();
		const entity = derived(() => resolveEntity(icons, kind, name));
		const previous = derived(() =>
			entity()
				? reading.previous[previousKey(kind, entity().id, groupIndex, bulletIndex)]
				: void 0
		);
		if (previous() && previous().bullet === text) {
			$$renderer.push(`<!--[0--><span class="mog-enrichment">`);
			PreviousChangeLink($$renderer, { previous: previous() });
			$$renderer.push(`<!----></span>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/changelog/MogStatsBand.svelte
function MogStatsBand($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { kind, name } = $$props;
		const icons = getEntityIcons();
		const reading = getReadingContext();
		const patch = getPatchStats();
		const entity = derived(() => resolveEntity(icons, kind, name));
		const key = derived(() => (entity() ? String(entity().id) : ''));
		const subject = derived(() => entity()?.alt ?? name);
		const maxedFirst = derived(() =>
			kind === 'hero' ? reading.maxedFirst[key()] : void 0
		);
		const related = derived(() => (kind === 'hero' ? reading.related[key()] : void 0));
		const boughtBy = derived(() => (kind === 'item' ? reading.boughtBy[key()] : void 0));
		const buyTime = derived(() => (kind === 'item' ? reading.buyTime[key()] : void 0));
		const windows = derived(() =>
			patch.stats
				? {
						stats: patch.stats,
						entryYear: patch.entryYear,
						open: patch.open
					}
				: null
		);
		if (entity() && windows() && (maxedFirst() || related() || boughtBy() || buyTime())) {
			$$renderer.push(
				`<!--[0--><div class="mog-enrichment min-w-0"${attr('data-stats-reading', kind)}>`
			);
			StatsBand($$renderer, {
				children: ($$renderer) => {
					if (maxedFirst()) {
						$$renderer.push('<!--[0-->');
						ShareBlock($$renderer, {
							kind: 'maxed-first',
							level: 4,
							subject: subject(),
							rows: maxedFirst(),
							windows: windows()
						});
					} else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--> `);
					if (related()) {
						$$renderer.push('<!--[0-->');
						ShareBlock($$renderer, {
							kind: 'related',
							level: 4,
							subject: subject(),
							rows: related().items,
							windows: windows()
						});
					} else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--> `);
					if (boughtBy()) {
						$$renderer.push('<!--[0-->');
						ShareBlock($$renderer, {
							kind: 'bought-by',
							level: 4,
							subject: subject(),
							rows: boughtBy(),
							windows: windows()
						});
					} else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--> `);
					if (buyTime()) {
						$$renderer.push('<!--[0-->');
						BuyTimeBlock($$renderer, {
							item: subject(),
							time: buyTime(),
							windows: windows(),
							level: 4
						});
					} else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/changelog/SectionPreview.svelte
function SectionPreview($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { type, names } = $$props;
		const entityIcons = getEntityIcons();
		const icons = derived(() => {
			return names
				.map((name) => {
					const entity = resolveEntity(entityIcons, type, name);
					const displayName = entity?.alt ?? name;
					return {
						name: displayName,
						image: entity?.src,
						slug: entityFragmentId(displayName)
					};
				})
				.filter((e) => e.image);
		});
		if (icons().length > 0) {
			$$renderer.push(
				`<!--[0--><ul m="b-5" flex="~ wrap" list="none" gap="1" p="0" class="section-preview"${attr('aria-label', `Affected ${stringify(type)}s`)}><!--[-->`
			);
			const each_array = ensure_array_like(icons());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let icon = each_array[$$index];
				$$renderer.push(
					`<li><a flex="~"${attr('href', `#${stringify(icon.slug)}`)} border="border/60 ~" items="center" gap="1.5" rounded="sm" p="y-0.5 r-2 l-0.5" class="group/badge hover:border-primary/30 hover:bg-primary/5 transition-colors"><img${attr('src', icon.image)} alt="" width="20" height="20" loading="lazy" decoding="async" rounded="sm" class="size-5 object-cover"/> <span text="muted-foreground" font="medium" class="group-hover/badge:text-foreground text-[11px] transition-colors">${escape_html(icon.name)}</span></a></li>`
				);
			}
			$$renderer.push(`<!--]--></ul>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/clapperboard.svelte
function Clapperboard($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'clapperboard',
					size: 24,
					node: [
						['path', { d: 'm12.296 3.464 3.02 3.956' }],
						[
							'path',
							{
								d: 'M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z'
							}
						],
						['path', { d: 'M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }],
						['path', { d: 'm6.18 5.276 3.1 3.899' }]
					]
				}
			}
		])
	);
}
//#endregion
//#region src/lib/components/changelog/VideoLink.svelte
function VideoLink($$renderer, $$props) {
	let { src, label } = $$props;
	$$renderer.push(
		`<a${attr('href', src)} target="_blank" rel="noopener noreferrer" border="border/60 ~" bg="card/60" text="muted-foreground xs" m="y-2" items="center" gap="2" rounded="md" p="x-2.5 y-1.5" font="medium" class="video-link inline-flex no-underline transition-colors hover:border-signal/50 hover:text-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"${attr('aria-label', `${stringify(label)} — video clip, opens on the Deadlock forums`)}>`
	);
	Clapperboard($$renderer, {
		class: 'text-signal size-3.5 shrink-0',
		'aria-hidden': 'true'
	});
	$$renderer.push(`<!----> <span truncate="">${escape_html(label)}</span> `);
	External_link($$renderer, {
		class: 'size-3 shrink-0 opacity-60',
		'aria-hidden': 'true'
	});
	$$renderer.push(`<!----></a>`);
}
//#endregion
export {
	MogEntityContext as a,
	MogPreviousChange as i,
	SectionPreview as n,
	MogStatsBand as r,
	VideoLink as t
};
