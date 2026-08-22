<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Zap from '@lucide/svelte/icons/zap';
	import { backOut } from 'svelte/easing';
	import { fly, scale } from 'svelte/transition';
	import { patchCardHrefs, patchCardView, type PatchCardProps } from './patchCard';

	let patch: PatchCardProps = $props();

	const view = $derived(patchCardView(patch, true));
	const links = $derived(patchCardHrefs(patch));
</script>

<div relative m="b-8" block class="group col-span-full">
	<div
		border="primary/40 2"
		bg="card"
		relative
		flex="~ col"
		class="clip-corner-lg card-glow hover:border-primary/70 overflow-hidden transition-all duration-200 hover:shadow-2xl active:scale-[0.99] md:flex-row md:items-stretch"
	>
		<div
			absolute
			bg="gradient-to-r"
			op="0"
			class="from-primary/0 via-signal/5 to-signal/10 pointer-events-none inset-0 transition-opacity duration-200 group-hover:opacity-100"
		></div>
		<CornerAccents
			tlSize="4rem"
			brSize="3rem"
			tlColor="bg-primary"
			brColor="bg-signal/70"
			thickness="0.125rem"
			class="z-20"
		/>

		<div z="10" flex="~ 1 col" gap="5" p="6" class="md:p-8">
			<div flex="~" items="center" gap="4">
				<div
					border="primary/30 ~"
					bg="primary/15"
					items="center"
					gap="2"
					p="x-4 y-1.5"
					class="pulse-glow clip-corner-sm inline-flex"
					in:fly={{ x: -20, duration: 500, easing: backOut }}
				>
					<Zap class="text-primary size-4" />
					<span text="primary xs" font="bold" class="kicker">Latest Patch</span>
				</div>
				<div bg="signal/30" h="px" flex="1"></div>
			</div>

			<h2
				font="display medium"
				text="foreground 3xl"
				class="heading-glow group-hover:text-primary tracking-wide transition-colors duration-300 md:text-4xl"
				in:fly={{ y: 20, duration: 400, delay: 100 }}
			>
				<!-- Stretched link: the whole card is clickable, but crawlers and
				     middle-click still get a real href. -->
				<a
					href={links.href}
					aria-label={view.accessibleLabel}
					class="focus-visible:outline-primary after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-2"
				>
					{view.heading}
				</a>
			</h2>

			<div flex="~" items="center" gap="3">
				<Avatar.Root
					class="border-primary/30 group-hover:border-primary size-8 border-2 transition-all duration-300"
				>
					<Avatar.Image src={patch.authorImage} alt="" />
					<Avatar.Fallback class="bg-muted text-xs font-medium"
						>{view.initials}</Avatar.Fallback
					>
				</Avatar.Root>
				<span text="foreground sm" font="medium">{patch.author}</span>
				{#if view.named}
					<span text="muted-foreground" aria-hidden="true">&middot;</span>
					<time
						datetime={patch.date.toISOString()}
						text="muted-foreground xs"
						font="mono"
						class="tracking-wide"
					>
						{view.date}
					</time>
				{/if}
			</div>

			{#if patch.summary}
				<p text="muted-foreground sm" class="max-w-2xl leading-relaxed">
					{patch.summary}
				</p>
			{/if}

			{#if view.rows.length > 0}
				<div m="t-2" flex="~ col" gap="3">
					{#each view.rows as row (row.type)}
						<div flex="~" items="center" gap="3">
							<span class="w-14 font-mono text-xs tracking-wider uppercase {row.tone}"
								>{row.label}</span
							>
							<div class="flex [&>*+*]:-ml-2">
								{#each row.list as icon, i (icon.id)}
									<a
										href={links.entityHref(icon)}
										aria-label="Jump to {icon.alt} in this patch"
										relative
										z="10"
										rounded="lg"
										class="focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2"
									>
										<img
											src={icon.src}
											alt=""
											width="40"
											height="40"
											loading="lazy"
											decoding="async"
											border="primary/20 2"
											bg="card"
											rounded="lg"
											shadow="md"
											class="hover:border-primary size-9 object-cover transition-all duration-300 hover:z-20 hover:-translate-y-1 hover:scale-110"
											in:scale={{
												start: 0,
												duration: 400,
												delay: 100 + (row.offset + i) * 40,
												easing: backOut
											}}
										/>
									</a>
								{/each}
							</div>
							{#if row.extra > 0}
								<span class="font-mono text-sm font-bold {row.tone}">+{row.extra}</span>
							{/if}
						</div>
					{/each}
				</div>
			{/if}

			<div flex="~" border="border/50 t" m="t-auto" items="center" gap="6" p="t-4">
				{#each view.counts as count (count.noun)}
					<span flex="~" items="baseline" gap="1.5">
						<span class="font-mono text-2xl font-bold {count.tone}">{count.n}</span>
						<span text="muted-foreground sm">{count.noun}</span>
					</span>
				{/each}
			</div>
		</div>

		<div
			class="border-signal/20 from-signal/5 to-primary/5 group-hover:from-signal/10 group-hover:to-primary/10 relative z-10 flex min-h-44 shrink-0 items-center justify-center overflow-hidden border-t bg-gradient-to-r p-6 transition-colors duration-300 md:min-h-0 md:border-t-0 md:border-l md:p-8 {patch.previewImage
				? 'md:w-80'
				: 'md:w-56'}"
		>
			{#if patch.previewImage}
				<img
					data-patch-preview
					src={patch.previewImage}
					alt=""
					width="640"
					height="360"
					decoding="async"
					absolute
					class="inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div
					absolute
					bg="gradient-to-t"
					class="from-card/10 via-card/55 to-card/95 inset-0 md:bg-gradient-to-r"
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
					absolute
					op="25"
					class="inset-0 size-full object-cover"
				/>
			{/if}
			<div relative z="10" flex="~ col" items="center" gap="3" text="center">
				<div
					flex="~"
					bg="primary"
					text="primary-foreground"
					items="center"
					justify="center"
					rounded="xl"
					shadow="lg"
					class="pulse-glow size-14 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
				>
					<ArrowRight
						class="size-6 transition-transform duration-300 group-hover:translate-x-1"
					/>
				</div>
				<span text="foreground sm" font="semibold">View Full Patch</span>
			</div>
		</div>
	</div>

	<div flex="~" m="t-2" items="center" gap="4" p="x-4">
		<div bg="signal/35" h="px" flex="1"></div>
		<span text="muted-foreground" class="kicker text-[10px]">Previous Updates</span>
		<div bg="primary/30" h="px" flex="1"></div>
	</div>
</div>
