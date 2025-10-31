<script lang="ts">
	import { NoteWithPatterns } from '..';
	import type {
		HeroAbilityChange,
		NoteWithPatterns as NoteWithPatternsType
	} from '@deadlog/db';

	interface Props {
		title: string;
		image?: string;
		notes: NoteWithPatternsType[];
		abilities?: HeroAbilityChange[];
		isHighlighted?: boolean;
	}

	let { title, image, notes, abilities = [], isHighlighted = false }: Props = $props();
</script>

<div
	class="group rounded-lg border p-4 shadow-md transition-all hover:translate-x-1 {isHighlighted
		? 'border-[#c89b3c]/50 bg-[#c89b3c]/5 shadow-[#c89b3c]/20 hover:border-[#c89b3c]/70 hover:shadow-lg hover:shadow-[#c89b3c]/30'
		: 'border-[#1a1a1a] bg-[#0f0f0f] hover:border-[#c89b3c]/40 hover:shadow-lg hover:shadow-[#c89b3c]/10'}"
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
				class="size-12 rounded-full border-2 border-[#c89b3c]/30 object-cover shadow-sm transition-all group-hover:border-[#c89b3c]/50 group-hover:shadow-md group-hover:shadow-[#c89b3c]/20"
			/>
		{/if}
		<h4
			class="text-lg font-semibold text-[#c89b3c] transition-colors group-hover:text-[#d4a854]"
		>
			{title}
		</h4>
	</div>
	<!-- Ability-specific changes -->
	{#if abilities && abilities.length > 0}
		<div class="space-y-3">
			{#each abilities as ability, i (i)}
				<div class="rounded border border-[#1a1a1a]/50 bg-[#0a0a0a]/50 p-3">
					<div class="mb-2 flex items-center gap-2">
						{#if ability.abilityImage}
							<img
								src={ability.abilityImage}
								alt={ability.abilityName}
								width="32"
								height="32"
								loading="lazy"
								decoding="async"
								class="size-8 rounded border border-[#c89b3c]/20 object-cover"
							/>
						{/if}
						<h5 class="text-sm font-semibold text-[#c89b3c]">{ability.abilityName}</h5>
					</div>
					<ul class="list-none space-y-1.5">
						{#each ability.notes as note, j (j)}
							<li class="text-sm leading-relaxed text-gray-300">
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
				<li class="text-sm leading-relaxed text-gray-300">
					<NoteWithPatterns {note} />
				</li>
			{/each}
		</ul>
	{/if}
</div>
