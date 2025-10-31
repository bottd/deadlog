import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

let dbInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
	if (!dbInstance) {
		const DATABASE_URL = process.env.DATABASE_URL;
		if (!DATABASE_URL) {
			throw new Error('DATABASE_URL environment variable is required');
		}

		console.log('Using file database:', DATABASE_URL);
		const client = createClient({ url: DATABASE_URL });
		dbInstance = drizzle(client, { schema });
		console.log('Database client created successfully');
	}
	return dbInstance;
}

export type DrizzleDB = ReturnType<typeof getDb>;
