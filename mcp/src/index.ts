import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import { createServer } from './server';
import { createD1PatchRepository } from '@deadlog/db/d1';

export default {
	async fetch(request: Request, env: { DB: D1Database }): Promise<Response> {
		const url = new URL(request.url);
		if (url.pathname === '/health' && request.method === 'GET')
			return Response.json({ status: 'ok' });
		if (url.pathname !== '/mcp') return new Response('Not found', { status: 404 });
		if (request.method !== 'POST')
			return new Response('Stateless endpoint accepts POST', {
				status: 405,
				headers: { Allow: 'POST' }
			});
		const origin = request.headers.get('origin');
		if (
			origin &&
			!['https://chatgpt.com', 'https://chat.openai.com', url.origin].includes(origin)
		)
			return new Response('Origin not allowed', { status: 403 });
		const server = createServer(createD1PatchRepository(env.DB));
		const transport = new WebStandardStreamableHTTPServerTransport({
			sessionIdGenerator: undefined,
			enableJsonResponse: true,
			maxRequestBodySize: 128 * 1024
		});
		try {
			await server.connect(transport);
			return await transport.handleRequest(request);
		} finally {
			await server.close();
		}
	}
};
