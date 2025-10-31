import { getDb as getD1 } from './client.d1';
import { getDb as getLibsql } from './client.libsql';
import type { DrizzleDB as D1DrizzleDB } from './client.d1';
import type { DrizzleDB as LibsqlDrizzleDB } from './client.libsql';

export { getDb as getD1Db } from './client.d1';
export { getDb as getLibsqlDb } from './client.libsql';

export type DrizzleDB = D1DrizzleDB | LibsqlDrizzleDB;

export function getDb(d1Database?: D1Database): DrizzleDB {
	// In Cloudflare Workers environment with D1 binding
	if (d1Database) {
		return getD1(d1Database);
	}

	// In local/Node environment with DATABASE_URL
	return getLibsql();
}
