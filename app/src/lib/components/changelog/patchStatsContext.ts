import { createContext } from 'svelte';
import type { PatchStats } from '@deadlog/utils';

export const [getPatchStats, setPatchStats] = createContext<{
	stats: PatchStats | null;
	entryYear: number;
	open: boolean;
}>();
