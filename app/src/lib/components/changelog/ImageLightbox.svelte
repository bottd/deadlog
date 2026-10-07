<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Dialog } from 'bits-ui';
	import XIcon from '@lucide/svelte/icons/x';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import * as Sheet from '#lib/components/ui/sheet/index.ts';
	import { setLightbox, type LightboxImage } from './lightboxContext';

	let { children }: { children: Snippet } = $props();

	let images = $state.raw<LightboxImage[]>([]);
	let index = $state(0);
	let open = $state(false);

	setLightbox((next, at) => {
		images = next;
		index = at;
		open = true;
	});

	const current = $derived(images[index]);
	const many = $derived(images.length > 1);

	const step = (delta: number) => {
		index = (index + delta + images.length) % images.length;
	};

	function onkeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') step(1);
		else if (event.key === 'ArrowLeft') step(-1);
		else return;
		event.preventDefault();
	}

	function closeOnBackdrop(event: MouseEvent) {
		if (event.target === event.currentTarget) open = false;
	}
</script>

{@render children()}

<Dialog.Root bind:open>
	<Dialog.Portal>
		<Sheet.Overlay style="--overlay-opacity: 0.85" />
		<Dialog.Content class="image-lightbox" {onkeydown} onclick={closeOnBackdrop}>
			<img src={current.src} alt={current.alt} class="lightbox-image" />
			<div class="lightbox-caption">
				<Dialog.Title class="lightbox-title">{current.alt}</Dialog.Title>
				{#if many}
					<span aria-live="polite">{index + 1} / {images.length}</span>
				{/if}
			</div>

			{#if many}
				<button
					type="button"
					class="lightbox-control previous ui-focus-ring"
					onclick={() => step(-1)}
				>
					<ChevronLeft class="icon-lg" aria-hidden="true" />
					<span class="sr-only">Previous image</span>
				</button>
				<button
					type="button"
					class="lightbox-control next ui-focus-ring"
					onclick={() => step(1)}
				>
					<ChevronRight class="icon-lg" aria-hidden="true" />
					<span class="sr-only">Next image</span>
				</button>
			{/if}

			<Dialog.Close class="lightbox-control lightbox-close ui-focus-ring">
				<XIcon class="icon-lg" aria-hidden="true" />
				<span class="sr-only">Close</span>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>

<style>
	@layer components.features {
		:global(.image-lightbox) {
			position: fixed;
			inset: 0;
			z-index: 50;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.75rem;
			padding: 1rem;
			outline: none;
		}
		:global(.image-lightbox[data-state='open']) {
			animation: fade-in 200ms ease-out;
		}
		:global(.image-lightbox[data-state='closed']) {
			animation: fade-out 200ms ease-in;
		}
		.lightbox-image {
			max-block-size: calc(100dvh - 8rem);
			max-inline-size: 100%;
			border-radius: var(--radius-lg);
			object-fit: contain;
			box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
		}
		.lightbox-caption {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		:global(.lightbox-title) {
			color: var(--foreground);
			font-weight: 500;
		}
		:global(.lightbox-control) {
			position: absolute;
			display: flex;
			inline-size: 2.75rem;
			block-size: 2.75rem;
			align-items: center;
			justify-content: center;
			border: 1px solid var(--border);
			border-radius: var(--radius-md);
			background: color-mix(in srgb, var(--card) 80%, transparent);
			color: var(--foreground);
			transition:
				background-color var(--duration-normal),
				scale var(--duration-normal);
		}
		:global(.lightbox-control:hover) {
			background: var(--card);
		}
		:global(.lightbox-control:active) {
			scale: 0.97;
		}
		.previous,
		.next {
			top: 50%;
			translate: 0 -50%;
		}
		.previous {
			inset-inline-start: 0.5rem;
		}
		.next,
		:global(.lightbox-close) {
			inset-inline-end: 0.5rem;
		}
		:global(.lightbox-close) {
			top: 0.5rem;
		}
		@media (min-width: 40rem) {
			:global(.image-lightbox) {
				padding: 2.5rem;
			}
			.previous {
				inset-inline-start: 1rem;
			}
			.next,
			:global(.lightbox-close) {
				inset-inline-end: 1rem;
			}
			:global(.lightbox-close) {
				top: 1rem;
			}
		}
	}
</style>
