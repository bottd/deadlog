import type { DrizzleDB } from '@deadlog/db';

declare global {
	namespace App {
		interface Locals {
			db: DrizzleDB;
		}

		// Define environment bindings for Cloudflare Workers
		interface CloudflareEnv {
			DB: D1Database;
		}

		interface Platform {
			env: CloudflareEnv;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties;
		}
	}
}

export {};
