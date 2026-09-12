<script lang="ts">
	import { page } from '$app/state';
	import { FilterInput } from '$lib/components/filter-bar';
	import Crosshair from '@lucide/svelte/icons/crosshair';

	const heroesActive = $derived(page.url.pathname.startsWith('/hero'));
	const itemsActive = $derived(page.url.pathname.startsWith('/item'));
</script>

<header
	border="signal/15 b"
	bg="card/90"
	sticky
	z="50"
	p="b-3"
	class="animate-entrance-down backdrop-blur-xl"
>
	<div container m="x-auto" p="x-4">
		<nav aria-label="Primary navigation">
			<div flex="~" h="16" items="center" justify="between">
				<a
					flex="~"
					href="/"
					aria-label="deadlog.io - Home"
					items="center"
					gap="4"
					class="group transition-all duration-300"
				>
					<div relative>
						<div
							flex="~"
							bg="primary/10"
							items="center"
							justify="center"
							rounded="lg"
							class="group-hover:bg-primary/20 size-10 transition-all duration-300"
						>
							<Crosshair
								class="text-primary size-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45"
							/>
						</div>
						<div
							bg="primary"
							absolute
							op="60"
							class="-top-0.5 -left-0.5 size-1.5 transition-all duration-300 group-hover:opacity-100"
						></div>
						<div
							bg="signal"
							absolute
							op="70"
							class="-right-0.5 -bottom-0.5 size-1.5 transition-all duration-300 group-hover:opacity-100"
						></div>
					</div>

					<div flex="~ col">
						<div flex="~" items="baseline" gap="2">
							<span
								font="display medium"
								text="foreground 2xl"
								class="tracking-wide transition-colors duration-300 md:text-3xl"
							>
								dead<span text="primary">log</span>
							</span>
							<span
								bg="primary/10"
								text="primary"
								p="x-1.5 y-0.5"
								font="mono medium"
								uppercase
								class="hidden rounded text-[11px] tracking-wider md:inline-block"
							>
								.io
							</span>
						</div>
						<span
							text="muted-foreground xs"
							font="medium"
							class="hidden tracking-wide md:block"
						>
							Deadlock Changelog
						</span>
					</div>
				</a>

				<div flex="~" items="center" gap="1" class="sm:gap-2">
					<a
						href="/heroes"
						aria-current={heroesActive ? 'page' : undefined}
						class="ui-focus-ring inline-flex min-h-11 items-center rounded px-3 font-mono text-xs font-semibold tracking-wider uppercase transition-colors {heroesActive
							? 'bg-signal/10 text-signal'
							: 'text-muted-foreground hover:bg-signal/10 hover:text-signal'}"
					>
						Heroes
					</a>
					<a
						href="/items"
						aria-current={itemsActive ? 'page' : undefined}
						class="ui-focus-ring inline-flex min-h-11 items-center rounded px-3 font-mono text-xs font-semibold tracking-wider uppercase transition-colors {itemsActive
							? 'bg-signal/10 text-signal'
							: 'text-muted-foreground hover:bg-signal/10 hover:text-signal'}"
					>
						Items
					</a>
				</div>
			</div>
		</nav>
		<FilterInput />
	</div>
</header>

<style>
	header {
		top: var(--safe-area-inset-top);
	}
</style>
