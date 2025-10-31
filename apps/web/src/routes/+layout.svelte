<script lang="ts">
	import '../app.css';
	import { Header } from '$lib/components/header';
	import { useSearchParams } from 'runed/kit';
	import { setContext } from 'svelte';
	import { paramSchema, SEARCH_PARAMS_KEY } from '$lib/utils/searchParams.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	// Initialize search params and set in context
	const params = useSearchParams(paramSchema);
	setContext(SEARCH_PARAMS_KEY, params);

	// Initialize TanStack Query client
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5, // 5 minutes
				refetchOnWindowFocus: false
			}
		}
	});

	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	<Header />

	{@render children?.()}
</QueryClientProvider>
