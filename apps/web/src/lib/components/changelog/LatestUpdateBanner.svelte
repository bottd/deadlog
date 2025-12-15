<script lang="ts">
	import { browser } from '$app/environment';
	import type { EntityIcon } from '$lib/utils/types';
	import type { ChangelogContentJson } from '@deadlog/db';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { ChangelogContent, EntityPreview } from '.';
	import { GutterNode } from '../gutter-line';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Link, Pin } from '@lucide/svelte';
	import { copyChangelogLink } from '$lib/utils/clipboard';
	import { formatDate, formatTime } from '@deadlog/utils';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		id: string;
		date: Date;
		author: string;
		authorImage?: string;
		icons?: {
			heroes: EntityIcon[];
			items: EntityIcon[];
		};
		contentJson?: ChangelogContentJson | null;
		heroMap?: Record<number, { name: string; images: Record<string, string> }>;
		itemMap?: Record<number, { name: string; image: string }>;
		isSubChange?: boolean;
	}

	let {
		id,
		date,
		author,
		authorImage,
		icons,
		contentJson,
		heroMap,
		itemMap,
		isSubChange = false
	}: Props = $props();
</script>

<div
	class="group/entry relative"
	transition:fly={{ y: 16, duration: 600, easing: cubicOut }}
>
	<div class="absolute top-0 left-0 z-10 -ml-14 hidden md:block">
		<GutterNode bigUpdate={!isSubChange} />
	</div>

	<Card.Root
		{id}
		class="group/card border-primary/20 from-primary/5 via-card to-card hover:border-primary/40 relative overflow-hidden border-2 bg-gradient-to-br py-6 transition-colors"
	>
		<!-- Accent glow -->
		<div
			class="bg-primary/10 pointer-events-none absolute -top-20 -right-20 size-40 rounded-full blur-3xl"
		></div>

		<Card.Content class="relative px-8">
			<!-- Header with Latest Update badge -->
			<div class="relative mb-6 flex w-full items-start justify-between gap-6">
				<div
					class="via-primary/30 absolute top-0 -left-6 h-full w-px bg-gradient-to-b from-transparent to-transparent"
				></div>

				<div class="flex flex-col gap-3">
					<div class="flex items-center gap-3">
						<Badge variant="default" class="bg-primary/90 gap-1.5 px-2.5 py-1">
							<Pin class="size-3.5" />
							<span class="text-xs font-semibold tracking-wide uppercase"
								>Latest Update</span
							>
						</Badge>
					</div>
					<h2
						class="text-foreground font-display text-2xl leading-tight tracking-tight tabular-nums"
					>
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
							By <span class="text-foreground font-medium">{author}</span> at {formatTime(
								date
							)}
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
						onclick={(e) => copyChangelogLink(e, id)}
						class="text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12"
						title="Copy link to clipboard"
					>
						<Link class="size-4" />
					</Button>
				</div>
			</div>

			<div class="break-words">
				{#if browser}
					<ChangelogContent {contentJson} {heroMap} {itemMap} />
				{/if}
			</div>
		</Card.Content>
	</Card.Root>
</div>
