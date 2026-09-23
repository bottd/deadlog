<script lang="ts">
	import type { Snippet } from 'svelte';
	import ShareList from './ShareList.svelte';
	import {
		SHARE_KINDS,
		shareSpan,
		type ShareKind,
		type ShareRow,
		type ShareWindows
	} from './shareRows';

	let {
		kind,
		subject,
		rows,
		windows,
		level = 5,
		children
	}: {
		kind: ShareKind;
		subject: string;
		rows: ShareRow[];
		windows: ShareWindows;
		level?: 4 | 5;
		children?: Snippet;
	} = $props();

	const id = $props.id();
	const config = $derived(SHARE_KINDS[kind]);
	const span = $derived(
		shareSpan(
			windows,
			rows.some((row) => row.after !== null)
		)
	);
</script>

<div class="min-w-0" data-share-block={kind}>
	<svelte:element
		this={`h${level}`}
		id="{id}-heading"
		class="text-foreground text-sm font-semibold">{config.title}</svelte:element
	>
	<p class="text-muted-foreground mt-0.5 text-xs leading-relaxed">
		{`${config.lead(subject)}, ${span}.`}
	</p>
	<ShareList {rows} labelledby="{id}-heading" round={config.round} />
	{@render children?.()}
</div>
