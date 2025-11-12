<script lang="ts">
	import type { Snippet } from 'svelte';
	import ChangeNode from './ChangeNode.svelte';

	interface Props {
		children: Snippet;
		isBigUpdate?: boolean;
	}

	let { children, isBigUpdate = false }: Props = $props();
</script>

<div class="relative">
	<div class="absolute top-0 left-0 z-10 -ml-14 hidden md:block">
		<ChangeNode bigUpdate={isBigUpdate} />
	</div>

	{@render children()}
</div>
