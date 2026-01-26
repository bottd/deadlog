<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { PatchPreviewCard, PatchTimeline } from '$lib/components/changelog';
	import { Badge } from '$lib/components/ui/badge';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Activity from '@lucide/svelte/icons/activity';
	import { MetaTags } from 'svelte-meta-tags';
	import { fly, scale, blur } from 'svelte/transition';
	import { elasticOut, quintOut, expoOut } from 'svelte/easing';
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
	const query = createQuery<HeroQueryData>(() => ({
		queryKey: queryKeys.hero(hero.slug),
		queryFn: async () => {
			const res = await fetch(`/api/hero/${hero.slug}`);
			if (!res.ok) throw new Error('Failed to fetch hero data');
			return res.json();
		},
		initialData: { hero, changelogs: initialChangelogs },
		staleTime: 60 * 60 * 1000
	}));

	// Show toast if background refetch fails
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

	// Transition config based on reduced motion
	const transitionConfig = $derived(
		reducedMotion
			? { duration: 0 }
			: {
					duration: 400,
					easing: quintOut
				}
	);

	const cardTransitionConfig = $derived((i: number) =>
		reducedMotion
			? { duration: 0 }
			: {
					delay: Math.min(i, 12) * 40,
					duration: 400,
					easing: quintOut
				}
	);

	// Type-specific styles using Svelte $derived
	const typeGradient = $derived.by(() => {
		if (!hero.heroType) return '';
		const colors: Record<string, string> = {
			marksman: 'from-amber-500/20 via-yellow-500/10 to-amber-500/5',
			mystic: 'from-purple-500/20 via-fuchsia-500/10 to-purple-500/5',
			brawler: 'from-red-500/20 via-orange-500/10 to-red-500/5'
		};
		return colors[hero.heroType] || '';
	});

	const typePatternColor = $derived.by(() => {
		if (!hero.heroType) return '';
		const colors: Record<string, string> = {
			marksman: 'oklch(0.75 0.15 55)',
			mystic: 'oklch(0.65 0.2 300)',
			brawler: 'oklch(0.6 0.2 25)'
		};
		return colors[hero.heroType] || '';
	});

	const typeBorderColor = $derived.by(() => {
		if (!hero.heroType) return 'border-border';
		const borderColors: Record<string, string> = {
			marksman: 'border-amber-500/30',
			mystic: 'border-purple-500/30',
			brawler: 'border-red-500/30'
		};
		return borderColors[hero.heroType] || 'border-border';
	});

	const typeAccentColor = $derived.by(() => {
		if (!hero.heroType) return '';
		const colors: Record<string, string> = {
			marksman: '#f59e0b',
			mystic: '#a855f7',
			brawler: '#ef4444'
		};
		return colors[hero.heroType] || '';
	});

	const typeBorderVar = $derived.by(() => {
		if (!hero.heroType) return '';
		return `var(--type-${hero.heroType})`;
	});

	// Svelte motion for rotating ring
	let rotation = $state(0);
	let rotationFrame: number;

	$effect(() => {
		if (reducedMotion) return;
		const animateRotation = () => {
			rotation = (rotation + 0.05) % 360;
			rotationFrame = requestAnimationFrame(animateRotation);
		};
		rotationFrame = requestAnimationFrame(animateRotation);
		return () => cancelAnimationFrame(rotationFrame);
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

<main class="min-h-screen">
	<!-- Dynamic background based on hero type -->
	{#if hero.heroType}
		<div
			class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
			in:blur={{ duration: 800, easing: expoOut }}
		>
			<div class="bg-gradient-to-br {typeGradient} absolute inset-0"></div>
			<!-- Diagonal slash pattern -->
			<div
				class="absolute inset-0"
				style:opacity="0.03"
				style:background-image="
				linear-gradient(45deg, transparent 48%, {typePatternColor} 48%, {typePatternColor} 52%,
				transparent 52%), linear-gradient(-45deg, transparent 48%, {typePatternColor} 48%, {typePatternColor}
				52%, transparent 52%)
				"
				style:background-size="60px 60px"
			></div>
		</div>
	{/if}

	<div class="container mx-auto mt-8 mb-24 max-w-6xl px-4">
		<a
			href="/"
			data-sveltekit-reload
			class="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-all hover:gap-3"
		>
			<ArrowLeft class="size-4" />
			<span>Back to all changes</span>
		</a>

		<!-- Hero Header -->
		<header
			class="relative overflow-hidden rounded-xl border-2 {typeBorderColor} bg-gradient-to-br {typeGradient} p-8 md:p-12"
			in:fly={{ y: -20, ...transitionConfig }}
		>
			<!-- Decorative corner accent -->
			{#if hero.heroType}
				<div
					class="absolute top-0 right-0 h-32 w-32 opacity-20"
					in:fly={{ x: 20, duration: 600, easing: elasticOut }}
				>
					<div
						class="absolute top-0 right-0 h-16 w-1"
						style:background-color={typeAccentColor}
					></div>
					<div
						class="absolute top-0 right-0 h-1 w-16"
						style:background-color={typeAccentColor}
					></div>
				</div>
			{/if}

			<div
				class="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-start"
			>
				<!-- Hero portrait with enhanced treatment -->
				{#if hero.image}
					<div class="relative shrink-0">
						<!-- Glowing background -->
						{#if hero.heroType}
							<div
								class="absolute inset-0 -z-10 rounded-xl blur-2xl"
								style:background-color={typeBorderVar}
								style:opacity="0.3"
								in:scale={{ duration: 600, easing: expoOut }}
							></div>
							<!-- Rotating dashed border ring using Svelte motion -->
							<div class="absolute inset-0 -z-10 rounded-xl p-1">
								<div
									class="h-full w-full rounded-xl border-2 border-dashed"
									style:border-color={typeBorderVar}
									style:opacity="0.4"
									style:transform="rotate({rotation}deg)"
								></div>
							</div>
						{/if}
						<!-- Main portrait -->
						<img
							src={hero.image}
							alt={hero.name}
							class="size-32 rounded-xl border-[3px] object-cover shadow-2xl md:size-40"
							style:border-color={hero.heroType ? typeBorderVar : undefined}
							in:scale={{ start: 0.9, duration: 500, easing: elasticOut }}
						/>
					</div>
				{/if}

				<!-- Hero info -->
				<div
					class="flex-1 text-center md:text-left"
					in:blur={{ duration: 600, delay: 100 }}
				>
					<div
						class="border-primary/20 bg-primary/5 mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1"
					>
						<Activity class="text-primary size-3.5" />
						<span class="text-primary text-xs font-semibold tracking-wider uppercase"
							>Hero Profile</span
						>
					</div>

					<h1
						class="text-foreground font-display mb-4 text-4xl tracking-tight md:text-5xl lg:text-6xl"
					>
						{hero.name}
					</h1>

					<div
						class="mb-5 flex flex-wrap items-center justify-center gap-3 md:justify-start"
					>
						{#if hero.heroType}
							<Badge variant={hero.heroType} class="px-3 py-1 text-sm">
								<span class="capitalize">{hero.heroType}</span>
							</Badge>
						{/if}
						<div class="bg-muted/50 flex items-center gap-2 rounded-md px-3 py-1">
							<span class="text-foreground text-sm font-semibold"
								>{changelogs.length}</span
							>
							<span class="text-muted-foreground text-sm"
								>change{changelogs.length !== 1 ? 's' : ''}</span
							>
						</div>
					</div>

					{#if changelogs.length > 1}
						<div class="inline-block" in:fly={{ y: 10, duration: 400, delay: 200 }}>
							<PatchTimeline
								patches={changelogs.map((c: { id: string; date: Date }) => ({
									id: c.id,
									date: c.date
								}))}
								class="max-w-md"
								timelineColor={hero.heroType}
							/>
						</div>
					{/if}
				</div>
			</div>
		</header>

		<!-- Changes Section -->
		<section>
			<div
				class="mb-6 flex items-center gap-3"
				in:fly={{ y: -10, duration: 400, delay: 100 }}
			>
				<div class="bg-border h-px flex-1"></div>
				<h2
					class="text-foreground font-display text-center text-xl tracking-tight md:text-2xl"
				>
					Change History
				</h2>
				<div class="bg-border h-px flex-1"></div>
			</div>

			{#if changelogs.length > 0}
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{#each changelogs as changelog, i (changelog.id)}
						<div in:fly={{ y: 30, ...cardTransitionConfig(i) }}>
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
				<div
					class="bg-card border-border relative overflow-hidden rounded-xl border p-12 text-center"
					in:scale={{ start: 0.95, duration: 400 }}
				>
					<div
						class="text-muted-foreground/30 bg-muted mx-auto mb-4 flex size-20 items-center justify-center rounded-full"
					>
						<Activity class="size-8" />
					</div>
					<p class="text-muted-foreground text-lg">
						No changes recorded for <span class="text-foreground font-medium"
							>{hero.name}</span
						>
						yet.
					</p>
					<p class="text-muted-foreground mt-2 text-sm">Check back soon for updates.</p>
				</div>
			{/if}
		</section>
	</div>
</main>
