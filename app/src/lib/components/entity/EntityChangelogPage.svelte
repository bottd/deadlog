<script lang="ts">
	import { PatchTimeline } from '$lib/components/changelog';
	import {
		changeCountLabel,
		entityPatchHref
	} from '$lib/components/changelog/entityContext';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import { ENTITY_LISTING } from '$lib/seo';
	import { formatDate, plural } from '@deadlog/utils';
	import Activity from '@lucide/svelte/icons/activity';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Package from '@lucide/svelte/icons/package';
	import XIcon from '@lucide/svelte/icons/x';
	import type { Snippet } from 'svelte';
	import { replaceState } from '$app/navigation';
	import { page } from '$app/state';
	import { building } from '$app/environment';

	interface ChangeGroup {
		ability: string | null;
		abilitySlug?: string | null;
		icon?: string | null;
		bullets: string[];
	}

	interface EntityPatch {
		id: string;
		slug: string;
		date: Date;
		author: string;
		changeCount: number | null;
		changeGroups?: ChangeGroup[] | null;
	}

	interface Ability {
		name: string;
		slug: string;
		image: string;
		description: string | null;
	}

	interface Props {
		entity: { type: 'hero' | 'item'; name: string; image?: string };
		accent: string;
		label: string;
		lede: string;
		changelogs: EntityPatch[];
		abilities?: Ability[];
		streaks: { current: number; longest: number };
		labelSuffix?: Snippet;
	}

	let {
		entity,
		accent,
		label,
		lede,
		changelogs,
		abilities = [],
		streaks,
		labelSuffix
	}: Props = $props();

	const requestedAbility = $derived(
		'ability' in page.state
			? page.state.ability
			: building
				? null
				: page.url.searchParams.get('ability')
	);
	const selectedAbility = $derived(
		abilities.some((ability) => ability.slug === requestedAbility)
			? (requestedAbility ?? null)
			: null
	);

	function toggleAbility(slug: string) {
		const ability = selectedAbility === slug ? null : slug;
		const url = new URL(location.href);
		if (ability) url.searchParams.set('ability', ability);
		else url.searchParams.delete('ability');
		replaceState(url, { ...page.state, ability });
	}

	const selectedAbilityName = $derived(
		abilities.find((ability) => ability.slug === selectedAbility)?.name ?? null
	);

	const visibleChangelogs = $derived.by(() => {
		if (!selectedAbility) return changelogs;
		return changelogs.flatMap((changelog) => {
			const changeGroups =
				changelog.changeGroups?.filter(
					(group) => group.abilitySlug === selectedAbility
				) ?? [];
			return changeGroups.length
				? [
						{
							...changelog,
							changeGroups,
							changeCount: changeGroups.reduce(
								(total, group) => total + group.bullets.length,
								0
							)
						}
					]
				: [];
		});
	});

	const isItem = $derived(entity.type === 'item');
	const listing = $derived(ENTITY_LISTING[entity.type]);
	const EmptyIcon = $derived(isItem ? Package : Activity);

	const countedPatches = $derived(
		changelogs.filter((c) => c.changeCount !== null).length
	);
	const unknownPatches = $derived(changelogs.length - countedPatches);
	const totalChanges = $derived(
		changelogs.reduce((total, c) => total + (c.changeCount ?? 0), 0)
	);
	// "N+" once any patch is missing a count, "N/A" when none of them have one.
	const changeValue = $derived(
		unknownPatches === 0
			? String(totalChanges)
			: countedPatches > 0
				? `${totalChanges}+`
				: 'N/A'
	);
	const oldestPatch = $derived(changelogs.at(-1));
</script>

