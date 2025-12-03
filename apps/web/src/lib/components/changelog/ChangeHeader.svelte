<script lang="ts">
	import { EntityPreview } from '.';
	import type { EntityIcon } from '$lib/utils/types';
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Link } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { formatDate, formatTime } from '@deadlog/utils';

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

<div class="relative mb-6 flex w-full items-start justify-between gap-6">
	<div
		class="via-border absolute top-0 -left-6 h-full w-px bg-gradient-to-b from-transparent to-transparent"
	></div>

	<div class="flex flex-col gap-3">
		<h2 class="text-foreground font-display text-2xl leading-tight tracking-tight">
			{formatDate(date)}
		</h2>
		<div class="text-muted-foreground flex items-center gap-2.5 text-sm">
			<Avatar.Root class="border-primary/30 size-7 border">
				<Avatar.Image src={authorImage} alt={author} />
				<Avatar.Fallback class="bg-muted text-xs">
					{author.slice(0, 2).toUpperCase()}
				</Avatar.Fallback>
			</Avatar.Root>
			<span class="tracking-tight">
				By <span class="text-foreground font-medium">{author}</span> at {formatTime(date)}
			</span>
		</div>
	</div>

	<div class="flex items-start gap-3">
		<div class="flex flex-col gap-2.5">
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
			class="text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12"
			title="Copy link to clipboard"
		>
			<Link class="size-4" />
		</Button>
	</div>
</div>
