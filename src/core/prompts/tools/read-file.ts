import { ToolArgs } from "./types"

export function getReadFileDescription(args: ToolArgs): string {
	return `## read_file
Read file contents.
- **Parameters:** "path" (required)
- **Example:**  
  <read_file>
    <path>frontend-config.json</path>
  </read_file>`
}
