import { drizzle } from 'drizzle-orm/libsql';
import type { Client } from '@libsql/client';
import * as schema from './schema';
import { createPatchRepository } from './patch-repository';

export function createSqlitePatchRepository(client: Client) {
	return createPatchRepository(drizzle(client, { schema }));
}
