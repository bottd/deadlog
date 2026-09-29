import { expect, it } from 'vitest';
import { getPatch, toolPayload } from '@deadlog/core';
import { exportFixture } from '../../../scripts/export-mcp-fixture';
import { createExplorer, type ExplorerState } from './explorer-state';
import type { HostBridge } from './bridge';

async function initial() {
	const fixture = await exportFixture();
	return toolPayload(
		await getPatch(
			{
				getDataset: async () => fixture.dataset,
				getPatch: async () => fixture.patches[0],
				getLatest: async () => fixture.patches[1]
			},
			{ latest: true }
		)
	);
}

it('subscribes before connect, preserves newer host results, and bounds refresh work', async () => {
	const first = await initial();
	let listener: (result: unknown) => void = () => undefined;
	let resolveRead: (result: unknown) => void = () => undefined;
	let calls = 0;
	const updates: ExplorerState[] = [];
	const bridge: HostBridge = {
		subscribe(next) {
			listener = next;
			return () => {
				listener = () => undefined;
			};
		},
		async connect() {
			listener(first);
			return { tools: true, links: false };
		},
		callPatch() {
			calls++;
			return new Promise((resolveReadResult) => {
				resolveRead = resolveReadResult;
			});
		},
		async openLink() {
			return undefined;
		},
		async close() {
			return undefined;
		}
	};
	const explorer = createExplorer(bridge, (state) => updates.push(state));
	await explorer.connect();
	expect(updates.at(-1)?.result?.patch.id).toBe('162572');
	expect(calls).toBe(0);
	const refresh = explorer.refresh();
	await explorer.refresh();
	expect(calls).toBe(1);
	const newer = structuredClone(first);
	if (newer.structuredContent.status !== 'success') throw new Error('Expected success');
	newer.structuredContent.patch.title = 'Newer committed result';
	listener(newer);
	resolveRead(first);
	await refresh;
	expect(updates.at(-1)?.result?.patch.title).toBe('Newer committed result');
	listener({ structuredContent: { invalid: true } });
	expect(updates.at(-1)?.result?.patch.title).toBe('Newer committed result');
	expect(updates.at(-1)?.error).toContain('invalid');
	await explorer.dispose();
});
