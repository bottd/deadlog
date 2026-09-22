import { createContext } from 'svelte';
import type { PatchStats } from '@deadlog/utils';
import type { ImpactKind } from '$lib/utils/impactFormat';

export interface MogMatchResults {
	stats: PatchStats | null;
	kinds: ImpactKind[];
}

export const [getPatchStats, setPatchStats] = createContext<{
	stats: PatchStats | null;
	entryYear: number;
}>();
