<script lang="ts">
	import '../app.css';
	import { Header } from '$lib/components/header';
	import { Toaster } from '$lib/components/ui/sonner';
	import { Footer } from '$lib/components/ui/footer';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

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
