<script lang="ts">
	import { NoteWithPatterns } from '..';
	import type { HeroAbilityChange, Note as NoteType } from '@deadlog/db';

	interface Props {
		title: string;
		image?: string;
		notes: NoteType[];
		abilities?: HeroAbilityChange[];
		isHighlighted?: boolean;
	}

	let { title, image, notes, abilities = [], isHighlighted = false }: Props = $props();
</script>

<div
	class="group rounded-lg border p-4 shadow-md transition-all hover:translate-x-1 {isHighlighted
		? 'border-primary/50 bg-primary/5 shadow-primary/20 hover:border-primary/70 hover:shadow-primary/30 hover:shadow-lg'
		: 'border-border bg-card hover:border-primary/40 hover:shadow-primary/10 hover:shadow-lg'}"
>
	<div class="mb-3 flex items-center gap-3">
		{#if image}
			<img
				src={image}
				alt={title}
				width="48"
				height="48"
				loading="lazy"
				decoding="async"
				class="border-primary/30 group-hover:border-primary/50 group-hover:shadow-primary/20 size-12 rounded-full border-2 object-cover shadow-sm transition-all group-hover:shadow-md"
			/>
		{/if}
		<h4
			class="text-primary text-lg font-semibold transition-colors group-hover:opacity-80"
		>
			{title}
		</h4>
	</div>
	<!-- Ability-specific changes -->
	{#if abilities && abilities.length > 0}
		<div class="space-y-3">
			{#each abilities as ability, i (i)}
				<div class="border-border/50 bg-background/50 rounded border p-3">
					<div class="mb-2 flex items-center gap-2">
						{#if ability.abilityImage}
							<img
								src={ability.abilityImage}
								alt={ability.abilityName}
								width="32"
								height="32"
								loading="lazy"
								decoding="async"
								class="border-primary/20 size-8 rounded border object-cover"
							/>
						{/if}
						<h5 class="text-primary text-sm font-semibold">{ability.abilityName}</h5>
					</div>
					<ul class="list-none space-y-1.5">
						{#each ability.notes as note, j (j)}
							<li class="text-foreground/90 text-sm leading-relaxed">
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
		<ul class="list-none space-y-2" class:mt-3={abilities && abilities.length > 0}>
			{#each notes as note, i (i)}
				<li class="text-foreground/90 text-sm leading-relaxed">
					<NoteWithPatterns {note} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
