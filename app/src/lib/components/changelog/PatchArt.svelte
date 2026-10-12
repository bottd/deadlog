<script lang="ts">
	import { PREVIEW_WIDTHS, previewDerivative } from '@deadlog/utils';

	let {
		src,
		sizes,
		priority = false
	}: { src: string; sizes: string; priority?: boolean } = $props();

	let failed = $state(false);
	const srcset = $derived(
		PREVIEW_WIDTHS.map((width) => `${previewDerivative(src, width)} ${width}w`).join(', ')
	);
</script>

<img
	data-patch-preview
	src={failed ? src : previewDerivative(src, PREVIEW_WIDTHS[0])}
	srcset={failed ? undefined : srcset}
	{sizes}
	alt=""
	width="640"
	height="360"
	decoding="async"
	loading={priority ? 'eager' : 'lazy'}
	fetchpriority={priority ? 'high' : 'auto'}
	onerror={() => (failed = true)}
/>
