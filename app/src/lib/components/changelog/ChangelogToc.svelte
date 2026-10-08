<script lang="ts">
	import './toc.css';
	import type {
		ChangelogAbilityIcon,
		ChangelogEntityIcon,
		MogTocEntry
	} from '#lib/types.ts';
	import { resolveHeroAbilitySlug } from '@deadlog/utils';
	import { genericTocEntries } from './toc';

	interface Props {
		heroes: ChangelogEntityIcon[];
		items: ChangelogEntityIcon[];
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

	const abilityIconsByHero = $derived(
		Map.groupBy(abilityIcons, (ability) => ability.heroId)
	);
	const genericEntries = $derived(genericTocEntries({ toc, heroes, items }));

	// Everything else about `size` is CSS on data-size; only the intrinsic image
	// dimensions have to be attributes, so that reserving space still prevents reflow.
	const iconPx = $derived(
		size === 'lg' ? { entity: 28, ability: 20 } : { entity: 16, ability: 14 }
	);

	// Level-2 headings are entities, level-3 their abilities; an entity's anchor is its
	// heading id, so it keys its ability bucket.
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
				const rank = (entity: ChangelogEntityIcon) =>
					order?.get(entity.anchor) ?? Number.MAX_SAFE_INTEGER;
				return {
					...group,
					entities: group.entities
						.toSorted((a, b) => rank(a) - rank(b))
						.map((entity) => {
							const fragment = entity.anchor;
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

<nav class="toc-panel clip-corner-sm" data-size={size} aria-label="Table of contents">
	{#if size === 'sm'}
		<div class="toc-rule" aria-hidden="true"></div>

		<p class="toc-label kicker-xs">Contents</p>
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
				class={['toc-section', entry.level > 1 && 'toc-subsection']}
				onclick={onnavigate}
			>
				<span class="toc-marker" aria-hidden="true"></span>
				<span class="toc-heading-text">{entry.title}</span>
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
								class="toc-entity toc-link"
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
								<span class="toc-link-text">{entity.alt}</span>
							</a>
							{#if entity.abilities.length > 0}
								<ul class="toc-abilities">
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
												<span class="toc-link-text">{ability.title}</span>
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
