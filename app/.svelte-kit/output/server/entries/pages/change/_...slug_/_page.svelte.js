import {
	O as escape_html,
	T as attr,
	Vt as fallback,
	a as derived,
	d as spread_props,
	f as stringify,
	i as bind_props,
	r as attributes,
	t as attr_class
} from '../../../../chunks/server2.js';
import { t as building } from '../../../../chunks/internal2.js';
import {
	a as formatDate,
	d as patchHeading,
	f as plural,
	s as formatTime
} from '../../../../chunks/src2.js';
import {
	a as tocLinkCount,
	c as Avatar,
	i as ChangelogToc,
	n as MogContent,
	o as Avatar_fallback,
	s as Avatar_image,
	u as authorInitials
} from '../../../../chunks/changelog.js';
import {
	a as SITE_NAME,
	c as absoluteUrl,
	l as breadcrumbList,
	p as pageMeta,
	s as SITE_URL,
	u as changePath
} from '../../../../chunks/seo.js';
import { n as page, t as Icon } from '../../../../chunks/Icon.js';
import {
	B as toast,
	G as Sheet_title,
	K as Sheet_header,
	M as hasEntity,
	R as searchParams,
	U as Root,
	W as Sheet_description,
	q as Sheet_content
} from '../../../../chunks/context.js';
import { t as CornerAccents } from '../../../../chunks/CornerAccents.js';
import { n as MetaTags, t as JsonLd } from '../../../../chunks/dist.js';
import { t as Arrow_left } from '../../../../chunks/arrow-left.js';
import { t as MethodNote } from '../../../../chunks/MethodNote.js';
import { t as External_link } from '../../../../chunks/external-link.js';
//#region src/lib/components/ui/button/button.svelte
var buttonSizes = {
	sm: 'btn-sm',
	icon: 'btn-icon'
};
function Button($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			class: className,
			size = 'sm',
			ref = null,
			href = void 0,
			type = 'button',
			disabled,
			children,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		if (href) {
			$$renderer.push(
				`<!--[0--><a${attributes({
					'data-slot': 'button',
					class: `btn-ghost ${stringify(buttonSizes[size])} ${stringify(className ?? '')}`,
					href: disabled ? void 0 : href,
					'aria-disabled': disabled,
					role: disabled ? 'link' : void 0,
					tabindex: disabled ? -1 : void 0,
					...restProps
				})}>`
			);
			children?.($$renderer);
			$$renderer.push(`<!----></a>`);
		} else {
			$$renderer.push(
				`<!--[-1--><button${attributes({
					'data-slot': 'button',
					class: `btn-ghost ${stringify(buttonSizes[size])} ${stringify(className ?? '')}`,
					type,
					disabled,
					...restProps
				})}>`
			);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/link.svelte
function Link($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'link',
					size: 24,
					node: [
						[
							'path',
							{ d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' }
						],
						[
							'path',
							{ d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' }
						]
					]
				}
			}
		])
	);
}
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/list.svelte
function List($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'list',
					size: 24,
					node: [
						['path', { d: 'M3 5h.01' }],
						['path', { d: 'M3 12h.01' }],
						['path', { d: 'M3 19h.01' }],
						['path', { d: 'M8 5h13' }],
						['path', { d: 'M8 12h13' }],
						['path', { d: 'M8 19h13' }]
					]
				}
			}
		])
	);
}
//#endregion
//#region src/routes/change/[...slug]/+page.svelte
function stat($$renderer, count, label, tone) {
	$$renderer.push(
		`<span flex="~" items="baseline" gap="1"><span${attr_class(`font-mono font-bold ${stringify(tone)}`)}>${escape_html(count)}</span> <span text="muted-foreground">${escape_html(label)}</span></span>`
	);
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const changelog = derived(() => data.changelog),
			title = derived(() => data.title),
			description = derived(() => data.description),
			image = derived(() => data.image),
			isIndexable = derived(() => data.isIndexable),
			MogComponent = derived(() => data.MogComponent),
			mogToc = derived(() => fallback(data.mogToc, () => [], true)),
			mogStats = derived(() => data.mogStats),
			mogOpen = derived(() => data.mogOpen),
			reading = derived(() => data.reading),
			mogRelated = derived(() => data.mogRelated);
		const contextVersions = derived(() =>
			[
				...new Set(
					Object.values(reading().details).flatMap(({ context }) =>
						context.clientVersion === null ? [] : [context.clientVersion]
					)
				)
			].sort((a, b) => a - b)
		);
		const filled = (record) => Object.keys(record).length > 0;
		const sections = derived(() => ({
			details: filled(reading().details),
			previous: filled(reading().previous),
			related: filled(mogRelated()),
			maxedFirst: filled(reading().maxedFirst),
			boughtBy: filled(reading().boughtBy),
			buyTime: filled(reading().buyTime)
		}));
		let tocOpen = false;
		async function copyLink() {
			try {
				await navigator.clipboard.writeText(window.location.href);
				toast.success('Copied to clipboard');
			} catch {
				toast.error('Could not copy this link');
			}
		}
		const selHeroes = derived(() => searchParams.hero);
		const selItems = derived(() => searchParams.item);
		const allHeroes = derived(() => changelog().icons?.heroes ?? []);
		const allItems = derived(() => changelog().icons?.items ?? []);
		const abilityIcons = derived(() => changelog().abilityIcons ?? []);
		const icons = derived(() => ({
			heroes: allHeroes(),
			items: allItems()
		}));
		const matchedHeroes = derived(() =>
			allHeroes().filter((h) => hasEntity(selHeroes(), h.alt))
		);
		const matchedItems = derived(() =>
			allItems().filter((i) => hasEntity(selItems(), i.alt))
		);
		const filterActive = derived(() => selHeroes().length + selItems().length > 0);
		const mogFilter = derived(() =>
			matchedHeroes().length + matchedItems().length > 0
				? {
						heroes: matchedHeroes().map((h) => h.alt),
						items: matchedItems().map((i) => i.alt)
					}
				: void 0
		);
		const tocHeroes = derived(() => (mogFilter() ? matchedHeroes() : allHeroes()));
		const tocItems = derived(() => (mogFilter() ? matchedItems() : allItems()));
		const matchedLabel = derived(() =>
			[...matchedHeroes(), ...matchedItems()].map((e) => e.alt).join(', ')
		);
		const selectedLabel = derived(() => [...selHeroes(), ...selItems()].join(', '));
		const backHref = derived(() => (building ? '/' : '/' + page.url.search));
		const heroCount = derived(() => tocHeroes().length);
		const itemCount = derived(() => tocItems().length);
		const patchTitle = derived(() => patchHeading(changelog()));
		const hideGeneral = derived(
			() => !!mogFilter() || !mogToc().some((s) => s.id === 'general-changes')
		);
		const showToc = derived(
			() =>
				tocLinkCount({
					toc: mogToc(),
					heroes: tocHeroes(),
					items: tocItems(),
					hideGeneral: hideGeneral()
				}) > 1
		);
		const tocProps = derived(() => ({
			heroes: tocHeroes(),
			items: tocItems(),
			abilityIcons: abilityIcons(),
			toc: mogToc(),
			hideGeneral: hideGeneral()
		}));
		const patchPath = derived(() => changePath(changelog()));
		const canonical = derived(() => absoluteUrl(patchPath()));
		const publishedTime = derived(() => changelog().date.toISOString());
		const structuredData = derived(() => {
			const entities = [...allHeroes(), ...allItems()].map((entity) => ({
				'@type': 'Thing',
				name: entity.alt
			}));
			return {
				'@graph': [
					{
						'@type': 'Article',
						'@id': `${canonical()}#article`,
						headline: changelog().title,
						name: title(),
						description: description(),
						url: canonical(),
						mainEntityOfPage: {
							'@type': 'WebPage',
							'@id': canonical()
						},
						datePublished: publishedTime(),
						dateModified: publishedTime(),
						image: {
							'@type': 'ImageObject',
							url: image(),
							width: 1200,
							height: 630
						},
						author: {
							'@type': 'Person',
							name: changelog().author
						},
						publisher: {
							'@type': 'Organization',
							name: SITE_NAME,
							url: SITE_URL,
							logo: {
								'@type': 'ImageObject',
								url: absoluteUrl('/android-chrome-512x512.png'),
								width: 512,
								height: 512
							}
						},
						articleSection: 'Deadlock Patch Notes',
						isAccessibleForFree: true,
						inLanguage: 'en-US',
						isBasedOn: {
							'@type': 'CreativeWork',
							url: changelog().sourceUrl
						},
						about: entities
					},
					breadcrumbList([
						{
							name: SITE_NAME,
							path: '/'
						},
						{
							name: changelog().title,
							path: patchPath()
						}
					])
				]
			};
		});
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			MetaTags(
				$$renderer,
				spread_props([
					pageMeta({
						title: title(),
						description: description(),
						canonical: canonical(),
						image: image(),
						indexable: isIndexable(),
						openGraph: {
							type: 'article',
							article: {
								publishedTime: publishedTime(),
								modifiedTime: publishedTime(),
								section: 'Deadlock Patch Notes',
								tags: [...allHeroes(), ...allItems()].map((entity) => entity.alt)
							}
						}
					})
				])
			);
			$$renderer.push(`<!----> `);
			if (isIndexable()) {
				$$renderer.push('<!--[0-->');
				JsonLd($$renderer, { schema: structuredData() });
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(
				`<!--]--> <main container="" m="x-auto t-8 b-24" p="x-4" class="max-w-4xl xl:max-w-6xl"><a${attr('href', backHref())} text="muted-foreground sm" m="b-4" items="center" gap="2" class="hover:text-signal inline-flex transition-colors">`
			);
			Arrow_left($$renderer, { class: 'size-4' });
			$$renderer.push(`<!----> Back to all changes</a> `);
			if (filterActive()) {
				$$renderer.push(
					`<!--[0--><div border="signal/30 ~" bg="signal/5" m="b-6" flex="~ wrap" items="center" gap="x-3 y-1" p="x-4 y-2.5" text="sm" class="clip-corner-sm">`
				);
				if (mogFilter())
					$$renderer.push(
						`<!--[0--><span text="muted-foreground" kicker-sm="">Filtered to</span> <span text="foreground" font="medium">${escape_html(matchedLabel())}</span>`
					);
				else
					$$renderer.push(`<!--[-1--><span text="muted-foreground">No changes for <span text="foreground" font="medium">${escape_html(selectedLabel())}</span> in this
					patch.</span>`);
				$$renderer.push(
					`<!--]--> <a${attr('href', patchPath())} text="signal xs" m="l-auto" font="mono semibold" class="hover:underline">Show all changes</a></div>`
				);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (showToc()) {
				$$renderer.push(
					`<!--[0--><button flex="~" type="button" border="border ~" bg="card" text="foreground xs" m="b-4 l-auto" h="10" items="center" gap="2" p="x-3" font="mono semibold" uppercase="" class="clip-corner-sm hover:border-signal hover:text-signal tracking-wider transition-colors xl:hidden" aria-label="Open table of contents">`
				);
				List($$renderer, { class: 'size-4' });
				$$renderer.push(`<!----> Contents</button>`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> <div flex="~" gap="8">`);
			if (showToc()) {
				$$renderer.push(
					`<!--[0--><aside w="56" shrink="0" class="hidden xl:block"><div sticky="" p="r-1" class="top-[12rem] max-h-[calc(100dvh-13rem)] overflow-y-auto overscroll-contain" style="scrollbar-gutter: stable" data-toc-scroll="">`
				);
				ChangelogToc($$renderer, spread_props([tocProps()]));
				$$renderer.push(`<!----></div></aside>`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(
				`<!--]--> <article border="border ~" bg="card" relative="" flex="1" class="clip-corner min-w-0 overflow-hidden">`
			);
			CornerAccents($$renderer, {
				tlSize: '2rem',
				brSize: '1.25rem'
			});
			$$renderer.push(
				`<!----> <div absolute="" h="px" bg="gradient-to-r" class="from-primary/60 via-signal/35 inset-x-0 top-0 to-transparent" aria-hidden="true"></div> <div relative="" p="4" class="sm:p-6 md:p-8"><header m="b-4"><div m="b-4" flex="~ wrap" items="start" justify="between" gap="4"><div flex="~ col" gap="4"><h1 font="display medium" text="foreground 3xl" class="heading-glow leading-tight tracking-wide">${escape_html(patchTitle().heading)}</h1> <div flex="~ wrap" items="center" gap="3"><div flex="~" text="muted-foreground sm" items="center" gap="2.5">`
			);
			if (Avatar) {
				$$renderer.push('<!--[-->');
				Avatar($$renderer, {
					class: 'border-primary/30 ring-primary/10 size-7 border ring-2',
					children: ($$renderer) => {
						if (Avatar_image) {
							$$renderer.push('<!--[-->');
							Avatar_image($$renderer, {
								src: changelog().authorImage,
								alt: changelog().author
							});
							$$renderer.push('<!--]-->');
						} else {
							$$renderer.push('<!--[!-->');
							$$renderer.push('<!--]-->');
						}
						$$renderer.push(` `);
						if (Avatar_fallback) {
							$$renderer.push('<!--[-->');
							Avatar_fallback($$renderer, {
								text: 'muted-foreground xs',
								font: 'mono',
								class: 'tracking-wide',
								children: ($$renderer) => {
									$$renderer.push(
										`<!---->${escape_html(authorInitials(changelog().author))}`
									);
								},
								$$slots: { default: true }
							});
							$$renderer.push('<!--]-->');
						} else {
							$$renderer.push('<!--[!-->');
							$$renderer.push('<!--]-->');
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
			$$renderer.push(
				` <span class="tracking-tight">By <span text="foreground" font="medium">${escape_html(changelog().author)}</span> `
			);
			if (patchTitle().named)
				$$renderer.push(
					`<!--[0-->on <time${attr('datetime', changelog().date.toISOString())}>${escape_html(formatDate(changelog().date))}</time>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(
				`<!--]--> at <time${attr('datetime', changelog().date.toISOString())}>${escape_html(formatTime(changelog().date))}</time></span></div> `
			);
			if (heroCount() > 0 || itemCount() > 0) {
				$$renderer.push(
					`<!--[0--><div bg="border" h="4" w="px" aria-hidden="true"></div> <div flex="~" items="center" gap="3" text="xs">`
				);
				if (heroCount() > 0) {
					$$renderer.push('<!--[0-->');
					stat(
						$$renderer,
						heroCount(),
						plural(heroCount(), 'hero', 'heroes'),
						'text-primary'
					);
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (itemCount() > 0) {
					$$renderer.push('<!--[0-->');
					stat($$renderer, itemCount(), plural(itemCount(), 'item'), 'text-signal');
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--></div>`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(
				`<!--]--></div></div> <div flex="~" items="center" gap="2"><a${attr('href', changelog().sourceUrl)} target="_blank" rel="external noopener noreferrer" flex="~" text="muted-foreground xs" h="10" items="center" gap="2" p="x-3" font="mono semibold" class="ui-focus-ring hover:bg-primary/10 hover:text-primary rounded-md transition-colors" aria-label="View original patch notes">`
			);
			External_link($$renderer, { class: 'size-4' });
			$$renderer.push(`<!----> <span class="hidden sm:inline">Original</span></a> `);
			Button($$renderer, {
				size: 'icon',
				onclick: copyLink,
				class: 'text-muted-foreground hover:bg-signal/10 hover:text-signal',
				'aria-label': 'Copy link to clipboard',
				children: ($$renderer) => {
					Link($$renderer, { class: 'size-4' });
				},
				$$slots: { default: true }
			});
			$$renderer.push(
				`<!----></div></div> <hr border="none" class="editorial-divider"/></header> `
			);
			MogContent($$renderer, {
				content: MogComponent(),
				icons: icons(),
				filter: mogFilter(),
				stats: mogStats(),
				open: mogOpen(),
				entryYear: changelog().date.getUTCFullYear(),
				reading: reading(),
				related: mogRelated()
			});
			$$renderer.push(`<!----> `);
			MethodNote($$renderer, {
				stats: mogStats(),
				has: sections(),
				contextVersions: contextVersions()
			});
			$$renderer.push(`<!----></div></article></div></main> `);
			if (showToc()) {
				$$renderer.push('<!--[0-->');
				if (Root) {
					$$renderer.push('<!--[-->');
					Root($$renderer, {
						get open() {
							return tocOpen;
						},
						set open($$value) {
							tocOpen = $$value;
							$$settled = false;
						},
						children: ($$renderer) => {
							if (Sheet_content) {
								$$renderer.push('<!--[-->');
								Sheet_content($$renderer, {
									class: 'max-h-[70dvh] px-4',
									children: ($$renderer) => {
										if (Sheet_header) {
											$$renderer.push('<!--[-->');
											Sheet_header($$renderer, {
												class: 'pr-12',
												children: ($$renderer) => {
													if (Sheet_title) {
														$$renderer.push('<!--[-->');
														Sheet_title($$renderer, {
															class: 'text-sm font-semibold tracking-tight',
															children: ($$renderer) => {
																$$renderer.push(`<!---->Contents`);
															},
															$$slots: { default: true }
														});
														$$renderer.push('<!--]-->');
													} else {
														$$renderer.push('<!--[!-->');
														$$renderer.push('<!--]-->');
													}
													$$renderer.push(` `);
													if (Sheet_description) {
														$$renderer.push('<!--[-->');
														Sheet_description($$renderer, {
															children: ($$renderer) => {
																$$renderer.push(
																	`<!---->Jump to a section or affected entity.`
																);
															},
															$$slots: { default: true }
														});
														$$renderer.push('<!--]-->');
													} else {
														$$renderer.push('<!--[!-->');
														$$renderer.push('<!--]-->');
													}
												},
												$$slots: { default: true }
											});
											$$renderer.push('<!--]-->');
										} else {
											$$renderer.push('<!--[!-->');
											$$renderer.push('<!--]-->');
										}
										$$renderer.push(` <div p="x-2 b-6" class="overflow-y-auto">`);
										ChangelogToc(
											$$renderer,
											spread_props([
												tocProps(),
												{
													onnavigate: () => (tocOpen = false),
													size: 'lg'
												}
											])
										);
										$$renderer.push(`<!----></div>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push('<!--]-->');
							} else {
								$$renderer.push('<!--[!-->');
								$$renderer.push('<!--]-->');
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push('<!--]-->');
				} else {
					$$renderer.push('<!--[!-->');
					$$renderer.push('<!--]-->');
				}
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
export { _page as default };
