import js from '@eslint/js';
import ts from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteConfig from './app/svelte.config.js';
import embedSvelteConfig from './embed/svelte.config.js';

export default ts.config(
	js.configs.recommended,
	...ts.configs.strict,
	...ts.configs.stylistic,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.ts', '**/*.js', '**/*.mjs', '**/*.cjs'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte']
			}
		}
	},
	{
		files: ['**/cloudflare-worker.ts'],
		languageOptions: {
			parserOptions: {
				projectService: false,
				project: './app/tsconfig.worker.json',
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	...eslintPluginSvelte.configs['flat/recommended'],
	...eslintPluginSvelte.configs['flat/prettier'],
	{
		files: ['app/**/*.svelte', 'app/**/*.svelte.ts'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		},
		rules: {
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'svelte/no-navigation-without-resolve': 'off',
			'svelte/prefer-svelte-reactivity': 'off'
		}
	},
	{
		files: ['embed/**/*.svelte'],
		rules: { 'svelte/no-navigation-without-resolve': 'off' },
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig: embedSvelteConfig
			}
		}
	},
	{
		ignores: [
			'build/**',
			'node_modules/**',
			'.svelte-kit/**',
			'app/.svelte-kit/**',
			'mcp/.generated/**',
			'mcp/.wrangler/**',
			'mcp/dist/**',
			'embed/dist/**',
			'embed/test-results/**',
			'embed/playwright-report/**',
			'package-lock.json',
			'app/vitest-setup-client.ts',
			'app/e2e/**',
			'app/playwright.config.ts',
			'lib/*/vite.config.ts',
			'lib/*/tsconfig.json',
			'lib/*/project.json'
		]
	},
	eslintConfigPrettier
);
