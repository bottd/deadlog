import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getLibsqlDb, getRedirectSlugs } from '@deadlog/db';
import { canonicalSlug } from '@deadlog/utils';

const outputPath = fileURLToPath(
	new URL('../app/src/lib/generated/slug-redirects.json', import.meta.url)
);

process.env.DATABASE_URL ??= `file:${fileURLToPath(new URL('../app/static/deadlog.db', import.meta.url))}`;

const slugs = await getRedirectSlugs(getLibsqlDb());

const routes: Record<string, readonly string[]> = {
	hero: slugs.hero,
	item: slugs.item,
	ability: slugs.ability,
	changelog: slugs.changelog,
	'changelog alias': Object.keys(slugs.changelogAliases),
	'changelog alias target': Object.values(slugs.changelogAliases)
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
	`   ${slugs.hero.length} heroes, ${slugs.item.length} items, ${slugs.ability.length} abilities, ${slugs.changelog.length} changelogs, ${Object.keys(slugs.changelogAliases).length} aliases`
);
