import { ToolArgs } from "./types"

export function getListFilesDescription(args: ToolArgs): string {
	return `## list_files
List files in a directory.
- **Parameters:** "path" (required), "recursive" (optional: true/false)
- **Example:**  
  <list_files>
    <path>.</path>
    <recursive>false</recursive>
  </list_files>`
}
