<script lang="ts">
	import { page } from '$app/state';
	import { ChangelogToc, EntityPreview, NorgContent } from '$lib/components/changelog';
	import { searchParams } from '$lib/stores/searchParams.svelte';
	import type { EntityIcon } from '$lib/types';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { formatDate, formatTime } from '@deadlog/utils';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Link from '@lucide/svelte/icons/link';
	import ListIcon from '@lucide/svelte/icons/list';
	import { toast } from 'svelte-sonner';
	import { MetaTags } from 'svelte-meta-tags';

	const {
		changelog,
		heroMap,
		itemMap,
		abilityMap,
		title,
		description,
		image,
		NorgComponent
	} = page.data;

	let tocOpen = $state(false);

	async function copyLink() {
		await navigator.clipboard.writeText(window.location.href);
		toast.success('Copied to clipboard');
	}

	// carry the list-view filter and show only the selected entities' notes
	const selHeroes = $derived(searchParams.hero);
	const selItems = $derived(searchParams.item);
	const allHeroes = $derived<EntityIcon[]>(changelog.icons?.heroes ?? []);
	const allItems = $derived<EntityIcon[]>(changelog.icons?.items ?? []);

	const has = (names: string[], name: string) =>
		names.some((n) => n.toLowerCase() === name.toLowerCase());
	const matchedHeroes = $derived(allHeroes.filter((h) => has(selHeroes, h.alt)));
	const matchedItems = $derived(allItems.filter((i) => has(selItems, i.alt)));

	const filterActive = $derived(selHeroes.length + selItems.length > 0);
	// undefined unless at least one selected entity actually changed in this patch
	const norgFilter = $derived(
		matchedHeroes.length + matchedItems.length > 0
			? { heroes: matchedHeroes.map((h) => h.alt), items: matchedItems.map((i) => i.alt) }
			: undefined
	);

	const tocHeroes = $derived(norgFilter ? matchedHeroes : allHeroes);
	const tocItems = $derived(norgFilter ? matchedItems : allItems);
	const matchedLabel = $derived(
		[...matchedHeroes, ...matchedItems].map((e) => e.alt).join(', ')
	);
	const selectedLabel = $derived([...selHeroes, ...selItems].join(', '));
	const backHref = $derived('/' + page.url.search);

	const heroCount = $derived(tocHeroes.length);
	const itemCount = $derived(tocItems.length);

	// Highlight the table-of-contents entry for the section currently in view.
	let activeId = $state('');

	function scrollSpy(node: HTMLElement) {
		let observer: IntersectionObserver | undefined;
		const frame = requestAnimationFrame(() => {
			const targets = node.querySelectorAll('h1[id], h2[id], header.entity-heading[id]');
			if (targets.length === 0) return;
			observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) activeId = (entry.target as HTMLElement).id;
					}
				},
				{ rootMargin: '-15% 0px -75% 0px' }
			);
			for (const target of targets) observer.observe(target);
		});
		return {
			destroy() {
				cancelAnimationFrame(frame);
				observer?.disconnect();
			}
		};
	}
</script>

