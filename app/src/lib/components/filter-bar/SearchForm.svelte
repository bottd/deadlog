<script lang="ts">
	import type { FilterState } from './filterState.svelte';
	import { entityImage } from '#lib/utils/entityImages.ts';
	import { MAX_QUERY_LENGTH } from '#lib/queries/keys.ts';
	import SearchIcon from '@lucide/svelte/icons/search';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import * as Command from '#lib/components/ui/command/index.ts';
	import EntityItem from './EntityItem.svelte';

	let {
		filterState,
		mobile = false,
		open = $bindable(false),
		onsubmit,
		onclose
	}: {
		filterState: FilterState;
		mobile?: boolean;
		open?: boolean;
		onsubmit: () => void;
		onclose: () => void;
	} = $props();
	let commandValue = $state('');
	const prefix = $props.id();
	const listId = `${prefix}-filter-options`;
	const shown = $derived(mobile || open);
	const options = $derived(filterState.mergedList.slice(0, 60));
	const histories = $derived(filterState.inputValue.trim() ? options.slice(0, 3) : []);

	function submit(event?: SubmitEvent) {
		event?.preventDefault();
		filterState.updateSearch();
		onsubmit();
	}

	function keydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			event.stopPropagation();
			onclose();
		} else if (event.key === 'Enter' && options.length === 0) {
			event.preventDefault();
			event.stopPropagation();
			submit();
		} else if (
			event.key === 'ArrowDown' ||
			event.key === 'ArrowUp' ||
			event.key.length === 1
		) {
			open = true;
		}
	}
</script>

<Command.Root
	bind:value={commandValue}
	shouldFilter={false}
	loop
	label="Search all patch notes"
	class="search-command"
>
	<form method="GET" action="/" onsubmit={submit} class="search-form">
		<label for="{prefix}-filter-input" class="sr-only"
			>{mobile ? 'Hero, item, or keyword' : 'Search by hero, item, or keyword'}</label
		>
		<input
			id="{prefix}-filter-input"
			name="q"
			type="text"
			role="combobox"
			aria-autocomplete="list"
			aria-haspopup="listbox"
			aria-expanded={shown}
			aria-controls={shown ? listId : undefined}
			aria-activedescendant={shown && commandValue
				? `${prefix}-option-${commandValue}`
				: undefined}
			autocomplete="off"
			maxlength={MAX_QUERY_LENGTH}
			placeholder="Search heroes, items, or patch text…"
			bind:value={filterState.inputValue}
			onfocus={() => (open = true)}
			oninput={() => (open = true)}
			onkeydown={keydown}
			class="search-input"
		/>
		<button
			type="submit"
			aria-label="Search changelog"
			class="ui-focus-ring search-submit"
			onkeydown={(event) => event.stopPropagation()}
		>
			<SearchIcon class="icon-lg" />
		</button>
	</form>

	{#if shown}
		<div class="filter-dropdown" data-mobile={mobile}>
			{#if histories.length}
				<nav aria-label="Entity histories" class="histories">
					<p>Open full change history</p>
					<div class="history-links">
						{#each histories as entity (entity.key)}
							<a
								href="/{entity.type}/{entity.data.slug}"
								class="reading-action"
								onclick={onclose}
								onkeydown={(event) => event.stopPropagation()}
							>
								{entity.data.name}
								<ArrowRight class="icon-sm" />
							</a>
						{/each}
					</div>
				</nav>
			{/if}
			<Command.List
				id={listId}
				aria-label="Available hero and item filters"
				aria-multiselectable="true"
				tabindex={-1}
				class="search-options"
			>
				{#if options.length === 0}
					<Command.Empty class="search-empty"
						>No matching heroes or items. Press Enter to search patch text.</Command.Empty
					>
				{:else}
					<Command.Group heading="Filter patches by hero or item">
						{#each options as entity (entity.key)}
							<EntityItem
								id="{prefix}-option-{entity.key}"
								value={entity.key}
								name={entity.data.name}
								imageSrc={entityImage(entity.data)}
								isSelected={entity.isSelected}
								kind={entity.type}
								onSelect={() => filterState.toggle(entity.type, entity.data.name)}
							/>
						{/each}
					</Command.Group>
				{/if}
			</Command.List>
			<p class="search-help">
				Patches must match every selected hero, item, and keyword.
				{#if filterState.mergedList.length > 60}Type to narrow {filterState.mergedList
						.length} matches.{/if}
			</p>
		</div>
	{/if}
</Command.Root>

<style>
	@layer components.features {
		:global(.search-command) {
			position: relative;
			z-index: 50;
		}
		.search-form {
			display: flex;
			min-block-size: 2.75rem;
			align-items: center;
			border: 1px solid var(--border);
			border-radius: var(--radius-md);
			background: var(--card);
		}
		.search-input {
			min-inline-size: 0;
			flex: 1;
			padding: 0.625rem 0.75rem;
			font-size: var(--text-base);
			line-height: var(--leading-base);
			outline: none;
		}
		.search-submit {
			display: flex;
			inline-size: 2.75rem;
			block-size: 2.75rem;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
			border-radius: 0 var(--radius-md) var(--radius-md) 0;
			background: var(--primary);
			color: var(--primary-foreground);
			&:hover {
				opacity: 0.9;
			}
		}
		.filter-dropdown {
			min-block-size: 0;
			margin-top: 0.75rem;
			overflow-y: auto;
			&[data-mobile='false'] {
				position: absolute;
				inset-inline: 0;
				top: 100%;
				margin-top: 0.5rem;
				max-block-size: 65vh;
				border: 1px solid var(--border);
				border-radius: var(--radius-md);
				background: var(--popover);
				box-shadow: var(--shadow-xl);
			}
		}
		.histories {
			border-bottom: 1px solid var(--border-subtle);
			padding: 0.75rem;
			& p {
				margin-bottom: 0.25rem;
				color: var(--muted-foreground);
				font-size: var(--text-xs);
				line-height: var(--leading-xs);
			}
		}
		.history-links {
			display: flex;
			flex-wrap: wrap;
			gap: 0.25rem 1rem;
		}
		.history-links a {
			font-size: var(--text-sm);
			line-height: var(--leading-sm);
		}
		:global(.search-options) {
			max-block-size: 20rem;
			padding: 0.5rem;
		}
		:global(.search-empty) {
			padding: 1.25rem 0.75rem;
			color: var(--muted-foreground);
		}
		.search-help {
			border-top: 1px solid var(--border-subtle);
			padding: 0.625rem 0.75rem;
			color: var(--muted-foreground);
			font-size: var(--text-xs);
			line-height: var(--leading-relaxed);
		}
	}
</style>
