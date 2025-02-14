import { ToolArgs } from "./types"

export function getWriteToFileDescription(args: ToolArgs): string {
	return `## write_to_file
Write content to a file.
- **Parameters:** "path" (required), "content" (required), "line_count" (required)
- **Example:**  
  <write_to_file>
    <path>frontend-config.json</path>
    <content>{...}</content>
    <line_count>14</line_count>
  </write_to_file>`
}
