<script lang="ts">
	import type { FilterState } from './filterState.svelte';
	import { entityImage } from '$lib/utils/entityImages';
	import { MAX_QUERY_LENGTH } from '$lib/queries/keys';
	import SearchIcon from '@lucide/svelte/icons/search';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import * as Command from '$lib/components/ui/command';
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
	const prefix = $derived(mobile ? 'mobile' : 'desktop');
	const listId = $derived(`${prefix}-filter-options`);
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
	class="relative z-50 h-auto overflow-visible rounded-none bg-transparent"
>
	<form
		method="GET"
		action="/"
		onsubmit={submit}
		class="border-border bg-card focus-within:border-signal flex min-h-11 items-center rounded-md border"
	>
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
			class="placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent px-3 py-2.5 text-base outline-none"
		/>
		<button
			type="submit"
			aria-label="Search changelog"
			class="ui-focus-ring bg-primary text-primary-foreground flex size-11 shrink-0 items-center justify-center rounded-r-md hover:opacity-90"
			onkeydown={(event) => event.stopPropagation()}
		>
			<SearchIcon class="size-5" />
		</button>
	</form>

	{#if shown}
		<div
			class={mobile
				? 'mt-3 min-h-0 overflow-y-auto'
				: 'filter-dropdown bg-popover border-border absolute inset-x-0 top-full mt-2 max-h-[65vh] overflow-y-auto rounded-md border shadow-xl'}
		>
			{#if histories.length}
				<nav aria-label="Entity histories" class="border-subtle border-b p-3">
					<p class="text-muted-foreground mb-1 text-xs">Open full change history</p>
					<div class="flex flex-wrap gap-x-4 gap-y-1">
						{#each histories as entity (entity.key)}
							<a
								href="/{entity.type}/{entity.data.slug}"
								class="ui-focus-ring text-signal inline-flex min-h-11 items-center gap-1.5 text-sm underline-offset-4 hover:underline"
								onclick={onclose}
								onkeydown={(event) => event.stopPropagation()}
							>
								{entity.data.name}
								<ArrowRight class="size-3.5" />
							</a>
						{/each}
					</div>
				</nav>
			{/if}
			<Command.List
				id={listId}
				aria-label="Available hero and item filters"
				aria-multiselectable="true"
				class="max-h-80 overflow-y-auto p-2"
			>
				{#if options.length === 0}
					<Command.Empty class="text-muted-foreground px-3 py-5 text-sm"
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
			<p
				class="text-muted-foreground border-subtle border-t px-3 py-2.5 text-xs leading-relaxed"
			>
				Patches must match every selected hero, item, and keyword.
				{#if filterState.mergedList.length > 60}Type to narrow {filterState.mergedList
						.length} matches.{/if}
			</p>
		</div>
	{/if}
</Command.Root>
