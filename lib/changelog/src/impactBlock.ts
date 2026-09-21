import type { EntityImpact, ImpactWindow, TierImpact } from '@deadlog/utils';

export const ATTR_OPEN = '``attr:';
export const VERBATIM_CLOSE = '``';

const TIERS = ['all', 'high'] as const;
const SIDES = ['before', 'after'] as const;
const WINDOW_KEYS = ['win', 'pick', 'matches', 'days'] as const;

const rate = (value: number | null): string => (value === null ? '#null' : String(value));

function windowLine(side: string, window: ImpactWindow): string {
	return `    ${side} win=${rate(window.win)} pick=${rate(window.pick)} matches=${window.matches} days=${window.days}`;
}

export function writeImpactBlock(impact: EntityImpact): string[] {
	return [
		ATTR_OPEN,
		`impact closed=#${impact.closed} {`,
		...TIERS.flatMap((tier) => [
			`  ${tier} {`,
			...SIDES.map((side) => windowLine(side, impact[tier][side])),
			'  }'
		]),
		'}',
		VERBATIM_CLOSE
	];
}

function malformed(line: string | undefined): never {
	throw new Error(`Malformed impact block: ${line ?? '<end of block>'}`);
}

function readWindow(side: string, line: string | undefined): ImpactWindow {
	const tokens = line?.trim().split(/\s+/) ?? [];
	if (tokens[0] !== side || tokens.length !== WINDOW_KEYS.length + 1) malformed(line);

	const values = WINDOW_KEYS.map((key, index) => {
		const [name, raw, ...rest] = tokens[index + 1].split('=');
		if (name !== key || raw === undefined || rest.length) malformed(line);
		if (raw === '#null' && (key === 'win' || key === 'pick')) return null;
		const value = Number(raw);
		if (raw === '' || !Number.isFinite(value) || value < 0) malformed(line);
		if ((key === 'matches' || key === 'days') && !Number.isInteger(value))
			malformed(line);
		return value;
	});

	const [win, pick, matches, days] = values;
	if (matches === null || days === null) malformed(line);
	return { win, pick, matches, days };
}

export function readImpactBlock(lines: string[]): EntityImpact {
	const rows = lines.filter((line) => line.trim() !== '');
	let cursor = 0;
	const expect = (text: string) => {
		if (rows[cursor]?.trim() !== text) malformed(rows[cursor]);
		cursor++;
	};

	const head = rows[cursor]?.trim().match(/^impact closed=#(true|false) \{$/);
	if (!head) malformed(rows[cursor]);
	cursor++;

	const tier = (name: string): TierImpact => {
		expect(`${name} {`);
		const before = readWindow('before', rows[cursor++]);
		const after = readWindow('after', rows[cursor++]);
		expect('}');
		return { before, after };
	};

	const all = tier('all');
	const high = tier('high');
	expect('}');
	if (cursor !== rows.length) malformed(rows[cursor]);

	return { closed: head[1] === 'true', all, high };
}
