<script lang="ts">
	import { page } from '$app/state';
	import { searchParams as params } from '#lib/stores/searchParams.svelte.ts';
	import { getHeroCardImage } from '#lib/utils/entityImages.ts';
	import type { EnrichedHero } from '#lib/types.ts';
	import { hasEntity, toggleEntityFilter } from './filterState.svelte';
	import { MAX_ENTITY_FILTERS } from '#lib/queries/keys.ts';

	// ponytail: heroes only — the roster is finite, so a full icon rail is honest.
	// Items number 70+; they stay in the search dropdown, not a rail.
	// Selected lead the rail: the mobile strip only shows a fraction of the roster.
	const heroes = $derived.by(() => {
		const selected = params.hero;
		return ((page.data.heroes ?? []) as EnrichedHero[])
			.filter((h) => h.isReleased)
			.map((hero) => ({ hero, selected: hasEntity(selected, hero.name) }))
			.sort(
				(a, b) =>
					Number(b.selected) - Number(a.selected) ||
					a.hero.name.localeCompare(b.hero.name)
			);
	});

	const atCap = $derived(params.heroAtCap);
</script>

{#if heroes.length > 0}
	<div class="hero-rail" role="group" aria-labelledby="hero-rail-label">
		<span id="hero-rail-label" class="rail-label kicker-sm">
			&mdash; Filter by hero
			<span>({heroes.length})</span>
			{#if atCap}
				<span class="limit">&mdash; {MAX_ENTITY_FILTERS} hero limit reached</span>
			{/if}
		</span>
		<div class="rail-frame">
			<div class="rail-scroll">
				<div class="rail-options">
					{#each heroes as { hero, selected } (hero.id)}
						{const blocked = !selected && atCap}
						<button
							type="button"
							onclick={() => toggleEntityFilter('hero', hero.name)}
							disabled={blocked}
							title={blocked ? `${hero.name} — filter limit reached` : hero.name}
							aria-label={blocked ? `${hero.name} — filter limit reached` : hero.name}
							aria-pressed={selected}
							class="clip-corner-sm hero-option"
						>
							<img
								src={getHeroCardImage(hero)}
								alt={hero.name}
								width="36"
								height="36"
								loading="lazy"
								decoding="async"
								class="hero-image"
							/>
						</button>
					{/each}
				</div>
			</div>
			<div aria-hidden="true" class="rail-fade"></div>
		</div>
	</div>
{/if}

<style>
	@layer components.features {
		.hero-rail {
			margin-bottom: 0.5rem;
		}
		.rail-label {
			display: block;
			margin-bottom: 0.5rem;
			color: var(--muted-foreground);
		}
		.limit {
			color: var(--primary);
		}
		.rail-frame {
			position: relative;
		}
		.rail-scroll {
			overflow-x: auto;
			margin-inline: -1rem;
			padding: 0 1rem 0.25rem;
		}
		.rail-options {
			display: flex;
			inline-size: max-content;
			gap: 0.375rem;
		}
		.hero-option {
			position: relative;
			inline-size: 2.75rem;
			block-size: 2.75rem;
			flex-shrink: 0;
			border: 1px solid var(--border);
			opacity: 0.7;
			transition:
				border-color var(--duration-normal),
				opacity var(--duration-normal);
			&:hover:not(:disabled) {
				z-index: 10;
			}
			&:hover:not(:disabled, [aria-pressed='true']) {
				border-color: color-mix(in srgb, var(--primary) 55%, transparent);
				opacity: 1;
			}
			&[aria-pressed='true'] {
				border-color: var(--primary);
				opacity: 1;
			}
			&:disabled {
				cursor: not-allowed;
				opacity: 0.3;
			}
		}
		.hero-image {
			inline-size: 100%;
			block-size: 100%;
			object-fit: cover;
		}
		.rail-fade {
			position: absolute;
			inset-block: 0;
			right: 0;
			inline-size: 2.5rem;
			pointer-events: none;
			background: linear-gradient(to left, var(--background), transparent);
		}
		@media (min-width: 40rem) {
			.rail-scroll {
				margin-inline: 0;
				padding-inline: 0;
				overflow: visible;
			}
			.rail-options {
				inline-size: auto;
				flex-wrap: wrap;
			}
			.rail-fade {
				display: none;
			}
		}
	}
</style>
