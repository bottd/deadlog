import { PatchesApi, Configuration } from 'deadlock-api-client';
import type { ChangelogContentJson } from '@deadlog/db';

const config = {
	basePath: 'https://api.deadlock-api.com'
} satisfies ConstructorParameters<typeof Configuration>[0];

export const patchesApi = new PatchesApi(new Configuration(config));

export interface ScrapedChangelog {
	id: string;
	title: string;
	contentJson: ChangelogContentJson | null;
	author: string;
	authorImage: string;
	category: string | null;
	guid: string | null;
	pubDate: string;
	majorUpdate: boolean;
	parentChange: string | null;
}
