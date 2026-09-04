<script lang="ts">
	interface Props {
		tlSize: string;
		brSize?: string;
		tlColor?: string;
		brColor?: string;
		tlHover?: string;
		brHover?: string;
		thickness?: string;
		class?: string;
	}

	let {
		tlSize,
		brSize,
		tlColor = 'bg-primary/40',
		brColor = 'bg-primary/20',
		tlHover = '',
		brHover = '',
		thickness = '1px',
		class: className = ''
	}: Props = $props();
</script>

<!-- Each accent is an L: two bars sharing a corner, swapping which axis carries the
     length. The array form drops the unset hover/class props instead of leaving holes. -->
{#snippet bar(corner: string, tone: string, hover: string, height: string, width: string)}
	<div
		class={['absolute', corner, tone, hover, className, 'transition-colors duration-300']}
		style:height
		style:width
		aria-hidden="true"
	></div>
{/snippet}

{@render bar('top-0 left-0', tlColor, tlHover, tlSize, thickness)}
{@render bar('top-0 left-0', tlColor, tlHover, thickness, tlSize)}

{#if brSize}
	{@render bar('right-0 bottom-0', brColor, brHover, brSize, thickness)}
	{@render bar('right-0 bottom-0', brColor, brHover, thickness, brSize)}
{/if}
