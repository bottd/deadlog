import {
	heroesApiResponseSchema,
	itemsApiResponseSchema,
	type HeroesApiResponse,
	type ItemsApiResponse
} from '../types/deadlockApi';
import { z } from 'zod';

const ASSETS_API_BASE = 'https://api.deadlock-api.com/v1/assets';

async function fetchAndValidate<T>(
	endpoint: string,
	schema: z.ZodType<T>,
	resourceName: string
): Promise<T> {
	const response = await fetch(`${ASSETS_API_BASE}/${endpoint}`, {
		signal: AbortSignal.timeout(30_000)
	});

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

const clientVersionsSchema = z.array(z.number().int().positive()).min(1);

const SNAPSHOT_LANGUAGE = 'english';

export async function fetchClientVersion(): Promise<number> {
	const versions = await fetchAndValidate(
		'client-versions',
		clientVersionsSchema,
		'client versions'
	);
	return Math.max(...versions);
}

const pinned = (endpoint: string, clientVersion: number) =>
	`${endpoint}?${new URLSearchParams({
		client_version: String(clientVersion),
		language: SNAPSHOT_LANGUAGE
	})}`;

export const fetchHeroes = (clientVersion: number): Promise<HeroesApiResponse> =>
	fetchAndValidate(pinned('heroes', clientVersion), heroesApiResponseSchema, 'heroes');

export const fetchItems = (clientVersion: number): Promise<ItemsApiResponse> =>
	fetchAndValidate(pinned('items', clientVersion), itemsApiResponseSchema, 'items');

export interface SnapshotProvenance {
	clientVersion: number;
	language: string;
	collectedAt: string;
}

export interface EntitySnapshot {
	heroes: HeroesApiResponse;
	items: ItemsApiResponse;
	provenance?: SnapshotProvenance;
}

export async function fetchEntitySnapshot(): Promise<EntitySnapshot> {
	const clientVersion = await fetchClientVersion();
	const [heroes, items] = await Promise.all([
		fetchHeroes(clientVersion),
		fetchItems(clientVersion)
	]);
	return {
		heroes,
		items,
		provenance: {
			clientVersion,
			language: SNAPSHOT_LANGUAGE,
			collectedAt: new Date().toISOString()
		}
	};
}
