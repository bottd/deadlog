<script lang="ts">
	import type { PreviousChange } from './previousChanges';
	let { previous }: { previous: PreviousChange } = $props();
</script>

<a
	href={previous.href}
	aria-label={previous.label}
	data-previous-change
	class="ui-focus-ring text-muted-foreground hover:text-signal focus-visible:text-signal ml-1 rounded-sm font-mono text-xs whitespace-nowrap"
	>{previous.text}</a
>
