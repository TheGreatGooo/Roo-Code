import { ToolArgs } from "./types"

export function getUseMcpToolDescription(args: ToolArgs): string | undefined {
	if (!args.mcpHub) {
		return undefined
	}
	return `## use_mcp_tool
Use a tool from an MCP server.
- **Parameters:** "server_name" (required), "tool_name" (required), "arguments" (required)
- **Example:**  
  <use_mcp_tool>
    <server_name>weather-server</server_name>
    <tool_name>get_forecast</tool_name>
    <arguments>{"city":"SF","days":5}</arguments>
  </use_mcp_tool>`
}
