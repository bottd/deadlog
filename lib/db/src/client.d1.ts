import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

let dbInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb(d1Database: D1Database) {
	if (!dbInstance) {
		console.log('Using Cloudflare D1 database');
		dbInstance = drizzle(d1Database, { schema });
		console.log('Database client created successfully');
	}
	return dbInstance;
}

export type DrizzleDB = ReturnType<typeof getDb>;
