import type { DrizzleDB } from '@deadlog/db';
import type { AttributifyAttributes } from 'unocss/preset-attributify';

declare global {
	namespace App {
		interface PageState {
			ability?: string | null;
		}

		interface Locals {
			db: DrizzleDB;
		}

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

/**
 * Shortcuts from `uno.config.ts` that are worn as valueless attributes rather than
 * class names (`<span kicker-sm>`). UnoCSS resolves them either way; only svelte-check
 * needs telling, and keeping the list explicit is also the record of which shortcuts
 * are meant to be used this way.
 */
interface ShortcutAttributes {
	kicker?: boolean | '';
	'kicker-sm'?: boolean | '';
	'kicker-xs'?: boolean | '';
}

/**
 * UnoCSS attributify mode writes utilities as attributes (`bg="card/80"`), which
 * svelte-check would otherwise reject as unknown attributes on intrinsic elements.
 */
declare module 'svelte/elements' {
	/* Declaration merging needs the empty body and the original arity, so both rules
	   are inapplicable here. */
	/* eslint-disable @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars */
	interface HTMLAttributes<T> extends AttributifyAttributes, ShortcutAttributes {}
	interface SVGAttributes<T> extends AttributifyAttributes {}
	/* eslint-enable @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars */
}

export {};
