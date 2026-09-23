<script lang="ts">
	import { shareLabel, shareText, type ShareRow } from './shareRows';

	let {
		rows,
		labelledby,
		round = false
	}: { rows: ShareRow[]; labelledby: string; round?: boolean } = $props();

	const paired = $derived(rows.some((row) => row.after !== null));
	const width = (share: number) => `${Math.min(share, 1) * 100}%`;
</script>

<ul class="mt-2 list-none space-y-1" aria-labelledby={labelledby}>
	{#each rows as row (row.href)}
		<li>
			<a
				href={row.href}
				aria-label={shareLabel(row)}
				class="ui-focus-ring group hover:bg-signal/5 -mx-1 flex min-h-11 max-w-md items-center gap-3 rounded-sm px-1"
			>
				<img
					src={row.image}
					alt=""
					width="24"
					height="24"
					loading="lazy"
					decoding="async"
					class="size-6 shrink-0 object-contain {round ? 'rounded-full' : ''}"
				/>
				<span
					class="{row.muted
						? 'text-muted-foreground'
						: 'text-signal'} min-w-0 flex-1 truncate text-sm underline-offset-4 group-hover:underline"
					>{row.name}</span
				>
				<span
					aria-hidden="true"
					class="flex w-16 shrink-0 flex-col gap-0.5 lg:w-24"
					data-share-bar
				>
					<span
						class="bg-border/60 block {paired
							? 'h-1'
							: 'h-1.5'} overflow-hidden rounded-full"
						><span
							class="{paired
								? 'bg-muted-foreground/60'
								: 'bg-muted-foreground'} block h-full min-w-0.5 rounded-full"
							style:width={width(row.before)}
						></span></span
					>
					{#if row.after !== null}
						<span class="bg-border/60 block h-1 overflow-hidden rounded-full"
							><span
								class="bg-muted-foreground block h-full min-w-0.5 rounded-full"
								style:width={width(row.after)}
							></span></span
						>
					{/if}
				</span>
				<span
					aria-hidden="true"
					class="text-foreground shrink-0 text-right font-mono text-xs whitespace-nowrap {paired
						? 'w-[10ch]'
						: 'w-[4ch]'}">{shareText(row)}</span
				>
			</a>
		</li>
	{/each}
</ul>
