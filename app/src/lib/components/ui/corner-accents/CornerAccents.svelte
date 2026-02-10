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

<div
	class="absolute top-0 left-0 {tlColor} {tlHover} {className} transition-colors duration-300"
	style:height={tlSize}
	style:width={thickness}
	aria-hidden="true"
></div>
<div
	class="absolute top-0 left-0 {tlColor} {tlHover} {className} transition-colors duration-300"
	style:height={thickness}
	style:width={tlSize}
	aria-hidden="true"
></div>
{#if brSize}
	<div
		class="absolute right-0 bottom-0 {brColor} {brHover} {className} transition-colors duration-300"
		style:height={brSize}
		style:width={thickness}
		aria-hidden="true"
	></div>
	<div
		class="absolute right-0 bottom-0 {brColor} {brHover} {className} transition-colors duration-300"
		style:height={thickness}
		style:width={brSize}
		aria-hidden="true"
	></div>
{/if}
