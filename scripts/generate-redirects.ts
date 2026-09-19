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

for (const kind of ['hero', 'item', 'ability'] as const) {
	const seen = new Map<string, string>();
	for (const slug of slugs[kind]) {
		const canonical = canonicalSlug(slug);
		const other = seen.get(canonical);
		if (other) {
			throw new Error(
				`Ambiguous ${kind} slugs "${other}" and "${slug}" share the canonical form "${canonical}"`
			);
		}
		seen.set(canonical, slug);
	}
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(slugs, null, '\t')}\n`);

console.log(`   Redirects: ${outputPath}`);
console.log(
	`   ${slugs.hero.length} heroes, ${slugs.item.length} items, ${slugs.ability.length} abilities, ${slugs.changelog.length} changelogs, ${Object.keys(slugs.changelogAliases).length} aliases`
);
