<script lang="ts">
	import '../app.css';
	import { Header } from '$lib/components/header';
	import { Toaster } from '$lib/components/ui/sonner';
	import { Footer } from '$lib/components/ui/footer';
	import { useSearchParams } from 'runed/kit';
	import { setContext } from 'svelte';
	import { paramSchema, SEARCH_PARAMS_KEY } from '$lib/utils/searchParams.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const params = useSearchParams(paramSchema);
	setContext(SEARCH_PARAMS_KEY, params);

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: Infinity,
				refetchOnWindowFocus: false
			}
		}
	});

	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	<Toaster />

	<Header />

	{@render children?.()}

	<Footer />
</QueryClientProvider>
