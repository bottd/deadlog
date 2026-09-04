<script lang="ts">
	import { page } from '$app/state';
	import { searchParams as params } from '$lib/stores/searchParams.svelte';
	import { getHeroCardImage } from '$lib/utils/entityImages';
	import type { EnrichedHero } from '$lib/types';
	import { hasEntity, toggleEntityFilter } from './filterState.svelte';
	import { MAX_ENTITY_FILTERS } from '$lib/queries/keys';

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
	<div m="b-6" role="group" aria-labelledby="hero-rail-label">
		<span id="hero-rail-label" text="muted-foreground" m="b-2" block kicker-sm>
			&mdash; Filter by hero
			<span text="muted-foreground/60">({heroes.length})</span>
			{#if atCap}
				<span text="primary">&mdash; {MAX_ENTITY_FILTERS} hero limit reached</span>
			{/if}
		</span>
		<div relative>
			<div p="x-4 b-1" class="-mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:px-0">
				<div flex="~" w="max" gap="1.5" class="sm:w-auto sm:flex-wrap">
					{#each heroes as { hero, selected } (hero.id)}
						{@const blocked = !selected && atCap}
						<button
							type="button"
							onclick={() => toggleEntityFilter('hero', hero.name)}
							disabled={blocked}
							title={blocked ? `${hero.name} — filter limit reached` : hero.name}
							aria-label={blocked ? `${hero.name} — filter limit reached` : hero.name}
							aria-pressed={selected}
							class="clip-corner-sm relative size-9 shrink-0 overflow-hidden border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:scale-100 hover:z-10 hover:-translate-y-0.5 hover:scale-110 {selected
								? 'border-primary ring-primary/45 ring-2'
								: 'border-border hover:border-primary/55 opacity-70 hover:opacity-100'}"
						>
							<img
								src={getHeroCardImage(hero)}
								alt={hero.name}
								width="36"
								height="36"
								loading="lazy"
								decoding="async"
								class="size-full object-cover"
							/>
						</button>
					{/each}
				</div>
			</div>
			<div
				absolute
				aria-hidden="true"
				class="from-background pointer-events-none inset-y-0 right-0 w-10 bg-gradient-to-l to-transparent sm:hidden"
			></div>
		</div>
	</div>
{/if}
