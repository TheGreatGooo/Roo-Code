import { ToolArgs } from "./types"

export function getSearchAndReplaceDescription(args: ToolArgs): string {
	return `## search_and_replace
Perform search and replace in a file.
- **Parameters:** "path" (required)(relative to the cwd ${args.cwd.toPosix()}), "operations" (required: array of "search" terms, replace, start_line, end_line, use_regex, ignore_case, regex_flags)
- **Example:**  
  <search_and_replace>
    <path>example.ts</path>
    <operations>[{search:"foo", replace:"bar"}]</operations>
  </search_and_replace>`
}
