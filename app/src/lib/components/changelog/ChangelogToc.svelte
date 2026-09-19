<script lang="ts">
	import type { ChangelogAbilityIcon, EntityIcon, MogTocEntry } from '$lib/types';
	import { entityFragmentId, resolveHeroAbilitySlug } from '@deadlog/utils';
	import { genericTocEntries } from './toc';

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

	const abilityIconsByHero = $derived.by(() => {
		const icons = new Map<number, ChangelogAbilityIcon[]>();
		for (const ability of abilityIcons) {
			const entries = icons.get(ability.heroId) ?? [];
			entries.push(ability);
			icons.set(ability.heroId, entries);
		}
		return icons;
	});
	const genericEntries = $derived(genericTocEntries({ toc, heroes, items }));

	// Everything else about `size` is CSS on `.toc.lg`; only the intrinsic image
	// dimensions have to be attributes, so that reserving space still prevents reflow.
	const iconPx = $derived(
		size === 'lg' ? { entity: 28, ability: 20 } : { entity: 16, ability: 14 }
	);

	// Level-2 headings are entities, level-3 their abilities; heading ids share the
	// entityFragmentId slug rule, so the entity's id keys its ability bucket.
	const groups = $derived.by(() => {
		const positions = new Map<string, Map<string, number>>();
		const abilities = new Map<string, MogTocEntry[]>();
		let section: Map<string, number> | undefined;
		let open: MogTocEntry[] | undefined;
		for (const entry of toc) {
			if (entry.level === 3) {
				open?.push(entry);
				continue;
			}
			open = undefined;
			if (entry.level === 1) {
				section = new Map();
				positions.set(entry.id, section);
			} else if (entry.level === 2) {
				section?.set(entry.id, section.size);
				open = [];
				abilities.set(entry.id, open);
			}
		}

		return [
			{ id: 'hero-changes', label: 'Heroes', entities: heroes },
			{ id: 'item-changes', label: 'Items', entities: items }
		]
			.filter((group) => group.entities.length > 0)
			.map((group) => {
				const order = positions.get(group.id);
				const rank = (entity: EntityIcon) =>
					order?.get(entityFragmentId(entity.alt)) ?? Number.MAX_SAFE_INTEGER;
				return {
					...group,
					entities: group.entities
						.toSorted((a, b) => rank(a) - rank(b))
						.map((entity) => {
							const fragment = entityFragmentId(entity.alt);
							const icons = abilityIconsByHero.get(entity.id) ?? [];
							return {
								...entity,
								fragment,
								abilities: (abilities.get(fragment) ?? []).map((ability) => {
									const slug = resolveHeroAbilitySlug(ability.title, icons);
									return {
										...ability,
										image: icons.find((icon) => icon.slug === slug)?.image
									};
								})
							};
						})
				};
			});
	});
</script>

<nav class="toc {size} toc-panel clip-corner-sm" aria-label="Table of contents">
	{#if size === 'sm'}
		<div bg="signal/50" m="b-4" h="px" w="8" aria-hidden="true"></div>

		<p text="muted-foreground" m="b-4" font="bold" class="kicker-xs tracking-[0.2em]">
			Contents
		</p>
	{/if}

	<div class="toc-tree" data-toc-tree>
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

		{#each groups as group (group.id)}
			<div class="toc-group">
				<a href="#{group.id}" class="toc-section" onclick={onnavigate}>
					<span class="toc-marker" aria-hidden="true"></span>
					{group.label}
					<span class="toc-count">{group.entities.length}</span>
				</a>
				<ul class="toc-entities">
					{#each group.entities as entity (entity.id)}
						<li>
							<a
								href="#{entity.fragment}"
								class="toc-entity toc-link min-w-0"
								onclick={onnavigate}
							>
								<img
									src={entity.src}
									alt=""
									width={iconPx.entity}
									height={iconPx.entity}
									loading="lazy"
									decoding="async"
									class="toc-entity-img"
								/>
								<span truncate>{entity.alt}</span>
							</a>
							{#if entity.abilities.length > 0}
								<ul space="y-px">
									{#each entity.abilities as ability, i (i)}
										<li>
											<a
												href="#{ability.id}"
												class="toc-ability toc-link"
												onclick={onnavigate}
											>
												{#if ability.image}
													<img
														src={ability.image}
														alt=""
														width={iconPx.ability}
														height={iconPx.ability}
														loading="lazy"
														decoding="async"
														class="toc-ability-icon toc-ability-img"
													/>
												{:else}
													<span class="toc-ability-icon" aria-hidden="true"></span>
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
		{/each}
	</div>
</nav>

<style lang="postcss">
	/* The `sm` rules below are the base; `.toc.lg` overrides only what actually changes. */
	.toc-tree {
		@apply space-y-1;
	}

	.toc-subsection {
		@apply text-muted-foreground pl-6 font-normal;
	}

	.toc-entities {
		@apply mt-0.5 space-y-px;
	}

	.toc-entity {
		@apply gap-1.5 py-0.5 pl-3 text-xs;
	}

	.toc-entity-img {
		@apply size-4 rounded object-cover;
	}

	.toc-ability {
		@apply ml-4 gap-1.5 py-0.5 pl-3 text-[11px];
	}

	.toc-ability-icon {
		@apply size-3.5 shrink-0;
	}

	.toc-ability-img {
		@apply rounded-sm object-cover;
	}

	.toc ul {
		@apply list-none;
	}

	.toc.lg .toc-tree {
		@apply space-y-1.5;
	}

	.toc.lg .toc-group {
		@apply pt-3;
	}

	.toc.lg .toc-section {
		@apply gap-3 py-2 pr-2 pl-4 text-sm;
	}

	.toc.lg .toc-count {
		@apply bg-signal/10 rounded-full px-2 py-0.5 text-xs font-medium;
	}

	.toc.lg .toc-marker {
		@apply h-4 w-0.5;
	}

	.toc.lg .toc-section:hover .toc-marker {
		@apply h-5;
	}

	.toc.lg .toc-entities {
		@apply mt-1 space-y-0.5;
	}

	.toc.lg .toc-entity {
		@apply gap-2.5 rounded py-1.5 pl-4 text-sm;
	}

	.toc.lg .toc-entity-img {
		@apply size-7;
	}

	.toc.lg .toc-ability {
		@apply ml-6 gap-2 py-1 pl-3 text-sm;
	}

	.toc.lg .toc-ability-icon {
		@apply size-5;
	}

	.toc.lg .toc-ability-img {
		@apply rounded;
	}
</style>
