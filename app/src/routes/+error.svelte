<script lang="ts">
	import { page } from '$app/state';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import SearchX from '@lucide/svelte/icons/search-x';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { pageMeta, SITE_URL } from '$lib/seo';

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

<main class="container mx-auto px-4">
	<div class="mx-auto mt-8 mb-24 max-w-2xl">
		<div
			border="border/50 2"
			bg="card"
			relative
			p="x-6 y-12 sm:x-12"
			text="center"
			class="clip-corner overflow-hidden"
			role="alert"
		>
			<CornerAccents
				tlSize="2rem"
				brSize="1.5rem"
				tlColor="bg-muted-foreground/30"
				brColor="bg-muted-foreground/20"
				thickness="2px"
			/>

			<div
				flex="~"
				border="border ~"
				bg="muted/30"
				m="x-auto b-6"
				items="center"
				justify="center"
				class="clip-corner-sm size-20"
			>
				{#if isMissing}
					<SearchX class="text-muted-foreground size-10" />
				{:else}
					<TriangleAlert class="text-destructive size-10" />
				{/if}
			</div>

			<h1
				font="display medium"
				text="foreground 2xl sm:3xl"
				m="b-3"
				class="tracking-wide"
			>
				{isMissing ? 'Not in the log' : 'That request failed'}
			</h1>

			<p text="muted-foreground" m="x-auto b-2" class="max-w-md leading-relaxed">
				{#if isMissing}
					Nothing is recorded at <span text="foreground" font="mono" class="break-all"
						>{page.url.pathname}</span
					>. Heroes and items are renamed between patches, so an older link can point at a
					name the archive no longer uses.
				{:else}
					{page.error?.message ?? 'The page could not be loaded.'} Reloading may be enough;
					if not, the archive is still reachable below.
				{/if}
			</p>

			<p text="muted-foreground xs" font="mono" m="b-8" class="tracking-wide">
				Status {page.status}
			</p>

			<nav aria-label="Recover">
				<ul
					flex="~ col sm:row"
					gap="2"
					justify="center"
					class="items-stretch sm:items-center"
				>
					<li>
						<a
							href="/heroes"
							border="signal/25 ~"
							bg="signal/10"
							text="signal sm"
							flex="~"
							class="ui-focus-ring min-h-11 items-center justify-center gap-1.5 rounded-md px-4 transition-colors hover:(bg-signal/20 border-signal/50)"
						>
							Browse heroes
							{#if heroCount}<span text="muted-foreground xs" font="mono"
									>{heroCount}</span
								>{/if}
						</a>
					</li>
					<li>
						<a
							href="/items"
							border="signal/25 ~"
							bg="signal/10"
							text="signal sm"
							flex="~"
							class="ui-focus-ring min-h-11 items-center justify-center gap-1.5 rounded-md px-4 transition-colors hover:(bg-signal/20 border-signal/50)"
						>
							Browse items
							{#if itemCount}<span text="muted-foreground xs" font="mono"
									>{itemCount}</span
								>{/if}
						</a>
					</li>
					<li>
						<a
							href="/archive"
							border="signal/25 ~"
							bg="signal/10"
							text="signal sm"
							flex="~"
							class="ui-focus-ring min-h-11 items-center justify-center gap-1.5 rounded-md px-4 transition-colors hover:(bg-signal/20 border-signal/50)"
						>
							Complete archive
							<ArrowRight class="size-3.5" />
						</a>
					</li>
				</ul>
			</nav>

			<p text="muted-foreground sm" m="t-8">
				Or search for a hero or item from the bar above.
			</p>
		</div>
	</div>
</main>
