export function getSwitchModeDescription(): string {
	return `## switch_mode
Description: Request to switch to a different mode. This tool allows modes to request switching to another mode when needed, such as switching to Code mode to make code changes. The user must approve the mode switch.
Parameters:
- mode_slug: (required) The slug of the mode to switch to (e.g., "code", "ask", "architect")
- reason: (optional) The reason for switching modes
Switch AI mode.
- **Parameters:** "mode_slug" (required), "reason" (optional)
- **Example:**  
  <switch_mode>
    <mode_slug>code</mode_slug>`
}
