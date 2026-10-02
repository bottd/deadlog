import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getLibsqlDb, getRedirectSlugs } from '@deadlog/db';
import { canonicalSlug, ENTITY_RENAMES_FILE, type EntityRenames } from '@deadlog/utils';

const outputPath = fileURLToPath(
	new URL('../app/src/lib/generated/slug-redirects.json', import.meta.url)
);

process.env.DATABASE_URL ??= `file:${fileURLToPath(new URL('../app/static/deadlog.db', import.meta.url))}`;

const renamesPath = fileURLToPath(
	new URL(`../app/changelogs/${ENTITY_RENAMES_FILE}`, import.meta.url)
);
const renames: EntityRenames = existsSync(renamesPath)
	? JSON.parse(await readFile(renamesPath, 'utf8'))
	: { heroes: {}, items: {} };

const slugs = await getRedirectSlugs(getLibsqlDb(), renames);

const routes: Record<string, readonly string[]> = {
	hero: slugs.hero,
	item: slugs.item,
	ability: slugs.ability,
	changelog: slugs.changelog,
	'changelog alias': Object.keys(slugs.changelogAliases),
	'changelog alias target': Object.values(slugs.changelogAliases),
	'hero alias': Object.keys(slugs.heroAliases),
	'item alias': Object.keys(slugs.itemAliases)
};

for (const [kind, list] of Object.entries(routes)) {
	for (const slug of list) {
		if (slug !== canonicalSlug(slug)) {
			throw new Error(
				`${kind} slug "${slug}" is not lowercase — routes are matched exactly, so nothing could ever reach it`
			);
		}
	}
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(slugs, null, '\t')}\n`);

console.log(`   Redirects: ${outputPath}`);
console.log(
	`   ${slugs.hero.length} heroes, ${slugs.item.length} items, ${slugs.ability.length} abilities, ${slugs.changelog.length} changelogs, ${Object.keys(slugs.changelogAliases).length} aliases, ${Object.keys(slugs.heroAliases).length + Object.keys(slugs.itemAliases).length} renamed entities`
);
