<script module lang="ts">
	import Package from '@lucide/svelte/icons/package';
	import Users from '@lucide/svelte/icons/users';

	export interface DirectoryEntry {
		id: number | string;
		name: string;
		href: string;
		image: string;
		subtitle?: string | null;
	}

	// The class scanner only sees literal class strings, so each kind spells its classes out.
	const KINDS = {
		hero: {
			icon: Users,
			noun: 'heroes',
			title: 'Hero Directory',
			text: 'text-primary',
			border: 'border-primary/30',
			wash: 'from-primary/10',
			accents: { tlColor: 'bg-primary/70', brColor: 'bg-primary/30' },
			focus: 'focus-within:border-primary',
			card: 'hover:border-primary/50',
			cardAccents: { tlColor: 'bg-primary/30', tlHover: 'group-hover:bg-primary' }
		},
		item: {
			icon: Package,
			noun: 'items',
			title: 'Item Directory',
			text: 'text-signal',
			border: 'border-signal/30',
			wash: 'from-signal/10 via-signal/5',
			accents: { tlColor: 'bg-signal/80', brColor: 'bg-primary/40' },
			focus: 'focus-within:border-signal',
			card: 'hover:border-signal/55',
			cardAccents: { tlColor: 'bg-signal/35', tlHover: 'group-hover:bg-signal' }
		}
	} as const;
</script>

<script lang="ts">
	import CornerAccents from '$lib/components/ui/corner-accents/CornerAccents.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Search from '@lucide/svelte/icons/search';

	interface Props {
		/** Drives the id prefix, tone, icon, copy and image treatment. */
		kind: keyof typeof KINDS;
		eyebrow: string;
		heading: string;
		lede: string;
		listEyebrow: string;
		entries: DirectoryEntry[];
	}

	let { kind, eyebrow, heading, lede, listEyebrow, entries }: Props = $props();

	const t = $derived(KINDS[kind]);
	const Icon = $derived(t.icon);

	let search = $state('');
	const filtered = $derived.by(() => {
		const query = search.trim().toLowerCase();
		return query
			? entries.filter((entry) => entry.name.toLowerCase().includes(query))
			: entries;
	});
</script>

<main container m="x-auto t-8 b-24" p="x-4" class="max-w-6xl">
	<header
		class="clip-corner bg-card {t.border} relative mb-10 overflow-hidden border-2 px-6 py-10 md:px-10"
	>
		<CornerAccents tlSize="3rem" brSize="2rem" {...t.accents} />
		<div
			class="{t.wash} pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent"
		></div>
		<div relative class="max-w-3xl">
			<div class="{t.text} mb-3 flex items-center gap-2">
				<Icon class="size-4" />
				<span font="mono bold" uppercase class="text-[10px] tracking-[0.2em]"
					>{eyebrow}</span
				>
			</div>
			<h1
				font="display medium"
				text="foreground 4xl"
				class="heading-glow leading-tight tracking-wide md:text-6xl"
			>
				{heading}
			</h1>
			<p text="muted-foreground" m="t-4" class="max-w-2xl leading-relaxed">{lede}</p>
		</div>
	</header>

	<section aria-labelledby="{kind}-directory-heading">
		<div m="b-5" items="end" justify="between" gap="4" class="flex">
			<div>
				<p
					text="muted-foreground"
					font="mono"
					uppercase
					class="text-[10px] tracking-widest"
				>
					{listEyebrow}
				</p>
				<h2
					id="{kind}-directory-heading"
					font="display medium"
					text="foreground 2xl"
					m="t-1"
					class="tracking-wide"
				>
					{t.title}
				</h2>
			</div>
			<span id="{kind}-directory-count" class="{t.text} font-mono text-xs font-bold">
				{filtered.length}{search ? ` / ${entries.length}` : ''}
				{t.noun.toUpperCase()}
			</span>
		</div>

		<label for="{kind}-directory-search" class="sr-only">Filter {t.noun} by name</label>
		<div class="border-border bg-card {t.focus} relative mb-5 max-w-md border">
			<Search
				class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
			/>
			<input
				id="{kind}-directory-search"
				type="search"
				bind:value={search}
				aria-describedby="{kind}-directory-count"
				placeholder="Filter {t.noun}..."
				w="full"
				bg="transparent"
				p="y-3 r-3 l-10"
				text="sm"
				class="placeholder:text-muted-foreground outline-none"
			/>
		</div>

		{#if filtered.length > 0}
			<ul
				grid="cols-1"
				gap="3"
				class="grid min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
			>
				{#each filtered as entry, index (entry.id)}
					<li>
						<a
							href={entry.href}
							class="clip-corner-sm border-border bg-card {t.card} group relative flex h-full min-h-20 items-center gap-3 overflow-hidden border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
						>
							<CornerAccents tlSize="1rem" {...t.cardAccents} />
							{#if kind === 'item'}
								<div
									border="border ~"
									bg="background"
									shrink="0"
									items="center"
									justify="center"
									rounded="md"
									p="1.5"
									class="size-12 flex"
								>
									<img
										src={entry.image}
										alt=""
										width="48"
										height="48"
										loading={index < 10 ? 'eager' : 'lazy'}
										decoding="async"
										class="max-h-full max-w-full object-contain"
									/>
								</div>
							{:else}
								<img
									src={entry.image}
									alt=""
									width="56"
									height="56"
									loading={index < 10 ? 'eager' : 'lazy'}
									decoding="async"
									border="border ~"
									bg="background"
									shrink="0"
									rounded="md"
									class="size-14 object-cover"
								/>
							{/if}
							<div flex="1" class="min-w-0">
								<h3 text="foreground sm" font="semibold" class="leading-tight">
									{entry.name}
								</h3>
								{#if entry.subtitle}
									<p
										text="muted-foreground"
										m="t-0.5"
										font="mono"
										uppercase
										class="text-[9px] tracking-wider"
									>
										{entry.subtitle}
									</p>
								{/if}
							</div>
							<ArrowRight
								class="{t.text} size-3.5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
							/>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p border="border ~" bg="card" text="muted-foreground center" p="8">
				No {t.noun} match "{search}".
			</p>
		{/if}
	</section>
</main>
