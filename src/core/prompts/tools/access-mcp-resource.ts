import { ToolArgs } from "./types"

export function getAccessMcpResourceDescription(args: ToolArgs): string | undefined {
	if (!args.mcpHub) {
		return undefined
	}
	return `## access_mcp_resource
Request access to a resource from an MCP server.
- **Parameters:** "server_name" (required), "uri" (required)
- **Usage:**  
  <access_mcp_resource>
    <server_name>name</server_name>
    <uri>uri</uri>
  </access_mcp_resource>
- **Example:**  
  <access_mcp_resource>
    <server_name>weather-server</server_name>
    <uri>weather://sf/current</uri>
  </access_mcp_resource>`
}
