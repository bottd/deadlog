import { defineConfig } from 'drizzle-kit';
import { z } from 'zod';

const envSchema = z.object({
	DATABASE_URL: z.string().min(1, 'DATABASE_URL is required')
});

const env = envSchema.parse({
	DATABASE_URL: process.env.DATABASE_URL
});

export default defineConfig({
	schema: './src/schema.ts',
	dialect: 'sqlite',
	dbCredentials: { url: env.DATABASE_URL },
	verbose: true,
	strict: true
});
