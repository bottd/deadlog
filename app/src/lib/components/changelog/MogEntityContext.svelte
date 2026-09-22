<script lang="ts">
	import EntityContext from '../entity/EntityContext.svelte';
	import { getEntityIcons, resolveEntity } from './entityContext';
	import { detailKey, getReadingContext } from './readingContext';
	let {
		kind,
		name,
		ability = null
	}: { kind: 'hero' | 'item'; name: string; ability?: string | null } = $props();
	const icons = getEntityIcons();
	const reading = getReadingContext();
	const entity = $derived(resolveEntity(icons, kind, name));
	const details = $derived(
		entity ? reading.details[detailKey(kind, entity.id, ability)] : undefined
	);
</script>

{#if details}
	<div class="mog-enrichment -mt-1 min-w-0">
		<EntityContext
			context={details.context}
			name={details.name}
			variant="group"
			historyHref={details.historyHref}
		/>
	</div>
{/if}
