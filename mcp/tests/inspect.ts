import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { startLocalWorker } from './local-worker';

const local = process.argv[2] ? null : await startLocalWorker();
const url = process.argv[2] ?? local?.url;
if (!url) throw new Error('Missing endpoint');
try {
	const run = promisify(execFile);
	for (const method of ['tools/list', 'resources/list']) {
		const result = await run(
			'pnpm',
			[
				'exec',
				'mcp-inspector-cli',
				'--cli',
				url,
				'--transport',
				'http',
				'--method',
				method
			],
			{ maxBuffer: 1024 * 1024, timeout: 15_000 }
		);
		console.log(result.stdout);
	}
} finally {
	await local?.stop();
}
