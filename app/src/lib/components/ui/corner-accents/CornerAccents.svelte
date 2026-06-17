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
		/** Optional explicit CSS color (e.g. a `var(--type-*)` token). Overrides the bg classes. */
		color?: string;
	}

	let {
		tlSize,
		brSize,
		tlColor = 'bg-primary/40',
		brColor = 'bg-primary/20',
		tlHover = '',
		brHover = '',
		thickness = '1px',
		class: className = '',
		color
	}: Props = $props();
</script>

<div
	class="absolute top-0 left-0 {tlColor} {tlHover} {className} transition-colors duration-300"
	style:height={tlSize}
	style:width={thickness}
	style:background-color={color}
	aria-hidden="true"
></div>
<div
	class="absolute top-0 left-0 {tlColor} {tlHover} {className} transition-colors duration-300"
	style:height={thickness}
	style:width={tlSize}
	style:background-color={color}
	aria-hidden="true"
></div>
{#if brSize}
	<div
		class="absolute right-0 bottom-0 {brColor} {brHover} {className} transition-colors duration-300"
		style:height={brSize}
		style:width={thickness}
		style:background-color={color}
		style:opacity={color ? '0.6' : undefined}
		aria-hidden="true"
	></div>
	<div
		class="absolute right-0 bottom-0 {brColor} {brHover} {className} transition-colors duration-300"
		style:height={thickness}
		style:width={brSize}
		style:background-color={color}
		style:opacity={color ? '0.6' : undefined}
		aria-hidden="true"
	></div>
{/if}
