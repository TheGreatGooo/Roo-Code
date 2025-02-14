export function getAttemptCompletionDescription(): string {
	return `## attempt_completion
Present the final result after completing the task.
- **Parameters:** "result" (required), "command" (optional)
- **Usage:**  
  <attempt_completion>
    <result>Your result here</result>
    <command>optional command</command>
  </attempt_completion>
- **Example:**  
  <attempt_completion>
    <result>CSS updated</result>
    <command>open index.html</command>
  </attempt_completion>`
}
