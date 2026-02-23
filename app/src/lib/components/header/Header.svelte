<script lang="ts">
	import { FilterInput } from '$lib/components/filter-bar';
	import Crosshair from '@lucide/svelte/icons/crosshair';
</script>

<nav
	class="border-border bg-card/90 sticky z-50 border-b pb-5 backdrop-blur-xl transition-all duration-300"
>
	<div class="container mx-auto px-4">
		<div class="flex h-20 items-center justify-between">
			<a
				href="/"
				aria-label="deadlog.io - Home"
				class="group flex items-center gap-4 transition-all duration-300"
			>
				<!-- Logo mark -->
				<div class="relative">
					<div
						class="bg-primary/10 group-hover:bg-primary/20 flex size-10 items-center justify-center rounded-lg transition-all duration-300"
					>
						<Crosshair
							class="text-primary size-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45"
						/>
					</div>
					<!-- Corner accents -->
					<div
						class="bg-primary absolute -top-0.5 -left-0.5 size-1.5 opacity-60 transition-all duration-300 group-hover:opacity-100"
					></div>
					<div
						class="bg-primary absolute -right-0.5 -bottom-0.5 size-1.5 opacity-60 transition-all duration-300 group-hover:opacity-100"
					></div>
				</div>

				<!-- Logo text -->
				<div class="flex flex-col">
					<div class="flex items-baseline gap-2">
						<span
							class="font-display text-foreground heading-glow text-xl tracking-tight transition-colors duration-300 md:text-2xl"
						>
							dead<span class="text-primary">log</span>
						</span>
						<span
							class="bg-primary/10 text-primary hidden rounded px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wider uppercase md:inline-block"
						>
							.io
						</span>
					</div>
					<span
						class="text-muted-foreground hidden text-xs font-medium tracking-wide md:block"
					>
						Deadlock Changelog
					</span>
				</div>
			</a>
		</div>
		<div class="flex flex-col gap-2">
			<label
				for="filter-input"
				class="text-muted-foreground flex items-center gap-2 font-mono text-xs font-medium tracking-widest uppercase"
			>
				<span class="bg-primary/40 h-px w-3"></span>
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
