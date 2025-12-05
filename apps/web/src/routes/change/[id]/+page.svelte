<script lang="ts">
	import { page } from '$app/state';
	import { ChangelogContent, EntityPreview } from '$lib/components/changelog';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { formatDate, formatTime } from '@deadlog/utils';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Link from '@lucide/svelte/icons/link';
	import { toast } from 'svelte-sonner';
	import { MetaTags } from 'svelte-meta-tags';

	const { changelog, heroMap, itemMap, title, description, image } = page.data;

	async function copyLink() {
		await navigator.clipboard.writeText(window.location.href);
		toast.success('Copied to clipboard');
	}
</script>

<MetaTags
	{title}
	{description}
	canonical={`https://deadlog.io/change/${changelog.id}`}
	openGraph={{
		type: 'article',
		title,
		description,
		url: `https://deadlog.io/change/${changelog.id}`,
		images: [{ url: image, width: 1200, height: 630, alt: title }]
	}}
	twitter={{
		cardType: 'summary_large_image',
		title,
		description,
		image
	}}
/>

<main class="container mx-auto mt-8 mb-24 max-w-4xl px-4">
	<a
		href="/"
		data-sveltekit-reload
		class="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
	>
		<ArrowLeft class="size-4" />
		Back to all changes
	</a>

	<article class="bg-card border-border rounded-lg border p-6 md:p-8">
		<header class="mb-8">
			<div class="mb-6 flex flex-wrap items-start justify-between gap-4">
				<div class="flex flex-col gap-3">
					<h1 class="text-foreground font-display text-3xl leading-tight tracking-tight">
						{formatDate(changelog.date)}
					</h1>
					<div class="text-muted-foreground flex items-center gap-2.5 text-sm">
						<Avatar.Root class="border-primary/30 size-7 border">
							<Avatar.Image src={changelog.authorImage} alt={changelog.author} />
							<Avatar.Fallback class="bg-muted text-xs">
								{changelog.author.slice(0, 2).toUpperCase()}
							</Avatar.Fallback>
						</Avatar.Root>
						<span class="tracking-tight">
							By <span class="text-foreground font-medium">{changelog.author}</span> at {formatTime(
								changelog.date
							)}
						</span>
					</div>
				</div>

				<Button
					variant="ghost"
					size="icon"
					onclick={copyLink}
					class="text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12"
					title="Copy link to clipboard"
				>
					<Link class="size-4" />
				</Button>
			</div>

			{#if changelog.icons}
				<div class="flex flex-wrap gap-3">
					{#if changelog.icons.heroes.length > 0}
						<EntityPreview entities={changelog.icons.heroes} />
					{/if}
					{#if changelog.icons.items.length > 0}
						<EntityPreview entities={changelog.icons.items} />
					{/if}
				</div>
			{/if}
		</header>

		<ChangelogContent
			contentJson={changelog.contentJson}
			{heroMap}
			{itemMap}
			showFullChange={true}
			forceShowNotes={true}
		/>
	</article>
</main>
