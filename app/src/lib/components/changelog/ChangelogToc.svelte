<script lang="ts">
	import type { EntityIcon } from '$lib/types';

	interface Props {
		heroes: EntityIcon[];
		items: EntityIcon[];
		onnavigate?: () => void;
		size?: 'sm' | 'lg';
		/** id of the section/entity currently in view (for active-section highlight). */
		activeId?: string;
		hideGeneral?: boolean;
	}

	let {
		heroes,
		items,
		onnavigate,
		size = 'sm',
		activeId = '',
		hideGeneral = false
	}: Props = $props();

	// Must match the id scheme used by EntityHeading/section anchors (no article stripping)
	// so jump-links resolve and the active-section highlight lines up.
	function slugify(name: string): string {
		return name
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}
</script>

{#snippet tocGroup(href: string, label: string, count: number, entities: EntityIcon[])}
	<div class={size === 'lg' ? 'pt-3' : 'pt-2'}>
		<a
			{href}
			class="toc-section"
			aria-current={href === `#${activeId}` ? 'location' : undefined}
			onclick={onnavigate}
		>
			<span class="toc-marker" aria-hidden="true"></span>
			{label}
			<span
				class={size === 'lg'
					? 'bg-primary/10 text-primary ml-auto rounded-full px-2 py-0.5 font-mono text-xs font-medium'
					: 'text-primary/80 ml-auto font-mono text-[10px]'}>{count}</span
			>
		</a>
		<ul class={size === 'lg' ? 'mt-1 space-y-0.5' : 'mt-0.5 space-y-px'}>
			{#each entities as entity (entity.id)}
				<li>
					<a
						href="#{slugify(entity.alt)}"
						class="toc-entity"
						aria-current={slugify(entity.alt) === activeId ? 'location' : undefined}
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
								? 'size-7 rounded-md object-cover'
								: 'size-4 rounded-md object-cover'}
						/>
						<span class="truncate">{entity.alt}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

<nav class="toc {size}" aria-label="Table of contents">
	{#if size === 'sm'}
		<div class="bg-primary/40 mb-4 h-px w-8" aria-hidden="true"></div>

		<p
			class="text-muted-foreground mb-4 font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
		>
			Contents
		</p>
	{/if}

	<div
		class={size === 'lg'
			? 'border-border/60 space-y-1.5 border-l-2'
			: 'border-border/60 space-y-1 border-l'}
	>
		{#if !hideGeneral}
			<a
				href="#general-changes"
				class="toc-section"
				aria-current={activeId === 'general-changes' ? 'location' : undefined}
				onclick={onnavigate}
			>
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
		@apply text-foreground/70 hover:text-primary relative flex items-center gap-2 py-1 pl-3 text-xs font-semibold tracking-tight transition-colors;
	}

	.toc-marker {
		@apply bg-primary/0 absolute top-1/2 left-[-0.5px] h-3 w-px -translate-y-1/2 transition-all duration-200;
	}

	.toc-section:hover .toc-marker,
	.toc-section[aria-current] .toc-marker {
		@apply bg-primary h-4;
	}

	.toc-section[aria-current] {
		@apply text-primary;
	}

	.toc-entity {
		@apply text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-1.5 rounded-sm py-0.5 pl-6 text-xs transition-colors;
	}

	.toc-entity[aria-current] {
		@apply text-foreground bg-primary/10;
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
