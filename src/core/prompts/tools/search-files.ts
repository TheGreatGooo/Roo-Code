import { ToolArgs } from "./types"

export function getSearchFilesDescription(args: ToolArgs): string {
	return `## search_files
Search files with regex.
- **Parameters:** "path" (required)(relative to the cwd ${args.cwd}), "regex" (required)(Rust regex syntax), "file_pattern" (optional)
- **Example:**  
  <search_files>
    <path>.</path>
    <regex>.*</regex>
    <file_pattern>*.ts</file_pattern>
  </search_files>`
}
