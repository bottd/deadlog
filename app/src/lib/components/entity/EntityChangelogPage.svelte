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
	<dt text="muted-foreground" font="mono" uppercase class="text-[9px] tracking-widest">
		{text}
	</dt>
{/snippet}

<main class="bg-wire-grid min-h-screen">
	<div container m="x-auto t-6 b-24" p="x-3" class="max-w-6xl sm:mt-8 sm:px-4">
		<a
			href={listing.path}
			text="muted-foreground sm"
			m="b-6"
			items="center"
			gap="2"
			class="hover:text-signal inline-flex min-h-6 transition-colors sm:mb-8"
		>
			<ArrowLeft class="size-4" />
			<span>Back to {listing.label.toLowerCase()}</span>
		</a>

		<header
			bg="card"
			relative
			m="b-10"
			p="5"
			class="border-2 clip-corner-lg overflow-hidden sm:p-8 lg:p-10"
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
				absolute
				class="pointer-events-none inset-0"
				style:background="radial-gradient(circle at 12% 20%, color-mix(in oklab, {accent} 18%,
				transparent), transparent 42%)"
				aria-hidden="true"
			></div>
			<div
				absolute
				h="px"
				class="pointer-events-none inset-x-0 top-0"
				style:background="linear-gradient(to right, {accent}, var(--signal), transparent
				78%)"
				aria-hidden="true"
			></div>

			<div
				relative
				z="10"
				gap="7"
				class="grid md:grid-cols-[auto_minmax(0,1fr)] md:items-center"
			>
				{#if entity.image}
					<div relative m="x-auto" shrink="0" class="md:mx-0">
						<div
							absolute
							class="inset-2 -z-10 blur-2xl"
							style:background-color={accent}
							style:opacity={isItem ? '0.22' : '0.24'}
							aria-hidden="true"
						></div>
						{#if isItem}
							<div
								bg="muted/30"
								items="center"
								justify="center"
								p="3"
								class="border-2 clip-corner-sm size-32 sm:size-40 lg:size-44 flex"
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
								bg="muted/30"
								relative
								p="1.5"
								class="border-2 clip-corner-sm"
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

				<div text="center" class="min-w-0 md:text-left">
					<div
						m="b-3"
						flex="~ wrap"
						items="center"
						justify="center"
						gap="2"
						class="md:justify-start"
					>
						<span h="px" w="7" style:background-color={accent} aria-hidden="true"></span>
						<span
							font="mono bold"
							uppercase
							class="text-[10px] tracking-[0.22em]"
							style:color={accent}
						>
							{label}
						</span>
						{@render labelSuffix?.()}
					</div>
					<h1
						font="display medium"
						text="foreground 4xl"
						class="heading-glow leading-none tracking-wide break-words sm:text-5xl lg:text-6xl"
					>
						{entity.name}
					</h1>
					<p text="muted-foreground sm" m="t-3" class="max-w-2xl leading-relaxed">
						{lede}
					</p>

					<dl
						m="t-6"
						grid="cols-2"
						gap="px"
						class="grid overflow-hidden sm:grid-cols-5 border"
					>
						<div bg="muted/30" p="3" text="left">
							{@render statLabel('Patches')}
							<dd text="foreground xl" m="t-1" font="mono bold">
								{changelogs.length}
							</dd>
						</div>
						<div bg="muted/30" p="3" text="left">
							{@render statLabel('Changes')}
							<dd m="t-1" font="mono bold" text="xl" style:color={accent}>
								{changeValue}
							</dd>
						</div>
						<div bg="muted/30" p="3" text="left">
							{@render statLabel('Current streak')}
							<dd text="foreground xl" m="t-1" font="mono bold">
								{streaks.current}
							</dd>
						</div>
						<div bg="muted/30" p="3" text="left">
							{@render statLabel('Longest run')}
							<dd text="foreground xl" m="t-1" font="mono bold">
								{streaks.longest}
							</dd>
						</div>
						<div bg="muted/30" p="3" text="left" class="col-span-2 sm:col-span-1">
							{@render statLabel('Tracked since')}
							<dd text="foreground sm" m="t-1" font="semibold">
								{oldestPatch ? formatDate(oldestPatch.date) : 'No patches yet'}
							</dd>
						</div>
					</dl>
					{#if unknownPatches > 0}
						<p
							text="muted-foreground"
							m="t-2"
							font="mono"
							uppercase
							class="text-[9px] tracking-wide"
						>
							{unknownPatches}
							{plural(unknownPatches, 'patch', 'patches')} awaiting a reliable count
						</p>
					{/if}
				</div>
			</div>

			{#if changelogs.length > 1}
				<div border="border/60 t" relative z="10" m="t-7" p="t-5">
					<div m="b-2" items="center" justify="between" gap="3" class="flex">
						<span
							text="muted-foreground"
							font="mono bold"
							uppercase
							class="text-[9px] tracking-widest"
						>
							Patch cadence
						</span>
						<span text="muted-foreground" font="mono" class="text-[9px]">
							{changelogs.length} points
						</span>
					</div>
					<PatchTimeline patches={changelogs} {entity} {accent} />
				</div>
			{/if}
		</header>

		{#if abilities.length > 0}
			<section aria-label="Abilities" m="b-10">
				<p
					text="signal"
					m="b-3"
					font="mono bold"
					uppercase
					class="text-[10px] tracking-[0.2em]"
				>
					Abilities — click to filter the log
				</p>
				<div
					grid="cols-1"
					items="stretch"
					gap="3"
					class="grid auto-rows-fr sm:grid-cols-2 lg:grid-cols-4"
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
							<div items="center" gap="2.5" class="flex">
								<img
									src={ability.image}
									alt=""
									width="32"
									height="32"
									loading="lazy"
									decoding="async"
									class="size-8 rounded object-cover"
								/>
								<span text="foreground sm" font="semibold">
									{ability.name}
								</span>
							</div>
							{#if ability.description}
								<span
									text="muted-foreground xs"
									m="t-2"
									block
									class="line-clamp-2 leading-relaxed"
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
			<div m="b-6" items="end" justify="between" gap="4" class="flex">
				<div>
					<p
						text="signal"
						font="mono bold"
						uppercase
						class="text-[10px] tracking-[0.2em]"
					>
						Entity log
					</p>
					<h2
						id="history-heading"
						font="display medium"
						text="foreground 2xl"
						m="t-1"
						class="tracking-wide sm:text-3xl"
					>
						Change History
					</h2>
				</div>
				<span text="muted-foreground xs" font="mono">
					{visibleChangelogs.length}
					{plural(visibleChangelogs.length, 'patch', 'patches')}
				</span>
			</div>

			{#if selectedAbilityName}
				<div
					border="signal/30 ~"
					bg="signal/5"
					m="b-6"
					flex="~ wrap"
					items="center"
					gap="x-3 y-1"
					p="x-4 y-2.5"
					text="sm"
					class="clip-corner-sm"
				>
					<span
						text="muted-foreground"
						font="mono"
						uppercase
						class="text-[10px] tracking-widest"
					>
						Filtered to
					</span>
					<span text="foreground" font="medium">{selectedAbilityName}</span>
					<button
						type="button"
						onclick={() => toggleAbility(selectedAbility ?? '')}
						text="signal xs"
						m="l-auto"
						items="center"
						gap="1"
						font="mono semibold"
						class="inline-flex hover:underline"
					>
						<XIcon class="size-3.5" />
						Show all changes
					</button>
				</div>
			{/if}

			{#if visibleChangelogs.length > 0}
				<ol m="0" list="none" space="y-4" p="0">
					{#each visibleChangelogs as changelog (changelog.id)}
						<li
							bg="card"
							relative
							p="4"
							class="clip-corner-sm overflow-hidden sm:p-5 border"
							style:border-color="color-mix(in oklab, {accent} 24%, var(--border))"
						>
							<div
								absolute
								h="px"
								class="pointer-events-none inset-x-0 top-0"
								style:background="linear-gradient(to right, {accent}, transparent 75%)"
								aria-hidden="true"
							></div>
							<div flex="~ wrap" items="baseline" gap="x-3 y-1">
								<h3>
									<a
										href={entityPatchHref(changelog, entity)}
										text="foreground sm"
										font="semibold"
										class="hover:text-signal transition-colors"
									>
										<time datetime={changelog.date.toISOString()}>
											{formatDate(changelog.date)}
										</time>
									</a>
								</h3>
								<span font="mono" text="xs" style:color={accent}>
									{changeCountLabel(changelog.changeCount)}
								</span>
								<span text="muted-foreground xs" m="l-auto" truncate>
									by {changelog.author}
								</span>
							</div>
							{#if changelog.changeGroups?.length}
								<div m="t-3" space="y-3">
									{#each changelog.changeGroups as group, gi (gi)}
										<div>
											{#if group.ability}
												<div m="b-1.5" items="center" gap="2" class="flex">
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
													<h4 text="foreground sm" font="semibold">
														{group.ability}
													</h4>
												</div>
											{/if}
											<ul
												class="list-none space-y-1.5 {group.ability ? 'ml-12' : 'ml-4'}"
											>
												{#each group.bullets as bullet, i (i)}
													<li
														text="foreground/90 sm"
														relative
														class="before:bg-primary/40 leading-relaxed before:absolute before:top-[0.55em] before:-left-4 before:size-1.5 before:rounded-full before:content-['']"
													>
														{bullet}
													</li>
												{/each}
											</ul>
										</div>
									{/each}
								</div>
							{:else}
								<p text="muted-foreground sm" m="t-3">
									{entity.name} was mentioned in this patch —
									<a
										href={entityPatchHref(changelog, entity)}
										text="signal"
										class="hover:underline">details in the full notes</a
									>.
								</p>
							{/if}
						</li>
					{/each}
				</ol>
			{:else}
				<div
					border="border 2"
					bg="card"
					relative
					p="8"
					text="center"
					class="clip-corner overflow-hidden sm:p-12"
				>
					<CornerAccents tlSize="2rem" tlColor="bg-signal/50" />
					<EmptyIcon class="text-signal/60 mx-auto mb-4 size-8" />
					<p text="muted-foreground xs" font="mono" uppercase class="tracking-wide">
						No log entries
					</p>
					<p text="foreground lg" m="t-2">
						No recorded changes for {selectedAbilityName ?? entity.name}.
					</p>
				</div>
			{/if}
		</section>
	</div>
</main>
