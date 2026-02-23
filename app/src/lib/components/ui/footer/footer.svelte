<script lang="ts">
	import Crosshair from '@lucide/svelte/icons/crosshair';
</script>

<footer class="mt-24 pb-8">
	<div class="editorial-divider mb-10"></div>

	<div class="container mx-auto flex flex-col items-center gap-6 px-4">
		<!-- Brand mark -->
		<a href="/" class="group flex items-center gap-3 transition-opacity hover:opacity-80">
			<div
				class="bg-primary/10 group-hover:bg-primary/15 flex size-7 items-center justify-center rounded-md transition-colors"
			>
				<Crosshair class="text-primary size-3.5" />
			</div>
			<span
				class="font-display text-muted-foreground text-sm font-semibold tracking-wide transition-colors"
			>
				dead<span class="text-primary">log</span><span class="font-mono text-[10px]"
					>.io</span
				>
			</span>
		</a>

		<!-- Attribution -->
		<div class="flex flex-col items-center gap-1.5 text-center">
			<p class="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
				Data provided by <a
					href="https://deadlock-api.com"
					class="text-primary transition-colors hover:opacity-80"
					target="_blank"
					rel="noopener noreferrer">Deadlock API</a
				>
			</p>
			<p class="text-muted-foreground/50 font-mono text-[10px] tracking-wider uppercase">
				Deadlock is a trademark of Valve Corporation
			</p>
		</div>

		<!-- Terminal closer -->
		<div class="flex items-center gap-4">
			<div class="bg-primary/15 h-px w-10"></div>
			<span
				class="terminal-flicker text-muted-foreground/40 font-mono text-[9px] tracking-[0.25em] uppercase"
			>
				// end transmission
			</span>
			<div class="bg-primary/15 h-px w-10"></div>
		</div>
	</div>
</footer>
