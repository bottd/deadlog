<script lang="ts">
	import type { EntityIcon, MogTocEntry } from '$lib/types';
	import { entityFragmentId, entityHistoryHref } from './entityContext';
	import History from '@lucide/svelte/icons/history';

	interface Props {
		heroes: EntityIcon[];
		items: EntityIcon[];
		onnavigate?: () => void;
		size?: 'sm' | 'lg';
		hideGeneral?: boolean;
		/** Full mog toc; level-3 entries nest as ability links under their entity. */
		toc?: MogTocEntry[];
	}

	let {
		heroes,
		items,
		onnavigate,
		size = 'sm',
		hideGeneral = false,
		toc = []
	}: Props = $props();

	// Level-2 headings are entities, level-3 their abilities; heading ids share the
	// entityFragmentId slug rule, so the entity's id keys its ability bucket.
	const abilityEntries = $derived.by(() => {
		const buckets = new Map<string, MogTocEntry[]>();
		let open: MogTocEntry[] | undefined;
		for (const entry of toc) {
			if (entry.level === 2) {
				open = [];
				buckets.set(entry.id, open);
			} else if (entry.level === 3) open?.push(entry);
			else open = undefined;
		}
		return buckets;
	});
</script>

{#snippet tocGroup(href: string, label: string, count: number, entities: EntityIcon[])}
	<div class={size === 'lg' ? 'pt-3' : 'pt-2'}>
		<a {href} class="toc-section" onclick={onnavigate}>
			<span class="toc-marker" aria-hidden="true"></span>
			{label}
			<span
				class={size === 'lg'
					? 'bg-signal/10 text-signal ml-auto rounded-full px-2 py-0.5 font-mono text-xs font-medium'
					: 'text-signal/50 ml-auto font-mono text-[10px]'}>{count}</span
			>
		</a>
		<ul class={size === 'lg' ? 'mt-1 space-y-0.5' : 'mt-0.5 space-y-px'}>
			{#each entities as entity (entity.id)}
				{@const abilities = abilityEntries.get(entityFragmentId(entity.alt)) ?? []}
				<li>
					<div class="flex items-center">
						<a
							href="#{entityFragmentId(entity.alt)}"
							class="toc-entity min-w-0 flex-1"
							onclick={onnavigate}
						>
							<img
								src={entity.src}
								alt=""
								width={size === 'lg' ? 28 : 16}
								height={size === 'lg' ? 28 : 16}
								loading="lazy"
								decoding="async"
								class={size === 'lg'
									? 'size-7 rounded object-cover'
									: 'size-4 rounded object-cover'}
							/>
							<span class="truncate">{entity.alt}</span>
						</a>
						<a
							href={entityHistoryHref(entity.type, entity.slug)}
							class="toc-history"
							aria-label="{entity.alt} patch history"
						>
							<History class={size === 'lg' ? 'size-4' : 'size-3'} />
						</a>
					</div>
					{#if abilities.length > 0}
						<ul class="space-y-px">
							{#each abilities as ability, i (i)}
								<li>
									<a
										href="#{ability.id}"
										class="toc-ability {size === 'lg' ? 'py-1 pl-12 text-sm' : ''}"
										onclick={onnavigate}
									>
										<span class="truncate">{ability.title}</span>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

<nav class="toc {size}" aria-label="Table of contents">
	{#if size === 'sm'}
		<div class="bg-signal/50 mb-4 h-px w-8" aria-hidden="true"></div>

		<h2
			class="text-muted-foreground mb-4 font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
		>
			Contents
		</h2>
	{/if}

	<div
		class={size === 'lg'
			? 'border-border/60 space-y-1.5 border-l-2'
			: 'border-border/60 space-y-1 border-l'}
	>
		{#if !hideGeneral}
			<a href="#general-changes" class="toc-section" onclick={onnavigate}>
				<span class="toc-marker" aria-hidden="true"></span>
				General
			</a>
		{/if}

		{#if heroes.length > 0}
			{@render tocGroup('#hero-changes', 'Heroes', heroes.length, heroes)}
		{/if}

		{#if items.length > 0}
			{@render tocGroup('#item-changes', 'Items', items.length, items)}
		{/if}
	</div>
</nav>

<style lang="postcss">
	@reference "../../../app.css";

	.toc-section {
		@apply text-foreground/70 hover:text-signal relative flex items-center gap-2 py-1 pl-3 text-xs font-semibold tracking-tight transition-colors;
	}

	.toc-marker {
		@apply bg-signal/0 absolute top-1/2 left-[-0.5px] h-3 w-px -translate-y-1/2 transition-all duration-200;
	}

	.toc-section:hover .toc-marker {
		@apply bg-signal h-4;
	}

	.toc-entity {
		@apply text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-1.5 rounded-sm py-0.5 pl-6 text-xs transition-colors;
	}

	.toc-history {
		@apply text-muted-foreground/60 hover:text-signal shrink-0 rounded-sm p-1 transition-colors;
	}

	.toc-ability {
		@apply text-muted-foreground/70 hover:text-foreground hover:bg-muted/50 flex items-center rounded-sm py-0.5 pl-[2.85rem] text-[11px] transition-colors;
	}

	.toc ul {
		@apply list-none;
	}

	/* Large variant for mobile sheet */
	.toc.lg .toc-section {
		@apply gap-3 py-2 pr-2 pl-4 text-sm;
	}

	.toc.lg .toc-marker {
		@apply h-4 w-0.5;
	}

	.toc.lg .toc-section:hover .toc-marker {
		@apply h-5;
	}

	.toc.lg .toc-entity {
		@apply gap-2.5 rounded py-1.5 pl-8 text-sm;
	}
</style>
