<script lang="ts">
	import type { Snippet } from 'svelte';
	import { GutterNode } from '../gutter-line';

	interface Props {
		children: Snippet;
		isBigUpdate?: boolean;
	}

	let { children, isBigUpdate = false }: Props = $props();
</script>

<div class="relative">
	<div class="absolute top-0 left-0 z-10 -ml-14 hidden md:block">
		<GutterNode bigUpdate={isBigUpdate} />
	</div>

	{@render children()}
</div>
