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
	class="zoom-trigger standalone-image"
	data-prose-ui
	aria-label="View larger: {alt}"
	onclick={() => openLightbox([{ src, alt }], 0)}
>
	<img {src} {alt} loading="lazy" decoding="async" class="changelog-image" />
</button>

<style>
	@layer components.features {
		.standalone-image {
			display: block;
			inline-size: 100%;
			margin-block: 1.5rem;
		}
		.changelog-image {
			max-block-size: 32rem;
		}
	}
</style>
