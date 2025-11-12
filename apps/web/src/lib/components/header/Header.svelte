<script lang="ts">
	import { FilterInput } from '$lib/components/filter-bar';
</script>

<nav class="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#121212]">
	<div class="container mx-auto flex h-16 items-center px-4">
		<a
			href="/"
			class="flex items-baseline gap-2 text-xl font-bold text-[#c89b3c] transition-colors hover:text-[#d4a84e]"
		>
			<span>deadlog.io</span>
			<span class="text-sm font-normal text-gray-400">deadlock changelog viewer</span>
		</a>
	</div>

	<FilterInput />
</nav>
