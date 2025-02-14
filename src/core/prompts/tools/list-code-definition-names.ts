import { ToolArgs } from "./types"

export function getListCodeDefinitionNamesDescription(args: ToolArgs): string {
	return `## list_code_definition_names
List top-level code definitions in a directory.
- **Parameters:** "path" (required) (relative to the cwd ${args.cwd})
- **Usage:**  
  <list_code_definition_names>
    <path>.</path>
  </list_code_definition_names>`
}
