<script lang="ts">
	interface TocPatch {
		id: string;
		label: string;
		changeCount: number | null;
	}

	let {
		years,
		onnavigate
	}: {
		years: [string, TocPatch[]][];
		onnavigate?: () => void;
	} = $props();
</script>

<nav
	class="toc clip-corner-sm border-border/60 bg-card/80 border p-3 shadow-sm backdrop-blur-sm"
	aria-label="Change history contents"
>
	<div bg="signal/50" m="b-4" h="px" w="8" aria-hidden="true"></div>

	<p
		text="muted-foreground"
		m="b-4"
		font="mono bold"
		uppercase
		class="text-[11px] tracking-[0.2em]"
	>
		History
	</p>

	<div class="space-y-1">
		{#each years as [year, patches] (year)}
			<div class="toc-group">
				<a href="#year-{year}" class="toc-section" onclick={onnavigate}>
					<span class="toc-marker" aria-hidden="true"></span>
					{year}
					<span class="toc-count">{patches.length}</span>
				</a>
				<ul class="mt-0.5 list-none space-y-px">
					{#each patches as patch (patch.id)}
						<li>
							<a href="#history-{patch.id}" class="toc-entry" onclick={onnavigate}>
								<span truncate>{patch.label}</span>
								{#if patch.changeCount !== null}
									<span class="toc-entry-count">{patch.changeCount}</span>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</nav>

<style lang="postcss">
	.toc-group {
		@apply pt-2;
	}

	.toc-section {
		@apply text-foreground/80 hover:text-signal relative flex items-center gap-2 py-1 pl-3 font-mono text-xs font-semibold tracking-tight transition-colors;
	}

	.toc-count {
		@apply text-signal ml-auto font-mono text-[11px];
	}

	.toc-marker {
		@apply bg-signal/0 absolute top-1/2 left-[-0.5px] h-3 w-px -translate-y-1/2 transition-all duration-200;
	}

	.toc-section:hover .toc-marker {
		@apply bg-signal h-4;
	}

	.toc-entry {
		@apply text-muted-foreground hover:bg-muted/50 hover:text-foreground flex items-center gap-2 rounded-sm py-1 pl-3 text-xs transition-colors;
	}

	.toc-entry-count {
		@apply text-muted-foreground/80 ml-auto shrink-0 font-mono text-[11px];
	}
</style>
