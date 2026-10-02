import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import type { EntitySnapshot } from './api';
import {
	indexWithFormerNames,
	readEntityRenames,
	recordEntityRenames,
	rewriteRenamedLinks
} from './entityRenames';

const item = (class_name: string, name: string, id = 1) => ({
	id,
	class_name,
	name,
	type: 'upgrade' as const
});
const snapshot = (items: EntitySnapshot['items']): EntitySnapshot => ({
	heroes: [],
	items
});

describe('entity renames', () => {
	let directory: string;
	beforeEach(async () => {
		directory = await mkdtemp(join(tmpdir(), 'deadlog-renames-'));
		vi.spyOn(console, 'log').mockImplementation(() => {});
	});
	afterEach(async () => {
		vi.restoreAllMocks();
		await rm(directory, { recursive: true, force: true });
	});

	it('records the old name when the api renames an entity', () => {
		const recorded = recordEntityRenames(
			snapshot([item('upgrade_tech_defense_shredders', 'Spirit Shredder Bullets')]),
			snapshot([item('upgrade_tech_defense_shredders', 'Spirit Shredder')]),
			directory
		);
		expect(recorded).toBe(1);
		expect(readEntityRenames(directory).items).toEqual({
			upgrade_tech_defense_shredders: ['Spirit Shredder Bullets']
		});
	});

	it('ignores placeholder names and unchanged entities', () => {
		const recorded = recordEntityRenames(
			snapshot([
				item('citadel_ability_mantle', 'citadel_ability_mantle', 1),
				item('ability_boho_damageshare', 'Intertwine', 2),
				item('upgrade_grit', 'Grit', 3)
			]),
			snapshot([
				item('citadel_ability_mantle', 'Mantle', 1),
				item('ability_boho_damageshare', 'ability_boho_damageshare', 2),
				item('upgrade_grit', 'grit', 3)
			]),
			directory
		);
		expect(recorded).toBe(0);
		expect(readEntityRenames(directory)).toEqual({ heroes: {}, items: {} });
	});

	it('rewrites links to a former slug and leaves everything else alone', async () => {
		await writeFile(
			join(directory, 'entity-renames.json'),
			JSON.stringify({
				heroes: {},
				items: { upgrade_aprounds: ['Armor Piercing Rounds'] }
			})
		);
		await mkdir(join(directory, '2025'));
		const filepath = join(directory, '2025', '05-19.mg');
		await writeFile(
			filepath,
			'=item:armor-piercing-rounds:\n## [[/item/armor-piercing-rounds]]((Armor Piercing Rounds))\n[[/item/armor-piercing-rounds-x]]((x))\n'
		);

		expect(
			rewriteRenamedLinks(
				directory,
				snapshot([item('upgrade_aprounds', 'Armor Piercer')])
			)
		).toBe(1);
		expect(await readFile(filepath, 'utf-8')).toBe(
			'=item:armor-piercing-rounds:\n## [[/item/armor-piercer]]((Armor Piercing Rounds))\n[[/item/armor-piercing-rounds-x]]((x))\n'
		);
	});

	it('never redirects a former slug that another entity now owns', async () => {
		await writeFile(
			join(directory, 'entity-renames.json'),
			JSON.stringify({ heroes: {}, items: { upgrade_a: ['Grit'] } })
		);
		const filepath = join(directory, 'patch.mg');
		await writeFile(filepath, '[[/item/grit]]((Grit))\n');

		expect(
			rewriteRenamedLinks(
				directory,
				snapshot([item('upgrade_a', 'Old Grit', 1), item('upgrade_b', 'Grit', 2)])
			)
		).toBe(0);
		expect(await readFile(filepath, 'utf-8')).toBe('[[/item/grit]]((Grit))\n');
	});

	it('matches patch notes that still use a former name', () => {
		const shredder = item('upgrade_tech_defense_shredders', 'Spirit Shredder', 1);
		const index = indexWithFormerNames([shredder], {
			upgrade_tech_defense_shredders: ['Spirit Shredder Bullets']
		});
		expect(index.get('spirit shredder bullets')).toBe(shredder);
		expect(index.get('spirit shredder')).toBe(shredder);
	});
});
