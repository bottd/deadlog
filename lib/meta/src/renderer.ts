import { Renderer } from '@takumi-rs/core';

// Using Geist font (bundled by default in takumi)
export const renderer = new Renderer({});

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
