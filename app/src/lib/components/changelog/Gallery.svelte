<script lang="ts">
	import { getLightbox, type LightboxImage } from './lightboxContext';

	interface Props {
		images: LightboxImage[];
	}

	let { images }: Props = $props();

	const openLightbox = getLightbox();
</script>

<ul
	class="gallery my-6 grid list-none gap-3 p-0"
	style:grid-template-columns={images.length === 4
		? 'repeat(2, minmax(0, 1fr))'
		: 'repeat(auto-fit, minmax(max(7.5rem, calc((100% - 1.5rem) / 3)), 1fr))'}
	aria-label="Image gallery"
>
	{#each images as image, index (image.src)}
		<li flex="~">
			<button
				type="button"
				class="zoom-trigger flex w-full"
				aria-label="View larger: {image.alt}"
				onclick={() => openLightbox(images, index)}
			>
				<img
					src={image.src}
					alt={image.alt}
					loading="lazy"
					decoding="async"
					class="changelog-image h-full max-h-80 p-2"
				/>
			</button>
		</li>
	{/each}
</ul>
