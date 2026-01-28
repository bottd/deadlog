import js from '@eslint/js';
import ts from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteConfig from './app/svelte.config.js';

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
	...eslintPluginSvelte.configs['flat/recommended'],
	...eslintPluginSvelte.configs['flat/prettier'],
	{
		files: ['**/*.svelte', '**/*.svelte.ts'],
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
		ignores: [
			'build/**',
			'node_modules/**',
			'.svelte-kit/**',
			'app/.svelte-kit/**',
			'package-lock.json',
			'app/vitest-setup-client.ts',
			'lib/*/vite.config.ts',
			'lib/*/tsconfig.json',
			'lib/*/project.json'
		]
	},
	eslintConfigPrettier
);
