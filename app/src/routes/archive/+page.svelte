<script lang="ts">
	import { formatDate, formatYear } from '@deadlog/utils';
	import { MetaTags } from 'svelte-meta-tags';
	import { absoluteUrl, pageMeta } from '$lib/seo';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	// Grouped on the printed year, not the UTC one. A Map keeps the newest-first order
	// that plain object keys would renumber.
	const years = $derived([
		...data.patches.reduce((groups, patch) => {
			const year = formatYear(patch.pubDate);
			const group = groups.get(year);
			if (group) group.push(patch);
			else groups.set(year, [patch]);
			return groups;
		}, new Map<string, typeof data.patches>())
	]);
</script>

<MetaTags
	{...pageMeta({
		title: 'Deadlock Patch Archive | Deadlog',
		description: 'Browse every recorded Deadlock patch in chronological order.',
		canonical: absoluteUrl('/archive')
	})}
/>

<main class="container mx-auto mt-8 mb-24 max-w-3xl px-4">
	<header class="mb-8">
		<h1 class="font-display text-foreground text-4xl font-medium tracking-wide">
			Patch archive
		</h1>
		<p class="text-muted-foreground mt-2 text-sm">
			Every recorded patch, newest first. {data.patches.length} patches.
		</p>
	</header>
	{#each years as [year, patches] (year)}
		<section aria-labelledby="year-{year}" class="mb-10">
			<h2 id="year-{year}" class="text-signal mb-3 font-mono text-lg">{year}</h2>
			<ul class="divide-subtle divide-y">
				{#each patches as patch (patch.slug)}
					<li>
						<a
							href="/change/{patch.slug}"
							class="ui-focus-ring hover:text-primary flex min-h-11 flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-sm py-3 text-sm"
						>
							<span>{patch.title}</span>
							<time datetime={patch.pubDate} class="text-muted-foreground text-xs"
								>{formatDate(patch.pubDate)}</time
							>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</main>
