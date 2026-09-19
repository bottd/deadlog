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

<nav class="toc-panel clip-corner-sm" aria-label="Change history contents">
	<div bg="signal/50" m="b-4" h="px" w="8" aria-hidden="true"></div>

	<p text="muted-foreground" m="b-4" font="bold" class="kicker-xs tracking-[0.2em]">
		History
	</p>

	<div class="space-y-1">
		{#each years as [year, patches] (year)}
			<div class="toc-group">
				<a href="#year-{year}" class="toc-section font-mono" onclick={onnavigate}>
					<span class="toc-marker" aria-hidden="true"></span>
					{year}
					<span class="toc-count">{patches.length}</span>
				</a>
				<ul class="mt-0.5 list-none space-y-px">
					{#each patches as patch (patch.id)}
						<li>
							<a
								href="#history-{patch.id}"
								class="toc-entry toc-link"
								onclick={onnavigate}
							>
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
	.toc-entry {
		@apply gap-2 py-1 pl-3 text-xs;
	}

	.toc-entry-count {
		@apply toc-count shrink-0 text-muted-foreground/80;
	}
</style>
