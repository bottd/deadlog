import { drizzle as drizzleD1 } from 'drizzle-orm/d1';
import { drizzle as drizzleLibsql } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { BaseSQLiteDatabase } from 'drizzle-orm/sqlite-core';
import * as schema from './schema';

export type DrizzleDB = BaseSQLiteDatabase<'async', unknown, typeof schema>;

// Cached per process: build scripts and tests call getLibsqlDb() repeatedly and
// should share one client.
let libsqlInstance: DrizzleDB | null = null;

export function getLibsqlDb(): DrizzleDB {
	if (!libsqlInstance) {
		const DATABASE_URL = process.env.DATABASE_URL;
		if (!DATABASE_URL) {
			throw new Error('DATABASE_URL environment variable is required');
		}
		libsqlInstance = drizzleLibsql(createClient({ url: DATABASE_URL }), { schema });
	}
	return libsqlInstance;
}

export function getDb(d1Database?: D1Database): DrizzleDB {
	return d1Database ? drizzleD1(d1Database, { schema }) : getLibsqlDb();
}
