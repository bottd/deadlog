<script module lang="ts">
	// One query drives every summary and bullet on screen, so compile the pattern once.
	let cached: { query: string; pattern: RegExp } | null = null;

	function splitOnQuery(text: string, query: string): string[] {
		if (!query) return [text];
		if (cached?.query !== query) {
			const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			cached = { query, pattern: new RegExp(`(${escaped})`, 'gi') };
		}
		return text.split(cached.pattern);
	}
</script>

<script lang="ts">
	let { text, query = '' }: { text: string; query?: string } = $props();
	const parts = $derived(splitOnQuery(text, query));
</script>

{#each parts as part, index (index)}
	{#if query && index % 2 === 1}
		<mark class="bg-primary/15 text-primary rounded-sm px-0.5">{part}</mark>
	{:else}{part}{/if}
{/each}
