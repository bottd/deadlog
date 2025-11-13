<script lang="ts">
	import { EntityPreview } from '.';
	import type { EntityIcon } from '$lib/utils/types';
	import { Button } from '$lib/components/ui/button';
	import { Link } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
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

	async function copyLink(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		await navigator.clipboard.writeText(`${window.location.origin}/?change=${id}`);
		toast.success('Copied to clipboard');
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
		<div class="flex flex-col gap-2">
			{#if icons?.heroes}
				<EntityPreview entities={icons.heroes} />
			{/if}
			{#if icons?.items}
				<EntityPreview entities={icons.items} />
			{/if}
		</div>
		<Button
			variant="ghost"
			size="icon-sm"
			onclick={copyLink}
			class="text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
			title="Copy link to clipboard"
		>
			<Link class="size-5" />
		</Button>
	</div>
</div>
