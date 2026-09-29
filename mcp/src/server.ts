import { z } from 'zod';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import {
	registerAppTool,
	registerAppResource,
	RESOURCE_MIME_TYPE
} from '@modelcontextprotocol/ext-apps/server';
import { PatchSelectorSchema, PatchResultSchema } from '@deadlog/contracts';
import { getPatch, toolPayload, type PatchRepository } from '@deadlog/core';
import { resources, resourceUri } from '../.generated/resource';

export const TOOL_NAME = 'deadlog_get_patch';
const description =
	'Read an attributed Deadlock game patch from the fixture-only Deadlog developer preview. Select exactly one patchId or latest:true. Latest is latest in this preview dataset, not the complete archive. Publication time does not establish an exact gameplay cohort.';
const annotations = { readOnlyHint: true, destructiveHint: false, openWorldHint: false };

export function createServer(repository: PatchRepository) {
	const server = new McpServer({ name: 'deadlog-mcp-preview', version: '0.1.0' });
	const toolMeta = { ui: { resourceUri }, 'ui/resourceUri': resourceUri };
	const resourceMeta = { ui: { csp: { connectDomains: [], resourceDomains: [] } } };
	for (const [index, resource] of resources.entries())
		registerAppResource(
			server,
			index === 0
				? 'Deadlog patch evidence'
				: `Deadlog patch evidence (retained ${index})`,
			resource.uri,
			{
				description: 'Inspectable patch evidence; fixture-only developer preview',
				_meta: resourceMeta
			},
			() => ({
				contents: [
					{
						uri: resource.uri,
						mimeType: RESOURCE_MIME_TYPE,
						text: resource.html,
						_meta: resourceMeta
					}
				]
			})
		);
	registerAppTool(
		server,
		TOOL_NAME,
		{ description, inputSchema: PatchSelectorSchema, annotations, _meta: toolMeta },
		async (selector) => {
			const started = Date.now();
			const result = await getPatch(repository, selector);
			console.log(
				JSON.stringify({
					event: 'tool_read',
					tool: TOOL_NAME,
					durationMs: Date.now() - started,
					outcome: result.status === 'success' ? 'success' : result.error.code
				})
			);
			return toolPayload(result);
		}
	);
	server.server.setRequestHandler(ListToolsRequestSchema, () => ({
		tools: [
			{
				name: TOOL_NAME,
				title: 'Deadlog patch evidence',
				description,
				annotations,
				_meta: toolMeta,
				inputSchema: { type: 'object' as const, ...z.toJSONSchema(PatchSelectorSchema) },
				outputSchema: { type: 'object' as const, ...z.toJSONSchema(PatchResultSchema) }
			}
		]
	}));
	return server;
}
