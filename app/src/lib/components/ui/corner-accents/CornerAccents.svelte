<script lang="ts">
	interface Props {
		tlSize: string;
		brSize?: string;
		thickness?: string;
		class?: string;
	}

	let { tlSize, brSize, thickness = '1px', class: className = '' }: Props = $props();
</script>

<!-- The owning panel sets --corner-tl / --corner-br, including its hover state. -->
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

<style>
	@layer components.primitives {
		.corner-accent {
			position: absolute;
			pointer-events: none;
			transition: background-color var(--duration-slow);
		}
		[data-corner='start'] {
			top: 0;
			left: 0;
			background: var(--corner-tl, color-mix(in srgb, var(--primary) 40%, transparent));
		}
		[data-corner='end'] {
			bottom: 0;
			right: 0;
			background: var(--corner-br, color-mix(in srgb, var(--primary) 20%, transparent));
		}
	}
</style>
