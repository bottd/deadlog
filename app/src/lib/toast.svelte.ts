export const toaster = $state({ wanted: false });

export function notify(kind: 'success' | 'error', message: string): void {
	toaster.wanted = true;
	void import('svelte-sonner').then(({ toast }) => toast[kind](message));
}
