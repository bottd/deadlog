<script lang="ts">
	import { IconPreview } from '.';
	import type { EntityIcon } from '$lib/utils/types';
	import { Button } from '$lib/components/ui/button';
	import { Link, Check } from '@lucide/svelte';
	import { format } from 'date-fns';
	import { formatDateWithSuffix } from '$lib/utils/dateFormatters';

	interface Props {
		id: string;
		date: Date;
		author: string;
		authorImage?: string;
		icons?: {
			heroes: EntityIcon[];
			items: EntityIcon[];
		};
	}

	let { author, authorImage, date, icons, id }: Props = $props();

	let copied = $state(false);

	async function copyLink(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		const url = `${window.location.origin}/?change=${id}`;
		try {
			await navigator.clipboard.writeText(url);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
</script>

<div class="mb-4 flex w-full items-start justify-between gap-4">
	<div class="flex flex-col gap-2">
		<h2 class="text-foreground text-xl font-medium">
			{formatDateWithSuffix(date)}
		</h2>
		<div class="text-muted-foreground flex items-center text-sm">
			{#if authorImage}
				<img
					src={authorImage}
					alt={author}
					width="20"
					height="20"
					loading="lazy"
					decoding="async"
					class="border-primary/30 size-6 rounded-full border"
				/>
			{/if}
			<span class="px-2">
				By {author} at {format(date, 'h:mm a')}
			</span>
		</div>
	</div>

	<div class="flex items-start gap-2">
		{#if icons}
			<IconPreview heroes={icons.heroes} items={icons.items} />
		{/if}
		<Button
			variant="ghost"
			size="icon-sm"
			onclick={copyLink}
			class="text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
			title={copied ? 'Copied!' : 'Copy link'}
		>
			{#if copied}
				<Check class="size-5" />
			{:else}
				<Link class="size-5" />
			{/if}
		</Button>
	</div>
</div>
