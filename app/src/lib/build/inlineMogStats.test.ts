import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { compile, parse, preprocess } from 'svelte/compiler';
import { mogPlugin } from 'vite-plugin-mog';
import { writeImpactBlock, writeStatsNode } from '@deadlog/changelog';
import type { EntityImpact, ImpactWindow, PatchStats } from '@deadlog/utils';
import config from '../../../svelte.config.js';
import { inlineMogStatsPlugin } from '../../../inlineMogStatsPlugin.js';
import { inlineMogStats, serializeMogValue } from './inlineMogStats';

const side: ImpactWindow = { win: 0.5, pick: 0.1, matches: 2000, days: 2 };
const legacy: EntityImpact = {
	closed: true,
	all: { before: side, after: side },
	high: { before: side, after: side }
};
const covered = { ...side, total: 20_000, covered: 2, coverage: 'complete' as const };
const modern: EntityImpact = {
	closed: false,
	all: { before: covered, after: covered },
	high: { before: covered, after: covered }
};
const stats: PatchStats = {
	schemaVersion: 2,
	methodVersion: 2,
	collectedAt: '2026-09-21T00:00:00.000Z',
	before: { from: '2026-09-14', to: '2026-09-16' },
	after: { from: '2026-09-17', to: '2026-09-19' },
	siblings: ['123']
};
const root = [
	'``attr:',
	'published "2026-09-16T12:00:00Z"',
	...writeStatsNode(stats),
	'``'
].join('\n');
const entity = (
	kind: 'hero' | 'item',
	name: string,
	impact?: EntityImpact,
	body = '- A change'
) =>
	[
		`=${kind}:${name === 'The Doorman' ? 'doorman' : name.toLowerCase()}:`,
		...(impact ? writeImpactBlock(impact) : []),
		`## ${name}`,
		body,
		'='
	].join('\n');
const dirs: string[] = [];

afterEach(async () => {
	await Promise.all(
		dirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true }))
	);
});

/** Exercise the real plugin's disk loader, rather than imitating its Svelte output. */
async function loadDocument(source: string) {
	const dir = await mkdtemp(join(tmpdir(), 'deadlog-inline-stats-'));
	dirs.push(dir);
	const file = join(dir, 'patch.mg');
	await writeFile(file, source);
	const plugin = mogPlugin({ mode: 'svelte', include: [`${dir}/**/*.mg`] });
	const load = plugin.load;
	if (typeof load !== 'function') throw new Error('Expected Mog load hook');
	const context = {
		warn: vi.fn(),
		addWatchFile: vi.fn(),
		error: (error: unknown) => {
			throw new Error(String(error));
		}
	} as unknown as ThisParameterType<typeof load>;
	const loaded = await load.call(context, file);
	if (typeof loaded !== 'string') throw new Error('Expected generated Svelte source');
	return { code: loaded, file, dir };
}

