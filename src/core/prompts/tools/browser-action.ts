import { ToolArgs } from "./types"

export function getBrowserActionDescription(args: ToolArgs): string | undefined {
	if (!args.supportsComputerUse) {
		return undefined
	}
	return `## browser_action
Interact with a Puppeteer-controlled browser.
- **Parameters:** "action" (required: launch, click, type, scroll_down, scroll_up, close), "url", "coordinate", "text"
- **Example:**  
  <browser_action>
    <action>launch</action>
    <url>https://example.com</url>
  </browser_action>`
}
