import { ToolArgs } from "./types"

export function getNewTaskDescription(args: ToolArgs): string {
	return `## new_task
Create a new task.
- **Parameters:** "mode" (required)(e.g., "code", "ask", "architect"), "message" (required)
- **Example:**  
  <new_task>
    <mode>code</mode>
    <message>Implement feature</message>
  </new_task>
`
}
