import type { DrizzleDB } from '@deadlog/db';

declare global {
	namespace App {
		interface PageState {
			ability?: string;
			name?: string;
			category?: string;
		}

		interface Locals {
			db: DrizzleDB;
		}
	}
}

export {};
