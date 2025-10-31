import {
	heroesApiResponseSchema,
	itemsApiResponseSchema,
	type HeroesApiResponse,
	type ItemsApiResponse
} from './types/assets';
import { z } from 'zod';

const ASSETS_API_BASE = 'https://assets.deadlock-api.com/v2';

async function fetchAndValidate<T>(
	endpoint: string,
	schema: z.ZodType<T>,
	resourceName: string
): Promise<T> {
	const response = await fetch(`${ASSETS_API_BASE}/${endpoint}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch ${resourceName}: ${response.statusText}`);
	}

	const data = await response.json();
	const result = schema.safeParse(data);

	if (!result.success) {
		console.error(`Failed to validate ${resourceName} response:`, result.error);
		throw new Error(`Invalid ${resourceName} response: ${result.error.message}`);
	}

	return result.data;
}

export const fetchHeroes = (): Promise<HeroesApiResponse> =>
	fetchAndValidate('heroes', heroesApiResponseSchema, 'heroes');

export const fetchItems = (): Promise<ItemsApiResponse> =>
	fetchAndValidate('items', itemsApiResponseSchema, 'items');
