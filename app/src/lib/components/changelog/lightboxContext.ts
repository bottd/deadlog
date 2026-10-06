import { createContext } from 'svelte';

export interface LightboxImage {
	src: string;
	alt: string;
}

export const [getLightbox, setLightbox] =
	createContext<(images: LightboxImage[], index: number) => void>();
