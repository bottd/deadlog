import { defineConfig, presetWind3, transformerDirectives } from 'unocss';

export default defineConfig({
	presets: [presetWind3()],
	transformers: [transformerDirectives()],
	theme: {
		colors: {
			background: 'var(--background)',
			foreground: 'var(--foreground)',
			card: 'var(--card)',
			'card-foreground': 'var(--card-foreground)',
			'card-accent': 'var(--card-accent)',
			popover: 'var(--popover)',
			'popover-foreground': 'var(--popover-foreground)',
			primary: 'var(--primary)',
			'primary-foreground': 'var(--primary-foreground)',
			'primary-subtle': 'var(--primary-subtle)',
			signal: 'var(--signal)',
			'signal-foreground': 'var(--signal-foreground)',
			'signal-subtle': 'var(--signal-subtle)',
			secondary: 'var(--secondary)',
			'secondary-foreground': 'var(--secondary-foreground)',
			muted: 'var(--muted)',
			'muted-foreground': 'var(--muted-foreground)',
			accent: 'var(--accent)',
			'accent-foreground': 'var(--accent-foreground)',
			destructive: 'var(--destructive)',
			border: 'var(--border)',
			'subtle-border': 'var(--border-subtle)',
			input: 'var(--input)',
			ring: 'var(--ring)'
		},
		fontFamily: {
			sans: "'Archivo', ui-sans-serif, system-ui, sans-serif",
			display: "'Oswald', ui-sans-serif, sans-serif",
			mono: "'JetBrains Mono', ui-monospace, monospace"
		},
		borderRadius: {
			sm: 'calc(var(--radius) - 4px)',
			md: 'calc(var(--radius) - 2px)',
			lg: 'var(--radius)',
			xl: 'calc(var(--radius) + 4px)'
		}
	}
});
