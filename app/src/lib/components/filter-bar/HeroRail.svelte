<script lang="ts">
	import { page } from '$app/state';
	import { searchParams as params } from '$lib/stores/searchParams.svelte';
	import { getHeroCardImage } from '$lib/utils/entityImages';
	import { toggleArray } from '$lib/utils/toggle';
	import type { EnrichedHero } from '$lib/types';

	// ponytail: heroes only — the roster is ~25 (finite), so a full icon rail is
	// honest. Items number 70+; they stay in the search dropdown, not a rail.
	const heroes = $derived(
		((page.data.heroes ?? []) as EnrichedHero[])
			.filter((h) => h.isReleased)
			.sort((a, b) => a.name.localeCompare(b.name))
	);

	function toggle(name: string) {
		params.update({ hero: toggleArray(params.hero, name), q: '' });
	}
</script>

{#if heroes.length > 0}
	<div class="mb-6">
		<span
			class="text-muted-foreground mb-2 block font-mono text-[10px] tracking-widest uppercase"
		>
			&mdash; Jump to hero
		</span>
		<div class="flex flex-wrap gap-1.5">
			{#each heroes as hero (hero.id)}
				{@const selected = params.hero.includes(hero.name)}
				<button
					type="button"
					onclick={() => toggle(hero.name)}
					title={hero.name}
					aria-label={hero.name}
					aria-pressed={selected}
					class="clip-corner-sm relative size-9 overflow-hidden border transition-all duration-200 hover:z-10 hover:-translate-y-0.5 hover:scale-110 {selected
						? 'border-primary ring-primary/50 ring-2'
						: 'border-border hover:border-primary/50 opacity-70 hover:opacity-100'}"
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
{/if}
