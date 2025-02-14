export function getAskFollowupQuestionDescription(): string {
	return `## ask_followup_question
Ask a question to gather additional information.
- **Parameters:** "question" (required)
- **Usage:**  
  <ask_followup_question>
    <question>question here</question>
  </ask_followup_question>
- **Example:**  
  <ask_followup_question>
    <question>Path to frontend-config.json?</question>
  </ask_followup_question>`
}