{#snippet statLabel(text: string)}
	<dt class="text-muted-foreground font-mono text-[9px] tracking-widest uppercase">
		{text}
	</dt>
{/snippet}

<main class="bg-wire-grid min-h-screen">
	<div class="container mx-auto mt-6 mb-24 max-w-6xl px-3 sm:mt-8 sm:px-4">
		<a
			href={listing.path}
			class="text-muted-foreground hover:text-signal mb-6 inline-flex min-h-6 items-center gap-2 text-sm transition-colors sm:mb-8"
		>
			<ArrowLeft class="size-4" />
			<span>Back to {listing.label.toLowerCase()}</span>
		</a>

		<header
			class="clip-corner-lg bg-card relative mb-10 overflow-hidden border-2 p-5 sm:p-8 lg:p-10"
			style:border-color="color-mix(in oklab, {accent} 42%, var(--border))"
		>
			<CornerAccents
				tlSize="4rem"
				brSize="3rem"
				thickness="2px"
				tlColor="bg-signal/60"
				brColor="bg-primary/35"
			/>
			<div
				class="pointer-events-none absolute inset-0"
				style:background="radial-gradient(circle at 12% 20%, color-mix(in oklab, {accent} 18%,
				transparent), transparent 42%)"
				aria-hidden="true"
			></div>
			<div
				class="pointer-events-none absolute inset-x-0 top-0 h-px"
				style:background="linear-gradient(to right, {accent}, var(--signal), transparent
				78%)"
				aria-hidden="true"
			></div>

			<div
				class="relative z-10 grid gap-7 md:grid-cols-[auto_minmax(0,1fr)] md:items-center"
			>
				{#if entity.image}
					<div class="relative mx-auto shrink-0 md:mx-0">
						<div
							class="absolute inset-2 -z-10 blur-2xl"
							style:background-color={accent}
							style:opacity={isItem ? '0.22' : '0.24'}
							aria-hidden="true"
						></div>
						{#if isItem}
							<div
								class="clip-corner-sm bg-muted/30 flex size-32 items-center justify-center border-2 p-3 sm:size-40 lg:size-44"
								style:border-color={accent}
							>
								<img
									src={entity.image}
									alt="{entity.name} in Deadlock"
									width="176"
									height="176"
									fetchpriority="high"
									class="max-h-full max-w-full object-contain drop-shadow-lg"
								/>
							</div>
						{:else}
							<div
								class="clip-corner-sm bg-muted/30 relative border-2 p-1.5"
								style:border-color={accent}
							>
								<img
									src={entity.image}
									alt="{entity.name} in Deadlock"
									width="160"
									height="160"
									fetchpriority="high"
									class="clip-corner-sm size-28 object-cover sm:size-36 lg:size-40"
								/>
							</div>
						{/if}
					</div>
				{/if}

				<div class="min-w-0 text-center md:text-left">
					<div
						class="mb-3 flex flex-wrap items-center justify-center gap-2 md:justify-start"
					>
						<span class="h-px w-7" style:background-color={accent} aria-hidden="true"
						></span>
						<span
							class="font-mono text-[10px] font-bold tracking-[0.22em] uppercase"
							style:color={accent}
						>
							{label}
						</span>
						{@render labelSuffix?.()}
					</div>
					<h1
						class="text-foreground font-display heading-glow text-4xl leading-none font-medium tracking-wide break-words sm:text-5xl lg:text-6xl"
					>
						{entity.name}
					</h1>
					<p class="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
						{lede}
					</p>

					<dl class="mt-6 grid grid-cols-2 gap-px overflow-hidden border sm:grid-cols-5">
						<div class="bg-muted/30 p-3 text-left">
							{@render statLabel('Patches')}
							<dd class="text-foreground mt-1 font-mono text-xl font-bold">
								{changelogs.length}
							</dd>
						</div>
						<div class="bg-muted/30 p-3 text-left">
							{@render statLabel('Changes')}
							<dd class="mt-1 font-mono text-xl font-bold" style:color={accent}>
								{changeValue}
							</dd>
						</div>
						<div class="bg-muted/30 p-3 text-left">
							{@render statLabel('Current streak')}
							<dd class="text-foreground mt-1 font-mono text-xl font-bold">
								{streaks.current}
							</dd>
						</div>
						<div class="bg-muted/30 p-3 text-left">
							{@render statLabel('Longest run')}
							<dd class="text-foreground mt-1 font-mono text-xl font-bold">
								{streaks.longest}
							</dd>
						</div>
						<div class="bg-muted/30 col-span-2 p-3 text-left sm:col-span-1">
							{@render statLabel('Tracked since')}
							<dd class="text-foreground mt-1 text-sm font-semibold">
								{oldestPatch ? formatDate(oldestPatch.date) : 'No patches yet'}
							</dd>
						</div>
					</dl>
					{#if unknownPatches > 0}
						<p
							class="text-muted-foreground mt-2 font-mono text-[9px] tracking-wide uppercase"
						>
							{unknownPatches}
							{plural(unknownPatches, 'patch', 'patches')} awaiting a reliable count
						</p>
					{/if}
				</div>
			</div>

			{#if changelogs.length > 1}
				<div class="border-border/60 relative z-10 mt-7 border-t pt-5">
					<div class="mb-2 flex items-center justify-between gap-3">
						<span
							class="text-muted-foreground font-mono text-[9px] font-bold tracking-widest uppercase"
						>
							Patch cadence
						</span>
						<span class="text-muted-foreground font-mono text-[9px]">
							{changelogs.length} points
						</span>
					</div>
					<PatchTimeline patches={changelogs} {entity} {accent} />
				</div>
			{/if}
		</header>

		{#if abilities.length > 0}
			<section aria-label="Abilities" class="mb-10">
				<p
					class="text-signal mb-3 font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
				>
					Abilities — click to filter the log
				</p>
				<div
					class="grid auto-rows-fr grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4"
				>
					{#each abilities as ability (ability.slug)}
						{@const selected = selectedAbility === ability.slug}
						<button
							type="button"
							onclick={() => toggleAbility(ability.slug)}
							aria-pressed={selected}
							class="clip-corner-sm bg-card relative flex h-full flex-col items-stretch justify-start overflow-hidden border p-3 text-left transition-all hover:-translate-y-0.5 {selected
								? 'border-signal ring-signal/35 ring-2'
								: 'hover:border-signal/50'}"
							style:border-color={selected
								? undefined
								: 'color-mix(in oklab, ' + accent + ' 24%, var(--border))'}
						>
							<div class="flex items-center gap-2.5">
								<img
									src={ability.image}
									alt=""
									width="32"
									height="32"
									loading="lazy"
									decoding="async"
									class="size-8 rounded object-cover"
								/>
								<span class="text-foreground text-sm font-semibold">
									{ability.name}
								</span>
							</div>
							{#if ability.description}
								<span
									class="text-muted-foreground mt-2 line-clamp-2 block text-xs leading-relaxed"
								>
									{ability.description}
								</span>
							{/if}
						</button>
					{/each}
				</div>
			</section>
		{/if}

		<section aria-labelledby="history-heading">
			<div class="mb-6 flex items-end justify-between gap-4">
				<div>
					<p
						class="text-signal font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
					>
						Entity log
					</p>
					<h2
						id="history-heading"
						class="text-foreground font-display mt-1 text-2xl font-medium tracking-wide sm:text-3xl"
					>
						Change History
					</h2>
				</div>
				<span class="text-muted-foreground font-mono text-xs">
					{visibleChangelogs.length}
					{plural(visibleChangelogs.length, 'patch', 'patches')}
				</span>
			</div>

			{#if selectedAbilityName}
				<div
					class="clip-corner-sm border-signal/30 bg-signal/5 mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 border px-4 py-2.5 text-sm"
				>
					<span
						class="text-muted-foreground font-mono text-[10px] tracking-widest uppercase"
					>
						Filtered to
					</span>
					<span class="text-foreground font-medium">{selectedAbilityName}</span>
					<button
						type="button"
						onclick={() => toggleAbility(selectedAbility ?? '')}
						class="text-signal ml-auto inline-flex items-center gap-1 font-mono text-xs font-semibold hover:underline"
					>
						<XIcon class="size-3.5" />
						Show all changes
					</button>
				</div>
			{/if}

			{#if visibleChangelogs.length > 0}
				<ol class="m-0 list-none space-y-4 p-0">
					{#each visibleChangelogs as changelog (changelog.id)}
						<li
							class="clip-corner-sm bg-card relative overflow-hidden border p-4 sm:p-5"
							style:border-color="color-mix(in oklab, {accent} 24%, var(--border))"
						>
							<div
								class="pointer-events-none absolute inset-x-0 top-0 h-px"
								style:background="linear-gradient(to right, {accent}, transparent 75%)"
								aria-hidden="true"
							></div>
							<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
								<h3>
									<a
										href={entityPatchHref(changelog, entity)}
										class="text-foreground hover:text-signal text-sm font-semibold transition-colors"
									>
										<time datetime={changelog.date.toISOString()}>
											{formatDate(changelog.date)}
										</time>
									</a>
								</h3>
								<span class="font-mono text-xs" style:color={accent}>
									{changeCountLabel(changelog.changeCount)}
								</span>
								<span class="text-muted-foreground ml-auto truncate text-xs">
									by {changelog.author}
								</span>
							</div>
							{#if changelog.changeGroups?.length}
								<div class="mt-3 space-y-3">
									{#each changelog.changeGroups as group, gi (gi)}
										<div>
											{#if group.ability}
												<div class="mb-1.5 flex items-center gap-2">
													{#if group.icon}
														<img
															src={group.icon}
															alt=""
															width="24"
															height="24"
															loading="lazy"
															decoding="async"
															class="size-6 rounded object-cover"
														/>
													{/if}
													<h4 class="text-foreground text-sm font-semibold">
														{group.ability}
													</h4>
												</div>
											{/if}
											<ul
												class="list-none space-y-1.5 {group.ability ? 'ml-12' : 'ml-4'}"
											>
												{#each group.bullets as bullet, i (i)}
													<li
														class="text-foreground/90 before:bg-primary/40 relative text-sm leading-relaxed before:absolute before:top-[0.55em] before:-left-4 before:size-1.5 before:rounded-full before:content-['']"
													>
														{bullet}
													</li>
												{/each}
											</ul>
										</div>
									{/each}
								</div>
							{:else}
								<p class="text-muted-foreground mt-3 text-sm">
									{entity.name} was mentioned in this patch —
									<a
										href={entityPatchHref(changelog, entity)}
										class="text-signal hover:underline">details in the full notes</a
									>.
								</p>
							{/if}
						</li>
					{/each}
				</ol>
			{:else}
				<div
					class="clip-corner bg-card border-border relative overflow-hidden border-2 p-8 text-center sm:p-12"
				>
					<CornerAccents tlSize="2rem" tlColor="bg-signal/50" />
					<EmptyIcon class="text-signal/60 mx-auto mb-4 size-8" />
					<p class="text-muted-foreground font-mono text-xs tracking-wide uppercase">
						No log entries
					</p>
					<p class="text-foreground mt-2 text-lg">
						No recorded changes for {selectedAbilityName ?? entity.name}.
					</p>
				</div>
			{/if}
		</section>
	</div>
</main>
