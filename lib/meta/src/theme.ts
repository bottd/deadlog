export const Theme = {
	colors: {
		bg: '#0a0a0a',
		bgLight: '#1a1a1a',
		primary: '#c89b3c',
		primaryHover: '#d4a84e',
		textPrimary: '#ffffff',
		textSecondary: '#999999',
		textTertiary: '#666666'
	},
	size: {
		width: 1200,
		height: 630,
		padding: 60
	},
	font: {
		xs: '24px',
		sm: '26px',
		md: '28px',
		lg: '32px',
		xl: '36px',
		'2xl': '48px',
		'3xl': '56px',
		'4xl': '72px',
		'5xl': '80px'
	} as const,

	spacing: {
		xs: '8px',
		sm: '12px',
		md: '16px',
		lg: '24px',
		xl: '32px',
		xxl: '48px'
	} as const,
	borderRadius: {
		sm: '6px',
		md: '8px',
		lg: '24px',
		full: '50%'
	} as const
} as const;
