<script lang="ts">
	import type { Snippet } from 'svelte';
	import { GutterNode } from '../gutter-line';

	interface Props {
		children: Snippet;
		isBigUpdate?: boolean;
		entryIndex?: number;
	}

	let { children, isBigUpdate = false, entryIndex = 0 }: Props = $props();
</script>

<div
	class="animate-slide-in-fade relative"
	style="animation-delay: {entryIndex * 75}ms; animation-fill-mode: backwards;"
>
	<div class="absolute top-0 left-0 z-10 -ml-14 hidden md:block">
		<GutterNode bigUpdate={isBigUpdate} />
	</div>

	{@render children()}
</div>
