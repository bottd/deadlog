<script lang="ts">
	import { FilterInput } from '$lib/components/filter-bar';
</script>

<nav class="border-border bg-card sticky z-50 border-b pb-4">
	<div class="container mx-auto">
		<div class="flex h-16 items-center">
			<a
				href="/"
				class="text-primary flex items-baseline gap-2 text-xl transition-colors hover:opacity-80"
			>
				<span class="font-display">deadlog.io</span>
				<span class="text-muted-foreground text-sm font-normal">
					deadlock changelog viewer
				</span>
			</a>
		</div>
		<FilterInput />
	</div>
</nav>

<style>
	nav {
		top: var(--safe-area-inset-top);
	}
</style>
