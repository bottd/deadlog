import { PatchResultSchema, type PatchSuccess } from '@deadlog/contracts';
import type { HostBridge, HostCapabilities } from './bridge';

export interface ExplorerState {
	result: PatchSuccess | null;
	error: string | null;
	busy: boolean;
	connected: boolean;
	capabilities: HostCapabilities;
}

export function createExplorer(
	bridge: HostBridge,
	update: (state: ExplorerState) => void
) {
	let state: ExplorerState = {
		result: null,
		error: null,
		busy: false,
		connected: false,
		capabilities: { tools: false, links: false }
	};
	let generation = 0;
	let disposed = false;
	const emit = () => {
		if (!disposed) update({ ...state });
	};
	function receive(raw: unknown) {
		generation++;
		const payload =
			raw && typeof raw === 'object' && 'structuredContent' in raw
				? raw.structuredContent
				: undefined;
		const parsed = PatchResultSchema.safeParse(payload);
		state = { ...state, busy: false, error: null };
		if (!parsed.success)
			state.error =
				'The host delivered an invalid patch result. Ask for the patch again.';
		else if (parsed.data.status === 'error') state.error = parsed.data.error.message;
		else state.result = parsed.data;
		emit();
	}
	const unsubscribe = bridge.subscribe(receive);
	emit();
	return {
		async connect() {
			try {
				const capabilities = await bridge.connect();
				state = { ...state, capabilities, connected: true };
			} catch {
				state = {
					...state,
					error:
						'Host connection unavailable. Patch evidence already received remains readable; ask for another result in the conversation.'
				};
			}
			emit();
		},
		async refresh() {
			if (disposed || state.busy || !state.result || !state.capabilities.tools) return;
			const request = ++generation;
			const selector = state.result.selector;
			state = { ...state, busy: true, error: null };
			emit();
			try {
				const result = await bridge.callPatch(selector);
				if (!disposed && request === generation) receive(result);
			} catch {
				if (!disposed && request === generation) {
					state = {
						...state,
						busy: false,
						error:
							'Refresh failed. Existing evidence is preserved. Select Refresh to retry.'
					};
					emit();
				}
			}
		},
		async openLink(url: string) {
			try {
				await bridge.openLink(url);
			} catch {
				state = {
					...state,
					error:
						'The host could not open this link. Use the source link in the conversation.'
				};
				emit();
			}
		},
		async dispose() {
			disposed = true;
			generation++;
			unsubscribe();
			await bridge.close();
		}
	};
}