{#snippet stat(count: number, label: string)}
	<span class="flex items-baseline gap-1">
		<span class="text-primary font-mono font-bold">{count}</span>
		<span class="text-muted-foreground">{label}</span>
	</span>
{/snippet}

<MetaTags
	{title}
	{description}
	canonical={`https://deadlog.io/change/${changelog.id}`}
	openGraph={{
		type: 'article',
		title,
		description,
		url: `https://deadlog.io/change/${changelog.id}`,
		images: [{ url: image, width: 1200, height: 630, alt: title }]
	}}
	twitter={{
		cardType: 'summary_large_image',
		title,
		description,
		image
	}}
/>

<main class="container mx-auto mt-8 mb-24 max-w-4xl px-4 xl:max-w-6xl">
	<a
		href={backHref}
		data-sveltekit-reload
		class="text-muted-foreground hover:text-primary mb-8 inline-flex items-center gap-2 text-sm transition-colors"
	>
		<ArrowLeft class="size-4" />
		Back to all changes
	</a>

	{#if filterActive}
		<div
			class="clip-corner-sm border-primary/30 bg-primary/5 mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 border px-4 py-2.5 text-sm"
		>
			{#if norgFilter}
				<span
					class="text-muted-foreground font-mono text-[10px] tracking-widest uppercase"
				>
					Filtered to
				</span>
				<span class="text-foreground font-medium">{matchedLabel}</span>
			{:else}
				<span class="text-muted-foreground">
					No changes for <span class="text-foreground font-medium">{selectedLabel}</span> in
					this patch.
				</span>
			{/if}
			<a
				href="/change/{changelog.id}"
				class="text-primary ml-auto font-mono text-xs font-semibold hover:underline"
			>
				Show all changes
			</a>
		</div>
	{/if}

	<div class="flex gap-8">
		{#if NorgComponent && changelog.icons}
			<aside class="hidden w-56 shrink-0 xl:block">
				<div class="sticky top-[12rem]">
					<ChangelogToc
						heroes={tocHeroes}
						items={tocItems}
						hideGeneral={!!norgFilter}
						{activeId}
					/>
				</div>
			</aside>
		{/if}

		<article
			class="clip-corner bg-card border-border relative min-w-0 flex-1 overflow-hidden border"
			use:scrollSpy
		>
			<CornerAccents tlSize="2rem" brSize="1.25rem" />
			<div
				class="from-primary/60 via-primary/20 absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent"
				aria-hidden="true"
			></div>

			<div class="relative p-6 md:p-8">
				<header class="mb-8">
					<div class="mb-6 flex flex-wrap items-start justify-between gap-4">
						<div class="flex flex-col gap-4">
							<div class="flex items-center gap-3">
								<span
									class="bg-primary/10 text-primary border-primary/20 rounded border px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase"
								>
									{changelog.category ?? 'patch'}
								</span>
							</div>

							<h1
								class="text-foreground font-display heading-glow text-3xl leading-tight font-medium tracking-wide"
							>
								<time datetime={changelog.date.toISOString()}
									>{formatDate(changelog.date)}</time
								>
							</h1>

							<div class="flex items-center gap-4">
								<div class="text-muted-foreground flex items-center gap-2.5 text-sm">
									<Avatar.Root
										class="border-primary/30 ring-primary/10 size-7 border ring-2"
									>
										<Avatar.Image src={changelog.authorImage} alt={changelog.author} />
										<Avatar.Fallback class="bg-muted text-xs">
											{changelog.author.slice(0, 2).toUpperCase()}
										</Avatar.Fallback>
									</Avatar.Root>
									<span class="tracking-tight">
										By <span class="text-foreground font-medium">{changelog.author}</span>
										at
										<time datetime={changelog.date.toISOString()}
											>{formatTime(changelog.date)}</time
										>
									</span>
								</div>

								{#if heroCount > 0 || itemCount > 0}
									<div class="bg-border h-4 w-px" aria-hidden="true"></div>
									<div class="flex items-center gap-3 text-xs">
										{#if heroCount > 0}
											{@render stat(heroCount, heroCount !== 1 ? 'heroes' : 'hero')}
										{/if}
										{#if itemCount > 0}
											{@render stat(itemCount, itemCount !== 1 ? 'items' : 'item')}
										{/if}
									</div>
								{/if}
							</div>
						</div>

						<Button
							variant="ghost"
							size="icon"
							onclick={copyLink}
							class="text-muted-foreground hover:bg-primary/10 hover:text-primary"
							aria-label="Copy link to clipboard"
						>
							<Link class="size-4" />
						</Button>
					</div>

					<hr class="editorial-divider border-none" />

					{#if !NorgComponent && changelog.icons}
						<div class="mt-6 flex flex-wrap gap-3">
							{#if changelog.icons.heroes.length > 0}
								<EntityPreview entities={changelog.icons.heroes} />
							{/if}
							{#if changelog.icons.items.length > 0}
								<EntityPreview entities={changelog.icons.items} />
							{/if}
						</div>
					{/if}
				</header>

				{#if NorgComponent}
					<NorgContent
						content={NorgComponent}
						{heroMap}
						{itemMap}
						{abilityMap}
						filter={norgFilter}
					/>
				{/if}
			</div>
		</article>
	</div>
</main>

{#if NorgComponent && changelog.icons}
	<button
		onclick={() => (tocOpen = true)}
		class="bg-primary text-primary-foreground fixed right-8 bottom-8 z-50 flex size-12 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:opacity-80 xl:hidden"
		aria-label="Open table of contents"
	>
		<ListIcon class="size-5" />
	</button>

	<Sheet.Root bind:open={tocOpen}>
		<Sheet.Content side="bottom" class="max-h-[70vh]">
			<Sheet.Header>
				<Sheet.Title class="text-sm font-semibold tracking-tight">Contents</Sheet.Title>
			</Sheet.Header>
			<div class="overflow-y-auto px-2 pb-6">
				<ChangelogToc
					heroes={tocHeroes}
					items={tocItems}
					hideGeneral={!!norgFilter}
					onnavigate={() => (tocOpen = false)}
					size="lg"
					{activeId}
				/>
			</div>
		</Sheet.Content>
	</Sheet.Root>
{/if}
