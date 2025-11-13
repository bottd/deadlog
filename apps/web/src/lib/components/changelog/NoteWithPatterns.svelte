<script lang="ts">
	import type { Note } from '@deadlog/db';

	interface Props {
		note: Note;
	}

	let { note }: Props = $props();

	const segments = $derived.by(() => {
		if (note.patterns.length === 0) {
			return [{ text: note.text, isPattern: false }];
		}

		const result: { text: string; isPattern: boolean }[] = [];
		let lastIndex = 0;

		for (const pattern of note.patterns) {
			if (pattern.start > lastIndex) {
				result.push({
					text: note.text.substring(lastIndex, pattern.start),
					isPattern: false
				});
			}
			result.push({
				text: pattern.text,
				isPattern: true
			});
			lastIndex = pattern.end;
		}

		if (lastIndex < note.text.length) {
			result.push({
				text: note.text.substring(lastIndex),
				isPattern: false
			});
		}

		return result;
	});
</script>

{#each segments as segment, i (i)}
	{#if segment.isPattern}
		<span class="text-primary font-semibold">{segment.text}</span>
	{:else}
		{segment.text}
	{/if}
{/each}
