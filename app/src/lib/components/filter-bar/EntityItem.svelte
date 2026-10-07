<script lang="ts">
	import * as Command from '#lib/components/ui/command/index.ts';
	import { ENTITY_KINDS, type EntityKind } from '#lib/entityKinds.ts';

	interface Props {
		id: string;
		value: string;
		name: string;
		imageSrc?: string;
		isSelected: boolean;
		kind: EntityKind;
		onSelect: () => void;
	}

	let { id, value, name, imageSrc, isSelected, kind, onSelect }: Props = $props();

	const entityKind = $derived(ENTITY_KINDS[kind]);
</script>

<Command.Item {id} {value} {onSelect} class="entity-option">
	{#snippet child({ props })}
		<div
			{...props}
			data-entity-kind={kind}
			aria-selected={isSelected}
			aria-label="{name}, {entityKind.label}, {isSelected ? 'selected' : 'not selected'}"
		>
			{#if imageSrc}
				<img
					src={imageSrc}
					alt=""
					width="32"
					height="32"
					loading="lazy"
					decoding="async"
					class="option-image"
				/>
			{:else}
				<div class="option-placeholder" aria-hidden="true"></div>
			{/if}
			<span class="option-text">
				<span class="option-name">
					{name}
				</span>
				<span class="option-kind metadata">
					{entityKind.label}
				</span>
			</span>
			{#if isSelected}
				<span class="selected-label">Selected</span>
				<span class="selected-dot" aria-hidden="true"></span>
			{/if}
		</div>
	{/snippet}
</Command.Item>

<style>
	@layer components.features {
		:global(.entity-option) {
			gap: 0.75rem;
			padding: 0.5rem 0.75rem;
			cursor: pointer;
			transition: background-color var(--duration-normal);
			color: var(--foreground);
		}
		:global(.entity-option[aria-selected='true']) {
			background: color-mix(in srgb, var(--entity-accent) 10%, transparent);
		}
		:global(.entity-option:is(:hover, [data-selected])) {
			background: var(--secondary);
		}
		.option-image,
		.option-placeholder {
			inline-size: 2rem;
			block-size: 2rem;
			flex-shrink: 0;
			border-radius: 0.25rem;
		}
		.option-image {
			border: 1px solid var(--border);
			background: var(--card);
			object-fit: cover;
		}
		.option-placeholder {
			background: var(--secondary);
		}
		.option-text {
			min-inline-size: 0;
			flex: 1;
		}
		.option-name {
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		:global(.entity-option[aria-selected='true']) .option-name {
			color: var(--entity-accent);
			font-weight: 500;
		}
		.option-kind {
			display: block;
			text-transform: uppercase;
			letter-spacing: 0.025em;
		}
		.selected-label {
			color: var(--entity-accent);
			font-family: var(--font-mono);
			font-size: var(--text-xs);
			line-height: var(--leading-xs);
			letter-spacing: 0.025em;
		}
		.selected-dot {
			inline-size: 0.5rem;
			block-size: 0.5rem;
			border-radius: 50%;
			background: var(--entity-accent);
		}
	}
</style>
