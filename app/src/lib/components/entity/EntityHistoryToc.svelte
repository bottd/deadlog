<script lang="ts">
	import '../changelog/toc.css';
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
	<div class="toc-rule" aria-hidden="true"></div>

	<p class="toc-label kicker-xs">History</p>

	<div class="toc-tree">
		{#each years as [year, patches] (year)}
			<div class="toc-group">
				<a href="#year-{year}" class="toc-section toc-year" onclick={onnavigate}>
					<span class="toc-marker" aria-hidden="true"></span>
					{year}
					<span class="toc-count">{patches.length}</span>
				</a>
				<ul class="toc-entities">
					{#each patches as patch (patch.id)}
						<li>
							<a
								href="#history-{patch.id}"
								class="toc-entry toc-link"
								onclick={onnavigate}
							>
								<span class="toc-link-text">{patch.label}</span>
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
