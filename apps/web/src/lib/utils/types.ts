// Import and export types from their original sources
export type {
	EnrichedHero,
	EnrichedItem,
	EntityType,
	HeroId,
	ItemId
} from '@deadlog/scraper';
export { ENTITY_TYPES } from '@deadlog/scraper';

import { z } from 'zod';

export const heroesApiResponseSchema = z.any();
export const itemsApiResponseSchema = z.any();

export type HeroesApiResponse = z.infer<typeof heroesApiResponseSchema>;
export type ItemsApiResponse = z.infer<typeof itemsApiResponseSchema>;
