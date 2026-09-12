<script lang="ts">
	import Crosshair from '@lucide/svelte/icons/crosshair';
</script>

<footer m="t-24" p="b-8">
	<div m="b-10" class="editorial-divider"></div>

	<div container m="x-auto" flex="~ col" items="center" gap="6" p="x-4">
		<a
			flex="~"
			href="/"
			items="center"
			gap="3"
			class="group transition-opacity hover:opacity-80"
		>
			<div
				flex="~"
				bg="signal/10"
				items="center"
				justify="center"
				rounded="md"
				class="group-hover:bg-signal/15 size-7 transition-colors"
			>
				<Crosshair class="text-signal size-3.5" />
			</div>
			<span
				font="display semibold"
				text="muted-foreground sm"
				class="tracking-wide transition-colors"
			>
				dead<span text="primary">log</span><span font="mono" class="text-[11px]">.io</span
				>
			</span>
		</a>

		<div flex="~ col" items="center" gap="1.5" text="center">
			<a
				href="/archive"
				class="ui-focus-ring text-signal mb-2 inline-flex min-h-11 items-center rounded-sm text-sm underline-offset-4 hover:underline"
				>Browse all patches</a
			>
			<p text="muted-foreground" class="text-xs">
				Data provided by <a
					href="https://deadlock-api.com"
					text="signal"
					class="transition-colors hover:opacity-80"
					target="_blank"
					rel="noopener noreferrer">Deadlock API</a
				>
			</p>
			<p text="muted-foreground" class="text-xs">
				Deadlock is a trademark of Valve Corporation
			</p>
		</div>

		<div flex="~" items="center" gap="4">
			<div bg="signal/20" h="px" w="10"></div>
			<!-- Full tone at 11px: 9px at 40% alpha under the flicker measured 2.24:1. -->
			<span
				text="muted-foreground"
				font="mono"
				uppercase
				class="terminal-flicker text-[11px] tracking-[0.25em]"
			>
				// end transmission
			</span>
			<div bg="signal/20" h="px" w="10"></div>
		</div>
	</div>
</footer>
