import type { EntityContext } from '@deadlog/utils';

export interface PageContext {
	clientVersion: number | null;
	sections: { label: string | null; paragraphs: string[] }[];
	properties: { label: string; display: string; unit: string }[];
}

export function toPageContext(context: EntityContext): PageContext {
	return {
		clientVersion: context.clientVersion,
		sections: context.sections.map(({ label, paragraphs }) => ({ label, paragraphs })),
		properties: context.properties.map(({ label, display, unit }) => ({
			label,
			display,
			unit
		}))
	};
}
