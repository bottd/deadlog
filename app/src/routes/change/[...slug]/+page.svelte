<script lang="ts">
	import { page } from '$app/state';
	import { building } from '$app/environment';
	import { ChangelogToc, MogContent } from '$lib/components/changelog';
	import { searchParams } from '$lib/stores/searchParams.svelte';
	import type { EntityIcon } from '$lib/types';
	import * as Avatar from '$lib/components/ui/avatar';
	import { authorInitials } from '$lib/author';
	import * as Sheet from '$lib/components/ui/sheet';
	import Button from '$lib/components/ui/button/button.svelte';
	import { entityNamesMatch, formatDate, formatTime } from '@deadlog/utils';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import Link from '@lucide/svelte/icons/link';
	import ListIcon from '@lucide/svelte/icons/list';
	import { toast } from 'svelte-sonner';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import {
		absoluteUrl,
		breadcrumbList,
		changePath,
		pageMeta,
		SITE_NAME,
		SITE_URL
	} from '$lib/seo';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const changelog = $derived(data.changelog);
	const title = $derived(data.title);
	const description = $derived(data.description);
	const image = $derived(data.image);
	const isIndexable = $derived(data.isIndexable);
	const MogComponent = $derived(data.MogComponent);
	const mogToc = $derived(data.mogToc ?? []);

	let tocOpen = $state(false);

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(window.location.href);
			toast.success('Copied to clipboard');
		} catch {
			toast.error('Could not copy this link');
		}
	}

	// carry the list-view filter and show only the selected entities' notes
	const selHeroes = $derived(searchParams.hero);
	const selItems = $derived(searchParams.item);
	const allHeroes = $derived<EntityIcon[]>(changelog.icons?.heroes ?? []);
	const allItems = $derived<EntityIcon[]>(changelog.icons?.items ?? []);
	const abilityIcons = $derived(changelog.abilityIcons ?? []);
	const icons = $derived({ heroes: allHeroes, items: allItems });

	const has = (names: string[], name: string) =>
		names.some((n) => entityNamesMatch(n, name));
	const matchedHeroes = $derived(allHeroes.filter((h) => has(selHeroes, h.alt)));
	const matchedItems = $derived(allItems.filter((i) => has(selItems, i.alt)));

	const filterActive = $derived(selHeroes.length + selItems.length > 0);
	// undefined unless at least one selected entity actually changed in this patch
	const mogFilter = $derived(
		matchedHeroes.length + matchedItems.length > 0
			? { heroes: matchedHeroes.map((h) => h.alt), items: matchedItems.map((i) => i.alt) }
			: undefined
	);

	const tocHeroes = $derived(mogFilter ? matchedHeroes : allHeroes);
	const tocItems = $derived(mogFilter ? matchedItems : allItems);
	const matchedLabel = $derived(
		[...matchedHeroes, ...matchedItems].map((e) => e.alt).join(', ')
	);
	const selectedLabel = $derived([...selHeroes, ...selItems].join(', '));
	const backHref = $derived(building ? '/' : '/' + page.url.search);

	const heroCount = $derived(tocHeroes.length);
	const itemCount = $derived(tocItems.length);
	const namedTitle = $derived(!/\d{2}-\d{2}-\d{4}/.test(changelog.title));
	const displayTitle = $derived(
		namedTitle ? changelog.title : formatDate(changelog.date)
	);

	const hideGeneral = $derived(
		!!mogFilter || !mogToc.some((s) => s.id === 'general-changes')
	);
	const genericTocEntries = $derived(
		heroCount + itemCount === 0
			? mogToc.filter(
					(entry) =>
						!['general-changes', 'hero-changes', 'item-changes'].includes(entry.id)
				)
			: []
	);
	const showToc = $derived(
		(hideGeneral ? 0 : 1) +
			(heroCount > 0 ? heroCount + 1 : 0) +
			(itemCount > 0 ? itemCount + 1 : 0) +
			genericTocEntries.length >
			1
	);
	const patchPath = $derived(changePath(changelog));
	const canonical = $derived(absoluteUrl(patchPath));
	const publishedTime = $derived(changelog.date.toISOString());
	const structuredData = $derived.by(() => {
		const entities = [...allHeroes, ...allItems].map((entity) => ({
			'@type': 'Thing',
			name: entity.alt
		}));

		return {
			'@graph': [
				{
					'@type': 'Article',
					'@id': `${canonical}#article`,
					headline: changelog.title,
					name: title,
					description,
					url: canonical,
					mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
					datePublished: publishedTime,
					dateModified: publishedTime,
					image: {
						'@type': 'ImageObject',
						url: image,
						width: 1200,
						height: 630
					},
					author: { '@type': 'Person', name: changelog.author },
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
						url: changelog.sourceUrl
					},
					about: entities
				},
				// One entry per URL: "Deadlog" and "Patch Notes" both pointed at "/", which
				// Google's structured-data validator flags as a duplicate ListItem.
				breadcrumbList([
					{ name: SITE_NAME, path: '/' },
					{ name: changelog.title, path: patchPath }
				])
			]
		};
	});
