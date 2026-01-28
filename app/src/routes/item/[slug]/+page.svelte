<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { PatchPreviewCard, PatchTimeline } from '$lib/components/changelog';
	import { Badge } from '$lib/components/ui/badge';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Package from '@lucide/svelte/icons/package';
	import { MetaTags } from 'svelte-meta-tags';
	import { fly, scale, blur } from 'svelte/transition';
	import { elasticOut, quintOut, expoOut } from 'svelte/easing';
	import { createQuery } from '@tanstack/svelte-query';
	import { queryKeys } from '$lib/queries/keys';
	import { toast } from 'svelte-sonner';

	// SSR data from page load
	const { item, changelogs: initialChangelogs, title, description, image } = page.data;

	// Define the query data shape
	interface ItemQueryData {
		item: typeof item;
		changelogs: typeof initialChangelogs;
	}

	// Use TanStack Query with SSR data as initialData
	const query = createQuery<ItemQueryData>(() => ({
		queryKey: queryKeys.item(item.slug),
		queryFn: async () => {
			const res = await fetch(`/api/item/${item.slug}`);
			if (!res.ok) throw new Error('Failed to fetch item data');
			return res.json();
		},
		initialData: { item, changelogs: initialChangelogs },
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

	// Type labels and variants
	const typeLabels: Record<string, string> = {
		weapon: 'Weapon Item',
		ability: 'Vitality Item',
		upgrade: 'Spirit Item'
	};

	const typeBadgeVariants: Record<string, 'weapon' | 'vitality' | 'spirit'> = {
		weapon: 'weapon',
		ability: 'vitality',
		upgrade: 'spirit'
	};

	// Type-specific styles using Svelte $derived (non-function versions)
	const typeColors = $derived(
		(() => {
			const colors: Record<string, string> = {
				weapon: 'var(--item-weapon)',
				ability: 'var(--item-vitality)',
				upgrade: 'var(--item-spirit)'
			};
			return colors[item.type] || '';
		})()
	);

	const typeGradients = $derived(
		(() => {
			const gradients: Record<string, string> = {
				weapon: 'from-orange-500/10 via-amber-500/5 to-transparent',
				ability: 'from-emerald-500/10 via-green-500/5 to-transparent',
				upgrade: 'from-blue-500/10 via-indigo-500/5 to-transparent'
			};
			return gradients[item.type] || '';
		})()
	);

	const typeBorderGlow = $derived(
		(() => {
			const glows: Record<string, string> = {
				weapon: 'shadow-orange-500/20',
				ability: 'shadow-emerald-500/20',
				upgrade: 'shadow-blue-500/20'
			};
			return glows[item.type] || '';
		})()
	);

	const typeSolidColor = $derived(
		(() => {
			const colors: Record<string, string> = {
				weapon: 'oklch(0.65 0.2 40)',
				ability: 'oklch(0.65 0.2 140)',
				upgrade: 'oklch(0.65 0.2 290)'
			};
			return colors[item.type] || '';
		})()
	);

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
</script>

<MetaTags
	{title}
	{description}
	canonical={`https://deadlog.io/item/${item.slug}`}
	openGraph={{
		type: 'website',
		title,
		description,
		url: `https://deadlog.io/item/${item.slug}`,
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
	<!-- Subtle background pattern -->
	<div
		class="pointer-events-none fixed inset-0 -z-10"
		in:blur={{ duration: 800, easing: expoOut }}
	>
		<div class="bg-gradient-to-b {typeGradients} absolute inset-0"></div>
		<!-- Dot grid pattern -->
		<div
			class="absolute inset-0"
			style:opacity="0.02"
			style:background-image="radial-gradient(circle, currentColor 1px, transparent 1px)"
			style:background-size="24px 24px"
		></div>
	</div>

	<div class="container mx-auto mt-8 mb-24 max-w-6xl px-4">
		<a
			href="/"
			data-sveltekit-reload
			class="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-all hover:gap-3"
		>
			<ArrowLeft class="size-4" />
			<span>Back to all changes</span>
		</a>

		<!-- Item Card - distinct treatment from hero -->
		<header
			class="bg-card relative overflow-hidden rounded-xl border-2 p-8 md:p-10"
			style:border-color={typeColors}
			style:box-shadow="{typeBorderGlow} 0 0 40px -10px"
			in:fly={{ y: -20, ...transitionConfig }}
		>
			<!-- Decorative side stripe -->
			<div
				class="absolute top-0 left-0 h-full w-1.5"
				style:background-color={typeSolidColor}
			></div>

			<!-- Corner decoration -->
			<div
				class="absolute right-6 bottom-6 text-amber-500 opacity-10"
				class:text-emerald-500={item.type === 'ability'}
				class:text-blue-500={item.type === 'upgrade'}
				in:fly={{ x: 20, duration: 600, easing: elasticOut }}
			>
				<Package class="size-24" />
			</div>

			<div
				class="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-start"
			>
				<!-- Item icon with card-style treatment -->
				{#if item.image}
					<div class="relative shrink-0">
						<!-- Background glow -->
						<div
							class="absolute inset-0 -z-10 rounded-lg blur-xl"
							style:background-color={typeColors}
							style:opacity="0.25"
							in:scale={{ duration: 600, easing: expoOut }}
						></div>
						<!-- Inner glow ring -->
						<div
							class="absolute inset-0 -z-10 scale-110 rounded-lg"
							style:box-shadow="0 0 20px {typeColors}"
						></div>
						<!-- Main item card -->
						<div
							class="border-primary/30 flex size-24 items-center justify-center rounded-lg border-2 bg-black/40 p-2 backdrop-blur-sm md:size-32"
							style:border-color={typeColors}
						>
							<img
								src={item.image}
								alt={item.name}
								class="max-h-full max-w-full object-contain drop-shadow-lg"
								in:scale={{ start: 0.85, duration: 500, easing: elasticOut }}
							/>
						</div>
					</div>
				{/if}

				<!-- Item info -->
				<div
					class="flex-1 text-center md:text-left"
					in:blur={{ duration: 600, delay: 100 }}
				>
					<div
						class="border-primary/20 bg-primary/5 mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1"
					>
						<Package class="text-primary size-3.5" />
						<span class="text-primary text-xs font-semibold tracking-wider uppercase"
							>Item</span
						>
					</div>

					<h1
						class="text-foreground font-display mb-4 text-4xl tracking-tight md:text-5xl lg:text-6xl"
					>
						{item.name}
					</h1>

					<div
						class="mb-5 flex flex-wrap items-center justify-center gap-3 md:justify-start"
					>
						<Badge variant={typeBadgeVariants[item.type]} class="px-3 py-1 text-sm">
							{typeLabels[item.type] || item.type}
						</Badge>
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
						<Package class="size-8" />
					</div>
					<p class="text-muted-foreground text-lg">
						No changes recorded for <span class="text-foreground font-medium"
							>{item.name}</span
						>
						yet.
					</p>
					<p class="text-muted-foreground mt-2 text-sm">Check back soon for updates.</p>
				</div>
			{/if}
		</section>
	</div>
</main>
