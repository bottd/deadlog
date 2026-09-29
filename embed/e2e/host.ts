import {
	AppBridge,
	PostMessageTransport
} from '@modelcontextprotocol/ext-apps/app-bridge';
import { CallToolResultSchema } from '@modelcontextprotocol/sdk/types.js';

const scenario = new URLSearchParams(location.search).get('scenario') ?? 'success';
const iframe = document.querySelector('iframe');
if (!iframe?.contentWindow) throw new Error('Missing test iframe');
const bridge = new AppBridge(
	null,
	{ name: 'Deadlog test host', version: '1' },
	scenario === 'missing-tools' ? {} : { serverTools: {}, openLinks: {} },
	{
		hostContext: {
			theme:
				new URLSearchParams(location.search).get('theme') === 'dark' ? 'dark' : 'light'
		}
	}
);
let reads = 0;
bridge.oncalltool = async (params) => {
	document.body.dataset.uiReads = String(++reads);
	const argumentsValue = params.arguments;
	const patch =
		argumentsValue && typeof argumentsValue.patchId === 'string'
			? `&patch=${encodeURIComponent(argumentsValue.patchId)}`
			: '';
	const response = await fetch(`/tool?scenario=${scenario}${patch}`);
	if (!response.ok) throw new Error('Synthetic test host failure');
	return CallToolResultSchema.parse(await response.json());
};
bridge.onopenlink = async () => ({});
bridge.oninitialized = async () => {
	await bridge.sendToolInput({ arguments: { latest: true } });
	const response = await fetch(`/result?scenario=${scenario}`);
	await bridge.sendToolResult(CallToolResultSchema.parse(await response.json()));
	document.body.dataset.ready = 'true';
};
document.body.dataset.uiReads = '0';
await bridge.connect(
	new PostMessageTransport(iframe.contentWindow, iframe.contentWindow)
);
iframe.src = '/resource';
