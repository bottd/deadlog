<script lang="ts">
	import type { PatchSuccess } from '@deadlog/contracts';
	let {
		result,
		linksAvailable,
		onopen
	}: { result: PatchSuccess; linksAvailable: boolean; onopen: (url: string) => void } =
		$props();
	const date = $derived(
		new Intl.DateTimeFormat('en', {
			dateStyle: 'long',
			timeStyle: 'short',
			timeZone: 'UTC'
		}).format(new Date(result.patch.publishedAt))
	);
</script>

<article>
	<h1>{result.patch.title}</h1>
	<p class="published">
		Published <time datetime={result.patch.publishedAt}>{date} UTC</time>
	</p>
	<p class="coverage">
		{result.dataset.patchIds.length}-patch developer preview. This result does not cover
		the complete archive.
	</p>
	{#each result.sections as section, index (index)}
		<section aria-label={section.title}>
			<h2>{section.title}</h2>
			{#if section.text.length > 600}
				<p>{section.text.slice(0, 600)}… <span class="subtle">(excerpt)</span></p>
				<details>
					<summary>Read full archived text</summary>
					<p class="evidence-text">{section.text}</p>
				</details>
			{:else}
				<p class="evidence-text">{section.text}</p>
			{/if}
		</section>
	{/each}
	{#if result.omittedSections}<p class="status">
			Partial result: {result.omittedSections} evidence sections omitted. Open the full patch
			below.
		</p>{/if}
	<nav aria-label="Patch sources" class="source-links">
		<a
			href={result.patch.sourceUrl}
			target="_blank"
			rel="noopener noreferrer"
			onclick={(event) => {
				if (linksAvailable) {
					event.preventDefault();
					onopen(result.patch.sourceUrl);
				}
			}}>Original source</a
		>
		<a
			href={result.patch.canonicalUrl}
			target="_blank"
			rel="noopener noreferrer"
			onclick={(event) => {
				if (linksAvailable) {
					event.preventDefault();
					onopen(result.patch.canonicalUrl);
				}
			}}>Open in Deadlog</a
		>
	</nav>
	{#if !linksAvailable}<p class="subtle">
			Host link-opening is unavailable; these are ordinary source links.
		</p>{/if}
	<details class="data-context">
		<summary>Coverage, freshness, and revision</summary>
		<dl>
			<dt>Effective time</dt>
			<dd>Unknown</dd>
			<dt>Source freshness</dt>
			<dd>Unknown</dd>
			<dt>Dataset published</dt>
			<dd>{result.dataset.publishedAt}</dd>
			<dt>Retrieved</dt>
			<dd>{result.retrievedAt}</dd>
			<dt>Archive SHA-256</dt>
			<dd class="hash">{result.patch.revision.hash}</dd>
			<dt>Dataset revision</dt>
			<dd class="hash">{result.dataset.revision}</dd>
		</dl>
		<ul>
			{#each result.limitations as limitation (limitation)}<li>{limitation}</li>{/each}
		</ul>
	</details>
</article>
