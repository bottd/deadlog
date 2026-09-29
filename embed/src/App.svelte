<script lang="ts">
	import { onMount } from 'svelte';
	import { createHostBridge, createExplorer, type ExplorerState } from '@deadlog/host';
	import PatchEvidence from './components/PatchEvidence.svelte';
	import './styles.css';

	let state = $state<ExplorerState>({
		result: null,
		error: null,
		busy: false,
		connected: false,
		capabilities: { tools: false, links: false }
	});
	let explorer: ReturnType<typeof createExplorer> | undefined;
	onMount(() => {
		explorer = createExplorer(createHostBridge(), (next) => {
			state = next;
		});
		void explorer.connect();
		return () => {
			void explorer?.dispose();
		};
	});
</script>

<main aria-busy={state.busy}>
	<header class="app-header">
		<span class="wordmark" aria-label="Deadlog"
			>dead<span>log</span><small>.io</small></span
		>
		<span class="preview-label">Patch preview</span>
	</header>
	{#if state.error}
		<p class="status error" role="alert">{state.error}</p>
	{/if}
	{#if state.result}
		<PatchEvidence
			result={state.result}
			linksAvailable={state.capabilities.links}
			onopen={(url) => {
				void explorer?.openLink(url);
			}}
		/>
		<div class="actions">
			<button
				onclick={() => {
					void explorer?.refresh();
				}}
				disabled={state.busy || !state.capabilities.tools}
			>
				{state.busy ? 'Refreshing…' : 'Refresh patch'}
			</button>
			<p role="status" class="subtle">
				{state.busy
					? 'Reading the committed patch selection.'
					: state.capabilities.tools
						? 'Refresh uses the same patch selection.'
						: 'Host-mediated refresh is unavailable.'}
			</p>
		</div>
	{:else}
		<h1>Patch evidence</h1>
		{#if !state.error}<p role="status">
				Waiting for a patch result from the conversation.
			</p>{/if}
	{/if}
	<footer>
		Independent community archive. Deadlock is a trademark of Valve Corporation. Entity
		data provided by Deadlock API.
	</footer>
</main>
