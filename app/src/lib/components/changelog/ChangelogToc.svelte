<script lang="ts">
	import type { ChangelogAbilityIcon, EntityIcon, MogTocEntry } from '$lib/types';
	import { entityFragmentId, resolveHeroAbilitySlug } from '@deadlog/utils';

	interface Props {
		heroes: EntityIcon[];
		items: EntityIcon[];
		abilityIcons?: ChangelogAbilityIcon[];
		onnavigate?: () => void;
		size?: 'sm' | 'lg';
		hideGeneral?: boolean;
		/** Full mog toc; level-3 entries nest as ability links under their entity. */
		toc?: MogTocEntry[];
	}

	let {
		heroes,
		items,
		abilityIcons = [],
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

	const abilityIconsByHero = $derived.by(() => {
		const icons = new Map<number, ChangelogAbilityIcon[]>();
		for (const ability of abilityIcons) {
			const entries = icons.get(ability.heroId) ?? [];
			entries.push(ability);
			icons.set(ability.heroId, entries);
		}
		return icons;
	});
	const genericEntries = $derived(
		heroes.length + items.length === 0
			? toc.filter(
					(entry) =>
						!['general-changes', 'hero-changes', 'item-changes'].includes(entry.id)
				)
			: []
	);

	function abilityImage(heroId: number, entry: MogTocEntry): string | undefined {
		const icons = abilityIconsByHero.get(heroId) ?? [];
		const slug = resolveHeroAbilitySlug(entry.title, icons);
		return icons.find((ability) => ability.slug === slug)?.image;
	}

	function orderEntities(sectionId: string, entities: EntityIcon[]): EntityIcon[] {
		const positions = new Map<string, number>();
		let inSection = false;
		for (const entry of toc) {
			if (entry.level === 1) {
				inSection = entry.id === sectionId;
				continue;
			}
			if (inSection && entry.level === 2) positions.set(entry.id, positions.size);
		}

		return [...entities].sort(
			(a, b) =>
				(positions.get(entityFragmentId(a.alt)) ?? Number.MAX_SAFE_INTEGER) -
				(positions.get(entityFragmentId(b.alt)) ?? Number.MAX_SAFE_INTEGER)
		);
	}
</script>

{#snippet tocGroup(href: string, label: string, count: number, entities: EntityIcon[])}
	{@const orderedEntities = orderEntities(href.slice(1), entities)}
	<div class={size === 'lg' ? 'pt-3' : 'pt-2'}>
		<a {href} class="toc-section" onclick={onnavigate}>
			<span class="toc-marker" aria-hidden="true"></span>
			{label}
			<span
				class={size === 'lg'
					? 'bg-signal/10 text-signal ml-auto rounded-full px-2 py-0.5 font-mono text-xs font-medium'
					: 'text-signal ml-auto font-mono text-[10px]'}>{count}</span
			>
		</a>
		<ul class={size === 'lg' ? 'mt-1 space-y-0.5' : 'mt-0.5 space-y-px'}>
			{#each orderedEntities as entity (entity.id)}
				{@const abilities = abilityEntries.get(entityFragmentId(entity.alt)) ?? []}
				<li>
					<a
						href="#{entityFragmentId(entity.alt)}"
						class="toc-entity min-w-0"
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
						<span truncate>{entity.alt}</span>
					</a>
					{#if abilities.length > 0}
						<ul space="y-px">
							{#each abilities as ability, i (i)}
								{@const image = abilityImage(entity.id, ability)}
								<li>
									<a
										href="#{ability.id}"
										class="toc-ability {size === 'lg' ? 'py-1 text-sm' : ''}"
										onclick={onnavigate}
									>
										{#if image}
											<img
												src={image}
												alt=""
												width={size === 'lg' ? 20 : 14}
												height={size === 'lg' ? 20 : 14}
												loading="lazy"
												decoding="async"
												class={size === 'lg'
													? 'size-5 shrink-0 rounded object-cover'
													: 'size-3.5 shrink-0 rounded-sm object-cover'}
											/>
										{:else}
											<span
												class={size === 'lg' ? 'size-5 shrink-0' : 'size-3.5 shrink-0'}
												aria-hidden="true"
											></span>
										{/if}
										<span truncate>{ability.title}</span>
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

<nav
	class="toc {size} clip-corner-sm border-border/60 bg-card/80 border p-3 shadow-sm backdrop-blur-sm"
	aria-label="Table of contents"
>
	{#if size === 'sm'}
		<div bg="signal/50" m="b-4" h="px" w="8" aria-hidden="true"></div>

		<p
			text="muted-foreground"
			m="b-4"
			font="mono bold"
			uppercase
			class="text-[10px] tracking-[0.2em]"
		>
			Contents
		</p>
	{/if}

	<div class={size === 'lg' ? 'space-y-1.5' : 'space-y-1'} data-toc-tree>
		{#if !hideGeneral}
			<a href="#general-changes" class="toc-section" onclick={onnavigate}>
				<span class="toc-marker" aria-hidden="true"></span>
				General
			</a>
		{/if}

		{#each genericEntries as entry (entry.id)}
			<a
				href="#{entry.id}"
				class="toc-section {entry.level > 1 ? 'toc-subsection' : ''}"
				onclick={onnavigate}
			>
				<span class="toc-marker" aria-hidden="true"></span>
				<span class="line-clamp-2 leading-tight">{entry.title}</span>
			</a>
		{/each}

		{#if heroes.length > 0}
			{@render tocGroup('#hero-changes', 'Heroes', heroes.length, heroes)}
		{/if}

		{#if items.length > 0}
			{@render tocGroup('#item-changes', 'Items', items.length, items)}
		{/if}
	</div>
</nav>

<style lang="postcss">
	.toc-section {
		@apply text-foreground/80 hover:text-signal relative flex items-center gap-2 py-1 pl-3 text-xs font-semibold tracking-tight transition-colors;
	}

	.toc-subsection {
		@apply text-muted-foreground pl-6 font-normal;
	}

	.toc-marker {
		@apply bg-signal/0 absolute top-1/2 left-[-0.5px] h-3 w-px -translate-y-1/2 transition-all duration-200;
	}

	.toc-section:hover .toc-marker {
		@apply bg-signal h-4;
	}

	.toc-entity {
		@apply text-muted-foreground hover:bg-muted/50 hover:text-foreground flex items-center gap-1.5 rounded-sm py-0.5 pl-3 text-xs transition-colors;
	}

	.toc-ability {
		@apply text-muted-foreground hover:bg-muted/50 hover:text-foreground ml-4 flex items-center gap-1.5 rounded-sm py-0.5 pl-3 text-[11px] transition-colors;
	}

	.toc ul {
		@apply list-none;
	}

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
		@apply gap-2.5 rounded py-1.5 pl-4 text-sm;
	}

	.toc.lg .toc-ability {
		@apply ml-6 gap-2 pl-3;
	}
</style>
