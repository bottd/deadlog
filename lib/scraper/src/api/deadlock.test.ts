import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchClientVersion, fetchEntitySnapshot } from './deadlock';

const hero = {
	id: 1,
	name: 'Infernus',
	class_name: 'hero_inferno',
	images: { icon_a: 'https://cdn/inferno.webp' },
	items: { signature1: 'ability_napalm' }
};

const svg = '<svg width="128" viewBox="0 0 128 128">\n<path d="M53 20C48 13"/>\n</svg>';
const ability = {
	id: 10,
	class_name: 'ability_napalm',
	name: 'Napalm',
	type: 'ability',
	image: 'https://cdn/napalm.png',
	description: {
		desc: `Spew a mixture, dealing ${svg}\n<span class="label">spirit damage</span>.`,
		quip: 'Set them on fire',
		t1_desc: null
	},
	properties: {
		Damage: { value: '40', label: 'Damage', scale_function: { class_name: 'tech' } },
		AbilityCooldown: {
			value: 25.0,
			label: 'Cooldown',
			postfix: 's',
			icon: 'https://cdn/i'
		},
		Hidden: { value: '3', label: 'Hidden' }
	},
	tooltip_details: {
		info_sections: [
			{
				properties_block: [
					{ properties: [{ important_property: 'Damage' }, { important_property: '' }] }
				],
				basic_properties: ['AbilityCooldown', 'StatusEffectStun']
			}
		]
	}
};
const upgrade = {
	id: 20,
	class_name: 'upgrade_clip_size',
	name: 'Extended Magazine',
	type: 'upgrade',
	shop_image: 'https://cdn/clip.png',
	properties: {
		BonusClipSizePercent: { value: '30', prefix: '{s:sign}', label: 'Ammo' }
	},
	tooltip_sections: [
		{ section_attributes: [{ elevated_properties: ['BonusClipSizePercent'] }] }
	]
};

interface Route {
	status?: number;
	body: unknown;
}

function stubApi(routes: Record<string, Route>) {
	const calls: URL[] = [];
	vi.stubGlobal(
		'fetch',
		vi.fn(async (input: string) => {
			const url = new URL(input);
			calls.push(url);
			const route = routes[url.pathname.split('/').at(-1) ?? ''];
			return new Response(JSON.stringify(route.body), {
				status: route.status ?? 200,
				statusText: route.status === 404 ? 'Not Found' : 'OK'
			});
		})
	);
	return calls;
}

afterEach(() => {
	vi.unstubAllGlobals();
	vi.restoreAllMocks();
});

describe('fetchClientVersion', () => {
	it('takes the highest listed version', async () => {
		stubApi({ 'client-versions': { body: [5044, 6698, 6697] } });
		await expect(fetchClientVersion()).resolves.toBe(6698);
	});

	it('rejects an empty list', async () => {
		vi.spyOn(console, 'error').mockImplementation(() => undefined);
		stubApi({ 'client-versions': { body: [] } });
		await expect(fetchClientVersion()).rejects.toThrow(/Invalid client versions/);
	});
});

describe('fetchEntitySnapshot', () => {
	it('requests heroes and items for the same client version and language', async () => {
		const calls = stubApi({
			'client-versions': { body: [6697, 6698] },
			heroes: { body: [hero] },
			items: { body: [ability, upgrade] }
		});

		const snapshot = await fetchEntitySnapshot();

		const pinned = calls.filter((url) => url.pathname.match(/(heroes|items)$/));
		expect(pinned).toHaveLength(2);
		for (const url of pinned) {
			expect(url.searchParams.get('client_version')).toBe('6698');
			expect(url.searchParams.get('language')).toBe('english');
			expect(url.searchParams.has('only_active')).toBe(false);
		}
		expect(snapshot.provenance).toMatchObject({
			clientVersion: 6698,
			language: 'english'
		});
		expect(Date.parse(snapshot.provenance?.collectedAt ?? '')).not.toBeNaN();
	});

	it('projects descriptions without inline svg and only the displayed properties', async () => {
		stubApi({
			'client-versions': { body: [6698] },
			heroes: { body: [hero] },
			items: { body: [upgrade, ability] }
		});

		const { items } = await fetchEntitySnapshot();

		expect(items.map((item) => item.id)).toEqual([20, 10]);
		expect(items[1].description).toEqual({
			desc: 'Spew a mixture, dealing \n<span class="label">spirit damage</span>.',
			t1_desc: null
		});
		expect(items[1].properties).toEqual({
			Damage: { value: '40', label: 'Damage', scales: true },
			AbilityCooldown: { value: 25, label: 'Cooldown', postfix: 's' }
		});
		expect(items[0].properties).toEqual({
			BonusClipSizePercent: { value: '30', prefix: '{s:sign}', label: 'Ammo' }
		});
	});

	it('keeps an asset whose context fields have an unexpected shape', async () => {
		stubApi({
			'client-versions': { body: [6698] },
			heroes: { body: [hero] },
			items: {
				body: [{ ...ability, description: 'text', properties: [1], tooltip_details: 7 }]
			}
		});

		const { items } = await fetchEntitySnapshot();

		expect(items[0]).toMatchObject({ id: 10, description: null });
		expect(items[0].properties).toBeUndefined();
	});

	it('fails as a whole when the pinned version is unavailable', async () => {
		stubApi({
			'client-versions': { body: [6698] },
			heroes: { body: [hero] },
			items: { status: 404, body: { error: 'not found' } }
		});
		await expect(fetchEntitySnapshot()).rejects.toThrow(/Failed to fetch items/);
	});

	it('fails as a whole on a malformed collection', async () => {
		vi.spyOn(console, 'error').mockImplementation(() => undefined);
		stubApi({
			'client-versions': { body: [6698] },
			heroes: { body: [{ id: 'nope' }] },
			items: { body: [ability] }
		});
		await expect(fetchEntitySnapshot()).rejects.toThrow(/Invalid heroes response/);
	});
});
