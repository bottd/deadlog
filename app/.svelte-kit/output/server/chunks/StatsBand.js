import {
	O as escape_html,
	T as attr,
	a as derived,
	d as spread_props,
	f as stringify,
	l as props_id,
	n as attr_style,
	o as element,
	s as ensure_array_like,
	t as attr_class
} from './server2.js';
import { t as Icon } from './Icon.js';
import {
	a as shareLabel,
	o as shareSpan,
	s as shareText,
	t as SHARE_KINDS
} from './shareRows.js';
//#region src/lib/components/entity/PreviousChangeLink.svelte
function PreviousChangeLink($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { previous } = $$props;
		$$renderer.push(
			`<a${attr('href', previous.href)}${attr('aria-label', previous.label)} data-previous-change="" class="ui-focus-ring text-muted-foreground hover:text-signal focus-visible:text-signal ml-1 rounded-sm font-mono text-xs whitespace-nowrap">${escape_html(previous.text)}</a>`
		);
	});
}
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/chevron-right.svelte
function Chevron_right($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'chevron-right',
					size: 24,
					node: [['path', { d: 'm9 18 6-6-6-6' }]]
				}
			}
		])
	);
}
//#endregion
//#region src/lib/components/entity/EntityContext.svelte
function EntityContext($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { context, name, variant, historyHref } = $$props;
		const version = derived(() => context.clientVersion);
		const closing = derived(
			() =>
				`${version() === null ? `Current details for ${name}` : `Describes ${name} as of client ${version()}`}${variant === 'group' ? ', not as of this patch' : ''}.`
		);
		const lead = derived(() =>
			context.sections.filter((section) => section.label === null)
		);
		const labelled = derived(() =>
			context.sections.filter((section) => section.label !== null)
		);
		$$renderer.push(
			`<details class="text-sm svelte-1ydnaku" data-entity-context=""><summary class="ui-focus-ring text-muted-foreground -my-1 flex w-fit cursor-pointer list-none items-center gap-2 rounded-sm py-3 svelte-1ydnaku">`
		);
		Chevron_right($$renderer, {
			'aria-hidden': 'true',
			class: 'details-marker size-3.5 shrink-0'
		});
		$$renderer.push(
			`<!----><span>${escape_html(variant === 'header' ? `About ${name}` : 'Current details')}`
		);
		if (variant === 'group')
			$$renderer.push(
				`<!--[0--><span class="sr-only">${escape_html(` for ${name}`)}</span>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
		if (version() !== null)
			$$renderer.push(
				`<!--[0--><span class="font-mono text-xs">${escape_html(` · client ${version()}`)}</span>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--></span></summary> <div class="max-w-[72ch] space-y-3 pt-1 pb-2 leading-relaxed"><!--[-->`
		);
		const each_array = ensure_array_like(lead());
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let section = each_array[index];
			$$renderer.push(`<!--[-->`);
			const each_array_1 = ensure_array_like(section.paragraphs);
			for (let line = 0, $$length = each_array_1.length; line < $$length; line++) {
				let paragraph = each_array_1[line];
				$$renderer.push(`<p class="text-muted-foreground">${escape_html(paragraph)}</p>`);
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--> `);
		if (labelled().length) {
			$$renderer.push(`<!--[0--><dl class="space-y-2"><!--[-->`);
			const each_array_2 = ensure_array_like(labelled());
			for (
				let $$index_3 = 0, $$length = each_array_2.length;
				$$index_3 < $$length;
				$$index_3++
			) {
				let section = each_array_2[$$index_3];
				$$renderer.push(
					`<div><dt class="text-foreground">${escape_html(section.label)}</dt> <!--[-->`
				);
				const each_array_3 = ensure_array_like(section.paragraphs);
				for (let line = 0, $$length = each_array_3.length; line < $$length; line++) {
					let paragraph = each_array_3[line];
					$$renderer.push(
						`<dd class="text-muted-foreground">${escape_html(paragraph)}</dd>`
					);
				}
				$$renderer.push(`<!--]--></div>`);
			}
			$$renderer.push(`<!--]--></dl>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> `);
		if (context.properties.length) {
			$$renderer.push(
				`<!--[0--><div><p class="text-muted-foreground pb-1 font-mono text-xs">Base values, before upgrades and scaling</p> <table class="font-mono text-xs"${attr('aria-label', `Base values for ${stringify(name)}`)}><tbody><!--[-->`
			);
			const each_array_4 = ensure_array_like(context.properties);
			for (let index = 0, $$length = each_array_4.length; index < $$length; index++) {
				let property = each_array_4[index];
				$$renderer.push(
					`<tr><th scope="row" class="text-muted-foreground py-0.5 pr-6 text-left font-normal">${escape_html(property.label)}</th><td class="text-foreground py-0.5">${escape_html(property.display)}${escape_html(property.unit)}</td></tr>`
				);
			}
			$$renderer.push(`<!--]--></tbody></table></div>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--> <p class="text-muted-foreground text-xs">${escape_html(closing())}</p> `
		);
		if (historyHref)
			$$renderer.push(
				`<!--[0--><p><a${attr('href', historyHref)} class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline">${escape_html(name)} full history</a></p>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--></div></details>`);
	});
}
//#endregion
//#region src/lib/components/entity/ShareList.svelte
function ShareList($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { rows, labelledby, round = false } = $$props;
		const paired = derived(() => rows.some((row) => row.after !== null));
		const width = (share) => `${Math.min(share, 1) * 100}%`;
		$$renderer.push(
			`<ul class="mt-2 list-none space-y-1"${attr('aria-labelledby', labelledby)}><!--[-->`
		);
		const each_array = ensure_array_like(rows);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let row = each_array[$$index];
			$$renderer.push(
				`<li><a${attr('href', row.href)}${attr('aria-label', shareLabel(row))} class="ui-focus-ring group hover:bg-signal/5 -mx-1 flex min-h-11 max-w-md items-center gap-3 rounded-sm px-1"><img${attr('src', row.image)} alt="" width="24" height="24" loading="lazy" decoding="async"${attr_class(`size-6 shrink-0 object-contain ${round ? 'rounded-full' : ''}`)}/> <span${attr_class(`${row.muted ? 'text-muted-foreground' : 'text-signal'} min-w-0 flex-1 truncate text-sm underline-offset-4 group-hover:underline`)}>${escape_html(row.name)}</span> <span aria-hidden="true" class="flex w-16 shrink-0 flex-col gap-0.5 lg:w-24" data-share-bar=""><span${attr_class(`bg-border/60 block ${paired() ? 'h-1' : 'h-1.5'} overflow-hidden rounded-full`)}><span${attr_class(`${paired() ? 'bg-muted-foreground/60' : 'bg-muted-foreground'} block h-full min-w-0.5 rounded-full`)}${attr_style('', { width: width(row.before) })}></span></span> `
			);
			if (row.after !== null)
				$$renderer.push(
					`<!--[0--><span class="bg-border/60 block h-1 overflow-hidden rounded-full"><span class="bg-muted-foreground block h-full min-w-0.5 rounded-full"${attr_style('', { width: width(row.after) })}></span></span>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(
				`<!--]--></span> <span aria-hidden="true"${attr_class(`text-foreground shrink-0 text-right font-mono text-xs whitespace-nowrap ${paired() ? 'w-[10ch]' : 'w-[4ch]'}`)}>${escape_html(shareText(row))}</span></a></li>`
			);
		}
		$$renderer.push(`<!--]--></ul>`);
	});
}
//#endregion
//#region src/lib/components/entity/ShareBlock.svelte
function ShareBlock($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const id = props_id($$renderer);
		let { kind, subject, rows, windows, level = 5, children } = $$props;
		const config = derived(() => SHARE_KINDS[kind]);
		const span = derived(() =>
			shareSpan(
				windows,
				rows.some((row) => row.after !== null)
			)
		);
		$$renderer.push(`<div class="min-w-0"${attr('data-share-block', kind)}>`);
		element(
			$$renderer,
			`h${level}`,
			() => {
				$$renderer.push(
					`${attr('id', `${id}-heading`)} class="text-foreground text-sm font-semibold"`
				);
			},
			() => {
				$$renderer.push(`${escape_html(config().title)}`);
			}
		);
		$$renderer.push(
			` <p class="text-muted-foreground mt-0.5 text-xs leading-relaxed">${escape_html(`${config().lead(subject)}, ${span()}.`)}</p> `
		);
		ShareList($$renderer, {
			rows,
			labelledby: `${id}-heading`,
			round: config().round
		});
		$$renderer.push(`<!----> `);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
//#region src/lib/components/entity/BuyTimeBlock.svelte
function BuyTimeBlock($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { item, time, windows, level = 5 } = $$props;
		$$renderer.push(`<div class="min-w-0" data-share-block="bought-at">`);
		element(
			$$renderer,
			`h${level}`,
			() => {
				$$renderer.push(` class="text-foreground text-sm font-semibold"`);
			},
			() => {
				$$renderer.push(`Bought at`);
			}
		);
		$$renderer.push(
			` <p class="text-muted-foreground mt-0.5 text-xs leading-relaxed">${escape_html(`Average game time ${item} buyers bought it, ${shareSpan(windows, true)}.`)}</p> <p class="text-foreground mt-2 flex min-h-11 items-center font-mono text-sm"${attr('aria-label', `${time.before} before, ${time.after} after`)}>${escape_html(`${time.before} → ${time.after}`)}</p></div>`
		);
	});
}
//#endregion
//#region src/lib/components/entity/StatsBand.svelte
function StatsBand($$renderer, $$props) {
	let { children } = $$props;
	$$renderer.push(
		`<div class="stats-band mt-5 min-w-0 svelte-905f9s" data-stats-band=""><div class="band-grid grid gap-x-8 gap-y-5 svelte-905f9s">`
	);
	children($$renderer);
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export {
	Chevron_right as a,
	EntityContext as i,
	BuyTimeBlock as n,
	PreviousChangeLink as o,
	ShareBlock as r,
	StatsBand as t
};
