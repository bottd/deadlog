import assert from 'node:assert/strict';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { MODEL_RESULT_BYTES, PatchResultSchema } from '@deadlog/contracts';
import { startLocalWorker } from './local-worker';

const local = process.argv[2] ? null : await startLocalWorker();
const endpoint = process.argv[2] ?? local?.url;
if (!endpoint) throw new Error('Missing MCP endpoint');
const request = (path: string, init?: RequestInit) =>
	fetch(new URL(path, endpoint), init);
const client = new Client({ name: 'deadlog-protocol-check', version: '1' });
try {
	assert.equal((await request('/health')).status, 200);
	await client.connect(new StreamableHTTPClientTransport(new URL(endpoint)));
	const tools = await client.listTools();
	assert.equal(tools.tools.length, 1);
	assert.equal(tools.tools[0].name, 'deadlog_get_patch');
	assert.ok(tools.tools[0].inputSchema.anyOf);
	const resources = await client.listResources();
	assert.ok(resources.resources.length >= 1 && resources.resources.length <= 3);
	assert.equal(resources.resources[0].mimeType, 'text/html;profile=mcp-app');
	const resource = await client.readResource({ uri: resources.resources[0].uri });
	assert.ok('text' in resource.contents[0]);
	assert.match(String(resource.contents[0].text), /THESIS:/);
	assert.doesNotMatch(
		String(resource.contents[0].text),
		/testHost|sourceMappingURL|@libsql/
	);
	for (const retained of resources.resources.slice(1)) {
		const archived = await client.readResource({ uri: retained.uri });
		assert.ok('text' in archived.contents[0]);
		assert.match(String(archived.contents[0].text), /THESIS:/);
	}
	for (const args of [{ patchId: '162572' }, { latest: true }]) {
		const raw = await client.callTool({ name: 'deadlog_get_patch', arguments: args });
		const result = PatchResultSchema.parse(raw.structuredContent);
		assert.equal(result.status, 'success', JSON.stringify(result));
		if (result.status !== 'success') throw new Error('Expected a real patch');
		assert.equal(result.patch.id, '162572');
		assert.equal(result.dataset.coverage, 'fixture-only');
		assert.match(JSON.stringify(raw.content), /1844115010490072/);
		assert.ok(
			new TextEncoder().encode(JSON.stringify(raw)).byteLength <= MODEL_RESULT_BYTES
		);
	}
	const missing = await client.callTool({
		name: 'deadlog_get_patch',
		arguments: { patchId: 'unknown' }
	});
	assert.equal(missing.isError, true);
	assert.equal(PatchResultSchema.parse(missing.structuredContent).status, 'error');
	for (const args of [
		{ latest: true, patchId: '162572' },
		{ latest: true, sql: 'select *' },
		{}
	]) {
		assert.equal(
			(await client.callTool({ name: 'deadlog_get_patch', arguments: args })).isError,
			true
		);
	}
	assert.equal((await request('/mcp', { method: 'GET' })).status, 405);
	assert.equal(
		(
			await request('/mcp', {
				method: 'POST',
				headers: { Origin: 'https://evil.test' }
			})
		).status,
		403
	);
	assert.equal(
		(
			await request('/mcp', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json, text/event-stream'
				},
				body: 'x'.repeat(128 * 1024 + 1)
			})
		).status,
		413
	);
	const streamedRequest = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json, text/event-stream'
		},
		body: new ReadableStream<Uint8Array>({
			start(controller) {
				controller.enqueue(new TextEncoder().encode('x'.repeat(128 * 1024 + 1)));
				controller.close();
			}
		}),
		duplex: 'half'
	};
	assert.equal((await fetch(endpoint, streamedRequest)).status, 413);
	console.log(
		`Protocol checks passed at ${endpoint}: initialization, schemas, selectors, evidence, errors, origin and body bounds.`
	);
} finally {
	await client.close();
	await local?.stop();
}
