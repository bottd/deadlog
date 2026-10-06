<script lang="ts">
	import { getLightbox } from './lightboxContext';

	interface Props {
		src: string;
		alt: string;
	}

	let { src, alt }: Props = $props();

	const openLightbox = getLightbox();
</script>

<button
	type="button"
	class="zoom-trigger my-6 block w-full"
	aria-label="View larger: {alt}"
	onclick={() => openLightbox([{ src, alt }], 0)}
>
	<img
		{src}
		{alt}
		loading="lazy"
		decoding="async"
		class="changelog-image h-auto max-h-[32rem]"
	/>
</button>
