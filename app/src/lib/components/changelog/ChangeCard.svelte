<script lang="ts">
	import NoteWithPatterns from './NoteWithPatterns.svelte';
	import type { HeroAbilityChange, Note as NoteType } from '@deadlog/db';

	interface Props {
		title: string;
		image?: string;
		notes: NoteType[];
		abilities?: HeroAbilityChange[];
	}

	let { title, image, notes, abilities = [] }: Props = $props();
</script>

<div
	class="group border-border-subtle hover:bg-card-accent/30 relative border-b py-6 transition-all duration-300 last:border-b-0"
>
	<div
		class="bg-primary/0 group-hover:bg-primary/50 absolute top-6 left-0 h-14 w-0.5 rounded-full transition-all duration-300 group-hover:h-16"
	></div>

	<div class="mb-4 flex items-center gap-4 pl-4">
		{#if image}
			<div class="relative">
				<div
					class="bg-primary/5 absolute inset-0 rounded-lg opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
				></div>
				<img
					src={image}
					alt={title}
					width="40"
					height="40"
					loading="lazy"
					decoding="async"
					class="border-primary/20 bg-card group-hover:border-primary/40 group-hover:shadow-primary/10 relative size-10 rounded-lg border object-cover shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
				/>
			</div>
		{/if}
		<h4
			class="text-primary font-display text-lg tracking-tight transition-all duration-300 group-hover:translate-x-0.5"
		>
			{title}
		</h4>
	</div>

	{#if abilities && abilities.length > 0}
		<div class="ml-14 space-y-4 pl-2">
			{#each abilities as ability, i (i)}
				<div class="group/ability relative">
					<div class="mb-2 flex items-center gap-3">
						{#if ability.abilityImage}
							<img
								src={ability.abilityImage}
								alt={ability.abilityName}
								width="24"
								height="24"
								loading="lazy"
								decoding="async"
								class="border-primary/15 group-hover/ability:border-primary/30 size-6 rounded border object-cover transition-all duration-200 group-hover/ability:scale-105"
							/>
						{/if}
						<h5 class="text-primary text-sm font-semibold tracking-tight">
							{ability.abilityName}
						</h5>
					</div>
					<ul class="marker:text-primary/40 ml-9 list-disc space-y-1.5">
						{#each ability.notes as note, j (j)}
							<li class="text-foreground/85 pl-1 text-sm leading-relaxed">
								<NoteWithPatterns {note} />
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	{/if}

	{#if notes.length > 0}
		<ul
			class="marker:text-primary/40 ml-14 list-disc space-y-1.5 pl-2"
			class:mt-3={abilities && abilities.length > 0}
		>
			{#each notes as note, i (i)}
				<li class="text-foreground/85 pl-1 text-sm leading-relaxed">
					<NoteWithPatterns {note} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
