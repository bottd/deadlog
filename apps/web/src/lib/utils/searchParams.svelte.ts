import { z } from 'zod';
import { useSearchParams } from 'runed/kit';

export const paramSchema = z.object({
	hero: z.array(z.string()).default([]),
	item: z.array(z.string()).default([]),
	change: z.number().optional(),
	q: z.string().default('')
});

export type ParamSchema = typeof paramSchema;

export const getSearchParams = () => useSearchParams(paramSchema);