</script>

{#snippet stat(count: number, label: string, tone: string)}
	<span flex="~" items="baseline" gap="1">
		<span class="font-mono font-bold {tone}">{count}</span>
		<span text="muted-foreground">{label}</span>
	</span>
{/snippet}

<MetaTags
	{...pageMeta({
		title,
		description,
		canonical,
		image,
		indexable: isIndexable,
		openGraph: {
			type: 'article',
			article: {
				publishedTime,
				modifiedTime: publishedTime,
				section: 'Deadlock Patch Notes',
				tags: [...allHeroes, ...allItems].map((entity) => entity.alt)
			}
		}
	})}
/>

{#if isIndexable}
	<JsonLd schema={structuredData} />
{/if}

<main container m="x-auto t-8 b-24" p="x-4" class="max-w-4xl xl:max-w-6xl">
	<a
		href={backHref}
		text="muted-foreground sm"
		m="b-8"
		items="center"
		gap="2"
		class="hover:text-signal inline-flex transition-colors"
	>
		<ArrowLeft class="size-4" />
		Back to all changes
	</a>

	{#if filterActive}
		<div
			border="signal/30 ~"
			bg="signal/5"
			m="b-6"
			flex="~ wrap"
			items="center"
			gap="x-3 y-1"
			p="x-4 y-2.5"
			text="sm"
			class="clip-corner-sm"
		>
			{#if mogFilter}
				<span text="muted-foreground" class="kicker text-[10px]"> Filtered to </span>
				<span text="foreground" font="medium">{matchedLabel}</span>
			{:else}
				<span text="muted-foreground">
					No changes for <span text="foreground" font="medium">{selectedLabel}</span> in this
					patch.
				</span>
			{/if}
			<a
				href={patchPath}
				text="signal xs"
				m="l-auto"
				font="mono semibold"
				class="hover:underline"
			>
				Show all changes
			</a>
		</div>
	{/if}

	{#if showToc}
		<button
			flex="~"
			type="button"
			onclick={() => (tocOpen = true)}
			border="border ~"
			bg="card"
			text="foreground xs"
			m="b-4 l-auto"
			h="10"
			items="center"
			gap="2"
			p="x-3"
			font="mono semibold"
			uppercase
			class="clip-corner-sm hover:border-signal hover:text-signal tracking-wider transition-colors xl:hidden"
			aria-label="Open table of contents"
		>
			<ListIcon class="size-4" />
			Contents
		</button>
	{/if}

	<div flex="~" gap="8">
		{#if showToc}
			<aside w="56" shrink="0" class="hidden xl:block">
				<div
					sticky
					p="r-1"
					class="top-[12rem] max-h-[calc(100dvh-13rem)] overflow-y-auto overscroll-contain"
					style="scrollbar-gutter: stable"
					data-toc-scroll
				>
					<ChangelogToc
						heroes={tocHeroes}
						items={tocItems}
						{abilityIcons}
						toc={mogToc}
						{hideGeneral}
					/>
				</div>
			</aside>
		{/if}

		<article
			border="border ~"
			bg="card"
			relative
			flex="1"
			class="clip-corner min-w-0 overflow-hidden"
		>
			<CornerAccents tlSize="2rem" brSize="1.25rem" />
			<div
				absolute
				h="px"
				bg="gradient-to-r"
				class="from-primary/60 via-signal/35 inset-x-0 top-0 to-transparent"
				aria-hidden="true"
			></div>

			<div relative p="6" class="md:p-8">
				<header m="b-8">
					<div m="b-6" flex="~ wrap" items="start" justify="between" gap="4">
						<div flex="~ col" gap="4">
							<div flex="~" items="center" gap="3">
								<span
									border="primary/20 ~"
									bg="primary/10"
									text="primary"
									p="x-2 y-0.5"
									font="bold"
									class="kicker rounded text-[10px]"
								>
									{changelog.category ?? 'patch'}
								</span>
								<span
									text="muted-foreground"
									font="mono"
									class="text-[10px] tracking-wider"
								>
									ID:{changelog.id}
								</span>
							</div>

							<h1
								font="display medium"
								text="foreground 3xl"
								class="heading-glow leading-tight tracking-wide"
							>
								{displayTitle}
							</h1>

							<div flex="~" items="center" gap="4">
								<div flex="~" text="muted-foreground sm" items="center" gap="2.5">
									<Avatar.Root
										class="border-primary/30 ring-primary/10 size-7 border ring-2"
									>
										<Avatar.Image src={changelog.authorImage} alt={changelog.author} />
										<Avatar.Fallback
											text="muted-foreground xs"
											font="mono"
											class="tracking-wide"
										>
											{authorInitials(changelog.author)}
										</Avatar.Fallback>
									</Avatar.Root>
									<span class="tracking-tight">
										By <span text="foreground" font="medium">{changelog.author}</span>
										{#if namedTitle}
											on
											<time datetime={changelog.date.toISOString()}
												>{formatDate(changelog.date)}</time
											>
										{/if}
										at
										<time datetime={changelog.date.toISOString()}
											>{formatTime(changelog.date)}</time
										>
									</span>
								</div>

								{#if heroCount > 0 || itemCount > 0}
									<div bg="border" h="4" w="px" aria-hidden="true"></div>
									<div flex="~" items="center" gap="3" text="xs">
										{#if heroCount > 0}
											{@render stat(
												heroCount,
												heroCount !== 1 ? 'heroes' : 'hero',
												'text-primary'
											)}
										{/if}
										{#if itemCount > 0}
											{@render stat(
												itemCount,
												itemCount !== 1 ? 'items' : 'item',
												'text-signal'
											)}
										{/if}
									</div>
								{/if}
							</div>
						</div>

						<div flex="~" items="center" gap="2">
							<a
								href={changelog.sourceUrl}
								target="_blank"
								rel="external noopener noreferrer"
								flex="~"
								text="muted-foreground xs"
								h="10"
								items="center"
								gap="2"
								p="x-3"
								font="mono semibold"
								class="ui-focus-ring hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
								aria-label="View original patch notes"
							>
								<ExternalLink class="size-4" />
								<span class="hidden sm:inline">Original</span>
							</a>
							<Button
								size="icon"
								onclick={copyLink}
								class="text-muted-foreground hover:bg-signal/10 hover:text-signal"
								aria-label="Copy link to clipboard"
							>
								<Link class="size-4" />
							</Button>
						</div>
					</div>

					<hr border="none" class="editorial-divider" />
				</header>

				<MogContent content={MogComponent} {icons} filter={mogFilter} />
			</div>
		</article>
	</div>
</main>

{#if showToc}
	<Sheet.Root bind:open={tocOpen}>
		<Sheet.Content class="max-h-[70vh]">
			<Sheet.Header>
				<Sheet.Title class="text-sm font-semibold tracking-tight">Contents</Sheet.Title>
				<Sheet.Description>Jump to a section or affected entity.</Sheet.Description>
			</Sheet.Header>
			<div p="x-2 b-6" class="overflow-y-auto">
				<ChangelogToc
					heroes={tocHeroes}
					items={tocItems}
					{abilityIcons}
					toc={mogToc}
					{hideGeneral}
					onnavigate={() => (tocOpen = false)}
					size="lg"
				/>
			</div>
		</Sheet.Content>
	</Sheet.Root>
{/if}