describe('inline Mog stats', () => {
	it('places current details after ability/item notes and previous links inside their original bullets', async () => {
		const source = [
			entity(
				'hero',
				'The Doorman',
				undefined,
				[
					'- Hero note',
					'==ability:call-bell:',
					'### Call Bell',
					'- Call Bell Cooldown reduced from 40s to 30s',
					'=='
				].join('\n')
			),
			entity('item', 'Item', undefined, '- Cooldown reduced from 60s to 50s')
		].join('\n');
		const { code, file } = await loadDocument(source);
		const result = await inlineMogStats(source, code);
		const ast = parse(result, { modern: true });
		const positions: { component: string; parent: string }[] = [];
		function walk(nodes: typeof ast.fragment.nodes, parent = 'root') {
			for (const node of nodes) {
				if (node.type === 'Component') positions.push({ component: node.name, parent });
				if (node.type === 'RegularElement') walk(node.fragment.nodes, node.name);
			}
		}
		walk(ast.fragment.nodes);
		expect(positions).toEqual([
			{ component: 'DeadlogPreviousChange', parent: 'li' },
			{ component: 'DeadlogReadingDetails', parent: 'div' },
			{ component: 'DeadlogPreviousChange', parent: 'li' },
			{ component: 'DeadlogReadingDetails', parent: 'div' }
		]);
		expect(result).toContain('groupIndex={1} bulletIndex={0}');
		expect(result).toContain('groupIndex={0} bulletIndex={0}');
		expect(result).toContain('{@html "Call Bell Cooldown reduced from 40s to 30s"}');
		expect(result).toContain('{@html "Cooldown reduced from 60s to 50s"}');
		expect(result).toContain('"kind":"item","name":"Item","id":"item"');
		expect(compile(result, { filename: file, generate: 'server' }).warnings).toEqual([]);
	});

	it('renders inside each owning entity, after nested abilities, retaining original embeds and exports', async () => {
		const preview = '``embed:svelte:\n<SectionPreview kind="hero" />\n``';
		const body = [
			'[[!:https://example.com/hero.png]]((Portrait))',
			'- Unicode café → damage',
			'==ability:bell:',
			'[[!:https://example.com/ability.png]]((Bell))',
			'### [[/ability/call-bell]]((Call Bell))',
			'- Cooldown reduced',
			'``embed:svelte:',
			'<VideoLink href="https://example.com/video" />',
			'``',
			'=='
		].join('\n');
		const source = [
			root,
			'# Heroes',
			preview,
			entity('hero', 'The Doorman', modern, body),
			'# Items',
			entity('item', 'Test', modern),
			preview
		].join('\n\n');
		const { code, file } = await loadDocument(source);
		const result = await inlineMogStats(source, code);
		const ast = parse(result, { modern: true });
		const entities = ast.fragment.nodes.filter((node) => node.type === 'RegularElement');
		expect(entities).toHaveLength(2);
		for (const node of entities) {
			const meaningful = node.fragment.nodes.filter((child) => child.type !== 'Text');
			expect(meaningful.at(-1)).toMatchObject({
				type: 'Component',
				name: 'DeadlogInlineImpact'
			});
		}
		expect(result).toContain('export const metadata =');
		expect(result).toContain('export const toc =');
		expect(result).toContain('export const matchResults =');
		expect(result).toContain('"kinds":["hero","item"]');
		expect(result).toContain('"methodVersion":2');
		for (const index of [0, 1, 2]) {
			expect(result).toContain(`import Embed${index} from`);
			expect(result).toContain(`<Embed${index} />`);
		}
		expect(result).not.toContain('<Embed3');
		expect(result).not.toContain('data-impact');
		expect(result).toContain('Unicode café → damage');
		const normalized = await preprocess(result, config.preprocess ?? [], {
			filename: file
		});
		expect(normalized.code).toMatch(/h2 id=.*data-mog-section/);
		expect(normalized.code).toContain('h3 id=');
		expect(normalized.code).toContain('h4 id=');
		expect(normalized.code).toContain('/ability/call-bell');
		expect(normalized.code).not.toContain('/ability/call-bell.html');
		expect(normalized.code).toContain('width=\\"40\\"');
		expect(normalized.code).toContain('width=\\"24\\"');
		expect(
			compile(normalized.code, { filename: file, generate: 'server' }).warnings
		).toEqual([]);
		// A fresh build/HMR transform always starts from the same disk source.
		expect(await inlineMogStats(source, code)).toBe(result);
	});

	it('keeps legacy windows explicit and works without an original instance script', async () => {
		const source = entity('hero', 'Abrams', legacy);
		const { code, file } = await loadDocument(source);
		expect(parse(code, { modern: true }).instance).toBeUndefined();
		const result = await inlineMogStats(source, code);
		expect(result).toContain('"stats":null');
		expect(compile(result, { filename: file, generate: 'server' }).warnings).toEqual([]);
	});

	it('omits missing and wholly suppressed results without altering the original module', async () => {
		const missing = { ...side, win: null, pick: null, matches: 10 };
		const suppressed = {
			closed: true,
			all: { before: missing, after: missing },
			high: { before: missing, after: missing }
		};
		const source = [entity('hero', 'Abrams'), entity('item', 'Test', suppressed)].join(
			'\n'
		);
		const { code } = await loadDocument(source);
		const result = await inlineMogStats(source, code);
		expect(result).not.toContain('<DeadlogInlineImpact');
		expect(result).toContain('export const matchResults = null;');
	});

	it('refuses invalid impact and unsupported schemas instead of rendering misleading values', async () => {
		await expect(
			inlineMogStats(entity('hero', 'Abrams', legacy).replace('win=0.5', 'win="bad"'), '')
		).rejects.toThrow('Malformed impact');
		await expect(
			inlineMogStats(root.replace('schema=2', 'schema=99'), '')
		).rejects.toThrow('Unsupported stats schema 99');
		await expect(
			inlineMogStats(`${root}\n${entity('hero', 'Abrams', legacy)}`, '')
		).rejects.toThrow('schema 2');
	});

	it('handles CRLF source positions and safely serializes executable-looking strings', async () => {
		const source = entity('hero', 'Abrams', legacy, '- Unicode → café').replaceAll(
			'\n',
			'\r\n'
		);
		const { code } = await loadDocument(source);
		expect(await inlineMogStats(source, code)).toContain('<DeadlogInlineImpact');
		const value = '</script><script>alert(1)</script>\u2028\u2029';
		const serialized = serializeMogValue(value);
		expect(serialized).not.toContain('<');
		expect(serialized).not.toContain('\u2028');
		expect(JSON.parse(serialized)).toBe(value);
	});

	it('transforms only original document modules and reports the file on failure', async () => {
		const source = entity('hero', 'Abrams', legacy);
		const { code, file, dir } = await loadDocument(source);
		const plugin = inlineMogStatsPlugin(dir);
		const transform = plugin.transform;
		if (typeof transform !== 'function') throw new Error('Expected transform hook');
		const context = {
			error: (message: string) => {
				throw new Error(message);
			}
		} as unknown as ThisParameterType<typeof transform>;
		expect(await transform.call(context, code, `${file}?embed=0`)).toBeUndefined();
		expect(await transform.call(context, code, `${file}?metadata`)).toBeUndefined();
		expect(await transform.call(context, code, file)).toMatchObject({
			code: expect.stringContaining('<DeadlogInlineImpact')
		});
		await writeFile(file, source.replace('win=0.5', 'win="bad"'));
		await expect(transform.call(context, code, file)).rejects.toThrow(file);
	});
});
