<script lang="ts">
	import { page } from '$app/state';
	import { FilterInput } from '$lib/components/filter-bar';
	import Crosshair from '@lucide/svelte/icons/crosshair';

	const heroesActive = $derived(page.url.pathname.startsWith('/hero'));
	const itemsActive = $derived(page.url.pathname.startsWith('/item'));
</script>

<nav
	aria-label="Primary navigation"
	class="animate-entrance-down border-signal/15 bg-card/90 sticky z-50 border-b pb-4 backdrop-blur-xl transition-all duration-300 md:pb-5"
>
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between md:h-20">
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
						class="bg-signal absolute -right-0.5 -bottom-0.5 size-1.5 opacity-70 transition-all duration-300 group-hover:opacity-100"
					></div>
				</div>

				<!-- Logo text -->
				<div class="flex flex-col">
					<div class="flex items-baseline gap-2">
						<span
							class="font-display text-foreground heading-glow text-2xl font-medium tracking-wide transition-colors duration-300 md:text-3xl"
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

			<div class="flex items-center gap-1 sm:gap-2">
				<a
					href="/heroes"
					aria-current={heroesActive ? 'page' : undefined}
					class="rounded px-2.5 py-2 font-mono text-[10px] font-semibold tracking-wider uppercase transition-colors sm:px-3 sm:text-xs {heroesActive
						? 'bg-signal/10 text-signal'
						: 'text-muted-foreground hover:bg-signal/10 hover:text-signal'}"
				>
					Heroes
				</a>
				<a
					href="/items"
					aria-current={itemsActive ? 'page' : undefined}
					class="rounded px-2.5 py-2 font-mono text-[10px] font-semibold tracking-wider uppercase transition-colors sm:px-3 sm:text-xs {itemsActive
						? 'bg-signal/10 text-signal'
						: 'text-muted-foreground hover:bg-signal/10 hover:text-signal'}"
				>
					Items
				</a>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<label
				for="filter-input"
				class="text-signal/80 flex items-center gap-2 font-mono text-xs font-medium tracking-widest uppercase"
			>
				<span class="bg-signal/60 h-px w-3"></span>
				Search by hero, item, or keyword
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
