<script lang="ts">
	import { page } from '$app/state';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import SearchX from '@lucide/svelte/icons/search-x';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import CornerAccents from '#lib/components/ui/corner-accents/CornerAccents.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { pageMeta, SITE_URL } from '#lib/seo.ts';

	const isMissing = $derived(page.status === 404);
	const heroCount = $derived(page.data?.heroes?.length ?? 0);
	const itemCount = $derived(page.data?.items?.length ?? 0);
</script>

<MetaTags
	{...pageMeta({
		title: 'Not found | Deadlog',
		description: 'That page is not in the Deadlog archive.',
		canonical: `${SITE_URL}${page.url.pathname}`,
		indexable: false
	})}
/>

<main class="page-container error-page">
	<div class="error-content">
		<div class="empty-panel clip-corner" role="alert">
			<CornerAccents tlSize="2rem" brSize="1.5rem" thickness="2px" />

			<div class="empty-symbol clip-corner-sm">
				{#if isMissing}
					<SearchX class="icon-xl" />
				{:else}
					<TriangleAlert class="icon-xl error-icon" />
				{/if}
			</div>

			<h1 class="empty-heading">
				{isMissing ? 'Not in the log' : 'That request failed'}
			</h1>

			<p class="empty-copy">
				{#if isMissing}
					Nothing is recorded at <span class="missing-path">{page.url.pathname}</span>.
					Heroes and items are renamed between patches, so an older link can point at a
					name the archive no longer uses.
				{:else}
					{page.error?.message ?? 'The page could not be loaded.'} Reloading may be enough;
					if not, the archive is still reachable below.
				{/if}
			</p>

			<p class="error-status metadata">
				Status {page.status}
			</p>

			<nav aria-label="Recover">
				<ul class="recovery-links">
					<li>
						<a href="/heroes" class="pill-signal">
							Browse heroes
							{#if heroCount}<span class="entity-count metadata">{heroCount}</span>{/if}
						</a>
					</li>
					<li>
						<a href="/items" class="pill-signal">
							Browse items
							{#if itemCount}<span class="entity-count metadata">{itemCount}</span>{/if}
						</a>
					</li>
					<li>
						<a href="/archive" class="pill-signal">
							Complete archive
							<ArrowRight class="icon-sm" />
						</a>
					</li>
				</ul>
			</nav>

			<p class="search-suggestion">Or search for a hero or item from the bar above.</p>
		</div>
	</div>
</main>

<style>
	@layer components.features {
		.error-content {
			max-inline-size: 42rem;
			margin: 2rem auto 6rem;
		}
		.empty-panel {
			padding-inline: 1.5rem;
		}
		.empty-copy {
			margin-bottom: 0.5rem;
		}
		:global(.error-icon) {
			color: var(--destructive);
		}
		.missing-path {
			color: var(--foreground);
			font-family: var(--font-mono);
			word-break: break-all;
		}
		.error-status {
			margin-bottom: 2rem;
			letter-spacing: 0.025em;
		}
		.recovery-links {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0.5rem;
		}
		.pill-signal {
			display: flex;
		}
		.search-suggestion {
			margin-top: 2rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		@media (min-width: 40rem) {
			.empty-panel {
				padding-inline: 3rem;
			}
			.empty-heading {
				font-size: var(--text-3xl);
				line-height: var(--leading-3xl);
			}
			.recovery-links {
				flex-direction: row;
				align-items: center;
			}
		}
	}
</style>
