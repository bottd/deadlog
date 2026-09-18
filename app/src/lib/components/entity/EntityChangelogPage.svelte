<script lang="ts">
	import { RecentPatches } from '$lib/components/changelog';
	import {
		changeCountLabel,
		entityPatchHref
	} from '$lib/components/changelog/entityContext';
	import {
		absoluteUrl,
		ENTITY_LISTING,
		entityCollectionSchema,
		pageMeta
	} from '$lib/seo';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import { countBullets, formatDate, formatYear, plural } from '@deadlog/utils';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import EntityHistoryToc from './EntityHistoryToc.svelte';
	import type { Snippet } from 'svelte';
	import { shallowParams } from '$lib/stores/shallowParams.svelte';

	interface ChangeGroup {
		ability: string | null;
		abilitySlug?: string | null;
		icon?: string | null;
		bullets: string[];
	}
	interface EntityPatch {
		id: string;
		slug: string;
		title: string;
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
	let {
		entity,
		parent,
		accent,
		label,
		changelogs,
		abilities = [],
		currentAbilitySlug,
		labelSuffix,
		seo
	}: {
		entity: { type: 'hero' | 'item' | 'ability'; name: string; image?: string };
		/** Set on an ability page: the hero the ability belongs to, shown above its name. */
		parent?: { name: string; slug: string; image?: string };
		/** Set on an ability page: which rail entry is the page you are on. */
		currentAbilitySlug?: string;
		accent: string;
		label: string;
		changelogs: EntityPatch[];
		abilities?: Ability[];
		labelSuffix?: Snippet;
		seo: {
			path: string;
			title: string;
			description: string;
			image: string;
			indexable: boolean;
		};
	} = $props();

	// An ability page shows one ability already, so its rail navigates between siblings
	// instead of filtering. That also makes it work without JS, unlike the filter rail.
	const abilityLinkMode = $derived(entity.type === 'ability');
	const railChip =
		'ui-focus-ring border-subtle bg-card text-foreground flex min-h-11 items-center gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors idle-hover:border-signal/60 selected:(border-signal bg-signal/10 text-signal)';
	const params = shallowParams({ ability: 0 });
	const selectedAbility = $derived(
		abilities.find((ability) => ability.slug === params.ability) ?? null
	);
	function toggleAbility(slug: string) {
		params.ability = selectedAbility?.slug === slug ? '' : slug;
	}
	const visibleChangelogs = $derived.by(() => {
		if (!selectedAbility) return changelogs;
		return changelogs.flatMap((patch) => {
			const changeGroups =
				patch.changeGroups?.filter(
					(group) => group.abilitySlug === selectedAbility.slug
				) ?? [];
			return changeGroups.length
				? [
						{
							...patch,
							changeGroups,
							changeCount: countBullets(changeGroups)
						}
					]
				: [];
		});
	});
	const historyYears = $derived([
		...visibleChangelogs.reduce((groups, patch) => {
			const year = formatYear(patch.date);
			const group = groups.get(year);
			if (group) group.push(patch);
			else groups.set(year, [patch]);
			return groups;
		}, new Map<string, EntityPatch[]>())
	]);
	const showToc = $derived(visibleChangelogs.length >= 6);
	const tocYears = $derived(
		historyYears.map(
			([year, patches]) =>
				[
					year,
					patches.map((patch) => ({
						id: patch.id,
						label: formatDate(patch.date),
						changeCount: patch.changeCount
					}))
				] as [string, { id: string; label: string; changeCount: number | null }[]]
		)
	);
	const listing = $derived(ENTITY_LISTING[entity.type]);
	const latest = $derived(changelogs[0]);
	const oldest = $derived(changelogs.at(-1));
	const changes = $derived.by(() => {
		const counted = changelogs.filter((patch) => patch.changeCount !== null);
		const total = counted.reduce((sum, patch) => sum + (patch.changeCount ?? 0), 0);
		const unknown = changelogs.length - counted.length;
		return {
			unknown,
			value: unknown === 0 ? String(total) : counted.length ? `${total}+` : null
		};
	});
</script>

<MetaTags
	{...pageMeta({
		title: seo.title,
		description: seo.description,
		canonical: absoluteUrl(seo.path),
		image: seo.image,
		indexable: seo.indexable
	})}
/>
{#if seo.indexable}
	<JsonLd
		schema={entityCollectionSchema({
			entity,
			parent: parent ? { name: parent.name, path: `/hero/${parent.slug}` } : undefined,
			path: seo.path,
			title: seo.title,
			description: seo.description,
			image: seo.image,
			changelogs
		})}
	/>
{/if}

<main class="container mx-auto mt-6 mb-24 max-w-4xl px-4 sm:mt-8 xl:max-w-6xl">
	<div class="xl:flex xl:gap-8">
		<div class="min-w-0 xl:flex-1">
			<a
				href={listing.path}
				class="ui-focus-ring text-muted-foreground hover:text-signal mb-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm"
			>
				<ArrowLeft class="size-4" /> Back to {listing.label.toLowerCase()}
			</a>
			<header class="border-subtle mb-6 border-b pb-5">
				<div class="flex items-start gap-4">
					{#if entity.image}
						<img
							src={entity.image}
							alt=""
							width="80"
							height="80"
							decoding="async"
							fetchpriority="high"
							class="clip-corner-sm bg-card size-16 shrink-0 border sm:size-20 {entity.type ===
							'item'
								? 'object-contain p-2'
								: 'object-cover'}"
							style:border-color={accent}
						/>
					{/if}
					<div class="min-w-0">
						{#if parent}
							<p class="mb-1 font-mono text-xs">
								<a
									href="/hero/{parent.slug}"
									class="ui-focus-ring text-muted-foreground hover:text-foreground rounded-sm underline-offset-4 hover:underline"
									>{parent.name}</a
								>
							</p>
						{/if}
						<h1
							class="font-display text-foreground text-4xl leading-tight font-medium tracking-wide break-words sm:text-5xl"
						>
							{entity.name}
						</h1>
						<p
							class="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs capitalize"
							style:color={accent}
						>
							<span>{label}</span>
							{@render labelSuffix?.()}
						</p>
						{#if latest}
							<p class="text-muted-foreground mt-3 text-sm">
								{latest.changeCount === null ? 'Last mentioned' : 'Last changed'}
								<a
									href={entityPatchHref(latest, entity)}
									class="text-foreground underline-offset-4 hover:underline"
									><time datetime={latest.date.toISOString()}
										>{formatDate(latest.date)}</time
									></a
								>
							</p>
						{/if}
					</div>
				</div>
				<details class="mt-3">
					<summary
						class="ui-focus-ring text-muted-foreground w-fit cursor-pointer rounded-sm py-3 text-sm"
					>
						{changelogs.length}
						{plural(changelogs.length, 'patch', 'patches')}{#if changes.value !== null}
							· {changes.value} changes{/if}
						<span class="ml-2 text-xs">Archive details</span>
					</summary>
					<div class="space-y-4 pt-2">
						{#if oldest}<p class="text-muted-foreground text-sm">
								First recorded: <time datetime={oldest.date.toISOString()}
									>{formatDate(oldest.date)}</time
								>.
							</p>{/if}
						{#if changes.unknown > 0}<p class="text-muted-foreground text-sm">
								{changes.unknown}
								{plural(changes.unknown, 'patch', 'patches')} mention {entity.name} without
								a separate change count.
							</p>{/if}
						<RecentPatches patches={changelogs} {entity} />
						{#if abilities.some((ability) => ability.description)}
							<div>
								<h2 class="mb-3 text-sm font-semibold">Ability descriptions</h2>
								<dl class="max-w-[72ch] space-y-3 text-sm leading-relaxed">
									{#each abilities as ability (ability.slug)}
										{#if ability.description}<div>
												<dt class="font-semibold">{ability.name}</dt>
												<dd class="text-muted-foreground mt-1">{ability.description}</dd>
											</div>{/if}
									{/each}
								</dl>
							</div>
						{/if}
					</div>
				</details>
			</header>

			{#if abilities.length}
				{#snippet railEntry(ability: Ability)}
					<img
						src={ability.image}
						alt=""
						width="24"
						height="24"
						loading="lazy"
						decoding="async"
						class="size-6 rounded object-cover"
					/>
					{ability.name}
				{/snippet}
				<section aria-label="Abilities" class="mb-6 {abilityLinkMode ? '' : 'js-only'}">
					<p class="text-muted-foreground mb-2 text-sm">
						{abilityLinkMode ? 'Other abilities' : 'Filter by ability'}
					</p>
					<div class="flex flex-wrap gap-2">
						{#each abilities as ability (ability.slug)}
							{#if abilityLinkMode}
								<a
									href="/ability/{ability.slug}"
									aria-current={ability.slug === currentAbilitySlug ? 'page' : undefined}
									class={railChip}
								>
									{@render railEntry(ability)}
								</a>
							{:else}
								<button
									type="button"
									onclick={() => toggleAbility(ability.slug)}
									aria-pressed={selectedAbility?.slug === ability.slug}
									class={railChip}
								>
									{@render railEntry(ability)}
								</button>
							{/if}
						{/each}
					</div>
					{#if selectedAbility && !abilityLinkMode}
						<p class="mt-2 text-sm">
							<a
								href="/ability/{selectedAbility.slug}"
								class="ui-focus-ring text-signal rounded-sm underline-offset-4 hover:underline"
								>{selectedAbility.name} full history</a
							>
						</p>
					{/if}
				</section>
			{/if}

			<section aria-labelledby="history-heading">
				<div class="mb-2 flex flex-wrap items-baseline justify-between gap-3">
					<h2
						id="history-heading"
						class="font-display text-foreground text-2xl font-medium tracking-wide"
					>
						Change History
					</h2>
					<span class="text-muted-foreground font-mono text-xs"
						>{visibleChangelogs.length}
						{plural(visibleChangelogs.length, 'patch', 'patches')}</span
					>
				</div>
				{#if selectedAbility}
					<div
						class="text-muted-foreground mb-4 flex flex-wrap items-center justify-between gap-2 text-sm"
						role="status"
					>
						<span
							>Showing <strong class="text-foreground font-medium"
								>{selectedAbility.name}</strong
							> changes</span
						>
						<button
							type="button"
							onclick={() => toggleAbility(selectedAbility?.slug ?? '')}
							class="ui-focus-ring text-signal min-h-11 rounded-sm px-1 text-sm underline-offset-4 hover:underline"
							>Show all changes</button
						>
					</div>
				{/if}
				{#if visibleChangelogs.length}
					{#each historyYears as [year, patches] (year)}
						<section aria-labelledby="year-{year}">
							<h3
								id="year-{year}"
								class="bg-background/95 border-subtle text-signal sticky top-[7rem] z-10 -mx-1 mb-1 flex items-baseline gap-3 border-b px-1 pt-5 pb-2 font-mono text-lg backdrop-blur-sm"
							>
								{year}
								<span class="text-muted-foreground ml-auto text-xs"
									>{patches.length}
									{plural(patches.length, 'patch', 'patches')}</span
								>
							</h3>
							<!-- `border`, not `subtle`: `subtle` measures 1.54:1 here, under the 3:1 floor. -->
							<ol class="divide-border divide-y">
								{#each patches as patch (patch.id)}
									<li class="scroll-mt-44 py-5" id="history-{patch.id}" data-entity-patch>
										<div class="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
											<h4 class="text-foreground text-base font-semibold">
												<!-- Padding plus matching negative margin: a 44px hit box that leaves
										     the shared baseline where it is. -->
												<a
													href={entityPatchHref(patch, entity)}
													class="ui-focus-ring hover:text-signal -my-3.5 inline-block rounded-sm py-3.5 underline-offset-4 hover:underline"
													><time datetime={patch.date.toISOString()}
														>{formatDate(patch.date)}</time
													></a
												>
											</h4>
											<span class="text-muted-foreground text-xs"
												>{changeCountLabel(patch.changeCount)}</span
											>
										</div>
										{#if patch.changeGroups?.length}
											<div class="max-w-[72ch] space-y-4">
												{#each patch.changeGroups as group, groupIndex (groupIndex)}
													<div>
														{#if group.ability}
															<div class="mb-2 flex items-center gap-2">
																{#if group.icon}<img
																		src={group.icon}
																		alt=""
																		width="24"
																		height="24"
																		loading="lazy"
																		decoding="async"
																		class="size-6 rounded object-cover"
																	/>{/if}
																<h5 class="text-foreground text-sm font-semibold">
																	{group.ability}
																</h5>
															</div>
														{/if}
														<ul
															class="marker:text-primary/60 ml-4 list-disc space-y-2 text-base leading-relaxed"
														>
															{#each group.bullets as bullet, index (index)}<li
																	class="pl-1"
																>
																	{bullet}
																</li>{/each}
														</ul>
													</div>
												{/each}
											</div>
										{:else}
											<p
												class="text-muted-foreground max-w-[72ch] text-sm leading-relaxed"
											>
												{entity.name} was mentioned in this patch. See the full notes for context.
											</p>
										{/if}
										<a
											href={entityPatchHref(patch, entity)}
											class="ui-focus-ring text-signal mt-2 inline-flex min-h-11 items-center gap-1.5 rounded-sm text-xs underline-offset-4 hover:underline"
											>Full patch <ArrowRight class="size-3.5" /></a
										>
									</li>
								{/each}
							</ol>
						</section>
					{/each}
				{:else}
					<div
						border="border/50 2"
						bg="card"
						relative
						p="x-6 y-10"
						text="center"
						class="clip-corner my-4 overflow-hidden"
						role="status"
					>
						<CornerAccents
							tlSize="1.5rem"
							brSize="1.25rem"
							tlColor="bg-muted-foreground/30"
							brColor="bg-muted-foreground/20"
							thickness="2px"
						/>
						<h3 font="display medium" text="foreground xl" m="b-2" class="tracking-wide">
							Nothing recorded for {selectedAbility?.name ?? entity.name}
						</h3>
						<p text="muted-foreground sm" m="x-auto b-6" class="max-w-md leading-relaxed">
							{#if selectedAbility}
								{entity.name} has changes in the archive, but none of them touch this ability.
							{:else}
								{entity.name} has not appeared in any patch notes yet. It shows up here the
								first time it is changed.
							{/if}
						</p>
						{#if selectedAbility}
							<button
								type="button"
								onclick={() => toggleAbility(selectedAbility?.slug ?? '')}
								border="signal/25 ~"
								bg="signal/10"
								text="signal sm"
								class="ui-focus-ring inline-flex min-h-11 items-center rounded-md px-4 transition-colors hover:(bg-signal/20 border-signal/50)"
							>
								Show all {entity.name} changes
							</button>
						{:else}
							<a
								href={listing.path}
								border="signal/25 ~"
								bg="signal/10"
								text="signal sm"
								class="ui-focus-ring inline-flex min-h-11 items-center gap-1.5 rounded-md px-4 transition-colors hover:(bg-signal/20 border-signal/50)"
							>
								Browse all {listing.label.toLowerCase()}
								<ArrowRight class="size-3.5" />
							</a>
						{/if}
					</div>
				{/if}
			</section>
		</div>

		{#if showToc}
			<aside
				class="hidden xl:block xl:w-52 xl:shrink-0"
				aria-label="Change history index"
			>
				<div
					class="sticky top-[8rem] max-h-[calc(100dvh-9rem)] overflow-y-auto overscroll-contain pr-1"
					style="scrollbar-gutter: stable"
				>
					<EntityHistoryToc years={tocYears} />
				</div>
			</aside>
		{/if}
	</div>
</main>
