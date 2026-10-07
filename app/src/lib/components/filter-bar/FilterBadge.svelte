<script lang="ts">
	import XIcon from '@lucide/svelte/icons/x';
	import Badge from '#lib/components/ui/badge/badge.svelte';
	import { ENTITY_KINDS, type EntityKind } from '#lib/entityKinds.ts';

	interface Props {
		name: string;
		icon?: string;
		onRemove: () => void;
		kind?: EntityKind;
	}

	let { name, icon, onRemove, kind = 'hero' }: Props = $props();
	const entityKind = $derived(ENTITY_KINDS[kind]);
</script>

<button
	type="button"
	onclick={onRemove}
	class="filter-badge ui-focus-ring"
	aria-label="Remove {entityKind.label} filter: {name}"
>
	<Badge variant={kind === 'hero' ? 'default' : 'signal'}>
		{#if icon}
			<img
				src={icon}
				alt=""
				width="18"
				height="18"
				loading="lazy"
				decoding="async"
				class="filter-image"
			/>
		{/if}
		<span class="kind-label">{entityKind.label}</span>
		<span aria-hidden="true" class="separator">/</span>
		<span class="entity-name">{name}</span>
		<XIcon class="icon-xs" />
	</Badge>
</button>

<style>
	@layer components.features {
		.filter-badge {
			min-block-size: 2.75rem;
			flex-shrink: 0;
			border-radius: var(--radius-md);
		}
		.filter-image {
			inline-size: 18px;
			block-size: 18px;
			border-radius: 0.25rem;
			object-fit: cover;
			transition: scale var(--duration-normal);
		}
		.filter-badge:hover .filter-image {
			scale: 1.1;
		}
		.kind-label {
			font-family: var(--font-mono);
			font-size: 0.6875rem;
			text-transform: uppercase;
			letter-spacing: 0.025em;
		}
		.separator {
			opacity: 0.5;
		}
		.entity-name {
			font-size: var(--text-xs);
			font-weight: 500;
			letter-spacing: -0.025em;
		}
	}
</style>
