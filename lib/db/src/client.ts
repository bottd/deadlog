import { getDb as getD1 } from './client.d1';
import { getDb as getLibsql } from './client.libsql';
import { BaseSQLiteDatabase } from 'drizzle-orm/sqlite-core';
import type * as schema from './schema';

export { getDb as getD1Db } from './client.d1';
export { getDb as getLibsqlDb } from './client.libsql';

export type DrizzleDB = BaseSQLiteDatabase<'async', unknown, typeof schema>;

export function getDb(d1Database?: D1Database): DrizzleDB {
	if (d1Database) {
		return getD1(d1Database);
	}

	return getLibsql();
}
