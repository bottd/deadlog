export type AssetType = 'weapon' | 'ability' | 'upgrade';

export interface AssetIdentity {
	assetId: number;
	className: string;
	type: AssetType;
	heroId?: number;
	slot?: number;
}

export const CONTEXT_SECTION_KINDS = [
	'description',
	'active',
	'passive',
	'tier1',
	'tier2',
	'tier3'
] as const;
export type ContextSectionKind = (typeof CONTEXT_SECTION_KINDS)[number];

export interface ContextSection {
	kind: ContextSectionKind;
	label: string | null;
	paragraphs: string[];
}

export interface ContextProperty {
	key: string;
	label: string;
	display: string;
	unit: string;
	scales: boolean;
}

export interface EntityContext {
	identity: AssetIdentity;
	clientVersion: number | null;
	language: string | null;
	collectedAt: string | null;
	sections: ContextSection[];
	properties: ContextProperty[];
}
