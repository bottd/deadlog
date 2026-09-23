<script lang="ts">
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import type { PageContext } from './pageContext';

	let {
		context,
		name,
		variant,
		historyHref
	}: {
		context: PageContext;
		name: string;
		variant: 'group' | 'header';
		historyHref?: string;
	} = $props();

	const version = $derived(context.clientVersion);
	const closing = $derived(
		`${version === null ? `Current details for ${name}` : `Describes ${name} as of client ${version}`}${
			variant === 'group' ? ', not as of this patch' : ''
		}.`
	);
	const lead = $derived(context.sections.filter((section) => section.label === null));
	const labelled = $derived(context.sections.filter((section) => section.label !== null));
</script>

<details class="text-sm" data-entity-context>
	<summary
		class="ui-focus-ring text-muted-foreground -my-1 flex w-fit cursor-pointer list-none items-center gap-2 rounded-sm py-3"
	>
		<ChevronRight aria-hidden="true" class="details-marker size-3.5 shrink-0" /><span
			>{variant === 'header'
				? `About ${name}`
				: 'Current details'}{#if variant === 'group'}<span class="sr-only"
					>{` for ${name}`}</span
				>{/if}{#if version !== null}<span class="font-mono text-xs"
					>{` · client ${version}`}</span
				>{/if}</span
		>
	</summary>
	<div class="max-w-[72ch] space-y-3 pt-1 pb-2 leading-relaxed">
		{#each lead as section, index (index)}
			{#each section.paragraphs as paragraph, line (line)}
				<p class="text-muted-foreground">{paragraph}</p>
			{/each}
		{/each}
		{#if labelled.length}
			<dl class="space-y-2">
				{#each labelled as section (section.label)}
					<div>
						<dt class="text-foreground">{section.label}</dt>
						{#each section.paragraphs as paragraph, line (line)}
							<dd class="text-muted-foreground">{paragraph}</dd>
						{/each}
					</div>
				{/each}
			</dl>
		{/if}
		{#if context.properties.length}
			<div>
				<p class="text-muted-foreground pb-1 font-mono text-xs">
					Base values, before upgrades and scaling
				</p>
				<table class="font-mono text-xs" aria-label="Base values for {name}">
					<tbody>
						{#each context.properties as property, index (index)}
							<tr>
								<th
									scope="row"
									class="text-muted-foreground py-0.5 pr-6 text-left font-normal"
									>{property.label}</th
								>
								<td class="text-foreground py-0.5">{property.display}{property.unit}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
		<p class="text-muted-foreground text-xs">{closing}</p>
		{#if historyHref}
			<p>
				<a
					href={historyHref}
					class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline"
					>{name} full history</a
				>
			</p>
		{/if}
	</div>
</details>

<style>
	details[open] :global(.details-marker) {
		transform: rotate(90deg);
	}
	:global(.details-marker) {
		transition: transform 150ms;
	}
	summary::-webkit-details-marker {
		display: none;
	}
</style>
