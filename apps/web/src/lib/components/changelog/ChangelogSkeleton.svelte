<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton';
	import * as Card from '$lib/components/ui/card';

	interface Props {
		delay?: number;
	}

	let { delay = 0 }: Props = $props();
</script>

<Card.Root
	class="animate-slide-in-fade"
	style="animation-delay: {delay}ms; animation-fill-mode: backwards;"
>
	<Card.Content>
		<!-- Header: Date + Author + Icons -->
		<div class="mb-4 flex w-full items-start justify-between gap-4">
			<div class="flex flex-col gap-2">
				<!-- Date placeholder -->
				<Skeleton class="h-6 w-40" />
				<!-- Author placeholder -->
				<div class="flex items-center gap-2">
					<Skeleton class="size-6 rounded-full" />
					<Skeleton class="h-4 w-32" />
				</div>
			</div>

			<!-- Entity icons placeholder -->
			<div class="flex items-start gap-2">
				<div class="flex -space-x-2">
					<Skeleton class="size-9 rounded-full" />
					<Skeleton class="size-9 rounded-full" />
					<Skeleton class="size-9 rounded-full" />
				</div>
			</div>
		</div>

		<!-- Content lines -->
		<div class="mb-3 space-y-3">
			<Skeleton class="h-4 w-full" />
			<Skeleton class="h-4 w-5/6" />
			<Skeleton class="h-4 w-4/5" />
			<Skeleton class="h-4 w-3/4" />
		</div>

		<!-- Expand button placeholder -->
		<Skeleton class="h-8 w-28" />
	</Card.Content>
</Card.Root>
