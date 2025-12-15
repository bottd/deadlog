<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { PatchPreviewCard, PatchTimeline } from '$lib/components/changelog';
	import { Badge } from '$lib/components/ui/badge';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import { MetaTags } from 'svelte-meta-tags';
	import { fly } from 'svelte/transition';
	import { createQuery } from '@tanstack/svelte-query';
	import { queryKeys } from '$lib/queries/keys';
	import { toast } from 'svelte-sonner';

	// SSR data from page load
	const { hero, changelogs: initialChangelogs, title, description, image } = page.data;

	// Define the query data shape
	interface HeroQueryData {
		hero: typeof hero;
		changelogs: typeof initialChangelogs;
	}

	// Use TanStack Query with SSR data as initialData
	// This enables: background refetch, prefetch cache hits, stale-while-revalidate
	const query = createQuery<HeroQueryData>(() => ({
		queryKey: queryKeys.hero(hero.slug),
		queryFn: async () => {
			const res = await fetch(`/api/hero/${hero.slug}`);
			if (!res.ok) throw new Error('Failed to fetch hero data');
			return res.json();
		},
		initialData: { hero, changelogs: initialChangelogs },
		staleTime: 60 * 60 * 1000 // 1 hour - matches QueryClient default
	}));

	// Show toast if background refetch fails (user still sees SSR data)
	$effect(() => {
		if (query.isError && browser) {
			toast.error('Failed to refresh data', {
				description: 'Showing cached data. Try refreshing the page.'
			});
		}
	});

	// Use query data with fallback to SSR data
	const changelogs = $derived(
		(query.data?.changelogs ?? initialChangelogs).map(
			(c: (typeof initialChangelogs)[number]) => ({
				...c,
				date: typeof c.date === 'string' ? new Date(c.date) : c.date
			})
		)
	);

	// Check for reduced motion preference
	let reducedMotion = $state(false);
	$effect(() => {
		if (browser) {
			const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
			reducedMotion = mediaQuery.matches;
			const handler = (e: MediaQueryListEvent) => {
				reducedMotion = e.matches;
			};
			mediaQuery.addEventListener('change', handler);
			return () => mediaQuery.removeEventListener('change', handler);
		}
	});
</script>

<MetaTags
	{title}
	{description}
	canonical={`https://deadlog.io/hero/${hero.slug}`}
	openGraph={{
		type: 'profile',
		title,
		description,
		url: `https://deadlog.io/hero/${hero.slug}`,
		images: [{ url: image, width: 1200, height: 630, alt: title }]
	}}
	twitter={{
		cardType: 'summary_large_image',
		title,
		description,
		image
	}}
/>

<main class="container mx-auto mt-8 mb-24 max-w-6xl px-4">
	<a
		href="/"
		data-sveltekit-reload
		class="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
	>
		<ArrowLeft class="size-4" />
		Back to all changes
	</a>

	<header
		class="bg-card border-border mb-8 rounded-lg border p-6 md:p-8"
		in:fly={reducedMotion ? { duration: 0 } : { y: -20, duration: 300 }}
	>
		<div class="flex flex-col items-center gap-6 md:flex-row md:items-start">
			{#if hero.image}
				<div class="relative">
					<!-- Subtle glow effect behind portrait -->
					{#if hero.heroType}
						<div
							class="absolute inset-0 -z-10 rounded-lg opacity-20 blur-2xl"
							style="background-color: var(--type-{hero.heroType})"
						></div>
					{/if}
					<!-- Hero image with type-colored accent border -->
					<img
						src={hero.image}
						alt={hero.name}
						class="size-32 rounded-lg border-[3px] object-cover md:size-40 {hero.heroType
							? `border-[var(--type-${hero.heroType})]`
							: 'border-primary/30'}"
					/>
				</div>
			{/if}
			<div class="flex-1 text-center md:text-left">
				<h1 class="text-foreground font-display mb-3 text-3xl tracking-tight md:text-4xl">
					{hero.name}
				</h1>
				<div
					class="mb-4 flex flex-wrap items-center justify-center gap-2 md:justify-start"
				>
					{#if hero.heroType}
						<Badge variant={hero.heroType} class="capitalize">
							{hero.heroType}
						</Badge>
					{/if}
					<Badge variant="secondary">
						{changelogs.length} change{changelogs.length !== 1 ? 's' : ''}
					</Badge>
				</div>
				{#if changelogs.length > 1}
					<PatchTimeline
						patches={changelogs.map((c: { id: string; date: Date }) => ({
							id: c.id,
							date: c.date
						}))}
						class="mt-4 max-w-md"
					/>
				{/if}
			</div>
		</div>
	</header>

	<section>
		<h2 class="text-foreground font-display mb-6 text-2xl tracking-tight">
			Change History
		</h2>

		{#if changelogs.length > 0}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each changelogs as changelog, i (changelog.id)}
					<div
						in:fly={reducedMotion
							? { duration: 0 }
							: { y: 20, duration: 300, delay: Math.min(i, 10) * 50 }}
					>
						<PatchPreviewCard
							id={changelog.id}
							date={changelog.date}
							author={changelog.author}
							authorImage={changelog.authorImage}
							icons={changelog.icons}
						/>
					</div>
				{/each}
			</div>
		{:else}
			<div class="bg-card border-border rounded-lg border p-8 text-center">
				<p class="text-muted-foreground">
					No recorded changes for {hero.name} yet.
				</p>
			</div>
		{/if}
	</section>
</main>
