<script lang="ts">
	import Clapperboard from '@lucide/svelte/icons/clapperboard';
	import ExternalLink from '@lucide/svelte/icons/external-link';

	interface Props {
		src: string;
		label: string;
	}

	// The label arrives already cleaned by the scraper, so this stays a pure renderer.
	let { src, label }: Props = $props();
</script>

<a
	href={src}
	target="_blank"
	rel="noopener noreferrer"
	border="border/60 ~"
	bg="card/60"
	text="muted-foreground xs"
	m="y-2"
	items="center"
	gap="2"
	rounded="md"
	p="x-2.5 y-1.5"
	font="medium"
	class="video-link hover:border-signal/50 hover:text-foreground focus-visible:ring-ring inline-flex no-underline transition-colors focus-visible:ring-2 focus-visible:outline-none"
	aria-label="{label} — video clip, opens on the Deadlock forums"
>
	<Clapperboard class="text-signal size-3.5 shrink-0" aria-hidden="true" />
	<span truncate>{label}</span>
	<ExternalLink class="size-3 shrink-0 opacity-60" aria-hidden="true" />
</a>
