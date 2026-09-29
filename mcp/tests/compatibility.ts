import assert from 'node:assert/strict';
import { unstable_dev } from 'wrangler';

const worker = await unstable_dev('src/index.ts', {
	config: 'wrangler.toml',
	port: 0,
	experimental: { disableExperimentalWarning: true },
	logLevel: 'error'
});
try {
	const response = await worker.fetch('/mcp', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json, text/event-stream'
		},
		body: JSON.stringify({
			jsonrpc: '2.0',
			id: 1,
			method: 'initialize',
			params: {
				protocolVersion: '2025-11-25',
				capabilities: {},
				clientInfo: { name: 'compatibility-proof', version: '1' }
			}
		})
	});
	assert.equal(response.status, 200);
	assert.match(await response.text(), /deadlog-mcp-preview/);
	console.log('SDK 1.31.0 initialization passed inside workerd.');
} finally {
	await worker.stop();
}
