<script lang="ts">
	import { formatDate, formatYear } from '@deadlog/utils';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import {
		absoluteUrl,
		collectionPageSchema,
		DEADLOCK_GAME,
		DEFAULT_SOCIAL_IMAGE,
		pageMeta,
		SITE_NAME
	} from '#lib/seo.ts';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	const title = 'Deadlock Patch Archive | Deadlog';
	const description = 'Browse every recorded Deadlock patch in chronological order.';
	const canonical = absoluteUrl('/archive');
	// Grouped on the printed year, not the UTC one. A Map keeps the newest-first order
	// that plain object keys would renumber.
	const years = $derived(Map.groupBy(data.patches, (patch) => formatYear(patch.pubDate)));
</script>

<MetaTags {...pageMeta({ title, description, canonical })} />
<JsonLd
	schema={collectionPageSchema({
		canonical,
		title,
		description,
		image: DEFAULT_SOCIAL_IMAGE,
		dateModified: data.patches[0]?.pubDate,
		about: [DEADLOCK_GAME],
		items: data.patches.map((patch) => ({
			name: patch.title,
			url: absoluteUrl(`/change/${patch.slug}`)
		})),
		breadcrumbs: [
			{ name: SITE_NAME, path: '/' },
			{ name: 'Patch archive', path: '/archive' }
		]
	})}
/>

<main class="page-container archive-page">
	<header>
		<h1>Patch archive</h1>
		<p>
			Every recorded patch, newest first. {data.patches.length} patches.
		</p>
	</header>
	{#each years as [year, patches] (year)}
		<section aria-labelledby="year-{year}">
			<h2 id="year-{year}">{year}</h2>
			<ul>
				{#each patches as patch (patch.slug)}
					<li>
						<a href="/change/{patch.slug}" class="ui-focus-ring archive-link">
							<span>{patch.title}</span>
							<time datetime={patch.pubDate}>{formatDate(patch.pubDate)}</time>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</main>

<style>
	@layer components.features {
		.archive-page {
			max-inline-size: 48rem;
			margin-block: 2rem 6rem;
		}
		header {
			margin-bottom: 2rem;
		}
		h1 {
			color: var(--foreground);
			font: 500 var(--text-4xl)/1.1111 var(--font-display);
			letter-spacing: 0.025em;
		}
		header p {
			margin-top: 0.5rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
		}
		section {
			margin-bottom: 2.5rem;
		}
		h2 {
			margin-bottom: 0.75rem;
			color: var(--signal);
			font: var(--text-lg)/1.5556 var(--font-mono);
		}
		li + li {
			border-top: 1px solid var(--border-subtle);
		}
		.archive-link {
			display: flex;
			min-block-size: 2.75rem;
			flex-wrap: wrap;
			align-items: baseline;
			justify-content: space-between;
			gap: 0.25rem 1rem;
			border-radius: var(--radius-sm);
			padding-block: 0.75rem;
			font-size: var(--text-sm);
			&:hover {
				color: var(--primary);
			}
		}
		time {
			color: var(--muted-foreground);
			font-size: var(--text-xs);
		}
	}
</style>
