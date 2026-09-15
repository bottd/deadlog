import { decodeEntityName } from '@deadlog/utils';

const ASSET_KEY = /^[a-z0-9]+(?:_[a-z0-9]+)+$/;
const ASSET_PREFIX = /^(citadel|upgrade|ability|item)_(?=.+_)/;

export function displayName(name: string): string {
	const decoded = decodeEntityName(name).trim();
	if (!ASSET_KEY.test(decoded)) return decoded;

	return decoded
		.replace(ASSET_PREFIX, '')
		.split('_')
		.filter(Boolean)
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

const ADVANCE = { display: 0.46, body: 0.5, mono: 0.74 } as const;

type Face = keyof typeof ADVANCE;

export function estimateWidth(
	text: string,
	fontSize: number,
	face: Face = 'display'
): number {
	return text.length * fontSize * ADVANCE[face];
}

export function fitDisplay(
	text: string,
	maxWidth: number,
	steps: readonly number[],
	maxLines = 1,
	face: Face = 'display'
): number {
	const budget = maxWidth * maxLines * 0.92;
	const fits = steps.find((size) => estimateWidth(text, size, face) <= budget);
	return fits ?? steps[steps.length - 1];
}

const URL_SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isRenderableSlug(slug: string): boolean {
	return URL_SAFE_SLUG.test(slug);
}

export function countLabel(n: number, singular: string, plural = `${singular}S`): string {
	return `${n} ${n === 1 ? singular : plural}`;
}
