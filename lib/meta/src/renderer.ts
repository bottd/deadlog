import { Renderer } from '@takumi-rs/core';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

export const renderer = new Renderer({});

const FONT_DIR = resolve(import.meta.dirname, '../../../app/static/fonts');

const FACES = [
	// The variable Archivo names itself "Archivo SemiBold"; register it as `Archivo`.
	{
		file: 'Archivo-VariableFont_wdth,wght.woff2',
		name: 'Archivo',
		generic: 'sans-serif'
	},
	{ file: 'Oswald-VariableFont_wght.woff2', name: 'Oswald', generic: 'sans-serif' },
	{
		file: 'JetBrainsMono-VariableFont_wght.woff2',
		name: 'JetBrains Mono',
		generic: 'monospace'
	}
] as const;

async function registerFonts(): Promise<void> {
	await Promise.all(
		FACES.map(async (face) => {
			try {
				await renderer.registerFont({
					name: face.name,
					data: await readFile(resolve(FONT_DIR, face.file)),
					generic: face.generic
				});
			} catch (error) {
				throw new Error(`Failed to register ${face.name} from ${face.file}`, {
					cause: error
				});
			}
		})
	);
}

export const fontsReady: Promise<void> = registerFonts();

// Attach a handler now: nothing awaits this until the first render, and an unhandled
// rejection would exit the process before the error is reported.
void fontsReady.catch((error: unknown) => error);

export async function fetchImageAsDataUri(url: string): Promise<string> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.warn(`Failed to fetch image: ${url} (${response.status})`);
			return '';
		}
		const arrayBuffer = await response.arrayBuffer();
		const base64 = Buffer.from(arrayBuffer).toString('base64');
		const contentType = response.headers.get('content-type') || 'image/png';
		return `data:${contentType};base64,${base64}`;
	} catch (error) {
		console.error(`Error fetching image ${url}:`, error);
		return '';
	}
}
