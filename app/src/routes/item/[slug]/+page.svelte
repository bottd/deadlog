<script module lang="ts">
	const ITEM_STYLE = {
		weapon: {
			label: 'Weapon Item',
			badgeVariant: 'weapon',
			color: 'var(--item-weapon)',
			gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
			borderGlow: 'shadow-orange-500/20',
			cornerText: 'text-amber-500'
		},
		ability: {
			label: 'Vitality Item',
			badgeVariant: 'vitality',
			color: 'var(--item-vitality)',
			gradient: 'from-emerald-500/10 via-green-500/5 to-transparent',
			borderGlow: 'shadow-emerald-500/20',
			cornerText: 'text-emerald-500'
		},
		upgrade: {
			label: 'Spirit Item',
			badgeVariant: 'spirit',
			color: 'var(--item-spirit)',
			gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
			borderGlow: 'shadow-blue-500/20',
			cornerText: 'text-blue-500'
		}
	} as const;
</script>

<script lang="ts">
	import { PatchPreviewCard, PatchTimeline } from '$lib/components/changelog';
	import { Badge } from '$lib/components/ui/badge';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Package from '@lucide/svelte/icons/package';
	import { MetaTags } from 'svelte-meta-tags';
	import { fly, scale, blur } from 'svelte/transition';
	import { elasticOut, quintOut, expoOut } from 'svelte/easing';
	import { prefersReducedMotion } from 'svelte/motion';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const item = $derived(data.item);
	const changelogs = $derived(data.changelogs);
	const title = $derived(data.title);
	const description = $derived(data.description);
	const image = $derived(data.image);

	const style = $derived(ITEM_STYLE[item.type]);

	const transitionConfig = $derived(
		prefersReducedMotion.current
			? { duration: 0 }
			: {
					duration: 400,
					easing: quintOut
				}
	);

	const cardTransitionConfig = $derived((i: number) =>
		prefersReducedMotion.current
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
		<div class="bg-gradient-to-b {style.gradient} absolute inset-0"></div>
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
			style:border-color={style.color}
			style:box-shadow="{style.borderGlow} 0 0 40px -10px"
			in:fly={{ y: -20, ...transitionConfig }}
		>
			<!-- Decorative side stripe -->
			<div
				class="absolute top-0 left-0 h-full w-1.5"
				style:background-color={style.color}
			></div>

			<!-- Corner decoration -->
			<div
				class="absolute right-6 bottom-6 opacity-10 {style.cornerText}"
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
							style:background-color={style.color}
							style:opacity="0.25"
							in:scale={{ duration: 600, easing: expoOut }}
						></div>
						<!-- Inner glow ring -->
						<div
							class="absolute inset-0 -z-10 scale-110 rounded-lg"
							style:box-shadow="0 0 20px {style.color}"
						></div>
						<!-- Main item card -->
						<div
							class="border-primary/30 flex size-24 items-center justify-center rounded-lg border-2 bg-black/40 p-2 backdrop-blur-sm md:size-32"
							style:border-color={style.color}
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
						class="text-foreground font-display mb-4 text-4xl font-medium tracking-wide md:text-5xl lg:text-6xl"
					>
						{item.name}
					</h1>

					<div
						class="mb-5 flex flex-wrap items-center justify-center gap-3 md:justify-start"
					>
						<Badge variant={style.badgeVariant} class="px-3 py-1 text-sm">
							{style.label}
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
								patches={changelogs.map((c) => ({ id: c.id, date: c.date }))}
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
					class="text-foreground font-display text-center text-xl font-medium tracking-wide md:text-2xl"
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
