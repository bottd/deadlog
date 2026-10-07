<script lang="ts">
	import { getLightbox, type LightboxImage } from './lightboxContext';

	interface Props {
		images: LightboxImage[];
	}

	let { images }: Props = $props();

	const openLightbox = getLightbox();
</script>

<ul class="gallery" data-count={images.length} data-prose-ui aria-label="Image gallery">
	{#each images as image, index (image.src)}
		<li>
			<button
				type="button"
				class="zoom-trigger"
				aria-label="View larger: {image.alt}"
				onclick={() => openLightbox(images, index)}
			>
				<img
					src={image.src}
					alt={image.alt}
					loading="lazy"
					decoding="async"
					class="changelog-image"
				/>
			</button>
		</li>
	{/each}
</ul>

<style>
	@layer components.features {
		.gallery {
			display: grid;
			grid-template-columns: repeat(
				auto-fit,
				minmax(max(7.5rem, calc((100% - 1.5rem) / 3)), 1fr)
			);
			gap: 0.75rem;
			margin-block: 1.5rem;
			padding: 0;
			list-style: none;
		}
		.gallery[data-count='4'] {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		li,
		.zoom-trigger {
			display: flex;
		}
		.zoom-trigger {
			inline-size: 100%;
		}
		.changelog-image {
			block-size: 100%;
			max-block-size: 20rem;
			padding: 0.5rem;
		}
	}
</style>
