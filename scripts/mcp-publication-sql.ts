import { PublicationSchema, type Publication } from '@deadlog/contracts';
import { z } from 'zod';

export function parseD1Output(stdout: string) {
	const marker = stdout.match(/^\s*\[/m);
	if (marker?.index === undefined)
		throw new Error('Wrangler did not return a JSON result');
	return z
		.array(
			z.object({
				success: z.literal(true),
				results: z.array(z.record(z.string(), z.unknown()))
			})
		)
		.parse(JSON.parse(stdout.slice(marker.index)));
}

export const sqlString = (value: string) => `'${value.replaceAll("'", "''")}'`;
export function datasetSql(publication: Publication, ready: boolean): string {
	const value = sqlString(JSON.stringify({ ...publication.dataset, ready }));
	return `INSERT INTO metadata (key,value) VALUES ('mcp:dataset',${value}) ON CONFLICT(key) DO UPDATE SET value=excluded.value;`;
}

export function fixtureSql(input: unknown): string {
	const publication = PublicationSchema.parse(input);
	const statements = [datasetSql(publication, false)];
	for (const patch of publication.patches) {
		const values = [
			patch.id,
			patch.title,
			patch.slug,
			patch.sourceUrl,
			patch.author,
			'',
			patch.publishedAt,
			patch.text
		].map(sqlString);
		statements.push(
			`INSERT INTO changelogs (id,title,slug,source_url,author,author_image,pub_date,content_text) VALUES (${values.join(',')}) ON CONFLICT(id) DO UPDATE SET title=excluded.title,slug=excluded.slug,source_url=excluded.source_url,author=excluded.author,pub_date=excluded.pub_date,content_text=excluded.content_text;`
		);
		statements.push(
			`DELETE FROM changelog_aliases WHERE changelog_id=${sqlString(patch.id)};`
		);
		for (const alias of patch.aliases.filter((slug) => slug !== patch.slug))
			statements.push(
				`INSERT INTO changelog_aliases (slug,changelog_id) VALUES (${sqlString(alias)},${sqlString(patch.id)}) ON CONFLICT(slug) DO UPDATE SET changelog_id=excluded.changelog_id;`
			);
		statements.push(
			`INSERT INTO metadata (key,value) VALUES (${sqlString(`mcp:patch:${patch.id}`)},${sqlString(JSON.stringify({ revision: patch.revision, aliases: patch.aliases }))}) ON CONFLICT(key) DO UPDATE SET value=excluded.value;`
		);
	}
	return statements.join('\n');
}
