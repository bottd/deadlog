import { App, applyHostStyleVariables } from '@modelcontextprotocol/ext-apps';
import { isEvidenceUrl, type PatchSelector } from '@deadlog/contracts';

export interface HostCapabilities {
	tools: boolean;
	links: boolean;
}
export interface HostBridge {
	subscribe(listener: (result: unknown) => void): () => void;
	connect(): Promise<HostCapabilities>;
	callPatch(selector: PatchSelector): Promise<unknown>;
	openLink(url: string): Promise<void>;
	close(): Promise<void>;
}

export function createHostBridge(): HostBridge {
	const app = new App(
		{ name: 'Deadlog patch evidence', version: '0.1.0' },
		{},
		{ strict: true }
	);
	const listeners = new Set<(result: unknown) => void>();
	app.ontoolresult = (result) => {
		for (const listener of listeners) listener(result);
	};
	const applyTheme = () => {
		const context = app.getHostContext();
		if (context?.theme) document.documentElement.dataset.theme = context.theme;
		if (context?.styles?.variables) applyHostStyleVariables(context.styles.variables);
	};
	app.onhostcontextchanged = applyTheme;
	return {
		subscribe(listener) {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		},
		async connect() {
			if (window.parent === window)
				throw new Error('Open this resource in an MCP Apps host.');
			await app.connect(undefined, { timeout: 6000 });
			applyTheme();
			const capabilities = app.getHostCapabilities();
			return {
				tools: Boolean(capabilities?.serverTools),
				links: Boolean(capabilities?.openLinks)
			};
		},
		callPatch(selector) {
			return app.callServerTool(
				{ name: 'deadlog_get_patch', arguments: selector },
				{ timeout: 6000 }
			);
		},
		async openLink(url) {
			if (!isEvidenceUrl(url)) throw new Error('Unsupported evidence link');
			const result = await app.openLink({ url }, { timeout: 6000 });
			if (result.isError) throw new Error('The host could not open this link.');
		},
		async close() {
			listeners.clear();
			await app.close();
		}
	};
}
