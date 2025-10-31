import { PatchesApi, Configuration, type Patch } from 'deadlock-api-client';
import type { ChangelogContentJson } from '@deadlog/db';

const config = {
	basePath: 'https://api.deadlock-api.com'
} satisfies ConstructorParameters<typeof Configuration>[0];

export const patchesApi = new PatchesApi(new Configuration(config));

export interface ChangelogEntry extends Patch {
	id: string;
	date: Date;
	fullContent?: string;
	contentJson?: ChangelogContentJson;
	authorImage: string;
	scrapedAt?: Date;
	majorUpdate?: boolean;
	parentChange?: string | null;
}
