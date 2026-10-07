<script lang="ts">
	import { RecentPatches } from '#lib/components/changelog/index.ts';
	import {
		changeCountLabel,
		entityPatchHref
	} from '#lib/components/changelog/entityContext.ts';
	import {
		absoluteUrl,
		ENTITY_LISTING,
		entityCollectionSchema,
		pageMeta
	} from '#lib/seo.ts';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import { countBullets, formatDate, formatYear, plural } from '@deadlog/utils';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import CornerAccents from '#lib/components/ui/corner-accents/CornerAccents.svelte';
	import EntityHistoryToc from './EntityHistoryToc.svelte';
	import type { Snippet } from 'svelte';
	import { shallowParams } from '#lib/stores/shallowParams.svelte.ts';

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
		...Map.groupBy(visibleChangelogs, (patch) => formatYear(patch.date))
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

<main
	class="page-container entity-page"
	style:--entity-color={accent}
	data-entity-kind={entity.type}
>
	<div class="history-layout">
		<div class="history-main">
			<a href={listing.path} class="ui-focus-ring back-link">
				<ArrowLeft class="icon" /> Back to {listing.label.toLowerCase()}
			</a>
			<header class="entity-header">
				<div class="identity-row">
					{#if entity.image}
						<img
							src={entity.image}
							alt=""
							width="80"
							height="80"
							decoding="async"
							fetchpriority="high"
							class="entity-image clip-corner-sm"
						/>
					{/if}
					<div class="identity-text">
						{#if parent}
							<p class="parent-entity">
								<a href="/hero/{parent.slug}" class="ui-focus-ring parent-link"
									>{parent.name}</a
								>
							</p>
						{/if}
						<h1 class="entity-title">
							{entity.name}
						</h1>
						<p class="entity-classification">
							<span>{label}</span>
							{@render labelSuffix?.()}
						</p>
						{#if latest}
							<p class="latest-change">
								{latest.changeCount === null ? 'Last mentioned' : 'Last changed'}
								<a href={entityPatchHref(latest, entity)}
									><time datetime={latest.date.toISOString()}
										>{formatDate(latest.date)}</time
									></a
								>
							</p>
						{/if}
					</div>
				</div>
				<details class="archive-details">
					<summary class="ui-focus-ring archive-summary">
						{changelogs.length}
						{plural(changelogs.length, 'patch', 'patches')}{#if changes.value !== null}
							· {changes.value} changes{/if}
						<span>Archive details</span>
					</summary>
					<div class="archive-body">
						{#if oldest}<p class="archive-copy">
								First recorded: <time datetime={oldest.date.toISOString()}
									>{formatDate(oldest.date)}</time
								>.
							</p>{/if}
						{#if changes.unknown > 0}<p class="archive-copy">
								{changes.unknown}
								{plural(changes.unknown, 'patch', 'patches')} mention {entity.name} without
								a separate change count.
							</p>{/if}
						<RecentPatches patches={changelogs} {entity} />
						{#if abilities.some((ability) => ability.description)}
							<div>
								<h2 class="descriptions-heading">Ability descriptions</h2>
								<dl class="ability-descriptions">
									{#each abilities as ability (ability.slug)}
										{#if ability.description}<div>
												<dt>{ability.name}</dt>
												<dd>{ability.description}</dd>
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
						class="ability-icon"
					/>
					{ability.name}
				{/snippet}
				<section
					aria-label="Abilities"
					class={['abilities', !abilityLinkMode && 'js-only']}
				>
					<p class="ability-filter-label">
						{abilityLinkMode ? 'Other abilities' : 'Filter by ability'}
					</p>
					<div class="ability-options">
						{#each abilities as ability (ability.slug)}
							{#if abilityLinkMode}
								<a
									href="/ability/{ability.slug}"
									aria-current={ability.slug === currentAbilitySlug ? 'page' : undefined}
									class="ability-chip ui-focus-ring"
								>
									{@render railEntry(ability)}
								</a>
							{:else}
								<button
									type="button"
									onclick={() => toggleAbility(ability.slug)}
									aria-pressed={selectedAbility?.slug === ability.slug}
									class="ability-chip ui-focus-ring"
								>
									{@render railEntry(ability)}
								</button>
							{/if}
						{/each}
					</div>
					{#if selectedAbility && !abilityLinkMode}
						<p class="selected-ability-history">
							<a href="/ability/{selectedAbility.slug}" class="ui-focus-ring history-link"
								>{selectedAbility.name} full history</a
							>
						</p>
					{/if}
				</section>
			{/if}

			<section aria-labelledby="history-heading">
				<div class="history-heading-row">
					<h2 id="history-heading" class="history-heading">Change History</h2>
					<span class="history-count"
						>{visibleChangelogs.length}
						{plural(visibleChangelogs.length, 'patch', 'patches')}</span
					>
				</div>
				{#if selectedAbility}
					<div class="ability-status" role="status">
						<span>Showing <strong>{selectedAbility.name}</strong> changes</span>
						<button
							type="button"
							onclick={() => toggleAbility(selectedAbility?.slug ?? '')}
							class="ui-focus-ring reset-ability history-link">Show all changes</button
						>
					</div>
				{/if}
				{#if visibleChangelogs.length}
					{#each historyYears as [year, patches] (year)}
						<section aria-labelledby="year-{year}">
							<h3 id="year-{year}" class="year-heading">
								{year}
								<span class="year-count"
									>{patches.length}
									{plural(patches.length, 'patch', 'patches')}</span
								>
							</h3>
							<!-- `border`, not `subtle`: `subtle` measures 1.54:1 here, under the 3:1 floor. -->
							<ol class="history-entries">
								{#each patches as patch (patch.id)}
									<li class="history-entry" id="history-{patch.id}" data-entity-patch>
										<div class="entry-heading-row">
											<h4 class="entry-title">
												<!-- Padding plus matching negative margin: a 44px hit box that leaves
										     the shared baseline where it is. -->
												<a
													href={entityPatchHref(patch, entity)}
													class="ui-focus-ring entry-date"
													><time datetime={patch.date.toISOString()}
														>{formatDate(patch.date)}</time
													></a
												>
											</h4>
											<span class="entry-count"
												>{changeCountLabel(patch.changeCount)}</span
											>
										</div>
										{#if patch.changeGroups?.length}
											<div class="change-groups">
												{#each patch.changeGroups as group, groupIndex (groupIndex)}
													<div>
														{#if group.ability}
															<div class="change-heading-row">
																{#if group.icon}<img
																		src={group.icon}
																		alt=""
																		width="24"
																		height="24"
																		loading="lazy"
																		decoding="async"
																		class="ability-icon"
																	/>{/if}
																<h5>
																	{group.ability}
																</h5>
															</div>
														{/if}
														<ul class="change-bullets">
															{#each group.bullets as bullet, index (index)}<li>
																	{bullet}
																</li>{/each}
														</ul>
													</div>
												{/each}
											</div>
										{:else}
											<p class="mention-context">
												{entity.name} was mentioned in this patch. See the full notes for context.
											</p>
										{/if}
										<a
											href={entityPatchHref(patch, entity)}
											class="ui-focus-ring full-patch history-link"
											>Full patch <ArrowRight class="icon-sm" /></a
										>
									</li>
								{/each}
							</ol>
						</section>
					{/each}
				{:else}
					<div class="empty-panel entity-empty clip-corner" role="status">
						<CornerAccents tlSize="1.5rem" brSize="1.25rem" thickness="2px" />
						<h3 class="empty-heading">
							Nothing recorded for {selectedAbility?.name ?? entity.name}
						</h3>
						<p class="empty-copy">
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
								class="pill-signal"
							>
								Show all {entity.name} changes
							</button>
						{:else}
							<a href={listing.path} class="pill-signal">
								Browse all {listing.label.toLowerCase()}
								<ArrowRight class="icon-sm" />
							</a>
						{/if}
					</div>
				{/if}
			</section>
		</div>

		{#if showToc}
			<aside class="history-index" aria-label="Change history index">
				<div class="history-index-scroll">
					<EntityHistoryToc years={tocYears} />
				</div>
			</aside>
		{/if}
	</div>
</main>

<style>
	@layer components.features {
		.entity-page {
			max-inline-size: 56rem;
			margin-block: 1.5rem 6rem;
		}
		.history-main,
		.identity-text {
			min-inline-size: 0;
		}
		.back-link {
			display: inline-flex;
			min-block-size: 2.75rem;
			align-items: center;
			gap: 0.5rem;
			margin-bottom: 1.25rem;
			border-radius: var(--radius-sm);
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			&:hover {
				color: var(--signal);
			}
		}
		.entity-header {
			margin-bottom: 1.5rem;
			border-bottom: 1px solid var(--border-subtle);
			padding-bottom: 1.25rem;
		}
		.identity-row {
			display: flex;
			align-items: flex-start;
			gap: 1rem;
		}
		.entity-image {
			inline-size: 4rem;
			block-size: 4rem;
			flex-shrink: 0;
			border: 1px solid var(--entity-color);
			background: var(--card);
			object-fit: cover;
		}
		.entity-page[data-entity-kind='item'] .entity-image {
			padding: 0.5rem;
			object-fit: contain;
		}
		.parent-entity {
			margin-bottom: 0.25rem;
			font-family: var(--font-mono);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.parent-link {
			border-radius: var(--radius-sm);
			color: var(--muted-foreground);
			text-underline-offset: 4px;
			&:hover {
				color: var(--foreground);
				text-decoration: underline;
			}
		}
		.entity-title {
			color: var(--foreground);
			font: 500 var(--text-4xl)/1.25 var(--font-display);
			letter-spacing: 0.025em;
			overflow-wrap: break-word;
		}
		.entity-classification {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.5rem;
			margin-top: 0.25rem;
			color: var(--entity-color);
			font-family: var(--font-mono);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
			text-transform: capitalize;
		}
		.latest-change {
			margin-top: 0.75rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			& a {
				color: var(--foreground);
				text-underline-offset: 4px;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		.archive-details {
			margin-top: 0.75rem;
		}
		.archive-summary {
			inline-size: fit-content;
			border-radius: var(--radius-sm);
			padding-block: 0.75rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			& span {
				margin-left: 0.5rem;
				font-size: var(--text-xs);
				line-height: var(--leading-xs);
			}
		}
		.archive-body {
			padding-top: 0.5rem;
			& > :global(*) + :global(*) {
				margin-top: 1rem;
			}
		}
		.archive-copy {
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		.descriptions-heading {
			margin-bottom: 0.75rem;
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			font-weight: 600;
		}
		.ability-descriptions {
			max-inline-size: 72ch;
			font-size: var(--text-sm);
			line-height: var(--leading-relaxed);
			& > * + * {
				margin-top: 0.75rem;
			}
			& dt {
				font-weight: 600;
			}
			& dd {
				margin-top: 0.25rem;
				color: var(--muted-foreground);
			}
		}
		.abilities {
			margin-bottom: 1.5rem;
		}
		.ability-filter-label {
			margin-bottom: 0.5rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		.ability-options {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
		}
		.ability-chip {
			display: flex;
			min-block-size: 2.75rem;
			align-items: center;
			gap: 0.5rem;
			border: 1px solid var(--border-subtle);
			border-radius: var(--radius-md);
			padding: 0.5rem 0.75rem;
			background: var(--card);
			color: var(--foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			text-align: left;
			transition:
				border-color var(--duration-normal),
				color var(--duration-normal),
				background-color var(--duration-normal);
			&:hover:not([aria-pressed='true'], [aria-current='page']) {
				border-color: color-mix(in srgb, var(--signal) 60%, transparent);
			}
			&:is([aria-pressed='true'], [aria-current='page']) {
				border-color: var(--signal);
				background: color-mix(in srgb, var(--signal) 10%, transparent);
				color: var(--signal);
			}
		}
		.ability-icon {
			inline-size: 1.5rem;
			block-size: 1.5rem;
			border-radius: 0.25rem;
			object-fit: cover;
		}
		.selected-ability-history {
			margin-top: 0.5rem;
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		.history-link {
			border-radius: var(--radius-sm);
			color: var(--signal);
			text-underline-offset: 4px;
			&:hover {
				text-decoration: underline;
			}
		}
		.history-heading-row {
			display: flex;
			flex-wrap: wrap;
			align-items: baseline;
			justify-content: space-between;
			gap: 0.75rem;
			margin-bottom: 0.5rem;
		}
		.history-heading {
			color: var(--foreground);
			font: 500 var(--text-2xl)/var(--leading-2xl) var(--font-display);
			letter-spacing: 0.025em;
		}
		.history-count {
			color: var(--muted-foreground);
			font-family: var(--font-mono);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.ability-status {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;
			margin-bottom: 1rem;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
			& strong {
				color: var(--foreground);
				font-weight: 500;
			}
		}
		.reset-ability {
			min-block-size: 2.75rem;
			padding-inline: 0.25rem;
		}
		.year-heading {
			position: sticky;
			top: 7rem;
			z-index: 10;
			display: flex;
			align-items: baseline;
			gap: 0.75rem;
			margin: 0 -0.25rem 0.25rem;
			border-bottom: 1px solid var(--border-subtle);
			padding: 1.25rem 0.25rem 0.5rem;
			background: color-mix(in srgb, var(--background) 95%, transparent);
			color: var(--signal);
			font: var(--text-lg)/var(--leading-lg) var(--font-mono);
			backdrop-filter: blur(8px);
		}
		.year-count {
			margin-left: auto;
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.history-entry {
			scroll-margin-top: 11rem;
			padding-block: 1.25rem;
		}
		.history-entries > li + li {
			border-top: 1px solid var(--border);
		}
		.entry-heading-row {
			display: flex;
			flex-wrap: wrap;
			align-items: baseline;
			gap: 0.25rem 0.75rem;
			margin-bottom: 0.75rem;
		}
		.entry-title {
			color: var(--foreground);
			font-size: var(--text-base);
			line-height: var(--leading-base);
			font-weight: 600;
		}
		.entry-date {
			display: inline-block;
			margin-block: -0.875rem;
			border-radius: var(--radius-sm);
			padding-block: 0.875rem;
			text-underline-offset: 4px;
			&:hover {
				color: var(--signal);
				text-decoration: underline;
			}
		}
		.entry-count {
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.change-groups {
			max-inline-size: 72ch;
			& > * + * {
				margin-top: 1rem;
			}
		}
		.change-heading-row {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-bottom: 0.5rem;
			& h5 {
				color: var(--foreground);
				font-size: var(--text-sm);
				line-height: var(--leading-sm);
				font-weight: 600;
			}
		}
		.change-bullets {
			margin-left: 1rem;
			list-style: disc;
			font-size: var(--text-base);
			line-height: var(--leading-relaxed);
			& li {
				padding-left: 0.25rem;
			}
			& li + li {
				margin-top: 0.5rem;
			}
			& li::marker {
				color: color-mix(in srgb, var(--primary) 60%, transparent);
			}
		}
		.mention-context {
			max-inline-size: 72ch;
			color: var(--muted-foreground);
			font-size: var(--text-sm);
			line-height: var(--leading-relaxed);
		}
		.full-patch {
			display: inline-flex;
			min-block-size: 2.75rem;
			align-items: center;
			gap: 0.375rem;
			margin-top: 0.5rem;
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
		}
		.entity-empty {
			margin-block: 1rem;
			padding: 2.5rem 1.5rem;
			& .empty-heading {
				margin-bottom: 0.5rem;
				font-size: var(--text-xl);
				line-height: var(--leading-xl);
			}
			& .empty-copy {
				margin-bottom: 1.5rem;
				font-size: var(--text-sm);
				line-height: var(--leading-sm);
			}
		}
		.history-index {
			display: none;
		}
		.history-index-scroll {
			position: sticky;
			top: 8rem;
			max-block-size: calc(100dvh - 9rem);
			overflow-y: auto;
			overscroll-behavior: contain;
			padding-right: 0.25rem;
			scrollbar-gutter: stable;
		}
		@media (min-width: 40rem) {
			.entity-page {
				margin-top: 2rem;
			}
			.entity-image {
				inline-size: 5rem;
				block-size: 5rem;
			}
			.entity-title {
				font-size: var(--text-5xl);
				line-height: var(--leading-5xl);
			}
		}
		@media (min-width: 80rem) {
			.entity-page {
				max-inline-size: 72rem;
			}
			.history-layout {
				display: flex;
				gap: 2rem;
			}
			.history-main {
				flex: 1;
			}
			.history-index {
				display: block;
				inline-size: 13rem;
				flex-shrink: 0;
			}
		}
	}
</style>
