import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { repositoryRoot } from './export-mcp-fixture';
import { retainResources, resourceIdentity } from './mcp-resources';

const html = await readFile(resolve(repositoryRoot, 'embed/dist/index.html'), 'utf8');
if (
	/<script[^>]+src=|<link[^>]+rel="stylesheet"|sourceMappingURL|localhost:|testHost|@libsql|process\.env/.test(
		html
	)
)
	throw new Error('UI resource contains an external dependency or server/test-only code');
if (!html.includes('THESIS:'))
	throw new Error('UI direction contract was lost during compilation');
const resourceUri = resourceIdentity(html);
let previous: unknown = [];
try {
	previous = JSON.parse(
		await readFile(resolve(repositoryRoot, 'mcp/.generated/resources.json'), 'utf8')
	);
} catch (error) {
	if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT'))
		throw error;
}
const resources = retainResources({ uri: resourceUri, html }, previous);
await mkdir(resolve(repositoryRoot, 'mcp/.generated'), { recursive: true });
await writeFile(
	resolve(repositoryRoot, 'mcp/.generated/resource.ts'),
	`export const resourceUri = ${JSON.stringify(resourceUri)};\nexport const resources = ${JSON.stringify(resources)};\n`
);
await writeFile(
	resolve(repositoryRoot, 'mcp/.generated/resources.json'),
	JSON.stringify(resources)
);
console.log(
	`Built self-contained resource ${resourceUri} (${Buffer.byteLength(html)} bytes)`
);
