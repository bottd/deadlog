import { existsSync, globSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { z } from 'zod';
import {
	ENTITY_RENAMES_FILE,
	entityNameAliases,
	formerSlugs,
	indexEntityNames,
	normalizeEntityName,
	toSlug,
	type EntityRenames
} from '@deadlog/utils';
import type { EntitySnapshot } from './api';

const formerNamesSchema = z.record(z.string(), z.array(z.string()));
const entityRenamesSchema = z.object({
	heroes: formerNamesSchema,
	items: formerNamesSchema
});

export function readEntityRenames(changelogsDir: string): EntityRenames {
	const filepath = join(changelogsDir, ENTITY_RENAMES_FILE);
	if (!existsSync(filepath)) return { heroes: {}, items: {} };
	return entityRenamesSchema.parse(JSON.parse(readFileSync(filepath, 'utf-8')));
}

export function recordEntityRenames(
	previous: EntitySnapshot,
	current: EntitySnapshot,
	changelogsDir: string
): number {
	const renames = readEntityRenames(changelogsDir);
	let recorded = 0;
	for (const kind of ['heroes', 'items'] as const) {
		const before = new Map<string, string>(
			previous[kind].map((entity) => [entity.class_name, entity.name])
		);
		for (const entity of current[kind]) {
			const name = before.get(entity.class_name);
			if (
				name === undefined ||
				name === entity.class_name ||
				entity.name === entity.class_name ||
				normalizeEntityName(name) === normalizeEntityName(entity.name)
			)
				continue;
			const names = (renames[kind][entity.class_name] ??= []);
			if (names.includes(name)) continue;
			names.push(name);
			recorded++;
			console.log(`   ✏️  ${name} is now ${entity.name}`);
		}
	}
	if (recorded > 0) {
		writeFileSync(
			join(changelogsDir, ENTITY_RENAMES_FILE),
			`${JSON.stringify(renames, null, '\t')}\n`
		);
	}
	return recorded;
}

const currentSlugs = (entities: readonly { class_name: string; name: string }[]) =>
	entities.map((entity) => ({ className: entity.class_name, slug: toSlug(entity.name) }));

export function rewriteRenamedLinks(
	changelogsDir: string,
	snapshot: EntitySnapshot
): number {
	const renames = readEntityRenames(changelogsDir);
	const targets = {
		hero: formerSlugs(renames.heroes, currentSlugs(snapshot.heroes)),
		item: formerSlugs(renames.items, currentSlugs(snapshot.items))
	};
	if (targets.hero.size === 0 && targets.item.size === 0) return 0;

	let rewritten = 0;
	for (const filepath of globSync(join(changelogsDir, '**', '*.mg'))) {
		const content = readFileSync(filepath, 'utf-8');
		const next = content.replace(
			/\[\[\/(hero|item)\/([^\]/?#]+)(?=[\]/?#])/g,
			(link, kind: 'hero' | 'item', slug: string) => {
				const current = targets[kind].get(slug);
				return current ? `[[/${kind}/${current}` : link;
			}
		);
		if (next === content) continue;
		writeFileSync(filepath, next, 'utf-8');
		rewritten++;
	}
	return rewritten;
}

export function indexWithFormerNames<T extends { class_name: string; name: string }>(
	entities: readonly T[],
	formerNames: Readonly<Record<string, readonly string[]>>
): Map<string, T> {
	const index = indexEntityNames(entities, (entity) => entity.name);
	for (const entity of entities) {
		for (const name of formerNames[entity.class_name] ?? []) {
			for (const alias of entityNameAliases(name)) {
				if (!index.has(alias)) index.set(alias, entity);
			}
		}
	}
	return index;
}
