<script lang="ts">
	import { PatchPreviewCard, PatchTimeline } from '$lib/components/changelog';
	import { CornerAccents } from '$lib/components/ui/corner-accents';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import { MetaTags } from 'svelte-meta-tags';
	import { fly, scale, blur } from 'svelte/transition';
	import { quintOut, expoOut } from 'svelte/easing';
	import { prefersReducedMotion } from 'svelte/motion';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const hero = $derived(data.hero);
	const changelogs = $derived(data.changelogs);
	const title = $derived(data.title);
	const description = $derived(data.description);
	const image = $derived(data.image);

	// Every per-archetype tint derives from the design tokens — no hardcoded palette.
	const accent = $derived(
		hero.heroType ? `var(--type-${hero.heroType})` : 'var(--primary)'
	);
	const eyebrow = $derived(hero.heroType ? `${hero.heroType} hero` : 'hero profile');

	const transitionConfig = $derived(
		prefersReducedMotion.current ? { duration: 0 } : { duration: 400, easing: quintOut }
	);

	const cardTransitionConfig = $derived((i: number) =>
		prefersReducedMotion.current
			? { duration: 0 }
			: { delay: Math.min(i, 12) * 40, duration: 400, easing: quintOut }
	);
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
	<!-- Archetype-tinted atmosphere -->
	{#if hero.heroType}
		<div
			class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
			in:blur={{ duration: 800, easing: expoOut }}
		>
			<div
				class="absolute inset-0"
				style:background="linear-gradient(to bottom right, oklch(from {accent} l c h / 0.14),
				oklch(from {accent} l c h / 0.04), transparent 70%)"
			></div>
			<div
				class="absolute inset-0"
				style:opacity="0.04"
				style:background-image="linear-gradient(45deg, transparent 48%, {accent} 48%, {accent}
				52%, transparent 52%)"
				style:background-size="64px 64px"
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

		<!-- Hero header — tactical-HUD treatment, matching the feed -->
		<header
			class="clip-corner-lg bg-card relative mb-10 overflow-hidden border-2 p-8 md:p-12"
			style:border-color="color-mix(in oklab, {accent} 45%, var(--border))"
			in:fly={{ y: -20, ...transitionConfig }}
		>
			<CornerAccents tlSize="4rem" brSize="3rem" thickness="0.125rem" color={accent} />
			<div
				class="absolute inset-x-0 top-0 h-px"
				style:background="linear-gradient(to right, {accent}, transparent 80%)"
				aria-hidden="true"
			></div>

			<div
				class="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-center"
			>
				<!-- Portrait -->
				{#if hero.image}
					<div class="relative shrink-0">
						<div
							class="absolute inset-0 -z-10 blur-2xl"
							style:background-color={accent}
							style:opacity="0.25"
						></div>
						<img
							src={hero.image}
							alt={hero.name}
							class="clip-corner-sm size-32 border-2 object-cover shadow-2xl md:size-40"
							style:border-color={accent}
							in:scale={{ start: 0.92, duration: 500, easing: expoOut }}
						/>
					</div>
				{/if}

				<!-- Info -->
				<div class="flex-1 text-center md:text-left">
					<div
						class="mb-3 flex items-center justify-center gap-2 md:justify-start"
						in:fly={{ y: 8, duration: 400, delay: 80 }}
					>
						<span class="h-px w-6" style:background-color={accent} aria-hidden="true"
						></span>
						<span
							class="font-mono text-xs font-bold tracking-[0.2em] uppercase"
							style:color={accent}>{eyebrow}</span
						>
					</div>

					<h1
						class="text-foreground font-display heading-glow mb-4 text-4xl font-medium tracking-wide md:text-5xl lg:text-6xl"
						style:--heading-glow-color={accent}
						in:fly={{ y: 12, duration: 400, delay: 100 }}
					>
						{hero.name}
					</h1>

					<div
						class="text-muted-foreground mb-5 flex items-center justify-center gap-1.5 font-mono text-xs tracking-wider uppercase md:justify-start"
					>
						<span class="font-bold" style:color={accent}>{changelogs.length}</span>
						<span>change{changelogs.length !== 1 ? 's' : ''} logged</span>
					</div>

					{#if changelogs.length > 1}
						<div
							class="mx-auto max-w-md md:mx-0"
							in:fly={{ y: 10, duration: 400, delay: 200 }}
						>
							<PatchTimeline
								patches={changelogs.map((c) => ({ id: c.id, date: c.date }))}
								{accent}
							/>
						</div>
					{/if}
				</div>
			</div>
		</header>

		<!-- Changes -->
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
								changeCount={changelog.changeCount}
								{accent}
							/>
						</div>
					{/each}
				</div>
			{:else}
				<div
					class="clip-corner bg-card border-border relative overflow-hidden border-2 p-12 text-center"
					in:scale={{ start: 0.95, duration: 400 }}
				>
					<CornerAccents tlSize="2rem" color={accent} />
					<p class="text-muted-foreground mb-2 font-mono text-xs tracking-wide uppercase">
						No log entries
					</p>
					<p class="text-foreground text-lg">
						Nothing has changed for <span class="font-medium">{hero.name}</span> yet.
					</p>
				</div>
			{/if}
		</section>
	</div>
</main>
