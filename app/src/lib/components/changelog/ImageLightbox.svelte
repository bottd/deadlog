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

	const control =
		'btn btn-icon absolute border border-border bg-card/80 text-foreground hover:bg-card';

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
		<Sheet.Overlay class="bg-black/85" />
		<Dialog.Content
			class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 p-4 outline-none data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out sm:p-10"
			{onkeydown}
			onclick={closeOnBackdrop}
		>
			<img
				src={current.src}
				alt={current.alt}
				class="max-h-[calc(100dvh-8rem)] max-w-full rounded-lg object-contain shadow-2xl"
			/>
			<div flex="~" items="center" gap="3" text="sm muted-foreground">
				<Dialog.Title class="text-foreground text-sm font-medium"
					>{current.alt}</Dialog.Title
				>
				{#if many}
					<span aria-live="polite">{index + 1} / {images.length}</span>
				{/if}
			</div>

			{#if many}
				<button
					type="button"
					class={[control, 'start-2 top-1/2 -translate-y-1/2 sm:start-4']}
					onclick={() => step(-1)}
				>
					<ChevronLeft class="size-5" aria-hidden="true" />
					<span class="sr-only">Previous image</span>
				</button>
				<button
					type="button"
					class={[control, 'end-2 top-1/2 -translate-y-1/2 sm:end-4']}
					onclick={() => step(1)}
				>
					<ChevronRight class="size-5" aria-hidden="true" />
					<span class="sr-only">Next image</span>
				</button>
			{/if}

			<Dialog.Close class={[control, 'end-2 top-2 sm:end-4 sm:top-4']}>
				<XIcon class="size-5" aria-hidden="true" />
				<span class="sr-only">Close</span>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
