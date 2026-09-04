<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { patchCardHrefs, patchCardView, type PatchCardProps } from './patchCard';

	let { isNew = false, ...patch }: PatchCardProps & { isNew?: boolean } = $props();

	const view = $derived(patchCardView(patch));
	const links = $derived(patchCardHrefs(patch));
	// ponytail: MAJOR is the only reliable tier — `category` is uniformly "patch"
	// and entity count is a poor signal for "small patch", so no HOTFIX tier.
	const isMajor = $derived(!!patch.majorUpdate);
</script>

<div
	class="clip-corner-sm group bg-card hover:bg-card-accent/30 relative flex h-full min-h-[200px] flex-col overflow-hidden border transition-all duration-200 hover:shadow-xl active:scale-[0.98] {isMajor
		? 'border-primary/50 hover:border-primary/80'
		: 'border-border hover:border-signal/45'}"
>
	<CornerAccents
		tlSize="1.5rem"
		brSize="1rem"
		tlColor={isMajor ? 'bg-primary' : 'bg-signal/45'}
		brColor={isMajor ? 'bg-primary/30' : 'bg-signal/20'}
		tlHover={isMajor ? '' : 'group-hover:bg-signal'}
		brHover={isMajor ? 'group-hover:bg-primary/60' : 'group-hover:bg-signal/60'}
		thickness="0.125rem"
	/>
	{#if isNew}
		<span
			bg="primary"
			text="primary-foreground"
			absolute
			z="20"
			p="x-1.5 y-0.5"
			font="bold"
			class="kicker top-2 right-2 text-[9px]"
		>
			New
		</span>
	{/if}

	<div border="border/70 b" relative h="28" shrink="0" class="overflow-hidden">
		{#if patch.previewImage}
			<img
				data-patch-preview
				src={patch.previewImage}
				alt=""
				width="640"
				height="360"
				loading="lazy"
				decoding="async"
				class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div
				absolute
				bg="gradient-to-b"
				class="from-card/0 via-card/10 to-card/55 pointer-events-none inset-0"
				aria-hidden="true"
			></div>
		{:else}
			<img
				src={view.fallbackImage}
				alt=""
				width="640"
				height="360"
				loading="lazy"
				decoding="async"
				op="25"
				class="size-full object-cover"
			/>
		{/if}
	</div>
	<div
		absolute
		bg="gradient-to-br"
		class="from-primary/0 group-hover:from-primary/5 pointer-events-none inset-0 to-transparent transition-all duration-200"
	></div>

	<div z="10" flex="~ 1 col" gap="3" p="4">
		<div>
			<div flex="~" m="b-1.5" items="center" gap="2">
				<h2
					text="foreground base"
					font="semibold"
					class="group-hover:text-primary line-clamp-2 min-w-0 tracking-tight transition-colors duration-300"
				>
					<!-- Stretched link — see FeaturedPatchCard. -->
					<a
						href={links.href}
						aria-label={view.accessibleLabel}
						class="focus-visible:outline-primary after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2"
					>
						{view.heading}
					</a>
				</h2>
				{#if isMajor}
					<span
						border="primary/40 ~"
						bg="primary/15"
						text="primary"
						m="l-auto"
						shrink="0"
						p="x-1.5 y-0.5"
						font="bold"
						class="kicker clip-corner-sm text-[9px]"
					>
						Major
					</span>
				{/if}
			</div>
			<div flex="~" text="muted-foreground xs" items="center" gap="2">
				<Avatar.Root
					class="border-primary/20 group-hover:border-primary/50 size-5 border transition-all duration-300"
				>
					<Avatar.Image src={patch.authorImage} alt="" />
					<Avatar.Fallback
						text="muted-foreground"
						font="mono"
						class="text-[9px] tracking-wide">{view.initials}</Avatar.Fallback
					>
				</Avatar.Root>
				<span truncate>{patch.author}</span>
				{#if view.named}
					<span aria-hidden="true">&middot;</span>
					<time datetime={patch.date.toISOString()}>{view.date}</time>
				{/if}
			</div>
		</div>

		{#if patch.summary}
			<p text="muted-foreground xs" class="line-clamp-2 leading-snug">
				{patch.summary}
			</p>
		{/if}

		{#each view.rows as row (row.type)}
			{@const isItems = row.type === 'items'}
			<div flex="~" items="center" gap="1.5">
				<div class="flex [&>*+*]:-ml-1.5">
					{#each row.list as icon, i (icon.id)}
						<a
							href={links.entityHref(icon)}
							aria-label="Jump to {icon.alt} in this patch"
							relative
							z="10"
							rounded="md"
							class="focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2"
						>
							<img
								src={icon.src}
								alt=""
								width="28"
								height="28"
								loading="lazy"
								decoding="async"
								class="border-border/80 bg-card size-7 rounded-md border object-cover shadow-sm transition-all duration-200 hover:z-20 hover:-translate-y-0.5 hover:scale-110 {isItems
									? 'hover:border-signal/60'
									: 'hover:border-primary/50'}"
								in:scale={{
									start: 0,
									duration: 250,
									delay: 100 + (row.offset + i) * 40,
									easing: quintOut
								}}
							/>
						</a>
					{/each}
				</div>
				{#if row.extra > 0}
					<span
						class="bg-muted/80 text-muted-foreground flex size-7 items-center justify-center rounded-md font-mono text-[10px] font-semibold transition-all duration-300 {isItems
							? 'group-hover:bg-signal/15 group-hover:text-signal'
							: 'group-hover:bg-primary/15 group-hover:text-primary'}">+{row.extra}</span
					>
				{/if}
			</div>
		{/each}

		<div
			flex="~"
			border="border/50 t"
			m="t-auto"
			items="center"
			gap="3"
			p="t-3"
			text="xs"
		>
			{#each view.counts as count (count.noun)}
				<span flex="~" items="baseline" gap="1">
					<span class="font-mono font-bold {count.tone}">{count.n}</span>
					<span text="muted-foreground">{count.noun}</span>
				</span>
			{/each}
			<ArrowRight
				class="text-signal ml-auto size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
			/>
		</div>
	</div>
</div>
