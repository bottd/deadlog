<script lang="ts">
	import { page } from '$app/state';
	import { searchParams as params } from '$lib/stores/searchParams.svelte';
	import { getHeroCardImage } from '$lib/utils/entityImages';
	import type { EnrichedHero } from '$lib/types';
	import { hasEntity, toggleEntity } from './filterState.svelte';

	// ponytail: heroes only — the roster is ~25 (finite), so a full icon rail is
	// honest. Items number 70+; they stay in the search dropdown, not a rail.
	const heroes = $derived(
		((page.data.heroes ?? []) as EnrichedHero[])
			.filter((h) => h.isReleased)
			.sort((a, b) => a.name.localeCompare(b.name))
	);

	function toggle(name: string) {
		params.update({ hero: toggleEntity(params.hero, name) });
	}
</script>

{#if heroes.length > 0}
	<div m="b-6">
		<span
			text="muted-foreground"
			m="b-2"
			block
			font="mono"
			uppercase
			class="text-[10px] tracking-widest"
		>
			&mdash; Filter by hero
		</span>
		<div p="x-4 b-1" class="-mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:px-0">
			<div w="max" gap="1.5" class="sm:w-auto sm:flex-wrap flex">
				{#each heroes as hero (hero.id)}
					{@const selected = hasEntity(params.hero, hero.name)}
					<button
						type="button"
						onclick={() => toggle(hero.name)}
						title={hero.name}
						aria-label={hero.name}
						aria-pressed={selected}
						class="clip-corner-sm relative size-9 overflow-hidden border transition-all duration-200 hover:z-10 hover:-translate-y-0.5 hover:scale-110 {selected
							? 'border-signal ring-signal/45 ring-2'
							: 'border-border hover:border-signal/55 opacity-70 hover:opacity-100'}"
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
	</div>
{/if}
