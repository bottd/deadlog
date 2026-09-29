import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import { createPatchRepository } from './patch-repository';

export function createD1PatchRepository(binding: D1Database) {
	return createPatchRepository(drizzle(binding, { schema }));
}
