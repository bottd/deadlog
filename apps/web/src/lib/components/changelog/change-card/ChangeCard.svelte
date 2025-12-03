<script lang="ts">
	import { NoteWithPatterns } from '..';
	import type { HeroAbilityChange, Note as NoteType } from '@deadlog/db';

	interface Props {
		title: string;
		image?: string;
		notes: NoteType[];
		abilities?: HeroAbilityChange[];
	}

	let { title, image, notes, abilities = [] }: Props = $props();
</script>

<div class="border-border border-b py-4 last:border-b-0">
	<div class="mb-2 flex items-center gap-3">
		{#if image}
			<img
				src={image}
				alt={title}
				width="36"
				height="36"
				loading="lazy"
				decoding="async"
				class="border-primary/30 bg-card size-9 rounded-full border object-cover"
			/>
		{/if}
		<h4 class="text-primary font-display text-base">
			{title}
		</h4>
	</div>

	<!-- Ability-specific changes -->
	{#if abilities && abilities.length > 0}
		<div class="ml-12 space-y-3">
			{#each abilities as ability, i (i)}
				<div>
					<div class="mb-1 flex items-center gap-2">
						{#if ability.abilityImage}
							<img
								src={ability.abilityImage}
								alt={ability.abilityName}
								width="24"
								height="24"
								loading="lazy"
								decoding="async"
								class="border-primary/20 size-6 rounded border object-cover"
							/>
						{/if}
						<h5 class="text-primary text-sm font-semibold">{ability.abilityName}</h5>
					</div>
					<ul class="ml-8 list-disc space-y-0.5">
						{#each ability.notes as note, j (j)}
							<li class="text-foreground/90 text-sm">
								<NoteWithPatterns {note} />
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	{/if}

	<!-- General hero notes (not ability-specific) -->
	{#if notes.length > 0}
		<ul
			class="ml-12 list-disc space-y-0.5"
			class:mt-2={abilities && abilities.length > 0}
		>
			{#each notes as note, i (i)}
				<li class="text-foreground/90 text-sm">
					<NoteWithPatterns {note} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
