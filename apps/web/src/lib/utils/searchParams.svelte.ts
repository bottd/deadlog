import { type ReturnUseSearchParams } from 'runed/kit';
import { getContext } from 'svelte';
import { z } from 'zod';

export const paramSchema = z.object({
	hero: z.array(z.string()).default([]),
	item: z.array(z.string()).default([]),
	change: z.number().optional(),
	q: z.string().default('')
});

export type ParamSchema = typeof paramSchema;
export const SEARCH_PARAMS_KEY = Symbol('searchParams');

/**
 * Get the search params instance from context.
 * Must be called in a component that's a descendant of the layout where params were initialized.
 */
export function getSearchParams() {
	return getContext<ReturnUseSearchParams<ParamSchema>>(SEARCH_PARAMS_KEY);
}
