<script lang="ts">
	interface Props {
		tlSize: string;
		brSize?: string;
		thickness?: string;
		class?: string;
	}

	let { tlSize, brSize, thickness = '1px', class: className = '' }: Props = $props();
</script>

<!-- Each accent is an L: two bars sharing a corner, swapping which axis carries the
     length. -->
{#snippet bar(corner: string, height: string, width: string)}
	<div
		class={['corner-accent', className]}
		data-corner={corner}
		style:height
		style:width
		aria-hidden="true"
	></div>
{/snippet}

{@render bar('start', tlSize, thickness)}
{@render bar('start', thickness, tlSize)}

{#if brSize}
	{@render bar('end', brSize, thickness)}
	{@render bar('end', thickness, brSize)}
{/if}
