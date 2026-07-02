import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export function getDb(d1Database: D1Database) {
	// drizzle() is a cheap wrapper; construct per call so we never reuse
	// another request's D1 binding across requests on Cloudflare Workers.
	return drizzle(d1Database, { schema });
}

export type DrizzleDB = ReturnType<typeof getDb>;
