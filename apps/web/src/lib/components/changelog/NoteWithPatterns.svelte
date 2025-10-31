<script lang="ts">
	import type { NoteWithPatterns } from '@deadlog/db';
	import { highlightText } from '$lib/utils/textHighlight';
	import { getSearchParams } from '$lib/utils/searchParams.svelte';

	interface Props {
		note: NoteWithPatterns;
	}

	let { note }: Props = $props();

	const params = getSearchParams();

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
		<span class="font-semibold text-[#c89b3c]">{segment.text}</span>
	{:else if params.q}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html highlightText(segment.text, params.q)}
	{:else}
		{segment.text}
	{/if}
{/each}
