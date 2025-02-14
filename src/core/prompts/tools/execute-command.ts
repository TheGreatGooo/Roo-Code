import { ToolArgs } from "./types"

export function getExecuteCommandDescription(args: ToolArgs): string | undefined {
	return `## execute_command
Execute a CLI command.
- **Parameters:** "command" (required)
- **Usage:**  
  <execute_command>
    <command>npm run dev</command>
  </execute_command>`
}
