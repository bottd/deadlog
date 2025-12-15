<script lang="ts">
	import { FilterInput } from '$lib/components/filter-bar';
</script>

<nav
	class="border-border bg-card/80 sticky z-50 border-b pb-5 backdrop-blur-xl transition-all duration-300"
>
	<div class="container mx-auto">
		<div class="flex h-20 items-center">
			<a
				href="/"
				class="group flex items-baseline gap-3 transition-all duration-300 hover:gap-4"
			>
				<div
					class="bg-primary h-6 w-1 rounded-full transition-all duration-300 group-hover:h-8"
				></div>
				<span
					class="font-display text-primary group-hover:text-primary/90 text-2xl tracking-tight transition-colors duration-300"
					>deadlog.io</span
				>
				<span class="text-foreground text-sm font-normal transition-all duration-300">
					deadlock changelog viewer
				</span>
			</a>
		</div>
		<div class="flex flex-col gap-2">
			<label
				for="filter-input"
				class="text-muted-foreground text-xs font-medium tracking-wider uppercase"
			>
				Filter by hero, item, or keyword
			</label>
			<FilterInput />
		</div>
	</div>
</nav>

<style>
	nav {
		top: var(--safe-area-inset-top);
	}
</style>
