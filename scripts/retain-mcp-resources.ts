import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { repositoryRoot } from './export-mcp-fixture';
import { ResourceArchiveSchema } from './mcp-resources';

const endpoint = 'https://deadlog-mcp-staging.me-963.workers.dev/mcp';
const client = new Client({ name: 'Deadlog staging resource retention', version: '1' });
try {
	await client.connect(new StreamableHTTPClientTransport(new URL(endpoint)));
	const list = await client.listResources();
	const resources = await Promise.all(
		list.resources.slice(0, 3).map(async ({ uri }) => {
			const result = await client.readResource({ uri });
			const content = result.contents[0];
			if (!content || !('text' in content))
				throw new Error('Missing retained HTML resource');
			return { uri, html: content.text };
		})
	);
	const archive = ResourceArchiveSchema.parse(resources);
	await mkdir(resolve(repositoryRoot, 'mcp/.generated'), { recursive: true });
	await writeFile(
		resolve(repositoryRoot, 'mcp/.generated/resources.json'),
		JSON.stringify(archive)
	);
	console.log(`Retained ${archive.length} compatible staging UI resources`);
} finally {
	await client.close();
}
